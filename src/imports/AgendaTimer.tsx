function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Summit planning</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">10 min</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Text />
      <Text1 />
    </div>
  );
}

function AccessoryText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Accessory + Text">
      <Frame />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[326px]" data-name="Left">
      <AccessoryText />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37ef46] text-[15px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px]">Completed</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Text2 />
    </div>
  );
}

function AccessoryText1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Accessory + Text">
      <Frame1 />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[326px]" data-name="Left">
      <AccessoryText1 />
    </div>
  );
}

function Chevron() {
  return (
    <div className="relative size-[12px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron" />
      </svg>
    </div>
  );
}

function Chevron1() {
  return (
    <div className="relative size-[12px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron" />
      </svg>
    </div>
  );
}

function BorderBottom() {
  return (
    <div className="absolute bottom-0 h-px left-[-0.48px] right-[16.48px]" data-name="Border bottom">
      <div className="absolute bg-[rgba(255,255,255,0.2)] bottom-[0.5px] h-[0.5px] left-[0.48px] right-[-16.48px]" data-name="Color" />
    </div>
  );
}

function OneLine() {
  return (
    <div className="relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[16px] py-[12px] relative w-full">
          <Left />
          <Left1 />
          <div className="absolute flex items-center justify-center left-[330.52px] size-[12px] top-[123px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <Chevron />
            </div>
          </div>
          <div className="absolute flex items-center justify-center left-[330.52px] size-[12px] top-[72px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <Chevron1 />
            </div>
          </div>
          <BorderBottom />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[17px] text-white tracking-[-0.41px]">
        <p className="leading-[22px] whitespace-pre-wrap">Blockers on Easter campaign timeline and Q2 marketing strategy review</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">15 min</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Text3 />
      <Text4 />
    </div>
  );
}

function AccessoryText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Accessory + Text">
      <Frame2 />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Left">
      <AccessoryText2 />
    </div>
  );
}

function Chevron2() {
  return (
    <div className="relative size-[12px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron" />
      </svg>
    </div>
  );
}

function Chevron3() {
  return (
    <div className="relative size-[12px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron" />
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Left2 />
      <div className="absolute flex items-center justify-center left-[314.52px] size-[12px] top-[109px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Chevron2 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[314.52px] size-[12px] top-[58px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Chevron3 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#ffc800] text-[15px] tracking-[-0.08px]">
        <p className="leading-[20px] whitespace-pre-wrap">In progress</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Text5 />
    </div>
  );
}

function AccessoryText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Accessory + Text">
      <Frame3 />
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Left">
      <AccessoryText3 />
    </div>
  );
}

function Chevron4() {
  return (
    <div className="relative size-[12px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron" />
      </svg>
    </div>
  );
}

function Chevron5() {
  return (
    <div className="relative size-[12px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron" />
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Left3 />
      <div className="absolute flex items-center justify-center left-[314.52px] size-[12px] top-[109px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Chevron4 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[314.52px] size-[12px] top-[58px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Chevron5 />
        </div>
      </div>
    </div>
  );
}

function BorderBottom1() {
  return (
    <div className="absolute bottom-0 h-px left-[-0.48px] right-[16.48px]" data-name="Border bottom">
      <div className="absolute bg-[rgba(255,255,255,0.2)] bottom-[-0.5px] h-[0.5px] right-[-0.48px] w-[342px]" data-name="Color" />
    </div>
  );
}

function OneLine1() {
  return (
    <div className="relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[16px] py-[12px] relative w-full">
          <Container />
          <Container1 />
          <BorderBottom1 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Discuss follow up tasks</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">10 min</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Text6 />
      <Text7 />
    </div>
  );
}

function AccessoryText4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[326px]" data-name="Accessory + Text">
      <Frame4 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b6b5b5] text-[15px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px]">Not started</p>
      </div>
    </div>
  );
}

function Text9() {
  return <div className="h-[20px] shrink-0 w-[49px]" data-name="Text" />;
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Text8 />
      <Text9 />
    </div>
  );
}

function AccessoryText5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[326px]" data-name="Accessory + Text">
      <Frame5 />
    </div>
  );
}

function Chevron6() {
  return (
    <div className="relative size-[12px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron" />
      </svg>
    </div>
  );
}

function Chevron7() {
  return (
    <div className="relative size-[12px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron" />
      </svg>
    </div>
  );
}

function BorderBottom2() {
  return <div className="absolute bottom-0 h-px left-[-0.48px] right-[16.48px]" data-name="Border bottom" />;
}

function OneLine2() {
  return (
    <div className="relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[16px] py-[12px] relative w-full">
          <AccessoryText4 />
          <AccessoryText5 />
          <div className="absolute flex items-center justify-center left-[330.52px] size-[12px] top-[123px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <Chevron6 />
            </div>
          </div>
          <div className="absolute flex items-center justify-center left-[330.52px] size-[12px] top-[72px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <Chevron7 />
            </div>
          </div>
          <BorderBottom2 />
        </div>
      </div>
    </div>
  );
}

export default function AgendaTimer() {
  return (
    <div className="bg-[rgba(36,36,37,0.7)] content-stretch flex flex-col items-start overflow-clip py-[2px] relative rounded-[24px] size-full" data-name="Agenda timer">
      <OneLine />
      <OneLine1 />
      <OneLine2 />
    </div>
  );
}