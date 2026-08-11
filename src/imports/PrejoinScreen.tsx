import svgPaths from "./svg-0tmtsigajy";
import { imgAvatar } from "./svg-45iaa";

function Frame1() {
  return <div className="bg-black content-stretch flex flex-col gap-[100px] h-[798px] items-start justify-center pb-[109px] pt-[100px] shrink-0 w-[393px]" />;
}

function BackNavigation() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="back navigation">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Dismiss">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15.5px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 15.5">
            <path d={svgPaths.p7a03a80} fill="var(--fill-0, #E1E1E1)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <BackNavigation />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Frame9 />
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e1e1e1] text-[17px] tracking-[-0.41px]">
        <p className="leading-[22px] whitespace-pre-wrap">Marketing team sync</p>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[64px_64px]" data-name="Avatar" style={{ maskImage: `url('${imgAvatar}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
        <g id="Avatar">
          <path clipRule="evenodd" d="M0 52H52V0H0V52Z" fill="var(--fill-0, #E8E8E8)" fillRule="evenodd" id="Background" />
          <path clipRule="evenodd" d={svgPaths.p20544380} fill="var(--fill-0, #E9464F)" fillRule="evenodd" id="Red" />
          <path clipRule="evenodd" d={svgPaths.p4567dc0} fill="var(--fill-0, #0067AD)" fillRule="evenodd" id="Blue" />
        </g>
      </svg>
    </div>
  );
}

function Overlap() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[52px]" data-name="Overlap">
      <div className="relative rounded-[6153.231px] shrink-0 size-[52px]" data-name="Avatar">
        <Avatar />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Avatar (Teams 2 iOS)">
        <Overlap />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Choose your audio and video settings</p>
      </div>
    </div>
  );
}

function VideoEffects() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Video Effects">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Video Background Effect">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[20.002px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.002 16">
            <path d={svgPaths.p3f1a9a00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
          </svg>
        </div>
      </div>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#e1e1e1] text-[12px]">Background effects</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <VideoEffects />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Settings">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.5px] left-1/2 top-1/2 w-[18.724px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7238 19.5">
            <path d={svgPaths.p13227d80} fill="var(--fill-0, #E1E1E1)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative w-full">
          <Frame3 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function AvatarImage() {
  return <div className="absolute bg-[#584bdf] inset-0 rounded-[10000px]" data-name="Avatar-image" />;
}

function PrejoinAudio() {
  return (
    <div className="bg-[#292929] content-stretch flex flex-[1_0_0] flex-col gap-[87px] h-full items-center min-h-px min-w-px overflow-clip py-[12px] relative rounded-[12px]" data-name="Prejoin/Audio">
      <Frame2 />
      <div className="relative rounded-[44995.5px] shrink-0 size-[144px]" data-name="Avatar">
        <AvatarImage />
      </div>
      <div className="relative shrink-0 w-full" data-name="Call controlPrejoin">
        <div className="content-stretch flex items-start justify-between p-[12px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px overflow-clip relative" data-name="Call controlPrejoin_button">
            <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name=".base_vertical button label">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Video Off">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20px] left-1/2 top-1/2 w-[20.002px]" data-name="Shape">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0017 20.0002">
                    <path d={svgPaths.p13b47780} fill="var(--fill-0, #E1E1E1)" id="Shape" />
                  </svg>
                </div>
              </div>
              <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#e1e1e1] text-[12px] text-center">Video is off</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px overflow-clip relative" data-name="Call controlPrejoin_button">
            <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name=".base_vertical button label">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Mic Off">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Shape">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 20.0002">
                    <path d={svgPaths.p37944100} fill="var(--fill-0, #E1E1E1)" id="Shape" />
                  </svg>
                </div>
              </div>
              <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#e1e1e1] text-[12px] text-center">Mic is off</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px overflow-clip relative" data-name="Call controlPrejoin_button">
            <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name=".base_vertical button label">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Speaker">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18px] left-1/2 top-1/2 w-[20px]" data-name="Shape">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.0005">
                    <path d={svgPaths.p8497cc0} fill="var(--fill-0, #E1E1E1)" id="Shape" />
                  </svg>
                </div>
              </div>
              <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#e1e1e1] text-[12px] text-center">Speaker</p>
            </div>
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[36px] left-[180.5px] not-italic text-[40px] text-center text-white top-[177px] tracking-[0.39px]">UV</p>
    </div>
  );
}

function SelfTileInFrame() {
  return (
    <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[393px]" data-name="self tile in frame">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <PrejoinAudio />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#e1e1e1] text-[13px] text-center tracking-[-0.08px]">Signed in as uvidyanta@xyz.com</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center overflow-clip px-[16px] relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[15px] text-black text-center text-ellipsis tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Join now</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-[#7f85f5] content-stretch cursor-pointer flex flex-col items-center justify-center relative rounded-[8px] shrink-0 w-full" data-name="Button (Teams 2 iOS)">
        <Content />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center overflow-clip px-[16px] relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#7f85f5] text-[15px] text-center text-ellipsis tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">More join options</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch cursor-pointer flex flex-col items-center relative rounded-[8px] shrink-0 w-full" data-name="Button (Teams 2 iOS)">
        <Content1 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative w-full">
        <Frame6 />
        <Frame7 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col gap-[16px] h-[852px] items-start left-0 top-0" data-name="Frame">
      <Frame13 />
      <Frame11 />
      <Frame12 />
      <SelfTileInFrame />
      <Frame5 />
      <Frame8 />
    </div>
  );
}

export default function PrejoinScreen() {
  return (
    <div className="relative size-full" data-name="Prejoin screen">
      <div className="absolute content-stretch flex flex-col h-[852px] items-start left-0 top-0 w-[393px]" data-name="Meeting stage">
        <Frame1 />
      </div>
      <Frame />
      <div className="absolute bottom-0 h-[21px] left-0 w-[393px]" data-name="Home indicator (Teams 2 iOS)">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[139px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-[#e1e1e1] h-[5px] rounded-[100px] w-[139px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
    </div>
  );
}