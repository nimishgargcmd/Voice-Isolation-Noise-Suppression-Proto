import { useState, useEffect } from "react";
import { SelfTile, type SelfOrientation } from "@/app/components/SelfTile";
import { useCamera } from "@/app/components/CameraContext";
import imgSelf from "@/assets/figma/account/udayan.jpg";

interface FloatingSelfTileProps {
  isVideoOn: boolean;
  isMicOn: boolean;
  isHandRaised?: boolean;
  /** Reaction emoji (image src) surfaced on the tile when a reaction is sent. */
  activeEmoji?: string | null;
  /** Multitasking (split) mode — lifts the tile 10px so it clears the panel seam. */
  isSplit?: boolean;
}

/**
 * FY27 MVP floating self tile — places the redesigned `SelfTile` at the bottom-right
 * corner of the meeting stage, at its native Figma size (75×100). The same tile is
 * used in the multitasking (split) stage — it is not scaled down.
 *
 * Shows the live shared camera feed when available (falling back to the self photo),
 * and the top-right flip control switches the device between front and back camera
 * via the shared CameraContext.
 */
export function FloatingSelfTile({ isVideoOn, isMicOn, isHandRaised = false, activeEmoji, isSplit = false }: FloatingSelfTileProps) {
  const [orientation, setOrientation] = useState<SelfOrientation>("portrait");
  const rotate = () => setOrientation((o) => (o === "portrait" ? "landscape" : "portrait"));

  const { stream, cameraError, acquireCamera, setTrackEnabled, attachVideo, facingMode, flipCamera } = useCamera();

  // Acquire the shared camera on mount; mirror the video on/off toggle to the track.
  useEffect(() => {
    acquireCamera();
  }, [acquireCamera]);
  useEffect(() => {
    setTrackEnabled(isVideoOn);
  }, [isVideoOn, setTrackEnabled]);

  // Live feed when the camera is available; SelfTile falls back to the photo otherwise.
  // Front camera ('user') is mirrored like a selfie; back camera ('environment') is not.
  const feed =
    cameraError || !stream ? undefined : (
      <video
        ref={attachVideo}
        autoPlay
        playsInline
        muted
        className={`absolute inset-0 size-full object-cover ${facingMode === "user" ? "scale-x-[-1]" : ""}`}
      />
    );

  return (
    <div className={`absolute z-20 right-[12px] rounded-[4px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.45),0px_8px_18px_0px_rgba(0,0,0,0.35)] ${isSplit ? "bottom-[17px]" : "bottom-[12px]"}`}>
      <SelfTile
        orientation={orientation}
        videoOn={isVideoOn}
        micOff={!isMicOn}
        raisedHand={isHandRaised}
        image={imgSelf}
        feed={feed}
        showRotate={false}
        onRotate={rotate}
        onFlipCamera={flipCamera}
        activeEmoji={activeEmoji}
      />
    </div>
  );
}
