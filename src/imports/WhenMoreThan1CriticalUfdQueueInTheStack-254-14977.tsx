import svgPaths from "./svg-4uzcwwcrbb";

function Icon24Px() {
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

function Subhead() {
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

function Header() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Subhead />
    </div>
  );
}

function Dismiss() {
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

function Right() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Right">
      <Dismiss />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
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
    <div className="absolute bg-[#1b1b1b] content-stretch flex flex-col h-[73px] items-start justify-center left-[12px] p-[16px] rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] top-[7px] w-[369px]" data-name="Container">
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

function Container1() {
  return (
    <div className="bg-[#262626] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Center1 />
        </div>
      </div>
    </div>
  );
}

function Notification() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0 w-[393px]" data-name="notification">
      <Container />
      <Container1 />
    </div>
  );
}

function NotificationBadge() {
  return (
    <div className="bg-[#5b5fc7] h-[12.8px] relative rounded-[80.002px] shrink-0 w-full" data-name="Notification badge">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[4.8px] relative size-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] not-italic relative shrink-0 text-[8.8px] text-center text-white tracking-[0.048px]">+1</p>
        </div>
      </div>
    </div>
  );
}

function Recording() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[22px] px-[2px] py-px top-[5px]" data-name="Recording">
      <NotificationBadge />
    </div>
  );
}

export default function WhenMoreThan1CriticalUfdQueueInTheStack() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[10px] items-start justify-end relative size-full" data-name="When more than 1 critical UFD queue in the stack.">
      <Notification />
      <Recording />
    </div>
  );
}