import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/app/components/RootLayout";
import { AppShell } from "@/app/components/AppShell";
import { CalendarPage } from "@/app/components/CalendarPage";
import { ActivityPage } from "@/app/components/ActivityPage";
import { ChatPage } from "@/app/components/ChatPage";
import { PreJoinPage } from "@/app/components/PreJoinPage";
import { MeetingPage } from "@/app/components/MeetingPage";
import { CatchupPage } from "@/app/components/CatchupPage";
import { DMChatPage } from "@/app/components/DMChatPage";
import { AssetDownloader } from "@/app/components/AssetDownloader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      // L0 Teams app pages — share the AppShell (dock + bottom nav)
      {
        Component: AppShell,
        children: [
          { index: true, Component: CalendarPage },
          { path: "calendar", Component: CalendarPage },
          { path: "activity", Component: ActivityPage },
          { path: "chat", Component: ChatPage },
        ],
      },
      // Full-bleed surfaces — no shell, no dock, no nav
      { path: "pre-join", Component: PreJoinPage },
      { path: "meeting", Component: MeetingPage },
      // L2 catch-up conversation — its own minimized dock strip + back chevron
      { path: "catchup", Component: CatchupPage },
      // 1:1 DM chat — sibling surface, no bottom nav; replicates the dock layering
      { path: "dm/:conversationId", Component: DMChatPage },
    ],
  },
  { path: "/assets", Component: AssetDownloader },
]);
