import React, { useMemo, useRef } from "react";
import { useNavigate } from "react-router";
import { useL0Dock } from "@/app/lib/useDockScroll";
import { CopilotLogo } from "@/app/components/icons/CopilotLogo";
import { PageHeader, HeaderIconButton, FilterPills, ListRow, type FilterPill } from "@/app/components/PageChrome";
import avatar1 from "@/assets/figma/activity/avatars/row1.png";
import avatar2 from "@/assets/figma/activity/avatars/row2.png";
import avatar3 from "@/assets/figma/activity/avatars/row3.png";
import avatar4 from "@/assets/figma/activity/avatars/row4.png";
import avatar5 from "@/assets/figma/activity/avatars/row5.png";
import avatar6 from "@/assets/figma/activity/avatars/row6.png";
import avatar7 from "@/assets/figma/activity/avatars/row7.png";
import avatar8 from "@/assets/figma/activity/avatars/row8.png";
import avatar9 from "@/assets/figma/activity/avatars/row9.png";
import mentionBadge from "@/assets/figma/activity/mention.svg";
import channelBadge from "@/assets/figma/activity/channel.svg";
import heartBadge from "@/assets/figma/activity/heart.png";

type Kind = "mention" | "reaction" | "post";

interface ActivityItem {
  id: string;
  avatar: string;
  title: string; // bold action line
  preview: string; // the message
  context: string; // where it happened
  time: string;
  kind: Kind;
  unread?: boolean;
}

const ACTIVITY: ActivityItem[] = [
  { id: "1", avatar: avatar1, title: "Ray mentioned you", preview: "Louisa will send the initial list of questions", context: "Chat with Ray", time: "1:47 PM", kind: "mention", unread: true },
  { id: "2", avatar: avatar2, title: "Daisy mentioned you", preview: "Louisa will send the initial list of questions", context: "Chat with Daisy", time: "1:43 PM", kind: "mention" },
  { id: "3", avatar: avatar3, title: "Will posted", preview: "I’ve attached the file we discussed...", context: "Van Arsdel > Marketing", time: "3:08 PM", kind: "post" },
  { id: "4", avatar: avatar4, title: "Sarah +2 reacted to your message", preview: "Any cool sights from your trip?", context: "Dream Team", time: "3:08 PM", kind: "reaction" },
  { id: "5", avatar: avatar5, title: "Chris posted an announcement", preview: "We’re going live with our latest pro...", context: "Van Arsdel > Marketing", time: "3:08 PM", kind: "post" },
  { id: "6", avatar: avatar6, title: "Darren mentioned you", preview: "Louisa will send the initial list of questions", context: "Chat with Ray", time: "1:47 PM", kind: "mention" },
  { id: "7", avatar: avatar7, title: "Daisy mentioned you", preview: "Louisa will send the initial list of questions", context: "Chat with Daisy", time: "1:43 PM", kind: "mention" },
  { id: "8", avatar: avatar8, title: "Will posted", preview: "I’ve attached the file we discussed...", context: "Van Arsdel > Marketing", time: "3:08 PM", kind: "post" },
  { id: "9", avatar: avatar9, title: "Chris posted an announcement", preview: "We’re going live with our latest pro...", context: "Van Arsdel > Marketing", time: "3:08 PM", kind: "post" },
];

const FILTERS: FilterPill[] = [
  { label: "Unread" },
  { label: "Mentions" },
  { label: "Replies" },
  { label: "Following" },
  { label: "Catchup" },
];

// Cutout (Figma 817:52080): 20px colored circle with the white ring drawn on
// the OUTSIDE (ring → box-shadow, so the colored stays a full 20px and the
// white sits around it). Glyphs kept small (frame-accurate ~12px). No
// object-contain — the tight-cropped SVGs would otherwise letterbox-shrink.
const BADGE: Record<Kind, { bg: string; src: string; glyphSize: number }> = {
  mention: { bg: "#cc4a31", src: mentionBadge, glyphSize: 12.5 },
  post: { bg: "var(--fy27-brand-primary)", src: channelBadge, glyphSize: 12 },
  reaction: { bg: "#ffeaee", src: heartBadge, glyphSize: 14 },
};

function KindBadge({ kind }: { kind: Kind }) {
  const { bg, src, glyphSize } = BADGE[kind];
  return (
    <span
      className="absolute bottom-0 right-0 size-[20px] rounded-full flex items-center justify-center ring-2 ring-white"
      style={{ background: bg }}
    >
      <img src={src} alt="" style={{ width: glyphSize, height: glyphSize }} className="block" />
    </span>
  );
}

function ActivityRow({ a }: { a: ActivityItem }) {
  return (
    <ListRow
      unread={a.unread}
      avatar={
        <div className="relative shrink-0 size-[52px]">
          <img src={a.avatar} alt="" className="size-[52px] rounded-full object-cover" />
          <KindBadge kind={a.kind} />
        </div>
      }
    >
      {/* Two-column row (Figma 879:26367): title + preview + context share the left
          column, so they truncate at the column edge and never run under the timestamp. */}
      <div className="flex items-start gap-[8px]">
        <div className="flex-1 min-w-0">
          <p
            className="truncate text-[17px] text-fy27-text-primary"
            style={{ fontWeight: a.unread ? 700 : 600, lineHeight: "22px", letterSpacing: "-0.43px" }}
          >
            {a.title}
          </p>
          <p className="truncate text-fy27-text-secondary text-[15px]" style={{ lineHeight: "20px", letterSpacing: "-0.23px" }}>
            {a.preview}
          </p>
          <p className="truncate text-[#808080] text-[13px]" style={{ lineHeight: "18px", letterSpacing: "-0.08px" }}>
            {a.context}
          </p>
        </div>
        <span className="shrink-0 text-[#808080] text-[12px] pt-[3px]" style={{ lineHeight: "16px" }}>
          {a.time}
        </span>
      </div>
    </ListRow>
  );
}

/** L0 Activity feed — mentions, reactions, posts. */
export function ActivityPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  useL0Dock(scrollRef);
  const navigate = useNavigate();
  // Only the Catchup slice is interactive for now → opens the catch-up surface.
  const filters = useMemo(
    () => FILTERS.map((f) => (f.label === "Catchup" ? { ...f, onClick: () => navigate("/catchup") } : f)),
    [navigate],
  );

  return (
    <div className="w-full h-full bg-fy27-surface flex flex-col relative overflow-hidden" style={{ fontFamily: "var(--font-sf-pro)" }}>
      <PageHeader
        title="Activity"
        actions={
          <HeaderIconButton label="Copilot">
            <CopilotLogo size={24} />
          </HeaderIconButton>
        }
      />

      <FilterPills items={filters} />

      {/* Feed */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        {ACTIVITY.map((a) => (
          <ActivityRow key={a.id} a={a} />
        ))}
        <div className="h-[120px]" />
      </div>
    </div>
  );
}
