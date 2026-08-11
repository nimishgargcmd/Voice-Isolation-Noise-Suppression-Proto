# UFD Notification System

## Overview

UFD (User Feedback Display) is a banner notification pattern used to communicate information to users during meetings. UFDs are one mode of communication alongside alerts, toasts, and other notification patterns.

## Anatomy

A UFD comprises three main parts stacked horizontally:

1. **Icon** (required): Visual signifier representing the subject/type of the notification
2. **Content** (required): Text message conveying the information
3. **Action** (optional): Can be an icon (e.g., dismiss X button) or text (e.g., "View", "View lobby", "Suppress")

### Layout Structure

```
[Icon] [Content Text] [Action]
```

All three elements are horizontally adjacent with 8px gap between them, contained within a rounded container with:
- Background: `#262626` (normal state)
- Inner stroke: `1px solid #323232`
- Border radius: `12px`
- Padding: `16px`
- Shadow: `0px 4px 8px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)`

## Categories

### Critical Notifications

UFDs carrying content that are **critical for viewing** by participants due to:
- Security reasons
- Legal compliance
- Regulatory requirements

**Examples:**
- Recording and transcription notifications
- Content sharing alerts
- Lobby/guest waiting notifications

### Informational Notifications

UFDs supplying **good-to-have information** that are not as critical.

**Examples:**
- Interpreter status
- Background noise detection
- General meeting updates

## Behavior Rules

### Display Duration

All UFDs stay on screen for **5 seconds** from the time they appear. No UFD persists beyond this duration.

### Multiple UFD Hierarchy

When multiple UFDs need to be displayed, follow this priority system:

#### Rule 1: Informational → Critical
**An informational UFD is replaced by a later appearing critical UFD as soon as it arrives.**

```
Timeline:
0s: Informational UFD appears
2s: Critical UFD arrives → Informational UFD is immediately replaced
7s: Critical UFD disappears (5 seconds after appearing)
```

#### Rule 2: Critical + Later Informational
**If a critical UFD is on screen, a later appearing informational UFD is NOT shown.**

```
Timeline:
0s: Critical UFD appears
2s: Informational UFD arrives → NOT shown (discarded)
5s: Critical UFD disappears
```

#### Rule 3: Critical + Later Critical
**If a critical UFD is on screen, a later appearing critical UFD is queued and shown once the previous critical UFD completes.**

```
Timeline:
0s: Critical UFD #1 appears
2s: Critical UFD #2 arrives → Queued
5s: Critical UFD #1 disappears
5s: Critical UFD #2 appears (from queue)
10s: Critical UFD #2 disappears
```

### Summary Matrix

| Current UFD | Incoming UFD | Behavior |
|-------------|--------------|----------|
| Informational | Critical | Replace immediately |
| Critical | Informational | Discard incoming |
| Critical | Critical | Queue incoming |
| None | Any | Show immediately |

## Transitions & Animations

### Entry Animation
- **Transition**: Fade in (opacity 0 to 1)
- **Duration**: 500ms
- **Easing**: Ease-out

### Exit Animation
- **Transition**: Fade out (opacity 1 to 0)
- **Duration**: 500ms
- **Easing**: Ease-out

### User Dismissal
Users can dismiss a UFD in two ways:

1. **Swipe gesture** (left or right):
   - UFD fades out and slides in the direction of the swipe
   - Duration: 500ms
   - Applies to both stacked and single UFDs

2. **X button** (when available):
   - UFD fades out
   - Duration: 500ms
   - Dismissal is premature (before 5-second timeout)

## Dismiss Semantics: Hard vs Soft

There are two fundamentally different dismiss paths. They determine whether a notification reaches the Notification Hub and whether the pill counter is affected.

### Soft Dismiss (Automatic / Timer-based)

A UFD that disappears on its own after the **4-second auto-dismiss timer** expires.

| Aspect | Behavior |
|--------|----------|
| Trigger | 4 000 ms timer elapses with no user interaction |
| User awareness | **Unknown** — user may or may not have read it |
| Notification Hub | **YES** — notification is preserved in the hub because it may have been missed |
| Pill counter | **No change** — the counter that was incremented on arrival stays |
| `seenNotificationTypesRef` | **Unchanged** — entry remains so the hub can display it |

Also applies to informational UFDs that were **never shown** (discarded by Rule 2 when a critical UFD was on screen). These are treated as potentially missed → they land in the hub and the counter stays.

### Hard Dismiss (Manual / User-initiated)

A UFD that the user **explicitly removes** via swipe gesture or X button tap.

| Aspect | Behavior |
|--------|----------|
| Trigger | Swipe left/right past threshold (80 px) **or** tap the X dismiss button |
| User awareness | **Confirmed** — user has read and acknowledged the notification |
| Notification Hub | **NO** — notification is removed; it does not enter or remain in the hub |
| Pill counter | **Decremented by 1** (clamped to 0) |
| `seenNotificationTypesRef` | **Entry deleted** — prevents the hub from displaying it |

### Status Indicator Independence

Dismissing a UFD (hard or soft) has **no effect** on status indicators in the AIL or notification pill:

| Indicator | Driven by | Unaffected by UFD dismiss? |
|-----------|-----------|---------------------------|
| Recording dot | `isRecording` state (actual recording status) | ✅ Yes |
| Lobby icon | `lobbyCount > 0` (people waiting in lobby) | ✅ Yes |
| Raised hands | `raisedHands` array (participants with hands up) | ✅ Yes |
| Timer badge | `elapsed` from `ActiveMeetingContext` | ✅ Yes |

The lobby icon, for example, continues to show on the notification pill as long as there are people in the lobby — regardless of whether the user hard-dismissed the "Guests are waiting" UFD.

**Notification pill visibility rule**: The pill is visible whenever `notificationCount > 0 OR isRecording OR lobbyCount > 0`. This ensures status indicators persist even after all notifications have been hard-dismissed (counter = 0). The counter badge inside the pill only renders when `notificationCount > 0`.

### Counter Logic Summary

```
On UFD arrival:
  if notification type not yet seen → counter += 1, add to seenRef

On soft dismiss (auto-timer):
  → advance to next queued notification (or clear)
  → counter unchanged, seenRef unchanged

On hard dismiss (swipe / X button):
  → remove from seenRef, counter -= 1
  → advance to next queued notification (or clear)

On hub dismiss (swipe in NotificationsPanel):
  → remove from seenRef, counter -= 1

On hub "Clear all":
  → clear seenRef, counter = 0
```

## Coexistence with AIL (Additional Information Layer)

### Spatial Relationship
- UFDs and AIL occupy the **same vertical slot** at the top of the meeting stage
- They are **mutually exclusive** in display—only one can be shown at a time
- UFDs can take up to the height of a double-row AIL (~86px including gaps)

### Replacement Behavior
- When a UFD appears, it slides in from the top and **covers the AIL**
- The AIL remains behind the UFD and is not destroyed

### AIL Data Persistence
**The AIL data persists and continues to update even when hidden by a UFD.**

Examples of persistent updates:
- **Notification counter**: Each triggered UFD increments the notification pill counter by +1, even if the UFD is queued or replaced
- **Raised hands queue**: When a UFD is displayed, participants can still raise/lower hands, and the raised hands list updates in real-time behind the UFD
- **Timer**: Meeting timer continues to run and update
- **Recording status**: Recording indicator state updates continue

When the UFD disappears (after 5 seconds or manual dismissal), the **updated AIL reappears** with current data.

### Dynamic Stage Adjustment
- The meeting stage (video gallery) **dynamically fills** the remaining vertical space
- Calculation: `Stage Height = Available Height - (AIL or UFD Height) - Bottom Panel Height`
- The bottom multitasking panel remains fixed regardless of AIL/UFD state

## Stacking Behavior

When multiple **critical** notifications are queued:

### Two Visual States

#### Single State (No Queue)
- **Total container height**: 86px
- **Container padding**: 16px top and bottom
- **Card height**: 54px (86px - 32px padding)
- **Badge counter**: Hidden
- **Background card**: Not visible
- **Appearance**: Single notification card centered in container

#### Stacked State (Queue Present)
- **Total container height**: 86px (same as single state - no height change for meeting tiles!)
- **Top card**:
  - Margin top: 12px
  - Padding: 12px vertical, 16px horizontal
  - Card height: 54px (content area)
  - Total top card height: 78px (12px margin + 12px padding top + 54px content + 12px padding bottom)
- **Background card**:
  - Peeks out 8px at the bottom (86px total - 78px top card = 8px visible)
  - Width: 324.9px (90% of 361px)
  - Height: 62px
  - Border radius: 10.8px (90% of 12px)
  - Padding: 14.4px (90% of 16px)
  - Background color: `#0A0604`
  - Positioned at bottom: 0px
- **Badge counter**: Visible showing "+N"
  - Position: top: 5px, left: 5px (relative to top card)
  - Height: 12.8px, min-width: 12.8px
  - Horizontal padding: 4.8px
  - Background: `#7f85f5`
  - Text: SF Pro Text Semibold, 8.8px, 0.048px letter spacing, black color
- **Key benefit**: Meeting tiles maintain same height because total UFD container stays at 86px

## Typography

- **Font**: SF Pro Text Regular
- **Size**: 13px
- **Line height**: 18px
- **Letter spacing**: -0.08px
- **Color**: `#e1e1e1`
- **Link color**: `#7f85f5` (for actionable text like "Privacy Policy", "Suppress")

## Implementation Notes

- UFDs should appear at the top of the meeting interface
- Dismiss actions (X button) allow users to manually close notifications before 5-second timeout
- Multiple critical UFDs form a FIFO (First In, First Out) queue
- Informational UFDs are never queued—they're either shown immediately or discarded
- All animations can be tweaked for optimal feel
- Stack state provides visual feedback for pending notifications without overwhelming the UI

## Layout & Positioning

### Placement
- **Position**: Top of screen, directly below meeting header (when visible)
- **Relationship with AIL**: UFDs **replace** the Additional Information Layer (AIL)
  - When a UFD appears, the AIL disappears
  - When a UFD dismisses, the AIL reappears
  - Never shown simultaneously

### Z-index & Layering
- UFD replaces AIL in the layout flow
- Meeting stage (video tiles) dynamically adjusts height with smooth transitions
- Height transition duration: 300ms ease-out

### Width & Margins
- **Width**: Full screen width (390px on mobile frame)
- **Horizontal padding**: 16px on left and right
- **Background**: Black (#000000) fills entire width
- **No vertical padding**: Black background has no excess space at top or bottom