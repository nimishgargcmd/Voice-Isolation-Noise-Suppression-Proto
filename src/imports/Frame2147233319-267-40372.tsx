import svgPaths from "./svg-kdcystysib";

function TabBar() {
  return (
    <div className="absolute bottom-0 contents left-0" data-name="Tab Bar">
      <div className="absolute backdrop-blur-[4px] bg-[rgba(24,24,24,0.98)] bottom-0 h-[534px] left-0 rounded-bl-[56px] rounded-br-[56px] rounded-tl-[38px] rounded-tr-[38px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)] w-[390px]" data-name="BG 3 Apps" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 contents left-0">
      <TabBar />
    </div>
  );
}

function Group1() {
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
          <path d={svgPaths.p2f52be80} fill="var(--fill-0, white)" id="Shape" />
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

function Fill1() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function Bg1() {
  return (
    <div className="-translate-y-1/2 absolute h-[44px] left-0 right-0 top-1/2" data-name="BG">
      <Fill1 />
    </div>
  );
}

function Back1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[44px] items-center left-[286px] px-[16px] py-[10px] top-[20px]" data-name="Back">
      <Bg1 />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px]">Clear all</p>
      </div>
    </div>
  );
}

function UbarExpanded() {
  return (
    <div className="absolute contents left-0 top-0" data-name="ubar expanded">
      <Group />
      <Group1 />
      <Back />
      <Back1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[145.5px] not-italic right-[142.5px] text-[17px] text-center text-white top-[41px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">Notifications</p>
      </div>
    </div>
  );
}

function HandleTeams2IOs() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col h-[20px] items-center justify-center left-0 rounded-tl-[14px] rounded-tr-[14px] w-[393px]" data-name="Handle (Teams 2 iOS)">
      <div className="bg-[#6e6e6e] h-[4px] rounded-[2px] shrink-0 w-[36px]" data-name="Handle" />
    </div>
  );
}

function Icon() {
  return <div className="shrink-0 size-[12px]" data-name="Icon" />;
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7f85f5] text-[15px] tracking-[-0.24px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Critical notifications</p>
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

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p12aebb00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icons24Px() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icons (24px)">
      <Icon1 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center pb-[8px] pt-[16px] px-[12px] relative shrink-0" data-name="Right">
      <Icons24Px />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Left />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Right />
      </div>
    </div>
  );
}

function SectionHeaderTeams2IOs() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-0 w-[390px]" data-name="Section Header (Teams 2 iOS)">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content />
    </div>
  );
}

function Icon2() {
  return <div className="shrink-0 size-[12px]" data-name="Icon" />;
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7f85f5] text-[15px] tracking-[-0.24px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Boost your productivity with AI</p>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full">
          <Icon2 />
          <Title1 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p12aebb00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icons24Px1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icons (24px)">
      <Icon3 />
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center pb-[8px] pt-[16px] px-[12px] relative shrink-0" data-name="Right">
      <Icons24Px1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Left1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Right1 />
      </div>
    </div>
  );
}

function SectionHeaderTeams2IOs1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Section Header (Teams 2 iOS)">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content1 />
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

function Icon24Px() {
  return (
    <div className="content-stretch flex items-center pr-[20px] relative shrink-0" data-name="Icon 24px">
      <Icon4 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#e1e1e1] text-[15px] tracking-[-0.08px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Interpreter is on.</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[40px] justify-center overflow-hidden relative shrink-0 text-[#919191] text-[0px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[15px] whitespace-pre-wrap">
          <span className="leading-[20px]">{`This meeting would be interpreted for you in `}</span>
          <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            English
          </span>
          <span className="leading-[20px]">.</span>
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

function PillButtonTeams2IOs() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Pill button (Teams 2 iOS)">
      <Icon5 />
    </div>
  );
}

function Right2() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center px-[8px] relative shrink-0" data-name="Right">
      <PillButtonTeams2IOs />
    </div>
  );
}

function Left2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[12px] relative w-full">
          <Icon24Px />
          <Text />
          <div className="flex flex-row items-center self-stretch">
            <Right2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Left2 />
    </div>
  );
}

function BottomDivider() {
  return (
    <div className="h-px relative shrink-0 w-[393px]" data-name="Bottom divider">
      <div className="absolute bg-[#292929] bottom-0 h-[0.5px] left-[16px] right-0" data-name="Color" />
    </div>
  );
}

function Line1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content2 />
      <BottomDivider />
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

function Icon24Px1() {
  return (
    <div className="content-stretch flex items-center pr-[20px] relative shrink-0" data-name="Icon 24px">
      <Icon6 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px relative text-[15px]" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#e1e1e1] tracking-[-0.08px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Background noise detected.</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[40px] justify-center overflow-hidden relative shrink-0 text-[#919191] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Background noise has been detected from your microphone.</p>
      </div>
    </div>
  );
}

function PillButtonTeams2IOs1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Pill button (Teams 2 iOS)">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-right text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px]">Suppress</p>
      </div>
    </div>
  );
}

function Right4() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Right">
      <PillButtonTeams2IOs1 />
    </div>
  );
}

function Right3() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center px-[8px] relative shrink-0" data-name="Right">
      <Right4 />
    </div>
  );
}

function Left3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[12px] relative w-full">
          <Icon24Px1 />
          <Text1 />
          <div className="flex flex-row items-center self-stretch">
            <Right3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Left3 />
    </div>
  );
}

function BottomDivider1() {
  return (
    <div className="h-px relative shrink-0 w-[393px]" data-name="Bottom divider">
      <div className="absolute bg-[#292929] bottom-0 h-[0.5px] left-[16px] right-0" data-name="Color" />
    </div>
  );
}

function Line2() {
  return (
    <div className="content-stretch flex flex-col h-[96px] items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content3 />
      <BottomDivider1 />
    </div>
  );
}

function GroupedListTeams2IOs() {
  return (
    <div className="absolute content-stretch flex flex-col h-[224px] items-start left-0 top-[148px] w-[390px]" data-name="Grouped List (Teams 2 iOS)">
      <SectionHeaderTeams2IOs1 />
      <Line1 />
      <Line2 />
    </div>
  );
}

function Icon7() {
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

function Icon24Px2() {
  return (
    <div className="content-stretch flex items-center pr-[20px] relative shrink-0" data-name="Icon 24px">
      <Icon7 />
    </div>
  );
}

function Text2() {
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

function Left4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-[12px] py-[12px] relative w-full">
          <Icon24Px2 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Left4 />
    </div>
  );
}

function BottomDivider2() {
  return (
    <div className="h-px relative shrink-0 w-[393px]" data-name="Bottom divider">
      <div className="-translate-x-1/2 absolute bg-[#292929] bottom-0 h-px left-1/2 w-[393px]" data-name="Color" />
    </div>
  );
}

function Line() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-[43px] w-[390px]">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content4 />
      <BottomDivider2 />
    </div>
  );
}

function ExpandedStatusHub() {
  return (
    <div className="absolute h-[559px] left-0 overflow-clip top-0 w-[390px]" data-name="Expanded status hub">
      <HandleTeams2IOs />
      <SectionHeaderTeams2IOs />
      <GroupedListTeams2IOs />
      <Line />
    </div>
  );
}

function ScrollableFrame() {
  return (
    <div className="absolute h-[371px] left-0 overflow-clip top-[73px] w-[390px]" data-name="scrollable frame">
      <ExpandedStatusHub />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <UbarExpanded />
      <ScrollableFrame />
      <div className="absolute h-0 left-[-17px] top-[75px] w-[423px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 423 2">
            <line id="Line 27" stroke="var(--stroke-0, #FF5F3D)" strokeDasharray="10 10" strokeWidth="2" x2="423" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[-17px] top-[445px] w-[423px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 423 2">
            <line id="Line 27" stroke="var(--stroke-0, #FF5F3D)" strokeDasharray="10 10" strokeWidth="2" x2="423" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}