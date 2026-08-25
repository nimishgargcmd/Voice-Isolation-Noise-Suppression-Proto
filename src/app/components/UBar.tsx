import { useRef } from "react";
import svgPaths from "@/imports/svg-s62hwvor1z";
import { Camera, CameraOff, Mic, MicOff } from "@/app/components/ubarIcons";

/**
 * U-bar — meeting control dock (Teams 2 iOS, POR node 1124:15006; redesign
 * frame 953:30445). Reusable + theme-aware: docks to the bottom, hairline top
 * border, light/dark surface. Hosts Video · Mic · Chat · More · Copilot.
 *
 * Icon rules:
 * - Video on/off, Mic on/off: always FILLED (exact Fluent glyphs).
 * - Chat / More / Copilot: OUTLINE when unselected, FILLED when selected.
 * - Icons are `icon.primary` (via currentColor); Chat/More when SELECTED switch to
 *   `icon.interactive`. Copilot-selected is the rainbow gradient (fixed colour).
 */
interface UBarProps {
  activePanel: "chat" | "copilot" | "more" | null;
  onPanelToggle: (panel: "chat" | "copilot" | "more") => void;
  isVideoOn: boolean;
  isMicOn: boolean;
  onVideoToggle: () => void;
  onMicToggle: () => void;
  /** Optional press-and-hold gesture on mic (e.g. open audio modes). */
  onMicLongPress?: () => void;
  /** Long-press threshold for the mic button. */
  micLongPressMs?: number;
  /** Visual affordance variant for long-press discoverability. */
  micLongPressHintStyle?: "chevron" | "none";
  /** Disable the video button (e.g. in audio-only mode). */
  videoDisabled?: boolean;
}

function MicLongPressHint({ style }: { style: "chevron" | "none" }) {
  if (style === "none") {
    return null;
  }
  return (
    <svg className="block" width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Btn({ label, active, onClick, disabled, children }: {
  label: string; active?: boolean; onClick: () => void; disabled?: boolean; children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      className="shrink-0 size-[56px] rounded-[16px] flex items-center justify-center active:opacity-60 transition-opacity disabled:opacity-40 disabled:pointer-events-none disabled:text-fy27-icon-disabled"
    >
      {children}
    </button>
  );
}

/** More-horizontal — Fluent regular (small dots) / filled (large dots). */
function MoreMark({ filled }: { filled?: boolean }) {
  const r = filled ? 2.4 : 1.7;
  return (
    <svg className={`block ${filled ? "text-fy27-icon-interactive" : ""}`} width={28} height={28} viewBox="0 0 28 28" fill="currentColor">
      <circle cx="7" cy="14" r={r} /><circle cx="14" cy="14" r={r} /><circle cx="21" cy="14" r={r} />
    </svg>
  );
}

/** Copilot — Fluent Regular (icon.primary) unselected / rainbow gradient selected. */
function CopilotMark({ selected }: { selected?: boolean }) {
  if (!selected) {
    return (
      <svg className="block" width={28} height={28} viewBox="0 0 28 28" fill="currentColor">
        <path d="M4.9873 19.9694C5.33968 19.9816 5.58803 20.0529 5.76988 20.1454C5.96761 20.246 6.12624 20.3916 6.26565 20.5908C6.55862 21.0094 6.72255 21.5809 6.93794 22.3319L6.96978 22.4429C7.18127 23.1789 7.4516 24.0866 8.04082 24.7917C8.67649 25.5524 9.61045 26.004 10.9633 26.004H19.4443C21.1675 26.004 22.454 24.9016 23.3986 23.5195C24.3469 22.132 25.0539 20.3207 25.6046 18.575C26.2378 16.5675 27.0311 14.05 27.0017 12.0246C26.9869 10.9994 26.7623 9.97902 26.0859 9.21173C25.3972 8.43051 24.3607 8.04507 23.0152 8.03913C22.6629 8.02695 22.4145 7.95561 22.2327 7.86311C22.0349 7.76253 21.8763 7.61691 21.7369 7.41772C21.4439 6.99913 21.28 6.42759 21.0646 5.67659L21.0328 5.56562C20.8213 4.82962 20.5509 3.92193 19.9617 3.2168C19.326 2.45609 18.3921 2.00452 17.0392 2.00452H8.55827C6.83506 2.00452 5.54856 3.10697 4.60398 4.48903C3.65565 5.87657 2.94865 7.68779 2.39797 9.43355C1.76472 11.4411 0.971477 13.9585 1.00079 15.984C1.01562 17.0091 1.24027 18.0295 1.91665 18.7968C2.60531 19.578 3.64184 19.9634 4.9873 19.9694ZM3.82848 9.8848C4.36681 8.17823 5.02107 6.53712 5.84238 5.33542C6.66744 4.12823 7.55896 3.50452 8.55827 3.50452H14.4346C14.1501 3.95985 13.9176 4.48695 13.7101 5.04105C13.4714 5.67857 13.2496 6.39728 13.0203 7.14069L12.9696 7.30493C12.0601 10.25 10.9221 14.0454 10.1896 16.501C9.85096 17.6361 8.82799 18.4239 7.65262 18.4676H4.87878L4.87253 18.4676C3.88541 18.4418 3.34973 18.1541 3.04187 17.8049C2.70143 17.4187 2.51299 16.8159 2.50063 15.9623C2.47556 14.2301 3.17154 11.9674 3.82848 9.8848ZM22.1602 22.6731C21.3351 23.8803 20.4436 24.504 19.4443 24.504H13.5679C13.8525 24.0487 14.0849 23.5216 14.2924 22.9675C14.5312 22.33 14.7529 21.6112 14.9822 20.8678L15.0329 20.7036C15.9424 17.7585 17.0805 13.9631 17.813 11.5075C18.1516 10.3724 19.1746 9.58461 20.3499 9.54097H23.1238L23.13 9.54094C24.1171 9.56675 24.6528 9.8544 24.9607 10.2036C25.3011 10.5898 25.4896 11.1926 25.5019 12.0463C25.527 13.7784 24.831 16.0411 24.1741 18.1237C23.6357 19.8303 22.9815 21.4714 22.1602 22.6731ZM8.36023 21.849C8.19241 21.258 7.99421 20.56 7.6468 19.9684L7.67766 19.9676H12.1091C12.7037 19.9676 13.2761 19.844 13.7978 19.6179C13.7308 19.8361 13.6647 20.0507 13.5997 20.261L13.5531 20.4121C13.3193 21.1697 13.1102 21.8473 12.8877 22.4414C12.6495 23.0774 12.4143 23.5657 12.1559 23.9158C11.9181 24.2379 11.5323 24.504 10.9633 24.504C9.98755 24.504 9.50198 24.201 9.19186 23.8299C8.8353 23.4032 8.6336 22.8018 8.41145 22.0287C8.39461 21.9701 8.37758 21.9101 8.36023 21.849ZM12.1091 18.4676H10.7937C11.1669 18.0279 11.4545 17.508 11.627 16.9298C11.9498 15.8476 12.3511 14.5063 12.7766 13.0929L13.2618 11.4929C13.6134 10.3336 14.6821 9.54097 15.8935 9.54097H17.2089C16.8357 9.98058 16.548 10.5006 16.3756 11.0788C16.0528 12.1609 15.6515 13.5023 15.2259 14.9157L14.7407 16.5156C14.3892 17.6749 13.3204 18.4676 12.1091 18.4676ZM20.3557 8.04016L20.3249 8.04097H15.8935C15.2988 8.04097 14.7264 8.16456 14.2047 8.39064C14.2718 8.17244 14.3379 7.9578 14.4028 7.74752L14.4494 7.59651C14.6832 6.83885 14.8923 6.16121 15.1148 5.56712C15.353 4.93116 15.5882 4.4428 15.8466 4.09272C16.0844 3.77059 16.4703 3.50452 17.0392 3.50452C18.015 3.50452 18.5006 3.8075 18.8107 4.17863C19.1672 4.60533 19.3689 5.20675 19.5911 5.97987C19.6079 6.03846 19.625 6.09844 19.6423 6.15956C19.8101 6.75056 20.0083 7.44855 20.3557 8.04016Z" />
      </svg>
    );
  }
  return (
    <svg className="block" width={26} height={26} viewBox="0 0 24 24" fill="none">
      <path d={svgPaths.p16a963f0} fill="url(#ubar_cop_0)" />
      <path d={svgPaths.p22760380} fill="url(#ubar_cop_1)" />
      <g><path d={svgPaths.p2ecce500} fill="url(#ubar_cop_2)" /><path d={svgPaths.p2ecce500} fill="url(#ubar_cop_3)" /></g>
      <g><path d={svgPaths.p30395c00} fill="url(#ubar_cop_4)" /><path d={svgPaths.p30395c00} fill="url(#ubar_cop_5)" /></g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(-5.49698 -6.79344 -5.93495 5.69811 18.9994 10.3791)" gradientUnits="userSpaceOnUse" id="ubar_cop_0" r="1"><stop offset="0.0955758" stopColor="#00AEFF" /><stop offset="0.773185" stopColor="#2253CE" /><stop offset="1" stopColor="#0736C4" /></radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(4.98016 6.47044 5.87896 -5.2813 5.57469 16.2453)" gradientUnits="userSpaceOnUse" id="ubar_cop_1" r="1"><stop stopColor="#FFB657" /><stop offset="0.633728" stopColor="#FF5F3D" /><stop offset="0.923392" stopColor="#C02B3C" /></radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.726614 -12.7947 71.8824 -4.08022 6.53166 16.435)" gradientUnits="userSpaceOnUse" id="ubar_cop_2" r="1"><stop offset="0.03" stopColor="#FFC800" /><stop offset="0.31" stopColor="#98BD42" /><stop offset="0.49" stopColor="#52B471" /><stop offset="0.843838" stopColor="#0D91E1" /></radialGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="ubar_cop_3" x1="7.25046" x2="7.87502" y1="2" y2="16.4401"><stop stopColor="#3DCBFF" /><stop offset="0.246674" stopColor="#0588F7" stopOpacity="0" /></linearGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(-6.33606 18.1116 -21.564 -7.99353 20.6605 6.14612)" gradientUnits="userSpaceOnUse" id="ubar_cop_4" r="1"><stop offset="0.0661714" stopColor="#8C48FF" /><stop offset="0.5" stopColor="#F2598A" /><stop offset="0.895833" stopColor="#FFB152" /></radialGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="ubar_cop_5" x1="21.2941" x2="21.286" y1="6.67831" y2="10.6113"><stop offset="0.0581535" stopColor="#F8ADFA" /><stop offset="0.708063" stopColor="#A86EDD" stopOpacity="0" /></linearGradient>
      </defs>
    </svg>
  );
}

export function UBar({
  activePanel,
  onPanelToggle,
  isVideoOn,
  isMicOn,
  onVideoToggle,
  onMicToggle,
  onMicLongPress,
  micLongPressMs = 420,
  micLongPressHintStyle = "chevron",
  videoDisabled = false,
}: UBarProps) {
  const chatOn = activePanel === "chat";
  const micHoldTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const micLongPressTriggeredRef = useRef(false);

  const clearMicHoldTimer = () => {
    if (micHoldTimerRef.current) {
      clearTimeout(micHoldTimerRef.current);
      micHoldTimerRef.current = null;
    }
  };

  const handleMicPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!onMicLongPress) return;
    micLongPressTriggeredRef.current = false;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Pointer capture can fail on some browsers; long-press still works.
    }
    clearMicHoldTimer();
    micHoldTimerRef.current = setTimeout(() => {
      micLongPressTriggeredRef.current = true;
      onMicLongPress();
    }, micLongPressMs);
  };

  const handleMicPointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (micLongPressTriggeredRef.current) {
      // Prevent touch-release from landing on an item in the freshly opened sheet.
      e.preventDefault();
      e.stopPropagation();
    }
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    clearMicHoldTimer();
  };

  const handleMicClick = () => {
    if (micLongPressTriggeredRef.current) {
      micLongPressTriggeredRef.current = false;
      return;
    }
    onMicToggle();
  };

  const handleMicHintTap = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Open mode selector directly from the tiny hint target without toggling mic.
    e.preventDefault();
    e.stopPropagation();
    onMicLongPress?.();
  };

  return (
    <div
      className="w-full shrink-0 bg-fy27-surface border-t border-fy27-fg-stroke"
      style={{ fontFamily: "var(--font-sf-pro)" }}
    >
      <div className="flex items-center justify-between px-[16px] py-[12px] text-fy27-icon-primary">
        <Btn label={isVideoOn ? "Turn camera off" : "Turn camera on"} onClick={onVideoToggle} disabled={videoDisabled}>
          {isVideoOn ? <Camera /> : <CameraOff />}
        </Btn>

        <div className="relative shrink-0">
          <button
            aria-label={isMicOn ? "Mute" : "Unmute"}
            className="relative size-[56px] rounded-[16px] flex items-center justify-center active:opacity-60 transition-opacity"
            onPointerDown={handleMicPointerDown}
            onPointerUp={handleMicPointerUp}
            onPointerCancel={handleMicPointerUp}
            onPointerLeave={handleMicPointerUp}
            onClick={handleMicClick}
          >
            {isMicOn ? <Mic /> : <MicOff />}
            {onMicLongPress && micLongPressHintStyle !== "none" && (
              micLongPressHintStyle === "chevron" ? (
                <button
                  type="button"
                  className="absolute right-[5px] bottom-[5px] inline-flex items-center justify-center h-[14px] min-w-[14px] px-[2px] rounded-full border border-fy27-divider bg-fy27-surface-raised text-fy27-text-secondary active:opacity-70"
                  title="Open microphone settings"
                  aria-label="Open microphone settings"
                  onClick={handleMicHintTap}
                >
                  <MicLongPressHint style={micLongPressHintStyle} />
                </button>
              ) : (
                <span
                  aria-hidden="true"
                  className="absolute right-[5px] bottom-[5px] inline-flex items-center justify-center h-[14px] min-w-[14px] px-[2px] rounded-full border border-fy27-divider bg-fy27-surface-raised text-fy27-text-secondary"
                  title="Press and hold"
                >
                  <MicLongPressHint style={micLongPressHintStyle} />
                </span>
              )
            )}
          </button>
        </div>

        <Btn label="Chat" active={chatOn} onClick={() => onPanelToggle("chat")}>
          <svg className={`block ${chatOn ? "text-fy27-icon-interactive" : ""}`} width={28} height={28} fill="currentColor" viewBox="0 0 28 28">
            <path d={chatOn ? svgPaths.pb877400 : svgPaths.p1e92dd00} />
          </svg>
        </Btn>

        <Btn label="More" active={activePanel === "more"} onClick={() => onPanelToggle("more")}>
          <MoreMark filled={activePanel === "more"} />
        </Btn>

        <Btn label="Copilot" active={activePanel === "copilot"} onClick={() => onPanelToggle("copilot")}>
          <CopilotMark selected={activePanel === "copilot"} />
        </Btn>
      </div>

      {/* iOS home indicator */}
      <div className="h-[21px] flex items-center justify-center">
        <div className="w-[139px] h-[5px] rounded-full bg-fy27-icon-primary" />
      </div>
    </div>
  );
}
