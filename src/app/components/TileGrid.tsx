import React from "react";

/**
 * Tile Grid (Teams 2 iOS) — Figma POR node 1170:41626.
 * Rows of 3 equal tiles: Surface/Raised-Fill, radius 8, 8px padding, a 24px icon
 * (icon/primary via currentColor) over a Caption-2 label (text/primary). 4px gaps.
 * Reusable — pass any list of tiles; rendered 3 per row.
 */
export interface TileGridItem {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export function TileGrid({ items }: { items: TileGridItem[] }) {
  const rows: TileGridItem[][] = [];
  for (let i = 0; i < items.length; i += 3) rows.push(items.slice(i, i + 3));

  return (
    <div className="flex flex-col gap-[4px] w-full" style={{ fontFamily: "var(--font-sf-pro)" }}>
      {rows.map((row, ri) => (
        <div key={ri} className="flex gap-[4px] items-stretch w-full">
          {row.map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={t.onClick}
              className="flex-1 min-w-0 flex flex-col items-center justify-center gap-[4px] p-[8px] rounded-[8px] bg-fy27-surface-tertiary active:opacity-60 transition-opacity"
            >
              <span className="grid size-[24px] place-items-center shrink-0 text-fy27-icon-primary">{t.icon}</span>
              <span className="text-[11px] leading-[16px] tracking-[0.06px] text-fy27-text-primary text-center whitespace-nowrap">
                {t.label}
              </span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
