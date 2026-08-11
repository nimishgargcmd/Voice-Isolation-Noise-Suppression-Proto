import { useEffect, useRef } from "react";
import { MeetingTile, type TileDisplay, type TileState } from "@/app/components/MeetingTile";
import { SelfTile } from "@/app/components/SelfTile";
import { useCamera } from "@/app/components/CameraContext";
import imgSelf from "@/assets/figma/account/udayan.jpg";

/**
 * FY27 MVP checkpoint — horizontal participant filmstrip ("Participant tray",
 * Figma 1nOzCyPZXU9ExtnvsPEeKM · 1021:37797).
 *
 * A right-aligned, horizontally scrollable row of 100×100 tiles. The local
 * "You" tile is the sticky rightmost element (pinned to the right edge while the
 * rest scroll). Priority flows RIGHT → LEFT — the caller passes `participants`
 * ordered LEFT→RIGHT (lowest priority first, highest priority last, i.e. the
 * highest-priority / spotlit person ends up immediately left of self).
 *
 * Used by the checkpoint stage when others > 6 (overflow) and whenever content
 * is shared (all participants move here).
 */

export interface TrayParticipant {
  id: string;
  name: string;
  img?: string;
  display: TileDisplay;
  state?: TileState;
  raisedHand?: boolean;
  suspected?: boolean;
  pinned?: boolean;
  spotlighted?: boolean;
}

interface ParticipantTrayProps {
  /** Ordered LEFT→RIGHT (horizontal) / TOP→BOTTOM (vertical): lowest priority
   *  first, highest priority last (nearest self). */
  participants: TrayParticipant[];
  isVideoOn: boolean;
  isMicOn: boolean;
  isHandRaised?: boolean;
  activeEmoji?: string | null;
  onParticipantLongPress?: (p: { id: string; name: string; suspected?: boolean }) => void;
  /** horizontal (default) = bottom filmstrip; vertical = fullscreen right-edge gallery. */
  orientation?: "horizontal" | "vertical";
}

/** The sticky "You" tile — MVP-aspect (75×100) self tile with the live camera + flip control. */
function TraySelfTile({
  isVideoOn,
  isMicOn,
  isHandRaised,
  activeEmoji,
  orientation,
}: {
  isVideoOn: boolean;
  isMicOn: boolean;
  isHandRaised?: boolean;
  activeEmoji?: string | null;
  orientation: "horizontal" | "vertical";
}) {
  const { stream, cameraError, acquireCamera, setTrackEnabled, attachVideo, facingMode, flipCamera } = useCamera();

  useEffect(() => {
    acquireCamera();
  }, [acquireCamera]);
  useEffect(() => {
    setTrackEnabled(isVideoOn);
  }, [isVideoOn, setTrackEnabled]);

  // Horizontal tray → MVP portrait self (75×100). Vertical (fullscreen landscape)
  // filmstrip → landscape self (100×75), matching the landscape orientation.
  const isVertical = orientation === "vertical";
  const selfW = isVertical ? 100 : 75;
  const selfH = isVertical ? 75 : 100;
  const mirror = facingMode === "user";

  // The vertical filmstrip lives inside the 90°-rotated fullscreen container, so
  // the live feed is counter-rotated (−90°) — as the fullscreen self-PiP does — so
  // it stays upright instead of appearing sideways. The horizontal tray isn't
  // rotated, so it renders the feed normally.
  const feed =
    cameraError || !stream ? undefined : isVertical ? (
      <video
        ref={attachVideo}
        autoPlay
        playsInline
        muted
        className="absolute object-cover"
        style={{
          width: `${selfH}px`,
          height: `${selfW}px`,
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(-90deg)${mirror ? " scaleX(-1)" : ""}`,
        }}
      />
    ) : (
      <video
        ref={attachVideo}
        autoPlay
        playsInline
        muted
        className={`absolute inset-0 size-full object-cover ${mirror ? "scale-x-[-1]" : ""}`}
      />
    );

  return (
    <div className={`shrink-0 bg-fy27-surface ${isVertical ? "" : "sticky right-0 z-10 pl-[2px]"}`}>
      <SelfTile
        orientation={isVertical ? "landscape" : "portrait"}
        width={selfW}
        height={selfH}
        videoOn={isVideoOn}
        micOff={!isMicOn}
        raisedHand={isHandRaised}
        image={imgSelf}
        feed={feed}
        showRotate={false}
        onFlipCamera={flipCamera}
        activeEmoji={activeEmoji}
      />
    </div>
  );
}

export function ParticipantTray({
  participants,
  isVideoOn,
  isMicOn,
  isHandRaised = false,
  activeEmoji,
  onParticipantLongPress,
  orientation = "horizontal",
}: ParticipantTrayProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isVertical = orientation === "vertical";

  // Default the scroll to the end nearest the self tile. Horizontal → far right
  // (self is at the right). Vertical → top (self is pinned at the top, highest
  // priority participant just below it).
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    if (isVertical) el.scrollTop = 0;
    else el.scrollLeft = el.scrollWidth;
  }, [participants.length, isVertical]);

  // Long-press → options sheet (same MVP logic as the gallery tiles).
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startPress = (p: TrayParticipant) => {
    if (!onParticipantLongPress) return;
    pressTimer.current = setTimeout(() => {
      if (navigator.vibrate) navigator.vibrate(10);
      onParticipantLongPress({ id: p.id, name: p.name, suspected: p.suspected });
    }, 450);
  };
  const cancelPress = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  const participantTiles = participants.map((p) => (
    <div
      key={p.id}
      className="size-[100px] shrink-0 select-none active:opacity-70 transition-opacity"
      style={{ WebkitTouchCallout: "none" }}
      onContextMenu={(e) => e.preventDefault()}
      onPointerDown={() => startPress(p)}
      onPointerUp={cancelPress}
      onPointerLeave={cancelPress}
      onPointerMove={cancelPress}
    >
      <MeetingTile
        name={p.name}
        display={p.display}
        state={p.state ?? "muted"}
        raisedHand={p.raisedHand}
        imageSrc={p.img}
        suspected={p.suspected}
        pinned={p.pinned}
        spotlighted={p.spotlighted}
        compact
      />
    </div>
  ));

  const selfTileEl = (
    <TraySelfTile
      isVideoOn={isVideoOn}
      isMicOn={isMicOn}
      isHandRaised={isHandRaised}
      activeEmoji={activeEmoji}
      orientation={orientation}
    />
  );

  // Vertical (fullscreen) — Figma "Participant tray" 1219:47169: self tile pinned
  // at the TOP (landscape 100×75), participants scroll below (square 100×100),
  // priority top→bottom (highest just below self).
  if (isVertical) {
    return (
      <div className="h-full w-[108px] shrink-0 bg-fy27-surface flex flex-col items-center pt-[4px] px-[4px] gap-[2px]">
        {selfTileEl}
        <div
          ref={scrollerRef}
          className="flex-1 min-h-0 w-full overflow-y-auto overflow-x-hidden flex flex-col items-center gap-[2px]"
          style={{ scrollbarWidth: "none" }}
        >
          {participantTiles}
        </div>
      </div>
    );
  }

  // Horizontal (main-stage filmstrip) — self sticky at the right.
  return (
    <div className="w-full h-[109px] shrink-0 bg-fy27-surface flex items-end justify-end pr-[4px] pl-[4px] py-[4px]">
      <div
        ref={scrollerRef}
        className="flex-1 min-w-0 overflow-x-auto overflow-y-hidden flex items-end justify-end"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex items-end gap-[2px] shrink-0">
          {participantTiles}
          {selfTileEl}
        </div>
      </div>
    </div>
  );
}
