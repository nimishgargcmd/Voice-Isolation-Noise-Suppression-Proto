import React from "react";
import raisedHandEmoji from "@/assets/figma/badges/raised-hand.png";

/**
 * Teams 2 iOS badges, matched 1:1 to the FY27 Figma references.
 *
 * Three variants:
 *  - "raised-hands": count + Fluent "Raised back of hand" (1F91A) emoji pill
 *    (Figma zTUDsyC2gVxRBk3qgyqCiE · 1161:41619). Surface/Tertiary fill,
 *    px-8 / py-4, radius 4, Callout-1 (17/22, Bold) count, 24px emoji.
 *  - "unverified": person-question-mark glyph + "Unverified bot" — the neutral
 *    "Badge view (Teams 2 iOS)" shape (gap-2, px-4 / py-2, radius 4, Caption-2 11/11).
 *  - "suspected": Fluent Warning triangle + "Scam suspected" — same Badge view
 *    shape but Surface/Danger fill + Text/Danger text + icon/danger glyph
 *    (Figma zTUDsyC2gVxRBk3qgyqCiE · 1351:38193, inner node 1257:49908).
 */

/* ── Glyphs (inlined from Figma asset SVGs, currentColor) ────────────────── */

// Fluent "Warning" triangle-exclamation — Figma node ...547141:39 (viewBox 0 0 14 13)
function WarningGlyph() {
  return (
    <svg viewBox="0 0 14 13" className="block size-full" fill="currentColor" aria-hidden="true">
      <path d="M4.82 1.275c.956-1.7 3.404-1.7 4.36 0l4.496 8.004c.936 1.667-.269 3.725-2.18 3.725H2.503C.592 13.004-.612 10.946.324 9.28L4.82 1.275ZM7 8.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7 4a.5.5 0 0 0-.5.5V7a.5.5 0 1 0 1 0V4.5A.5.5 0 0 0 7 4Z" />
    </svg>
  );
}

// Fluent "PersonQuestionMark" — person with a question mark badge (viewBox 0 0 12 12)
function PersonQuestionGlyph() {
  return (
    <svg viewBox="0 0 12 12" className="block size-full" fill="currentColor" aria-hidden="true">
      <path d="M5 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM1 7.75C1 6.784 1.784 6 2.75 6h2.964a2.5 2.5 0 0 0-.66 1.5H2.75a.25.25 0 0 0-.25.25c0 .69.358 1.21.93 1.56.49.298 1.12.444 1.737.476a2.5 2.5 0 0 0 .69.81c-.353.06-.73.094-1.107.094-.83 0-1.69-.16-2.4-.595C1.61 9.622 1 8.85 1 7.75ZM9 6.5A2.5 2.5 0 1 0 9 11.5 2.5 2.5 0 0 0 9 6.5Zm-.02 1.1a.95.95 0 0 1 .53 1.74c-.18.12-.26.22-.26.41a.25.25 0 0 1-.5 0c0-.45.27-.68.49-.82a.45.45 0 1 0-.69-.38.25.25 0 0 1-.5 0 .95.95 0 0 1 .93-.95Zm.02 2.65a.3.3 0 1 1 0 .6.3.3 0 0 1 0-.6Z" />
    </svg>
  );
}

/* ── Variants ────────────────────────────────────────────────────────────── */

type BadgeVariant = "unverified" | "suspected";

const VARIANT: Record<
  BadgeVariant,
  { label: string; className: string; glyph: React.ReactNode }
> = {
  unverified: {
    label: "Unverified bot",
    className: "bg-fy27-surface-tertiary text-fy27-icon-secondary",
    glyph: <PersonQuestionGlyph />,
  },
  suspected: {
    label: "Scam suspected",
    className: "bg-fy27-surface-danger text-fy27-text-danger",
    glyph: <WarningGlyph />,
  },
};

/**
 * "Badge view (Teams 2 iOS)" — gap-2, px-4 / py-2, radius 4, Caption-2 (11/11),
 * a 10px-wide icon slot. Used for both the unverified and suspected badges.
 */
export function Badge({
  variant,
  label,
}: {
  variant: BadgeVariant;
  /** Override the default copy if needed. */
  label?: string;
}) {
  const v = VARIANT[variant];
  return (
    <span
      className={`inline-flex items-center justify-center gap-[2px] px-[4px] py-[2px] rounded-[4px] shrink-0 ${v.className}`}
      style={{ fontFamily: "var(--font-sf-pro)" }}
    >
      <span className="shrink-0 size-[12px] grid place-items-center">{v.glyph}</span>
      <span className="text-[11px] leading-[11px] tracking-[0.06px] whitespace-nowrap">
        {label ?? v.label}
      </span>
    </span>
  );
}

/**
 * Raised-hands pill — count + Fluent "Raised back of hand" (1F91A) emoji.
 * Surface/Tertiary fill, px-8 / py-4, radius 4, Callout-1 (17/22, Bold) count,
 * 24px emoji. Figma node 1161:41619.
 */
export function RaisedHandsBadge({ count }: { count: number }) {
  return (
    <span
      className="inline-flex items-center px-[8px] py-[4px] rounded-[4px] shrink-0 bg-fy27-surface-tertiary text-fy27-text-primary"
      style={{ fontFamily: "var(--font-sf-pro)" }}
    >
      <span className="text-[17px] leading-[22px] tracking-[-0.41px] font-bold whitespace-nowrap">
        {count}
      </span>
      <span className="grid place-items-center size-[24px] shrink-0">
        <img
          src={raisedHandEmoji}
          alt=""
          aria-hidden="true"
          className="size-[24px] object-contain pointer-events-none select-none"
        />
      </span>
    </span>
  );
}
