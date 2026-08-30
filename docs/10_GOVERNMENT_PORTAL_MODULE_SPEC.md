# SIH 26130 --- Module Specification 10

# GOVERNMENT PORTAL

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 10 --- Government Portal\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Government Officer Workspace\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP\
**Upstream:** Unified Government Workflow\
**Downstream:** Review, Query, Inspection, Approve / Reject,
Notifications, Analytics

------------------------------------------------------------------------

## 1. Module Purpose

The Government Portal is the officer-facing workspace for processing
applications submitted through the platform.

It gives authorized government users one place to:

-   see incoming applications;
-   filter and search applications;
-   open application details;
-   review submitted information;
-   inspect documents;
-   raise queries;
-   review query responses;
-   schedule inspections;
-   complete inspections;
-   make final decisions;
-   view the application timeline.

The portal is the **visual interface for the Unified Government
Workflow**.

------------------------------------------------------------------------

# 2. Core Principle

The Government Portal does not maintain a separate workflow state.

It operates on the same application/workflow records used by:

-   Entrepreneur Dashboard;
-   Personalized Roadmap;
-   Notifications;
-   Application Tracking.

Flow:

``` text
Unified Workflow
       ↓
Government Portal
       ↓
Officer Action
       ↓
Workflow State Change
       ↓
Entrepreneur + Roadmap + Notifications
```

------------------------------------------------------------------------

# 3. Government Role

The MVP uses a controlled role:

**Government Officer**

Example hero officer:

**Amit Sharma**

The portal should be designed so role-based access can be expanded
later.

For MVP, one officer role is sufficient.

------------------------------------------------------------------------

# 4. Authentication

Government users must access the portal through authenticated sessions.

The prototype may use seeded/demo authentication.

Do not implement a real government identity system.

Do not claim that the prototype provides official government
authentication.

------------------------------------------------------------------------

# 5. Government Dashboard

The dashboard should provide a quick operational overview.

Example:

``` text
GOVERNMENT PORTAL

Good evening, Amit Sharma

Applications
12

New
3

Under Review
5

Queries
2

Inspections
1

Completed
4
```

The numbers must come from actual application/workflow records.

Do not hard-code dashboard counts in the final implementation.

------------------------------------------------------------------------

# 6. Main Navigation

Recommended navigation:

``` text
Dashboard
Applications
Queries
Inspections
Completed
```

Optional:

``` text
Notifications
Profile
```

Do not add unnecessary government-management modules to the MVP.

------------------------------------------------------------------------

# 7. Application Queue

The Applications screen should show relevant applications.

Recommended columns:

``` text
Application ID
Applicant / Business
Approval
Submitted
Status
Assigned Officer
Action
```

Example:

``` text
APP-MH-2026-00124
FreshChain Cold Logistics Pvt. Ltd.
FSSAI
30 Aug 2026
Under Review
Amit Sharma
[Open]
```

------------------------------------------------------------------------

# 8. Queue Filters

Support simple filters:

-   All
-   New
-   Assigned
-   Under Review
-   Query
-   Inspection
-   Completed

Optional:

-   Authority
-   Date
-   Priority

Keep filters lightweight for MVP.

------------------------------------------------------------------------

# 9. Search

Search should support:

-   application ID;
-   business name;
-   applicant name.

Example:

``` text
Search:
APP-MH-2026-00124
```

returns the relevant application.

Do not build semantic search.

------------------------------------------------------------------------

# 10. Application Detail

Opening an application should provide a complete officer workspace.

Recommended structure:

``` text
Application Header
        ↓
Applicant / Business
        ↓
Application Information
        ↓
Documents
        ↓
Queries
        ↓
Inspection
        ↓
Timeline
        ↓
Actions
```

------------------------------------------------------------------------

# 11. Application Header

Example:

``` text
FSSAI Application

APP-MH-2026-00124

FreshChain Cold Logistics Pvt. Ltd.

Status:
UNDER REVIEW

Authority:
FSSAI

Assigned To:
Amit Sharma
```

The current workflow status must come from the underlying application
record.

------------------------------------------------------------------------

# 12. Applicant Information

Show relevant submitted information:

``` text
Applicant
Business
Entity Type
Contact
Address
```

Do not expose unnecessary private information.

Only display fields relevant to processing.

------------------------------------------------------------------------

# 13. Business Context

Officer should be able to see the structured Business Profile context.

Example:

``` text
Sector:
Logistics / Warehousing

Sub-sector:
Cold Storage / Cold Chain

Location:
Pune, Maharashtra

Location Type:
MIDC

Project:
New Cold Storage

Capacity:
5,000 MT

Food Stored:
Yes
```

This gives the officer context without requiring separate navigation.

------------------------------------------------------------------------

# 14. Application Information

Show the actual submitted application data.

Example sections:

``` text
Applicant Details
Business Details
Site Details
Activity / Food Details
Facility Details
Declaration
```

The officer should be able to inspect the submitted information.

------------------------------------------------------------------------

# 15. Document Review

The officer should see application-linked documents.

Example:

``` text
DOCUMENTS

Project Report
✓ Verified

Site Plan
✓ Verified

Process Flow
Pending Review

[View]
[Verify]
[Reject]
```

Actions should depend on the current document state.

------------------------------------------------------------------------

# 16. Document Verification

Officer can verify a pending document.

Flow:

``` text
Pending Review
      ↓
Officer opens document
      ↓
[Verify]
      ↓
VERIFIED
```

This updates the underlying document/application state.

------------------------------------------------------------------------

# 17. Document Rejection

Officer can reject a document where configured.

The officer should provide a reason.

Example:

``` text
Reject Document

Reason *
[________________________]

[Cancel]
[Reject Document]
```

After rejection:

``` text
Process Flow
✕ Rejected
```

The reason becomes available to the entrepreneur.

Do not generate an automatic rejection reason.

------------------------------------------------------------------------

# 18. Review Workspace

The officer should have a clear review area.

Example:

``` text
REVIEW APPLICATION

Application Information
✓

Documents
2 Verified
1 Pending

Queries
0

Inspection
Not Required / Pending

Decision
Pending
```

This provides a quick readiness view.

------------------------------------------------------------------------

# 19. Review Action

Officer can start review:

``` text
[Start Review]
```

State:

``` text
ASSIGNED
   ↓
UNDER_REVIEW
```

Create a corresponding timeline event.

------------------------------------------------------------------------

# 20. Query Action

If information is insufficient:

``` text
[Raise Query]
```

Open query form:

``` text
Query Title *
[________________]

Request Details *
[________________]

Required Document
[Optional]

Due Date
[Optional / configured]

[Cancel]
[Send Query]
```

The query becomes associated with the application.

------------------------------------------------------------------------

# 21. Query Display

The application detail should show:

``` text
QUERY

Revised Process Flow Required

Status:
Open

Raised:
01 Sep 2026

[View Query]
```

The officer can see whether the entrepreneur has responded.

------------------------------------------------------------------------

# 22. Query Response

After entrepreneur responds:

``` text
Query:
Revised Process Flow Required

Response:
Received

Document:
Revised Process Flow

[Review Response]
```

Officer can:

-   accept/continue;
-   raise another query if necessary.

The workflow state should update appropriately.

------------------------------------------------------------------------

# 23. Inspection Section

If inspection is required:

``` text
INSPECTION

Status:
Not Scheduled

[Schedule Inspection]
```

If scheduled:

``` text
05 Sep 2026
11:00 AM

Status:
Scheduled

[View]
```

If completed:

``` text
Status:
Completed

Outcome:
Satisfactory

[View Report]
```

------------------------------------------------------------------------

# 24. Inspection Scheduling

Officer enters:

-   date;
-   time;
-   location;
-   inspector/officer where configured;
-   remarks if required.

Example:

``` text
Schedule Inspection

Date
05 Sep 2026

Time
11:00 AM

Location
FreshChain Cold Logistics Pvt. Ltd.

[Schedule]
```

Use real calendar/date validation.

------------------------------------------------------------------------

# 25. Inspection Completion

Officer records:

``` text
Inspection Outcome

○ Satisfactory
○ Unsatisfactory

Remarks
[________________]

[Complete Inspection]
```

The application moves to:

``` text
INSPECTION_COMPLETED
```

when the required workflow conditions are met.

------------------------------------------------------------------------

# 26. Final Review

After all configured requirements are complete:

``` text
FINAL REVIEW

Application
✓

Documents
✓

Queries
✓

Inspection
✓

Decision
Pending
```

Actions:

``` text
[Approve]
[Reject]
```

------------------------------------------------------------------------

# 27. Approve

Officer clicks:

`Approve`

Confirmation:

``` text
APPROVE APPLICATION

Are you sure you want to approve
APP-MH-2026-00124?

[Cancel]
[Approve]
```

After confirmation:

``` text
APPROVED
```

Create:

-   decision event;
-   notification;
-   roadmap update;
-   completion record.

------------------------------------------------------------------------

# 28. Reject

Officer clicks:

`Reject`

Form:

``` text
REJECT APPLICATION

Reason *
[________________________]

[Cancel]
[Reject]
```

Reason is required if configured.

After rejection:

``` text
REJECTED
```

Create:

-   decision event;
-   notification;
-   roadmap update;
-   completion record.

------------------------------------------------------------------------

# 29. Workflow Guards in UI

The portal should only display valid actions.

Example:

``` text
QUERY_RAISED

Available:
[Review Response]

Not available:
[Approve]
```

If inspection is required:

``` text
INSPECTION_PENDING

Approve:
Disabled / unavailable
```

The backend must enforce these rules too.

UI restrictions alone are insufficient.

------------------------------------------------------------------------

# 30. Timeline

The application detail should show a chronological timeline.

Example:

``` text
30 Aug
Application Submitted

31 Aug
Assigned to Amit Sharma

31 Aug
Review Started

01 Sep
Query Raised

02 Sep
Query Responded

04 Sep
Inspection Scheduled

05 Sep
Inspection Completed

06 Sep
Approved
```

The timeline is generated from workflow events.

------------------------------------------------------------------------

# 31. Officer Notifications

The government portal should surface meaningful events.

Examples:

``` text
New application assigned

Query response received

Inspection due

Document submitted
```

Do not overwhelm officers with notifications for every minor UI event.

------------------------------------------------------------------------

# 32. Dashboard Metrics

Useful MVP metrics:

``` text
New Applications
Under Review
Queries Awaiting Response
Inspections Today
Completed
```

Optional:

``` text
Average Processing Time
```

Only calculate it from real recorded timestamps.

------------------------------------------------------------------------

# 33. Priority

Applications may have a configured priority.

Example:

``` text
Normal
High
```

Avoid complex priority scoring in MVP.

Do not claim statutory priority unless configured.

------------------------------------------------------------------------

# 34. SLA Visibility

Where SLA configuration exists, show:

``` text
Submitted:
30 Aug

Current Stage:
Under Review

SLA:
Within configured period
```

Do not invent statutory SLA durations.

If a demo SLA is used, label it as prototype/configured data.

------------------------------------------------------------------------

# 35. Application Assignment

The officer should be able to see:

``` text
Assigned To:
Amit Sharma
```

For MVP, assignment can be controlled/seeded.

A basic admin/assignment action may be implemented if needed.

Do not build advanced workload balancing.

------------------------------------------------------------------------

# 36. Role-Based Security

Government portal access should be restricted.

A government officer should only access applications they are authorized
to process.

At minimum, enforce:

``` text
User
  ↓
Role
  ↓
Authority / Assignment
  ↓
Allowed Applications
```

Do not rely only on frontend route protection.

------------------------------------------------------------------------

# 37. Entrepreneur Data Protection

The government portal should only expose data required for processing.

Avoid unnecessary display of:

-   unrelated business records;
-   other entrepreneurs' documents;
-   internal credentials;
-   private system metadata.

------------------------------------------------------------------------

# 38. UI Theme

Use the locked:

**LIGHT / WHITE**

theme.

The portal should use:

-   white/light background;
-   white cards;
-   dark charcoal text;
-   professional blue primary actions;
-   subtle gray borders;
-   clear status badges;
-   compact but readable tables;
-   clean spacing.

Avoid:

-   dark theme;
-   heavy gradients;
-   excessive animations;
-   overly consumer-style cards.

------------------------------------------------------------------------

# 39. Recommended Government Layout

``` text
┌──────────────────────────────────────────────────┐
│ Government Portal                  Amit Sharma   │
├───────────────┬──────────────────────────────────┤
│ Dashboard     │                                  │
│ Applications  │  Applications                    │
│ Queries       │                                  │
│ Inspections   │  [Search...] [Status Filter]     │
│ Completed     │                                  │
│               │  ┌────────────────────────────┐  │
│               │  │ APP-MH-2026-00124         │  │
│               │  │ FreshChain Cold Logistics │  │
│               │  │ FSSAI • Under Review     │  │
│               │  │ Assigned: Amit Sharma    │  │
│               │  │                 [Open]   │  │
│               │  └────────────────────────────┘  │
└───────────────┴──────────────────────────────────┘
```

------------------------------------------------------------------------

# 40. Application Detail Layout

Recommended:

``` text
FSSAI Application
APP-MH-2026-00124
UNDER REVIEW

[Applicant] [Business] [Application] [Documents]

────────────────────────────────────

Application Information

────────────────────────────────────

Documents
✓ Project Report
✓ Site Plan
✓ Process Flow

────────────────────────────────────

Queries
1 Open / 0 Open

────────────────────────────────────

Inspection
Scheduled

────────────────────────────────────

Timeline

────────────────────────────────────

Actions
[Raise Query]
[Schedule Inspection]
[Approve]
[Reject]
```

Actions should be dynamically enabled based on workflow state.

------------------------------------------------------------------------

# 41. Loading States

Use loading indicators when:

-   dashboard loads;
-   application list loads;
-   application detail loads;
-   document opens;
-   action is being submitted.

Example:

``` text
Loading application...
```

------------------------------------------------------------------------

# 42. Error States

If application cannot be loaded:

``` text
Unable to load this application.

[Try Again]
```

If an action fails:

``` text
Action could not be completed.
No workflow status was changed.

[Try Again]
```

Do not expose database/API errors.

------------------------------------------------------------------------

# 43. Empty States

Applications:

``` text
No applications found.

Try changing your filters.
```

Queries:

``` text
No open queries.
```

Inspections:

``` text
No inspections scheduled.
```

------------------------------------------------------------------------

# 44. Prototype Hero Journey

The Government Portal must support this exact hero flow:

``` text
Application Submitted
        ↓
Appears in Government Portal
        ↓
Officer opens APP-MH-2026-00124
        ↓
Officer starts review
        ↓
Officer raises query:
"Revised Process Flow Required"
        ↓
Entrepreneur responds
        ↓
Officer reviews response
        ↓
Officer schedules inspection
        ↓
Inspection completed
        ↓
Final Review
        ↓
Officer Approves
        ↓
Entrepreneur sees APPROVED
```

This is the core government-side demonstration.

------------------------------------------------------------------------

# 45. Acceptance Criteria

The Government Portal is complete when:

### Access

-   Authenticated government user can access portal.
-   Role/assignment restrictions exist.

### Dashboard

-   Operational counts are shown from actual workflow data.
-   Applications can be opened.

### Queue

-   Applications can be searched.
-   Basic filters work.
-   Status is visible.

### Detail

-   Officer can see application information.
-   Business context is visible.
-   Documents are accessible.
-   Timeline is visible.

### Review

-   Officer can start review.
-   Document verification works.

### Query

-   Officer can raise a query.
-   Query is visible to entrepreneur.
-   Officer can review response.

### Inspection

-   Officer can schedule inspection.
-   Inspection details are stored.
-   Officer can complete inspection.

### Decision

-   Officer can approve.
-   Officer can reject.
-   Required rejection reason is enforced where configured.
-   Invalid decision transitions are blocked.

### Synchronization

-   Workflow state updates everywhere.
-   Roadmap updates.
-   Notifications are created.
-   Timeline events are created.

### Hero

-   APP-MH-2026-00124 can complete the complete government-side journey.

### UI

-   Light/white theme.
-   Professional government workspace.
-   Clear states and actions.

------------------------------------------------------------------------

# 46. Out of Scope

Do not build:

-   real government authentication;
-   real government databases;
-   live department integrations;
-   advanced officer workload optimization;
-   biometric authentication;
-   complex administrative hierarchy;
-   nationwide government portal replication;
-   real statutory decision automation;
-   AI-based officer decision-making.

------------------------------------------------------------------------

# 47. Final Locked Definition

**GOVERNMENT PORTAL** is the officer-facing operational workspace
through which authorized government users receive, review, query,
inspect, and decide submitted applications.

Its core responsibility is:

> **Provide a single, structured workspace for government officers to
> process applications while writing all actions back to the Unified
> Government Workflow so that the entrepreneur, roadmap, notifications,
> and analytics remain synchronized.**

The defining prototype journey is:

``` text
Submitted
   ↓
Government Queue
   ↓
Officer Review
   ↓
Query
   ↓
Response
   ↓
Inspection
   ↓
Final Review
   ↓
Approve / Reject
```

**STATUS: LOCKED FOR PROTOTYPE**
