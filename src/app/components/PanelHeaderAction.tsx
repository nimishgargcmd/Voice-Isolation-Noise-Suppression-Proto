import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";

interface PanelHeaderActionProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

/**
 * Trailing text action for a MultitaskingPanel header ("Edit", "Save", "Clear all").
 *
 * FY27 MVP renders the Teams 2 iOS Navigation bar "R. Label" — a bare text button
 * (Subhead 1) coloured text/interactive when enabled and text/disabled when not.
 * Final Vision keeps the original black pill. Version-gated so FV is untouched.
 */
export function PanelHeaderAction({ label, onClick, disabled = false, ariaLabel }: PanelHeaderActionProps) {
  const { activeVersionId } = useVersion();
  const isMvp = isMvpFamily(activeVersionId);

  if (isMvp) {
    return (
      <button
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        aria-label={ariaLabel ?? label}
        className={`flex items-center transition-opacity ${disabled ? "" : "active:opacity-60"}`}
        style={{ fontFamily: "var(--font-sf-pro)" }}
      >
        <span
          className={`text-[17px] font-medium leading-[20px] tracking-[-0.24px] whitespace-nowrap ${
            disabled ? "text-fy27-text-disabled" : "text-fy27-text-interactive"
          }`}
        >
          {label}
        </span>
      </button>
    );
  }

  // Final Vision — original black pill.
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? label}
      className="bg-black flex items-center justify-center overflow-clip px-[16px] py-[8px] rounded-[9999px]"
      style={{ opacity: disabled ? 0.4 : 1, cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <span className="font-['SF_Pro_Text:Medium',sans-serif] text-white text-[13px] leading-[18px] tracking-[-0.08px] whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}
