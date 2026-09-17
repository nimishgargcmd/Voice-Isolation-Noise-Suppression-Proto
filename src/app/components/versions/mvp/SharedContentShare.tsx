import imgSlideshow from "@/assets/figma/shared-content/slideshow-share.png";
import { SlideshowControlBar } from "@/app/components/versions/mvp/SlideshowControlBar";

/**
 * Presenter slideshow share — Figma `996:37625` (Mobile Meeting Redesign).
 * Full-width stack: shared slide (224) · slideshow control bar (48) · name-tag bar (52).
 * MVP-only; shown in the gallery when content sharing is active.
 *
 * Buttons (prev/next, To presenter, Take control) are demo no-ops; the bottom-right
 * maximize button opens the fullscreen content view via `onMaximize`.
 */

/** Full-screen maximize (corner brackets) — Figma asset 996:37815 inner Shape. */
function MaximizeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" className="text-fy27-icon-interactive">
      <path
        d="M2 3C2 2.44772 2.44772 2 3 2H5C5.55228 2 6 1.55228 6 1C6 0.447715 5.55228 0 5 0H3C1.34315 0 0 1.34315 0 3V5C0 5.55228 0.447715 6 1 6C1.55228 6 2 5.55228 2 5V3ZM2 15C2 15.5523 2.44772 16 3 16H5C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18H3C1.34315 18 0 16.6569 0 15V13C0 12.4477 0.447715 12 1 12C1.55228 12 2 12.4477 2 13V15ZM15 2C15.5523 2 16 2.44772 16 3V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V3C18 1.34315 16.6569 0 15 0H13C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H15ZM16 15C16 15.5523 15.5523 16 15 16H13C12.4477 16 12 16.4477 12 17C12 17.5523 12.4477 18 13 18H15C16.6569 18 18 16.6569 18 15V13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V15Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SharedContentShare({ sharerName, onMaximize, splitLayout = false }: { sharerName: string; onMaximize?: () => void; splitLayout?: boolean }) {
  const controlBar = <SlideshowControlBar fullWidth />;

  // Name-tag / fullscreen row.
  const nametagRow = (
    <div className="h-[52px] px-[8px] flex items-center gap-[10px]">
      <div className="h-[28px] p-[4px] rounded-[3px] bg-fy27-nametag-bg backdrop-blur-[45px] flex items-center min-w-0">
        <span className="px-[2px] truncate text-fy27-text-primary text-[12px] leading-[16px]">{sharerName}&apos;s content</span>
      </div>
      <div className="flex-1" />
      <button
        type="button"
        aria-label="Open shared content fullscreen"
        onClick={onMaximize}
        className="size-[52px] rounded-[8px] flex items-center justify-center shrink-0"
      >
        <MaximizeIcon />
      </button>
    </div>
  );

  // Checkpoint (split): fill the available height — slide centred in the upper
  // area; the nametag/fullscreen row then the slideshow control pinned to the
  // bottom with a 10px gap above the filmstrip.
  if (splitLayout) {
    return (
      <div className="w-full h-full flex flex-col overflow-hidden" style={{ fontFamily: "var(--font-sf-pro)" }}>
        <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden">
          <img src={imgSlideshow} alt={`${sharerName}'s shared content`} className="block w-full h-[224px] object-cover" />
        </div>
        {nametagRow}
        {controlBar}
        <div className="h-[10px] shrink-0" />
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-[4px] bg-fy27-surface mb-[2px]" style={{ fontFamily: "var(--font-sf-pro)" }}>
      {/* Shared slide */}
      <img src={imgSlideshow} alt={`${sharerName}'s shared content`} className="block w-full h-[224px] object-cover" />

      {nametagRow}
      {controlBar}
    </div>
  );
}
