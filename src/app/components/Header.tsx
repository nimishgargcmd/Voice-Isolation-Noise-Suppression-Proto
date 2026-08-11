import React from "react";
import svgPaths from "@/imports/svg-b9093hdo2f";
import recordingSvgPaths from "@/imports/svg-unik707tki";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import { CallEnd } from "@/app/components/ubarIcons";

interface HeaderProps {
  participantCount?: number;
  onEndCall?: () => void;
  onBack?: () => void;
  isRecording?: boolean;
}

function Chevron() {
  return (
    <div className="absolute h-[24px] left-[22.73%] overflow-clip right-[22.73%] top-[10px]" data-name="Chevron">
      <div className="absolute h-[16px] left-[calc(50%-0.63px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[8.75px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 16">
          <path d={svgPaths.p4dacf00} fill="#F3F3F3" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Back({ onBack }: { onBack?: () => void }) {
  return (
    <button
      onClick={onBack}
      className="relative shrink-0 size-[44px] cursor-pointer"
      data-name="Back"
      aria-label="Return to calendar"
    >
      <Chevron />
    </button>
  );
}

function Title() {
  return (
    <div className="flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-semibold justify-center overflow-hidden relative shrink-0 text-[#f1f1f1] text-[15px] leading-[20px] tracking-[-0.23px]">
        <p className="overflow-hidden whitespace-nowrap text-ellipsis">Marketing Team Sync</p>
      </div>
      <div className="h-[12px] relative shrink-0 w-[10px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
          <path d={svgPaths.pc2956c0} fill="#E1E1E1" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Subtext({ participantCount = 12 }: { participantCount?: number }) {
  const meeting = useActiveMeeting();
  const m = Math.floor(meeting.elapsed / 60);
  const s = meeting.elapsed % 60;
  const elapsedStr = `${m}:${s.toString().padStart(2, "0")}`;

  return (
    <div className="flex gap-[4px] items-center relative shrink-0 w-full" data-name="Subtext">
      <div className="flex flex-col font-normal justify-center overflow-hidden relative shrink-0 text-[#bfbfbf] text-[12px] leading-[13px] tracking-[0.06px]">
        <p className="overflow-hidden whitespace-nowrap text-ellipsis">{elapsedStr}</p>
      </div>
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="#BFBFBF" id="Ellipse 26593" r="1.5" />
        </svg>
      </div>
      <div className="flex flex-col font-normal justify-center overflow-hidden relative shrink-0 text-[#bfbfbf] text-[12px] leading-[13px] tracking-[0.06px]">
        <p className="overflow-hidden whitespace-nowrap text-ellipsis">{participantCount} in call</p>
      </div>
    </div>
  );
}

function RecordingDot() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={recordingSvgPaths.p22389000} fill="#CC4A31" />
      </svg>
    </div>
  );
}

function Container({ participantCount }: { participantCount?: number }) {
  return (
    <div className="flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <Title />
      <Subtext participantCount={participantCount} />
    </div>
  );
}

function MeetingTitle({ participantCount, isRecording }: { participantCount?: number; isRecording?: boolean }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Meeting title">
      <div className="flex flex-col justify-center size-full">
        <div className="flex gap-[8px] items-center pl-0 pr-[16px] py-0 relative w-full">
          {isRecording && <RecordingDot />}
          <Container participantCount={participantCount} />
        </div>
      </div>
    </div>
  );
}

function Leave() {
  return (
    <div className="relative size-[40px] rounded-full bg-[#ff000d] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.1),0px_1px_8px_0px_rgba(0,0,0,0.12)] flex items-center justify-center text-white" data-name="Leave">
      <CallEnd size={20} />
    </div>
  );
}

function Frame({ onEndCall }: { onEndCall?: () => void }) {
  return (
    <button onClick={onEndCall} className="relative flex items-center shrink-0 size-[40px]">
      <Leave />
    </button>
  );
}

function HeaderContent({ participantCount, onEndCall, onBack, isRecording }: { participantCount?: number; onEndCall?: () => void; onBack?: () => void; isRecording?: boolean }) {
  return (
    <div className="flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px relative w-full" data-name="Header">
      <Back onBack={onBack} />
      <MeetingTitle participantCount={participantCount} isRecording={isRecording} />
      <Frame onEndCall={onEndCall} />
    </div>
  );
}

export default function Header({ participantCount = 12, onEndCall, onBack, isRecording }: HeaderProps) {
  return (
    <div className="bg-black flex flex-col items-center justify-center pl-[4px] pr-[16px] py-[8px] relative size-full" data-name="Header">
      <HeaderContent participantCount={participantCount} onEndCall={onEndCall} onBack={onBack} isRecording={isRecording} />
    </div>
  );
}