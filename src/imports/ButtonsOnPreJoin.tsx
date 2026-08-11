function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center overflow-clip px-[16px] relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[15px] text-center text-ellipsis text-white tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Join now</p>
      </div>
    </div>
  );
}

function ButtonTeams2IOs() {
  return (
    <div className="bg-[#584bdf] content-stretch flex flex-col items-center justify-center relative rounded-[50px] shrink-0 w-full" data-name="Button (Teams 2 iOS)">
      <Content />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[10px] shrink-0 w-full">
      <ButtonTeams2IOs />
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch cursor-pointer flex flex-col items-center relative rounded-[8px] shrink-0 w-full" data-name="Button (Teams 2 iOS)">
        <Content1 />
      </div>
    </div>
  );
}

export default function ButtonsOnPreJoin() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative size-full" data-name="buttons on pre-join">
      <Frame />
      <Frame1 />
    </div>
  );
}