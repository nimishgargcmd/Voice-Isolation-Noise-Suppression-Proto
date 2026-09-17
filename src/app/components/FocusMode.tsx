import React, { useState, useEffect } from "react";
import { VideoTile } from "@/app/components/VideoTile";
import svgPaths from "@/imports/svg-ra71kde5x8";

// Import Figma placeholder images
import imgMiguel from "figma:asset/685fc6dc030aab2cbea5b15f523d9ce42c11d689.png";
import imgSarah from "figma:asset/503fddd74dcc978ba951b5c79ebe96b95453b1eb.png";

// Shared content image — same Figma asset as MeetingStage (presentation slide)
import imgSharedContent from "figma:asset/f3edab3305d6980218cc52719020bc598b4a6331.png";

/** Fullscreen maximize icon from Figma SVG (svg-ra71kde5x8 → p24e1e780) */
function FullScreenMaximizeIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <path d={svgPaths.p24e1e780} fill="white" />
    </svg>
  );
}

interface FocusModeProps {
  isSplit: boolean;
  onCollapseSplit?: () => void;
  isContentSharing?: boolean;
  onEnterFullscreen?: () => void;
}

export function FocusMode({ isSplit, onCollapseSplit, isContentSharing = false, onEnterFullscreen }: FocusModeProps) {
  // Mock participant data for focus mode
  const participants = [
    {
      id: 3,
      name: "Miguel Silva",
      video: undefined,
      image: imgMiguel,
    },
    {
      id: 6,
      name: "Babak Shammas",
      video: undefined,
      image: imgSarah,
    },
  ];

  // Simulate dynamic active speaker changes
  const [activeSpeakerIndex, setActiveSpeakerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpeakerIndex((prev) => (prev + 1) % participants.length);
    }, 8000); // Switch active speaker every 8 seconds
    return () => clearInterval(interval);
  }, [participants.length]);

  // Shared content data
  const sharedContent = {
    id: "shared-1",
    sharerName: "Aadi Kapoor",
    image: imgSharedContent,
  };

  // Priority: Shared Content > Active Speaker > First Participant
  const getFocusTile = () => {
    if (isContentSharing) {
      return {
        id: sharedContent.id,
        name: sharedContent.sharerName + "'s content",
        image: sharedContent.image,
        isActive: false,
        isShared: true,
      };
    }
    return { ...participants[activeSpeakerIndex], isActive: true };
  };

  const focusTile = getFocusTile();

  // When content sharing is active, Focus mode shows shared content as a centered card
  if (isContentSharing) {
    return (
      <div className="h-full w-full bg-black relative">
        {isSplit ? (
          <button onClick={onCollapseSplit} className="w-full h-full">
            <div className="w-full h-full relative rounded-[20px] overflow-hidden">
              <img
                src={sharedContent.image}
                alt={`${sharedContent.sharerName}'s shared content`}
                className="w-full h-full object-cover"
              />
              {/* Name tag in split mode */}
              <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-[5px] px-[10px] py-[5px] rounded-[100px]">
                <p className="text-white text-xs leading-[14px]" style={{ fontFamily: 'var(--font-sf-pro)', fontWeight: 510 }}>
                  {sharedContent.sharerName}&apos;s content
                </p>
              </div>
            </div>
          </button>
        ) : (
          /* Full-screen focus: centered card with label row — matches Figma reference */
          <div className="w-full h-full flex flex-col items-center justify-center px-[1px] pb-[226px]">
            {/* Shared content image — rounded-[12px], 222px tall, centered */}
            <div className="rounded-[12px] overflow-hidden h-[222px] w-full">
              <img
                src={sharedContent.image}
                alt={`${sharedContent.sharerName}'s shared content`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Label + Fullscreen row — sits BELOW the image, label left, button right */}
            <div className="flex items-center justify-between mt-[10px] w-full px-[13px]">
              {/* "Aadi Kapoor's content" pill */}
              <div className="bg-[rgba(255,255,255,0.1)] h-[24px] flex items-center justify-center px-[10px] rounded-[100px]">
                <p
                  className="text-white text-[12px] leading-[14px] overflow-hidden text-ellipsis whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-sf-pro)', fontWeight: 510 }}
                >
                  {sharedContent.sharerName}&apos;s content
                </p>
              </div>
              {/* Fullscreen expand button */}
              <button className="bg-[rgba(255,255,255,0.2)] p-[10px] rounded-[100px] flex items-center justify-center" onClick={(e) => { e.stopPropagation(); onEnterFullscreen?.(); }}>
                <div className="size-[20px]">
                  <FullScreenMaximizeIcon />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Normal Focus mode — active speaker
  return (
    <div className="h-full w-full bg-black relative">
      {isSplit ? (
        <button onClick={onCollapseSplit} className="w-full h-full">
          <VideoTile 
            participant={focusTile as any} 
            height="h-full"
            hideNameTag={false}
          />
        </button>
      ) : (
        <VideoTile 
          participant={focusTile as any} 
          height="h-full"
          hideNameTag={true}
        />
      )}
      {/* Custom Name Tag - only in full-screen focus, hidden during split-screen multitasking */}
      {!isSplit && (
        <div className="absolute bottom-[120px] left-[14px] bg-black/50 backdrop-blur-[5px] px-[10px] py-[5px] rounded-[100px] z-10 transition-opacity duration-300">
          <p className="text-white text-xs leading-[14px]" style={{ fontFamily: 'var(--font-sf-pro)', fontWeight: 510 }}>
            {focusTile.name}
          </p>
        </div>
      )}
    </div>
  );
}