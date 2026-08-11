import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { MultitaskingPanel } from "@/app/components/MultitaskingPanel";
import { PanelHeaderAction } from "@/app/components/PanelHeaderAction";
import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";
import svgPaths from "@/imports/svg-3o4pdasyza";
import svgPathsFigma from "@/imports/svg-eh80f8nzlx";

interface NotificationsPanelProps {
  onClose: () => void;
  seenNotifications: Set<string>;
  onDismissNotification: (notificationId: string) => void;
  onClearAll: () => void;
  onViewLobby?: () => void;
}

/* ── Glyphs (currentColor so the row drives the colour: icon.primary in MVP, white in FV) ── */
function RecordingIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d={svgPaths.p3e114300} fill="currentColor" />
    </svg>
  );
}
function LobbyIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d={svgPathsFigma.p3cbfa6f0} fill="currentColor" />
    </svg>
  );
}
function InterpreterIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d={svgPaths.p1f0f6680} fill="currentColor" />
    </svg>
  );
}
function BackgroundNoiseIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d={svgPaths.pa71fa00} fill="currentColor" />
    </svg>
  );
}
function GearIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d={svgPaths.p3489a600} fill="currentColor" />
    </svg>
  );
}

function SectionChevron({ isExpanded, isMvp }: { isExpanded: boolean; isMvp: boolean }) {
  return (
    <div className={`relative shrink-0 size-[12px] ${isMvp ? "text-fy27-icon-secondary" : ""}`}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
        style={{ transform: isExpanded ? "none" : "rotate(-90deg)", transition: "transform 0.2s" }}
      >
        <path d={svgPathsFigma.pf4077f0} fill={isMvp ? "currentColor" : "#919191"} />
      </svg>
    </div>
  );
}

/* ── Swipe-to-dismiss wrapper ── */
function SwipeableNotification({ notificationId, onDismiss, children }: { notificationId: string; onDismiss: (id: string) => void; children: React.ReactNode }) {
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isDismissing, setIsDismissing] = useState(false);

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      if (eventData.deltaX < 0) setSwipeOffset(Math.max(eventData.deltaX, -100));
    },
    onSwiped: (eventData) => {
      if (Math.abs(eventData.deltaX) > 50) {
        setIsDismissing(true);
        setTimeout(() => onDismiss(notificationId), 200);
      } else {
        setSwipeOffset(0);
      }
    },
    trackMouse: false,
    trackTouch: true,
  });

  return (
    <div
      {...handlers}
      className="w-full"
      style={{
        transform: isDismissing ? `translateX(-100%)` : `translateX(${swipeOffset}px)`,
        transition: isDismissing ? "transform 0.2s ease-out" : swipeOffset === 0 ? "transform 0.2s ease-out" : "none",
        opacity: isDismissing ? 0 : 1,
      }}
    >
      {children}
    </div>
  );
}

/* ── Inline action ── MVP = list R.Label (text/interactive, no fill); FV = pill. ── */
function ActionChip({ onClick, isMvp, children }: { onClick?: () => void; isMvp: boolean; children: React.ReactNode }) {
  if (isMvp) {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center shrink-0 px-[4px] py-[8px] text-fy27-text-interactive active:opacity-60 transition-opacity"
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-[16px] py-[8px] rounded-[9999px] shrink-0 bg-[rgba(255,255,255,0.1)] text-white active:opacity-60 transition-opacity"
    >
      {children}
    </button>
  );
}

interface NotifDef {
  id: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  action?: React.ReactNode;
}

/* ── Single notification row (MVP flat list vs FV dark card) ── */
function NotifRow({ def, isMvp, isLast }: { def: NotifDef; isMvp: boolean; isLast: boolean }) {
  return (
    <div className="relative flex items-center w-full">
      {!isMvp && <div className="absolute bg-[rgba(36,36,37,0.7)] inset-0" />}
      <div className={`flex items-center gap-[10px] relative w-full ${isMvp ? "py-[12px]" : "pl-[16px] pr-[12px] py-[12px]"}`}>
        <span className={`shrink-0 grid place-items-center size-[24px] ${isMvp ? "text-fy27-icon-primary" : "text-white"}`}>
          {def.icon}
        </span>
        <div
          className={`flex-1 min-w-0 tracking-[-0.08px] ${isMvp ? "text-[13px] leading-[18px] text-fy27-text-primary" : "text-[15px] leading-[20px] text-[#e1e1e1]"}`}
          style={{ fontFamily: "var(--font-sf-pro)" }}
        >
          {def.content}
        </div>
        {def.action && <span className="shrink-0 self-center">{def.action}</span>}
      </div>
    </div>
  );
}

/* ── Collapsible section ── */
function NotifSection({ title, defs, expanded, onToggle, isMvp, onDismiss }: {
  title: string;
  defs: NotifDef[];
  expanded: boolean;
  onToggle: () => void;
  isMvp: boolean;
  onDismiss: (id: string) => void;
}) {
  return (
    <div className="flex flex-col items-start w-full">
      <button
        onClick={onToggle}
        className="flex gap-[4px] items-center pt-[16px] pb-[8px] w-full"
      >
        <SectionChevron isExpanded={expanded} isMvp={isMvp} />
        <span
          className={`text-[17px] leading-[22px] tracking-[-0.41px] font-bold text-left ${isMvp ? "text-fy27-text-primary" : "text-[#5b5fc7]"}`}
          style={{ fontFamily: "var(--font-sf-pro)" }}
        >
          {title} ({defs.length})
        </span>
      </button>
      {expanded && (
        <div className={`w-full ${isMvp ? "flex flex-col" : "rounded-[24px] overflow-clip"}`}>
          {defs.map((d, i) => (
            <SwipeableNotification key={d.id} notificationId={d.id} onDismiss={onDismiss}>
              <NotifRow def={d} isMvp={isMvp} isLast={i === defs.length - 1} />
            </SwipeableNotification>
          ))}
        </div>
      )}
    </div>
  );
}

export function NotificationsPanel({ onClose, seenNotifications, onDismissNotification, onClearAll, onViewLobby }: NotificationsPanelProps) {
  const { activeVersionId } = useVersion();
  const isMvp = isMvpFamily(activeVersionId);
  const [isCriticalExpanded, setIsCriticalExpanded] = useState(true);
  const [isAIExpanded, setIsAIExpanded] = useState(true);

  const linkClass = isMvp ? "underline text-fy27-text-interactive" : "underline";

  // ── Notification content, keyed by id ──
  const criticalDefs: NotifDef[] = [];
  if (seenNotifications.has("recording")) {
    criticalDefs.push({
      id: "recording",
      icon: <RecordingIcon />,
      content: (
        <p className="whitespace-pre-wrap">
          <span>Recording and transcription have started in </span>
          <span className="font-['SF_Pro_Text:Bold',sans-serif]">English (UK). </span>
          <span>By joining, you are giving consent for this meeting to be recorded. </span>
          <span className={linkClass}>Privacy Policy</span>
        </p>
      ),
    });
  }
  if (seenNotifications.has("content-sharing")) {
    criticalDefs.push({ id: "content-sharing", icon: <RecordingIcon />, content: <p>Content is being shared</p> });
  }
  if (seenNotifications.has("lobby")) {
    criticalDefs.push({
      id: "lobby",
      icon: <LobbyIcon />,
      content: <p>Guests waiting in lobby</p>,
      action: (
        <ActionChip onClick={onViewLobby} isMvp={isMvp}>
          <span className="text-[13px] leading-[18px] tracking-[-0.08px] font-['SF_Pro_Text:Medium',sans-serif] whitespace-nowrap">View lobby</span>
        </ActionChip>
      ),
    });
  }

  const aiDefs: NotifDef[] = [];
  if (seenNotifications.has("interpreter")) {
    aiDefs.push({
      id: "interpreter",
      icon: <InterpreterIcon />,
      content: (
        <p className="whitespace-pre-wrap">
          <span>Interpreter is on. This meeting would be interpreted for you in </span>
          <span className="font-['SF_Pro_Text:Bold',sans-serif]">English</span>
          <span>.</span>
        </p>
      ),
      action: (
        <ActionChip isMvp={isMvp}>
          <span className="size-[24px] grid place-items-center"><GearIcon /></span>
        </ActionChip>
      ),
    });
  }
  if (seenNotifications.has("background-noise")) {
    aiDefs.push({
      id: "background-noise",
      icon: <BackgroundNoiseIcon />,
      content: <p>Background noise has been detected from your microphone.</p>,
      action: (
        <ActionChip isMvp={isMvp}>
          <span className="text-[13px] leading-[18px] tracking-[-0.08px] font-['SF_Pro_Text:Medium',sans-serif] whitespace-nowrap">Suppress</span>
        </ActionChip>
      ),
    });
  }

  const hasCritical = criticalDefs.length > 0;
  const hasAI = aiDefs.length > 0;
  const hasNotifications = hasCritical || hasAI;

  return (
    <MultitaskingPanel
      title="Notifications"
      onClose={onClose}
      actionButton={<PanelHeaderAction label="Clear all" onClick={onClearAll} disabled={!hasNotifications} />}
      showFooter={false}
    >
      <div className={`flex flex-col gap-[10px] min-h-full pb-[20px] ${isMvp ? "px-[16px]" : "bg-[#0e0e0e] px-[13px]"}`}>
        {hasCritical && (
          <NotifSection
            title="Critical notifications"
            defs={criticalDefs}
            expanded={isCriticalExpanded}
            onToggle={() => setIsCriticalExpanded(!isCriticalExpanded)}
            isMvp={isMvp}
            onDismiss={onDismissNotification}
          />
        )}
        {hasAI && (
          <NotifSection
            title="Informational notifications"
            defs={aiDefs}
            expanded={isAIExpanded}
            onToggle={() => setIsAIExpanded(!isAIExpanded)}
            isMvp={isMvp}
            onDismiss={onDismissNotification}
          />
        )}
        {!hasNotifications && (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-fy27-text-secondary text-[15px] tracking-[-0.08px] leading-[20px]" style={{ fontFamily: "var(--font-sf-pro)" }}>
              No notifications to show
            </p>
          </div>
        )}
      </div>
    </MultitaskingPanel>
  );
}
