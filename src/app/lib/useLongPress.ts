import { useCallback, useRef } from "react";
import type React from "react";

/**
 * Long-press detector. Returns pointer handlers to spread onto an element.
 * Fires `onLongPress` after `ms` if the pointer stays down without moving past
 * a small slop, with a light haptic. Movement, lift, or cancel aborts it.
 */
export function useLongPress(onLongPress: () => void, ms = 450) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const start = useRef({ x: 0, y: 0 });

  const clear = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      start.current = { x: e.clientX, y: e.clientY };
      clear();
      timer.current = setTimeout(() => {
        timer.current = null;
        try { navigator.vibrate?.(8); } catch { /* no-op */ }
        onLongPress();
      }, ms);
    },
    [onLongPress, ms, clear],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!timer.current) return;
      if (Math.abs(e.clientX - start.current.x) > 10 || Math.abs(e.clientY - start.current.y) > 10) {
        clear();
      }
    },
    [clear],
  );

  return { onPointerDown, onPointerMove, onPointerUp: clear, onPointerCancel: clear, onPointerLeave: clear };
}
