import React, { useMemo, useRef } from "react";
import { useNavigate } from "react-router";
import { useL0Dock } from "@/app/lib/useDockScroll";
import { CopilotLogo, ComposeIcon } from "@/app/components/icons/CopilotLogo";
import { PageHeader, HeaderIconButton, FilterPills, ListRow, type FilterPill } from "@/app/components/PageChrome";

/* ─── Avatars — EXACT assets extracted from the Chat frame (817:100713) ───
   Each PNG is the per-row avatar rendered in Figma: real face photo, the
   stacked pair (Design x Development), the group/brand glyph, etc. The
   screenshot already bakes in the composed look — we just render it 1:1. */
/* Ray + Beth: clean Fluent faces (same persona, no baked presence dot). */
import avRay from "@/assets/figma/dm/avatars/ray-tanaka.png";
import avBeth from "@/assets/figma/dm/avatars/beth-davies.png";
import avDream from "@/assets/figma/chat/avatars/dream.png";
import avDxd from "@/assets/figma/chat/avatars/dxd.png";
import avAi from "@/assets/figma/chat/avatars/ai.png";
import avAadi1 from "@/assets/figma/chat/avatars/aadi1.png";
import avDaisy2 from "@/assets/figma/chat/avatars/daisy2.png";
import avKayo from "@/assets/figma/dm/avatars/kayo-miwa.png";
import avKat from "@/assets/figma/dm/avatars/kat-larsson.png";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import { DM_THREADS } from "@/app/lib/dmData";
import type { ChatMessage } from "@/app/components/chat/useChatSend";

/* Fluent Calendar (Regular 24) glyph — the EXACT path used by the Calendar tab
   in AppBottomNav (FLUENT.calendarRegular). Kept in sync with that source. */
const CALENDAR_REGULAR =
  "M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM19.5 8.5H4.5V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V8.5ZM7.75 14.5C8.44036 14.5 9 15.0596 9 15.75C9 16.4404 8.44036 17 7.75 17C7.05964 17 6.5 16.4404 6.5 15.75C6.5 15.0596 7.05964 14.5 7.75 14.5ZM12 14.5C12.6904 14.5 13.25 15.0596 13.25 15.75C13.25 16.4404 12.6904 17 12 17C11.3096 17 10.75 16.4404 10.75 15.75C10.75 15.0596 11.3096 14.5 12 14.5ZM7.75 10.5C8.44036 10.5 9 11.0596 9 11.75C9 12.4404 8.44036 13 7.75 13C7.05964 13 6.5 12.4404 6.5 11.75C6.5 11.0596 7.05964 10.5 7.75 10.5ZM12 10.5C12.6904 10.5 13.25 11.0596 13.25 11.75C13.25 12.4404 12.6904 13 12 13C11.3096 13 10.75 12.4404 10.75 11.75C10.75 11.0596 11.3096 10.5 12 10.5ZM16.25 10.5C16.9404 10.5 17.5 11.0596 17.5 11.75C17.5 12.4404 16.9404 13 16.25 13C15.5596 13 15 12.4404 15 11.75C15 11.0596 15.5596 10.5 16.25 10.5ZM17.75 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V7H19.5V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5Z";

/* ─── Data ─── */

type AvatarKind =
  | { type: "image"; src: string; squircle?: boolean }
  | { type: "calendar" };

interface Conversation {
  id: string;
  name: string;
  preview: string;
  time: string;
  unread?: boolean;
  avatar: AvatarKind;
  presence?: boolean;
}

const CONVERSATIONS: Conversation[] = [
  { id: "ray", name: "Ray Tanaka", preview: "Louisa will send the initial list of questions", time: "1:47 PM", unread: true, avatar: { type: "image", src: avRay }, presence: true },
  { id: "kat", name: "Kat Larsson", preview: "Sounds good — see you there.", time: "1:43 PM", avatar: { type: "image", src: avKat }, presence: true },
  { id: "beth", name: "Beth Davies", preview: "Thanks, that would be nice.", time: "1:43 PM", avatar: { type: "image", src: avBeth }, presence: true },
  { id: "dream", name: "Dream Team", preview: "Erika: Happy to have you back, hope you had a restful time off.", time: "12:00 PM", avatar: { type: "image", src: avDream } },
  { id: "dxd", name: "Design x Development ", preview: "Babak: I asked the client to send the new ones", time: "1:58 PM", avatar: { type: "image", src: avDxd } },
  { id: "ai", name: "Project AI prototypes", preview: "Northwind traders", time: "1:55 PM", avatar: { type: "image", src: avAi, squircle: true } },
  { id: "mkt", name: "Marketing Team Sync", preview: "Kayo: So glad to hear that the review went well. Can’t wait to hear next steps.", time: "10:43 AM", avatar: { type: "calendar" } },
  { id: "design", name: "Kayo <> Udayan", preview: "Kayo: So glad to hear that the review went well. Can’t wait to hear next steps.", time: "10:43 AM", avatar: { type: "image", src: avKayo }, presence: true },
  { id: "aadi1", name: "Aadi Kapoor", preview: "Thanks, that would be nice.", time: "1:43 PM", avatar: { type: "image", src: avAadi1 }, presence: true },
  { id: "daisy2", name: "Daisy Philips", preview: "Thanks, that would be nice.", time: "1:43 PM", avatar: { type: "image", src: avDaisy2 }, presence: true },
  { id: "explore", name: "Design exploration", preview: "Daniella: So glad to hear that the review went well. Can’t wait to hear next steps.", time: "10:43 AM", avatar: { type: "calendar" } },
];

/* Group conversations show a "FirstName: " prefix on the last-message preview
   (Teams convention); 1:1 incoming shows the bare message. `mkt` is the live
   in-meeting thread, the rest are seeded DM threads. */
const GROUP_IDS = new Set(["mkt", "dream", "dxd", "explore", "ai"]);

/** Subtitle = the truncated last message of the associated DM thread, kept in
 *  sync as messages are sent (so e.g. replying in a DM updates its list row). */
function lastMessagePreview(msgs: ChatMessage[] | undefined, isGroup: boolean): string {
  if (!msgs || msgs.length === 0) return "";
  const m = msgs[msgs.length - 1];
  const body = m.text && m.text.trim() ? m.text.trim() : m.media && m.media.length ? "Sent a photo" : "";
  if (!body) return "";
  if (m.isMe) return `You: ${body}`;
  if (isGroup) return `${m.sender.split(" ")[0]}: ${body}`;
  return body;
}

/* Filter slices — from the frame (iOS Tabs 879:26585): Catchup, Mentions,
   Threads (selected, dot), Sections — then the row overflows/scrolls (the frame
   pads to ~564px with placeholder "Catchup" pills). To keep the row genuinely
   scrollable without repeating a label, the two trailing placeholders are
   distinct real Teams-chat slices (Pinned, Muted). */
const FILTERS: FilterPill[] = [
  { label: "Catchup" },
  { label: "Mentions" },
  { label: "Threads", dot: true },
  { label: "Sections" },
  { label: "Pinned" },
  { label: "Muted" },
];

/* ─── Avatar (52px box) ─── */

function PresenceDot() {
  return <span className="absolute bottom-0 right-0 size-[16px] rounded-full bg-[#21a366] border-2 border-fy27-surface" />;
}

function Avatar({ c }: { c: Conversation }) {
  const a = c.avatar;
  switch (a.type) {
    case "image":
      return (
        <div className="relative shrink-0 size-[52px]">
          <img
            src={a.src}
            alt=""
            className={`size-[52px] object-cover ${a.squircle ? "rounded-[14px]" : "rounded-full"}`}
          />
          {c.presence && <PresenceDot />}
        </div>
      );
    case "calendar":
      return (
        <div className="relative shrink-0 size-[52px] rounded-full bg-fy27-surface-raised flex items-center justify-center">
          <svg className="size-[24px] block" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d={CALENDAR_REGULAR} fill="var(--fy27-text-primary)" />
          </svg>
        </div>
      );
  }
}

function ConversationRow({ c, onOpen }: { c: Conversation; onOpen: (id: string) => void }) {
  return (
    <ListRow unread={c.unread} avatar={<Avatar c={c} />} onClick={() => onOpen(c.id)}>
      {/* Two-column row (Figma 879:26367): name + preview share the left column, so
          BOTH truncate at the column edge and never run under the timestamp. */}
      <div className="flex items-start gap-[8px]">
        <div className="flex-1 min-w-0">
          <p
            className="truncate text-[17px]"
            style={{ fontWeight: c.unread ? 700 : 600, lineHeight: "22px", letterSpacing: "-0.43px", color: c.unread ? "var(--fy27-text-primary)" : "var(--fy27-text-primary)" }}
          >
            {c.name}
          </p>
          <p className="truncate text-[15px] text-fy27-text-secondary" style={{ lineHeight: "20px", letterSpacing: "-0.23px" }}>
            {c.preview}
          </p>
        </div>
        <span
          className="shrink-0 text-[12px] pt-[3px]"
          style={{ lineHeight: "16px", color: c.unread ? "var(--fy27-text-primary)" : "var(--fy27-text-secondary)" }}
        >
          {c.time}
        </span>
      </div>
    </ListRow>
  );
}

/* ─── Page ─── */

export function ChatPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  useL0Dock(scrollRef);
  const navigate = useNavigate();
  const meeting = useActiveMeeting();
  // Only the Catchup slice is interactive for now → opens the catch-up surface.
  const filters = useMemo(
    () => FILTERS.map((f) => (f.label === "Catchup" ? { ...f, onClick: () => navigate("/catchup") } : f)),
    [navigate],
  );

  // Each row's subtitle reflects the LIVE last message of its DM thread (the
  // `mkt` row mirrors the in-meeting chat; the rest read their seeded thread).
  const conversations = useMemo(
    () =>
      CONVERSATIONS.map((c) => {
        const msgs = c.id === "mkt" ? meeting.chatMessages : DM_THREADS[c.id]?.messages;
        const preview = lastMessagePreview(msgs, GROUP_IDS.has(c.id)) || c.preview;
        return preview === c.preview ? c : { ...c, preview };
      }),
    [meeting.chatMessages],
  );

  return (
    <div className="w-full h-full bg-fy27-surface flex flex-col relative overflow-hidden" style={{ fontFamily: "var(--font-sf-pro)" }}>
      <PageHeader
        title="Chat"
        actions={
          <>
            <HeaderIconButton label="New chat">
              <ComposeIcon size={24} color="var(--fy27-text-primary)" />
            </HeaderIconButton>
            <HeaderIconButton label="Copilot">
              <CopilotLogo size={24} />
            </HeaderIconButton>
          </>
        }
      />

      <FilterPills items={filters} />

      {/* Conversation list (drives L0 dock collapse) */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        {conversations.map((c) => (
          <ConversationRow key={c.id} c={c} onOpen={(id) => navigate(`/dm/${id}`)} />
        ))}
        <div className="h-[120px]" />
      </div>
    </div>
  );
}
