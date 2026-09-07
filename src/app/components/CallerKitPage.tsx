import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useActiveMeeting } from "@/app/components/ActiveMeetingContext";
import { StatusBar, NotchOverlay } from "@/app/components/StatusBar";
import { MicOnIcon } from "@/app/components/MicOnIcon";
import { MicOffIcon } from "@/app/components/MicOffIcon";
import { VideoOnIcon } from "@/app/components/VideoOnIcon";
import { VideoOffIcon } from "@/app/components/VideoOffIcon";
import { CallEnd } from "@/app/components/ubarIcons";
import { IconChevronRight } from "@/app/components/profile/fluentIcons";

type CallerKitState = "locked" | "unlocked";

function formatElapsed(seconds: number) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

/** Round system-style control button (mic/camera/end-call), matches CallKit's circular controls. */
function KitButton({ label, active, danger, onClick, children }: {
  label: string; active?: boolean; danger?: boolean; onClick: () => void; children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`flex flex-col items-center gap-[6px] shrink-0`}
    >
      <span
        className={`flex items-center justify-center size-[56px] rounded-full transition-colors ${
          danger ? "bg-[#ff3b30]" : active ? "bg-white text-black" : "bg-white/20 text-white"
        }`}
      >
        {children}
      </span>
      <span className="text-[12px] text-white/85">{label}</span>
    </button>
  );
}

/**
 * Illustrative mockup of the OS-level "Caller Kit" surface (iOS CallKit / Android
 * equivalent) — the SYSTEM call UI that appears outside the Teams app, either on
 * the unlocked home screen or directly on the lock screen. This is NOT real
 * system chrome (a web app can't render one); it exists purely so the mic/camera
 * accidental-touch guard proposed for this surface can be seen end-to-end:
 * mic stays instant-toggle, camera now requires a confirmation tap.
 *
 * Reachable from Account → "Native UI preview" (locked / unlocked).
 */
export function CallerKitPage() {
  const { state } = useParams<{ state: CallerKitState }>();
  const isLocked = state === "locked";
  const navigate = useNavigate();
  const meeting = useActiveMeeting();

  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const date = now.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });

  const handleMicTap = () => {
    // Mic stays instant-toggle in both locked and unlocked Caller Kit — no gating.
    meeting.setMicOn(!meeting.isMicOn);
  };

  const handleCameraTap = () => {
    // Turning off never needs confirmation. Turning on: jump straight to the
    // meeting stage (camera still off) — the confirmation is shown THERE, not here.
    if (meeting.isVideoOn) {
      meeting.setVideoOn(false);
      return;
    }
    navigate("/meeting", { state: { confirmCameraOn: true } });
  };

  const handleEndCall = () => {
    meeting.endMeeting();
    navigate("/calendar");
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#241a3d] via-[#141233] to-black select-none">
      <StatusBar />
      <NotchOverlay />

      {/* Exit affordance — not part of the simulated OS chrome, just for demo navigation. */}
      <button
        onClick={() => navigate("/calendar")}
        aria-label="Exit preview"
        className="absolute left-[12px] top-[52px] z-50 flex items-center gap-[4px] px-[10px] py-[6px] rounded-full bg-black/40 text-white/80 text-[13px]"
      >
        <span className="rotate-180 inline-flex"><IconChevronRight size={14} /></span>
        Exit preview
      </button>

      {/* State label — for demo clarity only (real OS chrome has no such label). */}
      <div className="absolute right-[12px] top-[52px] z-50 px-[10px] py-[6px] rounded-full bg-black/40 text-white/70 text-[12px]">
        {isLocked ? "Lock screen" : "Home screen"}
      </div>

      {isLocked ? (
        <div className="absolute inset-x-0 top-[110px] flex flex-col items-center gap-[4px] text-white">
          <span className="text-[64px] font-semibold leading-none" style={{ letterSpacing: "-1px" }}>{time}</span>
          <span className="text-[15px] text-white/80">{date}</span>
        </div>
      ) : (
        <div className="absolute inset-x-0 top-[100px] grid grid-cols-4 gap-x-[18px] gap-y-[20px] px-[24px]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-[4px]">
              <div className="size-[52px] rounded-[13px] bg-white/15" />
            </div>
          ))}
        </div>
      )}

      {/* System call control card — the actual surface under test. */}
      <div className="absolute inset-x-[16px] bottom-[max(28px,env(safe-area-inset-bottom))] rounded-[24px] bg-black/55 backdrop-blur-xl border border-white/10 px-[20px] py-[18px]">
        <div className="text-center mb-[16px]">
          <div className="text-white text-[15px] font-medium">{meeting.meetingTitle || "Teams meeting"}</div>
          <div className="text-white/60 text-[13px]">{formatElapsed(elapsed)}</div>
        </div>
        <div className="flex items-center justify-center gap-[28px]">
          <KitButton label={meeting.isMicOn ? "Mute" : "Unmute"} active={!meeting.isMicOn} onClick={handleMicTap}>
            {meeting.isMicOn ? <MicOnIcon size={20} color="currentColor" /> : <MicOffIcon size={20} color="currentColor" />}
          </KitButton>
          <KitButton label={meeting.isVideoOn ? "Turn camera off" : "Turn camera on"} active={meeting.isVideoOn} onClick={handleCameraTap}>
            {meeting.isVideoOn ? <VideoOnIcon width={22} height={16} color="currentColor" /> : <VideoOffIcon width={22} height={16} color="currentColor" />}
          </KitButton>
          <KitButton label="End" danger onClick={handleEndCall}>
            <CallEnd size={20} />
          </KitButton>
        </div>
      </div>
    </div>
  );
}
