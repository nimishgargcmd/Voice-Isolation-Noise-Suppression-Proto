import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useVersion } from "@/app/versioning/VersionContext";
import { DEFAULT_VERSION_ID } from "@/app/versioning/versions";
import { Fy27ToastPill } from "@/app/components/ToastContext";

/**
 * Transient "Viewing {label}" toast, shown when the active version is not the
 * default. Auto-dismisses 2.5s after it appears (re-shows + resets the timer when
 * the version changes). Switching back to the default hides it immediately.
 */
// Module-level so the toast fires once per actual version *change* — not every
// time the host surface (e.g. the calendar) unmounts/remounts on navigation.
let lastAnnouncedVersionId: string | null = null;

export function VersionIndicator() {
  const { activeVersion } = useVersion();
  const offDefault = activeVersion.id !== DEFAULT_VERSION_ID;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!offDefault) {
      lastAnnouncedVersionId = activeVersion.id; // back on default: nothing to announce
      setVisible(false);
      return;
    }
    if (lastAnnouncedVersionId === activeVersion.id) return; // already announced this version
    lastAnnouncedVersionId = activeVersion.id;
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(t);
  }, [offDefault, activeVersion.id]);

  return (
    <AnimatePresence>
      {offDefault && visible && (
        <motion.div
          className="absolute top-[64px] left-1/2 z-[55] -translate-x-1/2"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
        >
          <Fy27ToastPill message={`Viewing ${activeVersion.label}`} nowrap />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
