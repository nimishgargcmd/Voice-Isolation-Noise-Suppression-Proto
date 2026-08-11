import type { CSSProperties } from "react";

export type AudioMode = "off" | "noise-suppression" | "voice-isolation";

interface AudioModeGlyphProps {
  mode: AudioMode;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Shared glyph used anywhere we represent audio processing mode.
 * Keeping this centralized ensures the mic badge and toast visuals stay aligned.
 */
export function AudioModeGlyph({ mode, size = 10, className, style }: AudioModeGlyphProps) {
  if (mode === "noise-suppression") {
    return (
      <svg className={className} style={style} width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2 3.2V8.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M5 2V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M8 3.2V8.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M10 4.4V7.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (mode === "voice-isolation") {
    return (
      <svg className={className} style={style} width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <circle cx="6" cy="3.6" r="1.7" fill="currentColor" />
        <path d="M2.6 9.8C2.9 8.2 4.2 7.1 6 7.1C7.8 7.1 9.1 8.2 9.4 9.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M6 1.5C5.1 1.5 4.4 2.2 4.4 3.1V5.8C4.4 6.7 5.1 7.4 6 7.4C6.9 7.4 7.6 6.7 7.6 5.8V3.1C7.6 2.2 6.9 1.5 6 1.5Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M3.3 5.9C3.3 7.4 4.5 8.6 6 8.6C7.5 8.6 8.7 7.4 8.7 5.9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M6 8.6V10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}
