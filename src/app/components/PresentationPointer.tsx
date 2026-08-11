import { useEffect, useRef } from "react";

/**
 * Presentation pointer — a translucent circle that follows touch/click + drag,
 * giving screen-share viewers a visible cue for where you're interacting.
 * During a drag it leaves a comet streak so the motion reads clearly (a drag
 * looks distinct from a tap), and the streak vanishes when you hold still.
 *
 * Tracking is driven by touch/mouse events, NOT pointer events: the browser
 * fires `pointercancel` and stops `pointermove` the instant a touch becomes a
 * scroll/pan, whereas `touchmove` keeps flowing — so the cue follows the finger
 * straight through swipes and scrolls.
 *
 * FEATURE FLAG: keep this `false` in source. Flip to `true` only during demos
 * (the dev server hot-reloads instantly). When `false`, nothing renders and no
 * listeners are attached — zero runtime cost.
 */
export const POINTER_ENABLED = false;

// Tap-target sized (Apple HIG minimum is 44px).
const SIZE = 44;
// How hard the streak's tail lags behind the head (0–1; lower = longer comet).
const TAIL_EASE = 0.28;
// Window after a touch during which synthetic mouse events are ignored.
const SYNTH_MOUSE_MS = 700;

function PointerLayer() {
  const dotRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const streakRef = useRef<HTMLDivElement>(null);
  const pressed = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const core = coreRef.current;
    const ripple = rippleRef.current;
    const streak = streakRef.current;
    if (!dot || !core || !ripple || !streak) return;

    // Head = live pointer position (the orb sits here). Tail = an eased point
    // that lags behind, so the streak between them grows with drag speed.
    let hx = 0;
    let hy = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;
    let lastTouch = 0; // timestamp, to suppress synthetic mouse-after-touch

    // Place the orb on the pointer via GPU-composited transform. Writing the
    // transform directly (no React state) is what keeps the head lag-free.
    const moveHead = (x: number, y: number) => {
      hx = x;
      hy = y;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    // The comet body, recomputed each frame from the tail→head vector.
    const tick = () => {
      tx += (hx - tx) * TAIL_EASE;
      ty += (hy - ty) * TAIL_EASE;
      const dx = hx - tx;
      const dy = hy - ty;
      const dist = Math.hypot(dx, dy);
      const ang = (Math.atan2(dy, dx) * 180) / Math.PI;
      streak.style.width = `${dist}px`;
      streak.style.opacity = pressed.current
        ? `${Math.min(dist / 36, 1) * 0.55}`
        : "0";
      streak.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(0, -50%) rotate(${ang}deg)`;

      // Keep animating while pressed, or until the tail catches the head.
      if (pressed.current || dist > 0.5) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const startRaf = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const begin = (x: number, y: number) => {
      pressed.current = true;
      // Snap the tail to the press point so no streak whips in from the last spot.
      tx = x;
      ty = y;
      moveHead(x, y);

      // Appear instantly — no fade-in transition on the way up.
      dot.style.transition = "none";
      dot.style.opacity = "1";

      // "Land" pop with a touch of overshoot — animates the core's OWN transform,
      // independent of the wrapper's follow-translate, so a fast drag-start can't
      // fight it. The slight >1 bump makes the tap feel physical, not mechanical.
      core.animate(
        [
          { transform: "scale(0.5)" },
          { transform: "scale(1.08)" },
          { transform: "scale(1)" },
        ],
        { duration: 220, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
      );

      // Expanding ring, retriggered on every press.
      ripple.animate(
        [
          { transform: "scale(0.45)", opacity: 0.7 },
          { transform: "scale(2.3)", opacity: 0 },
        ],
        { duration: 560, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
      );

      startRaf();
    };

    const end = () => {
      if (!pressed.current) return;
      pressed.current = false;
      // Lift-off: the core scales up slightly as the whole cue fades — reads as
      // the finger leaving the glass rather than the cue blinking out.
      core.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.25)" }],
        { duration: 240, easing: "cubic-bezier(0.4, 0, 0.2, 1)" },
      );
      dot.style.transition = "opacity 240ms ease-out";
      dot.style.opacity = "0";
      streak.style.opacity = "0";
    };

    // --- Touch: the reliable stream on phones (survives scroll/pan) ---
    const onTouchStart = (e: TouchEvent) => {
      lastTouch = Date.now();
      const t = e.touches[0];
      if (t) begin(t.clientX, t.clientY);
    };
    const onTouchMove = (e: TouchEvent) => {
      lastTouch = Date.now();
      if (!pressed.current) return;
      const t = e.touches[0];
      if (!t) return;
      moveHead(t.clientX, t.clientY);
      startRaf();
    };
    const onTouchEnd = (e: TouchEvent) => {
      lastTouch = Date.now();
      if (e.touches.length === 0) end(); // last finger up
    };

    // --- Mouse: desktop. Guarded so touch's synthetic mouse events don't double-fire. ---
    const isSynthetic = () => Date.now() - lastTouch < SYNTH_MOUSE_MS;
    const onMouseDown = (e: MouseEvent) => {
      if (isSynthetic()) return;
      begin(e.clientX, e.clientY);
    };
    const onMouseMove = (e: MouseEvent) => {
      if (isSynthetic() || !pressed.current) return;
      moveHead(e.clientX, e.clientY);
      startRaf();
    };
    const onMouseUp = () => {
      if (isSynthetic()) return;
      end();
    };

    // Capture phase: fires window→down BEFORE any child handler can
    // stopPropagation() (SwipeableViews, drag handles, panels all do), so the
    // cue tracks presses everywhere, even on interactive controls.
    const opts = { capture: true, passive: true } as const;
    window.addEventListener("touchstart", onTouchStart, opts);
    window.addEventListener("touchmove", onTouchMove, opts);
    window.addEventListener("touchend", onTouchEnd, opts);
    window.addEventListener("touchcancel", onTouchEnd, opts);
    window.addEventListener("mousedown", onMouseDown, opts);
    window.addEventListener("mousemove", onMouseMove, opts);
    window.addEventListener("mouseup", onMouseUp, opts);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("touchstart", onTouchStart, opts);
      window.removeEventListener("touchmove", onTouchMove, opts);
      window.removeEventListener("touchend", onTouchEnd, opts);
      window.removeEventListener("touchcancel", onTouchEnd, opts);
      window.removeEventListener("mousedown", onMouseDown, opts);
      window.removeEventListener("mousemove", onMouseMove, opts);
      window.removeEventListener("mouseup", onMouseUp, opts);
    };
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none", // never intercept the real taps underneath
        zIndex: 2147483646,
        overflow: "hidden",
      }}
    >
      {/* Comet streak — a tapering trail drawn from the eased tail to the head.
          Width/opacity are 0 when stationary, so a tap shows no trail; a drag
          stretches it out, making the motion obvious. Sits behind the orb. */}
      <div
        ref={streakRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 18,
          width: 0,
          opacity: 0,
          transformOrigin: "left center",
          borderRadius: "9999px",
          background:
            "linear-gradient(to right, rgba(255, 178, 44, 0), rgba(255, 196, 88, 0.9))",
          willChange: "transform, width, opacity",
        }}
      />

      {/* The moving group: core circle + ripple, both centered on (0,0). */}
      <div
        ref={dotRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: SIZE,
          height: SIZE,
          opacity: 0,
          willChange: "transform, opacity",
        }}
      >
        {/* Expanding ripple ring (animated on press). Amber with a dark-edged
            stroke so the ring stays visible as it crosses any background. */}
        <div
          ref={rippleRef}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "9999px",
            border: "2.5px solid rgba(255, 199, 92, 0.95)",
            boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.4)",
            opacity: 0,
            willChange: "transform, opacity",
          }}
        />
        {/* Core orb — a warm "presenter spotlight" that reads as an annotation,
            not UI chrome (and is maximally distinct from Teams' purple/blue).
            The DUAL-CONTRAST ring is the legibility guarantee: a bright inner
            ring + a dark outer halo means there's always a hard edge against
            the background, plus a warm glow that survives screen-share
            compression on the black meeting stage. */}
        <div
          ref={coreRef}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "9999px",
            background:
              "radial-gradient(circle at 50% 42%, rgba(255, 214, 130, 0.52), rgba(255, 176, 58, 0.30) 70%)",
            border: "2px solid rgba(255, 255, 255, 0.95)",
            boxShadow: [
              "0 0 0 3px rgba(0, 0, 0, 0.42)", // dark halo → pops on light bg
              "0 0 16px 3px rgba(255, 178, 44, 0.6)", // warm glow → pops on dark bg
              "0 4px 12px rgba(0, 0, 0, 0.35)", // depth
            ].join(", "),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Precision dot — marks the exact pixel under the finger so viewers
              see precisely where the tap landed, not just the ~44px orb. */}
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "9999px",
              background: "rgba(255, 255, 255, 0.98)",
              boxShadow: "0 0 0 1.5px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function PresentationPointer() {
  // Hold all listeners behind the flag so an OFF build attaches nothing.
  if (!POINTER_ENABLED) return null;
  return <PointerLayer />;
}
