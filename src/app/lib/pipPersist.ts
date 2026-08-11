/**
 * Module-level persistence for the checkpoint Picture-in-Picture window, so its
 * free-dragged position survives navigation between surfaces that each mount
 * their own MeetingPiP (AppShell tabs ↔ the DM page's separate route).
 */
export interface PipPos {
  /** Distance from the container's left edge, px. */
  left: number;
  /** Distance from the container's top edge, px. */
  top: number;
}

let lastPos: PipPos | null = null;

export function getPipPos(): PipPos | null {
  return lastPos;
}

export function setPipPos(pos: PipPos): void {
  lastPos = pos;
}
