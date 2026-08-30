# SIH 26130 --- Module Specification 08

# SUBMISSION

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 08 --- Submission\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Application Submission / Workflow Handoff\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP\
**Upstream:** Application Builder, Document Pre-validation\
**Downstream:** Unified Workflow, Government Portal, Notifications,
Roadmap, Application Tracking

------------------------------------------------------------------------

## 1. Module Purpose

The Submission module is the controlled transition between:

**READY TO SUBMIT**

and:

**SUBMITTED**

Its purpose is to ensure that only an application that has passed the
configured pre-submission checks can enter the government workflow.

The module must:

-   confirm readiness;
-   show the final application summary;
-   obtain required confirmation;
-   create the submission event;
-   assign/generate an application ID;
-   change application state;
-   create the initial workflow record;
-   notify the entrepreneur;
-   make the application available to the appropriate government
    workflow.

------------------------------------------------------------------------

# 2. Core Principle

The submission flow is:

``` text
Application Builder
        ↓
Document Pre-validation
        ↓
READY_TO_SUBMIT
        ↓
Final Review
        ↓
Submission Confirmation
        ↓
SUBMIT
        ↓
Application ID
        ↓
SUBMITTED
        ↓
Unified Government Workflow
```

Submission is a **state transition**, not merely a success message.

------------------------------------------------------------------------

# 3. Submission Gate

The application can only be submitted when:

``` text
Overall Pre-validation = READY_TO_SUBMIT
```

If:

``` text
Overall Pre-validation = BLOCKED
```

the Submit action must not proceed.

------------------------------------------------------------------------

# 4. Latest Validation Requirement

Before submission, the system should use the latest applicable
validation result.

Conceptually:

``` text
Previous validation:
READY_TO_SUBMIT

Application changed:
YES

        ↓

Re-validation required

        ↓

READY / BLOCKED
```

The system must not rely blindly on an outdated readiness result.

------------------------------------------------------------------------

# 5. Final Submission Review

Before the final Submit action, show a concise summary.

Example:

``` text
READY TO SUBMIT

FSSAI Application

Applicant
FreshChain Cold Logistics Pvt. Ltd.

Location
Pune, Maharashtra

Project
New Cold Storage

Documents
3 / 3 available

Pre-validation
✓ Passed

Declaration
✓ Complete
```

Actions:

``` text
[Back / Edit]
[Submit Application]
```

------------------------------------------------------------------------

# 6. Submission Confirmation

Before committing the state transition, require a clear confirmation.

Example:

``` text
CONFIRM SUBMISSION

You are about to submit this application
for government review.

Please confirm that the information and
documents provided are accurate.

☐ I confirm the above.

[Cancel]
[Submit Application]
```

The exact declaration language should come from the configured
application template.

Do not represent prototype wording as official statutory language.

------------------------------------------------------------------------

# 7. Submission Transaction

Submission should be treated as one logical transaction.

Conceptually:

``` text
Validate readiness
        ↓
Create / confirm application ID
        ↓
Set application status = SUBMITTED
        ↓
Create submission event
        ↓
Create workflow entry
        ↓
Create notification
        ↓
Return confirmation
```

The implementation should avoid leaving the application in a partially
submitted state.

------------------------------------------------------------------------

# 8. Application ID

Each submitted application requires a unique identifier.

Hero example:

**APP-MH-2026-00124**

The ID should be:

-   readable;
-   unique;
-   associated with the application;
-   displayed after successful submission.

The exact generation strategy may be simplified for the MVP.

------------------------------------------------------------------------

# 9. Submission Timestamp

Record the actual submission date/time.

Example:

``` text
Submitted
30 Aug 2026
7:35 PM
```

The UI should use the real application event timestamp.

Do not hard-code a submission time in the final implementation.

------------------------------------------------------------------------

# 10. Application State Transition

Primary transition:

``` text
READY_TO_SUBMIT
        ↓
SUBMITTED
```

After submission:

``` text
SUBMITTED
        ↓
ASSIGNED
        ↓
UNDER_REVIEW
```

The later transitions are owned by the Unified Workflow / Government
modules.

------------------------------------------------------------------------

# 11. Editing After Submission

After successful submission:

``` text
Application
Status: SUBMITTED
```

Normal editing should be disabled.

The entrepreneur can:

-   view application;
-   view submitted documents;
-   view timeline;
-   view status;
-   respond to queries when raised;
-   view inspection;
-   view decision.

The system must not silently allow modifications to the submitted
application.

------------------------------------------------------------------------

# 12. Submission Confirmation Screen

After successful submission:

``` text
APPLICATION SUBMITTED

✓ Your application has been submitted
  successfully.

Application ID
APP-MH-2026-00124

Authority
FSSAI

Status
Submitted

Submitted
30 Aug 2026, 7:35 PM

[Track Application]
[View Roadmap]
```

The application ID should be visually prominent.

------------------------------------------------------------------------

# 13. Timeline Event

A submission event must be created.

Example:

``` text
Application Created
✓

Pre-validation Passed
✓

Application Submitted
✓
30 Aug 2026, 7:35 PM

Government Review
○
```

This event becomes part of the application timeline.

------------------------------------------------------------------------

# 14. Roadmap Update

On successful submission:

``` text
Roadmap Item

FSSAI
Not Started
        ↓
Submitted
```

The Roadmap should read the underlying application state.

It must not maintain an unrelated fake status.

------------------------------------------------------------------------

# 15. Entrepreneur Notification

After successful submission, create a notification.

Example:

``` text
Application Submitted

Your FSSAI application has been submitted
successfully.

Application ID:
APP-MH-2026-00124

[Track Application]
```

The notification should link to the application.

------------------------------------------------------------------------

# 16. Government Workflow Handoff

Submission creates the entry point for government processing.

Conceptually:

``` text
Entrepreneur
     ↓
Submit
     ↓
Application = SUBMITTED
     ↓
Government Queue / Workflow
     ↓
Officer Assignment
     ↓
Review
```

The MVP does not require a real external government API.

The handoff can occur through the application's internal
database/workflow.

------------------------------------------------------------------------

# 17. Government Queue

After submission, the relevant application should become visible to the
appropriate government-side workflow.

Example:

``` text
Government Portal

New Applications
1

APP-MH-2026-00124
FSSAI
FreshChain Cold Logistics Pvt. Ltd.
Submitted
```

The exact department assignment should come from configured
application/authority mapping.

------------------------------------------------------------------------

# 18. Duplicate Submission Protection

The system should prevent accidental repeated submission.

Example:

User clicks Submit twice.

Result:

``` text
Only one submission is recorded.

Application ID:
APP-MH-2026-00124
```

After submission, the button should no longer perform the submission
action.

------------------------------------------------------------------------

# 19. Failed Submission

If the submission transaction fails:

``` text
SUBMISSION NOT COMPLETED

We couldn't submit your application.
Your application has not been marked as submitted.

[Try Again]
```

The application should remain in the appropriate pre-submission state.

Do not show:

`Submitted successfully`

if the underlying state transition failed.

------------------------------------------------------------------------

# 20. Validation Failure at Submission

If the application changed after the previous validation:

``` text
SUBMISSION CHECK

Your application has changed since the
last pre-validation.

[Run Pre-validation]
```

If the new result is blocked:

``` text
SUBMISSION BLOCKED

1 issue needs attention.

[Fix Issue]
```

------------------------------------------------------------------------

# 21. Required Confirmation Missing

If the confirmation checkbox is not selected:

``` text
Please confirm the declaration before
submitting the application.
```

The application must not be submitted.

------------------------------------------------------------------------

# 22. Submission Success Data

A successful submission should result in:

``` text
Application
status = SUBMITTED

Application ID
created/confirmed

Submitted At
created

Timeline Event
created

Government Workflow Entry
created

Notification
created
```

This is the minimum connected behavior required for the prototype.

------------------------------------------------------------------------

# 23. Integration With Document Pre-validation

The Submission module consumes:

``` text
Pre-validation Result
```

It should not independently recreate all validation logic.

Flow:

``` text
Pre-validation
READY_TO_SUBMIT
       ↓
Submission
       ↓
Final confirmation
       ↓
Submit
```

------------------------------------------------------------------------

# 24. Integration With Application Builder

Application Builder owns:

-   form completion;
-   application draft;
-   application sections;
-   application data.

Submission owns:

-   final transition into workflow.

------------------------------------------------------------------------

# 25. Integration With Document Vault

The submitted application must reference its selected documents.

Example:

``` text
Application
APP-MH-2026-00124

Documents
✓ Project Report
✓ Site Plan
✓ Process Flow
```

The submission must not lose the document associations.

------------------------------------------------------------------------

# 26. Integration With Government Portal

The submitted application becomes available to the Government Portal.

Example:

``` text
SUBMITTED
    ↓
Government Inbox
    ↓
Officer Assignment
    ↓
Review
```

The government portal must operate on the same underlying application
record.

------------------------------------------------------------------------

# 27. Integration With Notifications

At minimum:

``` text
Submission successful
        ↓
Notification created
```

Future government events also use the notification system, but those are
defined in later modules.

------------------------------------------------------------------------

# 28. Integration With Application Tracking

After submission:

``` text
[Track Application]
```

should lead to the application's tracking/timeline view.

The entrepreneur should see:

-   application ID;
-   authority;
-   submitted date;
-   current status;
-   timeline;
-   next expected action where configured.

------------------------------------------------------------------------

# 29. Integration With Roadmap

After submission:

``` text
Roadmap
FSSAI

Status:
Submitted

Next:
Waiting for department review
```

The roadmap should not imply that submission means approval.

------------------------------------------------------------------------

# 30. SLA Start

If SLA tracking is configured for the relevant application, the
submission event can serve as the starting event.

Conceptually:

``` text
Submitted At
       ↓
SLA Clock
```

The prototype must not invent statutory SLA durations.

If a demo/configured duration is used, label it appropriately.

------------------------------------------------------------------------

# 31. Auditability

Submission should create an auditable event containing, where
appropriate:

-   application ID;
-   submitted timestamp;
-   submitting user;
-   application state before;
-   application state after.

Full enterprise audit infrastructure is not required for MVP.

------------------------------------------------------------------------

# 32. UI Design

Use the locked:

**LIGHT / WHITE**

theme.

Submission screens should use:

-   white/light background;
-   clear confirmation card;
-   dark charcoal text;
-   professional blue primary action;
-   strong success state;
-   subtle borders;
-   clear application ID;
-   clean spacing.

Avoid:

-   dark theme;
-   excessive animations;
-   distracting celebration effects.

------------------------------------------------------------------------

# 33. Final Review UI

Recommended:

``` text
┌─────────────────────────────────────────────┐
│ Ready to Submit                             │
│ Review your application before submission   │
├─────────────────────────────────────────────┤
│                                             │
│ FSSAI Application                           │
│                                             │
│ Applicant                                   │
│ FreshChain Cold Logistics Pvt. Ltd.         │
│                                             │
│ Location                                    │
│ Pune, Maharashtra • MIDC                    │
│                                             │
│ Documents                                   │
│ ✓ 3 of 3 available                          │
│                                             │
│ Pre-validation                              │
│ ✓ Passed                                    │
│                                             │
│ Declaration                                 │
│ ✓ Complete                                  │
│                                             │
│ [Edit Application] [Submit Application]     │
└─────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 34. Success UI

Recommended:

``` text
┌─────────────────────────────────────────────┐
│ ✓ Application Submitted                     │
│                                             │
│ Your application has been submitted         │
│ successfully for government review.         │
│                                             │
│ Application ID                              │
│ APP-MH-2026-00124                           │
│                                             │
│ Status                                      │
│ Submitted                                   │
│                                             │
│ [Track Application]                         │
│ [View Roadmap]                              │
└─────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 35. Loading State

During submission:

``` text
SUBMITTING APPLICATION...

✓ Checking readiness
✓ Preparing application
● Submitting
○ Creating workflow record
```

Do not allow duplicate clicks while submission is in progress.

------------------------------------------------------------------------

# 36. Error State

If submission fails:

``` text
We couldn't complete the submission.

No submission has been recorded.

[Try Again]
```

If the system cannot determine whether the transaction succeeded, it
should not blindly create a second submission.

For the MVP, use a simple idempotent submission operation.

------------------------------------------------------------------------

# 37. Acceptance Criteria

The Submission module is complete when:

### Gate

-   Only READY_TO_SUBMIT applications can proceed.
-   BLOCKED applications cannot submit.

### Confirmation

-   Final summary is shown.
-   Required confirmation is enforced.

### State

-   Application changes to SUBMITTED after success.
-   Application cannot be accidentally submitted twice.

### Identity

-   Unique application ID exists.
-   Submission timestamp is recorded.

### Events

-   Submission timeline event is created.

### Workflow

-   Government workflow entry is created.
-   Government portal can see the submitted application.

### Notifications

-   Entrepreneur receives submission notification.

### Roadmap

-   Roadmap reflects SUBMITTED.

### Tracking

-   Application can be tracked after submission.

### Failure

-   Failed submission does not falsely display success.
-   Retry is possible.

### Hero

-   FreshChain FSSAI application can move from READY_TO_SUBMIT to
    SUBMITTED.

### UI

-   Light/white theme is consistent.
-   Confirmation and success states are clear.

------------------------------------------------------------------------

# 38. Out of Scope

Do not build:

-   real government API submission;
-   government payment gateway;
-   real digital signatures;
-   e-stamping;
-   external department integrations;
-   production-grade e-governance infrastructure;
-   complex queue optimization;
-   legal certification of submission.

------------------------------------------------------------------------

# 39. Final Locked Definition

**SUBMISSION** is the controlled gateway that converts a validated,
ready application into a submitted government-workflow application.

Its core responsibility is:

> **Confirm that the latest configured pre-validation has passed, obtain
> the entrepreneur's final confirmation, record the submission as a real
> application state transition, create the necessary
> timeline/workflow/notification records, and hand the application to
> the government-side workflow.**

The critical prototype transition is:

``` text
READY TO SUBMIT
        ↓
Final Review
        ↓
Confirm
        ↓
SUBMIT
        ↓
APP-MH-2026-00124
        ↓
SUBMITTED
        ↓
Government Portal
```

**STATUS: LOCKED FOR PROTOTYPE**
