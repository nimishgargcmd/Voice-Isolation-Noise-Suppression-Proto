import React, { useState, useRef, useEffect, useCallback } from "react";
import { MeetingStage } from "@/app/components/MeetingStage";
import { OnTheGoMode } from "@/app/components/OnTheGoMode";
import { FocusMode } from "@/app/components/FocusMode";
import { PageIndicator } from "@/app/components/PageIndicator";

interface SwipeableViewsProps {
  isSplit: boolean;
  onCollapseSplit?: () => void;
  isMicOn: boolean;
  isVideoOn: boolean;
  onMicToggle: () => void;
  onHandRaiseToggle: () => void;
  isHandRaised: boolean;
  onViewChange?: (viewIndex: number) => void;
  isContentSharing?: boolean;
  onEnterFullscreen?: () => void;
}

export function SwipeableViews({
  isSplit,
  onCollapseSplit,
  isMicOn,
  isVideoOn,
  onMicToggle,
  onHandRaiseToggle,
  isHandRaised,
  onViewChange,
  isContentSharing = false,
  onEnterFullscreen,
}: SwipeableViewsProps) {
  const [currentIndex, setCurrentIndex] = useState(1); // 0: OnTheGo, 1: Gallery, 2: Focus
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Measured container width — drives slide sizing and pixel-based transforms
  const [containerWidth, setContainerWidth] = useState(0);

  // Refs for gesture tracking — used inside native pointer event handlers
  // so they always see the latest values without needing re-binding.
  const startXRef = useRef<number | null>(null);
  const lastXRef = useRef<number | null>(null);
  const activePointerRef = useRef<number | null>(null);
  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;

  // Track split-screen state via ref so gesture handlers see latest value
  const isSplitRef = useRef(isSplit);
  isSplitRef.current = isSplit;

  // Track whether the gesture has been identified as horizontal
  const isHorizontalRef = useRef<boolean | null>(null);
  const startYRef = useRef<number | null>(null);

  // Minimum swipe distance (in px) to trigger a page change
  const minSwipeDistance = 50;

  // Notify parent when the current view changes
  useEffect(() => {
    onViewChange?.(currentIndex);
  }, [currentIndex, onViewChange]);

  // ── Measure container width on mount and resize ──
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setContainerWidth(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ─── Pointer Event handlers ───
  // Using Pointer Events with setPointerCapture for reliable gesture
  // tracking. Once we capture the pointer, all subsequent move/up/cancel
  // events route to our element regardless of where the finger moves.

  const onPointerDown = useCallback((e: PointerEvent) => {
    // Disable swipe gestures during split-screen multitasking
    if (isSplitRef.current) return;


    // Only track one pointer at a time (no multi-touch)
    if (activePointerRef.current !== null) return;

    // Don't capture pointer if the tap originated from an interactive element
    // (button, anchor, etc.) — let the native click event fire instead
    const target = e.target as HTMLElement;
    if (target.closest("button, a, [role='button']")) return;

    activePointerRef.current = e.pointerId;
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    lastXRef.current = null;
    isHorizontalRef.current = null; // Unknown direction yet

    // Capture the pointer so all future events come to this element
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

    setIsDragging(true);
  }, []);

  const onPointerMove = useCallback((e: PointerEvent) => {
    if (e.pointerId !== activePointerRef.current) return;
    if (startXRef.current === null) return;

    const dx = e.clientX - startXRef.current;
    const dy = e.clientY - (startYRef.current ?? e.clientY);

    // On the first significant movement, determine if this is a horizontal
    // or vertical gesture. If vertical, bail out and let native scroll handle it.
    if (isHorizontalRef.current === null) {
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      if (absDx < 5 && absDy < 5) return; // Wait for meaningful movement

      if (absDy > absDx) {
        // Vertical gesture — release capture so native scroll works
        isHorizontalRef.current = false;
        try {
          (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
        } catch {
          // Ignore if already released
        }
        activePointerRef.current = null;
        setIsDragging(false);
        setDragOffset(0);
        return;
      }
      isHorizontalRef.current = true;
    }

    if (!isHorizontalRef.current) return;

    // Apply rubber-band resistance at boundaries
    let offset = dx;
    const idx = currentIndexRef.current;
    if ((idx === 0 && dx > 0) || (idx === 2 && dx < 0)) {
      offset = dx * 0.3;
    }

    setDragOffset(offset);
    lastXRef.current = e.clientX;
  }, []);

  const finishGesture = useCallback(() => {
    const start = startXRef.current;
    const end = lastXRef.current;

    if (start !== null && end !== null && isHorizontalRef.current) {
      const distance = start - end;
      const idx = currentIndexRef.current;

      if (distance > minSwipeDistance && idx < 2) {
        setCurrentIndex(idx + 1);
      } else if (distance < -minSwipeDistance && idx > 0) {
        setCurrentIndex(idx - 1);
      }
    }

    // Reset all tracking state
    activePointerRef.current = null;
    startXRef.current = null;
    lastXRef.current = null;
    startYRef.current = null;
    isHorizontalRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
  }, []);

  const onPointerUp = useCallback((e: PointerEvent) => {
    if (e.pointerId !== activePointerRef.current) return;
    finishGesture();
  }, [finishGesture]);

  const onPointerCancel = useCallback((e: PointerEvent) => {
    if (e.pointerId !== activePointerRef.current) return;
    finishGesture();
  }, [finishGesture]);

  // Attach native pointer event listeners directly to the DOM element.
  // This avoids React's synthetic event delegation, which can miss the
  // first interaction in iframe / mobile preview contexts.
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerCancel);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerCancel);
    };
  }, [onPointerDown, onPointerMove, onPointerUp, onPointerCancel]);

  // Calculate transform for swipe animation — pixel-based using measured container width
  const getTransform = () => {
    const baseOffset = -currentIndex * containerWidth;
    return `translateX(${baseOffset + dragOffset}px)`;
  };

  // Slide width style — matches the measured container exactly
  const slideStyle: React.CSSProperties = { width: containerWidth || '100%' };

  return (
    <div
      className="h-full w-full relative overflow-hidden bg-black"
      ref={containerRef}
      style={{
        /* Allow native vertical scroll/pan, but let JS handle horizontal */
        touchAction: "pan-y",
        /* Prevent text selection during swipe */
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      {/* Swipeable Container */}
      <div
        ref={innerRef}
        className="h-full flex bg-black"
        style={{
          width: containerWidth ? containerWidth * 3 : '300%',
          transform: getTransform(),
          transition: isDragging ? 'none' : 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* View 0: On-the-go Mode */}
        <div className="h-full flex-shrink-0 bg-black" style={slideStyle}>
          <OnTheGoMode
            isMicOn={isMicOn}
            isVideoOn={isVideoOn}
            onMicToggle={onMicToggle}
            onHandRaiseToggle={onHandRaiseToggle}
            isHandRaised={isHandRaised}
            isActive={currentIndex === 0}
          />
        </div>

        {/* View 1: Gallery Mode */}
        <div className="h-full flex-shrink-0 bg-black" style={slideStyle}>
          <MeetingStage isSplit={isSplit} onCollapseSplit={onCollapseSplit} isContentSharing={isContentSharing} onEnterFullscreen={onEnterFullscreen} />
        </div>

        {/* View 2: Focus Mode */}
        <div className="h-full flex-shrink-0 bg-black" style={slideStyle}>
          <FocusMode isSplit={isSplit} onCollapseSplit={onCollapseSplit} isContentSharing={isContentSharing} onEnterFullscreen={onEnterFullscreen} />
        </div>
      </div>

      {/* Page Indicators - Animated position: lower in On-the-go mode, higher in Gallery/Focus */}
      {!isSplit && (
        <div
          className="absolute left-0 right-0 z-10 pointer-events-none flex justify-center"
          style={{
            bottom: 96,
          }}
        >
          <PageIndicator currentIndex={currentIndex} totalPages={3} />
        </div>
      )}
    </div>
  );
}