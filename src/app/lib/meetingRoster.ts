// Canonical FY27 MVP meeting roster — the SINGLE source of truth shared by the
// gallery tiles and the raised-hands / participants panels, so a raised tile and
// its panel row are always the same person with the same name + avatar.
//
// `id`s are stable. Ids that overlap with the Final-Vision `meetingVerifiedUsers`
// roster (`udayan`, `aadi`, `babak`) intentionally match, so the shared
// raised-hands set (held in ActiveMeetingContext as ordered ids) resolves in both
// worlds. The self entry is `udayan` ("You").

import aadi from "@/assets/figma/people/aadi-kapoor.png";
import aaron from "@/assets/figma/people/aaron-buxton.png";
import allan from "@/assets/figma/people/allan-munger.png";
import amanda from "@/assets/figma/people/amanda-brady.png";
import bruno from "@/assets/figma/people/bruno-zhao.png";
import bryan from "@/assets/figma/people/bryan-wright.png";
import cameron from "@/assets/figma/people/cameron-evans.png";
import carlos from "@/assets/figma/people/carlos-slattery.png";
import andre from "@/assets/figma/people/andre-lawson.png";
import ashley from "@/assets/figma/people/ashley-mccarthy.png";
import udayan from "@/assets/figma/account/udayan.jpg";

export type RosterDisplay = "video" | "photo" | "initials";
export type PresenceStatus = "busy" | "away" | "dnd" | "available";

export interface RosterParticipant {
  id: string;
  name: string;
  /** Tile nametag label; defaults to the short form of `name`. */
  shortName?: string;
  /** Avatar image; absent → initials fallback (both tile + panel). */
  avatar?: string;
  /** How the MVP gallery tile renders. */
  display: RosterDisplay;
  presence?: PresenceStatus;
  role?: string;
  /** Static demo flag for who is speaking. */
  activeSpeaker?: boolean;
  isMicMuted?: boolean;
  isSelf?: boolean;
}

/** The local user's roster id (matches the Final-Vision `udayan` id). */
export const SELF_ID = "udayan";

/** Ids seeded as already-raised on meeting entry (demo). Both are gallery people. */
export const SEEDED_RAISED_IDS: string[] = ["aaron", "carole"];

export const MEETING_ROSTER: RosterParticipant[] = [
  { id: "udayan", name: "Udayan Vidyanta", avatar: udayan, display: "video", presence: "available", isSelf: true, isMicMuted: false },
  // 7 — video on
  { id: "aadi", name: "Aadi Kapoor", avatar: aadi, display: "video", presence: "busy", role: "Organiser", activeSpeaker: true },
  { id: "aaron", name: "Aaron Buxton", avatar: aaron, display: "video", presence: "available" },
  { id: "allan", name: "Allan Munger", avatar: allan, display: "video", presence: "available", isMicMuted: true },
  { id: "amanda", name: "Amanda Brady", avatar: amanda, display: "video", presence: "away", isMicMuted: true },
  { id: "bruno", name: "Bruno Zhao", avatar: bruno, display: "video", presence: "available", activeSpeaker: true },
  { id: "bryan", name: "Bryan Wright", avatar: bryan, display: "video", presence: "away", isMicMuted: true },
  { id: "cameron", name: "Cameron Evans", avatar: cameron, display: "video", presence: "available", isMicMuted: true },
  // 3 — video off + photo
  { id: "carlos", name: "Carlos Slattery", avatar: carlos, display: "photo", presence: "dnd", isMicMuted: true },
  { id: "andre", name: "Andre Lawson", avatar: andre, display: "photo", presence: "available", isMicMuted: true },
  { id: "ashley", name: "Ashley McCarthy", avatar: ashley, display: "photo", presence: "away", isMicMuted: true },
  // 4 — video off + initials
  { id: "babak", name: "Babak Shammas", display: "initials", presence: "available", isMicMuted: true },
  { id: "beth", name: "Beth Davies", display: "initials", presence: "away", isMicMuted: true },
  { id: "carole", name: "Carole Poland", display: "initials", presence: "away" },
  { id: "celeste", name: "Celeste Burton", display: "initials", presence: "available", isMicMuted: true },
];

export const rosterById = (id: string): RosterParticipant | undefined =>
  MEETING_ROSTER.find((p) => p.id === id);

/** The gallery tiles = everyone except the self (the self is the floating tile). */
export const GALLERY_ROSTER: RosterParticipant[] = MEETING_ROSTER.filter((p) => !p.isSelf);

/** Roster size used for the "N in call" count (self is added by the consumer). */
export const GALLERY_PARTICIPANT_COUNT = GALLERY_ROSTER.length;
