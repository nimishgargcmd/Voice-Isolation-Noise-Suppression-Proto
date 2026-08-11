import type { ReactNode } from "react";
import { MicOnIcon } from "@/app/components/MicOnIcon";
import { MicOffIcon } from "@/app/components/MicOffIcon";
import raisedHandEmoji from "@/assets/figma/tile-icons/raised-hand.png";

/**
 * Meeting participant tile + name tag — FY27 redesign of the Teams gallery tile.
 * Recreated from Figma POR "participant tile" (zTUDsyC2gVxRBk3qgyqCiE, 1030:11872),
 * **Gallery Squares** size only.
 *
 * Variant model (mirrors the Figma component):
 *   Display: video | photo | initials | shared
 *   State:   muted | active-speaker | raised-hand
 *
 * Colour: the tile surfaces/borders are themed `--fy27-*` tokens. The name tag is a
 * frosted chip that OVERLAYS media, so it uses fixed `--fy27-nametag-*` tokens
 * (light chip + dark text in both themes) for guaranteed contrast over video.
 *
 * `NameTag` is exported standalone and is independently configurable — a leading
 * raised-hand emoji plus **up to two** trailing icons (Figma 1221:55701). Avatars
 * + names come from the people library (caller passes the image + name).
 */

const ICON = "var(--fy27-nametag-fg)";

// ── Name-tag glyphs (16px, fixed nametag-fg) ─────────────────────────────────

export function TileMicOff() {
  return <MicOffIcon size={16} color={ICON} />;
}
export function TileMicOn() {
  return <MicOnIcon size={16} color={ICON} />;
}

/** Fluent "Warning" triangle in icon.danger — scam/suspected-threat marker. */
export function TileWarning() {
  return (
    <svg width={16} height={15} viewBox="0 0 14 13" fill="var(--fy27-icon-danger)" style={{ display: "block" }} aria-hidden="true">
      <path d="M4.82 1.275c.956-1.7 3.404-1.7 4.36 0l4.496 8.004c.936 1.667-.269 3.725-2.18 3.725H2.503C.592 13.004-.612 10.946.324 9.28L4.82 1.275ZM7 8.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7 4a.5.5 0 0 0-.5.5V7a.5.5 0 1 0 1 0V4.5A.5.5 0 0 0 7 4Z" />
    </svg>
  );
}

/** Fluent "Pin" (filled) — pinned-for-me marker, currentColor (nametag-fg). */
export function TilePin() {
  return (
    <svg width={16} height={16} viewBox="0 0 18.8741 18.8741" fill="currentColor" style={{ color: ICON, display: "block" }} aria-hidden="true">
      <path d="M13.2425 0.80591L18.0682 5.63167C19.3955 6.95893 19.0324 9.19645 17.3535 10.0359L12.4826 12.4713C12.3073 12.559 12.1732 12.7119 12.1092 12.8973L10.6699 17.0635C10.3684 17.9362 9.2574 18.1921 8.60453 17.5393L5.50002 14.4348L1.06074 18.8741H0L8.27878e-05 17.8135L4.43936 13.3741L1.33487 10.2696C0.682002 9.61675 0.937914 8.50572 1.81061 8.20425L5.97688 6.76499C6.16223 6.70096 6.31512 6.56689 6.40281 6.3915L8.83823 1.52062C9.67766 -0.158253 11.9152 -0.521356 13.2425 0.80591Z" />
    </svg>
  );
}

/** Fluent "Video Person Star" (spotlight) — POR 1219:47732, currentColor. */
export function Spotlight() {
  return (
    <svg width={16} height={14} viewBox="0 0 17 15" fill="currentColor" style={{ color: ICON, display: "block" }}>
      <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H14.5C15.3284 0 16 0.671573 16 1.5V6.25716C15.6929 6.00353 15.3578 5.78261 15 5.59971V1.5C15 1.22386 14.7761 1 14.5 1H1.5C1.22386 1 1 1.22386 1 1.5V10.5C1 10.7761 1.22386 11 1.5 11H4V9.5C4 8.67157 4.67157 8 5.5 8H7.59971C7.43777 8.31679 7.30564 8.65136 7.20703 9H5.5C5.22386 9 5 9.22386 5 9.5V11H7.02242C7.05337 11.3434 7.11588 11.6777 7.20703 12H1.5C0.671573 12 0 11.3284 0 10.5V1.5ZM10.5 4.5C10.5 4.8372 10.4332 5.15881 10.3122 5.45233C9.51559 5.79808 8.81683 6.3269 8.26902 6.98569C8.18064 6.99515 8.09089 7 8 7C6.61929 7 5.5 5.88071 5.5 4.5C5.5 3.11929 6.61929 2 8 2C9.38071 2 10.5 3.11929 10.5 4.5ZM8 6C8.82843 6 9.5 5.32843 9.5 4.5C9.5 3.67157 8.82843 3 8 3C7.17157 3 6.5 3.67157 6.5 4.5C6.5 5.32843 7.17157 6 8 6ZM17 10.5C17 12.9853 14.9853 15 12.5 15C10.0147 15 8 12.9853 8 10.5C8 8.01472 10.0147 6 12.5 6C14.9853 6 17 8.01472 17 10.5ZM12.976 7.86053C12.8262 7.37982 12.1738 7.37982 12.024 7.86053L11.5465 9.39228H10.0015C9.51662 9.39228 9.31501 10.0391 9.70728 10.3362L10.9572 11.2829L10.4798 12.8146C10.33 13.2953 10.8578 13.6951 11.25 13.398L12.5 12.4513L13.75 13.398C14.1422 13.6951 14.67 13.2953 14.5202 12.8146L14.0428 11.2829L15.2927 10.3362C15.685 10.0391 15.4834 9.39228 14.9985 9.39228H13.4535L12.976 7.86053Z" />
    </svg>
  );
}

// ── Name tag ─────────────────────────────────────────────────────────────────

export interface NameTagProps {
  /** Label shown in the chip (e.g. "Kat L"). */
  name: string;
  /** Leading raised-hand emoji. */
  raisedHand?: boolean;
  /** Up to two trailing icons (e.g. [<TileMicOff/>, <Spotlight/>]). */
  trailing?: ReactNode[];
  /** Adds 1px right padding after the name (used by the minimized meeting dock). */
  nameEndPad?: boolean;
  /** Compact (Caption-2 11px) variant — the checkpoint 100×100 participant-tray
   *  tiles (Figma 1021:37797 name tag). */
  compact?: boolean;
}

/** The blurred name chip that sits at the bottom-left of a tile. Reusable. */
export function NameTag({ name, raisedHand = false, trailing = [], nameEndPad = false, compact = false }: NameTagProps) {
  const icons = trailing.slice(0, 2);
  return (
    <div
      className={`flex items-center rounded-[3px] max-w-full bg-fy27-nametag-bg backdrop-blur-[45px] ${
        compact ? "p-[4px]" : "h-[28px] px-[4px]"
      } ${raisedHand ? "gap-[4px]" : "gap-[6px]"}`}
      style={{ fontFamily: "var(--font-sf-pro)" }}
    >
      {raisedHand && (
        <img src={raisedHandEmoji} alt="" className={`shrink-0 object-contain select-none ${compact ? "size-[14px]" : "size-[18px]"}`} />
      )}
      <span className={`min-w-0 truncate text-fy27-nametag-fg tracking-[0] ${compact ? "text-[11px] leading-[11px]" : "text-[12px] leading-[16px]"} ${nameEndPad ? "pr-[1px]" : ""} ${raisedHand ? "" : "pl-[1px]"}`}>
        {name}
      </span>
      {icons.length > 0 && (
        <div className="flex items-center gap-[4px]">
          {icons.map((ic, i) => (
            <span key={i} className={`shrink-0 grid place-items-center ${compact ? "size-[16px]" : "size-[20px]"}`}>
              {ic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Initials fallback ────────────────────────────────────────────────────────

/** Deterministic Fluent-style tint pairs for the initials avatar. */
const INITIALS_TINTS = [
  { bg: "#E9D0D6", fg: "#5C1F2B" },
  { bg: "#CDE0D6", fg: "#0F5132" },
  { bg: "#D3DDF2", fg: "#1F3A6E" },
  { bg: "#F2E2CE", fg: "#6E4B1F" },
  { bg: "#E0D6F2", fg: "#3B1F6E" },
  { bg: "#D6EEF2", fg: "#1F5C6E" },
];

function hashName(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/** First + last word initials, e.g. "Adrian Alvestad" → "AA". */
export function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0][0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] ?? "" : "";
  return (first + last).toUpperCase();
}

/** Short nametag label, e.g. "Kat Larsson" → "Kat L". */
export function shortName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length <= 1) return name;
  return `${parts[0]} ${parts[parts.length - 1][0].toUpperCase()}`;
}

function Initials({ name }: { name: string }) {
  const tint = INITIALS_TINTS[hashName(name) % INITIALS_TINTS.length];
  return (
    <div
      className="grid place-items-center size-full rounded-full"
      style={{ backgroundColor: tint.bg, color: tint.fg, fontFamily: "var(--font-sf-pro)" }}
    >
      <span className="text-[28px] font-semibold leading-none tracking-[-0.5px]">{initialsOf(name)}</span>
    </div>
  );
}

// ── Tile ─────────────────────────────────────────────────────────────────────

export type TileDisplay = "video" | "photo" | "initials" | "shared";
export type TileState = "muted" | "active-speaker";

export interface MeetingTileProps {
  /** Full name (drives initials + the default short nametag label). */
  name: string;
  /** Explicit nametag label; defaults to `shortName(name)`. */
  nameTag?: string;
  display: TileDisplay;
  state?: TileState;
  /** Hand raised — gold border (wins over active-speaker) + nametag emoji. */
  raisedHand?: boolean;
  /** Video still or photo avatar — pass an imported library image. */
  imageSrc?: string;
  /** Shared-content image for `display="shared"`. */
  sharedSrc?: string;
  /** Scam/suspected-threat — adds the red danger warning icon next to the mic. */
  suspected?: boolean;
  /** Pinned for me — shows the pin icon next to the mic. */
  pinned?: boolean;
  /** Spotlighted for everyone — shows the spotlight icon next to the mic. */
  spotlighted?: boolean;
  /** Hide the nametag mic glyph (e.g. the minimized meeting dock, matching FV's text-only pills). */
  hideMic?: boolean;
  /** Adds 1px right padding after the name in the nametag (used by the meeting dock). */
  nameEndPad?: boolean;
  /** Compact (Caption-2) nametag — the checkpoint 100×100 participant-tray tiles. */
  compact?: boolean;
  /** Hide the name tag entirely (e.g. the PiP active-speaker window). */
  hideNameTag?: boolean;
  /** Hide the tile border entirely (e.g. the PiP window with its own rounded frame). */
  hideBorder?: boolean;
  className?: string;
}

const RAISED_BORDER = "border-[3px] border-fy27-raised-hands";
const STATE_BORDER: Record<TileState, string> = {
  muted: "border border-fy27-tile-border",
  "active-speaker": "border-[3px] border-fy27-brand",
};

/** A centered circle (photo or initials), with a brand speaker-halo ring when active. */
function CircleSubject({
  name,
  display,
  imageSrc,
  active,
}: {
  name: string;
  display: "photo" | "initials";
  imageSrc?: string;
  active: boolean;
}) {
  return (
    <div className="rounded-full p-[3px]" style={{ background: active ? "var(--fy27-brand)" : "transparent" }}>
      <div className="relative w-[54%] min-w-[72px] max-w-[104px] aspect-square rounded-full overflow-hidden">
        {display === "photo" && imageSrc ? (
          <img src={imageSrc} alt="" className="absolute inset-0 size-full object-cover" />
        ) : (
          <Initials name={name} />
        )}
      </div>
    </div>
  );
}

export function MeetingTile({
  name,
  nameTag,
  display,
  state = "muted",
  raisedHand = false,
  imageSrc,
  sharedSrc,
  suspected = false,
  pinned = false,
  spotlighted = false,
  hideMic = false,
  nameEndPad = false,
  compact = false,
  hideNameTag = false,
  hideBorder = false,
  className = "",
}: MeetingTileProps) {
  const isShared = display === "shared";
  const label = nameTag ?? shortName(name);
  const mic = state === "active-speaker" ? <TileMicOn key="m" /> : <TileMicOff key="m" />;
  // Up to two trailing icons: the mic, plus one status marker by priority —
  // spotlight > pin > suspected-warning. The spotlight glyph means ONLY
  // "spotlighted for everyone" (active speakers are shown by the brand border +
  // green mic), so a tile showing the spotlight icon is always sorted to the top.
  const marker: ReactNode | null = spotlighted
    ? <Spotlight key="s" />
    : pinned
      ? <TilePin key="p" />
      : suspected
        ? <TileWarning key="w" />
        : null;
  // `hideMic` drops the mic glyph (dock tiles use FV-style text-only pills); any
  // status marker still shows.
  const trailing: ReactNode[] = isShared
    ? []
    : hideMic
      ? (marker ? [marker] : [])
      : marker
        ? [mic, marker]
        : [mic];

  return (
    <div className={`relative h-full w-full overflow-hidden rounded-[4px] ${hideBorder ? "" : raisedHand ? RAISED_BORDER : STATE_BORDER[state]} ${className}`}>
      {/* Image fills the tile edge-to-edge (clipped by the rounded corners) */}
      {display === "video" && imageSrc && (
        <img src={imageSrc} alt="" className="absolute inset-0 size-full object-cover" />
      )}
      {isShared && sharedSrc && (
        <img src={sharedSrc} alt="" className="absolute inset-0 size-full object-cover" />
      )}
      {/* Avatar circle centered on a surface (video-off photo / initials) */}
      {(display === "photo" || display === "initials") && (
        <div className="absolute inset-0 flex items-center justify-center bg-fy27-tile-surface">
          <CircleSubject name={name} display={display} imageSrc={imageSrc} active={state === "active-speaker"} />
        </div>
      )}

      {/* Name tag — bottom-left, inset 6px (4px compact) */}
      {!hideNameTag && (
        <div className={`absolute bottom-0 left-0 max-w-full ${compact ? "p-[4px]" : "p-[6px]"}`}>
          <NameTag name={label} raisedHand={raisedHand} trailing={trailing} nameEndPad={nameEndPad} compact={compact} />
        </div>
      )}
    </div>
  );
}
