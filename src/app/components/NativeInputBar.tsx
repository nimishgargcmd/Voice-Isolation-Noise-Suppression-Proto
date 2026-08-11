import React, { useRef, useEffect, useState, useCallback, memo } from "react";
import svgPaths from "@/imports/svg-rg9fo5dc86";
import svgPathsCopilot from "@/imports/svg-qlg9mnpaxy";
import { HorizontalScrollContainer } from "@/app/components/HorizontalScrollContainer";

// ── Haptic feedback (iOS Safari 17.4+) ───────────────────────────────

function triggerHaptic() {
  try {
    if (/iPhone|iPad/.test(navigator.userAgent)) {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.setAttribute('switch', '');
      checkbox.style.cssText = 'position:fixed;opacity:0;pointer-events:none;top:-100px';
      const label = document.createElement('label');
      label.appendChild(checkbox);
      document.body.appendChild(label);
      label.click();
      requestAnimationFrame(() => document.body.removeChild(label));
    } else if (navigator.vibrate) {
      navigator.vibrate(5);
    }
  } catch { /* silently fail */ }
}

// ── Emoji data ───────────────────────────────────────────────────────

const EMOJI_ROWS = [
  ['😀','😃','😄','😁','😅','😂','🤣','😊','😇','🙂'],
  ['🙃','😉','😌','😍','🥰','😘','😗','😙','😚','😋'],
  ['😛','😝','😜','🤪','🤨','🧐','🤓','😎','🤩','🥳'],
  ['😏','😒','😞','😔','😟','😕','🙁','😣','😖','😫'],
  ['👍','👎','👊','✊','🤛','🤜','🤞','✌️','🤟','🤘'],
  ['👏','🙌','👐','🤝','🙏','💪','❤️','🔥','⭐','✅'],
];

// ── Static key layouts ───────────────────────────────────────────────

type KeyType = 'letter' | 'shift' | 'backspace' | 'mode' | 'space' | 'return' | 'emoji';
type KeyDef = { key: string; label?: string; flex?: number; type: KeyType };

const letter = (k: string): KeyDef => ({ key: k, type: 'letter' });

// iOS-style auto-capitalization: the next letter is capitalized when the cursor
// sits at the very start of the field, right after a newline, or after a
// sentence-ending punctuation mark followed by whitespace.
function shouldAutoCap(text: string, pos: number): boolean {
  const before = text.slice(0, pos);
  if (before.length === 0) return true;
  return /\n$/.test(before) || /[.!?]\s$/.test(before);
}

const LETTERS_ROWS: KeyDef[][] = [
  ['Q','W','E','R','T','Y','U','I','O','P'].map(letter),
  ['A','S','D','F','G','H','J','K','L'].map(letter),
  [
    { key: 'shift', type: 'shift', flex: 1.5 },
    ...['Z','X','C','V','B','N','M'].map(letter),
    { key: 'backspace', type: 'backspace', flex: 1.5 },
  ],
  [
    { key: '123', type: 'mode', flex: 2.2 },
    { key: 'emoji', type: 'emoji', flex: 1.1 },
    { key: 'space', label: 'space', type: 'space', flex: 5 },
    { key: 'return', type: 'return', flex: 2.2 },
  ],
];

const NUMBERS_ROWS: KeyDef[][] = [
  ['1','2','3','4','5','6','7','8','9','0'].map(letter),
  ['-','/',':',';','(',')','$','&','@','"'].map(letter),
  [
    { key: '#+', label: '#+=', type: 'mode', flex: 1.5 },
    ...['.',',','?','!','\''].map(letter),
    { key: 'backspace', type: 'backspace', flex: 1.5 },
  ],
  [
    { key: 'ABC', type: 'mode', flex: 2.2 },
    { key: 'emoji', type: 'emoji', flex: 1.1 },
    { key: 'space', label: 'space', type: 'space', flex: 5 },
    { key: 'return', type: 'return', flex: 2.2 },
  ],
];

const SYMBOLS_ROWS: KeyDef[][] = [
  ['[',']','{','}','#','%','^','*','+','='].map(letter),
  ['_','\\','|','~','<','>','€','£','¥','·'].map(letter),
  [
    { key: '123', type: 'mode', flex: 1.5 },
    ...['.',',','?','!','\''].map(letter),
    { key: 'backspace', type: 'backspace', flex: 1.5 },
  ],
  [
    { key: 'ABC', type: 'mode', flex: 2.2 },
    { key: 'emoji', type: 'emoji', flex: 1.1 },
    { key: 'space', label: 'space', type: 'space', flex: 5 },
    { key: 'return', type: 'return', flex: 2.2 },
  ],
];

// ── SVG icons for special keys (consistent 22px sizing) ──────────────

const ShiftIcon = ({ active, color = '#fff' }: { active: boolean; color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="pointer-events-none">
    <path d="M12 3L3 14h5v7h8v-7h5L12 3z" fill={active ? '#000' : color} />
  </svg>
);

const BackspaceIcon = ({ color = '#fff' }: { color?: string }) => (
  <svg width="24" height="22" viewBox="0 0 28 22" fill="none" className="pointer-events-none">
    <path d="M9.5 1.5C9.1 1.5 8.7 1.7 8.5 2L1.5 11l7 9c.2.3.6.5 1 .5H25c1.1 0 2-.9 2-2V3.5c0-1.1-.9-2-2-2H9.5z" stroke={color} strokeWidth="1.8" fill="none"/>
    <path d="M14 7l7 7M21 7l-7 7" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const ReturnIcon = ({ color = '#fff' }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="pointer-events-none">
    <path d="M19 7v4c0 1.1-.9 2-2 2H7m0 0l4-4m-4 4l4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EmojiIcon = ({ color = '#fff' }: { color?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="pointer-events-none">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.6"/>
    <circle cx="9" cy="10" r="1.2" fill={color}/>
    <circle cx="15" cy="10" r="1.2" fill={color}/>
    <path d="M8 14.5c1 1.8 2.5 2.5 4 2.5s3-.7 4-2.5" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

// ── Theme tokens ─────────────────────────────────────────────────────
// Dark values are byte-for-byte identical to the original hardcoded ones.

type Theme = "dark" | "light";

interface KbTheme {
  surface: string;        // keyboard / panel / bar background
  glyph: string;          // key icon + text color
  letterKey: string;      // letter key bg
  specialKey: string;     // shift/backspace/mode/return key bg
  keyShadow: string;      // per-key box-shadow
  keyActiveBg: string;    // pressed key bg (injected style)
  popupBg: string;        // key preview popup bg
  inputText: string;      // textarea text color
  inputPlaceholder: string; // textarea placeholder color (used via class)
  mediaButton: string;    // attach/media button bg (class)
  sendActiveBg: string;   // send button bg when active (class)
  sendInactiveGlyph: string; // send glyph fill when inactive
}

const THEMES: Record<Theme, KbTheme> = {
  dark: {
    surface: '#0D0D0D',
    glyph: '#fff',
    letterKey: '#4D4D4F',
    specialKey: '#2C2C2E',
    keyShadow: '0 1px 0 rgba(0,0,0,0.6)',
    keyActiveBg: '#6A6A6C',
    popupBg: '#6A6A6C',
    inputText: '#d9d9d9',
    inputPlaceholder: 'placeholder:text-[#6e6e6e]',
    mediaButton: 'bg-[rgba(191,191,191,0.08)]',
    sendActiveBg: 'bg-[#584bdf]',
    sendInactiveGlyph: '#a6a6a6',
  },
  light: {
    surface: '#e4e6ea',
    glyph: '#000',
    letterKey: '#ffffff',
    specialKey: '#bcc0c7',
    keyShadow: '0 1px 0 rgba(0,0,0,0.28)',
    keyActiveBg: '#e6e8ec',
    popupBg: '#ffffff',
    inputText: '#1a1a1a',
    inputPlaceholder: 'placeholder:text-[#9a9a9a]',
    mediaButton: 'bg-[rgba(0,0,0,0.06)]',
    sendActiveBg: 'bg-[#5b5fc7]',
    sendInactiveGlyph: '#8a8a8a',
  },
};

// ── Memoized keyboard grid ───────────────────────────────────────────

interface KeyboardGridProps {
  rows: KeyDef[][];
  isShiftActive: boolean;
  onKeyAction: (key: string, type: KeyType) => void;
  t: KbTheme;
}

const KeyboardGrid = memo(function KeyboardGrid({ rows, isShiftActive, onKeyAction, t }: KeyboardGridProps) {
  const popupRef = useRef<HTMLDivElement>(null);
  const activeKeyRef = useRef<HTMLElement | null>(null);

  const showPopup = useCallback((target: HTMLElement, label: string) => {
    const popup = popupRef.current;
    if (!popup) return;
    const rect = target.getBoundingClientRect();
    const kbContainer = target.closest('[data-keyboard]');
    const kbRect = kbContainer?.getBoundingClientRect();
    if (!kbRect) return;

    popup.textContent = label;
    popup.style.left = `${rect.left - kbRect.left + rect.width / 2}px`;
    popup.style.top = `${rect.top - kbRect.top - 56}px`;
    popup.style.opacity = '1';
    popup.style.transform = 'translateX(-50%) scale(1)';
  }, []);

  const hidePopup = useCallback(() => {
    const popup = popupRef.current;
    if (!popup) return;
    popup.style.opacity = '0';
    popup.style.transform = 'translateX(-50%) scale(0.5)';
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = (e.target as HTMLElement).closest('[data-key]') as HTMLElement | null;
    if (!target) return;

    const key = target.dataset.key!;
    const type = target.dataset.type as KeyType;

    target.classList.add('key-active');
    activeKeyRef.current = target;

    if (type === 'letter') {
      const label = isShiftActive ? key.toUpperCase() : key.toLowerCase();
      showPopup(target, label);
    }

    triggerHaptic();
    onKeyAction(key, type);
  }, [onKeyAction, isShiftActive, showPopup]);

  const handlePointerUp = useCallback(() => {
    if (activeKeyRef.current) {
      activeKeyRef.current.classList.remove('key-active');
      activeKeyRef.current = null;
    }
    hidePopup();
  }, [hidePopup]);

  const isSpecial = (type: KeyType) => type !== 'letter' && type !== 'space';

  return (
    <div
      data-keyboard={t === THEMES.light ? 'light' : 'dark'}
      className="relative flex flex-col w-full select-none"
      style={{
        padding: '8px 3px 4px',
        gap: '12px',
        overflow: 'visible',
        contain: 'layout style',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent',
        WebkitUserSelect: 'none',
      } as React.CSSProperties}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Key popup preview — positioned above the keyboard, not clipped */}
      <div
        ref={popupRef}
        className="absolute pointer-events-none z-[100]"
        style={{
          width: '52px',
          height: '52px',
          background: t.popupBg,
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '36px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
          color: t.glyph,
          opacity: 0,
          transform: 'translateX(-50%) scale(0.5)',
          transition: 'opacity 0.02s, transform 0.02s',
        }}
      />

      {rows.map((row, ri) => (
        <div key={ri} className="flex justify-center w-full" style={{ gap: '6px' }}>
          {row.map((k) => {
            const special = isSpecial(k.type);

            const renderLabel = () => {
              if (k.type === 'shift') return <ShiftIcon active={isShiftActive} color={t.glyph} />;
              if (k.type === 'backspace') return <BackspaceIcon color={t.glyph} />;
              if (k.type === 'return') return <ReturnIcon color={t.glyph} />;
              if (k.type === 'emoji') return <EmojiIcon color={t.glyph} />;
              if (k.type === 'mode') return (
                <span className="pointer-events-none" style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  fontSize: '16px', fontWeight: 400, color: t.glyph,
                  letterSpacing: '-0.3px',
                }}>{k.label || k.key}</span>
              );
              if (k.label) return (
                <span className="pointer-events-none" style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  fontSize: '16px', fontWeight: 400, color: t.glyph,
                  letterSpacing: k.type === 'space' ? '-0.4px' : undefined,
                }}>{k.label}</span>
              );
              return (
                <span className="pointer-events-none" style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  fontSize: '23px', fontWeight: 400, color: t.glyph,
                  WebkitFontSmoothing: 'antialiased',
                } as React.CSSProperties}>
                  {isShiftActive ? k.key.toUpperCase() : k.key.toLowerCase()}
                </span>
              );
            };

            return (
              <div
                key={k.key + ri}
                data-key={k.key}
                data-type={k.type}
                className="flex items-center justify-center"
                style={{
                  flex: k.flex ? `${k.flex} 0 0` : '1 0 0',
                  height: '42px',
                  borderRadius: '5px',
                  backgroundColor:
                    k.type === 'shift' && isShiftActive ? '#FFFFFF' :
                    special ? t.specialKey : t.letterKey,
                  boxShadow: t.keyShadow,
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  transition: 'background-color 0.05s ease-out, box-shadow 0.05s ease-out',
                } as React.CSSProperties}
              >
                {renderLabel()}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
});

// ── Emoji panel ──────────────────────────────────────────────────────

const EmojiPanel = memo(function EmojiPanel({ onSelect, onClose, onBackspace, t }: { onSelect: (emoji: string) => void; onClose: () => void; onBackspace: () => void; t: KbTheme }) {
  // Match total keyboard grid height: 8px top + 4×42px rows + 3×12px gaps + 4px bottom = 216px
  // Bottom bar = 4px + 42px + 8px = 54px → scroll area = 162px
  return (
    <div
      className="w-full select-none flex flex-col"
      style={{
        backgroundColor: t.surface,
        height: '216px',
      }}
    >
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '8px 6px',
          touchAction: 'pan-y',
          WebkitOverflowScrolling: 'touch',
        } as React.CSSProperties}
      >
        {EMOJI_ROWS.map((row, ri) => (
          <div key={ri} className="flex justify-start w-full" style={{ gap: '2px', marginBottom: '6px' }}>
            {row.map((emoji) => (
              <div
                key={emoji}
                onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); onSelect(emoji); triggerHaptic(); }}
                className="flex items-center justify-center"
                style={{
                  width: '10%',
                  height: '44px',
                  fontSize: '28px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'manipulation',
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* ABC button to collapse emoji panel */}
      <div className="flex justify-center w-full" style={{ padding: '4px 3px 8px', gap: '6px' }}>
        <div
          data-key="ABC"
          onPointerDown={(e) => { e.preventDefault(); onClose(); triggerHaptic(); }}
          className="flex items-center justify-center"
          style={{
            flex: '2.2 0 0',
            height: '42px',
            borderRadius: '5px',
            backgroundColor: t.specialKey,
            boxShadow: t.keyShadow,
            cursor: 'pointer',
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          <span className="pointer-events-none" style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            fontSize: '16px', fontWeight: 400, color: t.glyph,
            letterSpacing: '-0.3px',
          }}>ABC</span>
        </div>
        <div style={{ flex: '1.1 0 0', height: '42px' }} />
        <div style={{ flex: '5 0 0', height: '42px' }} />
        <div
          onPointerDown={(e) => { e.preventDefault(); onBackspace(); triggerHaptic(); }}
          className="flex items-center justify-center"
          style={{
            flex: '2.2 0 0',
            height: '42px',
            borderRadius: '5px',
            backgroundColor: t.specialKey,
            boxShadow: t.keyShadow,
            cursor: 'pointer',
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          <BackspaceIcon color={t.glyph} />
        </div>
      </div>
    </div>
  );
});

// ── Injected active-state styles ─────────────────────────────────────

const KEYBOARD_STYLES = `
  [data-keyboard="dark"] [data-key].key-active {
    background-color: ${THEMES.dark.keyActiveBg} !important;
    box-shadow: none !important;
  }
  [data-keyboard="light"] [data-key].key-active {
    background-color: ${THEMES.light.keyActiveBg} !important;
    box-shadow: none !important;
  }
`;

// ── NativeInputBar ───────────────────────────────────────────────────

interface NativeInputBarProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (files?: File[]) => void;
  onClose: () => void;
  placeholder: string;
  showPrompts?: boolean;
  prompts?: string[];
  selectedPromptIndex?: number | null;
  onPromptClick?: (prompt: string, index: number) => void;
  focusCursorAtEnd?: boolean;
  initialFiles?: File[];
  theme?: "dark" | "light";
  /** Render in the layout flow (no fixed overlay, no dim backdrop) so the page
   *  above shrinks to fit. Used by the DM page. Defaults to false (fixed overlay). */
  inline?: boolean;
}

export function NativeInputBar({
  value,
  onChange,
  onSend,
  onClose,
  placeholder,
  showPrompts = false,
  prompts = [],
  selectedPromptIndex = null,
  onPromptClick,
  focusCursorAtEnd = false,
  initialFiles = [],
  theme = "dark",
  inline = false,
}: NativeInputBarProps) {
  const t = THEMES[theme];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const promptRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>(initialFiles);
  const [isShiftActive, setIsShiftActive] = useState(() => shouldAutoCap(value, value.length));
  const [keyboardMode, setKeyboardMode] = useState<'letters' | 'numbers' | 'symbols'>('letters');
  const [showEmojis, setShowEmojis] = useState(false);

  // Refs for fast-typing optimization — always current, never stale in closures
  const valueRef = useRef(value);
  const cursorPosRef = useRef({ start: 0, end: 0 });
  const shiftRef = useRef(isShiftActive);
  const heightRafRef = useRef<number>(0);
  const keyActionGuardRef = useRef(false); // prevents onSelect from overwriting cursor during keyboard updates

  // Sync refs on every render so they always reflect latest state
  valueRef.current = value;
  shiftRef.current = isShiftActive;

  useEffect(() => {
    const id = 'kb-active-styles';
    if (!document.getElementById(id)) {
      const style = document.createElement('style');
      style.id = id;
      style.textContent = KEYBOARD_STYLES;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    const ta = textareaRef.current;
    if (ta) {
      ta.focus();
      // Place cursor at end of existing text on mount
      if (value) {
        const pos = value.length;
        ta.selectionStart = ta.selectionEnd = pos;
        cursorPosRef.current = { start: pos, end: pos };
      } else {
        cursorPosRef.current = { start: 0, end: 0 };
      }
    }
  }, []);

  useEffect(() => {
    if (focusCursorAtEnd) {
      const ta = textareaRef.current;
      if (ta && value) {
        const pos = value.length;
        setTimeout(() => {
          ta.selectionStart = ta.selectionEnd = pos;
          ta.focus();
          cursorPosRef.current = { start: pos, end: pos };
        }, 50);
      }
    }
  }, [focusCursorAtEnd, value]);

  useEffect(() => {
    if (selectedPromptIndex !== null && promptRefs.current[selectedPromptIndex]) {
      promptRefs.current[selectedPromptIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selectedPromptIndex]);

  useEffect(() => {
    if (heightRafRef.current) cancelAnimationFrame(heightRafRef.current);
    heightRafRef.current = requestAnimationFrame(() => {
      const ta = textareaRef.current;
      if (ta) { ta.style.height = 'auto'; ta.style.height = `${Math.min(ta.scrollHeight, 5 * 22)}px`; }
      heightRafRef.current = 0;
    });
  }, [value]);

  const handleSubmit = useCallback(() => {
    if (valueRef.current.trim() || selectedFiles.length > 0) {
      onSend(selectedFiles);
      setSelectedFiles([]);
      setIsShiftActive(true); // next message starts capitalized
    }
  }, [selectedFiles, onSend]);

  // Helper: update value + cursor refs, call onChange, schedule DOM cursor update
  // Must be declared before handleEmojiSelect, handleKeyAction, handleEmojiBackspace
  const applyKeyEdit = useCallback((newValue: string, newPos: number) => {
    const ta = textareaRef.current;
    if (!ta) return;
    keyActionGuardRef.current = true;
    valueRef.current = newValue;
    cursorPosRef.current = { start: newPos, end: newPos };
    onChange(newValue);
    requestAnimationFrame(() => {
      ta.selectionStart = ta.selectionEnd = newPos;
      requestAnimationFrame(() => { keyActionGuardRef.current = false; });
    });
  }, [onChange]);

  const handleEmojiSelect = useCallback((emoji: string) => {
    const currentValue = valueRef.current;
    const { start, end } = cursorPosRef.current;
    const newValue = currentValue.slice(0, start) + emoji + currentValue.slice(end);
    applyKeyEdit(newValue, start + emoji.length);
  }, [applyKeyEdit]);

  // eslint-disable-next-line react-hooks/exhaustive-deps -- value/isShiftActive read from refs to avoid stale closures
  const handleKeyAction = useCallback((key: string, type: KeyType) => {
    const ta = textareaRef.current;
    if (!ta) return;

    const currentValue = valueRef.current;
    const { start, end } = cursorPosRef.current;

    if (type === 'backspace') {
      if (start === end && start > 0) {
        const nv = currentValue.slice(0, start - 1) + currentValue.slice(end);
        applyKeyEdit(nv, start - 1);
        setIsShiftActive(shouldAutoCap(nv, start - 1));
      } else if (start !== end) {
        const nv = currentValue.slice(0, start) + currentValue.slice(end);
        applyKeyEdit(nv, start);
        setIsShiftActive(shouldAutoCap(nv, start));
      }
    } else if (type === 'return') {
      handleSubmit();
    } else if (type === 'space') {
      const nv = currentValue.slice(0, start) + ' ' + currentValue.slice(end);
      applyKeyEdit(nv, start + 1);
      setIsShiftActive(shouldAutoCap(nv, start + 1));
    } else if (type === 'shift') {
      setIsShiftActive(prev => !prev);
    } else if (type === 'mode') {
      setShowEmojis(false);
      if (key === '123') setKeyboardMode('numbers');
      else if (key === '#+') setKeyboardMode('symbols');
      else if (key === 'ABC') setKeyboardMode('letters');
    } else if (type === 'emoji') {
      setShowEmojis(prev => !prev);
    } else {
      const currentShift = shiftRef.current;
      const char = currentShift ? key.toUpperCase() : key.toLowerCase();
      const nv = currentValue.slice(0, start) + char + currentValue.slice(end);
      applyKeyEdit(nv, start + 1);
      // Recompute auto-cap from the new text — one-shot shift turns off after a
      // letter unless the cursor is now at a fresh sentence start.
      setIsShiftActive(shouldAutoCap(nv, start + 1));
    }
    ta.focus();
  }, [applyKeyEdit, handleSubmit]);

  const handleEmojiBackspace = useCallback(() => {
    const currentValue = valueRef.current;
    const { start, end } = cursorPosRef.current;
    if (start === end && start > 0) {
      applyKeyEdit(currentValue.slice(0, start - 1) + currentValue.slice(end), start - 1);
    } else if (start !== end) {
      applyKeyEdit(currentValue.slice(0, start) + currentValue.slice(end), start);
    }
  }, [applyKeyEdit]);

  const handleMediaClick = () => fileInputRef.current?.click();
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) setSelectedFiles(prev => [...prev, ...Array.from(files)]);
  };
  const handleRemoveFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const rows = keyboardMode === 'letters' ? LETTERS_ROWS
    : keyboardMode === 'numbers' ? NUMBERS_ROWS : SYMBOLS_ROWS;

  return (
    <>
      {/* Backdrop — only for the fixed-overlay (meeting) mode. Inline mode (DM)
          shrinks the content above instead, so no dim layer is needed. */}
      {!inline && <div className="fixed inset-0 z-40 bg-black/20" onClick={onClose} />}

      {/* Keyboard container — overflow:visible so popup isn't clipped. Inline mode
          renders in the layout flow so the page above it shrinks to fit. */}
      <div
        className={inline ? "relative w-full shrink-0" : "fixed bottom-0 left-0 right-0 z-50"}
        style={{ overflow: 'visible' }}
      >
        <div
          className="relative flex flex-col items-start w-full"
          style={{
            backgroundColor: t.surface,
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px',
            paddingTop: '4px',
            overflow: 'visible',
          }}
        >
          {/* Prompt pills — Copilot only */}
          {showPrompts && prompts.length > 0 && (
            <div className="w-full px-[11.643px] py-[4px]">
              <HorizontalScrollContainer>
                <div className="flex gap-[12px] items-center">
                  {prompts.map((prompt, index) => (
                    <button
                      key={index}
                      ref={el => promptRefs.current[index] = el}
                      onClick={() => onPromptClick?.(prompt, index)}
                      className={`flex-shrink-0 flex gap-[8px] items-center justify-center p-[12px] rounded-[12px] relative transition-colors ${
                        selectedPromptIndex === index ? 'bg-[#5a50db]' : 'bg-[#333]'
                      }`}
                    >
                      <div className="absolute border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px] border-[#3d3d3d]" />
                      <div className="flex flex-col gap-[5.822px] items-start rounded-[5.822px]">
                        <div
                          className="flex flex-col font-normal justify-center leading-[0] text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap"
                          style={{ fontFamily: 'var(--font-sf-pro)', fontVariationSettings: "'wdth' 100" }}
                        >
                          <p className="leading-[14.554px]">{prompt}</p>
                        </div>
                      </div>
                      {selectedPromptIndex === index ? (
                        <div className="w-[20px] h-[20px]">
                          <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                            <g><path d={svgPathsCopilot.p2ec5b000} fill="white" /></g>
                          </svg>
                        </div>
                      ) : (
                        <div className="w-[17.387px] h-[20px]">
                          <svg className="block size-full" fill="none" viewBox="0 0 17.3869 20">
                            <path d={svgPaths.p4a6f140} fill="white" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </HorizontalScrollContainer>
            </div>
          )}

          {/* Input area */}
          <div className="relative shrink-0 w-full" style={{ backgroundColor: t.surface }}>
            {selectedFiles.length > 0 && (
              <div className="px-[10px] pt-[10px] pb-[4px]">
                <HorizontalScrollContainer>
                  <div className="flex gap-[8px]">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="relative flex-shrink-0 w-[80px] h-[80px] rounded-[8px] overflow-hidden bg-[#2a2a2a]">
                        {file.type.startsWith('image/') ? (
                          <img src={URL.createObjectURL(file)} alt={file.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center"><div className="text-white text-[24px]">🎥</div></div>
                        )}
                        <button onClick={() => handleRemoveFile(index)} className="absolute top-[4px] right-[4px] bg-black/60 rounded-full p-[4px]">
                          <svg className="w-[12px] h-[12px]" fill="white" viewBox="0 0 12 12"><path d="M1 1L11 11M11 1L1 11" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </HorizontalScrollContainer>
              </div>
            )}

            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
                <button onClick={handleMediaClick} className={`${t.mediaButton} content-stretch flex items-center p-[8px] relative rounded-[21px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 size-[32px]`}>
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 16 16"><path d={svgPaths.p23b109c0} fill={t.glyph} /></svg>
                  </div>
                </button>
                <input ref={fileInputRef} type="file" accept="image/*,video/*" multiple className="hidden" onChange={handleFileSelect} />
                <div className="flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                  <textarea
                    ref={textareaRef}
                    value={value}
                    onChange={(e) => {
                      if (keyActionGuardRef.current) return;
                      onChange(e.target.value);
                      // Sync refs after direct textarea interaction (e.g., paste)
                      requestAnimationFrame(() => {
                        const ta = textareaRef.current;
                        if (ta) {
                          valueRef.current = ta.value;
                          cursorPosRef.current = { start: ta.selectionStart, end: ta.selectionEnd };
                          setIsShiftActive(shouldAutoCap(ta.value, ta.selectionStart));
                        }
                      });
                    }}
                    onSelect={() => {
                      if (keyActionGuardRef.current) return;
                      const ta = textareaRef.current;
                      if (ta) cursorPosRef.current = { start: ta.selectionStart, end: ta.selectionEnd };
                    }}
                    placeholder={placeholder}
                    rows={1}
                    inputMode="none"
                    className={`w-full bg-transparent border-none outline-none resize-none leading-[22px] text-[17px] tracking-[-0.41px] ${t.inputPlaceholder}`}
                    style={{ maxHeight: `${5 * 22}px`, overflow: 'auto', color: t.inputText, fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
                  />
                </div>
                <button onPointerDown={(e) => { e.preventDefault(); handleSubmit(); }} className={`relative rounded-[30px] shrink-0 size-[32px] transition-colors ${value || selectedFiles.length > 0 ? t.sendActiveBg : 'bg-transparent'}`}>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+1px)] size-[16px] top-1/2">
                    <svg className="block size-full" fill="none" viewBox="0 0 16 16"><path d={svgPaths.p359730f0} fill={(value.trim() || selectedFiles.length > 0) ? "white" : t.sendInactiveGlyph} /></svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Keyboard or emoji panel */}
          {showEmojis ? (
            <EmojiPanel
              onSelect={handleEmojiSelect}
              onClose={() => setShowEmojis(false)}
              onBackspace={handleEmojiBackspace}
              t={t}
            />
          ) : (
            <KeyboardGrid rows={rows} isShiftActive={isShiftActive} onKeyAction={handleKeyAction} t={t} />
          )}

          {/* Safe area padding for home indicator */}
          <div style={{ height: 'env(safe-area-inset-bottom, 0px)', backgroundColor: t.surface }} />
        </div>
      </div>
    </>
  );
}
