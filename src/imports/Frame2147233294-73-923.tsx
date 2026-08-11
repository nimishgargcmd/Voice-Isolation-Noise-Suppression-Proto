import svgPaths from "./svg-79e6tctpdr";

function Fill() {
  return <div className="absolute bg-black inset-0 opacity-67 rounded-[1000px]" data-name="Fill" />;
}

function Bg() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 left-1/2 top-0 w-[370px]" data-name="BG">
      <Fill />
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Add">
          <path d={svgPaths.p23b109c0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center relative rounded-[40px] shrink-0 size-[36px]">
      <Add />
    </div>
  );
}

function Voice() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Voice">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Voice">
          <path d={svgPaths.p3460ed00} fill="var(--fill-0, #878BFB)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Stop() {
  return (
    <div className="bg-[rgba(135,139,251,0.3)] content-stretch flex items-center justify-center relative rounded-[99px] shrink-0 size-[32px]" data-name="Stop">
      <Voice />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 pl-[6px] pr-[8px] top-[6px] w-[370px]">
      <Frame />
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[24px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6e6e6e] text-[15px] tracking-[-0.078px]">
        <p className="leading-[20px] whitespace-pre-wrap">Ask Copilot privately</p>
      </div>
      <Stop />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Bg />
      <Frame4 />
    </div>
  );
}

function InputBox() {
  return (
    <div className="absolute h-[48px] left-[14px] top-[76px] w-[370px]" data-name="input box">
      <Group />
    </div>
  );
}

function Fill1() {
  return <div className="absolute bg-black inset-0 opacity-67 rounded-[1000px]" data-name="Fill" />;
}

function Bg1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 left-1/2 top-0 w-[370px]" data-name="BG">
      <Fill1 />
    </div>
  );
}

function Add1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Add">
          <path d={svgPaths.p23b109c0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center relative rounded-[40px] shrink-0 size-[36px]">
      <Add1 />
    </div>
  );
}

function Send() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Send">
          <path d={svgPaths.p39d05380} fill="var(--fill-0, #A6A6A6)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Send />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]">
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 pl-[6px] pr-[8px] top-[6px] w-[370px]">
      <Frame1 />
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[24px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6e6e6e] text-[15px] tracking-[-0.078px]">
        <p className="leading-[20px] whitespace-pre-wrap">Ask Copilot privately</p>
      </div>
      <Frame6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Bg1 />
      <Frame5 />
    </div>
  );
}

function InputBox1() {
  return (
    <div className="absolute h-[48px] left-[14px] top-[15px] w-[370px]" data-name="input box">
      <Group1 />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-white relative size-full">
      <InputBox />
      <InputBox1 />
    </div>
  );
}