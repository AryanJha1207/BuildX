# SIH 26130 --- Module Specification 12

# QUERY MANAGEMENT

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 12 --- Query Management\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Government Officer ↔ Entrepreneur Communication\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP\
**Upstream:** Government Review / Unified Government Workflow\
**Downstream:** Inspection, Final Review, Roadmap, Notifications,
Application Tracking

------------------------------------------------------------------------

## 1. Module Purpose

Query Management handles formal requests for additional information or
documents during government application processing.

It creates a controlled communication loop:

``` text
Government Officer
      ↓
Raise Query
      ↓
Entrepreneur Notification
      ↓
View Query
      ↓
Provide Response / Documents
      ↓
Submit Response
      ↓
Government Officer Review
      ↓
Continue Review
OR
Follow-up Query
```

The module must make it obvious:

-   what the government has requested;
-   why action is needed;
-   what the entrepreneur must provide;
-   whether a response is pending;
-   whether the response was submitted;
-   whether the officer has accepted it;
-   what happens next.

------------------------------------------------------------------------

# 2. Core Principle

A query is a **workflow event**, not a chat message.

It must be linked to:

-   application;
-   authority;
-   officer;
-   entrepreneur;
-   requested information/document;
-   status;
-   timestamps;
-   response.

The query must affect the underlying workflow state where configured.

------------------------------------------------------------------------

# 3. Query Lifecycle

Primary lifecycle:

``` text
OPEN
  ↓
AWAITING_ENTREPRENEUR
  ↓
RESPONSE_SUBMITTED
  ↓
UNDER_REVIEW
  ↓
RESOLVED
```

Alternative:

``` text
UNDER_REVIEW
     ↓
FOLLOW_UP_REQUIRED
     ↓
AWAITING_ENTREPRENEUR
```

Or:

``` text
OPEN
 ↓
CANCELLED
```

where cancellation is explicitly permitted.

------------------------------------------------------------------------

# 4. Query Status Definitions

## OPEN

Query has been created but has not yet entered the entrepreneur response
state.

## AWAITING_ENTREPRENEUR

Entrepreneur action is required.

## RESPONSE_SUBMITTED

Entrepreneur has submitted a response.

## UNDER_REVIEW

Government officer is reviewing the response.

## RESOLVED

The officer has accepted the response and the query is complete.

## FOLLOW_UP_REQUIRED

The response was insufficient and another response/action is required.

## CANCELLED

The query was cancelled according to configured workflow.

------------------------------------------------------------------------

# 5. Query Record

Each query should conceptually contain:

``` text
query
├── id
├── applicationId
├── authority
├── officerId
├── title
├── description
├── status
├── priority
├── blocking
├── dueDate
├── createdAt
├── respondedAt
├── resolvedAt
└── metadata
```

------------------------------------------------------------------------

# 6. Query Request

Government officer creates:

``` text
Query Title *
[Revised Process Flow Required]

Request Details *
[Please provide the revised process flow...]

Required Document
[Process Flow]

Blocking
☑

Due Date
[configured]
```

The query must clearly communicate the expected action.

------------------------------------------------------------------------

# 7. Query Types

For MVP, support simple types:

-   Additional Information
-   Document Required
-   Document Revision
-   Clarification
-   Other

The type helps the entrepreneur understand what is being requested.

------------------------------------------------------------------------

# 8. Blocking Query

A query may be configured as:

**BLOCKING**

If blocking:

``` text
Application cannot proceed
until the query is resolved.
```

Example:

``` text
Revised Process Flow Required
Blocking: Yes
```

The application should not be approved while the blocking query remains
unresolved.

------------------------------------------------------------------------

# 9. Non-blocking Query

A non-blocking query may request clarification that does not prevent
another configured workflow step.

Example:

``` text
Clarification on contact details

Blocking:
No
```

The workflow behavior must come from configuration.

------------------------------------------------------------------------

# 10. Due Date

Where configured, display:

``` text
Response Due:
05 Sep 2026
```

The system should distinguish:

``` text
Due
Overdue
Responded
```

Do not invent statutory response periods.

If no due date is configured:

``` text
Response Due:
Not specified
```

------------------------------------------------------------------------

# 11. Entrepreneur Query View

The entrepreneur should see:

``` text
ACTION REQUIRED

FSSAI Application

Query:
Revised Process Flow Required

Authority:
FSSAI

Requested:
01 Sep 2026

Due:
05 Sep 2026

Request:
Please provide the revised process flow
for the proposed cold-storage facility.

[Respond]
```

The UI should make the action unmistakable.

------------------------------------------------------------------------

# 12. Query Notification

When a query is raised:

``` text
Query Raised

FSSAI has requested additional information
for APP-MH-2026-00124.

Action required:
Revised Process Flow

[View Query]
```

Create a notification tied to the application/query.

------------------------------------------------------------------------

# 13. Response Form

Entrepreneur can respond with:

``` text
Response
[________________________]

Documents
[Attach from Document Vault]
[Upload New Document]

[Save Draft]
[Submit Response]
```

At least one configured response requirement must be satisfied before
submission.

------------------------------------------------------------------------

# 14. Response Draft

The entrepreneur may save a draft response.

Status:

``` text
RESPONSE_DRAFT
```

The government officer should not see an incomplete draft as an official
response unless explicitly configured.

------------------------------------------------------------------------

# 15. Response Submission

On:

`Submit Response`

perform:

``` text
Validate Response
       ↓
Store Response
       ↓
Attach Documents
       ↓
QUERY status = RESPONSE_SUBMITTED
       ↓
Application workflow = QUERY_RESPONDED
       ↓
Notify Officer
       ↓
Create Timeline Event
```

------------------------------------------------------------------------

# 16. Response Record

Conceptually:

``` text
queryResponse
├── id
├── queryId
├── applicationId
├── responseText
├── submittedBy
├── submittedAt
├── documents
└── metadata
```

------------------------------------------------------------------------

# 17. Document Attachment

The entrepreneur can satisfy a document query using:

``` text
Document Vault
     ↓
Existing Document
     ↓
Attach to Response
```

or:

``` text
Upload New
     ↓
Document Vault
     ↓
Attach to Response
```

This reinforces the reusable-document principle.

------------------------------------------------------------------------

# 18. Query Response Document State

If a document is newly uploaded:

``` text
Uploaded
↓
Pending Verification
```

The query response should still record that the document was submitted.

The officer can later verify/reject it.

Do not automatically label a newly uploaded document as
government-verified.

------------------------------------------------------------------------

# 19. Officer Response Review

Officer opens:

``` text
QUERY RESPONSE

Query:
Revised Process Flow Required

Response:
Submitted

Document:
Revised Process Flow

[View Document]

Actions:
[Accept Response]
[Raise Follow-up Query]
```

------------------------------------------------------------------------

# 20. Accept Response

When accepted:

``` text
RESPONSE_SUBMITTED
       ↓
UNDER_REVIEW
       ↓
RESOLVED
```

Then the application can return to the appropriate review stage.

Example:

``` text
Query Resolved
      ↓
Continue Review
      ↓
Inspection
```

------------------------------------------------------------------------

# 21. Follow-up Query

If the response is insufficient:

``` text
[Raise Follow-up Query]
```

Result:

``` text
FOLLOW_UP_REQUIRED
      ↓
AWAITING_ENTREPRENEUR
```

The entrepreneur receives another notification.

------------------------------------------------------------------------

# 22. Query Timeline

Each query should have a mini timeline.

Example:

``` text
01 Sep
Query Raised

02 Sep
Response Submitted

03 Sep
Response Under Review

03 Sep
Query Resolved
```

This should use actual event timestamps.

------------------------------------------------------------------------

# 23. Application Timeline Integration

The query lifecycle must also appear in the main application timeline.

Example:

``` text
Application Submitted
        ↓
Under Review
        ↓
Query Raised
        ↓
Query Responded
        ↓
Query Resolved
        ↓
Inspection Scheduled
```

------------------------------------------------------------------------

# 24. Roadmap Integration

The Personalized Roadmap should reflect query status.

Example:

``` text
FSSAI

🔴 Action Required
Query: Revised Process Flow

[Respond]
```

After response:

``` text
FSSAI

Under Review
Response submitted
```

After resolution:

``` text
FSSAI

✓ Query Resolved
```

------------------------------------------------------------------------

# 25. Workflow Integration

Query states must map to Unified Workflow.

Conceptually:

``` text
UNDER_REVIEW
      ↓
QUERY_RAISED
      ↓
QUERY_RESPONDED
      ↓
UNDER_REVIEW
```

A query resolution should return the application to the correct review
stage.

The query module must not invent a separate application lifecycle.

------------------------------------------------------------------------

# 26. Multiple Queries

An application can have multiple queries.

Example:

``` text
Queries

1. Revised Process Flow
   Resolved

2. Clarification on Facility Capacity
   Awaiting Response
```

The application status should account for all blocking open queries.

------------------------------------------------------------------------

# 27. Multiple Open Queries

If multiple queries are open:

``` text
2 Actions Required
```

The entrepreneur should be able to handle each query separately.

Example:

``` text
Query 1
✓ Responded

Query 2
● Awaiting Response
```

------------------------------------------------------------------------

# 28. Query Priority

For MVP:

-   Normal
-   High

Priority should be visually represented.

Do not create an advanced scoring system.

------------------------------------------------------------------------

# 29. Overdue Query

If a configured due date has passed:

``` text
OVERDUE

Response due:
05 Sep 2026

[Respond]
```

The platform may notify the entrepreneur.

It must not automatically impose penalties.

------------------------------------------------------------------------

# 30. Officer Query Queue

Government portal should provide:

``` text
QUERIES

Awaiting Response
3

Responses Received
2

Overdue
1
```

The queue should link to applications.

------------------------------------------------------------------------

# 31. Entrepreneur Query Center

The entrepreneur dashboard can provide:

``` text
ACTION REQUIRED

2 Government Queries

FSSAI
Revised Process Flow
[Respond]

MPCB
Additional Clarification
[Respond]
```

This is a compact view.

The dedicated query detail provides the full response workflow.

------------------------------------------------------------------------

# 32. Notifications

Meaningful query events should create notifications:

### Query raised

``` text
Action required
```

### Response submitted

``` text
Your response was submitted.
```

### Follow-up query

``` text
Additional information requested.
```

### Query resolved

``` text
Your query response has been accepted.
```

------------------------------------------------------------------------

# 33. Notification Rules

Do not send notifications for every minor state transition.

Use meaningful user-action events.

At minimum:

``` text
QUERY_RAISED
RESPONSE_SUBMITTED
FOLLOW_UP_REQUIRED
QUERY_RESOLVED
```

------------------------------------------------------------------------

# 34. Security / Access

### Entrepreneur

Can access queries for their own applications.

### Government Officer

Can access queries for applications they are authorized to process.

A user must not access unrelated queries.

------------------------------------------------------------------------

# 35. Query Immutability

Once a query has been formally raised, its core request should not be
silently edited.

If the officer needs to change the request:

``` text
Cancel / supersede
+
Create revised query
```

This preserves clarity and auditability.

------------------------------------------------------------------------

# 36. Response Immutability

Once submitted:

``` text
RESPONSE_SUBMITTED
```

the entrepreneur should not silently edit the response.

If correction is required:

``` text
Follow-up Query
```

or another explicit configured mechanism should be used.

------------------------------------------------------------------------

# 37. Query Resolution

A query is resolved only when the authorized officer explicitly accepts
the response or the configured workflow resolves it.

Do not automatically mark a query resolved simply because a response was
uploaded.

------------------------------------------------------------------------

# 38. Query Cancellation

If the officer no longer requires the information:

``` text
[Cancel Query]
```

The system records:

``` text
CANCELLED
```

and creates a timeline event.

------------------------------------------------------------------------

# 39. Query Validation

Before entrepreneur response submission, validate:

-   required response text where configured;
-   required document where configured;
-   document attachment;
-   configured file requirements.

Example:

``` text
Process Flow is required for this response.
```

------------------------------------------------------------------------

# 40. Error Handling

### Response submission failure

``` text
We couldn't submit your response.

No response was recorded.

[Try Again]
```

### Document attachment failure

``` text
The document could not be attached.

[Try Again]
```

### Query loading failure

``` text
Unable to load this query.

[Try Again]
```

Do not expose technical errors.

------------------------------------------------------------------------

# 41. Loading States

Examples:

``` text
Loading query...
```

``` text
Submitting response...
```

``` text
Reviewing response...
```

Prevent duplicate submissions.

------------------------------------------------------------------------

# 42. UI Design

Use the locked:

**LIGHT / WHITE**

theme.

Recommended:

-   white cards;
-   light gray borders;
-   dark charcoal text;
-   professional blue primary action;
-   red/amber status indicators where needed;
-   clear action-required state.

Avoid:

-   dark theme;
-   chat-app appearance;
-   unnecessary animations;
-   excessive conversational bubbles.

This is a formal government communication workflow.

------------------------------------------------------------------------

# 43. Query Detail UI

Recommended:

``` text
┌─────────────────────────────────────────────┐
│ Action Required                             │
│ FSSAI • APP-MH-2026-00124                   │
├─────────────────────────────────────────────┤
│ Revised Process Flow Required               │
│                                             │
│ Requested by: FSSAI                         │
│ Raised: 01 Sep 2026                         │
│ Due: 05 Sep 2026                            │
│                                             │
│ Please provide the revised process flow     │
│ for the proposed cold-storage facility.     │
│                                             │
│ Required Document                           │
│ Process Flow                                │
│                                             │
│ [Choose from Document Vault]                │
│ [Upload New Document]                       │
│                                             │
│ Response                                    │
│ [_______________________________]           │
│                                             │
│ [Save Draft] [Submit Response]              │
└─────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 44. Officer Query UI

Recommended:

``` text
┌─────────────────────────────────────────────┐
│ Query Response                              │
├─────────────────────────────────────────────┤
│ Revised Process Flow Required               │
│                                             │
│ Response                                    │
│ Revised process flow submitted.             │
│                                             │
│ Document                                    │
│ Revised Process Flow ✓                      │
│                                             │
│ [View Document]                             │
│                                             │
│ [Accept Response]                            │
│ [Raise Follow-up Query]                     │
└─────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 45. Hero Query Journey

Application:

**APP-MH-2026-00124**

``` text
Under Review
      ↓
Officer raises:
"Revised Process Flow Required"
      ↓
Entrepreneur notified
      ↓
Entrepreneur opens query
      ↓
Selects/uploads Process Flow
      ↓
Writes response
      ↓
Submit Response
      ↓
Officer notified
      ↓
Officer reviews response
      ↓
Accept Response
      ↓
Query Resolved
      ↓
Application returns to Review
```

This is the primary demo.

------------------------------------------------------------------------

# 46. Acceptance Criteria

The Query Management module is complete when:

### Creation

-   Officer can raise a query.
-   Query is linked to the application.
-   Required request details are stored.

### Communication

-   Entrepreneur receives notification.
-   Entrepreneur can view query.
-   Requested action is clear.

### Response

-   Entrepreneur can save response draft.
-   Entrepreneur can attach existing Document Vault documents.
-   Entrepreneur can upload a new document.
-   Entrepreneur can submit response.

### Review

-   Officer can view response.
-   Officer can accept response.
-   Officer can raise follow-up query.

### State

-   Query status transitions work.
-   Application workflow synchronizes correctly.
-   Blocking queries prevent invalid approval.

### Timeline

-   Query events appear in query and application timelines.

### Roadmap

-   Action Required is visible while response is pending.
-   Status updates after response/resolution.

### Notifications

-   Query raised, response submitted, follow-up, and resolution
    notifications work.

### Security

-   Only authorized entrepreneur/officer users can access the query.

### Hero

-   APP-MH-2026-00124 supports the complete query loop.

### UX

-   Formal light/white UI.
-   Clear action-required state.
-   Loading/error states.
-   No chat-style clutter.

------------------------------------------------------------------------

# 47. Out of Scope

Do not build:

-   real-time chat;
-   video calls;
-   email replacement;
-   AI-generated government queries;
-   AI-generated legal responses;
-   automatic query resolution;
-   real government messaging integration;
-   complex dispute management;
-   nationwide query templates.

------------------------------------------------------------------------

# 48. Final Locked Definition

**QUERY MANAGEMENT** is the formal communication workflow that allows
government officers to request additional information/documents and
entrepreneurs to provide structured responses without losing the
application context.

Its core responsibility is:

> **Create a traceable, status-aware request-and-response loop that
> connects Government Review with the entrepreneur, Document Vault,
> Unified Workflow, Roadmap, Notifications, and final decision
> process.**

The defining prototype journey is:

``` text
Officer Raises Query
        ↓
Entrepreneur Notified
        ↓
Response + Process Flow
        ↓
Submit Response
        ↓
Officer Reviews
        ↓
Accept / Follow-up
        ↓
Query Resolved
        ↓
Application Continues
```

A query is not a chat.

It is a **formal workflow event**.

**STATUS: LOCKED FOR PROTOTYPE**
