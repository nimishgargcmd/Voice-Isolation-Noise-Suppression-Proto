import { GALLERY_ROSTER } from "@/app/lib/meetingRoster";
import type { TileDisplay, TileState } from "@/app/components/MeetingTile";
import type { AdmittedParticipant } from "@/app/components/ActiveMeetingContext";

/** A resolved stage participant with its live pin/spotlight/raised-hand markers. */
export interface StagePerson {
  id: string;
  name: string;
  img?: string;
  display: TileDisplay;
  state: TileState;
  raisedHand: boolean;
  suspected: boolean;
  pinned: boolean;
  spotlighted: boolean;
}

export interface StagePeopleState {
  raisedHands: string[];
  admittedParticipants: AdmittedParticipant[];
  spotlightedIds: string[];
  pinnedIds: string[];
  removedIds: string[];
}

/**
 * Build the checkpoint stage roster (gallery people + admitted lobby guests,
 * minus removed), sorted by priority DESCENDING: spotlighted > pinned > video-on
 * > rest (stable within tier). Shared by the gallery grid, the ParticipantTray,
 * and the fullscreen participant gallery so ordering is always identical.
 */
export function buildOrderedStagePeople({
  raisedHands,
  admittedParticipants,
  spotlightedIds,
  pinnedIds,
  removedIds,
}: StagePeopleState): StagePerson[] {
  const people: StagePerson[] = [
    ...GALLERY_ROSTER.map((p) => ({
      id: p.id,
      name: p.name,
      img: p.avatar,
      display: p.display as TileDisplay,
      state: (p.activeSpeaker ? "active-speaker" : "muted") as TileState,
      raisedHand: raisedHands.includes(p.id),
      suspected: false,
    })),
    ...admittedParticipants.map((a) => ({
      id: a.id,
      name: a.name,
      img: a.avatar,
      display: a.display as TileDisplay,
      state: "muted" as TileState,
      raisedHand: false,
      suspected: a.suspected,
    })),
  ]
    .filter((p) => !removedIds.includes(p.id))
    .map((p) => ({ ...p, pinned: pinnedIds.includes(p.id), spotlighted: spotlightedIds.includes(p.id) }));

  const rank = (p: StagePerson) => (p.spotlighted ? 3 : p.pinned ? 2 : p.display === "video" ? 1 : 0);
  return [...people].sort((a, b) => rank(b) - rank(a));
}
