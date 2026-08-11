import React from "react";

/**
 * Grip-dots handle that sits ON the divider between the meeting stage (or the
 * minimal strip, in immersive) and the panel. Drag it to resize between detents;
 * a tap toggles. Pointer logic lives in MeetingPage (it owns the split state).
 *
 * Touch target = the union of (1) the full-width thin divider row and (2) a 44×44
 * square centered on the grip dots — so the divider stays visually thin while the
 * dots get a proper thumb-sized hit area (the square is invisible and out of flow).
 */
export function PanelResizeHandle({
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: {
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerMove: (e: React.PointerEvent) => void;
  onPointerUp: (e: React.PointerEvent) => void;
}) {
  const pointerHandlers = { onPointerDown, onPointerMove, onPointerUp, style: { touchAction: "none" as const } };

  return (
    <div
      {...pointerHandlers}
      role="separator"
      aria-label="Resize panel"
      className="relative shrink-0 z-20 flex items-center justify-center h-[10px] pt-0 pb-[2px] cursor-grab active:cursor-grabbing"
    >
      {/* (2) 44×44 hit area centered on the dots — overflows the thin row without affecting layout */}
      <div
        {...pointerHandlers}
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[44px]"
      />

      {/* Fluent "Reorder Dots Horizontal" — same dot size, box cropped vertically to the dot band so the divider is thin */}
      <svg className="block relative" width="16" height="8" viewBox="0 4 16 8" fill="none" aria-hidden="true">
        {[6, 10].map((cy) =>
          [4.5, 8, 11.5].map((cx) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.1" fill="var(--fy27-icon-dominant)" />
          ))
        )}
      </svg>
    </div>
  );
}
