# SIH 26130 --- Complete Product Specification

**Product:** Intelligent Approval & Compliance Management Platform\
**Prototype Scope:** Maharashtra, India\
**Document Status:** MASTER PRODUCT SPECIFICATION --- LOCKED\
**Purpose:** Source of truth for all subsequent module-level
documentation and prototype implementation.

------------------------------------------------------------------------

## 1. Purpose of This Document

This document defines the complete product vision, scope, user journeys,
modules, business logic, data boundaries, UI direction, and prototype
priorities for the SIH 26130 solution.

This document must be treated as the **parent specification**.

After this document is frozen, each major module will receive its own
detailed specification, for example:

1.  Entrepreneur
2.  Business Profile
3.  Approval Intelligence / Rule Engine
4.  Personalized Roadmap
5.  Application Builder
6.  Document Vault
7.  Document Pre-validation
8.  Submission
9.  Unified Workflow
10. Government Portal
11. Review
12. Query Management
13. Inspection
14. Approve / Reject
15. Entrepreneur Dashboard
16. SLA / Renewal / Alerts
17. Incentives
18. Government Analytics

The module documents must remain consistent with this master
specification.

------------------------------------------------------------------------

# 2. Product Vision

The platform is a **single-window intelligent approval management
system** that helps an entrepreneur understand, prepare, submit, track,
and complete the approval journey for a business/project.

The platform should reduce:

-   confusion about which approvals are relevant;
-   repeated entry of the same business information;
-   missing-document errors;
-   uncertainty about application status;
-   fragmented communication with departments;
-   lack of visibility into queries, inspections, SLA status, and
    renewals.

The system should also give government departments a unified workspace
for reviewing applications, raising queries, managing inspections,
making decisions, monitoring SLA performance, and identifying process
bottlenecks.

------------------------------------------------------------------------

# 3. Core Product Promise

The central product promise is:

> **Enter your business details once. The platform understands your
> business, identifies the relevant approval pathway, generates a
> personalized roadmap, helps prepare the application, validates
> documents before submission, and connects the entrepreneur with the
> government workflow until approval and subsequent compliance.**

The platform is not simply an information portal.

It is an **end-to-end workflow system**.

------------------------------------------------------------------------

# 4. Primary Product Flow

The complete locked flow is:

``` text
ENTREPRENEUR
      ↓
BUSINESS PROFILE
      ↓
APPROVAL INTELLIGENCE / RULE ENGINE
      ↓
PERSONALIZED ROADMAP
      ↓
APPLICATION BUILDER
      ↓
DOCUMENT PRE-VALIDATION
      ↓
SUBMIT
      ↓
UNIFIED WORKFLOW
      ↓
┌──────────────┬──────────────┬──────────────┐
│              │              │
BUILDING       FIRE           ELECTRICITY
DEPARTMENT     DEPARTMENT     UTILITY
│              │              │
└──────────────┴──────────────┴──────────────┘
      ↓
GOVERNMENT PORTAL
      ↓
┌──────────────┬──────────────┬──────────────┐
│              │              │
REVIEW         QUERY          INSPECTION
│              │              │
└──────────────┴──────────────┴──────────────┘
      ↓
APPROVE / REJECT
      ↓
ENTREPRENEUR DASHBOARD
      ↓
SLA / RENEWAL / ALERTS
```

This flow is the product's primary architecture and demo narrative.

------------------------------------------------------------------------

# 5. Geographic Scope

The prototype is limited to:

**Maharashtra**

The business profile, approval intelligence, roadmap, application,
government workflow, and demo data should therefore be designed around
Maharashtra.

The system must not imply that the prototype currently provides
nationwide regulatory coverage.

------------------------------------------------------------------------

# 6. User Types

The prototype has two primary user experiences.

## 6.1 Entrepreneur

The entrepreneur:

-   creates/logs into an account;
-   creates a business profile;
-   selects sector and sub-sector;
-   provides project/location/activity information;
-   receives approval intelligence;
-   receives a personalized roadmap;
-   prepares an application;
-   uploads/reuses documents;
-   runs pre-validation;
-   submits an application;
-   tracks status;
-   receives queries;
-   responds to queries;
-   receives inspection information;
-   receives approval/rejection;
-   views compliance and renewal actions;
-   views potentially relevant incentives.

## 6.2 Government / Department Officer

The officer:

-   logs into the government portal;
-   sees assigned/incoming applications;
-   reviews application information;
-   reviews documents;
-   raises queries;
-   reviews applicant responses;
-   schedules/completes inspections;
-   monitors application timeline/SLA status;
-   approves or rejects applications;
-   sees operational analytics and bottlenecks.

------------------------------------------------------------------------

# 7. Sector Scope

The prototype supports exactly **4 sectors** and **12 sub-sectors**.

## 7.1 Logistics / Warehousing

-   General Warehouse / Storage
-   Cold Storage / Cold Chain
-   Distribution Center

## 7.2 Tourism / Hospitality

-   Hotel / Resort
-   Homestay
-   Restaurant / Food Service

## 7.3 Textiles & Garments

-   Garment Manufacturing
-   Spinning / Weaving
-   Textile Processing / Dyeing

## 7.4 Food Processing

-   Dairy Processing
-   Fruit & Vegetable Processing
-   Grain / Flour Processing

### Scope rule

All 12 sub-sectors must be available in the product for:

-   profile selection;
-   navigation;
-   controlled demo data;
-   demonstrating scalability;
-   analytics where applicable.

However, the prototype must **not fabricate regulatory requirements**
for sub-sectors for which verified rule data has not been configured.

------------------------------------------------------------------------

# 8. Functional Intelligence Scope

The fully functional Approval Intelligence / Rule Engine for the MVP is:

**Logistics / Warehousing → Cold Storage / Cold Chain**

The other 11 sub-sectors remain:

**NOT_CONFIGURED**

or an equivalent clearly communicated state.

They must not be incorrectly labelled as:

**NOT_APPLICABLE**

simply because a rule has not been configured.

------------------------------------------------------------------------

# 9. Hero Business

The primary demo business is:

**FreshChain Cold Logistics Pvt. Ltd.**

### Hero profile

-   Sector: Logistics / Warehousing
-   Sub-sector: Cold Storage / Cold Chain
-   State: Maharashtra
-   Location: Pune
-   Location type: MIDC
-   Project: New Cold Storage
-   Project stage: Proposed / New
-   Food stored: Yes
-   Storage type: Cold / Refrigerated
-   Storage capacity: 5,000 MT

This business is the central demo record and should be reused throughout
the complete workflow.

------------------------------------------------------------------------

# 10. Core Product Modules

The following modules are part of the locked product scope.

## 10.1 Entrepreneur

Provides the entrepreneur-facing environment and access to the complete
approval journey.

## 10.2 Business Profile

Captures the business and project information required to personalize
the approval journey.

## 10.3 Approval Intelligence / Rule Engine

Evaluates the business profile against configured approval rules.

## 10.4 Personalized Roadmap

Converts intelligence output into an ordered, understandable approval
journey.

## 10.5 Application Builder

Provides guided, government-style application preparation.

## 10.6 Document Vault

Central reusable repository of business/project documents.

## 10.7 Document Pre-validation

Checks whether the application is ready for submission.

## 10.8 Submit

Creates/submits an application and starts the government workflow.

## 10.9 Unified Workflow

Connects the entrepreneur application with relevant department
workflows.

## 10.10 Government Portal

Department/officer workspace.

## 10.11 Review

Application and document review by an officer.

## 10.12 Query

Officer-to-entrepreneur clarification/document request workflow.

## 10.13 Inspection

Inspection scheduling, checklist, remarks, and outcome.

## 10.14 Approve / Reject

Final department decision.

## 10.15 Entrepreneur Dashboard

Central status and action-oriented view after submission and throughout
the lifecycle.

## 10.16 SLA / Renewal / Alerts

Tracks configured timelines, upcoming actions, renewals, and
notifications.

## 10.17 Incentives & Schemes

Surfaces potentially relevant government schemes/incentives using
controlled verified data.

## 10.18 Government Analytics

Shows application performance, SLA trends, bottlenecks, and operational
insights.

------------------------------------------------------------------------

# 11. Entrepreneur Journey

The entrepreneur journey is:

``` text
Login
 ↓
Business Profile
 ↓
Approval Intelligence
 ↓
Personalized Roadmap
 ↓
Select Approval
 ↓
Application Builder
 ↓
Document Vault
 ↓
Pre-validation
 ↓
Submit
 ↓
Track Application
 ↓
Receive Query
 ↓
Respond
 ↓
Inspection
 ↓
Decision
 ↓
Dashboard
 ↓
Compliance / Renewal / Alerts
```

The entrepreneur should not have to repeatedly enter information already
captured and verified in the Business Profile.

------------------------------------------------------------------------

# 12. Business Profile --- Product Role

Business Profile is the **input layer** for the intelligence engine.

It must capture enough information to determine the applicable approval
pathway.

The previously locked profile concept contains approximately **20 core
fields plus dynamic sub-sector questions**.

Core information includes categories such as:

-   business identity;
-   applicant/contact information;
-   business type;
-   sector;
-   sub-sector;
-   Maharashtra location details;
-   MIDC/non-MIDC context;
-   project details;
-   investment;
-   employment;
-   activity-specific information.

The exact field-level specification will be created in the separate
Business Profile document.

------------------------------------------------------------------------

# 13. Approval Intelligence / Rule Engine

The Rule Engine is the product's core intelligence layer.

It should be **data-driven and explainable**.

Conceptual flow:

``` text
Business Profile
      ↓
Sector
      ↓
Sub-sector
      ↓
Location
      ↓
MIDC / Non-MIDC
      ↓
Project Stage
      ↓
Activity / Conditions
      ↓
Configured Rules
      ↓
Rule Evaluation
      ↓
Approval Requirements
```

Each configured rule should support:

-   applicability;
-   conditional applicability;
-   stage dependency;
-   authority;
-   reason/explanation;
-   document requirements;
-   source/reference information.

### Important rule distinction

A missing rule configuration must never automatically mean:

**NOT_APPLICABLE**

Use a state such as:

**NOT_CONFIGURED / NEEDS_REVIEW**

when the system has no configured rule.

This prevents incomplete data from producing false negative guidance.

------------------------------------------------------------------------

# 14. Hero Cold Storage Approval Intelligence

For the Cold Storage / Cold Chain hero scenario, the controlled
prototype pathway can evaluate requirements such as:

1.  MIDC Building Plan + Provisional Fire
2.  FSSAI Registration / Licence pathway
3.  MPCB Consent
4.  Industrial Electricity Connection
5.  MIDC Water Connection
6.  MIDC Drainage Connection
7.  Factory Registration / Licence
8.  Final Fire Approval
9.  Occupancy Certificate

These must be represented as **conditional/configurable prototype
requirements**, not universal legal claims.

Examples:

-   MIDC building/fire pathway → depends on location and
    project/construction context.
-   FSSAI pathway → depends on food-business/storage context.
-   MPCB → depends on applicable activity/process/category.
-   Electricity → depends on connection requirement.
-   Water/drainage → depends on project/location requirements.
-   Factory registration/licence → depends on whether the establishment
    falls under the applicable definition.
-   Final fire/occupancy requirements → depend on the applicable project
    stage.

The detailed regulatory rule specification will be maintained
separately.

------------------------------------------------------------------------

# 15. Personalized Roadmap

The Personalized Roadmap is the **output of Approval Intelligence**.

It must not be a generic checklist.

It should communicate:

-   what is relevant;
-   why it is relevant;
-   who handles it;
-   when it is needed;
-   what documents are required;
-   what the current status is;
-   what the entrepreneur should do next.

Example statuses:

-   Not Started
-   In Progress
-   Submitted
-   Under Review
-   Query Raised
-   Inspection
-   Approved
-   Rejected
-   Conditional
-   Stage-dependent
-   Not Configured

The roadmap should update when application states change.

Example:

``` text
Application Under Review
        ↓
Officer Approves
        ↓
Roadmap status becomes Approved
        ↓
Entrepreneur Dashboard updates
        ↓
Compliance/Renewal action becomes available
```

------------------------------------------------------------------------

# 16. Application Builder

The Application Builder is a guided application preparation layer.

It should use a government-style structure without claiming to reproduce
every real government form.

Core sections:

1.  Applicant Details
2.  Business Details
3.  Site Details
4.  Project Details
5.  Technical Details
6.  Documents
7.  Declaration
8.  Review

Existing verified Business Profile information should be auto-filled
wherever applicable.

The entrepreneur should not be forced to repeatedly type the same
information.

For the MVP, at least one complete application template must be
functional for the hero journey.

------------------------------------------------------------------------

# 17. Document Vault

The Document Vault is a centralized document repository.

Hero demo documents include:

-   PAN
-   Company Registration
-   MIDC Plot / Lease Document
-   Site Plan
-   Building Plan
-   Project Report
-   Cold Storage Layout
-   Process Flow

Possible statuses:

-   Uploaded
-   Pending Verification
-   Verified
-   Rejected
-   Expired

The same verified document should be reusable by applicable
applications.

------------------------------------------------------------------------

# 18. Document Pre-validation

Pre-validation is a major differentiating feature.

Before submission, the system checks:

1.  Required fields
2.  Required documents
3.  Business information consistency
4.  Required declarations
5.  Configured approval requirements

Hero demo:

Initially:

``` text
PROCESS FLOW
✕ Missing
```

The system should clearly tell the entrepreneur why submission is
blocked.

After upload:

``` text
✓ Process Flow available
✓ Required fields complete
✓ Documents complete
✓ Declaration complete

APPLICATION READY TO SUBMIT
```

------------------------------------------------------------------------

# 19. Submission

When the entrepreneur submits a valid application:

-   generate an application ID;
-   set status to Submitted;
-   create a timeline event;
-   create appropriate notification;
-   make the application visible to the relevant government workflow.

Example demo ID:

**APP-MH-2026-00124**

Submission must not be merely a front-end animation.

The application record should be connected to subsequent workflow
states.

------------------------------------------------------------------------

# 20. Unified Government Workflow

The product concept uses a unified workflow connecting relevant
departments.

The conceptual flow includes:

-   Building Department
-   Fire Department
-   Electricity Utility

The government portal should provide a consistent workspace even when
the underlying approval/department path differs.

The entrepreneur should not have to understand the internal
fragmentation of government departments in order to track the overall
journey.

------------------------------------------------------------------------

# 21. Government Portal

The Government Portal is the department-side workspace.

Core areas:

-   Dashboard
-   Applications
-   Documents
-   Queries
-   Inspections
-   SLA Monitoring
-   Compliance
-   Incentives
-   Analytics

The government UI should be more operational/data-dense than the
entrepreneur portal while sharing the same overall design system.

------------------------------------------------------------------------

# 22. Application Review

Officer review should expose:

-   application information;
-   business information;
-   submitted documents;
-   document verification;
-   queries;
-   inspection;
-   timeline;
-   SLA status.

Officer actions include:

-   Verify Document
-   Reject Document
-   Raise Query
-   Schedule Inspection
-   Complete Inspection
-   Approve
-   Reject

------------------------------------------------------------------------

# 23. Query Workflow

The query workflow is:

``` text
Officer
 ↓
Raise Query
 ↓
Entrepreneur Notification
 ↓
Entrepreneur Opens Query
 ↓
Uploads/updates required information/document
 ↓
Submits Response
 ↓
Officer Notification
 ↓
Officer Reviews Response
```

Hero query:

**Revised Process Flow Required**

Demo entrepreneur response:

**Revised process flow uploaded for review.**

------------------------------------------------------------------------

# 24. Inspection Workflow

Inspection can be:

-   required by the workflow;
-   scheduled by the officer;
-   visible to the entrepreneur;
-   recorded as an event;
-   completed using a checklist.

Hero demo inspection:

-   Date: 05 Sep 2026
-   Time: 11:00 AM
-   Location: FreshChain Cold Logistics Pvt. Ltd.
-   Outcome: Satisfactory

These are prototype/demo values.

------------------------------------------------------------------------

# 25. Approval / Rejection

Final decision requires the officer to review the relevant information.

Approval flow:

``` text
Application
✓
Documents
✓
Query Resolution
✓
Inspection
✓
Final Review
✓
Approve
```

On approval:

-   application status becomes Approved;
-   timeline is updated;
-   entrepreneur receives notification;
-   roadmap updates;
-   compliance/renewal information can become visible.

On rejection:

-   application status becomes Rejected;
-   officer reason is recorded;
-   entrepreneur is notified;
-   roadmap reflects the outcome.

------------------------------------------------------------------------

# 26. Entrepreneur Dashboard

The dashboard is the central post-login/post-submission workspace.

It should prioritize action.

Examples:

-   approvals identified;
-   applications;
-   pending actions;
-   active approvals;
-   query requiring response;
-   inspection scheduled;
-   recent activity;
-   compliance action;
-   renewal reminder.

The dashboard should not become a collection of decorative statistics.

------------------------------------------------------------------------

# 27. SLA

SLA tracking should provide visibility into configured/demo processing
timelines.

Statuses:

-   Within SLA
-   Approaching
-   Breached

Important:

The prototype must **not invent statutory SLA durations**.

Where a value is used only for demonstration, it must be clearly
labelled as:

**DEMO / CONFIGURED**

A platform-generated SLA status must not be represented as a legal
determination.

------------------------------------------------------------------------

# 28. Renewals & Compliance

After approval, the platform can surface:

-   active approvals;
-   compliance obligations;
-   upcoming actions;
-   renewal reminders.

The platform should help the entrepreneur continue beyond the initial
approval.

The conceptual lifecycle is:

``` text
Approval
 ↓
Active
 ↓
Compliance
 ↓
Renewal Approaching
 ↓
Renewal
```

The detailed statutory deadline logic will only be added where verified.

------------------------------------------------------------------------

# 29. Alerts & Notifications

Notifications are generated from meaningful events.

Examples:

-   Application submitted
-   Query raised
-   Query response received
-   Document verified
-   Document rejected
-   Inspection scheduled
-   Inspection completed
-   SLA approaching
-   SLA breached
-   Application approved
-   Application rejected
-   Compliance due
-   Renewal approaching

Notifications should be actionable.

------------------------------------------------------------------------

# 30. Incentives & Schemes

The platform should surface potentially relevant government
schemes/incentives.

The system must distinguish between:

-   Likely Eligible
-   Potentially Eligible
-   Needs Confirmation

It must not guarantee eligibility.

Each curated scheme record should ideally contain:

-   scheme name;
-   authority;
-   sector;
-   eligibility conditions;
-   benefit description;
-   official source;
-   verification date;
-   status.

The prototype should use a small controlled dataset rather than a huge
catalogue.

------------------------------------------------------------------------

# 31. Government Analytics

Government analytics should help answer:

-   How many applications are pending?
-   Where are delays occurring?
-   Which stage is the bottleneck?
-   How is SLA performance?
-   Which sectors/sub-sectors have more applications?
-   How many queries are raised?
-   How long are applications waiting for inspection/review?

Example prototype metrics may include:

-   Total Applications
-   Approved
-   Pending
-   Rejected
-   SLA Breached

Example bottlenecks:

1.  Document Verification
2.  Inspection Scheduling
3.  Officer Review

Any such numbers are **DEMO DATA** unless verified against an
authoritative source.

------------------------------------------------------------------------

# 32. Cross-Module Connectivity

The platform must behave as one connected system.

The most important relationships are:

``` text
Business Profile
      ↓
Approval Intelligence
      ↓
Personalized Roadmap
      ↓
Application Builder
      ↓
Document Vault
      ↓
Pre-validation
      ↓
Application
      ↓
Government Portal
      ↓
Review
      ↓
Query / Response
      ↓
Inspection
      ↓
Decision
      ↓
Roadmap Update
      ↓
Compliance / Renewal
```

Examples:

-   Change Business Profile → intelligence can change.
-   Intelligence output → roadmap changes.
-   Roadmap approval → correct application opens.
-   Document Vault → application can reuse verified documents.
-   Missing document → pre-validation blocks submission.
-   Submission → government inbox receives application.
-   Query → entrepreneur receives notification.
-   Response → officer sees response.
-   Inspection → timeline updates.
-   Approval → roadmap updates.
-   Approval → compliance becomes visible.

------------------------------------------------------------------------

# 33. Application State Model

The primary application lifecycle is:

``` text
DRAFT
 ↓
VALIDATION_ERROR
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

The UI should reflect the current application state.

------------------------------------------------------------------------

# 34. Event / Timeline Model

Important application actions should create timeline events.

Examples:

-   Application created
-   Validation failed
-   Validation passed
-   Application submitted
-   Application assigned
-   Document verified
-   Query raised
-   Query responded
-   Inspection scheduled
-   Inspection completed
-   Final review
-   Approved
-   Rejected

This event history powers:

-   application tracking;
-   government review;
-   notifications;
-   audit-style timeline;
-   analytics.

------------------------------------------------------------------------

# 35. Prototype Data Philosophy

The prototype should use a **small controlled dataset**.

It must demonstrate intelligence without pretending to contain the
entire Indian/Maharashtra regulatory universe.

### Required controlled data

-   4 sectors
-   12 sub-sectors
-   1 hero business
-   Cold Storage rules
-   relevant authorities
-   one functional application pathway
-   reusable documents
-   hero application
-   hero query
-   hero inspection
-   hero approval
-   demo compliance/renewal
-   small incentive dataset
-   demo analytics dataset

------------------------------------------------------------------------

# 36. Regulatory Accuracy Principle

Regulatory information is high-risk and must be handled conservatively.

The prototype must:

-   distinguish verified information from demo/configured logic;
-   use official sources when presenting regulatory claims;
-   record source/reference and verification information where
    applicable;
-   avoid presenting conditional requirements as universally mandatory;
-   avoid fabricated deadlines;
-   avoid fabricated benefits;
-   avoid claiming that absence of configured data means an approval is
    not required.

When a requirement is not configured:

**NOT_CONFIGURED / NEEDS_REVIEW**

is preferable to a false negative.

------------------------------------------------------------------------

# 37. Technology Direction

The locked backend/platform direction is:

### Frontend

Next.js + React + TypeScript

### Server/API

Next.js server/API layer

### Database

Supabase PostgreSQL

### Authentication

Supabase Auth

### File Storage

Supabase Storage

### Data Access

Supabase JavaScript client

### Deployment

Vercel

The prototype should remain a manageable monolithic application.

Do not introduce unnecessary microservices.

------------------------------------------------------------------------

# 38. Supabase Development Rule

Supabase CLI should **not** be installed/configured as part of the
prototype workflow.

Database migrations should be generated as SQL files.

Example:

``` text
/supabase/migrations/
    001_initial_schema.sql
    002_seed_data.sql
```

The SQL will be manually reviewed and executed by the project team
through the Supabase Dashboard SQL Editor.

The application must not silently create/alter production database
tables at startup.

------------------------------------------------------------------------

# 39. File Storage Rule

Persistent uploaded documents should use:

**Supabase Storage**

not local filesystem storage.

For the hero workflow, the Process Flow upload should be demonstrably
connected to:

-   Document Vault
-   Application
-   Pre-validation
-   Query response

------------------------------------------------------------------------

# 40. UI / UX Direction

The UI direction is locked as:

**LIGHT / WHITE**

The product should look:

-   clean;
-   modern;
-   professional;
-   trustworthy;
-   government-enterprise;
-   spacious;
-   information-focused.

### Visual requirements

-   white/light backgrounds;
-   light/white sidebar;
-   white cards;
-   dark charcoal text;
-   professional blue primary accent;
-   subtle gray borders;
-   subtle shadows;
-   green/amber/red/blue status colors;
-   clear typography hierarchy;
-   minimal gradients;
-   minimal animation.

Do not use a dark theme or dark sidebar.

Both Entrepreneur and Government portals should use the same overall
design system.

------------------------------------------------------------------------

# 41. UX Principles

## 41.1 Action first

Users should immediately understand what they need to do next.

## 41.2 Explainability

When the system recommends an approval, show why.

## 41.3 Reuse

Previously entered/verified information should be reused.

## 41.4 Visibility

Application state should always be understandable.

## 41.5 Progressive disclosure

Do not overwhelm the entrepreneur with every regulatory detail at once.

## 41.6 Trust

Clearly distinguish:

-   official information;
-   configured rules;
-   demo data;
-   potentially eligible recommendations.

------------------------------------------------------------------------

# 42. Security Direction

Even for a hackathon:

-   do not expose secrets;
-   do not expose Supabase service-role credentials to the browser;
-   protect government-only actions;
-   enforce role-aware access;
-   validate input;
-   avoid storing credentials in source code.

------------------------------------------------------------------------

# 43. Prototype Scope Boundaries

## Must work

-   Entrepreneur login/demo entry
-   Business Profile
-   Sector/sub-sector selection
-   Approval Intelligence
-   Personalized Roadmap
-   Application Builder
-   Document Vault
-   Pre-validation
-   Submission
-   Application Tracking
-   Government Login/demo entry
-   Government Dashboard
-   Application Review
-   Query
-   Query Response
-   Inspection
-   Approval/Rejection
-   Roadmap synchronization
-   Basic Compliance/Renewal
-   Notifications

## Controlled/demo

-   4 sectors
-   12 sub-sectors
-   incentives
-   analytics
-   SLA data
-   compliance data
-   non-hero sector information

## Out of scope for MVP

-   nationwide regulatory database;
-   real government API integrations;
-   production government authentication infrastructure;
-   real government payment processing;
-   complex ML models;
-   nationwide scheme catalogue;
-   full automation of legal decision-making;
-   large-scale microservice infrastructure.

------------------------------------------------------------------------

# 44. AI / Intelligence Positioning

The MVP's intelligence comes primarily from:

1.  Structured rule evaluation
2.  Conditional approval logic
3.  Business-profile-driven recommendations
4.  Document pre-validation
5.  Eligibility matching
6.  Operational bottleneck analytics

The system should be explainable.

Do not claim the presence of a complex ML model unless one is actually
implemented.

------------------------------------------------------------------------

# 45. Primary Demo Story

The complete Monday demo should tell this story:

### Step 1 --- Entrepreneur

Entrepreneur logs in.

### Step 2 --- Business Profile

Creates:

**FreshChain Cold Logistics Pvt. Ltd.**

Pune, Maharashtra\
MIDC\
Cold Storage / Cold Chain\
5,000 MT

### Step 3 --- Approval Intelligence

System analyzes:

-   sector;
-   sub-sector;
-   location;
-   MIDC context;
-   food storage;
-   project stage;
-   other configured conditions.

### Step 4 --- Personalized Roadmap

System presents the approval pathway with explanations and statuses.

### Step 5 --- Application

Entrepreneur opens the relevant application.

Business information is already populated.

### Step 6 --- Documents

Documents are reused from the Document Vault.

### Step 7 --- Pre-validation

The system catches:

**Process Flow missing.**

### Step 8 --- Fix

Entrepreneur uploads Process Flow.

Validation passes.

### Step 9 --- Submit

Application is submitted.

### Step 10 --- Government Portal

Officer receives application.

### Step 11 --- Review

Officer reviews documents/application.

### Step 12 --- Query

Officer raises:

**Revised Process Flow Required**

### Step 13 --- Entrepreneur Response

Entrepreneur receives notification and responds.

### Step 14 --- Inspection

Officer schedules inspection.

### Step 15 --- Inspection Completion

Inspection is completed successfully.

### Step 16 --- Decision

Officer approves.

### Step 17 --- Entrepreneur

Entrepreneur sees:

**Approved**

Roadmap updates.

### Step 18 --- Post-approval

Compliance, renewal, and alerts become visible.

### Step 19 --- Government Insight

Government dashboard shows bottleneck analytics.

------------------------------------------------------------------------

# 46. Demo Success Criteria

The prototype succeeds if a judge can understand within a few minutes:

1.  The entrepreneur does not need to know every approval beforehand.
2.  The platform derives a personalized pathway from the business
    profile.
3.  The roadmap is not static; it reflects application status.
4.  Documents are reusable.
5.  Pre-validation catches problems before submission.
6.  The government side is connected to the same application.
7.  Queries and responses are connected.
8.  Inspection is connected.
9.  Approval changes the entrepreneur's state.
10. The system continues into compliance/renewal.
11. Government gets visibility into bottlenecks.

------------------------------------------------------------------------

# 47. Architecture Principle

The most important architectural principle is:

> **One connected system, not a collection of mock screens.**

The prototype can use controlled data and simplified implementation, but
the visible relationships between modules must be real.

------------------------------------------------------------------------

# 48. Module Documentation Strategy

After this Product Specification is frozen, create one detailed document
per module.

Recommended documentation structure:

``` text
/docs
│
├── PRODUCT_SPEC.md
│
├── modules/
│   ├── 01_ENTREPRENEUR.md
│   ├── 02_BUSINESS_PROFILE.md
│   ├── 03_APPROVAL_INTELLIGENCE.md
│   ├── 04_PERSONALIZED_ROADMAP.md
│   ├── 05_APPLICATION_BUILDER.md
│   ├── 06_DOCUMENT_VAULT.md
│   ├── 07_DOCUMENT_PREVALIDATION.md
│   ├── 08_SUBMISSION.md
│   ├── 09_UNIFIED_WORKFLOW.md
│   ├── 10_GOVERNMENT_PORTAL.md
│   ├── 11_REVIEW.md
│   ├── 12_QUERY.md
│   ├── 13_INSPECTION.md
│   ├── 14_APPROVE_REJECT.md
│   ├── 15_ENTREPRENEUR_DASHBOARD.md
│   ├── 16_SLA_RENEWAL_ALERTS.md
│   ├── 17_INCENTIVES.md
│   └── 18_GOVERNMENT_ANALYTICS.md
│
├── architecture/
│   ├── ARCHITECTURE.md
│   ├── DATABASE.md
│   └── API.md
│
└── regulatory/
    └── REGULATORY_RULES.md
```

Each module document should define:

-   purpose;
-   users;
-   inputs;
-   outputs;
-   screens;
-   fields;
-   states;
-   business rules;
-   database requirements;
-   API requirements;
-   dependencies;
-   error states;
-   demo behavior;
-   acceptance criteria.

------------------------------------------------------------------------

# 49. Documentation Governance

The Product Specification is the parent document.

Rules:

1.  Module documents must not contradict this document.
2.  Regulatory documents must not contradict verified sources.
3.  Implementation must follow the approved module documents.
4.  Any scope change must be explicitly approved.
5.  AI coding agents must not silently modify locked product decisions.
6.  If a requirement is ambiguous, it should be marked for review rather
    than invented.
7.  Demo data must be clearly distinguishable from real
    regulatory/statistical data.

------------------------------------------------------------------------

# 50. Product Priorities

When time or implementation capacity is limited, prioritize in this
order:

### Priority 1 --- Core intelligence

Business Profile\
→ Approval Intelligence\
→ Personalized Roadmap

### Priority 2 --- Application preparation

Application Builder\
→ Document Vault\
→ Pre-validation\
→ Submission

### Priority 3 --- Government workflow

Government Portal\
→ Review\
→ Query\
→ Response\
→ Inspection\
→ Approval

### Priority 4 --- Post-approval

Dashboard\
→ Compliance\
→ Renewal\
→ Alerts

### Priority 5 --- Supporting modules

Incentives\
→ Analytics\
→ Additional sector demonstrations

------------------------------------------------------------------------

# 51. Final Product Definition

The product is an intelligent, connected approval-management platform
for Maharashtra entrepreneurs and government departments.

Its central differentiator is:

``` text
BUSINESS PROFILE
      ↓
INTELLIGENCE
      ↓
PERSONALIZED ROADMAP
      ↓
APPLICATION
      ↓
DOCUMENT PRE-VALIDATION
      ↓
SUBMISSION
      ↓
UNIFIED GOVERNMENT WORKFLOW
      ↓
REVIEW / QUERY / INSPECTION
      ↓
APPROVE / REJECT
      ↓
ENTREPRENEUR DASHBOARD
      ↓
SLA / RENEWAL / ALERTS
```

The platform should make a complex government approval journey
understandable, actionable, and trackable.

**This Product Specification is the master source of truth.**

The next step is to create the separate locked specification for each
module, beginning with:

**01 --- Entrepreneur**
