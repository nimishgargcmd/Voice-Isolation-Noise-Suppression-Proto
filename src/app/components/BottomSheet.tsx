import { useEffect } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";

/**
 * Reusable bottom sheet / drawer — the Teams 2 iOS "Drawer" shell.
 * Handles the scrim, the slide-up spring animation, the grabber handle, and
 * dismissal (scrim tap + Escape). It centres itself in the app's mobile frame
 * (max-w 430) so it works at any viewport width. Theme-aware via `--fy27-*`.
 *
 * Callers supply only the content (and may override the surface / radius /
 * padding via `surfaceClassName` and `className`).
 */
interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  /** Accessible dialog label. */
  ariaLabel?: string;
  /** Show the grabber handle (default true). */
  handle?: boolean;
  /** Drawer surface fill (default the Teams drawer `surface/tertiary`). */
  surfaceClassName?: string;
  /** Extra classes on the drawer (radius, padding, layout…). */
  className?: string;
  /** Optional z-index for sheet overlay root (default 70). */
  zIndex?: number;
  children: ReactNode;
}

export function BottomSheet({
  open,
  onClose,
  ariaLabel,
  handle = true,
  surfaceClassName = "bg-fy27-surface-tertiary",
  className = "",
  zIndex = 70,
  children,
}: BottomSheetProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal((
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 flex justify-center" style={{ fontFamily: "var(--font-sf-pro)", zIndex }}>
          <div className="relative w-full h-full max-w-[430px]">
            <motion.div
              className="absolute inset-0 bg-black/35"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={ariaLabel}
              className={`absolute inset-x-0 bottom-0 max-h-[92%] overflow-y-auto scrollbar-hide rounded-t-[14px] ${surfaceClassName} ${className}`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 420, damping: 40 }}
            >
              {handle && (
                <div className="h-[20px] flex items-center justify-center">
                  <div className="h-[4px] w-[36px] rounded-[2px] bg-fy27-icon-secondary" />
                </div>
              )}
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  ), document.body);
}
