import svgPaths from "./svg-fkna3msnya";

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.514px]" data-name="Icon">
      <div className="absolute inset-[0_-1.03%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.757 23.514">
          <g id="Icon">
            <path d={svgPaths.p26e0c200} fill="var(--fill-0, white)" id="Shape" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Subhead() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Subhead">
      <div className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] h-full leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#e1e1e1] text-[0px] text-[13px] text-ellipsis tracking-[-0.08px] whitespace-pre-wrap">
        <p className="leading-[18px] mb-0">{`Interpreter is on. `}</p>
        <p>
          <span className="leading-[18px]">{`This meeting would be interpreted for you in `}</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] not-italic tracking-[-0.08px]">English</span>
          <span className="leading-[18px]">.</span>
        </p>
      </div>
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

function Icon1() {
  return (
    <div className="relative shrink-0 size-[23.514px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.514 23.514">
        <g id="Icon">
          <path d={svgPaths.p39e15300} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Left">
      <Icon />
      <Header />
      <Icon1 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#262626] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <Left />
        </div>
      </div>
    </div>
  );
}

function Notification() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px px-[16px] relative w-[393px]" data-name="notification">
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