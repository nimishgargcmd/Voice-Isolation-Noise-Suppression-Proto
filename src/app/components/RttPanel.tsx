import React, { useEffect, useRef, useState } from "react";
import { MultitaskingPanel } from "@/app/components/MultitaskingPanel";
import { CollapsedInputBox } from "@/app/components/CollapsedInputBox";
import { NativeInputBar } from "@/app/components/NativeInputBar";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import { useTheme } from "@/app/theme/ThemeContext";
import { rosterById, SELF_ID } from "@/app/lib/meetingRoster";
import svgPathsGrid from "@/imports/svg-iv7o0d0hxl";

// Fluent "Closed Caption Off" glyph (Figma POR 1496:15097). viewBox 0 0 20 20
// (rendered with a -2 -2 24 24 viewBox so it optically matches the 24px on-glyph).
const CC_OFF_PATH =
  "M1.28034 0.219674C0.987445 -0.0732203 0.512571 -0.0732252 0.219675 0.219663C-0.0732209 0.512551 -0.0732257 0.987421 0.219665 1.28032L1.4698 2.53047C0.584602 3.11109 0 4.11226 0 5.24997V14.7545C0 16.5494 1.45507 18.0045 3.25 18.0045H16.75C16.8132 18.0045 16.8759 18.0027 16.9382 17.9991L18.7194 19.7803C19.0123 20.0732 19.4872 20.0732 19.7801 19.7803C20.073 19.4874 20.073 19.0126 19.7801 18.7197L1.28034 0.219674ZM15.4436 16.5045H3.25C2.2835 16.5045 1.5 15.721 1.5 14.7545V5.24997C1.5 4.52294 1.94336 3.89945 2.57445 3.63513L5.40186 6.46258C4.29288 7.04205 3.5 8.29951 3.5 9.99993C3.5 13.1432 6.21539 14.7746 8.6208 13.4065C8.98085 13.2017 9.10671 12.7438 8.90192 12.3837C8.69714 12.0237 8.23925 11.8978 7.8792 12.1026C6.48411 12.8961 5 12.0045 5 9.99993C5 8.63008 5.69021 7.7809 6.57296 7.63369L15.4436 16.5045ZM18.4295 15.2477C18.4754 15.0913 18.5 14.9258 18.5 14.7545V5.24997C18.5 4.28348 17.7165 3.49998 16.75 3.49998H6.68192L5.18195 1.99999H16.75C18.5449 1.99999 20 3.45506 20 5.24997V14.7545C20 15.3475 19.8412 15.9034 19.5638 16.382L18.4295 15.2477ZM12.5531 9.3712L11.3557 8.17386C12.1688 6.28645 14.2384 5.52423 16.1216 6.5985C16.4814 6.80374 16.6067 7.26178 16.4015 7.62157C16.1962 7.98136 15.7382 8.10665 15.3784 7.90141C14.1366 7.19303 12.8292 7.81615 12.5531 9.3712Z";

function initialsOf(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

interface RttPanelProps {
  onClose: () => void;
}

/**
 * FY27 MVP — Real-Time Text (RTT) panel. A peer multitasking panel (rendered via
 * MultitaskingPanel, mutually exclusive with chat/copilot/more). Header: built-in
 * left dismiss + centered title + a CC toggle on the right (via actionButton).
 *
 * Body: a FLAT transcript (32px avatar + Caption name + Body-1 text — no bubbles,
 * no time separators, auto-scroll, aria-live). When the CC toggle is on, simulated
 * spoken lines appear alongside everyone's typed text; off → only typed words.
 *
 * The self composer reuses the shared CollapsedInputBox + NativeInputBar (fake
 * keyboard). As the user types, a live "You" partial entry updates per keystroke
 * and is finalized on send / keyboard dismiss.
 */
export function RttPanel({ onClose }: RttPanelProps) {
  const {
    rttEntries,
    rttCaptionsOn,
    toggleRttCaptions,
    pushRttEntry,
    updateRttEntry,
  } = useActiveMeeting();
  const { theme } = useTheme();

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [draft, setDraft] = useState("");
  // Id of the in-progress self "You" partial entry (null when not composing).
  const partialIdRef = useRef<number | null>(null);

  const self = rosterById(SELF_ID);

  // When captions are off, hide simulated spoken lines — only typed words remain.
  // Also drop any empty entries (e.g. a partial that was cleared).
  const visible = rttEntries.filter(
    (e) => (rttCaptionsOn || e.kind === "typed") && e.text.trim().length > 0,
  );

  // Auto-scroll to the newest line whenever the transcript changes (including
  // live partial updates — rttEntries is a fresh array reference each update).
  useEffect(() => {
    const scroller = scrollRef.current?.parentElement;
    if (!scroller) return;
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        scroller.scrollTo({ top: scroller.scrollHeight, behavior: "smooth" }),
      ),
    );
  }, [rttEntries]);

  // Live self partial: ensure a "You" partial exists and mirrors the draft.
  const handleChange = (value: string) => {
    setDraft(value);
    if (value.trim()) {
      if (partialIdRef.current == null) {
        partialIdRef.current = pushRttEntry({
          speakerId: SELF_ID,
          name: "You",
          avatar: self?.avatar,
          text: value,
          kind: "typed",
          partial: true,
        });
      } else {
        updateRttEntry(partialIdRef.current, { text: value });
      }
    } else if (partialIdRef.current != null) {
      // Cleared field — blank the partial (filtered out of the transcript).
      updateRttEntry(partialIdRef.current, { text: "" });
    }
  };

  // Commit the current partial (finalize if it has text, otherwise blank it).
  const finalizePartial = () => {
    const id = partialIdRef.current;
    if (id != null) {
      updateRttEntry(id, { text: draft.trim(), partial: false });
    }
    partialIdRef.current = null;
    setDraft("");
  };

  const handleSend = () => {
    if (!draft.trim() && partialIdRef.current == null) return;
    finalizePartial();
    // Keep the keyboard open — RTT is continuous; the next keystroke starts a
    // fresh partial line.
  };

  const handleKeyboardClose = () => {
    finalizePartial();
    setIsKeyboardOpen(false);
  };

  // CC toggle — bare 24pt nav-bar action. Interactive tint when captions are on.
  const ccButton = (
    <button
      onClick={toggleRttCaptions}
      aria-label={rttCaptionsOn ? "Hide spoken captions" : "Show spoken captions"}
      aria-pressed={rttCaptionsOn}
      className={`size-[24px] grid place-items-center active:opacity-60 transition-opacity ${
        rttCaptionsOn ? "text-fy27-icon-interactive" : "text-fy27-icon-primary"
      }`}
    >
      {rttCaptionsOn ? (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
          <path d={svgPathsGrid.p3ba1a400} fill="currentColor" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" viewBox="-2 -2 24 24">
          <path d={CC_OFF_PATH} fill="currentColor" />
        </svg>
      )}
    </button>
  );

  const inputBox = (
    <CollapsedInputBox
      placeholder="Type to add to the transcript"
      theme={theme}
      onClick={() => setIsKeyboardOpen(true)}
    />
  );

  return (
    <>
      <style>{`
        @keyframes rttCaretBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .rtt-caret { animation: none !important; }
        }
      `}</style>
      <MultitaskingPanel
        title="Real-time text"
        onClose={onClose}
        actionButton={ccButton}
        showFooter={true}
        footerComponent={inputBox}
      >
        <div
          ref={scrollRef}
          aria-live="polite"
          aria-label="Real-time text transcript"
          className="px-[22px] pt-3 pb-[16px] space-y-3 min-h-full"
        >
          {visible.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center pt-[80px] px-6">
              <p className="text-fy27-text-primary text-[17px] leading-[22px] tracking-[-0.41px] font-medium">
                Real-time text is on
              </p>
              <p className="text-fy27-text-secondary text-[15px] leading-[20px] mt-[6px]">
                {rttCaptionsOn
                  ? "Spoken words and anything you or others type will appear here."
                  : "Anything you or others type will appear here."}
              </p>
            </div>
          ) : (
            visible.map((e) => {
              return (
                <div key={e.id} className="flex gap-[10px] items-start">
                  <div className="flex-shrink-0 size-[32px] rounded-full overflow-hidden bg-fy27-brand grid place-items-center">
                    {e.avatar ? (
                      <img src={e.avatar} alt={e.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-fy27-text-global text-[12px] font-semibold">
                        {initialsOf(e.name)}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-[2px]">
                    <p
                      className="text-fy27-text-secondary text-[12px] leading-[16px]"
                      style={{ fontFamily: "var(--font-sf-display)" }}
                    >
                      {e.name}
                    </p>
                    <p className="text-fy27-text-primary text-[17px] leading-[22px] tracking-[-0.41px] break-words">
                      {e.text}
                      {e.partial && (
                        <span
                          className="rtt-caret inline-block w-[2px] h-[16px] align-[-2px] ml-[2px] bg-fy27-text-interactive"
                          style={{ animation: "rttCaretBlink 1s step-end infinite" }}
                        />
                      )}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </MultitaskingPanel>
      {isKeyboardOpen && (
        <NativeInputBar
          value={draft}
          onChange={handleChange}
          onSend={handleSend}
          onClose={handleKeyboardClose}
          placeholder="Type to add to the transcript"
          showPrompts={false}
          theme={theme}
        />
      )}
    </>
  );
}
