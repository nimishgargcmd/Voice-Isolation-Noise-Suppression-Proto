/**
 * Central slot registrations (imported once for side effects in App.tsx).
 *
 * The baseline (Final Vision) registers every slot's full implementation. To
 * diverge FY27 MVP, add a per-version registration for the `current` id —
 * usually `Hidden` to remove a feature:
 *   registerComponent("ParticipantTile", "current", Hidden); // remove in FY27 MVP
 * The baseline implementation is never deleted — that's what makes the live
 * switch work and keeps the feature in Final Vision.
 */
import { registerComponent } from "./registry";
import { BASELINE_ID } from "./versions";
import { MeetingHeader } from "@/app/components/MeetingHeader";
import { SwipeableViews } from "@/app/components/SwipeableViews";
import { MeetingViewsGallery } from "@/app/components/versions/mvp/MeetingViewsGallery";
import { MeetingViewsCheckpoint } from "@/app/components/versions/mvp/MeetingViewsCheckpoint";
import { MeetingHeaderMvp } from "@/app/components/versions/mvp/MeetingHeaderMvp";

// ── Header slot ──────────────────────────────────────────────────────────
// Final Vision: the baseline MeetingHeader. FY27 MVP: the redesigned floating header.
registerComponent("Header", BASELINE_ID, MeetingHeader);
registerComponent("Header", "current", MeetingHeaderMvp);

// ── MeetingViews slot (the meeting stage area) ────────────────────────────
// Final Vision: full swipeable On-the-go / Gallery / Focus carousel.
// FY27 MVP: Gallery only — no swipe, no page dots (On-the-go/Focus hidden).
// MVP checkpoint: prioritised 6-tile slot + overflow ParticipantTray (stage redesign).
registerComponent("MeetingViews", BASELINE_ID, SwipeableViews);
registerComponent("MeetingViews", "current", MeetingViewsGallery);
registerComponent("MeetingViews", "mvp-checkpoint", MeetingViewsCheckpoint);
