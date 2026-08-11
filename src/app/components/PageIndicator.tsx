import React from "react";

interface PageIndicatorProps {
  currentIndex: number;
  totalPages: number;
}

export function PageIndicator({ currentIndex, totalPages }: PageIndicatorProps) {
  return (
    <div className="bg-[rgba(64,64,64,0.7)] inline-flex gap-[7px] items-center px-[20px] py-[4px] rounded-[20px]">
      {Array.from({ length: totalPages }).map((_, index) => (
        <div key={index} className="relative shrink-0 size-[10px]">
          <svg className="block size-full" fill="none" viewBox="0 0 10 10">
            {index === currentIndex ? (
              <circle cx="5" cy="5" fill="#968CFF" r="5" />
            ) : (
              <circle cx="5" cy="5" fill="#E1E1E1" r="3" />
            )}
          </svg>
        </div>
      ))}
    </div>
  );
}
