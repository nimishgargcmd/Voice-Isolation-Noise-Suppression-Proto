import { createContext, useCallback, useContext, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";
import { AudioModeGlyph, type AudioMode } from "@/app/components/AudioModeIcon";

interface ToastContextValue {
  /** Show a centred success toast above the bottom bar (~2.5s). */
  show: (message: string, modeIcon?: AudioMode, options?: { iconMode?: Exclude<AudioMode, "off">; muted?: boolean }) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}

/**
 * Teams 2 iOS "Toast bottom" pill (Figma 1015:54631) — surface/raised-fill,
 * rounded-12, Shadow 08, a 24px Checkmark-Circle + Body-2 text, both
 * text/secondary. Theme-aware. Shared by the app toast (MVP) and the
 * version-change indicator.
 */
export function Fy27ToastPill({ message, nowrap = false, modeIcon, iconModeOverride, mutedIcon = false }: { message: string; nowrap?: boolean; modeIcon?: AudioMode; iconModeOverride?: Exclude<AudioMode, "off">; mutedIcon?: boolean }) {
  const effectiveModeIcon = iconModeOverride ?? (modeIcon && modeIcon !== "off" ? modeIcon : undefined);
  const showModeIcon = !!effectiveModeIcon;
  const hideLeadingIcon = modeIcon === "off";
  return (
    <div
      className={`inline-flex items-center gap-[8px] px-[16px] py-[16px] rounded-[12px] bg-fy27-surface-raised border-[0.5px] border-fy27-surface-raised text-fy27-text-secondary shadow-[0px_0px_2px_rgba(0,0,0,0.12),0px_4px_8px_rgba(0,0,0,0.14)] ${nowrap ? "w-max max-w-none" : "max-w-full"}`}
      style={{ fontFamily: "var(--font-sf-pro)" }}
    >
      {showModeIcon ? (
        <span
          className={`inline-flex items-center justify-center size-[24px] rounded-full border shrink-0 ${mutedIcon
            ? "bg-transparent border-fy27-icon-secondary text-fy27-icon-secondary"
            : effectiveModeIcon === "noise-suppression"
              ? "bg-fy27-brand border-fy27-brand text-white"
              : "bg-[#6f56ff] border-[#6f56ff] text-white"}`}
          aria-hidden="true"
        >
          <AudioModeGlyph mode={effectiveModeIcon!} size={12} />
        </span>
      ) : !hideLeadingIcon ? (
        <svg viewBox="0 0 24 24" className="size-[24px] shrink-0" fill="currentColor" aria-hidden="true">
          <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM10.75 13.4393L15.2197 8.96967C15.5126 8.67678 15.9874 8.67678 16.2803 8.96967C16.5466 9.23594 16.5708 9.6526 16.3529 9.94621L16.2803 10.0303L11.2803 15.0303C11.0141 15.2966 10.5974 15.3208 10.3038 15.1029L10.2197 15.0303L7.71967 12.5303C7.42678 12.2374 7.42678 11.7626 7.71967 11.4697C7.98594 11.2034 8.4026 11.1792 8.69621 11.3971L8.78033 11.4697L10.75 13.4393L15.2197 8.96967L10.75 13.4393Z" />
        </svg>
      ) : null}
      <span className={`text-[15px] leading-[20px] tracking-[-0.08px] ${nowrap ? "whitespace-nowrap" : ""}`}>{message}</span>
    </div>
  );
}

/**
 * App-wide success toast. Renders an `absolute` pill centred horizontally and
 * pinned just above the meeting bottom bar (the provider must sit inside the
 * `relative` mobile frame). Auto-dismisses; a new toast replaces the current one.
 */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toastState, setToastState] = useState<{ message: string; modeIcon?: AudioMode; iconModeOverride?: Exclude<AudioMode, "off">; mutedIcon?: boolean } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { activeVersionId } = useVersion();
  const isFy27Mvp = isMvpFamily(activeVersionId);

  const show = useCallback((msg: string, modeIcon?: AudioMode, options?: { iconMode?: Exclude<AudioMode, "off">; muted?: boolean }) => {
    if (timer.current) clearTimeout(timer.current);
    setToastState({
      message: msg,
      modeIcon,
      iconModeOverride: options?.iconMode,
      mutedIcon: options?.muted,
    });
    timer.current = setTimeout(() => setToastState(null), 2500);
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {toastState && (
        <div
          className="absolute left-0 right-0 z-[80] flex justify-center px-[16px] pointer-events-none"
          style={{ bottom: "calc(104px + env(safe-area-inset-bottom, 0px))", fontFamily: "var(--font-sf-pro)" }}
        >
          {isFy27Mvp ? (
            <div style={{ animation: "toast-in 0.2s ease-out" }}>
              <Fy27ToastPill
                message={toastState.message}
                modeIcon={toastState.modeIcon}
                iconModeOverride={toastState.iconModeOverride}
                mutedIcon={toastState.mutedIcon}
              />
            </div>
          ) : (
            /* Final Vision — original dark pill */
            <div
              className="flex items-center gap-[8px] px-[16px] py-[12px] rounded-[8px] max-w-full shadow-[0px_6px_20px_rgba(0,0,0,0.35)]"
              style={{ backgroundColor: "rgba(37,37,37,0.96)", animation: "toast-in 0.2s ease-out" }}
            >
              {(toastState.iconModeOverride || (toastState.modeIcon && toastState.modeIcon !== "off")) ? (
                <span
                  className={`inline-flex items-center justify-center size-[20px] rounded-full border shrink-0 ${toastState.mutedIcon
                    ? "bg-transparent border-white/35 text-white/75"
                    : (toastState.iconModeOverride ?? toastState.modeIcon) === "noise-suppression"
                      ? "bg-fy27-brand border-fy27-brand text-white"
                      : "bg-[#6f56ff] border-[#6f56ff] text-white"}`}
                  aria-hidden="true"
                >
                  <AudioModeGlyph mode={(toastState.iconModeOverride ?? toastState.modeIcon) as Exclude<AudioMode, "off">} size={10} />
                </span>
              ) : !toastState.modeIcon || toastState.modeIcon !== "off" ? (
                <svg viewBox="0 0 20 20" className="size-[20px] shrink-0" fill="none" aria-hidden="true">
                  <path d="M4.5 10.5l3.5 3.5 7.5-8" stroke="#5bd97e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
              <span className="text-white text-[15px] leading-[20px] tracking-[-0.08px]">{toastState.message}</span>
            </div>
          )}
        </div>
      )}
      <style>{`@keyframes toast-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </ToastContext.Provider>
  );
}
