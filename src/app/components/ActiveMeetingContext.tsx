import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import type { ChatMessage } from "@/app/components/chat/useChatSend";
import { MEETING_CHAT_SEED } from "@/app/components/chat/meetingChatSeed";
import { SEEDED_RAISED_IDS } from "@/app/lib/meetingRoster";

/** A single agenda topic. `duration` is in minutes. `id` is a display key only — timer math is index-based. */
export interface AgendaItem {
  id: number;
  title: string;
  duration: number;
}

/** Seed agenda used on join and reset. */
export const INITIAL_AGENDA_ITEMS: AgendaItem[] = [
  { id: 1, title: "Summit planning", duration: 10 },
  { id: 2, title: "Blockers on Easter campaign timeline and Q2 marketing strategy review", duration: 15 },
  { id: 3, title: "Discuss follow-up tasks", duration: 10 },
];

/** A single Real-Time Text entry — a typed message or a spoken-caption line, attributed to a speaker. */
export interface RttEntry {
  id: number;
  /** Roster id or SELF_ID. */
  speakerId: string;
  name: string;
  /** Avatar photo url; absent → initials fallback. */
  avatar?: string;
  text: string;
  /** "typed" = entered via the RTT composer; "spoken" = simulated caption/transcript. */
  kind: "typed" | "spoken";
  /** In-progress entry (self typing live, or a streaming utterance). */
  partial?: boolean;
  ts: number;
}
export type RttEntryInput = Omit<RttEntry, "id" | "ts">;

let rttIdCounter = 0;
const nextRttId = () => Date.now() * 1000 + ++rttIdCounter;

/** A lobby guest admitted into the meeting — gets a gallery tile + bumps the
 *  participant count; auto-removed after 30s (then they fall back to the lobby). */
export interface AdmittedParticipant {
  id: string;
  name: string;
  avatar?: string;
  display: "photo" | "initials";
  initialsColor?: string;
  /** Subtitle (e.g. the spoofed email) — preserved so it survives admission. */
  role?: string;
  /** Admitted from the "Suspected threats" lobby — kept (no 30s auto-removal),
   *  tagged with the scam badge / danger warning in the tile + participants list. */
  suspected?: boolean;
}

export interface ActiveMeetingState {
  isActive: boolean;
  isBackgrounded: boolean;
  meetingTitle: string;
  participantCount: number;
  isMicOn: boolean;
  isVideoOn: boolean;
  /** Microphone mode preference: Off, Noise suppression, or Voice isolation. */
  voiceNoiseMode: "off" | "noise-suppression" | "voice-isolation";
  /** Whether content is currently being shared in the meeting */
  isContentSharing: boolean;
  /** Timestamp (ms) when the meeting started */
  startTime: number | null;
  /** Elapsed seconds since meeting start */
  elapsed: number;
  /** Agenda timer — current topic index */
  agendaTopicIndex: number;
  /** Agenda timer — whether paused */
  agendaPaused: boolean;
  /** Agenda timer — epoch (ms) when the current countdown segment started */
  agendaTimerEpoch: number;
  /** Agenda timer — remaining seconds saved when paused (null when running) */
  agendaPausedRemaining: number | null;
  /** Agenda topics (editable). Lives here so edits survive backgrounding. */
  agendaItems: AgendaItem[];
  // ── Navigation-persistent state ────────────────────────────────────────────
  // MeetingPage fully unmounts when the user backgrounds (React Router route),
  // so any state that must survive the back→dock→return cycle must live here,
  // not in MeetingPage local state.
  /** Whether meeting recording is active */
  isRecording: boolean;
  /** Whether live captions are turned on (from the More menu) */
  areCaptionsOn: boolean;
  /** Real-Time Text (RTT) — accessibility transcript feature. Once on, stays on until meeting end. */
  isRttOn: boolean;
  /** RTT captions (CC) toggle — when on, spoken words appear as transcript alongside typed text. */
  rttCaptionsOn: boolean;
  /** RTT transcript entries (typed + spoken), in order. */
  rttEntries: RttEntry[];
  /** Notification hub badge count — increments on new notification, resets when hub is opened */
  notificationCount: number;
  /** Lobby guest count */
  lobbyCount: number;
  /** Ordered participant ids who have a hand raised (order = raise order → panel 1·2·3). Self = SELF_ID. */
  raisedHands: string[];
  /** Lobby guests admitted into the meeting (gallery tile + count); auto-removed after 30s. */
  admittedParticipants: AdmittedParticipant[];
  /** Participant ids spotlighted for everyone (gallery: spotlight icon + floats to top). */
  spotlightedIds: string[];
  /** Participant ids pinned for me (gallery: pin icon + floats above video-on). */
  pinnedIds: string[];
  /** Participant ids removed from the meeting (filtered out of the gallery + list). */
  removedIds: string[];
}

interface ActiveMeetingActions {
  /** Called when user enters a meeting (from pre-join) */
  startMeeting: (title: string, participantCount: number) => void;
  /** Called when user taps Back in the meeting header — backgrounds the meeting */
  backgroundMeeting: () => void;
  /** Called when user taps the dock or "return" — un-backgrounds the meeting */
  returnToMeeting: () => void;
  /** Fully ends the meeting (plays audio) */
  endMeeting: () => void;
  /** Toggle mic from the dock */
  setMicOn: (on: boolean) => void;
  /** Toggle video from the dock */
  setVideoOn: (on: boolean) => void;
  /** Set shared voice/noise mode from pre-join or in-meeting settings. */
  setVoiceNoiseMode: (mode: "off" | "noise-suppression" | "voice-isolation") => void;
  /** Sync participant count */
  setParticipantCount: (count: number) => void;
  /** Toggle content sharing state (persists across backgrounding) */
  setContentSharing: (sharing: boolean) => void;
  /** Update agenda timer state (partial updates merged) */
  updateAgendaState: (updates: Partial<Pick<ActiveMeetingState, 'agendaTopicIndex' | 'agendaPaused' | 'agendaTimerEpoch' | 'agendaPausedRemaining'>>) => void;
  /** Replace the agenda topics list (add / reorder / edit duration / rename) */
  setAgendaItems: (items: AgendaItem[]) => void;
  /** Set recording state */
  setIsRecording: (on: boolean) => void;
  /** Toggle live captions on/off */
  toggleCaptions: () => void;
  /** Turn on RTT (one-way; resets only on meeting end). Captions default on. */
  startRtt: () => void;
  /** Toggle the RTT captions (spoken-words) inclusion. */
  toggleRttCaptions: () => void;
  /** Append an RTT entry; returns its generated id. */
  pushRttEntry: (entry: RttEntryInput) => number;
  /** Merge a patch into an existing RTT entry (e.g. finalize a partial). */
  updateRttEntry: (id: number, patch: Partial<RttEntry>) => void;
  /** Increment notification badge count */
  incrementNotificationCount: () => void;
  /** Decrement notification badge count */
  decrementNotificationCount: () => void;
  /** Set lobby guest count */
  setLobbyCount: (count: number) => void;
  /** Reset notification badge count to zero */
  resetNotificationCount: () => void;
  /** Raise a participant's hand (append by roster id, preserving order). */
  raiseHand: (id: string) => void;
  /** Lower a participant's hand. */
  lowerHand: (id: string) => void;
  /** Toggle a participant's raised hand. */
  toggleHand: (id: string) => void;
  /** Admit a lobby guest — adds their gallery tile + bumps the count; auto-removes after 30s. */
  admitParticipant: (p: AdmittedParticipant) => void;
  /** Toggle "spotlight for everyone" on a participant id. */
  toggleSpotlight: (id: string) => void;
  /** Toggle "pin for me" on a participant id. */
  togglePin: (id: string) => void;
  /** Remove a participant from the meeting (drops from gallery + list). */
  removeParticipant: (id: string) => void;
  /**
   * Stable ref tracking which notification icon types have been shown (deduplication guard).
   * Lives in context (not MeetingPage) so it survives unmount. Also used by NotificationsPanel
   * as its data source — the hub renders whichever icon types are present in this Set.
   * Cleared by resetNotificationCount() path (hub open) and endMeeting().
   */
  seenNotificationTypesRef: React.MutableRefObject<Set<string>>;
  /** The in-meeting chat thread, lifted to context so the meeting ChatPanel and the
   *  "Marketing Team Sync" DM page share one live thread. */
  chatMessages: ChatMessage[];
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

type ActiveMeetingContextType = ActiveMeetingState & ActiveMeetingActions;

const ActiveMeetingContext = createContext<ActiveMeetingContextType | null>(null);

export function useActiveMeeting() {
  const ctx = useContext(ActiveMeetingContext);
  if (!ctx) throw new Error("useActiveMeeting must be used within ActiveMeetingProvider");
  return ctx;
}

export function ActiveMeetingProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ActiveMeetingState>({
    isActive: false,
    isBackgrounded: false,
    meetingTitle: "",
    participantCount: 0,
    isMicOn: true,
    isVideoOn: true,
    voiceNoiseMode: "noise-suppression",
    isContentSharing: false,
    startTime: null,
    elapsed: 0,
    agendaTopicIndex: 0,
    agendaPaused: false,
    agendaTimerEpoch: Date.now(),
    agendaPausedRemaining: null,
    agendaItems: INITIAL_AGENDA_ITEMS,
    isRecording: false,
    areCaptionsOn: false,
    isRttOn: false,
    rttCaptionsOn: false,
    rttEntries: [],
    notificationCount: 0,
    lobbyCount: 0,
    raisedHands: [...SEEDED_RAISED_IDS],
    admittedParticipants: [],
    spotlightedIds: [],
    pinnedIds: [],
    removedIds: [],
  });

  // Timers for auto-removing admitted lobby guests after 30s.
  const admitTimers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const seenNotificationTypesRef = useRef<Set<string>>(new Set());
  // In-meeting chat thread — shared with the "Marketing Team Sync" DM page.
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(MEETING_CHAT_SEED);

  // Tick the elapsed timer every second while meeting is active
  useEffect(() => {
    if (state.isActive && state.startTime) {
      timerRef.current = setInterval(() => {
        setState(prev => ({
          ...prev,
          elapsed: Math.floor((Date.now() - (prev.startTime ?? Date.now())) / 1000),
        }));
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [state.isActive, state.startTime]);

  const startMeeting = useCallback((title: string, participantCount: number) => {
    setState(prev => ({
      ...prev,
      isActive: true,
      isBackgrounded: false,
      meetingTitle: title,
      participantCount,
      startTime: prev.startTime ?? Date.now(),
      // Preserve mic/video state set by PreJoinPage (don't reset to true)
      isMicOn: prev.isMicOn,
      isVideoOn: prev.isVideoOn,
      voiceNoiseMode: prev.voiceNoiseMode,
      isContentSharing: prev.isContentSharing,
      elapsed: 0,
      agendaTopicIndex: 0,
      agendaPaused: false,
      agendaTimerEpoch: Date.now(),
      agendaPausedRemaining: null,
      agendaItems: INITIAL_AGENDA_ITEMS,
      raisedHands: [...SEEDED_RAISED_IDS],
      spotlightedIds: [],
      pinnedIds: [],
      removedIds: [],
    }));
  }, []);

  const backgroundMeeting = useCallback(() => {
    setState(prev => ({ ...prev, isBackgrounded: true }));
  }, []);

  const returnToMeeting = useCallback(() => {
    setState(prev => ({ ...prev, isBackgrounded: false }));
  }, []);

  const endMeeting = useCallback(() => {
    setState({
      isActive: false,
      isBackgrounded: false,
      meetingTitle: "",
      participantCount: 0,
      isMicOn: true,
      isVideoOn: true,
      voiceNoiseMode: "noise-suppression",
      isContentSharing: false,
      startTime: null,
      elapsed: 0,
      agendaTopicIndex: 0,
      agendaPaused: false,
      agendaTimerEpoch: Date.now(),
      agendaPausedRemaining: null,
      agendaItems: INITIAL_AGENDA_ITEMS,
      isRecording: false,
      areCaptionsOn: false,
      isRttOn: false,
      rttCaptionsOn: false,
      rttEntries: [],
      notificationCount: 0,
      lobbyCount: 0,
      raisedHands: [],
      admittedParticipants: [],
      spotlightedIds: [],
      pinnedIds: [],
      removedIds: [],
    });
    admitTimers.current.forEach((t) => clearTimeout(t));
    admitTimers.current.clear();
    seenNotificationTypesRef.current.clear();
  }, []);

  const setMicOn = useCallback((on: boolean) => {
    setState(prev => ({ ...prev, isMicOn: on }));
  }, []);

  const setVideoOn = useCallback((on: boolean) => {
    setState(prev => ({ ...prev, isVideoOn: on }));
  }, []);

  const setVoiceNoiseMode = useCallback((mode: "off" | "noise-suppression" | "voice-isolation") => {
    setState(prev => ({ ...prev, voiceNoiseMode: mode }));
  }, []);

  const setParticipantCount = useCallback((count: number) => {
    setState(prev => ({ ...prev, participantCount: count }));
  }, []);

  const setContentSharing = useCallback((sharing: boolean) => {
    setState(prev => ({ ...prev, isContentSharing: sharing }));
  }, []);

  const updateAgendaState = useCallback((updates: Partial<Pick<ActiveMeetingState, 'agendaTopicIndex' | 'agendaPaused' | 'agendaTimerEpoch' | 'agendaPausedRemaining'>>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const setAgendaItems = useCallback((items: AgendaItem[]) => {
    setState(prev => ({ ...prev, agendaItems: items }));
  }, []);

  const setIsRecording = useCallback((on: boolean) => {
    setState(prev => ({ ...prev, isRecording: on }));
  }, []);

  const toggleCaptions = useCallback(() => {
    setState(prev => ({ ...prev, areCaptionsOn: !prev.areCaptionsOn }));
  }, []);

  const startRtt = useCallback(() => {
    setState(prev => (prev.isRttOn ? prev : { ...prev, isRttOn: true, rttCaptionsOn: true }));
  }, []);

  const toggleRttCaptions = useCallback(() => {
    setState(prev => ({ ...prev, rttCaptionsOn: !prev.rttCaptionsOn }));
  }, []);

  const pushRttEntry = useCallback((entry: RttEntryInput) => {
    const id = nextRttId();
    setState(prev => ({ ...prev, rttEntries: [...prev.rttEntries, { ...entry, id, ts: Date.now() }] }));
    return id;
  }, []);

  const updateRttEntry = useCallback((id: number, patch: Partial<RttEntry>) => {
    setState(prev => ({
      ...prev,
      rttEntries: prev.rttEntries.map(e => (e.id === id ? { ...e, ...patch } : e)),
    }));
  }, []);

  const incrementNotificationCount = useCallback(() => {
    setState(prev => ({ ...prev, notificationCount: prev.notificationCount + 1 }));
  }, []);

  const decrementNotificationCount = useCallback(() => {
    setState(prev => ({ ...prev, notificationCount: Math.max(0, prev.notificationCount - 1) }));
  }, []);

  const setLobbyCount = useCallback((count: number) => {
    setState(prev => ({ ...prev, lobbyCount: count }));
  }, []);

  const resetNotificationCount = useCallback(() => {
    setState(prev => ({ ...prev, notificationCount: 0 }));
  }, []);

  const raiseHand = useCallback((id: string) => {
    setState(prev => (prev.raisedHands.includes(id) ? prev : { ...prev, raisedHands: [...prev.raisedHands, id] }));
  }, []);

  const lowerHand = useCallback((id: string) => {
    setState(prev => ({ ...prev, raisedHands: prev.raisedHands.filter(x => x !== id) }));
  }, []);

  const toggleHand = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      raisedHands: prev.raisedHands.includes(id)
        ? prev.raisedHands.filter(x => x !== id)
        : [...prev.raisedHands, id],
    }));
  }, []);

  const toggleSpotlight = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      spotlightedIds: prev.spotlightedIds.includes(id)
        ? prev.spotlightedIds.filter(x => x !== id)
        : [...prev.spotlightedIds, id],
    }));
  }, []);

  const togglePin = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      pinnedIds: prev.pinnedIds.includes(id)
        ? prev.pinnedIds.filter(x => x !== id)
        : [...prev.pinnedIds, id],
    }));
  }, []);

  const removeParticipant = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      removedIds: prev.removedIds.includes(id) ? prev.removedIds : [...prev.removedIds, id],
      // Drop any pin/spotlight/raised-hand on the removed person too.
      spotlightedIds: prev.spotlightedIds.filter(x => x !== id),
      pinnedIds: prev.pinnedIds.filter(x => x !== id),
      raisedHands: prev.raisedHands.filter(x => x !== id),
    }));
  }, []);

  const admitParticipant = useCallback((p: AdmittedParticipant) => {
    // Add their tile (no-op if already in); the count derives from this list.
    setState(prev =>
      prev.admittedParticipants.some(a => a.id === p.id)
        ? prev
        : { ...prev, admittedParticipants: [...prev.admittedParticipants, p] }
    );
    // Auto-remove — benign after 30s, suspected threats after 60s — they drop back to the lobby.
    const delay = p.suspected ? 60000 : 30000;
    const existing = admitTimers.current.get(p.id);
    if (existing) clearTimeout(existing);
    const t = setTimeout(() => {
      setState(prev => ({ ...prev, admittedParticipants: prev.admittedParticipants.filter(a => a.id !== p.id) }));
      admitTimers.current.delete(p.id);
    }, delay);
    admitTimers.current.set(p.id, t);
  }, []);

  return (
    <ActiveMeetingContext.Provider
      value={{
        ...state,
        startMeeting,
        backgroundMeeting,
        returnToMeeting,
        endMeeting,
        setMicOn,
        setVideoOn,
        setVoiceNoiseMode,
        setParticipantCount,
        setContentSharing,
        updateAgendaState,
        setAgendaItems,
        setIsRecording,
        toggleCaptions,
        startRtt,
        toggleRttCaptions,
        pushRttEntry,
        updateRttEntry,
        incrementNotificationCount,
        decrementNotificationCount,
        setLobbyCount,
        resetNotificationCount,
        raiseHand,
        lowerHand,
        toggleHand,
        admitParticipant,
        toggleSpotlight,
        togglePin,
        removeParticipant,
        seenNotificationTypesRef,
        chatMessages,
        setChatMessages,
      }}
    >
      {children}
    </ActiveMeetingContext.Provider>
  );
}