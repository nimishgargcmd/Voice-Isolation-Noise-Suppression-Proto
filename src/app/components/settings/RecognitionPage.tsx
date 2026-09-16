import { useState } from "react";
import { useNavigate } from "react-router";
import { useToast } from "@/app/components/ToastContext";
import { IconCheck } from "@/app/components/profile/fluentIcons";
import { IconMicOutline, IconInfoCircle } from "@/app/components/settings/settingsIcons";

const T_BODY: React.CSSProperties = { letterSpacing: "-0.43px", lineHeight: "22px" };

/**
 * Full-page Recognition privacy setting — reachable from Settings → "Recognition".
 * The "Opt out" + "Export" actions and the completed-profile pill only show once
 * the user has consented and a voice profile exists. Before consent, and after
 * opting out, the page collapses to a plain "No voice profile created" state.
 */
export function RecognitionPage() {
  const navigate = useNavigate();
  const { show } = useToast();
  const [hasProfile, setHasProfile] = useState(true);

  const handleOptOut = () => {
    setHasProfile(false);
    show("Opted out of voice recognition");
  };

  return (
    <div className="w-full h-full bg-fy27-surface flex flex-col pt-[59px]" style={{ fontFamily: "var(--font-sf-pro)" }}>
      {/* Header */}
      <div className="relative shrink-0 h-[44px] flex items-center justify-center px-[16px]">
        <button
          aria-label="Back to Settings"
          onClick={() => navigate(-1)}
          className="absolute left-[16px] size-[24px] flex items-center justify-center text-fy27-icon-primary"
        >
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
            <path d="M9 1L1 9L9 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="text-[17px] font-semibold text-fy27-text-primary" style={T_BODY}>Recognition</span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-[16px] pb-[24px]">
        <div className="rounded-[16px] border border-fy27-divider bg-fy27-surface-card p-[16px] flex flex-col gap-[12px]">
          {/* Title row — icon + name; opt out + info only once a profile exists */}
          <div className="flex items-start gap-[12px]">
            <span className="text-fy27-icon-primary mt-[1px]"><IconMicOutline /></span>
            <span className="flex-1 min-w-0 text-[15px] font-semibold text-fy27-text-primary" style={T_BODY}>Voice Recognition</span>
            {hasProfile && (
              <>
                <button
                  onClick={handleOptOut}
                  className="shrink-0 h-[30px] px-[12px] rounded-[6px] border border-fy27-border text-[13px] font-medium text-fy27-text-primary"
                >
                  Opt out
                </button>
                <span className="shrink-0 mt-[3px] text-fy27-icon-secondary"><IconInfoCircle /></span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-[13px] text-fy27-text-secondary" style={{ lineHeight: "18px" }}>
            Microsoft Teams, on behalf of your organization, collects and processes your pitch, inflection, and
            speech patterns to build and update your unique voice profile, which may be considered biometric data.
            Your voice profile is used to suppress background noises in Teams meetings through voice isolation and
            to identify you in meeting rooms, transcripts, and notes.
          </p>
          <p className="text-[13px] text-fy27-text-secondary" style={{ lineHeight: "18px" }}>
            Your voice profile will be retained as described in the data retention section of this{" "}
            <span className="text-fy27-text-interactive">Learn More</span>. <span className="text-fy27-text-interactive">Privacy Policy</span>
          </p>

          {hasProfile ? (
            <>
              {/* Status pill */}
              <span className="self-start inline-flex items-center gap-[6px] h-[26px] px-[10px] rounded-full text-[12px] font-medium bg-fy27-accent-tertiary text-fy27-text-interactive">
                <IconCheck size={11} />
                Voice profile complete
              </span>

              <div className="h-px bg-fy27-divider" />

              {/* Export row */}
              <div className="flex items-center gap-[12px]">
                <span className="flex-1 min-w-0">
                  <span className="block text-[14px] font-medium text-fy27-text-primary" style={T_BODY}>Export my voice profile</span>
                  <span className="block text-[12px] text-fy27-text-secondary">Download a copy of your voice profile data.</span>
                </span>
                <button
                  onClick={() => show("Voice profile exported")}
                  className="shrink-0 h-[30px] px-[12px] rounded-[6px] border border-fy27-border text-[13px] font-medium text-fy27-text-primary"
                >
                  Export
                </button>
              </div>
            </>
          ) : (
            /* No consent yet, or opted out — no profile, no export */
            <span className="self-start inline-flex items-center h-[26px] px-[10px] rounded-full text-[12px] font-medium bg-fy27-surface-raised text-fy27-text-secondary">
              No voice profile created
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
