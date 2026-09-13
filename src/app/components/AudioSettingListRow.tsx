import React from "react";
import { AudioSettingIcon } from "@/app/components/AudioSettingIcon";
import { IconCheck } from "@/app/components/profile/fluentIcons";

type AudioModeOption = "off" | "noise-suppression" | "voice-isolation";

interface AudioSettingListRowProps {
  mode?: AudioModeOption;
  label: string;
  description?: string;
  isSelected: boolean;
  showDivider?: boolean;
  onClick: () => void;
}

export function AudioSettingListRow({
  mode,
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
      aria-pressed={isSelected}
      className={`w-full min-h-[64px] text-left px-[20px] py-[12px] flex items-center gap-[16px] active:opacity-70 ${showDivider ? "border-b border-fy27-divider" : ""}`}
    >
      {mode && <AudioSettingIcon mode={mode} />}
      <span className="flex-1 min-w-0">
        <span className="block text-[17px] leading-[22px] text-fy27-text-primary">
          {label}
        </span>
        {description && (
          <span className="block text-[13px] leading-[18px] text-fy27-text-secondary mt-[1px]">
            {description}
          </span>
        )}
      </span>
      <span
        className={`inline-flex items-center justify-center size-[20px] rounded-full border shrink-0 ${isSelected ? "bg-fy27-brand border-fy27-brand text-white" : "border-fy27-icon-secondary text-transparent"}`}
        aria-hidden="true"
      >
        {isSelected && <IconCheck size={12} />}
      </span>
    </button>
  );
}
