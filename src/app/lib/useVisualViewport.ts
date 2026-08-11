import { useState, useEffect } from "react";

interface ViewportState {
  keyboardHeight: number;
  isKeyboardVisible: boolean;
}

export function useVisualViewport(): ViewportState {
  const [state, setState] = useState<ViewportState>({
    keyboardHeight: 0,
    isKeyboardVisible: false,
  });

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    let rafId = 0;

    const onResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const keyboardHeight = Math.max(0, window.innerHeight - vv.height);
        // 100px threshold to ignore Safari toolbar collapse (~50px)
        const isVisible = keyboardHeight > 100;
        setState({
          keyboardHeight: isVisible ? keyboardHeight : 0,
          isKeyboardVisible: isVisible,
        });
      });
    };

    vv.addEventListener("resize", onResize);
    vv.addEventListener("scroll", onResize);
    return () => {
      vv.removeEventListener("resize", onResize);
      vv.removeEventListener("scroll", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return state;
}
