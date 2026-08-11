import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import {
  DEFAULT_VERSION_ID,
  VERSIONS,
  getVersion,
  isValidVersionId,
} from "./versions";
import type { VersionEntry } from "./versions";

const STORAGE_KEY = "fy27.activeVersion";

interface VersionContextValue {
  versions: VersionEntry[];
  activeVersionId: string;
  activeVersion: VersionEntry;
  setActiveVersion: (id: string) => void;
}

const VersionContext = createContext<VersionContextValue | null>(null);

function readInitial(): string {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isValidVersionId(saved)) return saved;
  } catch {
    /* localStorage unavailable — fall through to default */
  }
  return DEFAULT_VERSION_ID;
}

export function VersionProvider({ children }: { children: ReactNode }) {
  // Synchronous seed (read in render) so the first paint is already on the
  // correct version — never seed via useEffect (one-frame default flash).
  const [activeVersionId, setId] = useState<string>(readInitial);

  const setActiveVersion = useCallback((id: string) => {
    if (!isValidVersionId(id)) return;
    setId(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* ignore persistence failure */
    }
  }, []);

  const value = useMemo<VersionContextValue>(
    () => ({
      versions: VERSIONS,
      activeVersionId,
      activeVersion:
        getVersion(activeVersionId) ?? getVersion(DEFAULT_VERSION_ID)!,
      setActiveVersion,
    }),
    [activeVersionId, setActiveVersion],
  );

  return (
    <VersionContext.Provider value={value}>{children}</VersionContext.Provider>
  );
}

export function useVersion(): VersionContextValue {
  const ctx = useContext(VersionContext);
  if (!ctx) throw new Error("useVersion must be used within a VersionProvider");
  return ctx;
}
