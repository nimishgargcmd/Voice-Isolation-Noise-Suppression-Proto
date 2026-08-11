import { useEffect, useState } from "react";

/**
 * Minimal ECS-style feature-flag store.
 *
 * Stands in for a remote Experiment/Config Service: flag values persist in
 * localStorage and broadcast a change event, so any subscriber re-renders the
 * moment a flag is flipped at runtime (and the choice survives reloads).
 */
const PREFIX = "ecs:";
const EVENT = "ecs-flag-change";

export function getEcsFlag(key: string, fallback: boolean): boolean {
  try {
    const v = localStorage.getItem(PREFIX + key);
    return v === null ? fallback : v === "true";
  } catch {
    return fallback;
  }
}

export function setEcsFlag(key: string, value: boolean): void {
  try {
    localStorage.setItem(PREFIX + key, String(value));
  } catch {
    /* ignore storage errors */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: { key } }));
}

/** Read + flip an ECS flag; stays in sync with changes from anywhere. */
export function useEcsFlag(key: string, fallback: boolean): [boolean, (v: boolean) => void] {
  const [value, setValue] = useState(() => getEcsFlag(key, fallback));
  useEffect(() => {
    const sync = () => setValue(getEcsFlag(key, fallback));
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync); // cross-tab
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [key, fallback]);
  return [value, (v: boolean) => setEcsFlag(key, v)];
}

/** ECS flag keys used in the app. */
export const ECS = {
  catchupMeetingDock: "catchup.meetingDock",
} as const;
