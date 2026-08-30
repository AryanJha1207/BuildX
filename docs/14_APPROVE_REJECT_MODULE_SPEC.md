# SIH 26130 --- Module Specification 14

# APPROVE / REJECT --- FINAL DECISION

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 14 --- Approve / Reject\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Final Government Decision\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP\
**Upstream:** Government Review, Query Management, Inspection, Unified
Government Workflow\
**Downstream:** Entrepreneur Dashboard, Personalized Roadmap,
Notifications, Compliance, Analytics

------------------------------------------------------------------------

## 1. Module Purpose

Approve / Reject is the final decision stage of the government workflow.

It allows an authorized government officer to make the configured final
decision on an application after all required review, document, query,
and inspection steps have been completed.

The two primary outcomes are:

``` text
APPROVED
```

or:

``` text
REJECTED
```

The module must ensure that the decision is:

-   made by an authorized government user;
-   allowed by workflow rules;
-   recorded against the application;
-   timestamped;
-   visible in the application timeline;
-   communicated to the entrepreneur;
-   reflected in the Personalized Roadmap;
-   available for post-approval compliance where applicable.

------------------------------------------------------------------------

# 2. Core Principle

The final decision flow is:

``` text
Government Review
      ↓
Required Documents
      ↓
Queries Resolved
      ↓
Inspection Completed / Not Required
      ↓
Final Review
      ↓
Decision
   ┌───────┴────────┐
   ↓                ↓
APPROVED          REJECTED
```

The decision module does not determine regulatory applicability.

It executes the final decision within the configured workflow.

------------------------------------------------------------------------

# 3. Decision Gate

The officer can make a final decision only when the configured workflow
permits it.

Typical conditions:

``` text
Review Complete
✓

Required Documents
✓

Blocking Queries
0

Mandatory Inspection
✓ / Not Required

Required Declaration
✓

Final Review
✓
```

Then:

``` text
[Approve]
[Reject]
```

------------------------------------------------------------------------

# 4. Approval Guards

Approval must be blocked when a configured blocking condition remains
unresolved.

Examples:

``` text
Blocking Query Open
        ↓
APPROVE BLOCKED
```

``` text
Mandatory Inspection Incomplete
        ↓
APPROVE BLOCKED
```

``` text
Required Document Missing
        ↓
APPROVE BLOCKED
```

The backend must enforce these rules.

The UI must also explain why approval is unavailable.

------------------------------------------------------------------------

# 5. Final Decision Summary

Before the officer confirms a decision, display:

``` text
FINAL DECISION

Application:
APP-MH-2026-00124

Applicant:
FreshChain Cold Logistics Pvt. Ltd.

Authority:
FSSAI

Review:
✓ Complete

Documents:
✓ Complete

Queries:
✓ Resolved

Inspection:
✓ Completed

Ready for Decision
```

Actions:

``` text
[Approve]
[Reject]
```

------------------------------------------------------------------------

# 6. Approve Flow

Officer selects:

`Approve`

Confirmation:

``` text
APPROVE APPLICATION

You are about to approve:

APP-MH-2026-00124

FreshChain Cold Logistics Pvt. Ltd.

[Cancel]
[Confirm Approval]
```

After confirmation:

``` text
FINAL_REVIEW
      ↓
APPROVED
```

------------------------------------------------------------------------

# 7. Approval Record

A successful approval should create a decision record conceptually
containing:

``` text
decision
├── id
├── applicationId
├── decisionType
├── decidedBy
├── decidedAt
├── reason / remarks
├── authority
└── metadata
```

For:

``` text
decisionType = APPROVED
```

------------------------------------------------------------------------

# 8. Approval Remarks

The officer may provide remarks where configured.

Example:

``` text
Approval Remarks

[________________________]
```

Remarks should not be mandatory unless the configured workflow requires
them.

Do not generate artificial approval language.

------------------------------------------------------------------------

# 9. Approval Reference

Where useful, generate or display a decision/reference number.

Example:

``` text
Approval Reference:
APR-MH-2026-00124
```

This is a prototype reference unless connected to a real government
numbering system.

------------------------------------------------------------------------

# 10. Approval Date

Record the actual decision timestamp.

Example:

``` text
Approved:
06 Sep 2026
```

Do not hard-code demo dates in the implementation.

------------------------------------------------------------------------

# 11. Approval Confirmation

After successful approval:

``` text
APPLICATION APPROVED

✓ Application approved successfully.

Application ID:
APP-MH-2026-00124

Approval Reference:
APR-MH-2026-00124

Authority:
FSSAI

Decision:
Approved

Date:
06 Sep 2026

[View Application]
[View Roadmap]
```

------------------------------------------------------------------------

# 12. Rejection Flow

Officer selects:

`Reject`

Show:

``` text
REJECT APPLICATION

Application:
APP-MH-2026-00124

Reason *
[____________________________]

Additional Remarks
[____________________________]

[Cancel]
[Confirm Rejection]
```

A rejection reason should be required when configured.

------------------------------------------------------------------------

# 13. Rejection Record

Conceptually:

``` text
decision
├── id
├── applicationId
├── decisionType
├── decidedBy
├── decidedAt
├── reason
├── remarks
├── authority
└── metadata
```

For:

``` text
decisionType = REJECTED
```

------------------------------------------------------------------------

# 14. Rejection Reason

The officer must provide the actual reason where required.

Example:

``` text
Reason:
Required site information could not be
verified during the configured review process.
```

This should be entered/selected by the officer.

The system must not fabricate legal grounds.

------------------------------------------------------------------------

# 15. Rejection Confirmation

Before final rejection:

``` text
CONFIRM REJECTION

This will mark the application as rejected.

Reason:
[Displayed reason]

[Cancel]
[Confirm Rejection]
```

------------------------------------------------------------------------

# 16. Rejection Result

After successful rejection:

``` text
APPLICATION REJECTED

Application ID:
APP-MH-2026-00124

Decision:
Rejected

Reason:
[Recorded reason]

Date:
06 Sep 2026

[View Application]
```

------------------------------------------------------------------------

# 17. Decision State Transition

Approval:

``` text
FINAL_REVIEW
      ↓
APPROVED
```

Rejection:

``` text
FINAL_REVIEW
      ↓
REJECTED
```

After either decision, normal review actions should be disabled.

------------------------------------------------------------------------

# 18. Decision Immutability

A final decision should not be silently changed.

After:

``` text
APPROVED
```

or:

``` text
REJECTED
```

the decision is treated as final within the prototype.

If reconsideration/reopening is required later, it should be an explicit
separate workflow.

Do not implement silent editing.

------------------------------------------------------------------------

# 19. Decision Timeline

Create a timeline event.

Approval:

``` text
06 Sep
Application Approved
by Amit Sharma
```

Rejection:

``` text
06 Sep
Application Rejected
by Amit Sharma
```

The actual event timestamp and authorized actor should be stored.

------------------------------------------------------------------------

# 20. Entrepreneur Notification --- Approval

After approval:

``` text
Application Approved

Your FSSAI application has been approved.

Application ID:
APP-MH-2026-00124

Approval Reference:
APR-MH-2026-00124

[View Application]
```

The notification should link to the application.

------------------------------------------------------------------------

# 21. Entrepreneur Notification --- Rejection

After rejection:

``` text
Application Decision

Your application has been rejected.

Application ID:
APP-MH-2026-00124

Reason:
[Recorded reason]

[View Application]
```

Do not use accusatory or unclear language.

------------------------------------------------------------------------

# 22. Roadmap Update --- Approval

After approval:

``` text
FSSAI
✓ Approved
```

The roadmap can then surface configured next steps:

``` text
Approval Complete

Next:
Post-approval Compliance
```

The system must not automatically assume that every approval has the
same compliance obligations.

------------------------------------------------------------------------

# 23. Roadmap Update --- Rejection

After rejection:

``` text
FSSAI
Rejected
```

If the product supports a next action:

``` text
Review Decision
or
Start New Application
```

These are separate flows and are not part of the approval decision
itself.

------------------------------------------------------------------------

# 24. Compliance Handoff

Approval may trigger post-approval compliance configuration.

Conceptually:

``` text
APPROVED
    ↓
Configured Compliance Requirements
    ↓
Renewals / Periodic Obligations
```

Only configured obligations should appear.

Do not invent compliance requirements.

------------------------------------------------------------------------

# 25. Analytics Handoff

Decision events contribute to government/product analytics.

Example:

``` text
Applications
Submitted: 100

Approved: 74

Rejected: 12

Under Review: 14
```

Analytics is handled by the Analytics module.

The decision module only records the source event/data.

------------------------------------------------------------------------

# 26. Workflow Synchronization

After approval/rejection:

``` text
Decision
   ↓
Application Status
   ↓
Unified Workflow
   ↓
Government Portal
   ↓
Entrepreneur Dashboard
   ↓
Roadmap
   ↓
Notifications
```

All views must reflect the same decision.

------------------------------------------------------------------------

# 27. Approval Guard --- Query

If:

``` text
Blocking Query = OPEN
```

show:

``` text
APPROVAL UNAVAILABLE

Resolve the blocking query before
making a final decision.
```

Action:

``` text
[View Query]
```

------------------------------------------------------------------------

# 28. Approval Guard --- Inspection

If mandatory inspection is incomplete:

``` text
APPROVAL UNAVAILABLE

Required inspection has not been completed.

[View Inspection]
```

------------------------------------------------------------------------

# 29. Approval Guard --- Documents

If required documents are missing/rejected:

``` text
APPROVAL UNAVAILABLE

Required documents are incomplete.

[View Documents]
```

------------------------------------------------------------------------

# 30. Approval Guard --- Review

If review is incomplete:

``` text
APPROVAL UNAVAILABLE

Complete the required review steps first.

[Continue Review]
```

------------------------------------------------------------------------

# 31. Decision Authorization

Only an authorized government officer can approve/reject.

Conceptually:

``` text
User
 ↓
Government Role
 ↓
Authority / Assignment
 ↓
Decision Permission
```

The backend must enforce this.

Frontend button hiding is not sufficient.

------------------------------------------------------------------------

# 32. Double Decision Protection

If an officer clicks Approve twice:

``` text
Only one approval decision is recorded.
```

After a successful decision:

``` text
Approve
Reject
```

actions become unavailable.

------------------------------------------------------------------------

# 33. Conflicting Decisions

The system should prevent:

``` text
APPROVED
   ↓
REJECTED
```

or:

``` text
REJECTED
   ↓
APPROVED
```

without an explicit reopening/reconsideration workflow.

That workflow is outside the MVP.

------------------------------------------------------------------------

# 34. Decision Failure

If approval/rejection fails:

``` text
DECISION NOT COMPLETED

No final decision was recorded.

[Try Again]
```

Do not show a successful decision if the underlying transaction failed.

------------------------------------------------------------------------

# 35. Unknown Transaction State

If the system cannot determine whether the decision succeeded:

``` text
We couldn't confirm the final decision.

Please refresh the application before
trying again.
```

The system should avoid blindly creating another decision.

------------------------------------------------------------------------

# 36. Decision Audit Trail

Record:

-   application;
-   authority;
-   decision;
-   officer;
-   timestamp;
-   reason/remarks;
-   previous workflow state;
-   new workflow state.

Example:

``` text
Decision:
APPROVED

By:
Amit Sharma

Previous:
FINAL_REVIEW

New:
APPROVED
```

------------------------------------------------------------------------

# 37. Entrepreneur Application View

After decision:

``` text
FSSAI APPLICATION

APP-MH-2026-00124

Status:
✓ APPROVED

Authority:
FSSAI

Submitted:
30 Aug 2026

Approved:
06 Sep 2026

Approval Reference:
APR-MH-2026-00124
```

------------------------------------------------------------------------

# 38. Government Application View

After decision:

``` text
FINAL DECISION

APP-MH-2026-00124

Approved

Decision by:
Amit Sharma

Decision date:
06 Sep 2026

Approval Reference:
APR-MH-2026-00124
```

For rejection:

``` text
Rejected

Reason:
[Recorded reason]
```

------------------------------------------------------------------------

# 39. UI Design

Use the locked:

**LIGHT / WHITE**

theme.

Recommended:

-   white/light background;
-   white cards;
-   dark charcoal text;
-   professional blue primary actions;
-   clear success/error states;
-   subtle borders;
-   strong but restrained decision confirmation.

Avoid:

-   dark theme;
-   celebratory animations;
-   excessive gradients;
-   misleading "legal certificate" styling.

------------------------------------------------------------------------

# 40. Final Decision UI

Recommended:

``` text
┌─────────────────────────────────────────────┐
│ Final Decision                              │
├─────────────────────────────────────────────┤
│ FSSAI Application                           │
│ APP-MH-2026-00124                           │
│                                             │
│ Review             ✓ Complete               │
│ Documents         ✓ Complete               │
│ Queries           ✓ Resolved               │
│ Inspection        ✓ Complete               │
│                                             │
│ Ready for Decision                          │
│                                             │
│ [Reject]                [Approve]           │
└─────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 41. Approval Success UI

``` text
┌─────────────────────────────────────────────┐
│ ✓ Application Approved                      │
│                                             │
│ APP-MH-2026-00124                           │
│                                             │
│ Approval Reference                          │
│ APR-MH-2026-00124                           │
│                                             │
│ Authority                                   │
│ FSSAI                                       │
│                                             │
│ [View Application] [View Roadmap]           │
└─────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 42. Rejection UI

``` text
┌─────────────────────────────────────────────┐
│ Application Rejected                        │
│                                             │
│ APP-MH-2026-00124                           │
│                                             │
│ Reason                                      │
│ [Recorded officer reason]                   │
│                                             │
│ [View Application]                           │
└─────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 43. Loading States

During approval:

``` text
Recording approval...
```

During rejection:

``` text
Recording decision...
```

Disable duplicate actions while processing.

------------------------------------------------------------------------

# 44. Error States

Use clear user-facing errors:

``` text
Decision could not be completed.

No final decision was recorded.

[Try Again]
```

Do not expose database/API errors.

------------------------------------------------------------------------

# 45. Hero Approval Journey

Application:

**APP-MH-2026-00124**

``` text
Submitted
      ↓
Assigned
      ↓
Under Review
      ↓
Query Raised
      ↓
Query Responded
      ↓
Inspection Scheduled
      ↓
Inspection Completed
      ↓
Final Review
      ↓
Ready for Decision
      ↓
Officer clicks Approve
      ↓
Confirmation
      ↓
APPROVED
      ↓
Entrepreneur Notification
      ↓
Roadmap:
✓ FSSAI Approved
      ↓
Post-approval Compliance
```

This is the primary final-decision demonstration.

------------------------------------------------------------------------

# 46. Hero Rejection Alternative

The same workflow can demonstrate:

``` text
Final Review
      ↓
Officer clicks Reject
      ↓
Reason entered
      ↓
Confirmation
      ↓
REJECTED
      ↓
Entrepreneur Notification
      ↓
Roadmap Updated
```

The prototype should support both outcomes.

------------------------------------------------------------------------

# 47. Acceptance Criteria

The Approve / Reject module is complete when:

### Decision Gate

-   Only authorized officers can decide.
-   Approval guards are enforced.
-   Blocking queries prevent approval where configured.
-   Mandatory inspection prevents approval when incomplete.
-   Required document conditions are enforced.
-   Incomplete review prevents final decision.

### Approval

-   Officer can approve when permitted.
-   Confirmation is required.
-   Approval record is created.
-   Approval reference is available.
-   Approval timestamp is recorded.

### Rejection

-   Officer can reject when permitted.
-   Reason is required where configured.
-   Rejection record is created.
-   Rejection timestamp is recorded.

### Synchronization

-   Application state updates.
-   Workflow state updates.
-   Timeline event is created.
-   Entrepreneur notification is created.
-   Roadmap updates.
-   Compliance handoff occurs where configured.

### Safety

-   Duplicate decisions are prevented.
-   Conflicting decisions are blocked.
-   Final decisions are not silently edited.
-   Failed decisions do not show false success.

### Hero

-   APP-MH-2026-00124 supports approval.
-   Alternative rejection journey is demonstrable.

### UI

-   Light/white theme.
-   Clear decision gate.
-   Clear success/rejection states.
-   Loading/error states.

------------------------------------------------------------------------

# 48. Out of Scope

Do not build:

-   real legal approval certificates;
-   digital signatures;
-   real government certificate generation;
-   external department decision APIs;
-   legal interpretation;
-   AI approval/rejection;
-   automated statutory decision-making;
-   appeals/reconsideration infrastructure;
-   complex administrative hierarchy.

------------------------------------------------------------------------

# 49. Final Locked Definition

**APPROVE / REJECT** is the final government decision layer that records
the authorized officer's decision after the configured review, document,
query, and inspection requirements have been satisfied.

Its core responsibility is:

> **Enforce the final decision gates, allow an authorized officer to
> approve or reject an application, record the decision as an auditable
> workflow event, and synchronize the resulting state across the
> government portal, entrepreneur dashboard, roadmap, notifications,
> compliance, and analytics.**

The defining prototype transition is:

``` text
FINAL REVIEW
      ↓
READY FOR DECISION
      ↓
APPROVE / REJECT
      ↓
FINAL STATE
      ↓
ENTREPRENEUR NOTIFIED
      ↓
ROADMAP UPDATED
      ↓
POST-APPROVAL / NEXT ACTION
```

**STATUS: LOCKED FOR PROTOTYPE**
