import type { ChatMessage } from "@/app/components/chat/useChatSend";
import imgBabak from "figma:asset/6900c5f1ebcee87405a464dc927c93633e66e145.png";
import imgMiguel from "figma:asset/685fc6dc030aab2cbea5b15f523d9ce42c11d689.png";
import imgJessica from "figma:asset/3b6bf95da1f13af67c0b3a5e3c9534b640591ce5.png";
import imgRay from "figma:asset/a55a7173204f1d7f74adab6c38113bc9eedbb180.png";
import imgSarah from "figma:asset/503fddd74dcc978ba951b5c79ebe96b95453b1eb.png";
import imgThumbsUp from "figma:asset/b7bdd4e332f1134cea6b347137499723925005ef.png";
import imgRedHeart from "figma:asset/59520d231a783bb20cd3d4f98dfaec2de858b210.png";
import imgClappingHands from "figma:asset/cebe50ea4c5d9b448454b19dd79074e5c5b4d898.png";

/**
 * Seed for the in-meeting chat thread. Lives in context (ActiveMeetingContext)
 * so the in-meeting ChatPanel and the "Marketing Team Sync" DM page share one
 * live thread.
 */
export const MEETING_CHAT_SEED: ChatMessage[] = [
  { id: 1000001, sender: "Sarah J.", text: "Hi Aadi!", time: "2:34 PM", avatar: imgBabak, isMe: false },
  { id: 1000002, sender: "Babak S.", text: "I wasn't sure if you were feeling ready yet. I know there was a lot of feedback coming of last week's review.", time: "2:35 PM", avatar: imgSarah, isMe: false },
  { id: 1000003, sender: "You", text: "The client wasn't expecting us to be ready until middle of October.", time: "2:36 PM", avatar: "", isMe: true },
  { id: 1000004, sender: "Miguel S.", text: "That's great news! So we have more time to polish the design?", time: "2:37 PM", avatar: imgMiguel, isMe: false },
  { id: 1000005, sender: "Babak S.", text: "I think we should focus on the mobile experience first. That's what the stakeholders mentioned last time.", time: "2:38 PM", avatar: imgSarah, isMe: false },
  { id: 1000006, sender: "You", text: "Agreed. Let's prioritize mobile and make sure the split screen interactions are smooth.", time: "2:39 PM", avatar: "", isMe: true, reactions: [
    { emoji: imgThumbsUp, label: "Thumbs up", count: 3, reactedByMe: false },
  ] },
  { id: 1000007, sender: "Jessica K.", text: "Should we schedule a design review for next week?", time: "2:40 PM", avatar: imgJessica, isMe: false },
  { id: 1000008, sender: "Sarah J.", text: "That works for me. Tuesday afternoon?", time: "2:41 PM", avatar: imgBabak, isMe: false },
  { id: 1000009, sender: "Babak S.", text: "I have a conflict on Tuesday. Can we do Wednesday morning instead?", time: "2:42 PM", avatar: imgSarah, isMe: false },
  { id: 1000010, sender: "You", text: "Wednesday at 10am works for everyone?", time: "2:43 PM", avatar: "", isMe: true },
  { id: 1000011, sender: "Ray T.", text: "Perfect timing! I'll send out the calendar invite.", time: "2:44 PM", avatar: imgRay, isMe: false, reactions: [
    { emoji: imgThumbsUp, label: "Thumbs up", count: 2, reactedByMe: true },
    { emoji: imgRedHeart, label: "Red heart", count: 1, reactedByMe: false },
  ] },
  { id: 1000012, sender: "Miguel S.", text: "Can someone share the latest Figma file? I want to review the components before the meeting.", time: "2:45 PM", avatar: imgMiguel, isMe: false },
  { id: 1000013, sender: "You", text: "I'll post the link in the team channel right after this call.", time: "2:46 PM", avatar: "", isMe: true },
  { id: 1000014, sender: "Babak S.", text: "Thanks! Also, did we finalize the color palette for the dark mode?", time: "2:47 PM", avatar: imgSarah, isMe: false },
  { id: 1000015, sender: "Jessica K.", text: "Yes, we went with the purple accent (#878BFB) for active states. It's all documented in the design system.", time: "2:48 PM", avatar: imgJessica, isMe: false, reactions: [
    { emoji: imgClappingHands, label: "Clapping hands", count: 2, reactedByMe: false },
  ] },
];
