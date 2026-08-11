import svgPaths from "./svg-1vlif2i61j";

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.514px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.514 23.514">
        <g id="Icon">
          <path d={svgPaths.p1fb43b00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Subhead() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Subhead">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] h-full leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e1e1e1] text-[13px] text-ellipsis tracking-[-0.08px] whitespace-pre-wrap">Background noise detected. Background noise has been detected from your microphone.</p>
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

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon />
      <Header />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7f85f5] text-[15.676px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.514px]">Suppress</p>
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
    <div className="bg-[#262626] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Center />
        </div>
      </div>
    </div>
  );
}

function Notification() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0 w-[393px]" data-name="notification">
      <Container />
    </div>
  );
}

export default function HeaderUi() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-end relative size-full" data-name="Header UI">
      <Notification />
    </div>
  );
}