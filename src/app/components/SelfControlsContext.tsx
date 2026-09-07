import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { ParticipantOptionsSheet } from "@/app/components/ParticipantOptionsSheet";
import { SELF_ID } from "@/app/lib/meetingRoster";

interface SelfControlsContextValue {
  /** Mic/camera controls are locked against accidental taps. */
  controlsLocked: boolean;
  /** Long-press handler for either self tile (floating or tray) — opens the options sheet. */
  openSelfOptions: () => void;
}

const SelfControlsContext = createContext<SelfControlsContextValue | null>(null);

/** Long-press on the self tile (floating or tray) opens the shared options sheet. */
export function useSelfControls(): SelfControlsContextValue {
  const ctx = useContext(SelfControlsContext);
  if (!ctx) throw new Error("useSelfControls must be used within a SelfControlsProvider");
  return ctx;
}

/**
 * Owns the shared self-tile long-press options sheet (accidental-touch guard:
 * "Lock mic & camera") so both the floating self tile (MeetingPage) and the
 * ParticipantTray's sticky self tile (nested arbitrarily deep through the
 * versioned MeetingViews tree) can open it without prop drilling.
 */
export function SelfControlsProvider({
  controlsLocked,
  onToggleControlsLock,
  children,
}: {
  controlsLocked: boolean;
  onToggleControlsLock: () => void;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <SelfControlsContext.Provider value={{ controlsLocked, openSelfOptions: () => setOpen(true) }}>
      {children}
      <ParticipantOptionsSheet
        open={open}
        onClose={() => setOpen(false)}
        id={SELF_ID}
        name="You"
        controlsLocked={controlsLocked}
        onToggleControlsLock={onToggleControlsLock}
      />
    </SelfControlsContext.Provider>
  );
}
