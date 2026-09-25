import { useState } from "react";
import { useNavigate } from "react-router";
import { useToast } from "@/app/components/ToastContext";
import { IconCheck } from "@/app/components/profile/fluentIcons";
import { IconMicOutline, IconInfoCircle } from "@/app/components/settings/settingsIcons";

const T_BODY: React.CSSProperties = { letterSpacing: "-0.43px", lineHeight: "22px" };

type EnrollmentStatus = "complete" | "enrolling" | "none";

/**
 * Full-page Recognition privacy setting — reachable from Settings → "Recognition".
 * "Opt out" is available whenever a profile exists or is being created
 * ("complete"/"enrolling"). The completed-profile pill + "Export" only show once
 * enrolment has finished ("complete"). Before consent, and after opting out
 * ("none"), the page collapses to enrolment guidance with no CTA.
 */
export function RecognitionPage() {
  const navigate = useNavigate();
  const { show } = useToast();
  const [status, setStatus] = useState<EnrollmentStatus>("complete");

  const handleOptOut = () => {
    setStatus("none");
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
          {/* Title row — icon + name; opt out + info once a profile exists or is enrolling */}
          <div className="flex items-start gap-[12px]">
            <span className="text-fy27-icon-primary mt-[1px]"><IconMicOutline /></span>
            <span className="flex-1 min-w-0 text-[15px] font-semibold text-fy27-text-primary" style={T_BODY}>Voice Recognition</span>
            {(status === "complete" || status === "enrolling") && (
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

          {status === "complete" && (
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
          )}

          {status === "enrolling" && (
            /* Consented and enrolling in a meeting right now — opt out is available, no other CTA */
            <>
              <span className="self-start inline-flex items-center gap-[6px] h-[26px] px-[10px] rounded-full text-[12px] font-medium bg-fy27-accent-tertiary text-fy27-text-interactive">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 animate-spin">
                  <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.75" opacity="0.3" />
                  <path d="M14.25 8a6.25 6.25 0 0 0-6.25-6.25" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
                Generating voice profile
              </span>
              <p className="text-[13px] text-fy27-text-secondary" style={{ lineHeight: "18px" }}>
                Your voice profile is being created from your current meeting. This will update automatically once it's complete.
              </p>
            </>
          )}

          {status === "none" && (
            /* No consent yet, or opted out — status pill + guidance to enrol elsewhere */
            <>
              <span className="self-start inline-flex items-center h-[26px] px-[10px] rounded-full text-[12px] font-medium bg-fy27-surface-raised text-fy27-text-secondary">
                No voice profile created
              </span>
              <p className="text-[13px] text-fy27-text-secondary" style={{ lineHeight: "18px" }}>
                Enrol your voice from your meeting's audio settings or from the Recognition tab on your Teams desktop app.
              </p>
            </>
          )}
        </div>

        {/* Preview-only state switcher — not part of the real Settings UI, just for reviewing the three states. */}
        <div className="mt-[16px] flex items-center justify-center gap-[8px]">
          {(["complete", "enrolling", "none"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`h-[26px] px-[10px] rounded-full text-[11px] font-medium border ${
                status === s ? "border-fy27-brand-primary text-fy27-text-interactive" : "border-fy27-border text-fy27-text-secondary"
              }`}
            >
              Preview: {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
