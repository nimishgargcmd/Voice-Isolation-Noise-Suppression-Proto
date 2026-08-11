/**
 * FY27 version catalog.
 *
 * Model = "Final Vision is the full baseline". Final Vision holds the complete
 * feature set and is the default selection. FY27 MVP is the reduced cut layered
 * on top: it only *overrides* the slots it changes — most often registering a
 * slot to `Hidden` to remove a feature. Everything FY27 MVP doesn't override
 * falls back along its `basedOn` chain to the Final Vision baseline, so removing
 * a feature from FY27 MVP never affects Final Vision.
 */

export type VersionStatus = "shipped" | "planned" | "vision";

export interface VersionEntry {
  id: string;
  label: string;
  status: VersionStatus;
  /** Display string (e.g. "2026-06" or "—"). */
  date: string;
  summary: string;
  /** Human-readable changelog shown in the switcher. */
  changes: string[];
  /**
   * Parent version this one branched from. Resolution walks this chain when a
   * slot isn't overridden by the version itself. Omit for the baseline.
   */
  basedOn?: string;
}

/** The baseline = Final Vision (the complete feature set). */
export const BASELINE_ID = "final-vision";

/**
 * Ordered for display (baseline first). Resolution uses `basedOn` chains, not
 * array order, so reordering here is purely cosmetic.
 */
export const VERSIONS: VersionEntry[] = [
  {
    id: BASELINE_ID,
    label: "Final vision",
    status: "vision",
    date: "—",
    summary: "New visual language",
    changes: [],
  },
  {
    id: "current",
    label: "FY27 MVP",
    status: "shipped",
    date: "2026-06",
    summary: "Current visual language",
    changes: [],
    basedOn: BASELINE_ID,
  },
  {
    id: "mvp-checkpoint",
    label: "MVP checkpoint",
    status: "planned",
    date: "2026-07",
    summary: "Current visual language",
    changes: ["Reimagined main meeting stage; everything else inherits FY27 MVP"],
    basedOn: "current",
  },
];

/** App opens on MVP checkpoint by default. */
export const DEFAULT_VERSION_ID = "mvp-checkpoint";

/** Ids in the FY27 MVP family — the checkpoint inherits all MVP behavior, so
 *  every inline MVP gate treats these ids identically. Only slot-level
 *  registrations (e.g. the meeting stage) distinguish the checkpoint. */
export const MVP_FAMILY_IDS = ["current", "mvp-checkpoint"] as const;

/** True for any version in the FY27 MVP family (FY27 MVP or MVP checkpoint). */
export function isMvpFamily(id: string): boolean {
  return (MVP_FAMILY_IDS as readonly string[]).includes(id);
}

export function getVersion(id: string): VersionEntry | undefined {
  return VERSIONS.find((v) => v.id === id);
}

export function isValidVersionId(id: string | null | undefined): id is string {
  return !!id && VERSIONS.some((v) => v.id === id);
}
