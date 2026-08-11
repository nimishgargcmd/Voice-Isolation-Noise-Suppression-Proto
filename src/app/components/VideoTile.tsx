import React, { useState } from "react";
import { IncomingAudioIndicator } from "@/app/components/IncomingAudioIndicator";

interface Participant {
  id: number;
  name: string;
  video?: string;
  image: string;
  isActive: boolean;
}

interface VideoTileProps {
  participant: Participant;
  height?: string; // Optional height class, e.g., "h-[216px]", "h-full"
  className?: string; // Optional additional classes for the container
  hideNameTag?: boolean; // Hide the default name tag (for custom positioning)
}

/**
 * VideoTile component with automatic fallback to static image
 * If video fails to load or videoUrl is not provided, shows fallback image
 * Includes all meeting tile UI: name tag, active speaker border, audio indicator
 * Adapts to different tile sizes: small (2x2 grid), full-width, or split screen
 */
export function VideoTile({ participant, height = "h-[216px]", className = "", hideNameTag = false }: VideoTileProps) {
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const showVideo = participant.video && !hasVideoError;

  return (
    <div className={`relative rounded-[20px] overflow-hidden ${height} ${className}`}>
      {/* Media Layer - Video with fallback to image */}
      <div className="w-full h-full relative">
        {/* Fallback image - always render, hide when video loads */}
        <img
          src={participant.image}
          alt={participant.name}
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: 'center 30%',
            display: showVideo && isVideoLoaded ? 'none' : 'block'
          }}
        />
        
        {/* Video element - only render if video URL provided */}
        {showVideo && (
          <video
            src={participant.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ 
              objectPosition: 'center 30%',
              display: isVideoLoaded ? 'block' : 'none'
            }}
            onLoadedData={() => {
              console.log(`[VideoTile] Video loaded for ${participant.name}`);
              setIsVideoLoaded(true);
            }}
            onError={() => {
              console.log(`[VideoTile] Failed to load video for ${participant.name}, using fallback image`);
              setHasVideoError(true);
            }}
          />
        )}
      </div>

      {/* Active speaker border */}
      {participant.isActive && (
        <div 
          aria-hidden="true" 
          className="absolute border-4 border-[#7f85f5] border-solid inset-0 rounded-[20px] pointer-events-none" 
        />
      )}
      
      {/* Name Tag */}
      {!hideNameTag && (
        <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-[5px] px-[10px] py-[5px] rounded-[100px]">
          <p className="text-white text-xs font-medium leading-[14px]" style={{ fontFamily: 'var(--font-sf-pro)' }}>
            {participant.name}
          </p>
        </div>
      )}
      
      {/* Incoming Audio Indicator - only shows when speaking */}
      {participant.isActive && <IncomingAudioIndicator />}
    </div>
  );
}