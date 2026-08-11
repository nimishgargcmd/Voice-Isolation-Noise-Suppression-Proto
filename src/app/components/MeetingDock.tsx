import React, { useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import { useCamera } from "@/app/components/CameraContext";
import { useDockUI, type DockState } from "@/app/components/DockUIContext";
import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";
import { useVisualViewport } from "@/app/lib/useVisualViewport";
import { setLastDockState, getDockHasEnteredSession, setDockHasEnteredSession } from "@/app/lib/dockPersist";
import { motion, AnimatePresence } from "motion/react";
import { MicOnIndicator } from "@/app/components/MicOnIndicator";
import { MicOffIndicator } from "@/app/components/MicOffIndicator";
import { MeetingTile, NameTag } from "@/app/components/MeetingTile";
import { Camera, CameraOff, Mic, MicOff, CallEnd } from "@/app/components/ubarIcons";
import { IncomingAudioIndicator } from "@/app/components/IncomingAudioIndicator";

// Figma assets — shared content slide & self-view
import imgSharedContent from "figma:asset/f3edab3305d6980218cc52719020bc598b4a6331.png";
import imgSelfView from "@/assets/figma/account/udayan.jpg";

// Active speaker avatar — Miguel Silva (from MeetingStage, canonical Figma asset)
import imgActiveSpeaker from "figma:asset/685fc6dc030aab2cbea5b15f523d9ce42c11d689.png";

// MVP meeting imagery — active speaker (Aadi Kapoor) + shared-content slide, so the
// MVP dock tiles reuse the same people/content library as the MVP gallery.
import imgAadi from "@/assets/figma/people/aadi-kapoor.png";
import imgMvpSharedContent from "@/assets/figma/shared-content/slideshow-share.png";

// SVG icon paths from the Figma dock reference
import recordingSvgPaths from "@/imports/svg-unik707tki";

/* ─── Utility ─── */

function formatElapsed(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function playLeaveSound() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 350;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.25);
    osc.onended = () => ctx.close();
  } catch {
    // Silently swallow
  }
}

function playMuteSound(unmuting: boolean) {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = unmuting ? 800 : 400;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
    osc.onended = () => ctx.close();
  } catch {
    // Silently swallow
  }
}

/* ─── Icon Sub-components (matching Figma exactly) ─── */

// Control icon color: dark on the light dock surface
const CTRL = "var(--fy27-icon-primary)";

// Exact Fluent glyphs (shared with the U-bar) centered in the 40px control —
// no overflow-clip box, so on/off render consistently and nothing crops.
function DockVideoOnIcon() {
  return <div className="shrink-0 size-[40px] flex items-center justify-center" style={{ color: CTRL }}><Camera size={24} /></div>;
}

function DockVideoOffIcon() {
  return <div className="shrink-0 size-[40px] flex items-center justify-center" style={{ color: CTRL }}><CameraOff size={24} /></div>;
}

function DockMicOnIcon() {
  return <div className="shrink-0 size-[40px] flex items-center justify-center" style={{ color: CTRL }}><Mic size={24} /></div>;
}

function DockMicOffIcon() {
  return <div className="shrink-0 size-[40px] flex items-center justify-center" style={{ color: CTRL }}><MicOff size={24} /></div>;
}

function RecordingDot() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={recordingSvgPaths.p22389000} fill="#CC4A31" />
      </svg>
    </div>
  );
}

function EndCallButton() {
  return (
    <div className="shrink-0 size-[40px] flex items-center justify-center" style={{ color: "var(--fy27-icon-mention)" }}>
      <CallEnd size={24} />
    </div>
  );
}

/** Content expand icon for shared-content tile (matching Figma's top-right badge) */
function ContentExpandBadge() {
  return (
    <div className="absolute right-[10px] top-[10px] size-[32px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" fill="#878BFB" opacity="0.5" r="16" />
      </svg>
      <div className="absolute inset-[15.63%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <circle cx="11" cy="11" fill="#878BFB" r="11" />
        </svg>
      </div>
      {/* Pause bars */}
      <div className="absolute bg-[rgba(255,255,255,0.8)] rounded-[22px]" style={{ top: "37.5%", bottom: "37.5%", left: "34.38%", right: "59.38%" }}>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.5px_0.2px_0.2px_0px_white]" />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.8)] rounded-[22px]" style={{ top: "37.5%", bottom: "37.5%", left: "59.38%", right: "34.38%" }}>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.5px_0.2px_0.2px_0px_white]" />
      </div>
    </div>
  );
}

/* ─── Swipe-to-collapse hook ─── */

/** Shared pointer-tracking logic for swipe-up to collapse / swipe-down to expand.
 *  Returns handlers to spread on any container, plus a `wasDragging` ref so
 *  click handlers can bail out after a swipe. */
function useSwipeGesture(
  isExpanded: boolean,
  setExpanded: (expanded: boolean) => void,
) {
  const startYRef = useRef<number | null>(null);
  const deltaRef = useRef(0);
  const wasDraggingRef = useRef(false);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    startYRef.current = e.clientY;
    deltaRef.current = 0;
    wasDraggingRef.current = false;
    // Only capture on the drag handle (not on tiles, to avoid stealing from buttons)
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (startYRef.current === null) return;
    deltaRef.current = e.clientY - startYRef.current;
    if (Math.abs(deltaRef.current) > 8) {
      wasDraggingRef.current = true;
    }
  }, []);

  const onPointerUp = useCallback(() => {
    if (startYRef.current === null) return;
    const delta = deltaRef.current;
    if (!isExpanded && delta > 30) {
      setExpanded(true);
    } else if (isExpanded && delta < -30) {
      setExpanded(false);
    }
    startYRef.current = null;
    deltaRef.current = 0;
    // Reset wasDragging after a microtask so click handlers in the SAME
    // gesture still see it as true (suppressing navigation after a swipe),
    // but it doesn't leak into the NEXT tap on the header row.
    requestAnimationFrame(() => {
      wasDraggingRef.current = false;
    });
  }, [isExpanded, setExpanded]);

  return { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp, wasDraggingRef };
}

/* ─── Main MeetingDock Component ─── */

export function MeetingDock() {
  const meeting = useActiveMeeting();
  const camera = useCamera();
  const navigate = useNavigate();
  const dockUI = useDockUI();
  const { activeVersionId } = useVersion();
  const isFy27Mvp = isMvpFamily(activeVersionId);
  const setManualState = dockUI.setManualState; // stable (useCallback in context)
  const { isKeyboardVisible } = useVisualViewport();

  // ── dockState: derived from the principles (priority order) ──────────────
  // 1. keyboard up → collapsed (O3: keyboard can't coexist with expanded tiles)
  // 2. surface wants minimized  3. manual drag/tap override
  // 4. scroll: down → collapse, up/idle → expand (O4)
  const dockState: DockState =
    isKeyboardVisible
      ? "collapsed"
      : dockUI.surfaceDefault === "minimized"
      ? "minimized"
      : dockUI.manualState !== null
      ? dockUI.manualState
      : dockUI.scrollDir === "down"
      ? "collapsed"
      : "expanded";

  const isExpanded = dockState === "expanded";

  // Remember the dock's state so a new surface (e.g. the DM page) can carry it over.
  useEffect(() => {
    setLastDockState(dockState);
  }, [dockState]);

  // Entrance animation: only on the FIRST background of this session. Captured at
  // first render (before the effect below flips the flag) so navigating between
  // surfaces — each of which mounts its own MeetingDock — does NOT replay the
  // height:0→auto grow that reads as "opens collapsed then expands".
  const skipEntranceRef = useRef(getDockHasEnteredSession());
  useEffect(() => {
    setDockHasEnteredSession(true);
  }, []);

  // O3: turning video ON (transition) dismisses the keyboard and expands the dock.
  // (Video-on is an event, not a permanent lock — the user can still scroll to collapse.)
  const prevVideoRef = useRef(meeting.isVideoOn);
  useEffect(() => {
    if (meeting.isVideoOn && !prevVideoRef.current) {
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      setManualState("expanded");
    }
    prevVideoRef.current = meeting.isVideoOn;
  }, [meeting.isVideoOn, setManualState]);

  // Manual drag/tap sets the override (cleared on the next scroll, per DockUIContext).
  const setExpandedManual = useCallback(
    (expanded: boolean) => setManualState(expanded ? "expanded" : "collapsed"),
    [setManualState],
  );

  // Shared swipe gesture for both the drag handle and the tiles area
  const swipe = useSwipeGesture(isExpanded, setExpandedManual);

  const handleReturnToMeeting = useCallback(() => {
    // Suppress navigation if the user was swiping
    if (swipe.wasDraggingRef.current) return;
    // Un-backgrounding ends this dock session — next background animates in fresh.
    setDockHasEnteredSession(false);
    meeting.returnToMeeting();
    navigate("/meeting", { replace: true });
  }, [meeting, navigate, swipe.wasDraggingRef]);

  const handleEndCall = useCallback(() => {
    setDockHasEnteredSession(false);
    playLeaveSound();
    camera.releaseCamera();
    meeting.endMeeting();
  }, [meeting, camera]);

  const handleMicToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = !meeting.isMicOn;
    playMuteSound(newState);
    meeting.setMicOn(newState);
  }, [meeting]);

  const handleVideoToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = !meeting.isVideoOn;
    meeting.setVideoOn(newState);
    camera.setTrackEnabled(newState);
  }, [meeting, camera]);

  const handleEndCallClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    handleEndCall();
  }, [handleEndCall]);

  // Drag handle for expand/collapse (kept for handle-specific pointer capture)
  const handleDragStart = useCallback((e: React.PointerEvent) => {
    swipe.onPointerDown(e);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [swipe]);

  if (!meeting.isActive || !meeting.isBackgrounded) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={skipEntranceRef.current ? false : { height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="w-full overflow-hidden shrink-0 z-50 px-[0px] pt-[0px] pb-[10px]"
      >
        {dockState === "minimized" ? (
          /* ── Minimized: slim pill, timer + count, tap to return ── */
          <div className="w-full flex justify-center px-[11px]">
            <button
              onClick={handleReturnToMeeting}
              aria-label="Return to meeting"
              className="bg-fy27-surface shadow-[0px_2px_6px_0px_rgba(0,0,0,0.10)] rounded-[9999px] h-[34px] flex items-center gap-[6px] px-[16px] max-w-full"
            >
              {meeting.isRecording && <RecordingDot />}
              <span
                className="text-[13px] text-fy27-text-primary whitespace-nowrap truncate"
                style={{ fontWeight: 600, lineHeight: "16px" }}
              >
                {formatElapsed(meeting.elapsed)} · {meeting.participantCount} in call
              </span>
            </button>
          </div>
        ) : (
        <div className="overflow-hidden relative">
          {/* ─── Main Content Container (px-[11px] pt-[8px] matching Figma Frame20) ─── */}
          <div className="flex flex-col gap-[4px] items-end px-[11px] pt-[8px]">
            {/* ─── Header Row: Always visible (h-[48px]) ─── */}
            <div
              className="h-[48px] w-full shrink-0 cursor-pointer"
              onClick={handleReturnToMeeting}
            >
              <div className="flex items-center justify-center size-full">
                <div className="flex flex-wrap gap-[0px_4px] items-center justify-center px-[4px] size-full">
                  {/* Meeting Title + Subtext — flex-1 */}
                  <div className="flex-1 min-w-0 min-h-px">
                    <div className="flex flex-col justify-center size-full">
                      <div className="flex gap-[8px] items-center pr-[16px] w-full">
                        {meeting.isRecording && <RecordingDot />}
                        <div className="flex flex-col items-start justify-center min-w-0 flex-1">
                          {/* Title */}
                          <div className="flex items-center w-full">
                            <p
                              className="text-[15px] text-fy27-text-primary truncate overflow-hidden"
                              style={{ fontWeight: 510, lineHeight: "20px", letterSpacing: "-0.23px" }}
                            >
                              {meeting.meetingTitle || "Ongoing meeting"}
                            </p>
                          </div>
                          {/* Subtext */}
                          <div className="flex gap-[4px] items-center w-full">
                            <p
                              className="text-[12px] text-fy27-text-secondary truncate overflow-hidden"
                              style={{ fontWeight: 400, lineHeight: "13px", letterSpacing: "0.06px" }}
                            >
                              {formatElapsed(meeting.elapsed)}
                            </p>
                            <svg width="3" height="3" viewBox="0 0 3 3" fill="none" className="shrink-0">
                              <circle cx="1.5" cy="1.5" r="1.5" style={{ fill: "var(--fy27-text-secondary)" }} />
                            </svg>
                            <p
                              className="text-[12px] text-fy27-text-secondary truncate overflow-hidden"
                              style={{ fontWeight: 400, lineHeight: "13px", letterSpacing: "0.06px" }}
                            >
                              {meeting.participantCount} in call
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Controls: Video / Mic / End — w-[147px] justify-between */}
                  <div className="flex items-center justify-between shrink-0 w-[147px]">
                    <button onClick={handleVideoToggle} className="cursor-pointer bg-transparent border-none p-0" aria-label={meeting.isVideoOn ? "Turn camera off" : "Turn camera on"}>
                      {meeting.isVideoOn ? <DockVideoOnIcon /> : <DockVideoOffIcon />}
                    </button>
                    <button onClick={handleMicToggle} className="cursor-pointer bg-transparent border-none p-0" aria-label={meeting.isMicOn ? "Mute microphone" : "Unmute microphone"}>
                      {meeting.isMicOn ? <DockMicOnIcon /> : <DockMicOffIcon />}
                    </button>
                    <button onClick={handleEndCallClick} className="cursor-pointer bg-transparent border-none p-0" aria-label="End call">
                      <EndCallButton />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Expanded Content: Shared content + self tile ─── */}
            {/* initial={false}: on a fresh mount (e.g. navigating Chat → DM, where
                the dock remounts) paint straight at the target height instead of
                flashing the tiles at full height and animating down to 0 — that
                flash was what jittered the white foreground in the collapsed state.
                Expand/collapse interactions after mount still animate normally. */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden w-full shrink-0"
            >
              {/* Two equal-width tiles, justify-between, matching Figma Frame19 */}
              <div
                className="flex items-center justify-between w-full relative touch-none"
                onPointerDown={swipe.onPointerDown}
                onPointerMove={swipe.onPointerMove}
                onPointerUp={swipe.onPointerUp}
                onPointerCancel={swipe.onPointerCancel}
              >
                {isFy27Mvp ? (
                  <>
                    {/* ─── Left Tile (MVP): shared content OR active speaker (Aadi Kapoor) — MVP MeetingTile + nametag, sized to match FV (h-146 / half-width) ─── */}
                    <div
                      className="h-[146px] cursor-pointer"
                      style={{ width: "calc(50% - 4px)" }}
                      onClick={handleReturnToMeeting}
                    >
                      {meeting.isContentSharing ? (
                        <MeetingTile
                          name="Aadi Kapoor"
                          nameTag="Aadi Kapoor's content"
                          display="shared"
                          sharedSrc={imgMvpSharedContent}
                          nameEndPad
                        />
                      ) : (
                        <MeetingTile
                          name="Aadi Kapoor"
                          display="video"
                          state="active-speaker"
                          imageSrc={imgAadi}
                          hideMic
                          nameEndPad
                        />
                      )}
                    </div>

                    {/* ─── Self-View Tile (MVP, right): live camera when video on, avatar photo when off; NameTag with live mic ─── */}
                    <div
                      className="relative h-[146px] overflow-hidden rounded-[4px] border border-fy27-tile-border bg-fy27-tile-surface cursor-pointer"
                      style={{ width: "calc(50% - 4px)" }}
                      onClick={handleReturnToMeeting}
                    >
                      {meeting.isVideoOn ? (
                        !camera.cameraError && camera.stream ? (
                          <video
                            ref={camera.attachVideo}
                            autoPlay
                            playsInline
                            muted
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-x-[-1]"
                          />
                        ) : (
                          /* Backup video feed — photo fills the tile (like the pre-join preview) */
                          <img src={imgSelfView} alt="You" className="absolute inset-0 size-full object-cover pointer-events-none" />
                        )
                      ) : (
                        /* Video off — circular avatar centered on the tile surface */
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-[54%] min-w-[72px] max-w-[104px] aspect-square rounded-full overflow-hidden">
                            <img src={imgSelfView} alt="You" className="absolute inset-0 size-full object-cover" />
                          </div>
                        </div>
                      )}
                      {/* Name tag (bottom-left, inset 6px) — text-only, matching FV's pills */}
                      <div className="absolute bottom-0 left-0 p-[6px] max-w-full">
                        <NameTag name="You" nameEndPad />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                {/* ─── Left Tile: Shared content OR Active speaker ─── */}
                {meeting.isContentSharing ? (
                  /* Shared Content Tile */
                  <div
                    className="bg-fy27-surface h-[146px] overflow-clip relative rounded-[16px] cursor-pointer"
                    style={{ width: "calc(50% - 4px)" }}
                    onClick={handleReturnToMeeting}
                  >
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[146px] w-[257px]">
                      <img
                        alt="Shared content"
                        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
                        src={imgSharedContent}
                      />
                    </div>
                    <div className="absolute left-[6px] top-[112px] bg-[rgba(0,0,0,0.5)] flex h-[24px] items-center justify-center px-[10px] rounded-[100px]">
                      <p
                        className="text-[12px] text-white truncate overflow-hidden"
                        style={{ fontWeight: 510, lineHeight: "14px" }}
                      >
                        Aadi Kapoor's content
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Active Speaker Tile — with purple border + IncomingAudioIndicator */
                  <div
                    className="h-[146px] overflow-clip relative rounded-[16px] cursor-pointer border-[2px] border-fy27-brand"
                    style={{ width: "calc(50% - 4px)" }}
                    onClick={handleReturnToMeeting}
                  >
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[155px] w-[178px]">
                      <img
                        alt="Miguel Silva"
                        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full scale-[1.15]"
                        src={imgActiveSpeaker}
                      />
                    </div>
                    {/* Active speaker name pill */}
                    <div className="absolute left-[6px] top-[112px] bg-[rgba(0,0,0,0.5)] flex h-[24px] items-center justify-center px-[10px] rounded-[100px]">
                      <p
                        className="text-[12px] text-white truncate overflow-hidden"
                        style={{ fontWeight: 510, lineHeight: "14px" }}
                      >
                        Miguel Silva
                      </p>
                    </div>
                    {/* Incoming audio indicator — active speaker affordance */}
                    <IncomingAudioIndicator />
                  </div>
                )}

                {/* ─── Self-View Tile (right) ─── */}
                <div
                  className="bg-fy27-surface h-[146px] overflow-clip relative rounded-[16px] cursor-pointer"
                  style={{ width: "calc(50% - 4px)" }}
                  onClick={handleReturnToMeeting}
                >
                  {/* Self-view: live camera when video on, UV initials when video off */}
                  {meeting.isVideoOn ? (
                    camera.cameraError || !camera.stream ? (
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[155px] w-[178px]">
                        <img
                          alt="You"
                          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full scale-[1.15]"
                          src={imgSelfView}
                        />
                      </div>
                    ) : (
                      <video
                        ref={camera.attachVideo}
                        autoPlay
                        playsInline
                        muted
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-x-[-1]"
                      />
                    )
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 rounded-[16px]">
                      <div className="w-12 h-12 rounded-full bg-fy27-brand flex items-center justify-center text-white text-lg" style={{ fontWeight: 600 }}>
                        UV
                      </div>
                    </div>
                  )}
                  {/* "You" pill label */}
                  <div className="absolute left-[6px] top-[112px] bg-[rgba(0,0,0,0.5)] flex h-[24px] items-center justify-center px-[10px] rounded-[100px]">
                    <p
                      className="text-[12px] text-white truncate overflow-hidden"
                      style={{ fontWeight: 510, lineHeight: "14px" }}
                    >
                      You
                    </p>
                  </div>
                  {/* Mic indicator — reactive to meeting.isMicOn */}
                  <div className="absolute bottom-[8px] right-[8px]">
                    {meeting.isMicOn ? <MicOnIndicator /> : <MicOffIndicator />}
                  </div>
                </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}