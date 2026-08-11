import React from "react";

type AudioModeOption = "off" | "noise-suppression" | "voice-isolation";

interface AudioSettingListRowProps {
  mode?: AudioModeOption;
  label: string;
  description: string;
  isSelected: boolean;
  showDivider?: boolean;
  onClick: () => void;
}

export function AudioSettingListRow({
  label,
  description,
  isSelected,
  showDivider = false,
  onClick,
}: AudioSettingListRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-[20px] py-[12px] flex items-start gap-[12px] ${showDivider ? "border-b border-fy27-divider" : ""}`}
    >
      <span
        className={`mt-[2px] inline-flex items-center justify-center size-[20px] rounded-full border shrink-0 ${
          isSelected ? "bg-fy27-brand border-fy27-brand text-white" : "border-fy27-icon-secondary text-transparent"
        }`}
        aria-hidden="true"
      >
        {isSelected ? (
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{ display: "block" }}>
            <path d="M2.5 6L4.8 8.3L9.5 3.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : null}
      </span>

      <span className="min-w-0">
        <span className="block text-[17px] leading-[22px] tracking-[-0.41px] text-fy27-text-primary">
          {label}
        </span>
        <span className="block text-[13px] leading-[18px] text-fy27-text-secondary mt-[1px]">
          {description}
        </span>
      </span>
    </button>
  );
}
