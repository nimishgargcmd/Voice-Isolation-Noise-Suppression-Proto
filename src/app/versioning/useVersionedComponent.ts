import { useMemo } from "react";
import type { ElementType } from "react";
import { useVersion } from "./VersionContext";
import { resolveComponent } from "./registry";

/**
 * Resolve a slot's component for the active version. Re-resolves when the slot
 * name or the active version changes. Returns null if nothing is registered for
 * the slot anywhere in the version's chain (caller decides the fallback).
 */
export function useVersionedComponent(slot: string): ElementType | null {
  const { activeVersionId } = useVersion();
  return useMemo(
    () => resolveComponent(slot, activeVersionId),
    [slot, activeVersionId],
  );
}
