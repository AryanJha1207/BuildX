# SIH 26130 --- Module Specification 09

# UNIFIED GOVERNMENT WORKFLOW

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 09 --- Unified Government Workflow\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Workflow Orchestration Layer\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP\
**Upstream:** Submission\
**Downstream:** Government Portal, Review, Query, Inspection, Approve /
Reject, Entrepreneur Dashboard, Roadmap, Notifications, SLA

------------------------------------------------------------------------

## 1. Module Purpose

The Unified Government Workflow is the central orchestration layer
connecting a submitted entrepreneur application with the government-side
processing lifecycle.

Its purpose is to make the fragmented approval journey behave like **one
connected workflow** from the entrepreneur's perspective.

It coordinates:

-   application intake;
-   authority/department routing;
-   officer assignment;
-   review;
-   document verification;
-   queries;
-   entrepreneur responses;
-   inspections;
-   final review;
-   approval/rejection;
-   timeline events;
-   notifications;
-   roadmap status updates.

The module is the bridge between:

**Entrepreneur Submission**

and:

**Government Processing**

------------------------------------------------------------------------

# 2. Core Principle

The workflow follows:

``` text
ENTREPRENEUR
     ↓
SUBMITTED APPLICATION
     ↓
UNIFIED WORKFLOW
     ↓
DEPARTMENT / AUTHORITY
     ↓
OFFICER ASSIGNMENT
     ↓
REVIEW
     ↓
QUERY ─────────→ ENTREPRENEUR RESPONSE
     ↓
INSPECTION
     ↓
FINAL REVIEW
     ↓
APPROVE / REJECT
     ↓
ROADMAP + DASHBOARD + NOTIFICATION
```

The workflow must operate on the **same underlying application record**
throughout the journey.

------------------------------------------------------------------------

# 3. What "Unified" Means

Unified does **not** mean that all government departments are literally
merged into one department.

It means the platform provides a common workflow layer across relevant
authorities.

For the entrepreneur:

``` text
One Application Journey
```

instead of:

``` text
Department A
Department B
Department C
separate tracking experiences
```

The prototype demonstrates this through a controlled internal workflow.

------------------------------------------------------------------------

# 4. Government Workflow Scope

The hero workflow may include:

-   Building Department
-   Fire Department
-   FSSAI
-   MPCB
-   Electricity Utility
-   MIDC

The exact authority attached to an application must come from configured
approval/application data.

The platform must not imply that every authority is integrated with a
live external system.

------------------------------------------------------------------------

# 5. MVP Workflow

The complete functional government workflow for the hero application is:

``` text
SUBMITTED
   ↓
ASSIGNED
   ↓
UNDER_REVIEW
   ↓
QUERY_RAISED
   ↓
QUERY_RESPONDED
   ↓
INSPECTION_SCHEDULED
   ↓
INSPECTION_COMPLETED
   ↓
FINAL_REVIEW
   ↓
APPROVED
```

A rejection path also exists:

``` text
FINAL_REVIEW
   ↓
REJECTED
```

Not every application necessarily requires every intermediate stage.

Workflow steps should be determined by configured application
requirements.

------------------------------------------------------------------------

# 6. Application State Machine

Primary state model:

``` text
DRAFT
 ↓
READY_TO_SUBMIT
 ↓
SUBMITTED
 ↓
ASSIGNED
 ↓
UNDER_REVIEW
 ↓
QUERY_RAISED
 ↓
QUERY_RESPONDED
 ↓
INSPECTION_SCHEDULED
 ↓
INSPECTION_COMPLETED
 ↓
FINAL_REVIEW
 ↓
APPROVED / REJECTED
```

Some states are optional/conditional.

For example:

``` text
UNDER_REVIEW
      ↓
APPROVED
```

may be valid when no query or inspection is required.

------------------------------------------------------------------------

# 7. State Ownership

The workflow should have clear ownership.

### Entrepreneur-side modules

Own:

-   DRAFT;
-   READY_TO_SUBMIT;
-   submission action;
-   QUERY_RESPONDED action;
-   viewing workflow.

### Government-side modules

Own:

-   ASSIGNED;
-   UNDER_REVIEW;
-   QUERY_RAISED;
-   INSPECTION_SCHEDULED;
-   INSPECTION_COMPLETED;
-   FINAL_REVIEW;
-   APPROVED;
-   REJECTED.

This separation prevents an entrepreneur from changing government
decisions.

------------------------------------------------------------------------

# 8. Workflow Record

Each submitted application should have a workflow record conceptually
containing:

``` text
workflow
├── id
├── applicationId
├── authority
├── department
├── assignedOfficer
├── currentStatus
├── priority
├── submittedAt
├── assignedAt
├── completedAt
└── metadata
```

The implementation may simplify this for MVP.

------------------------------------------------------------------------

# 9. Authority Routing

When an application is submitted:

``` text
Application
     ↓
Approval / Application Template
     ↓
Configured Authority
     ↓
Government Workflow Queue
```

Example:

``` text
FSSAI Application
      ↓
FSSAI authority mapping
      ↓
Government Queue
```

The routing should come from configuration, not hard-coded UI
assumptions.

------------------------------------------------------------------------

# 10. Department Queue

Government users should see applications relevant to their authority.

Example:

``` text
FSSAI QUEUE

New
1

Under Review
0

Query
0

Completed
0
```

The exact dashboard representation is defined further in the Government
Portal module.

The workflow layer provides the underlying records.

------------------------------------------------------------------------

# 11. Officer Assignment

A submitted application may be assigned to an officer.

Hero demo officer:

**Amit Sharma**

Role:

**Department Officer**

Assignment flow:

``` text
Submitted
   ↓
Government Queue
   ↓
Officer Assignment
   ↓
ASSIGNED
```

The prototype may use manual assignment or a controlled seeded
assignment.

Do not build complex workload optimization for MVP.

------------------------------------------------------------------------

# 12. Assignment Data

Store, where applicable:

-   officer;
-   department;
-   authority;
-   assignment timestamp.

Example:

``` text
Application:
APP-MH-2026-00124

Assigned To:
Amit Sharma

Assigned:
31 Aug 2026
```

Demo dates should be clearly treated as prototype data.

------------------------------------------------------------------------

# 13. Review Entry

After assignment:

``` text
ASSIGNED
    ↓
UNDER_REVIEW
```

The officer can review:

-   application;
-   Business Profile;
-   submitted fields;
-   documents;
-   previous events;
-   configured requirements.

The officer cannot alter the entrepreneur's original profile without an
explicit configured workflow.

------------------------------------------------------------------------

# 14. Document Review

The workflow connects the application to its submitted documents.

Officer actions may include:

-   Verify Document
-   Reject Document
-   Raise Query

Example:

``` text
Process Flow

Pending Review

[Verify]
[Reject]
```

After verification:

``` text
Process Flow
✓ Verified
```

The document state should be updated in the Document Vault/application
context.

------------------------------------------------------------------------

# 15. Query Branch

If additional information is needed:

``` text
UNDER_REVIEW
      ↓
QUERY_RAISED
```

Example:

``` text
Query:
Revised Process Flow Required
```

The workflow should:

-   create a query;
-   associate it with the application;
-   notify the entrepreneur;
-   update application status;
-   update roadmap state.

------------------------------------------------------------------------

# 16. Entrepreneur Query Response

The entrepreneur receives:

``` text
Query Raised
      ↓
Dashboard
      ↓
Query Detail
      ↓
Upload / Response
      ↓
Submit Response
```

Workflow state:

``` text
QUERY_RAISED
      ↓
QUERY_RESPONDED
```

The response should be stored against the query/application.

------------------------------------------------------------------------

# 17. Officer Query Review

After response:

``` text
QUERY_RESPONDED
      ↓
Officer reviews
      ↓
Continue Review
```

If insufficient:

``` text
QUERY_RESPONDED
      ↓
QUERY_RAISED
```

A new or follow-up query may be created if configured.

The MVP can keep this simple.

------------------------------------------------------------------------

# 18. Inspection Branch

If inspection is required:

``` text
UNDER_REVIEW
      ↓
INSPECTION_SCHEDULED
      ↓
INSPECTION_COMPLETED
```

Inspection details:

-   date;
-   time;
-   location;
-   officer/inspector where configured;
-   checklist;
-   remarks;
-   outcome.

------------------------------------------------------------------------

# 19. Inspection Scheduling

Government officer action:

``` text
[Schedule Inspection]
```

Example:

``` text
Inspection Date:
05 Sep 2026

Time:
11:00 AM

Location:
FreshChain Cold Logistics Pvt. Ltd.
```

The entrepreneur receives a notification.

These are controlled prototype values.

------------------------------------------------------------------------

# 20. Inspection Completion

Officer records:

``` text
Inspection Completed

Outcome:
Satisfactory

Remarks:
[Configured demo remarks]
```

The application transitions:

``` text
INSPECTION_SCHEDULED
        ↓
INSPECTION_COMPLETED
```

------------------------------------------------------------------------

# 21. Final Review

After required review/query/inspection steps:

``` text
FINAL_REVIEW
```

Officer sees:

``` text
Application
✓

Documents
✓

Queries
✓

Inspection
✓

Final Review
●
```

Available decisions:

``` text
[Approve]
[Reject]
```

------------------------------------------------------------------------

# 22. Approval

On approval:

``` text
FINAL_REVIEW
      ↓
APPROVED
```

System actions:

-   update application;
-   create approval event;
-   notify entrepreneur;
-   update roadmap;
-   update dashboard;
-   activate relevant compliance/renewal information where configured.

------------------------------------------------------------------------

# 23. Rejection

On rejection:

``` text
FINAL_REVIEW
      ↓
REJECTED
```

Officer must provide a reason if configured as required.

System actions:

-   update application;
-   create rejection event;
-   notify entrepreneur;
-   update roadmap;
-   update dashboard.

Do not invent a rejection reason.

------------------------------------------------------------------------

# 24. Timeline

Every meaningful workflow transition should create a timeline event.

Example:

``` text
30 Aug
Application Submitted

31 Aug
Application Assigned

31 Aug
Under Review

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

The timeline should be generated from actual events.

------------------------------------------------------------------------

# 25. Event Model

Conceptually:

``` text
workflowEvent
├── id
├── applicationId
├── eventType
├── actor
├── timestamp
├── previousStatus
├── newStatus
├── description
└── metadata
```

Examples:

-   SUBMITTED
-   ASSIGNED
-   REVIEW_STARTED
-   DOCUMENT_VERIFIED
-   QUERY_RAISED
-   QUERY_RESPONDED
-   INSPECTION_SCHEDULED
-   INSPECTION_COMPLETED
-   APPROVED
-   REJECTED

------------------------------------------------------------------------

# 26. Single Source of Workflow Truth

The workflow status must be stored once.

Do not maintain:

``` text
Government status = Under Review
Entrepreneur status = Submitted
Roadmap status = In Progress
```

as independent fake values.

Instead:

``` text
Application Status
       ↓
Government UI
       ↓
Entrepreneur UI
       ↓
Roadmap
       ↓
Notifications
```

All consume the same underlying workflow state.

------------------------------------------------------------------------

# 27. Roadmap Synchronization

Workflow events update the Personalized Roadmap.

Example:

``` text
Government:
Application Approved
        ↓
Application.status = APPROVED
        ↓
Roadmap item = APPROVED
        ↓
Entrepreneur sees approval
```

No manual duplicate update should be required.

------------------------------------------------------------------------

# 28. Notification Synchronization

Workflow events can create notifications.

Example:

``` text
QUERY_RAISED
      ↓
Notification
      ↓
Entrepreneur
```

Example:

``` text
INSPECTION_SCHEDULED
      ↓
Notification
      ↓
Entrepreneur
```

Example:

``` text
APPROVED
      ↓
Notification
      ↓
Entrepreneur
```

------------------------------------------------------------------------

# 29. SLA Integration

The submission event can start a configured SLA timer.

The workflow should expose:

-   submitted timestamp;
-   current stage;
-   time in current stage;
-   configured SLA status where applicable.

Do not invent statutory SLA durations.

------------------------------------------------------------------------

# 30. Workflow History

The application should maintain an ordered event history.

Example:

``` text
Application Submitted
        ↓
Assigned
        ↓
Review
        ↓
Query
        ↓
Response
        ↓
Inspection
        ↓
Approval
```

This history powers:

-   tracking;
-   government audit-style view;
-   entrepreneur timeline;
-   analytics.

------------------------------------------------------------------------

# 31. Role-Based Actions

### Entrepreneur

Can:

-   view application;
-   view status;
-   view timeline;
-   respond to queries;
-   upload requested documents;
-   view inspection;
-   view decision.

Cannot:

-   assign officer;
-   change government status;
-   approve/reject;
-   alter official review data.

### Government Officer

Can:

-   view assigned applications;
-   review;
-   verify/reject documents;
-   raise queries;
-   review responses;
-   schedule inspection;
-   complete inspection;
-   approve/reject.

------------------------------------------------------------------------

# 32. Workflow Guards

Invalid transitions should be prevented.

Examples:

``` text
APPROVED
→ SUBMITTED
```

must not be allowed.

``` text
REJECTED
→ UNDER_REVIEW
```

must not occur unless an explicit configured re-opening process exists.

``` text
QUERY_RAISED
→ APPROVED
```

should not be allowed if the query remains unresolved and is configured
as blocking.

The exact guards should be defined by workflow configuration.

------------------------------------------------------------------------

# 33. Query Blocking

A query can be configured as blocking.

Example:

``` text
Query:
Revised Process Flow Required

Blocking:
YES
```

Then:

``` text
QUERY_RAISED
```

prevents final approval until the query is resolved.

This must be configuration-driven.

------------------------------------------------------------------------

# 34. Inspection Blocking

Similarly, an inspection can be configured as required before approval.

If:

``` text
Inspection Required = Yes
```

then:

``` text
UNDER_REVIEW
→ APPROVED
```

should not be allowed until the configured inspection step is completed.

------------------------------------------------------------------------

# 35. Application Dependencies

The workflow should respect configured dependencies.

Example:

``` text
Document Verification
      ↓
Review
      ↓
Inspection
      ↓
Final Decision
```

The MVP only needs the dependencies used by the hero workflow.

------------------------------------------------------------------------

# 36. Error Handling

If a government action fails:

``` text
Action could not be completed.

No workflow status change was recorded.

[Try Again]
```

The system must not display a successful transition when the database
operation failed.

------------------------------------------------------------------------

# 37. Concurrency / Duplicate Actions

Basic protection should exist against double actions.

Example:

Officer clicks Approve twice.

Only one approval transition should be recorded.

Example:

Two officers attempt incompatible status changes.

The system should reject the invalid transition rather than corrupting
the application state.

Advanced distributed concurrency systems are out of scope.

------------------------------------------------------------------------

# 38. UI Relationship

The Unified Workflow is primarily a backend/application-state
orchestration layer.

The Government Portal provides the main visual workspace.

The Entrepreneur Dashboard/Roadmap provides the entrepreneur-facing
status.

Do not create an additional complicated "workflow screen" solely for the
sake of the architecture.

------------------------------------------------------------------------

# 39. Prototype Hero Workflow

Hero application:

**APP-MH-2026-00124**

``` text
SUBMITTED
   ↓
ASSIGNED
   ↓
UNDER_REVIEW
   ↓
QUERY_RAISED
   │
   └── Revised Process Flow Required
             ↓
       Entrepreneur Response
             ↓
       QUERY_RESPONDED
             ↓
       INSPECTION_SCHEDULED
             ↓
       INSPECTION_COMPLETED
             ↓
       FINAL_REVIEW
             ↓
          APPROVED
```

This is the primary end-to-end government workflow demonstration.

------------------------------------------------------------------------

# 40. Prototype Officer

Hero officer:

**Amit Sharma**

Role:

**Department Officer**

The same controlled officer can be used throughout the hero demo.

------------------------------------------------------------------------

# 41. Prototype Authority

For the hero FSSAI application:

``` text
Authority:
FSSAI
```

Additional authority mappings can be represented for other roadmap
requirements.

The platform must not claim a real live FSSAI integration unless one is
actually implemented.

------------------------------------------------------------------------

# 42. Prototype Data Philosophy

The workflow should use controlled data for:

-   one hero entrepreneur;
-   one hero business;
-   one hero application;
-   one officer;
-   one query;
-   one inspection;
-   one final decision.

This is sufficient to demonstrate the complete lifecycle.

------------------------------------------------------------------------

# 43. Acceptance Criteria

The Unified Government Workflow is complete when:

### Intake

-   Submitted applications enter the government workflow.
-   Authority mapping exists for the hero application.

### Assignment

-   Application can be assigned to an officer.
-   ASSIGNED state is recorded.

### Review

-   Officer can move application into review.
-   Documents are accessible.

### Query

-   Officer can raise a query.
-   Entrepreneur receives it.
-   Entrepreneur can respond.
-   Officer can see the response.

### Inspection

-   Officer can schedule inspection.
-   Entrepreneur can see it.
-   Officer can complete it.
-   Outcome is recorded.

### Decision

-   Officer can approve/reject.
-   Invalid decision transitions are blocked.

### Synchronization

-   Application status is shared across government and entrepreneur
    experiences.
-   Roadmap reflects workflow state.
-   Notifications are generated for meaningful events.
-   Timeline reflects actual events.

### Safety

-   Failed actions do not create false state changes.
-   Duplicate submission/approval actions are protected.
-   Blocking queries/inspections prevent invalid approval where
    configured.

### Hero

-   APP-MH-2026-00124 can complete the full demo journey.

### UI

-   Supporting government/entrepreneur interfaces remain consistent with
    the light/white design system.

------------------------------------------------------------------------

# 44. Out of Scope

Do not build:

-   real external government API integrations;
-   actual inter-department government system synchronization;
-   production e-governance infrastructure;
-   advanced workflow optimization;
-   AI officer decision-making;
-   automatic legal approval;
-   complex case-management features;
-   nationwide department routing;
-   real government identity infrastructure.

------------------------------------------------------------------------

# 45. Final Locked Definition

**UNIFIED GOVERNMENT WORKFLOW** is the orchestration layer that connects
a submitted entrepreneur application to the configured government
processing lifecycle.

Its core responsibility is:

> **Move the application through a controlled, auditable sequence of
> assignment, review, query, response, inspection, and decision while
> keeping the entrepreneur dashboard, Personalized Roadmap,
> notifications, and government portal synchronized with the same
> underlying application state.**

The defining principle is:

> **One application → one workflow state → multiple synchronized
> views.**

**STATUS: LOCKED FOR PROTOTYPE**
