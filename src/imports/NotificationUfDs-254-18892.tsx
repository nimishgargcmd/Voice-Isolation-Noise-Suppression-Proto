import svgPaths from "./svg-899h5ttxnn";

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
    <div className="bg-[#0a0604] relative rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] shrink-0 w-full" data-name="Container">
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

function HeaderUi() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[86px] items-start justify-end left-[174px] top-[219px] w-[393px]" data-name="Header UI">
      <Notification />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.514px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.514 23.514">
        <g id="Icon">
          <path d={svgPaths.p2ca1be00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Subhead1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Subhead">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] h-full leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e1e1e1] text-[13px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">Content is being shared</p>
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

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon />
      <Header1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[3.919px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[19.595px] not-italic relative shrink-0 text-[14.696px] text-center text-white tracking-[-0.2351px]">View</p>
    </div>
  );
}

function PillButtonTeams2IOs() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center overflow-clip px-[15.676px] py-[7.838px] relative rounded-[9796.502px] shrink-0" data-name="Pill button (Teams 2 iOS)">
      <Content />
    </div>
  );
}

function Center1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left1 />
      <PillButtonTeams2IOs />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#0a0604] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <Center1 />
        </div>
      </div>
    </div>
  );
}

function Notification1() {
  return (
    <div className="content-stretch flex flex-col h-[86px] items-start px-[16px] relative shrink-0 w-[393px]" data-name="notification">
      <Container1 />
    </div>
  );
}

function HeaderUi1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[86px] items-start justify-end left-[174px] top-[349px] w-[393px]" data-name="Header UI">
      <Notification1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[23.514px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.514 23.514">
        <g id="Icon">
          <path d={svgPaths.p3bf59e00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Subhead2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Subhead">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] h-full leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e1e1e1] text-[13px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">{` Guests are waiting to join`}</p>
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

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon1 />
      <Header2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[3.919px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[19.595px] not-italic relative shrink-0 text-[14.696px] text-center text-white tracking-[-0.2351px]">View lobby</p>
    </div>
  );
}

function PillButtonTeams2IOs1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center overflow-clip px-[15.676px] py-[7.838px] relative rounded-[9796.502px] shrink-0" data-name="Pill button (Teams 2 iOS)">
      <Content1 />
    </div>
  );
}

function Center2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left2 />
      <PillButtonTeams2IOs1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#0a0604] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <Center2 />
        </div>
      </div>
    </div>
  );
}

function Notification2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px px-[16px] relative w-[393px]" data-name="notification">
      <Container2 />
    </div>
  );
}

function HeaderUi2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[86px] items-start justify-end left-[174px] top-[470px] w-[393px]" data-name="Header UI">
      <Notification2 />
    </div>
  );
}

function Icon2() {
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

function Subhead3() {
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

function Header3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Subhead3 />
    </div>
  );
}

function Icon3() {
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

function Left3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon2 />
      <Header3 />
      <Icon3 />
    </div>
  );
}

function Center3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#0a0604] relative rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Center3 />
        </div>
      </div>
    </div>
  );
}

function Notification3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0 w-[393px]" data-name="notification">
      <Container3 />
    </div>
  );
}

function HeaderUi3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[86px] items-start justify-end left-[829px] top-[219px] w-[393px]" data-name="Header UI">
      <Notification3 />
    </div>
  );
}

function Icon4() {
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

function Subhead4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Subhead">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] h-full leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e1e1e1] text-[13px] text-ellipsis tracking-[-0.08px] whitespace-pre-wrap">Background noise detected. Background noise has been detected from your microphone.</p>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Subhead4 />
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon4 />
      <Header4 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7f85f5] text-[15.676px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.514px]">Suppress</p>
      </div>
    </div>
  );
}

function Center4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#0a0604] h-[86px] relative rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <Center4 />
        </div>
      </div>
    </div>
  );
}

function Notification4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0 w-[393px]" data-name="notification">
      <Container4 />
    </div>
  );
}

function HeaderUi4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start justify-end left-[829px] top-[340px] w-[393px]" data-name="Header UI">
      <Notification4 />
    </div>
  );
}

export default function NotificationUfDs() {
  return (
    <div className="bg-white relative size-full" data-name="Notification UFDs">
      <HeaderUi />
      <HeaderUi1 />
      <HeaderUi2 />
      <HeaderUi3 />
      <HeaderUi4 />
      <div className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[30px] left-[47px] text-[0px] text-[20px] text-black top-[232px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Recording `}</p>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          notification
        </p>
      </div>
      <div className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[30px] left-[47px] text-[0px] text-[20px] text-black top-[353px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Recording `}</p>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          notification
        </p>
      </div>
      <div className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[30px] left-[47px] text-[0px] text-[20px] text-black top-[474px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Recording `}</p>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          notification
        </p>
      </div>
      <div className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[0] left-[640px] text-[0px] text-[20px] text-black top-[232px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">
          <span className="leading-[30px]">{`AI `}</span>
          <span className="leading-[30px]">{`Interpreter `}</span>
        </p>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[30px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          notification
        </p>
      </div>
      <div className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[30px] left-[640px] text-[0px] text-[20px] text-black top-[353px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Background noise `}</p>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          notification
        </p>
      </div>
      <p className="absolute font-['SF_Pro_Text:Bold',sans-serif] leading-[18px] left-[82px] not-italic text-[40px] text-black top-[98px] tracking-[-0.08px]">Critical notification</p>
      <p className="absolute font-['SF_Pro_Text:Bold',sans-serif] leading-[18px] left-[631px] not-italic text-[40px] text-black top-[98px] tracking-[-0.08px]">Informational notification</p>
    </div>
  );
}