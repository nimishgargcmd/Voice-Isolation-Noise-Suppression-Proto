import React from "react";
import { Outlet } from "react-router";
import { ActiveMeetingProvider } from "@/app/components/ActiveMeetingContext";
import { CameraProvider } from "@/app/components/CameraContext";

/**
 * Root layout that fills the phone frame container.
 * All route pages render inside this full-height wrapper.
 * Wraps with ActiveMeetingProvider so meeting state persists across routes.
 * CameraProvider shares a single camera stream across all views.
 */
export function RootLayout() {
  return (
    <ActiveMeetingProvider>
      <CameraProvider>
        <div className="absolute inset-0 overflow-hidden">
          <Outlet />
        </div>
      </CameraProvider>
    </ActiveMeetingProvider>
  );
}