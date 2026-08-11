import svgPaths from "./svg-h22zohgqjx";

function Icon24Px() {
  return (
    <div className="relative shrink-0 size-[21.6px]" data-name="Icon 24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6 21.6">
        <g id="Icon 24px">
          <path d={svgPaths.p33d76ec0} fill="var(--fill-0, #CC4A31)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Subhead() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Subhead">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] h-full leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#e1e1e1] text-[11.7px] text-ellipsis tracking-[-0.072px] whitespace-pre-wrap">
        <span className="leading-[16.2px]">{`Recording and transcription have started in `}</span>
        <span className="leading-[16.2px]">English (UK).</span>
        <span className="leading-[16.2px]">{` By joining, you consent to this meeting being recorded. `}</span>
        <span className="leading-[16.2px] text-[#7f85f5]">Privacy Policy</span>
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Subhead />
    </div>
  );
}

function Dismiss() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Dismiss">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Dismiss">
          <path d={svgPaths.pcb84000} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-full items-center relative shrink-0" data-name="Right">
      <Dismiss />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7.2px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon24Px />
      <Header />
      <div className="flex flex-row items-center self-stretch">
        <Right />
      </div>
    </div>
  );
}

function Center() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#0a0604] bottom-[0.2px] content-stretch flex flex-col items-start justify-center left-[18.05px] p-[14.4px] rounded-[10.8px] shadow-[0px_3.6px_7.2px_0px_rgba(0,0,0,0.14),0px_0px_1.8px_0px_rgba(0,0,0,0.12)] w-[324.9px]" data-name="Container">
      <Center />
    </div>
  );
}

function Icon24Px1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon 24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon 24px">
          <path d={svgPaths.p3e114300} fill="var(--fill-0, #CC4A31)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Subhead1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Subhead">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] h-full leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#e1e1e1] text-[13px] text-ellipsis tracking-[-0.08px] whitespace-pre-wrap">
        <span className="leading-[18px]">{`Recording and transcription have started in `}</span>
        <span className="leading-[18px]">English (UK).</span>
        <span className="leading-[18px]">{` By joining, you consent to this meeting being recorded. `}</span>
        <span className="leading-[18px] text-[#7f85f5]">Privacy Policy</span>
      </p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Subhead1 />
    </div>
  );
}

function Dismiss1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Dismiss">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Dismiss">
          <path d={svgPaths.p31168500} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Right">
      <Dismiss1 />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon24Px1 />
      <Header1 />
      <div className="flex flex-row items-center self-stretch">
        <Right1 />
      </div>
    </div>
  );
}

function Center1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left1 />
    </div>
  );
}

function NotificationBadge() {
  return (
    <div className="bg-[#7f85f5] h-[12.8px] relative rounded-[80.002px] shrink-0 w-full" data-name="Notification badge">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[4.8px] relative size-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] not-italic relative shrink-0 text-[8.8px] text-black text-center tracking-[0.048px]">+1</p>
        </div>
      </div>
    </div>
  );
}

function Recording() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[5px] px-[2px] py-px top-[5px]" data-name="Recording">
      <NotificationBadge />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#262626] content-stretch flex flex-col gap-[12px] items-start justify-center left-0 px-[16px] py-[12px] rounded-[12px] top-0 w-[361px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
      <Center1 />
      <Recording />
    </div>
  );
}

function Stacked() {
  return (
    <div className="absolute h-[86px] left-[112px] top-[31px] w-[361px]" data-name="Stacked">
      <Container />
      <Container1 />
    </div>
  );
}

function Icon24Px2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon 24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon 24px">
          <path d={svgPaths.p3e114300} fill="var(--fill-0, #CC4A31)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Subhead2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Subhead">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] h-full leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#e1e1e1] text-[13px] text-ellipsis tracking-[-0.08px] whitespace-pre-wrap">
        <span className="leading-[18px]">{`Recording and transcription have started in `}</span>
        <span className="leading-[18px]">English (UK).</span>
        <span className="leading-[18px]">{` By joining, you consent to this meeting being recorded. `}</span>
        <span className="leading-[18px] text-[#7f85f5]">Privacy Policy</span>
      </p>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Subhead2 />
    </div>
  );
}

function Dismiss2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Dismiss">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Dismiss">
          <path d={svgPaths.p31168500} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Right2() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Right">
      <Dismiss2 />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon24Px2 />
      <Header2 />
      <div className="flex flex-row items-center self-stretch">
        <Right2 />
      </div>
    </div>
  );
}

function Center2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left2 />
    </div>
  );
}

function Single() {
  return (
    <div className="absolute bg-[#262626] content-stretch flex flex-col items-start justify-center left-[112px] p-[16px] rounded-[12px] top-[178px] w-[361px]" data-name="Single">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
      <Center2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Stacked />
      <Single />
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[552.5px] not-italic text-[20px] text-black text-center top-[48px] tracking-[0.048px]">{`Stacked `}</p>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[552px] not-italic text-[8.8px] text-black text-center top-[74px] tracking-[0.048px]">12px top and bottom padding</p>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[579.5px] not-italic text-[8.8px] text-black text-center top-[93px] tracking-[0.048px]">Back card scaled down to 90%, # 0A0604</p>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[552.5px] not-italic text-[8.8px] text-black text-center top-[227px] tracking-[0.048px]">16px top and bottom padding</p>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[553px] not-italic text-[20px] text-black text-center top-[202px] tracking-[0.048px]">Single</p>
      <div className="absolute h-[19.165px] left-[454.15px] top-[107.59px] w-[53.542px]">
        <div className="absolute inset-[-5.22%_-1.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.5419 21.1648">
            <path d={svgPaths.p30f63280} id="Vector 65" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[0.838px] left-[454.05px] top-[116.7px] w-[2.265px]">
        <div className="absolute inset-[-119.31%_-44.17%_-119.34%_-44.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.26502 2.83844">
            <path d={svgPaths.p233a5c20} id="Vector 66" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[4.504px] left-[452.29px] top-[116.42px] w-[1.454px]">
        <div className="absolute inset-[-22.21%_-68.79%_-22.21%_-68.8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.45434 6.50423">
            <path d={svgPaths.p3ff6cb80} id="Vector 67" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.713px] left-[84.58px] top-[44.26px] w-[19.2px]">
        <div className="absolute inset-[-58.37%_-5.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2001 3.71317">
            <path d={svgPaths.p210b5780} id="Vector 68" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[8.724px] left-[100.66px] top-[39.98px] w-[4.281px]">
        <div className="absolute inset-[-11.47%_-23.34%_-11.46%_-23.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.27972 10.7246">
            <path d={svgPaths.p3c6ce280} id="Vector 69" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[61px] not-italic text-[12px] text-black text-center top-[46px] tracking-[0.048px]">Counter</p>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[61px] not-italic text-[12px] text-black text-center top-[33px] tracking-[0.048px]">Badge</p>
    </div>
  );
}