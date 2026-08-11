/**
 * Canonical slot prop contracts. Every version of a slot must honor its
 * interface here — this is the single source of truth that keeps the resolver
 * type-safe across versions. Add a new slot's name + props when a component
 * becomes versioned.
 */
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { MeetingHeaderHandle } from "@/app/components/MeetingHeader";

export type { MeetingHeaderHandle };

export type SlotName = "Header";

/** Prop contract shared by every Header version (current, mvp1, …). */
export interface HeaderSlotProps {
  onVisibilityChange?: (isVisible: boolean) => void;
  participantCount?: number;
  onEndCall?: () => void;
  onBack?: () => void;
  isRecording?: boolean;
  /** Disables auto-hide; keeps the header visible (On-the-go mode). */
  alwaysVisible?: boolean;
}

export type HeaderSlotComponent = ForwardRefExoticComponent<
  HeaderSlotProps & RefAttributes<MeetingHeaderHandle>
>;
