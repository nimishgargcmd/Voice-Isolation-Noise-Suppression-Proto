import React, { useEffect, useState, useImperativeHandle, forwardRef, useRef, useCallback } from "react";
import Header from "@/app/components/Header";

interface MeetingHeaderProps {
  onVisibilityChange?: (isVisible: boolean) => void;
  participantCount?: number;
  onEndCall?: () => void;
  onBack?: () => void;
  isRecording?: boolean;
  onAudioRouteChange?: (route: "phone" | "speaker" | "bluetooth") => void;
  selectedAudioRoute?: "phone" | "speaker" | "bluetooth";
  /** When true, disables auto-hide and forces the header to stay visible (used in On-the-go mode). */
  alwaysVisible?: boolean;
  /** MVP checkpoint: floating overlay variant (only MeetingHeaderMvp honours it; FV ignores it). */
  overlay?: boolean;
}

export interface MeetingHeaderHandle {
  show: () => void;
}

export const MeetingHeader = forwardRef<MeetingHeaderHandle, MeetingHeaderProps>(
  function MeetingHeader({ onVisibilityChange, participantCount = 12, onEndCall, onBack, isRecording, alwaysVisible }, ref) {
    const [isVisible, setIsVisible] = useState(true);
    const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearHideTimer = useCallback(() => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    }, []);

    const scheduleHide = useCallback(() => {
      clearHideTimer();
      hideTimerRef.current = setTimeout(() => {
        setIsVisible(false);
        onVisibilityChange?.(false);
      }, 8000);
    }, [clearHideTimer, onVisibilityChange]);

    // Auto-hide after 8 seconds — disabled when alwaysVisible
    useEffect(() => {
      if (alwaysVisible) {
        clearHideTimer();
        setIsVisible(true);
        return;
      }
      scheduleHide();
      return clearHideTimer;
    }, [alwaysVisible, scheduleHide, clearHideTimer]);

    // Notify parent of visibility change
    useEffect(() => {
      onVisibilityChange?.(isVisible);
    }, [isVisible, onVisibilityChange]);

    // Expose a show() method so the parent can re-show the header on tap
    useImperativeHandle(ref, () => ({
      show: () => {
        if (!isVisible) {
          setIsVisible(true);
          onVisibilityChange?.(true);
          scheduleHide();
        }
      },
    }), [isVisible, onVisibilityChange, scheduleHide]);

    return (
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isVisible
            ? "h-[60px] opacity-100"
            : "h-0 opacity-0"
        }`}
      >
        <div className="h-[60px]">
          <Header participantCount={participantCount} onEndCall={onEndCall} onBack={onBack} isRecording={isRecording} />
        </div>
      </div>
    );
  }
);