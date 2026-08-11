import React from "react";
import svgPaths from "@/imports/svg-p86rbi3s64";
import addButtonSvg from "@/imports/svg-421nqr9b2v";

interface CollapsedInputBoxProps {
  placeholder: string;
  onClick: () => void;
  /** Matches the surface it sits on. Meeting chat passes the live app theme;
   *  the DM (always a white foreground) passes "light". */
  theme?: "dark" | "light";
}

/**
 * Collapsed compose box — Figma "Composer - iOS" (Mobile Meeting Redesign 978:32084).
 * Surface/Selected pill (radius 28, 6px padding) with a bare Add (+) glyph, the
 * placeholder (Body Large), and a paper-plane send (inactive). Tapping anywhere
 * opens the on-screen keyboard. Colours are explicit per theme (mirrors
 * NativeInputBar) so it always matches its host surface.
 */
export function CollapsedInputBox({ placeholder, onClick, theme = "dark" }: CollapsedInputBoxProps) {
  const c = theme === "light"
    ? { pill: "#f1f1f1", addGlyph: "#616161", placeholder: "#6e6e6e", sendGlyph: "#c4c4c4" }
    : { pill: "#292929", addGlyph: "#e1e1e1", placeholder: "#919191", sendGlyph: "#8a8a8a" };

  return (
    <div className="px-[16px] py-[10px] relative">
      <button
        onClick={onClick}
        className="flex items-center gap-[2px] w-full rounded-[28px] p-[6px]"
        style={{ backgroundColor: c.pill }}
      >
        {/* Add (+) — bare glyph in a circular tap target */}
        <span className="shrink-0 grid place-items-center size-[40px] rounded-full">
          <svg className="size-[18px]" fill={c.addGlyph} viewBox="0 0 16 16">
            <path d={addButtonSvg.p23b109c0} />
          </svg>
        </span>

        {/* Placeholder — Body Large */}
        <span
          className="flex-1 min-w-0 text-left text-[17px] leading-[22px] tracking-[-0.43px] truncate"
          style={{ fontFamily: "var(--font-sf-pro)", color: c.placeholder }}
        >
          {placeholder}
        </span>

        {/* Send (paper plane) — inactive grey */}
        <span className="shrink-0 grid place-items-center size-[44px] rounded-full">
          <svg className="w-[19.5px] h-[19.5px]" fill={c.sendGlyph} viewBox="0 0 17 20">
            <path d={svgPaths.p39d05380} />
          </svg>
        </span>
      </button>
    </div>
  );
}
