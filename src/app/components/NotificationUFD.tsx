import React, { useRef, useState, useCallback, useEffect } from "react";
import svgPaths from "@/imports/svg-lbgmqz9j81";
import { Badge } from "@/app/components/Badge";

export type NotificationIcon =
  | "recording"
  | "content-sharing"
  | "lobby"
  | "interpreter"
  | "background-noise";

export interface NotificationButton {
  label: string;
  onClick: () => void;
  variant: "outline" | "filled";
}

export interface NotificationAvatar {
  name: string;
  image?: string;
  trustBadge?: "unverified" | "suspected";
  count?: number;
}

/** The full Teams 2 "UFD card" config (Figma 1085:303) — every part optional, used as subsets. */
export interface NotificationConfig {
  icon: NotificationIcon;
  heading?: string; // Callout-2 bold 15/20
  body?: string; // Caption-1 12/16 (lobby card has none)
  avatar?: NotificationAvatar; // expanded only
  rightCta?: { label: string; onClick: () => void }; // inline button-2
  dismiss?: boolean; // Fluent Dismiss ✕
  buttons?: NotificationButton[]; // up to 2, full-width row (expanded only)
}

interface NotificationUFDProps extends NotificationConfig {
  onDismiss: () => void;
  hasStack?: boolean;
  stackCount?: number;
  nextNotification?: NotificationConfig; // collapsed subset of the next card
  onExpandChange?: (expanded: boolean) => void; // pause/resume the MeetingPage auto-dismiss timer
}

// Fluent "People Team" glyph (Figma 953:19162) — lobby icon. viewBox 0 0 20 18.
const PEOPLE_TEAM_PATH =
  "M12.754 7C13.7205 7 14.504 7.7835 14.504 8.75V13.499C14.504 15.9848 12.4888 18 10.003 18C7.51712 18 5.50193 15.9848 5.50193 13.499V8.75C5.50193 7.7835 6.28543 7 7.25193 7H12.754ZM12.754 8.5H7.25193C7.11386 8.5 7.00193 8.61193 7.00193 8.75V13.499C7.00193 15.1564 8.34554 16.5 10.003 16.5C11.6604 16.5 13.004 15.1564 13.004 13.499V8.75C13.004 8.61193 12.8921 8.5 12.754 8.5ZM1.75 7L5.13128 6.99906C4.78791 7.41447 4.56424 7.93246 4.51312 8.50019L1.75 8.5C1.61193 8.5 1.5 8.61193 1.5 8.75V11.9988C1.5 13.3802 2.61984 14.5 4.00124 14.5C4.20123 14.5 4.39574 14.4765 4.58216 14.4322C4.66687 14.9361 4.82156 15.4167 5.03487 15.864C4.70577 15.953 4.35899 16 4.00124 16C1.79142 16 0 14.2086 0 11.9988V8.75C0 7.7835 0.783502 7 1.75 7ZM14.8747 6.99906L18.25 7C19.2165 7 20 7.7835 20 8.75V12C20 14.2091 18.2091 16 16 16C15.6436 16 15.298 15.9534 14.9691 15.8659C15.184 15.4177 15.3388 14.9371 15.425 14.4331C15.6092 14.477 15.8019 14.5 16 14.5C17.3807 14.5 18.5 13.3807 18.5 12V8.75C18.5 8.61193 18.3881 8.5 18.25 8.5L15.4928 8.50019C15.4417 7.93246 15.218 7.41447 14.8747 6.99906ZM10 0C11.6569 0 13 1.34315 13 3C13 4.65685 11.6569 6 10 6C8.34315 6 7 4.65685 7 3C7 1.34315 8.34315 0 10 0ZM16.5 1C17.8807 1 19 2.11929 19 3.5C19 4.88071 17.8807 6 16.5 6C15.1193 6 14 4.88071 14 3.5C14 2.11929 15.1193 1 16.5 1ZM3.5 1C4.88071 1 6 2.11929 6 3.5C6 4.88071 4.88071 6 3.5 6C2.11929 6 1 4.88071 1 3.5C1 2.11929 2.11929 1 3.5 1ZM10 1.5C9.17157 1.5 8.5 2.17157 8.5 3C8.5 3.82843 9.17157 4.5 10 4.5C10.8284 4.5 11.5 3.82843 11.5 3C11.5 2.17157 10.8284 1.5 10 1.5ZM16.5 2.5C15.9477 2.5 15.5 2.94772 15.5 3.5C15.5 4.05228 15.9477 4.5 16.5 4.5C17.0523 4.5 17.5 4.05228 17.5 3.5C17.5 2.94772 17.0523 2.5 16.5 2.5ZM3.5 2.5C2.94772 2.5 2.5 2.94772 2.5 3.5C2.5 4.05228 2.94772 4.5 3.5 4.5C4.05228 4.5 4.5 4.05228 4.5 3.5C4.5 2.94772 4.05228 2.5 3.5 2.5Z";

// Per-icon glyph (path + viewBox). Rendered with currentColor so the parent's
// text-fy27-* class drives the colour (var() does not work in SVG fill).
const GLYPHS: Record<NotificationIcon, { d: string; vb: string }> = {
  recording: { d: svgPaths.p3e114300, vb: "0 0 24 24" },
  "content-sharing": { d: svgPaths.p2ca1be00, vb: "0 0 23.514 23.514" },
  lobby: { d: PEOPLE_TEAM_PATH, vb: "0 0 20 18" },
  interpreter: { d: svgPaths.p26e0c200, vb: "0 0 23.757 23.514" },
  "background-noise": { d: svgPaths.p1fb43b00, vb: "0 0 23.514 23.514" },
};

function NotificationGlyph({ icon }: { icon: NotificationIcon }) {
  const g = GLYPHS[icon];
  const color = icon === "recording" ? "text-fy27-icon-mention" : "text-fy27-icon-primary";
  return (
    <span className={`shrink-0 grid place-items-center size-[24px] ${color}`}>
      <svg className="size-[20px]" fill="currentColor" preserveAspectRatio="xMidYMid meet" viewBox={g.vb}>
        <path d={g.d} />
      </svg>
    </span>
  );
}

function DismissButton({ onDismiss }: { onDismiss: () => void }) {
  return (
    <button
      onClick={onDismiss}
      aria-label="Dismiss"
      className="shrink-0 grid place-items-center size-[44px] -m-[12px] text-fy27-icon-primary active:opacity-60 transition-opacity"
    >
      <svg className="size-[20px]" fill="currentColor" viewBox="0 0 20 20">
        <path d={svgPaths.p31168500} />
      </svg>
    </button>
  );
}

function GearButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick?.(); }}
      aria-label="Settings"
      className="shrink-0 grid place-items-center size-[44px] -m-[12px] text-fy27-icon-primary active:opacity-60 transition-opacity"
    >
      <svg className="size-[20px]" fill="currentColor" viewBox="0 0 23.514 23.514">
        <path d={svgPaths.p39e15300} />
      </svg>
    </button>
  );
}

/** Inline right CTA (text button-2) or, for interpreter, the gear icon. */
function RightAction({ icon, rightCta }: { icon: NotificationIcon; rightCta?: NotificationConfig["rightCta"] }) {
  if (icon === "interpreter") return <GearButton onClick={rightCta?.onClick} />;
  if (!rightCta) return null;
  return (
    <button
      onClick={(e) => { e.stopPropagation(); rightCta.onClick(); }}
      className="shrink-0 text-fy27-text-interactive text-[13px] leading-[18px] tracking-[-0.08px] font-medium whitespace-nowrap active:opacity-60 transition-opacity"
      style={{ fontFamily: "var(--font-sf-pro)" }}
    >
      {rightCta.label}
    </button>
  );
}

/**
 * Collapsed card — uniform fixed height (78px). Shows a subset: icon + heading
 * (1 line) + one secondary line (body, else avatar name) truncated to 1 line +
 * inline action / dismiss. Used by the active card AND the behind-card preview.
 */
function CollapsedCard({
  icon,
  heading,
  body,
  avatar,
  rightCta,
  dismiss,
  onDismiss,
}: NotificationConfig & { onDismiss?: () => void }) {
  const secondary = body ?? avatar?.name;
  return (
    <div className="flex items-center gap-[12px] h-full w-full">
      <NotificationGlyph icon={icon} />
      <div className="flex-1 min-w-0 flex flex-col justify-center" style={{ fontFamily: "var(--font-sf-pro)" }}>
        {heading && (
          <p className="text-fy27-text-primary text-[15px] leading-[20px] tracking-[-0.24px] font-bold truncate">
            {heading}
          </p>
        )}
        {secondary && (
          <p
            className="text-fy27-text-primary text-[12px] leading-[16px] overflow-hidden"
            style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}
          >
            {secondary}
          </p>
        )}
      </div>
      <div className="shrink-0 flex items-center gap-[8px]">
        <RightAction icon={icon} rightCta={rightCta} />
        {dismiss && onDismiss && <DismissButton onDismiss={onDismiss} />}
      </div>
    </div>
  );
}

/** Expanded card — natural height: heading → avatar row → body → action buttons. */
function ExpandedCard({
  icon,
  heading,
  body,
  avatar,
  rightCta,
  dismiss,
  buttons,
  onDismiss,
}: NotificationConfig & { onDismiss: () => void }) {
  return (
    <div
      className="bg-fy27-surface-raisedfill-alpha rounded-[12px] p-[16px] flex flex-col gap-[8px] w-full"
      style={{
        fontFamily: "var(--font-sf-pro)",
        animation: "ufd-expand-in 0.18s ease-out",
      }}
    >
      {/* Title row: icon + heading + inline action + dismiss */}
      <div className="flex items-center gap-[8px] w-full">
        <NotificationGlyph icon={icon} />
        <div className="flex-1 min-w-0">
          {heading && (
            <p className="text-fy27-text-primary text-[15px] leading-[20px] tracking-[-0.24px] font-bold">
              {heading}
            </p>
          )}
        </div>
        <RightAction icon={icon} rightCta={rightCta} />
        {dismiss && <DismissButton onDismiss={onDismiss} />}
      </div>

      {/* Avatar row: name + trust badge + count */}
      {avatar && (
        <div className="flex items-center gap-[8px] w-full pr-[12px]">
          {avatar.image && (
            <img src={avatar.image} alt="" className="shrink-0 size-[32px] rounded-[9px] object-cover" />
          )}
          <span className="text-fy27-text-primary text-[15px] leading-[20px] tracking-[-0.08px] whitespace-nowrap">
            {avatar.name}
          </span>
          {avatar.trustBadge && <Badge variant={avatar.trustBadge} />}
          {avatar.count != null && (
            <span className="ml-auto text-fy27-text-interactive text-[15px] leading-[20px] tracking-[-0.08px] font-bold whitespace-nowrap">
              +{avatar.count}
            </span>
          )}
        </div>
      )}

      {/* Body */}
      {body && (
        <p
          className="text-fy27-text-primary text-[12px] leading-[16px] overflow-hidden"
          style={{ maxHeight: "48px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
        >
          {body}
        </p>
      )}

      {/* Full-width action buttons */}
      {buttons && buttons.length > 0 && (
        <div className="flex gap-[8px] w-full">
          {buttons.map((b, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); b.onClick(); }}
              className={`flex-1 h-[28px] rounded-[4px] flex items-center justify-center text-[13px] leading-[18px] tracking-[-0.08px] font-medium active:opacity-60 transition-opacity ${
                b.variant === "filled"
                  ? "bg-fy27-brand text-fy27-text-on-accent"
                  : "border border-fy27-brand text-fy27-text-interactive"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function NotificationUFD({
  icon,
  heading,
  body,
  avatar,
  rightCta,
  dismiss,
  buttons,
  onDismiss,
  hasStack = false,
  stackCount = 0,
  nextNotification,
  onExpandChange,
}: NotificationUFDProps) {
  const config: NotificationConfig = { icon, heading, body, avatar, rightCta, dismiss, buttons };

  // ── Swipe-to-dismiss / tap-to-expand state ──
  const startXRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [isDismissing, setIsDismissing] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const SWIPE_THRESHOLD = 80;
  const TAP_SLOP = 10;

  useEffect(() => {
    if (!isSnapping) return;
    const t = setTimeout(() => setIsSnapping(false), 300);
    return () => clearTimeout(t);
  }, [isSnapping]);

  const setExpandedAndNotify = useCallback(
    (next: boolean) => {
      setExpanded(next);
      onExpandChange?.(next);
    },
    [onExpandChange],
  );

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) return;
    setIsDragging(true);
    setIsSnapping(false);
    startXRef.current = e.clientX;
    setTranslateX(0);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    setTranslateX(e.clientX - startXRef.current);
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(translateX) >= SWIPE_THRESHOLD) {
      // Swipe → animate off-screen then dismiss
      const direction = translateX > 0 ? 1 : -1;
      setTranslateX(direction * 400);
      setIsDismissing(true);
      setTimeout(() => onDismiss(), 200);
    } else if (Math.abs(translateX) < TAP_SLOP) {
      // Tap → expand
      setTranslateX(0);
      setExpandedAndNotify(true);
    } else {
      // Partial drag → snap back with bounce
      setTranslateX(0);
      setIsSnapping(true);
    }
  }, [isDragging, translateX, onDismiss, setExpandedAndNotify]);

  const handlePointerCancel = useCallback(() => {
    setIsDragging(false);
    setTranslateX(0);
  }, []);

  const collapse = useCallback(() => setExpandedAndNotify(false), [setExpandedAndNotify]);
  const handleExpandedDismiss = useCallback(() => { collapse(); onDismiss(); }, [collapse, onDismiss]);

  // Opacity fades as the card is swiped further — fully gone at ~150px
  const swipeOpacity = isDismissing ? 0 : Math.max(0, 1 - Math.abs(translateX) / 150);

  // ── Stack peek-reveal interpolation (drives the behind-card on swipe) ──
  const swipeProgress = Math.min(1, Math.abs(translateX) / SWIPE_THRESHOLD);
  const stackScale = 0.95 + swipeProgress * 0.05;
  const stackTranslateY = 8 - swipeProgress * 8;
  // Behind-card recess: same fill as the front card, rendered ~8% darker at rest
  // so the stack reads as layered (works in both themes); brightens to match the
  // front as it rises on swipe.
  const stackBrightness = 0.92 + swipeProgress * 0.08;

  return (
    <div
      className="relative flex flex-col items-center w-full px-[16px]"
      style={{ height: "72px", justifyContent: hasStack ? "flex-start" : "center", overflow: expanded ? "visible" : "hidden" }}
    >
      {/* Behind-card — recessed light surface peeking below; rises + brightens on swipe */}
      {hasStack && (
        <div
          className="absolute rounded-[12px] overflow-hidden pointer-events-none bg-fy27-surface-raisedfill-alpha"
          style={{
            width: "calc(100% - 32px)",
            height: "64px",
            left: "50%",
            top: "0px",
            transform: `translateX(-50%) scale(${stackScale}) translateY(${stackTranslateY}px)`,
            transformOrigin: "center top",
            filter: `brightness(${stackBrightness})`,
            padding: nextNotification ? "12px 16px" : undefined,
            transition: isDragging ? "none" : "transform 0.25s ease-out, filter 0.25s ease-out",
          }}
        >
          {nextNotification && <CollapsedCard {...nextNotification} />}
        </div>
      )}

      {/* Active (collapsed) card — swipeable + tappable */}
      <div
        className="bg-fy27-surface-raisedfill-alpha relative rounded-[12px] shrink-0 w-full z-10 touch-pan-y"
        style={{
          height: "64px",
          padding: "12px 16px",
          transform: `translateX(${translateX}px)`,
          opacity: expanded ? 0 : swipeOpacity,
          transition: isDragging ? "none" : "transform 0.2s ease-out, opacity 0.2s ease-out",
          cursor: "grab",
          animation: isSnapping ? "ufd-snap-bounce 0.3s ease-out" : "ufd-promote 0.25s ease-out",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >

        {/* "+N" stacked badge */}
        {hasStack && stackCount > 0 && (
          <div
            className="absolute flex items-center justify-center rounded-[80px] bg-fy27-brand"
            style={{ top: "5px", left: "5px", height: "12.8px", minWidth: "12.8px", paddingLeft: "4.8px", paddingRight: "4.8px", zIndex: 20 }}
          >
            <span className="text-fy27-text-on-accent" style={{ fontFamily: "var(--font-sf-pro)", fontSize: "8.8px", fontWeight: 600, lineHeight: "12.8px", letterSpacing: "0.048px" }}>
              +{stackCount}
            </span>
          </div>
        )}

        <CollapsedCard {...config} onDismiss={onDismiss} />
      </div>

      {/* Expanded overlay — anchored to the stack top (top-0 of this slot), so it
          grows from wherever the collapsed stack sits (header shown OR hidden).
          The slot's overflow opens to visible while expanded so it isn't clipped;
          absolute (z-40) keeps it out of layout → the stage is never displaced.
          The scrim is fixed + frame-constrained to catch tap-away. */}
      {expanded && (
        <>
          {/* Tap-away catcher — transparent so the frosted card frosts the SAME
              backdrop (meeting stage) it does when collapsed; a tint here would
              darken the translucent card and make expanded look a different colour. */}
          <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-30" onClick={collapse} />
          <div className="absolute top-0 inset-x-0 z-40 px-[16px]">
            <ExpandedCard {...config} onDismiss={handleExpandedDismiss} />
          </div>
        </>
      )}

      <style>{`
        @keyframes ufd-snap-bounce {
          0%   { transform: translateX(0) scale(1); }
          40%  { transform: translateX(0) scale(1.03); }
          70%  { transform: translateX(0) scale(0.99); }
          100% { transform: translateX(0) scale(1); }
        }
        @keyframes ufd-promote {
          0%   { transform: scale(0.95) translateY(10px); opacity: 0.85; }
          100% { transform: scale(1)    translateY(0);   opacity: 1; }
        }
        @keyframes ufd-expand-in {
          0%   { transform: translateY(-4px); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}
