import type { ChatMessage } from "@/app/components/chat/useChatSend";

/* Avatars — re-imported from the same source ChatPage uses, so each DM thread's
   recipient name + face stay consistent with the conversation list. */
/* Ray + Beth use the clean Fluent faces (same persona, no baked green presence
   dot — the chat-frame ray.png/beth.png bake one in, which looked wrong on the
   bubble avatars). */
import avRay from "@/assets/figma/dm/avatars/ray-tanaka.png";
import avBeth from "@/assets/figma/dm/avatars/beth-davies.png";
import avDream from "@/assets/figma/chat/avatars/dream.png";
import avDxd from "@/assets/figma/chat/avatars/dxd.png";
import avAi from "@/assets/figma/chat/avatars/ai.png";
import avAadi1 from "@/assets/figma/chat/avatars/aadi1.png";
import avDaisy2 from "@/assets/figma/chat/avatars/daisy2.png";

/* Fluent-avatar faces for the Design x Development group members. */
import avBabak from "@/assets/figma/dm/avatars/babak-shammas.png";
import avCharlotte from "@/assets/figma/dm/avatars/charlotte-de-crum.png";
import avErika from "@/assets/figma/dm/avatars/erika-fuller.png";

/* Kayo Miwa — the 1:1 recipient for the "design" thread (real Fluent face). */
import avKayo from "@/assets/figma/dm/avatars/kayo-miwa.png";

/* Kat Larsson — 1:1 recipient for chat-list item 2 (clean Fluent face, no baked
   presence dot, unlike the old chat-frame daisy.png). */
import avKat from "@/assets/figma/dm/avatars/kat-larsson.png";

/* Design exploration group members (clean Fluent faces). */
import avDaniela from "@/assets/figma/dm/avatars/daniela-mandera.png";
import avMona from "@/assets/figma/dm/avatars/mona-kane.png";
import avCameron from "@/assets/figma/dm/avatars/cameron-evans.png";
import avElvia from "@/assets/figma/dm/avatars/elvia-atkins.png";

/* Project AI prototypes group members (clean Fluent faces). */
import avRobert from "@/assets/figma/dm/avatars/robert-tolbert.png";
import avLydia from "@/assets/figma/dm/avatars/lydia-bauer.png";
import avHenry from "@/assets/figma/dm/avatars/henry-brill.png";
import avCarlos from "@/assets/figma/dm/avatars/carlos-slattery.png";

/* "explore" row uses the calendar glyph in the list (no photo) —
   give its DM thread a neutral group face from the available avatar set. */
const avExplore = avAi;

/* Red-heart reaction emoji (3D Fluent). The fire reaction is a native Unicode
   glyph (🔥) rendered directly — ChatThread handles non-image emoji strings. */
import imgRedHeart from "figma:asset/59520d231a783bb20cd3d4f98dfaec2de858b210.png";

/**
 * Seeded 1:1 DM threads, keyed by the ChatPage CONVERSATIONS id (every NON-`mkt`
 * row). `mkt` (Marketing Team Sync) is intentionally absent — that page reads the
 * live in-meeting thread from ActiveMeetingContext instead.
 *
 * Recipient (incoming) messages carry the recipient's avatar; "You" (outgoing)
 * messages use avatar:"" and isMe:true.
 */
export const DM_THREADS: Record<
  string,
  {
    name: string;
    avatar: string;
    /** Group members who can reply (when present, the responder is a random member). */
    members?: { name: string; avatar: string }[];
    messages: ChatMessage[];
  }
> = {
  ray: {
    name: "Ray Tanaka",
    avatar: avRay,
    messages: [
      { id: 9101, sender: "Ray Tanaka", text: "Did you get a chance to look at the research brief?", time: "1:40 PM", avatar: avRay, isMe: false },
      { id: 9102, sender: "You", text: "Yes, going through it now. Looks solid.", time: "1:41 PM", avatar: "", isMe: true },
      { id: 9103, sender: "Ray Tanaka", text: "Louisa will send the initial list of questions this afternoon.", time: "1:47 PM", avatar: avRay, isMe: false },
      { id: 9104, sender: "You", text: "Perfect, I'll review them as soon as they land.", time: "1:48 PM", avatar: "", isMe: true },
    ],
  },
  kat: {
    name: "Kat Larsson",
    avatar: avKat,
    messages: [
      { id: 9201, sender: "You", text: "Want to grab coffee before the standup?", time: "1:39 PM", avatar: "", isMe: true },
      { id: 9202, sender: "Kat Larsson", text: "Yes! I could use a break.", time: "1:42 PM", avatar: avKat, isMe: false },
      { id: 9203, sender: "You", text: "Meet you in the kitchen in 5.", time: "1:42 PM", avatar: "", isMe: true },
      { id: 9204, sender: "Kat Larsson", text: "Sounds good — see you there.", time: "1:43 PM", avatar: avKat, isMe: false },
    ],
  },
  beth: {
    name: "Beth Davies",
    avatar: avBeth,
    messages: [
      { id: 9301, sender: "Beth Davies", text: "I pushed the latest mocks to the shared folder.", time: "1:30 PM", avatar: avBeth, isMe: false },
      { id: 9302, sender: "You", text: "Great, taking a look now.", time: "1:35 PM", avatar: "", isMe: true },
      { id: 9303, sender: "You", text: "The new empty state is so much clearer.", time: "1:36 PM", avatar: "", isMe: true },
      { id: 9304, sender: "Beth Davies", text: "Glad you like it! Want me to spec it out?", time: "1:41 PM", avatar: avBeth, isMe: false },
      { id: 9305, sender: "You", text: "That would be a big help.", time: "1:42 PM", avatar: "", isMe: true },
      { id: 9306, sender: "Beth Davies", text: "Thanks, that would be nice.", time: "1:43 PM", avatar: avBeth, isMe: false },
    ],
  },
  dream: {
    name: "Dream Team",
    avatar: avDream,
    members: [
      { name: "Babak Shammas", avatar: avBabak },
      { name: "Erika Fuller", avatar: avErika },
    ],
    messages: [
      { id: 9401, sender: "Erika Fuller", text: "Welcome back everyone! Hope you had a restful time off.", time: "11:55 AM", avatar: avErika, isMe: false },
      { id: 9402, sender: "You", text: "Good to be back. What did I miss?", time: "11:58 AM", avatar: "", isMe: true },
      { id: 9403, sender: "Babak Shammas", text: "We kicked off the new prototype track — I'll share notes after standup.", time: "12:00 PM", avatar: avBabak, isMe: false },
      { id: 9404, sender: "Erika Fuller", text: "And the client moved the review to next Wednesday, so we have breathing room.", time: "12:01 PM", avatar: avErika, isMe: false },
      { id: 9405, sender: "You", text: "Perfect timing. I'll pick the mobile flows back up.", time: "12:03 PM", avatar: "", isMe: true },
    ],
  },
  dxd: {
    name: "Design x Development",
    avatar: avDxd,
    members: [
      { name: "Babak Shammas", avatar: avBabak },
      { name: "Charlotte de Crum", avatar: avCharlotte },
    ],
    messages: [
      { id: 9501, sender: "Charlotte de Crum", text: "Morning! Are the updated assets ready for handoff?", time: "1:50 PM", avatar: avCharlotte, isMe: false },
      { id: 9502, sender: "Babak Shammas", text: "I asked the client to send the new ones.", time: "1:58 PM", avatar: avBabak, isMe: false },
      { id: 9503, sender: "You", text: "Great — flag me the moment they land and I'll start the build.", time: "1:59 PM", avatar: "", isMe: true },
      { id: 9504, sender: "Charlotte de Crum", text: "Will do. I'll drop the redlines in the channel too.", time: "2:01 PM", avatar: avCharlotte, isMe: false },
      { id: 9505, sender: "Babak Shammas", text: "Thanks both. Let's sync after lunch if anything's blocking.", time: "2:03 PM", avatar: avBabak, isMe: false },
    ],
  },
  ai: {
    name: "Project AI prototypes",
    avatar: avAi,
    members: [
      { name: "Robert Tolbert", avatar: avRobert },
      { name: "Lydia Bauer", avatar: avLydia },
      { name: "Henry Brill", avatar: avHenry },
      { name: "Carlos Slattery", avatar: avCarlos },
    ],
    messages: [
      { id: 9601, sender: "Robert Tolbert", text: "The Northwind Traders demo is looking sharp — latency is way down.", time: "1:50 PM", avatar: avRobert, isMe: false },
      { id: 9602, sender: "Lydia Bauer", text: "Agreed. The streaming responses feel almost instant now.", time: "1:52 PM", avatar: avLydia, isMe: false },
      { id: 9603, sender: "You", text: "Nice work. Did we ever resolve the token-limit edge case?", time: "1:53 PM", avatar: "", isMe: true },
      { id: 9604, sender: "Henry Brill", text: "Mostly — Carlos added a graceful truncation fallback this morning.", time: "1:54 PM", avatar: avHenry, isMe: false },
      { id: 9605, sender: "Carlos Slattery", text: "Yep, it trims the oldest turns first and warns the user. I'll push it after lunch.", time: "1:55 PM", avatar: avCarlos, isMe: false },
      { id: 9606, sender: "You", text: "Perfect. Let's lock the demo for the review.", time: "1:56 PM", avatar: "", isMe: true },
    ],
  },
  design: {
    name: "Kayo <> Udayan",
    avatar: avKayo,
    messages: [
      { id: 9701, sender: "Kayo Miwa", text: "Hey Udayan — the design review went really well this morning.", time: "10:36 AM", avatar: avKayo, isMe: false },
      { id: 9702, sender: "You", text: "That's great to hear! Did the new agenda flow land?", time: "10:38 AM", avatar: "", isMe: true },
      { id: 9703, sender: "Kayo Miwa", text: "It did. They especially liked the segmented timer.", time: "10:40 AM", avatar: avKayo, isMe: false },
      { id: 9704, sender: "You", text: "Nice. I'll polish the immersive mode before the next round.", time: "10:42 AM", avatar: "", isMe: true },
      { id: 9705, sender: "Kayo Miwa", text: "So glad to hear that the review went well. Can't wait to hear next steps.", time: "10:43 AM", avatar: avKayo, isMe: false },
      { id: 9706, sender: "You", text: "I'll write up the recap and share it with you shortly.", time: "10:45 AM", avatar: "", isMe: true },
    ],
  },
  aadi1: {
    name: "Aadi Kapoor",
    avatar: avAadi1,
    messages: [
      { id: 9801, sender: "Aadi Kapoor", text: "Can you join the sync at 3?", time: "1:38 PM", avatar: avAadi1, isMe: false },
      { id: 9802, sender: "You", text: "Yep, I'll be there.", time: "1:40 PM", avatar: "", isMe: true },
      { id: 9803, sender: "Aadi Kapoor", text: "Thanks, that would be nice.", time: "1:43 PM", avatar: avAadi1, isMe: false },
    ],
  },
  daisy2: {
    name: "Daisy Philips",
    avatar: avDaisy2,
    messages: [
      {
        id: 9901,
        sender: "Daisy Philips",
        text: "Found that ramen place we talked about. Want to go this week?",
        time: "1:35 PM",
        avatar: avDaisy2,
        isMe: false,
        reactions: [{ emoji: "🔥", label: "Fire", count: 1, reactedByMe: true }],
      },
      {
        id: 9903,
        sender: "You",
        text: "Yes! That sounds amazing — let's lock it in.",
        time: "1:38 PM",
        avatar: "",
        isMe: true,
        reactions: [{ emoji: imgRedHeart, label: "Red heart", count: 1, reactedByMe: false }],
      },
      { id: 9904, sender: "Daisy Philips", text: "Perfect, I'll book us a table.", time: "1:43 PM", avatar: avDaisy2, isMe: false },
    ],
  },
  explore: {
    name: "Design exploration",
    avatar: avExplore,
    members: [
      { name: "Daniela Mandera", avatar: avDaniela },
      { name: "Mona Kane", avatar: avMona },
      { name: "Cameron Evans", avatar: avCameron },
      { name: "Elvia Atkins", avatar: avElvia },
    ],
    messages: [
      { id: 9111, sender: "Daniela Mandera", text: "Posted three new directions to explore on the board.", time: "10:30 AM", avatar: avDaniela, isMe: false },
      { id: 9112, sender: "Mona Kane", text: "Direction two feels the most on-brand to me.", time: "10:33 AM", avatar: avMona, isMe: false },
      { id: 9113, sender: "You", text: "Same — the typography in two is much cleaner.", time: "10:35 AM", avatar: "", isMe: true },
      { id: 9114, sender: "Cameron Evans", text: "I can push two and three further if we want a side-by-side.", time: "10:38 AM", avatar: avCameron, isMe: false },
      { id: 9115, sender: "Elvia Atkins", text: "Let's do that — I'll prep the research questions for testing.", time: "10:40 AM", avatar: avElvia, isMe: false },
      { id: 9116, sender: "You", text: "Great. I'll pull together the next round by Thursday.", time: "10:43 AM", avatar: "", isMe: true },
    ],
  },
};
