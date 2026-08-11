import svgPaths from "@/imports/svg-s62hwvor1z";
import { BottomSheet } from "@/app/components/BottomSheet";

/**
 * Meeting Header drawer — bottom sheet opened by tapping the meeting name in the
 * FY27 MVP header (NOT a header button). Recreated from Figma POR 1187:42638:
 * a Meeting sensitivity block (level badge + description + links) and an
 * "AI in this meeting" list. Token-driven + theme-aware.
 */

const T_TITLE3: React.CSSProperties = { letterSpacing: "-0.41px", lineHeight: "22px" };
const T_BODY3: React.CSSProperties = { letterSpacing: "-0.08px", lineHeight: "18px" };
const T_BODY1: React.CSSProperties = { letterSpacing: "-0.41px", lineHeight: "22px" };

/** Fluent Info 12 — currentColor. */
function InfoIcon() {
  return (
    <svg width={12} height={12} viewBox="0 0 12 12" fill="currentColor" style={{ display: "block" }}>
      <path d="M6 1a5 5 0 100 10A5 5 0 006 1zM2 6a4 4 0 118 0 4 4 0 01-8 0zm4-.5a.6.6 0 01.6.6v2.4a.6.6 0 01-1.2 0V5.6a.6.6 0 01.6-.6zM6 3.3a.75.75 0 100 1.5.75.75 0 000-1.5z" />
    </svg>
  );
}

/** Fluent Shield — FILLED (the solid 16-grid shield silhouette). currentColor. */
function ShieldFilled({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" style={{ display: "block" }}>
      <path d="M7.64683 4.14645C7.84209 3.95118 8.15867 3.95118 8.35394 4.14645C9.59373 5.38624 10.9685 6 12.5 6C12.7762 6 13.0001 6.22386 13.0001 6.5V9.50128C13.0001 12.7196 11.3596 14.9075 8.15822 15.9743C8.05554 16.0086 7.94448 16.0086 7.8418 15.9743C4.64047 14.9075 3 12.7196 3 9.50128V6.5C3 6.22386 3.22386 6 3.5 6C5.03145 6 6.40642 5.38901 7.64683 4.14645Z" />
    </svg>
  );
}

/** Copilot — rainbow (Color) variant, 24-grid. Same artwork as the U-bar selected state. */
function CopilotColor() {
  return (
    <svg className="block" width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path d={svgPaths.p16a963f0} fill="url(#sheet_cop_0)" />
      <path d={svgPaths.p22760380} fill="url(#sheet_cop_1)" />
      <g><path d={svgPaths.p2ecce500} fill="url(#sheet_cop_2)" /><path d={svgPaths.p2ecce500} fill="url(#sheet_cop_3)" /></g>
      <g><path d={svgPaths.p30395c00} fill="url(#sheet_cop_4)" /><path d={svgPaths.p30395c00} fill="url(#sheet_cop_5)" /></g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(-5.49698 -6.79344 -5.93495 5.69811 18.9994 10.3791)" gradientUnits="userSpaceOnUse" id="sheet_cop_0" r="1"><stop offset="0.0955758" stopColor="#00AEFF" /><stop offset="0.773185" stopColor="#2253CE" /><stop offset="1" stopColor="#0736C4" /></radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(4.98016 6.47044 5.87896 -5.2813 5.57469 16.2453)" gradientUnits="userSpaceOnUse" id="sheet_cop_1" r="1"><stop stopColor="#FFB657" /><stop offset="0.633728" stopColor="#FF5F3D" /><stop offset="0.923392" stopColor="#C02B3C" /></radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.726614 -12.7947 71.8824 -4.08022 6.53166 16.435)" gradientUnits="userSpaceOnUse" id="sheet_cop_2" r="1"><stop offset="0.03" stopColor="#FFC800" /><stop offset="0.31" stopColor="#98BD42" /><stop offset="0.49" stopColor="#52B471" /><stop offset="0.843838" stopColor="#0D91E1" /></radialGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="sheet_cop_3" x1="7.25046" x2="7.87502" y1="2" y2="16.4401"><stop stopColor="#3DCBFF" /><stop offset="0.246674" stopColor="#0588F7" stopOpacity="0" /></linearGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(-6.33606 18.1116 -21.564 -7.99353 20.6605 6.14612)" gradientUnits="userSpaceOnUse" id="sheet_cop_4" r="1"><stop offset="0.0661714" stopColor="#8C48FF" /><stop offset="0.5" stopColor="#F2598A" /><stop offset="0.895833" stopColor="#FFB152" /></radialGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="sheet_cop_5" x1="21.2941" x2="21.286" y1="6.67831" y2="10.6113"><stop offset="0.0581535" stopColor="#F8ADFA" /><stop offset="0.708063" stopColor="#A86EDD" stopOpacity="0" /></linearGradient>
      </defs>
    </svg>
  );
}

interface MeetingHeaderSheetProps {
  open: boolean;
  onClose: () => void;
  /** Sensitivity level shown in the badge. */
  sensitivity?: string;
}

export function MeetingHeaderSheet({ open, onClose, sensitivity = "General" }: MeetingHeaderSheetProps) {
  return (
    <BottomSheet open={open} onClose={onClose} ariaLabel="Meeting details" className="px-[16px]">
      <div className="flex flex-col items-center justify-center gap-[10px] pb-[21px] w-full">
                {/* Meeting sensitivity */}
                <div className="flex flex-col items-start w-full">
                  <div className="py-[4px] w-full">
                    <p className="font-['SF_Pro_Display'] font-semibold text-[17px] text-fy27-text-primary" style={T_TITLE3}>
                      Meeting sensitivity
                    </p>
                  </div>

                  {/* Level badge */}
                  <div className="inline-flex items-center gap-[4px] px-[8px] py-[4px] rounded-[4px] bg-fy27-surface-raised">
                    <span className="shrink-0 flex items-center justify-center size-[16px] text-fy27-brand">
                      <ShieldFilled size={14} />
                    </span>
                    <span className="text-[14px] text-fy27-text-secondary leading-[20px]">{sensitivity}</span>
                  </div>

                  <div className="py-[10px] w-full">
                    <p className="text-[13px] text-fy27-text-primary" style={T_BODY3}>
                      Business data which is NOT meant for public consumption. This can be shared with internal
                      employees, business guests, and external partners as needed.
                    </p>
                  </div>

                  <div className="py-[10px] w-full flex gap-[4px] items-center">
                    <span className="shrink-0 text-fy27-icon-secondary">
                      <InfoIcon />
                    </span>
                    <p className="text-[11px] text-fy27-text-secondary" style={{ letterSpacing: "0.06px", lineHeight: "11px" }}>
                      Meeting functionality may differ due to sensitivity.{" "}
                      <button
                        type="button"
                        className="text-fy27-brand text-[11px] font-normal"
                        style={{ letterSpacing: "0.06px", lineHeight: "11px" }}
                      >
                        Learn more
                      </button>
                    </p>
                  </div>

                  <div className="py-[10px] w-full">
                    <p className="text-[13px] text-fy27-text-primary" style={T_BODY3}>
                      This meeting is secured by Teams data encryption.{" "}
                      <button
                        type="button"
                        className="text-fy27-brand text-[13px] font-normal"
                        style={{ letterSpacing: "-0.08px", lineHeight: "18px" }}
                      >
                        Learn more
                      </button>
                    </p>
                  </div>
                </div>

                {/* AI in this meeting */}
                <div className="flex flex-col items-start w-full">
                  <p className="font-['SF_Pro_Display'] font-semibold text-[17px] text-fy27-text-primary w-full" style={T_TITLE3}>
                    AI in this meeting
                  </p>
                  <button
                    type="button"
                    className="w-full flex items-center gap-[12px] pr-[12px] py-[12px] text-left active:opacity-70 transition-opacity"
                  >
                    <span className="shrink-0">
                      <CopilotColor />
                    </span>
                    <span className="flex-1 min-w-0 text-[17px] text-fy27-text-primary truncate" style={T_BODY1}>
                      Copilot
                    </span>
                  </button>
                </div>
              </div>
    </BottomSheet>
  );
}
