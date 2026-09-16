import { useNavigate } from "react-router";
import { CopilotLogo } from "@/app/components/icons/CopilotLogo";
import { IconBell } from "@/app/components/profile/fluentIcons";
import {
  IconAppearance, IconDataStorage, IconProfileOutline, IconChatsChannels, IconPeopleCard,
  IconCalling, IconCaptions, IconShifts, IconWalkieTalkie, IconGlobeOutline, IconAboutTeam, IconHelp,
  IconMicOutline,
} from "@/app/components/settings/settingsIcons";

const T_BODY: React.CSSProperties = { letterSpacing: "-0.43px", lineHeight: "22px" };

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-[28px] pb-[8px] px-[16px] text-[20px] font-bold text-fy27-text-primary" style={{ letterSpacing: "0.2px" }}>
      {children}
    </div>
  );
}

function SettingsRow({ icon, label, value, chevron, onClick }: {
  icon: React.ReactNode; label: string; value?: string; chevron?: boolean; onClick?: () => void;
}) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag onClick={onClick} className="w-full h-[52px] flex items-center gap-[16px] px-[16px] text-left active:bg-fy27-surface-raised transition-colors">
      <span className="text-fy27-icon-primary shrink-0">{icon}</span>
      <span className="flex-1 min-w-0 text-[17px] text-fy27-text-primary truncate" style={T_BODY}>{label}</span>
      {value && <span className="text-[15px] text-fy27-text-secondary shrink-0" style={T_BODY}>{value}</span>}
      {chevron && (
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="shrink-0 text-fy27-icon-secondary">
          <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </Tag>
  );
}

const Divider = () => <div className="h-px w-full bg-fy27-divider" />;

/** Full-page Settings surface — reachable from Account → "Settings". */
export function SettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-fy27-surface flex flex-col pt-[59px]" style={{ fontFamily: "var(--font-sf-pro)" }}>
      {/* Header */}
      <div className="relative shrink-0 h-[44px] flex items-center justify-center px-[16px]">
        <button
          aria-label="Close"
          onClick={() => navigate(-1)}
          className="absolute left-[16px] size-[24px] flex items-center justify-center text-fy27-icon-primary"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <span className="text-[17px] font-semibold text-fy27-text-primary" style={T_BODY}>Settings</span>
      </div>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <SectionHeader>General</SectionHeader>
        <SettingsRow icon={<IconAppearance />} label="Appearance" value="System default" chevron onClick={() => {}} />
        <SettingsRow icon={<IconDataStorage />} label="Data and storage" onClick={() => {}} />
        <SettingsRow icon={<CopilotLogo size={22} />} label="Copilot" onClick={() => {}} />

        <Divider />

        <SectionHeader>Microsoft</SectionHeader>
        <SettingsRow icon={<IconProfileOutline />} label="Profile" onClick={() => {}} />
        <SettingsRow icon={<IconBell />} label="Notifications" onClick={() => {}} />
        <SettingsRow icon={<IconChatsChannels />} label="Chats and channels" onClick={() => {}} />
        <SettingsRow icon={<IconPeopleCard />} label="People" onClick={() => {}} />
        <SettingsRow icon={<IconCalling />} label="Calling" onClick={() => {}} />
        <SettingsRow icon={<IconCaptions />} label="Captions and transcripts" onClick={() => {}} />
        <SettingsRow icon={<IconMicOutline />} label="Recognition" onClick={() => navigate("/settings/recognition")} />
        <SettingsRow icon={<IconShifts />} label="Shifts" onClick={() => {}} />
        <SettingsRow icon={<IconWalkieTalkie />} label="Walkie Talkie" onClick={() => {}} />
        <SettingsRow icon={<IconGlobeOutline />} label="Links In Teams" onClick={() => {}} />

        <Divider />

        <SettingsRow icon={<IconAboutTeam />} label="About" onClick={() => {}} />
        <SettingsRow icon={<IconHelp />} label="Help and feedback" onClick={() => {}} />
      </div>
    </div>
  );
}
