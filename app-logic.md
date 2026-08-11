# Application Logic & Architecture Documentation

## 1. APPLICATION OVERVIEW

### What is this application?

This is a high-fidelity interactive prototype of the **Microsoft Teams Mobile app's meeting multitasking feature**. It demonstrates how the meeting stage transitions to split-screen mode when users open chat, Copilot, or the more menu, replicating the native iOS Teams experience.

### Problem it solves

This prototype validates and demonstrates the design specifications for:
- Split-screen multitasking during video meetings
- Dynamic layout transitions between full gallery and split-screen modes
- Notification system with intelligent queuing logic (UFD - User Facing Diagnostics)
- Additional Information Layer (AIL) showing raised hands, timers, and alerts
- Persistent state management across panels

### Target user

- **Primary**: Design teams, product managers, and engineers working on the Teams Mobile experience
- **Secondary**: Stakeholders reviewing the multitasking interaction model

### Main features/capabilities

1. **Meeting Gallery View**: Vertically scrolling participant video tiles (2x2 grid for first 4, full width for remainder)
2. **Split-Screen Mode**: Single active participant tile with overlay panels (Chat, Copilot, More)
3. **Chat Panel**: Persistent messaging with typing indicators, auto-scrolling, keyboard overlay
4. **Copilot Panel**: AI assistant with follow-up prompts and contextual responses
5. **More Panel**: Meeting controls including reactions, hand raise, recording, interpreter settings
6. **UFD Notification System**: Two-state stacking with priority-based queuing (critical vs informational)
7. **Additional Information Layer (AIL)**: Dynamic display of raised hands, meeting timers, and alerts
8. **Floating Self Video**: Draggable self-view with mic/network indicators and emoji reactions

### Overall user journey

1. User opens app → **Calendar page** with day view of events
2. User taps "Join" on active event → **Pre-join page** to configure camera, mic, and audio output
3. User taps "Join now" → Connecting animation → **Meeting page** (Gallery view, index 1)
4. User can **swipe left** → On-the-go mode (index 0) — compact view with quick actions, auto-mutes mic/video
5. User can **swipe right** → Focus mode (index 2) — active speaker fullscreen
6. User taps Chat/Copilot/More → Meeting stage **transitions to split-screen** multitasking
7. User interacts with panel (send messages, ask Copilot, react, view participants, agenda timer, notifications hub)
8. User taps meeting stage → **Collapses split-screen** back to gallery view
9. User taps shared content → **Fullscreen landscape view** with PiP self-tile
10. User taps back in meeting header → **Calendar page** with **MeetingDock** (meeting backgrounded)
11. User taps dock or "Join" button → Returns to in-progress meeting (skip pre-join)
12. User taps end call → **Calendar page** (meeting ended, dock removed)
13. Throughout: UFD notifications appear dynamically, replacing AIL when active
14. Throughout: Raised hands, timers, and alerts persist in AIL (when no UFD showing)

---

## 2. TECH STACK & DEPENDENCIES

### Framework
- **React 18.3.1** (via peer dependencies)
- **TypeScript** (via JSX/TSX files)

### Build tool
- **Vite 6.3.5** - Fast development and build tool
- **@vitejs/plugin-react 4.7.0** - React plugin for Vite

### Styling approach
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **@tailwindcss/vite 4.1.12** - Tailwind v4 Vite integration
- **PostCSS** - CSS processing (postcss.config.mjs)
- **Custom CSS variables** - Design tokens in `/src/styles/theme.css`
- **SF Pro Text & SF Pro Display fonts** - iOS native fonts

### State management
- **React useState** - Local component state
- **React useCallback** - Memoized callbacks
- **React useRef** - DOM references and mutable values
- **React Context** (`ActiveMeetingContext`) - Cross-route meeting state (timer, mic, video, content sharing)
- No external state management library (Redux/Zustand) - using React's built-in hooks

### Routing library
- **React Router 7** via `react-router` package — `createBrowserRouter` with Data mode pattern
- Routes: `/` and `/calendar` → `CalendarPage`, `/pre-join` → `PreJoinPage`, `/meeting` → `MeetingPage`, `/assets` → `AssetDownloader`
- Root layout (`RootLayout.tsx`) wraps all routes with `ActiveMeetingProvider` and `StatusBar`

### All npm packages/dependencies

#### UI Component Libraries
- `@radix-ui/react-*` (multiple packages) - Accessible UI primitives
  - accordion, alert-dialog, aspect-ratio, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toggle-group, toggle, tooltip
- `@mui/material 7.3.5` - Material-UI components
- `@mui/icons-material 7.3.5` - Material-UI icons
- `@emotion/react 11.14.0` - CSS-in-JS library (MUI dependency)
- `@emotion/styled 11.14.1` - Styled components (MUI dependency)

#### Animation & Interaction
- `motion 12.23.24` - Animation library (Motion/Framer Motion successor)
- `react-dnd 16.0.1` - Drag and drop library
- `react-dnd-html5-backend 16.0.1` - HTML5 backend for react-dnd
- `react-swipeable 7.0.2` - Touch gesture library for swipe interactions

#### UI Utilities
- `lucide-react 0.487.0` - Icon library
- `class-variance-authority 0.7.1` - CVA for component variants
- `clsx 2.1.1` - Conditional classNames utility
- `tailwind-merge 3.2.0` - Merge Tailwind classes
- `tw-animate-css 1.3.8` - Animation utilities for Tailwind
- `vaul 1.1.2` - Drawer component
- `sonner 2.0.3` - Toast notifications

#### Forms & Input
- `react-hook-form 7.55.0` - Form validation and management
- `input-otp 1.4.2` - OTP input component

#### Data Display
- `recharts 2.15.2` - Chart library
- `react-slick 0.31.0` - Carousel component
- `embla-carousel-react 8.6.0` - Another carousel library
- `react-responsive-masonry 2.7.1` - Masonry grid layout

#### Date/Time
- `date-fns 3.6.0` - Date utility library
- `react-day-picker 8.10.1` - Date picker component

#### Layout
- `react-resizable-panels 2.1.7` - Resizable panel components
- `@popperjs/core 2.11.8` - Positioning library
- `react-popper 2.3.0` - React wrapper for Popper.js

#### Other
- `cmdk 1.1.1` - Command menu component
- `next-themes 0.4.6` - Theme switching utility

### Configuration files

- **package.json** - Dependencies and scripts
- **vite.config.ts** - Vite configuration (build settings, path aliases)
- **postcss.config.mjs** - PostCSS configuration
- **/src/styles/tailwind.css** - Tailwind imports
- **/src/styles/theme.css** - Custom CSS variables and tokens
- **/src/styles/fonts.css** - Font imports
- **/src/styles/index.css** - Main stylesheet

---

## 3. PROJECT STRUCTURE

```
/
├── package.json                          # Dependencies and scripts
├── vite.config.ts                        # Vite configuration
├── postcss.config.mjs                    # PostCSS config
├── ATTRIBUTIONS.md                       # Attribution credits
├── notifications.md                      # Notification system documentation
├── app-logic.md                          # This file
├── /guidelines
│   └── Guidelines.md                     # Design guidelines
├── /src
│   ├── /app
│   │   ├── App.tsx                       # Main application component (entry point)
│   │   ├── routes.ts                     # React Router browser routes (+ /assets route)
│   │   ├── /assets
│   │   │   └── index.ts                  # Centralized asset catalog (29 named re-exports)
│   │   └── /components                   # All React components
│   │       ├── ActiveMeetingContext.tsx  # Meeting state provider (timer, mic, video, content sharing)
│   │       ├── AdditionalInfoLayer.tsx   # Raised hands, timers, alerts (pills disabled in on-the-go)
│   │       ├── AgendaTimerPanel.tsx      # Meeting agenda timer panel
│   │       ├── AssetDownloader.tsx      # Asset export/download utility (/assets route)
│   │       ├── BottomNav.tsx             # Bottom navigation bar
│   │       ├── CalendarPage.tsx          # Calendar page with meeting dock
│   │       ├── CameraContext.tsx        # Shared MediaStream provider (4 surfaces)
│   │       ├── ChatPanel.tsx             # Chat multitasking panel
│   │       ├── CollapsedInputBox.tsx     # Collapsed input (no keyboard)
│   │       ├── CopilotPanel.tsx          # Copilot AI assistant panel
│   │       ├── FocusMode.tsx             # Focus (active speaker) view
│   │       ├── FullscreenContentView.tsx # Immersive landscape shared content view
│   │       ├── Header.tsx                # Meeting header (hidden in split)
│   │       ├── HorizontalScrollContainer.tsx  # Scroll utility component
│   │       ├── IncomingAudioIndicator.tsx     # Active speaker visual
│   │       ├── KeyboardOverlay.tsx       # iOS keyboard simulation
│   │       ├── MeetingDock.tsx           # Out-of-meeting floating dock (calendar page)
│   │       ├── MeetingHeader.tsx         # Meeting info header (imperative show/hide)
│   │       ├── MeetingPage.tsx           # Main meeting orchestrator
│   │       ├── MeetingStage.tsx          # Main meeting gallery/split view
│   │       ├── MicActiveIndicator.tsx    # Mic on indicator (canonical)
│   │       ├── MicOffIndicator.tsx       # Mic off/muted indicator (canonical)
│   │       ├── MorePanel.tsx             # More menu panel (L2 navigation)
│   │       ├── MultitaskingPanel.tsx     # Base panel wrapper component
│   │       ├── NetworkIndicator.tsx      # Network strength indicator
│   │       ├── NotificationUFD.tsx       # UFD notification component (swipe-to-dismiss)
│   │       ├── NotificationsPanel.tsx    # Notification hub panel
│   │       ├── OnTheGoMode.tsx           # On-the-go minimized view (iOS audio picker)
│   │       ├── PageIndicator.tsx         # Purple dot page indicators (#968CFF)
│   │       ├── ParticipantsPanel.tsx     # Comprehensive participant list panel
│   │       ├── PreJoinPage.tsx           # Pre-join page (iOS audio picker, camera preview)
│   │       ├── RootLayout.tsx            # Root layout with ActiveMeetingProvider + StatusBar
│   │       ├── SelfVideoTile.tsx         # Floating self video tile
│   │       ├── SharedKeyboardOverlay.tsx # Shared keyboard component
│   │       ├── StatusBar.tsx             # iOS status bar + notch
│   │       ├── SwipeableViews.tsx        # Horizontal swipe container for 3 views
│   │       ├── VideoTile.tsx             # Individual participant tile
│   │       ├── /figma
│   │       │   └── ImageWithFallback.tsx # Image component with fallback (protected)
│   │       └── /ui                       # Reusable UI primitives (shadcn)
│   │           ├── accordion.tsx
│   │           ├── alert-dialog.tsx
│   │           ├── alert.tsx
│   │           ├── aspect-ratio.tsx
│   │           ├── avatar.tsx
│   │           ├── badge.tsx
│   │           ├── breadcrumb.tsx
│   │           ├── button.tsx
│   │           ├── calendar.tsx
│   │           ├── card.tsx
│   │           ├── carousel.tsx
│   │           ├── chart.tsx
│   │           ├── checkbox.tsx
│   │           ├── collapsible.tsx
│   │           ├── command.tsx
│   │           ├── context-menu.tsx
│   │           ├── dialog.tsx
│   │           ├── drawer.tsx
│   │           ├── dropdown-menu.tsx
│   │           ├── form.tsx
│   │           ├── hover-card.tsx
│   │           ├── input-otp.tsx
│   │           ├── input.tsx
│   │           ├── label.tsx
│   │           ├── menubar.tsx
│   │           ├── navigation-menu.tsx
│   │           ├── pagination.tsx
│   │           ├── popover.tsx
│   │           ├── progress.tsx
│   │           ├── radio-group.tsx
│   │           ├── resizable.tsx
│   │           ├── scroll-area.tsx
│   │           ├── select.tsx
│   │           ├── separator.tsx
│   │           ├── sheet.tsx
│   │           ├── sidebar.tsx
│   │           ├── skeleton.tsx
│   │           ├── slider.tsx
│   │           ├── sonner.tsx
│   │           ├── switch.tsx
│   │           ├── table.tsx
│   │           ├── tabs.tsx
│   │           ├── textarea.tsx
│   │           ├── toggle-group.tsx
│   │           ├── toggle.tsx
│   │           ├── tooltip.tsx
│   │           ├── use-mobile.ts
│   │           └── utils.ts
│   ├── /imports                          # Figma imported components and assets
│   │   ├── AdditionalInformationLayer.tsx
│   │   ├── BottomNav-*.tsx
│   │   ├── Chat*.tsx
│   │   ├── CoPilot*.tsx
│   │   ├── Frame*.tsx
│   │   ├── Header.tsx
│   │   ├── KeyboardOverlay*.tsx
│   │   ├── NotificationUfDs*.tsx
│   │   ├── Self*.tsx
│   │   ├── Stage.tsx
│   │   ├── VideoOff.tsx
│   │   └── svg-*.ts                      # SVG path data files (60+ files)
│   └── /styles
│       ├── index.css                     # Main stylesheet
│       ├── tailwind.css                  # Tailwind imports
│       ├── theme.css                     # CSS custom properties (design tokens)
│       └── fonts.css                     # Font imports (SF Pro Text/Display)
```

---

## 4. COMPONENT INVENTORY

### App (Router Shell)

**Purpose**: Root application component — thin shell that renders `RouterProvider`

**Location**: `/src/app/App.tsx`

**Props**: None (default export)

**State**: None (all state lives in route-level components)

**Layout Structure**:
```
Outer Container (100vw x 100vh, flex center, bg-black)
└── Mobile Frame (max-w-390px, max-h-844px, overflow-hidden)
    └── RouterProvider → RootLayout (Outlet)
        ├── CalendarPage (/ or /calendar)
        ├── PreJoinPage (/pre-join)
        └── MeetingPage (/meeting)
```

---

### RootLayout

**Purpose**: Wraps all route pages with `ActiveMeetingProvider` so meeting state persists across navigation

**Location**: `/src/app/components/RootLayout.tsx`

**Children/Composition**:
- `ActiveMeetingProvider` (context provider)
- `<Outlet />` (React Router child route)

---

### ActiveMeetingContext (Provider)

**Purpose**: Shared meeting state that persists across route navigation — powers the meeting dock on the calendar page, the elapsed timer, mic/video sync, and content-sharing persistence

**Location**: `/src/app/components/ActiveMeetingContext.tsx`

**Exported**:
- `ActiveMeetingProvider` — context provider component
- `useActiveMeeting()` — hook to consume meeting state & actions

**State** (`ActiveMeetingState`):
- `isActive`: `boolean` — whether a meeting is currently in progress
- `isBackgrounded`: `boolean` — whether the meeting is backgrounded (user navigated away)
- `meetingTitle`: `string` — meeting title
- `participantCount`: `number` — number of participants
- `isMicOn`: `boolean` — mic state (synced from MeetingPage / MeetingDock)
- `isVideoOn`: `boolean` — video state
- `isContentSharing`: `boolean` — whether content is being shared (persists across backgrounding)
- `startTime`: `number | null` — `Date.now()` timestamp when meeting started
- `elapsed`: `number` — seconds since meeting start (ticked every 1 000 ms via `setInterval`)

**Actions**:
- `startMeeting(title, participantCount)` — activates meeting, resets elapsed to 0
- `backgroundMeeting()` — sets `isBackgrounded = true`
- `returnToMeeting()` — sets `isBackgrounded = false`
- `endMeeting()` — resets all state to defaults
- `setMicOn(on)` / `setVideoOn(on)` / `setParticipantCount(count)` / `setContentSharing(sharing)` — granular setters

---

### CalendarPage

**Purpose**: Teams calendar day view with event cards, all-day events, time grid, and a "Join" button that either navigates to pre-join or returns to an in-progress backgrounded meeting

**Location**: `/src/app/components/CalendarPage.tsx`

**Route**: `/` (index) and `/calendar`

**Props**: None

**State**: None (reads from `useActiveMeeting()` and `useNavigate()`)

**Children/Composition**:
- `MeetingDock` (conditional — rendered when meeting is backgrounded)
- Navigation header with UV avatar + "March" title + Add icon
- Segmented control ("Agenda" / "Day" tabs)
- Day strip (S–S weekday row with date numbers, Wednesday 25 highlighted)
- All-day events strip (horizontal scroll)
- Time grid (8 AM–6 PM, 80px/hour, scrollable, current-time red line at 8:31 AM)
- `EventCard` sub-component for each calendar entry

**Key Features**:
- **Join button skip-pre-join**: When `meeting.isActive && meeting.isBackgrounded`, tapping "Join" calls `meeting.returnToMeeting()` + navigates to `/meeting` directly (no pre-join screen)
- **Normal join**: When no meeting is active, "Join" navigates to `/pre-join`
- **Event card variants**: Standard 78px cards (solid or striped RSVP bar), thin 18px cards (out-of-office), half-width overlapping cards
- **Color system**: `purple` (default), `green` (alt), `orange` (tentative), `activePurple` (in-progress — solid purple bg with white text + Join button)
- **MeetingDock overlay**: Appears as bottom sheet when meeting is backgrounded — renders via `<MeetingDock />` which internally checks `meeting.isActive && meeting.isBackgrounded`

**Assets Used**: SVG icons from `svg-az8d9yb2oz`, Add component from `/src/imports/Add`

---

### PreJoinPage

**Purpose**: Pre-join lobby screen where user configures video, mic, and audio output before joining a meeting

**Location**: `/src/app/components/PreJoinPage.tsx`

**Route**: `/pre-join`

**Props**: None

**State**:
- `isVideoOn`: `boolean` (default `false`) — camera toggle
- `isMicOn`: `boolean` (default `false`) — mic toggle
- `isConnecting`: `boolean` — "Connecting..." state after tap "Join now" (2 000 ms delay before navigating to `/meeting`)
- `showAudioPicker`: `boolean` — iOS context menu visibility
- `selectedAudio`: `string` (default `"phone"`) — selected audio output device
- `menuPos`: `{ bottom: number; right: number } | null` — dynamically computed menu position
- `stream`: `MediaStream | null` — real camera stream (requested via `getUserMedia`)
- `cameraError`: `boolean` — fallback if camera unavailable

**Refs**: `audioPickerRef`, `audioPopupRef`, `pageRef`, `speakerBtnRef`, `videoRef`

**Key Features**:
- **Real camera preview**: Requests `getUserMedia({ video })` on mount; displays mirrored live feed when video is on, UV purple initials circle when off
- **Mute tone feedback**: 400 Hz sine wave on mic toggle (same pattern as MeetingPage)
- **Self-tile card**: Rounded 12px card with video-on gradient overlays (top + bottom) or video-off static layout
- **Top bar**: "Background effects" link (left) + settings gear (right)
- **Controls row**: Video toggle + Mic toggle + Audio device picker
- **iOS Context Menu Audio Picker**: Identical to OnTheGoMode — frosted glass, hairline dividers, checkmark + device icon layout (see "iOS Context Menu Audio Picker" changelog section)
- **Join now button**: `bg-[#584bdf]`, transitions to `bg-[#1f157e]` + `<AnimatedDots />` ("Connecting...") on tap; navigates to `/meeting` after 2 000 ms
- **Back button**: X icon, navigates to `/calendar`
- **"More join options"**: Purple text button (non-functional placeholder)
- **Signed in text**: "Signed in as uvidyanta@xyz.com"

**Assets Used**: Self-tile image `640d5284...` (canonical), SVG icons from `svg-0tmtsigajy`, BottomNav paths from `svg-s62hwvor1z`, video-off paths from `svg-kyq22xtsb0`, Teams avatar mask from `svg-45iaa`

---

### MeetingPage (Main Meeting Orchestrator)

**Purpose**: Primary meeting screen orchestrating all meeting UI — header, AIL/UFD notifications, swipeable views (on-the-go / gallery / focus), split-screen multitasking panels, self video tile, bottom nav, and fullscreen content view

**Location**: `/src/app/components/MeetingPage.tsx`

**Route**: `/meeting`

**Props**: None

**State**:
- `activePanel`: `"chat" | "copilot" | "more" | "agenda" | "notifications" | null` — which split-screen panel is open
- `isVideoOn`: `boolean` (default `true`) — video camera state
- `isMicOn`: `boolean` (default `true`) — microphone state
- `isHeaderVisible`: `boolean` — meeting header visibility (auto-hides after 8 s)
- `activeEmoji`: `string | null` — currently displayed emoji reaction
- `isHandRaised`: `boolean` — user's hand raise state
- `isRecording`: `boolean` — recording status (set by demo automation)
- `hasLobbyGuests`: `boolean` — whether lobby guests are present
- `lobbyCount`: `number` — number of people waiting in lobby
- `notificationCounter`: `number` — unread notification count (incremented on arrival, decremented on hard dismiss)
- `morePanelInitialView`: `"main" | "participants"` — controls MorePanel's initial nested view
- `isContentSharing`: `boolean` — synced from `ActiveMeetingContext.isContentSharing`
- `isFullscreenContent`: `boolean` — immersive landscape mode
- `currentView`: `number` (default `1`) — 0: on-the-go, 1: gallery, 2: focus
- `raisedHands`: `Array<{ name: string }>` — raised hands list (demo: Sarah → Aadi K → Babak S → Miguel S)
- `currentNotification`: `Notification | null` — currently displayed UFD
- `notificationQueue`: `Notification[]` — queued UFDs

**Refs**: `headerRef` (MeetingHeaderHandle), `raisedHandsTimerRef`, `raisedHandsQueueRef`, `addedCountRef`, `notificationIdRef`, `notificationTimerRef`, `demoTimerRef`, `currentNotificationTypeRef`, `notificationQueueRef`, `seenNotificationTypesRef`, `currentNotificationRef`, `prevMicRef`

**Children/Composition**:
- `FullscreenContentView` (conditional — immersive landscape mode)
- `MeetingHeader` (conditional — hidden when panel active)
- `NotificationUFD` (conditional — shown when notification active, replaces AIL)
- `AdditionalInfoLayer` (conditional — shown when no notification; pills disabled in on-the-go)
- `SwipeableViews` → `OnTheGoMode` / `MeetingStage` / `FocusMode`
- `SelfVideoTile` (floating overlay, hidden in on-the-go mode)
- `BottomNav` (hidden in on-the-go mode; absolute bottom in gallery/focus)
- `ChatPanel` / `CopilotPanel` / `MorePanel` / `AgendaTimerPanel` / `NotificationsPanel` (conditional, split-screen)

**Layout Structure**:
```
Container (flex-col, h-full, bg-black)
├── FullscreenContentView (conditional — fills entire screen in landscape)
├── MeetingHeader (conditional, auto-show/hide)
├── UFD or AIL (shrink-0, h-86px for UFD)
│   └── AIL pills: disabled in on-the-go mode (currentView === 0)
├── SwipeableViews (flex-1, overflow-hidden)
│   ├── OnTheGoMode (index 0)
│   ├── MeetingStage (index 1) — gallery or split
│   └── FocusMode (index 2)
│   ├── SelfVideoTile (absolute, floating — hidden at index 0)
│   ├── Gradient Overlay (absolute bottom — hidden at index 0)
│   └── BottomNav (absolute bottom — hidden at index 0)
└── Panel (conditional: Chat/Copilot/More/Agenda/Notifications)
```

**Key Features**:
- **Pull-to-refresh prevention**: Custom touch event handling to prevent iOS pull-to-refresh
- **Notification queuing logic**: Priority-based system where critical notifications can interrupt informational ones (see `notifications.md`)
- **Sound feedback**: Mic toggle plays 400 Hz mute tone
- **Persistent state**: Chat and Copilot messages persist across panel open/close
- **Auto-dismiss timers**: Notifications soft-dismiss after 4 000 ms (preserved in hub; counter unchanged). Manual swipe/X is hard dismiss (removed from hub; counter decremented).
- **Dynamic raised hands**: Demo automation adds hands every 3 s (Sarah → Aadi K → Babak S → Miguel S)
- **Demo notification sequence**: Recording → Content sharing → Lobby → Interpreter → Background noise (staggered 4 s apart)
- **On-the-go auto-mute**: Entering on-the-go mode (`currentView === 0`) auto-mutes mic (plays mute tone) and turns off video
- **Non-interactive pills**: Timer and Notification pills pass `undefined` onClick in on-the-go mode
- **ActiveMeetingContext sync**: Syncs `isMicOn`, `isVideoOn`, `isContentSharing` to the shared context on every change
- **End call flow**: Navigates to `/calendar` via `meeting.endMeeting()` + `navigate("/calendar")`

**Assets Used**: Chat avatar images (Babak, Miguel, Jessica, Ray, Sarah) via `figma:asset`

---

### MeetingDock

**Purpose**: Floating bottom-sheet dock that appears on the Calendar page when a meeting is running in the background — shows elapsed timer, active speaker tile, self-tile, and mic/video/end controls

**Location**: `/src/app/components/MeetingDock.tsx`

**Props**: None (reads from `useActiveMeeting()`)

**Visibility**: Only renders when `meeting.isActive && meeting.isBackgrounded`

**State**:
- `isExpanded`: `boolean` (default `true`) — collapsed (pill) vs expanded (full dock) mode

**Key Features**:
- **Elapsed timer**: Reads `meeting.elapsed`, formats as `M:SS`, displays in header pill with green dot
- **Expandable/collapsible**: Drag handle or swipe-up/down to toggle; 300ms spring animation via Motion
- **Active speaker tile**: Miguel Silva avatar with `IncomingAudioIndicator`, "Aadi Kapoor's content" label when content sharing
- **Self-tile reactivity**: Conditional image vs UV initials based on `meeting.isVideoOn`; `MicActiveIndicator`/`MicOffIndicator` based on `meeting.isMicOn`
- **Controls**: Mic toggle, Video toggle, End call — all sync to `ActiveMeetingContext`
- **Swipe-to-collapse**: `useSwipeGesture` hook on tile area + drag handle
- **Tap navigation**: Tapping tiles calls `meeting.returnToMeeting()` + `navigate("/meeting")`
- **End call**: Plays 350 Hz leave sound, calls `meeting.endMeeting()`

**Assets Used**: Self-tile `640d5284...` (canonical), shared content `f3edab33...` (canonical), active speaker `685fc6dc...` (Miguel), SVG icons from `svg-dhve1aoycu`

---

### FullscreenContentView

**Purpose**: Immersive landscape view for shared content — rotated 90° with AIL, notification pill, and PiP self-tile

**Location**: `/src/app/components/FullscreenContentView.tsx`

**Props**:
- `onExitFullscreen`: `() => void` — callback to return to portrait meeting view
- `isMicOn`: `boolean` (default `true`) — mic state (carried from MeetingPage at entry time)
- `isVideoOn`: `boolean` (default `true`) — video state (carried from MeetingPage at entry time)

**Key Features**:
- **Landscape rotation**: `rotate(90deg)` transform with swapped width/height dimensions
- **Full-bleed shared content**: Background image fills entire rotated viewport
- **Exit button**: Top-left 44px black circle with collapse icon
- **Content label pill**: "Aadi Kapoor's content" — bottom-left
- **Notification pill**: Timer pill + notification indicators (recording dot, lobby icon, bell badge)
- **PiP self-tile**: Bottom-right corner, 64×84px, with `MicActiveIndicator`/`MicOffIndicator` (canonical), conditional image vs UV initials
- **Raised hands**: Top-center amber pill (same as AIL `RaisedHandsPill`)

**Assets Used**: Shared content `935052a8...` (NOTE: deviates from canonical `f3edab33...`), self-tile `640d5284...` (canonical)

---

### MeetingStage

**Purpose**: Main meeting view displaying participant video tiles in gallery or split-screen mode

**Location**: `/src/app/components/MeetingStage.tsx`

**Props**:
- `isSplit`: `boolean` - Whether in split-screen mode
- `onCollapseSplit`: `() => void` - Callback to collapse split screen

**State**: None (uses static participant data)

**Children/Composition**:
- `VideoTile` components (6 participants)
- `IncomingAudioIndicator` (used within VideoTile)

**Layout Structure**:

Gallery Mode (isSplit = false):
```
Container (bg-black, flex-col, h-full)
└── Scrollable Area (flex-1, overflow-y-auto, pb-100px)
    ├── Grid 2x2 (first 4 tiles, h-216px each)
    └── Stack (remaining tiles, h-218px each, full width)
```

Split Screen Mode (isSplit = true):
```
Container (bg-black, flex-col, h-full, pb-1)
└── Button (full size, clickable)
    └── VideoTile (single tile, h-full)
```

**Key Features**:
- **Participant sorting**: Active speakers appear first
- **Priority logic**: Shared content > Active speaker > First participant
- **Clickable split tile**: Tapping the single tile in split mode collapses back to gallery
- **Seamless transitions**: 300ms ease-out transitions between modes
- **Bottom padding**: 100px padding in gallery to prevent nav overlap

**Assets Used**: 6 participant avatar images (Aadi, Babak, Miguel, Jessica, Ray, Sarah)

---

### VideoTile

**Purpose**: Individual participant video tile with name label and active speaker indicator

**Location**: `/src/app/components/VideoTile.tsx`

**Props**:
- `participant`: Object with `{ id, name, video?, image, isActive }`
- `height`: `string` - Tailwind height class (e.g., "h-[216px]")

**State**: 
- `imageLoaded`: `boolean` - Tracks image load state
- `imageError`: `boolean` - Tracks image error state

**Children/Composition**:
- `IncomingAudioIndicator` (when isActive = true)

**Layout Structure**:
```
Container (relative, specified height, w-full, rounded-lg)
├── Video Element (if video prop exists, hidden until loaded)
├── Image Element (fallback, hidden when video loads)
├── Gradient Overlay (bottom, for name label)
└── Name Label (absolute bottom-left, text-white)
    └── IncomingAudioIndicator (if active)
```

**Key Features**:
- **Progressive enhancement**: Shows image immediately, overlays video when loaded
- **Error handling**: Falls back to image if video fails to load
- **Active speaker border**: 2px green (#37ef46) border when isActive
- **Gradient backdrop**: Semi-transparent gradient for name legibility
- **Rounded corners**: 8px border radius

---

### SelfVideoTile

**Purpose**: Floating self-view video tile with mic, network indicators, emoji reactions, and hand raise state

**Location**: `/src/app/components/SelfVideoTile.tsx`

**Props**:
- `isMicOn`: `boolean` - Microphone state
- `isVideoOn`: `boolean` - Camera state
- `isSplit`: `boolean` - Split screen mode (affects size/position)
- `activeEmoji`: `string | null` - Currently displayed emoji
- `isHandRaised`: `boolean` - Hand raise state

**State**: None

**Children/Composition**:
- `NetworkIndicator`
- `MicActiveIndicator` (when mic on)
- `MicOffIndicator` (when mic off)
- Emoji overlay (conditional)
- Hand raise indicator (conditional - yellow circle with ✋)

**Layout Structure**:
```
Container (absolute, transition all)
├── Gallery Mode: bottom-20, right-4, w-[120px], h-[157px]
└── Split Mode: bottom-[108px], right-4, w-[96px], h-[126px]
    └── Inner (relative, rounded-lg, overflow-hidden)
        ├── Background (gradient purple)
        ├── Bottom Indicators Row
        │   ├── NetworkIndicator (left)
        │   └── MicIndicator (right)
        ├── Emoji Overlay (absolute, size-[64px], centered)
        └── Hand Raise Indicator (absolute top-left)
```

**Key Features**:
- **Responsive sizing**: Different sizes for gallery vs split mode
- **Smooth transitions**: 300ms ease-out for size/position changes
- **Mic state icons**: Different icons for on/off states
- **Network strength**: Visual indicator for connection quality
- **Emoji reactions**: Large emoji overlay that auto-dismisses after 3s
- **Hand raise visual**: Yellow circular badge with hand emoji
- **Z-index layering**: Positioned above meeting stage (z-20)

**Assets Used**: SVG icons for mic/network states

---

### AdditionalInfoLayer

**Purpose**: Information banner showing raised hands, meeting timer, and system alerts (recording, lobby, notifications)

**Location**: `/src/app/components/AdditionalInfoLayer.tsx`

**Props**:
- `raisedHands`: `Array<{ name: string }>` - List of raised hands
- `timerMinutes`: `number` - Meeting duration in minutes
- `timerTopicName`: `string` - Meeting topic for timer pill
- `isRecording`: `boolean` - Recording state
- `lobbyCount`: `number` - Number waiting in lobby
- `notificationCount`: `number` - Unread notifications count
- `onTimerClick`: `() => void` (optional) - Timer pill tap handler; when `undefined`, pill is `disabled` with `pointer-events: none` and no active highlight
- `isTimerPressed`: `boolean` (optional) - Whether timer pill shows pressed/active state (`bg-[rgba(255,255,255,0.25)]`)
- `onNotificationClick`: `() => void` (optional) - Notification pill tap handler; when `undefined`, pill is `disabled` with `pointer-events: none` and no active highlight
- `isNotificationPressed`: `boolean` (optional) - Whether notification pill shows pressed/active state

**State**:
- `shouldMarquee`: `boolean` - Whether topic name should scroll
- Refs for measuring text overflow

**Children/Composition**:
- `RaisedHandsPill` (conditional - when raisedHands.length > 0)
- `TimerPill` (always visible)
- `NotificationPill` (conditional - when notificationCount > 0)
- Internal icon components: `BellIcon`, `RecordingIcon`, `LobbyIcon`, `RaisedHandIcon`

**Layout Structure**:
```
Container (px-8, py-4, flex-col, gap-4px)
├── Row 1: Raised Hands Pill (h-40px, conditional)
│   └── Content (bg-yellow-tint, rounded-full)
│       ├── Hand Icon (sticky left)
│       └── Scrollable Name List (ranked: "1 Sarah, 2 Aadi", etc.)
└── Row 2: Timer + Notifications (h-36px, flex-row, gap-4px)
    ├── Timer Pill (flex-1, bg-black-90, rounded-full)
    │   ├── Timer Badge (green gradient border, "13 min")
    │   └── Topic Name (marquee if overflow)
    └── Notification Pill (conditional, shrink-0, bg-black-90)
        ├── Recording Icon (red, if recording)
        ├── Lobby Icon (white, if lobbyCount > 0)
        └── Bell Icon + Badge (purple, if notificationCount > 0)
```

**Key Features**:
- **Two-state layout**: Single row (timer only) or double row (+raised hands)
- **Marquee animation**: Topic name scrolls horizontally if text overflows container
- **Dynamic raised hands**: Shows numbered list (1 Sarah, 2 Aadi, etc.) with horizontal scroll
- **Conditional elements**: Each alert icon only appears when relevant
- **Green gradient border**: Timer badge has animated 3-color gradient (5fff6e → 37ef46 → 2acc37)
- **Sticky hand icon**: Hand icon remains fixed while names scroll horizontally
- **Mutually exclusive with UFD**: Never displays simultaneously with NotificationUFD
- **Non-interactive mode**: When `onTimerClick` / `onNotificationClick` are `undefined`, the respective pill renders with `disabled={true}`, `pointer-events: none`, and no `active:` highlight classes — making it completely inert. Used in On-the-go mode (`currentView === 0`) to prevent accidental panel opens.

**Assets Used**: SVG icons for bell, recording, lobby, hand

---

### NotificationUFD

**Purpose**: User Facing Diagnostics notification system with two-state stacking (single or stacked with count)

**Location**: `/src/app/components/NotificationUFD.tsx`

**Props**:
- `icon`: `"recording" | "content-sharing" | "lobby" | "interpreter" | "background-noise"`
- `content`: `React.ReactNode` - Notification message text
- `action`: Object `{ type: "dismiss" | "button", label?, onClick? }`
- `onDismiss`: `() => void` - Dismiss callback
- `hasStack`: `boolean` - Whether there are queued notifications
- `stackCount`: `number` - Number of queued notifications

**State**: None

**Children/Composition**:
- Icon components: `RecordingIcon`, `ContentSharingIcon`, `LobbyIcon`, `InterpreterIcon`, `BackgroundNoiseIcon`, `DismissIcon`
- Background stacking card (conditional)
- Badge counter (conditional)

**Layout Structure**:
```
Container (bg-black, h-86px, px-16px)
├── justifyContent: hasStack ? "flex-start" : "center"
├── Background Card (absolute, conditional if hasStack)
│   └── Position: centered horizontally, bottom-0
│   └── Size: w-324.9px (90% of card), h-62px
│   └── Color: #4b4b4b
│   └── Peeks out 8px at bottom
├── Active UFD Card (relative, z-10, w-full, bg-#262626)
│   ├── Padding: 12px 16px
│   ├── Border: 1px solid #323232
│   ├── Shadow: 0px 4px 8px rgba(0,0,0,0.14)
│   ├── Badge Counter (absolute top-5px left-5px, conditional)
│   │   └── Size: h-12.8px, bg-purple #7f85f5
│   │   └── Text: "+{count}", 8.8px, black
│   └── Content Row (flex, gap-8px)
│       ├── Icon (shrink-0, size-24px)
│       ├── Text (flex-1, 13px, #e1e1e1)
│       └── Action Button (shrink-0)
└── Total height: Always 86px
```

**Key Features**:
- **Two-state system**: 
  - Single state: Notification centered vertically in 86px container
  - Stacked state: Notification at top, background card peeks 8px at bottom
- **Fixed container height**: Always 86px regardless of state
- **Purple badge counter**: Shows "+{count}" for queued notifications
- **Background card scaling**: 90% width of main card, creates depth effect
- **No animations**: Appears/disappears instantly per spec
- **Replaces AIL**: Mutually exclusive with AdditionalInfoLayer
- **4px gap**: 4px padding between notification and meeting tile (via parent pb-4px)

**Dismiss Semantics** (see `notifications.md § Dismiss Semantics: Hard vs Soft` for full specification):
- **Hard dismiss** (swipe gesture or X button): User has read the notification — notification is **removed** from `seenNotificationTypesRef`, pill counter is **decremented by 1**, and the notification does **not** enter the Notification Hub.
- **Soft dismiss** (4 000 ms auto-timer): User may have missed the notification — `seenNotificationTypesRef` is **unchanged**, pill counter is **unchanged**, and the notification **remains** in the Notification Hub for later review.
- **Status indicator independence**: Dismissing a UFD (hard or soft) has no effect on AIL status indicators (recording dot, lobby icon, raised hands, timer). These are driven by their own state sources.

**Assets Used**: SVG icons for recording, content sharing, lobby, interpreter, background noise, dismiss

---

### BottomNav

**Purpose**: Bottom navigation bar with video, mic, chat, more, and Copilot buttons

**Location**: `/src/app/components/BottomNav.tsx`

**Props**:
- `activePanel`: `"chat" | "copilot" | "more" | null`
- `onPanelToggle`: `(panel) => void`
- `isVideoOn`: `boolean`
- `isMicOn`: `boolean`
- `onVideoToggle`: `() => void`
- `onMicToggle`: `() => void`

**State**: None

**Children/Composition**:
- Icon components: `VideoIcon`, `MicIcon`, `ChatIcon`, `MoreIcon`, `CopilotIcon`

**Layout Structure**:
```
Container (px-4, py-4, flex-row, gap-12px)
├── Main Tab Bar (flex-1, bg-black-75, backdrop-blur, h-62px, rounded-full)
│   ├── Video Button (flex-1, h-54px)
│   ├── Mic Button (flex-1, h-54px)
│   ├── Chat Button (flex-1, h-54px, purple when active)
│   └── More Button (flex-1, h-54px, purple when active)
└── Copilot Button (shrink-0, size-62px, rounded-full, bg changes when active)
    └── Background: #584bdf when active, black-75 when inactive
```

**Key Features**:
- **Glassmorphism**: Semi-transparent black with backdrop-blur
- **Active states**: Chat and More buttons turn purple (#878BFB) when active
- **Copilot highlight**: Entire button background becomes purple (#584bdf) when Copilot open
- **Icon states**: Video and Mic icons change based on on/off state
- **Rounded pill design**: 999px border radius for full pill shape
- **Shadow**: Subtle 0px 2px 12px shadow for depth
- **Z-index layering**: z-20 in gallery, z-30 in split (overlays panel)

**Assets Used**: SVG icons for all 5 buttons, Copilot has gradient SVG

---

### ChatPanel

**Purpose**: Meeting chat interface with message history, typing indicators, and message input

**Location**: `/src/app/components/ChatPanel.tsx`

**Props**:
- `onClose`: `() => void` - Close panel callback
- `messages`: `Array<Message>` - Chat message array
- `setMessages`: `Dispatch<SetStateAction<Message[]>>` - Update messages

**State**:
- `isKeyboardOpen`: `boolean` - Keyboard visibility
- `messageText`: `string` - Current input text
- `isTyping`: `boolean` - Typing indicator state
- Refs: `scrollContainerRef`, `messagesEndRef`, `typingTimeoutRef`

**Children/Composition**:
- `MultitaskingPanel` (wrapper)
- `SharedKeyboardOverlay` (keyboard simulation)
- `CollapsedInputBox` (when keyboard closed)
- Message bubbles (dynamically rendered)
- Typing indicator (conditional)

**Layout Structure**:
```
MultitaskingPanel (wrapper)
└── Inner Container (flex-col, h-full, bg-#1c1c1e)
    ├── Header (h-56px, px-16px, flex-row)
    │   ├── Meeting Chat title (flex-1)
    │   └── Close button (size-48px)
    ├── Message List (flex-1, overflow-y-auto, px-16px, pb-8px)
    │   ├── Date divider (sticky top-0)
    │   ├── Message bubbles (sender + text + time)
    │   ├── Typing indicator (conditional)
    │   └── Spacer ref (for auto-scroll)
    ├── Input Box (collapsed, conditional when !keyboard)
    │   └── Shows "Message" placeholder, 44px height
    └── Keyboard Overlay (conditional when keyboard open)
        ├── Input area (text + send button)
        └── iOS keyboard simulation
```

**Key Features**:
- **Persistent state**: Messages persist across panel open/close (state lifted to App)
- **Auto-scroll**: Scrolls to bottom on mount (instant) and new messages (smooth)
- **Typing indicators**: Simulated typing indicator after user sends message
- **Auto-responses**: AI generates contextual responses from random participants
- **Message timing**: Current time stamp on send (e.g., "2:34 PM")
- **Keyboard simulation**: iOS keyboard overlay with SF Pro Text 17px
- **Date divider**: Sticky "Monday, Feb 9" divider at top
- **Avatar display**: Circular avatars for other participants, none for "You"
- **Bubble styling**: Gray bubbles for others, purple (#878BFB) for user
- **Media support**: Supports image attachments (structure exists, not fully implemented)
- **Typography**: SF Pro Text, Regular, 17px, -0.41px letter-spacing, 22px line-height

**Assets Used**: Chat avatar images (Aadi, Babak, Miguel, Jessica, Ray, Sarah)

---

### CopilotPanel

**Purpose**: AI assistant interface with conversation history and follow-up prompts

**Location**: `/src/app/components/CopilotPanel.tsx`

**Props**:
- `onClose`: `() => void` - Close panel callback
- `messages`: `Array<CopilotMessage>` - Conversation array
- `setMessages`: `Dispatch<SetStateAction<CopilotMessage[]>>` - Update messages

**State**:
- `isKeyboardOpen`: `boolean` - Keyboard visibility
- `inputText`: `string` - Current input text
- `isGenerating`: `boolean` - AI response loading state
- Refs: `messagesEndRef`

**Children/Composition**:
- `MultitaskingPanel` (wrapper)
- `SharedKeyboardOverlay` (keyboard simulation)
- `CollapsedInputBox` (when keyboard closed)
- Message bubbles (user and AI)
- Follow-up prompt pills (conditional)
- Loading indicator (conditional)

**Layout Structure**:
```
MultitaskingPanel (wrapper)
└── Inner Container (flex-col, h-full, bg-#1c1c1e)
    ├── Header (h-56px, px-16px, flex-row)
    │   ├── Copilot icon + title (flex-1)
    │   └── Close button (size-48px)
    ├── Message List (flex-1, overflow-y-auto, px-16px, pb-8px)
    │   ├── Empty State (conditional - when no messages)
    │   │   ├── Copilot logo (size-48px)
    │   │   └── "What can I help you with?" text
    │   ├── Message Thread
    │   │   ├── User Message (gray bubble)
    │   │   ├── AI Response (text, no bubble)
    │   │   └── Follow-up Prompts (3 pills, conditional)
    │   └── Loading Indicator (conditional when generating)
    ├── Input Box (collapsed, conditional when !keyboard)
    └── Keyboard Overlay (conditional when keyboard open)
```

**Key Features**:
- **Persistent state**: Conversation persists across panel open/close (state lifted to App)
- **Empty state**: Shows centered Copilot logo and prompt when no messages
- **Follow-up prompts**: AI provides 3 contextual follow-up questions after each response
- **Loading animation**: Animated dots while AI generates response
- **Auto-scroll**: Scrolls to bottom on new messages
- **Smart responses**: Context-aware AI responses based on meeting scenario
- **Prompt pills**: Tappable pills to quickly send follow-up questions
- **Keyboard simulation**: iOS keyboard overlay
- **Typography**: SF Pro Text, Regular, 17px, -0.41px letter-spacing, 22px line-height (matches chat)
- **Gradient Copilot icon**: Multicolor gradient icon in header

**Assets Used**: Copilot gradient SVG icon

---

### MorePanel

**Purpose**: Additional meeting controls including reactions, hand raise, recording, interpreter, and other settings

**Location**: `/src/app/components/MorePanel.tsx`

**Props**:
- `onClose`: `() => void` - Close panel callback
- `onEmojiClick`: `(emoji: string) => void` - Emoji reaction callback
- `onHandRaiseToggle`: `() => void` - Hand raise toggle callback
- `isHandRaised`: `boolean` - Hand raise state
- `onRecordToggle`: `() => void` - Recording toggle callback (triggers UFD)
- `onInterpreterToggle`: `() => void` - Interpreter toggle callback (triggers UFD)

**State**:
- `isRecording`: `boolean` - Recording state (local toggle)
- `isInterpreterOn`: `boolean` - Interpreter state (local toggle)

**Children/Composition**:
- `MultitaskingPanel` (wrapper)
- Action tiles (grid layout)
- Emoji reaction row (horizontal scroll)
- Toggle switches (for recording, interpreter)

**Layout Structure**:
```
MultitaskingPanel (wrapper)
└── Inner Container (flex-col, h-full, bg-#1c1c1e)
    ├── Header (h-56px, px-16px, flex-row)
    │   ├── "More" title (flex-1)
    │   └── Close button (size-48px)
    ├── Scrollable Content (flex-1, overflow-y-auto, px-16px, py-16px)
    │   ├── Section: Reactions (gap-8px)
    │   │   └── Emoji Grid (horizontal scroll, 8 emojis)
    │   ├── Divider (my-16px, border-white-10)
    │   ├── Section: Actions (gap-8px)
    │   │   ├── Raise Hand (toggle, purple when active)
    │   │   ├── People (participant list)
    │   │   └── Share (screen sharing)
    │   ├── Divider
    │   ├── Section: Settings (gap-8px)
    │   │   ├── Record (toggle with switch)
    │   │   ├── Interpreter (toggle with switch)
    │   │   └── Other settings...
    │   └── Divider
    └── (no keyboard in this panel)
```

**Key Features**:
- **Emoji reactions**: 8 emoji buttons (❤️, 👍, 👏, 😂, 😮, 🎉, ✋, 👎)
- **Hand raise toggle**: Purple highlight when active, integrates with AIL display
- **Recording toggle**: Triggers critical UFD notification on enable
- **Interpreter toggle**: Triggers informational UFD notification on enable
- **Switch controls**: iOS-style toggle switches for recording and interpreter
- **Scrollable sections**: Vertical scroll for all content
- **Section dividers**: Thin white lines with 10% opacity
- **Icon + label tiles**: Each action has icon, label, and optional right arrow
- **No keyboard**: This panel doesn't have text input

**Assets Used**: SVG icons for all actions, emoji as text characters

---

### MultitaskingPanel

**Purpose**: Reusable wrapper component for Chat, Copilot, and More panels with support for nested menu navigation

**Location**: `/src/app/components/MultitaskingPanel.tsx`

**Props**:
- `title`: `string | ReactNode` - Panel title displayed in header
- `onClose`: `() => void` - Close/back button callback
- `actionButton`: `ReactNode` (optional) - Optional action button on right side of header
- `children`: `ReactNode` - Panel content
- `footerComponent`: `ReactNode` (optional) - Optional footer component
- `showFooter`: `boolean` - Whether to display the footer (default: false)
- `isNestedView`: `boolean` - Whether this is a nested L2 menu view (default: false)

**State**: None

**Children/Composition**: Accepts any children

**Layout Structure**:
```
Container (flex-shrink-0, h-65vh, backdrop-blur, bg-#181818-98%, rounded-top)
├── Header (h-62px, flex-row, justify-between)
│   ├── Close/Back Button (w-44px, h-44px, rounded-full, glass effect)
│   │   ├── X icon (24px) - for L1 pages (Chat, Copilot, More, Timer, Notifications)
│   │   └── Left-chevron icon (24px) - for L2 nested menus (Meeting info, Meeting settings)
│   ├── Title (centered, SF Pro Text 17px)
│   └── Action Button (optional, w-44px, h-44px)
├── Scrollable Content (flex-1, overflow-y-auto)
│   └── Children (passed through)
├── Footer Component (optional, conditional on showFooter)
├── Divider (h-1px, bg-#323232)
└── Bottom Spacer (h-94px, for bottom nav overlay)
```

**Key Features**:
- **Fixed height**: 65vh (viewport height relative)
- **Positioned at bottom**: Used as bottom panel overlay
- **Rounded top corners**: 38px radius on top-left and top-right
- **Dark glassmorphic background**: Semi-transparent #181818 with backdrop-blur
- **Reusable**: All panels (Chat, Copilot, More, Timer, Notifications) use this wrapper
- **Glass effect button**: Close/back button has color-dodge blend mode with gradient background
- **Sticky header**: Header remains fixed during content scroll
- **Conditional icon rendering**: 
  - L1 pages (primary panels): X icon for closing the panel
  - L2 nested views: Left-chevron icon (rotated 90°) for back navigation
- **Visual distinction**: Icon change helps users understand navigation hierarchy

**Assets Used**: 
- SVG X icon from `svg-421nqr9b2v` (close icon)
- SVG chevron icon from `svg-r0bdvgj63w` (back icon, rotated 90° to point left)

---

### SharedKeyboardOverlay

**Purpose**: iOS keyboard simulation with text input and send button

**Location**: `/src/app/components/SharedKeyboardOverlay.tsx`

**Props**:
- `value`: `string` - Current input text
- `onChange`: `(value: string) => void` - Text change callback
- `onSend`: `() => void` - Send button callback
- `placeholder`: `string` - Input placeholder text

**State**: None (controlled component)

**Children/Composition**:
- `KeyboardOverlay` (visual keyboard component)

**Layout Structure**:
```
Container (flex-col)
├── Input Area (px-16px, py-12px, bg-#1c1c1e)
│   └── Input Row (flex-row, gap-8px)
│       ├── Text Input (flex-1, bg-#2c2c2e, rounded-18px)
│       │   └── SF Pro Text, 17px, -0.41px, lh-22px
│       └── Send Button (size-36px, bg-blue #007aff, rounded-full)
│           └── Arrow icon (white)
└── KeyboardOverlay (iOS keyboard visual)
    └── Height varies by keyboard type
```

**Key Features**:
- **Typography spec**: SF Pro Text, Regular, 17px, letter-spacing -0.41px, line-height 22px
- **Controlled input**: Value managed by parent component
- **Send button**: Blue circular button with up-arrow icon
- **iOS-style keyboard**: Visual representation of iOS keyboard below input
- **Dark theme**: Matches iOS dark mode keyboard appearance
- **Rounded input**: 18px border radius for input field

**Assets Used**: SVG arrow icon for send button

---

### CollapsedInputBox

**Purpose**: Collapsed message input box shown when keyboard is closed

**Location**: `/src/app/components/CollapsedInputBox.tsx`

**Props**:
- `onClick`: `() => void` - Click callback to open keyboard
- `placeholder`: `string` - Placeholder text (default: "Message")

**State**: None

**Children/Composition**: None (simple button)

**Layout Structure**:
```
Container (px-16px, py-8px, bg-#1c1c1e)
└── Button (w-full, h-44px, bg-#2c2c2e, rounded-22px)
    └── Placeholder text ("Message", gray-60)
```

**Key Features**:
- **Fixed height**: 44px tall
- **Full width**: Spans entire panel width (minus padding)
- **Click to expand**: Opens keyboard overlay when clicked
- **Placeholder styling**: Gray text (#9999998) indicating input purpose
- **Rounded corners**: 22px border radius

---

### MeetingHeader

**Purpose**: Meeting title and participant count header (hidden in split-screen mode)

**Location**: `/src/app/components/MeetingHeader.tsx`

**Props**:
- `onVisibilityChange`: `(visible: boolean) => void` - Visibility callback
- `participantCount`: `number` - Total participant count

**State**: None

**Children/Composition**: None

**Layout Structure**:
```
Container (h-44px, px-16px, flex-row, items-center, justify-between)
├── Meeting Title (flex-1, text-white, 20px, semibold)
│   └── "Teams Sync - Design Review"
└── Participant Count (text-gray, 13px)
    └── "{count} participants"
```

**Key Features**:
- **Conditional rendering**: Only shown when no panel is active (gallery mode)
- **Participant count**: Dynamically displays total count (gallery + self)
- **Typography**: SF Pro Display for title, SF Pro Text for count
- **Dark background**: Semi-transparent black

---

### StatusBar

**Purpose**: iOS status bar showing time, signal, wifi, battery

**Location**: `/src/app/components/StatusBar.tsx`

**Props**: None

**State**: None

**Children/Composition**: `NotchOverlay` (exported separately)

**Layout Structure**:
```
StatusBar (h-44px, flex-row, justify-between, px-16px)
├── Left: Time (white, 15px, semibold) "9:41"
├── Right: Status Icons
    ├── Signal strength (bars)
    ├── WiFi icon
    └── Battery icon

NotchOverlay (separate component)
└── Black rounded rectangle simulating iPhone notch
```

**Key Features**:
- **iOS standard**: Matches iOS status bar design
- **Fixed time**: Shows "9:41" (Apple's standard demo time)
- **Currently hidden**: Commented out in App.tsx but ready to enable

**Assets Used**: SVG icons for signal, wifi, battery

---

### VideoTile (Detailed)

See earlier section for full details. Key aspects:

**Layout**: Relative container with absolute positioned elements (video, image, gradient, label)

**Active Speaker**: Green border (#37ef46, 2px) and `IncomingAudioIndicator` animation

**Fallback Logic**: Image shows immediately, video overlays when loaded, reverts to image on error

---

### IncomingAudioIndicator

**Purpose**: Visual animation indicating active speaker

**Location**: `/src/app/components/IncomingAudioIndicator.tsx`

**Props**: None

**State**: None

**Layout**: Small green bars that animate up/down

**Key Features**:
- **Animation**: Bars scale vertically creating audio waveform effect
- **Color**: Green (#37ef46) matching active speaker border
- **Size**: Small, appears next to name label in VideoTile

---

### NetworkIndicator

**Purpose**: Shows network connection strength

**Location**: `/src/app/components/NetworkIndicator.tsx`

**Props**: 
- `strength`: `"excellent" | "good" | "poor"` (optional, defaults to "excellent")

**State**: None

**Layout**: 3 vertical bars of increasing height

**Key Features**:
- **Color coding**: Green (excellent), yellow (good), red (poor)
- **Visual feedback**: Number of filled bars indicates strength
- **Small footprint**: Fits in corner of self video tile

---

### MicActiveIndicator

**Purpose**: Visual indicator when microphone is active

**Location**: `/src/app/components/MicActiveIndicator.tsx`

**Props**: None

**State**: None

**Layout**: Microphone icon in white

**Key Features**:
- **Simple icon**: White mic icon
- **Clear visual**: Immediately recognizable
- **Positioned**: Bottom-right of self video tile

---

### MicOffIndicator

**Purpose**: Visual indicator when microphone is muted

**Location**: `/src/app/components/MicOffIndicator.tsx`

**Props**: None

**State**: None

**Layout**: Microphone icon with slash through it

**Key Features**:
- **Muted state**: Icon with diagonal slash
- **Red accent**: Uses red color to indicate muted state
- **Clear signal**: Unmistakable muted indicator

---

### HorizontalScrollContainer

**Purpose**: Utility component for horizontal scrolling sections

**Location**: `/src/app/components/HorizontalScrollContainer.tsx`

**Props**:
- `children`: `React.ReactNode`

**State**: None

**Layout**: Horizontal scroll container with hidden scrollbar

**Key Features**:
- **Smooth scrolling**: Touch-friendly horizontal scroll
- **Hidden scrollbar**: Clean appearance
- **Reusable**: Used in multiple contexts (emoji reactions, raised hands)

---

### KeyboardOverlay

**Purpose**: Full iOS keyboard visual simulation

**Location**: `/src/app/components/KeyboardOverlay.tsx`

**Props**:
- `variant`: keyboard layout variant (optional)

**State**: None

**Layout**: Grid of keyboard keys matching iOS layout

**Key Features**:
- **iOS authentic**: Matches iOS keyboard appearance
- **Dark mode**: Matches iOS dark keyboard theme
- **Non-functional**: Visual only (no actual key input)
- **Proper spacing**: Keys and gaps match iOS dimensions

---

## 5. LAYOUT ARCHITECTURE

### Main Application View (Gallery Mode)

```
Viewport (100vw x 100vh, flex center, bg-black)
└── Mobile Frame Container (max-w-390px, max-h-844px)
    └── Content Stack (absolute inset-0, flex-col)
        ├── MeetingHeader (h-44px, shrink-0)
        │   └── Title + Participant Count
        ├── AdditionalInfoLayer (h-auto, shrink-0, pb-4px)
        │   ├── Row 1: Raised Hands (h-40px, conditional)
        │   └── Row 2: Timer + Notifications (h-36px)
        ├── MeetingStage (flex-1, relative, overflow-hidden)
        │   ├── Scrollable Gallery (overflow-y-auto, pb-100px)
        │   │   ├── Grid 2x2 (first 4 tiles, h-216px each)
        │   │   └── Full-width tiles (remaining, h-218px each)
        │   ├── Gradient Overlay (absolute bottom-0, h-144px, pointer-events-none, z-10)
        │   ├── SelfVideoTile (absolute bottom-80px right-16px, w-120px h-157px, z-20)
        │   └── BottomNav (absolute bottom-0, w-full, z-20)
        │       └── Nav Bar (h-62px + padding = ~78px total)
        └── Home Indicator (absolute bottom-8px, w-128px h-4px, z-40)
```

**Key Layout Dimensions**:
- Mobile frame: 390px x 844px (iPhone dimensions)
- Meeting header: 44px height
- AIL height: Variable (40px if raised hands, 36px if not + 4px gap)
- Bottom nav: 62px bar + 16px padding = 78px total
- Self video gallery: 120px x 157px
- Video tiles gallery: First 4 are 216px, rest are 218px

**Spacing**:
- Gap between AIL and meeting tiles: 4px
- Gap between video tiles: 8px (2 in Tailwind)
- Bottom padding in gallery: 100px (prevents nav overlap)

---

### Main Application View (Split-Screen Mode)

```
Viewport (100vw x 100vh, flex center, bg-black)
└── Mobile Frame Container (max-w-390px, max-h-844px)
    └── Content Stack (absolute inset-0, flex-col)
        ├── MeetingHeader (HIDDEN - removed from layout)
        ├── UFD or AdditionalInfoLayer (h-86px or variable, shrink-0)
        ├── MeetingStage (flex-1, relative, transition 300ms)
        │   ├── Single Video Tile (h-full, clickable)
        │   └── SelfVideoTile (absolute bottom-108px right-16px, w-96px h-126px, z-20)
        │       └── Positioned above panel, smaller size
        ├── Panel Container (absolute bottom-0, w-full, h-444px, z-20)
        │   └── Chat/Copilot/More Panel (rounded-t-16px)
        │       ├── Header (h-56px)
        │       ├── Content (flex-1, scrollable)
        │       └── Input/Actions (h-variable)
        ├── BottomNav (absolute bottom-0, w-full, z-30)
        │   └── Overlays on top of panel
        └── Home Indicator (absolute bottom-8px, w-128px h-4px, z-40)
```

**Key Layout Dimensions**:
- Panel height: 444px (fixed)
- Panel overlaps meeting stage
- Meeting stage shows single tile only
- Self video split: 96px x 126px (smaller than gallery)
- Self video position: bottom-108px (above panel, below nav)

**Z-index Layering**:
1. Base: MeetingStage (z-0)
2. Meeting content: Gradient overlay (z-10)
3. Floating elements: SelfVideoTile (z-20)
4. Panels: Chat/Copilot/More (z-20)
5. Navigation: BottomNav (z-30 in split mode)
6. System UI: Home indicator (z-40)

---

### Panel Internal Layout (Chat & Copilot)

```
MultitaskingPanel Wrapper (absolute bottom-0, h-444px)
└── Panel Container (flex-col, h-full, bg-#1c1c1e)
    ├── Header (h-56px, shrink-0, px-16px)
    │   ├── Title + Icon (flex-1)
    │   └── Close Button (size-48px)
    ├── Message List (flex-1, overflow-y-auto, px-16px)
    │   ├── Messages (variable height)
    │   └── Auto-scroll anchor (ref)
    └── Input Section (shrink-0)
        ├── CollapsedInputBox (h-44px, when keyboard closed)
        └── SharedKeyboardOverlay (h-variable, when keyboard open)
            ├── Input Area (h-60px)
            └── Keyboard Visual (h-~290px)
```

**Keyboard Behavior**:
- Closed: Shows CollapsedInputBox (44px + 16px padding = 60px)
- Open: Shows SharedKeyboardOverlay (~350px total)
- Content area shrinks: `flex-1` on message list adapts to available space
- Auto-scroll: Messages scroll to bottom when keyboard opens

---

### Panel Internal Layout (More)

```
MultitaskingPanel Wrapper (absolute bottom-0, h-444px)
└── Panel Container (flex-col, h-full, bg-#1c1c1e)
    ├── Header (h-56px, shrink-0, px-16px)
    │   ├── "More" Title (flex-1)
    │   └── Close Button (size-48px)
    └── Scrollable Content (flex-1, overflow-y-auto, px-16px, py-16px)
        ├── Section: Reactions
        │   ├── Label (mb-8px)
        │   └── Emoji Grid (horizontal scroll)
        ├── Divider (my-16px, border-white-10)
        ├── Section: Actions
        │   ├── Raise Hand (h-56px, rounded-12px)
        │   ├── People (h-56px)
        │   └── Share (h-56px)
        ├── Divider
        ├── Section: Settings
        │   ├── Record (h-56px, with switch)
        │   ├── Interpreter (h-56px, with switch)
        │   └── Other tiles (h-56px each)
        └── (continues scrolling)
```

**No Keyboard**: More panel has no text input, so no keyboard overlay

---

### Notification UFD Layout

```
Container (bg-black, h-86px, w-full, px-16px)
├── justifyContent: center (single) or flex-start (stacked)
├── Background Card (absolute, conditional if stacked)
│   ├── Position: bottom-0, centered horizontally
│   ├── Size: w-324.9px (90% of card), h-62px
│   ├── Background: #4b4b4b
│   └── Transform: translateX(-50%) from left-50%
└── Active Card (relative, z-10, w-full)
    ├── Size: w-361px (full width minus padding), h-auto
    ├── Background: #262626
    ├── Border: 1px solid #323232
    ├── Padding: 12px 16px
    ├── Border-radius: 12px
    ├── Badge (absolute, top-5px, left-5px, if stacked)
    │   └── Size: h-12.8px, min-w-12.8px, bg-#7f85f5
    └── Content Row (flex, gap-8px, items-center)
        ├── Icon (shrink-0, size-24px)
        ├── Text (flex-1, 13px, #e1e1e1)
        └── Action (shrink-0, button or dismiss icon)
```

**Two States**:
1. **Single**: Card centered vertically in 86px container
2. **Stacked**: Card at top, background card peeks 8px at bottom, badge shows count

---

## 6. USER FLOWS & INTERACTIONS

### Flow 1: User Opens Chat from Gallery View

**Steps**:
1. User is in gallery mode viewing all participants
2. User taps "Chat" button in BottomNav
3. **Transition begins** (300ms ease-out):
   - MeetingHeader fades out and is removed
   - Gallery view collapses to show single active speaker tile
   - ChatPanel slides up from bottom (444px height)
   - SelfVideoTile shrinks (120x157 → 96x126) and repositions (bottom-80 → bottom-108)
4. ChatPanel is now visible with message history
5. User can scroll through previous messages
6. User taps collapsed input box
7. Keyboard overlay appears, content area shrinks
8. User types message
9. User taps send button
10. Message appears in chat, keyboard closes
11. Typing indicator appears
12. After 2-3 seconds, random participant responds
13. New message appears, auto-scrolls to bottom

**Screens Involved**: Gallery View → Split Screen (Chat)

**Components Involved**: App, MeetingStage, BottomNav, ChatPanel, SharedKeyboardOverlay, CollapsedInputBox

---

### Flow 2: User Raises Hand

**Steps**:
1. User opens More panel
2. User scrolls to "Raise hand" action
3. User taps "Raise hand" button
4. Button background becomes purple (#878BFB)
5. SelfVideoTile displays yellow hand badge
6. AdditionalInfoLayer adds "You" to raised hands list
7. Raised hands pill appears (if first hand) or updates count
8. User's name appears in scrolling list with rank number
9. User can tap "Raise hand" again to lower hand
10. Purple highlight removes, hand badge disappears, AIL updates

**Screens Involved**: Split Screen (More) → Gallery View (to see AIL)

**Components Involved**: MorePanel, SelfVideoTile, AdditionalInfoLayer

---

### Flow 3: Critical Notification Replaces Informational

**Steps**:
1. User enables "Interpreter" in More panel
2. Informational UFD appears: "Interpreter is on..."
3. UFD auto-dismisses after 5 seconds (or user dismisses)
4. During those 5 seconds, user enables "Record"
5. **Critical UFD immediately replaces** informational UFD
6. Recording notification appears: "Recording and transcription have started..."
7. Informational notification is discarded (never re-appears)
8. Critical UFD shows for 5 seconds or until dismissed
9. AdditionalInfoLayer returns after UFD dismisses

**Screens Involved**: Split Screen (More) → Gallery/Split with UFD

**Components Involved**: MorePanel, NotificationUFD, AdditionalInfoLayer, App (notification state)

---

### Flow 4: Multiple Critical Notifications Queue

**Steps**:
1. Critical notification #1 appears (e.g., "Recording started")
2. While notification #1 is showing, trigger critical notification #2
3. Notification #2 enters queue
4. UFD switches to **stacked state**:
   - Background card appears (90% width, peeks 8px)
   - Badge shows "+1" count
5. User can dismiss notification #1
6. Notification #2 immediately appears
7. If no more in queue, returns to single state
8. After all dismissed, AdditionalInfoLayer returns

**Screens Involved**: Any view with UFD

**Components Involved**: NotificationUFD, App (queue management)

---

### Flow 5: User Asks Copilot a Question

**Steps**:
1. User taps Copilot button (purple circular button)
2. BottomNav Copilot button background becomes purple (#584bdf)
3. CopilotPanel slides up (300ms transition)
4. Empty state shows: Copilot logo + "What can I help you with?"
5. User taps collapsed input box
6. Keyboard overlay appears
7. User types: "What are the key action items from this meeting?"
8. User taps send button
9. User message appears as gray bubble
10. Keyboard closes
11. Loading indicator appears (animated dots)
12. After 2 seconds, AI response appears
13. Response displays as plain text (no bubble)
14. Three follow-up prompts appear as purple pills
15. User can tap a pill to send that prompt immediately
16. Or user can type new question

**Screens Involved**: Gallery/Split → Split Screen (Copilot)

**Components Involved**: BottomNav, CopilotPanel, SharedKeyboardOverlay, App (message state)

---

### Flow 6: User Collapses Split Screen

**Steps**:
1. User is in split screen mode (any panel open)
2. User taps the single participant video tile in MeetingStage
3. **Transition begins** (300ms ease-out):
   - Panel slides down and disappears
   - Single tile expands to show full gallery
   - MeetingHeader fades in
   - SelfVideoTile grows (96x126 → 120x157) and repositions (bottom-108 → bottom-80)
4. Gallery view restored with all participants
5. User can scroll through participant tiles
6. BottomNav remains visible at bottom

**Alternative collapse method**: User can tap panel's Close button (X) for same effect

**Screens Involved**: Split Screen → Gallery View

**Components Involved**: MeetingStage, All panels (onClose), App (activePanel state), BottomNav

---

### Flow 7: User Sends Emoji Reaction

**Steps**:
1. User opens More panel
2. User sees Reactions section at top
3. User taps emoji (e.g., 👍)
4. Panel closes automatically (onEmojiClick callback)
5. SelfVideoTile displays large emoji overlay (size-64px, centered)
6. Emoji is semi-transparent, overlays video
7. After 3 seconds, emoji fades out and disappears
8. User can send another emoji anytime

**Screens Involved**: Split Screen (More) → Gallery/Split

**Components Involved**: MorePanel, SelfVideoTile, App (activeEmoji state)

---

## 7. BEHAVIORS & INTERACTIONS

### Hover States

**Note**: This is a touch-based mobile interface. No hover states are implemented. All interactions are tap/touch based.

---

### Click/Tap Interactions

#### BottomNav Buttons
- **Tap feedback**: No visual scale/ripple (iOS native style)
- **Video/Mic toggle**: Instant icon change, no animation
- **Mic toggle audio**: Plays tone (800Hz when enabling, 400Hz when disabling)
- **Chat/More active state**: Icon color changes to purple (#878BFB) when active
- **Copilot active state**: Entire button background becomes purple (#584bdf)
- **Panel toggle logic**: Tapping active button closes panel, tapping different button switches panels

#### Video Tiles
- **Split screen tile**: Tapping the single participant tile in split mode collapses to gallery
- **Gallery tiles**: No tap interaction in gallery mode (future: could show participant details)

#### Panel Close Button
- **X button**: Taps close button → triggers onClose → panel slides down → returns to gallery
- **Size**: 48px touch target for easy tapping
- **Position**: Top-right of panel header

#### Keyboard & Input
- **CollapsedInputBox**: Tap anywhere on box → opens keyboard
- **Send button**: Tap blue arrow → sends message → closes keyboard → scrolls to new message
- **Input field**: Tap to focus (already focused when keyboard opens)

#### More Panel Actions
- **Raise hand**: Tap toggles state, purple highlight when active
- **Recording toggle**: Tap switch → triggers UFD notification → local state updates
- **Interpreter toggle**: Tap switch → triggers UFD notification → local state updates
- **Emoji buttons**: Tap emoji → closes panel → shows emoji on self video for 3s

#### Copilot Follow-up Pills
- **Tap pill**: Immediately sends that prompt text → shows loading → shows response
- **No keyboard**: Pill tap bypasses keyboard, sends directly

#### UFD Actions
- **Dismiss button**: Tap X icon → dismisses current notification → shows next in queue
- **Action button**: Tap button (e.g., "Learn more") → executes onClick callback

---

### Animations

#### Panel Transitions
- **Duration**: 300ms
- **Easing**: ease-out
- **Properties**: height, opacity, transform
- **Direction**: Slides up from bottom (open), slides down to bottom (close)

#### Gallery to Split Transition
- **Duration**: 300ms
- **Easing**: ease-out
- **Simultaneous changes**:
  - Gallery tiles fade out and collapse
  - Single tile fades in and expands
  - Header fades out
  - Panel slides up
  - Self video shrinks and repositions
  - Bottom nav repositions (z-index changes)

#### UFD Notifications
- **Appearance**: No animation - instant display (per spec)
- **Dismissal**: No animation - instant removal (per spec)
- **State change**: Instant transition between single and stacked states
- **Auto-dismiss**: After 5000ms, instantly removes

#### Emoji Reaction
- **Appearance**: Instant display on self video tile
- **Display duration**: 3000ms
- **Dismissal**: Instant removal (no fade)

#### Typing Indicator
- **Dots animation**: Three dots animate in sequence (fade in/out)
- **Loop**: Continuous loop while isTyping = true
- **Implementation**: CSS keyframe animation

#### Marquee (AIL Timer Topic)
- **Trigger**: Only when text width > container width
- **Speed**: Smooth horizontal scroll
- **Loop**: Continuous loop with duplicated text
- **Implementation**: CSS keyframe animation or JS scroll

#### Auto-scroll (Chat/Copilot)
- **Trigger**: New message added to array
- **Behavior**: Smooth scroll to bottom
- **Method**: scrollIntoView({ behavior: 'smooth' })
- **Initial mount**: Instant scroll (behavior: 'auto')

---

### Form Behaviors

#### Chat Input
- **Focus**: Automatic when keyboard opens
- **Placeholder**: "Message" in gray (#999999)
- **Validation**: None - empty messages not sent (disabled send button logic)
- **Character limit**: None
- **Multi-line**: Single line (no textarea)
- **Enter key**: N/A (iOS keyboard, send button required)

#### Copilot Input
- **Focus**: Automatic when keyboard opens
- **Placeholder**: "Ask Copilot" in gray
- **Validation**: None
- **Empty prompt**: Send button still works (could ask empty question)
- **Character limit**: None

#### Typography Enforcement
- **All inputs**: SF Pro Text, Regular, 17px, letter-spacing -0.41px, line-height 22px
- **Enforced in**: ChatPanel, CopilotPanel, SharedKeyboardOverlay
- **Applies to**: User input text, placeholder text, message bubbles

---

### Loading States

#### Chat Typing Indicator
- **When**: After user sends message, before participant response
- **Display**: Three animated dots in gray bubble
- **Duration**: 2-3 seconds (randomized)
- **Position**: At end of message list
- **Auto-scroll**: Yes, scrolls to show typing indicator

#### Copilot Generating
- **When**: After user asks question, before AI response
- **Display**: "Generating response..." with animated dots
- **Duration**: 2 seconds (fixed)
- **Position**: At end of conversation
- **Auto-scroll**: Yes, scrolls to show loading state

#### Video Loading
- **Fallback**: Static image shows immediately
- **Video element**: Hidden until canplay event
- **Error handling**: If video fails, image remains visible
- **No spinner**: Uses immediate image fallback instead

---

### Scroll Behaviors

#### Meeting Gallery (Gallery Mode)
- **Direction**: Vertical scroll
- **Scrollable area**: MeetingStage container
- **Bottom padding**: 100px to prevent nav overlap
- **Scroll indicator**: Native iOS scrollbar (auto-hides)
- **Momentum**: Native iOS momentum scrolling
- **Pull-to-refresh**: **Disabled** via custom touch event handler

#### Chat/Copilot Message List
- **Direction**: Vertical scroll
- **Scrollable area**: Message list container (flex-1)
- **Auto-scroll**: Scrolls to bottom on new message
- **Sticky date divider**: Date header sticks to top while scrolling
- **Scroll-to-bottom**: Triggered on mount and new messages

#### More Panel
- **Direction**: Vertical scroll
- **Scrollable area**: Entire content section
- **Sections**: Reactions, Actions, Settings (stacked vertically)
- **Scroll indicator**: Native iOS scrollbar

#### Raised Hands Pill
- **Direction**: Horizontal scroll
- **Scrollable area**: Name list inside pill
- **Sticky element**: Hand icon remains fixed on left
- **Scrollbar**: Hidden (scrollbar-hide class)
- **Touch scroll**: Swipe left/right to reveal more names

#### Emoji Reactions Row
- **Direction**: Horizontal scroll
- **Scrollable area**: Emoji grid in More panel
- **Scrollbar**: Hidden
- **Touch scroll**: Swipe left/right (though 8 emojis likely fit)

---

## 8. ROUTING & NAVIGATION

**Routing**: None - Single page application with no URL routing

**Navigation Pattern**: Panel-based multitasking with state management

**State-based Views**:
- `activePanel = null` → Gallery view
- `activePanel = "chat"` → Split screen with Chat panel
- `activePanel = "copilot"` → Split screen with Copilot panel
- `activePanel = "more"` → Split screen with More panel

**Navigation Methods**:
1. **BottomNav buttons**: Toggle panels on/off
2. **Panel close button**: Returns to gallery view
3. **Tap meeting stage**: In split mode, collapses to gallery

**No URL changes**: All navigation is in-memory state changes

---

## 9. STATE MANAGEMENT & DATA FLOW

### Global State (App Component)

**UI State**:
- `activePanel`: Controls which panel is open
- `isVideoOn`: Video camera state
- `isMicOn`: Microphone state
- `isHeaderVisible`: Meeting header visibility (syncs with activePanel)
- `activeEmoji`: Currently displayed emoji reaction
- `isHandRaised`: User's hand raise state

**Notification State**:
- `currentNotification`: The notification currently displayed
- `notificationQueue`: Array of queued notifications
- `notificationIdRef`: Counter for unique IDs
- `notificationTimerRef`: Timeout reference for auto-dismiss

**Persistent Panel State**:
- `chatMessages`: Array of all chat messages (persists across open/close)
- `copilotMessages`: Array of Copilot conversation (persists across open/close)

### Local Component State

#### ChatPanel
- `isKeyboardOpen`: Keyboard visibility
- `messageText`: Current input text
- `isTyping`: Typing indicator state
- `typingTimeoutRef`: Timeout for typing indicator
- `scrollContainerRef`: Ref for message list
- `messagesEndRef`: Ref for auto-scroll anchor

#### CopilotPanel
- `isKeyboardOpen`: Keyboard visibility
- `inputText`: Current input text
- `isGenerating`: AI response loading state
- `messagesEndRef`: Ref for auto-scroll anchor

#### MorePanel
- `isRecording`: Local recording state (for switch UI)
- `isInterpreterOn`: Local interpreter state (for switch UI)

#### AdditionalInfoLayer (TimerPill)
- `shouldMarquee`: Whether text should scroll
- `textContainerRef`: Ref for container width measurement
- `textRef`: Ref for text width measurement

#### VideoTile
- `imageLoaded`: Image load status
- `imageError`: Image error status

### Data Flow Patterns

#### Opening a Panel
```
User taps Chat button
→ BottomNav calls onPanelToggle("chat")
→ App updates activePanel state to "chat"
→ React re-renders:
  → MeetingHeader conditional removes it
  → MeetingStage receives isSplit={true}
    → Switches to single tile layout
  → SelfVideoTile receives isSplit={true}
    → Shrinks and repositions
  → ChatPanel conditional renders it
    → Receives messages and setMessages props
  → BottomNav repositions (z-index changes)
```

#### Sending a Chat Message
```
User types "Hello" and taps send
→ SharedKeyboardOverlay calls onChange (updates local messageText)
→ User taps send → calls onSend
→ ChatPanel.handleSendMessage executes:
  → Creates new message object with timestamp
  → Calls setMessages (updates App state)
  → Clears local messageText
  → Sets isKeyboardOpen to false
→ App state updates chatMessages array
→ ChatPanel receives new messages prop
→ useEffect detects change
  → Scrolls to bottom
  → Sets isTyping to true
  → After timeout, generates response
    → Calls setMessages again with AI response
→ Cycle repeats for AI message
```

#### Triggering UFD Notification
```
User enables Recording in More panel
→ MorePanel calls onRecordToggle (passed from App)
→ App.handleRecordToggle executes:
  → Calls triggerNotification with notification data
→ App.triggerNotification logic:
  → Checks current notification type vs new type
  → Applies priority rules:
    - If informational showing and critical arrives: replace immediately
    - If critical showing and informational arrives: discard
    - If critical showing and critical arrives: add to queue
  → Updates currentNotification or notificationQueue state
→ useEffect monitors notification state:
  → Starts 5-second auto-dismiss timer
  → When timer expires, sets currentNotification to null
  → If queue has items, pops next and displays
→ React re-renders:
  → AdditionalInfoLayer conditional hides
  → NotificationUFD conditional renders
    → Receives icon, content, action, hasStack, stackCount props
    → Renders single or stacked state based on hasStack
```

#### Raising Hand
```
User taps "Raise hand" in More panel
→ MorePanel calls onHandRaiseToggle (passed from App)
→ App.handleHandRaiseToggle executes:
  → Toggles isHandRaised state
→ App recomputes raisedHands array:
  → Static list + conditional "You" entry
→ React re-renders:
  → SelfVideoTile receives isHandRaised={true}
    → Shows yellow hand badge
  → AdditionalInfoLayer receives updated raisedHands array
    → Shows or updates raised hands pill
    → "You" appears in ranked list
```

### Props Drilling

**Multi-level prop passing**:
- App → ChatPanel → SharedKeyboardOverlay (message text, onChange, onSend)
- App → MeetingStage → VideoTile (participant data, isSplit)
- App → SelfVideoTile (isMicOn, isVideoOn, isSplit, activeEmoji, isHandRaised)
- App → BottomNav (activePanel, isVideoOn, isMicOn, all toggle callbacks)

**Callback prop passing**:
- App passes callbacks down to panels (onClose, onEmojiClick, onHandRaiseToggle, onRecordToggle, onInterpreterToggle)
- Panels execute callbacks → triggers state updates in App → props flow back down

**No Context API**: All state managed with useState in App, passed via props

---

## 10. BUSINESS LOGIC & RULES

### Validation Rules

#### Chat Input
- **Empty messages**: Technically allowed, but no actual validation prevents sending empty text
- **Whitespace**: No trim or validation on whitespace-only messages

#### Copilot Input
- **Empty prompts**: Allowed (AI can respond to empty input)
- **No length limits**: No maximum character validation

#### General
- **No email/phone validation**: Not applicable to this prototype
- **No XSS prevention**: Prototype accepts raw text (production would need sanitization)

---

### Conditional Logic

#### MeetingHeader Display
```
if (activePanel === null) {
  // Show header
} else {
  // Hide header
}
```

#### UFD vs AIL Display
```
if (currentNotification exists) {
  // Show NotificationUFD
  // Hide AdditionalInfoLayer
} else {
  // Hide NotificationUFD
  // Show AdditionalInfoLayer
}
```

#### Raised Hands Pill Display
```
if (raisedHands.length > 0) {
  // Show raised hands pill in row 1
} else {
  // Don't render row 1
}
```

#### Notification Pill Display
```
if (notificationCount > 0) {
  // Show notification pill
} else {
  // Don't render pill
}
```

#### UFD Stacked State
```
if (notificationQueue.filter(n => n.type === "critical").length > 0) {
  // hasStack = true
  // Show background card
  // Show badge counter
} else {
  // hasStack = false
  // Single notification only
}
```

#### Bottom Nav Position
```
if (activePanel === null) {
  // Gallery mode: Inside MeetingStage, z-20
} else {
  // Split mode: Overlay on panel, z-30
}
```

#### Self Video Size & Position
```
if (isSplit) {
  // w-96px, h-126px, bottom-108px
} else {
  // w-120px, h-157px, bottom-80px
}
```

#### Meeting Stage Layout
```
if (isSplit) {
  // Show single active speaker tile
  // Make tile clickable to collapse
} else {
  // Show all participants in gallery
  // 2x2 grid for first 4, full width for rest
}
```

---

### Notification Priority Rules

**Rule 1**: Critical notification can interrupt informational
```
if (currentNotification.type === "informational" && incomingNotification.type === "critical") {
  // Replace immediately
  clearTimeout(timer);
  setCurrentNotification(incomingNotification);
  startNewTimer();
}
```

**Rule 2**: Informational cannot interrupt critical
```
if (currentNotification.type === "critical" && incomingNotification.type === "informational") {
  // Discard informational
  return;
}
```

**Rule 3**: Critical notifications queue behind critical
```
if (currentNotification.type === "critical" && incomingNotification.type === "critical") {
  // Add to queue
  setNotificationQueue([...queue, incomingNotification]);
}
```

**Rule 4**: Auto-dismiss after 5 seconds
```
setTimeout(() => {
  setCurrentNotification(null);
}, 5000);
```

**Rule 5**: Manual dismiss clears current, shows next
```
onDismiss() {
  clearTimeout(timer);
  setCurrentNotification(null);
  // useEffect detects null and loads next from queue
}
```

---

### Calculations

#### Participant Count
```javascript
const totalParticipants = participants.length + 1;
// Gallery participants (6) + self (1) = 7 total
```

#### Active Speaker Sorting
```javascript
const sortedParticipants = [...participants].sort((a, b) => {
  if (a.isActive && !b.isActive) return -1;
  if (!a.isActive && b.isActive) return 1;
  return 0;
});
// Active speakers appear first in array
```

#### Split Screen Tile Selection
```javascript
const getSplitScreenTile = () => {
  if (hasSharedContent) {
    return sharedContent; // Priority 1: Shared content
  }
  const activeSpeaker = sortedParticipants.find(p => p.isActive);
  return activeSpeaker || sortedParticipants[0]; // Priority 2: Active speaker, fallback to first
};
```

#### Notification Queue Count
```javascript
const criticalCount = notificationQueue.filter(n => n.type === "critical").length;
// Only count critical notifications for badge (informational discarded)
```

#### Marquee Trigger (AIL Timer)
```javascript
const containerWidth = textContainerRef.current.offsetWidth;
const textWidth = textRef.current.scrollWidth;
setShouldMarquee(textWidth > containerWidth);
// Only enable marquee if text overflows container
```

#### Message Timestamp
```javascript
const time = new Date().toLocaleTimeString('en-US', { 
  hour: 'numeric', 
  minute: '2-digit' 
});
// Formats as "2:34 PM"
```

#### Unique Message ID
```javascript
messageIdCounter++;
const id = Date.now() * 1000 + messageIdCounter;
// Combines timestamp with counter for uniqueness
```

---

### Permissions & Authorization

**Not applicable** - This is a prototype with no authentication or authorization logic.

All features are accessible to the single simulated user.

---

## 11. ICONS & ASSETS

### Icon Inventory

#### UFD Notification Icons
- **Recording Icon** (24x24px) - Red circle with white exclamation mark (#CC4A31)
  - Used in: NotificationUFD
  - File: svg-uy4cmpux52.ts (p3e114300)
- **Content Sharing Icon** (23.514x23.514px) - White monitor/screen icon
  - Used in: NotificationUFD
  - File: svg-uy4cmpux52.ts (p2ca1be00)
- **Lobby Icon** (23.514x23.514px) - White person silhouette
  - Used in: NotificationUFD
  - File: svg-uy4cmpux52.ts (p3bf59e00)
- **Interpreter Icon** (23.514x23.514px) - White language/translation icon
  - Used in: NotificationUFD
  - File: svg-uy4cmpux52.ts (p26e0c200)
- **Background Noise Icon** (23.514x23.514px) - White sound wave icon
  - Used in: NotificationUFD
  - File: svg-uy4cmpux52.ts (p1fb43b00)
- **Dismiss Icon** (20x20px) - White X close icon
  - Used in: NotificationUFD
  - File: svg-uy4cmpux52.ts (p31168500)

#### AIL (Additional Info Layer) Icons
- **Bell/Shield Icon** (16x16px) - Purple notification bell (#7F85F5)
  - Used in: AdditionalInfoLayer (NotificationPill)
  - File: svg-unik707tki.ts (p1a5b6770)
- **Recording Alert Icon** (16x16px) - Red circle with white exclamation (#CC4A31)
  - Used in: AdditionalInfoLayer (NotificationPill)
  - File: svg-unik707tki.ts (p22389000)
- **Lobby Guest Icon** (16x16px) - White person silhouette (#E1E1E1)
  - Used in: AdditionalInfoLayer (NotificationPill)
  - File: svg-unik707tki.ts (p38f1da00)
- **Raised Hand Icon** (24x24px) - Yellow hand emoji (#FFB900)
  - Used in: AdditionalInfoLayer (RaisedHandsPill)
  - File: svg-7ie24l3a57.ts (p2bb78e00)

#### Bottom Nav Icons
- **Video On Icon** (24x28px) - White video camera
  - Used in: BottomNav (VideoIcon)
  - File: svg-s62hwvor1z.ts (p2ab58800)
- **Video Off Icon** (24x28px) - White video camera with slash
  - Used in: BottomNav (VideoIcon)
  - File: svg-kyq22xtsb0.ts (p3ba5cb80)
- **Mic On Icon** (24x24px) - White microphone
  - Used in: BottomNav (MicIcon)
  - File: svg-s62hwvor1z.ts (p29d99a70, p182626f0)
- **Mic Off Icon** (24x24px) - White microphone with slash
  - Used in: BottomNav (MicIcon)
  - File: svg-s62hwvor1z.ts (same paths + slash overlay)
- **Chat Icon** (28x28px) - White/Purple speech bubble
  - Used in: BottomNav (ChatIcon)
  - File: svg-s62hwvor1z.ts (p1e92dd00 inactive, pb877400 active)
- **More Icon** (28x28px) - White/Purple three dots
  - Used in: BottomNav (MoreIcon)
  - File: svg-s62hwvor1z.ts (p8afa600)
- **Copilot Icon** (24x24px) - Multicolor gradient icon
  - Used in: BottomNav (CopilotIcon)
  - File: svg-s62hwvor1z.ts (p16a963f0, p22760380, p2ecce500, p30395c00)
  - Contains 5 gradient definitions (radial and linear)

#### Self Video Tile Icons
- **Mic Active Indicator** - Small white mic icon
  - Used in: SelfVideoTile (via MicActiveIndicator component)
  - Size: Scaled to fit indicator area
- **Mic Off Indicator** - Small red mic with slash
  - Used in: SelfVideoTile (via MicOffIndicator component)
  - Size: Scaled to fit indicator area
- **Network Indicator** - Signal strength bars
  - Used in: SelfVideoTile (via NetworkIndicator component)
  - Three bars with variable fill based on strength

#### Other Icons
- **Close Button (X)** - Simple X close icon
  - Used in: All panel headers (Chat, Copilot, More)
  - Size: Fits within 48x48px touch target
  - Color: White
- **Send Button Arrow** - Up arrow icon
  - Used in: SharedKeyboardOverlay send button
  - Color: White
  - Size: ~16px inside 36px button
- **Incoming Audio Indicator** - Animated waveform bars
  - Used in: VideoTile (active speaker)
  - Color: Green (#37ef46)
  - Animation: Vertical scale

---

### Images & Media

#### Participant Avatars (Raster Images)
All imported via `figma:asset` scheme (Figma-specific import):

1. **Aadi Kapoor** - `figma:asset/3c32350895790815d4b2b05b8bfa873d40c997c2.png`
   - Used in: MeetingStage (VideoTile), ChatPanel (message avatar)
   
2. **Babak Shammas** - `figma:asset/6900c5f1ebcee87405a464dc927c93633e66e145.png`
   - Used in: MeetingStage (VideoTile), ChatPanel (message avatar)
   - **NOTE**: Variable name `imgBabak` but contains Sarah Johnson's photo (see Avatar Swapping section)
   
3. **Miguel Silva** - `figma:asset/685fc6dc030aab2cbea5b15f523d9ce42c11d689.png`
   - Used in: MeetingStage (VideoTile), ChatPanel (message avatar)
   
4. **Jessica Kline** - `figma:asset/3b6bf95da1f13af67c0b3a5e3c9534b640591ce5.png`
   - Used in: MeetingStage (VideoTile), ChatPanel (message avatar)
   
5. **Ray Tanaka** - `figma:asset/a55a7173204f1d7f74adab6c38113bc9eedbb180.png`
   - Used in: MeetingStage (VideoTile), ChatPanel (message avatar)
   
6. **Sarah Johnson** - `figma:asset/503fddd74dcc978ba951b5c79ebe96b95453b1eb.png`
   - Used in: MeetingStage (VideoTile), ChatPanel (message avatar)
   - **NOTE**: Variable name `imgSarah` but contains Babak Shammas's photo (see Avatar Swapping section)

**Format**: PNG
**Usage**: Displayed in video tiles and chat message bubbles
**Size**: Varies (scaled to fit containers)

#### Self-Tile Image (Udayan Vidyanta — Canonical Asset)

All components rendering the self-view / "You" tile **must use the same canonical Figma asset**:

- **Canonical asset**: `figma:asset/640d5284dbe6da2945d294258d914788ad82cac7.png`

| Component | Variable Name | Asset Hash | Status |
|---|---|---|---|
| `SelfVideoTile.tsx` | `imgSelf` | `640d5284...` | ✅ Canonical (source of truth) |
| `PreJoinPage.tsx` | `imgSelf` | `640d5284...` | ✅ Matches |
| `MeetingDock.tsx` | `imgSelfView` | `640d5284...` | ✅ Matches |
| `FullscreenContentView.tsx` | `imgSelf` | `640d5284...` | ✅ Matches |

**Rule**: When adding or modifying any component that renders the user's self-view, always import and use `figma:asset/640d5284dbe6da2945d294258d914788ad82cac7.png`.

#### Shared Content Image (Canonical Asset)

All components rendering the shared content slide **must use the same canonical Figma asset**:

- **Canonical asset**: `figma:asset/f3edab3305d6980218cc52719020bc598b4a6331.png`

| Component | Variable Name | Asset Hash | Status |
|---|---|---|---|
| `MeetingStage.tsx` | `imgSharedContent` | `f3edab33...` | ✅ Canonical (source of truth) |
| `FocusMode.tsx` | `imgSharedContent` | `f3edab33...` | ✅ Matches |
| `FullscreenContentView.tsx` | `imgSharedContent` | `935052a8...` | ❌ **Deviates** — should be updated to `f3edab33...` |
| `MeetingDock.tsx` | `imgSharedContent` | `f3edab33...` | ✅ Matches |

**Rule**: When adding or modifying any component that renders the shared presentation content, always import and use `figma:asset/f3edab3305d6980218cc52719020bc598b4a6331.png`.

#### Placeholder Shared Content
- **Unsplash business chart image** - https://images.unsplash.com/photo-1551288049-bebda4e38f71
- Used in: MeetingStage (shared content placeholder - currently hasSharedContent = false)
- Format: JPG via Unsplash CDN
- Size: 800px width

---

### Self-Tile State Reactivity

**Rule**: Every component that renders the user's self-tile **must** be reactive to the current `isMicOn` and `isVideoOn` state. When video/mic controls are toggled (from BottomNav, MeetingDock controls, OnTheGoMode buttons, or any other source), the self-tile's visual state must update accordingly:

- **Video ON**: Show the live camera feed (or the canonical placeholder image `640d5284...` as a fallback)
- **Video OFF**: Show the "UV" initials avatar (purple `#5b5fc7` circle with white "UV" text) instead of the camera/image
- **Mic ON**: Show `MicActiveIndicator` (green `#37EF46` mic icon badge)
- **Mic OFF**: Show `MicOffIndicator` (red `#FF5F3D` mic-slash icon badge)

#### Compliance Status

| Component | Self-tile location | Mic indicator reactive? | Video state reactive? | Status |
|---|---|---|---|---|
| `SelfVideoTile.tsx` | Floating overlay in meeting | ✅ `MicActiveIndicator`/`MicOffIndicator` | ✅ Camera feed vs UV initials | ✅ Source of truth |
| `OnTheGoMode.tsx` `SelfTileCentered` | Centered in on-the-go view | ❌ No mic indicator rendered (dead imports) | ❌ Always UV initials | ✅ **By design** — On-the-go mode forces video off; mic state shown in separate status row below tile, not as a tile badge |
| `MeetingDock.tsx` self-tile | Right tile in expanded dock | ✅ `MicActiveIndicator`/`MicOffIndicator` via canonical components | ✅ Image vs UV initials based on `meeting.isVideoOn` | ✅ **Fixed** |
| `FullscreenContentView.tsx` PiP | Bottom-right of landscape view | ✅ `MicActiveIndicator`/`MicOffIndicator` via canonical components | ✅ Image vs UV initials based on `isVideoOn` prop | ✅ **Fixed** — state carried over from MeetingPage at time of entering fullscreen |
| `PreJoinPage.tsx` | Pre-join camera preview | N/A (no mic indicator on pre-join) | ✅ Shows image placeholder | ✅ OK (pre-join context) |

---

### Active Speaker Border & Audio Indicator Rules

**Rule**: The purple active-speaker border (`border-[#878bfb]`) and the `IncomingAudioIndicator` animated waveform are **only** applied to tiles representing an **active speaker** (a participant whose audio is currently being received). They must **never** appear on shared-content tiles.

| Visual element | Active speaker tile | Shared content tile |
|---|---|---|
| Purple outer border (`border-[#878bfb]`) | ✅ Yes | ❌ No |
| Inner dark border (`border-[#3e33b3]`) | ✅ Yes (inset inside purple border) | ❌ No |
| `IncomingAudioIndicator` waveform | ✅ Yes (next to name label) | ❌ No |

**Rationale**: Shared content is not a person speaking — it is a screen/window being presented. Decorating it with speaker-specific affordances (border glow, audio waveform) is misleading. The content-sharing pill label ("Aadi Kapoor's content") already identifies the tile's purpose.

#### Compliance Status

| Component | Tile type | Purple border? | Audio indicator? | Status |
|---|---|---|---|---|
| `VideoTile.tsx` | Active speaker in gallery | ✅ Green `#37ef46` border (uses `isActive` prop) | ✅ `IncomingAudioIndicator` | ✅ Correct |
| `MeetingDock.tsx` shared content tile | Shared content in dock | ❌ Removed | ❌ None | ✅ **Fixed** |
| `MeetingDock.tsx` self-view tile | Self-view in dock | ❌ No border (self-tile) | ❌ No (has `MicActiveIndicator`/`MicOffIndicator` instead) | ✅ Correct |
| `FocusMode.tsx` | Active speaker (full-width) | N/A (full-bleed, no border) | N/A | ✅ OK |
| `FullscreenContentView.tsx` | Shared content (landscape) | ❌ No border | ❌ No indicator | ✅ Correct |

---

### MeetingDock Tile Layout Rules

**Rule**: The two tiles in the expanded `MeetingDock` adapt based on whether content is being shared in the meeting.

| Meeting state | Left tile | Right tile |
|---|---|---|
| Content is being shared | Shared content thumbnail (pill label: "{Name}'s content") | Self-view (with mic indicator) |
| No content sharing | Active speaker thumbnail (with purple border + `IncomingAudioIndicator`) | Self-view (with mic indicator) |

When content sharing is not active, the left tile must show the current active speaker — the same participant whose `isActive` flag is `true` in the gallery — with the purple active-speaker border (`border-[#878bfb]`) and the `IncomingAudioIndicator` waveform. The shared-content tile rules from the **Active Speaker Border & Audio Indicator Rules** section still apply: shared-content tiles never receive these speaker affordances.

**Implementation**: The `isContentSharing` flag on `ActiveMeetingState` (in `ActiveMeetingContext.tsx`) determines which tile variant to render. This flag must be persisted across backgrounding — see below.

---

### Shared-Content State Preservation Across Backgrounding

**Rule**: When the user backgrounds a meeting (taps the back button in the meeting header), the current content-sharing state (`isContentSharing`) **must be preserved** in `ActiveMeetingContext`. When the user returns to the meeting — either by tapping the dock or the dock's back chevron — the meeting stage must restore to the same content-sharing state it was in when backgrounded.

- If content was being shared when the user backgrounded → the meeting stage returns with content sharing visible, and the dock shows the shared-content + self-view tile layout.
- If no content was being shared when the user backgrounded → the meeting stage returns in its gallery/focus view, and the dock shows the active-speaker + self-view tile layout.

**Implementation**: `backgroundMeeting()` must not reset `isContentSharing`. `returnToMeeting()` must not reset `isContentSharing`. Only explicit user actions within the meeting (toggling content sharing on/off) should change this flag.

---

### Calendar "Join" Button — Skip Pre-Join When Meeting Is Backgrounded

**Rule**: When an active meeting is running in the background (i.e. `isActive === true && isBackgrounded === true` in `ActiveMeetingContext`), tapping the "Join" button on the calendar event card must navigate the user **directly back to the in-progress meeting** (`/meeting`) without showing the Pre-join screen.

| Scenario | Join button behaviour |
|---|---|
| No active meeting | Navigate to `/pre-join` → user goes through the normal Connecting → Meeting flow |
| Active meeting is backgrounded | Navigate directly to `/meeting` and call `returnToMeeting()` — the same behaviour as tapping the meeting dock |

**Rationale**: The user is already in a meeting. Showing Pre-join again would be confusing — it implies they are joining a new call. Instead, the "Join" button acts as a shortcut to return to the running meeting.

**Implementation**: In `CalendarPage.tsx`, the join-button click handler should check `meeting.isActive && meeting.isBackgrounded`. If true, call `meeting.returnToMeeting()` and `navigate("/meeting")`. If false, navigate to `/pre-join` as normal.

---

### Canonical Mic & Video Icon Assets

**Rule**: All mic on/off and video on/off icons across the app **must use the same canonical SVG path shape** for each icon type. Fill colour may vary by context (e.g. green for active self-tile indicator, white for control buttons, red for muted state), but the path geometry must be consistent.

#### Self-Tile Mic Indicator (small badge overlay)

These are the canonical components — all self-tile renderings should import and use them directly.

| Icon | Canonical Component | SVG File | Path ID | ViewBox | Default Fill |
|---|---|---|---|---|---|
| Mic ON | `MicActiveIndicator.tsx` | `svg-y0lvar4jnx` | `p1fdcf480` | `0 0 9 12` | `#37EF46` (green) |
| Mic OFF | `MicOffIndicator.tsx` | `svg-xdgvc4qmw1` | `p37cc6c80` | `0 0 14 14` | `#FF5F3D` (red) |

| Component | Uses canonical component? | Notes |
|---|---|---|
| `SelfVideoTile.tsx` | ✅ Yes — imports `MicActiveIndicator` / `MicOffIndicator` | Source of truth |
| `OnTheGoMode.tsx` | ❌ Imports but doesn't render them | By design — dead imports; mic state shown in status row, not tile badge |
| `MeetingDock.tsx` | ✅ Yes — imports `MicActiveIndicator` / `MicOffIndicator`, switches on `meeting.isMicOn` | **Fixed** |
| `FullscreenContentView.tsx` | ✅ Yes — imports `MicActiveIndicator` / `MicOffIndicator`, switches on `isMicOn` prop | **Fixed** — state carried from MeetingPage |

#### BottomNav Control Icons (24px, white)

| Icon | SVG File | Path ID(s) | ViewBox | Fill |
|---|---|---|---|---|
| Mic ON | `svg-s62hwvor1z` | `p29d99a70` + `p182626f0` + white rect overlay | `0 0 24 24` | white |
| Mic OFF | `svg-s62hwvor1z` | same paths + diagonal slash line | `0 0 24 24` | white |
| Video ON | `svg-s62hwvor1z` | `p2ab58800` | `0 0 24 28` | white |
| Video OFF | `svg-kyq22xtsb0` | `p3ba5cb80` | `0 0 24 28` | white |

#### MeetingDock Control Icons (24px inside 40px touch target, white)

| Icon | SVG File | Path ID(s) | ViewBox | Fill |
|---|---|---|---|---|
| Mic ON | `svg-dhve1aoycu` | `rect` + `p55eaf00` + `p760d580` | `0 0 24 24` | white |
| Mic OFF | `svg-dhve1aoycu` | same + diagonal slash, opacity 0.4 | `0 0 24 24` | white |
| Video ON | `svg-dhve1aoycu` | `pbbefd80` | `0 0 20 14` | white |
| Video OFF | `svg-dhve1aoycu` | same + diagonal slash, opacity 0.4 | `0 0 20 14` | white |

#### OnTheGoMode Icons

**Status row (32px, coloured):**

| Icon | SVG File | Path ID | ViewBox | Fill |
|---|---|---|---|---|
| Mic ON | `svg-ct9ylmbywn` | `p10774b80` | `0 0 32 32` | `#37EF46` (green) |
| Mic OFF | `svg-ct9ylmbywn` | `p19b67700` | `0 0 32 32` | `#FF5F3D` (red) |
| Video OFF | `svg-ct9ylmbywn` | `pfb82480` | `0 0 32 32` | `#B2B2B2` (gray) |

**Quick-action buttons (28px, white):**

| Icon | SVG File | Path ID(s) | ViewBox | Fill |
|---|---|---|---|---|
| Unmute mic | `svg-ct9ylmbywn` | `p2efdb1c0` | `0 0 28 28` | white |
| Mute mic | `svg-ct9ylmbywn` | `p1ac2c680` + `p68fda00` + `p3ae074c0` | `0 0 28 28` | white |

**Note on size variants**: BottomNav, MeetingDock, and OnTheGoMode each use icons exported at different sizes from Figma, so the SVG files and path data differ. However, the visual shape of each icon must remain consistent across all contexts — they should all be recognisably the same microphone / camera icon at different scales.

---

### Asset Organization

#### Structure
```
/src/imports/
├── svg-*.ts                    # 60+ SVG path data files
├── *.tsx                       # Figma imported component files (not used directly)
/src/app/components/
├── (each component imports its own SVG dependencies)
```

#### Component-specific vs Shared
- **Component-specific**: Each component imports only the SVGs it needs
- **Shared assets**: Participant avatar images are imported in multiple components (App, MeetingStage, ChatPanel)
- **Icon reuse**: Some icons appear in multiple sizes (e.g., recording icon in both UFD and AIL)

#### Import Pattern
```typescript
// SVG imports (path data)
import svgPaths from "@/imports/svg-s62hwvor1z";

// Raster images (Figma assets)
import imgAadi from "figma:asset/3c32350895790815d4b2b05b8bfa873d40c997c2.png";
```

**Note**: `figma:asset` is a virtual module scheme, not a file path. It's handled by Vite/Figma Make's build system.

---

## 12. STYLING & DESIGN SYSTEM

### Color Palette

#### Primary Colors
- **Purple (Active State)**: `#878BFB` - Used for active chat/more buttons, user message bubbles, follow-up pills
- **Purple (Copilot Button)**: `#584bdf` - Used for active Copilot button background
- **Purple (Badge/Accent)**: `#7f85f5` - Used for notification badges, bell icon, raised hand badge

#### Background Colors
- **Black (App Background)**: `#000000` - Outer viewport background
- **Black (Meeting Background)**: `#000000` - Meeting stage, status bar areas
- **Black (UFD Container)**: `#000000` - Notification container background
- **Dark Gray (Panel Background)**: `#1c1c1e` - Chat, Copilot, More panel backgrounds
- **Medium Gray (Input Background)**: `#2c2c2e` - Input boxes, inactive areas
- **UFD Card Background**: `#262626` - Active notification card
- **UFD Stack Background**: `#4b4b4b` - Background card in stacked state
- **UFD Border**: `#323232` - Notification card border
- **Nav Bar Background**: `rgba(0,0,0,0.75)` - Bottom nav semi-transparent
- **AIL Pill Background**: `rgba(10,6,4,0.9)` - Timer and notification pills
- **Raised Hands Background**: `rgba(255,200,0,0.2)` - Yellow tint for raised hands pill

#### Status Colors
- **Green (Active Speaker)**: `#37ef46` - Active speaker border, network indicator
- **Green (Timer Gradient)**: `#5fff6e` → `#37ef46` → `#2acc37` - Timer badge border gradient
- **Red (Recording/Alert)**: `#CC4A31` - Recording icon, mic off indicator
- **Yellow (Raised Hand)**: `#FFB900` - Raised hand icon, rank numbers
- **Blue (Send Button)**: `#007aff` - iOS-style send button

#### Text Colors
- **White**: `#FFFFFF` - Primary text, icons, labels
- **Light Gray**: `#E1E1E1` - UFD notification text, secondary text
- **Medium Gray**: `#BEBEBE` - Timer badge text, inactive labels
- **Dark Gray**: `#999999` - Placeholder text
- **Black**: `#000000` - Badge counter text on purple background

#### Opacity Modifiers
- **Semi-transparent white**: `rgba(255,255,255,0.1)` - Button backgrounds in UFD
- **Semi-transparent white**: `rgba(255,255,255,0.3)` - Home indicator
- **Gradient overlay**: `from-black/60 via-black/20 to-transparent` - Bottom nav gradient in gallery

---

### Typography

#### Font Families
- **SF Pro Text** - Body text, labels, inputs, messages (Regular weight)
- **SF Pro Display** - Headings, large text, rank numbers (Semibold weight)

#### Font Sizes & Styles

**Primary Text (Chat/Copilot Messages, Inputs)**:
- Font: SF Pro Text
- Weight: 400 (Regular)
- Size: 17px
- Letter-spacing: -0.41px
- Line-height: 22px
- Usage: All message content, input fields, placeholders across Chat and Copilot panels

**UFD Notification Text**:
- Font: SF Pro Text
- Weight: 400
- Size: 13px
- Letter-spacing: -0.08px
- Line-height: 18px
- Color: #E1E1E1

**UFD Badge Counter**:
- Font: SF Pro Text
- Weight: 600 (Semibold)
- Size: 8.8px
- Letter-spacing: 0.048px
- Line-height: 12.8px
- Color: #000000 (black on purple)

**AIL Raised Hand Names**:
- Font: SF Pro Text
- Weight: 400
- Size: 13px
- Letter-spacing: -0.08px
- Line-height: 18px
- Color: #FFFFFF

**AIL Rank Numbers**:
- Font: SF Pro Display
- Weight: 600 (Semibold)
- Size: 17px
- Letter-spacing: -0.41px
- Line-height: 22px
- Color: #FFB900 (yellow)

**AIL Timer Badge**:
- Font: SF Pro Text
- Weight: 500 (Medium)
- Size: 12px
- Letter-spacing: default
- Line-height: 14px
- Color: #BEBEBE

**AIL Timer Topic**:
- Font: SF Pro Text
- Weight: 500 (Medium)
- Size: 12px
- Letter-spacing: default
- Line-height: 14px
- Color: #FFFFFF

**Button Labels (UFD Action Buttons)**:
- Font: SF Pro Text
- Weight: 500 (Medium)
- Size: 14.696px
- Letter-spacing: -0.2351px
- Line-height: 19.595px
- Color: #FFFFFF

**Meeting Header Title**:
- Font: SF Pro Display
- Weight: 600 (Semibold)
- Size: 20px
- Line-height: ~28px
- Color: #FFFFFF

**Panel Titles**:
- Font: SF Pro Display
- Weight: 600 (Semibold)
- Size: 17px
- Line-height: 22px
- Color: #FFFFFF

**Chat Sender Names**:
- Font: SF Pro Text
- Weight: 600 (Semibold)
- Size: 13px
- Line-height: 18px
- Color: #FFFFFF

**Chat Timestamps**:
- Font: SF Pro Text
- Weight: 400
- Size: 11px
- Line-height: 16px
- Color: #999999

---

### Spacing System

#### Padding Units
- **4px** (p-1 / px-1 / py-1) - Minimal spacing, between pills in AIL
- **8px** (p-2 / gap-2) - Small gaps, video tile spacing
- **12px** - UFD card padding (py-12px)
- **16px** (p-4 / px-4) - Standard container padding (most panels, nav)
- **20px** (gap-5) - Raised hands name list spacing
- **32px** - Horizontal spacing for elements like buttons

#### Margin Units
- **4px** (m-1 / my-1) - Minimal margins
- **8px** (m-2 / mb-2) - Small section spacing
- **16px** (m-4 / my-4) - Standard section dividers

#### Component-Specific Heights
- **Status Bar**: 44px
- **Meeting Header**: 44px
- **AIL Raised Hands Pill**: 40px
- **AIL Timer/Notification Pill**: 36px
- **UFD Container**: 86px
- **UFD Card**: Variable (auto-height based on content, ~62px typical)
- **Bottom Nav Bar**: 62px (+ 16px padding = 78px total)
- **Panel Height**: 444px
- **Panel Header**: 56px
- **Collapsed Input Box**: 44px
- **Self Video (Gallery)**: 120px × 157px
- **Self Video (Split)**: 96px × 126px
- **Video Tile (2x2 grid)**: 216px height
- **Video Tile (full width)**: 218px height
- **More Panel Action Tile**: 56px

#### Gap Sizes
- **2px** (gap-0.5) - Minimal gaps
- **4px** (gap-1) - Small element gaps (AIL pills, badge elements)
- **8px** (gap-2) - Standard element gaps (video tiles, button groups)
- **12px** (gap-3) - Medium gaps (nav button spacing)
- **20px** (gap-5) - Large gaps (raised hands names)

---

### Breakpoints

**Not Responsive** - This is a fixed mobile prototype

**Target Device**: iPhone (390px × 844px)

**Container Constraints**:
```css
max-width: 390px;
max-height: 844px;
```

**No breakpoint variations** - Layout does not change based on viewport size

**Viewport Meta**: Standard mobile viewport (assumed in deployment)

---

## 13. TERMINOLOGY & CONTENT

### UI Labels

#### Bottom Navigation
- "Video" (implied by icon, no text label)
- "Mic" (implied by icon, no text label)
- "Chat" (implied by icon, no text label)
- "More" (implied by icon, no text label)
- "Copilot" (implied by icon, no text label)

#### Panel Headers
- "Meeting Chat"
- "Copilot"
- "More"

#### More Panel Sections
- "Reactions"
- "Raise hand"
- "People"
- "Share"
- "Record"
- "Interpreter"
- "Background noise reduction"
- "Meeting info"
- "Leave"

#### Meeting Header
- "Teams Sync - Design Review" (meeting title)
- "{count} participants" (dynamic count)

#### Additional Info Layer
- "{X} min" (timer badge)
- "Blockers on Easter campaign timeline and Q2 marketing strategy review" (example topic)

#### UFD Notifications (Examples)
- "Recording and transcription have started in English (UK). By joining, you consent to this meeting being recorded. Privacy Policy"
- "Interpreter is on. This meeting would be interpreted for you in English."

#### Copilot
- "What can I help you with?" (empty state)
- "Ask Copilot" (input placeholder)
- "Generating response..." (loading state)

#### Chat
- "Message" (input placeholder)
- "Monday, Feb 9" (date divider)
- "You" (current user sender name)
- "{Name} is typing..." (typing indicator - not explicitly shown in UI, but logic exists)

#### Buttons & Actions
- "Send" (implied by arrow icon)
- "Dismiss" (implied by X icon in UFD)
- "Close" (implied by X icon in panel headers)
- "Learn more" (example UFD action button text)

---

### Date/Time Formats

**Time Format**: 12-hour clock with AM/PM
- Example: "2:34 PM"
- Implementation: `new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })`

**Date Format**: Day of week, abbreviated month, day number
- Example: "Monday, Feb 9"
- Format: "dddd, MMM D"

**Timer Format**: Minutes only
- Example: "13 min"
- No hours shown (meetings assumed < 60 minutes)

**Relative Time**: Not implemented
- Future enhancement: Could show "Just now", "5 minutes ago", etc.

---

### Content Tone

**Overall Tone**: Professional, helpful, conversational

**Chat Messages**:
- Conversational, casual among team members
- Professional context (work discussion, design reviews)
- Examples: "That's great news!", "Can someone share the latest Figma file?"

**Copilot Responses**:
- Helpful, informative, professional
- Clear and concise
- Provides actionable follow-up prompts
- Examples: "Based on the meeting discussion, here are the key action items...", "Would you like me to draft a summary email?"

**Notifications**:
- Clear, informative, direct
- Provides necessary context
- Uses active voice
- Examples: "Recording and transcription have started", "Interpreter is on"

**Error Messages**: Not implemented in current prototype

---

### Emoji Usage

**Reaction Emojis**: ❤️ 👍 👏 😂 😮 🎉 ✋ 👎

**Hand Raise Emoji**: ✋ (yellow, in self video badge and AIL)

**Context**: Emojis used for quick reactions during meetings, matching Teams mobile conventions

---

## 14. EDGE CASES & ERROR HANDLING

### API Errors

**Not Applicable** - This is a front-end prototype with no real API calls.

**Simulated Responses**: All chat and Copilot responses are generated in-memory with setTimeout.

**Future Integration**: When connecting to real APIs, consider:
- Network failures: Show toast notification or inline error
- Timeout scenarios: Retry logic with user-visible feedback
- 404/500 errors: Graceful fallback messages

---

### User Input Errors

**No Validation Implemented** - Current prototype accepts all input

**Potential Issues**:
- Empty messages: Send button functional even with empty text
- Extremely long messages: No character limit, could break layout
- Special characters: No sanitization (risk of XSS in production)

**Recommendations for Production**:
- Add character limits (e.g., 5000 characters)
- Trim whitespace before sending
- Sanitize HTML and script tags
- Validate before sending to backend

---

### Empty States

#### Copilot Empty State
- **When**: No messages in conversation
- **Display**: Centered Copilot logo (48px) + "What can I help you with?" text
- **Appearance**: Clean, inviting, guides user to start conversation

#### Chat Empty State
- **Not Implemented** - Chat always starts with 15 pre-loaded messages
- **Future**: Could show "No messages yet" when chat is truly empty

#### Raised Hands Empty State
- **When**: raisedHands.length === 0
- **Display**: Raised hands pill is completely hidden (conditional rendering)
- **Appearance**: AIL shows only single row (timer + notifications)

#### Notification Queue Empty State
- **When**: currentNotification === null && notificationQueue.length === 0
- **Display**: AdditionalInfoLayer shows instead of NotificationUFD
- **Transition**: Instant swap (no animation)

---

### Loading States

#### Chat Typing Indicator
- **Trigger**: After user sends message
- **Display**: Gray bubble with three animated dots
- **Duration**: 2-3 seconds (randomized)
- **Recovery**: Always resolves to simulated response (never hangs)

#### Copilot Generating
- **Trigger**: After user asks question
- **Display**: "Generating response..." with animated dots
- **Duration**: 2 seconds (fixed)
- **Recovery**: Always resolves to simulated response

#### Video Loading
- **Strategy**: Progressive enhancement with fallback
- **Display**: Static image shows immediately, video overlays when loaded
- **Error Recovery**: If video fails to load, image remains visible
- **No Spinner**: Uses immediate image fallback instead of loading spinner

#### Image Loading (Avatars)
- **Strategy**: Standard image loading (onLoad, onError)
- **Display**: May briefly show empty space if image loads slowly
- **Error Recovery**: No fallback (broken image icon may appear)
- **Recommendation**: Preload avatar images or use loading placeholder

---

### Notification Edge Cases

#### Rapid-Fire Notifications
- **Scenario**: Multiple notifications triggered in quick succession
- **Behavior**: 
  - Critical replaces informational immediately
  - Critical queues behind critical
  - Informational discarded if critical showing
- **Result**: Queue prevents overwhelming user, shows one at a time

#### User Dismisses Mid-Queue
- **Scenario**: User manually dismisses while queue has items
- **Behavior**: Next notification immediately appears
- **Result**: Smooth flow, no delay

#### Auto-Dismiss During Queue Build
- **Scenario**: Timer expires while new notifications added to queue
- **Behavior**: Next notification loads from queue
- **Result**: Seamless transition

#### Queue with Mixed Types
- **Scenario**: Queue contains both critical and informational
- **Behavior**: Only critical notifications queue (informational discarded)
- **Result**: Badge counter shows only critical count

---

### Scroll Edge Cases

#### Chat/Copilot Auto-Scroll
- **Scenario**: User manually scrolled up to read old messages
- **Behavior**: New message still triggers auto-scroll to bottom
- **Issue**: Could interrupt user's reading
- **Recommendation**: Detect if user scrolled up, show "New message" button instead of auto-scroll

#### Gallery Scroll Overflow
- **Scenario**: User scrolls to bottom of gallery
- **Behavior**: 100px bottom padding prevents nav overlap
- **Result**: All tiles fully visible above nav

#### Raised Hands Horizontal Scroll
- **Scenario**: More than ~5-6 names in raised hands list
- **Behavior**: Hand icon stays sticky, names scroll horizontally
- **Edge Case**: Very long names could overflow vertically (unlikely with typical names)

---

### State Persistence Edge Cases

#### Panel Closed Mid-Type
- **Scenario**: User typing in Chat, closes panel before sending
- **Behavior**: Input text is lost (local state cleared)
- **Current**: Not persisted
- **Recommendation**: Could persist draft messages in App state

#### Panel Reopened After Messages
- **Scenario**: User closes Chat panel, new messages arrive, user reopens
- **Behavior**: All messages persist (state lifted to App)
- **Result**: User sees all messages including those received while closed

#### Copilot State After Panel Close
- **Scenario**: User has conversation, closes panel, reopens
- **Behavior**: Entire conversation history persists
- **Result**: Seamless experience, conversation continues

---

## 15. SPECIAL FEATURES & INTEGRATIONS

### Third-Party Integrations

**None** - This is a standalone prototype with no external service integrations.

**Future Integrations** (not implemented):
- Microsoft Graph API (for real meeting data)
- Azure Communication Services (for real video/audio)
- Azure OpenAI (for real Copilot responses)
- OneDrive (for file sharing in chat)

---

### Advanced Features

#### Pull-to-Refresh Prevention

**Implementation**:
```javascript
React.useEffect(() => {
  const handleTouchMove = (e: TouchEvent) => {
    // Custom logic to detect scrollable parent
    // Only prevent if at very top of page (window.scrollY === 0)
    if (window.scrollY === 0) {
      e.preventDefault();
    }
  };
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
}, []);
```

**Purpose**: Prevents iOS pull-to-refresh gesture from interfering with gallery scroll

**How it works**:
- Listens to touchmove events globally
- Checks if touch is inside scrollable container
- Allows normal scrolling inside containers
- Prevents pull-to-refresh only at top of viewport

---

#### Audio Feedback (Mic Toggle)

**Implementation**:
```javascript
const handleMicToggle = () => {
  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.frequency.value = isMicOn ? 400 : 800; // Pitch based on state
  oscillator.type = 'sine';
  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.1);
};
```

**Purpose**: Provides audio feedback when toggling microphone

**How it works**:
- Uses Web Audio API to generate tone
- 800Hz (higher pitch) when turning mic ON
- 400Hz (lower pitch) when turning mic OFF
- 100ms duration with exponential fade-out
- Mimics native iOS toggle sounds

---

#### Marquee Text Animation (AIL Timer Topic)

**Implementation**:
```javascript
// Measure text overflow
useEffect(() => {
  const containerWidth = textContainerRef.current.offsetWidth;
  const textWidth = textRef.current.scrollWidth;
  setShouldMarquee(textWidth > containerWidth);
}, [topicName]);

// Apply marquee animation
className={`flex items-center ${shouldMarquee ? 'animate-marquee' : ''}`}
```

**Purpose**: Scrolls topic name horizontally if it exceeds container width

**How it works**:
- Measures container and text width on mount and resize
- Enables marquee CSS animation if text overflows
- Duplicates text for seamless loop
- Continuous smooth horizontal scroll

---

#### Dynamic Participant Sorting

**Implementation**:
```javascript
const sortedParticipants = [...participants].sort((a, b) => {
  if (a.isActive && !b.isActive) return -1;
  if (!a.isActive && b.isActive) return 1;
  return 0;
});
```

**Purpose**: Active speakers appear first in gallery view

**How it works**:
- Sorts participant array by isActive flag
- Active speakers (isActive = true) sort to front
- Maintains stable sort for inactive participants
- Updates dynamically when speaker changes

---

#### Priority-Based Notification Queuing

**Implementation**: See Section 10 (Business Logic) for detailed rules

**Purpose**: Intelligent notification management prevents overwhelming user

**How it works**:
- Critical notifications can interrupt informational
- Informational notifications discarded if critical showing
- Critical notifications queue behind critical
- Auto-dismiss timer (5 seconds)
- Visual stacking indicator when queue has items

---

#### Simulated AI Responses

**Chat Auto-Responses**:
```javascript
// Show typing indicator
setIsTyping(true);

// After delay, generate response
setTimeout(() => {
  const participant = randomParticipant();
  const response = generateContextualResponse(userMessage);
  setMessages([...messages, response]);
  setIsTyping(false);
}, 2000 + Math.random() * 1000);
```

**Purpose**: Simulates realistic chat environment with participant responses

**Copilot Responses**:
```javascript
setIsGenerating(true);

setTimeout(() => {
  const aiResponse = generateCopilotResponse(userPrompt);
  const followUps = generateFollowUpPrompts(userPrompt);
  setMessages([...messages, { text: aiResponse, isUser: false, followUpPrompts: followUps }]);
  setIsGenerating(false);
}, 2000);
```

**Purpose**: Simulates AI assistant with contextual responses and follow-up questions

**How it works**:
- Analyzes user input keywords
- Generates contextually relevant responses
- Provides 3 follow-up prompts based on context
- Adds realistic 2-3 second delay

---

#### Real-time State Synchronization

**Example**: Hand raise state updates multiple components

```
User raises hand in More panel
→ App state updates isHandRaised
→ MorePanel button shows purple highlight
→ SelfVideoTile shows yellow hand badge
→ AdditionalInfoLayer adds "You" to raisedHands array
→ All components re-render in sync
```

**Purpose**: Maintains consistent state across all UI components

**How it works**:
- Single source of truth in App component
- Props flow down to all children
- State updates trigger React re-renders
- All components reflect current state instantly

---

### Notable Technical Decisions

#### Why No Context API?

**Decision**: Use props drilling instead of Context API

**Rationale**: 
- App is relatively small (single view)
- State tree is shallow (App → Panels → Components)
- Props provide explicit data flow (easier to debug)
- No performance issues with current structure

**Trade-off**: If app grows significantly, Context API or state management library may be needed

---

#### Why Lift Chat/Copilot State to App?

**Decision**: Message state lives in App, not in panels

**Rationale**:
- Messages must persist when panel closes/reopens
- User expects to return to same conversation
- Matches native Teams behavior

**Implementation**: App holds `chatMessages` and `copilotMessages` arrays, passes down with setters

---

#### Why Instant Notification Transitions?

**Decision**: No animation for UFD appearance/dismissal

**Rationale**:
- Spec explicitly requires no animations
- Notifications are urgent, should appear immediately
- Matches iOS system alert behavior

**Trade-off**: Abrupt transitions (could feel jarring), but matches spec

---

#### Why Fixed 444px Panel Height?

**Decision**: All panels have fixed 444px height

**Rationale**:
- Provides consistent multitasking experience
- Ensures meeting stage always visible (split screen)
- Matches Teams mobile design specifications
- Allows bottom nav to overlay predictably

**Trade-off**: Not flexible to different screen sizes, but matches target device (iPhone)

---

## 16. KNOWN ISSUES & INCOMPLETE FEATURES

### Known Issues

#### 1. Pull-to-Refresh on Scrollable Containers
- **Issue**: Pull-to-refresh prevention may interfere with scrolling inside chat/copilot panels
- **Impact**: Occasional scroll resistance at top of message lists
- **Workaround**: Custom touch handler attempts to detect scrollable parent
- **Status**: Partially mitigated, may need refinement

#### 2. Image Loading Flicker
- **Issue**: Avatar images may briefly show empty space while loading
- **Impact**: Visual flicker on slow connections
- **Workaround**: None currently implemented
- **Recommendation**: Add loading placeholder or preload images

#### 3. Long Topic Names in AIL
- **Issue**: Extremely long topic names may not trigger marquee on initial render
- **Impact**: Text may be cut off until resize event
- **Workaround**: Resize listener helps, but initial measurement may fail
- **Recommendation**: Force re-measure after component mount

#### 4. Keyboard Overlay Height
- **Issue**: iOS keyboard height varies by device/orientation, currently fixed height
- **Impact**: May not match real keyboard on all devices
- **Workaround**: Visual representation only (not real keyboard)
- **Status**: Acceptable for prototype, would need dynamic height for production

#### 5. Notification Badge Position
- **Issue**: Badge counter in UFD may clip with very long numbers (>99)
- **Impact**: "+999" might overflow badge container
- **Workaround**: None implemented
- **Recommendation**: Set max badge count (e.g., "99+")

---

### Incomplete Features

#### 1. Video Playback
- **Status**: Video URLs exist in data structure, but no real videos implemented
- **Current**: Shows static images as fallback
- **Future**: Replace `video: undefined` with real video URLs
- **Implementation**: VideoTile already has video loading logic, just needs real sources

#### 2. Screen Sharing
- **Status**: UI exists in More panel, but no functionality
- **Current**: Button present, no onClick behavior
- **Future**: Integrate with Azure Communication Services or WebRTC
- **Implementation**: Would update `hasSharedContent` flag and show shared content in split screen

#### 3. People List
- **Status**: Button in More panel, no participant list view
- **Current**: Tapping "People" does nothing
- **Future**: Show full participant list with roles, permissions, etc.
- **Implementation**: New panel or modal overlay with participant details

#### 4. Meeting Info
- **Status**: Button in More panel, no info view
- **Current**: Tapping "Meeting info" does nothing
- **Future**: Show meeting details (agenda, attendees, recurring info, etc.)

#### 5. Leave Meeting
- **Status**: Button in More panel, no leave logic
- **Current**: Tapping "Leave" does nothing
- **Future**: Show confirmation dialog, then exit to meeting lobby or home screen

#### 6. Network Indicator Logic
- **Status**: NetworkIndicator component exists, but always shows "excellent"
- **Current**: No real network quality detection
- **Future**: Integrate with WebRTC stats or Azure ACS quality metrics

#### 7. Active Speaker Detection
- **Status**: isActive flag is manually set in mock data
- **Current**: No real audio level detection
- **Future**: Use Web Audio API or WebRTC to detect audio levels and update isActive

#### 8. Participant Count Updates
- **Status**: Participant count is static (6 in gallery + 1 self = 7)
- **Current**: No join/leave events
- **Future**: Listen to Azure ACS events for participant join/leave

#### 9. File Attachments in Chat
- **Status**: Data structure supports media array, but no file picker
- **Current**: Can't actually attach files
- **Future**: Add file input, show file preview tiles in chat

#### 10. Message Reactions (Chat)
- **Status**: No reaction UI on individual messages
- **Current**: Only meeting-level emoji reactions
- **Future**: Add emoji reactions to specific chat messages (like Teams desktop)

#### 11. Search in Chat
- **Status**: No search functionality
- **Current**: Must manually scroll to find old messages
- **Future**: Add search bar in chat header

#### 12. Copilot Context Awareness
- **Status**: Copilot responses are simple keyword matching
- **Current**: No real AI integration
- **Future**: Integrate Azure OpenAI with meeting context (transcription, participants, chat)

#### 13. Raised Hands Management
- **Status**: No way to clear all raised hands or re-order list
- **Current**: Hands stay raised until individual lowers
- **Future**: Add moderator controls to lower all hands

#### 14. Background Noise Reduction Toggle
- **Status**: Button exists in More panel, no functionality
- **Current**: Tapping does nothing
- **Future**: Could trigger UFD notification or show confirmation

#### 15. Interpreter Language Selection
- **Status**: Interpreter toggle is on/off only
- **Current**: No language selection UI
- **Future**: Show language picker modal before enabling

---

### NotificationsPanel (Notification Hub)

**Purpose**: Dedicated panel for viewing and managing all meeting notifications in one place

**Location**: `/src/app/components/NotificationsPanel.tsx`

**Props**:
- `onClose`: `() => void` - Close panel callback
- `seenNotifications`: `Set<string>` - Set of notification IDs that have been seen
- `onDismissNotification`: `(notificationId: string) => void` - Callback to dismiss individual notification
- `onClearAll`: `() => void` - Callback to clear all notifications

**State**:
- `isCriticalExpanded`: `boolean` - Expand/collapse state for critical notifications section
- `isAIExpanded`: `boolean` - Expand/collapse state for informational notifications section

**Children/Composition**:
- `MultitaskingPanel` (wrapper)
- `SwipeableNotification` (wrapper for each notification item)
- Icon components: `RecordingIcon`, `LobbyIcon`, `InterpreterIcon`, `BackgroundNoiseIcon`, `ChevronIcon`

**Layout Structure**:
```
MultitaskingPanel (wrapper with "Clear all" action button)
└── Scrollable Container (flex-col, bg-#0e0e0e, min-h-full)
    ├── Critical Notifications Section (conditional)
    │   ├── Section Header (expandable/collapsible)
    │   │   ├── "Critical notifications" label (purple #7f85f5)
    │   │   └── Chevron icon (rotates on expand/collapse)
    │   └── Notification List (conditional when expanded)
    │       ├── Recording Notification (swipeable)
    │       ├── Content Sharing Notification (swipeable)
    │       └── Lobby Notification (swipeable)
    ├── Informational Notifications Section (conditional)
    │   ├── Section Header (expandable/collapsible)
    │   │   ├── "Informational notifications" label (purple #7f85f5)
    │   │   └── Chevron icon (rotates on expand/collapse)
    │   └── Notification List (conditional when expanded)
    │       ├── Interpreter Notification (swipeable)
    │       └── Background Noise Notification (swipeable)
    └── Empty State (conditional when no notifications)
        └── "No notifications to show" text (vertically centered)
```

**Key Features**:

1. **Two-Category System**:
   - Critical notifications: Recording, content sharing, lobby
   - Informational notifications: Interpreter, background noise
   - Each category has expandable/collapsible section with chevron indicator

2. **Swipe-to-Dismiss**:
   - Individual notification items can be swiped left to dismiss
   - Uses `react-swipeable` library for touch gesture handling
   - Swipe threshold: 50px (dismisses if swiped more than 50px)
   - Visual feedback: Item translates horizontally during swipe
   - Smooth 200ms fade-out animation on dismiss

3. **Clear All Functionality**:
   - "Clear all" button in panel header
   - Removes all notifications from hub and resets counter pill
   - Button state:
     - Enabled: When notifications present (opacity: 1, clickable)
     - Disabled: When no notifications (opacity: 0.4, cursor: not-allowed)
   - Button styling: Purple highlight with mix-blend-color-dodge effect

4. **Empty State**:
   - Displays when no notifications are present
   - Text: "No notifications to show" (gray #919191, SF Pro Text, 15px)
   - Vertically and horizontally centered in container (flex-1)
   - Fills entire scrollable area down to divider

5. **Section Expand/Collapse**:
   - Each section (Critical/Informational) can be independently expanded/collapsed
   - Default state: Both sections expanded
   - Chevron icon rotates 180° on collapse
   - Smooth transitions for expand/collapse animations

6. **Notification Items**:
   - Each notification has icon, message text, and optional action button
   - Recording: Red recording icon, long privacy policy text
   - Content Sharing: Recording icon, "Content is being shared" text
   - Lobby: Lobby icon, "Guests are waiting to join" + "View lobby" button
   - Interpreter: Interpreter icon, "Interpreter is on" + language info + gear icon
   - Background Noise: Noise icon, "Background noise detected" + "Suppress" button
   - All items have 1px divider at bottom (#292929)

7. **Swipeable Notification Wrapper**:
   - Custom `SwipeableNotification` component wraps each notification
   - Manages swipe offset state and dismissal animation
   - Only allows left swipes (negative deltaX)
   - Auto-resets position if swipe doesn't meet threshold
   - Triggers dismiss callback after animation completes

**Integration with UFD System**:
- Notifications shown in hub are the same types as UFD notifications
- **Soft-dismissed** UFDs (auto-timer expiry) and **never-shown** informational UFDs (discarded by Rule 2) are preserved in the hub — the user may have missed them
- **Hard-dismissed** UFDs (swipe or X button) are **not** added to the hub — the user has already read them; their pill counter entry is also decremented
- Notification counter pill in AIL reflects hub count (incremented on arrival, decremented on hard dismiss or hub dismiss)
- Tapping counter pill opens NotificationsPanel
- Clear all removes notifications from hub and resets pill counter to 0
- Status indicators (recording dot, lobby icon) are independent of hub state — they are driven by live meeting state, not by notification dismissal

**Design Pattern Note**:
- Follows Teams split-screen pattern: panel slides up from bottom
- Uses same `MultitaskingPanel` wrapper as Chat/Copilot/More
- Matches iOS design language with SF Pro Text typography
- Consistent spacing and padding with other panels

**Typography**:
- Section headers: SF Pro Text Bold, 15px, -0.24px tracking, 20px line-height
- Notification text: SF Pro Text Regular, 15px, -0.08px tracking, 20px line-height
- Secondary text: Roboto Regular, 15px, 20px line-height (for interpreter/noise details)
- Empty state: SF Pro Text Regular, 15px, -0.08px tracking, 20px line-height

**Assets Used**: SVG icons for recording, lobby, interpreter, background noise, chevron, gear

---

### Nested Menu Navigation Pattern

**Design Pattern**: When split-screen menu items require showing nested options, always use the same bottom panel component structure.

**Key Principles**:

1. **Consistent Panel Component**:
   - All nested views use `MultitaskingPanel` wrapper
   - Same 444px height, rounded top corners, dark background
   - Maintains familiar navigation pattern throughout app

2. **Header Structure**:
   - Back button (left-chevron) in top-left to return to parent menu
   - Section title at center (e.g., "Share", "Meeting info", "Meeting settings")
   - Optional action button on right side of header
   - Visual distinction: L2 nested menus use left-chevron icon instead of X icon

3. **List Layout**:
   - Vertical list of options with icons and labels
   - Same item styling as More menu items
   - Consistent spacing and dividers
   - Icons on left, labels in center, arrows/toggles on right

4. **Navigation Flow**:
   - User taps item in More menu (e.g., "Share")
   - Panel content transitions to nested view
   - User can close nested view to return to parent menu
   - Maintains navigation history within panel

5. **Examples**:
   - Share → List of sharing options (screen, window, app)
   - Meeting info → Meeting details, agenda, attendees
   - Meeting settings → Audio, video, background settings
   - People → Participant list with roles and permissions

6. **Consistency Benefits**:
   - Users learn one navigation pattern
   - No jarring modal or popup interruptions
   - Smooth transitions between menu levels
   - Predictable back navigation with close button

**Implementation Reference**: See `NotificationsPanel` and `MorePanel` for examples of this pattern in action.

---

### Placeholder Data

#### Mock Participants
- **Current**: 6 hardcoded participants with static data
- **Future**: Load from real meeting roster

#### Chat Messages
- **Current**: 15 pre-loaded messages in conversation
- **Future**: Load from real chat history

#### Meeting Title
- **Current**: "Teams Sync - Design Review" hardcoded
- **Future**: Load from meeting metadata

#### Timer
- **Current**: Shows "13 min" with sample topic name
- **Future**: Real elapsed time tracker, actual meeting topic

#### Notification Count
- **Current**: Shows "3" hardcoded in AIL
- **Future**: Actual unread notification count

#### Lobby Count
- **Current**: Shows "2" hardcoded in AIL
- **Future**: Real count of waiting participants

---

### Future Enhancements

#### Accessibility
- **Status**: Basic semantic HTML, but no ARIA labels or keyboard navigation
- **Recommendation**: Add ARIA labels, focus management, keyboard shortcuts

#### Animations
- **Status**: Minimal animations (300ms transitions)
- **Future**: Could add more polish (message send animation, reaction burst, etc.)

#### Responsive Design
- **Status**: Fixed 390x844px mobile frame
- **Future**: Support multiple device sizes (iPad, Android tablets, different phone sizes)

#### Performance Optimization
- **Status**: No virtualization for long message lists
- **Future**: Implement virtual scrolling for chat/copilot with 1000+ messages

#### Error Boundaries
- **Status**: No React error boundaries
- **Future**: Add error boundaries to catch and display component errors gracefully

#### Analytics
- **Status**: No tracking or analytics
- **Future**: Add event tracking for user interactions (button taps, panel opens, etc.)

#### Offline Support
- **Status**: No offline capability
- **Future**: Cache messages, show offline indicator, queue actions

#### Dark/Light Mode Toggle
- **Status**: Fixed dark mode only
- **Future**: Support light mode variant (Teams has both)

---

## Document End

**Last Updated**: Current version reflects state as of February 24, 2026

**Recent Changes** (February 24, 2026):

### SwipeableViews `onViewChange` Fix (Critical Bug)

- **Problem**: `SwipeableViews.tsx` was never calling `onViewChange` when `currentIndex` changed internally, so `MeetingPage.currentView` was permanently stuck at `1` (Gallery). This meant **all on-the-go mode guards were dead code** — BottomNav hiding, video auto-off, pill non-interactivity, etc.
- **Fix**: Added a `useEffect` in `SwipeableViews.tsx` that calls `onViewChange?.(currentIndex)` whenever `currentIndex` changes
- **Impact**: All on-the-go mode behavioral rules are now functional:
  1. BottomNav hidden (not a multitasking mode)
  2. Video can never be on
  3. Notification pill and timer pill are non-clickable

### BottomNav Panel-Overlay Instance Gated by View

- **Problem**: The second `BottomNav` render in `MeetingPage.tsx` (the panel-overlay instance) was not gated by `currentView !== 0`, so it could appear in on-the-go mode
- **Fix**: Added `currentView !== 0` guard to the panel-overlay BottomNav render condition

### FullscreenContentView — Live Camera Feed

- **Problem**: `FullscreenContentView.tsx` used a static `imgSelf` fallback image instead of the live camera feed from `useCamera()`
- **Fix**: Now uses `attachVideo` ref callback matching `SelfVideoTile`'s pattern to display the real camera `MediaStream` in the PiP self-tile
- **Camera feed across 4 surfaces**: The shared `CameraContext.tsx` `MediaStream` now renders on all four camera surfaces:
  1. `PreJoinPage` — camera preview
  2. `SelfVideoTile` — floating PiP in meeting
  3. `MeetingDock` — backgrounded meeting dock
  4. `FullscreenContentView` — landscape PiP self-tile

### FullscreenContentView — Self-Tile Counter-Rotation Fix

- **Problem**: The entire landscape container is rotated 90° CW via `transform: rotate(90deg)`. The camera feed inside the PiP self-tile inherited this rotation, appearing sideways to the user.
- **Fix**: Applied `rotate(-90deg)` counter-rotation to both the `<video>` element and the `<img>` fallback within the self-tile. Dimensions are swapped (`tileH` × `tileW`) and centered with `translate(-50%, -50%)` so the counter-rotated content fills the tile correctly with `object-cover`.
- **Video element style**: `transform: translate(-50%, -50%) rotate(-90deg) scaleX(-1)` (counter-rotate + mirror for front camera)
- **Fallback image style**: `transform: translate(-50%, -50%) rotate(-90deg)`
- **Removed conflicts**: Removed stale `inset-0` class from fallback image and conflicting `scale-x-[-1]` Tailwind class from video (both now handled entirely by inline `style`)

### FullscreenContentView — Status Bar Safe Area

- **Problem**: Status bar safe area was handled with an ineffective `pt-[59px]` on the parent. After 90° CW rotation, portrait TOP maps to landscape LEFT, so vertical padding doesn't address the correct edge.
- **Fix**: `landscapeW` is shrunk by 59px and the center point is offset accordingly, so the safe area is correctly accounted for in the rotated coordinate space

### Asset Catalog & Downloader

- **New file**: `/src/app/assets/index.ts` — centralized asset catalog that re-exports all **29 unique raster images** with descriptive names, organized into 8 categories:
  1. Participant Avatars (6): `avatarAadi`, `avatarSarah`, `avatarBabak`, `avatarMiguel`, `avatarJessica`, `avatarRay`
  2. Self View (1): `selfViewFallback`
  3. Shared Content (2): `sharedContentPortrait`, `sharedContentLandscape`
  4. Gallery Tiles (7): `galleryTileMiguel`, `galleryTileSelf`, `galleryTileJessica`, `galleryTileRay`, `galleryTileBabak`, `galleryTileSarah`, `galleryTileAadi`
  5. Reactions (5): `reactionThumbsUp`, `reactionRedHeart`, `reactionClappingHands`, `reactionGrinningFace`, `reactionRaisedHand`
  6. Chat Avatars (2): `chatAvatar1`, `chatAvatar2`
  7. Calendar (4): `calendarUserAvatar`, `calendarImage1`, `calendarImage2`, `calendarImage3`
  8. Loaders (2): `copilotLoader`, `copilotOverlayLoader`
- Includes the critical Figma swap documentation (`avatarBabak` / `avatarSarah`) and a quick-reference hash table
- **Usage**: `import { avatarAadi, reactionThumbsUp } from "../assets"`

- **New file**: `/src/app/components/AssetDownloader.tsx` — dedicated page for exporting all assets out of Figma Make
- **New route**: `/assets` — renders the `AssetDownloader` component (outside `RootLayout` to avoid meeting context)
- **Features**:
  - Visual grid of all 29 assets organized by category with hover-to-download
  - "Download All" button — saves each image as a properly-named `.png` file
  - "Copy Import Map" — generates a ready-to-paste `index.ts` with normal file imports for Claude Code / standard React projects
  - "Copy Find-Replace Map" — maps every `figma:asset/HASH.png` → `@/assets/images/NAME.png` for bulk codebase migration
  - Resolved URLs table — shows actual CDN URLs for `curl`/`wget` scripting
- **Purpose**: Enables replicating this project in environments that don't support Figma Make's virtual `figma:asset/...` import scheme (e.g., Claude Code, standard Vite/CRA projects)

### Outstanding Items

The following remain on the backlog:

| Item | Status | Notes |
|------|--------|-------|
| iOS status bar `pt-[59px]` fix | Needs real-device verification | Coordinate space fix applied but untested on physical iOS |
| Split-screen `height: 65vh` | TODO | Should use flex-based proportional sizing instead of fixed viewport height |
| MeetingDock → meeting stage transition | TODO | Needs crossfade/slide-up animation |
| Shared camera live feed verification | TODO | Verify all 4 surfaces render correctly simultaneously |
| Font-weight CSS attribute selector fix | Needs verification | Inter font weight rendering |
| Push-up transition Calendar → Pre-join | TODO | Navigation transition animation |
| Action-button-on-background-card peek-reveal | TODO | Enhancement for backgrounded meeting card |
| On-The-Go visual audit: button colors | TODO | Color spec compliance |
| On-The-Go visual audit: button height | TODO | 100px vs 137px spec discrepancy |
| On-The-Go visual audit: mic indicator on SelfTileCentered | TODO | Missing mic indicator |
| On-The-Go visual audit: avatar circle color | TODO | Wrong color |
| On-The-Go visual audit: glass/frosted material on buttons | TODO | Missing frosted glass effect |

### Updated Project Structure

All component files as of current documentation:

```
/src/app/
├── App.tsx                           # Router shell (RouterProvider)
├── routes.ts                         # React Router browser routes (+ /assets route)
├── /assets/
│   └── index.ts                      # Centralized asset catalog (29 re-exports)
└── /components/
    ├── ActiveMeetingContext.tsx       # Meeting state provider (timer, mic, video, sharing)
    ├── AdditionalInfoLayer.tsx       # Raised hands, timers, alerts (pills disable in OTG)
    ├── AgendaTimerPanel.tsx          # Meeting agenda timer panel
    ├── AssetDownloader.tsx           # Asset export/download utility page (/assets route)
    ├── BottomNav.tsx                 # Bottom navigation bar
    ├── CalendarPage.tsx              # Calendar page with meeting dock
    ├── CameraContext.tsx             # Shared MediaStream provider (4 surfaces)
    ├── ChatPanel.tsx                 # Chat multitasking panel
    ├── CollapsedInputBox.tsx         # Collapsed input (no keyboard)
    ├── CopilotPanel.tsx              # Copilot AI assistant panel
    ├── FocusMode.tsx                 # Focus (active speaker) view
    ├── FullscreenContentView.tsx     # Immersive landscape shared content view
    ├── Header.tsx                    # Meeting header (hidden in split)
    ├── HorizontalScrollContainer.tsx # Scroll utility component
    ├── IncomingAudioIndicator.tsx    # Active speaker visual
    ├── KeyboardOverlay.tsx           # iOS keyboard simulation
    ├── MeetingDock.tsx               # Out-of-meeting floating dock
    ├── MeetingHeader.tsx             # Meeting info header (imperative show/hide)
    ├── MeetingPage.tsx               # Main meeting orchestrator
    ├── MeetingStage.tsx              # Meeting gallery/split view
    ├── MicActiveIndicator.tsx        # Mic on indicator (canonical)
    ├── MicOffIndicator.tsx           # Mic off/muted indicator (canonical)
    ├── MorePanel.tsx                 # More menu panel (L2 navigation)
    ├── MultitaskingPanel.tsx         # Base panel wrapper component
    ├── NetworkIndicator.tsx          # Network strength indicator
    ├── NotificationUFD.tsx           # UFD notification component (swipe-to-dismiss)
    ├── NotificationsPanel.tsx        # Notification hub panel
    ├── OnTheGoMode.tsx               # On-the-go minimized view (iOS audio picker)
    ├── PageIndicator.tsx             # Purple dot page indicators (#968CFF)
    ├── ParticipantsPanel.tsx         # Comprehensive participant list panel
    ├── PreJoinPage.tsx               # Pre-join page (iOS audio picker, camera preview)
    ├── RootLayout.tsx                # Root layout (ActiveMeetingProvider + Outlet)
    ├── SelfVideoTile.tsx             # Floating self video tile
    ├── SharedKeyboardOverlay.tsx     # Shared keyboard component
    ├── StatusBar.tsx                 # iOS status bar + notch
    ├── SwipeableViews.tsx            # Horizontal swipe container for 3 views
    └── VideoTile.tsx                 # Individual participant tile
```

---

**Changes** (February 23, 2026):

### Asset Consistency Rules

- Added canonical asset tables for **Self-Tile Image** and **Shared Content Image** in Section 11 (Icons & Assets → Images & Media)
- **Self-tile canonical asset**: `figma:asset/640d5284dbe6da2945d294258d914788ad82cac7.png` — sourced from `SelfVideoTile.tsx`
- **Shared content canonical asset**: `figma:asset/f3edab3305d6980218cc52719020bc598b4a6331.png` — sourced from `MeetingStage.tsx`
- Flagged deviating components:
  - `FullscreenContentView.tsx` uses different assets for both self-tile (`2988dddd...`) and shared content (`935052a8...`)
  - `MeetingDock.tsx` uses a different shared content asset (`3766ed27...`); self-tile was already corrected to the canonical asset
- Added avatar swap `NOTE` annotations to the Babak and Sarah entries in the Participant Avatars table
- Fixed `FullscreenContentView.tsx` self-tile to use canonical asset (`640d5284...`)
- Fixed `MeetingDock.tsx` shared content to use canonical asset (`f3edab33...`)

### Self-Tile State Reactivity & Canonical Icon Assets

- Added **Self-Tile State Reactivity** section in Section 11 — documents the rule that all self-tile appearances must be reactive to `isMicOn`/`isVideoOn` state, with compliance table flagging deviations in `OnTheGoMode.tsx`, `MeetingDock.tsx`, and `FullscreenContentView.tsx`
- Added **Canonical Mic & Video Icon Assets** section — comprehensive reference tables for:
  - Self-tile mic indicator: `MicActiveIndicator.tsx` and `MicOffIndicator.tsx` as canonical components
  - BottomNav control icons (SVG files, path IDs, viewBoxes)
  - MeetingDock control icons (SVG files, path IDs, viewBoxes)
  - OnTheGoMode status + quick-action icons (SVG files, path IDs, viewBoxes)
- Documents the rule that all mic/video icons must use the same canonical SVG path shape per icon type; fill colour may vary by context

### Self-Tile State Reactivity Fixes

- **`MeetingDock.tsx`**: Replaced hardcoded `GreenMicIndicator` with conditional `MicActiveIndicator`/`MicOffIndicator` (canonical components) based on `meeting.isMicOn`; replaced always-showing `imgSelfView` with conditional image vs UV initials based on `meeting.isVideoOn`
- **`FullscreenContentView.tsx`**: Added `isMicOn` and `isVideoOn` props to interface (default `true`); replaced hardcoded mic-off inline SVG with conditional canonical `MicActiveIndicator`/`MicOffIndicator`; replaced always-showing `imgSelf` with conditional image vs UV initials; both props carry over the state from MeetingPage at the time of entering fullscreen (no mic/video controls exist in fullscreen view, so state is preserved)
- **`MeetingPage.tsx`**: Updated `<FullscreenContentView>` call site to pass `isMicOn={isMicOn}` and `isVideoOn={isVideoOn}`
- **`OnTheGoMode.tsx`**: Marked as ✅ by design — on-the-go mode forces video off and shows mic state in a separate status row, not as a tile badge overlay
- Updated both compliance tables in `app-logic.md` (Self-Tile State Reactivity + Canonical Mic Indicator) to reflect all fixes

### MeetingDock Updates

- **Self-tile image corrected**: Changed `imgSelfView` import from `49b724f9...` to canonical `640d5284...` (matching `SelfVideoTile.tsx`)
- **Self-tile scaling**: Added `scale-[1.15]` to the self-view `<img>` to eliminate white borders at left/right edges
- **ContentExpandBadge removed**: Purple expand/pause badge removed from the shared content tile
- **Swipe-to-collapse on tiles**: Added `useSwipeGesture` hook enabling swipe-up to collapse the dock from the tile area (not just the drag handle); includes tap-vs-swipe disambiguation so taps still navigate back to the meeting

### iOS Context Menu Audio Picker (PreJoinPage & OnTheGoMode)

Both `PreJoinPage.tsx` and `OnTheGoMode.tsx` now render an identical native iOS-style context menu for audio output device selection, matching Apple Human Interface Guidelines.

#### Visual Specification

| Property | Value |
|----------|-------|
| Background | `rgba(44,44,46,0.55)` (frosted glass) |
| Backdrop filter | `saturate(190%) blur(40px)` |
| Outer stroke | `0 0 0 0.33px rgba(255,255,255,0.1)` (via `boxShadow`) |
| Border radius | `14px` |
| Menu width | `250px` |
| Hairline dividers | Full-width, `rgba(84,84,88,0.36)`, 1px height |
| Section header padding | `px-[16px] py-[11px]` |
| Section header color | `#98989f`, 13px |
| Row padding | `pl-[16px] pr-[14px] py-[11px]` |
| Row tap feedback | `active:bg-[rgba(255,255,255,0.12)]` |
| Scrim | `rgba(0,0,0,0.2)` absolute overlay, tap-to-dismiss |

#### Row Layout

```
[Checkmark 16px] [Label + Connected subtitle] [Device icon 24px @ 60% opacity]
```

- **Leading checkmark**: 16px reserved space; white 13px checkmark SVG when selected, empty when not — ensures consistent left alignment
- **Label**: 17px white, SF Pro Text, `-0.41px` letter spacing
- **Connected subtitle**: 12px `#98989f`, green dot `#30D158` + "Connected" text (only for Bluetooth)
- **Trailing icon**: Device-specific icon (phone, speaker, bluetooth) at 60% opacity

#### Positioning

- Dynamically computed using `getBoundingClientRect()` relative to the page/container ref
- Menu bottom edge: 8px above the speaker button's top
- Horizontal center: aligned to button center, clamped to `Math.max(right, 8px)` to prevent overflow
- Fallback: centered horizontally via `translateX(-50%)` if refs unavailable

#### Trigger Button Behavior

- `active:opacity-50 transition-opacity duration-100` — momentary iOS tap flash
- No persistent highlight state (matches standard `UIButton` behavior)
- PreJoinPage: label shows selected device name; OnTheGoMode: static "Audio" label

#### Audio Devices (shared data)

| ID | Name | Icon | Connected |
|----|------|------|-----------|
| `phone` | iPhone | Phone icon | — |
| `speaker` | Speaker | Speaker icon | — |
| `bluetooth` | AirPods Pro | Bluetooth icon | ✅ Yes |

### AdditionalInfoLayer — Non-Interactive Pills in On-the-Go Mode

- **`AdditionalInfoLayer.tsx`**: `TimerPill` and `NotificationPill` now support a disabled state — when `onClick` is `undefined`, both render with `disabled={true}`, `pointer-events: none`, and no `active:` highlight classes (completely inert, no visual tap feedback)
- **`MeetingPage.tsx`**: Passes `undefined` for `onTimerClick` and `onNotificationClick` when `currentView === 0` (on-the-go mode); forces `isTimerPressed={false}` and `isNotificationPressed={false}` in that mode
- **Rationale**: On-the-go mode has its own self-contained UI with large quick-action buttons; allowing users to accidentally open the Agenda Timer or Notifications panel by tapping the pills would be disorienting since the split-screen multitasking system is not designed for on-the-go mode
- **Restoration**: Full interactivity is automatically restored when the user swipes back to Gallery (`currentView === 1`) or Focus (`currentView === 2`)

---

**Changes** (February 19, 2026):

### New Components

#### SwipeableViews (Horizontally Swipeable Meeting Views)

- **Location**: `/src/app/components/SwipeableViews.tsx`
- **Purpose**: Enables swiping between three horizontally arranged meeting views: On-the-go (index 0), Gallery (index 1), Focus (index 2)
- **Props**:
  - `isSplit`: `boolean` — Disables swipe gestures when in split-screen multitasking mode
  - `onCollapseSplit`: `() => void` — Callback to collapse split screen
  - `isMicOn`, `isVideoOn`, `onMicToggle`, `onHandRaiseToggle`, `isHandRaised` — Passed through to child views
  - `onViewChange`: `(viewIndex: number) => void` — Notifies parent of active view changes
- **State**:
  - `currentIndex`: `number` (default 1 = Gallery) — The active view
  - `isDragging`: `boolean` — Whether a drag gesture is in progress
  - `dragOffset`: `number` — Pixel offset during drag
- **Gesture System**: Uses native Pointer Events with `setPointerCapture` for reliable touch tracking
  - Differentiates horizontal vs vertical gestures (horizontal = swipe between views, vertical = native scroll)
  - Rubber-band resistance at boundaries (index 0 swiping right, index 2 swiping left, dampened to 30%)
  - Minimum swipe threshold: 50px
  - `touchAction: "pan-y"` allows native vertical scrolling while JS handles horizontal
- **Transition**: `transform 300ms cubic-bezier(0.4, 0, 0.2, 1)` when not dragging
- **Page Indicator Position**: Animates between `bottom: 16px` (On-the-go) and `bottom: 96px` (Gallery/Focus); hidden in split mode

#### PageIndicator (View Dot Indicators)

- **Location**: `/src/app/components/PageIndicator.tsx`
- **Purpose**: Purple dot indicators showing which of the three swipeable views is active
- **Props**: `currentIndex: number`, `totalPages: number`
- **Styling**:
  - Container: `bg-[rgba(64,64,64,0.7)]` pill with 20px border radius
  - Active dot: 10px circle, `fill="#968CFF"` (Teams purple)
  - Inactive dots: 6px circle (r=3), `fill="#E1E1E1"`
  - Gap between dots: 7px

#### OnTheGoMode (Minimized Meeting View)

- **Location**: `/src/app/components/OnTheGoMode.tsx`
- **Purpose**: Compact meeting view with status indicators and quick-action buttons for mic mute, hand raise, and audio device selection
- **Props**: `isMicOn`, `isVideoOn`, `onMicToggle`, `onHandRaiseToggle`, `isHandRaised`, `isActive`
- **SVG Source**: `/src/imports/svg-ct9ylmbywn.ts`
- **State**:
  - `showAudioPicker`: `boolean` — Whether the iOS context menu audio picker is open
  - `selectedAudio`: `string` (default `"phone"`) — Currently selected audio output device ID
  - `menuPos`: `{ bottom: number; right: number } | null` — Dynamically computed position for the context menu
  - `toastVisible`: `boolean` — "Your mic was turned off" toast visibility (auto-dismisses after 4 000 ms)
- **Refs**: `audioPickerRef`, `audioPopupRef`, `speakerBtnRef`, `containerRef`, `prevActiveRef`, `toastTimerRef`
- **Key Features**:
  - Status row with 32px mic/video icons (green #37EF46 for mic on, red #FF5F3D for mic off, gray #B2B2B2 for video off)
  - 28px quick-action button icons for unmute mic, hand raise, audio output
  - **Audio button**: Tap opens iOS HIG context menu; uses `active:opacity-50 transition-opacity duration-100` (momentary tap flash, no persistent highlight)
  - **iOS Context Menu Audio Picker** (identical pattern to `PreJoinPage.tsx`):
    - Scrim overlay: `rgba(0,0,0,0.2)` absolute over entire component, tap-to-dismiss
    - Frosted glass material: `rgba(44,44,46,0.55)` with `saturate(190%) blur(40px)`, `rounded-[14px]`
    - 0.33px outer stroke via `boxShadow: 0 0 0 0.33px rgba(255,255,255,0.1)`
    - Section header "Audio Output": `py-[11px]`, `text-[#98989f]`, 13px
    - Full-width edge-to-edge hairline dividers: `rgba(84,84,88,0.36)`
    - Row layout: leading 16px checkmark space → label + "Connected" subtitle → trailing 24px device icon at 60% opacity
    - Row tap feedback: `active:bg-[rgba(255,255,255,0.12)]`
    - Menu width: 250px, dynamically positioned above the Audio button using `getBoundingClientRect()` relative to `containerRef`, edge-clamped (`Math.max(rightFromCtr, 8)`)
    - Portaled to component root (not inside button wrapper) for correct z-layering
  - **Toast notification**: "Your mic was turned off" — appears when entering on-the-go mode, 4 000 ms auto-dismiss, positioned 10px above button group
  - **Self tile**: 121×136px rounded card with UV initials, network indicator, "You" name tag

#### FocusMode (Active Speaker View)

- **Location**: `/src/app/components/FocusMode.tsx`
- **Purpose**: Shows only the active speaker in a full-width layout, cycling between participants
- **Props**: `isSplit`, `onCollapseSplit`
- **Active Speaker Cycling**: Simulated with `setInterval` every 8 seconds, alternates between 2 participants (Miguel Silva using `imgMiguel`, Babak Shammas using `imgSarah` — follows swapped avatar mapping)

#### AgendaTimerPanel (Meeting Agenda Timer)

- **Location**: `/src/app/components/AgendaTimerPanel.tsx`
- **Purpose**: Displays meeting agenda items with statuses and a reset button
- **Props**: `onClose`, `currentTopicName`
- **Uses**: `MultitaskingPanel` wrapper
- **Agenda Items**: 3 hardcoded items with statuses: "complete", "in-progress", "not-started"
  1. "Summit planning" (10 min) — complete
  2. "Blockers on Easter campaign timeline and Q2 marketing strategy review" (15 min) — in-progress
  3. "Discuss follow-up tasks" (10 min) — not-started

#### ParticipantsPanel (Comprehensive Participant List)

- **Location**: `/src/app/components/ParticipantsPanel.tsx`
- **Purpose**: Full-featured participant list panel with lobby management, action buttons, presence indicators, and bot detection
- **Props**: `onClose`, `hasLobbyGuests?: boolean`
- **Uses custom container** (not `MultitaskingPanel`) with identical styling: `backdrop-blur-[4px] bg-[rgba(24,24,24,0.98)] rounded-tl-[20px] rounded-tr-[20px]`, `height: 65vh`
- **SVG Sources**:
  - Main participant icons: `/src/imports/svg-jfy15c3zsm.ts`
  - Action button icons: `/src/imports/svg-q5lqoxjmtn.ts` (`p3170400` = Add people, `pcd5c000` = Add a room, `p118fa800` = Share invite)
- **State**: `lobbyExpanded`, `meetingExpanded` (both default `true`)

**Sub-components**:
- `GlassButton` — 44px circular button with glass effect (mix-blend-color-dodge), used in header
- `SectionChevron` — 12px chevron that rotates -90deg when collapsed (200ms transition)
- `PresenceIndicator` — Presence dots: busy (red #D74553), away (yellow #F8D22A), dnd (red), available (green #92C353); all with black stroke
- `PhotoAvatar` — 52px circular avatar with photo and optional presence indicator
- `InitialsAvatar` — 52px circular avatar with generated initials, configurable background color (default: Teams purple `#5b5fc7`); used for Udayan Vidyanta ("UV") and Wanda Howard
- `BotAvatar` — 52px circular gray (#292929) avatar with bot icon
- `ParticipantRow` — Full participant row: avatar + name + optional role + optional "Bot suspected" badge + camera/mic icons
- `SectionHeader` — Expandable/collapsible section header with chevron and Teams purple (#5b5fc7) title text, 46px height
- `SubSectionHeader` — Non-expandable sub-section with gray (#6e6e6e) label text, 44px height, optional right-side action
- `AdmitAllButton` — Pill-shaped "Admit all" button, `bg-[#212122]`, absolute positioned top-right
- `CardWrapper` — Rounded container (24px border-radius) for grouped participant rows

**Data**:
- **Lobby users** (only shown when `hasLobbyGuests=true`):
  - Daniela Mandera (no avatar, busy presence)
  - Wanda Howard (no avatar, initialsColor `#c239b3`, away presence)
- **Meeting suspicious users**: Meeting Recording (bot, botSuspected badge)
- **Meeting verified users**: Udayan Vidyanta (no avatar, InitialsAvatar with default purple), Aadi Kapoor (organiser, busy), Sarah Johnson (`imgBabak`), Miguel Silva (dnd), Jessica Kline (away), Ray Tanaka (away), Babak Shammas (`imgSarah`)

**Layout**:
- Header: Back button (left) + centered "Participants" title + 2 glass buttons (right)
- Scrollable content with 12px horizontal padding, 20px bottom padding
- Lobby section: Section header -> "Verified users" sub-section with "Admit all" -> Participant rows -> 20px spacer
- Meeting section: Section header -> Action buttons row -> "Suspicious users" sub-section -> "Verified users" sub-section

**Action Buttons** (positioned inside "In the meeting" accordion, above "Suspicious users"):
- Three Figma-matched circular buttons in a horizontal row with 30px gap, 20px horizontal padding
- Each button: 56px `#404040` circle with SVG drop shadow filters (blur + offset)
- White 24px icon centered inside circle
- White 11px label below (`font-['SF_Pro_Text:Regular']`, `tracking-[0.06px]`)
- Labels: "Add people", "Add a room", "Share invite"
- Non-functional placeholders (no `onClick` handlers)

---

### Updated Components

#### MultitaskingPanel — Corner Radius Change

- **Change**: Top corner radius reduced from 38px to 20px
- **Before**: `rounded-tl-[38px] rounded-tr-[38px]`
- **After**: `rounded-tl-[20px] rounded-tr-[20px]`
- **Applies to**: All split-screen panels using `MultitaskingPanel` (Chat, Copilot, More, Agenda Timer, Notifications) and the `ParticipantsPanel` custom container

#### MorePanel — Enhanced L2 Navigation & Props

- **New Props**:
  - `hasLobbyGuests?: boolean` — Passed through to `ParticipantsPanel`
  - `initialView?: "main" | "participants"` — Allows external navigation directly to participants view (e.g., from "View lobby" in notification hub)
  - `setInitialView?: (view: "main" | "participants") => void` — Resets the initial view state in parent
- **NestedView type**: `"main" | "meetingInfo" | "meetingSettings" | "share" | "participants"`
- **L2 Pages**: Meeting Info, Meeting Settings, Share, Participants — all use `MultitaskingPanel` with `isNestedView={true}` for left-chevron back navigation
- **Participants view**: Renders `ParticipantsPanel` directly (bypasses `MultitaskingPanel`)
- **L2 Card Pattern**: Transparent parent scroll containers with inner card wrappers using `bg-[rgba(36,36,37,0.7)]` and `rounded-[24px]`

#### MorePanel — Share Page Divider Consistency

- **Change**: All dividers on the Share L2 page updated to match Meeting Info and Meeting Settings style
- **Before**: `left-[56px] bg-white/20` (indented with white opacity)
- **After**: `left-0 right-0 bg-[#323232]` (full-width with solid dark gray)
- **Affected items**: Dividers below "Share PowerPoint", "Share photo", "Share video"

#### MeetingHeader — Imperative Handle & Auto-Hide

- **New export**: `MeetingHeaderHandle` interface with `show()` method
- **Uses `forwardRef`** and `useImperativeHandle` to expose `show()` to parent
- **Auto-hide behavior**: Header automatically hides after 8 seconds via `scheduleHide()` with `clearHideTimer()` cleanup
- **Participant count**: Default changed to `12`

#### MeetingPage.tsx (formerly App.tsx) — New State & Panel Support

- **New activePanel values**: `"agenda"` and `"notifications"` added to the union type
- **New state variables**:
  - `currentView`: `number` (0: on-the-go, 1: gallery, 2: focus) — tracks which swipeable view is active
  - `isRecording`: `boolean` — recording state
  - `hasLobbyGuests`: `boolean` — whether lobby guests are present
  - `lobbyCount`: `number` — number of people waiting in lobby
  - `notificationCounter`: `number` — unread notification count
  - `morePanelInitialView`: `"main" | "participants"` — controls MorePanel's initial nested view
- **New refs**:
  - `headerRef`: `MeetingHeaderHandle` — for imperative `show()` calls
  - `raisedHandsTimerRef`, `raisedHandsQueueRef`, `addedCountRef` — demo automation for raised hands
  - `seenNotificationTypesRef` — tracks which notification types have been seen
  - `currentNotificationTypeRef` — tracks current notification type via ref for async callbacks
  - `demoTimerRef` — demo automation timer
- **New imports**: `AgendaTimerPanel`, `NotificationsPanel`, `SwipeableViews`
- **MeetingStage replaced by SwipeableViews** in the render tree — `SwipeableViews` wraps `OnTheGoMode`, `MeetingStage`, and `FocusMode`

---

### Critical: Avatar Image Variable Name Swapping

**The Figma asset variable names for Sarah Johnson and Babak Shammas are swapped throughout the entire codebase.** This is a known artifact from the original Figma export:

- `imgBabak` (variable name) actually contains **Sarah Johnson's photo** (blonde woman)
- `imgSarah` (variable name) actually contains **Babak Shammas's photo** (African American man)

**Correct usage pattern** (all components must follow this):
```typescript
// Sarah Johnson uses imgBabak
{ name: "Sarah Johnson", avatar: imgBabak }

// Babak Shammas uses imgSarah
{ name: "Babak Shammas", avatar: imgSarah }
```

**Components that implement this swapped mapping**:
- `MeetingStage.tsx` (gallery tiles — source of truth)
- `ParticipantsPanel.tsx` (participant list)
- `ChatPanel.tsx` (chat message avatars)
- `FocusMode.tsx` (focus view participants)
- `MeetingPage.tsx` (chat avatar references for ChatPanel props)

---

### Meeting Participant Roster

**Gallery participants** (6 people rendered in `MeetingStage.tsx` video tiles):
1. Aadi Kapoor
2. Sarah Johnson
3. Miguel Silva
4. Jessica Kline
5. Ray Tanaka
6. Babak Shammas

**Self-tile user** (7th meeting participant):
- **Udayan Vidyanta** — Renders with a Teams purple `#5b5fc7` "UV" initials avatar via the `InitialsAvatar` component in `ParticipantsPanel`; represented by the draggable `SelfVideoTile` component in the meeting stage

**Lobby users** (not in gallery, only shown in `ParticipantsPanel` when `hasLobbyGuests=true`):
- Daniela Mandera
- Wanda Howard

---

### SVG Icon Path Reference

SVG icon paths are spread across multiple import files. Comprehensive mapping:

| Import File | Used By | Key Paths |
|---|---|---|
| `/src/imports/svg-jj55k4btsr.ts` | Meeting Settings | Speaker audio, background effects, hold, RTT, language, lock |
| `/src/imports/svg-r18pzyrpzd.ts` | Meeting Info | Call my phone, dialpad |
| `/src/imports/svg-dr4wj00flk.ts` | Share | PowerPoint, photo, video, screen share icons |
| `/src/imports/svg-3o4pdasyza.ts` | Notifications accordion chevron | Section chevron, recording icon |
| `/src/imports/svg-jfy15c3zsm.ts` | Participants | Presence indicators, participant icons, camera/mic, chevron, bot icon, bot-suspected badge |
| `/src/imports/svg-eh80f8nzlx.ts` | Notifications (Figma ref) | `pf4077f0` (section chevron), `p3cbfa6f0` (lobby icon) |
| `/src/imports/svg-uwy6w9sims.ts` | Participants (newer Figma ref) | Additional participant icons |
| `/src/imports/svg-cu2vfc5bas.ts` | Notifications/Participants (newer Figma ref) | Shared icons |
| `/src/imports/svg-q5lqoxjmtn.ts` | Participants action buttons | `p3170400` (Add people), `pcd5c000` (Add a room), `p118fa800` (Share invite) |
| `/src/imports/svg-ct9ylmbywn.ts` | On-the-go mode | Mic on/off status (32px), video off, button icons (28px) |

---

### Updated Project Structure

All component files as of current documentation:

```
/src/app/
├── App.tsx                           # Router shell (RouterProvider)
├── routes.ts                         # React Router browser routes
└── /components/
    ├── ActiveMeetingContext.tsx       # Meeting state provider (timer, mic, video, sharing)
    ├── AdditionalInfoLayer.tsx       # Raised hands, timers, alerts (pills disable in OTG)
    ├── AgendaTimerPanel.tsx          # Meeting agenda timer panel
    ├── BottomNav.tsx                 # Bottom navigation bar
    ├── CalendarPage.tsx              # Calendar page with meeting dock
    ├── ChatPanel.tsx                 # Chat multitasking panel
    ├── CollapsedInputBox.tsx         # Collapsed input (no keyboard)
    ├── CopilotPanel.tsx              # Copilot AI assistant panel
    ├── FocusMode.tsx                 # Focus (active speaker) view
    ├── FullscreenContentView.tsx     # Immersive landscape shared content view
    ├── Header.tsx                    # Meeting header (hidden in split)
    ├── HorizontalScrollContainer.tsx # Scroll utility component
    ├── IncomingAudioIndicator.tsx    # Active speaker visual
    ├── KeyboardOverlay.tsx           # iOS keyboard simulation
    ├── MeetingDock.tsx               # Out-of-meeting floating dock
    ├── MeetingHeader.tsx             # Meeting info header (imperative show/hide)
    ├── MeetingPage.tsx               # Main meeting orchestrator
    ├── MeetingStage.tsx              # Meeting gallery/split view
    ├── MicActiveIndicator.tsx        # Mic on indicator (canonical)
    ├── MicOffIndicator.tsx           # Mic off/muted indicator (canonical)
    ├── MorePanel.tsx                 # More menu panel (L2 navigation)
    ├── MultitaskingPanel.tsx         # Base panel wrapper component
    ├── NetworkIndicator.tsx          # Network strength indicator
    ├── NotificationUFD.tsx           # UFD notification component (swipe-to-dismiss)
    ├── NotificationsPanel.tsx        # Notification hub panel
    ├── OnTheGoMode.tsx               # On-the-go minimized view (iOS audio picker)
    ├── PageIndicator.tsx             # Purple dot page indicators (#968CFF)
    ├── ParticipantsPanel.tsx         # Comprehensive participant list panel
    ├── PreJoinPage.tsx               # Pre-join page (iOS audio picker, camera preview)
    ├── RootLayout.tsx                # Root layout (ActiveMeetingProvider + Outlet)
    ├── SelfVideoTile.tsx             # Floating self video tile
    ├── SharedKeyboardOverlay.tsx     # Shared keyboard component
    ├── StatusBar.tsx                 # iOS status bar + notch
    ├── SwipeableViews.tsx            # Horizontal swipe container for 3 views
    └── VideoTile.tsx                 # Individual participant tile
```

---

**Previous Changes** (February 10, 2026):
- Added NotificationsPanel component with comprehensive notification hub functionality
- Implemented swipe-to-dismiss for individual notifications using react-swipeable
- Added "Clear all" functionality with disabled state management
- Implemented proper empty state with vertical centering
- Documented nested menu navigation pattern for split-screen consistency
- Implemented left-chevron icon for L2 nested menu views (Meeting info, Meeting settings)
- Added `isNestedView` prop to MultitaskingPanel for conditional icon rendering
- Updated MorePanel to pass `isNestedView={true}` for nested navigation views

**Maintenance**: This document should be updated whenever:
- New components are added
- Existing components are modified
- User flows change
- Design system is updated
- New features are implemented
- Bugs are discovered or fixed

**For Questions**: Refer to the codebase directly or the engineering team for clarification on implementation details.
