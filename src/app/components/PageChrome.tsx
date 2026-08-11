import React, { useCallback, useRef } from "react";
// Same image used as the pre-join camera fallback (PreJoinPage `imgSelf`).
import imgYou from "@/assets/figma/account/udayan.jpg";
import { useDockUI } from "@/app/components/DockUIContext";
import { useProfileDrawer } from "@/app/components/profile/ProfileDrawerContext";

/**
 * Shared L0 page chrome — the Navigation Header, header icon button, filter
 * pill row, and list-row scaffold. Built to the exact Figma "Navigation
 * Header" (node 817:100961) and "Chat Item" (node 817:100717) geometry so
 * Chat / Activity / Calendar are pixel-identical.
 */

/**
 * Drag-to-toggle-the-dock gesture. Drag DOWN expands the dock, drag UP collapses
 * it (one commit per gesture, ~14px threshold). Spread the returned handlers
 * onto the draggable header region; add `touch-none` so it doesn't also scroll.
 * Shared by the L0 PageHeader and the DM header.
 */
export function useDockDrag() {
  const { setManualState } = useDockUI();
  const startYRef = useRef<number | null>(null);
  const latchedRef = useRef(false);
  const THRESHOLD = 14;

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    startYRef.current = e.clientY;
    latchedRef.current = false;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (startYRef.current === null || latchedRef.current) return;
      const delta = e.clientY - startYRef.current;
      if (Math.abs(delta) < THRESHOLD) return;
      latchedRef.current = true;
      setManualState(delta > 0 ? "expanded" : "collapsed");
    },
    [setManualState],
  );

  const onPointerEnd = useCallback(() => {
    startYRef.current = null;
    latchedRef.current = false;
  }, []);

  return { onPointerDown, onPointerMove, onPointerUp: onPointerEnd, onPointerCancel: onPointerEnd };
}

/* ─── Navigation Header (52px) ─── */
export function PageHeader({
  title,
  titleTrailing,
  actions,
}: {
  title: string;
  titleTrailing?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  const drag = useDockDrag();
  const { open: openProfile } = useProfileDrawer();

  return (
    // Top-aligned (per the Figma "Navigation Header" — the large title sits at
    // the top of the nav, not vertically centered) so the header hugs the top
    // of the white foreground card.
    <div className="shrink-0 px-[16px] pt-[20px] pb-[6px] flex items-start">
      {/* Left — Large title: avatar(40) + 8px gap + title. Doubles as the dock
          drag target. touch-none so the vertical gesture doesn't also scroll. */}
      <div className="flex-1 min-w-0 flex items-center gap-[8px] h-[40px] touch-none" {...drag}>
        {/* Avatar opens the profile/account drawer (a clean tap; the title to
            the right remains the dock drag handle). */}
        <button
          aria-label="Open profile"
          onClick={openProfile}
          onPointerDown={(e) => e.stopPropagation()}
          className="size-[40px] rounded-full shrink-0 overflow-hidden"
        >
          <img src={imgYou} alt="You" className="size-[40px] rounded-full object-cover" />
        </button>
        <h1
          className="text-[28px] text-fy27-text-primary whitespace-nowrap"
          style={{ fontWeight: 700, lineHeight: "34px", letterSpacing: "0.38px" }}
        >
          {title}
        </h1>
        {titleTrailing}
      </div>
      {/* Right — 40px tap targets, gap 8, flush 16px from the edge. NOT draggable
          so the icon buttons stay fully tappable. */}
      {actions && <div className="flex items-center gap-[8px] h-[40px] shrink-0">{actions}</div>}
    </div>
  );
}

/** 40px round header tap target wrapping a 24px icon. */
export function HeaderIconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="size-[40px] rounded-full flex items-center justify-center shrink-0"
    >
      {children}
    </button>
  );
}

/* ─── Filter pills (iOS Tabs) ─── */
export interface FilterPill {
  label: string;
  dot?: boolean;
  /** If set, this pill is interactive (others stay static). */
  onClick?: () => void;
}

export function FilterPills({
  items,
}: {
  items: FilterPill[];
  /** Reserved for when slices become interactive; ignored for now (static). */
  active?: string;
  onChange?: (label: string) => void;
}) {
  return (
    // Horizontal scroller — Figma "iOS Tabs": gap 8, row py 8, 16px leading
    // inset. A 16px trailing inset (pr-[16px]) guarantees the last pill is
    // never clipped and can scroll fully into view. Hidden scrollbar; touch
    // panning is locked to the X axis so the row never hijacks vertical page
    // scroll, and overscroll is contained so it doesn't bubble to the page.
    // The pills are STATIC (not clickable) for now — the row only scrolls.
    <div
      className="shrink-0 flex gap-[8px] px-[16px] py-[8px] overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x overscroll-x-contain"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {items.map((it, i) => {
        // Pill — Figma "Button - Content Area": h 32, rounded pill, bg #f5f5f5,
        // text #242424, caption-1 13/18 -0.08, ALL regular weight (400) — no
        // bold/medium selected state, no dot. Static unless the pill carries an
        // onClick (only Catchup, for now), in which case it's a button.
        const cls =
          "shrink-0 h-[32px] flex items-center justify-center px-[16px] rounded-full bg-fy27-surface-raised text-fy27-text-primary text-[13px] whitespace-nowrap select-none";
        const style = { fontWeight: 400, lineHeight: "18px", letterSpacing: "-0.08px" };
        return it.onClick ? (
          <button key={`${it.label}-${i}`} onClick={it.onClick} className={`${cls} active:bg-fy27-surface-base transition-colors`} style={style}>
            {it.label}
          </button>
        ) : (
          <div key={`${it.label}-${i}`} className={cls} style={style}>
            {it.label}
          </div>
        );
      })}
    </div>
  );
}

/**
 * List row scaffold — matches the Figma "Chat Item" geometry exactly:
 * avatar at 16px from the edge, 12px gap to the text column (text starts at
 * 80px), 12px top/bottom padding. The unread dot is ABSOLUTELY positioned at
 * 5px so it never displaces the avatar.
 */
export function ListRow({
  unread,
  avatar,
  onClick,
  children,
}: {
  unread?: boolean;
  avatar: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="relative w-full flex items-center gap-[12px] pl-[16px] pr-[16px] py-[12px] text-left active:bg-fy27-surface-raised transition-colors"
    >
      {unread && (
        <span className="absolute left-[5px] top-1/2 -translate-y-1/2 size-[6px] rounded-full bg-fy27-brand" />
      )}
      {avatar}
      <div className="flex-1 min-w-0">{children}</div>
    </button>
  );
}
