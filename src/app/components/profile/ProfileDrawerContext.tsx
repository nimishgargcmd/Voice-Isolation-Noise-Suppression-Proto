import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

/** Global open-state for the profile/account drawer, so any surface can open it. */
interface ProfileDrawerValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ProfileDrawerContext = createContext<ProfileDrawerValue | null>(null);

export function ProfileDrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(
    () => ({ isOpen, open, close }),
    [isOpen, open, close],
  );
  return (
    <ProfileDrawerContext.Provider value={value}>
      {children}
    </ProfileDrawerContext.Provider>
  );
}

export function useProfileDrawer(): ProfileDrawerValue {
  const ctx = useContext(ProfileDrawerContext);
  if (!ctx) {
    throw new Error(
      "useProfileDrawer must be used within a ProfileDrawerProvider",
    );
  }
  return ctx;
}
