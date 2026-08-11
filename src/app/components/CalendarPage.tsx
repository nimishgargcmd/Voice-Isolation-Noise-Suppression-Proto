import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import { useL0Dock } from "@/app/lib/useDockScroll";
import { CopilotLogo } from "@/app/components/icons/CopilotLogo";
import { PageHeader, HeaderIconButton } from "@/app/components/PageChrome";
import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";

/* ─── Header chevron — small filled chevron-down right after "Nov" ─── */

function HeaderChevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <path d="M2.5 4.25L6 7.75L9.5 4.25" stroke="var(--fy27-text-primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Date strip ─── */

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];
const DATES = [1, 2, 3, 4, 6, 7, 8];
const SELECTED_INDEX = 4; // Thursday column → date 6

/* ─── Timeline ───
   Per the frame: each hour band is two stacked 48px gridline bars + a 1px gap
   ≈ 97px tall. Events are placed at absolute offsets measured from the 7 AM
   origin (frame container 817:101437, where the 7 AM row begins).         */

const HOUR_HEIGHT = 97; // px per hour (two 48px bars + 1px gap)
const PAD = 8;
const HOURS = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM"];
// 8AM..12PM labels are the active dark color; 7AM + 2PM..4PM are faded.
const ACTIVE_HOURS = new Set(["8 AM", "9 AM", "10 AM", "11 AM", "12 PM"]);

interface DayEvent {
  id: string;
  title: string;
  organizer: string;
  top: number; // px from the 7 AM origin (PAD already excluded; added at render)
  height: number;
  selected?: boolean;
  joinable?: boolean;
  pill?: boolean; // inline "Break" style
}

/* Event tops derived from the frame's absolute layout (origin = 7 AM row).
   Frame: Marketing 224, Client 370, Break 420, Art1 518, Art2 665, with the
   7 AM grid origin at 122 → subtract 122 to get the offset from 7 AM. */
const EVENTS: DayEvent[] = [
  { id: "mkt", title: "Marketing Team Sync", organizer: "Daniela Mandera", top: 102, height: 89, selected: true, joinable: true },
  { id: "client", title: "Client catch-up", organizer: "Beth Davis", top: 248, height: 41 },
  { id: "break", title: "Break", organizer: "Beth Davis", top: 298, height: 24, pill: true },
  { id: "art1", title: "Art studio", organizer: "Daniela Mandera", top: 396, height: 89 },
  { id: "art2", title: "Art studio", organizer: "Daniela Mandera", top: 543, height: 89 },
];

// Current-time line: frame path top 230, dot 228, vs 7 AM origin 122 → 108 / 106.
const CURRENT_TIME_TOP = 108;

/* ─── Event card ─── */

function EventCard({ event, onJoin }: { event: DayEvent; onJoin?: () => void }) {
  const { activeVersionId } = useVersion();
  const isFy27Mvp = isMvpFamily(activeVersionId);
  const textColor = "var(--fy27-text-interactive)";

  if (event.pill) {
    return (
      <div className="h-full flex items-center gap-[12px] pl-[10px] pr-[12px] rounded-[24px] bg-fy27-accent-tertiary border border-fy27-accent-tertiary overflow-hidden">
        <div className="w-[3px] h-[12px] rounded-[4px] shrink-0" style={{ background: "var(--fy27-surface-accent-primary)" }} />
        <p className="text-[14px] truncate" style={{ color: textColor, fontWeight: 500, lineHeight: "20px" }}>{event.title}</p>
        <p className="text-[12px] truncate" style={{ color: textColor, fontWeight: 400, lineHeight: "normal" }}>{event.organizer}</p>
      </div>
    );
  }

  if (event.selected) {
    return (
      <div
        className="h-full rounded-[12px] relative overflow-hidden"
        style={{ border: "2px solid var(--fy27-surface-accent-primary)" }}
      >
        {/* inner fill */}
        <div className="absolute inset-0 rounded-[10px] bg-fy27-accent-tertiary" />
        <div className="relative flex gap-[6px] h-full p-[8px]">
          <div className="w-[4px] rounded-[4px] shrink-0 my-[1px]" style={{ background: "var(--fy27-surface-accent-primary)" }} />
          <div className="flex flex-col min-w-0 pt-[2px]">
            <p className="text-[14px] truncate" style={{ color: textColor, fontWeight: 500, lineHeight: "20px" }}>{event.title}</p>
            <p className="text-[12px] truncate" style={{ color: textColor, fontWeight: 400, lineHeight: "normal" }}>{event.organizer}</p>
          </div>
        </div>
        <button
          onClick={onJoin}
          className={`absolute top-[10px] right-[10px] h-[28px] bg-fy27-surface-accent-primary flex items-center justify-center ${
            isFy27Mvp ? "px-[8px] rounded-[4px]" : "px-[10px] rounded-[24px]"
          }`}
        >
          <span className="text-fy27-text-on-accent text-[13px]" style={{ fontWeight: 500, lineHeight: "18px", letterSpacing: "-0.08px" }}>Join</span>
        </button>
      </div>
    );
  }

  return (
    <div className="h-full rounded-[12px] bg-fy27-accent-tertiary border border-fy27-accent-tertiary overflow-hidden">
      <div className="flex gap-[8px] h-full px-[8px] py-[5px]">
        <div className="w-[3px] rounded-[4px] shrink-0" style={{ background: "var(--fy27-surface-accent-primary)" }} />
        <div className="flex flex-col min-w-0">
          <p className="text-[14px] truncate" style={{ color: "var(--fy27-text-interactive)", fontWeight: 500, lineHeight: "18px" }}>{event.title}</p>
          <p className="text-[12px] truncate" style={{ color: "var(--fy27-text-interactive)", fontWeight: 400, lineHeight: "15px" }}>{event.organizer}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */

export function CalendarPage() {
  const navigate = useNavigate();
  const meeting = useActiveMeeting();
  const scrollRef = useRef<HTMLDivElement>(null);
  useL0Dock(scrollRef);

  const handleJoin = () => {
    if (meeting.isActive && meeting.isBackgrounded) {
      meeting.returnToMeeting();
      navigate("/meeting", { replace: true });
    } else {
      navigate("/pre-join", { replace: true });
    }
  };

  const timelineHeight = HOURS.length * HOUR_HEIGHT + PAD;

  return (
    <div className="w-full h-full bg-fy27-surface flex flex-col relative overflow-hidden" style={{ fontFamily: "var(--font-sf-pro)" }}>
      <PageHeader
        title="Nov"
        titleTrailing={<HeaderChevron />}
        actions={
          <HeaderIconButton label="Copilot">
            <CopilotLogo size={24} />
          </HeaderIconButton>
        }
      />

      {/* Date strip */}
      <div className="shrink-0 px-[23px] pt-[4px] pb-[12px]">
        <div className="flex justify-between">
          {DAYS.map((day, i) => {
            const sel = i === SELECTED_INDEX;
            return (
              <div key={i} className="relative flex flex-col items-center gap-[8px] w-[32px] h-[54px]">
                {sel && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-[42px] h-[69px] rounded-[100px] pointer-events-none bg-fy27-accent-tertiary"
                    style={{ top: "-9px" }}
                  />
                )}
                <span
                  className="relative h-[14px] flex items-center justify-center"
                  style={{
                    fontSize: sel ? "14px" : "12px",
                    color: "var(--fy27-text-secondary)",
                    fontWeight: 500,
                    lineHeight: "26px",
                    letterSpacing: "0.3px",
                  }}
                >
                  {day}
                </span>
                <div
                  className="relative flex items-center justify-center"
                  style={
                    sel
                      ? { width: "32px", height: "32px", borderRadius: "32px", background: "var(--fy27-brand-primary)" }
                      : { padding: "4px" }
                  }
                >
                  <span
                    className="text-[17px] text-center"
                    style={{ color: sel ? "var(--fy27-text-on-accent)" : "var(--fy27-text-primary)", fontWeight: 400, lineHeight: "22px", letterSpacing: "-0.43px" }}
                  >
                    {DATES[i]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Divider under the date strip */}
      <div className="shrink-0 h-px bg-fy27-divider" />

      {/* Scrollable timeline */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto relative">
        <div className="relative" style={{ height: timelineHeight + 140 }}>
          {/* Hour grid backgrounds — two stacked #f8f8f8 bars per hour */}
          <div className="absolute left-[50px] right-[16px]" style={{ top: PAD }}>
            {HOURS.map((_, i) => (
              <div key={i} style={{ height: HOUR_HEIGHT }} className="flex flex-col gap-[1px]">
                <div className="h-[48px] bg-fy27-surface-raised rounded-t-[4px]" />
                <div className="h-[48px] bg-fy27-surface-raised rounded-b-[4px]" />
              </div>
            ))}
          </div>

          {/* Hour labels — 11px, right-aligned in the gutter */}
          {HOURS.map((label, i) => (
            <p
              key={label}
              className="absolute text-right w-[34px]"
              style={{
                fontSize: "11px",
                fontWeight: 400,
                lineHeight: "11px",
                letterSpacing: "0.06px",
                left: "8px",
                top: i * HOUR_HEIGHT + PAD - 5,
                color: ACTIVE_HOURS.has(label) ? "#808080" : "#94a3b8",
              }}
            >
              {label}
            </p>
          ))}

          {/* Events */}
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="absolute left-[50px] right-[16px]"
              style={{ top: event.top + PAD, height: event.height }}
            >
              <EventCard event={event} onJoin={event.joinable ? handleJoin : undefined} />
            </div>
          ))}

          {/* Current-time indicator — 8:32 AM, #E94626. The line spans exactly
             the event-card column (left 50px → right 16px), matching where the
             cards start and end, and sits above the cards (z-10). */}
          <div className="absolute left-0 right-0 z-10 pointer-events-none" style={{ top: CURRENT_TIME_TOP + PAD }}>
            <p
              className="absolute text-right w-[34px] whitespace-nowrap"
              style={{ fontSize: "8px", fontWeight: 500, lineHeight: "11px", letterSpacing: "0.06px", color: "var(--fy27-text-interactive)", left: "8px", top: "-5px" }}
            >
              8:32 AM
            </p>
            <svg className="absolute size-[5px]" viewBox="0 0 5 5" fill="none" style={{ left: "48px", top: "-2px", color: "var(--fy27-icon-mention)" }}>
              <path fillRule="evenodd" clipRule="evenodd" d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" fill="currentColor" />
            </svg>
            <div className="absolute h-px" style={{ left: "50px", right: "16px", top: 0, background: "var(--fy27-icon-mention)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
