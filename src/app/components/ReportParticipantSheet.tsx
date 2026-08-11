import React, { useEffect, useState } from "react";
import { BottomSheet } from "@/app/components/BottomSheet";
import { initialsOf } from "@/app/components/MeetingTile";
import { useToast } from "@/app/components/ToastContext";

interface ReportParticipantSheetProps {
  open: boolean;
  onClose: () => void;
  name: string;
  avatar?: string;
  /** Header title (default "Report this person"). */
  title?: string;
  /** Custom subject card rendered in place of the persona card (e.g. a meeting chiclet). */
  subject?: React.ReactNode;
  /** Called when "Report" is confirmed (explanation passed through). Demo: closes. */
  onSubmit?: (explanation: string) => void;
}

const MAX = 250;

/**
 * "Report this person" drawer — Teams 2 iOS (Figma POR 1170:32675). Near-fullscreen
 * sheet reached from the participant options sheet → Report. Nav-bar header (X +
 * centred title), a persona card, an optional explanation field (0/250), a review
 * disclaimer, and Report / Cancel buttons.
 */
export function ReportParticipantSheet({ open, onClose, name, avatar, title = "Report this person", subject, onSubmit }: ReportParticipantSheetProps) {
  const [text, setText] = useState("");
  const { show } = useToast();

  // Reset the field each time the sheet opens.
  useEffect(() => {
    if (open) setText("");
  }, [open]);

  const submit = () => {
    onSubmit?.(text.trim());
    onClose();
    show("Report sent for review");
  };

  return (
    <BottomSheet open={open} onClose={onClose} ariaLabel={`Report ${name}`} handle={false}>
      <div className="flex flex-col h-[85vh]" style={{ fontFamily: "var(--font-sf-pro)" }}>
        {/* Nav-bar header — dismiss + centred title */}
        <div className="relative flex items-center justify-center h-[48px] shrink-0 px-[16px]">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute left-[16px] grid place-items-center size-[24px] text-fy27-icon-primary active:opacity-60 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="size-[24px]" fill="none">
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <span className="text-fy27-text-primary text-[17px] leading-[20px] tracking-[-0.24px] font-medium">{title}</span>
        </div>

        {/* Subject — a custom card (e.g. meeting chiclet) or the default persona card */}
        <div className="px-[16px] pt-[20px] shrink-0">
          {subject ?? (
            <div className="flex items-center gap-[16px] bg-fy27-surface-raised rounded-[8px] px-[16px] py-[12px]">
              {avatar ? (
                <img src={avatar} alt="" className="size-[40px] rounded-full object-cover shrink-0" />
              ) : (
                <div className="size-[40px] rounded-full bg-fy27-surface-tertiary grid place-items-center shrink-0 text-[15px] font-semibold text-fy27-text-secondary">
                  {initialsOf(name)}
                </div>
              )}
              <span className="text-fy27-text-primary text-[17px] leading-[22px] tracking-[-0.41px] truncate">{name}</span>
            </div>
          )}
        </div>

        {/* Explanation field */}
        <div className="px-[16px] pt-[16px] shrink-0">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, MAX))}
            placeholder="Enter an explanation (optional)"
            rows={1}
            className="w-full resize-none bg-transparent outline-none border-b-[0.5px] border-fy27-divider pb-[12px] text-fy27-text-primary placeholder:text-fy27-text-secondary text-[17px] leading-[22px] tracking-[-0.41px]"
            style={{ minHeight: "34px" }}
          />
          <p className="text-fy27-text-secondary text-[12px] leading-[16px] pt-[4px]">{text.length}/{MAX} maximum characters</p>
        </div>

        <div className="flex-1" />

        {/* Disclaimer + actions */}
        <div className="shrink-0 px-[16px]">
          <p className="text-fy27-text-primary text-[11px] leading-[14px] tracking-[0.06px] text-left">
            This message will be shared for review. The review process is fully determined by your organization.
          </p>
        </div>
        <div className="shrink-0 flex flex-col gap-[12px] px-[16px] pt-[20px] pb-[32px]">
          <button
            onClick={submit}
            className="w-full h-[40px] rounded-[8px] flex items-center justify-center bg-fy27-brand text-fy27-text-on-accent text-[15px] leading-[20px] tracking-[-0.24px] font-medium active:opacity-60 transition-opacity"
          >
            Report
          </button>
          <button
            onClick={onClose}
            className="w-full h-[40px] rounded-[8px] flex items-center justify-center border border-fy27-brand-accent-secondary text-fy27-text-interactive text-[15px] leading-[20px] tracking-[-0.24px] font-medium active:opacity-60 transition-opacity"
          >
            Cancel
          </button>
        </div>
      </div>
    </BottomSheet>
  );
}
