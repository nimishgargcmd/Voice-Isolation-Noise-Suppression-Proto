import type { DockState } from "@/app/components/DockUIContext";

/**
 * The dock's last visible state, carried across surfaces. Each `MeetingDock`
 * writes its current state here; a new surface (e.g. the DM page) seeds its dock
 * from this so the expanded/collapsed state carries over instead of resetting.
 */
let lastDockState: DockState = "expanded";

export const getLastDockState = (): DockState => lastDockState;
export const setLastDockState = (s: DockState) => {
  lastDockState = s;
};

/**
 * Whether the dock has already played its slide-in entrance for the CURRENT
 * background session. Set true once the dock first animates in; reset to false
 * when the meeting is un-backgrounded (returned to) or ends. This lets the dock
 * animate in nicely the first time a meeting is backgrounded, but stay STILL
 * across surface navigation (L0 ⇄ DM) — each surface mounts its own MeetingDock,
 * and a fresh height:0→auto entrance on every navigation reads as the dock
 * "opening collapsed then expanding". Carrying this flag suppresses that.
 */
let dockHasEnteredSession = false;
export const getDockHasEnteredSession = (): boolean => dockHasEnteredSession;
export const setDockHasEnteredSession = (v: boolean) => {
  dockHasEnteredSession = v;
};
