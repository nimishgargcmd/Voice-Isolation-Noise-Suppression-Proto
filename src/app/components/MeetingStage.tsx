import React from "react";
import { IncomingAudioIndicator } from "@/app/components/IncomingAudioIndicator";
import { VideoTile } from "@/app/components/VideoTile";
import svgPaths from "@/imports/svg-ra71kde5x8";

// Import Figma placeholder images
import imgAadi from "figma:asset/3c32350895790815d4b2b05b8bfa873d40c997c2.png";
import imgBabak from "figma:asset/6900c5f1ebcee87405a464dc927c93633e66e145.png";
import imgMiguel from "figma:asset/685fc6dc030aab2cbea5b15f523d9ce42c11d689.png";
import imgJessica from "figma:asset/3b6bf95da1f13af67c0b3a5e3c9534b640591ce5.png";
import imgRay from "figma:asset/a55a7173204f1d7f74adab6c38113bc9eedbb180.png";
import imgSarah from "figma:asset/503fddd74dcc978ba951b5c79ebe96b95453b1eb.png";

// Shared content image — Figma asset from the reference frame (presentation slide)
import imgSharedContent from "figma:asset/f3edab3305d6980218cc52719020bc598b4a6331.png";

interface MeetingStageProps {
  isSplit: boolean;
  onCollapseSplit?: () => void;
  isContentSharing?: boolean;
  onEnterFullscreen?: () => void;
}

/** Fullscreen maximize icon from Figma SVG (svg-ra71kde5x8 → p24e1e780) */
function FullScreenMaximizeIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <path d={svgPaths.p24e1e780} fill="white" />
    </svg>
  );
}

export function MeetingStage({ isSplit, onCollapseSplit, isContentSharing = false, onEnterFullscreen }: MeetingStageProps) {
  // Mock participant data (excluding self)
  // video: Optional video URL - when you have real videos, replace these placeholder URLs
  // image: Fallback static image that shows while video loads or if video fails
  const participants = [
    {
      id: 1,
      name: "Aadi Kapoor",
      video: undefined, // Replace with: "https://your-cdn.com/aadi.mp4"
      image: imgAadi,
      isActive: false,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      video: undefined, // Replace with: "https://your-cdn.com/babak.mp4"
      image: imgBabak,
      isActive: false,
    },
    {
      id: 3,
      name: "Miguel Silva",
      video: undefined, // Replace with: "https://your-cdn.com/miguel.mp4"
      image: imgMiguel,
      isActive: true,
    },
    {
      id: 4,
      name: "Jessica Kline",
      video: undefined, // Replace with: "https://your-cdn.com/jessica.mp4"
      image: imgJessica,
      isActive: false,
    },
    {
      id: 5,
      name: "Ray Tanaka",
      video: undefined, // Replace with: "https://your-cdn.com/ray.mp4"
      image: imgRay,
      isActive: false,
    },
    {
      id: 6,
      name: "Babak Shammas",
      video: undefined, // Replace with: "https://your-cdn.com/sarah.mp4"
      image: imgSarah,
      isActive: true,
    },
  ];

  // Shared content data
  const sharedContent = {
    id: "shared-1",
    sharerName: "Aadi Kapoor",
    image: imgSharedContent,
  };

  // Sort participants: active speakers first
  const sortedParticipants = [...participants].sort((a, b) => {
    if (a.isActive && !b.isActive) return -1;
    if (!a.isActive && b.isActive) return 1;
    return 0;
  });

  // Determine which participant/content to show in split screen mode
  // Priority: Shared Content > Active Speaker > First Participant
  const getSplitScreenTile = () => {
    if (isContentSharing) {
      return {
        id: sharedContent.id,
        name: sharedContent.sharerName + "'s content",
        image: sharedContent.image,
        isActive: false,
        isShared: true,
      };
    }
    const activeSpeaker = sortedParticipants.find(p => p.isActive);
    return activeSpeaker || sortedParticipants[0];
  };

  const splitScreenTile = getSplitScreenTile();

  // In split screen mode, show only the shared content (or active speaker)
  if (isSplit) {
    return (
      <div className="bg-black flex flex-col relative h-full pb-1">
        {/* Single tile - Fill height with 4px bottom padding - Clickable to collapse split */}
        <button 
          onClick={onCollapseSplit}
          className="w-full h-full"
        >
          <VideoTile 
            participant={splitScreenTile as any} 
            height="h-full"
          />
        </button>
      </div>
    );
  }

  // Full screen mode - show all participants in gallery view
  return (
    <div className="bg-black flex flex-col transition-all duration-300 ease-in-out relative h-full">
      {/* Meeting Stage Gallery - Vertically Scrolling */}
      <div className="flex-1 overflow-y-auto pb-[100px]">
        {/* Shared Content Block — shown at top of gallery when content sharing is active */}
        {isContentSharing && (
          <div className="mb-2">
            {/* Shared content image — full-width, rounded-[12px], 222px tall per Figma */}
            <div className="rounded-[12px] overflow-hidden h-[222px] w-full">
              <img
                src={sharedContent.image}
                alt={`${sharedContent.sharerName}'s shared content`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Label + Fullscreen row — sits BELOW the image, label left, button right */}
            <div className="flex items-center justify-between mt-[10px] px-[13px]">
              {/* "Aadi Kapoor's content" pill — Figma: bg-[rgba(255,255,255,0.1)], h-24, p-10, rounded-full */}
              <div className="bg-[rgba(255,255,255,0.1)] h-[24px] flex items-center justify-center px-[10px] rounded-[100px]">
                <p
                  className="text-white text-[12px] leading-[14px] overflow-hidden text-ellipsis whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-sf-pro)', fontWeight: 510 }}
                >
                  {sharedContent.sharerName}&apos;s content
                </p>
              </div>
              {/* Fullscreen expand button — Figma: bg-[rgba(255,255,255,0.2)], p-10, rounded-full, 20×20 icon */}
              <button className="bg-[rgba(255,255,255,0.2)] p-[10px] rounded-[100px] flex items-center justify-center" onClick={(e) => { e.stopPropagation(); onEnterFullscreen?.(); }}>
                <div className="size-[20px]">
                  <FullScreenMaximizeIcon />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Top tiles - Half width (2-col grid) */}
        {/* Default: 4 small tiles (2 rows × 2 cols); Content sharing: 2 small tiles (1 row × 2 cols) */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          {sortedParticipants.slice(0, isContentSharing ? 2 : 4).map((participant) => (
            <VideoTile
              key={participant.id}
              participant={participant}
              height="h-[216px]"
            />
          ))}
        </div>

        {/* Remaining tiles - Full width - h-[218px] */}
        <div className="space-y-2">
          {sortedParticipants.slice(isContentSharing ? 2 : 4).map((participant) => (
            <VideoTile
              key={participant.id}
              participant={participant}
              height="h-[218px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}