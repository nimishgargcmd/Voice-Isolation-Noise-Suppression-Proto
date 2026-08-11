import { createContext, useContext } from "react";
import type { AudioMode } from "@/app/components/AudioModeIcon";

const AudioModeContext = createContext<AudioMode>("off");

export function AudioModeProvider({ value, children }: { value: AudioMode; children: React.ReactNode }) {
  return <AudioModeContext.Provider value={value}>{children}</AudioModeContext.Provider>;
}

export function useAudioMode(): AudioMode {
  return useContext(AudioModeContext);
}
