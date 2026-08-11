import svgPaths from "./svg-cxujc8guk0";
import imgAvatarImage from "figma:asset/39f8d2250dcd1e98d940778f5ef068f0f871f5a5.png";
import { imgRectangle } from "./svg-6ew7q";

function Frame() {
  return (
    <div className="absolute bottom-[18px] content-stretch flex gap-[11px] h-[22px] items-center leading-[0] left-[16px] not-italic overflow-clip text-[#5b5fc7] whitespace-nowrap">
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-end relative shrink-0 text-[17px] tracking-[-0.408px]">
        <p className="leading-[22px]">24 October</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-end relative shrink-0 text-[15px] tracking-[-0.24px]">
        <p className="leading-[20px]">Today</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[72px]" data-name="Title">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[11px] text-black tracking-[0.06px]">All Day</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[72px]" data-name="Text">
      <Title />
    </div>
  );
}

function Bar() {
  return (
    <div className="absolute contents inset-0" data-name="Bar">
      <div className="absolute bg-[#5b5fc7] inset-0 rounded-[3.5px]" data-name="Rectangle Copy 4" />
      <div className="absolute bg-white inset-[1px_1.33px] rounded-[3.5px]" data-name="Rectangle Copy 4" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#212121] text-[13px] tracking-[-0.078px]">4 Events</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[8px] left-[calc(50%+0.75px)] top-1/2 w-[4.5px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
            <path d={svgPaths.p329e3500} fill="var(--fill-0, #919191)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center justify-center min-h-px min-w-px relative" data-name="Right">
      <Frame5 />
    </div>
  );
}

function CardExpand() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Card Expand">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[12px] py-[8px] relative size-full">
          <div className="h-full overflow-clip relative shrink-0 w-[4px]" data-name="RSVP Bars">
            <Bar />
          </div>
          <Right />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col h-[38px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <CardExpand />
    </div>
  );
}

function CardIOsWithoutTimeUnit() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex flex-[1_0_0] flex-col h-[38px] items-start min-h-px min-w-px relative rounded-[8px]" data-name="Card iOS - Without time unit">
      <Card />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Text />
      <CardIOsWithoutTimeUnit />
    </div>
  );
}

function TimeUnit() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Text:Regular',sans-serif] gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[11px] tracking-[0.06px]" data-name="Time unit">
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[16px]">08:30 AM</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[60px]">
        <p className="leading-[16px] whitespace-pre-wrap">1 hr</p>
      </div>
    </div>
  );
}

function LeftRail() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pr-[4px] pt-[10px] relative rounded-[4px] self-stretch shrink-0 w-[72px]" data-name="Left rail">
      <TimeUnit />
    </div>
  );
}

function Bar1() {
  return (
    <div className="absolute contents inset-0" data-name="Bar">
      <div className="absolute bg-[#c8c8c8] inset-0 rounded-[3.5px]" data-name="Rectangle Copy 4" />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[165px]" data-name="Title">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6e6e6e] text-[15px] tracking-[-0.078px]">Monday Standup</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Arrow Repeat All">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12.003px] left-1/2 top-1/2 w-[12px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12.0034">
            <path d={svgPaths.p36b6bf00} fill="var(--fill-0, #6E6E6E)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <Title1 />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6e6e6e] text-[12px]">Conf 102/12A</p>
    </div>
  );
}

function CardExpand1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card Expand">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[12px] pl-[8px] pr-[12px] pt-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full overflow-clip relative shrink-0 w-[4px]" data-name="RSVP Bars">
              <Bar1 />
            </div>
          </div>
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <CardExpand1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[343px]">
      <LeftRail />
      <div className="bg-[#f8f8f8] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-[8px]" data-name="Card iOS - Without time unit">
        <Card1 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[70px] pt-[4px] relative shrink-0 w-[343px]">
      <div className="content-stretch flex gap-[4px] items-center pr-[8px] relative rounded-[35px] shrink-0" data-name="Pill">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Clock">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2" data-name="Shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.p3c13cff0} fill="var(--fill-0, #5B5FC7)" id="Shape" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5fc7] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">In 15 min</p>
        </div>
      </div>
    </div>
  );
}

function TimeUnit1() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Text:Regular',sans-serif] gap-[2px] items-start leading-[0] not-italic pr-[4px] pt-[8px] relative rounded-[4px] self-stretch shrink-0 text-[11px] tracking-[0.06px] w-[72px]" data-name="Time unit">
      <div className="flex flex-col justify-center relative shrink-0 text-[#212121] whitespace-nowrap">
        <p className="leading-[16px]">09:30 AM</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[#6e6e6e] w-[60px]">
        <p className="leading-[16px] whitespace-pre-wrap">60 min</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[-846.47px] top-[-487.77px]">
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-846.47px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[846.468px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-741.98px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[741.978px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-841.49px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[841.492px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-737px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[737.002px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-836.52px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[836.516px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-732.03px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[732.026px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-831.54px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[831.541px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-727.05px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[727.051px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-826.57px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[826.565px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-722.08px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[722.076px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-821.59px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[821.589px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-717.1px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[717.099px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-816.61px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[816.614px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-712.12px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[712.124px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-811.64px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[811.638px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-707.15px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[707.148px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-806.66px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[806.662px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-702.17px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[702.172px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-801.69px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[801.686px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-697.2px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[697.197px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-796.71px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[796.711px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-692.22px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[692.222px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-791.74px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[791.735px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-687.25px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[687.245px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-786.76px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[786.759px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-682.27px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[682.27px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-781.78px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[781.784px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-677.29px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[677.294px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-776.81px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[776.808px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-672.32px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[672.319px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-771.83px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[771.832px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-667.34px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[667.343px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-766.86px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[766.857px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-662.37px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[662.368px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-761.88px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[761.881px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-657.39px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[657.391px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-756.91px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[756.905px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-652.42px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[652.416px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-751.93px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[751.929px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-647.44px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[647.439px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-746.95px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[746.953px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-642.46px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[642.464px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-637.49px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[637.488px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-533px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[532.999px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-632.51px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[632.513px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-528.02px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[528.023px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-627.54px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[627.537px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-523.05px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[523.048px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-622.56px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[622.561px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-518.07px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[518.072px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-617.59px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[617.586px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-513.1px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[513.096px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-612.61px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[612.61px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-508.12px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[508.12px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-607.63px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[607.634px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-503.15px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[503.145px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-602.66px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[602.659px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-498.17px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[498.168px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-597.68px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[597.682px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-493.19px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[493.193px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-592.71px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[592.707px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-488.22px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[488.218px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-587.73px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[587.732px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-483.24px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[483.242px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-582.76px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[582.756px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-478.27px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[478.266px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-577.78px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[577.78px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-473.29px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[473.291px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-572.81px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[572.805px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-468.32px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[468.315px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-567.83px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[567.828px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-463.34px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[463.339px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-562.85px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[562.853px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-458.36px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[458.363px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-557.88px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[557.877px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-453.39px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[453.388px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-552.9px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[552.902px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-448.41px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[448.412px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-547.93px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[547.926px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-443.44px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[443.436px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-542.95px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[542.951px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-438.46px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[438.46px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-537.98px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[537.975px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-433.49px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[433.485px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-428.51px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[428.509px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-324.02px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[324.019px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-423.53px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[423.534px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-319.04px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[319.044px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-418.56px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[418.558px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-314.07px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[314.068px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-413.58px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[413.582px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-309.09px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[309.092px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-408.61px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[408.606px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-304.12px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[304.117px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-403.63px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[403.631px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-299.14px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[299.141px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-398.65px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[398.655px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-294.17px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[294.165px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-393.68px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[393.679px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-289.19px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[289.19px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-388.7px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[388.703px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-284.21px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[284.214px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-383.73px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[383.728px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-279.24px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[279.238px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-378.75px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[378.752px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-274.26px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[274.263px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-373.78px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[373.776px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-269.29px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[269.287px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-368.8px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[368.801px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-264.31px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[264.311px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-363.83px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[363.825px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-259.34px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[259.336px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-358.85px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[358.849px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-254.36px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[254.36px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-353.87px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[353.873px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-249.38px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[249.384px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-348.9px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[348.898px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-244.41px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[244.408px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-343.92px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[343.922px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-239.43px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[239.433px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-338.95px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[338.947px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-234.46px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[234.457px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-333.97px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[333.97px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-229.48px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[229.481px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-328.99px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[328.995px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-224.51px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[224.505px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-219.53px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[219.53px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-115.04px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[115.04px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-214.55px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[214.554px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-110.07px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[110.065px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-209.58px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[209.578px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-105.09px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[105.089px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-204.6px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[204.602px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-100.11px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[100.113px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-199.63px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[199.627px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-95.14px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[95.138px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-194.65px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[194.651px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-90.16px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[90.162px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-189.68px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[189.675px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-85.19px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[85.186px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-184.7px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[184.7px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-80.21px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[80.21px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-179.72px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[179.724px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-75.23px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[75.235px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-174.75px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[174.748px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-70.26px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[70.259px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-169.77px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[169.772px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-65.28px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.283px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-164.8px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[164.797px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-60.31px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[60.308px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-159.82px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[159.821px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-55.33px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[55.332px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-154.85px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[154.846px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-50.36px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[50.356px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-149.87px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[149.87px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-45.38px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[45.38px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-144.9px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[144.895px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-40.4px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[40.405px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-139.92px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[139.919px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-35.43px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[35.429px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-134.94px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[134.943px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-30.45px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[30.453px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-129.97px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[129.968px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-25.48px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[25.477px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-124.99px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[124.991px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-20.5px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.503px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-120.02px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[120.016px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-15.53px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[15.526px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
    </div>
  );
}

function Bar2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Bar">
      <div className="absolute bg-[#5b5fc7] inset-0 rounded-[3.5px]" data-name="Rectangle Copy 4" />
      <div className="absolute bg-[#e8ebfa] bottom-0 left-0 rounded-[3.5px] top-0 w-[4px]" data-name="Rectangle Copy 5" />
      <Group />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[15px] text-black tracking-[-0.078px] whitespace-pre-wrap">Marketing team sync</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <Title2 />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6e6e6e] text-[12px]">Conference room LF/101</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-center overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[-0.078px] whitespace-nowrap">
        <p className="leading-[18px]">Join</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5b5fc7] content-stretch flex flex-col items-center px-[8px] py-[5px] relative rounded-[5px] shrink-0" data-name="Button">
      <Content />
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-full items-center pt-[4px] relative shrink-0" data-name="Right">
      <div className="content-stretch flex flex-col items-end justify-center relative rounded-[4px] shrink-0 w-[78px]" data-name="Right">
        <Button />
      </div>
    </div>
  );
}

function CardExpand2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card Expand">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[12px] py-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full overflow-clip relative shrink-0 w-[4px]" data-name="RSVP Bars">
              <Bar2 />
            </div>
          </div>
          <Text2 />
          <div className="flex flex-row items-center self-stretch">
            <Right1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <CardExpand2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full">
      <TimeUnit1 />
      <div className="bg-[#f8f8f8] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-[8px]" data-name="Card iOS - Without time unit">
        <Card2 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame9 />
    </div>
  );
}

function TimeUnit2() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Text:Regular',sans-serif] gap-[2px] items-start leading-[0] not-italic pr-[4px] pt-[10px] relative rounded-[4px] self-stretch shrink-0 text-[11px] tracking-[0.06px] w-[72px]" data-name="Time unit">
      <div className="flex flex-col justify-center relative shrink-0 text-[#212121] whitespace-nowrap">
        <p className="leading-[16px]">11:00 AM</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[#6e6e6e] w-[60px]">
        <p className="leading-[16px] whitespace-pre-wrap">50 min</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[-846.47px] top-[-487.77px]">
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-846.47px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[846.468px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-741.98px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[741.978px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-841.49px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[841.492px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-737px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[737.002px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-836.52px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[836.516px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-732.03px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[732.026px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-831.54px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[831.541px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-727.05px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[727.051px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-826.57px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[826.565px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-722.08px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[722.076px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-821.59px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[821.589px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-717.1px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[717.099px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-816.61px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[816.614px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-712.12px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[712.124px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-811.64px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[811.638px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-707.15px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[707.148px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-806.66px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[806.662px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-702.17px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[702.172px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-801.69px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[801.686px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-697.2px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[697.197px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-796.71px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[796.711px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-692.22px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[692.222px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-791.74px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[791.735px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-687.25px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[687.245px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-786.76px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[786.759px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-682.27px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[682.27px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-781.78px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[781.784px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-677.29px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[677.294px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-776.81px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[776.808px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-672.32px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[672.319px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-771.83px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[771.832px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-667.34px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[667.343px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-766.86px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[766.857px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-662.37px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[662.368px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-761.88px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[761.881px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-657.39px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[657.391px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-756.91px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[756.905px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-652.42px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[652.416px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-751.93px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[751.929px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-647.44px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[647.439px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-746.95px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[746.953px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-642.46px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[642.464px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-637.49px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[637.488px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-533px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[532.999px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-632.51px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[632.513px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-528.02px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[528.023px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-627.54px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[627.537px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-523.05px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[523.048px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-622.56px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[622.561px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-518.07px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[518.072px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-617.59px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[617.586px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-513.1px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[513.096px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-612.61px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[612.61px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-508.12px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[508.12px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-607.63px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[607.634px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-503.15px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[503.145px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-602.66px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[602.659px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-498.17px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[498.168px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-597.68px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[597.682px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-493.19px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[493.193px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-592.71px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[592.707px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-488.22px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[488.218px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-587.73px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[587.732px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-483.24px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[483.242px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-582.76px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[582.756px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-478.27px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[478.266px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-577.78px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[577.78px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-473.29px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[473.291px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-572.81px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[572.805px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-468.32px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[468.315px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-567.83px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[567.828px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-463.34px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[463.339px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-562.85px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[562.853px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-458.36px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[458.363px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-557.88px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[557.877px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-453.39px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[453.388px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-552.9px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[552.902px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-448.41px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[448.412px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-547.93px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[547.926px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-443.44px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[443.436px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-542.95px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[542.951px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-438.46px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[438.46px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-537.98px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[537.975px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-433.49px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[433.485px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-428.51px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[428.509px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-324.02px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[324.019px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-423.53px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[423.534px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-319.04px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[319.044px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-418.56px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[418.558px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-314.07px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[314.068px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-413.58px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[413.582px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-309.09px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[309.092px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-408.61px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[408.606px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-304.12px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[304.117px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-403.63px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[403.631px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-299.14px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[299.141px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-398.65px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[398.655px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-294.17px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[294.165px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-393.68px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[393.679px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-289.19px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[289.19px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-388.7px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[388.703px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-284.21px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[284.214px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-383.73px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[383.728px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-279.24px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[279.238px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-378.75px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[378.752px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-274.26px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[274.263px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-373.78px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[373.776px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-269.29px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[269.287px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-368.8px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[368.801px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-264.31px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[264.311px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-363.83px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[363.825px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-259.34px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[259.336px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-358.85px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[358.849px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-254.36px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[254.36px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-353.87px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[353.873px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-249.38px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[249.384px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-348.9px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[348.898px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-244.41px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[244.408px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-343.92px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[343.922px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-239.43px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[239.433px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-338.95px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[338.947px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-234.46px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[234.457px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-333.97px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[333.97px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-229.48px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[229.481px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-328.99px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[328.995px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-224.51px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[224.505px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-219.53px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[219.53px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-115.04px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[115.04px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-214.55px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[214.554px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-110.07px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[110.065px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-209.58px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[209.578px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-105.09px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[105.089px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-204.6px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[204.602px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-100.11px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[100.113px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-199.63px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[199.627px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-95.14px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[95.138px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-194.65px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[194.651px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-90.16px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[90.162px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-189.68px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[189.675px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-85.19px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[85.186px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-184.7px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[184.7px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-80.21px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[80.21px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-179.72px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[179.724px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-75.23px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[75.235px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-174.75px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[174.748px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-70.26px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[70.259px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-169.77px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[169.772px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-65.28px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.283px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-164.8px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[164.797px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-60.31px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[60.308px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-159.82px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[159.821px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-55.33px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[55.332px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-154.85px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[154.846px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-50.36px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[50.356px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-149.87px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[149.87px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-45.38px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[45.38px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-144.9px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[144.895px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-40.4px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[40.405px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-139.92px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[139.919px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-35.43px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[35.429px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-134.94px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[134.943px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-30.45px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[30.453px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-129.97px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[129.968px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-25.48px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[25.477px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-124.99px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[124.991px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-20.5px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.503px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-120.02px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[120.016px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-15.53px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[15.526px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
    </div>
  );
}

function Bar3() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Bar">
      <div className="absolute bg-[#5b5fc7] inset-0 rounded-[3.5px]" data-name="Rectangle Copy 4" />
      <div className="absolute bg-[#e8ebfa] bottom-0 left-0 rounded-[3.5px] top-0 w-[4px]" data-name="Rectangle Copy 5" />
      <Group1 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[307px]" data-name="Title">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black tracking-[-0.078px]">Strategic Planning Q4</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <Title3 />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6e6e6e] text-[12px]">Conference room LF/101</p>
    </div>
  );
}

function CardExpand3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card Expand">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[12px] py-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full overflow-clip relative shrink-0 w-[4px]" data-name="RSVP Bars">
              <Bar3 />
            </div>
          </div>
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <CardExpand3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <TimeUnit2 />
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-[8px]" data-name="Card iOS - Without time unit">
        <Card3 />
      </div>
    </div>
  );
}

function TimeUnit3() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Text:Regular',sans-serif] gap-[2px] items-start leading-[0] not-italic pr-[4px] pt-[10px] relative rounded-[4px] self-stretch shrink-0 text-[11px] tracking-[0.06px] w-[72px]" data-name="Time unit">
      <div className="flex flex-col justify-center relative shrink-0 text-[#212121] whitespace-nowrap">
        <p className="leading-[16px]">12:30 PM</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[#6e6e6e] w-[60px]">
        <p className="leading-[16px] whitespace-pre-wrap">45 min</p>
      </div>
    </div>
  );
}

function Bar4() {
  return (
    <div className="absolute contents inset-0" data-name="Bar">
      <div className="absolute bg-[#5b5fc7] inset-0 rounded-[3.5px]" data-name="Rectangle Copy 4" />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[15px] text-black tracking-[-0.078px] whitespace-pre-wrap">Calendar Brainstorming - Teams and outlook</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <Title4 />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6e6e6e] text-[12px]">Conf 102/12A</p>
    </div>
  );
}

function CardExpand4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card Expand">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[12px] py-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full overflow-clip relative shrink-0 w-[4px]" data-name="RSVP Bars">
              <Bar4 />
            </div>
          </div>
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <CardExpand4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Card iOS - Without time unit">
        <Card4 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <TimeUnit3 />
      <Frame7 />
    </div>
  );
}

function Cards() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cards">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative w-full">
        <Frame12 />
        <Frame16 />
        <Frame18 />
        <Frame10 />
        <Frame13 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-[18px] content-stretch flex gap-[11px] h-[22px] items-center leading-[0] left-[16px] not-italic overflow-clip whitespace-nowrap">
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-end relative shrink-0 text-[#212121] text-[17px] tracking-[-0.408px]">
        <p className="leading-[22px]">25 October</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-end relative shrink-0 text-[#6e6e6e] text-[15px] tracking-[-0.24px]">
        <p className="leading-[20px]">Tomorrow</p>
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[72px]" data-name="Title">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[11px] text-black tracking-[0.06px]">All Day</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[72px]" data-name="Text">
      <Title5 />
    </div>
  );
}

function Bar5() {
  return (
    <div className="absolute contents inset-0" data-name="Bar">
      <div className="absolute bg-[#5b5fc7] inset-0 rounded-[3.5px]" data-name="Rectangle Copy 4" />
      <div className="absolute bg-white inset-[1px_1.33px] rounded-[3.5px]" data-name="Rectangle Copy 4" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#212121] text-[13px] tracking-[-0.078px]">5 Events</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[8px] left-[calc(50%+0.75px)] top-1/2 w-[4.5px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
            <path d={svgPaths.p329e3500} fill="var(--fill-0, #919191)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Right2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center justify-center min-h-px min-w-px relative" data-name="Right">
      <Frame6 />
    </div>
  );
}

function CardExpand5() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Card Expand">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[12px] py-[8px] relative size-full">
          <div className="h-full overflow-clip relative shrink-0 w-[4px]" data-name="RSVP Bars">
            <Bar5 />
          </div>
          <Right2 />
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="content-stretch flex flex-col h-[38px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <CardExpand5 />
    </div>
  );
}

function CardIOsWithoutTimeUnit1() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex flex-[1_0_0] flex-col h-[38px] items-start min-h-px min-w-px relative rounded-[8px]" data-name="Card iOS - Without time unit">
      <Card5 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Text5 />
      <CardIOsWithoutTimeUnit1 />
    </div>
  );
}

function TimeUnit4() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Text:Regular',sans-serif] gap-[2px] items-start leading-[0] not-italic pr-[4px] pt-[10px] relative rounded-[4px] self-stretch shrink-0 text-[11px] tracking-[0.06px] w-[72px]" data-name="Time unit">
      <div className="flex flex-col justify-center relative shrink-0 text-[#212121] whitespace-nowrap">
        <p className="leading-[16px]">02:30 PM</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[#6e6e6e] w-[60px]">
        <p className="leading-[16px] whitespace-pre-wrap">1hr 30m</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-846.47px] top-[-487.77px]">
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-846.47px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[846.468px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-741.98px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[741.978px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-841.49px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[841.492px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-737px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[737.002px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-836.52px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[836.516px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-732.03px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[732.026px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-831.54px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[831.541px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-727.05px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[727.051px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-826.57px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[826.565px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-722.08px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[722.076px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-821.59px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[821.589px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-717.1px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[717.099px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-816.61px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[816.614px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-712.12px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[712.124px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-811.64px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[811.638px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-707.15px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[707.148px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-806.66px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[806.662px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-702.17px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[702.172px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-801.69px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[801.686px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-697.2px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[697.197px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-796.71px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[796.711px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-692.22px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[692.222px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-791.74px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[791.735px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-687.25px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[687.245px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-786.76px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[786.759px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-682.27px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[682.27px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-781.78px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[781.784px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-677.29px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[677.294px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-776.81px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[776.808px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-672.32px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[672.319px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-771.83px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[771.832px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-667.34px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[667.343px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-766.86px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[766.857px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-662.37px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[662.368px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-761.88px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[761.881px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-657.39px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[657.391px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-756.91px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[756.905px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-652.42px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[652.416px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-751.93px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[751.929px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-647.44px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[647.439px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-746.95px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[746.953px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-642.46px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[642.464px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-637.49px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[637.488px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-533px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[532.999px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-632.51px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[632.513px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-528.02px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[528.023px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-627.54px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[627.537px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-523.05px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[523.048px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-622.56px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[622.561px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-518.07px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[518.072px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-617.59px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[617.586px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-513.1px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[513.096px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-612.61px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[612.61px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-508.12px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[508.12px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-607.63px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[607.634px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-503.15px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[503.145px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-602.66px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[602.659px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-498.17px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[498.168px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-597.68px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[597.682px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-493.19px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[493.193px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-592.71px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[592.707px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-488.22px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[488.218px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-587.73px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[587.732px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-483.24px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[483.242px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-582.76px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[582.756px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-478.27px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[478.266px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-577.78px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[577.78px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-473.29px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[473.291px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-572.81px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[572.805px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-468.32px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[468.315px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-567.83px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[567.828px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-463.34px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[463.339px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-562.85px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[562.853px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-458.36px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[458.363px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-557.88px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[557.877px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-453.39px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[453.388px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-552.9px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[552.902px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-448.41px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[448.412px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-547.93px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[547.926px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-443.44px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[443.436px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-542.95px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[542.951px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-438.46px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[438.46px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-537.98px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[537.975px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-433.49px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[433.485px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-428.51px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[428.509px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-324.02px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[324.019px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-423.53px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[423.534px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-319.04px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[319.044px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-418.56px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[418.558px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-314.07px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[314.068px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-413.58px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[413.582px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-309.09px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[309.092px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-408.61px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[408.606px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-304.12px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[304.117px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-403.63px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[403.631px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-299.14px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[299.141px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-398.65px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[398.655px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-294.17px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[294.165px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-393.68px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[393.679px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-289.19px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[289.19px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-388.7px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[388.703px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-284.21px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[284.214px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-383.73px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[383.728px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-279.24px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[279.238px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-378.75px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[378.752px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-274.26px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[274.263px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-373.78px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[373.776px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-269.29px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[269.287px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-368.8px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[368.801px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-264.31px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[264.311px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-363.83px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[363.825px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-259.34px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[259.336px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-358.85px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[358.849px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-254.36px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[254.36px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-353.87px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[353.873px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-249.38px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[249.384px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-348.9px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[348.898px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-244.41px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[244.408px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-343.92px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[343.922px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-239.43px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[239.433px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-338.95px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[338.947px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-234.46px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[234.457px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-333.97px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[333.97px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-229.48px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[229.481px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-328.99px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[328.995px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-224.51px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[224.505px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-219.53px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[219.53px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-115.04px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[115.04px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-214.55px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[214.554px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-110.07px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[110.065px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-209.58px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[209.578px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-105.09px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[105.089px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-204.6px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[204.602px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-100.11px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[100.113px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-199.63px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[199.627px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-95.14px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[95.138px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-194.65px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[194.651px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-90.16px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[90.162px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-189.68px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[189.675px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-85.19px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[85.186px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-184.7px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[184.7px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-80.21px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[80.21px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-179.72px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[179.724px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-75.23px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[75.235px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-174.75px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[174.748px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-70.26px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[70.259px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-169.77px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[169.772px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-65.28px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.283px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-164.8px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[164.797px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-60.31px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[60.308px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-159.82px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[159.821px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-55.33px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[55.332px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-154.85px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[154.846px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-50.36px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[50.356px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-149.87px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[149.87px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-45.38px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[45.38px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-144.9px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[144.895px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-40.4px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[40.405px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-139.92px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[139.919px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-35.43px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[35.429px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-134.94px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[134.943px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-30.45px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[30.453px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-129.97px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[129.968px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-25.48px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[25.477px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-124.99px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[124.991px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-20.5px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.503px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-120.02px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[120.016px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-15.53px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[15.526px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
    </div>
  );
}

function Bar6() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Bar">
      <div className="absolute bg-[#5b5fc7] inset-0 rounded-[3.5px]" data-name="Rectangle Copy 4" />
      <div className="absolute bg-[#e8ebfa] bottom-0 left-0 rounded-[3.5px] top-0 w-[4px]" data-name="Rectangle Copy 5" />
      <Group2 />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[15px] text-black tracking-[-0.078px] whitespace-pre-wrap">LT Engagement Series: Black/African American Communities</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <Title6 />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6e6e6e] text-[12px]">Conf 102/12A</p>
    </div>
  );
}

function CardExpand6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card Expand">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[12px] py-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full overflow-clip relative shrink-0 w-[4px]" data-name="RSVP Bars">
              <Bar6 />
            </div>
          </div>
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <CardExpand6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <TimeUnit4 />
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-[8px]" data-name="Card iOS - Without time unit">
        <Card6 />
      </div>
    </div>
  );
}

function TimeUnit5() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Text:Regular',sans-serif] gap-[2px] items-start leading-[0] not-italic pr-[4px] pt-[8px] relative rounded-[4px] self-stretch shrink-0 text-[11px] tracking-[0.06px] w-[72px]" data-name="Time unit">
      <div className="flex flex-col justify-center relative shrink-0 text-[#212121] whitespace-nowrap">
        <p className="leading-[16px]">03:30 PM</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[#6e6e6e] w-[60px]">
        <p className="leading-[16px] whitespace-pre-wrap">04:15 PM</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[-846.47px] top-[-487.77px]">
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-846.47px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[846.468px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-741.98px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[741.978px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-841.49px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[841.492px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-737px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[737.002px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-836.52px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[836.516px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-732.03px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[732.026px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-831.54px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[831.541px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-727.05px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[727.051px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-826.57px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[826.565px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-722.08px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[722.076px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-821.59px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[821.589px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-717.1px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[717.099px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-816.61px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[816.614px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-712.12px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[712.124px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-811.64px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[811.638px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-707.15px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[707.148px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-806.66px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[806.662px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-702.17px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[702.172px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-801.69px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[801.686px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-697.2px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[697.197px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-796.71px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[796.711px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-692.22px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[692.222px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-791.74px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[791.735px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-687.25px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[687.245px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-786.76px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[786.759px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-682.27px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[682.27px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-781.78px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[781.784px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-677.29px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[677.294px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-776.81px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[776.808px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-672.32px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[672.319px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-771.83px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[771.832px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-667.34px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[667.343px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-766.86px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[766.857px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-662.37px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[662.368px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-761.88px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[761.881px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-657.39px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[657.391px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-756.91px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[756.905px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-652.42px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[652.416px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-751.93px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[751.929px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-647.44px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[647.439px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-746.95px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[746.953px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-642.46px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[642.464px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-637.49px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[637.488px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-533px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[532.999px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-632.51px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[632.513px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-528.02px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[528.023px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-627.54px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[627.537px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-523.05px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[523.048px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-622.56px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[622.561px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-518.07px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[518.072px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-617.59px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[617.586px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-513.1px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[513.096px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-612.61px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[612.61px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-508.12px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[508.12px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-607.63px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[607.634px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-503.15px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[503.145px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-602.66px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[602.659px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-498.17px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[498.168px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-597.68px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[597.682px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-493.19px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[493.193px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-592.71px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[592.707px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-488.22px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[488.218px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-587.73px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[587.732px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-483.24px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[483.242px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-582.76px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[582.756px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-478.27px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[478.266px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-577.78px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[577.78px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-473.29px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[473.291px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-572.81px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[572.805px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-468.32px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[468.315px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-567.83px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[567.828px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-463.34px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[463.339px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-562.85px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[562.853px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-458.36px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[458.363px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-557.88px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[557.877px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-453.39px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[453.388px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-552.9px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[552.902px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-448.41px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[448.412px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-547.93px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[547.926px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-443.44px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[443.436px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-542.95px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[542.951px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-438.46px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[438.46px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-537.98px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[537.975px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-433.49px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[433.485px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-428.51px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[428.509px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-324.02px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[324.019px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-423.53px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[423.534px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-319.04px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[319.044px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-418.56px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[418.558px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-314.07px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[314.068px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-413.58px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[413.582px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-309.09px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[309.092px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-408.61px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[408.606px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-304.12px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[304.117px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-403.63px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[403.631px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-299.14px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[299.141px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-398.65px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[398.655px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-294.17px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[294.165px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-393.68px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[393.679px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-289.19px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[289.19px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-388.7px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[388.703px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-284.21px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[284.214px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-383.73px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[383.728px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-279.24px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[279.238px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-378.75px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[378.752px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-274.26px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[274.263px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-373.78px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[373.776px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-269.29px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[269.287px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-368.8px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[368.801px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-264.31px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[264.311px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-363.83px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[363.825px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-259.34px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[259.336px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-358.85px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[358.849px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-254.36px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[254.36px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-353.87px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[353.873px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-249.38px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[249.384px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-348.9px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[348.898px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-244.41px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[244.408px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-343.92px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[343.922px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-239.43px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[239.433px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-338.95px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[338.947px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-234.46px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[234.457px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-333.97px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[333.97px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-229.48px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[229.481px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-328.99px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[328.995px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-224.51px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[224.505px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-219.53px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[219.53px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-115.04px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[115.04px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-214.55px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[214.554px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-110.07px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[110.065px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-209.58px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[209.578px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-105.09px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[105.089px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-204.6px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[204.602px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-100.11px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[100.113px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-199.63px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[199.627px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-95.14px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[95.138px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-194.65px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[194.651px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-90.16px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[90.162px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-189.68px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[189.675px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-85.19px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[85.186px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-184.7px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[184.7px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-80.21px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[80.21px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-179.72px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[179.724px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-75.23px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[75.235px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-174.75px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[174.748px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-70.26px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[70.259px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-169.77px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[169.772px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-65.28px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.283px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-164.8px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[164.797px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-60.31px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[60.308px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-159.82px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[159.821px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-55.33px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[55.332px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-154.85px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[154.846px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-50.36px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[50.356px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-149.87px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[149.87px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-45.38px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[45.38px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-144.9px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[144.895px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-40.4px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[40.405px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-139.92px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[139.919px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-35.43px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[35.429px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-134.94px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[134.943px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-30.45px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[30.453px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-129.97px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[129.968px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-25.48px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[25.477px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-124.99px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[124.991px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-20.5px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.503px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-120.02px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[120.016px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
      <div className="absolute flex h-[1037.599px] items-center justify-center left-[-15.53px] top-[-487.77px] w-[868.143px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60 scale-y-94 skew-x-[20.07deg]">
          <div className="bg-[#5b5fc7] h-[1350.91px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[15.526px_487.774px] mask-size-[4px_40px] w-[2px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
        </div>
      </div>
    </div>
  );
}

function Bar7() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Bar">
      <div className="absolute bg-[#5b5fc7] inset-0 rounded-[3.5px]" data-name="Rectangle Copy 4" />
      <div className="absolute bg-[#e8ebfa] bottom-0 left-0 rounded-[3.5px] top-0 w-[4px]" data-name="Rectangle Copy 5" />
      <Group3 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[307px]" data-name="Title">
      <div className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[15px] text-black tracking-[-0.078px] whitespace-pre-wrap">
        <p className="mb-0">{`Building product for Indian SMB with `}</p>
        <p>Project S3</p>
      </div>
    </div>
  );
}

function TimeLocation() {
  return (
    <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[4px] items-start leading-[16px] not-italic relative shrink-0 text-[12px] w-[307px]" data-name="Time & Location">
      <p className="relative shrink-0 text-[#212121]">3:30 pm - 4:15 pm</p>
      <p className="relative shrink-0 text-[#6e6e6e]">·</p>
      <p className="relative shrink-0 text-[#6e6e6e]">Microsoft Teams Meeting</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <Title7 />
      <TimeLocation />
    </div>
  );
}

function CardExpand7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card Expand">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[12px] py-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full overflow-clip relative shrink-0 w-[4px]" data-name="RSVP Bars">
              <Bar7 />
            </div>
          </div>
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <CardExpand7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Card iOS - Without time unit">
        <Card7 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <TimeUnit5 />
      <Frame8 />
    </div>
  );
}

function Cards1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cards">
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[16px] px-[16px] relative w-full">
        <Frame14 />
        <Frame15 />
        <Frame17 />
      </div>
    </div>
  );
}

function Agenda() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-x-clip overflow-y-auto top-[242px] w-[393px]" data-name="Agenda">
      <div className="h-[60px] relative shrink-0 w-full" data-name="[DEPRECATED]Section headers">
        <div className="absolute bottom-0 h-[60px] left-0 right-0" data-name="Background">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 60">
            <path clipRule="evenodd" d="M0 0H393V60H0V0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="Background" />
          </svg>
        </div>
        <Frame />
      </div>
      <Cards />
      <div className="h-[60px] relative shrink-0 w-full" data-name="[DEPRECATED]Section headers">
        <div className="absolute bottom-0 h-[60px] left-0 right-0" data-name="Background">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 60">
            <path clipRule="evenodd" d="M0 0H393V60H0V0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="Background" />
          </svg>
        </div>
        <Frame1 />
      </div>
      <Cards1 />
    </div>
  );
}

function L() {
  return (
    <div className="absolute bg-white inset-0" data-name="L1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#212121] text-[15px] text-center top-1/2 tracking-[-0.078px] whitespace-nowrap">
        <p className="leading-[20px]">21</p>
      </div>
    </div>
  );
}

function L1() {
  return (
    <div className="absolute bg-white inset-0" data-name="L1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#212121] text-[15px] text-center top-1/2 tracking-[-0.078px] whitespace-nowrap">
        <p className="leading-[20px]">22</p>
      </div>
    </div>
  );
}

function L2() {
  return (
    <div className="absolute bg-white inset-0" data-name="L1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#212121] text-[15px] text-center top-1/2 tracking-[-0.078px] whitespace-nowrap">
        <p className="leading-[20px]">23</p>
      </div>
    </div>
  );
}

function L3() {
  return (
    <div className="absolute bg-white inset-0" data-name="L1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#212121] text-[15px] text-center top-1/2 tracking-[-0.078px] whitespace-nowrap">
        <p className="leading-[20px]">25</p>
      </div>
    </div>
  );
}

function L4() {
  return (
    <div className="absolute bg-white inset-0" data-name="L1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#212121] text-[15px] text-center top-1/2 tracking-[-0.078px] whitespace-nowrap">
        <p className="leading-[20px]">26</p>
      </div>
    </div>
  );
}

function L5() {
  return (
    <div className="absolute bg-white inset-0" data-name="L1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#212121] text-[15px] text-center top-1/2 tracking-[-0.078px] whitespace-nowrap">
        <p className="leading-[20px]">27</p>
      </div>
    </div>
  );
}

function Days() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Days">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[56px]" data-name="Collapsed 30">
        <L />
      </div>
      <div className="col-1 ml-[56px] mt-0 relative row-1 size-[56px]" data-name="Collapsed 31">
        <L1 />
      </div>
      <div className="col-1 ml-[112px] mt-0 relative row-1 size-[56px]" data-name="Collapsed 1">
        <L2 />
      </div>
      <div className="bg-white col-1 h-[56px] ml-[168px] mt-0 relative row-1 w-[57px]" data-name="Collapsed 2">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#5b5fc7] left-1/2 rounded-[18px] size-[36px] top-1/2" data-name="Selected bg" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[15px] text-center text-white top-1/2 tracking-[-0.078px] whitespace-nowrap">
          <p className="leading-[20px]">24</p>
        </div>
      </div>
      <div className="col-1 ml-[225px] mt-0 relative row-1 size-[56px]" data-name="Collapsed 3">
        <L3 />
      </div>
      <div className="col-1 ml-[281px] mt-0 relative row-1 size-[56px]" data-name="Collapsed 4">
        <L4 />
      </div>
      <div className="col-1 ml-[337px] mt-0 relative row-1 size-[56px]" data-name="Collapsed 5">
        <L5 />
      </div>
    </div>
  );
}

function GrabHandle() {
  return <div className="-translate-x-1/2 absolute bg-[#c8c8c8] h-[5px] left-[calc(50%+0.5px)] rounded-[4px] top-[8px] w-[36px]" data-name="Grab handle" />;
}

function ActionSheetHandleLight() {
  return (
    <div className="bg-white h-[20px] relative shrink-0 w-full" data-name="Action Sheet/Handle/Light">
      <GrabHandle />
    </div>
  );
}

function AvatarImage() {
  return (
    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage} />
    </div>
  );
}

function Overlap() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="Overlap">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Avatar">
        <AvatarImage />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[26px] text-black text-center tracking-[0.33px] whitespace-nowrap">
        <p className="leading-[31px]">October</p>
      </div>
    </div>
  );
}

function LargeTitle() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0" data-name="Large title">
      <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0" data-name="Avatar (Teams 2 iOS)">
        <Overlap />
      </div>
      <Text8 />
    </div>
  );
}

function Left() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] relative size-full">
          <LargeTitle />
        </div>
      </div>
    </div>
  );
}

function NavTitleIcons() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Nav title icons">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon 1">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p36199d80} fill="var(--fill-0, black)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Right3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Right">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end pr-[18px] relative size-full">
          <NavTitleIcons />
        </div>
      </div>
    </div>
  );
}

function NavigationHeader() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Navigation Header">
      <Left />
      <Right3 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5b5fc7] text-[15px] text-center tracking-[-0.24px]">Agenda</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#212121] text-[15px] text-center tracking-[-0.24px]">Day</p>
    </div>
  );
}

function Segments() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch cursor-pointer flex gap-[8px] items-center left-[16px] overflow-clip py-px rounded-[20px] top-1/2" data-name="Segments">
      <div className="bg-[#e8ebfa] relative rounded-[9999px] shrink-0" data-name="Pill 1">
        <div className="content-stretch flex flex-col items-center overflow-clip px-[16px] py-[6px] relative rounded-[inherit]">
          <Content1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <div className="bg-white relative rounded-[9999px] shrink-0" data-name="Pill 2">
        <div className="content-stretch flex flex-col items-center overflow-clip px-[16px] py-[6px] relative rounded-[inherit]">
          <Content2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Por() {
  return (
    <div className="bg-white h-[2792px] overflow-clip relative rounded-[42px] shrink-0 w-[393px]" data-name="POR">
      <Agenda />
      <div className="absolute content-stretch flex flex-col items-center left-0 shadow-[0px_0.8px_1.8px_0px_rgba(0,0,0,0.12),0px_0.15px_0.45px_0px_rgba(0,0,0,0.14)] top-[145px] w-[393px]" data-name="Date picker">
        <div className="h-[21px] relative shrink-0 w-full" data-name="Calendar primitives / Days">
          <div aria-hidden="true" className="absolute border border-[#9747ff] border-solid inset-0 pointer-events-none" />
          <div className="absolute bg-white inset-0" />
          <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[19.05%_85.6%_4.76%_0] leading-[16px] not-italic text-[#6e6e6e] text-[11px] text-center tracking-[0.06px] whitespace-pre-wrap">S</p>
          <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[19.05%_71.2%_4.76%_14.4%] leading-[16px] not-italic text-[#6e6e6e] text-[11px] text-center tracking-[0.06px] whitespace-pre-wrap">M</p>
          <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[19.05%_57.07%_4.76%_28.53%] leading-[16px] not-italic text-[#6e6e6e] text-[11px] text-center tracking-[0.06px] whitespace-pre-wrap">T</p>
          <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[19.05%_42.67%_4.76%_42.93%] leading-[16px] not-italic text-[#6e6e6e] text-[11px] text-center tracking-[0.06px] whitespace-pre-wrap">W</p>
          <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[19.05%_28.53%_4.76%_57.07%] leading-[16px] not-italic text-[#6e6e6e] text-[11px] text-center tracking-[0.06px] whitespace-pre-wrap">T</p>
          <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[19.05%_14.13%_4.76%_71.47%] leading-[16px] not-italic text-[#6e6e6e] text-[11px] text-center tracking-[0.06px] whitespace-pre-wrap">F</p>
          <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[19.05%_0_4.76%_85.6%] leading-[16px] not-italic text-[#6e6e6e] text-[11px] text-center tracking-[0.06px] whitespace-pre-wrap">S</p>
        </div>
        <Days />
        <ActionSheetHandleLight />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-start left-0 top-[53px] w-[393px]" data-name="Navigation bar (Teams 2 iOS)">
        <NavigationHeader />
        <div className="h-[44px] relative shrink-0 w-full" data-name="Segmented control (Teams 2 iOS)">
          <div className="absolute bg-white inset-0 overflow-clip" data-name="Pill bar Segmented control (Teams 2 iOS)">
            <Segments />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[393px]">
      <Por />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex h-[2792px] items-start left-0 top-0 w-[393px]">
      <Frame4 />
    </div>
  );
}

function StatusBarTime() {
  return (
    <div className="h-[21px] relative rounded-[24px] shrink-0 w-[54px]" data-name="StatusBar-time">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Medium',sans-serif] h-[20px] leading-[20px] left-[27px] not-italic text-[17px] text-black text-center top-px tracking-[-0.24px] w-[54px] whitespace-pre-wrap">9:15</p>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute content-stretch flex flex-col h-[53px] items-center justify-center left-0 top-0 w-[134px]" data-name="Left Side">
      <StatusBarTime />
    </div>
  );
}

function SignalWifiBattery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[78.401px]" data-name="Signal, Wifi, Battery">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.4012 13">
        <g id="Signal, Wifi, Battery">
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" />
          </g>
          <path d={svgPaths.p74e6d40} fill="var(--fill-0, black)" id="Wifi" />
          <g id="StatusBar-battery">
            <path d={svgPaths.pb6b7100} id="Outline" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p9c6aca0} fill="var(--fill-0, black)" id="Battery End" opacity="0.4" />
            <path d={svgPaths.p2cb42c00} fill="var(--fill-0, black)" id="Fill" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute content-stretch flex h-[53px] items-center justify-center right-0 top-0 w-[134px]" data-name="Right Side">
      <SignalWifiBattery />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24, Theme=Regular">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.505px] left-1/2 top-[calc(50%-0.25px)] w-[17.96px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9602 19.5053">
            <path d={svgPaths.p1c6ac800} fill="var(--fill-0, #212121)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NotificationBadge() {
  return (
    <div className="absolute bg-[#cc4a31] content-stretch flex flex-col items-center justify-center left-[2px] px-[6px] rounded-[100px] size-[16px] top-[2px]" data-name="Notification badge">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[102px]" />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[11px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-center text-white tracking-[0.06px] w-[7px]">
        <p className="leading-[16px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24, Theme=Regular">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.002px] left-1/2 top-1/2 w-[20px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.0017">
            <path d={svgPaths.p3c8e8a00} fill="var(--fill-0, #212121)" id="Shape" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[11px] size-[20px] top-[-5px]" data-name="Notification badge">
        <NotificationBadge />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24, Theme=Regular">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18px] left-1/2 top-1/2 w-[20px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p1ae31700} fill="var(--fill-0, #212121)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Direction=LTR, Size=24, Theme=Filled">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.pfdd1480} fill="var(--fill-0, #5B5FC7)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24, Theme=Regular">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.5px] left-1/2 top-1/2 w-[15.5px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 3.5">
            <path d={svgPaths.p1b4cd780} fill="var(--fill-0, #212121)" id="Shape" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[11px] rounded-[125px] size-[20px] top-[-5px]" data-name="Notification badge">
        <div className="absolute left-[6.25px] size-[10px] top-[3.75px]" data-name="Badge">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill="var(--fill-0, #CC4A31)" id="Badge" r="5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Menu items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Activity">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-center flex flex-wrap gap-[8px_12px] items-center justify-center px-[28px] py-[8px] relative w-full">
            <Icon />
            <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#212121] text-[10px] text-center tracking-[0.12px]">Activity</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Chat">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-center flex flex-wrap gap-[8px_12px] items-center justify-center px-[28px] py-[8px] relative w-full">
            <Icon1 />
            <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#212121] text-[10px] text-center tracking-[0.12px]">Chat</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Teams">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-center flex flex-wrap gap-[8px_12px] items-center justify-center px-[28px] py-[8px] relative w-full">
            <Icon2 />
            <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#212121] text-[10px] text-center tracking-[0.12px]">Teams</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Calendar">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-center flex flex-wrap gap-[8px_12px] items-center justify-center px-[28px] py-[8px] relative w-full">
            <Icon3 />
            <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#5b5fc7] text-[10px] text-center tracking-[0.12px]">Calendar</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="More">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-center flex flex-wrap gap-[8px_12px] items-center justify-center px-[28px] py-[8px] relative w-full">
            <Icon4 />
            <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#212121] text-[10px] text-center tracking-[0.12px]">More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[769px]">
      <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col h-[83px] items-center left-1/2 w-[393px]" data-name="Tab bar">
        <div className="h-px relative shrink-0 w-full" data-name="Dividers / Components">
          <div className="absolute bg-[#e1e1e1] h-[0.5px] left-0 right-0 top-0" data-name="🎨 Color" />
        </div>
        <MenuItems />
      </div>
      <div className="-translate-x-1/2 absolute h-[34px] left-[calc(50%+0.5px)] top-[818px] w-[134px]" data-name="[DEPRECATED]Home indicator">
        <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Home indicator" />
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[852px] left-1/2 overflow-clip top-1/2 w-[393px]" data-name="Calendar">
      <Frame3 />
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[393px]" data-name="Navigation / Calendar">
        <div className="bg-white h-[53px] relative shrink-0 w-full" data-name="StatusBar">
          <div className="-translate-x-1/2 absolute bg-black h-[37px] left-1/2 rounded-[100px] top-[12px] w-[125px]" data-name="Dynamic island" />
          <LeftSide />
          <RightSide />
        </div>
      </div>
      <Group4 />
    </div>
  );
}

export default function IPhoneCalendar() {
  return (
    <div className="relative size-full" data-name="iPhone Calendar">
      <Calendar />
      <div className="absolute bg-[#5b5fc7] content-stretch flex items-center justify-center left-[319px] overflow-clip p-[16px] rounded-[100px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] top-[697px]" data-name="Fab">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Add">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p21d4cf00} fill="var(--fill-0, white)" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}