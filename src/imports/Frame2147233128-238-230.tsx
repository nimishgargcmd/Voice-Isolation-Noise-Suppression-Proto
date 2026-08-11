import imgRaisedHand from "figma:asset/5e065daa3e40aa51484d94e392c06fe496150d5d.png";

function RaisedHand() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Raised hand">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRaisedHand} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0 w-[44px]">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">Raise</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <RaisedHand />
      <Frame1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#212122] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[50px] size-full">
      <Frame2 />
    </div>
  );
}