import React, { useRef, useState, useEffect } from "react";
import svgPaths from "@/imports/svg-unik707tki";
import handSvgPaths from "@/imports/svg-7ie24l3a57";

interface RaisedHand {
  name: string;
}

interface AdditionalInfoLayerProps {
  raisedHands?: RaisedHand[];
  timerMinutes?: number;
  timerTopicName?: string;
  /** Per-agenda durations in minutes — one segment per entry, widths proportional to share of total */
  agendaDurations?: number[];
  /** Index of the in-progress agenda item */
  currentTopicIndex?: number;
  timerEpoch?: number;
  timerPausedRemaining?: number | null;
  onTimerComplete?: () => void;
  showTimer?: boolean;
  isTimerPaused?: boolean;
  notificationCount?: number;
  onTimerClick?: () => void;
  isTimerPressed?: boolean;
  onNotificationClick?: () => void;
  isNotificationPressed?: boolean;
  /** Tap the raised-hands count pill to open the list. */
  onRaisedHandsClick?: () => void;
  isRaisedHandsPressed?: boolean;
}

// Bell Icon — inherits the AIL icon token (inverts on selected)
function BellIcon() {
  return (
    <div className="relative shrink-0 w-[20px] h-[22px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p1a5b6770} fill="var(--fy27-ail-icon)" />
      </svg>
    </div>
  );
}

// Recording Alert Icon - Red with white exclamation
function RecordingIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p22389000} fill="#CC4A31" />
      </svg>
    </div>
  );
}

// Lobby/Guest Waiting Icon - White
function LobbyIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p38f1da00} fill="#E1E1E1" />
      </svg>
    </div>
  );
}

// Notification Counter Badge — red (Icon/Mention) with a ring matching the pill surface
function NotificationBadge({ count }: { count: number }) {
  return (
    <div
      className="border-2 flex items-center justify-center size-[18px] rounded-[100px] shrink-0"
      style={{ background: 'var(--fy27-ail-mention)', borderColor: 'var(--fy27-ail-surface)' }}
    >
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-center">
        <p className="font-['SF_Pro_Text',sans-serif] font-normal text-[12px] text-center leading-[20px] tracking-[0.06px] text-white">
          {count}
        </p>
      </div>
    </div>
  );
}

// Segmented Agenda Timer — one segment per agenda item, widths proportional to
// each item's share of total meeting time. Same colors/dimensions as the
// original single-bar timer; epoch-based so timing persists across remounts.
function SegmentedTimerPill({ durations, currentIndex = 0, topicName, startEpoch, pausedRemaining, onClick, isPressed, onComplete, isPaused = false }: {
  durations: number[];            // per-agenda durations in minutes
  currentIndex?: number;          // index of the in-progress item
  topicName?: string;             // current topic, for the accessible name
  startEpoch: number;
  pausedRemaining?: number | null;
  onClick?: () => void;
  isPressed?: boolean;
  onComplete?: () => void;
  isPaused?: boolean;
}) {
  const currentTotalSeconds = (durations[currentIndex] ?? 0) * 60;
  const firedCompleteRef = useRef(false);
  const [remaining, setRemaining] = useState(() => {
    if (isPaused) return pausedRemaining ?? currentTotalSeconds;
    const elapsed = Math.floor((Date.now() - startEpoch) / 1000);
    return Math.max(0, currentTotalSeconds - elapsed);
  });

  // Reset fired flag when the current segment changes (new topic / reset)
  useEffect(() => {
    firedCompleteRef.current = false;
  }, [startEpoch, currentIndex]);

  // Recalculate remaining for the current segment every second (or freeze when paused)
  useEffect(() => {
    if (isPaused) {
      setRemaining(pausedRemaining ?? currentTotalSeconds);
      return;
    }
    const calc = () => {
      const elapsed = Math.floor((Date.now() - startEpoch) / 1000);
      return Math.max(0, currentTotalSeconds - elapsed);
    };
    setRemaining(calc());
    const interval = setInterval(() => setRemaining(calc()), 1000);
    return () => clearInterval(interval);
  }, [isPaused, startEpoch, currentTotalSeconds, pausedRemaining]);

  // Fire completion callback when the current segment hits 0
  // onComplete intentionally excluded from deps — we only want to fire once
  // per countdown completion, not re-fire when the callback reference changes.
  useEffect(() => {
    if (remaining === 0 && !firedCompleteRef.current) {
      firedCompleteRef.current = true;
      onComplete?.();
    }
  }, [remaining]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentFill = currentTotalSeconds > 0 ? ((currentTotalSeconds - remaining) / currentTotalSeconds) * 100 : 0;

  const minsLeft = Math.ceil(remaining / 60);
  const ariaLabel = `Agenda timer${topicName ? ` — ${topicName}` : ''}. ${
    isPaused ? 'Paused, ' : ''
  }${minsLeft} min left. Opens agenda.`;

  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      aria-label={ariaLabel}
      className={`flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px] backdrop-blur-[45px] bg-fy27-ail-surface transition-colors ${
        isPressed ? 'ail-selected' : ''
      }`}
      style={{ pointerEvents: !onClick ? 'none' : undefined, height: 36, padding: 8 }}
    >
      {/* Segment row — each segment grows in proportion to its duration */}
      <div className="flex items-center gap-[4px] size-full">
        {durations.map((dur, i) => {
          // Completed items are fully filled, the current item shows live progress, future items are empty
          const fill = i < currentIndex ? 100 : i === currentIndex ? currentFill : 0;
          const isCurrent = i === currentIndex;
          return (
            <div
              key={i}
              className="relative rounded-[9999px] overflow-hidden h-full min-w-px"
              style={{ flexGrow: dur, flexBasis: 0, background: 'var(--fy27-ail-track)' }}
            >
              <div
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${fill}%`,
                  background: 'var(--fy27-ail-fill)',
                  transition: isPaused || !isCurrent ? 'none' : 'width 1s linear',
                }}
              />
              {/* Pause icon — overlaid on the current segment only when paused.
                  Two stacked copies: icon.primary over the grey track, and an
                  on-accent copy clipped to the purple fill so it stays legible
                  where it overlaps the bar. */}
              {isPaused && isCurrent && (
                <>
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="2" y="1.5" width="3" height="9" rx="0.75" fill="var(--fy27-icon-primary)" />
                      <rect x="7" y="1.5" width="3" height="9" rx="0.75" fill="var(--fy27-icon-primary)" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 z-20 flex items-center justify-center" style={{ clipPath: `inset(0 ${100 - fill}% 0 0)` }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="2" y="1.5" width="3" height="9" rx="0.75" fill="var(--fy27-icon-on-accent)" />
                      <rect x="7" y="1.5" width="3" height="9" rx="0.75" fill="var(--fy27-icon-on-accent)" />
                    </svg>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </button>
  );
}

// Notification Pill Component
function NotificationPill({
  notificationCount,
  onClick,
  isPressed,
}: {
  notificationCount: number;
  onClick?: () => void;
  isPressed?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={`flex h-[36px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0 backdrop-blur-[45px] bg-fy27-ail-surface transition-colors ${
        isPressed ? 'ail-selected' : ''
      }`}
      style={!onClick ? { pointerEvents: 'none' } : undefined}
    >
      <BellIcon />
      {notificationCount > 0 && (
        <div className="absolute flex items-center left-[26px] p-[2px] top-[2px]">
          <NotificationBadge count={notificationCount} />
        </div>
      )}
    </button>
  );
}

// Raised Hand Icon - Yellow (darker shade when on a light/pressed background)
function RaisedHandIcon({ color = "var(--fy27-ail-warning)" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={handSvgPaths.p2bb78e00} fill={color} />
      </svg>
    </div>
  );
}

// Raised Hands Count Pill — gold count + yellow hand icon; opens the raised-hands list
function RaisedHandsCountPill({ count, onClick, isPressed }: { count: number; onClick?: () => void; isPressed?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      aria-label={`${count} ${count === 1 ? 'hand' : 'hands'} raised. View list.`}
      className={`flex h-[36px] items-center justify-center gap-[2px] overflow-clip px-[12px] py-[8px] relative rounded-[9999px] shrink-0 backdrop-blur-[45px] bg-fy27-ail-surface transition-colors ${
        isPressed ? 'ail-selected' : ''
      }`}
      style={!onClick ? { pointerEvents: 'none' } : undefined}
    >
      <span className="font-['SF_Pro_Display',sans-serif] font-semibold text-[17px] leading-[22px] tracking-[-0.41px] whitespace-nowrap" style={{ color: 'var(--fy27-ail-warning)' }}>
        {count}
      </span>
      <RaisedHandIcon />
    </button>
  );
}

// Ranked Name Component - Number + Name with 6px gap
function RankedName({ rank, name }: { rank: number; name: string }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center shrink-0">
      {/* Number */}
      <div className="content-stretch flex items-center shrink-0">
        <p className="font-['SF_Pro_Display',sans-serif] font-semibold leading-[22px] text-[#ffb900] text-[17px] tracking-[-0.41px] whitespace-nowrap">
          {rank}
        </p>
      </div>
      {/* Name */}
      <div className="content-stretch flex items-center shrink-0">
        <p className="font-['SF_Pro_Text',sans-serif] font-normal leading-[18px] text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
          {name}
        </p>
      </div>
    </div>
  );
}

// Raised Hands Pill Component
function RaisedHandsPill({ raisedHands }: { raisedHands: RaisedHand[] }) {
  // When more than 4 names, left-align; otherwise center
  const shouldLeftAlign = raisedHands.length > 4;
  const isSingleHand = raisedHands.length === 1;
  
  return (
    <div className="bg-[rgba(255,200,0,0.2)] h-[40px] relative rounded-[9999px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          {/* Sticky Hand Icon - Not part of scroll container */}
          <div className="absolute left-[16px] top-1/2 -translate-y-1/2">
            <RaisedHandIcon />
          </div>

          {/* Scrollable Participant List */}
          <div className="absolute left-[48px] top-1/2 -translate-y-1/2 right-[20px] overflow-x-auto overflow-y-clip scrollbar-hide">
            <div className={`content-stretch flex flex-col justify-center w-full ${shouldLeftAlign ? 'items-start' : 'items-center'}`}>
              {isSingleHand ? (
                <div className="content-stretch flex gap-[6px] items-center shrink-0">
                  <p className="font-['SF_Pro_Text',sans-serif] font-normal leading-[18px] text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
                    {raisedHands[0].name} raised hand
                  </p>
                </div>
              ) : (
                <div className="content-stretch flex gap-[12px] items-center justify-center shrink-0">
                  {raisedHands.map((hand, index) => (
                    <RankedName key={index} rank={index + 1} name={hand.name} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main AdditionalInfoLayer Component
export function AdditionalInfoLayer({
  raisedHands = [],
  timerMinutes = 15,
  timerTopicName = "Blockers on Easter campaign timeline",
  agendaDurations,
  currentTopicIndex = 0,
  timerEpoch = Date.now(),
  timerPausedRemaining = null,
  onTimerComplete,
  showTimer = true,
  isTimerPaused = false,
  notificationCount = 0,
  onTimerClick,
  isTimerPressed,
  onNotificationClick,
  isNotificationPressed,
  onRaisedHandsClick,
  isRaisedHandsPressed,
}: AdditionalInfoLayerProps) {
  const hasRaisedHands = raisedHands.length > 0;
  // Pill is visible when there are pending notifications OR active status indicators

  // TEMPORARY: Hide raised hands row (set to false to show again)
  const showRaisedHands = false;

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full px-[8px] py-[4px]">
      {/* Row 1: Raised Hands Pill - only visible when raisedHands.length > 0 */}
      {showRaisedHands && hasRaisedHands && (
        <div className="h-[40px] relative shrink-0 w-full">
          <RaisedHandsPill raisedHands={raisedHands} />
        </div>
      )}

      {/* Row 2: Timer and Notifications */}
      <div className="h-[36px] relative shrink-0 w-full">
        <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-full gap-[4px]">
          {/* Segmented Agenda Timer */}
          {showTimer && (
            <SegmentedTimerPill durations={agendaDurations ?? [timerMinutes]} currentIndex={currentTopicIndex} topicName={timerTopicName} startEpoch={timerEpoch} pausedRemaining={timerPausedRemaining} onClick={onTimerClick} isPressed={isTimerPressed} onComplete={onTimerComplete} isPaused={isTimerPaused} />
          )}

          {/* Raised Hands Count Pill - only when hands are raised */}
          {hasRaisedHands && (
            <RaisedHandsCountPill count={raisedHands.length} onClick={onRaisedHandsClick} isPressed={isRaisedHandsPressed} />
          )}

          {/* Notification Pill - bell always visible, badge only when count > 0 */}
          <NotificationPill
            notificationCount={notificationCount}
            onClick={onNotificationClick}
            isPressed={isNotificationPressed}
          />
        </div>
      </div>
    </div>
  );
}