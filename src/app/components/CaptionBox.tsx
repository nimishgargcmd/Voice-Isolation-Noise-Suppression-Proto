import React from "react";

interface CaptionBoxProps {
  /** The live caption text to display. */
  text: string;
}

/**
 * Live-captions box — Figma "Caption" (Mobile Meeting Redesign 978:32452).
 * Surface/Primary card with a Surface/Border hairline, 8px radius, 10px padding,
 * and Body-3 (13/18, -0.08) Text/Primary copy. Shown above the floating self tile
 * when live captions are turned on from the More menu.
 */
export function CaptionBox({ text }: CaptionBoxProps) {
  return (
    <div className="bg-fy27-surface border border-fy27-border rounded-[8px] p-[10px] flex items-center justify-center">
      <p
        className="flex-1 min-w-0 [word-break:break-word] text-fy27-text-primary text-[13px] leading-[18px] tracking-[-0.08px]"
        style={{ fontFamily: "var(--font-sf-pro)" }}
      >
        {text}
      </p>
    </div>
  );
}
