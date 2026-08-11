import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useProfileDrawer } from "./ProfileDrawerContext";
import { useTheme } from "@/app/theme/ThemeContext";
import { useVersion } from "@/app/versioning/VersionContext";
import udayan from "@/assets/figma/account/udayan.jpg";
import {
  IconLocation, IconStatus, IconBell, IconWeather, IconSettings,
  PresenceAvailable, IconCheck, IconChevronRight, IconDismiss, IconFlag,
} from "./fluentIcons";

/* Static profile (no in-sheet editing). */
const PROFILE = { name: "Udayan Vidyanta", role: "Senior Designer", avatar: udayan };

/* iOS grouped-list look — semantic tokens (theme-aware). */
const CARD = "bg-fy27-surface-card";
const DIVIDER = "bg-fy27-divider";

const T_BODY1: React.CSSProperties = { letterSpacing: "-0.43px", lineHeight: "22px" };
const T_CAPTION: React.CSSProperties = { lineHeight: "16px" };

/* Activity / version row (48 or 60 tall) */
function Row({ icon, label, sublabel, trailing, onClick, tall }: {
  icon: React.ReactNode; label: string; sublabel?: string;
  trailing?: React.ReactNode; onClick?: () => void; tall?: boolean;
}) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag onClick={onClick}
      className={`relative w-full flex items-center gap-[16px] pl-[16px] pr-[16px] ${tall ? "h-[60px]" : "h-[48px]"} text-left ${onClick ? "active:opacity-70 transition-opacity" : ""}`}>
      <span className="shrink-0 text-fy27-icon-primary">{icon}</span>
      <span className="flex-1 min-w-0">
        <span className="block font-normal text-[17px] text-fy27-text-primary truncate" style={T_BODY1}>{label}</span>
        {sublabel && <span className="block font-normal text-[12px] text-fy27-text-secondary truncate" style={T_CAPTION}>{sublabel}</span>}
      </span>
      {trailing}
    </Tag>
  );
}

/* Hairline divider, inset 56px (aligns under the label, past the icon). */
const Hair = () => <div className={`h-px ml-[56px] mr-[16px] ${DIVIDER}`} />;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[15px] font-semibold text-fy27-text-secondary px-[2px]" style={{ letterSpacing: "-0.23px", lineHeight: "20px" }}>{children}</div>;
}

/* Compact Teams toggle (~35×21). */
function Toggle({ on, onChange, label }: { on: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button role="switch" aria-checked={on} aria-label={label} onClick={() => onChange(!on)}
      className={`relative shrink-0 w-[35px] h-[21px] rounded-full transition-colors ${on ? "bg-fy27-brand" : "bg-fy27-switch-off"}`}>
      <span className={`absolute top-1/2 -translate-y-1/2 size-[17px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-all ${on ? "right-[2px]" : "left-[2px]"}`} />
    </button>
  );
}

function Radio({ on }: { on: boolean }) {
  return on ? (
    <span className="shrink-0 size-[24px] rounded-full bg-fy27-brand flex items-center justify-center text-white"><IconCheck size={13} /></span>
  ) : (
    <span className="shrink-0 size-[24px] rounded-full border-2 border-fy27-border" />
  );
}

export function AccountSheet() {
  const { isOpen, close } = useProfileDrawer();
  const { theme, setTheme } = useTheme();
  const { versions, activeVersionId, setActiveVersion } = useVersion();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className="absolute inset-0 z-[60] bg-black/35"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} />
          <motion.div
            role="dialog" aria-modal="true" aria-label="Account"
            className="absolute inset-x-0 bottom-0 z-[61] max-h-[92%] overflow-y-auto scrollbar-hide flex flex-col gap-[16px] rounded-t-[34px] bg-fy27-surface-tertiary px-[16px] pt-[16px] pb-[28px]"
            style={{ fontFamily: "var(--font-sf-pro)" }}
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 420, damping: 40 }}>

            {/* Header */}
            <div className="relative h-[44px] shrink-0 flex items-center justify-center">
              <span className="text-[17px] font-semibold text-fy27-text-primary" style={T_BODY1}>Account</span>
              <button aria-label="Close" onClick={close}
                className="absolute right-0 top-1/2 -translate-y-1/2 size-[44px] rounded-full flex items-center justify-center bg-fy27-surface-raised text-fy27-icon-primary">
                <IconDismiss size={20} />
              </button>
            </div>

            {/* Identity (static) */}
            <div className={`shrink-0 flex items-center gap-[8px] h-[60px] pl-[12px] pr-[16px] rounded-full ${CARD}`}>
              <img src={PROFILE.avatar} alt="" className="size-[36px] rounded-full object-cover shrink-0" />
              <span className="flex-1 min-w-0">
                <span className="flex items-center gap-[2px]">
                  <span className="font-normal text-[17px] text-fy27-text-primary truncate" style={T_BODY1}>{PROFILE.name}</span>
                  <span className="shrink-0 text-fy27-icon-secondary"><IconChevronRight size={12} /></span>
                </span>
                <span className="block font-normal text-[12px] text-fy27-text-secondary truncate" style={T_CAPTION}>{PROFILE.role}</span>
              </span>
            </div>

            {/* Activity */}
            <div className="shrink-0 flex flex-col gap-[8px]">
              <SectionLabel>Activity</SectionLabel>
              <div className={`rounded-[24px] overflow-hidden ${CARD}`}>
                <Row icon={<PresenceAvailable />} label="Available" onClick={() => {}} />
                <Hair />
                <Row icon={<IconLocation />} label="Set work location" onClick={() => {}} />
                <Hair />
                <Row icon={<IconStatus />} label="Set status message" onClick={() => {}} />
                <Hair />
                <Row icon={<IconBell />} label="Notifications" onClick={() => {}} />
                <Hair />
                <Row icon={<IconWeather />} label="Meeting light theme"
                  trailing={<Toggle on={theme === "light"} label="Meeting light theme" onChange={(v) => setTheme(v ? "light" : "dark")} />} />
                <Hair />
                <Row icon={<IconSettings />} label="Settings" onClick={() => {}} />
              </div>
            </div>

            {/* Meeting version control */}
            <div className="shrink-0 flex flex-col gap-[8px]">
              <SectionLabel>Meeting version control</SectionLabel>
              <div className={`rounded-[24px] overflow-hidden ${CARD}`}>
                {versions.map((v, i) => (
                  <div key={v.id}>
                    {i > 0 && <Hair />}
                    <Row tall icon={<IconFlag />} label={v.label} sublabel={v.summary}
                      trailing={<Radio on={v.id === activeVersionId} />}
                      onClick={() => setActiveVersion(v.id)} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
