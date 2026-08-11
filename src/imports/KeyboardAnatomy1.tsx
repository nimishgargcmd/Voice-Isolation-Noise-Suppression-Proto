import svgPaths from "./svg-g9ff05ardh";

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Help me understand</p>
      </div>
    </div>
  );
}

function ArrowEnter() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Arrow Enter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Arrow Enter">
          <path d={svgPaths.p4a6f140} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#333] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content />
      <ArrowEnter />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Help me answer</p>
      </div>
    </div>
  );
}

function ArrowEnter1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Arrow Enter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Arrow Enter">
          <path d={svgPaths.p4a6f140} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#333] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content1 />
      <ArrowEnter1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">What can I ask?</p>
      </div>
    </div>
  );
}

function ArrowEnter2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Arrow Enter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Arrow Enter">
          <path d={svgPaths.p4a6f140} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#333] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content2 />
      <ArrowEnter2 />
    </div>
  );
}

function Shorcuts() {
  return (
    <div className="relative shrink-0 w-full" data-name="Shorcuts">
      <div className="flex flex-row items-center overflow-x-auto overflow-y-clip size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[11.643px] py-[4px] relative w-full">
          <Button />
          <Button1 />
          <Button2 />
        </div>
      </div>
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

function Fab() {
  return (
    <div className="bg-[rgba(191,191,191,0.08)] content-stretch flex items-center p-[8px] relative rounded-[21px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 size-[32px]" data-name="FAB">
      <Add />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#6e6e6e] text-[17px] tracking-[-0.408px] w-[237px] whitespace-pre-wrap">Ask CoPilot</p>
    </div>
  );
}

function Send() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+1px)] size-[16px] top-1/2" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Send">
          <path d={svgPaths.p359730f0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Fab1() {
  return (
    <div className="relative rounded-[30px] shrink-0 size-[32px]" data-name="FAB">
      <Send />
    </div>
  );
}

function InputArea() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Input area">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <Fab />
          <Frame />
          <Fab1 />
          <div className="absolute bg-[#5a50db] h-[22px] left-[51px] rounded-[4px] top-[15px] w-px" />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return <div className="absolute inset-0 rounded-[27px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.17) 100%), linear-gradient(90deg, rgba(242, 242, 242, 0.2) 0%, rgba(242, 242, 242, 0.2) 100%), linear-gradient(90deg, rgba(24, 24, 26, 0.5) 0%, rgba(24, 24, 26, 0.5) 100%)" }} />;
}

function Key() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">q</p>
      </div>
    </div>
  );
}

function Key1() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">w</p>
      </div>
    </div>
  );
}

function Key2() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">e</p>
      </div>
    </div>
  );
}

function Key3() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">r</p>
      </div>
    </div>
  );
}

function Key4() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">t</p>
      </div>
    </div>
  );
}

function Key5() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">y</p>
      </div>
    </div>
  );
}

function Key6() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">u</p>
      </div>
    </div>
  );
}

function Key7() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">i</p>
      </div>
    </div>
  );
}

function Key8() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">o</p>
      </div>
    </div>
  );
}

function Key9() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">p</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[6.5px] items-center justify-center relative shrink-0 w-full" data-name="Row 1">
      <Key />
      <Key1 />
      <Key2 />
      <Key3 />
      <Key4 />
      <Key5 />
      <Key6 />
      <Key7 />
      <Key8 />
      <Key9 />
    </div>
  );
}

function Key10() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">a</p>
      </div>
    </div>
  );
}

function Key11() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">s</p>
      </div>
    </div>
  );
}

function Key12() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">d</p>
      </div>
    </div>
  );
}

function Key13() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">f</p>
      </div>
    </div>
  );
}

function Key14() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">g</p>
      </div>
    </div>
  );
}

function Key15() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">h</p>
      </div>
    </div>
  );
}

function Key16() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">j</p>
      </div>
    </div>
  );
}

function Key17() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">k</p>
      </div>
    </div>
  );
}

function Key18() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">l</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.5px] items-center justify-center px-[20px] relative w-full">
          <Key10 />
          <Key11 />
          <Key12 />
          <Key13 />
          <Key14 />
          <Key15 />
          <Key16 />
          <Key17 />
          <Key18 />
        </div>
      </div>
    </div>
  );
}

function ShiftKey() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[45px]" data-name="Shift Key">
      <div className="absolute bg-[#454545] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] uppercase">
        <p className="leading-[28px] whitespace-pre-wrap">􀆝</p>
      </div>
    </div>
  );
}

function Key19() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">z</p>
      </div>
    </div>
  );
}

function Key20() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">x</p>
      </div>
    </div>
  );
}

function Key21() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">c</p>
      </div>
    </div>
  );
}

function Key22() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">v</p>
      </div>
    </div>
  );
}

function Key23() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">b</p>
      </div>
    </div>
  );
}

function Key24() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">n</p>
      </div>
    </div>
  );
}

function Key25() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">m</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6.5px] items-start min-h-px min-w-px relative" data-name="Row 3">
      <Key19 />
      <Key20 />
      <Key21 />
      <Key22 />
      <Key23 />
      <Key24 />
      <Key25 />
    </div>
  );
}

function DeleteKey() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[45px]" data-name="Delete Key">
      <div className="absolute bg-[#454545] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] uppercase">
        <p className="leading-[28px] whitespace-pre-wrap">􁂈</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[14.25px] items-center relative shrink-0 w-full" data-name="Row 3">
      <ShiftKey />
      <Row3 />
      <DeleteKey />
    </div>
  );
}

function KeyboardSwitch() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Keyboard Switch">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] left-[-2px] not-italic right-[-1.75px] text-[#a6a6a6] text-[18px] text-center top-[calc(50%-0.5px)]">
        <p className="leading-[21px] whitespace-pre-wrap">ABC</p>
      </div>
    </div>
  );
}

function Space1() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <div className="absolute bg-[#454545] inset-[0_-0.5px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.5px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">{` `}</p>
      </div>
    </div>
  );
}

function Space() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <Space1 />
    </div>
  );
}

function Return() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Return">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-[0.25px] text-[#a6a6a6] text-[19px] text-center top-[calc(50%+2px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">􀅇</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Row 4">
      <KeyboardSwitch />
      <Space />
      <Return />
    </div>
  );
}

function KeyboardLayouts() {
  return (
    <div className="relative shrink-0 w-full" data-name="Keyboard Layouts">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[13px] items-center px-[6.5px] relative w-full">
          <Row />
          <Row1 />
          <Row2 />
          <Row4 />
        </div>
      </div>
    </div>
  );
}

function Keyboard1() {
  return (
    <div className="content-stretch flex flex-col h-[254px] items-center pb-[2px] pt-[11px] relative shrink-0 w-full" data-name="Keyboard">
      <Background />
      <KeyboardLayouts />
    </div>
  );
}

function Keyboard() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[254px] items-end relative shrink-0 w-full" data-name="Keyboard">
      <Keyboard1 />
    </div>
  );
}

function CopilotKeyboardWithPromptPills() {
  return (
    <div className="absolute bg-[#1f1f1f] content-stretch flex flex-col items-start left-[120px] pt-[4px] rounded-bl-[24px] rounded-br-[24px] rounded-tl-[4px] rounded-tr-[4px] top-[143px] w-[390px]" data-name="Copilot keyboard with prompt pills">
      <Shorcuts />
      <InputArea />
      <Keyboard />
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

function Fab2() {
  return (
    <div className="bg-[rgba(191,191,191,0.08)] content-stretch flex items-center p-[8px] relative rounded-[21px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 size-[32px]" data-name="FAB">
      <Add1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#d9d9d9] text-[17px] tracking-[-0.408px] w-[237px] whitespace-pre-wrap">Summarise current topic</p>
    </div>
  );
}

function Send1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+1px)] size-[16px] top-1/2" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Send">
          <path d={svgPaths.p359730f0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Fab3() {
  return (
    <div className="bg-[#584bdf] relative rounded-[30px] shrink-0 size-[32px]" data-name="FAB">
      <Send1 />
    </div>
  );
}

function InputArea1() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Input area">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <Fab2 />
          <Frame1 />
          <Fab3 />
          <div className="absolute bg-[#5a50db] h-[22px] left-[241px] rounded-[4px] top-[15px] w-px" />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return <div className="absolute inset-0 rounded-[27px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.17) 100%), linear-gradient(90deg, rgba(242, 242, 242, 0.2) 0%, rgba(242, 242, 242, 0.2) 100%), linear-gradient(90deg, rgba(24, 24, 26, 0.5) 0%, rgba(24, 24, 26, 0.5) 100%)" }} />;
}

function Key26() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">q</p>
      </div>
    </div>
  );
}

function Key27() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">w</p>
      </div>
    </div>
  );
}

function Key28() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">e</p>
      </div>
    </div>
  );
}

function Key29() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">r</p>
      </div>
    </div>
  );
}

function Key30() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">t</p>
      </div>
    </div>
  );
}

function Key31() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">y</p>
      </div>
    </div>
  );
}

function Key32() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">u</p>
      </div>
    </div>
  );
}

function Key33() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">i</p>
      </div>
    </div>
  );
}

function Key34() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">o</p>
      </div>
    </div>
  );
}

function Key35() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">p</p>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[6.5px] items-center justify-center relative shrink-0 w-full" data-name="Row 1">
      <Key26 />
      <Key27 />
      <Key28 />
      <Key29 />
      <Key30 />
      <Key31 />
      <Key32 />
      <Key33 />
      <Key34 />
      <Key35 />
    </div>
  );
}

function Key36() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">a</p>
      </div>
    </div>
  );
}

function Key37() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">s</p>
      </div>
    </div>
  );
}

function Key38() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">d</p>
      </div>
    </div>
  );
}

function Key39() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">f</p>
      </div>
    </div>
  );
}

function Key40() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">g</p>
      </div>
    </div>
  );
}

function Key41() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">h</p>
      </div>
    </div>
  );
}

function Key42() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">j</p>
      </div>
    </div>
  );
}

function Key43() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">k</p>
      </div>
    </div>
  );
}

function Key44() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">l</p>
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.5px] items-center justify-center px-[20px] relative w-full">
          <Key36 />
          <Key37 />
          <Key38 />
          <Key39 />
          <Key40 />
          <Key41 />
          <Key42 />
          <Key43 />
          <Key44 />
        </div>
      </div>
    </div>
  );
}

function ShiftKey1() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[45px]" data-name="Shift Key">
      <div className="absolute bg-[#454545] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] uppercase">
        <p className="leading-[28px] whitespace-pre-wrap">􀆝</p>
      </div>
    </div>
  );
}

function Key45() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">z</p>
      </div>
    </div>
  );
}

function Key46() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">x</p>
      </div>
    </div>
  );
}

function Key47() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">c</p>
      </div>
    </div>
  );
}

function Key48() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">v</p>
      </div>
    </div>
  );
}

function Key49() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">b</p>
      </div>
    </div>
  );
}

function Key50() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">n</p>
      </div>
    </div>
  );
}

function Key51() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">m</p>
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6.5px] items-start min-h-px min-w-px relative" data-name="Row 3">
      <Key45 />
      <Key46 />
      <Key47 />
      <Key48 />
      <Key49 />
      <Key50 />
      <Key51 />
    </div>
  );
}

function DeleteKey1() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[45px]" data-name="Delete Key">
      <div className="absolute bg-[#454545] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] uppercase">
        <p className="leading-[28px] whitespace-pre-wrap">􁂈</p>
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex gap-[14.25px] items-center relative shrink-0 w-full" data-name="Row 3">
      <ShiftKey1 />
      <Row8 />
      <DeleteKey1 />
    </div>
  );
}

function KeyboardSwitch1() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Keyboard Switch">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] left-[-2px] not-italic right-[-1.75px] text-[#a6a6a6] text-[18px] text-center top-[calc(50%-0.5px)]">
        <p className="leading-[21px] whitespace-pre-wrap">ABC</p>
      </div>
    </div>
  );
}

function Space3() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <div className="absolute bg-[#454545] inset-[0_-0.5px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.5px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">{` `}</p>
      </div>
    </div>
  );
}

function Space2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <Space3 />
    </div>
  );
}

function Return1() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Return">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-[0.25px] text-[#a6a6a6] text-[19px] text-center top-[calc(50%+2px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">􀅇</p>
      </div>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Row 4">
      <KeyboardSwitch1 />
      <Space2 />
      <Return1 />
    </div>
  );
}

function KeyboardLayouts1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Keyboard Layouts">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[13px] items-center px-[6.5px] relative w-full">
          <Row5 />
          <Row6 />
          <Row7 />
          <Row9 />
        </div>
      </div>
    </div>
  );
}

function Keyboard3() {
  return (
    <div className="content-stretch flex flex-col h-[254px] items-center pb-[2px] pt-[11px] relative shrink-0 w-full" data-name="Keyboard">
      <Background1 />
      <KeyboardLayouts1 />
    </div>
  );
}

function Keyboard2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[254px] items-end relative shrink-0 w-full" data-name="Keyboard">
      <Keyboard3 />
    </div>
  );
}

function ChatKeyboardWithoutPromptPills() {
  return (
    <div className="absolute bg-[#1f1f1f] content-stretch flex flex-col items-start left-[725px] pt-[4px] rounded-bl-[24px] rounded-br-[24px] rounded-tl-[4px] rounded-tr-[4px] top-[195px] w-[390px]" data-name="Chat keyboard without prompt pills">
      <InputArea1 />
      <Keyboard2 />
    </div>
  );
}

export default function KeyboardAnatomy() {
  return (
    <div className="bg-white relative size-full" data-name="Keyboard anatomy 1">
      <CopilotKeyboardWithPromptPills />
      <ChatKeyboardWithoutPromptPills />
      <div className="absolute h-0 left-[103px] top-[201px] w-[1027px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1027 2">
            <line id="Line 25" stroke="var(--stroke-0, #FF5F3D)" strokeDasharray="10 10" strokeWidth="2" x2="1027" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[103px] top-[252px] w-[1027px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1027 2">
            <line id="Line 25" stroke="var(--stroke-0, #FF5F3D)" strokeDasharray="10 10" strokeWidth="2" x2="1027" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] leading-[normal] left-[535px] not-italic text-[12px] text-black top-[160px] w-[203px] whitespace-pre-wrap">Appears in Copilot, does not appear in chat</p>
      <p className="absolute font-['Inter:Bold',sans-serif] leading-[normal] left-[535px] not-italic text-[12px] text-black top-[219px]">Input box</p>
      <p className="absolute font-['Inter:Bold',sans-serif] leading-[normal] left-[535px] not-italic text-[12px] text-black top-[281px]">Keyboard</p>
      <p className="absolute font-['Inter:Bold',sans-serif] leading-[normal] left-[150px] not-italic text-[40px] text-black top-[59px]">CoPilot Keyboard</p>
      <p className="absolute font-['Inter:Bold',sans-serif] leading-[normal] left-[686px] not-italic text-[40px] text-black top-[59px]">Meeting Chat Keyboard</p>
      <p className="absolute font-['Inter:Bold',sans-serif] leading-[normal] left-[535px] not-italic text-[12px] text-black top-[143px]">Starter prompts (conditional)</p>
    </div>
  );
}