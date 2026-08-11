import React, { useEffect, useState } from "react";
import { NetworkIndicator } from "@/app/components/NetworkIndicator";
import { MicOnIndicator } from "@/app/components/MicOnIndicator";
import { MicOffIndicator } from "@/app/components/MicOffIndicator";
import { useCamera } from "@/app/components/CameraContext";
import { useAudioMode } from "@/app/components/AudioModeContext";
import { AudioModeGlyph } from "@/app/components/AudioModeIcon";

// Self-view backup image
import imgSelf from "@/assets/figma/account/udayan.jpg";

interface SelfVideoTileProps {
  isMicOn: boolean;
  isVideoOn: boolean;
  isSplit?: boolean;
  activeEmoji?: string | null;
  isHandRaised?: boolean;
}

export function SelfVideoTile({ isMicOn, isVideoOn, isSplit = false, activeEmoji, isHandRaised = false }: SelfVideoTileProps) {
  const { stream, cameraError, acquireCamera, setTrackEnabled, attachVideo } = useCamera();
  const audioMode = useAudioMode();
  const [showEmoji, setShowEmoji] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState<string | null>(null);
  
  // Scale down dimensions in split screen mode
  const width = isSplit ? 67 : 121;
  const height = isSplit ? 90 : 136;
  const borderRadius = isSplit ? 12 : 20;
  const bottomOffset = isSplit ? 14 : 90;
  const rightOffset = isSplit ? 12 : 14;
  
  // Acquire camera on mount (idempotent — no-op if already active)
  useEffect(() => {
    acquireCamera();
    // Do NOT release on unmount — stream is shared and stays alive.
  }, [acquireCamera]);
  
  // Sync track.enabled with isVideoOn
  useEffect(() => {
    setTrackEnabled(isVideoOn);
  }, [isVideoOn, setTrackEnabled]);
  
  // Handle emoji display with fade animations
  useEffect(() => {
    if (activeEmoji) {
      setCurrentEmoji(activeEmoji);
      // Small delay to ensure DOM is ready, then trigger fade in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShowEmoji(true);
        });
      });
    } else {
      // Trigger fade out
      setShowEmoji(false);
      // Clear currentEmoji after fade out completes (0.5s)
      const timer = setTimeout(() => {
        setCurrentEmoji(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [activeEmoji]);
  
  return (
    <div 
      className={`absolute z-20 rounded-[${borderRadius}px] overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] transition-all duration-300`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        bottom: `${bottomOffset}px`,
        right: `${rightOffset}px`,
        borderRadius: `${borderRadius}px`,
        outline: isHandRaised ? '3px solid #FFD700' : '3px solid transparent',
        outlineOffset: '0px',
        transition: 'outline 0.3s ease-in-out',
      }}
    >
      {/* Video content */}
      <div className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-900">
        {isVideoOn ? (
          cameraError || !stream ? (
            // Fallback to placeholder image if camera access fails
            <img
              src={imgSelf}
              alt="You"
              className="w-full h-full object-cover"
            />
          ) : (
            // Real camera feed — ref-callback always sets srcObject
            <video
              ref={attachVideo}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover scale-x-[-1]"
            />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#5b5fc7] flex items-center justify-center text-white font-semibold text-lg">
              UV
            </div>
          </div>
        )}

        {/* Name tag - "You" - scales proportionally - Hidden in split view */}
        {!isSplit && (
          <div 
            className="absolute bg-black/50 backdrop-blur-[5px] rounded-[100px]"
            style={{
              bottom: '9px',
              left: '9px',
              padding: '5px 10px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p 
              className="text-white font-medium" 
              style={{ 
                fontFamily: 'var(--font-sf-pro)',
                fontSize: '12px',
                lineHeight: '14px',
                fontWeight: 510,
              }}
            >
              You
            </p>
          </div>
        )}

        {/* Network strength indicator - top right - scales proportionally */}
        {/* Hidden in split screen mode */}
        {!isSplit && (
          <div 
            className="absolute"
            style={{
              top: '9px',
              right: '7px',
            }}
          >
            <NetworkIndicator />
          </div>
        )}

        {/* Mic + audio mode cluster in the lower-right, matching control association in UBar. */}
        <div
          className="absolute flex items-center"
          style={{
            bottom: isSplit ? '7.69px' : '11px',
            right: isSplit ? '4.9px' : '7px',
            gap: isSplit ? '4px' : '6px',
          }}
        >
          {audioMode !== "off" && (
            <div
              className="inline-flex items-center justify-center text-current"
              style={{
                width: isSplit ? "16px" : "18px",
                height: isSplit ? "16px" : "18px",
                color: isMicOn ? "var(--fy27-icon-success)" : "var(--fy27-icon-danger)",
              }}
              title={audioMode === "noise-suppression" ? "Noise suppression on" : "Voice isolation on"}
            >
              <AudioModeGlyph mode={audioMode} size={isSplit ? 9 : 10} />
            </div>
          )}
          {isMicOn ? <MicOnIndicator /> : <MicOffIndicator />}
        </div>

        {/* Emoji display - center of tile with fade animations */}
        {currentEmoji && (
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              opacity: showEmoji ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            <img 
              src={currentEmoji} 
              alt="Reaction" 
              className="w-16 h-16"
              style={{
                filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.5))',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
