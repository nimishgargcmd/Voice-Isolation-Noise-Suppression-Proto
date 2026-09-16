/**
 * Outline glyphs for the Settings page rows. Simple stroke-based icons (24px
 * box, currentColor) — not exact Fluent exports, just visually consistent
 * placeholders matching the Teams Settings screen reference.
 */
type P = { className?: string };

function Outline({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center size-[24px] shrink-0 ${className ?? ""}`}>
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </span>
  );
}

export const IconAppearance = ({ className }: P) => (
  <Outline className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 0 0 0 18Z" fill="currentColor" stroke="none" />
  </Outline>
);

export const IconDataStorage = ({ className }: P) => (
  <Outline className={className}>
    <rect x="4" y="13" width="4" height="7" rx="1" />
    <rect x="10" y="9" width="4" height="11" rx="1" />
    <rect x="16" y="5" width="4" height="15" rx="1" />
  </Outline>
);

export const IconProfileOutline = ({ className }: P) => (
  <Outline className={className}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M4.5 20c1.2-3.6 4.2-5.5 7.5-5.5s6.3 1.9 7.5 5.5" />
  </Outline>
);

export const IconChatsChannels = ({ className }: P) => (
  <Outline className={className}>
    <path d="M12 3.5c4.7 0 8.5 3.36 8.5 7.5 0 4.14-3.8 7.5-8.5 7.5-1.15 0-2.25-.2-3.24-.57l-3.4.98a1 1 0 0 1-1.24-1.24l.98-3.4A7.16 7.16 0 0 1 3.5 11c0-4.14 3.8-7.5 8.5-7.5Z" />
  </Outline>
);

export const IconPeopleCard = ({ className }: P) => (
  <Outline className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="11" r="2" />
    <path d="M6 16c.6-1.6 1.9-2.5 3-2.5s2.4.9 3 2.5" />
    <path d="M14 10h4M14 13.5h4" />
  </Outline>
);

export const IconCalling = ({ className }: P) => (
  <Outline className={className}>
    <path d="M5.2 4.5h2.9c.5 0 .95.34 1.08.83l.9 3.2a1.12 1.12 0 0 1-.36 1.16l-1.6 1.3a11.6 11.6 0 0 0 5.2 5.2l1.3-1.6c.3-.36.78-.5 1.16-.36l3.2.9c.49.13.83.58.83 1.08v2.9c0 .66-.56 1.18-1.22 1.13-7.1-.55-12.7-6.15-13.25-13.25C4.02 5.06 4.54 4.5 5.2 4.5Z" />
  </Outline>
);

export const IconCaptions = ({ className }: P) => (
  <Outline className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <text x="7" y="14.5" fontSize="7" fontWeight="700" stroke="none" fill="currentColor" fontFamily="inherit">CC</text>
  </Outline>
);

export const IconShifts = ({ className }: P) => (
  <Outline className={className}>
    <rect x="3.5" y="4.5" width="17" height="16" rx="2.5" />
    <path d="M12 9v4l2.5 2.5" />
  </Outline>
);

export const IconWalkieTalkie = ({ className }: P) => (
  <Outline className={className}>
    <rect x="7" y="6.5" width="10" height="15" rx="2" />
    <path d="M10 3.5h4v3h-4Z" />
    <circle cx="12" cy="12.5" r="1.6" />
    <path d="M9.5 17h5" />
  </Outline>
);

export const IconGlobeOutline = ({ className }: P) => (
  <Outline className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.6 2.3 4 5.3 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.3-4-8.5s1.4-6.2 4-8.5Z" />
  </Outline>
);

export const IconAboutTeam = ({ className }: P) => (
  <Outline className={className}>
    <circle cx="9" cy="9" r="3" />
    <circle cx="16.5" cy="10" r="2.4" />
    <path d="M3.8 19c.65-2.9 2.9-4.6 5.2-4.6s4.55 1.7 5.2 4.6M14.6 14.9c1.9.1 3.6 1.5 4.1 3.9" />
  </Outline>
);

export const IconHelp = ({ className }: P) => (
  <Outline className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.6 9.4a2.4 2.4 0 1 1 3.6 2.08c-.7.42-1.2.9-1.2 1.72v.3" />
    <circle cx="12" cy="16.7" r="0.15" fill="currentColor" stroke="none" />
  </Outline>
);

export const IconMicOutline = ({ className }: P) => (
  <Outline className={className}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" />
  </Outline>
);

export const IconInfoCircle = ({ className }: P) => (
  <Outline className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5" />
    <circle cx="12" cy="7.7" r="0.15" fill="currentColor" stroke="none" />
  </Outline>
);
