import React, { useState } from "react";
import { BottomSheet } from "@/app/components/BottomSheet";
import { ReportParticipantSheet } from "@/app/components/ReportParticipantSheet";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import { SELF_ID, rosterById } from "@/app/lib/meetingRoster";

/** "unverified" = unverified bot · "suspected" = suspected scammer. */
export type PersonBadge = "unverified" | "suspected";

interface ParticipantOptionsSheetProps {
  open: boolean;
  onClose: () => void;
  /** Roster id of the participant — keys pin/spotlight/remove state. */
  id: string;
  /** Whose tile/row was long-pressed — shown in the header. */
  name: string;
  /** Icon shown next to the name — only for unverified bots / suspected scammers. */
  badge?: PersonBadge;
}

/* ── Fluent glyphs (Figma POR 1170:32649), currentColor → coloured by the row ── */
const GLYPHS = {
  mute: { vb: "0 0 20 20", d: "M1.28034 0.219675C0.987445 -0.0732209 0.512571 -0.0732257 0.219675 0.219665C-0.0732209 0.512555 -0.0732257 0.987429 0.219665 1.28032L6 7.06078V10C6 12.2091 7.79086 14 10 14C10.8335 14 11.6074 13.7451 12.2481 13.309L13.394 14.4549C12.5176 15.1112 11.4292 15.5 10.25 15.5H9.75L9.5336 15.4956C6.73445 15.3821 4.5 13.077 4.5 10.25V9.75L4.49315 9.64823C4.44349 9.28216 4.1297 9 3.75 9C3.33579 9 3 9.33579 3 9.75V10.25L3.00406 10.4863C3.12283 13.938 5.83323 16.7316 9.25002 16.9818L9.25 19.25L9.25685 19.3518C9.30651 19.7178 9.6203 20 10 20C10.4142 20 10.75 19.6642 10.75 19.25L10.751 16.9817C12.15 16.8791 13.4305 16.35 14.4631 15.5241L18.7194 19.7805C19.0123 20.0734 19.4872 20.0734 19.7801 19.7805C20.073 19.4876 20.073 19.0127 19.7801 18.7198L1.28034 0.219675ZM11.1562 12.2171C10.8105 12.3978 10.4172 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10V8.56081L11.1562 12.2171ZM12.5 4V9.3182L13.9301 10.7483C13.976 10.5059 14 10.2558 14 10V4C14 1.79086 12.2091 3.65144e-08 10 3.65144e-08C8.15213 3.65144e-08 6.59692 1.25302 6.13768 2.95575L7.5 4.3181V4C7.5 2.61929 8.61929 1.5 10 1.5C11.3807 1.5 12.5 2.61929 12.5 4ZM15.1962 12.0144L16.3421 13.1604C16.7638 12.2791 17 11.2921 17 10.25V9.75L16.9932 9.64823C16.9435 9.28216 16.6297 9 16.25 9C15.8358 9 15.5 9.33579 15.5 9.75V10.25L15.4956 10.4664C15.4737 11.0075 15.3698 11.5276 15.1962 12.0144Z" },
  pin: { vb: "0 0 18.8741 18.8741", d: "M13.2425 0.80591L18.0682 5.63167C19.3955 6.95893 19.0324 9.19645 17.3535 10.0359L12.4826 12.4713C12.3073 12.559 12.1732 12.7119 12.1092 12.8973L10.6699 17.0635C10.3684 17.9362 9.2574 18.1921 8.60453 17.5393L5.50002 14.4348L1.06074 18.8741H0L8.27878e-05 17.8135L4.43936 13.3741L1.33487 10.2696C0.682002 9.61675 0.937914 8.50572 1.81061 8.20425L5.97688 6.76499C6.16223 6.70096 6.31512 6.56689 6.40281 6.3915L8.83823 1.52062C9.67766 -0.158253 11.9152 -0.521356 13.2425 0.80591ZM17.0076 6.69233L12.1818 1.86657C11.5785 1.26327 10.5614 1.42831 10.1799 2.19144L7.74446 7.06232C7.48138 7.58848 7.02269 7.99069 6.46666 8.18277L2.67812 9.49154L9.38261 16.196L10.6914 12.4075C10.8835 11.8515 11.2857 11.3928 11.8118 11.1297L16.6827 8.69425C17.4458 8.31269 17.6109 7.29563 17.0076 6.69233Z" },
  spotlight: { vb: "0 0 21 19", d: "M17.7454 0C18.988 0 19.9954 1.00736 19.9954 2.25V8.80513C19.551 8.37951 19.0463 8.01636 18.4954 7.7298V2.25C18.4954 1.83579 18.1596 1.5 17.7454 1.5H2.25C1.83579 1.5 1.5 1.83579 1.5 2.25V13.7546C1.5 14.1688 1.83579 14.5046 2.25 14.5046L4.999 14.504L5 11.75C5 10.8318 5.70711 10.0788 6.60647 10.0058L6.75 10H10.0218C9.72526 10.4632 9.48584 10.9665 9.3135 11.5H6.75C6.63165 11.5 6.53251 11.5822 6.5066 11.6927L6.5 11.75L6.499 14.504H9.07707C9.15823 15.0275 9.30185 15.5303 9.50008 16.0046H2.25C1.00736 16.0046 0 14.9972 0 13.7546V2.25C0 1.00736 1.00736 0 2.25 0H17.7454ZM10 3.00046C11.6569 3.00046 13 4.34361 13 6.00046C13 7.65732 11.6569 9.00046 10 9.00046C8.34315 9.00046 7 7.65732 7 6.00046C7 4.34361 8.34315 3.00046 10 3.00046ZM10 4.50046C9.17157 4.50046 8.5 5.17203 8.5 6.00046C8.5 6.82889 9.17157 7.50046 10 7.50046C10.8284 7.50046 11.5 6.82889 11.5 6.00046C11.5 5.17203 10.8284 4.50046 10 4.50046ZM21 13.5C21 16.5376 18.5376 19 15.5 19C12.4624 19 10 16.5376 10 13.5C10 10.4624 12.4624 8 15.5 8C18.5376 8 21 10.4624 21 13.5ZM16.0554 10.4206C15.8806 9.85979 15.1194 9.85979 14.9446 10.4206L14.3876 12.2077H12.5851C12.0194 12.2077 11.7842 12.9623 12.2418 13.3089L13.7001 14.4134L13.1431 16.2004C12.9683 16.7612 13.584 17.2276 14.0417 16.881L15.5 15.7766L16.9583 16.881C17.416 17.2276 18.0317 16.7612 17.8569 16.2004L17.2999 14.4134L18.7582 13.3089C19.2158 12.9623 18.9806 12.2077 18.4149 12.2077H16.6124L16.0554 10.4206Z" },
  profile: { vb: "0 0 20 16.0046", d: "M17.75 0C18.9926 0 20 1.00736 20 2.25V13.7546C20 14.9972 18.9926 16.0046 17.75 16.0046H2.25C1.00736 16.0046 0 14.9972 0 13.7546V2.25C0 1.00736 1.00736 0 2.25 0H17.75ZM17.75 1.5H2.25C1.83579 1.5 1.5 1.83579 1.5 2.25V13.7546C1.5 14.1688 1.83579 14.5046 2.25 14.5046H17.75C18.1642 14.5046 18.5 14.1688 18.5 13.7546V2.25C18.5 1.83579 18.1642 1.5 17.75 1.5ZM7.75 8.5C8.16421 8.5 8.5 8.83579 8.5 9.25V9.74273L8.4921 9.85128C8.32932 10.9642 7.39767 11.5009 5.99995 11.5009C4.60213 11.5009 3.67048 10.9637 3.50787 9.85013L3.5 9.74176V9.25C3.5 8.83579 3.83579 8.5 4.25 8.5H7.75ZM11.2523 8.99614H15.75C16.1642 8.99614 16.5 9.33193 16.5 9.74614C16.5 10.1258 16.2178 10.4396 15.8518 10.4893L15.75 10.4961H11.2523C10.8381 10.4961 10.5023 10.1604 10.5023 9.74614C10.5023 9.36644 10.7844 9.05265 11.1505 9.00299L11.2523 8.99614H15.75H11.2523ZM6 4.50218C6.82841 4.50218 7.49997 5.17374 7.49997 6.00216C7.49997 6.83057 6.82841 7.50213 6 7.50213C5.17159 7.50213 4.50003 6.83057 4.50003 6.00216C4.50003 5.17374 5.17159 4.50218 6 4.50218ZM11.2523 5.5H15.75C16.1642 5.5 16.5 5.83579 16.5 6.25C16.5 6.6297 16.2178 6.94349 15.8518 6.99315L15.75 7H11.2523C10.8381 7 10.5023 6.66421 10.5023 6.25C10.5023 5.8703 10.7844 5.55651 11.1505 5.50685L11.2523 5.5H15.75H11.2523Z" },
  report: { vb: "0 0 18 20", d: "M17.25 3C14.5866 3 11.992 2.05652 9.45 0.15C9.18333 -0.05 8.81667 -0.05 8.55 0.15C6.00797 2.05652 3.41341 3 0.75 3C0.335786 3 0 3.33579 0 3.75V9C0 14.0012 2.95756 17.6757 8.72511 19.9478C8.90176 20.0174 9.09824 20.0174 9.27489 19.9478C15.0424 17.6757 18 14.0012 18 9V3.75C18 3.33579 17.6642 3 17.25 3ZM1.5 4.47793C4.07735 4.32585 6.58084 3.38829 9 1.67782C11.4192 3.38829 13.9227 4.32585 16.5 4.47793V9C16.5 13.2556 14.0466 16.3789 9 18.4419C3.95337 16.3789 1.5 13.2556 1.5 9V4.47793ZM9.74315 5.65179C9.69349 5.28572 9.3797 5.00356 9 5.00356C8.58579 5.00356 8.25 5.33935 8.25 5.75356V12.2523L8.25685 12.3541C8.30651 12.7201 8.6203 13.0023 9 13.0023C9.41421 13.0023 9.75 12.6665 9.75 12.2523V5.75356L9.74315 5.65179ZM9 16C9.55229 16 10 15.5523 10 15C10 14.4477 9.55229 14 9 14C8.44771 14 8 14.4477 8 15C8 15.5523 8.44771 16 9 16Z" },
  remove: { vb: "0 0 20.9965 20.9954", d: "M15.4965 9.99538C18.534 9.99538 20.9965 12.4578 20.9965 15.4954C20.9965 18.5329 18.534 20.9954 15.4965 20.9954C12.4589 20.9954 9.99646 18.5329 9.99646 15.4954C9.99646 12.4578 12.4589 9.99538 15.4965 9.99538ZM10.0187 11.9947C9.72202 12.458 9.48249 12.9614 9.31008 13.495L2.25 13.4953C1.83579 13.4953 1.5 13.8311 1.5 14.2453V15.1526C1.5 15.8083 1.78599 16.4313 2.28317 16.8587C3.54125 17.9404 5.43726 18.4964 7.99646 18.4964C8.5953 18.4964 9.1579 18.466 9.6846 18.4055C9.93351 18.9057 10.2473 19.3694 10.6136 19.7859C9.81137 19.9267 8.93842 19.9964 7.99646 19.9964C5.10696 19.9964 2.86814 19.3398 1.30528 17.9962C0.476655 17.2838 0 16.2454 0 15.1526V14.2453C0 13.0027 1.00736 11.9953 2.25 11.9953L10.0187 11.9947ZM13.0895 12.9617L13.0203 13.0195L12.9624 13.0888C12.8443 13.2593 12.8443 13.4869 12.9624 13.6574L13.0203 13.7266L14.7898 15.4961L13.0228 17.2629L12.965 17.3321C12.8469 17.5026 12.8469 17.7302 12.965 17.9007L13.0228 17.97L13.0921 18.0278C13.2626 18.1459 13.4902 18.1459 13.6607 18.0278L13.73 17.97L15.4968 16.2031L17.2659 17.9722L17.3351 18.0301C17.5056 18.1482 17.7332 18.1482 17.9037 18.0301L17.973 17.9722L18.0308 17.903C18.1489 17.7325 18.1489 17.5049 18.0308 17.3344L17.973 17.2651L16.2038 15.4961L17.9757 13.7267L18.0336 13.6574C18.1517 13.4869 18.1517 13.2593 18.0336 13.0888L17.9757 13.0196L17.9065 12.9617C17.736 12.8436 17.5084 12.8436 17.3379 12.9617L17.2686 13.0196L15.4968 14.7891L13.7274 13.0195L13.6581 12.9617C13.512 12.8604 13.3239 12.8459 13.1657 12.9183L13.0895 12.9617ZM7.99646 0C10.7579 0 12.9965 2.23858 12.9965 5C12.9965 7.76142 10.7579 10 7.99646 10C5.23503 10 2.99646 7.76142 2.99646 5C2.99646 2.23858 5.23503 0 7.99646 0ZM7.99646 1.5C6.06346 1.5 4.49646 3.067 4.49646 5C4.49646 6.933 6.06346 8.5 7.99646 8.5C9.92946 8.5 11.4965 6.933 11.4965 5C11.4965 3.067 9.92946 1.5 7.99646 1.5Z" },
} as const;

function Glyph({ g }: { g: { vb: string; d: string } }) {
  return (
    <svg className="size-[20px]" fill="currentColor" viewBox={g.vb}>
      <path d={g.d} />
    </svg>
  );
}

/** Teams 2 iOS "List Item One Line": 24px icon slot (20px glyph) + Body-1 label. */
function OptionRow({ glyph, label, onClick }: { glyph: { vb: string; d: string }; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[20px] w-full px-[20px] py-[12px] pr-[12px] active:opacity-60 transition-opacity text-left"
      style={{ fontFamily: "var(--font-sf-pro)" }}
    >
      <span className="grid size-[24px] place-items-center shrink-0 text-fy27-icon-primary">
        <Glyph g={glyph} />
      </span>
      <span className="flex-1 text-[17px] leading-[22px] tracking-[-0.41px] font-normal text-fy27-text-primary">{label}</span>
    </button>
  );
}

// Badge glyphs (icon-only, from Badge.tsx).
function PersonQuestionGlyph() {
  return (
    <svg viewBox="0 0 12 12" className="block size-full" fill="currentColor" aria-hidden="true">
      <path d="M5 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM1 7.75C1 6.784 1.784 6 2.75 6h2.964a2.5 2.5 0 0 0-.66 1.5H2.75a.25.25 0 0 0-.25.25c0 .69.358 1.21.93 1.56.49.298 1.12.444 1.737.476a2.5 2.5 0 0 0 .69.81c-.353.06-.73.094-1.107.094-.83 0-1.69-.16-2.4-.595C1.61 9.622 1 8.85 1 7.75ZM9 6.5A2.5 2.5 0 1 0 9 11.5 2.5 2.5 0 0 0 9 6.5Zm-.02 1.1a.95.95 0 0 1 .53 1.74c-.18.12-.26.22-.26.41a.25.25 0 0 1-.5 0c0-.45.27-.68.49-.82a.45.45 0 1 0-.69-.38.25.25 0 0 1-.5 0 .95.95 0 0 1 .93-.95Zm.02 2.65a.3.3 0 1 1 0 .6.3.3 0 0 1 0-.6Z" />
    </svg>
  );
}
function WarningGlyph() {
  return (
    <svg viewBox="0 0 14 13" className="block size-full" fill="currentColor" aria-hidden="true">
      <path d="M4.82 1.275c.956-1.7 3.404-1.7 4.36 0l4.496 8.004c.936 1.667-.269 3.725-2.18 3.725H2.503C.592 13.004-.612 10.946.324 9.28L4.82 1.275ZM7 8.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7 4a.5.5 0 0 0-.5.5V7a.5.5 0 1 0 1 0V4.5A.5.5 0 0 0 7 4Z" />
    </svg>
  );
}

/** Icon-only badge shown next to the name — Figma "Badge view (Teams 2 iOS)". */
function NameBadge({ variant }: { variant: PersonBadge }) {
  const suspected = variant === "suspected";
  return (
    <span className={`inline-flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 ${suspected ? "bg-fy27-surface-danger text-fy27-text-danger" : "bg-fy27-surface-tertiary text-fy27-icon-secondary"}`}>
      <span className="grid place-items-center size-[12px]">
        {suspected ? <WarningGlyph /> : <PersonQuestionGlyph />}
      </span>
    </span>
  );
}

/**
 * Participant contextual options — Teams 2 iOS bottom sheet (Figma POR 1170:32649).
 * Opened by long-pressing a participant's gallery tile or their "In the meeting"
 * list row. Header = participant name (centred, Callout-2 bold) + an optional badge
 * icon (only for unverified bots / suspected scammers). Actions are demo no-ops.
 */
export function ParticipantOptionsSheet({ open, onClose, id, name, badge }: ParticipantOptionsSheetProps) {
  const { pinnedIds, spotlightedIds, togglePin, toggleSpotlight, removeParticipant } = useActiveMeeting();
  const isPinned = pinnedIds.includes(id);
  const isSpotlighted = spotlightedIds.includes(id);
  const isSelf = id === SELF_ID;
  // Report opens a follow-up drawer — capture the target so it survives the
  // options sheet closing (which clears the props above).
  const [reportTarget, setReportTarget] = useState<{ name: string; avatar?: string } | null>(null);
  // Run an action then close the sheet. Bare close for the demo no-ops.
  const run = (fn?: () => void) => () => { fn?.(); onClose(); };
  return (
    <>
    <BottomSheet open={open} onClose={onClose} ariaLabel={`Options for ${name}`} className="pb-[21px]">
      {/* Section header — centred name + conditional badge */}
      <div className="flex items-center justify-center gap-[4px] w-full px-[16px] pt-[16px] pb-[8px]" style={{ fontFamily: "var(--font-sf-pro)" }}>
        <span className="text-[15px] leading-[20px] tracking-[-0.24px] font-bold text-fy27-text-primary text-center">{name}</span>
        {badge && <NameBadge variant={badge} />}
      </div>

      <OptionRow glyph={GLYPHS.mute} label="Mute participant" onClick={run()} />
      <OptionRow glyph={GLYPHS.pin} label={isPinned ? "Unpin" : "Pin for me"} onClick={run(() => togglePin(id))} />
      <OptionRow glyph={GLYPHS.spotlight} label={isSpotlighted ? "Remove spotlight" : "Spotlight for everyone"} onClick={run(() => toggleSpotlight(id))} />
      <OptionRow glyph={GLYPHS.profile} label="View profile" onClick={run()} />
      {/* You can't report or remove yourself. */}
      {!isSelf && (
        <>
          <div className="ml-[56px] h-px bg-fy27-divider" />
          <OptionRow
            glyph={GLYPHS.report}
            label="Report"
            onClick={() => { setReportTarget({ name, avatar: rosterById(id)?.avatar }); onClose(); }}
          />
          <OptionRow glyph={GLYPHS.remove} label="Remove from meeting" onClick={run(() => removeParticipant(id))} />
        </>
      )}
    </BottomSheet>

    <ReportParticipantSheet
      open={!!reportTarget}
      onClose={() => setReportTarget(null)}
      name={reportTarget?.name ?? ""}
      avatar={reportTarget?.avatar}
    />
    </>
  );
}
