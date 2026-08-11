import { useCallback, useRef } from "react";

/** The shared chat message shape used by the meeting chat AND the DM pages. */
export interface ChatMessage {
  id: number;
  sender: string;
  text: string;
  time: string;
  avatar: string;
  isMe: boolean;
  media?: { url: string; type: string }[];
  isTypingIndicator?: boolean;
  reactions?: { emoji: string; label: string; count: number; reactedByMe: boolean }[];
}

let messageIdCounter = 0;
/** Timestamp-based unique id (matches the meeting chat's id scheme). */
export const generateUniqueId = () => Date.now() * 1000 + ++messageIdCounter;
const nowLabel = () => new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

export interface UseChatSendOpts {
  /** Current message list (for building the LLM history). */
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  /** Who replies — a random participant for the meeting, the fixed recipient for a DM. */
  getResponder: () => { name: string; avatar: string };
  /** Fetch the LLM reply (sendChatMessage for the meeting, sendDMMessage for a DM). */
  fetchReply: (
    userText: string,
    responderName: string,
    history: Array<{ sender: string; text: string; isMe: boolean }>,
  ) => Promise<string>;
  /** Fallback reply text if the LLM call fails. */
  fallback: (userText: string) => string;
  /** Optional typing-state callback (the meeting panel uses it for UI). */
  onTypingChange?: (typing: boolean) => void;
}

/**
 * Shared "send a chat message" logic, extracted verbatim from the in-meeting
 * `ChatPanel`: append the user's message, after 500ms show a typing indicator
 * from the responder, call the LLM, then replace the indicator with the reply
 * (or a contextual fallback on error). Reused by the meeting chat and the DM
 * pages so the behavior and LLM wiring are identical.
 */
export function useChatSend({
  messages,
  setMessages,
  getResponder,
  fetchReply,
  fallback,
  onTypingChange,
}: UseChatSendOpts) {
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback(
    (text: string, media?: { url: string; type: string }[]) => {
      if (!text.trim() && !(media && media.length > 0)) return;

      const userMessage: ChatMessage = {
        id: generateUniqueId(),
        sender: "You",
        text,
        time: nowLabel(),
        avatar: "",
        isMe: true,
        media,
      };
      setMessages((prev) => [...prev, userMessage]);

      // History = the messages before this send (the user text is appended by the LLM helper).
      const history = messages.slice(-10).map((m) => ({ sender: m.sender, text: m.text, isMe: m.isMe }));

      setTimeout(() => {
        onTypingChange?.(true);
        const responder = getResponder();

        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

        // Remove any stale typing indicator, then add a fresh one.
        setMessages((prev) => [
          ...prev.filter((m) => !m.isTypingIndicator),
          { id: generateUniqueId(), sender: responder.name, text: "", time: "", avatar: responder.avatar, isMe: false, isTypingIndicator: true },
        ]);

        fetchReply(text, responder.name, history)
          .then((reply) => {
            setMessages((prev) => [
              ...prev.filter((m) => !m.isTypingIndicator),
              { id: generateUniqueId(), sender: responder.name, text: reply, time: nowLabel(), avatar: responder.avatar, isMe: false },
            ]);
            onTypingChange?.(false);
          })
          .catch(() => {
            setMessages((prev) => [
              ...prev.filter((m) => !m.isTypingIndicator),
              { id: generateUniqueId(), sender: responder.name, text: fallback(text), time: nowLabel(), avatar: responder.avatar, isMe: false },
            ]);
            onTypingChange?.(false);
          });
      }, 500);
    },
    [messages, setMessages, getResponder, fetchReply, fallback, onTypingChange],
  );
}
