import React from "react";
import { MultitaskingPanel } from "@/app/components/MultitaskingPanel";
import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";
import {
  ParticipantRow,
  MvpParticipantRow,
  meetingVerifiedUsers,
  raisedHandNameToId,
  type Participant,
} from "@/app/components/ParticipantsPanel";

interface RaisedHandsPanelProps {
  onClose: () => void;
  /** Final-Vision path: short names in raise order, resolved via the name→id map. */
  raisedHands?: Array<{ name: string }>;
  /** FY27 MVP path: roster ids in raise order. */
  raisedHandIds?: string[];
  /** FY27 MVP path: the roster to resolve ids against. */
  roster?: Participant[];
}

/**
 * Dedicated list of who has raised their hand, in raise order. Reuses the
 * Participants panel's `ParticipantRow` (avatar + presence + name + role + the
 * gold hand-order badge) with the mic/camera state icons suppressed.
 */
export function RaisedHandsPanel({ onClose, raisedHands = [], raisedHandIds, roster }: RaisedHandsPanelProps) {
  const { activeVersionId } = useVersion();
  const isFy27Mvp = isMvpFamily(activeVersionId);

  // Resolve each raised hand (in order) to its participant record. FY27 MVP uses
  // the roster ids directly; Final Vision falls back to the short-name → id map.
  const rows =
    raisedHandIds && roster
      ? raisedHandIds
          .map((id, i) => {
            const participant = roster.find((p) => p.id === id);
            return participant ? { participant, position: i + 1 } : null;
          })
          .filter((r): r is { participant: Participant; position: number } => r != null)
      : raisedHands
          .map((h, i) => {
            const participant = meetingVerifiedUsers.find((p) => p.id === raisedHandNameToId[h.name]);
            return participant ? { participant, position: i + 1 } : null;
          })
          .filter((r): r is { participant: Participant; position: number } => r != null);

  // FY27 MVP: the new token-based list (MvpParticipantRow) on a flat surface,
  // matching the Participants panel. Final Vision keeps the rounded-card list.
  if (isFy27Mvp) {
    return (
      <MultitaskingPanel title="Raised hands" onClose={onClose} showFooter={false}>
        <div className="flex flex-col px-[16px] pt-[20px] pb-[20px]">
          {rows.length === 0 ? (
            <p
              className="text-fy27-text-secondary text-[15px] leading-[20px] tracking-[-0.08px] text-center py-[24px]"
              style={{ fontFamily: "var(--font-sf-pro)" }}
            >
              No raised hands
            </p>
          ) : (
            rows.map(({ participant, position }) => (
              <MvpParticipantRow key={participant.id} participant={participant} handRaisePosition={position} hideMedia />
            ))
          )}
        </div>
      </MultitaskingPanel>
    );
  }

  return (
    <MultitaskingPanel title="Raised hands" onClose={onClose} showFooter={false}>
      <div className="px-[12px] pt-1 pb-3">
        {rows.length === 0 ? (
          <div
            className="bg-[rgba(36,36,37,0.7)] rounded-[24px] px-4 py-6 text-center text-[#b6b5b5] text-[15px] tracking-[-0.24px]"
            style={{ fontFamily: "var(--font-sf-pro)" }}
          >
            No raised hands
          </div>
        ) : (
          <div className="rounded-[24px] overflow-hidden">
            {rows.map(({ participant, position }) => (
              <ParticipantRow key={participant.id} participant={participant} handRaisePosition={position} hideMedia />
            ))}
          </div>
        )}
      </div>
    </MultitaskingPanel>
  );
}
