import svgPaths from "./svg-ka9iedrnoh";
import imgFrame2147233316 from "figma:asset/39154ef67ddaa64702482bb71cb22487de1cf404.png";
import imgRectangle346604096 from "figma:asset/2988dddd4762039b89078373be258dc29df8140a.png";

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
    <div className="bg-[#262626] h-[86px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
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

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon />
      <Header1 />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Left2 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7f85f5] text-[15.676px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.514px]">View</p>
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
    <div className="bg-[#262626] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
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
    <div className="absolute content-stretch flex flex-col h-[86px] items-start left-[174px] px-[16px] top-[345px] w-[393px]" data-name="notification">
      <Container1 />
    </div>
  );
}

function Icon1() {
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

function Subhead2() {
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

function Header2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Subhead2 />
    </div>
  );
}

function Icon2() {
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
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Left">
      <Icon1 />
      <Header2 />
      <Icon2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#262626] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <Left3 />
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

function HeaderUi1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[86px] items-start justify-end left-[829px] top-[211px] w-[393px]" data-name="Header UI">
      <Notification2 />
    </div>
  );
}

function Icon3() {
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

function Subhead3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Subhead">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] h-full leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e1e1e1] text-[13px] text-ellipsis tracking-[-0.08px] whitespace-pre-wrap">Background noise detected. Background noise has been detected from your microphone.</p>
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

function Left4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon3 />
      <Header3 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7f85f5] text-[15.676px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.514px]">Suppress</p>
      </div>
    </div>
  );
}

function Center2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#262626] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Center2 />
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

function HeaderUi2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start justify-end left-[828px] top-[338px] w-[393px]" data-name="Header UI">
      <Notification3 />
    </div>
  );
}

function Icon4() {
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

function Subhead4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Subhead">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] h-full leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#e1e1e1] text-[13px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">{` Guests are waiting to join`}</p>
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

function Left6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon4 />
      <Header4 />
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Left6 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7f85f5] text-[15.676px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.514px]">View lobby</p>
      </div>
    </div>
  );
}

function Center3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#262626] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <Center3 />
        </div>
      </div>
    </div>
  );
}

function Notification4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px px-[16px] relative w-[393px]" data-name="notification">
      <Container4 />
    </div>
  );
}

function HeaderUi3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[86px] items-start justify-end left-[174px] top-[461px] w-[393px]" data-name="Header UI">
      <Notification4 />
    </div>
  );
}

function Icon24Px1() {
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

function Subhead5() {
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

function Header5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Subhead5 />
    </div>
  );
}

function Dismiss1() {
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

function Right1() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-full items-center relative shrink-0" data-name="Right">
      <Dismiss1 />
    </div>
  );
}

function Left7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7.2px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon24Px1 />
      <Header5 />
      <div className="flex flex-row items-center self-stretch">
        <Right1 />
      </div>
    </div>
  );
}

function Center4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#4b4b4b] bottom-[0.2px] content-stretch flex flex-col items-start justify-center left-[18.05px] p-[14.4px] rounded-[10.8px] shadow-[0px_3.6px_7.2px_0px_rgba(0,0,0,0.14),0px_0px_1.8px_0px_rgba(0,0,0,0.12)] w-[324.9px]" data-name="Container">
      <Center4 />
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

function Subhead6() {
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

function Header6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Subhead6 />
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

function Left8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon24Px2 />
      <Header6 />
      <div className="flex flex-row items-center self-stretch">
        <Right2 />
      </div>
    </div>
  );
}

function Center5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left8 />
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

function Container6() {
  return (
    <div className="absolute bg-[#262626] content-stretch flex flex-col gap-[12px] items-start justify-center left-0 px-[16px] py-[12px] rounded-[12px] top-0 w-[361px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
      <Center5 />
      <Recording />
    </div>
  );
}

function Stacked() {
  return (
    <div className="absolute h-[86px] left-[622px] top-[684px] w-[361px]" data-name="Stacked">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Icon24Px3() {
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

function Subhead7() {
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

function Header7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Subhead7 />
    </div>
  );
}

function Dismiss3() {
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

function Right3() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Right">
      <Dismiss3 />
    </div>
  );
}

function Left9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon24Px3 />
      <Header7 />
      <div className="flex flex-row items-center self-stretch">
        <Right3 />
      </div>
    </div>
  );
}

function Center6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left9 />
    </div>
  );
}

function Single() {
  return (
    <div className="absolute bg-[#262626] content-stretch flex flex-col items-start justify-center left-[186px] p-[16px] rounded-[12px] top-[688px] w-[361px]" data-name="Single">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
      <Center6 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute right-[13px] size-[32px] top-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2117130284">
          <circle cx="16" cy="16" fill="var(--fill-0, #878BFB)" id="Ellipse 3" opacity="0.5" r="16" />
          <circle cx="16" cy="16" data-figma-bg-blur-radius="900" fill="var(--fill-0, #878BFB)" id="Ellipse 4" r="11" />
          <g filter="url(#filter1_i_67_1286)" id="Rectangle 346603857">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="8" rx="1" width="2" x="15" y="12" />
          </g>
          <g filter="url(#filter2_i_67_1286)" id="Rectangle 346603858">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="4" rx="1" width="2" x="11" y="14" />
          </g>
          <g filter="url(#filter3_i_67_1286)" id="Rectangle 346603859">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="4" rx="1" width="2" x="19" y="14" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_67_1286_clip_path" transform="translate(895 895)">
            <circle cx="16" cy="16" r="11" />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.2" id="filter1_i_67_1286" width="2.2" x="14.8" y="12">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_67_1286" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter2_i_67_1286" width="2.2" x="10.8" y="14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_67_1286" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter3_i_67_1286" width="2.2" x="18.8" y="14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_67_1286" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[24px] items-center justify-center left-[14px] p-[10px] rounded-[100px] top-[151px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aadi Kapoor
      </p>
    </div>
  );
}

function Mic() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[11.98%] left-[calc(50%+164px)] overflow-clip top-[78.56%] w-[18px]" data-name="Mic">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-[calc(50%+0.16px)] w-[9px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
          <path d={svgPaths.p1fdcf480} fill="var(--fill-0, #37EF46)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[76.47%_4.87%_10.7%_88.97%]">
      <div className="absolute inset-[76.47%_4.87%_10.7%_88.97%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" data-figma-bg-blur-radius="4" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" r="12" />
          <defs>
            <clipPath id="bgblur_0_254_14190_clip_path" transform="translate(4 4)">
              <circle cx="12" cy="12" r="12" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Mic />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[187px] items-start left-[187px] p-[3px] rounded-[20px] top-[917px] w-[390px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame2147233316} />
      <div className="h-[181px] relative rounded-[17px] shrink-0 w-[384px]" data-name="image">
        <div aria-hidden="true" className="absolute border border-[#010101] border-solid inset-0 pointer-events-none rounded-[17px]" />
      </div>
      <div className="absolute h-[187px] left-0 rounded-[20px] top-0 w-[390px]" data-name="image">
        <div aria-hidden="true" className="absolute border-3 border-[#878bfb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <Group2 />
      <Frame />
      <div className="absolute h-[90px] left-[310px] rounded-[12px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[84px] w-[67px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle346604096} />
      </div>
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute right-[13px] size-[32px] top-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2117130284">
          <circle cx="16" cy="16" fill="var(--fill-0, #878BFB)" id="Ellipse 3" opacity="0.5" r="16" />
          <circle cx="16" cy="16" data-figma-bg-blur-radius="900" fill="var(--fill-0, #878BFB)" id="Ellipse 4" r="11" />
          <g filter="url(#filter1_i_67_1286)" id="Rectangle 346603857">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="8" rx="1" width="2" x="15" y="12" />
          </g>
          <g filter="url(#filter2_i_67_1286)" id="Rectangle 346603858">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="4" rx="1" width="2" x="11" y="14" />
          </g>
          <g filter="url(#filter3_i_67_1286)" id="Rectangle 346603859">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="4" rx="1" width="2" x="19" y="14" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_67_1286_clip_path" transform="translate(895 895)">
            <circle cx="16" cy="16" r="11" />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.2" id="filter1_i_67_1286" width="2.2" x="14.8" y="12">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_67_1286" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter2_i_67_1286" width="2.2" x="10.8" y="14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_67_1286" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter3_i_67_1286" width="2.2" x="18.8" y="14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_67_1286" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[24px] items-center justify-center left-[14px] p-[10px] rounded-[100px] top-[151px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aadi Kapoor
      </p>
    </div>
  );
}

function Mic1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[11.98%] left-[calc(50%+164px)] overflow-clip top-[78.56%] w-[18px]" data-name="Mic">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-[calc(50%+0.16px)] w-[9px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
          <path d={svgPaths.p1fdcf480} fill="var(--fill-0, #37EF46)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[76.47%_4.87%_10.7%_88.97%]">
      <div className="absolute inset-[76.47%_4.87%_10.7%_88.97%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" data-figma-bg-blur-radius="4" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" r="12" />
          <defs>
            <clipPath id="bgblur_0_254_14190_clip_path" transform="translate(4 4)">
              <circle cx="12" cy="12" r="12" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Mic1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[187px] items-start left-[605px] p-[3px] rounded-[20px] top-[917px] w-[390px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame2147233316} />
      <div className="h-[181px] relative rounded-[17px] shrink-0 w-[384px]" data-name="image">
        <div aria-hidden="true" className="absolute border border-[#010101] border-solid inset-0 pointer-events-none rounded-[17px]" />
      </div>
      <div className="absolute h-[187px] left-0 rounded-[20px] top-0 w-[390px]" data-name="image">
        <div aria-hidden="true" className="absolute border-3 border-[#878bfb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <Group3 />
      <Frame1 />
      <div className="absolute h-[90px] left-[310px] rounded-[12px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[84px] w-[67px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle346604096} />
      </div>
      <Group1 />
    </div>
  );
}

function Icon24Px4() {
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

function Subhead8() {
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

function Header8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Subhead8 />
    </div>
  );
}

function Dismiss4() {
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

function Right4() {
  return (
    <div className="content-stretch flex gap-[7.2px] h-full items-center relative shrink-0" data-name="Right">
      <Dismiss4 />
    </div>
  );
}

function Left10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7.2px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon24Px4 />
      <Header8 />
      <div className="flex flex-row items-center self-stretch">
        <Right4 />
      </div>
    </div>
  );
}

function Center7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left10 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#4b4b4b] bottom-[0.2px] content-stretch flex flex-col items-start justify-center left-[64.05px] p-[14.4px] rounded-[10.8px] shadow-[0px_3.6px_7.2px_0px_rgba(0,0,0,0.14),0px_0px_1.8px_0px_rgba(0,0,0,0.12)] w-[324.9px]" data-name="Container">
      <Center7 />
    </div>
  );
}

function Icon24Px5() {
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

function Subhead9() {
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

function Header9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Subhead9 />
    </div>
  );
}

function Dismiss5() {
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

function Right5() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Right">
      <Dismiss5 />
    </div>
  );
}

function Left11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon24Px5 />
      <Header9 />
      <div className="flex flex-row items-center self-stretch">
        <Right5 />
      </div>
    </div>
  );
}

function Center8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left11 />
    </div>
  );
}

function NotificationBadge1() {
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

function Recording1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[5px] px-[2px] py-px top-[5px]" data-name="Recording">
      <NotificationBadge1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#262626] content-stretch flex flex-col gap-[12px] items-start justify-center left-[46px] px-[16px] py-[12px] rounded-[12px] top-0 w-[361px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
      <Center8 />
      <Recording1 />
    </div>
  );
}

function Stacked1() {
  return (
    <div className="absolute h-[86px] left-[576px] top-[823px] w-[361px]" data-name="Stacked">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Icon24Px6() {
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

function Subhead10() {
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

function Header10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Subhead10 />
    </div>
  );
}

function Dismiss6() {
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

function Right6() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Right">
      <Dismiss6 />
    </div>
  );
}

function Left12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Icon24Px6 />
      <Header10 />
      <div className="flex flex-row items-center self-stretch">
        <Right6 />
      </div>
    </div>
  );
}

function Center9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Left12 />
    </div>
  );
}

function Single1() {
  return (
    <div className="absolute bg-[#262626] content-stretch flex flex-col items-start justify-center left-[201px] p-[16px] rounded-[12px] top-[823px] w-[361px]" data-name="Single">
      <div aria-hidden="true" className="absolute border border-[#323232] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)]" />
      <Center9 />
    </div>
  );
}

export default function NotificationUfDs() {
  return (
    <div className="bg-white relative size-full" data-name="Notification UFDs">
      <HeaderUi />
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
      <Notification1 />
      <HeaderUi1 />
      <HeaderUi2 />
      <HeaderUi3 />
      <Stacked />
      <Single />
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[1062.5px] not-italic text-[20px] text-black text-center top-[701px] tracking-[0.048px]">{`Stacked `}</p>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[1062px] not-italic text-[8.8px] text-black text-center top-[727px] tracking-[0.048px]">12px top and bottom padding</p>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[1089.5px] not-italic text-[8.8px] text-black text-center top-[746px] tracking-[0.048px]">Back card scaled down to 90%, # 0A0604</p>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[99.5px] not-italic text-[8.8px] text-black text-center top-[731px] tracking-[0.048px]">16px top and bottom padding</p>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[100px] not-italic text-[20px] text-black text-center top-[706px] tracking-[0.048px]">Single</p>
      <div className="absolute h-[19.165px] left-[964.15px] top-[760.59px] w-[53.542px]">
        <div className="absolute inset-[-5.22%_-1.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.5419 21.1648">
            <path d={svgPaths.p30f63280} id="Vector 65" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[0.838px] left-[964.05px] top-[769.7px] w-[2.265px]">
        <div className="absolute inset-[-119.31%_-44.17%_-119.34%_-44.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.26502 2.83844">
            <path d={svgPaths.p233a5c20} id="Vector 66" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[4.504px] left-[962.29px] top-[769.42px] w-[1.454px]">
        <div className="absolute inset-[-22.21%_-68.79%_-22.21%_-68.8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.45434 6.50423">
            <path d={svgPaths.p3ff6cb80} id="Vector 67" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[17.75px] items-center justify-center left-[623px] top-[664px] w-[10.542px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153" } as React.CSSProperties}>
        <div className="flex-none rotate-[61.95deg]">
          <div className="h-[1.713px] relative w-[19.2px]">
            <div className="absolute inset-[-58.37%_-5.21%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2001 3.71317">
                <path d={svgPaths.p210b5780} id="Vector 68" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[7.881px] items-center justify-center left-[628.15px] top-[676.18px] w-[9.712px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153" } as React.CSSProperties}>
        <div className="flex-none rotate-[61.95deg]">
          <div className="h-[8.724px] relative w-[4.281px]">
            <div className="absolute inset-[-11.47%_-23.34%_-11.46%_-23.37%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.27972 10.7246">
                <path d={svgPaths.p3c6ce280} id="Vector 69" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[613px] not-italic text-[12px] text-black text-center top-[647px] tracking-[0.048px]">Counter</p>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] left-[612px] not-italic text-[12px] text-black text-center top-[634px] tracking-[0.048px]">Badge</p>
      <Frame2 />
      <Frame3 />
      <Stacked1 />
      <div className="absolute h-0 left-[237px] top-[823px] w-[761px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 761 2">
            <line id="Line 31" stroke="var(--stroke-0, #FF5F3D)" strokeDasharray="10 10" strokeWidth="2" x2="761" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[237px] top-[901px] w-[761px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 761 2">
            <line id="Line 31" stroke="var(--stroke-0, #FF5F3D)" strokeDasharray="10 10" strokeWidth="2" x2="761" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <Single1 />
      <div className="absolute bg-[#ff5f3d] h-[81px] left-[988px] top-[820px] w-[43px]" />
      <div className="absolute bg-[#37ef46] h-[89px] left-[1045px] top-[820px] w-[43px]" />
      <p className="absolute font-['SF_Pro_Text:Bold',sans-serif] leading-[18px] left-[995px] not-italic text-[13px] text-black top-[853px] tracking-[-0.08px]">78px</p>
      <p className="absolute font-['SF_Pro_Text:Bold',sans-serif] leading-[18px] left-[1050px] not-italic text-[13px] text-black top-[853px] tracking-[-0.08px]">86px</p>
      <div className="absolute bg-[#37ef46] h-[88px] left-[153px] top-[821px] w-[43px]" />
      <p className="absolute font-['SF_Pro_Text:Bold',sans-serif] leading-[18px] left-[160px] not-italic text-[13px] text-black top-[861px] tracking-[-0.08px]">86px</p>
      <div className="absolute h-0 left-[237px] top-[909px] w-[761px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 761 2">
            <line id="Line 32" stroke="var(--stroke-0, #37EF46)" strokeDasharray="10 10" strokeWidth="2" x2="761" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}