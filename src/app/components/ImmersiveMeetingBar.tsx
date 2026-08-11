import React from "react";
import recordingSvgPaths from "@/imports/svg-unik707tki";
import headerSvgPaths from "@/imports/svg-b9093hdo2f";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";
import { CallEnd } from "@/app/components/ubarIcons";

// Left back-chevron, taken verbatim from the meeting Header (Header.tsx Chevron/Back).
function BackChevron({ onBack, isMvp }: { onBack?: () => void; isMvp?: boolean }) {
  return (
    <button
      onClick={onBack}
      className="relative shrink-0 size-[44px] cursor-pointer -ml-[10px]"
      style={{ color: isMvp ? "var(--fy27-icon-primary)" : "#F3F3F3" }}
      data-name="Back"
      aria-label="Return to calendar"
    >
      <div className="absolute h-[24px] left-[22.73%] overflow-clip right-[22.73%] top-1/2 translate-y-[-50%]" data-name="Chevron">
        <div className="absolute h-[16px] left-[calc(50%-0.63px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[8.75px]" data-name="Shape">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 16">
            <path d={headerSvgPaths.p4dacf00} fill="currentColor" id="Shape" />
          </svg>
        </div>
      </div>
    </button>
  );
}

interface ImmersiveMeetingBarProps {
  participantCount?: number;
  onEndCall?: () => void;
  onBack?: () => void;
  isRecording?: boolean;
}

/**
 * Minimal meeting-presence strip shown in immersive mode, where the video stage,
 * full header, and AIL are hidden. Keeps only: recording dot, meeting name,
 * elapsed time, participant count, and a leave button.
 */
export function ImmersiveMeetingBar({ participantCount = 0, onEndCall, onBack, isRecording }: ImmersiveMeetingBarProps) {
  const meeting = useActiveMeeting();
  const { activeVersionId } = useVersion();
  const isFy27Mvp = isMvpFamily(activeVersionId);
  const m = Math.floor(meeting.elapsed / 60);
  const s = meeting.elapsed % 60;
  const elapsedStr = `${m}:${s.toString().padStart(2, "0")}`;
  const title = meeting.meetingTitle || "Marketing Team Sync";

  return (
    <div className={`shrink-0 h-[48px] flex items-center gap-[8px] pl-[16px] pr-[16px] ${isFy27Mvp ? "bg-fy27-surface" : "bg-black"}`}>
      <BackChevron onBack={onBack} isMvp={isFy27Mvp} />

      {isRecording && (
        <div className="relative shrink-0 size-[16px]">
          <svg className="block size-full" fill="none" viewBox="0 0 16 16">
            <path d={recordingSvgPaths.p22389000} fill="#CC4A31" />
          </svg>
        </div>
      )}

      <div className="flex flex-col items-start justify-center flex-1 min-w-0">
        <p className={`font-semibold text-[15px] leading-[20px] tracking-[-0.23px] overflow-hidden whitespace-nowrap text-ellipsis max-w-full ${isFy27Mvp ? "text-fy27-text-primary" : "text-[#f1f1f1]"}`}>
          {title}
        </p>
        <div className={`flex items-center gap-[4px] text-[12px] leading-[13px] tracking-[0.06px] ${isFy27Mvp ? "text-fy27-text-secondary" : "text-[#bfbfbf]"}`}>
          <span>{elapsedStr}</span>
          <span className={`size-[3px] rounded-full shrink-0 ${isFy27Mvp ? "bg-current" : "bg-[#bfbfbf]"}`} />
          <span className="whitespace-nowrap">{participantCount} in call</span>
        </div>
      </div>

      <button
        onClick={onEndCall}
        aria-label="Leave call"
        className="relative size-[40px] flex items-center justify-center shrink-0"
        style={{ color: "var(--fy27-icon-mention)", transform: "translateX(5px)" }}
      >
        <CallEnd size={24} />
      </button>
    </div>
  );
}
