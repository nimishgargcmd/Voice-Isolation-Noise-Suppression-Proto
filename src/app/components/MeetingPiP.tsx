import { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import { useVersion } from "@/app/versioning/VersionContext";
import { MeetingTile } from "@/app/components/MeetingTile";
import { GALLERY_ROSTER, rosterById } from "@/app/lib/meetingRoster";
import { getPipPos, setPipPos } from "@/app/lib/pipPersist";
import { RecordDot } from "@/app/components/versions/mvp/headerMvpIcons";
import imgSlideshow from "@/assets/figma/shared-content/slideshow-share.png";

const MARGIN = 20;
const DEFAULT_TOP = 100;

/**
 * MVP checkpoint — Picture-in-Picture window. Replaces the meeting dock: when the
 * meeting is backgrounded (back chevron in the header or immersive bar), a small
 * freely-repositionable video window floats over the L0/L1/L2 pages showing the
 * active speaker (or the shared content). Drag anywhere (no corner snap); tap it
 * to return to the meeting.
 *
 * Self-gates like the dock (`isMvpCheckpoint && isActive && isBackgrounded`) and is
 * mounted once per surface (AppShell + the DM page). Position is persisted
 * module-level; the default is 100px from the top, tucked into the right with a
 * 20px margin.
 */
export function MeetingPiP() {
  const meeting = useActiveMeeting();
  const { activeVersionId } = useVersion();
  const navigate = useNavigate();

  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);
  const posRef = useRef(pos);
  posRef.current = pos;

  const isContent = meeting.isContentSharing;
  // Fixed LANDSCAPE aspect (16:9) — the PiP box never changes shape between the
  // active speaker and shared content. 1.2× the original 160×90 landscape tile.
  const W = 192;
  const H = 108;

  const show = activeVersionId === "mvp-checkpoint" && meeting.isActive && meeting.isBackgrounded;

  // Seed position from the persisted free position, else the default (top 100,
  // tucked right with a 20px margin).
  useLayoutEffect(() => {
    if (!show) return;
    const parent = ref.current?.parentElement;
    if (!parent) return;
    const saved = getPipPos();
    if (saved) {
      setPos({
        left: Math.max(MARGIN, Math.min(parent.clientWidth - W - MARGIN, saved.left)),
        top: Math.max(MARGIN, Math.min(parent.clientHeight - H - MARGIN, saved.top)),
      });
    } else {
      setPos({ left: parent.clientWidth - W - MARGIN, top: DEFAULT_TOP });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, isContent]);

  if (!show) return null;

  // Attach the window listeners SYNCHRONOUSLY on pointer-down (not via an effect)
  // so the very first move isn't missed. Free position: drop exactly where
  // released; a non-move is treated as a tap → return to meeting.
  const onPointerDown = (e: React.PointerEvent) => {
    const start = posRef.current ?? { left: 0, top: 0 };
    const px = e.clientX;
    const py = e.clientY;
    let moved = false;

    const clampInto = (left: number, top: number) => {
      const parent = ref.current?.parentElement;
      if (!parent) return { left, top };
      return {
        left: Math.max(MARGIN, Math.min(parent.clientWidth - W - MARGIN, left)),
        top: Math.max(MARGIN, Math.min(parent.clientHeight - H - MARGIN, top)),
      };
    };
    const move = (ev: PointerEvent) => {
      const dx = ev.clientX - px;
      const dy = ev.clientY - py;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved = true;
      setPos(clampInto(start.left + dx, start.top + dy));
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      if (!moved) {
        meeting.returnToMeeting();
        navigate("/meeting", { replace: true });
        return;
      }
      if (posRef.current) setPipPos(posRef.current);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const focusId = meeting.spotlightedIds[0];
  const focus = (focusId ? rosterById(focusId) : undefined) ?? GALLERY_ROSTER.find((p) => p.activeSpeaker) ?? GALLERY_ROSTER[0];

  return (
    <div
      ref={ref}
      role="button"
      aria-label="Return to meeting"
      onPointerDown={onPointerDown}
      className="absolute z-[70] rounded-[12px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.35),0px_10px_24px_rgba(0,0,0,0.30)] touch-none cursor-pointer select-none"
      style={{
        left: pos?.left ?? -9999,
        top: pos?.top ?? -9999,
        width: W,
        height: H,
      }}
    >
      {isContent ? (
        <img src={imgSlideshow} alt="Shared content" className="block size-full object-cover pointer-events-none" />
      ) : (
        <div className="size-full pointer-events-none">
          <MeetingTile
            name={focus.name}
            display={focus.display === "initials" ? "initials" : "video"}
            state="muted"
            imageSrc={focus.avatar}
            hideNameTag
            hideBorder
          />
        </div>
      )}

      {/* Red recording indicator — top-left with padding, when recording is on. */}
      {meeting.isRecording && (
        <div
          className="absolute top-[8px] left-[8px] z-10 pointer-events-none"
          style={{ color: "var(--fy27-recording, #CC4A31)" }}
          aria-label="Recording"
        >
          <RecordDot size={16} />
        </div>
      )}
    </div>
  );
}
