# SIH 26130 --- Module Specification 13

# INSPECTION

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 13 --- Inspection\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Physical / Site Verification Workflow\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP\
**Upstream:** Government Review, Unified Government Workflow\
**Downstream:** Final Review, Approve / Reject, Roadmap, Notifications,
Timeline

------------------------------------------------------------------------

## 1. Module Purpose

The Inspection module manages the physical/site verification stage when
an application requires an inspection.

It allows an authorized government officer to:

-   determine that an inspection is required;
-   schedule an inspection;
-   record inspection details;
-   notify the entrepreneur;
-   conduct/record the inspection;
-   complete an inspection checklist;
-   record observations;
-   record an outcome;
-   attach supporting documents/photos where configured;
-   return the application to the appropriate review stage.

The Inspection module does not independently decide whether an approval
is legally required. That comes from the configured approval/application
workflow.

------------------------------------------------------------------------

# 2. Core Principle

The inspection flow is:

``` text
Government Review
      ↓
Inspection Required
      ↓
Schedule Inspection
      ↓
Entrepreneur Notified
      ↓
Inspection
      ↓
Checklist / Observations
      ↓
Inspection Completed
      ↓
Final Review
      ↓
Approve / Reject
```

Inspection is a **workflow stage**, not merely a calendar appointment.

------------------------------------------------------------------------

# 3. When Inspection Applies

Inspection can occur only when the configured application workflow
requires it.

Example:

``` text
FSSAI Application
Inspection Required:
Yes
```

or:

``` text
Configured Requirement:
Inspection Required = No
```

If no inspection is required, the application can proceed directly
toward the next configured review/decision stage.

Do not assume every approval requires physical inspection.

------------------------------------------------------------------------

# 4. Inspection Lifecycle

Primary lifecycle:

``` text
NOT_REQUIRED
```

or:

``` text
REQUIRED
   ↓
SCHEDULED
   ↓
UPCOMING
   ↓
IN_PROGRESS
   ↓
COMPLETED
```

Alternative outcome:

``` text
COMPLETED
    ↓
FOLLOW_UP_REQUIRED
```

or:

``` text
COMPLETED
    ↓
UNSATISFACTORY
```

The exact decision flow is configuration-driven.

------------------------------------------------------------------------

# 5. Inspection Status Definitions

## REQUIRED

Review has determined that inspection is required.

## SCHEDULED

A date/time has been recorded.

## UPCOMING

Inspection is scheduled and has not started.

## IN_PROGRESS

Inspection is currently being conducted/recorded.

## COMPLETED

Inspection record has been completed.

## FOLLOW_UP_REQUIRED

Inspection identified issues requiring additional action.

------------------------------------------------------------------------

# 6. Inspection Record

Conceptually:

``` text
inspection
├── id
├── applicationId
├── authority
├── officerId
├── scheduledDate
├── scheduledTime
├── location
├── status
├── outcome
├── startedAt
├── completedAt
├── remarks
└── metadata
```

------------------------------------------------------------------------

# 7. Inspection Scheduling

Government officer action:

``` text
[Schedule Inspection]
```

Form:

``` text
Inspection Date *
[05 Sep 2026]

Inspection Time *
[11:00 AM]

Location *
[Business / Site Address]

Officer / Inspector
[Amit Sharma]

Additional Remarks
[________________]

[Cancel]
[Schedule Inspection]
```

Required fields should be configuration-driven.

------------------------------------------------------------------------

# 8. Schedule Validation

Before scheduling:

-   date must be valid;
-   time must be valid;
-   required location must exist;
-   authorized officer must be selected/assigned where required.

Prevent scheduling in an invalid state.

------------------------------------------------------------------------

# 9. Entrepreneur Notification

After scheduling:

``` text
Inspection Scheduled

FSSAI Application
APP-MH-2026-00124

Date:
05 Sep 2026

Time:
11:00 AM

Location:
FreshChain Cold Logistics Pvt. Ltd.

[View Inspection]
```

Create a notification associated with the application/inspection.

------------------------------------------------------------------------

# 10. Entrepreneur Inspection View

The entrepreneur should see:

``` text
INSPECTION

Status:
Scheduled

Date:
05 Sep 2026

Time:
11:00 AM

Location:
FreshChain Cold Logistics Pvt. Ltd.

Authority:
FSSAI

Officer:
Amit Sharma
```

Only display officer identity where the workflow permits it.

------------------------------------------------------------------------

# 11. Inspection Detail

The inspection detail should provide:

``` text
Inspection Header
        ↓
Application Context
        ↓
Site Details
        ↓
Checklist
        ↓
Observations
        ↓
Attachments
        ↓
Outcome
        ↓
Completion
```

------------------------------------------------------------------------

# 12. Application Context

Officer should have access to relevant application information:

``` text
Business:
FreshChain Cold Logistics Pvt. Ltd.

Sector:
Logistics / Warehousing

Sub-sector:
Cold Storage / Cold Chain

Location:
Pune, Maharashtra

Project:
New Cold Storage

Capacity:
5,000 MT
```

This context comes from the Business Profile/application.

------------------------------------------------------------------------

# 13. Site Information

Display relevant site details:

``` text
Site Address
Location Type
MIDC / Non-MIDC
Plot / Property Information
Facility Type
```

Only show fields configured for the inspection.

------------------------------------------------------------------------

# 14. Inspection Checklist

The inspection should use a simple configured checklist.

Example:

``` text
INSPECTION CHECKLIST

☐ Site access verified
☐ Facility layout matches submission
☐ Cold storage facility available
☐ Required safety arrangements visible
☐ Process flow consistent with facility
```

Checklist items should be configurable.

Do not hard-code legal inspection requirements into the frontend.

------------------------------------------------------------------------

# 15. Checklist Result

Each item can be:

-   PASS
-   FAIL
-   NOT_APPLICABLE
-   NOT_CHECKED

Example:

``` text
Facility layout
✓ PASS

Process flow
✓ PASS

Safety arrangement
✕ FAIL
```

------------------------------------------------------------------------

# 16. Not Applicable

An item can be marked:

**NOT_APPLICABLE**

only where permitted by the configured inspection checklist.

It should not be used simply because the officer forgot to inspect an
item.

------------------------------------------------------------------------

# 17. Inspection Observations

Officer can record observations.

Example:

``` text
OBSERVATIONS

General Observations
[____________________________]

Issues Identified
[____________________________]
```

The officer's remarks should be stored with the inspection record.

------------------------------------------------------------------------

# 18. Finding Severity

Where configured, findings may be:

-   Information
-   Warning
-   Blocking

Example:

``` text
Blocking Finding

Facility layout differs materially
from submitted plan.
```

A blocking finding may require follow-up before approval.

------------------------------------------------------------------------

# 19. Inspection Attachments

Where configured, officer may attach:

-   inspection report;
-   site photograph;
-   supporting document;
-   checklist record.

For MVP, attachments can be stored using Supabase Storage.

The database stores metadata/reference.

------------------------------------------------------------------------

# 20. Photo Handling

If photos are supported:

``` text
[Add Photo]
```

Photos should be linked to the inspection.

Do not build advanced image analysis.

Do not automatically claim that a photograph proves compliance.

------------------------------------------------------------------------

# 21. Inspection Start

Officer action:

``` text
[Start Inspection]
```

State:

``` text
SCHEDULED
    ↓
IN_PROGRESS
```

Record start time.

------------------------------------------------------------------------

# 22. Inspection Completion

Officer completes:

``` text
Inspection Outcome *

○ Satisfactory
○ Unsatisfactory
○ Follow-up Required

Remarks *
[________________________]

[Complete Inspection]
```

The outcome must be stored.

------------------------------------------------------------------------

# 23. Satisfactory Outcome

If:

``` text
Outcome = SATISFACTORY
```

then:

``` text
INSPECTION_COMPLETED
       ↓
FINAL_REVIEW
```

assuming all other workflow requirements are satisfied.

------------------------------------------------------------------------

# 24. Unsatisfactory Outcome

If:

``` text
Outcome = UNSATISFACTORY
```

the application should not automatically be rejected.

Instead, configured workflow determines the next step.

Possible:

``` text
Inspection Completed
       ↓
Follow-up Required
```

or:

``` text
Final Review
```

Do not automatically infer a legal rejection.

------------------------------------------------------------------------

# 25. Follow-up Required

If issues need correction:

``` text
FOLLOW_UP_REQUIRED
```

Next action could be:

``` text
Query
```

or:

``` text
Repeat Inspection
```

according to configuration.

------------------------------------------------------------------------

# 26. Inspection Query Integration

An inspection finding can lead to a formal query.

Example:

``` text
Inspection Finding:
Revised facility layout required

        ↓

[Raise Query]

        ↓

Query Management
```

The query becomes part of the application workflow.

------------------------------------------------------------------------

# 27. Repeat Inspection

If configured:

``` text
Inspection Completed
      ↓
Follow-up Required
      ↓
Repeat Inspection
      ↓
Schedule New Inspection
```

For MVP, one repeat inspection cycle is sufficient.

Do not build complex inspection scheduling logic.

------------------------------------------------------------------------

# 28. Inspection Timeline

Inspection events should appear in the application timeline.

Example:

``` text
04 Sep
Inspection Scheduled

05 Sep
Inspection Started

05 Sep
Inspection Completed

Outcome:
Satisfactory
```

Use actual timestamps.

------------------------------------------------------------------------

# 29. Roadmap Integration

Roadmap status should reflect inspection state.

Example:

``` text
FSSAI

Inspection Scheduled
05 Sep 2026
```

After completion:

``` text
FSSAI

✓ Inspection Completed
```

If follow-up is needed:

``` text
FSSAI

⚠ Inspection Follow-up Required
```

------------------------------------------------------------------------

# 30. Workflow Integration

Inspection maps to Unified Workflow.

Example:

``` text
UNDER_REVIEW
      ↓
INSPECTION_SCHEDULED
      ↓
INSPECTION_COMPLETED
      ↓
FINAL_REVIEW
```

If follow-up:

``` text
INSPECTION_COMPLETED
      ↓
FOLLOW_UP_REQUIRED
      ↓
QUERY_RAISED / RESCHEDULE
```

------------------------------------------------------------------------

# 31. Final Approval Guard

If inspection is configured as mandatory:

``` text
Inspection not completed
        ↓
Approve blocked
```

After completion:

``` text
Inspection completed
        ↓
Approval may proceed
```

The backend must enforce this guard.

------------------------------------------------------------------------

# 32. Government Officer View

Recommended:

``` text
INSPECTION

APP-MH-2026-00124

Status:
Scheduled

Date:
05 Sep 2026
11:00 AM

Location:
FreshChain Cold Logistics Pvt. Ltd.

Checklist:
0 / 5 completed

[Start Inspection]
```

During inspection:

``` text
Checklist:
5 / 5 completed

Observations:
[................]

Outcome:
[Select]

[Complete Inspection]
```

------------------------------------------------------------------------

# 33. Entrepreneur View

Recommended:

``` text
INSPECTION

FSSAI
APP-MH-2026-00124

┌─────────────────────────────────┐
│ Inspection Scheduled            │
│                                 │
│ 05 Sep 2026                     │
│ 11:00 AM                        │
│ FreshChain Cold Logistics       │
│                                 │
│ [View Details]                  │
└─────────────────────────────────┘
```

After completion:

``` text
✓ Inspection Completed

Outcome:
Satisfactory
```

Do not expose internal officer notes unless configured as
entrepreneur-visible.

------------------------------------------------------------------------

# 34. Inspection Calendar

For MVP, a simple date/time selector is sufficient.

A full government calendar/roster system is not required.

Optional government view:

``` text
Today's Inspections
1

05 Sep
FreshChain Cold Logistics
11:00 AM
```

------------------------------------------------------------------------

# 35. Inspection Conflict

Basic conflict detection may be used if an officer already has a
scheduled inspection at the same time.

Example:

``` text
This officer already has an inspection
scheduled at this time.

Choose another time.
```

For MVP, this can be a simple seeded check.

Do not build advanced route optimization.

------------------------------------------------------------------------

# 36. Location

Inspection location should normally come from the application/site
information.

Officer may modify it only where the workflow allows.

Avoid automatically using unrelated user geolocation.

------------------------------------------------------------------------

# 37. Inspection Documents

Inspection can reference:

-   submitted site plan;
-   building plan;
-   project report;
-   process flow;
-   uploaded inspection report.

This allows the officer to compare actual site conditions with submitted
information.

------------------------------------------------------------------------

# 38. Inspection Comparison

A simple comparison view may show:

``` text
SUBMITTED
Facility Layout
       ↕
INSPECTION
Observed Facility Layout

Result:
Consistent / Finding
```

Do not build computer vision or automatic plan comparison.

------------------------------------------------------------------------

# 39. Security

### Government Officer

Can:

-   view assigned inspection;
-   conduct inspection;
-   record checklist;
-   add findings;
-   complete inspection.

### Entrepreneur

Can:

-   view scheduled inspection;
-   view permitted inspection details;
-   see final configured outcome.

Users must not access inspections belonging to unrelated applications.

------------------------------------------------------------------------

# 40. Auditability

Record:

-   scheduled by;
-   scheduled at;
-   inspection officer;
-   start time;
-   completion time;
-   checklist results;
-   findings;
-   outcome;
-   attachments;
-   relevant timeline events.

Do not silently overwrite completed inspection records.

------------------------------------------------------------------------

# 41. Editing Completed Inspection

After:

``` text
INSPECTION_COMPLETED
```

the record should be effectively locked for normal editing.

If correction is required, use an explicit correction/revision
mechanism.

For MVP, a new follow-up inspection record may be preferable to silently
editing the completed record.

------------------------------------------------------------------------

# 42. Error Handling

### Scheduling failure

``` text
Inspection could not be scheduled.

No schedule was recorded.

[Try Again]
```

### Completion failure

``` text
Inspection could not be completed.

No completion status was recorded.

[Try Again]
```

### Access failure

``` text
You are not authorized to access this inspection.
```

------------------------------------------------------------------------

# 43. Loading States

Examples:

``` text
Loading inspection...
```

``` text
Saving checklist...
```

``` text
Completing inspection...
```

Disable duplicate actions while saving.

------------------------------------------------------------------------

# 44. UI Theme

Use the locked:

**LIGHT / WHITE**

theme.

Recommended:

-   white cards;
-   light background;
-   dark charcoal text;
-   professional blue actions;
-   subtle borders;
-   clear status badges;
-   structured checklist.

Avoid:

-   dark UI;
-   heavy gradients;
-   unnecessary animations;
-   consumer-style social UI.

------------------------------------------------------------------------

# 45. Hero Inspection Journey

Application:

**APP-MH-2026-00124**

``` text
UNDER REVIEW
      ↓
Inspection Required
      ↓
Officer schedules:
05 Sep 2026 • 11:00 AM
      ↓
Entrepreneur notified
      ↓
Inspection starts
      ↓
Officer completes checklist
      ↓
Observations recorded
      ↓
Outcome:
SATISFACTORY
      ↓
Inspection Completed
      ↓
Final Review
      ↓
Approve
```

This is the primary inspection demonstration.

------------------------------------------------------------------------

# 46. Hero Alternative --- Follow-up

The prototype should also be able to demonstrate:

``` text
Inspection
      ↓
Finding:
Facility layout requires revision
      ↓
FOLLOW-UP REQUIRED
      ↓
Query Raised
      ↓
Entrepreneur Response
      ↓
Review
```

This demonstrates that Inspection integrates with Query Management
rather than operating as an isolated module.

------------------------------------------------------------------------

# 47. Acceptance Criteria

The Inspection module is complete when:

### Requirement

-   Inspection can be required by configured workflow.
-   Non-inspection applications can bypass it.

### Scheduling

-   Officer can schedule inspection.
-   Date/time/location are stored.
-   Entrepreneur is notified.

### Conduct

-   Officer can start inspection.
-   Checklist is available.
-   Checklist results are stored.
-   Observations can be recorded.

### Outcome

-   Satisfactory outcome works.
-   Unsatisfactory/follow-up outcomes can be represented.
-   Inspection completion is recorded.

### Integration

-   Workflow state updates correctly.
-   Roadmap reflects inspection status.
-   Timeline records inspection events.
-   Notifications are generated.

### Query

-   Inspection findings can lead to a query.
-   Follow-up path is supported.

### Approval Guard

-   Mandatory incomplete inspection blocks approval.
-   Completed inspection allows progression when other requirements are
    satisfied.

### Security

-   Only authorized users can access inspection records.

### Hero

-   APP-MH-2026-00124 supports scheduled → conducted → completed
    inspection.

### UI

-   Light/white design.
-   Clear checklist.
-   Clear inspection status.
-   Loading/error states exist.

------------------------------------------------------------------------

# 48. Out of Scope

Do not build:

-   real government inspector scheduling infrastructure;
-   GPS tracking;
-   live route optimization;
-   biometric attendance;
-   computer vision;
-   automatic photo compliance detection;
-   automatic legal interpretation;
-   nationwide inspection checklists;
-   real government inspection integrations;
-   advanced recurring inspection management.

------------------------------------------------------------------------

# 49. Final Locked Definition

**INSPECTION** is the structured physical/site verification stage used
when an application's configured workflow requires on-site assessment.

Its core responsibility is:

> **Allow an authorized government officer to schedule, conduct,
> document, and complete a configured inspection, record its outcome,
> and return the application to the appropriate workflow stage while
> keeping the entrepreneur, roadmap, notifications, and timeline
> synchronized.**

The defining prototype journey is:

``` text
Inspection Required
        ↓
Schedule
        ↓
Notify Entrepreneur
        ↓
Conduct Inspection
        ↓
Checklist + Observations
        ↓
Outcome
        ↓
Inspection Completed
        ↓
Final Review
```

Inspection does not automatically mean approval or rejection.

**STATUS: LOCKED FOR PROTOTYPE**
