import React from "react";
import { useLocation, useNavigate } from "react-router";

const ACCENT = "var(--fy27-brand-primary)";
const INACTIVE = "var(--fy27-icon-primary)";

// Fluent System Icons (24px) — regular (inactive) + filled (active). These are
// single-color filled paths (the "regular" variant renders as an outline).
const FLUENT = {
  alertRegular: "M12.0001 1.99609C16.05 1.99609 19.3568 5.19084 19.4959 9.24515L19.5001 9.49609V13.5931L20.8801 16.7491C20.9492 16.907 20.9848 17.0775 20.9848 17.2499C20.9848 17.9402 20.4252 18.4999 19.7348 18.4999L15.0001 18.5014C15.0001 20.1582 13.657 21.5014 12.0001 21.5014C10.4024 21.5014 9.09645 20.2524 9.0052 18.6776L8.99966 18.4991L4.27498 18.4999C4.10364 18.4999 3.93413 18.4646 3.77697 18.3964C3.14377 18.1213 2.85342 17.3851 3.12846 16.7519L4.50011 13.594V9.49599C4.50071 5.3412 7.8522 1.99609 12.0001 1.99609ZM13.4997 18.4991L10.5001 18.5014C10.5001 19.3298 11.1717 20.0014 12.0001 20.0014C12.7798 20.0014 13.4206 19.4065 13.4932 18.6458L13.4997 18.4991ZM12.0001 3.49609C8.67995 3.49609 6.00059 6.17035 6.00011 9.49609V13.9057L4.65613 16.9999H19.3526L18.0001 13.9067L18.0002 9.50895L17.9965 9.28375C17.8854 6.05027 15.2417 3.49609 12.0001 3.49609Z",
  alertFilled: "M9.04173 19.003H14.9583C14.7196 20.4211 13.486 21.5015 12 21.5015C10.514 21.5015 9.28037 20.4211 9.04173 19.003ZM12 2.00391C16.1421 2.00391 19.5 5.36177 19.5 9.50391V13.5024L20.9183 16.6625C20.9732 16.7848 21.0016 16.9174 21.0016 17.0515C21.0016 17.5762 20.5763 18.0015 20.0516 18.0015H3.95219C3.8184 18.0015 3.68613 17.9733 3.56402 17.9186C3.08515 17.7042 2.87073 17.1422 3.08511 16.6633L4.50001 13.5028L4.50011 9.49099L4.50453 9.24107C4.6436 5.21035 7.95588 2.00391 12 2.00391Z",
  chatRegular: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.3817 22 8.81782 21.6146 7.41286 20.888L3.58704 21.9553C2.92212 22.141 2.23258 21.7525 2.04691 21.0876C1.98546 20.8676 1.98549 20.6349 2.04695 20.4151L3.11461 16.5922C2.38637 15.186 2 13.6203 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 13.4696 3.87277 14.8834 4.57303 16.1375L4.72368 16.4072L3.61096 20.3914L7.59755 19.2792L7.86709 19.4295C9.12006 20.1281 10.5322 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM8.75 13H13.2483C13.6625 13 13.9983 13.3358 13.9983 13.75C13.9983 14.1297 13.7161 14.4435 13.35 14.4932L13.2483 14.5H8.75C8.33579 14.5 8 14.1642 8 13.75C8 13.3703 8.28215 13.0565 8.64823 13.0068L8.75 13H13.2483H8.75ZM8.75 9.5H15.2545C15.6687 9.5 16.0045 9.83579 16.0045 10.25C16.0045 10.6297 15.7223 10.9435 15.3563 10.9932L15.2545 11H8.75C8.33579 11 8 10.6642 8 10.25C8 9.8703 8.28215 9.55651 8.64823 9.50685L8.75 9.5H15.2545H8.75Z",
  chatFilled: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.3596 22 8.77516 21.6039 7.35578 20.8583L3.06538 21.9753C2.6111 22.0937 2.1469 21.8213 2.02858 21.367C1.99199 21.2266 1.99198 21.0791 2.02855 20.9386L3.1449 16.6502C2.3972 15.2294 2 13.6428 2 12C2 6.47715 6.47715 2 12 2ZM13.2517 13H8.75L8.64823 13.0068C8.28215 13.0565 8 13.3703 8 13.75C8 14.1297 8.28215 14.4435 8.64823 14.4932L8.75 14.5H13.2517L13.3535 14.4932C13.7196 14.4435 14.0017 14.1297 14.0017 13.75C14.0017 13.3703 13.7196 13.0565 13.3535 13.0068L13.2517 13ZM15.25 9.5H8.75L8.64823 9.50685C8.28215 9.55651 8 9.8703 8 10.25C8 10.6297 8.28215 10.9435 8.64823 10.9932L8.75 11H15.25L15.3518 10.9932C15.7178 10.9435 16 10.6297 16 10.25C16 9.8703 15.7178 9.55651 15.3518 9.50685L15.25 9.5Z",
  calendarRegular: "M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM19.5 8.5H4.5V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V8.5ZM7.75 14.5C8.44036 14.5 9 15.0596 9 15.75C9 16.4404 8.44036 17 7.75 17C7.05964 17 6.5 16.4404 6.5 15.75C6.5 15.0596 7.05964 14.5 7.75 14.5ZM12 14.5C12.6904 14.5 13.25 15.0596 13.25 15.75C13.25 16.4404 12.6904 17 12 17C11.3096 17 10.75 16.4404 10.75 15.75C10.75 15.0596 11.3096 14.5 12 14.5ZM7.75 10.5C8.44036 10.5 9 11.0596 9 11.75C9 12.4404 8.44036 13 7.75 13C7.05964 13 6.5 12.4404 6.5 11.75C6.5 11.0596 7.05964 10.5 7.75 10.5ZM12 10.5C12.6904 10.5 13.25 11.0596 13.25 11.75C13.25 12.4404 12.6904 13 12 13C11.3096 13 10.75 12.4404 10.75 11.75C10.75 11.0596 11.3096 10.5 12 10.5ZM16.25 10.5C16.9404 10.5 17.5 11.0596 17.5 11.75C17.5 12.4404 16.9404 13 16.25 13C15.5596 13 15 12.4404 15 11.75C15 11.0596 15.5596 10.5 16.25 10.5ZM17.75 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V7H19.5V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5Z",
  calendarFilled: "M21 8.5V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V8.5H21ZM7.25 15C6.55964 15 6 15.5596 6 16.25C6 16.9404 6.55964 17.5 7.25 17.5C7.94036 17.5 8.5 16.9404 8.5 16.25C8.5 15.5596 7.94036 15 7.25 15ZM12 15C11.3096 15 10.75 15.5596 10.75 16.25C10.75 16.9404 11.3096 17.5 12 17.5C12.6904 17.5 13.25 16.9404 13.25 16.25C13.25 15.5596 12.6904 15 12 15ZM7.25 10.5C6.55964 10.5 6 11.0596 6 11.75C6 12.4404 6.55964 13 7.25 13C7.94036 13 8.5 12.4404 8.5 11.75C8.5 11.0596 7.94036 10.5 7.25 10.5ZM12 10.5C11.3096 10.5 10.75 11.0596 10.75 11.75C10.75 12.4404 11.3096 13 12 13C12.6904 13 13.25 12.4404 13.25 11.75C13.25 11.0596 12.6904 10.5 12 10.5ZM16.75 10.5C16.0596 10.5 15.5 11.0596 15.5 11.75C15.5 12.4404 16.0596 13 16.75 13C17.4404 13 18 12.4404 18 11.75C18 11.0596 17.4404 10.5 16.75 10.5ZM17.75 3C19.5449 3 21 4.45507 21 6.25V7H3V6.25C3 4.45507 4.45507 3 6.25 3H17.75Z",
  searchRegular: "M16.1017 17.1624C14.717 18.3101 12.9391 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.9391 18.3101 14.717 17.1624 16.1018L21.7803 20.7197C22.0732 21.0126 22.0732 21.4874 21.7803 21.7803C21.4874 22.0732 21.0125 22.0732 20.7196 21.7803L16.1017 17.1624ZM17.5 11C17.5 7.41015 14.5899 4.5 11 4.5C7.41015 4.5 4.5 7.41015 4.5 11C4.5 14.5899 7.41015 17.5 11 17.5C14.5899 17.5 17.5 14.5899 17.5 11Z",
  moreRegular: "M7.75 12C7.75 12.9665 6.9665 13.75 6 13.75C5.0335 13.75 4.25 12.9665 4.25 12C4.25 11.0335 5.0335 10.25 6 10.25C6.9665 10.25 7.75 11.0335 7.75 12ZM13.75 12C13.75 12.9665 12.9665 13.75 12 13.75C11.0335 13.75 10.25 12.9665 10.25 12C10.25 11.0335 11.0335 10.25 12 10.25C12.9665 10.25 13.75 11.0335 13.75 12ZM18 13.75C18.9665 13.75 19.75 12.9665 19.75 12C19.75 11.0335 18.9665 10.25 18 10.25C17.0335 10.25 16.25 11.0335 16.25 12C16.25 12.9665 17.0335 13.75 18 13.75Z",
};

function Glyph({ d, color }: { d: string; color: string }) {
  // currentColor so the var() token resolves (var() in a raw SVG fill attr is unreliable).
  return (
    <svg className="size-[24px] block" viewBox="0 0 24 24" fill="none" style={{ color }}>
      <path d={d} fill="currentColor" />
    </svg>
  );
}

function NavTab({ active, onClick, label, children }: { active: boolean; onClick: () => void; label: string; children: React.ReactNode }) {
  return (
    <button onClick={onClick} aria-label={label} aria-current={active ? "page" : undefined} className="flex items-center justify-center size-[60px]">
      <div className={`flex items-center justify-center rounded-full size-[48px] transition-colors ${active ? "bg-fy27-accent-tertiary" : ""}`}>
        <div className="flex items-center justify-center p-[10px]">{children}</div>
      </div>
    </button>
  );
}

/**
 * Shared bottom navigation for the Teams app shell. Active tab = Fluent FILLED
 * icon in purple (on a light chip); inactive = Fluent REGULAR icon in black.
 */
export function AppBottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const calendarActive = pathname === "/" || pathname === "/calendar";
  const activityActive = pathname === "/activity";
  const chatActive = pathname === "/chat";

  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col gap-[4px] items-center pb-[24px] pointer-events-none">
      <div className="flex gap-[8px] h-[76px] items-center justify-center w-full px-[8px] pointer-events-auto">
        {/* Toolbar pill (glass) */}
        <div className="backdrop-blur-[12.5px] bg-fy27-surface/85 border border-fy27-fg-stroke flex gap-[4px] h-[60px] items-center justify-center px-[8px] rounded-[50px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.03),2px_2px_80px_12px_rgba(120,104,235,0.16)]">
          <NavTab active={activityActive} onClick={() => navigate("/activity")} label="Activity">
            <Glyph d={activityActive ? FLUENT.alertFilled : FLUENT.alertRegular} color={activityActive ? ACCENT : INACTIVE} />
          </NavTab>
          <NavTab active={chatActive} onClick={() => navigate("/chat")} label="Chat">
            <Glyph d={chatActive ? FLUENT.chatFilled : FLUENT.chatRegular} color={chatActive ? ACCENT : INACTIVE} />
          </NavTab>
          <NavTab active={calendarActive} onClick={() => navigate("/calendar")} label="Calendar">
            <Glyph d={calendarActive ? FLUENT.calendarFilled : FLUENT.calendarRegular} color={calendarActive ? ACCENT : INACTIVE} />
          </NavTab>
          <NavTab active={false} onClick={() => { /* More — TODO */ }} label="More">
            <Glyph d={FLUENT.moreRegular} color={INACTIVE} />
          </NavTab>
        </div>
        {/* Search FAB (glass) */}
        <button
          aria-label="Search"
          className="backdrop-blur-[12.5px] bg-fy27-surface/85 border border-fy27-fg-stroke flex items-center justify-center rounded-full size-[60px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.03),2px_2px_80px_12px_rgba(120,104,235,0.16)] pointer-events-auto"
        >
          <div className="flex items-center justify-center p-[16px]">
            <Glyph d={FLUENT.searchRegular} color={INACTIVE} />
          </div>
        </button>
      </div>
    </div>
  );
}
