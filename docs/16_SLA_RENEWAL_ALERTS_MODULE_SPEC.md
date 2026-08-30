# SIH 26130 --- Module Specification 16

# SLA / RENEWAL / ALERTS

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 16 --- SLA / Renewal / Alerts\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Deadline, Expiry, and Action Awareness\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP / HIGH-VALUE DEMO\
**Upstream:** Applications, Unified Government Workflow, Approvals,
Documents, Compliance Configuration\
**Downstream:** Entrepreneur Dashboard, Roadmap, Notifications,
Government Analytics

------------------------------------------------------------------------

## 1. Module Purpose

SLA / Renewal / Alerts provides time-based visibility around an
entrepreneur's approval journey.

Its purpose is to answer:

-   How long has an application been in its current stage?
-   Is a configured processing target approaching?
-   Has a configured target been exceeded?
-   Is an approval or document approaching expiry?
-   What needs attention soon?
-   What action should the entrepreneur take?
-   What should a government officer prioritize?

This module is an **awareness and tracking layer**.

It must not invent statutory deadlines, renewal periods, or legal
consequences.

------------------------------------------------------------------------

# 2. Core Principle

Time-based information must come from configured data.

``` text
Configured Rule
      ↓
Application / Approval / Document
      ↓
Timestamp
      ↓
SLA / Expiry Calculation
      ↓
Alert
      ↓
Dashboard / Notification / Roadmap
```

If no verified/configured duration exists:

``` text
No SLA / expiry claim
```

The interface should say:

``` text
Not configured
```

or omit the metric.

------------------------------------------------------------------------

# 3. Three Time Concepts

The module separates:

### SLA

A configured processing target for an application/workflow stage.

### Renewal

A configured future obligation to renew an approval/certificate/license.

### Alert

A notification generated because a configured time-based condition
requires attention.

These must not be mixed together.

------------------------------------------------------------------------

# 4. SLA Scope

SLA tracking may apply to:

-   application processing;
-   current workflow stage;
-   query response;
-   inspection;
-   configured government action.

Only configured SLA rules should be displayed.

------------------------------------------------------------------------

# 5. SLA Record

Conceptually:

``` text
slaRecord
├── id
├── applicationId
├── workflowStage
├── startedAt
├── targetDuration
├── targetAt
├── status
└── metadata
```

Possible status:

``` text
ON_TRACK
APPROACHING
OVERDUE
COMPLETED
NOT_CONFIGURED
```

------------------------------------------------------------------------

# 6. SLA Start

For an application processing SLA:

``` text
Application Submitted
        ↓
SLA Clock Starts
```

Example:

``` text
Submitted:
30 Aug 2026

Configured Processing Target:
[configured duration]

Target:
[calculated target]
```

Do not hard-code a statutory processing period.

------------------------------------------------------------------------

# 7. Stage SLA

Where stage-specific SLA is configured:

``` text
Application
   ↓
UNDER_REVIEW
   ↓
Stage SLA Starts
```

When the stage changes:

``` text
UNDER_REVIEW
   ↓
QUERY_RAISED
```

the previous stage timer is completed and the next configured stage
timer may begin.

------------------------------------------------------------------------

# 8. SLA Status

### ON TRACK

``` text
Processing is within configured target.
```

### APPROACHING

``` text
Configured target is approaching.
```

### OVERDUE

``` text
Configured target has passed.
```

This means the configured target has passed.

It does **not** automatically mean a legal violation occurred.

------------------------------------------------------------------------

# 9. SLA UI --- Entrepreneur

Example:

``` text
APPLICATION STATUS

FSSAI
Under Review

Submitted:
30 Aug 2026

Processing:
Within configured target

Current Stage:
Government Review
```

If approaching:

``` text
Processing Target Approaching
```

If overdue:

``` text
Processing Target Exceeded
```

Avoid alarming language such as "Government Delay" unless the product
has a verified basis for that claim.

------------------------------------------------------------------------

# 10. SLA UI --- Government

Government officer view may show:

``` text
APPLICATION

APP-MH-2026-00124

Current Stage:
Under Review

SLA:
Approaching

Submitted:
30 Aug 2026

Target:
[configured]
```

This helps officers prioritize workload.

------------------------------------------------------------------------

# 11. SLA Dashboard Metrics

Optional government metrics:

``` text
Within Target
8

Approaching
3

Overdue
1
```

Only display if configured SLA data exists.

------------------------------------------------------------------------

# 12. SLA Alerts

Generate alerts for meaningful configured thresholds.

Example:

``` text
SLA approaching target
```

or:

``` text
Configured processing target exceeded
```

Thresholds must come from configuration.

Do not assume:

``` text
24 hours before deadline
```

unless configured.

------------------------------------------------------------------------

# 13. SLA Notifications

Example:

``` text
Processing Update

Your FSSAI application is approaching
its configured processing target.

[View Application]
```

For government:

``` text
SLA Alert

APP-MH-2026-00124 is approaching its
configured review target.

[Open Application]
```

------------------------------------------------------------------------

# 14. Query Response SLA

If configured:

``` text
Query Raised
      ↓
Response SLA Starts
      ↓
Entrepreneur Responds
```

The system can show:

``` text
Response Due:
[configured date]
```

Do not imply a statutory deadline unless verified/configured.

------------------------------------------------------------------------

# 15. Query Overdue

If configured response deadline passes:

``` text
RESPONSE OVERDUE

Configured response date:
05 Sep 2026

[Respond]
```

The system should not automatically reject the application.

Any consequence must come from explicit workflow configuration.

------------------------------------------------------------------------

# 16. Inspection Dates

Inspection is time-sensitive but should not automatically be treated as
an SLA.

Track separately:

``` text
Inspection Scheduled
05 Sep 2026
11:00 AM
```

Possible alert:

``` text
Inspection Tomorrow
```

only if such reminder behavior is configured.

------------------------------------------------------------------------

# 17. Renewal Purpose

Renewal tracking helps entrepreneurs avoid losing active approvals
because a configured validity period is approaching.

Example:

``` text
Renewal Due Soon

FSSAI Approval
Renewal Date:
[configured date]

[View Renewal]
```

Only display renewal information when the approval record contains a
configured renewal/expiry date.

------------------------------------------------------------------------

# 18. Approval Expiry

Conceptually:

``` text
Approval
   ↓
Expiry Date
   ↓
Time Remaining
   ↓
Alert
```

Example:

``` text
FSSAI

Valid Until:
30 Sep 2027

Renewal:
Approaching
```

Do not assume all approvals expire.

Some may have different validity structures.

------------------------------------------------------------------------

# 19. Renewal Status

Possible states:

``` text
NOT_APPLICABLE
NOT_DUE
APPROACHING
DUE
OVERDUE
RENEWED
```

These are system states.

They do not themselves establish legal consequences.

------------------------------------------------------------------------

# 20. Renewal Alert Thresholds

Thresholds must be configurable.

Example configuration:

``` text
Renewal Alert:
30 days before expiry
```

Another approval could use:

``` text
Renewal Alert:
60 days before expiry
```

Do not hard-code one threshold for every approval.

------------------------------------------------------------------------

# 21. Renewal Notification

Example:

``` text
Renewal Reminder

Your configured FSSAI approval is
approaching its renewal date.

Renewal Date:
30 Sep 2027

[View Approval]
```

------------------------------------------------------------------------

# 22. Document Expiry

Documents may also have configured expiry dates.

Example:

``` text
Document Expiring Soon

Fire Safety Certificate

Expires:
15 Oct 2027

[View Document]
```

This is separate from approval expiry.

------------------------------------------------------------------------

# 23. Expiring Document Alert

If configured:

``` text
Document Expiry Approaching
```

The dashboard should surface the action.

Possible action:

``` text
[View Document]
[Upload Updated Document]
```

Do not automatically invalidate an application because a document
expires unless configured.

------------------------------------------------------------------------

# 24. Alert Types

Recommended MVP categories:

``` text
APPLICATION_SLA
QUERY_DUE
INSPECTION_UPCOMING
APPROVAL_RENEWAL
DOCUMENT_EXPIRY
```

Keep the initial system focused.

------------------------------------------------------------------------

# 25. Alert Priority

Recommended:

### ACTION REQUIRED

User must take an action.

### UPCOMING

User should be aware of an upcoming event.

### INFORMATION

Useful status update but no immediate action.

Example:

``` text
ACTION REQUIRED
Renewal due soon

UPCOMING
Inspection on 05 Sep

INFORMATION
Application submitted
```

------------------------------------------------------------------------

# 26. Alert Center

A dedicated alert/notification view may show:

``` text
ALERTS

ACTION REQUIRED
FSSAI renewal due soon
[View]

UPCOMING
Inspection scheduled
05 Sep • 11:00 AM

INFORMATION
Application submitted
```

The Dashboard can show only a compact preview.

------------------------------------------------------------------------

# 27. Dashboard Integration

The Entrepreneur Dashboard should surface the most important alerts.

Example:

``` text
ACTION REQUIRED

FSSAI
Renewal approaching

Fire Certificate
Expires in configured period
```

Do not overwhelm the dashboard with every historical alert.

------------------------------------------------------------------------

# 28. Roadmap Integration

Roadmap can show:

``` text
FSSAI
✓ Approved

Renewal:
Approaching
```

or:

``` text
Fire NOC
✓ Approved

Certificate expiry approaching
```

The roadmap remains the primary approval journey.

Alerts are supporting signals.

------------------------------------------------------------------------

# 29. Notification Deduplication

The system should avoid sending the same alert repeatedly for the same
threshold.

Example:

``` text
Renewal 30-day alert
```

should not create dozens of identical notifications.

Conceptually:

``` text
alertKey
+
threshold
+
entity
```

can identify a previously generated alert.

------------------------------------------------------------------------

# 30. Alert Lifecycle

Conceptually:

``` text
TRIGGERED
   ↓
UNREAD
   ↓
READ
   ↓
RESOLVED / EXPIRED
```

The exact state model can be simplified for MVP.

------------------------------------------------------------------------

# 31. Alert Resolution

An alert may become resolved when:

``` text
Required Action Completed
```

Example:

``` text
Renewal Alert
      ↓
Renewal Completed
      ↓
Alert Resolved
```

Or:

``` text
Document Expiry Alert
      ↓
Updated Document Uploaded
      ↓
Alert Resolved
```

Do not automatically mark alerts resolved without a real underlying
state change.

------------------------------------------------------------------------

# 32. Renewal Workflow Handoff

This module identifies the need for renewal.

The actual renewal/application process can reuse:

``` text
Approval Intelligence
      ↓
Roadmap
      ↓
Application Builder
      ↓
Document Vault
      ↓
Submission
```

Do not create a separate duplicate renewal application system for MVP.

------------------------------------------------------------------------

# 33. Renewal Action

Example:

``` text
FSSAI
Renewal Approaching

[Start Renewal]
```

This should lead into the configured application/renewal flow.

------------------------------------------------------------------------

# 34. SLA Pause / Exclusion

Some workflows may configure periods where SLA timing should pause or
behave differently.

For MVP:

``` text
No automatic legal SLA pause logic
```

Only implement explicit configured pause behavior if required by the
prototype.

Do not infer legal exclusions.

------------------------------------------------------------------------

# 35. Business Days vs Calendar Days

If SLA configuration specifies:

``` text
CALENDAR_DAYS
```

calculate calendar days.

If configuration specifies:

``` text
BUSINESS_DAYS
```

use the configured business calendar.

For MVP, calendar-day calculations are acceptable unless the product
specification explicitly configures otherwise.

------------------------------------------------------------------------

# 36. Time Zone

All displayed dates/times should use the relevant Maharashtra/India time
context for the prototype.

Store timestamps consistently.

Display:

``` text
IST
```

where useful.

------------------------------------------------------------------------

# 37. Data Model

Conceptual records:

``` text
slaConfig
slaRecord
renewalConfig
renewalRecord
alert
```

The implementation can simplify these tables if the architecture
permits.

The key requirement is separation between:

-   configured rule;
-   calculated state;
-   user-facing alert.

------------------------------------------------------------------------

# 38. Supabase Integration

Supabase/PostgreSQL can store:

``` text
SLA configuration
Application timestamps
Approval expiry
Document expiry
Renewal dates
Alert records
Notification records
```

Use database-level authorization for user-owned data.

Do not expose service-role credentials to the frontend.

------------------------------------------------------------------------

# 39. Alert Generation

For prototype, alert generation can happen:

-   when relevant workflow state changes;
-   when dashboard loads and evaluates due conditions;
-   through a scheduled/background process if available.

Do not require complex infrastructure for MVP.

------------------------------------------------------------------------

# 40. Prototype-Friendly Approach

To keep the SIH prototype lightweight:

``` text
Store configured dates
        ↓
Calculate status on read
        ↓
Create alert only for meaningful conditions
        ↓
Show on Dashboard
```

Avoid building a full production scheduler.

------------------------------------------------------------------------

# 41. Hero SLA Example

Application:

**APP-MH-2026-00124**

Example:

``` text
Submitted:
30 Aug 2026

Current Stage:
Under Review

Configured SLA:
[Prototype-configured]

Status:
On Track / Approaching / Overdue
```

The exact target must come from configured demo data.

------------------------------------------------------------------------

# 42. Hero Renewal Example

After approval:

``` text
FSSAI
✓ Approved

Valid Until:
[Configured Date]

Renewal:
Approaching
```

Dashboard:

``` text
ACTION REQUIRED

FSSAI renewal approaching

[View Approval]
```

This demonstrates the complete post-approval lifecycle.

------------------------------------------------------------------------

# 43. Hero Document Expiry Example

Example:

``` text
Fire Safety Certificate

Expires:
[Configured Date]

Status:
Expiring Soon

[View Document]
```

The alert links directly to the relevant document.

------------------------------------------------------------------------

# 44. Government SLA View

Government portal can show:

``` text
PROCESSING OVERVIEW

Within Target       8
Approaching          3
Overdue              1
```

Clicking:

``` text
Overdue
```

filters applications.

This is a lightweight precursor to Government Analytics.

------------------------------------------------------------------------

# 45. No Configured SLA State

If no SLA exists:

``` text
Processing Target:
Not configured
```

Do not display:

``` text
SLA: 15 days
```

unless the value is explicitly configured.

------------------------------------------------------------------------

# 46. No Renewal Date State

If approval has no configured expiry:

``` text
Validity:
Not configured
```

Do not tell the entrepreneur:

``` text
Renewal not required
```

unless that fact is explicitly configured.

------------------------------------------------------------------------

# 47. UI Theme

Use the locked:

**LIGHT / WHITE**

theme.

Recommended:

-   white cards;
-   light gray background;
-   dark charcoal text;
-   professional blue actions;
-   amber for approaching;
-   red for action-required/overdue;
-   green for completed/resolved;
-   restrained status badges.

Avoid:

-   dark theme;
-   alarmist red-heavy UI;
-   countdown gimmicks;
-   excessive animations.

------------------------------------------------------------------------

# 48. Alert Card UI

Recommended:

``` text
┌────────────────────────────────────────────┐
│ ACTION REQUIRED                            │
│                                            │
│ FSSAI Renewal Approaching                  │
│                                            │
│ Renewal Date: [Configured Date]            │
│                                            │
│ [View Approval]                            │
└────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 49. SLA Card UI

``` text
┌────────────────────────────────────────────┐
│ APPLICATION SLA                            │
│                                            │
│ FSSAI • APP-MH-2026-00124                 │
│                                            │
│ Current Stage: Under Review                │
│ Status: On Track                           │
│                                            │
│ Submitted: 30 Aug 2026                     │
└────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 50. Loading States

Examples:

``` text
Loading alerts...
```

``` text
Calculating application status...
```

``` text
Loading renewal information...
```

------------------------------------------------------------------------

# 51. Error States

If alert data fails:

``` text
We couldn't load your alerts.

[Try Again]
```

If renewal information fails:

``` text
Renewal information is temporarily
unavailable.

[Try Again]
```

Do not expose technical errors.

------------------------------------------------------------------------

# 52. Security

Entrepreneurs can see only alerts for:

-   their businesses;
-   their applications;
-   their approvals;
-   their documents.

Government users can see only alerts permitted by their role/authority.

Backend authorization must enforce this.

------------------------------------------------------------------------

# 53. Auditability

Time-based state changes should be traceable to:

-   source entity;
-   configured rule;
-   threshold;
-   calculated timestamp;
-   generated alert;
-   resolution event.

This helps explain why an alert appeared.

------------------------------------------------------------------------

# 54. No Legal Assumptions

The system must distinguish:

``` text
Configured Target
```

from:

``` text
Statutory Requirement
```

and:

``` text
Product Reminder
```

Example:

``` text
Configured processing target exceeded
```

is acceptable.

``` text
Government has violated the law
```

is not acceptable unless supported by verified legal data and explicitly
in scope.

------------------------------------------------------------------------

# 55. Acceptance Criteria

The SLA / Renewal / Alerts module is complete when:

### SLA

-   Configured SLA data can be stored.
-   Application/stage start time is recorded.
-   On-track state works.
-   Approaching state works.
-   Overdue state works.
-   No unconfigured SLA is fabricated.

### Renewal

-   Configured expiry/renewal dates can be stored.
-   Approaching state works.
-   Due state works.
-   Renewed state can be represented.
-   Renewal links back to the relevant approval/application flow.

### Documents

-   Configured document expiry can be tracked.
-   Expiry alerts can be surfaced.

### Alerts

-   Meaningful alerts are generated.
-   Alerts are linked to their source entity.
-   Duplicate alerts are prevented.
-   Read/resolved state is supported.

### Integration

-   Dashboard shows important alerts.
-   Roadmap can show renewal/expiry signals.
-   Notifications are synchronized.
-   Government portal can show SLA status.

### Security

-   User-specific authorization works.

### Hero

-   APP-MH-2026-00124 can demonstrate configured SLA tracking.
-   A configured approval renewal alert can be demonstrated.
-   A configured document-expiry alert can be demonstrated.

### UI

-   Light/white theme.
-   Clear status hierarchy.
-   No alarmist claims.
-   Loading/error states.

------------------------------------------------------------------------

# 56. Out of Scope

Do not build:

-   legal SLA interpretation;
-   automatic statutory violation claims;
-   complex government calendar management;
-   advanced workforce scheduling;
-   production-grade job orchestration;
-   automatic penalties;
-   automatic rejection due to missed deadlines;
-   nationwide renewal rule database;
-   comprehensive legal validity engine.

------------------------------------------------------------------------

# 57. Final Locked Definition

**SLA / RENEWAL / ALERTS** is the time-awareness layer that tracks
configured processing targets, approval/document expiry, renewal dates,
and actionable deadlines.

Its core responsibility is:

> **Turn configured time-based rules and recorded timestamps into clear,
> actionable status signals without inventing legal deadlines or
> consequences.**

The defining principle is:

``` text
Configured Rule
      ↓
Recorded Date / Timestamp
      ↓
Calculated Status
      ↓
Alert
      ↓
Action
```

For the entrepreneur:

> **"What needs my attention, and when?"**

For government:

> **"Which applications need attention based on configured processing
> targets?"**

For the prototype:

> **Use a small set of explicit configured dates and rules rather than
> building a massive regulatory deadline database.**

**STATUS: LOCKED FOR PROTOTYPE**
