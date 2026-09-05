import { BottomSheet } from "@/app/components/BottomSheet";

interface VoiceIsolationConsentSheetProps {
  open: boolean;
  onAccept: () => void;
  onDismiss: () => void;
}

/**
 * Voice-recognition consent, adapted for mobile from the desktop dialog:
 * a bottom sheet with the biometric-data disclosure bolded up top, the
 * supporting legal copy + links in a capped scroll area below, and
 * full-width stacked actions pinned at the bottom so the CTA is always
 * reachable without hunting through the text.
 */
export function VoiceIsolationConsentSheet({ open, onAccept, onDismiss }: VoiceIsolationConsentSheetProps) {
  return (
    <BottomSheet
      open={open}
      onClose={onDismiss}
      ariaLabel="Voice recognition for Teams"
      surfaceClassName="bg-fy27-surface-raised"
      className="px-[20px] pb-[max(16px,env(safe-area-inset-bottom))]"
      zIndex={95}
    >
      <div className="text-fy27-text-primary text-[20px] leading-[26px] tracking-[-0.41px] font-semibold pb-[12px]">
        Voice recognition for Teams
      </div>

      {/* Capped height + its own scroll so the sheet never grows past a comfortable reach zone. */}
      <div className="max-h-[34vh] overflow-y-auto pr-[2px] -mr-[2px]">
        <p className="text-fy27-text-primary text-[14px] leading-[20px] font-semibold">
          Your voice profile is used to suppress background noise in Teams meetings through voice isolation and to identify you in meeting rooms, transcripts, and notes.
        </p>
        <p className="mt-[12px] text-fy27-text-secondary text-[14px] leading-[20px]">
          Microsoft Teams, on behalf of your organization, collects and processes your pitch, inflection, and speech patterns to build and update your unique voice profile, which may be considered biometric data.
        </p>
        <p className="mt-[12px] text-fy27-text-secondary text-[14px] leading-[20px]">
          When you tap "Start voice capture," you're consenting to the collection and use of your data. Your voice profile is retained as described in the data retention section of this policy.
        </p>
        <p className="mt-[12px] flex items-center gap-[16px]">
          <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noreferrer" className="text-fy27-brand underline text-[14px] leading-[20px]">
            Learn more
          </a>
          <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noreferrer" className="text-fy27-brand underline text-[14px] leading-[20px]">
            Privacy policy
          </a>
        </p>
      </div>

      <div className="pt-[16px] flex flex-col gap-[8px]">
        <button
          type="button"
          className="w-full h-[44px] rounded-[10px] bg-fy27-brand text-fy27-text-on-accent text-[15px] font-semibold active:opacity-70"
          onClick={onAccept}
        >
          Start voice capture
        </button>
        <button
          type="button"
          className="w-full h-[44px] rounded-[10px] border border-fy27-divider text-fy27-text-primary text-[15px] font-semibold bg-fy27-surface-raised active:opacity-70"
          onClick={onDismiss}
        >
          Dismiss
        </button>
      </div>
    </BottomSheet>
  );
}
