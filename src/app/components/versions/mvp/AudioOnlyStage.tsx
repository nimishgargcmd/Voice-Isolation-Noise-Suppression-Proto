import React from "react";
import { GALLERY_ROSTER } from "@/app/lib/meetingRoster";
import { MeetingTile } from "@/app/components/MeetingTile";

/**
 * FY27 MVP audio-only stage (Figma "Audio only" 979:31151). Two layouts:
 *  - Full meeting: a focal/spotlight — the active speaker as a glowing centred
 *    avatar (brand ring + radial brand bloom), their name, an overlapping avatar
 *    stack of the others, and a "+N others" caption (N from the meeting count).
 *  - Multitasking (split): just the active-speaker tile with video OFF (avatar on
 *    surface); tapping it collapses the panel, same as the gallery stage.
 * Theme-aware via fy27-* tokens. Replaces the gallery when audio-only is on.
 */

interface AudioOnlyStageProps {
  /** Multitasking split — render only the active-speaker tile. */
  isSplit?: boolean;
  /** Tap the split tile to collapse the panel. */
  onCollapseSplit?: () => void;
  /** Total participant count (from the meeting), drives the "+N others" caption. */
  totalCount?: number;
}

function getInitials(name: string) {
  return name.split(" ").map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}

function Avatar({ name, src, px }: { name: string; src?: string; px: number }) {
  if (src) return <img src={src} alt="" className="size-full object-cover" />;
  return (
    <div className="size-full grid place-items-center bg-fy27-brand text-fy27-text-on-accent" style={{ fontSize: Math.round(px * 0.4) }}>
      <span className="font-semibold" style={{ fontFamily: "var(--font-sf-pro)" }}>{getInitials(name)}</span>
    </div>
  );
}

export function AudioOnlyStage({ isSplit = false, onCollapseSplit, totalCount }: AudioOnlyStageProps) {
  const active =
    GALLERY_ROSTER.find((p) => p.activeSpeaker && !p.isSelf) ??
    GALLERY_ROSTER.find((p) => !p.isSelf) ??
    GALLERY_ROSTER[0];

  // Split / multitasking: a single active-speaker tile with video off (avatar on
  // surface). Tapping collapses the panel — same affordance as the gallery stage.
  if (isSplit) {
    return (
      <div className="bg-fy27-surface flex flex-col relative h-full pb-1">
        <button onClick={onCollapseSplit} className="w-full h-full p-[2px]">
          <MeetingTile
            name={active.name}
            display={active.avatar ? "photo" : "initials"}
            state="active-speaker"
            imageSrc={active.avatar}
          />
        </button>
      </div>
    );
  }

  const others = GALLERY_ROSTER.filter((p) => p.id !== active.id && !p.isSelf);
  const stack = others.slice(0, 3);
  // "+N others" — total meeting participants minus the active speaker and the stack shown.
  const total = totalCount ?? GALLERY_ROSTER.length;
  const overflow = Math.max(0, total - 1 - stack.length);

  return (
    <div className="bg-fy27-surface h-full w-full flex flex-col items-center justify-center gap-[20px] px-[16px] overflow-hidden">
      {/* Active speaker — radial brand bloom (centred on the avatar) + 3px brand ring. */}
      <div className="relative flex items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: 210,
            height: 210,
            background:
              "radial-gradient(circle, var(--fy27-brand-primary) 0%, var(--fy27-brand-accent-secondary) 26%, var(--fy27-accent-tertiary) 44%, transparent 58%)",
            filter: "blur(10px)",
          }}
        />
        <div className="relative rounded-full p-[2px] border-[3px] border-fy27-brand">
          <div className="size-[104px] rounded-full overflow-hidden">
            <Avatar name={active.name} src={active.avatar} px={104} />
          </div>
        </div>
      </div>

      {/* Active speaker name — Body 1. Sits below the bloom (relative keeps it on top). */}
      <p
        className="relative text-[17px] leading-[22px] tracking-[-0.41px] text-fy27-text-primary text-center"
        style={{ fontFamily: "var(--font-sf-pro)" }}
      >
        {active.name}
      </p>

      {/* Overlapping avatar stack of the other participants. */}
      {stack.length > 0 && (
        <div className="flex items-center">
          {stack.map((p, i) => (
            <div
              key={p.id}
              className={`size-[52px] rounded-full overflow-hidden border-2 border-fy27-surface ${i > 0 ? "-ml-[10px]" : ""}`}
            >
              <Avatar name={p.name} src={p.avatar} px={52} />
            </div>
          ))}
        </div>
      )}

      {/* Overflow caption — Caption 1. */}
      {overflow > 0 && (
        <p
          className="text-[12px] leading-[16px] text-fy27-text-primary text-center"
          style={{ fontFamily: "var(--font-sf-pro)" }}
        >
          +{overflow} others
        </p>
      )}
    </div>
  );
}
