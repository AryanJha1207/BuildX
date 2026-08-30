# SIH 26130 --- Module Specification 15

# ENTREPRENEUR DASHBOARD

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 15 --- Entrepreneur Dashboard\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Single-Window Entrepreneur Command Center\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP\
**Upstream:** Entrepreneur, Business Profile, Approval Intelligence,
Roadmap, Applications, Documents, Queries, Inspections, Notifications\
**Downstream:** SLA / Renewal / Alerts, Incentives, Analytics

------------------------------------------------------------------------

## 1. Module Purpose

The Entrepreneur Dashboard is the primary landing page for the
entrepreneur after entering the platform.

Its purpose is to give the entrepreneur a **single-window view** of the
complete approval journey.

Instead of making the entrepreneur search through separate modules, the
dashboard should immediately answer:

-   What is happening with my business?
-   Which approvals are required?
-   What is currently in progress?
-   What action do I need to take?
-   Which applications are waiting for government action?
-   Are there any queries?
-   Are inspections scheduled?
-   Which approvals have been completed?
-   What should I do next?

------------------------------------------------------------------------

# 2. Core Principle

The dashboard is an **orchestration view**, not a second source of
truth.

``` text
Business Profile
       ↓
Approval Intelligence
       ↓
Personalized Roadmap
       ↓
Applications
       ↓
Government Workflow
       ↓
Dashboard
```

The dashboard reads the current state from the underlying modules.

It must not maintain disconnected duplicate statuses.

------------------------------------------------------------------------

# 3. Dashboard Information Hierarchy

The page should prioritize information in this order:

``` text
1. Action Required
2. Current Application Status
3. Approval Roadmap
4. Active Applications
5. Government Queries
6. Upcoming Inspections
7. Completed Approvals
8. Documents / Other Useful Shortcuts
```

The entrepreneur should see urgent actions before general information.

------------------------------------------------------------------------

# 4. Dashboard Header

Recommended:

``` text
Good morning, Divyansh

Here's what's happening with your
business approvals.

[Business: FreshChain Cold Logistics Pvt. Ltd.]
```

The greeting can be generic in the prototype.

The selected business should be clearly identified.

------------------------------------------------------------------------

# 5. Primary Business Context

Show:

``` text
FreshChain Cold Logistics Pvt. Ltd.

Logistics / Warehousing
Cold Storage / Cold Chain
Pune, Maharashtra
```

This context should come from Business Profile.

Do not ask the entrepreneur to re-enter it on the dashboard.

------------------------------------------------------------------------

# 6. Top-Level Summary Cards

Recommended:

``` text
Approvals
6

In Progress
2

Action Required
1

Approved
3
```

Optional:

``` text
Queries
1
```

The values must be calculated from real application/workflow data.

Do not hard-code dashboard statistics.

------------------------------------------------------------------------

# 7. Action Required

This is the highest-priority section.

Example:

``` text
ACTION REQUIRED

1 item needs your attention

FSSAI Application
Revised Process Flow Required

Query raised by FSSAI
Due: 05 Sep 2026

[Respond]
```

If no action is required:

``` text
YOU'RE ALL CAUGHT UP

No immediate action is required.
```

------------------------------------------------------------------------

# 8. Multiple Action Items

If several actions exist:

``` text
ACTION REQUIRED

FSSAI
Revised Process Flow
[Respond]

MPCB
Additional Information
[Respond]

Inspection
05 Sep 2026
[View Details]
```

Prioritize blocking/time-sensitive items first.

------------------------------------------------------------------------

# 9. Action Item Sources

Action-required cards can originate from:

-   Government Query
-   Required Document
-   Pre-validation issue
-   Scheduled Inspection
-   Application completion
-   Configured renewal/compliance alert
-   Other configured workflow event

Only actual actionable events should appear here.

------------------------------------------------------------------------

# 10. Personalized Roadmap Preview

The dashboard should include a compact roadmap summary.

Example:

``` text
YOUR APPROVAL ROADMAP

3 of 6 approvals completed

✓ Business Registration
✓ FSSAI
● MPCB — In Progress
○ Fire NOC
○ Electricity Connection
○ Other configured approval

[View Full Roadmap]
```

The full roadmap remains a separate module.

------------------------------------------------------------------------

# 11. Current Applications

Show active applications.

Example:

``` text
YOUR APPLICATIONS

FSSAI
APP-MH-2026-00124
Under Review

MPCB
APP-MH-2026-00125
Query Raised

[View All Applications]
```

Each application should link to its tracking page.

------------------------------------------------------------------------

# 12. Application Status

Use the common workflow status.

Examples:

``` text
Draft
Ready to Submit
Submitted
Under Review
Query Raised
Inspection Scheduled
Final Review
Approved
Rejected
```

The dashboard must not rename these into unrelated custom states.

------------------------------------------------------------------------

# 13. Application Progress

A compact progress indicator can show:

``` text
FSSAI

Submitted
   ●────●────●────○
 Review Query Inspection Decision
```

This is visual guidance only.

The underlying status comes from Unified Government Workflow.

------------------------------------------------------------------------

# 14. Government Queries

Show open queries prominently.

Example:

``` text
GOVERNMENT QUERIES

1 Open

FSSAI
Revised Process Flow Required

[Respond]
```

If none:

``` text
No open government queries.
```

------------------------------------------------------------------------

# 15. Upcoming Inspections

Show scheduled inspections.

Example:

``` text
UPCOMING INSPECTION

FSSAI

05 Sep 2026
11:00 AM

FreshChain Cold Logistics Pvt. Ltd.

[View Details]
```

Only show configured/scheduled inspections.

------------------------------------------------------------------------

# 16. Completed Approvals

Show recently completed approvals.

Example:

``` text
RECENT APPROVALS

✓ FSSAI
Approved
06 Sep 2026

[View]
```

Optional:

``` text
Approval Reference:
APR-MH-2026-00124
```

------------------------------------------------------------------------

# 17. Documents Shortcut

Provide quick access:

``` text
DOCUMENT VAULT

8 Documents
6 Verified

[Open Document Vault]
```

This is a shortcut, not a duplicate document manager.

------------------------------------------------------------------------

# 18. Notifications

Dashboard should provide a notification entry point.

Examples:

``` text
Notifications
3 unread
```

Meaningful events include:

-   query raised;
-   response accepted;
-   inspection scheduled;
-   application submitted;
-   approval/rejection;
-   configured alerts.

------------------------------------------------------------------------

# 19. Notification Panel

Recommended:

``` text
NOTIFICATIONS

● FSSAI query raised
  Revised Process Flow Required
  10 min ago

● Inspection scheduled
  05 Sep 2026 • 11:00 AM
  2 hours ago

○ Application submitted
  APP-MH-2026-00124
  Yesterday

[View All]
```

------------------------------------------------------------------------

# 20. Quick Actions

Useful quick actions:

``` text
[View Roadmap]
[Start Application]
[Document Vault]
[View Applications]
```

Do not overload the dashboard with every possible action.

------------------------------------------------------------------------

# 21. New Application

If the entrepreneur wants to start another approval:

``` text
[Start Application]
```

This should lead to the appropriate roadmap/approval flow.

The dashboard should not independently determine approval applicability.

------------------------------------------------------------------------

# 22. Application Search

A simple search may be provided for the entrepreneur's own applications.

Search:

-   application ID;
-   approval name.

Example:

``` text
Search applications...
```

This is optional for MVP if the number of applications is small.

------------------------------------------------------------------------

# 23. Status Filters

Optional filters:

``` text
All
In Progress
Action Required
Approved
Rejected
```

Keep filtering simple.

------------------------------------------------------------------------

# 24. Business Selector

If the product supports multiple businesses:

``` text
Business
FreshChain Cold Logistics Pvt. Ltd.
▼
```

Switching business should refresh all dashboard data.

For MVP, one business is sufficient.

------------------------------------------------------------------------

# 25. Empty Dashboard

If the entrepreneur has no applications:

``` text
WELCOME TO YOUR APPROVAL DASHBOARD

Your approval journey starts here.

Set up your Business Profile to discover
the approvals relevant to your business.

[Complete Business Profile]
```

This connects the dashboard back to the onboarding flow.

------------------------------------------------------------------------

# 26. Profile Incomplete State

If Business Profile is incomplete:

``` text
COMPLETE YOUR BUSINESS PROFILE

Your approval roadmap cannot be fully
personalized yet.

[Complete Profile]
```

The dashboard should not pretend the roadmap is complete.

------------------------------------------------------------------------

# 27. No Action Required State

When there are no pending actions:

``` text
YOU'RE ALL CAUGHT UP

Your applications are progressing.
We'll highlight anything that needs
your attention here.
```

------------------------------------------------------------------------

# 28. Application State Examples

### Submitted

``` text
FSSAI
Submitted

Waiting for department review
```

### Under Review

``` text
FSSAI
Under Review

Department is reviewing your application
```

### Query

``` text
FSSAI
Action Required

Revised Process Flow Required

[Respond]
```

### Inspection

``` text
FSSAI
Inspection Scheduled

05 Sep • 11:00 AM

[View Details]
```

### Approved

``` text
FSSAI
✓ Approved

06 Sep 2026
```

### Rejected

``` text
FSSAI
Rejected

[View Decision]
```

Do not imply guaranteed approval timelines.

------------------------------------------------------------------------

# 29. Dashboard Timeline Preview

A compact recent activity section can show:

``` text
RECENT ACTIVITY

Today
Query response submitted

Yesterday
Inspection scheduled

30 Aug
Application submitted
```

Full timeline remains on the application detail page.

------------------------------------------------------------------------

# 30. Roadmap Status Synchronization

The dashboard roadmap preview must reflect the actual Personalized
Roadmap.

Example:

``` text
Application Approved
       ↓
Roadmap updated
       ↓
Dashboard updated
```

No manual duplicate dashboard state should be maintained.

------------------------------------------------------------------------

# 31. Query Synchronization

When a query is raised:

``` text
Government Review
       ↓
Query Created
       ↓
Workflow = QUERY_RAISED
       ↓
Notification
       ↓
Dashboard = ACTION REQUIRED
```

After response:

``` text
Response Submitted
       ↓
Dashboard updates
       ↓
Waiting for Government Review
```

------------------------------------------------------------------------

# 32. Inspection Synchronization

When inspection is scheduled:

``` text
Inspection Scheduled
       ↓
Dashboard
       ↓
Upcoming Inspection
```

After completion:

``` text
Inspection Completed
       ↓
Dashboard
       ↓
Status Updated
```

------------------------------------------------------------------------

# 33. Approval Synchronization

When application is approved:

``` text
Approved
       ↓
Dashboard
       ↓
Roadmap
       ↓
Recent Approvals
       ↓
Compliance / Next Action
```

Only configured post-approval actions should be shown.

------------------------------------------------------------------------

# 34. Dashboard Data Sources

Conceptually:

``` text
Dashboard
├── Business Profile
├── Approval Intelligence
├── Personalized Roadmap
├── Applications
├── Document Vault
├── Queries
├── Inspections
├── Notifications
└── Workflow Events
```

The dashboard aggregates these sources.

------------------------------------------------------------------------

# 35. Dashboard Performance

The MVP should avoid loading every historical document/event
unnecessarily.

Load:

-   current business context;
-   current application statuses;
-   open actions;
-   relevant recent activity.

Historical detail can load when the user opens the relevant module.

------------------------------------------------------------------------

# 36. Responsive Design

The dashboard must work on:

-   desktop;
-   laptop;
-   tablet;
-   mobile-width screens.

Desktop is the primary prototype target.

Mobile should remain usable rather than being a completely separate
experience.

------------------------------------------------------------------------

# 37. UI Theme

Use the locked:

**LIGHT / WHITE**

theme.

Recommended:

-   white background;
-   white cards;
-   dark charcoal text;
-   professional blue primary actions;
-   subtle borders;
-   clear status badges;
-   generous spacing;
-   restrained shadows.

Avoid:

-   dark theme;
-   heavy gradients;
-   excessive animation;
-   overly colorful dashboards.

The platform should feel like a professional government/business
workflow product.

------------------------------------------------------------------------

# 38. Recommended Desktop Layout

``` text
┌──────────────────────────────────────────────────┐
│ BuildX                         Notifications  ◉ │
├──────────────┬───────────────────────────────────┤
│ Dashboard    │ Good morning                      │
│ Profile      │ FreshChain Cold Logistics Pvt Ltd │
│ Roadmap      │                                   │
│ Applications │ ┌──────┐ ┌──────┐ ┌───────────┐ │
│ Documents    │ │  6   │ │  2   │ │     1     │ │
│              │ │Appro.│ │In Prog│ │Action Req │ │
│              │ └──────┘ └──────┘ └───────────┘ │
│              │                                   │
│              │ ACTION REQUIRED                   │
│              │ ┌───────────────────────────────┐ │
│              │ │ FSSAI • Process Flow Query   │ │
│              │ │ Due: 05 Sep        [Respond] │ │
│              │ └───────────────────────────────┘ │
│              │                                   │
│              │ YOUR APPROVAL ROADMAP             │
│              │ ✓ Registration                    │
│              │ ✓ FSSAI                          │
│              │ ● MPCB                           │
│              │ ○ Fire NOC                        │
│              │                                   │
│              │ APPLICATIONS                      │
│              │ FSSAI  Under Review              │
│              │ MPCB   Query Raised              │
└──────────────┴───────────────────────────────────┘
```

------------------------------------------------------------------------

# 39. Mobile Layout

On smaller screens:

``` text
Header
Business Context
Summary Cards
Action Required
Roadmap Preview
Applications
Queries
Inspections
Recent Activity
```

Cards should stack vertically.

Navigation can collapse into a menu.

------------------------------------------------------------------------

# 40. Loading State

Use skeletons for:

-   summary cards;
-   application list;
-   roadmap preview;
-   action section.

Example:

``` text
Loading your approval dashboard...
```

------------------------------------------------------------------------

# 41. Error State

If dashboard data fails:

``` text
We couldn't load your dashboard.

Your applications and documents are safe.

[Try Again]
```

Do not expose technical/database errors.

------------------------------------------------------------------------

# 42. Partial Data State

If one subsystem fails but others load:

``` text
Some dashboard information is temporarily
unavailable.

[Retry]
```

Do not erase or fabricate available information.

------------------------------------------------------------------------

# 43. Access Control

Entrepreneurs must only see:

-   their own business data;
-   their own applications;
-   their own documents;
-   their own queries;
-   their own inspections;
-   their own notifications.

The dashboard must not expose another user's information.

------------------------------------------------------------------------

# 44. Security

-   Enforce authorization at backend/data layer.
-   Do not rely only on frontend route protection.
-   Do not expose service credentials.
-   Use appropriate Supabase Row Level Security where applicable.
-   Do not expose unrestricted document storage URLs.

------------------------------------------------------------------------

# 45. Hero Dashboard

Hero business:

**FreshChain Cold Logistics Pvt. Ltd.**

Dashboard should demonstrate:

``` text
Approvals
6

In Progress
2

Action Required
1

Approved
3
```

Primary action:

``` text
FSSAI
Revised Process Flow Required

[Respond]
```

Roadmap:

``` text
✓ Registration
✓ FSSAI
● MPCB
○ Fire NOC
○ Electricity
○ Other configured approval
```

------------------------------------------------------------------------

# 46. Hero Dashboard Journey

The dashboard should dynamically change as the hero workflow progresses.

### Stage 1

``` text
FSSAI
Submitted
```

### Stage 2

``` text
FSSAI
Under Review
```

### Stage 3

``` text
ACTION REQUIRED

Revised Process Flow Required
[Respond]
```

### Stage 4

``` text
Inspection Scheduled
05 Sep • 11:00 AM
```

### Stage 5

``` text
✓ FSSAI Approved
```

This demonstrates that the dashboard is a live command center rather
than a static homepage.

------------------------------------------------------------------------

# 47. Acceptance Criteria

The Entrepreneur Dashboard is complete when:

### Context

-   Correct business is displayed.
-   Relevant Business Profile information is visible.

### Summary

-   Approval count is calculated.
-   In-progress count is calculated.
-   Action-required count is calculated.
-   Approved count is calculated.

### Action Required

-   Queries appear.
-   Missing/configured required actions appear.
-   User can navigate directly to the action.
-   Empty state works.

### Applications

-   Active applications are displayed.
-   Current workflow status is correct.
-   Application detail can be opened.

### Roadmap

-   Roadmap preview is synchronized.
-   Progress is accurate.

### Queries

-   Open queries are visible.
-   Respond action works.

### Inspections

-   Upcoming inspections are visible.
-   Inspection details can be opened.

### Approvals

-   Approved applications appear.
-   Decision details can be opened.

### Notifications

-   Unread notification count works.
-   Meaningful workflow events appear.

### Synchronization

-   Dashboard reflects workflow changes.
-   No independent duplicate status logic exists.

### Security

-   Only authorized entrepreneur data is visible.

### Hero

-   APP-MH-2026-00124 changes visibly through the workflow.

### UI

-   Light/white theme.
-   Desktop and mobile layouts.
-   Loading/error/empty states.

------------------------------------------------------------------------

# 48. Out of Scope

Do not build:

-   complex business analytics on the entrepreneur dashboard;
-   AI assistant as a replacement for the dashboard;
-   real government notification channels;
-   advanced personalization algorithms;
-   multi-business enterprise management;
-   complex financial dashboards;
-   nationwide business intelligence.

------------------------------------------------------------------------

# 49. Final Locked Definition

**ENTREPRENEUR DASHBOARD** is the single-window command center that
gives the entrepreneur a clear, real-time view of their business
approval journey.

Its core responsibility is:

> **Aggregate the current state of the Business Profile, approval
> roadmap, applications, documents, queries, inspections, notifications,
> and government workflow into one actionable dashboard without creating
> duplicate sources of truth.**

The defining principle is:

> **If the entrepreneur wants to know "What do I need to do next?", the
> Dashboard should answer immediately.**

The critical prototype journey is:

``` text
Dashboard
   ↓
Action Required
   ↓
Government Query
   ↓
Respond
   ↓
Inspection Scheduled
   ↓
Application Approved
   ↓
Roadmap Updated
   ↓
Next Compliance / Business Action
```

**STATUS: LOCKED FOR PROTOTYPE**
