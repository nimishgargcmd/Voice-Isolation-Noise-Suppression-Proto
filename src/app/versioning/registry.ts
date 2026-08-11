/**
 * Versioned component registry + resolver.
 *
 * Baseline + per-version overrides: a version registers only the slots it
 * changed. `resolveComponent` returns the version's own override if present,
 * else walks the `basedOn` parent chain back to the baseline, returning the
 * first match. Register a slot to `Hidden` to *remove* that component in a
 * version (distinct from omitting it, which inherits the parent).
 */
import type { ElementType } from "react";
import { BASELINE_ID, getVersion } from "./versions";

/** Sentinel: register a slot to this to explicitly remove it in a version. */
export const Hidden: ElementType = function Hidden() {
  return null;
};
(Hidden as { displayName?: string }).displayName = "Hidden";

// `ElementType` = anything renderable (function/class/forwardRef/memo/tag), so
// forwardRef components like MeetingHeader register without a cast. Per-slot
// prop safety is enforced at the typed call site (see slots.ts).
type SlotRegistry = Record<string, Record<string, ElementType>>;

const registry: SlotRegistry = {};

export function registerComponent(
  slot: string,
  versionId: string,
  comp: ElementType,
): void {
  (registry[slot] ??= {})[versionId] = comp;
}

export function resolveComponent(
  slot: string,
  versionId: string,
): ElementType | null {
  const impls = registry[slot];
  if (!impls) return null;

  const seen = new Set<string>();
  let id: string | undefined = versionId;
  while (id && !seen.has(id)) {
    seen.add(id);
    if (impls[id]) return impls[id];
    const entry = getVersion(id);
    // climb to the parent; non-baseline versions without a parent fall to baseline
    id = entry?.basedOn ?? (id === BASELINE_ID ? undefined : BASELINE_ID);
  }
  // final safety net: the baseline's registration
  return impls[BASELINE_ID] ?? null;
}

export function isHidden(comp: ElementType | null): boolean {
  return comp === Hidden;
}
