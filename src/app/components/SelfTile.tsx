import { useState, useEffect } from "react";
import { MicOnIcon } from "@/app/components/MicOnIcon";
import { MicOffIcon } from "@/app/components/MicOffIcon";
import { useAudioMode } from "@/app/components/AudioModeContext";
import { AudioModeGlyph } from "@/app/components/AudioModeIcon";
import raisedHandEmoji from "@/assets/figma/tile-icons/raised-hand.png";

/**
 * Floating self tile ("You") — FY27 recreation of Figma POR "self tile" (1124:4280).
 * Default portrait (75×100) and default landscape (100×75), each across:
 *   Video state: ON (camera feed) | OFF (avatar on a surface)
 *   Raised hands: ON (gold border + hand emoji) | OFF
 *
 * Video-on shows the flip-camera (top-right) + rotate-orientation (top-left)
 * controls; video-off hides them. The "You" name chip uses the shared media-overlay
 * nametag tokens. Pass `width`/`height` to scale it up as a floating PiP.
 */

const DIMS = {
  portrait: { w: 75, h: 100 },
  landscape: { w: 100, h: 75 },
} as const;

/** Fluent Video Switch (flip camera) — 16-grid, currentColor. */
function VideoSwitch() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor" style={{ display: "block" }}>
      <path d="M2 2.5C2 1.11929 3.11929 0 4.5 0H9.5C10.8807 0 12 1.11929 12 2.5V3.11308L13.8911 2.08241C14.3909 1.81003 15 2.17178 15 2.74096V7.25907C15 7.82825 14.3909 8.19 13.8911 7.91762L12 6.88695V7.5C12 8.88071 10.8807 10 9.5 10H4.5C3.11929 10 2 8.88071 2 7.5V2.5ZM12 5.74808L14 6.8381V3.16193L12 4.25195V5.74808ZM4.5 1C3.67157 1 3 1.67157 3 2.5V7.5C3 8.32843 3.67157 9 4.5 9H9.5C10.3284 9 11 8.32843 11 7.5V2.5C11 1.67157 10.3284 1 9.5 1H4.5ZM1.66913 9.88882C1.34616 10.0121 1.06056 10.1486 0.822726 10.2986C0.407633 10.5603 0 10.9537 0 11.5C0 12.0463 0.407633 12.4397 0.822726 12.7014C1.26283 12.9789 1.86646 13.2103 2.56787 13.3973C3.97801 13.7734 5.89836 14 8 14C8.09854 14 8.19667 13.9995 8.29438 13.9985L7.14645 15.1464C6.95118 15.3417 6.95118 15.6583 7.14645 15.8536C7.34171 16.0488 7.65829 16.0488 7.85355 15.8536L9.85355 13.8536C10.0488 13.6583 10.0488 13.3417 9.85355 13.1464L7.85355 11.1464C7.65829 10.9512 7.34171 10.9512 7.14645 11.1464C6.95118 11.3417 6.95118 11.6583 7.14645 11.8536L8.29139 12.9985C8.19476 12.9995 8.09762 13 8 13C5.95951 13 4.12986 12.7789 2.82553 12.4311C2.16971 12.2562 1.67499 12.0566 1.35605 11.8555C1.0121 11.6387 1 11.506 1 11.5C1 11.494 1.0121 11.3613 1.35605 11.1445C1.63272 10.97 2.04166 10.7967 2.57329 10.6397C2.22446 10.4508 1.9173 10.1947 1.66913 9.88882ZM11.9238 10.3021C12.2165 10.0572 12.4618 9.75753 12.6439 9.41883C12.9212 9.47523 13.1845 9.53664 13.4321 9.60267C14.1335 9.78971 14.7372 10.0211 15.1773 10.2986C15.5924 10.5603 16 10.9537 16 11.5C16 12.0463 15.5924 12.4397 15.1773 12.7014C14.7372 12.9789 14.1335 13.2103 13.4321 13.3973C13.1661 13.4683 12.882 13.5339 12.5819 13.5937C12.278 13.6542 12 13.4175 12 13.1076C12 12.8633 12.176 12.6553 12.4155 12.6071C12.6845 12.553 12.9381 12.4941 13.1745 12.4311C13.8303 12.2562 14.325 12.0566 14.644 11.8555C14.9879 11.6387 15 11.506 15 11.5C15 11.494 14.9879 11.3613 14.644 11.1445C14.325 10.9434 13.8303 10.7438 13.1745 10.5689C12.7987 10.4687 12.3793 10.379 11.9238 10.3021Z" />
    </svg>
  );
}

/** Fluent Orientation (rotate) — 16×12 grid, currentColor. */
function OrientationGlyph() {
  return (
    <svg width={16} height={12} viewBox="0 0 16 12" fill="currentColor" style={{ display: "block" }}>
      <path d="M1.25 1C1.11193 1 1 1.11193 1 1.25V1.5C1 1.77614 0.776142 2 0.5 2C0.223858 2 0 1.77614 0 1.5V1.25C0 0.559644 0.559644 0 1.25 0H1.5C1.77614 0 2 0.223858 2 0.5C2 0.776142 1.77614 1 1.5 1H1.25Z" />
      <path d="M3 0.5C3 0.223858 3.22386 0 3.5 0H4.5C4.77614 0 5 0.223858 5 0.5C5 0.776142 4.77614 1 4.5 1H3.5C3.22386 1 3 0.776142 3 0.5Z" />
      <path d="M6 0.5C6 0.223858 6.22386 0 6.5 0H6.75C7.44036 0 8 0.559644 8 1.25V1.5C8 1.77614 7.77614 2 7.5 2C7.22386 2 7 1.77614 7 1.5V1.25C7 1.11193 6.88807 1 6.75 1H6.5C6.22386 1 6 0.776142 6 0.5Z" />
      <path d="M12.8536 1.85355L12.7014 2.0057C14.5407 2.11005 16 3.6346 16 5.5C16 7.433 14.433 9 12.5 9C12.2239 9 12 8.77614 12 8.5C12 8.22386 12.2239 8 12.5 8C13.8807 8 15 6.88071 15 5.5C15 4.19217 13.9958 3.11889 12.7163 3.00923L12.8536 3.14645C13.0488 3.34171 13.0488 3.65829 12.8536 3.85355C12.6583 4.04882 12.3417 4.04882 12.1464 3.85355L11.1464 2.85355C10.9512 2.65829 10.9512 2.34171 11.1464 2.14645L12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8536 1.14645C13.0488 1.34171 13.0488 1.65829 12.8536 1.85355Z" />
      <path d="M1.5 5C0.671573 5 0 5.67157 0 6.5V10.5C0 11.3284 0.671573 12 1.5 12H9.5C10.3284 12 11 11.3284 11 10.5V6.5C11 5.67157 10.3284 5 9.5 5H7.5C7.77614 5 8 4.77614 8 4.5V3.5C8 3.22386 7.77614 3 7.5 3C7.22386 3 7 3.22386 7 3.5V4.5C7 4.77614 7.22386 5 7.5 5H1.5Z" />
      <path d="M1 3.5C1 3.22386 0.776142 3 0.5 3C0.223858 3 0 3.22386 0 3.5V4.5C0 4.77614 0.223858 5 0.5 5C0.776142 5 1 4.77614 1 4.5V3.5Z" />
    </svg>
  );
}

/** A 32px corner control button (white glyph over the top gradient). */
function CornerButton({
  side,
  ariaLabel,
  onClick,
  children,
}: {
  side: "left" | "right";
  ariaLabel: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`absolute top-0 ${side === "left" ? "left-0" : "right-0"} size-[32px] grid place-items-center text-white active:opacity-60 transition-opacity`}
    >
      {children}
    </button>
  );
}

export type SelfOrientation = "portrait" | "landscape";

export interface SelfTileProps {
  orientation?: SelfOrientation;
  videoOn?: boolean;
  raisedHand?: boolean;
  /** Self mic muted (shows the mic-off glyph). */
  micOff?: boolean;
  /** Self image — the camera still (video on) and the avatar (video off). */
  image?: string;
  /** Live video element to render instead of the still when video is on. */
  feed?: React.ReactNode;
  /** Override size (e.g. to scale up as a floating PiP). Defaults to the Figma size. */
  width?: number;
  height?: number;
  onFlipCamera?: () => void;
  onRotate?: () => void;
  /** Show the rotate-orientation control (top-left). */
  showRotate?: boolean;
  /** Reaction emoji (image src) to surface centered on the tile; null clears it. */
  activeEmoji?: string | null;
  className?: string;
  /** A/V settings: crops the feed to a widescreen frame (mirrors PreJoinPage). */
  desktopFriendlyView?: boolean;
}

export function SelfTile({
  orientation = "portrait",
  videoOn = true,
  raisedHand = false,
  micOff = true,
  image,
  feed,
  width,
  height,
  onFlipCamera,
  onRotate,
  showRotate = true,
  activeEmoji,
  className = "",
  desktopFriendlyView = false,
}: SelfTileProps) {
  const audioMode = useAudioMode();
  const d = DIMS[orientation];
  const w = width ?? d.w;
  const h = height ?? d.h;
  const border = raisedHand ? "border-2 border-fy27-raised-hands" : "border border-fy27-tile-border";

  // Reaction emoji fade in/out (matches the Final Vision self tile).
  const [showEmoji, setShowEmoji] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState<string | null>(null);
  useEffect(() => {
    if (activeEmoji) {
      setCurrentEmoji(activeEmoji);
      requestAnimationFrame(() => requestAnimationFrame(() => setShowEmoji(true)));
    } else {
      setShowEmoji(false);
      const t = setTimeout(() => setCurrentEmoji(null), 500);
      return () => clearTimeout(t);
    }
  }, [activeEmoji]);

  return (
    <div
      className={`relative overflow-hidden rounded-[4px] ${border} ${className}`}
      style={{ width: w, height: h, fontFamily: "var(--font-sf-pro)" }}
    >
      {/* Display — camera feed (on) or avatar on a surface (off) */}
      {videoOn ? (
        <div className={`absolute inset-0 size-full overflow-hidden transition-transform duration-200 ${desktopFriendlyView ? "scale-y-125" : ""}`}>
          {feed ?? (image && <img src={image} alt="" className="absolute inset-0 size-full object-cover" />)}
        </div>
      ) : (
        <div className="absolute inset-0 bg-fy27-tile-surface flex items-center justify-center">
          <div className="rounded-full p-[2px]">
            <div className="relative size-[48px] rounded-full overflow-hidden">
              {image && <img src={image} alt="" className="absolute inset-0 size-full object-cover" />}
            </div>
          </div>
        </div>
      )}

      {/* Top gradient scrim (legibility for the corner controls) */}
      <div className="absolute inset-x-0 top-0 h-[40px] rounded-t-[4px] bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

      {/* Reaction emoji — centered, fades in/out */}
      {currentEmoji && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: showEmoji ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}
        >
          <img
            src={currentEmoji}
            alt="Reaction"
            className="size-[40px]"
            style={{ filter: "drop-shadow(0px 4px 12px rgba(0,0,0,0.5))" }}
          />
        </div>
      )}

      {/* Corner controls. Rotate is video-on only; the camera flip stays available
          in both states (incl. multitasking video-off) so you can switch front/back. */}
      {videoOn && showRotate && (
        <CornerButton side="left" ariaLabel="Rotate self view" onClick={onRotate}>
          <span className="-rotate-90 inline-flex">
            <OrientationGlyph />
          </span>
        </CornerButton>
      )}
      {onFlipCamera && (
        <CornerButton side="right" ariaLabel="Switch camera" onClick={onFlipCamera}>
          <VideoSwitch />
        </CornerButton>
      )}

      {/* Name tag — bottom-left, icon-only (raised-hand emoji + mic) */}
      <div className="absolute bottom-0 left-0 p-[4px]">
        <div
          className={`flex items-center rounded-[3px] bg-fy27-nametag-bg backdrop-blur-[45px] ${
            raisedHand ? "gap-[2px]" : ""
          }`}
        >
          {raisedHand && (
            <span className="shrink-0 grid place-items-center size-[16px]">
              <img src={raisedHandEmoji} alt="" className="max-w-none size-[17px] object-contain select-none" />
            </span>
          )}
          <span className="shrink-0 grid place-items-center size-[20px]">
            {micOff ? <MicOffIcon size={14} color="var(--fy27-icon-danger)" /> : <MicOnIcon size={12} color="var(--fy27-icon-success)" />}
          </span>
          {audioMode !== "off" && (
            <span
              className="shrink-0 inline-flex items-center justify-center text-current"
              style={{ color: micOff ? "var(--fy27-icon-danger)" : "var(--fy27-icon-success)" }}
              title={audioMode === "noise-suppression" ? "Noise suppression on" : "Voice isolation on"}
            >
              <AudioModeGlyph mode={audioMode} size={9} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
