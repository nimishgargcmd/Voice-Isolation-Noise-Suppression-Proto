import React from "react";

/**
 * Full-bleed pill action button used across the agenda panel
 * (Pause / Resume, Reset, Add agenda item). Pass `flex-1` or `w-full`
 * via className to control width; everything else is shared styling.
 */
export function PillActionButton({
  onClick,
  disabled,
  className = "",
  children,
}: {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#000000] active:bg-[rgba(255,255,255,0.1)] disabled:opacity-40 text-white font-semibold text-[17px] tracking-[-0.41px] leading-[22px] py-4 rounded-[9999px] transition-colors ${className}`}
      style={{ fontFamily: "var(--font-sf-pro)" }}
    >
      {children}
    </button>
  );
}
