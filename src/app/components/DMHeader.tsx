import React from "react";
import { CopilotLogo } from "@/app/components/icons/CopilotLogo";
import { useDockDrag } from "@/app/components/PageChrome";
import presenceDot from "@/assets/figma/dm/presence.svg";

/**
 * Light 1:1 DM header — copied from the Figma "Navigation Header" (879:27717):
 *   pl-16 · ‹back (Fluent chevron, 40px target) · gap-8 · avatar(32)+presence ·
 *   gap-6 · name (Body-1-Strong 17/590) over "Available" (Caption-2 12/#6e6e6e)
 *   right: call (Fluent handset) · gap-8 · Copilot(24) · pr-16
 *
 * The LEFT region doubles as the dock drag target (same as the L0 PageHeader):
 * spread `useDockDrag()` on a `touch-none` region so a vertical drag toggles the
 * dock instead of scrolling.
 */
export function DMHeader({
  name,
  avatar,
  presence,
  onBack,
}: {
  name: string;
  /** Rendered 32px avatar (photo or glyph) — same as the Chat list row. */
  avatar: React.ReactNode;
  presence?: boolean;
  onBack: () => void;
}) {
  const drag = useDockDrag();

  return (
    <div className="shrink-0 h-[62px] pt-[10px] flex items-center pl-[16px] pr-[16px] bg-fy27-surface">
      {/* Left region — back + avatar + name. Dock drag target (touch-none). */}
      <div className="flex-1 min-w-0 flex items-center gap-[8px] h-[40px] touch-none" {...drag}>
        <button
          type="button"
          aria-label="Back"
          onClick={onBack}
          className="size-[40px] shrink-0 rounded-full flex items-center justify-center"
        >
          <svg className="w-[9px] h-[16px] block" viewBox="0 0 8.75 16" fill="none" style={{ color: "var(--fy27-icon-primary)" }}>
            <path d="M8.53033 0.21967C8.82322 0.512563 8.82322 0.987437 8.53033 1.28033L1.81066 8L8.53033 14.7197C8.82322 15.0126 8.82322 15.4874 8.53033 15.7803C8.23744 16.0732 7.76256 16.0732 7.46967 15.7803L0.21967 8.53033C-0.0732233 8.23744 -0.0732232 7.76256 0.21967 7.46967L7.46967 0.21967C7.76256 -0.0732233 8.23744 -0.0732233 8.53033 0.21967Z" fill="currentColor" />
          </svg>
        </button>

        {/* Avatar(32) + presence(14) — avatar matches the Chat list row. */}
        <div className="relative shrink-0 size-[32px]">
          {avatar}
          {presence && <img src={presenceDot} alt="" className="absolute -bottom-px -right-px size-[14px]" />}
        </div>

        {/* Name + status */}
        <div className="min-w-0 flex flex-col justify-center pr-[12px]">
          <p
            className="text-[17px] text-fy27-text-primary truncate"
            style={{ fontWeight: 590, lineHeight: "22px", letterSpacing: "-0.43px" }}
          >
            {name}
          </p>
          <p className="text-[12px] text-fy27-text-secondary truncate" style={{ lineHeight: "16px" }}>
            Available
          </p>
        </div>
      </div>

      {/* Right — call + Copilot, 40px targets, gap-8. NOT draggable. */}
      <div className="flex items-center gap-[8px] shrink-0">
        <button type="button" aria-label="Call" className="size-[40px] rounded-full flex items-center justify-center">
          <svg className="w-[15px] h-[20px] block" viewBox="0 0 15.3017 20.0959" fill="none" style={{ color: "var(--fy27-icon-primary)" }}>
            <path d="M2.80694 0.469221L3.97394 0.117457C5.29645 -0.281179 6.70945 0.363055 7.2758 1.62288L8.17747 3.6286C8.66021 4.70244 8.40581 5.96444 7.54476 6.76739L6.05046 8.16084C6.00678 8.20157 5.97913 8.25659 5.9725 8.31593C5.92814 8.71308 6.19737 9.48648 6.81763 10.5608C7.26868 11.3421 7.67693 11.8899 8.02442 12.1981C8.26653 12.4128 8.3998 12.4592 8.45654 12.4423L10.4669 11.8277C11.5925 11.4835 12.8123 11.8939 13.501 12.8484L14.7817 14.6234C15.5878 15.7406 15.4428 17.2819 14.4426 18.2292L13.5562 19.0686C12.5998 19.9744 11.2382 20.3119 9.96947 19.9578C7.21539 19.189 4.74608 16.8649 2.53421 13.0338C0.31926 9.19745 -0.457932 5.893 0.25852 3.12121C0.586389 1.85273 1.55252 0.847338 2.80694 0.469221ZM3.23984 1.9054C2.48719 2.13227 1.90751 2.7355 1.71079 3.49659C1.10814 5.82811 1.797 8.75696 3.83325 12.2838C5.86678 15.806 8.05572 17.8663 10.3727 18.513C11.134 18.7255 11.9509 18.523 12.5248 17.9795L13.4111 17.1401C13.8658 16.7095 13.9317 16.0089 13.5653 15.5011L12.2846 13.7261C11.9715 13.2922 11.417 13.1057 10.9054 13.2621L8.89007 13.8783C7.72036 14.227 6.65869 13.2855 5.5186 11.3108C4.75029 9.98007 4.3922 8.95139 4.48177 8.14944C4.52817 7.734 4.72174 7.3489 5.02746 7.06381L6.52176 5.67036C6.91315 5.30538 7.02878 4.73174 6.80936 4.24364L5.90769 2.23792C5.65026 1.66527 5.00798 1.37243 4.40684 1.55363L3.23984 1.9054Z" fill="currentColor" />
          </svg>
        </button>
        <button type="button" aria-label="Copilot" className="size-[40px] rounded-full flex items-center justify-center">
          <CopilotLogo size={24} />
        </button>
      </div>
    </div>
  );
}
