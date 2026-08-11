import svgPaths from "./svg-w7lb37kor4";

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
    <div className="absolute bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center left-[6px] rounded-[40px] size-[36px] top-[6px]">
      <Add />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[6px] top-[6px]">
      <Frame />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[calc(50%-131px)] not-italic text-[#6e6e6e] text-[15px] top-[24px] tracking-[-0.078px] w-[209px]">
        <p className="leading-[20px] whitespace-pre-wrap">Ask Copilot privately</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Bg />
      <Group />
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

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center left-[337px] top-[14px]">
      <Send />
    </div>
  );
}

function InputBox() {
  return (
    <div className="absolute h-[48px] left-[14px] top-[18px] w-[370px]" data-name="input box">
      <Group1 />
      <Frame1 />
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
    <div className="absolute bg-[rgba(135,139,251,0.3)] content-stretch flex items-center justify-center left-[325px] rounded-[99px] size-[32px] top-[8px]" data-name="Stop">
      <Voice />
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

function Frame2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center left-[6px] rounded-[40px] size-[36px] top-[6px]">
      <Add1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[6px] top-[6px]">
      <Frame2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[calc(50%-131px)] not-italic text-[#6e6e6e] text-[15px] top-[24px] tracking-[-0.078px] w-[209px]">
        <p className="leading-[20px] whitespace-pre-wrap">Ask Copilot privately</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Bg1 />
      <Stop />
      <Group3 />
    </div>
  );
}

function InputBox1() {
  return (
    <div className="absolute h-[48px] left-[14px] top-[76px] w-[370px]" data-name="input box">
      <Group2 />
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