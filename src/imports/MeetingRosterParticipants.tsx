import svgPaths from "./svg-dc7ec23czi";
import imgAvatarImage from "figma:asset/3b8975c3083a4f50cc49f33720b016754cc5164e.png";
import imgAvatarImage1 from "figma:asset/343fa032d9a3c604a23b0186da5895e097602f89.png";
import imgAvatarImage2 from "figma:asset/1201553e00c18ed5af182975698acb7bc69d50b1.png";
import imgAvatarImage3 from "figma:asset/bb9e8833326a229fa17bac8769a51861c4346871.png";
import imgAvatarImage4 from "figma:asset/37076b54a37f637f84500e19a70e98bcd983170d.png";
import imgAvatarImage5 from "figma:asset/3a9d1e12d0933b7af98a5b6de8dee6442918c3d3.png";
import imgAvatarImage6 from "figma:asset/531d4b8b2c55aa32dc60a102cb10560380db6ed4.png";
import img1F91ARaisedBackOfHandMod0101 from "figma:asset/42826c42d8b7041336c042c30d4c755adda56e82.png";

function DynamicIsland1() {
  return <div className="bg-black h-[30px] rounded-[100px] shrink-0 w-[120px]" data-name="Dynamic island" />;
}

function DynamicIsland() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[54px] items-center justify-center min-h-px min-w-px relative" data-name="Dynamic Island">
      <DynamicIsland1 />
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip top-[17.5px] w-[131px]" data-name="Time Style">
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">9:30</p>
    </div>
  );
}

function Right() {
  return (
    <div className="absolute h-[12px] right-0 top-[21px] w-[131px]" data-name="Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 12">
        <g id="Right">
          <path d={svgPaths.p38139600} fill="var(--fill-0, white)" id="Combined Shape" />
          <path d={svgPaths.pfbb6980} fill="var(--fill-0, white)" id="Combined Shape_2" />
          <g id="Battery Icon">
            <g id="Combined Shape_3" opacity="0.4">
              <mask fill="white" id="path-3-inside-1_380_18144">
                <path d={svgPaths.p35bfee80} />
              </mask>
              <path d={svgPaths.p35bfee80} fill="var(--fill-0, white)" />
              <path d={svgPaths.p15810880} fill="var(--stroke-0, white)" mask="url(#path-3-inside-1_380_18144)" />
            </g>
            <rect fill="var(--fill-0, white)" height="8" id="Capacity" rx="1.5" width="20" x="73.5266" y="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Content">
      <DynamicIsland />
      <TimeStyle />
      <Right />
    </div>
  );
}

function StatusBarTeams2IOs() {
  return (
    <div className="bg-black content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Status bar (Teams 2 iOS)">
      <Content />
    </div>
  );
}

function Frame() {
  return <div className="bg-black content-stretch flex flex-col gap-[100px] h-[798px] items-start justify-center pb-[109px] pt-[100px] shrink-0 w-[393px]" />;
}

function MeetingStage() {
  return (
    <div className="absolute content-stretch flex flex-col h-[852px] items-start left-0 top-0 w-[393px]" data-name="Meeting stage">
      <StatusBarTeams2IOs />
      <Frame />
    </div>
  );
}

function Icon24Pt() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24pt)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24pt)">
          <path d={svgPaths.peb0b800} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-name="Container">
      <Icon24Pt />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p17ba9800} fill="var(--fill-0, #242424)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function AvatarTeams2IOs() {
  return (
    <div className="bg-[#7f85f5] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0" data-name="Avatar (Teams 2 iOS)">
      <Icon />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[17px] text-ellipsis text-white tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px] overflow-hidden">Participants</p>
      </div>
    </div>
  );
}

function Subtext() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Subtext">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#919191] text-[11px] text-ellipsis tracking-[0.06px] whitespace-nowrap">
        <p className="leading-[11px] overflow-hidden">7 in call</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Title />
      <Subtext />
    </div>
  );
}

function TitleSubtext() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Title+subtext">
      <AvatarTeams2IOs />
      <Container1 />
    </div>
  );
}

function Left() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[16px] relative size-full">
          <Container />
          <TitleSubtext />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon 1">
          <path d={svgPaths.p2f3d9200} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon 2">
          <path d={svgPaths.p2e9d8000} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function NavTitleIcons() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Nav title icons">
      <Icon1 />
      <Icon2 />
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex h-full items-center justify-end pr-[18px] relative shrink-0" data-name="Right">
      <NavTitleIcons />
    </div>
  );
}

function NavigationHeader() {
  return (
    <div className="bg-black content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Navigation Header">
      <Left />
      <Right1 />
    </div>
  );
}

function NavigationBarTeams2IOs1() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col items-start justify-center relative shrink-0 w-[393px]" data-name="Navigation bar (Teams 2 iOS)">
      <NavigationHeader />
    </div>
  );
}

function NavigationBarTeams2IOs() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col h-[48px] items-start justify-center min-h-[44px] relative shrink-0 w-[393px]" data-name="Navigation bar (Teams 2 iOS)">
      <NavigationBarTeams2IOs1 />
    </div>
  );
}

function Chevron() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron">
          <path d={svgPaths.pf4077f0} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <Chevron />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">In the lobby (1)</p>
      </div>
    </div>
  );
}

function Left1() {
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

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Left1 />
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content1 />
    </div>
  );
}

function Chevron1() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron">
          <path d={svgPaths.pf4077f0} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <Chevron1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#919191] text-[15px] tracking-[-0.08px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Verified users (1)</p>
      </div>
    </div>
  );
}

function Left2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full">
          <Icon4 />
          <Title2 />
        </div>
      </div>
    </div>
  );
}

function Right2() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center pb-[8px] pt-[16px] px-[12px] relative shrink-0" data-name="Right">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7f85f5] text-[15px] text-right tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px]">Admit all</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Left2 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Right2 />
      </div>
    </div>
  );
}

function Line7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content2 />
    </div>
  );
}

function AvatarImage1() {
  return (
    <div className="absolute inset-0 rounded-[16249.999px]" data-name="Avatar-image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16249.999px] size-full" src={imgAvatarImage} />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[52px]" data-name="Avatar">
      <AvatarImage1 />
    </div>
  );
}

function Overlap() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[52px]" data-name="Overlap">
      <Avatar />
    </div>
  );
}

function SharedPresence16BusyLight() {
  return (
    <div className="absolute bottom-[1.6px] right-[1.6px] size-[12.8px]" data-name="Shared / Presence / 16 / ⚪️ Busy - Light">
      <div className="absolute inset-[-11.36%_-13.66%_-13.64%_-11.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Shared / Presence / 16 / âªï¸ Busy - Light">
            <circle cx="8" cy="8" fill="var(--fill-0, #D74553)" id="Ellipse 1" r="7.2" stroke="var(--stroke-0, black)" strokeWidth="1.6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PresenceTeams2IOs() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
      <SharedPresence16BusyLight />
    </div>
  );
}

function AvatarTeams2IOs1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Avatar (Teams 2 iOS)">
      <Overlap />
      <PresenceTeams2IOs />
    </div>
  );
}

function AvatarImage() {
  return (
    <div className="content-stretch flex items-center pr-[16px] relative shrink-0" data-name="Avatar/Image">
      <AvatarTeams2IOs1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Daniela Mandera</p>
      </div>
    </div>
  );
}

function Left3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
          <AvatarImage />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[12px] relative w-full">
          <Left3 />
        </div>
      </div>
    </div>
  );
}

function Line11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content3 />
    </div>
  );
}

function Chevron2() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron">
          <path d={svgPaths.p306e7200} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <Chevron2 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#919191] text-[15px] tracking-[-0.08px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Suspicious users (0)</p>
      </div>
    </div>
  );
}

function Left4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full">
          <Icon5 />
          <Title3 />
        </div>
      </div>
    </div>
  );
}

function Icons24Px() {
  return <div className="content-stretch flex gap-[8px] items-start shrink-0" data-name="Icons (24px)" />;
}

function Right3() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center pb-[8px] pt-[16px] px-[12px] relative shrink-0" data-name="Right">
      <Icons24Px />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Left4 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Right3 />
      </div>
    </div>
  );
}

function Line10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content4 />
    </div>
  );
}

function Chevron3() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron">
          <path d={svgPaths.pf4077f0} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <Chevron3 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">In this meeting (7)</p>
      </div>
    </div>
  );
}

function Left5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full">
          <Icon6 />
          <Title4 />
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Left5 />
      </div>
    </div>
  );
}

function Line8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content5 />
    </div>
  );
}

function Chevron4() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron">
          <path d={svgPaths.pf4077f0} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <Chevron4 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#919191] text-[15px] tracking-[-0.08px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Suspicious users (1)</p>
      </div>
    </div>
  );
}

function Left6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full">
          <Icon7 />
          <Title5 />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Left6 />
      </div>
    </div>
  );
}

function Line13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content6 />
    </div>
  );
}

function Overlap1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[52px] top-1/2" data-name="Overlap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
        <g id="Overlap">
          <g id="Bot">
            <path d={svgPaths.p3159bc00} fill="var(--fill-0, #6E6E6E)" id="Shape" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarTeams2IOs2() {
  return (
    <div className="bg-[#292929] relative rounded-[9999px] shrink-0 size-[52px]" data-name="Avatar (Teams 2 iOS)">
      <Overlap1 />
    </div>
  );
}

function AvatarImage2() {
  return (
    <div className="content-stretch flex items-center pr-[16px] relative shrink-0" data-name="Avatar/Image">
      <AvatarTeams2IOs2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Meeting Recording</p>
      </div>
    </div>
  );
}

function Left7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-[12px] py-[12px] relative w-full">
          <AvatarImage2 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Left7 />
    </div>
  );
}

function BottomDivider() {
  return <div className="h-px shrink-0 w-[393px]" data-name="Bottom divider" />;
}

function Warning() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Warning">
          <path d={svgPaths.p19ea0d80} fill="var(--fill-0, #DC5E62)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function BadgeViewTeams2IOs() {
  return (
    <div className="bg-[#250909] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge view (Teams 2 iOS)">
      <Warning />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dc5e62] text-[11px] tracking-[0.06px] whitespace-nowrap">
        <p className="leading-[11px]">Bot suspected</p>
      </div>
    </div>
  );
}

function Badges() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-[237px] top-1/2" data-name="badges">
      <BadgeViewTeams2IOs />
    </div>
  );
}

function Line12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content7 />
      <BottomDivider />
      <Badges />
    </div>
  );
}

function Chevron5() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron">
          <path d={svgPaths.pf4077f0} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <Chevron5 />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#919191] text-[15px] tracking-[-0.08px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Verified users (7)</p>
      </div>
    </div>
  );
}

function Left8() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full">
          <Icon8 />
          <Title6 />
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Left8 />
      </div>
    </div>
  );
}

function Line15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content8 />
    </div>
  );
}

function AvatarImage4() {
  return (
    <div className="absolute inset-0 rounded-[16249.999px]" data-name="Avatar-image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16249.999px] size-full" src={imgAvatarImage1} />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[52px]" data-name="Avatar">
      <AvatarImage4 />
    </div>
  );
}

function Overlap2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[52px]" data-name="Overlap">
      <Avatar1 />
    </div>
  );
}

function SharedPresence16BusyLight1() {
  return (
    <div className="absolute bottom-[1.6px] right-[1.6px] size-[12.8px]" data-name="Shared / Presence / 16 / ⚪️ Busy - Light">
      <div className="absolute inset-[-11.36%_-13.66%_-13.64%_-11.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Shared / Presence / 16 / âªï¸ Busy - Light">
            <circle cx="8" cy="8" fill="var(--fill-0, #D74553)" id="Ellipse 1" r="7.2" stroke="var(--stroke-0, black)" strokeWidth="1.6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PresenceTeams2IOs1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
      <SharedPresence16BusyLight1 />
    </div>
  );
}

function AvatarTeams2IOs3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Avatar (Teams 2 iOS)">
      <Overlap2 />
      <PresenceTeams2IOs1 />
    </div>
  );
}

function AvatarImage3() {
  return (
    <div className="content-stretch flex items-center pr-[16px] relative shrink-0" data-name="Avatar/Image">
      <AvatarTeams2IOs3 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Robert Tolbert</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[#919191] text-[15px] text-ellipsis tracking-[-0.08px] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Organiser</p>
      </div>
    </div>
  );
}

function Left9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-[12px] py-[12px] relative w-full">
          <AvatarImage3 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function RIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="R.Icon 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="R.Icon 1">
          <path d={svgPaths.p10a22b00} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function RIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="R.Icon 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="R.Icon 2">
          <path d={svgPaths.p3a3eeaf0} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Right4() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center px-[12px] relative shrink-0" data-name="Right">
      <RIcon />
      <RIcon1 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Left9 />
      <div className="flex flex-row items-center self-stretch">
        <Right4 />
      </div>
    </div>
  );
}

function Line1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content9 />
    </div>
  );
}

function AvatarImage6() {
  return (
    <div className="absolute inset-0 rounded-[16249.999px]" data-name="Avatar-image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16249.999px] size-full" src={imgAvatarImage2} />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[52px]" data-name="Avatar">
      <AvatarImage6 />
    </div>
  );
}

function Overlap3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[52px]" data-name="Overlap">
      <Avatar2 />
    </div>
  );
}

function SharedPresence16AwayLight() {
  return (
    <div className="absolute bottom-[1.6px] right-[1.6px] size-[12.8px]" data-name="Shared / Presence / 16 / ⚪️ Away - Light">
      <div className="absolute inset-[-11.36%_-13.66%_-13.64%_-11.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Shared / Presence / 16 / âªï¸ Away - Light">
            <path d={svgPaths.p64afe00} fill="var(--fill-0, #F8D22A)" id="Subtract" stroke="var(--stroke-0, black)" strokeWidth="1.6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PresenceTeams2IOs2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
      <SharedPresence16AwayLight />
    </div>
  );
}

function AvatarTeams2IOs4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Avatar (Teams 2 iOS)">
      <Overlap3 />
      <PresenceTeams2IOs2 />
    </div>
  );
}

function AvatarImage5() {
  return (
    <div className="content-stretch flex items-center pr-[16px] relative shrink-0" data-name="Avatar/Image">
      <AvatarTeams2IOs4 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Serena Davis</p>
      </div>
    </div>
  );
}

function Left10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-[12px] py-[12px] relative w-full">
          <AvatarImage5 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function RIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="R.Icon 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="R.Icon 1">
          <path d={svgPaths.p10a22b00} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function RIcon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="R.Icon 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="R.Icon 2">
          <path d={svgPaths.pb375500} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Right5() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center px-[12px] relative shrink-0" data-name="Right">
      <RIcon2 />
      <RIcon3 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Left10 />
      <div className="flex flex-row items-center self-stretch">
        <Right5 />
      </div>
    </div>
  );
}

function Line3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content10 />
    </div>
  );
}

function AvatarImage8() {
  return (
    <div className="absolute inset-0 rounded-[16249.999px]" data-name="Avatar-image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16249.999px] size-full" src={imgAvatarImage3} />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[52px]" data-name="Avatar">
      <AvatarImage8 />
    </div>
  );
}

function Overlap4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[52px]" data-name="Overlap">
      <Avatar3 />
    </div>
  );
}

function SharedPresence16DndLight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Shared / Presence / 16 / ⚪️ DND - Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0004 16.0001">
        <g id="Shared / Presence / 16 / âªï¸ DND - Light">
          <path d={svgPaths.p244f18c0} fill="var(--fill-0, #D74553)" id="Subtract" stroke="var(--stroke-0, black)" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function PresenceTeams2IOs3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Presence (Teams 2 iOS)">
      <SharedPresence16DndLight />
    </div>
  );
}

function AvatarTeams2IOs5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Avatar (Teams 2 iOS)">
      <Overlap4 />
      <PresenceTeams2IOs3 />
    </div>
  );
}

function AvatarImage7() {
  return (
    <div className="content-stretch flex items-center pr-[16px] relative shrink-0" data-name="Avatar/Image">
      <AvatarTeams2IOs5 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Time Deboer</p>
      </div>
    </div>
  );
}

function Left11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-[12px] py-[12px] relative w-full">
          <AvatarImage7 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function RIcon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="R.Icon 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="R.Icon 1">
          <path d={svgPaths.p10a22b00} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function RIcon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="R.Icon 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="R.Icon 2">
          <path d={svgPaths.pb375500} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Right6() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center px-[12px] relative shrink-0" data-name="Right">
      <RIcon4 />
      <RIcon5 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Left11 />
      <div className="flex flex-row items-center self-stretch">
        <Right6 />
      </div>
    </div>
  );
}

function Line2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content11 />
    </div>
  );
}

function AvatarImage10() {
  return (
    <div className="absolute inset-0 rounded-[16249.999px]" data-name="Avatar-image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16249.999px] size-full" src={imgAvatarImage4} />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[52px]" data-name="Avatar">
      <AvatarImage10 />
    </div>
  );
}

function Overlap5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[52px]" data-name="Overlap">
      <Avatar4 />
    </div>
  );
}

function SharedPresence16AwayLight1() {
  return (
    <div className="absolute bottom-[1.6px] right-[1.6px] size-[12.8px]" data-name="Shared / Presence / 16 / ⚪️ Away - Light">
      <div className="absolute inset-[-11.36%_-13.66%_-13.64%_-11.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Shared / Presence / 16 / âªï¸ Away - Light">
            <path d={svgPaths.p64afe00} fill="var(--fill-0, #F8D22A)" id="Subtract" stroke="var(--stroke-0, black)" strokeWidth="1.6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PresenceTeams2IOs4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
      <SharedPresence16AwayLight1 />
    </div>
  );
}

function AvatarTeams2IOs6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Avatar (Teams 2 iOS)">
      <Overlap5 />
      <PresenceTeams2IOs4 />
    </div>
  );
}

function AvatarImage9() {
  return (
    <div className="content-stretch flex items-center pr-[16px] relative shrink-0" data-name="Avatar/Image">
      <AvatarTeams2IOs6 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Wanda Howard</p>
      </div>
    </div>
  );
}

function Left12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-[12px] py-[12px] relative w-full">
          <AvatarImage9 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function RIcon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="R.Icon 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="R.Icon 1">
          <path d={svgPaths.p10a22b00} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function RIcon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="R.Icon 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="R.Icon 2">
          <path d={svgPaths.pb375500} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Right7() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center px-[12px] relative shrink-0" data-name="Right">
      <RIcon6 />
      <RIcon7 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Left12 />
      <div className="flex flex-row items-center self-stretch">
        <Right7 />
      </div>
    </div>
  );
}

function Line4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content12 />
    </div>
  );
}

function AvatarImage12() {
  return (
    <div className="absolute inset-0 rounded-[16249.999px]" data-name="Avatar-image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16249.999px] size-full" src={imgAvatarImage5} />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[52px]" data-name="Avatar">
      <AvatarImage12 />
    </div>
  );
}

function Overlap6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[52px]" data-name="Overlap">
      <Avatar5 />
    </div>
  );
}

function SharedPresence16AwayLight2() {
  return (
    <div className="absolute bottom-[1.6px] right-[1.6px] size-[12.8px]" data-name="Shared / Presence / 16 / ⚪️ Away - Light">
      <div className="absolute inset-[-11.36%_-13.66%_-13.64%_-11.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Shared / Presence / 16 / âªï¸ Away - Light">
            <path d={svgPaths.p64afe00} fill="var(--fill-0, #F8D22A)" id="Subtract" stroke="var(--stroke-0, black)" strokeWidth="1.6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PresenceTeams2IOs5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
      <SharedPresence16AwayLight2 />
    </div>
  );
}

function AvatarTeams2IOs7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Avatar (Teams 2 iOS)">
      <Overlap6 />
      <PresenceTeams2IOs5 />
    </div>
  );
}

function AvatarImage11() {
  return (
    <div className="content-stretch flex items-center pr-[16px] relative shrink-0" data-name="Avatar/Image">
      <AvatarTeams2IOs7 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Will Little</p>
      </div>
    </div>
  );
}

function Left13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-[12px] py-[12px] relative w-full">
          <AvatarImage11 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function RIcon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="R.Icon 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="R.Icon 1">
          <path d={svgPaths.p10a22b00} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function RIcon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="R.Icon 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="R.Icon 2">
          <path d={svgPaths.pb375500} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Right8() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center px-[12px] relative shrink-0" data-name="Right">
      <RIcon8 />
      <RIcon9 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Left13 />
      <div className="flex flex-row items-center self-stretch">
        <Right8 />
      </div>
    </div>
  );
}

function Line5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content13 />
    </div>
  );
}

function AvatarImage14() {
  return (
    <div className="absolute inset-0 rounded-[16249.999px]" data-name="Avatar-image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16249.999px] size-full" src={imgAvatarImage6} />
    </div>
  );
}

function Avatar6() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[52px]" data-name="Avatar">
      <AvatarImage14 />
    </div>
  );
}

function Overlap7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[52px]" data-name="Overlap">
      <Avatar6 />
    </div>
  );
}

function SharedPresence16AvailableLight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Shared / Presence / 16 / ⚪️ Available - Light">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2 17.2">
          <g id="Shared / Presence / 16 / âªï¸ Available - Light">
            <path d={svgPaths.p20528380} fill="var(--fill-0, #92C353)" id="Status" stroke="var(--stroke-0, black)" strokeWidth="1.6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PresenceTeams2IOs6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Presence (Teams 2 iOS)">
      <SharedPresence16AvailableLight />
    </div>
  );
}

function AvatarTeams2IOs8() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Avatar (Teams 2 iOS)">
      <Overlap7 />
      <PresenceTeams2IOs6 />
    </div>
  );
}

function AvatarImage13() {
  return (
    <div className="content-stretch flex items-center pr-[16px] relative shrink-0" data-name="Avatar/Image">
      <AvatarTeams2IOs8 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Cecil Folk</p>
      </div>
    </div>
  );
}

function Left14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-[12px] py-[12px] relative w-full">
          <AvatarImage13 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function RIcon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="R.Icon 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="R.Icon 1">
          <path d={svgPaths.p10a22b00} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function RIcon11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="R.Icon 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="R.Icon 2">
          <path d={svgPaths.pb375500} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Right9() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center px-[12px] relative shrink-0" data-name="Right">
      <RIcon10 />
      <RIcon11 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Left14 />
      <div className="flex flex-row items-center self-stretch">
        <Right9 />
      </div>
    </div>
  );
}

function Line6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content14 />
    </div>
  );
}

function Chevron6() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron">
          <path d={svgPaths.pf4077f0} fill="var(--fill-0, #6E6E6E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <Chevron6 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#919191] text-[15px] tracking-[-0.08px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Agents and bots (1)</p>
      </div>
    </div>
  );
}

function Left15() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full">
          <Icon9 />
          <Title7 />
        </div>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Left15 />
      </div>
    </div>
  );
}

function Line9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content15 />
    </div>
  );
}

function Overlap8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[52px] top-1/2" data-name="Overlap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
        <g id="Overlap">
          <g id="Bot">
            <path d={svgPaths.p3159bc00} fill="var(--fill-0, #6E6E6E)" id="Shape" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarTeams2IOs9() {
  return (
    <div className="bg-[#292929] relative rounded-[9999px] shrink-0 size-[52px]" data-name="Avatar (Teams 2 iOS)">
      <Overlap8 />
    </div>
  );
}

function AvatarImage15() {
  return (
    <div className="content-stretch flex items-center pr-[16px] relative shrink-0" data-name="Avatar/Image">
      <AvatarTeams2IOs9 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Meeting Recording</p>
      </div>
    </div>
  );
}

function Left16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-[12px] py-[12px] relative w-full">
          <AvatarImage15 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Left16 />
    </div>
  );
}

function BottomDivider1() {
  return <div className="h-px shrink-0 w-[393px]" data-name="Bottom divider" />;
}

function Line14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="absolute bg-black inset-0" data-name="BG" />
      <Content16 />
      <BottomDivider1 />
    </div>
  );
}

function GroupedListTeams2IOs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[393px]" data-name="Grouped List (Teams 2 iOS)">
      <Line />
      <Line7 />
      <Line11 />
      <Line10 />
      <Line8 />
      <Line13 />
      <Line12 />
      <Line15 />
      <Line1 />
      <Line3 />
      <Line2 />
      <Line4 />
      <Line5 />
      <Line6 />
      <Line9 />
      <Line14 />
    </div>
  );
}

function MeetingRosterParticipants1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 overflow-clip pt-[54px] top-0 w-[393px]" data-name="Meeting roster / participants">
      <MeetingStage />
      <NavigationBarTeams2IOs />
      <GroupedListTeams2IOs />
    </div>
  );
}

function RaisedBackOfHand() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Raised back of hand">
      <div className="absolute left-0 size-[24px] top-0" data-name="1F91A_RaisedBackOfHand_MOD_01_01">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img1F91ARaisedBackOfHandMod0101} />
      </div>
    </div>
  );
}

function Emoji() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Emoji">
      <RaisedBackOfHand />
    </div>
  );
}

function BaseSingleRowItem() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative shrink-0 size-[24px]" data-name=".Base_Single row item">
      <Emoji />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#404040] content-stretch flex items-center left-[258px] px-[8px] py-[4px] rounded-[4px] top-[549px]">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">1</p>
      </div>
      <BaseSingleRowItem />
    </div>
  );
}

function RaisedBackOfHand1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Raised back of hand">
      <div className="absolute left-0 size-[24px] top-0" data-name="1F91A_RaisedBackOfHand_MOD_01_01">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img1F91ARaisedBackOfHandMod0101} />
      </div>
    </div>
  );
}

function Emoji1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Emoji">
      <RaisedBackOfHand1 />
    </div>
  );
}

function BaseSingleRowItem1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative shrink-0 size-[24px]" data-name=".Base_Single row item">
      <Emoji1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#404040] content-stretch flex items-center left-[258px] px-[8px] py-[4px] rounded-[4px] top-[626px]">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">2</p>
      </div>
      <BaseSingleRowItem1 />
    </div>
  );
}

export default function MeetingRosterParticipants() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[94px] py-[290px] relative size-full" data-name="Meeting roster / participants">
      <MeetingRosterParticipants1 />
      <Frame1 />
      <Frame2 />
    </div>
  );
}