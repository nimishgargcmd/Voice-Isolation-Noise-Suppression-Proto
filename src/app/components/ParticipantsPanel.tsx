import React, { useState, useEffect } from "react";
import svgPaths from "@/imports/svg-jfy15c3zsm";
import svgPathsActions from "@/imports/svg-q5lqoxjmtn";
import { MultitaskingPanel } from "@/app/components/MultitaskingPanel";
import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import { BottomSheet } from "@/app/components/BottomSheet";
import { Camera, Mic } from "@/app/components/ubarIcons";
import { Badge, RaisedHandsBadge } from "@/app/components/Badge";
import { ParticipantOptionsSheet, type PersonBadge } from "@/app/components/ParticipantOptionsSheet";
import { useLongPress } from "@/app/lib/useLongPress";
// Gallery tile images (matching MeetingStage)
import imgAadi from "figma:asset/3c32350895790815d4b2b05b8bfa873d40c997c2.png";
import imgBabak from "figma:asset/6900c5f1ebcee87405a464dc927c93633e66e145.png";
import imgMiguel from "figma:asset/685fc6dc030aab2cbea5b15f523d9ce42c11d689.png";
// Lobby / suspect faces — clean Fluent avatars (not in the meeting roster).
import imgDaniela from "@/assets/figma/dm/avatars/daniela-mandera.png";
import imgWanda from "@/assets/figma/dm/avatars/erika-fuller.png";
import imgSuspect from "@/assets/figma/dm/avatars/robert-tolbert.png";
import imgJessica from "figma:asset/3b6bf95da1f13af67c0b3a5e3c9534b640591ce5.png";
import imgRay from "figma:asset/a55a7173204f1d7f74adab6c38113bc9eedbb180.png";
import imgSarah from "figma:asset/503fddd74dcc978ba951b5c79ebe96b95453b1eb.png";

interface ParticipantsPanelProps {
  onClose: () => void;
  hasLobbyGuests?: boolean;
  raisedHands?: Array<{ name: string }>;
  /** FY27 MVP: raised-hand roster ids in raise order. */
  raisedHandIds?: string[];
  /** FY27 MVP: the in-meeting roster (defaults to the Final-Vision verified users). */
  users?: Participant[];
}

type PresenceStatus = "busy" | "away" | "dnd" | "available";

export interface Participant {
  id: string;
  name: string;
  avatar?: string;
  isBot?: boolean;
  presence?: PresenceStatus;
  role?: string;
  isMicMuted?: boolean;
  isVideoOff?: boolean;
  botSuspected?: boolean;
  isInLobby?: boolean;
  initialsColor?: string;
}

/* ────────────────────────────────────────────────────────
   Glass-effect circular button (header)
   ──────────────────────────────────────────────────────── */
function GlassButton({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="relative size-[44px] rounded-full flex items-center justify-center overflow-hidden shrink-0 cursor-pointer"
    >
      <div className="absolute inset-0 rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div
          className="absolute inset-0 rounded-[296px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)",
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </button>
  );
}

/* ────────────────────────────────────────────────────────
   Section chevron (12px, rotates when collapsed)
   ──────────────────────────────────────────────────────── */
function SectionChevron({ isExpanded }: { isExpanded: boolean }) {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 12 12"
        style={{
          transform: isExpanded ? "none" : "rotate(-90deg)",
          transition: "transform 0.2s",
        }}
      >
        <path d={svgPaths.pf4077f0} fill="#919191" />
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Presence indicators
   ──────────────────────────────────────────────────────── */
function PresenceIndicator({ status }: { status: PresenceStatus }) {
  if (status === "busy") {
    return (
      <div className="absolute bottom-[1.6px] right-[1.6px] size-[12.8px]">
        <div className="absolute inset-[-11.36%_-13.66%_-13.64%_-11.34%]">
          <svg className="block size-full" fill="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" fill="#D74553" r="7.2" strokeWidth="1.6" style={{ stroke: "var(--fy27-surface-dominant)" }} />
          </svg>
        </div>
      </div>
    );
  }
  if (status === "away") {
    return (
      <div className="absolute bottom-[1.6px] right-[1.6px] size-[12.8px]">
        <div className="absolute inset-[-11.36%_-13.66%_-13.64%_-11.34%]">
          <svg className="block size-full" fill="none" viewBox="0 0 16 16">
            <path d={svgPaths.p64afe00} fill="#F8D22A" strokeWidth="1.6" style={{ stroke: "var(--fy27-surface-dominant)" }} />
          </svg>
        </div>
      </div>
    );
  }
  if (status === "dnd") {
    return (
      <div className="absolute bottom-0 right-0 size-[16px]">
        <svg className="block size-full" fill="none" viewBox="0 0 16.0004 16.0001">
          <path d={svgPaths.p244f18c0} fill="#D74553" strokeWidth="1.6" style={{ stroke: "var(--fy27-surface-dominant)" }} />
        </svg>
      </div>
    );
  }
  /* available */
  return (
    <div className="absolute bottom-0 right-0 size-[16px]">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" viewBox="0 0 17.2 17.2">
          <path d={svgPaths.p20528380} fill="#92C353" strokeWidth="1.6" style={{ stroke: "var(--fy27-surface-dominant)" }} />
        </svg>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Photo avatar with presence
   ──────────────────────────────────────────────────────── */
function PhotoAvatar({ src, presence }: { src: string; presence?: PresenceStatus }) {
  return (
    <div className="flex flex-col items-end relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0 size-[52px]">
        <div className="relative rounded-[9999px] shrink-0 size-[52px] overflow-hidden">
          <img
            alt=""
            className="absolute inset-0 object-cover pointer-events-none size-full"
            src={src}
          />
        </div>
      </div>
      {presence && <PresenceIndicator status={presence} />}
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Initials avatar with presence (for participants without a photo)
   ──────────────────────────────────────────────────────── */
function InitialsAvatar({ name, presence, color }: { name: string; presence?: PresenceStatus; color?: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <div className="flex flex-col items-end relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0 size-[52px]">
        <div
          className="relative rounded-[9999px] shrink-0 size-[52px] overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: color || "#5b5fc7" }}
        >
          <span className="font-['SF_Pro_Text:Medium',sans-serif] text-[18px] text-white tracking-[-0.2px]">
            {initials}
          </span>
        </div>
      </div>
      {presence && <PresenceIndicator status={presence} />}
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Bot avatar
   ──────────────────────────────────────────────────────── */
function BotAvatar() {
  return (
    <div
      className="bg-[#292929] relative shrink-0 size-[52px] flex items-center justify-center"
      style={{ clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)" }}
    >
      <svg className="block size-[46px]" fill="none" viewBox="0 0 52 52">
        <path d={svgPaths.p3159bc00} fill="#6E6E6E" />
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Participant row
   ──────────────────────────────────────────────────────── */
export function ParticipantRow({ participant, handRaisePosition, hideMedia }: { participant: Participant; handRaisePosition?: number; hideMedia?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-[rgba(36,36,37,0.7)] inset-0" />
      <div className="flex items-center justify-center relative shrink-0 w-full">
        {/* Left: avatar + text */}
        <div className="flex-[1_0_0] min-h-px min-w-px relative">
          <div className="flex flex-row items-center size-full">
            <div className={`flex items-center pl-[16px] py-[12px] relative w-full ${hideMedia ? "pr-[16px]" : "pr-[12px]"}`}>
              {/* Avatar */}
              <div className="flex items-center pr-[16px] relative shrink-0">
                {participant.isBot ? (
                  <BotAvatar />
                ) : participant.avatar ? (
                  <PhotoAvatar src={participant.avatar} presence={participant.isInLobby ? undefined : participant.presence} />
                ) : (
                  <InitialsAvatar name={participant.name} presence={participant.isInLobby ? undefined : participant.presence} color={participant.initialsColor} />
                )}
              </div>
              {/* Text */}
              <div className="flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] w-fit">
                  <p className="leading-[22px] whitespace-pre-wrap w-fit">{participant.name}</p>
                </div>
                {participant.role && (
                  <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[#919191] text-[15px] tracking-[-0.08px] w-full whitespace-nowrap">
                    <p className="leading-[20px] overflow-hidden">{participant.role}</p>
                  </div>
                )}
              </div>
              {/* Raised hand badge */}
              {handRaisePosition != null && (
                <div className="flex gap-[4px] items-center justify-center px-[6px] py-[6px] rounded-[8px] shrink-0 ml-[8px]" style={{ backgroundColor: 'rgba(255, 215, 0, 0.15)' }}>
                  <span className="text-[18px] leading-[18px]" role="img" aria-label="Raised hand">✋</span>
                  <span className="font-['SF_Pro_Text:Medium',sans-serif] text-[13px] leading-[16px] text-[#FFD700] tracking-[-0.08px]">{handRaisePosition}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: camera + mic icons */}
        {!hideMedia && !participant.isBot && !participant.isInLobby && participant.presence && (
          <div className="flex flex-row items-center self-stretch">
            <div className="flex gap-[8px] h-full items-center px-[12px] relative shrink-0">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p10a22b00} fill="#E1E1E1" />
                </svg>
              </div>
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <path
                    d={participant.isMicMuted ? svgPaths.pb375500 : svgPaths.p3a3eeaf0}
                    fill="#E1E1E1"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Master section header (e.g. "In the lobby (1)")
   ──────────────────────────────────────────────────────── */
function SectionHeader({
  title,
  isExpanded,
  onToggle,
}: {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex flex-col h-[46px] items-center justify-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
            <div className="flex flex-row items-center size-full">
              <button
                onClick={onToggle}
                className="flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full cursor-pointer"
              >
                <SectionChevron isExpanded={isExpanded} />
                <div className="flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                  <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#5b5fc7] text-[17px] tracking-[-0.41px] w-full">
                    <p className="leading-[22px] whitespace-pre-wrap text-left">{title}</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Sub-section header (e.g. "Verified users (1)")
   ──────────────────────────────────────────────────────── */
function SubSectionHeader({
  title,
  rightAction,
}: {
  title: string;
  rightAction?: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-[44px] items-center justify-center shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
            <div className="flex flex-row items-center size-full">
              <div className="flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full">
                <div className="flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                  <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#6e6e6e] text-[15px] tracking-[-0.08px] w-full">
                    <p className="leading-[20px] whitespace-pre-wrap">{title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {rightAction}
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   "Admit all" pill button (Figma-matched)
   ──────────────────────────────────────────────────────── */
function AdmitAllButton() {
  return (
    <div className="absolute bg-[#212122] flex items-center justify-center overflow-clip px-[16px] py-[8px] right-0 rounded-[9999px] top-[7px] cursor-pointer">
      <div className="flex gap-[4px] items-center overflow-clip relative shrink-0">
        <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] relative shrink-0 text-[13px] text-center text-white tracking-[-0.08px]">Admit all</p>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Card wrapper (rounded container for participant rows)
   ──────────────────────────────────────────────────────── */
function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
        {children}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   FY27 MVP — POR list rows + section headers (Mobile Meetings POR 1170:33100).
   Rendered only for the FY27 MVP family (isMvpFamily); Final Vision keeps the
   helpers above untouched. Multi-line list item: avatar → name (Body 1) +
   subtitle (Body 2) → trailing raised-hand pill / cam + mic.
   ──────────────────────────────────────────────────────── */
/* Regular Fluent off-glyphs from the POR (Video Off 1484:33580, Mic Off 1161:28178).
   24px frame, 20px glyph, coloured via the parent's text-fy27-icon-secondary. */
function VideoOffRegular() {
  return (
    <span className="grid size-[24px] place-items-center">
      <svg width={20} height={20} viewBox="0 0 20.0018 20.0002" fill="none" className="block">
        <path
          d="M1.28034 0.219675C0.987445 -0.0732209 0.512571 -0.0732257 0.219675 0.219665C-0.0732209 0.512555 -0.0732257 0.987429 0.219665 1.28032L2.13545 3.19615C0.88949 3.651 0 4.84662 0 6.25V13.75C0 15.5449 1.45507 17 3.25 17H10.75C12.1533 17 13.3489 16.1106 13.8038 14.8647L18.7194 19.7805C19.0123 20.0734 19.4872 20.0734 19.7801 19.7805C20.073 19.4876 20.073 19.0127 19.7801 18.7198L1.28034 0.219675ZM12.5 13.5609V13.75C12.5 14.7165 11.7165 15.5 10.75 15.5H3.25C2.2835 15.5 1.5 14.7165 1.5 13.75V6.25C1.5 5.2835 2.2835 4.5 3.25 4.5H3.43928L12.5 13.5609ZM12.5 6.25V9.31808L14 10.8181V8.38401L18.1098 5.54632C18.2756 5.43181 18.5018 5.55052 18.5018 5.75204V14.2471C18.5018 14.4486 18.2756 14.5673 18.1098 14.4528L16.5749 13.393L19.0074 15.8256C19.5776 15.5521 20.0018 14.9772 20.0018 14.2471V5.75204C20.0018 4.34137 18.4183 3.51044 17.2575 4.31197L14 6.56118V6.25C14 4.45507 12.5449 3 10.75 3H6.18205L7.68202 4.5H10.75C11.7165 4.5 12.5 5.2835 12.5 6.25Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

function MicOffRegular() {
  return (
    <span className="grid size-[24px] place-items-center">
      <svg width={20} height={20} viewBox="0 0 19.9998 20.0002" fill="none" className="block">
        <path
          d="M1.28034 0.219675C0.987445 -0.0732209 0.512571 -0.0732257 0.219675 0.219665C-0.0732209 0.512555 -0.0732257 0.987429 0.219665 1.28032L6 7.06078V10C6 12.2091 7.79086 14 10 14C10.8335 14 11.6074 13.7451 12.2481 13.309L13.394 14.4549C12.5176 15.1112 11.4292 15.5 10.25 15.5H9.75L9.5336 15.4956C6.73445 15.3821 4.5 13.077 4.5 10.25V9.75L4.49315 9.64823C4.44349 9.28216 4.1297 9 3.75 9C3.33579 9 3 9.33579 3 9.75V10.25L3.00406 10.4863C3.12283 13.938 5.83323 16.7316 9.25002 16.9818L9.25 19.25L9.25685 19.3518C9.30651 19.7178 9.6203 20 10 20C10.4142 20 10.75 19.6642 10.75 19.25L10.751 16.9817C12.15 16.8791 13.4305 16.35 14.4631 15.5241L18.7194 19.7805C19.0123 20.0734 19.4872 20.0734 19.7801 19.7805C20.073 19.4876 20.073 19.0127 19.7801 18.7198L1.28034 0.219675ZM11.1562 12.2171C10.8105 12.3978 10.4172 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10V8.56081L11.1562 12.2171ZM12.5 4V9.3182L13.9301 10.7483C13.976 10.5059 14 10.2558 14 10V4C14 1.79086 12.2091 0 10 0C8.15213 0 6.59692 1.25302 6.13768 2.95575L7.5 4.3181V4C7.5 2.61929 8.61929 1.5 10 1.5C11.3807 1.5 12.5 2.61929 12.5 4ZM15.1962 12.0144L16.3421 13.1604C16.7638 12.2791 17 11.2921 17 10.25V9.75L16.9932 9.64823C16.9435 9.28216 16.6297 9 16.25 9C15.8358 9 15.5 9.33579 15.5 9.75V10.25L15.4956 10.4664C15.4737 11.0075 15.3698 11.5276 15.1962 12.0144Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

/* FY27 MVP agent/bot avatar — plum-gradient rounded square + the Fluent agent
   glyph (Figma POR "Agent avatar" 1170:33167). MVP-only; Final Vision keeps BotAvatar. */
function AgentAvatar() {
  return (
    <div
      className="relative shrink-0 size-[52px] rounded-[14px] overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "linear-gradient(189.4deg, #fb5b6c 4.96%, #e15196 39.85%, #b036b4 93.3%)" }}
    >
      <svg width={34} height={32} viewBox="0 0 28.004 26" fill="none" className="block">
        <path
          d="M8.7735 2C8.41624 2 8.08611 2.1906 7.90748 2.5L2.13397 12.5C1.95534 12.8094 1.95534 13.1906 2.13397 13.5L7.8004 23.3145C8.04529 23.7387 8.49787 24 8.98765 24C9.60908 24 10.1528 23.582 10.3125 22.9815L15.7587 2.50448C16.1514 1.02781 17.4883 0 19.0164 0C20.2207 0 21.3335 0.642493 21.9357 1.68546L27.6021 11.5C28.138 12.4282 28.138 13.5718 27.6021 14.5L21.8286 24.5C21.2927 25.4282 20.3023 26 19.2305 26H15.002C14.4497 26 14.002 25.5523 14.002 25C14.002 24.4477 14.4497 24 15.002 24H19.2305C19.5878 24 19.9179 23.8094 20.0965 23.5L25.87 13.5C26.0487 13.1906 26.0487 12.8094 25.87 12.5L20.2036 2.68546C19.9587 2.26129 19.5061 2 19.0164 2C18.3949 2 17.8512 2.418 17.6915 3.01855L12.2453 23.4955C11.8526 24.9722 10.5157 26 8.98765 26C7.78334 26 6.67051 25.3575 6.06835 24.3145L0.401923 14.5C-0.133975 13.5718 -0.133974 12.4282 0.401924 11.5L6.17543 1.5C6.71133 0.571795 7.70171 0 8.7735 0H13.002C13.5543 0 14.002 0.447715 14.002 1C14.002 1.55228 13.5543 2 13.002 2H8.7735Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

function MvpAvatar({ participant }: { participant: Participant }) {
  if (participant.isBot) return <AgentAvatar />;
  if (participant.avatar)
    return <PhotoAvatar src={participant.avatar} presence={participant.isInLobby ? undefined : participant.presence} />;
  return (
    <InitialsAvatar
      name={participant.name}
      presence={participant.isInLobby ? undefined : participant.presence}
      color={participant.initialsColor}
    />
  );
}

export function MvpParticipantRow({ participant, handRaisePosition, hideMedia, onLongPress }: { participant: Participant; handRaisePosition?: number; hideMedia?: boolean; onLongPress?: () => void }) {
  const showMedia = !hideMedia && !participant.isBot && !participant.isInLobby && !!participant.presence;
  const pressHandlers = useLongPress(onLongPress ?? (() => {}));
  const pressProps = onLongPress ? { ...pressHandlers, onContextMenu: (e: React.MouseEvent) => e.preventDefault() } : {};
  return (
    <div className={`flex items-center gap-[16px] py-[8px] w-full ${onLongPress ? "select-none active:opacity-60 transition-opacity" : ""}`} style={{ fontFamily: "var(--font-sf-pro)" }} {...pressProps}>
      <div className="shrink-0">
        <MvpAvatar participant={participant} />
      </div>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-center gap-[8px] min-w-0">
          <p className="text-[17px] leading-[22px] tracking-[-0.41px] font-normal text-fy27-text-primary truncate">{participant.name}</p>
          {participant.botSuspected ? (
            <Badge variant="suspected" />
          ) : (
            participant.isBot && <Badge variant="unverified" />
          )}
        </div>
        {participant.role && (
          <p className="text-[15px] leading-[20px] tracking-[-0.08px] font-normal text-fy27-text-secondary truncate">{participant.role}</p>
        )}
      </div>
      {handRaisePosition != null && <RaisedHandsBadge count={handRaisePosition} />}
      {showMedia && (
        <div className="flex gap-[8px] items-center shrink-0 text-fy27-icon-secondary">
          {participant.isVideoOff ? <VideoOffRegular /> : <Camera size={24} />}
          {participant.isMicMuted ? <MicOffRegular /> : <Mic size={24} />}
        </div>
      )}
    </div>
  );
}

/** A lobby row — tapping it opens the admit/deny bottom sheet. */
function LobbyRow({ participant, onSelect }: { participant: Participant; onSelect: () => void }) {
  return (
    <button onClick={onSelect} className="w-full text-left active:opacity-60 transition-opacity">
      <MvpParticipantRow participant={participant} />
    </button>
  );
}

function MvpSectionHeader({ title, isExpanded, onToggle }: { title: string; isExpanded: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-[4px] w-full pt-[16px] pb-[8px] cursor-pointer"
      style={{ fontFamily: "var(--font-sf-pro)" }}
    >
      <SectionChevron isExpanded={isExpanded} />
      <span className="text-[17px] leading-[22px] tracking-[-0.41px] font-bold text-fy27-text-primary text-left">{title}</span>
    </button>
  );
}

function MvpSubSectionHeader({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  return (
    <div className="flex items-center justify-between w-full pt-[12px] pb-[8px]" style={{ fontFamily: "var(--font-sf-pro)" }}>
      <span className="text-[15px] leading-[20px] tracking-[-0.08px] text-fy27-text-secondary">{title}</span>
      {action && (
        <button onClick={onAction} className="text-[15px] leading-[20px] tracking-[-0.08px] text-fy27-text-interactive active:opacity-60">
          {action}
        </button>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────── */
const lobbyVerifiedUsers: Participant[] = [
  { id: "daniela", name: "Daniela Mandera", presence: "busy", isInLobby: true, avatar: imgDaniela },
  { id: "wanda", name: "Erika Fuller", presence: "away", isInLobby: true, avatar: imgWanda },
];

// Suspected-threat lobby entity (Figma POR 1161:41533) — surfaced by the
// suspected-threat lobby UFD. Spoofed name/email + the "Scam suspected" badge.
const lobbySuspects: Participant[] = [
  { id: "micros0ft", name: "Micros0ft Security", role: "helpdesk@micros0ft.com", isInLobby: true, botSuspected: true, avatar: imgSuspect },
];

const meetingSuspiciousUsers: Participant[] = [
  { id: "meeting-recording-suspicious", name: "Meeting Recording", isBot: true, botSuspected: true },
];

// FY27 MVP "Agents and bots" — the unverified AI agent (Figma POR "AI Notetaker"
// 1170:33156). MVP-only; Final Vision keeps meetingSuspiciousUsers above.
const MVP_AGENTS: Participant[] = [
  { id: "ai-notetaker", name: "AI Notetaker", isBot: true },
];

export const meetingVerifiedUsers: Participant[] = [
  { id: "udayan", name: "Udayan Vidyanta", presence: "available", isMicMuted: false },
  { id: "aadi", name: "Aadi Kapoor", avatar: imgAadi, presence: "busy", role: "Organiser", isMicMuted: false },
  { id: "sarah", name: "Sarah Johnson", avatar: imgBabak, presence: "away", isMicMuted: true },
  { id: "miguel", name: "Miguel Silva", avatar: imgMiguel, presence: "dnd", isMicMuted: true },
  { id: "jessica", name: "Jessica Kline", avatar: imgJessica, presence: "away", isMicMuted: true },
  { id: "ray", name: "Ray Tanaka", avatar: imgRay, presence: "away", isMicMuted: true },
  { id: "babak", name: "Babak Shammas", avatar: imgSarah, presence: "available", isMicMuted: true },
];

/* ────────────────────────────────────────────────────────
   Main panel
   ──────────────────────────────────────────────────────── */
// Map raised-hand short names to participant IDs
export const raisedHandNameToId: Record<string, string> = {
  "You": "udayan",
  "Sarah": "sarah",
  "Aadi K": "aadi",
  "Babak S": "babak",
  "Miguel S": "miguel",
};

export function ParticipantsPanel({ onClose, hasLobbyGuests = false, raisedHands = [], raisedHandIds, users }: ParticipantsPanelProps) {
  const [lobbyExpanded, setLobbyExpanded] = useState(true);
  const [meetingExpanded, setMeetingExpanded] = useState(true);
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const { activeVersionId } = useVersion();
  const isFy27Mvp = isMvpFamily(activeVersionId);
  const { admitParticipant, admittedParticipants, setLobbyCount, removedIds } = useActiveMeeting();
  // Long-press a meeting row → participant options sheet (Figma POR 1170:32649).
  const [optionsFor, setOptionsFor] = useState<{ id: string; name: string; badge?: PersonBadge } | null>(null);
  const openOptions = (p: Participant) =>
    setOptionsFor({ id: p.id, name: p.name, badge: p.botSuspected ? "suspected" : p.isBot ? "unverified" : undefined });
  // Tapping a lobby row opens the admit/deny sheet (Figma POR 1170:32638).
  const [sheetGuest, setSheetGuest] = useState<Participant | null>(null);
  const [deniedIds, setDeniedIds] = useState<string[]>([]);

  // Admitting a lobby guest adds their gallery tile + bumps the count (context).
  // They leave the lobby immediately and fall back in 30s (auto-removed there).
  const hidden = (id: string) => admittedParticipants.some((a) => a.id === id) || deniedIds.includes(id);
  const lobby = lobbyVerifiedUsers.filter((u) => !hidden(u.id));
  const lobbySuspectsShown = lobbySuspects.filter((u) => !hidden(u.id));

  // Once every lobby guest is resolved (admitted or denied), zero the lobby count.
  // MeetingPage watches this transition and clears the lobby notification from the hub.
  const lobbyEmpty = lobby.length === 0 && lobbySuspectsShown.length === 0;
  useEffect(() => {
    if (hasLobbyGuests && lobbyEmpty) setLobbyCount(0);
  }, [hasLobbyGuests, lobbyEmpty, setLobbyCount]);
  const admit = (p: Participant) =>
    admitParticipant({
      id: p.id,
      name: p.name,
      avatar: p.avatar,
      display: p.avatar ? "photo" : "initials",
      initialsColor: p.initialsColor,
      role: p.role,
      suspected: p.botSuspected,
    });
  // Admitted suspects are retained in "In the meeting" (with the scam badge + subtitle).
  // Subtitle falls back to the static suspect record so it shows even for guests
  // admitted before the role field existed.
  const admittedSuspects: Participant[] = admittedParticipants
    .filter((a) => a.suspected)
    .map((a) => ({
      id: a.id,
      name: a.name,
      avatar: a.avatar,
      role: a.role ?? lobbySuspects.find((s) => s.id === a.id)?.role,
      presence: "available",
      botSuspected: true,
      initialsColor: a.initialsColor,
      isMicMuted: true,
      isVideoOff: true,
    }));

  // ── Actions nested view (... button) ──
  if (showActionsMenu) {
    return (
      <MultitaskingPanel
        title="Options"
        onClose={() => setShowActionsMenu(false)}
        showFooter={false}
        isNestedView={true}
      >
        <div className="flex-1 overflow-y-auto bg-transparent">
          <div className="bg-[rgba(36,36,37,0.7)] rounded-[24px] overflow-hidden mx-4 mt-4">
            {/* Add people */}
            <button className="w-full px-4 py-3.5 flex items-center gap-4 relative cursor-pointer">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                <path d={svgPathsActions.p3170400} fill="white" />
              </svg>
              <span className="text-white text-[17px] tracking-[-0.41px] leading-[22px] font-normal" style={{ fontFamily: 'var(--font-sf-pro)' }}>Add people</span>
              <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-[#323232]" />
            </button>
            {/* Add a room */}
            <button className="w-full px-4 py-3.5 flex items-center gap-4 relative cursor-pointer">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                <path d={svgPathsActions.pcd5c000} fill="white" />
              </svg>
              <span className="text-white text-[17px] tracking-[-0.41px] leading-[22px] font-normal" style={{ fontFamily: 'var(--font-sf-pro)' }}>Add a room</span>
              <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-[#323232]" />
            </button>
            {/* Share invite with others */}
            <button className="w-full px-4 py-3.5 flex items-center gap-4 relative cursor-pointer">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                <path d={svgPathsActions.p118fa800} fill="white" />
              </svg>
              <span className="text-white text-[17px] tracking-[-0.41px] leading-[22px] font-normal" style={{ fontFamily: 'var(--font-sf-pro)' }}>Share invite with others</span>
              <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-[#323232]" />
            </button>
            {/* Meeting options — Fluent UI Options (sliders) icon */}
            <button className="w-full px-4 py-3.5 flex items-center gap-4 relative cursor-pointer">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                <path d="M8.75 14.5C10.2861 14.5 11.5738 15.5656 11.9131 16.998L21.25 17C21.6642 17 22 17.3358 22 17.75C22 18.1297 21.7176 18.4435 21.3516 18.4932L21.25 18.5L11.9131 18.501C11.5742 19.9339 10.2865 21 8.75 21C7.21354 21 5.92583 19.9339 5.58691 18.501L2.75 18.5C2.33579 18.5 2 18.1642 2 17.75C2 17.3703 2.28236 17.0565 2.64844 17.0068L2.75 17L5.58691 16.999C5.92583 15.5661 7.21354 14.5 8.75 14.5ZM8.75 16C7.7835 16 7 16.7835 7 17.75C7 18.7165 7.7835 19.5 8.75 19.5C9.7165 19.5 10.5 18.7165 10.5 17.75C10.5 16.7835 9.7165 16 8.75 16ZM15.25 3C16.7865 3 18.0742 4.06613 18.4131 5.49902L21.25 5.5C21.6642 5.5 22 5.83579 22 6.25C22 6.6297 21.7176 6.9435 21.3516 6.99316L21.25 7L18.4131 7.00098C18.0742 8.43387 16.7865 9.5 15.25 9.5C13.7135 9.5 12.4258 8.43387 12.0869 7.00098L2.75 7C2.33579 7 2 6.66421 2 6.25C2 5.8703 2.28236 5.5565 2.64844 5.50684L2.75 5.5L12.0869 5.49805C12.4262 4.06562 13.7139 3 15.25 3ZM15.25 4.5C14.2836 4.5 13.5002 5.2837 13.5 6.25C13.5 7.2165 14.2835 8 15.25 8C16.2165 8 17 7.2165 17 6.25C16.9998 5.2837 16.2164 4.5 15.25 4.5Z" fill="white" />
              </svg>
              <span className="text-white text-[17px] tracking-[-0.41px] leading-[22px] font-normal" style={{ fontFamily: 'var(--font-sf-pro)' }}>Meeting options</span>
              <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-[#323232]" />
            </button>
            {/* Manage audio and video — Fluent UI Settings (gear) icon */}
            <button className="w-full px-4 py-3.5 flex items-center gap-4 cursor-pointer">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                <path d="M12.0122 2.25C12.7462 2.25846 13.4773 2.34326 14.1937 2.50304C14.5064 2.57279 14.7403 2.83351 14.7758 3.15196L14.946 4.67881C15.0231 5.37986 15.615 5.91084 16.3206 5.91158C16.5103 5.91188 16.6979 5.87238 16.8732 5.79483L18.2738 5.17956C18.5651 5.05159 18.9055 5.12136 19.1229 5.35362C20.1351 6.43464 20.8889 7.73115 21.3277 9.14558C21.4223 9.45058 21.3134 9.78203 21.0564 9.9715L19.8149 10.8866C19.4607 11.1468 19.2516 11.56 19.2516 11.9995C19.2516 12.4389 19.4607 12.8521 19.8157 13.1129L21.0582 14.0283C21.3153 14.2177 21.4243 14.5492 21.3297 14.8543C20.8911 16.2685 20.1377 17.5649 19.1261 18.6461C18.9089 18.8783 18.5688 18.9483 18.2775 18.8206L16.8712 18.2045C16.4688 18.0284 16.0068 18.0542 15.6265 18.274C15.2463 18.4937 14.9933 18.8812 14.945 19.3177L14.7759 20.8444C14.741 21.1592 14.5122 21.4182 14.204 21.4915C12.7556 21.8361 11.2465 21.8361 9.79803 21.4915C9.48991 21.4182 9.26105 21.1592 9.22618 20.8444L9.05736 19.32C9.00777 18.8843 8.75434 18.498 8.37442 18.279C7.99451 18.06 7.5332 18.0343 7.1322 18.2094L5.72557 18.8256C5.43422 18.9533 5.09403 18.8833 4.87678 18.6509C3.86462 17.5685 3.11119 16.2705 2.6732 14.8548C2.57886 14.5499 2.68786 14.2186 2.94485 14.0293L4.18818 13.1133C4.54232 12.8531 4.75147 12.4399 4.75147 12.0005C4.75147 11.561 4.54232 11.1478 4.18771 10.8873L2.94516 9.97285C2.6878 9.78345 2.5787 9.45178 2.67337 9.14658C3.11212 7.73215 3.86594 6.43564 4.87813 5.35462C5.09559 5.12236 5.43594 5.05259 5.72724 5.18056L7.12762 5.79572C7.53056 5.97256 7.9938 5.94585 8.37577 5.72269C8.75609 5.50209 9.00929 5.11422 9.05817 4.67764L9.22824 3.15196C9.26376 2.83335 9.49786 2.57254 9.8108 2.50294C10.5281 2.34342 11.26 2.25865 12.0122 2.25ZM12.0124 3.7499C11.5583 3.75524 11.1056 3.79443 10.6578 3.86702L10.5489 4.84418C10.4471 5.75368 9.92003 6.56102 9.13042 7.01903C8.33597 7.48317 7.36736 7.53903 6.52458 7.16917L5.62629 6.77456C5.05436 7.46873 4.59914 8.25135 4.27852 9.09168L5.07632 9.67879C5.81513 10.2216 6.25147 11.0837 6.25147 12.0005C6.25147 12.9172 5.81513 13.7793 5.0771 14.3215L4.27805 14.9102C4.59839 15.752 5.05368 16.5361 5.626 17.2316L6.53113 16.8351C7.36923 16.4692 8.33124 16.5227 9.12353 16.9794C9.91581 17.4361 10.4443 18.2417 10.548 19.1526L10.657 20.1365C11.5466 20.2878 12.4555 20.2878 13.3451 20.1365L13.4541 19.1527C13.5549 18.2421 14.0828 17.4337 14.876 16.9753C15.6692 16.5168 16.6332 16.463 17.4728 16.8305L18.3772 17.2267C18.949 16.5323 19.4041 15.7495 19.7247 14.909L18.9267 14.3211C18.1879 13.7783 17.7516 12.9162 17.7516 11.9995C17.7516 11.0827 18.1879 10.2206 18.9258 9.67847L19.7227 9.09109C19.4021 8.25061 18.9468 7.46784 18.3748 6.77356L17.4783 7.16737C17.113 7.32901 16.7178 7.4122 16.3187 7.41158C14.849 7.41004 13.6155 6.30355 13.4551 4.84383L13.3462 3.8667C12.9007 3.7942 12.4526 3.75512 12.0124 3.7499ZM11.9997 8.24995C14.0708 8.24995 15.7497 9.92888 15.7497 12C15.7497 14.071 14.0708 15.75 11.9997 15.75C9.92863 15.75 8.2497 14.071 8.2497 12C8.2497 9.92888 9.92863 8.24995 11.9997 8.24995ZM11.9997 9.74995C10.7571 9.74995 9.7497 10.7573 9.7497 12C9.7497 13.2426 10.7571 14.25 11.9997 14.25C13.2423 14.25 14.2497 13.2426 14.2497 12C14.2497 10.7573 13.2423 9.74995 11.9997 9.74995Z" fill="white" />
              </svg>
              <span className="text-white text-[17px] tracking-[-0.41px] leading-[22px] font-normal" style={{ fontFamily: 'var(--font-sf-pro)' }}>Manage audio and video</span>
            </button>
          </div>
        </div>
      </MultitaskingPanel>
    );
  }

  const verifiedUsers = (users ?? meetingVerifiedUsers).filter((u) => !removedIds.includes(u.id));

  // Build a map of participant ID → queue position (1-indexed). FY27 MVP passes
  // ids directly; Final Vision resolves short names via the name→id map.
  const handRaiseMap = new Map<string, number>();
  if (raisedHandIds) {
    raisedHandIds.forEach((id, i) => handRaiseMap.set(id, i + 1));
  } else {
    raisedHands.forEach((h, i) => {
      const id = raisedHandNameToId[h.name];
      if (id) handRaiseMap.set(id, i + 1);
    });
  }

  // Sort verified users: raised-hand participants first (by queue position), then the rest in original order
  const sortedVerifiedUsers = [...verifiedUsers].sort((a, b) => {
    const aPosn = handRaiseMap.get(a.id);
    const bPosn = handRaiseMap.get(b.id);
    if (aPosn != null && bPosn != null) return aPosn - bPosn;
    if (aPosn != null) return -1;
    if (bPosn != null) return 1;
    return 0;
  });

  const totalMeeting = meetingSuspiciousUsers.length + verifiedUsers.length + admittedSuspects.length;

  // ── FY27 MVP: nav-bar header (MultitaskingPanel) + POR list rows ──
  if (isFy27Mvp) {
    return (
      <>
      <MultitaskingPanel
        title="Participants"
        onClose={onClose}
        isNestedView
        actionButton={
          <>
            <button
              aria-label="More options"
              onClick={() => setShowActionsMenu(true)}
              className="size-[24px] grid place-items-center active:opacity-60 transition-opacity"
            >
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p2f3d9200} fill="currentColor" /></svg>
            </button>
            <button aria-label="Search" className="size-[24px] grid place-items-center active:opacity-60 transition-opacity">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p2e9d8000} fill="currentColor" /></svg>
            </button>
          </>
        }
      >
        <div className="flex flex-col px-[16px] pb-[20px]">
          {/* In the lobby — benign "Waiting" + "Suspected threats" sub-sections */}
          {hasLobbyGuests && (lobby.length > 0 || lobbySuspectsShown.length > 0) && (
            <>
              <MvpSectionHeader
                title={`In the lobby (${lobby.length + lobbySuspectsShown.length})`}
                isExpanded={lobbyExpanded}
                onToggle={() => setLobbyExpanded(!lobbyExpanded)}
              />
              {lobbyExpanded && (
                <>
                  {lobby.length > 0 && (
                    <>
                      <MvpSubSectionHeader title={`Waiting (${lobby.length})`} action="Admit all" onAction={() => lobby.forEach(admit)} />
                      {lobby.map((p) => (
                        <LobbyRow key={p.id} participant={p} onSelect={() => setSheetGuest(p)} />
                      ))}
                    </>
                  )}
                  {lobbySuspectsShown.length > 0 && (
                    <>
                      <MvpSubSectionHeader title={`Suspected threats (${lobbySuspectsShown.length})`} />
                      {lobbySuspectsShown.map((p) => (
                        <LobbyRow key={p.id} participant={p} onSelect={() => setSheetGuest(p)} />
                      ))}
                    </>
                  )}
                </>
              )}
            </>
          )}

          {/* In the meeting */}
          <MvpSectionHeader
            title={`In the meeting (${totalMeeting})`}
            isExpanded={meetingExpanded}
            onToggle={() => setMeetingExpanded(!meetingExpanded)}
          />
          {meetingExpanded && (
            <>
              {sortedVerifiedUsers.map((p) => (
                <MvpParticipantRow key={p.id} participant={p} handRaisePosition={handRaiseMap.get(p.id)} onLongPress={() => openOptions(p)} />
              ))}
              {/* Admitted suspected threats — retained here with the scam badge. */}
              {admittedSuspects.map((p) => (
                <MvpParticipantRow key={p.id} participant={p} onLongPress={() => openOptions(p)} />
              ))}
              {MVP_AGENTS.length > 0 && (
                <>
                  <MvpSubSectionHeader title={`Agents and bots (${MVP_AGENTS.length})`} />
                  {MVP_AGENTS.map((p) => (
                    <MvpParticipantRow key={p.id} participant={p} onLongPress={() => openOptions(p)} />
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </MultitaskingPanel>

      {/* Participant options sheet — opens on long-press of an "In the meeting" row. */}
      <ParticipantOptionsSheet
        open={!!optionsFor}
        onClose={() => setOptionsFor(null)}
        id={optionsFor?.id ?? ""}
        name={optionsFor?.name ?? ""}
        badge={optionsFor?.badge}
      />

      {/* Lobby admit/deny sheet (Figma POR 1170:32638) — opens on row tap. */}
      <BottomSheet open={!!sheetGuest} onClose={() => setSheetGuest(null)} ariaLabel="Lobby guest" className="rounded-t-[14px] pb-[20px]">
        <div className="relative flex items-center justify-center h-[44px] px-[16px]">
          <h3 className="text-fy27-text-primary text-[17px] font-medium leading-[22px] tracking-[-0.41px] truncate px-[40px]" style={{ fontFamily: "var(--font-sf-pro)" }}>
            {sheetGuest?.name}
          </h3>
          <button onClick={() => setSheetGuest(null)} aria-label="Close" className="absolute right-[16px] size-[24px] grid place-items-center text-fy27-icon-primary active:opacity-60 transition-opacity">
            <svg className="size-[20px]" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
        <button
          onClick={() => { if (sheetGuest) admit(sheetGuest); setSheetGuest(null); }}
          className="flex items-center gap-[20px] w-full px-[20px] py-[12px] text-left active:opacity-60 transition-opacity"
          style={{ fontFamily: "var(--font-sf-pro)" }}
        >
          <span className="size-[24px] grid place-items-center shrink-0 text-fy27-icon-primary">
            <svg className="size-[20px]" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          <span className="text-[17px] leading-[22px] tracking-[-0.41px] text-fy27-text-primary">Admit</span>
        </button>
        <button
          onClick={() => { if (sheetGuest) setDeniedIds((prev) => [...prev, sheetGuest.id]); setSheetGuest(null); }}
          className="flex items-center gap-[20px] w-full px-[20px] py-[12px] text-left active:opacity-60 transition-opacity"
          style={{ fontFamily: "var(--font-sf-pro)" }}
        >
          <span className="size-[24px] grid place-items-center shrink-0 text-fy27-icon-primary">
            <svg className="size-[20px]" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </span>
          <span className="text-[17px] leading-[22px] tracking-[-0.41px] text-fy27-text-primary">Deny</span>
        </button>
      </BottomSheet>
      </>
    );
  }

  return (
    <div
      className="flex-shrink-0 backdrop-blur-[4px] bg-[rgba(24,24,24,0.98)] rounded-tl-[20px] rounded-tr-[20px] flex flex-col shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)] relative"
      style={{ height: "65vh" }}
    >
      {/* ── Header ── */}
      <div className="flex-shrink-0 flex items-center justify-between h-[62px] px-4 relative">
        {/* Back */}
        <GlassButton onClick={onClose}>
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p3dc95180} fill="white" />
          </svg>
        </GlassButton>

        {/* Title */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] text-[17px] text-center text-white tracking-[-0.24px] whitespace-nowrap">
          <p className="leading-[20px]">Participants</p>
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-[10px]">
          <GlassButton>
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p2e9d8000} fill="white" />
            </svg>
          </GlassButton>
          <GlassButton onClick={() => setShowActionsMenu(true)}>
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p2f3d9200} fill="white" />
            </svg>
          </GlassButton>
        </div>
      </div>

      {/* ── Scrollable content ── */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-start px-[12px] pt-[0px] pb-[20px]">

          {/* ===== IN THE LOBBY ===== */}
          {hasLobbyGuests && (
            <>
              <SectionHeader
                title={`In the lobby (${lobbyVerifiedUsers.length})`}
                isExpanded={lobbyExpanded}
                onToggle={() => setLobbyExpanded(!lobbyExpanded)}
              />

              {lobbyExpanded && lobbyVerifiedUsers.length > 0 && (
                <div className="flex flex-col items-center relative shrink-0 w-full">
                  <div className="flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                    <SubSectionHeader
                      title={`Verified users (${lobbyVerifiedUsers.length})`}
                      rightAction={<AdmitAllButton />}
                    />
                    <CardWrapper>
                      {lobbyVerifiedUsers.map((p) => (
                        <ParticipantRow key={p.id} participant={p} />
                      ))}
                    </CardWrapper>
                  </div>
                </div>
              )}

              {/* 20px spacing below lobby accordion */}
              <div className="h-[20px] w-full shrink-0" />
            </>
          )}

          {/* ===== IN THE MEETING ===== */}
          <SectionHeader
            title={`In the meeting (${totalMeeting})`}
            isExpanded={meetingExpanded}
            onToggle={() => setMeetingExpanded(!meetingExpanded)}
          />

          {meetingExpanded && (
            <>
              {/* Verified users */}
              {sortedVerifiedUsers.length > 0 && (
                <div className="flex flex-col items-center relative shrink-0 w-full">
                  <div className="flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                    <SubSectionHeader
                      title={`Verified users (${sortedVerifiedUsers.length})`}
                    />
                    <CardWrapper>
                      {sortedVerifiedUsers.map((p) => (
                        <ParticipantRow key={p.id} participant={p} handRaisePosition={handRaiseMap.get(p.id)} />
                      ))}
                    </CardWrapper>
                  </div>
                </div>
              )}

              {/* Suspicious users */}
              {meetingSuspiciousUsers.length > 0 && (
                <div className="flex flex-col items-center relative shrink-0 w-full">
                  <div className="flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                    <SubSectionHeader
                      title={`Agents and bots (${meetingSuspiciousUsers.length})`}
                    />
                    <CardWrapper>
                      {meetingSuspiciousUsers.map((p) => (
                        <ParticipantRow key={p.id} participant={p} />
                      ))}
                    </CardWrapper>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Divider above bottom nav */}
      <div className="h-[1px] bg-[#323232] flex-shrink-0" />

      {/* Bottom spacer */}
      <div className="flex-shrink-0 h-[94px] bg-[rgba(24,24,24,0.98)]" />

    </div>
  );
}