import React, { useEffect, useRef, useState, useCallback } from "react";
import svgPaths from "@/imports/svg-421nqr9b2v";
import { MultitaskingPanel } from "@/app/components/MultitaskingPanel";
import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";
import { useTheme } from "@/app/theme/ThemeContext";
import { NativeInputBar } from "@/app/components/NativeInputBar";
import { CollapsedInputBox } from "@/app/components/CollapsedInputBox";
import { sendChatMessage } from "@/app/lib/llm";
import { useChatSend, generateUniqueId as sharedUid } from "@/app/components/chat/useChatSend";
import { generateContextualResponse } from "@/app/components/chat/contextualReply";

// Import Figma placeholder images for chat avatars
import imgAadi from "figma:asset/3c32350895790815d4b2b05b8bfa873d40c997c2.png";
import imgBabak from "figma:asset/6900c5f1ebcee87405a464dc927c93633e66e145.png";
import imgMiguel from "figma:asset/685fc6dc030aab2cbea5b15f523d9ce42c11d689.png";
import imgJessica from "figma:asset/3b6bf95da1f13af67c0b3a5e3c9534b640591ce5.png";
import imgRay from "figma:asset/a55a7173204f1d7f74adab6c38113bc9eedbb180.png";
import imgSarah from "figma:asset/503fddd74dcc978ba951b5c79ebe96b95453b1eb.png";

// Import emoji assets for message reactions (same as MorePanel)
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

// Unique IDs come from the shared chat hook so the meeting chat and the DM
// pages never collide on a counter.
const generateUniqueId = sharedUid;

// The simulated meeting participants who reply in the chat.
const PARTICIPANTS = [
  { name: "Babak S.", avatar: imgSarah },
  { name: "Sarah J.", avatar: imgBabak },
  { name: "Miguel S.", avatar: imgMiguel },
  { name: "Jessica K.", avatar: imgJessica },
  { name: "Ray T.", avatar: imgRay },
];

export interface MessageReaction {
  emoji: string;
  label: string;
  count: number;
  reactedByMe: boolean;
}

interface ChatPanelProps {
  onClose: () => void;
  meetingTitle?: string;
  messages: Array<{
    id: number;
    sender: string;
    text: string;
    time: string;
    avatar: string;
    isMe: boolean;
    media?: { url: string; type: string }[];
    isTypingIndicator?: boolean;
    reactions?: MessageReaction[];
  }>;
  setMessages: React.Dispatch<React.SetStateAction<Array<{
    id: number;
    sender: string;
    text: string;
    time: string;
    avatar: string;
    isMe: boolean;
    media?: { url: string; type: string }[];
    isTypingIndicator?: boolean;
    reactions?: MessageReaction[];
  }>>>;
}

export function ChatPanel({ onClose, meetingTitle = "", messages, setMessages }: ChatPanelProps) {
  const { activeVersionId } = useVersion();
  const isFy27Mvp = isMvpFamily(activeVersionId);
  const { theme } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reaction picker state
  const [activeReactionMessageId, setActiveReactionMessageId] = useState<number | null>(null);
  const [reactionPickerPosition, setReactionPickerPosition] = useState<'above' | 'below'>('above');
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const messageBubbleRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const longPressThreshold = 500;

  // Use messages from props instead of local state
  const chatMessages = messages;

  // Shared send logic (append user msg → typing indicator → LLM reply → fallback).
  const dispatchSend = useChatSend({
    messages: chatMessages,
    setMessages,
    getResponder: () => PARTICIPANTS[Math.floor(Math.random() * PARTICIPANTS.length)],
    fetchReply: (text, name, history) => sendChatMessage(text, name, history, meetingTitle),
    fallback: generateContextualResponse,
    onTypingChange: setIsTyping,
  });

  // Scroll to bottom when new messages are added (not on reaction changes)
  const prevMessageCountRef = useRef(chatMessages.length);
  useEffect(() => {
    if (chatMessages.length !== prevMessageCountRef.current) {
      const isInitialMount = prevMessageCountRef.current === 0;
      prevMessageCountRef.current = chatMessages.length;
      // scrollContainerRef is the inner content div; its parentElement is
      // the actual overflow-y-auto scroller inside MultitaskingPanel.
      const scroller = scrollContainerRef.current?.parentElement;
      if (scroller) {
        // Double RAF to ensure DOM is fully laid out before scrolling
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scroller.scrollTo({
              top: scroller.scrollHeight,
              behavior: isInitialMount ? 'auto' : 'smooth',
            });
          });
        });
      }
    }
  }, [chatMessages]);

  // Scroll to bottom on mount
  useEffect(() => {
    const scroller = scrollContainerRef.current?.parentElement;
    if (scroller) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scroller.scrollTo({ top: scroller.scrollHeight, behavior: 'auto' });
        });
      });
    }
  }, []);

  const handleSendMessage = (files?: File[]) => {
    if (!messageText.trim() && !(files && files.length > 0)) return;
    const media = files?.map((file) => ({ url: URL.createObjectURL(file), type: file.type }));
    const text = messageText;
    setMessageText("");
    // Close keyboard; a brief full-screen blocker swallows the stray pointer/click
    // that would otherwise land on the Copilot FAB behind the unmounted keyboard.
    const blocker = document.createElement("div");
    blocker.style.cssText = "position:fixed;inset:0;z-index:9999";
    document.body.appendChild(blocker);
    setTimeout(() => blocker.remove(), 400);
    setIsKeyboardOpen(false);
    dispatchSend(text, media);
  };
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      if (longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current);
      }
    };
  }, []);

  // Dismiss reaction picker on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      if (activeReactionMessageId !== null) {
        setActiveReactionMessageId(null);
      }
    };
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeReactionMessageId]);

  // Long-press handlers
  const handlePointerDown = useCallback((messageId: number) => {
    const message = chatMessages.find(m => m.id === messageId);
    if (message?.isTypingIndicator) return;

    longPressTimerRef.current = setTimeout(() => {
      if (navigator.vibrate) navigator.vibrate(10);
      const bubbleEl = messageBubbleRefs.current.get(messageId);
      const containerEl = scrollContainerRef.current;
      if (bubbleEl && containerEl) {
        const bubbleRect = bubbleEl.getBoundingClientRect();
        const containerRect = containerEl.getBoundingClientRect();
        const midpoint = containerRect.top + containerRect.height / 2;
        setReactionPickerPosition(bubbleRect.top < midpoint ? 'below' : 'above');
      }
      setActiveReactionMessageId(messageId);
    }, longPressThreshold);
  }, [chatMessages]);

  const handlePointerUp = useCallback(() => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }, []);

  // Simulate other participants reacting
  const simulateOtherReactions = useCallback((messageId: number, userEmojiSrc: string, userEmojiLabel: string) => {
    if (Math.random() > 0.7) return;
    const delay = 1000 + Math.random() * 2000;
    setTimeout(() => {
      setMessages(prev => prev.map(msg => {
        if (msg.id !== messageId) return msg;
        const reactions = msg.reactions ? [...msg.reactions] : [];
        const idx = reactions.findIndex(r => r.emoji === userEmojiSrc);
        if (idx >= 0) {
          reactions[idx] = { ...reactions[idx], count: reactions[idx].count + 1 };
        } else {
          reactions.push({ emoji: userEmojiSrc, label: userEmojiLabel, count: 1, reactedByMe: false });
        }
        return { ...msg, reactions };
      }));

      if (Math.random() < 0.3) {
        const otherEmojis = REACTION_EMOJIS.filter(e => e.src !== userEmojiSrc);
        const randomEmoji = otherEmojis[Math.floor(Math.random() * otherEmojis.length)];
        setTimeout(() => {
          setMessages(prev => prev.map(msg => {
            if (msg.id !== messageId) return msg;
            const reactions = msg.reactions ? [...msg.reactions] : [];
            const idx = reactions.findIndex(r => r.emoji === randomEmoji.src);
            if (idx >= 0) {
              reactions[idx] = { ...reactions[idx], count: reactions[idx].count + 1 };
            } else {
              reactions.push({ emoji: randomEmoji.src, label: randomEmoji.label, count: 1, reactedByMe: false });
            }
            return { ...msg, reactions };
          }));
        }, 800 + Math.random() * 1200);
      }
    }, delay);
  }, [setMessages]);

  // Toggle reaction on a message
  const handleToggleReaction = useCallback((messageId: number, emojiSrc: string, emojiLabel: string) => {
    setMessages(prev => prev.map(msg => {
      if (msg.id !== messageId) return msg;
      const reactions = msg.reactions ? [...msg.reactions] : [];
      const existingIndex = reactions.findIndex(r => r.emoji === emojiSrc);

      if (existingIndex >= 0) {
        const existing = reactions[existingIndex];
        if (existing.reactedByMe) {
          if (existing.count <= 1) {
            reactions.splice(existingIndex, 1);
          } else {
            reactions[existingIndex] = { ...existing, count: existing.count - 1, reactedByMe: false };
          }
        } else {
          reactions[existingIndex] = { ...existing, count: existing.count + 1, reactedByMe: true };
        }
      } else {
        reactions.push({ emoji: emojiSrc, label: emojiLabel, count: 1, reactedByMe: true });
      }

      return { ...msg, reactions: reactions.length > 0 ? reactions : undefined };
    }));
    setActiveReactionMessageId(null);
    simulateOtherReactions(messageId, emojiSrc, emojiLabel);
  }, [setMessages, simulateOtherReactions]);

  // Position helper for reaction picker
  const getPickerStyle = useCallback((messageId: number): React.CSSProperties => {
    const bubbleEl = messageBubbleRefs.current.get(messageId);
    const containerEl = scrollContainerRef.current;
    if (!bubbleEl || !containerEl) return {};
    const bubbleRect = bubbleEl.getBoundingClientRect();
    const containerRect = containerEl.getBoundingClientRect();
    const message = chatMessages.find(m => m.id === messageId);
    const isMe = message?.isMe ?? false;
    const top = reactionPickerPosition === 'above'
      ? bubbleRect.top - containerRect.top + containerEl.scrollTop - 52
      : bubbleRect.bottom - containerRect.top + containerEl.scrollTop + 8;
    return {
      position: 'absolute' as const,
      top: `${top}px`,
      ...(isMe ? { right: '16px' } : { left: '48px' }),
    };
  }, [chatMessages, reactionPickerPosition]);

  // Forward action — MVP: bare 24pt nav-bar icon (Teams 2 iOS right action).
  // Final Vision: original glass color-dodge circle.
  const forwardButton = isFy27Mvp ? (
    <button aria-label="Forward" className="size-[24px] grid place-items-center text-fy27-icon-primary active:opacity-60 transition-opacity">
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p7378d00} fill="currentColor" />
      </svg>
    </button>
  ) : (
    <button
      className="w-[44px] h-[44px] rounded-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Background with mix-blend-color-dodge effect */}
      <div className="absolute inset-0 rounded-full">
        <div className="absolute inset-0 bg-[#333] mix-blend-color-dodge rounded-full" />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)"
          }}
        />
      </div>
      <svg className="w-6 h-6 relative z-10" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p7378d00} fill="white" />
      </svg>
    </button>
  );

  // Input box footer component
  const inputBox = (
    <CollapsedInputBox
      placeholder="Message participants"
      theme={theme}
      onClick={() => { setIsKeyboardOpen(true); setActiveReactionMessageId(null); }}
    />
  );

  return (
    <>
      <style>{`
        @keyframes reactionPickerIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes reactionBadgeIn {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <MultitaskingPanel
        title="Meeting chat"
        onClose={onClose}
        actionButton={forwardButton}
        showFooter={true}
        footerComponent={inputBox}
      >
        {/* Scrollable Messages Content */}
        <div ref={scrollContainerRef} className="px-[22px] pt-3 pb-[16px] space-y-3 relative">
          {chatMessages.map((message, index) => {
            // Determine if this message is part of a group
            const prevMessage = index > 0 ? chatMessages[index - 1] : null;
            const nextMessage = index < chatMessages.length - 1 ? chatMessages[index + 1] : null;

            const isFirstInGroup = !prevMessage || prevMessage.sender !== message.sender || prevMessage.isTypingIndicator;
            const isLastInGroup = !nextMessage || nextMessage.sender !== message.sender || message.isTypingIndicator;

            return (
              <div
                key={message.id}
                className={`flex gap-[10px] items-start ${message.isMe ? 'flex-row-reverse justify-end' : ''} ${!isFirstInGroup ? (message.isMe ? 'mt-[2px]' : 'mt-[2px]') : ''}`}
                style={{ marginTop: !isFirstInGroup ? '2px' : undefined }}
              >
                {/* Avatar - only show for other people's messages and first in group */}
                {!message.isMe && isFirstInGroup && (
                  <div className="flex-shrink-0 size-[32px] rounded-full overflow-hidden bg-fy27-brand">
                    {message.avatar ? (
                      <img src={message.avatar} alt={message.sender} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-fy27-text-global text-xs font-semibold">
                        A
                      </div>
                    )}
                  </div>
                )}

                {/* Spacer when avatar is not shown (for alignment) */}
                {!message.isMe && !isFirstInGroup && (
                  <div className="flex-shrink-0 w-[32px]"></div>
                )}

                {/* Message Content */}
                <div className={`flex flex-col gap-[4px] ${message.isMe ? 'items-end' : 'items-start'} flex-1`}>
                  {/* Sender name - only show for first message in group */}
                  {isFirstInGroup && (
                    <div className="flex items-center gap-1">
                      <p className="text-fy27-text-secondary text-[12px] leading-[16px]" style={{ fontFamily: 'var(--font-sf-display)' }}>
                        {message.sender}
                      </p>
                    </div>
                  )}

                  {/* Media attachments */}
                  {message.media && message.media.length > 0 && (
                    <div className={`flex gap-[4px] flex-wrap max-w-[85%] ${message.isMe ? 'justify-end' : 'justify-start'}`}>
                      {message.media.map((item, idx) => (
                        <div key={idx} className="rounded-[12px] overflow-hidden max-w-[200px]">
                          {item.type.startsWith('image/') ? (
                            <img src={item.url} alt="attachment" className="w-full h-auto" />
                          ) : (
                            <div className="w-[200px] h-[150px] bg-[#2a2a2a] flex items-center justify-center">
                              <div className="text-white text-[48px]">🎥</div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Message bubble with long-press for reactions */}
                  {message.text && (
                    <div
                      ref={(el) => { if (el) messageBubbleRefs.current.set(message.id, el); }}
                      onPointerDown={() => handlePointerDown(message.id)}
                      onPointerUp={handlePointerUp}
                      onPointerLeave={handlePointerUp}
                      onContextMenu={(e) => e.preventDefault()}
                      className={`p-[8px] rounded-[12px] max-w-[275px] w-fit select-none ${message.isMe ? 'bg-fy27-brand' : 'bg-fy27-surface-chat-incoming'}`}
                      style={{ WebkitUserSelect: 'none', touchAction: 'pan-y' }}
                    >
                      <p className={`text-[17px] tracking-[-0.41px] leading-[22px] ${message.isMe ? 'text-fy27-text-global' : 'text-fy27-text-dominant'}`} style={{ fontFamily: 'var(--font-sf-pro)', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                        {message.text}
                      </p>
                    </div>
                  )}

                  {/* Reaction badges */}
                  {message.reactions && message.reactions.length > 0 && (
                    <div className={`flex flex-wrap gap-[4px] -mt-[7px] relative z-[1] ${message.isMe ? 'justify-end' : 'justify-start'}`}>
                      {message.reactions.map((reaction) => (
                        <button
                          key={reaction.emoji}
                          onClick={() => handleToggleReaction(message.id, reaction.emoji, reaction.label)}
                          className={`flex items-center gap-[4px] h-[28px] px-[8px] rounded-[30px] border-[0.5px] transition-colors duration-200 ${
                            reaction.reactedByMe
                              ? 'bg-fy27-brand/15 border-fy27-brand/50'
                              : 'bg-fy27-surface border-fy27-divider'
                          }`}
                          style={{ animation: 'reactionBadgeIn 250ms ease-out' }}
                        >
                          <img src={reaction.emoji} alt={reaction.label} className="w-[16px] h-[16px]" />
                          <span
                            className="text-fy27-text-dominant text-[12px] leading-[16px]"
                            style={{ fontFamily: 'var(--font-sf-display)' }}
                          >
                            {reaction.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Typing indicator */}
                  {message.isTypingIndicator && (
                    <div className="p-[8px] rounded-[12px] bg-fy27-surface-chat-incoming flex gap-[4px] items-center">
                      <div className="flex gap-[3px] items-center">
                        <div className="w-[6px] h-[6px] rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1.4s' }} />
                        <div className="w-[6px] h-[6px] rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '200ms', animationDuration: '1.4s' }} />
                        <div className="w-[6px] h-[6px] rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '400ms', animationDuration: '1.4s' }} />
                      </div>
                    </div>
                  )}

                  {/* Time - only show for last message in group */}
                  {isLastInGroup && (
                    <p className="text-white/50 text-[11px] leading-[normal]" style={{ fontFamily: 'var(--font-sf-display)' }}>
                      {message.time}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          {/* Reaction Picker Overlay */}
          {activeReactionMessageId !== null && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setActiveReactionMessageId(null)}
              />
              <div
                className="absolute z-50 flex items-center gap-[6px] px-[8px] py-[6px] rounded-[20px] shadow-lg"
                style={{
                  ...getPickerStyle(activeReactionMessageId),
                  backgroundColor: 'rgba(44, 44, 46, 0.95)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                  animation: 'reactionPickerIn 200ms ease-out',
                }}
              >
                {REACTION_EMOJIS.map((emoji) => {
                  const message = chatMessages.find(m => m.id === activeReactionMessageId);
                  const existingReaction = message?.reactions?.find(r => r.emoji === emoji.src);
                  const isActive = existingReaction?.reactedByMe ?? false;
                  return (
                    <button
                      key={emoji.label}
                      onClick={() => handleToggleReaction(activeReactionMessageId, emoji.src, emoji.label)}
                      className={`w-[36px] h-[36px] rounded-full flex items-center justify-center transition-transform duration-150 active:scale-110 ${
                        isActive ? 'bg-[#5c4fe3]/40 ring-1 ring-[#878BFB]' : 'hover:bg-white/10'
                      }`}
                    >
                      <img src={emoji.src} alt={emoji.label} className="w-[28px] h-[28px]" />
                    </button>
                  );
                })}
              </div>
            </>
          )}

          <div ref={messagesEndRef} />
        </div>
      </MultitaskingPanel>
      {isKeyboardOpen && (
        <NativeInputBar
          value={messageText}
          onChange={setMessageText}
          onSend={handleSendMessage}
          onClose={() => setIsKeyboardOpen(false)}
          placeholder="Message participants"
          showPrompts={false}
          theme={theme}
        />
      )}
    </>
  );
}