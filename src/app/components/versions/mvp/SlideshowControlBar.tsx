/**
 * Slideshow control bar — Figma `996:38005` / `997:38005`.
 * Prev/next chevrons · "N of M" counter · To presenter (accent) · Take control (outline).
 * `fullWidth` = the in-tile bar (gallery share); default = a floating rounded pill
 * (landscape fullscreen). Buttons are demo no-ops unless wired. MVP-only.
 */

const BTN2 = "text-[13px] font-medium leading-[18px] tracking-[-0.08px]";

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-fy27-icon-primary">
      <path d="M15.5 5.5L9 12l6.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-fy27-icon-primary">
      <path d="M9 5.5L15.5 12 9 18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SlideshowControlBar({
  current = 1,
  total = 20,
  fullWidth = false,
  onPrev,
  onNext,
  onToPresenter,
  onTakeControl,
}: {
  current?: number;
  total?: number;
  fullWidth?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  onToPresenter?: () => void;
  onTakeControl?: () => void;
}) {
  return (
    <div
      className={`h-[48px] bg-fy27-surface-raised flex items-center ${fullWidth ? "w-full" : "w-[375px] max-w-full rounded-[4px]"}`}
      style={{ fontFamily: "var(--font-sf-pro)" }}
    >
      <button type="button" aria-label="Previous slide" onClick={onPrev} className="size-[48px] pl-[8px] flex items-center justify-center shrink-0">
        <ChevronLeft />
      </button>
      <span className="w-[48px] text-center text-fy27-text-primary text-[11px] leading-[11px] tracking-[0.06px] shrink-0">
        {current} of {total}
      </span>
      <div className="flex-1 flex items-center justify-center gap-[8px]">
        <button type="button" onClick={onToPresenter} className={`h-[28px] px-[8px] rounded-[4px] bg-fy27-surface-accent-primary text-fy27-text-on-accent ${BTN2}`}>
          To presenter
        </button>
        <button type="button" onClick={onTakeControl} className={`h-[28px] px-[8px] rounded-[4px] border border-fy27-brand-accent-secondary text-fy27-text-interactive ${BTN2}`}>
          Take control
        </button>
      </div>
      <button type="button" aria-label="Next slide" onClick={onNext} className="size-[48px] flex items-center justify-center shrink-0">
        <ChevronRight />
      </button>
    </div>
  );
}
