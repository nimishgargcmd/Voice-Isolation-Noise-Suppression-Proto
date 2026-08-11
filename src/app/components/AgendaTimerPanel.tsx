import React, { useState } from "react";
import { MultitaskingPanel } from "@/app/components/MultitaskingPanel";
import { AgendaEditView } from "@/app/components/AgendaEditView";
import { PillActionButton } from "@/app/components/PillActionButton";
import { PanelHeaderAction } from "@/app/components/PanelHeaderAction";
import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";

interface AgendaItemWithStatus {
  id: number;
  title: string;
  duration: number;
  status: "complete" | "in-progress" | "not-started";
}

interface AgendaTimerPanelProps {
  onClose: () => void;
  currentTopicName: string;
  agendaItems: AgendaItemWithStatus[];
  onPause: () => void;
  onReset: () => void;
  isPaused: boolean;
  /** Index of the in-progress topic — passed to the edit view for lock logic. */
  currentTopicIndex: number;
  /** Minutes already elapsed on the in-progress topic — clamps its duration stepper. */
  currentElapsedMin: number;
  /** Persist edited agenda list to context. */
  onSaveItems: (items: Array<{ id: number; title: string; duration: number }>) => void;
}

export function AgendaTimerPanel({ onClose, currentTopicName, agendaItems, onPause, onReset, isPaused, currentTopicIndex, currentElapsedMin, onSaveItems }: AgendaTimerPanelProps) {
  const [currentView, setCurrentView] = useState<"main" | "edit">("main");
  const { activeVersionId } = useVersion();
  const isMvp = isMvpFamily(activeVersionId);

  if (currentView === "edit") {
    return (
      <AgendaEditView
        items={agendaItems.map(({ id, title, duration }) => ({ id, title, duration }))}
        currentTopicIndex={currentTopicIndex}
        currentElapsedMin={currentElapsedMin}
        onSaveItems={onSaveItems}
        onBack={() => setCurrentView("main")}
      />
    );
  }

  return (
    <MultitaskingPanel
      title="Agenda timer"
      onClose={onClose}
      actionButton={
        <PanelHeaderAction label="Edit" onClick={() => setCurrentView("edit")} />
      }
      showFooter={false}
    >
      {/* Scrollable Content */}
      {isMvp ? (
        /* FY27 MVP: flat token list + Teams 2 iOS outline buttons (pre-join style). */
        <div className="flex flex-col px-[16px] pt-[8px] pb-[16px]">
          <div className="flex flex-col">
            {agendaItems.map((item, index) => (
              <AgendaItemRow
                key={item.id}
                item={item}
                isLast={index === agendaItems.length - 1}
                currentTopicName={currentTopicName}
                isMvp
              />
            ))}
          </div>
          <div className="flex gap-[12px] mt-[20px]">
            <OutlineButton onClick={onPause} className="flex-1">{isPaused ? "Resume" : "Pause"}</OutlineButton>
            <OutlineButton onClick={onReset} className="flex-1">Reset</OutlineButton>
          </div>
        </div>
      ) : (
        <div className="px-4 pt-1 pb-3">
          {/* Agenda Items List */}
          <div className="bg-[rgba(36,36,37,0.7)] rounded-[24px] overflow-hidden py-0.5 mb-6">
            {agendaItems.map((item, index) => (
              <AgendaItemRow
                key={item.id}
                item={item}
                isLast={index === agendaItems.length - 1}
                currentTopicName={currentTopicName}
              />
            ))}
          </div>

          {/* Pause / Resume + Reset Timer Buttons — equal width, same style */}
          <div className="flex gap-3">
            <PillActionButton onClick={onPause} className="flex-1">
              {isPaused ? "Resume" : "Pause"}
            </PillActionButton>
            <PillActionButton onClick={onReset} className="flex-1">
              Reset
            </PillActionButton>
          </div>
        </div>
      )}
    </MultitaskingPanel>
  );
}

/** Teams 2 iOS outline button (transparent, 1px brand border, text/interactive) — same as pre-join "More join options". */
export function OutlineButton({ onClick, className = "", children }: { onClick?: () => void; className?: string; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-[8px] h-[52px] px-[16px] rounded-[8px] border border-fy27-brand text-fy27-text-interactive text-[15px] text-center tracking-[-0.24px] whitespace-nowrap active:opacity-60 transition-opacity ${className}`}
      style={{ fontWeight: 500, lineHeight: "20px", fontFamily: "var(--font-sf-pro)" }}
    >
      {children}
    </button>
  );
}

function AgendaItemRow({
  item,
  isLast,
  currentTopicName,
  isMvp = false,
}: {
  item: AgendaItemWithStatus;
  isLast: boolean;
  currentTopicName: string;
  isMvp?: boolean;
}) {
  const isActive = item.status === "in-progress";
  const statusText = item.status === "complete" ? "Completed" : isActive ? "In progress" : "Not started";
  const isCurrentTopic = item.title === currentTopicName;

  // FV (legacy dark) vs MVP (token) palettes.
  const statusColor = isMvp
    ? (item.status === "complete" ? "text-fy27-icon-success" : isActive ? "text-fy27-text-interactive" : "text-fy27-text-secondary")
    : (item.status === "complete" ? "text-[#37ef46]" : isActive ? "text-[#7f85f5]" : "text-[#b6b5b5]");
  const primaryClass = isMvp
    ? `text-fy27-text-primary ${isActive ? "font-semibold" : "font-normal"}`
    : (isActive ? "text-white font-bold" : "text-[#b6b5b5] font-normal");
  const durationClass = isMvp
    ? `text-fy27-text-secondary ${isActive ? "font-semibold" : "font-normal"}`
    : (isActive ? "text-white font-bold" : "text-[#b6b5b5] font-normal");

  return (
    <button className={`w-full ${isMvp ? "py-[12px] gap-[30px]" : "px-4 py-3 gap-4"} flex items-start justify-between relative`}>
      {/* Left side: Title and status */}
      <div className="flex flex-col gap-[4px] items-start flex-1">
        <span
          className={`text-[17px] tracking-[-0.41px] leading-[22px] text-left ${primaryClass}`}
          style={{ fontFamily: "var(--font-sf-pro)" }}
        >
          {isCurrentTopic ? currentTopicName : item.title}
        </span>
        <span
          className={`text-[15px] tracking-[-0.08px] leading-[20px] ${statusColor} font-medium`}
          style={{ fontFamily: "var(--font-sf-pro)" }}
        >
          {statusText}
        </span>
      </div>

      {/* Right side: Duration */}
      <span
        className={`text-[15px] tracking-[-0.24px] leading-[20px] shrink-0 mt-0.5 ${durationClass}`}
        style={{ fontFamily: "var(--font-sf-pro)" }}
      >
        {item.duration} min
      </span>

      {/* Border bottom - only if not last item */}
      {!isLast && (
        <div className={`absolute bottom-0 left-0 right-0 ${isMvp ? "h-px bg-fy27-divider" : "h-[0.5px] bg-[#323232]"}`} />
      )}
    </button>
  );
}