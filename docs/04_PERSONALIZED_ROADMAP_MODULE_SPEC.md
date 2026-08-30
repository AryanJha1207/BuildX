# SIH 26130 --- Module Specification 04

# PERSONALIZED ROADMAP

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 04 --- Personalized Roadmap\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Entrepreneur / Applicant\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP\
**Input:** Approval Intelligence / Rule Engine\
**Related Modules:** Business Profile, Application Builder, Document
Vault, Pre-validation, Unified Workflow, Government Portal, Compliance

------------------------------------------------------------------------

## 1. Module Purpose

The Personalized Roadmap converts the structured output of **Approval
Intelligence / Rule Engine** into a clear, ordered, actionable approval
journey for the entrepreneur.

It answers:

-   What approvals or requirement pathways are relevant?
-   Which one should I work on now?
-   What comes next?
-   What is already completed?
-   What is conditional?
-   What depends on a later project stage?
-   Which application should I start?
-   Which documents do I need?
-   What is currently waiting on government action?

The roadmap must feel like a **personalized journey**, not a static
checklist.

------------------------------------------------------------------------

# 2. Core Principle

The roadmap follows:

``` text
Business Profile
      ↓
Approval Intelligence
      ↓
Structured Requirement Results
      ↓
Order / Dependencies / Stage
      ↓
PERSONALIZED ROADMAP
      ↓
Application / Document / Government Workflow
      ↓
Status Updates
      ↓
Updated Roadmap
```

The roadmap is therefore an **orchestration and visibility layer**.

It does not independently decide which approvals apply.

------------------------------------------------------------------------

# 3. Source of Truth

The roadmap receives its approval requirements from:

**Approval Intelligence / Rule Engine**

The roadmap must not contain separate regulatory applicability logic.

For example:

``` text
Rule Engine:
FSSAI = APPLICABLE

Roadmap:
FSSAI = Roadmap Item
```

The roadmap should render the result and determine its user-facing
position based on configured stage/dependency information.

------------------------------------------------------------------------

# 4. Roadmap Goals

The entrepreneur should be able to understand the journey at a glance.

The roadmap must make these distinctions clear:

``` text
✓ Completed
● Current / Action Required
○ Upcoming
◇ Conditional
◌ Stage-dependent
? Not Configured / Needs Review
```

The exact visual symbols may be replaced by accessible badges/status
components.

------------------------------------------------------------------------

# 5. Hero Roadmap

Hero business:

**FreshChain Cold Logistics Pvt. Ltd.**

Context:

-   Pune, Maharashtra
-   MIDC
-   Logistics / Warehousing
-   Cold Storage / Cold Chain
-   New Cold Storage
-   Proposed / New
-   Food Stored: Yes
-   Capacity: 5,000 MT

The roadmap should be generated from the controlled Cold Storage rule
configuration.

------------------------------------------------------------------------

# 6. Example Roadmap

Conceptually:

``` text
PERSONALIZED APPROVAL ROADMAP

Business Profile
✓ Completed

Approval Intelligence
✓ Completed

MIDC Building Plan + Provisional Fire
● Current / Applicable

FSSAI Registration / Licence
○ Upcoming

MPCB Consent
◇ Conditional

Industrial Electricity Connection
○ Upcoming

MIDC Water Connection
◇ Conditional

MIDC Drainage Connection
◇ Conditional

Factory Registration / Licence
◇ Conditional

Final Fire Approval
◌ Stage-dependent

Occupancy Certificate
◌ Stage-dependent
```

The actual order and status must come from configured roadmap metadata
and application state.

------------------------------------------------------------------------

# 7. Roadmap Item Structure

Each roadmap item should conceptually contain:

``` text
roadmapItem
├── id
├── approvalId / requirementId
├── name
├── authority
├── status
├── stage
├── sequence
├── dependencies
├── reason
├── requiredDocuments
├── applicationAvailable
├── action
├── source
└── lastUpdated
```

Implementation details may vary, but the roadmap must preserve the
information required for the journey.

------------------------------------------------------------------------

# 8. Roadmap Status Model

The roadmap uses two related concepts:

### Requirement Status

From Approval Intelligence:

-   Applicable
-   Conditional
-   Stage-dependent
-   Not Applicable
-   Not Configured / Needs Review

### Journey Status

Based on workflow/application progress:

-   Not Started
-   Ready
-   In Progress
-   Submitted
-   Under Review
-   Query Raised
-   Query Responded
-   Inspection Scheduled
-   Inspection Completed
-   Approved
-   Rejected
-   Blocked
-   Needs Review

These must not be confused.

Example:

``` text
Requirement:
Applicable

Journey:
Under Review
```

This means the requirement applies and its application is currently
under government review.

------------------------------------------------------------------------

# 9. Requirement vs Journey Status

The UI should make the distinction understandable.

Example:

``` text
FSSAI Registration / Licence

Requirement:
Applicable

Current Status:
Under Review

Authority:
FSSAI
```

Another:

``` text
MPCB Consent

Requirement:
Conditional

Current Status:
Not Started
```

Another:

``` text
Occupancy Certificate

Requirement:
Stage-dependent

Current Status:
Upcoming
```

------------------------------------------------------------------------

# 10. Roadmap Ordering

Roadmap items should be ordered using:

1.  Configured sequence
2.  Project stage
3.  Dependencies
4.  Current actionability
5.  Workflow state

The system must not randomly sort approvals alphabetically.

------------------------------------------------------------------------

# 11. Dependencies

Some roadmap items may depend on other activities.

Conceptually:

``` text
Building Plan
      ↓
Construction
      ↓
Final Fire
      ↓
Occupancy
```

A dependency should be represented explicitly.

Example:

``` text
Occupancy Certificate
Dependency:
Construction / applicable building completion
```

If a prerequisite is incomplete:

``` text
Blocked by:
Building completion
```

The roadmap should explain the dependency.

------------------------------------------------------------------------

# 12. Current Step

The roadmap should clearly identify the current actionable item.

Example:

``` text
CURRENT STEP

FSSAI Application

Your application is ready to continue.

[Continue Application]
```

Only one or a small number of items should be visually prioritized as
current actions.

Do not make every roadmap item appear equally urgent.

------------------------------------------------------------------------

# 13. Next Action

Every actionable roadmap item should provide a clear next action.

Examples:

``` text
Not Started
[Start Application]

Draft
[Continue Application]

Validation Error
[Fix Issues]

Ready to Submit
[Submit]

Query Raised
[Respond to Query]

Inspection Scheduled
[View Inspection]

Approved
[View Approval]
```

The CTA must match the item's current journey state.

------------------------------------------------------------------------

# 14. Application Integration

When an application is started from the roadmap:

``` text
Roadmap Item
      ↓
Start Application
      ↓
Application Builder
      ↓
Application Created
      ↓
Roadmap Item = In Progress
```

When submitted:

``` text
Application
SUBMITTED
      ↓
Roadmap
SUBMITTED
```

When approved:

``` text
Application
APPROVED
      ↓
Roadmap
APPROVED
```

------------------------------------------------------------------------

# 15. Document Integration

A roadmap item may show document readiness.

Example:

``` text
FSSAI

Required Documents
✓ Project Report
✓ Site Plan
✕ Process Flow

Document Readiness:
2 / 3

[View Documents]
```

The roadmap should not perform document validation itself.

It consumes Document Vault / Pre-validation information.

------------------------------------------------------------------------

# 16. Pre-validation Integration

When pre-validation blocks an application:

``` text
Roadmap

FSSAI
Status: Blocked

Reason:
Required Process Flow is missing.

[Fix Documents]
```

After the document is added:

``` text
FSSAI
Status: Ready to Submit

[Submit Application]
```

------------------------------------------------------------------------

# 17. Government Workflow Integration

After submission, the roadmap should reflect government-side progress.

Example:

``` text
FSSAI
Submitted
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
Approved
```

The entrepreneur should not need to navigate through multiple unrelated
department pages to understand the overall status.

------------------------------------------------------------------------

# 18. Query Integration

If a query is raised:

``` text
FSSAI
🔴 Query Raised

Revised Process Flow Required

[Respond]
```

The roadmap should make the query a high-priority action.

After response:

``` text
FSSAI
Query Responded

Waiting for department review.
```

------------------------------------------------------------------------

# 19. Inspection Integration

If inspection is required:

``` text
Inspection

05 Sep 2026
11:00 AM

Status:
Scheduled

[View Inspection]
```

After completion:

``` text
Inspection
✓ Completed

Outcome:
Satisfactory
```

The roadmap should show this as part of the relevant approval pathway.

------------------------------------------------------------------------

# 20. Approval Integration

When the relevant application is approved:

``` text
FSSAI
✓ Approved

[View Approval]
```

The roadmap should then identify the next relevant item or post-approval
action.

------------------------------------------------------------------------

# 21. Rejection Integration

If rejected:

``` text
FSSAI
✕ Rejected

Reason:
[Officer-provided reason]

[View Details]
```

The roadmap must not automatically invent a recovery path.

If a configured next action exists, show it.

Otherwise:

``` text
Needs Review
```

------------------------------------------------------------------------

# 22. Conditional Requirements

Conditional items should be visually distinct.

Example:

``` text
MPCB Consent

◇ Conditional

Applicability depends on the configured
activity/process conditions.

[View Details]
```

Do not make conditional requirements look mandatory.

------------------------------------------------------------------------

# 23. Stage-dependent Requirements

Stage-dependent requirements should clearly communicate timing.

Example:

``` text
Occupancy Certificate

◌ Stage-dependent

Relevant at the applicable completion/
occupancy stage.

Status:
Upcoming
```

The entrepreneur should understand:

**Not required immediately ≠ Not Applicable**

------------------------------------------------------------------------

# 24. Not Configured

If detailed rule configuration is unavailable:

``` text
? Needs Review

Detailed approval configuration is not
available for this pathway in the current prototype.

[Review]
```

Do not show it as:

`Not Applicable`.

------------------------------------------------------------------------

# 25. Progress Summary

The roadmap should provide a concise overall progress summary.

Example:

``` text
APPROVAL JOURNEY

4 of 9 pathways progressed

████████░░░░░░░░

Current:
FSSAI — Under Review
```

The exact calculation should use actual roadmap items and configured
statuses.

Do not hard-code progress percentages.

------------------------------------------------------------------------

# 26. Stage View

Optional simple stage grouping:

``` text
PLANNING
✓ Business Profile
✓ Approval Intelligence
● Building / Fire

APPLICATION
● FSSAI
○ MPCB

CONSTRUCTION
○ Final Fire
○ Occupancy

POST-APPROVAL
○ Compliance
○ Renewal
```

This should remain simple for the MVP.

------------------------------------------------------------------------

# 27. Filters

Useful lightweight filters:

-   All
-   Action Required
-   In Progress
-   Upcoming
-   Conditional
-   Approved

Avoid excessive filtering.

------------------------------------------------------------------------

# 28. Roadmap Detail Panel

Clicking an item should open a detail view/panel containing:

``` text
Approval Name
Authority

Requirement Status
Journey Status

Why this applies

Stage
Dependencies

Required Documents
Document Readiness

Current Application
Application ID

Next Action

Source / Reference
```

This is the detailed explanation layer.

------------------------------------------------------------------------

# 29. "Why This Applies"

The explanation must originate from Approval Intelligence.

Example:

``` text
Why this applies

Your profile indicates:
• Cold Storage / Cold Chain
• Food stored = Yes
• Maharashtra
• MIDC location

Based on the configured prototype rule,
this requirement is included in your pathway.
```

The UI should not invent legal reasoning.

------------------------------------------------------------------------

# 30. Roadmap Refresh

The roadmap should refresh when:

-   Business Profile changes;
-   Approval Intelligence is re-run;
-   Application is created;
-   Application is submitted;
-   Document validation changes;
-   Query is raised;
-   Query is answered;
-   Inspection is scheduled;
-   Inspection is completed;
-   Application is approved/rejected.

------------------------------------------------------------------------

# 31. Profile Change Handling

If a material profile change occurs:

``` text
Business Profile Changed

Your approval pathway may have changed.

[Re-analyze Approvals]
```

Until re-analysis:

``` text
Roadmap
Potentially outdated

Last analyzed:
[date/time]
```

Do not silently present an old roadmap as current.

------------------------------------------------------------------------

# 32. Roadmap Persistence

For MVP, persist:

-   roadmap generation/analyzed timestamp;
-   requirement references;
-   current journey statuses;
-   application references;
-   last updated time.

Full historical roadmap snapshots are not required.

------------------------------------------------------------------------

# 33. Entrepreneur Dashboard Integration

The Dashboard should show a condensed roadmap.

Example:

``` text
YOUR APPROVAL JOURNEY

✓ Profile
✓ Intelligence
● FSSAI — Under Review
○ MPCB
○ Electricity

[View Full Roadmap]
```

The full Roadmap module provides the detailed view.

------------------------------------------------------------------------

# 34. Notification Integration

Roadmap events may trigger notifications.

Examples:

``` text
Query Raised
→ Roadmap status = Query Raised
→ Notification created

Inspection Scheduled
→ Roadmap status = Inspection Scheduled
→ Notification created

Approval Granted
→ Roadmap status = Approved
→ Notification created
```

Notifications should be driven by meaningful state changes.

------------------------------------------------------------------------

# 35. Government-Side Visibility

Government actions should update the same underlying
application/workflow state that the roadmap consumes.

The entrepreneur roadmap must not maintain a separate fake status.

Example:

``` text
Government Officer:
Approve Application
        ↓
Application status = APPROVED
        ↓
Roadmap reads APPROVED
        ↓
Entrepreneur sees Approved
```

------------------------------------------------------------------------

# 36. UI Design

Use the locked:

**LIGHT / WHITE**

theme.

The roadmap should use:

-   white background;
-   white cards;
-   dark charcoal text;
-   blue primary actions;
-   subtle gray borders;
-   clear status badges;
-   strong vertical/horizontal progression;
-   generous spacing.

The visual hierarchy should make:

**Current Action \> Status \> Next Step \> Supporting Information**

------------------------------------------------------------------------

# 37. Recommended Visual Pattern

A vertical roadmap is preferred for the MVP because it makes sequence
and dependencies easy to understand.

Conceptually:

``` text
● FSSAI
│  Under Review
│  Authority: FSSAI
│
│  ┌────────────────────────────┐
│  │ Application submitted      │
│  │ Awaiting department review │
│  │                            │
│  │ [View Application]         │
│  └────────────────────────────┘
│
○ MPCB
│  Conditional
│
○ Electricity
│  Upcoming
│
○ Final Fire
   Stage-dependent
```

A horizontal stage overview may be added above it if useful.

------------------------------------------------------------------------

# 38. Loading State

When generating/recalculating the roadmap:

``` text
PREPARING YOUR ROADMAP

✓ Reading business profile
✓ Evaluating approval results
● Ordering requirements
○ Preparing your next steps
```

Do not claim external government systems are being queried unless an
actual integration exists.

------------------------------------------------------------------------

# 39. Error State

If roadmap generation fails:

``` text
We couldn't prepare your roadmap.

Your business profile is saved.

[Try Again]
```

Do not show raw technical errors.

------------------------------------------------------------------------

# 40. Empty State

If no configured requirements are available:

``` text
ROADMAP NOT AVAILABLE

There is not enough configured approval
information to generate a reliable roadmap
for this business pathway.

[Review Business Profile]
```

Do not display an empty checklist as if no approvals are needed.

------------------------------------------------------------------------

# 41. Acceptance Criteria

The Personalized Roadmap is complete when:

### Generation

-   Roadmap can be generated from Approval Intelligence output.
-   Roadmap does not independently decide applicability.

### Ordering

-   Items have deterministic ordering.
-   Stage and dependencies are represented.

### Status

-   Requirement status and journey status are distinct.
-   Application state updates roadmap state.

### Actions

-   Current action is clear.
-   CTAs match the journey state.

### Documents

-   Document readiness can be displayed.
-   Pre-validation results can affect roadmap presentation.

### Government Workflow

-   Submission updates roadmap.
-   Query updates roadmap.
-   Query response updates roadmap.
-   Inspection updates roadmap.
-   Approval/rejection updates roadmap.

### Profile Changes

-   Material profile changes can trigger re-analysis.
-   Old roadmap state can be identified as potentially outdated.

### Safety

-   Not Configured is not Not Applicable.
-   Conditional is not displayed as mandatory.
-   Stage-dependent is not displayed as immediately required.

### Hero

-   FreshChain Cold Logistics has a coherent roadmap.
-   Cold Storage configured requirements can flow into the roadmap.

### UX

-   Progress is understandable.
-   Light/white UI is consistent.
-   Loading/error/empty states exist.

------------------------------------------------------------------------

# 42. Out of Scope

Do not build:

-   complex AI-generated roadmaps;
-   nationwide regulatory roadmaps;
-   automatic legal guarantees;
-   complex optimization algorithms;
-   real-time government integration;
-   arbitrary approval generation;
-   fabricated approval dependencies;
-   large-scale project-management functionality.

------------------------------------------------------------------------

# 43. Final Locked Definition

**PERSONALIZED ROADMAP** is the journey orchestration layer that
converts Approval Intelligence results into a clear, ordered,
status-aware, actionable path for the entrepreneur.

Its core responsibility is:

> **Show the entrepreneur what approval pathways are relevant, where
> each stands, what comes next, and what action is required---while
> staying synchronized with the application and government workflow.**

The roadmap is not a second rule engine.

**Approval Intelligence decides the requirement.**

**The Roadmap organizes and tracks the journey.**

**STATUS: LOCKED FOR PROTOTYPE**
