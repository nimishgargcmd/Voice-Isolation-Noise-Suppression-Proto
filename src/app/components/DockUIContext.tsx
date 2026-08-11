import React, { createContext, useContext, useState, useCallback } from "react";

export type DockState = "expanded" | "collapsed" | "minimized";
export type ScrollDir = "up" | "down" | "idle";

interface DockUI {
  /** The active surface's rubric default (L0 pages → expanded; focus/drawer → minimized). */
  surfaceDefault: "expanded" | "minimized";
  /** Last reported scroll direction of the active page's scroll container. */
  scrollDir: ScrollDir;
  /** Explicit user drag/tap override; null = follow the auto rules. */
  manualState: DockState | null;
  setSurfaceDefault: (d: "expanded" | "minimized") => void;
  reportScroll: (dir: ScrollDir) => void;
  setManualState: (s: DockState | null) => void;
  clearManual: () => void;
}

const DockUIContext = createContext<DockUI | null>(null);

/**
 * Ephemeral dock-UI state shared between the pages (which feed scroll direction +
 * their rubric default) and the MeetingDock (which derives its three-state form).
 * Persistent meeting state stays in ActiveMeetingContext, above this.
 */
export function DockUIProvider({
  children,
  initialSurfaceDefault = "expanded",
  initialManualState = null,
}: {
  children: React.ReactNode;
  /** Seed the surface default synchronously (so the first paint is already correct). */
  initialSurfaceDefault?: "expanded" | "minimized";
  /** Seed the manual override synchronously — used to carry a dock state across a route. */
  initialManualState?: DockState | null;
}) {
  const [surfaceDefault, setSurfaceDefault] = useState<"expanded" | "minimized">(initialSurfaceDefault);
  const [scrollDir, setScrollDir] = useState<ScrollDir>("idle");
  const [manualState, setManualState] = useState<DockState | null>(initialManualState);

  const reportScroll = useCallback((dir: ScrollDir) => {
    // No-op guard: useDockScroll only calls this on a *committed* direction
    // flip, but guard anyway so a repeated same-direction report can never
    // churn state or re-clobber a manual override mid-scroll.
    setScrollDir((prev) => (prev === dir ? prev : dir));
    // A fresh scroll re-asserts the auto rules — drop any manual override.
    if (dir !== "idle") setManualState((prev) => (prev === null ? prev : null));
  }, []);

  const clearManual = useCallback(() => setManualState(null), []);

  return (
    <DockUIContext.Provider
      value={{ surfaceDefault, scrollDir, manualState, setSurfaceDefault, reportScroll, setManualState, clearManual }}
    >
      {children}
    </DockUIContext.Provider>
  );
}

export function useDockUI() {
  const v = useContext(DockUIContext);
  if (!v) throw new Error("useDockUI must be used within DockUIProvider");
  return v;
}
