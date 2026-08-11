import React, { useRef, useEffect } from 'react';

interface HorizontalScrollContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function HorizontalScrollContainer({ children, className = '' }: HorizontalScrollContainerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const scrollStartX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let rafId: number | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      // Only handle horizontal scrolling if there's content to scroll
      if (container.scrollWidth <= container.clientWidth) return;

      isDragging.current = true;
      touchStartX.current = e.touches[0].clientX;
      scrollStartX.current = container.scrollLeft;
      
      // Cancel any ongoing momentum scrolling
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;

      const touchX = e.touches[0].clientX;
      const deltaX = touchStartX.current - touchX;
      
      // Calculate if this is primarily a horizontal movement
      const deltaY = Math.abs(e.touches[0].clientY - (e.touches[0] as any).startY || 0);
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);

      // If horizontal movement is dominant, prevent default to stop vertical scrolling
      if (isHorizontalSwipe && Math.abs(deltaX) > 5) {
        e.preventDefault();
        e.stopPropagation();
        
        // Apply scroll using RAF for smooth performance
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          container.scrollLeft = scrollStartX.current + deltaX;
        });
      }
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    // Store initial Y position for delta calculation
    const handleTouchStartCapture = (e: TouchEvent) => {
      if (e.touches[0]) {
        (e.touches[0] as any).startY = e.touches[0].clientY;
      }
    };

    // Use passive: false to allow preventDefault
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchstart', handleTouchStartCapture, { passive: true, capture: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchstart', handleTouchStartCapture);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className={className}
      style={{
        overflowX: 'auto',
        overflowY: 'hidden',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        touchAction: 'pan-x',
      }}
    >
      <div style={{ width: 'fit-content' }}>
        {children}
      </div>
    </div>
  );
}