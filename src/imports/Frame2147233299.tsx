import svgPaths from "./svg-y2lol92se3";
import imgThumbsUp from "figma:asset/b7bdd4e332f1134cea6b347137499723925005ef.png";
import imgRedHeart from "figma:asset/59520d231a783bb20cd3d4f98dfaec2de858b210.png";
import imgClappingHands from "figma:asset/cebe50ea4c5d9b448454b19dd79074e5c5b4d898.png";
import imgGrinningSquintingFace from "figma:asset/05be624ff210f9164b431697c6d21d5e13ab6caa.png";
import imgRaisedHand from "figma:asset/5e065daa3e40aa51484d94e392c06fe496150d5d.png";

function TabBar() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Tab Bar">
      <div className="absolute backdrop-blur-[4px] bg-[rgba(24,24,24,0.98)] h-[534px] left-0 rounded-bl-[56px] rounded-br-[56px] rounded-tl-[38px] rounded-tr-[38px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)] top-0 w-[390px]" data-name="BG 3 Apps" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <TabBar />
    </div>
  );
}

function ThumbsUp() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Thumbs up">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThumbsUp} />
    </div>
  );
}

function RedHeart() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Red heart">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRedHeart} />
    </div>
  );
}

function ClappingHands() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Clapping hands">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClappingHands} />
    </div>
  );
}

function GrinningSquintingFace() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Grinning squinting face">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGrinningSquintingFace} />
    </div>
  );
}

function RaisedHand() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Raised hand">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRaisedHand} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#212122] content-stretch flex gap-[4px] items-center px-[12px] py-[4px] relative rounded-[50px] shrink-0">
      <RaisedHand />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">Raise</p>
      </div>
    </div>
  );
}

function Reactions() {
  return (
    <div className="col-1 content-stretch flex h-[66.659px] items-center justify-between ml-0 mt-0 pl-[16px] pr-[8px] py-[12px] relative row-1 w-[376px]" data-name="Reactions">
      <ThumbsUp />
      <RedHeart />
      <ClappingHands />
      <GrinningSquintingFace />
      <Frame2 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Reactions />
    </div>
  );
}

function People() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="People">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="People">
          <path d={svgPaths.p1b349600} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function BaseVerticalButtonLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name=".base_vertical button label">
      <People />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">Participants</p>
    </div>
  );
}

function BaseGridButton() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".base_gridButton">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative w-full">
          <BaseVerticalButtonLabel />
        </div>
      </div>
    </div>
  );
}

function ShareScreenStart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Share Screen Start">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Share Screen Start">
          <path d={svgPaths.p13afc980} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function BaseVerticalButtonLabel1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name=".base_vertical button label">
      <ShareScreenStart />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">Share</p>
    </div>
  );
}

function BaseGridButton1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".base_gridButton">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative w-full">
          <BaseVerticalButtonLabel1 />
        </div>
      </div>
    </div>
  );
}

function Apps() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Apps">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Apps">
          <path d={svgPaths.p16224e00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function BaseVerticalButtonLabel2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name=".base_vertical button label">
      <Apps />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">Apps</p>
    </div>
  );
}

function BaseGridButton2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".base_gridButton">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative w-full">
          <BaseVerticalButtonLabel2 />
        </div>
      </div>
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Top row">
      <BaseGridButton />
      <BaseGridButton1 />
      <BaseGridButton2 />
    </div>
  );
}

function Record() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Record">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Record">
          <path d={svgPaths.p3e114300} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function BaseVerticalButtonLabel3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name=".base_vertical button label">
      <Record />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">Record</p>
    </div>
  );
}

function BaseGridButton3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".base_gridButton">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative w-full">
          <BaseVerticalButtonLabel3 />
        </div>
      </div>
    </div>
  );
}

function SlideTextEdit() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Slide Text Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Slide Text Edit">
          <path d={svgPaths.pa260280} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function BaseVerticalButtonLabel4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name=".base_vertical button label">
      <SlideTextEdit />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">Transcription</p>
    </div>
  );
}

function BaseGridButton4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".base_gridButton">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative w-full">
          <BaseVerticalButtonLabel4 />
        </div>
      </div>
    </div>
  );
}

function ClosedCaption() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Closed Caption">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Closed Caption">
          <path d={svgPaths.p3ba1a400} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function BaseVerticalButtonLabel5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name=".base_vertical button label">
      <ClosedCaption />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">Captions</p>
    </div>
  );
}

function BaseGridButton5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".base_gridButton">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative w-full">
          <BaseVerticalButtonLabel5 />
        </div>
      </div>
    </div>
  );
}

function ButtomRow() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Buttom row">
      <BaseGridButton3 />
      <BaseGridButton4 />
      <BaseGridButton5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(36,36,37,0.7)] content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-[361px]">
      <TopRow />
      <ButtomRow />
    </div>
  );
}

function Icon24X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p1f0f6680} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Turn on interpreter for me</p>
      </div>
    </div>
  );
}

function AccessoryText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Accessory + Text">
      <Icon24X />
      <Text />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[284px]" data-name="Left">
      <AccessoryText />
    </div>
  );
}

function Chevron() {
  return (
    <div className="relative size-[12px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron">
          <path d={svgPaths.pf4077f0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Chevron1() {
  return (
    <div className="relative size-[12px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron">
          <path d={svgPaths.pf4077f0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Left />
      <div className="absolute flex items-center justify-center left-[315px] size-[12px] top-[109px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Chevron />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[315px] size-[12px] top-[58px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Chevron1 />
        </div>
      </div>
    </div>
  );
}

function BorderBottom() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[15.96px]" data-name="Border bottom">
      <div className="absolute bg-[rgba(255,255,255,0.2)] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
    </div>
  );
}

function OneLine() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <Container />
          <BorderBottom />
        </div>
      </div>
    </div>
  );
}

function BorderBottom1() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[15.96px]" data-name="Border bottom">
      <div className="absolute bg-[rgba(255,255,255,0.2)] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
    </div>
  );
}

function Icon24X1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p4aa6d00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Meeting info</p>
      </div>
    </div>
  );
}

function AccessoryText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Accessory + Text">
      <Icon24X1 />
      <Text1 />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[293px]" data-name="Left">
      <AccessoryText1 />
    </div>
  );
}

function Right() {
  return <div className="content-stretch flex gap-[4px] h-[24px] items-center justify-end shrink-0" data-name="Right" />;
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Left1 />
      <Right />
    </div>
  );
}

function OneLine1() {
  return (
    <div className="relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[14px] relative w-full">
          <BorderBottom1 />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Icon24X2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p3489a600} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Meeting settings</p>
      </div>
    </div>
  );
}

function AccessoryText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Accessory + Text">
      <Icon24X2 />
      <Text2 />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[293px]" data-name="Left">
      <AccessoryText2 />
    </div>
  );
}

function Right1() {
  return <div className="content-stretch flex gap-[4px] h-[24px] items-center justify-end shrink-0" data-name="Right" />;
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Left2 />
      <Right1 />
    </div>
  );
}

function BorderBottom2() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[15.96px]" data-name="Border bottom">
      <div className="absolute bg-[rgba(255,255,255,0.2)] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
    </div>
  );
}

function OneLine2() {
  return (
    <div className="relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[14px] relative w-full">
          <Container2 />
          <BorderBottom2 />
        </div>
      </div>
    </div>
  );
}

function Icon24X3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p4020000} fill="var(--fill-0, #D92C2C)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d92c2c] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Report this meeting</p>
      </div>
    </div>
  );
}

function AccessoryText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Accessory + Text">
      <Icon24X3 />
      <Text3 />
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[293px]" data-name="Left">
      <AccessoryText3 />
    </div>
  );
}

function Right2() {
  return <div className="content-stretch flex gap-[4px] h-[24px] items-center justify-end shrink-0" data-name="Right" />;
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Left3 />
      <Right2 />
    </div>
  );
}

function OneLine3() {
  return (
    <div className="relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[14px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(36,36,37,0.7)] content-stretch flex flex-col h-[210px] items-start overflow-clip py-[2px] relative rounded-[24px] shrink-0 w-full">
      <OneLine />
      <OneLine1 />
      <OneLine2 />
      <OneLine3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[336.344px] items-start overflow-clip relative shrink-0 w-[358.955px]">
      <Frame3 />
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-[6px] top-[25.99px] w-[376px]">
      <Group2 />
      <Frame1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[20.21px] top-[449.6px]">
      <div className="absolute h-0 left-[20.21px] top-[449.6px] w-[349.586px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 349.586 0.5">
            <line id="Divider" stroke="var(--stroke-0, black)" strokeOpacity="0.1" strokeWidth="0.5" x2="349.586" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function UbarExpanded() {
  return (
    <div className="absolute contents left-0 top-0" data-name="ubar expanded">
      <Group />
      <Frame4 />
      <Group1 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="relative size-full">
      <UbarExpanded />
    </div>
  );
}