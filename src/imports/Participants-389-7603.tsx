import svgPaths from "./svg-cu2vfc5bas";

function TabBar() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Tab Bar">
      <div className="backdrop-blur-[4px] bg-[rgba(24,24,24,0.98)] col-1 h-[1042px] ml-0 mt-0 rounded-bl-[56px] rounded-br-[56px] rounded-tl-[38px] rounded-tr-[38px] row-1 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)] w-[390px]" data-name="BG 3 Apps" />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 top-0">
      <TabBar />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[20.21px] top-[452.6px]">
      <div className="absolute h-0 left-[20.21px] top-[452.6px] w-[349.586px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 349.586 0.5">
            <line id="Divider" stroke="var(--stroke-0, black)" strokeOpacity="0.1" strokeWidth="0.5" x2="349.586" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Fill() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function Bg() {
  return (
    <div className="-translate-y-1/2 absolute h-[44px] left-0 right-0 top-1/2" data-name="BG">
      <Fill />
    </div>
  );
}

function Icon24Pt() {
  return (
    <div className="-translate-y-1/2 absolute left-[10px] size-[24px] top-1/2" data-name="Icon (24pt)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24pt)">
          <path d={svgPaths.p3dc95180} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Back() {
  return (
    <div className="absolute left-[12px] size-[44px] top-[20px]" data-name="Back">
      <Bg />
      <Icon24Pt />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[-0.08px]">Clear all</p>
    </div>
  );
}

function PillButtonTeams2IOs() {
  return (
    <div className="absolute bg-black content-stretch flex items-center justify-center left-[291px] overflow-clip px-[16px] py-[8px] rounded-[9999px] top-[25px]" data-name="Pill button (Teams 2 iOS)">
      <Content />
    </div>
  );
}

function Chevron() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron">
          <path d={svgPaths.pf4077f0} fill="var(--fill-0, #919191)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <Chevron />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5fc7] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Critical notifications (2)</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full">
          <Icon />
          <Title />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Left />
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Content1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3e114300} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon24Px() {
  return (
    <div className="content-stretch flex items-center pr-[10px] relative shrink-0" data-name="Icon 24px">
      <Icon1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[0px] tracking-[-0.08px] w-full">
        <p className="text-[15px] whitespace-pre-wrap">
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px]">{`Recording and transcription have started in `}</span>
          <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px]">{`English (UK). `}</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px]">{`By joining, you are giving consent for this meeting to be recorded. `}</span>
          <span className="decoration-solid font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] underline">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-[12px] py-[12px] relative w-full">
          <Icon24Px />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[rgba(36,36,37,0.7)] content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full" data-name="Content">
      <Left1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3cbfa6f0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon24Px1() {
  return (
    <div className="content-stretch flex items-center pr-[10px] relative shrink-0" data-name="Icon 24px">
      <Icon2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[24px] items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[15px] tracking-[-0.08px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Guests are waiting to join</p>
      </div>
    </div>
  );
}

function Left2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-[12px] py-[12px] relative w-full">
          <Icon24Px1 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[-0.08px]">View lobby</p>
    </div>
  );
}

function PillButtonTeams2IOs1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Pill button (Teams 2 iOS)">
      <Content6 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center px-[8px] relative shrink-0" data-name="Right">
      <PillButtonTeams2IOs1 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[51px] items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <Left2 />
      <Right />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[54px] items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <Content5 />
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[rgba(36,36,37,0.7)] content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full" data-name="Content">
      <Content4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Content2 />
      <Content3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[363px]">
      <Line />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Chevron1() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron">
          <path d={svgPaths.pf4077f0} fill="var(--fill-0, #919191)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <Chevron1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5fc7] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Informational notifications (2)</p>
      </div>
    </div>
  );
}

function Left3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full">
          <Icon3 />
          <Title1 />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Left3 />
      </div>
    </div>
  );
}

function Line1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Content7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f0f6680} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon24Px2() {
  return (
    <div className="content-stretch flex items-center pr-[10px] relative shrink-0" data-name="Icon 24px">
      <Icon4 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[15px] tracking-[-0.08px] w-full">
        <p className="whitespace-pre-wrap">
          <span className="leading-[20px]">{`Interpreter is on. `}</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic">{`This meeting would be interpreted for you in `}</span>
          <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px] not-italic">English</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic">.</span>
        </p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3489a600} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function PillButtonTeams2IOs2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Pill button (Teams 2 iOS)">
      <Icon5 />
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center px-[12px] relative shrink-0" data-name="Right">
      <PillButtonTeams2IOs2 />
    </div>
  );
}

function Left4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[12px] relative w-full">
          <Icon24Px2 />
          <Text2 />
          <div className="flex flex-row items-center self-stretch">
            <Right1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="bg-[rgba(36,36,37,0.7)] content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full" data-name="Content">
      <Left4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pa71fa00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon24Px3() {
  return (
    <div className="content-stretch flex items-center pr-[10px] relative shrink-0" data-name="Icon 24px">
      <Icon6 />
    </div>
  );
}

function Left5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[12px] relative w-full">
          <Icon24Px3 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e1e1e1] text-[15px] tracking-[-0.08px]">
            <p className="leading-[20px] whitespace-pre-wrap">Background noise has been detected from your microphone.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <Left5 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <Content11 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[-0.08px]">Suppress</p>
    </div>
  );
}

function PillButtonTeams2IOs3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Pill button (Teams 2 iOS)">
      <Content12 />
    </div>
  );
}

function Right2() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center px-[8px] relative shrink-0" data-name="Right">
      <PillButtonTeams2IOs3 />
    </div>
  );
}

function Content9() {
  return (
    <div className="bg-[rgba(36,36,37,0.7)] content-stretch flex h-[89px] items-center justify-center py-[8px] relative shrink-0 w-full" data-name="Content">
      <Content10 />
      <Right2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Content8 />
      <Content9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[363px]">
      <Line1 />
      <Frame10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-[calc(50%+0.5px)] top-[82px] w-[363px]">
      <Frame5 />
      <Frame8 />
    </div>
  );
}

function UbarExpanded() {
  return (
    <div className="absolute contents left-0 top-0" data-name="ubar expanded">
      <Frame />
      <Group />
      <Back />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[145.5px] not-italic right-[142.5px] text-[17px] text-center text-white top-[41px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">Notifications</p>
      </div>
      <PillButtonTeams2IOs />
      <Frame7 />
    </div>
  );
}

export default function Participants() {
  return (
    <div className="relative size-full" data-name="Participants">
      <UbarExpanded />
    </div>
  );
}