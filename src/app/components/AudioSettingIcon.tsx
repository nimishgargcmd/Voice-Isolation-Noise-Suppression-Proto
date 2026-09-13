import { Activity, UserRound, Volume2 } from "lucide-react";
import { MicOnIcon } from "@/app/components/MicOnIcon";
import type { AudioMode } from "@/app/components/AudioModeIcon";

export function AudioSettingIcon({ mode }: { mode: AudioMode }) {
  return (
    <span className="relative inline-flex size-[24px] shrink-0 items-center justify-center text-fy27-icon-primary" aria-hidden="true">
      {mode === "voice-isolation" ? (
        <>
          <UserRound size={22} strokeWidth={1.7} className="absolute left-[-3px] bottom-0" />
          <span className="absolute right-[-2px] top-[-2px] w-[9px] h-[16px] overflow-hidden">
            <Volume2 size={18} strokeWidth={1.7} className="absolute right-0" />
          </span>
        </>
      ) : (
        <>
          <MicOnIcon size={24} color="currentColor" />
          {mode === "noise-suppression" && (
            <span className="absolute right-[-2px] bottom-[-1px] inline-flex size-[12px] items-center justify-center rounded-full bg-fy27-icon-primary text-fy27-surface border border-fy27-surface">
              <Activity size={9} strokeWidth={1.5} />
            </span>
          )}
        </>
      )}
    </span>
  );
}