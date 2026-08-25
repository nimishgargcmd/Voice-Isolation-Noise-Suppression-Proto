import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import { MicOnIcon } from "@/app/components/MicOnIcon";
import { MicOffIcon } from "@/app/components/MicOffIcon";
import { VideoOnIcon } from "@/app/components/VideoOnIcon";
import { VideoOffIcon } from "@/app/components/VideoOffIcon";
import { BluetoothIcon, PhoneIcon, SpeakerIcon } from "@/app/components/AudioRouteIcons";
import { DesktopIcon } from "@/app/components/DesktopIcon";
import { VideoSwitchIcon } from "@/app/components/VideoSwitchIcon";
import { BackgroundEffectsIcon } from "@/app/components/moreMenuIcons";
import { IconCheck, IconChevronRight, IconDismiss, IconSettings } from "@/app/components/profile/fluentIcons";
import { useCamera } from "@/app/components/CameraContext";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import { BottomSheet } from "@/app/components/BottomSheet";
import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";

// Pre-join self-view backup image
import imgSelf from "@/assets/figma/account/udayan.jpg";
import imgMsLogo from "figma:asset/ms-logo.png";

/* ─── Audio Device Data (same as On-the-go mode) ─── */

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

function AudioDeviceIcon({ icon }: { icon: AudioDevice["icon"] }) {
  switch (icon) {
    case "phone": return <PhoneIcon />;
    case "speaker": return <SpeakerIcon />;
    case "bluetooth": return <BluetoothIcon />;
  }
}

/* ─── Animated Dots for Connecting State ─── */

function AnimatedDots() {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  // Render "Connecting" with animated trailing dots
  const dots = ".".repeat(dotCount);
  const hiddenDots = ".".repeat(3 - dotCount);

  return (
    <span>
      Connecting{dots}
      <span className="opacity-0">{hiddenDots}</span>
    </span>
  );
}

/* ─── PreJoinPage Component ─── */

export function PreJoinPage() {
  const navigate = useNavigate();
  const meeting = useActiveMeeting();
  // Final Vision keeps the original round-pill Join button (Figma Make baseline
  // `ButtonsOnPreJoin` → rounded-[50px]); FY27 MVP uses the Teams 2 iOS Accent
  // button (rounded-[8px], Figma 1143:60669).
  const { activeVersionId } = useVersion();
  const isFy27Mvp = isMvpFamily(activeVersionId);
  const isMvpCheckpoint = activeVersionId === "mvp-checkpoint";

  // A/V control state
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [preJoinVoiceNoiseMode, setPreJoinVoiceNoiseMode] = useState<"off" | "noise-suppression" | "voice-isolation">(meeting.voiceNoiseMode);
  const [isAvSettingsSheetOpen, setIsAvSettingsSheetOpen] = useState(false);
  const [avSettingsView, setAvSettingsView] = useState<"main" | "background-effects">("main");
  const [backgroundEffect, setBackgroundEffect] = useState<"none" | "blur">("none");
  const [isDesktopFriendlyView, setIsDesktopFriendlyView] = useState(false);
  const [isVoiceIsolationConsentOpen, setIsVoiceIsolationConsentOpen] = useState(false);
  const [hasVoiceIsolationConsent, setHasVoiceIsolationConsent] = useState<boolean>(() => {
    try {
      return window.localStorage.getItem("voiceIsolationConsentAccepted") === "true";
    } catch {
      return false;
    }
  });
  const [showAudioPicker, setShowAudioPicker] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState<string>("phone");
  const audioPickerRef = useRef<HTMLDivElement>(null);
  const audioPopupRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const speakerBtnRef = useRef<HTMLButtonElement>(null);
  const [menuPos, setMenuPos] = useState<{ bottom: number; right: number } | null>(null);

  // Shared camera context — single stream for the whole app
  const { stream: cameraStream, cameraError, acquireCamera, setTrackEnabled, attachVideo, flipCamera } = useCamera();

  // Acquire camera on mount (idempotent — no-op if already active)
  useEffect(() => {
    acquireCamera();
  }, [acquireCamera]);

  // Sync track.enabled with local isVideoOn
  useEffect(() => {
    setTrackEnabled(isVideoOn);
  }, [isVideoOn, setTrackEnabled]);

  // Play a short mute/unmute tone (same as MeetingPage)
  const playMuteSound = useCallback(() => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 400;
      osc.connect(gain);
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
      osc.onended = () => ctx.close();
    } catch {
      // Silently swallow if AudioContext is unavailable
    }
  }, []);

  // Close audio picker on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      const isInsideButton = audioPickerRef.current?.contains(target);
      const isInsidePopup = audioPopupRef.current?.contains(target);
      if (!isInsideButton && !isInsidePopup) {
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

  const handleJoinNow = () => {
    if (isConnecting) return;
    setIsConnecting(true);
    // Save A/V state to context so MeetingPage can pick it up
    meeting.setMicOn(isMicOn);
    meeting.setVideoOn(isVideoOn);
    if (isMvpCheckpoint) {
      meeting.setVoiceNoiseMode(preJoinVoiceNoiseMode);
    }
    setTimeout(() => {
      navigate("/meeting", { replace: true });
    }, 2000);
  };

  const handleSelectPreJoinVoiceNoiseMode = (mode: "off" | "noise-suppression" | "voice-isolation") => {
    if (mode === "voice-isolation" && !hasVoiceIsolationConsent) {
      setIsAvSettingsSheetOpen(false);
      setIsVoiceIsolationConsentOpen(true);
      return;
    }
    setPreJoinVoiceNoiseMode(mode);
    setIsAvSettingsSheetOpen(false);
  };

  const handleAcceptVoiceIsolationConsent = () => {
    setHasVoiceIsolationConsent(true);
    try {
      window.localStorage.setItem("voiceIsolationConsentAccepted", "true");
    } catch {
      // Ignore storage failures in prototype mode.
    }
    setPreJoinVoiceNoiseMode("voice-isolation");
    setIsVoiceIsolationConsentOpen(false);
  };

  const handleDenyVoiceIsolationConsent = () => {
    // Keep existing mode unchanged (off or noise suppression).
    setIsVoiceIsolationConsentOpen(false);
  };

  const handleBack = () => {
    navigate("/calendar", { replace: true });
  };

  /* ── Shared sub-elements (rendered once, positioned differently per state) ── */
  // Video-ON: the tile content sits on a black (hardcoded) scrim over the live feed → use the
  // fixed-white "global" tokens (don't flip with theme). Video-OFF: content sits on surface/subtle-base → primary.
  const tileIconColor = isVideoOn ? "var(--fy27-icon-global)" : "var(--fy27-icon-primary)";
  const tileTextClass = isVideoOn ? "text-fy27-text-global" : "text-fy27-text-primary";

  const topBarContent = (
    <div className="flex items-center justify-between px-[16px] w-full">
      {/* Left: A/V settings */}
      {isMvpCheckpoint ? (
        <button
          type="button"
          onClick={() => {
            setAvSettingsView("main");
            setIsAvSettingsSheetOpen(true);
          }}
          aria-label="Open audio and video settings"
          title="Audio and video settings"
          className="flex items-center justify-center gap-[8px] active:opacity-65"
        >
          <span
            className="size-[28px] inline-flex items-center justify-center"
            style={{ color: tileIconColor }}
          >
            <IconSettings />
          </span>
          <span className={`text-[12px] leading-[16px] whitespace-nowrap ${tileTextClass}`}>
            A/V settings
          </span>
        </button>
      ) : (
        <div className="flex gap-[8px] items-center">
          <div className="size-[24px] inline-flex items-center justify-center shrink-0" style={{ color: tileIconColor }}>
            <BackgroundEffectsIcon size={20} />
          </div>
          <p className={`text-[12px] ${tileTextClass}`} style={{ fontWeight: 400, lineHeight: "16px" }}>
            Background effects
          </p>
        </div>
      )}
      {/* Right: Flip camera (front/back) — wired to the shared camera context, same as SelfTile */}
      <button
        type="button"
        onClick={() => { void flipCamera(); }}
        aria-label="Flip camera"
        className="size-[24px] flex items-center justify-center shrink-0 cursor-pointer active:opacity-50 transition-opacity duration-100"
        style={{ color: tileIconColor }}
      >
        <VideoSwitchIcon size={20} />
      </button>
    </div>
  );

  const controlsContent = (
    <div className={`w-full flex items-start justify-between p-[12px] ${
      isVideoOn ? 'bg-gradient-to-t from-[rgba(0,0,0,0.73)] to-[rgba(0,0,0,0)]' : ''
    }`}>
      {/* Video toggle */}
      <button
        onClick={() => setIsVideoOn(v => !v)}
        className="flex flex-[1_0_0] flex-col items-center justify-center overflow-clip relative cursor-pointer"
      >
        <div className="flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0">
          <div className="h-[28px] w-[28px] flex items-center justify-center shrink-0">
            <div className="h-[28px] w-[24px] relative shrink-0 flex items-center justify-center">
              {isVideoOn
                ? <VideoOnIcon width={20} height={14} color={tileIconColor} />
                : <VideoOffIcon width={24} height={28} color={tileIconColor} />
              }
            </div>
          </div>
          <p className={`text-[12px] text-center ${tileTextClass}`} style={{ fontWeight: 400, lineHeight: "16px" }}>
            {isVideoOn ? "Video is on" : "Video is off"}
          </p>
        </div>
      </button>

      {/* Mic toggle */}
      <div className="flex flex-[1_0_0] flex-col items-center justify-center overflow-clip relative">
        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              playMuteSound();
              setIsMicOn(m => !m);
            }}
            className="h-[28px] w-[28px] flex items-center justify-center shrink-0 relative cursor-pointer"
            aria-label={isMicOn ? "Mute" : "Unmute"}
          >
            {isMicOn ? (
              <MicOnIcon size={21.6} color={tileIconColor} />
            ) : (
              <MicOffIcon size={24} color={tileIconColor} />
            )}
          </button>
        </div>

        <p className={`mt-[4px] text-[12px] text-center ${tileTextClass}`} style={{ fontWeight: 400, lineHeight: "16px" }}>
          {isMicOn ? "Mic is on" : "Mic is off"}
        </p>
      </div>

      {/* Speaker / Audio device picker */}
      <div className="flex flex-[1_0_0] flex-col items-center justify-center overflow-clip relative" ref={audioPickerRef}>
        <button
          ref={speakerBtnRef}
          onClick={() => {
            // Compute position before opening
            if (!showAudioPicker && speakerBtnRef.current && pageRef.current) {
              const btnRect = speakerBtnRef.current.getBoundingClientRect();
              const pageRect = pageRef.current.getBoundingClientRect();
              const btnCenterX = btnRect.left + btnRect.width / 2 - pageRect.left;
              const bottomFromPage = pageRect.height - (btnRect.top - pageRect.top) + 8;
              // Right edge of menu should align near the right edge of the button
              const rightFromPage = pageRect.width - btnCenterX - 125; // 125 = half of 250px menu
              setMenuPos({ bottom: bottomFromPage, right: Math.max(rightFromPage, 8) });
            }
            setShowAudioPicker(prev => !prev);
          }}
          className="flex flex-col gap-[4px] items-center justify-center relative shrink-0 cursor-pointer active:opacity-50 transition-opacity duration-100"
        >
          <div className="h-[28px] w-[28px] flex items-center justify-center shrink-0">
            <div className="size-[24px] overflow-clip relative shrink-0" style={{ color: tileIconColor }}>
              <SpeakerIcon size={20} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
          <p className={`text-[12px] text-center ${tileTextClass}`} style={{ fontWeight: 400, lineHeight: "16px" }}>
            {audioDevices.find(d => d.id === selectedAudio)?.name || "Speaker"}
          </p>
        </button>
      </div>
    </div>
  );

  return (
    <div
      ref={pageRef}
      className="w-full h-full bg-fy27-surface flex flex-col relative overflow-hidden pt-[59px]"
      style={{ fontFamily: "var(--font-sf-pro)" }}
    >
      {/* ─── Main Content ─── */}
      <div className="flex-1 flex flex-col gap-[16px]">
        {/* Top Bar: X button + Meeting Title */}
        <div className="flex gap-[20px] items-center justify-center shrink-0 w-full mx-[0px] mt-[10px] mb-[0px]">
          {/* X / Dismiss button */}
          <div className="shrink-0">
            <button
              onClick={handleBack}
              aria-label="Close pre-join"
              className="size-[48px] flex items-center justify-center"
            >
              <IconDismiss size={20} className="text-fy27-icon-primary" />
            </button>
          </div>
          {/* Title */}
          <div className="flex-1 min-w-0">
            <p className="text-[17px] tracking-[-0.41px] text-fy27-text-primary" style={{ fontWeight: 600, lineHeight: "22px" }}>
              Marketing Team Sync
            </p>
          </div>
        </div>

        {/* MS Logo (32x32) */}
        <div className="flex items-center justify-center shrink-0 w-full">
          <img src={imgMsLogo} alt="Microsoft" className="w-8 h-8" />
        </div>

        {/* Subtitle */}
        <div className="flex items-center justify-center shrink-0 w-full">
          <p className="text-[12px] text-fy27-text-primary" style={{ fontWeight: 400, lineHeight: "16px" }}>
            Choose your audio and video settings
          </p>
        </div>

        {/* ─── Self Tile Card ─── */}
        <div className="flex items-center px-[16px] shrink-0 w-full" style={{ flex: "1 0 0", minHeight: 0 }}>
          <div
            className={`flex-1 self-stretch rounded-[12px] flex flex-col items-center relative ${ isVideoOn ? "overflow-clip" : "bg-fy27-surface-subtle-base justify-between" } px-[0px] pt-[12px] pb-[0px]`}
          >
            {/* ── Video ON: full-bleed image + gradient overlays ── */}
            {isVideoOn && (
              <>
                {/* Full-bleed camera feed (or placeholder fallback) */}
                {cameraError || !cameraStream ? (
                  <img
                    src={imgSelf}
                    alt="You"
                    className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-200 ${backgroundEffect === "blur" ? "blur-[6px] scale-110" : ""} ${isDesktopFriendlyView ? "scale-125" : ""}`}
                  />
                ) : (
                  <video
                    ref={attachVideo}
                    autoPlay
                    playsInline
                    muted
                    className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-200 ${backgroundEffect === "blur" ? "blur-[6px] scale-x-[-1] scale-y-110" : "scale-x-[-1]"} ${isDesktopFriendlyView ? "scale-x-[-1] scale-y-125" : ""}`}
                  />
                )}

                {/* Top gradient overlay */}
                <div className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black/50 to-transparent pt-[12px]">
                  {topBarContent}
                </div>

                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 w-full z-10">
                  {controlsContent}
                </div>
              </>
            )}

            {/* ── Video OFF: original layout with UV circle ── */}
            {!isVideoOn && (
              <>
                {/* Top bar (no gradient) */}
                <div className="shrink-0 w-full">
                  {topBarContent}
                </div>

                {/* User avatar (video-off) — show the real account photo, not initials */}
                <div className="shrink-0 size-[144px] rounded-full overflow-hidden relative">
                  <img src={imgSelf} alt="You" className={`w-full h-full object-cover ${backgroundEffect === "blur" ? "blur-[6px] scale-110" : ""}`} />
                </div>

                {/* Controls row (no gradient) */}
                {controlsContent}
              </>
            )}
          </div>
        </div>

        {/* Audio Device Picker — iOS Context Menu style (HIG: label left, icon right, checkmark leading) */}
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
                bottom: menuPos ? `${menuPos.bottom}px` : "210px",
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
                {audioDevices.map((device, index) => {
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
                            <span className="text-white"><IconCheck size={13} /></span>
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
                        <div className="shrink-0 w-[24px] flex items-center justify-center opacity-60 text-white">
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

        {isMvpCheckpoint && (
        <BottomSheet
          open={isAvSettingsSheetOpen}
          onClose={() => {
            setIsAvSettingsSheetOpen(false);
            setAvSettingsView("main");
          }}
          ariaLabel="Audio and video settings"
          surfaceClassName="bg-fy27-surface-tertiary"
          className="px-0 pb-[max(14px,env(safe-area-inset-bottom))]"
        >
          {avSettingsView === "main" ? (
          <div className="py-[4px]">
            <div className="px-[20px] pt-[4px] pb-[18px] text-center">
              <p className="text-fy27-text-primary text-[20px]" style={{ fontWeight: 600, lineHeight: "26px" }}>
                Settings
              </p>
            </div>
            <div className="px-[20px] pb-[8px]">
              <p className="text-fy27-text-primary text-[17px] tracking-[-0.41px]" style={{ fontWeight: 600, lineHeight: "22px" }}>
                Microphone settings
              </p>
            </div>
            {([
              { id: "off", label: "Default", description: "No additional filtering" },
              { id: "noise-suppression", label: "Noise suppression", description: "Reduces background noise" },
              { id: "voice-isolation", label: "Voice isolation", description: "Keeps only your voice audible" },
            ] as const).map((option) => {
              const isSelected = preJoinVoiceNoiseMode === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelectPreJoinVoiceNoiseMode(option.id)}
                  className="w-full px-[20px] py-[12px] flex items-start gap-[16px] text-left text-fy27-text-primary active:opacity-70"
                >
                  <span
                    className={`mt-[2px] inline-flex items-center justify-center size-[20px] rounded-full border shrink-0 ${
                      isSelected
                        ? "bg-fy27-brand border-fy27-brand text-white"
                        : "border-fy27-icon-secondary text-transparent"
                    }`}
                    aria-hidden="true"
                  >
                    {isSelected ? (
                      <IconCheck size={12} />
                    ) : null}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-fy27-text-primary" style={{ fontSize: "17px", letterSpacing: "-0.41px", lineHeight: "22px" }}>
                      {option.label}
                    </span>
                    <span className="block text-fy27-text-secondary mt-[1px]" style={{ fontSize: "13px", lineHeight: "18px" }}>
                      {option.description}
                    </span>
                  </span>
                </button>
              );
            })}
            <div className="px-[20px] pt-[24px] pb-[8px]">
              <p className="text-fy27-text-primary text-[17px] tracking-[-0.41px]" style={{ fontWeight: 600, lineHeight: "22px" }}>
                Video settings
              </p>
            </div>
            <button
              type="button"
              onClick={() => setAvSettingsView("background-effects")}
              className="w-full px-[20px] py-[12px] flex items-center gap-[16px] text-left text-fy27-text-primary active:opacity-70"
            >
              <span className="size-[24px] shrink-0 inline-flex items-center justify-center" aria-hidden="true">
                <BackgroundEffectsIcon size={24} />
              </span>
              <span className="flex-1 text-[17px] leading-[22px] tracking-[-0.41px]">Background effects</span>
              <IconChevronRight size={20} className="text-fy27-icon-secondary" />
            </button>
            <div className="mx-[20px] h-px bg-fy27-divider" />
            <div className="w-full px-[20px] py-[12px] flex items-center gap-[16px] text-fy27-text-primary">
              <span className="size-[24px] shrink-0 inline-flex items-center justify-center" aria-hidden="true">
                <DesktopIcon size={24} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-[17px] leading-[22px] tracking-[-0.41px]">Desktop-friendly view</span>
                <span className="block text-fy27-text-secondary text-[13px] leading-[18px] mt-[1px]">Crops the top and bottom to fill a widescreen frame</span>
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={isDesktopFriendlyView}
                aria-label="Desktop-friendly view"
                onClick={() => setIsDesktopFriendlyView((current) => !current)}
                className={`relative w-[52px] h-[32px] rounded-full shrink-0 transition-colors ${isDesktopFriendlyView ? "bg-fy27-brand" : "bg-fy27-icon-disabled"}`}
              >
                <span className={`absolute left-0 top-[2px] size-[28px] rounded-full bg-white shadow-sm transition-transform ${isDesktopFriendlyView ? "translate-x-[22px]" : "translate-x-[2px]"}`} />
              </button>
            </div>
          </div>
          ) : (
            <div className="py-[4px]">
              <div className="px-[12px] pt-[4px] pb-[14px] flex items-center">
                <button
                  type="button"
                  aria-label="Back to settings"
                  onClick={() => setAvSettingsView("main")}
                  className="size-[40px] inline-flex items-center justify-center text-fy27-icon-primary active:opacity-65"
                >
                  <IconChevronRight size={24} className="rotate-180" />
                </button>
                <p className="flex-1 pr-[40px] text-center text-fy27-text-primary text-[20px] leading-[26px] font-semibold">Background effects</p>
              </div>
              {([
                { id: "none", label: "None" },
                { id: "blur", label: "Blur" },
              ] as const).map((option) => {
                const isSelected = backgroundEffect === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setBackgroundEffect(option.id)}
                    className="w-full px-[20px] py-[14px] flex items-center gap-[16px] text-left text-fy27-text-primary active:opacity-70"
                  >
                    <span className={`inline-flex items-center justify-center size-[20px] rounded-full border shrink-0 ${isSelected ? "bg-fy27-brand border-fy27-brand text-white" : "border-fy27-icon-secondary text-transparent"}`} aria-hidden="true">
                      {isSelected ? (
                        <IconCheck size={12} />
                      ) : null}
                    </span>
                    <span className="text-[17px] leading-[22px] tracking-[-0.41px]">{option.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </BottomSheet>
        )}

        {isMvpCheckpoint && isVoiceIsolationConsentOpen && (
          <div className="absolute inset-0 z-[95] flex items-center justify-center px-[20px]" style={{ fontFamily: "var(--font-sf-pro)" }}>
            <button
              aria-label="Close voice isolation consent"
              className="absolute inset-0 bg-black/45"
              onClick={handleDenyVoiceIsolationConsent}
            />
            <div className="relative w-full max-w-[360px] rounded-[18px] bg-fy27-surface-raised border border-fy27-divider shadow-[0px_16px_48px_rgba(0,0,0,0.36)] p-[16px]">
              <div className="text-fy27-text-primary text-[20px] leading-[26px] tracking-[-0.41px] font-semibold">
                Turn on Voice isolation?
              </div>
              <div className="mt-[8px] text-fy27-text-secondary text-[14px] leading-[20px]">
                To enable precise Voice isolation, we create a voice signature from your audio. What you say is not recorded, only your voice signature is used.
                <span>{" "}</span>
                <a
                  href="https://privacy.microsoft.com/privacystatement"
                  target="_blank"
                  rel="noreferrer"
                  className="text-fy27-brand underline"
                >
                  Click here to learn more.
                </a>
              </div>
              <div className="mt-[16px] flex justify-end gap-[8px]">
                <button
                  className="h-[36px] px-[14px] rounded-[10px] border border-fy27-divider text-fy27-text-primary bg-fy27-surface active:opacity-70"
                  onClick={handleDenyVoiceIsolationConsent}
                >
                  Not now
                </button>
                <button
                  className="h-[36px] px-[14px] rounded-[10px] bg-fy27-brand text-white active:opacity-70"
                  onClick={handleAcceptVoiceIsolationConsent}
                >
                  Turn on
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Signed in text */}
        <div className="flex items-center justify-center px-[16px] w-full">
          <p className="text-[13px] text-fy27-text-primary text-center tracking-[-0.08px]" style={{ fontWeight: 400, lineHeight: "18px" }}>
            Signed in as uvidyanta@microsoft.com
          </p>
        </div>

        {/* ─── Buttons ─── */}
        <div className="shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center px-[16px] w-full mx-[0px] mt-[0px] mb-[40px]">
            {/* Join now — MVP: Accent rounded-8 (Figma 1143:60669); Final Vision: original round pill (rounded-[50px], Figma Make `ButtonsOnPreJoin`) */}
            <button
              onClick={handleJoinNow}
              className={`${isConnecting ? 'bg-[#1f157e]' : 'bg-fy27-brand'} flex items-center justify-center gap-[8px] h-[52px] px-[16px] ${isFy27Mvp ? "rounded-[8px]" : "rounded-[50px]"} shrink-0 w-full cursor-pointer transition-colors duration-150`}
            >
              <p className={`text-[15px] text-center tracking-[-0.24px] whitespace-nowrap ${isConnecting ? "text-fy27-text-global" : "text-fy27-text-on-accent"}`} style={{ fontWeight: 500, lineHeight: "20px" }}>
                {isConnecting ? <AnimatedDots /> : "Join now"}
              </p>
            </button>

            {/* Bottom two buttons: hidden while connecting but keep their layout
                space (visibility only — no displacement). Both versions. */}
            {/* More join options — MVP: Outline rounded-8 (Figma 1143:60671); Final Vision: round pill (rounded-[50px]) */}
            <button
              aria-hidden={isConnecting}
              tabIndex={isConnecting ? -1 : undefined}
              className={`flex items-center justify-center gap-[8px] h-[52px] px-[16px] ${isFy27Mvp ? "rounded-[8px]" : "rounded-[50px]"} border border-fy27-brand shrink-0 w-full cursor-pointer active:opacity-60 transition-opacity duration-100 ${isConnecting ? "invisible" : ""}`}
            >
              <p className="text-fy27-text-interactive text-[15px] text-center tracking-[-0.24px] whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "20px" }}>
                More join options
              </p>
            </button>

            {/* Privacy and cookies — Subtle (Figma 1143:60673): text-only, Button 2 type */}
            <button
              aria-hidden={isConnecting}
              tabIndex={isConnecting ? -1 : undefined}
              className={`flex items-center justify-center gap-[4px] h-[28px] px-[8px] rounded-[4px] shrink-0 cursor-pointer active:opacity-60 transition-opacity duration-100 ${isConnecting ? "invisible" : ""}`}
            >
              <p className="text-fy27-text-interactive text-[13px] text-center tracking-[-0.08px] whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "18px" }}>
                Privacy and cookies
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}