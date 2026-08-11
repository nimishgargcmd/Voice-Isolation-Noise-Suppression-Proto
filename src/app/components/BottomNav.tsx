import React from "react";
import svgPaths from "@/imports/svg-s62hwvor1z";
import { MicOnIcon } from "@/app/components/MicOnIcon";
import { MicOffIcon } from "@/app/components/MicOffIcon";
import { VideoOnIcon } from "@/app/components/VideoOnIcon";
import { VideoOffIcon } from "@/app/components/VideoOffIcon";

interface BottomNavProps {
  activePanel: "chat" | "copilot" | "more" | null;
  onPanelToggle: (panel: "chat" | "copilot" | "more") => void;
  isVideoOn: boolean;
  isMicOn: boolean;
  onVideoToggle: () => void;
  onMicToggle: () => void;
}

interface VideoIconProps {
  isOn: boolean;
}

function VideoIcon({ isOn }: VideoIconProps) {
  return (
    <div className="h-[28px] relative shrink-0 w-[24px] flex items-center justify-center">
      {isOn
        ? <VideoOnIcon width={20} height={14} color="white" />
        : <VideoOffIcon width={24} height={28} color="white" />
      }
    </div>
  );
}

interface MicIconProps {
  isOn: boolean;
}

function MicIcon({ isOn }: MicIconProps) {
  return (
    <div className="relative size-[24px] flex items-center justify-center">
      {isOn ? (
        <MicOnIcon size={21.6} color="white" />
      ) : (
        <MicOffIcon size={24} color="white" />
      )}
    </div>
  );
}

interface ChatIconProps {
  isActive: boolean;
}

function ChatIcon({ isActive }: ChatIconProps) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 28 28"
      >
        <path d={isActive ? svgPaths.pb877400 : svgPaths.p1e92dd00} fill={isActive ? "#878BFB" : "white"} />
      </svg>
    </div>
  );
}

interface MoreIconProps {
  isActive: boolean;
}

function MoreIcon({ isActive }: MoreIconProps) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 28 28"
      >
        <path d={svgPaths.p8afa600} fill={isActive ? "#878BFB" : "white"} />
      </svg>
    </div>
  );
}

function CopilotIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path d={svgPaths.p16a963f0} fill="url(#paint0_radial_copilot)" />
        <path d={svgPaths.p22760380} fill="url(#paint1_radial_copilot)" />
        <g>
          <path d={svgPaths.p2ecce500} fill="url(#paint2_radial_copilot)" />
          <path d={svgPaths.p2ecce500} fill="url(#paint3_linear_copilot)" />
        </g>
        <g>
          <path d={svgPaths.p30395c00} fill="url(#paint4_radial_copilot)" />
          <path d={svgPaths.p30395c00} fill="url(#paint5_linear_copilot)" />
        </g>
        <defs>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="matrix(-5.49698 -6.79344 -5.93495 5.69811 18.9994 10.3791)"
            gradientUnits="userSpaceOnUse"
            id="paint0_radial_copilot"
            r="1"
          >
            <stop offset="0.0955758" stopColor="#00AEFF" />
            <stop offset="0.773185" stopColor="#2253CE" />
            <stop offset="1" stopColor="#0736C4" />
          </radialGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="matrix(4.98016 6.47044 5.87896 -5.2813 5.57469 16.2453)"
            gradientUnits="userSpaceOnUse"
            id="paint1_radial_copilot"
            r="1"
          >
            <stop stopColor="#FFB657" />
            <stop offset="0.633728" stopColor="#FF5F3D" />
            <stop offset="0.923392" stopColor="#C02B3C" />
          </radialGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="matrix(-0.726614 -12.7947 71.8824 -4.08022 6.53166 16.435)"
            gradientUnits="userSpaceOnUse"
            id="paint2_radial_copilot"
            r="1"
          >
            <stop offset="0.03" stopColor="#FFC800" />
            <stop offset="0.31" stopColor="#98BD42" />
            <stop offset="0.49" stopColor="#52B471" />
            <stop offset="0.843838" stopColor="#0D91E1" />
          </radialGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_copilot"
            x1="7.25046"
            x2="7.87502"
            y1="2"
            y2="16.4401"
          >
            <stop stopColor="#3DCBFF" />
            <stop offset="0.246674" stopColor="#0588F7" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="matrix(-6.33606 18.1116 -21.564 -7.99353 20.6605 6.14612)"
            gradientUnits="userSpaceOnUse"
            id="paint4_radial_copilot"
            r="1"
          >
            <stop offset="0.0661714" stopColor="#8C48FF" />
            <stop offset="0.5" stopColor="#F2598A" />
            <stop offset="0.895833" stopColor="#FFB152" />
          </radialGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint5_linear_copilot"
            x1="21.2941"
            x2="21.286"
            y1="6.67831"
            y2="10.6113"
          >
            <stop offset="0.0581535" stopColor="#F8ADFA" />
            <stop offset="0.708063" stopColor="#A86EDD" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function BottomNav({
  activePanel,
  onPanelToggle,
  isVideoOn,
  isMicOn,
  onVideoToggle,
  onMicToggle,
}: BottomNavProps) {
  return (
    <div className="px-4 py-4 flex items-center justify-between gap-3">
      {/* Main Tab Bar */}
      <div className="bg-[rgba(0,0,0,0.75)] backdrop-blur-md flex h-[62px] items-center pl-[4px] pr-[12px] py-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] flex-1">
        {/* Video Button */}
        <button
          onClick={onVideoToggle}
          className="flex-1 h-[54px] flex flex-col items-center justify-center"
        >
          <div className="flex flex-col gap-[2px] items-center justify-center p-[8px]">
            <VideoIcon isOn={isVideoOn} />
          </div>
        </button>

        {/* Mic Button */}
        <button
          onClick={onMicToggle}
          className="flex-1 h-[54px] flex flex-col items-center justify-center"
        >
          <div className="flex flex-col gap-[2px] items-center justify-center p-[8px]">
            <div className="content-stretch flex h-[28px] items-center justify-center p-[2px] relative shrink-0">
              <MicIcon isOn={isMicOn} />
            </div>
          </div>
        </button>

        {/* Chat Button */}
        <button
          onClick={() => onPanelToggle("chat")}
          className={`flex-1 flex flex-col items-center justify-center transition-colors ${
            activePanel === "chat" ? "" : ""
          }`}
        >
          <div className="flex flex-col gap-[2px] items-center justify-center p-[8px]">
            <ChatIcon isActive={activePanel === "chat"} />
          </div>
        </button>

        {/* More Button */}
        <button
          onClick={() => onPanelToggle("more")}
          className="flex-1 h-[54px] flex flex-col items-center justify-center"
        >
          <div className="flex flex-col gap-[2px] items-center justify-center p-[8px]">
            <MoreIcon isActive={activePanel === "more"} />
          </div>
        </button>
      </div>

      {/* Copilot Button */}
      <button
        onClick={() => onPanelToggle("copilot")}
        className={`backdrop-blur-md flex items-center justify-center p-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] size-[62px] shrink-0 transition-colors ${
          activePanel === "copilot" ? "bg-[#584bdf]" : "bg-[rgba(0,0,0,0.75)]"
        }`}
      >
        <CopilotIcon />
      </button>
    </div>
  );
}