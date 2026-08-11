import React, { useState, useRef, useEffect } from "react";
import svgPaths from "@/imports/svg-ct9ylmbywn";
import { NetworkIndicator } from "@/app/components/NetworkIndicator";
import { MicOnIcon } from "@/app/components/MicOnIcon";
import { MicOffIcon } from "@/app/components/MicOffIcon";
import { MicOnIndicator } from "@/app/components/MicOnIndicator";
import { MicOffIndicator } from "@/app/components/MicOffIndicator";

interface OnTheGoModeProps {
  isMicOn: boolean;
  isVideoOn: boolean;
  onMicToggle: () => void;
  onHandRaiseToggle: () => void;
  isHandRaised: boolean;
  isActive: boolean;
}

// ── Button icons (28px) — use shared MicOnIcon/MicOffIcon ──

function HandIcon() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" viewBox="0 0 28 28">
        <path d={svgPaths.p392d2800} fill="white" />
      </svg>
    </div>
  );
}

function SpeakerIcon() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" viewBox="0 0 28 28">
        <path d={svgPaths.p33a83b00} fill="white" />
      </svg>
    </div>
  );
}

// ── Audio device picker ──

interface AudioDevice {
  id: string;
  name: string;
  icon: "phone" | "speaker" | "bluetooth";
  connected?: boolean;
}

const audioDevices: AudioDevice[] = [
  { id: "phone", name: "iPhone", icon: "phone" },
  { id: "speaker", name: "Speaker", icon: "speaker" },
  { id: "bluetooth", name: "AirPods Pro", icon: "bluetooth", connected: true },
];

function PhoneIcon() {
  return (
    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
      <rect x="6" y="2" width="12" height="20" rx="2" stroke="white" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="1" fill="white" />
    </svg>
  );
}

function SpeakerAudioIcon() {
  return (
    <svg className="size-[24px]" fill="none" viewBox="0 0 28 28">
      <path d={svgPaths.p33a83b00} fill="white" />
    </svg>
  );
}

function BluetoothIcon() {
  return (
    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
      <path
        d="M6.5 6.5L17.5 17.5L12 22V2L17.5 6.5L6.5 17.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AudioDeviceIcon({ icon }: { icon: AudioDevice["icon"] }) {
  switch (icon) {
    case "phone": return <PhoneIcon />;
    case "speaker": return <SpeakerAudioIcon />;
    case "bluetooth": return <BluetoothIcon />;
  }
}

// ── Self Video Tile (centered, same as gallery view with video off) ──

function SelfTileCentered({ isMicOn, isHandRaised = false }: { isMicOn: boolean; isHandRaised?: boolean }) {
  return (
    <div
      className="relative bg-[rgba(255,255,255,0.2)] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]"
      style={{
        width: 121,
        height: 136,
        outline: isHandRaised ? '3px solid #FFD700' : '3px solid transparent',
        outlineOffset: '0px',
        transition: 'outline 0.3s ease-in-out',
      }}
    >
      <div className="w-full h-full flex items-center justify-center rounded-[20px] overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
        <div className="w-12 h-12 rounded-full bg-[#5b5fc7] flex items-center justify-center text-white text-lg" style={{ fontWeight: 600 }}>
          UV
        </div>
      </div>

      <div className="absolute" style={{ top: 9, right: 7 }}>
        <NetworkIndicator />
      </div>

      <div
        className="absolute bg-black/50 backdrop-blur-[5px] rounded-[100px]"
        style={{ bottom: 9, left: 9, padding: "5px 10px", height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <p className="text-white" style={{ fontFamily: "var(--font-sf-pro)", fontSize: 12, lineHeight: "14px", fontWeight: 510 }}>
          You
        </p>
      </div>

      <div className="absolute bottom-[8px] right-[8px]">
        {isMicOn ? <MicOnIndicator /> : <MicOffIndicator />}
      </div>
    </div>
  );
}

// ── Toast notification ──

function Toast({ visible }: { visible: boolean }) {
  return (
    <div
      className="absolute left-1/2 z-40 pointer-events-none"
      style={{
        bottom: "calc(100% + 10px)",
        opacity: visible ? 1 : 0,
        transform: `translateX(-50%) translateY(${visible ? 0 : 8}px)`,
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      <div className="bg-[#323236] backdrop-blur-[20px] rounded-[100px] px-[20px] py-[10px] shadow-[0px_4px_16px_rgba(0,0,0,0.4)]">
        <p
          className="text-white text-[15px] text-center whitespace-nowrap"
          style={{
            fontFamily: "var(--font-sf-pro)",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "-0.23px",
          }}
        >
          Mic and video turned off
        </p>
      </div>
    </div>
  );
}

// ── Shared text style helper ──
const sfDisplaySemibold22 = {
  fontFamily: "var(--font-sf-display)",
  fontWeight: 600,
  lineHeight: "26px",
  letterSpacing: "0.35px",
} as const;

// Button height matching Figma spec
const BTN_HEIGHT = 100;

// ── Main component ──

export function OnTheGoMode({
  isMicOn,
  isVideoOn,
  onMicToggle,
  onHandRaiseToggle,
  isHandRaised,
  isActive,
}: OnTheGoModeProps) {
  const [showAudioPicker, setShowAudioPicker] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState<string>("phone");
  const audioPickerRef = useRef<HTMLDivElement>(null);
  const audioPopupRef = useRef<HTMLDivElement>(null);
  const speakerBtnRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [menuPos, setMenuPos] = useState<{ bottom: number; right: number } | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const prevActiveRef = useRef(false);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Show toast when entering on-the-go mode
  useEffect(() => {
    if (isActive && !prevActiveRef.current) {
      setToastVisible(true);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      toastTimerRef.current = setTimeout(() => {
        setToastVisible(false);
      }, 4000);
    }
    if (!isActive) {
      setToastVisible(false);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    }
    prevActiveRef.current = isActive;
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, [isActive]);

  // Close audio picker on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (audioPickerRef.current && !audioPickerRef.current.contains(e.target as Node)) {
        setShowAudioPicker(false);
      }
    }
    if (showAudioPicker) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showAudioPicker]);

  const handleAudioSelect = (deviceId: string) => {
    setSelectedAudio(deviceId);
    setShowAudioPicker(false);
  };

  // Animated button colours
  // Unmute (mic off): #291AC0  |  Mute (mic on): #5961EE
  const muteButtonBg = isMicOn ? "#5961EE" : "#291AC0";

  return (
    <div ref={containerRef} className="h-full w-full flex flex-col items-center bg-black relative">
      {/* Content area – px-[14px] matches Figma left:14 */}
      <div className="flex flex-col gap-[20px] items-center w-full h-full px-[14px] pt-[14px] pb-[16px]">

        {/* ── Top section: title + tile ── */}
        <div className="flex flex-col flex-1 gap-[30px] items-center w-full min-h-0">

          {/* Title block: "On the go mode" + subtitle */}
          <div className="flex flex-col gap-[4px] items-center shrink-0 w-full">
            <p
              className="text-[#e1e1e1] text-[22px] text-center w-full"
              style={sfDisplaySemibold22}
            >
              On the go mode
            </p>
            <p
              className="text-[#919191] text-[15px] text-center overflow-hidden text-ellipsis"
              style={{
                fontFamily: "var(--font-sf-pro)",
                fontWeight: 400,
                lineHeight: "18px",
                letterSpacing: "-0.08px",
              }}
            >
              Your video will remain off
            </p>
          </div>

          {/* Self tile — scaled 1.5× from original 121×136 */}
          <div style={{ width: 182, height: 204 }} className="flex items-center justify-center shrink-0">
            <div style={{ transform: 'scale(1.5)', transformOrigin: 'center' }}>
              <SelfTileCentered isMicOn={isMicOn} isHandRaised={isHandRaised} />
            </div>
          </div>
        </div>

        {/* ── Bottom section: buttons + page dots ── */}
        <div className="flex flex-col gap-[20px] items-center shrink-0 w-full">

          {/* Buttons area: full-width Unmute/Mute, then Raise + Audio */}
          <div className="flex flex-wrap gap-[10px_13px] items-end w-full relative">

            {/* Toast notification — 10px above the button group */}
            <Toast visible={toastVisible} />

            {/* ── Unmute / Mute button (full width, animated transition) ── */}
            <button
              onClick={onMicToggle}
              className="relative w-full rounded-[296px] overflow-hidden"
              style={{ height: BTN_HEIGHT, WebkitTapHighlightColor: "transparent" }}
            >
              {/* Solid colour fill — transitions between Unmute (#291AC0) and Mute (#5961EE) */}
              <div
                className="absolute inset-0 rounded-[296px]"
                style={{
                  backgroundColor: muteButtonBg,
                  transition: "background-color 0.35s ease",
                }}
              />
              {/* Cross-fading content */}
              <div className="relative flex items-center justify-center w-full h-full">
                {/* Unmute label */}
                <div
                  className="absolute flex gap-[12px] items-center"
                  style={{ opacity: isMicOn ? 0 : 1, transition: "opacity 0.25s ease", pointerEvents: isMicOn ? "none" : "auto" }}
                >
                  <div className="flex items-center justify-center size-[28px]"><MicOnIcon size={25.2} color="white" /></div>
                  <span className="text-white text-[22px] text-center whitespace-nowrap" style={sfDisplaySemibold22}>Unmute</span>
                </div>
                {/* Mute label */}
                <div
                  className="absolute flex gap-[12px] items-center"
                  style={{ opacity: isMicOn ? 1 : 0, transition: "opacity 0.25s ease", pointerEvents: isMicOn ? "auto" : "none" }}
                >
                  <div className="flex items-center justify-center size-[28px]"><MicOffIcon size={28} color="white" /></div>
                  <span className="text-white text-[22px] text-center whitespace-nowrap" style={sfDisplaySemibold22}>Mute</span>
                </div>
              </div>
            </button>

            {/* ── Raise button — #1D1D1D ── */}
            <button
              onClick={onHandRaiseToggle}
              className="relative rounded-[296px] overflow-hidden"
              style={{ width: "calc(50% - 6.5px)", height: BTN_HEIGHT, WebkitTapHighlightColor: "transparent" }}
            >
              <div className="absolute inset-0 bg-[#1D1D1D] rounded-[296px]" />
              <div className="relative flex gap-[10px] items-center justify-center w-full h-full">
                <HandIcon />
                <span className="text-white text-[22px] text-center whitespace-nowrap" style={sfDisplaySemibold22}>
                  {isHandRaised ? "Lower" : "Raise"}
                </span>
              </div>
            </button>

            {/* ── Audio button — #1D1D1D ── */}
            <div className="relative" style={{ width: "calc(50% - 6.5px)" }} ref={audioPickerRef}>
              <button
                onClick={() => {
                  if (!showAudioPicker && speakerBtnRef.current && containerRef.current) {
                    const btnRect = speakerBtnRef.current.getBoundingClientRect();
                    const ctrRect = containerRef.current.getBoundingClientRect();
                    const btnCenterX = btnRect.left + btnRect.width / 2 - ctrRect.left;
                    const bottomFromCtr = ctrRect.height - (btnRect.top - ctrRect.top) + 8;
                    const rightFromCtr = ctrRect.width - btnCenterX - 125;
                    setMenuPos({ bottom: bottomFromCtr, right: Math.max(rightFromCtr, 8) });
                  }
                  setShowAudioPicker(prev => !prev);
                }}
                className="relative w-full rounded-[296px] overflow-hidden active:opacity-50 transition-opacity duration-100"
                style={{ height: BTN_HEIGHT, WebkitTapHighlightColor: "transparent" }}
                ref={speakerBtnRef}
              >
                <div className="absolute inset-0 bg-[#1D1D1D] rounded-[296px]" />
                <div className="relative flex gap-[10px] items-center justify-center w-full h-full">
                  <SpeakerIcon />
                  <span className="text-white text-[22px] text-center whitespace-nowrap" style={sfDisplaySemibold22}>Audio</span>
                </div>
              </button>
            </div>
          </div>

          {/* Page indicator spacer — matches bottom: 96 dot position used across all views */}
          <div style={{ height: 118 }} />
        </div>
      </div>

      {/* ── iOS Context Menu: Audio Device Picker (portal to container root) ── */}
      {showAudioPicker && (
        <>
          {/* Scrim — tapping outside dismisses */}
          <div
            className="absolute inset-0 z-40"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            onClick={() => setShowAudioPicker(false)}
          />
          {/* Context menu surface */}
          <div
            className="absolute z-50 w-[250px]"
            style={{
              bottom: menuPos ? `${menuPos.bottom}px` : "220px",
              right: menuPos ? `${menuPos.right}px` : undefined,
              left: menuPos ? undefined : "50%",
              transform: menuPos ? undefined : "translateX(-50%)",
            }}
            ref={audioPopupRef}
          >
            <div
              className="rounded-[14px] overflow-hidden"
              style={{
                backgroundColor: "rgba(44,44,46,0.55)",
                backdropFilter: "saturate(190%) blur(40px)",
                WebkitBackdropFilter: "saturate(190%) blur(40px)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.45), 0 0 0 0.33px rgba(255,255,255,0.1)",
              }}
            >
              {/* Section header — balanced vertical padding */}
              <div className="px-[16px] py-[11px]">
                <p
                  className="text-[#98989f] text-[13px]"
                  style={{
                    fontFamily: "var(--font-sf-pro)",
                    fontWeight: 400,
                    lineHeight: "16px",
                    letterSpacing: "-0.08px",
                  }}
                >
                  Audio Output
                </p>
              </div>

              {/* Menu items */}
              {audioDevices.map((device) => {
                const isSelected = selectedAudio === device.id;
                return (
                  <div key={device.id}>
                    {/* Full-width hairline separator */}
                    <div className="h-px bg-[rgba(84,84,88,0.36)]" />

                    <button
                      onClick={() => handleAudioSelect(device.id)}
                      className="w-full flex items-center gap-[10px] pl-[16px] pr-[14px] py-[11px] active:bg-[rgba(255,255,255,0.12)]"
                    >
                      {/* Leading checkmark — occupies space even when unchecked for alignment */}
                      <div className="shrink-0 w-[16px] flex items-center justify-center">
                        {isSelected && (
                          <svg className="size-[13px]" fill="none" viewBox="0 0 13 13">
                            <path
                              d="M1.5 7L5 10.5L11.5 2.5"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>

                      {/* Label + subtitle */}
                      <div className="flex-1 flex flex-col items-start min-w-0">
                        <span
                          className="text-white text-[17px] truncate w-full text-left"
                          style={{
                            fontFamily: "var(--font-sf-pro)",
                            fontWeight: 400,
                            lineHeight: "22px",
                            letterSpacing: "-0.41px",
                          }}
                        >
                          {device.name}
                        </span>
                        {device.connected && (
                          <div className="flex items-center gap-[4px] mt-[1px]">
                            <div className="w-[6px] h-[6px] rounded-full bg-[#30D158]" />
                            <span
                              className="text-[#98989f] text-[12px]"
                              style={{
                                fontFamily: "var(--font-sf-pro)",
                                fontWeight: 400,
                                lineHeight: "16px",
                                letterSpacing: "-0.08px",
                              }}
                            >
                              Connected
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Trailing device icon */}
                      <div className="shrink-0 w-[24px] flex items-center justify-center opacity-60">
                        <AudioDeviceIcon icon={device.icon} />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}