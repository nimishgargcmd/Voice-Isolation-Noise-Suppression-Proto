import React, { useState, useRef, useLayoutEffect } from "react";
import { Minus, Plus, ChevronUp, ChevronDown } from "lucide-react";
import { MultitaskingPanel } from "@/app/components/MultitaskingPanel";
import { PillActionButton } from "@/app/components/PillActionButton";
import { PanelHeaderAction } from "@/app/components/PanelHeaderAction";
import { OutlineButton } from "@/app/components/AgendaTimerPanel";
import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/app/components/ui/alert-dialog";
import type { AgendaItem } from "@/app/components/ActiveMeetingContext";

const MIN_DURATION = 5;
const MAX_DURATION = 120;
const STEP = 5;

interface AgendaEditViewProps {
  /** Committed agenda items (id / title / duration). */
  items: AgendaItem[];
  /** Index of the in-progress topic — only items after this are editable. */
  currentTopicIndex: number;
  /** Commit the edited list to context (called once, on Save). */
  onSaveItems: (items: AgendaItem[]) => void;
  /** Return to the main agenda view. */
  onBack: () => void;
  /** Minutes already elapsed on the in-progress topic — clamps its stepper minimum. */
  currentElapsedMin?: number;
}

export function AgendaEditView({ items, currentTopicIndex, onSaveItems, onBack, currentElapsedMin = 0 }: AgendaEditViewProps) {
  // Edits accumulate in a local draft and only commit on Save.
  const [draft, setDraft] = useState<AgendaItem[]>(items);
  const [confirmDiscard, setConfirmDiscard] = useState(false);
  const { activeVersionId } = useVersion();
  const isMvp = isMvpFamily(activeVersionId);

  const dirty = JSON.stringify(draft) !== JSON.stringify(items);
  const nextId = draft.length ? Math.max(...draft.map((i) => i.id)) + 1 : 1;

  // The in-progress topic can't be shrunk below time already spent (rounded up to the step).
  const currentMinDuration = Math.max(MIN_DURATION, Math.ceil(currentElapsedMin / STEP) * STEP);

  const setDuration = (index: number, delta: number, minDuration = MIN_DURATION) => {
    setDraft((prev) =>
      prev.map((it, i) =>
        i === index
          ? { ...it, duration: Math.min(MAX_DURATION, Math.max(minDuration, it.duration + delta)) }
          : it
      )
    );
  };

  const setTitle = (index: number, title: string) => {
    setDraft((prev) => prev.map((it, i) => (i === index ? { ...it, title } : it)));
  };

  const move = (index: number, dir: -1 | 1) => {
    const target = index + dir;
    // Never move into or past the started prefix; keep targets in range.
    if (target <= currentTopicIndex || target < 0 || target >= draft.length) return;
    setDraft((prev) => {
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  const addItem = () => {
    setDraft((prev) => [...prev, { id: nextId, title: "New topic", duration: 5 }]);
  };

  const handleSave = () => {
    // Trim-fallback so a cleared title never persists empty.
    onSaveItems(draft.map((it) => ({ ...it, title: it.title.trim() === "" ? "New topic" : it.title })));
    onBack();
  };

  const handleCancel = () => {
    if (dirty) setConfirmDiscard(true);
    else onBack();
  };

  return (
    <>
    <MultitaskingPanel
      title="Edit agenda"
      onClose={handleCancel}
      isNestedView
      showFooter={false}
      actionButton={
        <PanelHeaderAction label="Save" onClick={handleSave} disabled={!dirty} />
      }
    >
      <div className={isMvp ? "flex flex-col px-[16px] pt-[8px] pb-[16px]" : "px-4 pt-1 pb-3"}>
        <div className={isMvp ? "flex flex-col" : "bg-[rgba(36,36,37,0.7)] rounded-[24px] overflow-hidden mb-4"}>
          {draft.map((item, index) => {
            const notStarted = index > currentTopicIndex;
            const isCurrent = index === currentTopicIndex;
            const isLast = index === draft.length - 1;
            const canMoveUp = index > currentTopicIndex + 1;
            const canMoveDown = notStarted && index < draft.length - 1;

            return (
              <div key={item.id} className={`relative ${isMvp ? "py-[12px]" : "px-4 py-3"}`}>
                {notStarted ? (
                  /* Not-started — full edit: title, reorder, duration */
                  <div className="flex flex-col gap-3">
                    {/* Title input — wraps to fit the full topic name */}
                    <TitleField value={item.title} onChange={(v) => setTitle(index, v)} isMvp={isMvp} />
                    {/* Controls: reorder chevrons (left) + duration stepper (right) */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <IconButton label="Move topic earlier" disabled={!canMoveUp} onClick={() => move(index, -1)} isMvp={isMvp}>
                          <ChevronUp className={`w-5 h-5 ${isMvp ? "text-fy27-icon-primary" : "text-white"}`} />
                        </IconButton>
                        <IconButton label="Move topic later" disabled={!canMoveDown} onClick={() => move(index, 1)} isMvp={isMvp}>
                          <ChevronDown className={`w-5 h-5 ${isMvp ? "text-fy27-icon-primary" : "text-white"}`} />
                        </IconButton>
                      </div>
                      <DurationStepper value={item.duration} onChange={(delta) => setDuration(index, delta)} isMvp={isMvp} />
                    </div>
                  </div>
                ) : isCurrent ? (
                  /* In-progress — duration only (title + order locked) */
                  <div className="flex flex-col gap-3">
                    <span
                      className={`text-[17px] tracking-[-0.41px] leading-[22px] text-left font-semibold ${isMvp ? "text-fy27-text-primary" : "text-white"}`}
                      style={{ fontFamily: "var(--font-sf-pro)" }}
                    >
                      {item.title}
                    </span>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[13px] tracking-[-0.08px] leading-[18px] font-medium ${isMvp ? "text-fy27-text-interactive" : "text-[#7f85f5]"}`}
                        style={{ fontFamily: "var(--font-sf-pro)" }}
                      >
                        In progress
                      </span>
                      <DurationStepper
                        value={item.duration}
                        min={currentMinDuration}
                        onChange={(delta) => setDuration(index, delta, currentMinDuration)}
                        isMvp={isMvp}
                      />
                    </div>
                  </div>
                ) : (
                  /* Completed — fully locked, read-only */
                  <div className="flex items-start justify-between gap-4 opacity-50">
                    <div className="flex flex-col gap-[6px] items-start flex-1">
                      <span
                        className={`text-[17px] tracking-[-0.41px] leading-[22px] text-left ${isMvp ? "text-fy27-text-primary" : "text-white"}`}
                        style={{ fontFamily: "var(--font-sf-pro)" }}
                      >
                        {item.title}
                      </span>
                      <span
                        className={`text-[13px] tracking-[-0.08px] leading-[18px] ${isMvp ? "text-fy27-text-secondary" : "text-[#b6b5b5]"}`}
                        style={{ fontFamily: "var(--font-sf-pro)" }}
                      >
                        Completed · locked
                      </span>
                    </div>
                    <span
                      className={`text-[15px] tracking-[-0.24px] leading-[20px] shrink-0 mt-0.5 ${isMvp ? "text-fy27-text-secondary" : "text-[#b6b5b5]"}`}
                      style={{ fontFamily: "var(--font-sf-pro)" }}
                    >
                      {item.duration} min
                    </span>
                  </div>
                )}

                {!isLast && <div className={`absolute bottom-0 left-0 right-0 ${isMvp ? "h-px bg-fy27-divider" : "h-[0.5px] bg-[#323232]"}`} />}
              </div>
            );
          })}
        </div>

        {/* Add agenda item — appends at the end */}
        {isMvp ? (
          <OutlineButton onClick={addItem} className="w-full mt-[20px]">
            <Plus className="w-4 h-4" />
            Add agenda item
          </OutlineButton>
        ) : (
          <PillActionButton onClick={addItem} className="w-full flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" />
            Add agenda item
          </PillActionButton>
        )}
      </div>
    </MultitaskingPanel>

    {/* iOS-style discard confirmation */}
    <AlertDialog open={confirmDiscard} onOpenChange={setConfirmDiscard}>
      <AlertDialogContent
        className="w-[270px] max-w-[270px] p-0 gap-0 border-0 rounded-[14px] overflow-hidden shadow-none bg-[rgba(40,40,40,0.82)] backdrop-blur-[20px]"
        style={{ fontFamily: "var(--font-sf-pro)" }}
      >
        <div className="px-4 pt-5 pb-4 text-center">
          <AlertDialogTitle className="text-white text-[17px] font-semibold leading-[22px]">
            Discard changes?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-white/60 text-[13px] leading-[18px] mt-1">
            Your agenda edits won't be saved.
          </AlertDialogDescription>
        </div>
        <div className="h-[0.5px] bg-white/15" />
        <div className="flex items-stretch">
          <button
            onClick={() => setConfirmDiscard(false)}
            className="flex-1 py-[11px] text-[#0a84ff] text-[17px] font-semibold active:bg-white/5"
          >
            Keep editing
          </button>
          <div className="w-[0.5px] bg-white/15" />
          <button
            onClick={onBack}
            className="flex-1 py-[11px] text-[#ff453a] text-[17px] font-normal active:bg-white/5"
          >
            Discard
          </button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
    </>
  );
}

/** Title input that auto-grows and wraps so long topic names stay fully visible. */
function TitleField({ value, onChange, isMvp = false }: { value: string; onChange: (v: string) => void; isMvp?: boolean }) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [value]);

  return (
    <textarea
      ref={ref}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={1}
      placeholder="Topic name"
      aria-label="Agenda topic name"
      className={`w-full resize-none overflow-hidden rounded-[10px] px-3 py-2 text-[15px] tracking-[-0.24px] leading-[20px] outline-none focus:ring-2 focus:ring-inset ${
        isMvp
          ? "bg-fy27-surface-chat-incoming text-fy27-text-primary focus:ring-fy27-brand placeholder:text-fy27-text-secondary"
          : "bg-[rgba(255,255,255,0.06)] focus:bg-[rgba(255,255,255,0.1)] text-white focus:ring-[#7f85f5] placeholder-[#8e8e93]"
      }`}
      style={{ fontFamily: "var(--font-sf-pro)" }}
    />
  );
}

function IconButton({
  children,
  onClick,
  disabled,
  label,
  isMvp = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  label: string;
  isMvp?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`w-11 h-11 rounded-full flex items-center justify-center disabled:opacity-25 disabled:pointer-events-none transition-colors ${
        isMvp
          ? "bg-fy27-surface-raised active:bg-fy27-surface-subtlest"
          : "bg-[rgba(255,255,255,0.08)] active:bg-[rgba(255,255,255,0.2)]"
      }`}
    >
      {children}
    </button>
  );
}

function DurationStepper({ value, onChange, min = MIN_DURATION, isMvp = false }: { value: number; onChange: (delta: number) => void; min?: number; isMvp?: boolean }) {
  const glyph = isMvp ? "text-fy27-icon-primary" : "text-white";
  return (
    <div className="flex items-center gap-1.5">
      <IconButton label="Decrease duration" disabled={value <= min} onClick={() => onChange(-STEP)} isMvp={isMvp}>
        <Minus className={`w-4 h-4 ${glyph}`} />
      </IconButton>
      <span
        className={`text-[15px] font-medium tabular-nums w-[54px] text-center ${isMvp ? "text-fy27-text-primary" : "text-white"}`}
        style={{ fontFamily: "var(--font-sf-pro)" }}
      >
        {value} min
      </span>
      <IconButton label="Increase duration" disabled={value >= MAX_DURATION} onClick={() => onChange(STEP)} isMvp={isMvp}>
        <Plus className={`w-4 h-4 ${glyph}`} />
      </IconButton>
    </div>
  );
}
