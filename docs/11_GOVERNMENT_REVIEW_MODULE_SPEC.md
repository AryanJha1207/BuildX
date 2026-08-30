# SIH 26130 --- Module Specification 11

# GOVERNMENT REVIEW

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 11 --- Government Review\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Detailed Application Assessment\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP\
**Upstream:** Government Portal, Unified Government Workflow\
**Downstream:** Query, Inspection, Approve / Reject, Timeline,
Notifications

------------------------------------------------------------------------

## 1. Module Purpose

Government Review is the detailed assessment stage through which an
authorized government officer examines a submitted application before
deciding the next workflow action.

The review process should allow the officer to systematically assess:

-   submitted application information;
-   Business Profile context;
-   required documents;
-   document verification state;
-   configured application checks;
-   declarations;
-   previous queries/responses;
-   configured inspection requirements.

The outcome of review determines the next workflow action:

``` text
CONTINUE REVIEW
      ↓
APPROVE
OR
QUERY
OR
INSPECTION
OR
REJECT
```

The Review module does not independently create regulatory requirements.

------------------------------------------------------------------------

# 2. Core Principle

The flow is:

``` text
Submitted Application
        ↓
Government Portal
        ↓
Review
        ↓
Review Checklist
        ↓
Findings
        ↓
Next Action
   ┌────┼─────┬─────────┐
   ↓    ↓     ↓         ↓
Query Inspection Approve Reject
```

The officer's review should be **structured, explainable, and
auditable**.

------------------------------------------------------------------------

# 3. Relationship With Unified Workflow

Unified Government Workflow owns the application state.

Government Review provides the detailed assessment interface.

Example:

``` text
Workflow:
UNDER_REVIEW

        ↓

Review Module:
Officer assesses application

        ↓

Review outcome:
QUERY_REQUIRED

        ↓

Workflow:
QUERY_RAISED
```

The Review module should not maintain a second independent application
lifecycle.

------------------------------------------------------------------------

# 4. Review Entry

An officer enters Review from:

``` text
Government Portal
      ↓
Application
      ↓
[Start Review]
```

If already under review:

``` text
[Continue Review]
```

------------------------------------------------------------------------

# 5. Review Header

Example:

``` text
APPLICATION REVIEW

APP-MH-2026-00124

FreshChain Cold Logistics Pvt. Ltd.

FSSAI
Under Review

Assigned Officer:
Amit Sharma
```

The current state must come from the workflow record.

------------------------------------------------------------------------

# 6. Review Context

At the beginning of the review, provide a compact business context.

Example:

``` text
BUSINESS CONTEXT

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

This helps the officer understand the application without leaving the
review screen.

------------------------------------------------------------------------

# 7. Review Sections

Recommended review structure:

``` text
1. Application Information
2. Business Context
3. Documents
4. Application Checks
5. Declaration
6. Previous Queries
7. Inspection
8. Review Findings
9. Next Action
```

The exact sections may vary according to the application template.

------------------------------------------------------------------------

# 8. Application Information Review

The officer should be able to inspect submitted information.

Example:

``` text
Applicant Details
✓

Business Details
✓

Site Details
✓

Activity / Food Details
✓

Facility Details
✓
```

The officer is reviewing the submitted data, not editing it directly.

------------------------------------------------------------------------

# 9. Business Profile Review

Show relevant Business Profile information alongside the application.

This allows the officer to identify obvious contradictions.

Example:

``` text
Business Profile:
Location Type = MIDC

Application:
Location Type = MIDC

✓ Consistent
```

If inconsistent:

``` text
⚠ Mismatch

Business Profile:
MIDC

Application:
Non-MIDC
```

The officer can flag the issue or raise a query according to configured
workflow.

------------------------------------------------------------------------

# 10. Document Review Checklist

Every required document should be clearly listed.

Example:

``` text
DOCUMENT REVIEW

Project Report
✓ Verified

Site Plan
✓ Verified

Process Flow
Pending Review

Cold Storage Layout
✓ Verified
```

Officer actions:

``` text
[View]
[Verify]
[Reject]
```

where applicable.

------------------------------------------------------------------------

# 11. Document Review Result

Each reviewed document can have:

``` text
PENDING
VERIFIED
REJECTED
```

The review should record the officer action and timestamp.

Example:

``` text
Process Flow

✓ Verified
Reviewed by:
Amit Sharma

31 Aug 2026
```

------------------------------------------------------------------------

# 12. Application Checks

The officer should see configured checks relevant to the application.

Example:

``` text
APPLICATION CHECKS

Required fields
✓ Complete

Required documents
✓ Complete

Declaration
✓ Complete

Configured activity information
✓ Complete
```

The checks should come from the application configuration/pre-validation
layer.

Do not invent additional regulatory checks in the Review UI.

------------------------------------------------------------------------

# 13. Review Checklist

The officer should have a concise checklist.

Example:

``` text
REVIEW CHECKLIST

☑ Application information reviewed
☑ Business information reviewed
☑ Required documents reviewed
☑ Required declarations reviewed
☐ Inspection requirement assessed
☐ Final decision ready
```

The checklist should reflect actual review progress.

------------------------------------------------------------------------

# 14. Review Findings

The officer may record findings.

Example:

``` text
REVIEW FINDINGS

Finding Type:
Information

Observation:
[Officer enters finding]

Severity:
Normal / Blocking
```

The MVP should keep findings simple.

Do not build a complex case-management system.

------------------------------------------------------------------------

# 15. Finding Types

Recommended:

-   Information
-   Missing Information
-   Document Issue
-   Inconsistency
-   Inspection Required
-   Other Configured Finding

These are workflow support categories, not legal classifications.

------------------------------------------------------------------------

# 16. Finding Severity

Use:

### BLOCKING

The issue must be resolved before the application can progress.

### WARNING

The officer should be aware of the issue, but it does not necessarily
prevent progression.

Severity should be configurable.

------------------------------------------------------------------------

# 17. Review Comments

The officer can add an internal review comment where configured.

Example:

``` text
Internal Review Note

[____________________________]

[Save Note]
```

Internal notes must not automatically become visible to the
entrepreneur.

If an item needs entrepreneur action, it should be converted into an
explicit Query.

------------------------------------------------------------------------

# 18. Query Decision

If information is insufficient:

``` text
Review Finding
       ↓
Query Required
       ↓
[Raise Query]
```

Example:

``` text
Issue:
Revised Process Flow Required

Next Action:
Raise Query
```

This hands the issue to the Query module.

------------------------------------------------------------------------

# 19. Inspection Decision

If physical/site verification is required:

``` text
Review
  ↓
Inspection Required
  ↓
[Schedule Inspection]
```

The Review module identifies the need.

The Inspection module handles scheduling and completion.

------------------------------------------------------------------------

# 20. Direct Approval

If all configured review requirements are satisfied:

``` text
Review
✓

Documents
✓

Queries
✓

Inspection
✓ / Not Required

Decision:
Ready
```

Officer can proceed to:

`Approve`

subject to workflow guards.

------------------------------------------------------------------------

# 21. Rejection

If the application cannot be approved under the configured workflow:

``` text
Review
      ↓
Rejection
      ↓
[Reject Application]
```

A reason should be required where configured.

The final rejection action belongs to the Approve / Reject workflow.

------------------------------------------------------------------------

# 22. Review Outcome

The review can result in:

``` text
CONTINUE_REVIEW
QUERY_REQUIRED
INSPECTION_REQUIRED
READY_FOR_DECISION
REJECTION_RECOMMENDED
```

These are review outcomes.

The final application status remains controlled by the Unified Workflow.

------------------------------------------------------------------------

# 23. Review Completion

When the officer completes the review:

``` text
[Complete Review]
```

the system should ensure required review sections/checks are addressed.

If incomplete:

``` text
REVIEW INCOMPLETE

Complete:
• Document review
• Review checklist
```

If complete:

``` text
REVIEW COMPLETED

Next Action:
Inspection
```

or:

``` text
Next Action:
Decision
```

------------------------------------------------------------------------

# 24. Review State

The Review module can track:

``` text
NOT_STARTED
IN_PROGRESS
COMPLETED
```

The application workflow remains:

``` text
UNDER_REVIEW
```

until the appropriate workflow transition occurs.

------------------------------------------------------------------------

# 25. Review Reopening

If a new query response or document changes the review requirements:

``` text
Review
Completed

        ↓

New response received

        ↓

Review reopened / continued
```

This should be handled through the workflow.

Do not silently overwrite previous review history.

------------------------------------------------------------------------

# 26. Query Response Review

After the entrepreneur responds to a query:

``` text
Query Response
      ↓
Government Review
      ↓
Officer opens response
```

Officer sees:

``` text
Original Query
Revised Process Flow Required

Response
Revised Process Flow

Document
✓ Attached

[Accept Response]
[Raise Follow-up Query]
```

------------------------------------------------------------------------

# 27. Follow-up Query

If response is insufficient:

``` text
[Raise Follow-up Query]
```

This creates a new query or configured follow-up query.

The application returns to:

``` text
QUERY_RAISED
```

------------------------------------------------------------------------

# 28. Inspection Review

If inspection has been completed, show:

``` text
INSPECTION

Date:
05 Sep 2026

Status:
Completed

Outcome:
Satisfactory

Remarks:
[Configured remarks]
```

The officer can use this information during final review.

------------------------------------------------------------------------

# 29. Review Summary

Before moving to a final decision, show:

``` text
REVIEW SUMMARY

Application
✓ Reviewed

Documents
✓ Complete

Queries
✓ Resolved

Inspection
✓ Completed

Declaration
✓ Complete

Review
✓ Complete

NEXT ACTION:
Final Decision
```

------------------------------------------------------------------------

# 30. Audit Trail

The review should record:

-   reviewer;
-   review start;
-   review completion;
-   findings;
-   document decisions;
-   comments where configured;
-   next action;
-   timestamps.

Example:

``` text
Review Started
31 Aug 2026 • Amit Sharma

Document Verified
31 Aug 2026

Query Raised
01 Sep 2026

Review Resumed
02 Sep 2026

Review Completed
06 Sep 2026
```

------------------------------------------------------------------------

# 31. Review History

The officer should be able to see relevant previous review activity.

Example:

``` text
REVIEW HISTORY

Review #1
31 Aug
Query raised

Review #2
02 Sep
Response accepted

Review #3
06 Sep
Final review completed
```

The MVP may implement this as a simple event timeline.

------------------------------------------------------------------------

# 32. Data Source

Review uses:

``` text
Business Profile
Application
Documents
Pre-validation
Queries
Inspection
Workflow Events
```

It should not create a separate duplicate copy of all application data.

------------------------------------------------------------------------

# 33. UI Design

Use the locked:

**LIGHT / WHITE**

theme.

Recommended visual structure:

``` text
Review Application
────────────────────────────

Application Summary

Business Context

Application Information
        ↓
Documents
        ↓
Application Checks
        ↓
Queries
        ↓
Inspection
        ↓
Review Findings
        ↓
Review Summary
        ↓
Next Action
```

Use:

-   white cards;
-   dark text;
-   professional blue actions;
-   subtle borders;
-   clear status badges;
-   compact tables;
-   strong headings.

------------------------------------------------------------------------

# 34. Review Checklist UI

Recommended:

``` text
┌─────────────────────────────────────┐
│ Review Checklist                    │
├─────────────────────────────────────┤
│ ✓ Application information           │
│ ✓ Business context                  │
│ ✓ Documents                         │
│ ✓ Declaration                       │
│ ✓ Previous queries                  │
│ ○ Inspection                        │
│ ○ Final decision                    │
└─────────────────────────────────────┘
```

The checklist should be driven by the actual configured review
requirements.

------------------------------------------------------------------------

# 35. Review Findings UI

Recommended:

``` text
REVIEW FINDINGS

┌─────────────────────────────────────┐
│ Document Issue                      │
│ Process Flow requires revision      │
│                                     │
│ Severity: Blocking                  │
│                                     │
│ [Raise Query]                       │
└─────────────────────────────────────┘
```

------------------------------------------------------------------------

# 36. Loading State

When loading review data:

``` text
Loading application review...
```

When saving a finding:

``` text
Saving review finding...
```

When completing review:

``` text
Completing review...
```

Prevent duplicate actions during requests.

------------------------------------------------------------------------

# 37. Error State

If review data cannot load:

``` text
Unable to load review information.

[Try Again]
```

If a review action fails:

``` text
Review action could not be completed.
No workflow status was changed.

[Try Again]
```

Do not expose technical/database errors.

------------------------------------------------------------------------

# 38. Permission Errors

If an officer is not authorized:

``` text
You are not authorized to review this application.
```

Do not expose application details.

------------------------------------------------------------------------

# 39. Workflow Guards

The backend must prevent invalid review actions.

Examples:

``` text
Query unresolved
→ Approve blocked if query is configured as blocking

Inspection required but incomplete
→ Approve blocked

Required document rejected
→ Progress blocked where configured
```

The UI should also communicate the reason.

------------------------------------------------------------------------

# 40. Hero Review Journey

Application:

**APP-MH-2026-00124**

``` text
Submitted
    ↓
Assigned to Amit Sharma
    ↓
Under Review
    ↓
Officer reviews documents
    ↓
Officer identifies missing/revised Process Flow
    ↓
Raises Query
    ↓
Entrepreneur responds
    ↓
Officer reviews revised Process Flow
    ↓
Schedules Inspection
    ↓
Inspection completed — Satisfactory
    ↓
Final Review
    ↓
Ready for Decision
```

The Review module must support this journey.

------------------------------------------------------------------------

# 41. Acceptance Criteria

The Review module is complete when:

### Entry

-   Officer can open a submitted application.
-   Review can be started/resumed.

### Context

-   Business context is visible.
-   Application information is reviewable.

### Documents

-   Required documents are listed.
-   Officer can verify/reject where configured.
-   Document review actions are recorded.

### Checklist

-   Review checklist exists.
-   Required review items can be completed.

### Findings

-   Officer can record findings.
-   Severity can be represented.
-   Findings can lead to Query/Inspection.

### Query

-   Officer can raise a query from a review finding.
-   Query response can return to Review.
-   Follow-up query is possible.

### Inspection

-   Review can identify inspection requirement.
-   Inspection results can be viewed during review.

### Decision

-   Review can reach Ready for Decision.
-   Final approval/rejection remains controlled by workflow.

### Audit

-   Review actions create events/history.

### Hero

-   APP-MH-2026-00124 supports the complete review journey.

### UX

-   Light/white theme.
-   Clear checklist.
-   Clear next action.
-   Loading/error/permission states exist.

------------------------------------------------------------------------

# 42. Out of Scope

Do not build:

-   AI-based legal judgment;
-   automatic officer decisions;
-   complex scoring systems;
-   advanced case management;
-   legal interpretation engine;
-   nationwide review templates;
-   real government review integration;
-   biometric officer authentication.

------------------------------------------------------------------------

# 43. Final Locked Definition

**GOVERNMENT REVIEW** is the structured assessment layer through which
an authorized officer examines the submitted application, documents,
configured checks, queries, and inspection information before
determining the appropriate next workflow action.

Its core responsibility is:

> **Provide a structured review workspace that helps the officer assess
> the application, record findings, request additional information or
> inspection when necessary, and move a complete application toward
> final decision.**

The defining relationship is:

``` text
Government Portal
       ↓
Review
       ↓
Query / Inspection / Decision
       ↓
Unified Government Workflow
```

Review assesses the application.

**It does not independently decide regulatory applicability.**

**STATUS: LOCKED FOR PROTOTYPE**
