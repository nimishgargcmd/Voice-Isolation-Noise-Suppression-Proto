import { useEffect, useRef } from "react";
import { useDockUI } from "@/app/components/DockUIContext";
import { getLastDockState } from "@/app/lib/dockPersist";

// ── Collapse thresholds (position-based with a dead band) ────────────────────
// The dock collapses once the page is scrolled past COLLAPSE_AT, and only
// re-expands once the page is scrolled back above EXPAND_AT. The gap between
// the two is a hysteresis dead band: between EXPAND_AT and COLLAPSE_AT nothing
// changes, so the state is a pure function of an absolute scroll position with
// a buffer — it CANNOT oscillate.
//
// Why position-based (not direction-based): collapsing the dock changes the
// layout, which near the bottom of a list nudges scrollTop and fires more
// scroll events. A direction model reads those synthetic nudges as "scrolled
// up", re-expands, which nudges again → jitter. A position model is immune:
// near the bottom scrollTop stays well past COLLAPSE_AT, so the state never
// flips regardless of tiny layout-induced wobble.
const COLLAPSE_AT = 48;
const EXPAND_AT = 8;

/**
 * Wire a page's scroll container to the dock: the dock auto-collapses once the
 * page is scrolled down and restores when scrolled back to the top (principle
 * O4). Stable by construction — see the threshold note above.
 */
export function useDockScroll(ref: React.RefObject<HTMLElement | null>) {
  const { reportScroll } = useDockUI();
  const stateRef = useRef<"up" | "down">("up");
  const rafPending = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const evaluate = () => {
      const top = el.scrollTop;
      let next = stateRef.current;
      if (top <= EXPAND_AT) next = "up";
      else if (top >= COLLAPSE_AT) next = "down";
      // Between the two thresholds: keep the current state (dead band).
      if (next !== stateRef.current) {
        stateRef.current = next;
        reportScroll(next);
      }
    };

    // Sync to the container's starting position (tab switch / remount).
    stateRef.current = el.scrollTop >= COLLAPSE_AT ? "down" : "up";

    const onScroll = () => {
      if (rafPending.current) return;
      rafPending.current = true;
      requestAnimationFrame(() => {
        rafPending.current = false;
        evaluate();
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [ref, reportScroll]);
}

/**
 * One call for an L0 tab page: seeds the dock from its last carried state (so the
 * expanded/collapsed/minimized state carries over on navigation instead of
 * resetting to Expanded), then wires the page's scroll container for auto-collapse.
 * Scroll still drives collapse/expand afterward.
 */
export function useL0Dock(ref: React.RefObject<HTMLElement | null>) {
  const { setSurfaceDefault, reportScroll } = useDockUI();
  useEffect(() => {
    const last = getLastDockState();
    if (last === "minimized") {
      setSurfaceDefault("minimized");
    } else {
      setSurfaceDefault("expanded");
      // Carry a collapsed dock over via scrollDir, not manualState: a manual
      // override is wiped by the first reportScroll() (e.g. a list that mounts
      // already scrolled), whereas a "down" scrollDir survives and keeps the
      // dock collapsed until the page is scrolled back to the top.
      if (last === "collapsed") reportScroll("down");
    }
  }, [setSurfaceDefault, reportScroll]);
  useDockScroll(ref);
}
