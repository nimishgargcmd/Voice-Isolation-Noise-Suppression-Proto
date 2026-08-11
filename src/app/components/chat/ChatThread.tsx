import React, { useCallback, useEffect, useRef, useState } from "react";
import type { ChatMessage } from "@/app/components/chat/useChatSend";
import { CollapsedInputBox } from "@/app/components/CollapsedInputBox";
import { NativeInputBar } from "@/app/components/NativeInputBar";
import { useTheme } from "@/app/theme/ThemeContext";

// Reaction emoji assets — the SAME four the meeting chat (ChatPanel) uses.
import imgThumbsUp from "figma:asset/b7bdd4e332f1134cea6b347137499723925005ef.png";
import imgRedHeart from "figma:asset/59520d231a783bb20cd3d4f98dfaec2de858b210.png";
import imgClappingHands from "figma:asset/cebe50ea4c5d9b448454b19dd79074e5c5b4d898.png";
import imgGrinningSquintingFace from "figma:asset/05be624ff210f9164b431697c6d21d5e13ab6caa.png";

const REACTION_EMOJIS = [
  { src: imgThumbsUp, label: "Thumbs up" },
  { src: imgRedHeart, label: "Red heart" },
  { src: imgClappingHands, label: "Clapping hands" },
  { src: imgGrinningSquintingFace, label: "Grinning face" },
];

/**
 * Light-theme 1:1 DM message thread + composer, matching the Figma frame
 * (879:27301). Presentational: it renders the bubbles and owns the composer's
 * local text state, but delegates the actual send to `onSend` (which the page
 * wires to the shared `useChatSend` dispatcher).
 *
 * Bubble palette (frame 905:28124):
 *   incoming  — bg #f1f1f1, text #242424, left-aligned, sender name above the group
 *   outgoing  — bg #5c4fe3, text white, right-aligned
 * Type: SF Pro, 17px / 22px line-height (matches the meeting chat bubbles).
 * Content is bottom-aligned.
 *
 * Reactions: long-press a bubble (~500ms) opens a light reaction picker; tapping
 * an emoji toggles that reaction on the message (mirrors the meeting chat).
 */

interface ChatThreadProps {
  messages: ChatMessage[];
  /** Setter for the page's per-conversation messages — used to mutate reactions. */
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  onSend: (text: string) => void;
  scrollRef: React.RefObject<HTMLDivElement>;
  /** Called when the composer input gains/loses focus (page collapses the dock on focus). */
  onComposerFocusChange?: (focused: boolean) => void;
  /** Whether the on-screen keyboard is open (lifted to the page so it can force-close). */
  isKeyboardOpen: boolean;
  /** Report keyboard open/close to the page. */
  onKeyboardOpenChange: (open: boolean) => void;
}

const LONG_PRESS_MS = 500;

export function ChatThread({
  messages,
  setMessages,
  onSend,
  scrollRef,
  onComposerFocusChange,
  isKeyboardOpen,
  onKeyboardOpenChange,
}: ChatThreadProps) {
  const [text, setText] = useState("");
  const { theme } = useTheme();

  // ── Reaction picker state ──
  const [activeReactionMessageId, setActiveReactionMessageId] = useState<number | null>(null);
  const [pickerPosition, setPickerPosition] = useState<"above" | "below">("above");
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bubbleRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Auto-scroll to the bottom whenever the message count grows (double-rAF so the
  // new bubble is laid out before we scroll), matching the ChatPanel behavior.
  const prevCountRef = useRef(messages.length);
  useEffect(() => {
    if (messages.length === prevCountRef.current) return;
    const isInitial = prevCountRef.current === 0;
    prevCountRef.current = messages.length;
    const el = scrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.scrollTo({ top: el.scrollHeight, behavior: isInitial ? "auto" : "smooth" });
      });
    });
  }, [messages.length, scrollRef]);

  // Scroll to bottom on mount.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.scrollTo({ top: el.scrollHeight, behavior: "auto" });
      });
    });
  }, [scrollRef]);

  // When the inline keyboard opens (or a message arrives while it's open), the
  // thread flex-shrinks above the keyboard — re-pin it to the bottom so the
  // latest bubble AND its timestamp stay visible. Double-rAF so we run after the
  // height change/layout, matching the other auto-scroll effects.
  useEffect(() => {
    if (!isKeyboardOpen) return;
    const el = scrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.scrollTop = el.scrollHeight;
      });
    });
  }, [isKeyboardOpen, messages.length, scrollRef]);

  // Dismiss the reaction picker on scroll.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      if (activeReactionMessageId !== null) setActiveReactionMessageId(null);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [activeReactionMessageId, scrollRef]);

  // Clean up the long-press timer on unmount.
  useEffect(() => {
    return () => {
      if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);
    };
  }, []);

  const submit = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  // ── Long-press → open the picker, positioned above/below the bubble. ──
  const handlePointerDown = useCallback(
    (messageId: number) => {
      const message = messages.find((m) => m.id === messageId);
      if (message?.isTypingIndicator) return;
      longPressTimerRef.current = setTimeout(() => {
        if (navigator.vibrate) navigator.vibrate(10);
        const bubbleEl = bubbleRefs.current.get(messageId);
        const containerEl = scrollRef.current;
        if (bubbleEl && containerEl) {
          const bubbleRect = bubbleEl.getBoundingClientRect();
          const containerRect = containerEl.getBoundingClientRect();
          const midpoint = containerRect.top + containerRect.height / 2;
          setPickerPosition(bubbleRect.top < midpoint ? "below" : "above");
        }
        setActiveReactionMessageId(messageId);
      }, LONG_PRESS_MS);
    },
    [messages, scrollRef],
  );

  const cancelLongPress = useCallback(() => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }, []);

  // ── Toggle a reaction on a message (add / increment / remove). ──
  const handleToggleReaction = useCallback(
    (messageId: number, emojiSrc: string, emojiLabel: string) => {
      setMessages((prev) =>
        prev.map((msg) => {
          if (msg.id !== messageId) return msg;
          const reactions = msg.reactions ? [...msg.reactions] : [];
          const idx = reactions.findIndex((r) => r.emoji === emojiSrc);
          if (idx >= 0) {
            const existing = reactions[idx];
            if (existing.reactedByMe) {
              if (existing.count <= 1) {
                reactions.splice(idx, 1);
              } else {
                reactions[idx] = { ...existing, count: existing.count - 1, reactedByMe: false };
              }
            } else {
              reactions[idx] = { ...existing, count: existing.count + 1, reactedByMe: true };
            }
          } else {
            reactions.push({ emoji: emojiSrc, label: emojiLabel, count: 1, reactedByMe: true });
          }
          return { ...msg, reactions: reactions.length > 0 ? reactions : undefined };
        }),
      );
      setActiveReactionMessageId(null);
    },
    [setMessages],
  );

  // Picker placement relative to the scroll container (absolute within it).
  const getPickerStyle = useCallback(
    (messageId: number): React.CSSProperties => {
      const bubbleEl = bubbleRefs.current.get(messageId);
      const containerEl = scrollRef.current;
      if (!bubbleEl || !containerEl) return {};
      const bubbleRect = bubbleEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();
      const message = messages.find((m) => m.id === messageId);
      const isMe = message?.isMe ?? false;
      const top =
        pickerPosition === "above"
          ? bubbleRect.top - containerRect.top + containerEl.scrollTop - 50
          : bubbleRect.bottom - containerRect.top + containerEl.scrollTop + 8;
      return {
        position: "absolute",
        top: `${top}px`,
        ...(isMe ? { right: "16px" } : { left: "52px" }),
      };
    },
    [messages, pickerPosition, scrollRef],
  );

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-fy27-surface">
      {/* Scrollable message column — content bottom-aligned (sits at the bottom
          when the thread is short, like a real chat). */}
      <div
        ref={scrollRef}
        className="flex-1 min-h-0 overflow-y-auto px-[16px] pt-[12px] pb-[12px] relative"
        onClick={() => {
          // Tap anywhere in the thread to dismiss the inline keyboard. The
          // reaction long-press uses pointer-down timers on the bubbles, so a
          // plain click here doesn't interfere with it.
          if (isKeyboardOpen) {
            onKeyboardOpenChange(false);
            onComposerFocusChange?.(false);
          }
        }}
      >
        <div className="min-h-full flex flex-col justify-end">
          {messages.map((m, i) => {
            const prev = i > 0 ? messages[i - 1] : null;
            const next = i < messages.length - 1 ? messages[i + 1] : null;
            const isFirstInGroup = !prev || prev.sender !== m.sender || prev.isTypingIndicator;
            const isLastInGroup = !next || next.sender !== m.sender || m.isTypingIndicator;
            return (
              <Bubble
                key={m.id}
                m={m}
                isFirstInGroup={isFirstInGroup}
                isLastInGroup={isLastInGroup}
                registerRef={(el) => {
                  if (el) bubbleRefs.current.set(m.id, el);
                  else bubbleRefs.current.delete(m.id);
                }}
                onPointerDown={() => handlePointerDown(m.id)}
                onPointerUp={cancelLongPress}
                onToggleReaction={(emojiSrc, emojiLabel) =>
                  handleToggleReaction(m.id, emojiSrc, emojiLabel)
                }
              />
            );
          })}
        </div>

        {/* Reaction picker popover (light theme) */}
        {activeReactionMessageId !== null && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setActiveReactionMessageId(null)} />
            <div
              className="z-50 flex items-center gap-[6px] px-[8px] py-[6px] rounded-[20px]"
              style={{
                ...getPickerStyle(activeReactionMessageId),
                backgroundColor: "var(--fy27-surface)",
                border: "1px solid var(--fy27-divider)",
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.12)",
                animation: "dmReactionPickerIn 180ms ease-out",
              }}
            >
              {REACTION_EMOJIS.map((emoji) => {
                const message = messages.find((m) => m.id === activeReactionMessageId);
                const existing = message?.reactions?.find((r) => r.emoji === emoji.src);
                const isActive = existing?.reactedByMe ?? false;
                return (
                  <button
                    key={emoji.label}
                    onClick={() =>
                      handleToggleReaction(activeReactionMessageId, emoji.src, emoji.label)
                    }
                    className={`w-[36px] h-[36px] rounded-full flex items-center justify-center transition-transform duration-150 active:scale-110 ${
                      isActive ? "bg-fy27-brand/15 ring-1 ring-fy27-brand" : "hover:bg-fy27-surface-base"
                    }`}
                  >
                    <img src={emoji.src} alt={emoji.label} className="w-[28px] h-[28px]" />
                  </button>
                );
              })}
            </div>
          </>
        )}
        <style>{`
          @keyframes dmReactionPickerIn { 0% { opacity: 0; transform: scale(0.85); } 100% { opacity: 1; transform: scale(1); } }
        `}</style>
      </div>

      {/* Composer — the SAME input box + on-screen keyboard as the meeting chat.
          Tapping the collapsed box opens NativeInputBar (the on-screen keyboard),
          so the native device keyboard is never summoned. Light-themed, with 30px
          of space beneath the compose pill inside the white foreground. */}
      {/* Collapsed box when the keyboard is closed; the inline keyboard replaces
          it when open — so the message thread above SHRINKS to fit (no overlay,
          no dim backdrop). */}
      {!isKeyboardOpen && (
        <div className="pb-[30px]">
          <CollapsedInputBox
            placeholder="Message"
            theme={theme}
            onClick={() => {
              onKeyboardOpenChange(true);
              onComposerFocusChange?.(true);
            }}
          />
        </div>
      )}
      {isKeyboardOpen && (
        <NativeInputBar
          value={text}
          onChange={setText}
          theme={theme}
          inline
          onSend={() => {
            submit();
            onKeyboardOpenChange(false);
            onComposerFocusChange?.(false);
          }}
          onClose={() => {
            onKeyboardOpenChange(false);
            onComposerFocusChange?.(false);
          }}
          placeholder="Message"
          showPrompts={false}
        />
      )}
    </div>
  );
}

/* ─── Single message bubble (with avatar gutter, media, reactions, typing) ─── */

function Bubble({
  m,
  isFirstInGroup,
  isLastInGroup,
  registerRef,
  onPointerDown,
  onPointerUp,
  onToggleReaction,
}: {
  m: ChatMessage;
  isFirstInGroup: boolean;
  isLastInGroup: boolean;
  registerRef: (el: HTMLDivElement | null) => void;
  onPointerDown: () => void;
  onPointerUp: () => void;
  onToggleReaction: (emojiSrc: string, emojiLabel: string) => void;
}) {
  const isMe = m.isMe;

  return (
    <div
      className={`flex gap-[10px] items-start ${isMe ? "flex-row-reverse" : ""}`}
      style={{ marginTop: isFirstInGroup ? "10px" : "2px" }}
    >
      {/* Avatar gutter — incoming only, once per group */}
      {!isMe &&
        (isFirstInGroup ? (
          <div className="size-[32px] shrink-0 rounded-full overflow-hidden bg-fy27-surface-raised">
            {m.avatar ? (
              <img src={m.avatar} alt={m.sender} className="size-full object-cover" />
            ) : (
              <div className="size-full flex items-center justify-center text-[12px] text-fy27-text-global">
                {m.sender.charAt(0)}
              </div>
            )}
          </div>
        ) : (
          <div className="size-[32px] shrink-0" />
        ))}

      <div className={`flex flex-col gap-[4px] max-w-[275px] ${isMe ? "items-end" : "items-start"}`}>
        {/* Sender name — above the first incoming bubble of a group (per frame 905:28124) */}
        {!isMe && isFirstInGroup && m.sender && (
          <p className="text-[12px] text-fy27-text-secondary px-[4px]" style={{ lineHeight: "16px" }}>{m.sender}</p>
        )}

        {/* Media bubbles */}
        {m.media && m.media.length > 0 && (
          <div className={`flex flex-wrap gap-[4px] ${isMe ? "justify-end" : "justify-start"}`}>
            {m.media.map((item, idx) => (
              <div key={idx} className="rounded-[14px] overflow-hidden max-w-[180px]">
                {item.type.startsWith("image/") ? (
                  <img src={item.url} alt="" className="w-full h-auto block" />
                ) : (
                  <div className="w-[160px] h-[120px] bg-fy27-surface-raised flex items-center justify-center text-[40px]">
                    🎥
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Text bubble — long-press to open the reaction picker */}
        {m.text && (
          <div
            ref={registerRef}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onContextMenu={(e) => e.preventDefault()}
            className={`p-[8px] rounded-[12px] w-fit select-none ${isMe ? "bg-fy27-brand" : "bg-fy27-surface-chat-incoming"}`}
            style={{
              WebkitUserSelect: "none",
              touchAction: "pan-y",
            }}
          >
            <p
              className={`text-[17px] tracking-[-0.41px] ${isMe ? "text-fy27-text-global" : "text-fy27-text-dominant"}`}
              style={{
                lineHeight: "22px",
                wordBreak: "break-word",
                overflowWrap: "anywhere",
              }}
            >
              {m.text}
            </p>
          </div>
        )}

        {/* Typing indicator */}
        {m.isTypingIndicator && (
          <div className="p-[8px] rounded-[12px] bg-fy27-surface-chat-incoming flex gap-[4px] items-center">
            <span className="size-[6px] rounded-full bg-fy27-icon-secondary animate-bounce" style={{ animationDelay: "0ms", animationDuration: "1.4s" }} />
            <span className="size-[6px] rounded-full bg-fy27-icon-secondary animate-bounce" style={{ animationDelay: "200ms", animationDuration: "1.4s" }} />
            <span className="size-[6px] rounded-full bg-fy27-icon-secondary animate-bounce" style={{ animationDelay: "400ms", animationDuration: "1.4s" }} />
          </div>
        )}

        {/* Reaction pills — tap to toggle */}
        {m.reactions && m.reactions.length > 0 && (
          <div className={`flex flex-wrap gap-[4px] -mt-[7px] relative z-[1] ${isMe ? "justify-end" : "justify-start"}`}>
            {m.reactions.map((r) => (
              <button
                key={r.emoji}
                onClick={() => onToggleReaction(r.emoji, r.label)}
                className={`flex items-center gap-[4px] h-[28px] px-[8px] rounded-[30px] border-[0.5px] transition-colors duration-200 ${
                  r.reactedByMe
                    ? "bg-fy27-brand/15 border-fy27-brand/50"
                    : "bg-fy27-surface border-fy27-divider"
                }`}
              >
                {r.emoji.includes("/") || r.emoji.includes(".") ? (
                  <img src={r.emoji} alt={r.label} className="size-[16px]" />
                ) : (
                  <span className="text-[16px] leading-[16px]" role="img" aria-label={r.label}>
                    {r.emoji}
                  </span>
                )}
                <span className="text-[12px] text-fy27-text-dominant" style={{ lineHeight: "16px" }}>
                  {r.count}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Time — last in group */}
        {isLastInGroup && m.time && !m.isTypingIndicator && (
          <p className="text-[11px] text-fy27-text-secondary px-[4px]" style={{ lineHeight: "14px" }}>
            {m.time}
          </p>
        )}
      </div>
    </div>
  );
}
