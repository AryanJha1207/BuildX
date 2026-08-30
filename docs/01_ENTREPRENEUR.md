# SIH 26130 --- Module Specification 01

# ENTREPRENEUR MODULE

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 01 --- Entrepreneur\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Entrepreneur / Applicant\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** Core MVP

------------------------------------------------------------------------

## 1. Module Purpose

The Entrepreneur module is the **entry point and primary user
environment** for a business applicant.

It provides the entrepreneur with a single place to:

-   enter the platform;
-   understand the current business/project status;
-   access the Business Profile;
-   access Approval Intelligence;
-   view the Personalized Roadmap;
-   prepare and manage applications;
-   manage documents;
-   respond to government queries;
-   view inspection information;
-   track decisions;
-   monitor compliance, renewals, alerts, and relevant incentives.

The module must make the overall approval journey understandable without
requiring the entrepreneur to know every government department or
approval in advance.

------------------------------------------------------------------------

# 2. Role Definition

## 2.1 Entrepreneur

The entrepreneur is the primary applicant using the platform to manage a
business/project approval journey.

The entrepreneur can:

-   create/access their account;
-   create and maintain a business profile;
-   select a sector and sub-sector;
-   provide project/location information;
-   run approval intelligence;
-   view the personalized roadmap;
-   start applicable applications;
-   reuse documents;
-   complete pre-validation;
-   submit applications;
-   track application status;
-   receive notifications;
-   respond to queries;
-   view inspection details;
-   view final decisions;
-   monitor post-approval obligations.

The entrepreneur must **not** have access to government-only actions
such as:

-   officer assignment;
-   officer review actions;
-   raising official queries;
-   scheduling an official inspection;
-   approving/rejecting an application;
-   government analytics.

------------------------------------------------------------------------

# 3. Module Position in Product

The Entrepreneur module sits across the complete applicant journey.

``` text
ENTREPRENEUR
      ↓
BUSINESS PROFILE
      ↓
APPROVAL INTELLIGENCE
      ↓
PERSONALIZED ROADMAP
      ↓
APPLICATION BUILDER
      ↓
DOCUMENT VAULT
      ↓
PRE-VALIDATION
      ↓
SUBMISSION
      ↓
APPLICATION TRACKING
      ↓
QUERY / RESPONSE
      ↓
INSPECTION
      ↓
DECISION
      ↓
COMPLIANCE / RENEWAL / ALERTS
```

The Entrepreneur module is therefore not just a dashboard.

It is the **user-facing shell connecting all entrepreneur-side
modules**.

------------------------------------------------------------------------

# 4. Primary Navigation

The entrepreneur portal should provide the following navigation:

1.  Dashboard
2.  Business Profile
3.  Approval Intelligence
4.  My Roadmap
5.  Applications
6.  Document Vault
7.  Compliance & Renewals
8.  Incentives & Schemes
9.  Notifications
10. Profile / Account
11. Logout

The exact navigation may be implemented as a sidebar plus top
navigation.

------------------------------------------------------------------------

# 5. Dashboard

The Entrepreneur Dashboard is the entrepreneur's main landing page after
login.

Its purpose is to answer three questions immediately:

1.  **Where is my business/project in the approval journey?**
2.  **What needs my attention now?**
3.  **What should I do next?**

------------------------------------------------------------------------

# 6. Dashboard Information Hierarchy

The dashboard should prioritize actions over decoration.

Recommended order:

``` text
Welcome / Business Context
        ↓
Action Required
        ↓
Approval Progress
        ↓
Current Application Status
        ↓
Upcoming Inspection / Query
        ↓
Roadmap Progress
        ↓
Compliance / Renewal
        ↓
Recent Activity
```

------------------------------------------------------------------------

# 7. Hero Dashboard

For the prototype, the primary dashboard business is:

**FreshChain Cold Logistics Pvt. Ltd.**

Display context such as:

-   Pune, Maharashtra
-   MIDC
-   Logistics / Warehousing
-   Cold Storage / Cold Chain

------------------------------------------------------------------------

# 8. Dashboard KPI Cards

Use a small number of useful KPI cards.

Suggested cards:

### Approvals Identified

Example:

**9**

Label:

`Approvals identified`

### Action Required

Example:

**1**

Label:

`Needs your attention`

### Applications

Example:

**1**

Label:

`Application in progress`

### Active Approvals

Example:

**0**

Before approval.

These values are controlled demo data and must not be presented as real
government statistics.

------------------------------------------------------------------------

# 9. Action Required Section

This should be one of the most prominent dashboard sections.

Example:

``` text
ACTION REQUIRED

Query Raised
Revised Process Flow Required

The department has requested a revised
process flow document.

[Respond to Query]
```

Other possible action states:

-   Missing document
-   Validation error
-   Query response required
-   Application draft incomplete
-   Inspection preparation
-   Renewal approaching

The system should avoid showing irrelevant actions.

------------------------------------------------------------------------

# 10. Application Status Card

Show the current application state clearly.

Example:

``` text
Application
APP-MH-2026-00124

FSSAI Application

UNDER REVIEW

Submitted
      ↓
Assigned
      ↓
Under Review
      ↓
Inspection
      ↓
Decision
```

The current stage should be visually prominent.

------------------------------------------------------------------------

# 11. Roadmap Progress

The dashboard should provide a compact view of the Personalized Roadmap.

Example:

``` text
APPROVAL ROADMAP

✓ Business Profile
✓ Approval Intelligence
✓ Building / Fire pathway
● FSSAI — Under Review
○ MPCB
○ Electricity
○ Final Fire
○ Occupancy
```

A clear action should lead to:

`View Full Roadmap`

------------------------------------------------------------------------

# 12. Upcoming Events

Display relevant upcoming events.

Examples:

-   Inspection scheduled
-   Query response deadline/configured date
-   Compliance action
-   Renewal approaching

For demo/configured dates, clearly distinguish them from statutory
deadlines.

------------------------------------------------------------------------

# 13. Recent Activity

Show meaningful events such as:

-   Application submitted
-   Document verified
-   Query raised
-   Query responded
-   Inspection scheduled
-   Inspection completed
-   Application approved

Example:

``` text
Recent Activity

Today
Query raised — Revised Process Flow Required

Yesterday
Application moved to Under Review

28 Aug
Application submitted
```

------------------------------------------------------------------------

# 14. Login / Entry

The Entrepreneur module requires an authentication/entry mechanism.

For the prototype, the login experience should be simple and
professional.

Possible fields:

-   Email / phone
-   Password

Optional prototype-friendly actions:

-   Demo Entrepreneur Login
-   Remember session

Do not build unnecessary production authentication complexity for the
hackathon.

Authentication should still be role-aware.

------------------------------------------------------------------------

# 15. Entrepreneur Account Context

Once logged in, the system should know:

-   user identity;
-   role = entrepreneur;
-   associated business;
-   current business/project;
-   application records;
-   notifications.

The hero prototype can use one primary entrepreneur/business
relationship.

------------------------------------------------------------------------

# 16. Business Context Switching

For MVP:

**Do not build a complex multi-business switching system.**

Use one primary business:

**FreshChain Cold Logistics Pvt. Ltd.**

The architecture may support multiple businesses later, but the
prototype should keep the interaction simple.

------------------------------------------------------------------------

# 17. Business Profile Entry Point

The Entrepreneur module must provide direct access to:

**Business Profile**

The profile should display:

-   completion state;
-   sector;
-   sub-sector;
-   location;
-   project context;
-   relevant actions.

Example:

``` text
Business Profile
FreshChain Cold Logistics Pvt. Ltd.

Profile completion
92%

Sector
Logistics / Warehousing

Sub-sector
Cold Storage / Cold Chain

Location
Pune, Maharashtra

[View / Edit Profile]
```

------------------------------------------------------------------------

# 18. Approval Intelligence Entry Point

The entrepreneur should be able to launch or revisit:

**Approval Intelligence**

Example CTA:

`Analyze My Approvals`

or:

`View Approval Intelligence`

The page should show that the intelligence is derived from the Business
Profile.

------------------------------------------------------------------------

# 19. Personalized Roadmap Entry Point

The entrepreneur should have a direct navigation item:

**My Roadmap**

The dashboard should also provide a shortcut.

The roadmap is generated from Approval Intelligence and should reflect
application state changes.

------------------------------------------------------------------------

# 20. Applications Entry Point

The Applications section should list the entrepreneur's applications.

Example:

  Application         Approval   Status         Last Updated
  ------------------- ---------- -------------- --------------
  APP-MH-2026-00124   FSSAI      Under Review   Today

The application detail should link to:

-   application data;
-   documents;
-   validation;
-   timeline;
-   queries;
-   inspection;
-   decision.

------------------------------------------------------------------------

# 21. Document Vault Entry Point

The entrepreneur should be able to access the reusable Document Vault
independently of an individual application.

The vault should show:

-   document name;
-   document type;
-   verification status;
-   upload date;
-   reuse availability.

The entrepreneur should not need to upload the same verified document
repeatedly.

------------------------------------------------------------------------

# 22. Query Handling

When a government officer raises a query:

``` text
Government Officer
        ↓
Query Created
        ↓
Entrepreneur Notification
        ↓
Entrepreneur Dashboard
        ↓
Query Detail
        ↓
Response
```

The entrepreneur should clearly see:

-   query title;
-   department/authority;
-   message;
-   requested document/information;
-   status;
-   response action.

------------------------------------------------------------------------

# 23. Query Response

Example:

``` text
QUERY

Revised Process Flow Required

Please upload the revised process flow
for review.

[Upload Document]

Response Message
[Revised process flow uploaded for review.]

[Submit Response]
```

After submission:

``` text
Response Submitted
Waiting for department review.
```

The response must become visible to the government officer.

------------------------------------------------------------------------

# 24. Inspection Visibility

The entrepreneur should be able to view scheduled inspection
information.

Hero example:

``` text
INSPECTION SCHEDULED

05 Sep 2026
11:00 AM

FreshChain Cold Logistics Pvt. Ltd.

Outcome:
Pending

[View Details]
```

After completion:

``` text
INSPECTION COMPLETED

Outcome:
Satisfactory
```

The dates are demo values.

------------------------------------------------------------------------

# 25. Decision Visibility

When an application is approved:

``` text
APPLICATION APPROVED

APP-MH-2026-00124

FSSAI Application

Approved

[View Application]
[View Roadmap]
```

When rejected:

``` text
APPLICATION REJECTED

Reason:
[Officer-provided reason]

[View Application]
```

The entrepreneur must always be able to understand the current decision.

------------------------------------------------------------------------

# 26. Compliance / Renewal Entry Point

After approval, the Entrepreneur module exposes:

**Compliance & Renewals**

The dashboard may display:

``` text
COMPLIANCE

1 upcoming action

Renewal approaching
[View Compliance]
```

The module should not invent statutory deadlines.

------------------------------------------------------------------------

# 27. Incentives Entry Point

The entrepreneur can access:

**Incentives & Schemes**

Recommendations should be labelled conservatively:

-   Likely Eligible
-   Potentially Eligible
-   Needs Confirmation

No incentive should be presented as guaranteed.

------------------------------------------------------------------------

# 28. Notifications

The Entrepreneur module must receive meaningful notifications.

Examples:

### Query

`Query raised — Revised Process Flow Required`

### Inspection

`Inspection scheduled for 05 Sep 2026`

### Application

`Application submitted successfully`

### Approval

`Your application has been approved`

### Document

`Process Flow uploaded successfully`

Notifications should link directly to the relevant action/page.

------------------------------------------------------------------------

# 29. Entrepreneur Application State Awareness

The Entrepreneur UI must respond to the application's current state.

States:

``` text
DRAFT
VALIDATION_ERROR
READY_TO_SUBMIT
SUBMITTED
ASSIGNED
UNDER_REVIEW
QUERY_RAISED
QUERY_RESPONDED
INSPECTION_SCHEDULED
INSPECTION_COMPLETED
FINAL_REVIEW
APPROVED
REJECTED
```

The entrepreneur should not see actions that are invalid for the current
state.

Example:

-   DRAFT → Edit / Validate
-   READY_TO_SUBMIT → Submit
-   UNDER_REVIEW → View status
-   QUERY_RAISED → Respond
-   INSPECTION_SCHEDULED → View inspection
-   APPROVED → View approval / compliance

------------------------------------------------------------------------

# 30. Entrepreneur Action Model

Every major page should answer:

**What can the entrepreneur do here?**

Examples:

Dashboard: - Continue journey - Respond to query - View application

Business Profile: - Edit profile - Re-run intelligence

Approval Intelligence: - View requirement - View explanation - Open
roadmap

Roadmap: - Start application - View status

Application: - Complete form - Attach documents - Validate - Submit

Documents: - Upload - View - Reuse

Query: - Respond - Upload document

Inspection: - View details

Approval: - View decision - View compliance

------------------------------------------------------------------------

# 31. Error Handling

The Entrepreneur module should provide clear errors.

Examples:

### Authentication error

`Unable to sign in. Please check your credentials.`

### Profile incomplete

`Complete your Business Profile before running Approval Intelligence.`

### Validation failure

`1 issue is preventing submission.`

### Upload failure

`Document upload failed. Please try again.`

### Query response failure

`Your response could not be submitted. Please try again.`

Avoid technical error messages such as raw database exceptions.

------------------------------------------------------------------------

# 32. Loading States

Use professional loading states for:

-   dashboard;
-   profile;
-   approval analysis;
-   roadmap;
-   application;
-   documents;
-   query;
-   inspection.

Prefer skeleton loaders where appropriate.

Do not leave blank screens.

------------------------------------------------------------------------

# 33. Empty States

Examples:

### No Applications

`No applications yet.`

`Start from your Personalized Roadmap.`

\[View Roadmap\]

### No Notifications

`You're all caught up.`

### No Compliance Items

`No compliance actions currently require attention.`

------------------------------------------------------------------------

# 34. UI Design Requirements

The Entrepreneur module must use the locked platform design:

**LIGHT / WHITE**

Requirements:

-   white/light backgrounds;
-   light sidebar;
-   white cards;
-   dark charcoal text;
-   professional blue primary accent;
-   subtle gray borders;
-   subtle shadows;
-   restrained status colors;
-   clear typography;
-   generous whitespace;
-   minimal gradients;
-   minimal animation.

Do not use:

-   dark theme;
-   dark sidebar;
-   excessive gradients;
-   excessive animation;
-   cluttered dashboard widgets.

------------------------------------------------------------------------

# 35. Accessibility

The module should support:

-   readable contrast;
-   keyboard-accessible controls;
-   visible focus states;
-   labels for form fields;
-   clear error messages;
-   semantic buttons and links.

------------------------------------------------------------------------

# 36. Data Requirements

The Entrepreneur module consumes data from:

-   User
-   Business
-   Business Profile
-   Approval Intelligence
-   Roadmap
-   Applications
-   Documents
-   Queries
-   Inspections
-   Notifications
-   Compliance
-   Incentives

It should not duplicate regulatory/business logic inside individual UI
components.

------------------------------------------------------------------------

# 37. Cross-Module Dependencies

### Depends on

Business Profile: Provides business/project information.

Approval Intelligence: Provides approval requirements.

Personalized Roadmap: Provides next actions.

Application Builder: Provides application progress.

Document Vault: Provides reusable documents.

Pre-validation: Provides readiness status.

Government Workflow: Provides application/query/inspection/decision
updates.

Compliance: Provides post-approval actions.

------------------------------------------------------------------------

# 38. Prototype Data

Primary entrepreneur:

**FreshChain Cold Logistics Pvt. Ltd.**

Primary sector:

**Logistics / Warehousing**

Primary sub-sector:

**Cold Storage / Cold Chain**

Location:

**Pune, Maharashtra**

Location type:

**MIDC**

The entrepreneur-side screens should consistently use this business
context in the hero demo.

------------------------------------------------------------------------

# 39. Demo Journey

The Entrepreneur module must support the following judge-facing story:

``` text
Login
 ↓
Entrepreneur Dashboard
 ↓
Business Profile
 ↓
Approval Intelligence
 ↓
Personalized Roadmap
 ↓
Start Application
 ↓
Document Vault
 ↓
Pre-validation
 ↓
Fix Missing Process Flow
 ↓
Submit
 ↓
Track Application
 ↓
Receive Query
 ↓
Respond
 ↓
View Inspection
 ↓
View Approval
 ↓
Compliance / Renewal
```

------------------------------------------------------------------------

# 40. Acceptance Criteria

The Entrepreneur module is considered complete when:

### Authentication

-   Entrepreneur can enter the platform.
-   Entrepreneur role is correctly identified.

### Dashboard

-   Dashboard shows the correct business.
-   Dashboard shows useful application/action information.
-   Dashboard provides links to major modules.

### Navigation

-   All entrepreneur modules are reachable.
-   Active navigation state is clear.

### Business Context

-   FreshChain business appears consistently.
-   Sector/sub-sector context is visible where appropriate.

### Workflow

-   Entrepreneur can move from profile to intelligence.
-   Intelligence leads to roadmap.
-   Roadmap leads to application.
-   Application leads to documents and validation.
-   Submission leads to tracking.
-   Query can be received and answered.
-   Inspection can be viewed.
-   Decision can be viewed.
-   Approval leads to compliance.

### Notifications

-   Meaningful workflow events are visible to the entrepreneur.

### UI

-   Light/white theme is consistently applied.
-   UI is professional and uncluttered.
-   Loading/error/empty states exist.

------------------------------------------------------------------------

# 41. Out of Scope

Do not build the following as part of the MVP Entrepreneur module:

-   complex multi-business management;
-   nationwide entrepreneur onboarding;
-   advanced CRM;
-   complex messaging/chat system;
-   social features;
-   unnecessary profile customization;
-   production-grade identity verification;
-   complex payment system;
-   unrelated analytics.

------------------------------------------------------------------------

# 42. Implementation Principle

The Entrepreneur module should be implemented as a **connected shell
over the product workflow**, not as an isolated dashboard.

A successful implementation should allow a judge to enter as an
entrepreneur and naturally progress through:

``` text
Business
→ Intelligence
→ Roadmap
→ Application
→ Documents
→ Validation
→ Submission
→ Government interaction
→ Decision
→ Compliance
```

The module should make this journey feel like one platform.

------------------------------------------------------------------------

# 43. Final Locked Definition

**ENTREPRENEUR** is the primary applicant-facing environment of the
platform.

Its core responsibility is to provide the entrepreneur with:

> **A clear, actionable, connected view of their business approval
> journey from initial profile creation through approval and
> post-approval compliance.**

This module must remain consistent with the parent Product Specification
and all subsequent module specifications.

**STATUS: LOCKED FOR PROTOTYPE**
