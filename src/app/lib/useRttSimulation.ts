import { useEffect, useRef } from "react";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import { GALLERY_ROSTER, SELF_ID } from "@/app/lib/meetingRoster";
import { sendRttUtterance } from "@/app/lib/llm";

// Cadence between simulated spoken lines (jittered).
const MIN_DELAY = 5000;
const MAX_DELAY = 12000;
// Cap total simulated spoken lines so the transcript never grows unbounded.
const MAX_SPOKEN = 40;

// Canned utterances used when the LLM is unavailable.
const CANNED: string[] = [
  "Yeah, that makes sense to me.",
  "Can we circle back on that point?",
  "I think we should prioritise the timeline first.",
  "Good call — let's put that in the notes.",
  "Sorry, could you repeat the last part?",
  "I'll take that action item.",
  "Do we have a deadline for this yet?",
  "Let's park that and move on.",
  "Agreed, I'll follow up after the call.",
  "That works for me.",
];

// Speakers = everyone except the local user. Active speakers weighted a little
// higher so the demo transcript feels driven by whoever's talking.
const SPEAKERS = GALLERY_ROSTER.filter((p) => p.id !== SELF_ID);

function pickSpeaker(removedIds: string[]) {
  const pool = SPEAKERS.filter((p) => !removedIds.includes(p.id));
  const speakers = pool.length ? pool : SPEAKERS;
  const weighted = speakers.flatMap((p) => (p.activeSpeaker ? [p, p] : [p]));
  return weighted[Math.floor(Math.random() * weighted.length)];
}

/**
 * FY27 MVP — ambient RTT simulation. While enabled, periodically generates a
 * short spoken line from a random meeting participant (LLM, with a canned
 * fallback) and pushes it as a "spoken" RTT entry. Mounted in MeetingPage so it
 * only runs in the foreground; caller gates `enabled` on isRttOn && rttCaptionsOn.
 */
export function useRttSimulation({
  enabled,
  meetingTitle,
  currentTopic,
}: {
  enabled: boolean;
  meetingTitle: string;
  currentTopic: string;
}) {
  const { rttEntries, removedIds, pushRttEntry } = useActiveMeeting();

  // Read latest state from refs so the scheduler effect doesn't re-run per entry.
  const entriesRef = useRef(rttEntries);
  entriesRef.current = rttEntries;
  const removedRef = useRef(removedIds);
  removedRef.current = removedIds;
  const inFlightRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const schedule = () => {
      const delay = MIN_DELAY + Math.random() * (MAX_DELAY - MIN_DELAY);
      timer = setTimeout(run, delay);
    };

    const run = async () => {
      if (cancelled) return;

      const spokenCount = entriesRef.current.filter((e) => e.kind === "spoken").length;
      if (spokenCount >= MAX_SPOKEN) return; // stop scheduling once capped

      if (!inFlightRef.current) {
        inFlightRef.current = true;
        const speaker = pickSpeaker(removedRef.current);
        try {
          const recent = entriesRef.current
            .slice(-8)
            .map((e) => ({ name: e.name, text: e.text }));
          let text = "";
          try {
            text = await sendRttUtterance(speaker.name, meetingTitle, currentTopic, recent);
          } catch {
            text = "";
          }
          if (!text) text = CANNED[Math.floor(Math.random() * CANNED.length)];
          if (!cancelled) {
            pushRttEntry({
              speakerId: speaker.id,
              name: speaker.name,
              avatar: speaker.avatar,
              text,
              kind: "spoken",
            });
          }
        } finally {
          inFlightRef.current = false;
        }
      }

      if (!cancelled) schedule();
    };

    schedule();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [enabled, meetingTitle, currentTopic, pushRttEntry]);
}
