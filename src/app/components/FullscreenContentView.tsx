import React, { useRef, useState, useEffect, useCallback } from "react";
import svgPaths from "@/imports/svg-hlp7gvsm0i";
import handSvgPaths from "@/imports/svg-7ie24l3a57";
import ailSvgPaths from "@/imports/svg-unik707tki";
import backSvgPaths from "@/imports/svg-q96b5e2p6w";
import { MicOnIndicator } from "@/app/components/MicOnIndicator";
import { MicOffIndicator } from "@/app/components/MicOffIndicator";
import { MicOnIcon } from "@/app/components/MicOnIcon";
import { MicOffIcon } from "@/app/components/MicOffIcon";
import { useCamera } from "@/app/components/CameraContext";
import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";
import { SlideshowControlBar } from "@/app/components/versions/mvp/SlideshowControlBar";
import { ParticipantTray } from "@/app/components/versions/mvp/ParticipantTray";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import { buildOrderedStagePeople } from "@/app/lib/stagePeople";
import { SELF_ID } from "@/app/lib/meetingRoster";

// Figma assets — landscape shared content and self-tile
import imgSharedContent from "figma:asset/935052a81bb4997885165a5ec2e99fca09fda760.png";
import imgSharedContentMvp from "@/assets/figma/shared-content/slideshow-share.png";
import imgSelf from "@/assets/figma/account/udayan.jpg";

// ─────────────────────────────────────────────────────────────────
// Exit Fullscreen Button (collapse icon — 4 corners pointing inward)
// Solid black circle with subtle #333 border — positioned top-left
// ─────────────────────────────────────────────────────────────────
function ExitFullscreenButton({ onClick, mvp = false }: { onClick: () => void; mvp?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center p-[10px] rounded-[30px] size-[44px] ${mvp ? "bg-fy27-surface-raised" : "bg-black"}`}
    >
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[30px] ${mvp ? "border-fy27-surface-border" : "border-[#333]"}`} />
      <div className={`relative shrink-0 size-[24px] ${mvp ? "text-fy27-icon-interactive" : ""}`}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={backSvgPaths.p27f23900} fill={mvp ? "currentColor" : "white"} />
        </svg>
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────
// Video Switch (flip camera) glyph — 16-grid, currentColor. Same glyph as SelfTile.
// ─────────────────────────────────────────────────────────────────
function VideoSwitch() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor" style={{ display: "block" }}>
      <path d="M2 2.5C2 1.11929 3.11929 0 4.5 0H9.5C10.8807 0 12 1.11929 12 2.5V3.11308L13.8911 2.08241C14.3909 1.81003 15 2.17178 15 2.74096V7.25907C15 7.82825 14.3909 8.19 13.8911 7.91762L12 6.88695V7.5C12 8.88071 10.8807 10 9.5 10H4.5C3.11929 10 2 8.88071 2 7.5V2.5ZM12 5.74808L14 6.8381V3.16193L12 4.25195V5.74808ZM4.5 1C3.67157 1 3 1.67157 3 2.5V7.5C3 8.32843 3.67157 9 4.5 9H9.5C10.3284 9 11 8.32843 11 7.5V2.5C11 1.67157 10.3284 1 9.5 1H4.5ZM1.66913 9.88882C1.34616 10.0121 1.06056 10.1486 0.822726 10.2986C0.407633 10.5603 0 10.9537 0 11.5C0 12.0463 0.407633 12.4397 0.822726 12.7014C1.26283 12.9789 1.86646 13.2103 2.56787 13.3973C3.97801 13.7734 5.89836 14 8 14C8.09854 14 8.19667 13.9995 8.29438 13.9985L7.14645 15.1464C6.95118 15.3417 6.95118 15.6583 7.14645 15.8536C7.34171 16.0488 7.65829 16.0488 7.85355 15.8536L9.85355 13.8536C10.0488 13.6583 10.0488 13.3417 9.85355 13.1464L7.85355 11.1464C7.65829 10.9512 7.34171 10.9512 7.14645 11.1464C6.95118 11.3417 6.95118 11.6583 7.14645 11.8536L8.29139 12.9985C8.19476 12.9995 8.09762 13 8 13C5.95951 13 4.12986 12.7789 2.82553 12.4311C2.16971 12.2562 1.67499 12.0566 1.35605 11.8555C1.0121 11.6387 1 11.506 1 11.5C1 11.494 1.0121 11.3613 1.35605 11.1445C1.63272 10.97 2.04166 10.7967 2.57329 10.6397C2.22446 10.4508 1.9173 10.1947 1.66913 9.88882ZM11.9238 10.3021C12.2165 10.0572 12.4618 9.75753 12.6439 9.41883C12.9212 9.47523 13.1845 9.53664 13.4321 9.60267C14.1335 9.78971 14.7372 10.0211 15.1773 10.2986C15.5924 10.5603 16 10.9537 16 11.5C16 12.0463 15.5924 12.4397 15.1773 12.7014C14.7372 12.9789 14.1335 13.2103 13.4321 13.3973C13.1661 13.4683 12.882 13.5339 12.5819 13.5937C12.278 13.6542 12 13.4175 12 13.1076C12 12.8633 12.176 12.6553 12.4155 12.6071C12.6845 12.553 12.9381 12.4941 13.1745 12.4311C13.8303 12.2562 14.325 12.0566 14.644 11.8555C14.9879 11.6387 15 11.506 15 11.5C15 11.494 14.9879 11.3613 14.644 11.1445C14.325 10.9434 13.8303 10.7438 13.1745 10.5689C12.7987 10.4687 12.3793 10.379 11.9238 10.3021Z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────
// Content Label Pill — "Aadi Kapoor's content"
// Dark semi-transparent background — positioned bottom-left
// ─────────────────────────────────────────────────────────────────
function ContentLabel({ sharerName }: { sharerName: string }) {
  return (
    <div className="bg-[rgba(0,0,0,0.3)] h-[24px] flex items-center justify-center px-[10px] rounded-[100px]">
      <p
        className="text-white text-[12px] leading-[14px] overflow-hidden text-ellipsis whitespace-nowrap"
        style={{ fontFamily: "var(--font-sf-pro)", fontWeight: 510 }}
      >
        {sharerName}&apos;s content
      </p>
    </div>
  );
}

/** MVP nametag — Teams 2 iOS frosted pill (matches the shared tile / multitasking tile). */
function Fy27ContentLabel({ sharerName }: { sharerName: string }) {
  return (
    <div className="h-[28px] p-[4px] rounded-[3px] bg-fy27-nametag-bg backdrop-blur-[45px] flex items-center max-w-full">
      <span
        className="px-[2px] truncate text-fy27-text-primary text-[12px] leading-[16px]"
        style={{ fontFamily: "var(--font-sf-pro)" }}
      >
        {sharerName}&apos;s content
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Landscape AIL — Horizontal single-row layout at the TOP
// Raised hands pill + Timer pill + Notification pill all in one row
// ─────────────────────────────────────────────────────────────────

function RaisedHandIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={handSvgPaths.p2bb78e00} fill="#FFB900" />
      </svg>
    </div>
  );
}

function RankedName({ rank, name }: { rank: number; name: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center shrink-0">
      <div className="flex items-center shrink-0">
        <p
          className="leading-[22px] text-[#ffb900] text-[17px] tracking-[-0.41px] whitespace-nowrap"
          style={{ fontFamily: "var(--font-sf-display)", fontWeight: 600 }}
        >
          {rank}
        </p>
      </div>
      <div className="flex items-center shrink-0">
        <p
          className="leading-[18px] text-[13px] text-white tracking-[-0.08px] whitespace-nowrap"
          style={{ fontFamily: "var(--font-sf-pro)", fontWeight: 400 }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// MarqueeText — scrolls text horizontally when it overflows
// Measures text vs container; if overflowing, applies a CSS
// translateX animation that scrolls the full overflow distance.
// ─────────────────────────────────────────────────────────────────
function MarqueeText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [overflow, setOverflow] = useState(0);

  const measure = useCallback(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    if (!container || !textEl) return;
    const diff = textEl.scrollWidth - container.clientWidth;
    setOverflow(diff > 1 ? diff : 0);
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(() => measure());
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [measure, text]);

  // Duration scales with overflow distance for consistent scroll speed
  const duration = overflow > 0 ? Math.max(3, overflow / 25) : 0;

  return (
    <div ref={containerRef} className="overflow-hidden flex-1 min-w-0">
      <p
        ref={textRef}
        className={className}
        style={{
          ...style,
          ...(overflow > 0
            ? {
                animation: `marquee-scroll ${duration}s linear infinite alternate`,
                animationDelay: "1s",
              }
            : {}),
        }}
      >
        {text}
      </p>
      {overflow > 0 && (
        <style>{`
          @keyframes marquee-scroll {
            0%, 15% { transform: translateX(0); }
            85%, 100% { transform: translateX(-${overflow}px); }
          }
        `}</style>
      )}
    </div>
  );
}

interface LandscapeRaisedHandsPillProps {
  raisedHands: Array<{ name: string }>;
}

function LandscapeRaisedHandsPill({ raisedHands }: LandscapeRaisedHandsPillProps) {
  // ≥3 raised hands → left-aligned names (scrollable overflow)
  // <3 raised hands → center-aligned names
  const isLeftAligned = raisedHands.length >= 3;

  return (
    <div className="bg-[rgba(85,70,17,0.8)] h-[40px] relative rounded-[9999px] flex items-center overflow-clip px-[16px] py-[8px] gap-[8px] max-w-[35%]">
      {/* Sticky hand icon */}
      <div className="shrink-0">
        <RaisedHandIcon />
      </div>
      {/* Scrollable names — left-aligned when ≥3, centered otherwise */}
      <div className="flex-1 overflow-x-auto overflow-y-clip">
        <div className={`flex gap-[12px] items-center shrink-0 ${isLeftAligned ? "justify-start" : "justify-center"}`}>
          {raisedHands.map((hand, index) => (
            <RankedName key={index} rank={index + 1} name={hand.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Bell/Shield icons for notification pill
function RecordingIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={ailSvgPaths.p22389000} fill="#CC4A31" />
      </svg>
    </div>
  );
}

function LobbyIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={ailSvgPaths.p38f1da00} fill="#E1E1E1" />
      </svg>
    </div>
  );
}

function BellIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={ailSvgPaths.p1a5b6770} fill="#7F85F5" />
      </svg>
    </div>
  );
}

function NotificationBadge({ count }: { count: number }) {
  return (
    <div className="bg-[#7f85f5] h-[12.8px] relative rounded-[80px] shrink-0">
      <div className="flex items-center justify-end size-full">
        <div className="flex items-center justify-end px-[4.8px] relative size-full">
          <p
            className="leading-[12.8px] text-[8.8px] text-black text-center tracking-[0.048px] whitespace-nowrap"
            style={{ fontFamily: "var(--font-sf-pro)", fontWeight: 600 }}
          >
            +{count}
          </p>
        </div>
      </div>
    </div>
  );
}

function LandscapeTimerPill({ minutes, topicName }: { minutes: number; topicName: string }) {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] flex-1 min-w-0 min-h-px relative rounded-[9999px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="flex items-center px-[16px] py-[8px] relative w-full min-w-0">
          <div className="flex flex-1 gap-[8px] items-center min-h-px min-w-0 relative">
            {/* Timer badge with green border */}
            <div className="bg-[rgba(0,0,0,0.9)] h-[20px] relative rounded-[9999px] shrink-0">
              <div className="flex items-center justify-center overflow-clip px-[16px] py-[8px] rounded-[inherit] size-full">
                <p
                  className="leading-[20px] text-[#bebebe] text-[11px] text-center whitespace-nowrap"
                  style={{ fontFamily: "var(--font-sf-pro)", fontWeight: 500 }}
                >
                  {minutes} min
                </p>
              </div>
              {/* Green border ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none rounded-[9999px] border border-solid border-[#37ef46]"
              />
            </div>
            {/* Topic name — marquee scrolls when overflowing */}
            <MarqueeText
              text={topicName}
              className="leading-[20px] text-[11px] text-white whitespace-nowrap"
              style={{ fontFamily: "var(--font-sf-pro)", fontWeight: 500 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function LandscapeNotificationPill({
  isRecording,
  lobbyCount,
  notificationCount,
}: {
  isRecording: boolean;
  lobbyCount: number;
  notificationCount: number;
}) {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] flex h-[36px] items-center justify-center overflow-clip px-[16px] py-[8px] rounded-[9999px] shrink-0">
      <div className="flex gap-[4px] items-center overflow-clip shrink-0">
        <div className="flex gap-[7px] items-end shrink-0">
          {isRecording && <RecordingIcon />}
          {lobbyCount > 0 && <LobbyIcon />}
          <div className="flex items-end shrink-0">
            <BellIcon />
            {notificationCount > 0 && (
              <div className="flex flex-col items-center justify-center px-[2px] py-px shrink-0">
                <NotificationBadge count={notificationCount} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface LandscapeAILProps {
  raisedHands: Array<{ name: string }>;
  timerMinutes: number;
  timerTopicName: string;
  isRecording: boolean;
  lobbyCount: number;
  notificationCount: number;
}

function LandscapeAIL({
  raisedHands,
  timerMinutes,
  timerTopicName,
  isRecording,
  lobbyCount,
  notificationCount,
}: LandscapeAILProps) {
  const hasRaisedHands = raisedHands.length > 0;
  // Pill is visible when there are pending notifications OR active status indicators
  const hasNotifications = notificationCount > 0 || isRecording || lobbyCount > 0;

  return (
    <div className="flex gap-[10px] items-center w-full">
      {/* Raised hands pill — only when hands are raised */}
      {hasRaisedHands && (
        <LandscapeRaisedHandsPill raisedHands={raisedHands} />
      )}

      {/* Secondary header row — timer + notifications side by side */}
      <div className="flex-1 min-w-0 flex items-center justify-between gap-[4px]">
        <LandscapeTimerPill minutes={timerMinutes} topicName={timerTopicName} />
        {hasNotifications && (
          <LandscapeNotificationPill
            isRecording={isRecording}
            lobbyCount={lobbyCount}
            notificationCount={notificationCount}
          />
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Main Fullscreen Content View
//
// Simulates landscape by rotating an 844×390 container 90° CW
// inside the portrait phone frame (390×844).
//
// Landscape coordinate → Portrait visual mapping (after 90° CW):
//   Landscape TOP    → Portrait RIGHT edge
//   Landscape BOTTOM → Portrait LEFT edge
//   Landscape LEFT   → Portrait TOP edge
//   Landscape RIGHT  → Portrait BOTTOM edge
//
// Element positions (in landscape coordinates):
//   Exit button:   top-left
//   AIL:           top strip (right of exit button, spanning width)
//   Content label: bottom-left
//   Self-tile PiP: bottom-right
// ─────────────────────────────────────────────────────────────────

interface FullscreenContentViewProps {
  onExit: () => void;
  sharerName?: string;
  raisedHands?: Array<{ name: string }>;
  timerMinutes?: number;
  timerTopicName?: string;
  isRecording?: boolean;
  lobbyCount?: number;
  notificationCount?: number;
  isMicOn?: boolean;
  isVideoOn?: boolean;
}

export function FullscreenContentView({
  onExit,
  sharerName = "Aadi Kapoor",
  raisedHands = [],
  timerMinutes = 13,
  timerTopicName = "Blockers on Easter campaign timeline",
  isRecording = false,
  lobbyCount = 0,
  notificationCount = 0,
  isMicOn = true,
  isVideoOn = true,
}: FullscreenContentViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { stream, cameraError, attachVideo, flipCamera } = useCamera();
  const { activeVersionId } = useVersion();
  const isFy27Mvp = isMvpFamily(activeVersionId);
  const isMvpCheckpoint = activeVersionId === "mvp-checkpoint";
  // Checkpoint fullscreen shows the vertically-scrolling participant gallery
  // (Figma 1219:47169): self tile pinned at the top, participants below in
  // DESCENDING priority (highest just below the self), flowing top → bottom.
  const meeting = useActiveMeeting();
  const galleryParticipants = isMvpCheckpoint
    ? buildOrderedStagePeople({
        raisedHands: meeting.raisedHands,
        admittedParticipants: meeting.admittedParticipants,
        spotlightedIds: meeting.spotlightedIds,
        pinnedIds: meeting.pinnedIds,
        removedIds: meeting.removedIds,
      })
    : [];

  // iPhone status bar height — portrait TOP = landscape LEFT after 90° CW rotation
  const statusBarH = 59;

  const [dims, setDims] = useState<{ landscapeW: number; landscapeH: number }>({
    landscapeW: 844 - statusBarH,
    landscapeH: 390,
  });

  // Measure the outer container and derive landscape dimensions (swapped axes)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 0 && height > 0) {
        // Landscape width = container height minus status bar (since landscape LEFT = portrait TOP)
        // Landscape height = container width (full width available)
        setDims({ landscapeW: height - statusBarH, landscapeH: width });
      }
    };

    // Initial measurement
    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Compute proportional self-tile size (reference: 136×121 at 844×390)
  const selfTileW = Math.round(dims.landscapeW * (136 / 844));
  const selfTileH = Math.round(dims.landscapeH * (121 / 390));
  // Clamp to reasonable minimums
  const tileW = Math.max(selfTileW, 80);
  const tileH = Math.max(selfTileH, 72);

  return (
    <div ref={containerRef} className={`absolute inset-0 z-50 overflow-hidden ${isFy27Mvp ? "bg-fy27-surface" : "bg-black"}`}>
      {/* Landscape container — dynamically sized, rotated 90° CW to fill portrait frame.
          Offset to avoid the 59px iPhone status bar (portrait TOP = landscape LEFT after rotation).
          We shrink landscapeW by the status bar height and shift the center downward. */}
      <div
        className="absolute"
        style={{
          width: `${dims.landscapeW}px`,
          height: `${dims.landscapeH}px`,
          top: `calc(50% + ${statusBarH / 2}px)`,
          left: "50%",
          transform: "translate(-50%, -50%) rotate(90deg)",
        }}
      >
        {/* Shared content — fills the available space. Checkpoint reserves the
            right edge for the participant filmstrip (108px + 20px padding + gap). */}
        <div className={`absolute top-0 bottom-0 left-0 rounded-[12px] overflow-hidden ${isMvpCheckpoint ? "right-[136px]" : "right-0"}`}>
          <img
            src={isFy27Mvp ? imgSharedContentMvp : imgSharedContent}
            alt={`${sharerName}'s shared content`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* ── Overlay elements ── */}

        {/* Exit fullscreen button — TOP-LEFT of landscape */}
        <div className="absolute top-[10px] left-[14px] z-10">
          <ExitFullscreenButton onClick={onExit} mvp={isFy27Mvp} />
        </div>

        {/* "Aadi Kapoor's content" label — BOTTOM-LEFT of landscape. */}
        <div className="absolute bottom-[14px] left-[14px] z-10">
          {isFy27Mvp ? <Fy27ContentLabel sharerName={sharerName} /> : <ContentLabel sharerName={sharerName} />}
        </div>

        {/* Slideshow control bar (MVP) — floating pill, BOTTOM-CENTER of the
            content area. Checkpoint centres it over the narrowed content (shifted
            left by half the filmstrip reserve), then nudges it right so its left
            edge clears the bottom-left name tag by 20px. */}
        {isFy27Mvp && (
          <div className={`absolute bottom-[8px] -translate-x-1/2 z-10 ${isMvpCheckpoint ? "left-[calc(50%-38px)]" : "left-1/2"}`}>
            <SlideshowControlBar />
          </div>
        )}

        {/* Self-tile PiP — BOTTOM-RIGHT of landscape. MVP bottom-aligns with the
            content nametag (bottom-[14px]); FV keeps its bottom-[20px]. Hidden in
            checkpoint (replaced by the vertical participant gallery below). */}
        {!isMvpCheckpoint && (
        <div className={`absolute right-[20px] z-10 ${isFy27Mvp ? "bottom-[14px]" : "bottom-[20px]"}`}>
          {isFy27Mvp ? (
            /* MVP — Teams 2 iOS "Default landscape" self tile (Figma 1124:4281):
               fixed 100×75, rounded-4 + fg/stroke border, top gradient, camera-flip
               top-right, and an icon-only mic nametag (icon.success/danger, matching
               the non-fullscreen self tile). Video-off shows a circular avatar. */
            <div
              className="relative rounded-[4px] overflow-hidden border border-fy27-fg-stroke shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]"
              style={{ width: 120, height: 90 }}
            >
              {isVideoOn ? (
                !cameraError && stream ? (
                  <video
                    ref={attachVideo}
                    autoPlay
                    playsInline
                    muted
                    className="absolute object-cover"
                    style={{
                      width: "90px",
                      height: "120px",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%) rotate(-90deg) scaleX(-1)",
                    }}
                  />
                ) : (
                  /* Video on but no camera feed — photo fills the tile. No counter-rotation:
                     it rotates WITH the landscape container (like the shared slide). */
                  <img
                    src={imgSelf}
                    alt="You"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )
              ) : (
                /* Video off — circular avatar centered on the tile surface (rotates
                   with the landscape container, like the shared slide). */
                <div className="absolute inset-0 flex items-center justify-center bg-fy27-surface-subtle-base">
                  <div className="relative rounded-full overflow-hidden" style={{ width: 44, height: 44 }}>
                    <img
                      src={imgSelf}
                      alt="You"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Top gradient scrim */}
              <div className="absolute top-0 left-0 right-0 h-[40px] bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

              {/* Camera flip — TOP-RIGHT */}
              <button
                type="button"
                aria-label="Switch camera"
                onClick={() => { void flipCamera(); }}
                className="absolute top-0 right-0 size-[32px] flex items-center justify-center text-fy27-icon-global"
              >
                <VideoSwitch />
              </button>

              {/* Name tag — bottom-left, icon-only mic (success/danger) */}
              <div className="absolute bottom-0 left-0 p-[4px]">
                <div className="flex items-center rounded-[3px] bg-fy27-nametag-bg backdrop-blur-[45px]">
                  <span className="shrink-0 grid place-items-center size-[20px]">
                    {isMicOn ? <MicOnIcon size={12} color="var(--fy27-icon-success)" /> : <MicOffIcon size={14} color="var(--fy27-icon-danger)" />}
                  </span>
                </div>
              </div>
            </div>
          ) : (
          <div
            className="relative rounded-[20px] overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]"
            style={{ width: tileW, height: tileH }}
          >
            {/* Self-view: live camera when video on, UV initials when video off */}
            {isVideoOn ? (
              cameraError || !stream ? (
                <img
                  src={imgSelf}
                  alt="You"
                  className="absolute inset-0 object-cover rounded-[20px]"
                  style={{
                    width: `${tileH}px`,
                    height: `${tileW}px`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) rotate(-90deg)',
                  }}
                />
              ) : (
                <video
                  ref={attachVideo}
                  autoPlay
                  playsInline
                  muted
                  className="absolute object-cover rounded-[20px]"
                  style={{
                    width: `${tileH}px`,
                    height: `${tileW}px`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) rotate(-90deg) scaleX(-1)',
                  }}
                />
              )
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 rounded-[20px]">
                <div className="w-12 h-12 rounded-full bg-[#5b5fc7] flex items-center justify-center text-white text-lg" style={{ fontWeight: 600 }}>
                  UV
                </div>
              </div>
            )}

            {/* Network indicator — top right */}
            <div className="absolute top-[8px] right-[7px]">
              <div className="w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-[4px] bg-black/60">
                <div className="flex items-end gap-[2px] h-[10px]">
                  <div className="w-[2px] h-[4px] bg-white rounded-[22px]" />
                  <div className="w-[2px] h-[7px] bg-white rounded-[22px]" />
                  <div className="w-[2px] h-[10px] bg-white/30 rounded-[22px]" />
                </div>
              </div>
            </div>

            {/* Mic indicator — reactive, using canonical components */}
            <div className="absolute bottom-[8px] right-[7px]">
              {isMicOn ? <MicOnIndicator /> : <MicOffIndicator />}
            </div>

            {/* Name tag — "You" */}
            <div className="absolute bottom-[9px] left-[9px] bg-black/50 backdrop-blur-[5px] h-[24px] flex items-center justify-center px-[10px] rounded-[100px]">
              <p
                className="text-white text-[12px] leading-[14px]"
                style={{ fontFamily: "var(--font-sf-pro)", fontWeight: 510 }}
              >
                You
              </p>
            </div>
          </div>
          )}
        </div>
        )}

        {/* Checkpoint — vertically-scrolling participant gallery on the right edge
            (self sticky at the bottom), replacing the single self-tile PiP.
            20px padding on the right. */}
        {isMvpCheckpoint && (
          <div className="absolute right-[20px] top-0 bottom-0 z-10">
            <ParticipantTray
              orientation="vertical"
              participants={galleryParticipants}
              isVideoOn={isVideoOn}
              isMicOn={isMicOn}
              isHandRaised={meeting.raisedHands.includes(SELF_ID)}
            />
          </div>
        )}
      </div>
    </div>
  );
}