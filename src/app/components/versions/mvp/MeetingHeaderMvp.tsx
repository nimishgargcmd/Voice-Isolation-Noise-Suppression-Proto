/**
 * FY27 MVP Meeting Header — Figma "Meeting header" 1143:23841
 * (file zTUDsyC2gVxRBk3qgyqCiE, Mobile Meetings POR — updated 2026).
 *
 * A drop-in override for the Final Vision "Header" slot. Same props + same
 * `forwardRef<MeetingHeaderHandle>` show()/auto-hide contract as `MeetingHeader`,
 * so the versioned registry can swap it in transparently.
 *
 * Visual (left → right):
 *   [ back chevron ] [ meeting name + signal row (rec dot · elapsed · shield) ]
 *   [ Copilot ] [ Chat ] [ People ]
 * sitting on a rounded "floating" surface with a hairline divider border.
 *
 * Colour is token-driven (`--fy27-*` / `fy27-*` utilities) — correct in both
 * Light and Dark, never raw hex. See the report for the two colours that had no
 * exact existing token (Surface/Floating, recording-dot Icon/Mention).
 */
import {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
  useCallback,
} from "react";
import type { ReactNode } from "react";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import type { MeetingHeaderHandle } from "@/app/components/MeetingHeader";
import { RecordDot, Shield } from "./headerMvpIcons";
import { CallEnd } from "@/app/components/ubarIcons";
import { MeetingHeaderSheet } from "./MeetingHeaderSheet";
import { BottomSheet } from "@/app/components/BottomSheet";

interface MeetingHeaderMvpProps {
  onVisibilityChange?: (isVisible: boolean) => void;
  participantCount?: number;
  onEndCall?: () => void;
  onBack?: () => void;
  isRecording?: boolean;
  onAudioRouteChange?: (route: "phone" | "speaker" | "bluetooth") => void;
  selectedAudioRoute?: "phone" | "speaker" | "bluetooth";
  /** When true, disables auto-hide and keeps the header pinned (On-the-go mode). */
  alwaysVisible?: boolean;
  /** MVP checkpoint: render as a floating rounded overlay bar (surface/floating +
   *  divider border, side margins) instead of the full-width in-flow surface bar.
   *  Hidden state fades + slides up rather than collapsing height. */
  overlay?: boolean;
}

/** Left chevron — reuses the same Fluent left-chevron glyph as the baseline Header. */
function BackChevron() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0306 5.46967C15.3235 5.76256 15.3235 6.23744 15.0306 6.53033L9.56091 12L15.0306 17.4697C15.3235 17.7626 15.3235 18.2374 15.0306 18.5303C14.7377 18.8232 14.2628 18.8232 13.9699 18.5303L7.96991 12.5303C7.67701 12.2374 7.67701 11.7626 7.96991 11.4697L13.9699 5.46967C14.2628 5.17678 14.7377 5.17678 15.0306 5.46967Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Fluent Speaker 28 Filled (iconography 68174:1514), currentColor. */
function Speaker({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={(size * 20.875) / 24} viewBox="0 0 24 20.875" fill="currentColor" style={{ display: "block" }}>
      <path d="M12.395 0.340671C13.1932 -0.407924 14.5 0.158097 14.5 1.25248V19.6225C14.5 20.7167 13.1937 21.2828 12.3953 20.5347L7.45832 15.9085C7.134 15.6046 6.70619 15.4355 6.26174 15.4355H3.25C1.45507 15.4355 0 13.9804 0 12.1855V8.69352C0 6.8986 1.45508 5.44352 3.25 5.44352H6.26119C6.70587 5.44352 7.13388 5.27424 7.45826 4.97006L12.395 0.340671ZM19.6436 1.6226C19.9546 1.34903 20.4285 1.37937 20.702 1.69038C22.7544 4.0236 24 7.08634 24 10.4381C24 13.79 22.7544 16.8527 20.702 19.1859C20.4285 19.4969 19.9546 19.5273 19.6436 19.2537C19.3325 18.9801 19.3022 18.5062 19.5758 18.1952C21.3966 16.1253 22.5 13.4115 22.5 10.4381C22.5 7.4648 21.3966 4.75102 19.5758 2.6811C19.3022 2.37009 19.3325 1.89618 19.6436 1.6226ZM18.3528 4.74103C18.1042 4.40973 17.6341 4.34271 17.3028 4.59134C16.9715 4.83996 16.9044 5.31008 17.1531 5.64138C18.156 6.97788 18.75 8.63757 18.75 10.4382C18.75 12.2387 18.156 13.8984 17.1531 15.2349C16.9044 15.5662 16.9715 16.0364 17.3028 16.285C17.6341 16.5336 18.1042 16.4666 18.3528 16.1353C19.544 14.548 20.25 12.5745 20.25 10.4382C20.25 8.30185 19.544 6.32829 18.3528 4.74103Z" />
    </svg>
  );
}

/** Fluent Phone 24 regular — currentColor. */
function PhoneIcon24() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{ display: "block" }}>
      <path
        d="M8.75 2C7.23122 2 6 3.23122 6 4.75V19.25C6 20.7688 7.23122 22 8.75 22H15.25C16.7688 22 18 20.7688 18 19.25V4.75C18 3.23122 16.7688 2 15.25 2H8.75ZM7.5 4.75C7.5 4.05964 8.05964 3.5 8.75 3.5H15.25C15.9404 3.5 16.5 4.05964 16.5 4.75V19.25C16.5 19.9404 15.9404 20.5 15.25 20.5H8.75C8.05964 20.5 7.5 19.9404 7.5 19.25V4.75ZM11 18.75C11 18.3358 11.3358 18 11.75 18H12.25C12.6642 18 13 18.3358 13 18.75C13 19.1642 12.6642 19.5 12.25 19.5H11.75C11.3358 19.5 11 19.1642 11 18.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Fluent Speaker 24 regular — currentColor. */
function SpeakerIcon24() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{ display: "block" }}>
      <path
        d="M13.3951 4.34067C14.1932 3.59208 15.5 4.1581 15.5 5.25248V18.7525C15.5 19.8469 14.1937 20.4129 13.3953 19.6648L9.29091 15.8198C9.1057 15.6463 8.86125 15.5493 8.60749 15.5493H5.25C3.45507 15.5493 2 14.0942 2 12.2993V11.7006C2 9.90569 3.45507 8.45061 5.25 8.45061H8.60694C8.86093 8.45061 9.10567 8.35342 9.29095 8.17966L13.3951 4.34067ZM14 5.80922L10.3169 9.25925C9.85406 9.69365 9.24295 9.93663 8.60694 9.93663H5.25C4.2835 9.93663 3.5 10.7201 3.5 11.6866V12.3133C3.5 13.2798 4.2835 14.0633 5.25 14.0633H8.60749C9.24335 14.0633 9.8542 14.3061 10.3169 14.7403L14 18.1888V5.80922ZM19.6152 8.47137C19.9305 8.20291 20.4039 8.24094 20.6724 8.55631C21.5271 9.56019 22 10.8328 22 12.1492C22 13.4656 21.5271 14.7382 20.6724 15.7421C20.4039 16.0575 19.9305 16.0955 19.6152 15.827C19.2998 15.5586 19.2618 15.0852 19.5302 14.7698C20.157 14.0338 20.5 13.1036 20.5 12.1492C20.5 11.1948 20.157 10.2646 19.5302 9.52857C19.2618 9.2132 19.2998 8.73983 19.6152 8.47137Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Fluent Speaker Off 24 regular — currentColor. */
function AudioOffIcon24() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{ display: "block" }}>
      <path
        d="M3.21967 2.46967C2.92678 2.17678 2.4519 2.17678 2.15901 2.46967C1.86612 2.76256 1.86612 3.23744 2.15901 3.53033L7.19937 8.57069C7.0848 8.61172 6.9613 8.63399 6.83286 8.63399H5.25C3.45507 8.63399 2 10.0891 2 11.884V12.4827C2 14.2776 3.45507 15.7327 5.25 15.7327H8.6075C8.86126 15.7327 9.1057 15.8297 9.29091 16.0032L13.3953 19.8482C14.1937 20.5963 15.5 20.0303 15.5 18.9359V16.7512L20.4697 21.7209C20.7626 22.0138 21.2374 22.0138 21.5303 21.7209C21.8232 21.428 21.8232 20.9531 21.5303 20.6602L3.21967 2.46967ZM14 15.2512V18.3722L10.3169 14.9237C9.8542 14.4895 9.24335 14.2467 8.6075 14.2467H5.25C4.2835 14.2467 3.5 13.4632 3.5 12.4967V11.87C3.5 10.9035 4.2835 10.12 5.25 10.12H6.83286C7.35818 10.12 7.86849 9.95431 8.29281 9.64895L14 15.2512ZM14 5.9926V8.63465L15.5 10.1346V5.43586C15.5 4.34147 14.1932 3.77545 13.3951 4.52405L10.161 7.55331L11.2232 8.61552L14 5.9926ZM18.7194 9.19835C18.4044 9.46731 18.3668 9.94073 18.6358 10.2557C19.157 10.8658 19.4375 11.6348 19.4375 12.4279C19.4375 13.0006 19.2911 13.5602 19.0126 14.0554L20.1107 15.1535C20.6795 14.3443 20.9375 13.3968 20.9375 12.4279C20.9375 11.2735 20.5292 10.1524 19.7767 9.28193C19.5078 8.96697 19.0343 8.92939 18.7194 9.19835Z"
        fill="currentColor"
      />
    </svg>
  );
}

type AudioRoute = "phone" | "speaker" | "bluetooth";

/** Fluent Bluetooth 24 regular — currentColor. */
function BluetoothIcon24() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{ display: "block" }}>
      <path
        d="M6.5 6.5L17.5 17.5L12 22V2L17.5 6.5L6.5 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AudioRouteSheet({
  open,
  onClose,
  selected,
  onSelect,
}: {
  open: boolean;
  onClose: () => void;
  selected: AudioRoute;
  onSelect: (route: AudioRoute) => void;
}) {
  const routes: Array<{ id: AudioRoute; label: string; icon: ReactNode }> = [
    { id: "speaker", label: "Speaker", icon: <SpeakerIcon24 /> },
    { id: "phone", label: "iPhone", icon: <PhoneIcon24 /> },
    { id: "bluetooth", label: "AirPods Pro", icon: <BluetoothIcon24 /> },
  ];

  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      ariaLabel="Audio output"
      surfaceClassName="bg-fy27-surface-tertiary"
      zIndex={110}
      className="px-0 pb-[max(14px,env(safe-area-inset-bottom))]"
    >
      <div className="py-[4px]">
        {routes.map((route) => {
          const isSelected = selected === route.id;
          return (
            <button
              key={route.id}
              type="button"
              className="w-full px-[20px] py-[12px] flex items-center gap-[16px] text-left text-fy27-text-primary active:opacity-70"
              onClick={() => {
                onSelect(route.id);
                onClose();
              }}
            >
              <span className="shrink-0 text-fy27-icon-primary">{route.icon}</span>
              <span
                className="flex-1 min-w-0 text-fy27-text-primary"
                style={{ fontFamily: "var(--font-sf-pro)", fontSize: "17px", letterSpacing: "-0.41px", lineHeight: "22px" }}
              >
                {route.label}
              </span>
              <span className="w-[20px] shrink-0 text-fy27-icon-secondary">
                {isSelected ? (
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{ display: "block" }}>
                    <path d="M4.5 10.5L8 14L15.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : null}
              </span>
            </button>
          );
        })}
      </div>
    </BottomSheet>
  );
}

function AudioRouteButtonIcon({ route }: { route: AudioRoute }) {
  if (route === "phone") return <PhoneIcon24 />;
  if (route === "bluetooth") return <BluetoothIcon24 />;
  return <SpeakerIcon24 />;
}

/** A 48×48 icon-button frame, matching the Figma button slots. */
function IconButton({
  onClick,
  ariaLabel,
  children,
}: {
  onClick?: () => void;
  ariaLabel: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex items-center justify-center shrink-0 size-[48px] text-fy27-icon-primary cursor-pointer"
    >
      {children}
    </button>
  );
}

/** Small down-chevron caret next to the handset (the leave-options affordance). */
function CaretDown() {
  return (
    <svg width={8} height={5} viewBox="0 0 8 5" fill="none" style={{ display: "block" }}>
      <path
        d="M0.75 0.75L4 4L7.25 0.75"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Maroon end-call button — position + styling per redesign frame 957:30537.
 * Reuses the shared CallEnd handset glyph (white on the `--fy27-end-call` fill)
 * plus an up-chevron caret. Tapping leaves the call.
 */
function LeaveButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Leave call"
      className="flex items-center gap-[8px] shrink-0 h-[40px] ml-[12px] mr-[12px] px-[12px] rounded-[8px] bg-fy27-end-call text-white cursor-pointer"
    >
      <CallEnd size={22} />
      <CaretDown />
    </button>
  );
}

function MeetingNameAndSignals({
  participantCount,
  isRecording,
}: {
  participantCount: number;
  isRecording?: boolean;
}) {
  const meeting = useActiveMeeting();
  const m = Math.floor(meeting.elapsed / 60);
  const s = meeting.elapsed % 60;
  const elapsedStr = `${m}:${s.toString().padStart(2, "0")}`;

  return (
    <div className="flex flex-col gap-[8px] items-start justify-center self-stretch min-w-0 flex-1">
      {/* Meeting name — iOS Title 3 / SF Pro Display Semibold 17 */}
      <div className="flex gap-[4px] items-center w-full min-w-0">
        <p className="font-['SF_Pro_Display'] font-semibold text-[17px] leading-[22px] tracking-[-0.41px] text-fy27-text-primary truncate min-w-0">
          Marketing Team Sync
        </p>
      </div>

      {/* Signal row — recording dot · elapsed · shield (all vertically centered) */}
      <div className="flex gap-[4px] items-center h-[16px]">
        {isRecording && (
          <span
            className="shrink-0 flex items-center justify-center size-[16px]"
            style={{ color: "var(--fy27-recording, #CC4A31)" }}
            aria-label="Recording"
          >
            <RecordDot size={14} />
          </span>
        )}
        {/* Elapsed — iOS Subhead 4 / SF Pro Text Bold 12 */}
        <p
          className="flex items-center font-['SF_Pro_Text'] font-bold text-[12px] leading-none text-fy27-text-primary whitespace-nowrap"
          aria-label={`${m} minute${m === 1 ? "" : "s"} elapsed`}
        >
          {elapsedStr}
        </p>
        <span
          className="shrink-0 flex items-center justify-center size-[16px] text-fy27-icon-primary"
          aria-label={`End-to-end secured · ${participantCount} in call`}
        >
          <Shield size={16} />
        </span>
      </div>
    </div>
  );
}

export const MeetingHeaderMvp = forwardRef<MeetingHeaderHandle, MeetingHeaderMvpProps>(
  function MeetingHeaderMvp(
    {
      onVisibilityChange,
      participantCount = 12,
      onEndCall,
      onBack,
      isRecording,
      onAudioRouteChange,
      selectedAudioRoute,
      alwaysVisible,
      overlay = false,
    },
    ref
  ) {
    const [isVisible, setIsVisible] = useState(true);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [audioSheetOpen, setAudioSheetOpen] = useState(false);
    const [localSelectedAudioRoute, setLocalSelectedAudioRoute] = useState<AudioRoute>(selectedAudioRoute ?? "phone");
    const effectiveSelectedAudioRoute = selectedAudioRoute ?? localSelectedAudioRoute;
    const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
      if (selectedAudioRoute) {
        setLocalSelectedAudioRoute(selectedAudioRoute);
      }
    }, [selectedAudioRoute]);

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

    // Auto-hide after 8s — disabled when alwaysVisible (On-the-go mode).
    useEffect(() => {
      if (alwaysVisible) {
        clearHideTimer();
        setIsVisible(true);
        return;
      }
      scheduleHide();
      return clearHideTimer;
    }, [alwaysVisible, scheduleHide, clearHideTimer]);

    useEffect(() => {
      onVisibilityChange?.(isVisible);
    }, [isVisible, onVisibilityChange]);

    useImperativeHandle(
      ref,
      () => ({
        show: () => {
          if (!isVisible) {
            setIsVisible(true);
            onVisibilityChange?.(true);
            scheduleHide();
          }
        },
      }),
      [isVisible, onVisibilityChange, scheduleHide]
    );

    return (
      <>
      {overlay ? (
        /* MVP checkpoint — floating rounded overlay bar (fades + slides up when hidden). */
        <div
          className={`px-[4px] transition-all duration-300 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-center gap-0 p-[4px] rounded-[12px] border border-fy27-divider bg-fy27-surface-floating">
            <IconButton onClick={onBack} ariaLabel="Back to calendar">
              <BackChevron />
            </IconButton>

            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              aria-label="Meeting details"
              className="flex-1 min-w-0 flex text-left"
            >
              <MeetingNameAndSignals participantCount={participantCount} isRecording={isRecording} />
            </button>

            <IconButton ariaLabel="Speaker" onClick={() => setAudioSheetOpen(true)}>
              <AudioRouteButtonIcon route={effectiveSelectedAudioRoute} />
            </IconButton>
            <LeaveButton onClick={onEndCall} />
          </div>
        </div>
      ) : (
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isVisible ? "h-[60px] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="h-[60px] flex items-center">
          {/* Full-width surface bar */}
          <div className="flex items-center justify-center gap-0 w-full p-[4px] bg-fy27-surface">
            <IconButton onClick={onBack} ariaLabel="Back to calendar">
              <BackChevron />
            </IconButton>

            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              aria-label="Meeting details"
              className="flex-1 min-w-0 flex text-left"
            >
              <MeetingNameAndSignals
                participantCount={participantCount}
                isRecording={isRecording}
              />
            </button>

            {/* Speaker (audio output) + maroon end-call — per redesign frame 957:30537. */}
            <IconButton ariaLabel="Speaker" onClick={() => setAudioSheetOpen(true)}>
              <AudioRouteButtonIcon route={effectiveSelectedAudioRoute} />
            </IconButton>
            <LeaveButton onClick={onEndCall} />
          </div>
        </div>
      </div>
      )}
      <MeetingHeaderSheet open={sheetOpen} onClose={() => setSheetOpen(false)} />
      <AudioRouteSheet
        open={audioSheetOpen}
        onClose={() => setAudioSheetOpen(false)}
        selected={effectiveSelectedAudioRoute}
        onSelect={(route) => {
          setLocalSelectedAudioRoute(route);
          onAudioRouteChange?.(route);
        }}
      />
      </>
    );
  }
);

export default MeetingHeaderMvp;
