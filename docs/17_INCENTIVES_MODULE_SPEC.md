# SIH 26130 --- Module Specification 17

# INCENTIVES

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 17 --- Incentives\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Incentive Discovery & Tracking\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP / HIGH-VALUE DEMO\
**Upstream:** Entrepreneur, Business Profile, Approval Intelligence,
Personalized Roadmap, Documents\
**Downstream:** Application Builder, Document Vault, Submission,
Dashboard, Notifications, Analytics

------------------------------------------------------------------------

## 1. Module Purpose

The Incentives module helps an entrepreneur discover and understand
configured incentives, subsidies, schemes, or support programs that may
be relevant to their business.

It should answer:

-   Which configured incentives may be relevant?
-   Why is an incentive being shown?
-   What eligibility information is available?
-   What documents may be required?
-   What is the application/status?
-   What should the entrepreneur do next?

The module is a **discovery and workflow support layer**.

It must not make unsupported legal, financial, or eligibility
guarantees.

------------------------------------------------------------------------

# 2. Core Principle

The flow is:

``` text
Business Profile
      ↓
Configured Incentive Rules
      ↓
Potentially Relevant Incentives
      ↓
Eligibility Information
      ↓
Entrepreneur Review
      ↓
Save / Start Application
      ↓
Documents
      ↓
Submission
      ↓
Status Tracking
```

The system should distinguish:

``` text
Potentially Eligible
```

from:

``` text
Confirmed Eligible
```

Only authorized/configured verification should produce a confirmed
eligibility state.

------------------------------------------------------------------------

# 3. Incentive Scope

For the Maharashtra prototype, incentives can be represented using a
small curated dataset.

Example categories:

-   Capital investment support
-   Interest-related support
-   Electricity-related support
-   Employment-linked support
-   Sector-specific support
-   Location-linked support
-   MSME support

The exact incentives and benefits must come from configured source data.

Do not invent live government scheme values.

------------------------------------------------------------------------

# 4. Incentive Record

Conceptually:

``` text
incentive
├── id
├── name
├── authority
├── category
├── description
├── eligibilityRules
├── benefitDescription
├── requiredDocuments
├── applicationMethod
├── status
├── sourceReference
└── metadata
```

------------------------------------------------------------------------

# 5. Incentive Status

At scheme level:

``` text
ACTIVE
INACTIVE
DRAFT
```

At entrepreneur/application level:

``` text
DISCOVERED
SAVED
ELIGIBILITY_REVIEW
APPLICATION_STARTED
SUBMITTED
UNDER_REVIEW
APPROVED
REJECTED
```

These are product workflow states.

------------------------------------------------------------------------

# 6. Incentive Discovery

The entrepreneur enters the Incentives area and sees:

``` text
INCENTIVES

Based on your business profile

Potentially relevant to you:
4
```

Each incentive card should explain why it appears.

Example:

``` text
Capital Investment Support

Why this is relevant:
• Logistics / Warehousing
• Maharashtra
• New project
• Configured investment criteria

[View Details]
```

------------------------------------------------------------------------

# 7. Relevance Signals

The prototype can use Business Profile fields such as:

-   sector;
-   sub-sector;
-   location;
-   location type;
-   project type;
-   business type;
-   configured investment information;
-   employment information where available.

Only use fields actually collected by the Business Profile.

------------------------------------------------------------------------

# 8. Eligibility Logic

Eligibility can be represented using configured rules.

Example:

``` text
IF
sector = "Logistics / Warehousing"
AND
locationState = "Maharashtra"
AND
projectType = "New Project"

THEN
show incentive as potentially relevant
```

The rules should be stored/configured rather than buried throughout the
UI.

------------------------------------------------------------------------

# 9. Eligibility Language

Use careful language.

Recommended:

``` text
Potentially relevant
```

``` text
Appears to match configured criteria
```

``` text
Based on the information provided
```

Avoid:

``` text
You are definitely eligible
```

unless confirmed through an authorized process.

------------------------------------------------------------------------

# 10. Eligibility Result

Example:

``` text
ELIGIBILITY CHECK

Based on your Business Profile:

✓ Maharashtra location
✓ Logistics / Warehousing
✓ New project

Potentially eligible

Additional verification may be required.
```

This is a product screening result, not a legal determination.

------------------------------------------------------------------------

# 11. Incentive Detail Page

Recommended structure:

``` text
Incentive Name
        ↓
Authority
        ↓
What it provides
        ↓
Why it may apply
        ↓
Eligibility
        ↓
Required documents
        ↓
Application process
        ↓
Status
        ↓
Action
```

------------------------------------------------------------------------

# 12. Benefit Description

Show configured benefit information.

Example:

``` text
Potential Benefit

[Configured benefit description]

Eligibility and benefit amount depend on
the applicable scheme rules.
```

Do not hard-code unsupported percentages or rupee amounts.

------------------------------------------------------------------------

# 13. Benefit Types

The system can represent:

-   subsidy;
-   reimbursement;
-   concession;
-   interest support;
-   tax-related support;
-   electricity-related support;
-   employment support;
-   other configured benefit.

Do not assume every incentive is a direct cash subsidy.

------------------------------------------------------------------------

# 14. Authority

Display the configured authority.

Example:

``` text
Authority:
[Configured Government Department]
```

Do not imply BuildX itself grants the incentive.

BuildX only helps discover and manage the workflow.

------------------------------------------------------------------------

# 15. Source Reference

Every incentive should have a source/reference field in the dataset.

Example:

``` text
Source:
Configured official scheme reference
```

The prototype should be able to show source provenance where available.

Do not fabricate source links.

------------------------------------------------------------------------

# 16. Required Documents

Show configured documents.

Example:

``` text
REQUIRED DOCUMENTS

Business Registration
✓ Available

Project Report
✓ Available

Investment Proof
○ Required

Employment Details
○ Required
```

Document availability can connect to the Document Vault.

------------------------------------------------------------------------

# 17. Document Vault Integration

If a required document already exists:

``` text
Project Report
✓ Available in Document Vault

[Attach]
```

If missing:

``` text
Investment Proof
Not available

[Add Document]
```

This avoids duplicate uploads.

------------------------------------------------------------------------

# 18. Incentive Application

If the product supports a workflow:

``` text
[Start Application]
```

should open an incentive application based on the configured template.

The flow can reuse:

``` text
Application Builder
      ↓
Document Vault
      ↓
Pre-validation
      ↓
Submission
```

Do not create a completely separate application architecture.

------------------------------------------------------------------------

# 19. Incentive Application Record

Conceptually:

``` text
incentiveApplication
├── id
├── incentiveId
├── businessId
├── status
├── startedAt
├── submittedAt
├── decisionAt
└── metadata
```

------------------------------------------------------------------------

# 20. Incentive Status Tracking

Entrepreneur should be able to see:

``` text
Capital Investment Support

Application Started
```

or:

``` text
Submitted
```

or:

``` text
Under Review
```

or:

``` text
Approved
```

or:

``` text
Rejected
```

Status should come from the incentive workflow.

------------------------------------------------------------------------

# 21. Incentive Dashboard

A compact dashboard section:

``` text
YOUR INCENTIVES

Potentially Relevant
4

Saved
2

In Progress
1

Approved
0
```

Counts should come from real data.

------------------------------------------------------------------------

# 22. Incentive Cards

Recommended:

``` text
┌─────────────────────────────────────────────┐
│ Capital Investment Support                  │
│                                             │
│ Logistics / Warehousing                     │
│ Maharashtra                                 │
│                                             │
│ Potentially relevant                        │
│                                             │
│ [View Details]                              │
└─────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 23. Save Incentive

Entrepreneur can save an incentive:

``` text
[Save]
```

State:

``` text
SAVED
```

This lets the entrepreneur return later without starting an application.

------------------------------------------------------------------------

# 24. Saved Incentives

Dedicated section:

``` text
SAVED INCENTIVES

Capital Investment Support
Employment Support
Electricity-related Support

[View]
```

------------------------------------------------------------------------

# 25. Incentive Recommendation Explanation

Each recommendation should provide an explanation.

Example:

``` text
Why you're seeing this

Your profile indicates:
• Maharashtra
• Logistics / Warehousing
• New project
• Cold storage

These match the configured discovery criteria.
```

This makes the recommendation explainable.

------------------------------------------------------------------------

# 26. Missing Information

If an incentive requires information not present in the Business
Profile:

``` text
More information needed

Add investment details to improve
the eligibility screening.

[Update Business Profile]
```

Do not mark the incentive ineligible solely because optional information
is missing.

Use:

``` text
Eligibility cannot be fully assessed yet.
```

------------------------------------------------------------------------

# 27. Location-Based Incentive

If a configured incentive depends on location:

``` text
Location:
Pune, Maharashtra

Location Type:
MIDC
```

Then:

``` text
Potentially relevant based on configured
location criteria.
```

Do not assume MIDC automatically grants a benefit.

------------------------------------------------------------------------

# 28. Sector-Based Incentive

Example:

``` text
Sector:
Logistics / Warehousing

Sub-sector:
Cold Storage / Cold Chain

Potential sector relevance:
Yes
```

This is a discovery signal, not a final eligibility determination.

------------------------------------------------------------------------

# 29. Incentive Dependencies

Some incentives may depend on:

-   business registration;
-   project approval;
-   investment threshold;
-   employment criteria;
-   location;
-   sector;
-   timing;
-   configured application status.

Represent these as configured dependencies.

Example:

``` text
Requires:
Business Registration
```

------------------------------------------------------------------------

# 30. Approval Roadmap Integration

Incentives can appear alongside the approval roadmap.

Example:

``` text
YOUR ROADMAP

Approvals
✓ Registration
● FSSAI
○ Fire NOC

Potential Incentives
★ Capital Investment Support
★ Employment Support
```

Incentives should be visually distinct from mandatory approvals.

------------------------------------------------------------------------

# 31. Mandatory vs Optional Distinction

This is critical.

Display:

``` text
APPROVAL
Required / configured workflow
```

versus:

``` text
INCENTIVE
Optional opportunity
```

Do not mix incentives into the mandatory approval checklist.

------------------------------------------------------------------------

# 32. Dashboard Integration

Entrepreneur Dashboard may show:

``` text
INCENTIVES

3 potentially relevant incentives

[Explore Incentives]
```

Only a compact preview belongs on the main dashboard.

------------------------------------------------------------------------

# 33. Notification Integration

Meaningful incentive events may generate notifications:

``` text
New Incentive Match

A configured incentive may be relevant
to your updated Business Profile.

[View Incentive]
```

Do not send notifications every time the dashboard recalculates.

------------------------------------------------------------------------

# 34. Business Profile Change

When Business Profile changes:

``` text
Business Profile Updated
      ↓
Incentive Rules Re-evaluated
      ↓
Potential Matches Updated
```

Example:

``` text
Location changed
      ↓
Location-dependent incentive relevance changes
```

------------------------------------------------------------------------

# 35. Recommendation Refresh

The prototype can refresh incentive matches when:

-   Business Profile is completed;
-   relevant Business Profile fields change;
-   user explicitly refreshes discovery.

Avoid expensive continuous recomputation.

------------------------------------------------------------------------

# 36. Incentive Application Builder

If an incentive application is supported, reuse existing application
architecture:

``` text
Incentive Template
      ↓
Application Builder
      ↓
Required Fields
      ↓
Required Documents
      ↓
Pre-validation
      ↓
Submission
```

This reduces implementation complexity.

------------------------------------------------------------------------

# 37. Pre-validation Integration

Before incentive submission:

``` text
Application Builder
      ↓
Pre-validation
      ↓
READY TO SUBMIT
```

The same document/field validation architecture should be reused.

------------------------------------------------------------------------

# 38. Submission Integration

After validation:

``` text
READY TO SUBMIT
      ↓
Submission
      ↓
Submitted
```

The existing Submission module should be reused where possible.

------------------------------------------------------------------------

# 39. Incentive Query Integration

If the incentive authority requests more information:

``` text
Incentive Application
      ↓
Query Raised
      ↓
Entrepreneur Response
      ↓
Query Resolved
```

Reuse Query Management rather than building a separate query system.

------------------------------------------------------------------------

# 40. Incentive Approval

If approved:

``` text
INCENTIVE APPROVED
```

Display:

``` text
Decision:
Approved

Decision Date:
[Configured date]

Reference:
[Configured reference]
```

Do not claim a payment has been received unless the system actually
records it.

------------------------------------------------------------------------

# 41. Incentive Rejection

If rejected:

``` text
INCENTIVE REJECTED

Reason:
[Configured/recorded reason]
```

Do not invent legal rejection grounds.

------------------------------------------------------------------------

# 42. Payment Status

For incentives involving financial benefit, a separate payment state can
be represented:

``` text
NOT_APPLICABLE
PENDING
PAID
```

For MVP, payment tracking may remain informational.

Do not simulate actual financial transfers.

------------------------------------------------------------------------

# 43. Analytics Integration

Incentive data can contribute:

``` text
Potential Matches
Applications Started
Applications Submitted
Approved
Rejected
```

The Analytics module owns aggregation.

------------------------------------------------------------------------

# 44. Security

Entrepreneurs can only see incentives and incentive applications
associated with their own business.

Government-side incentive processing, if implemented, must be restricted
by role/authority.

Do not expose another entrepreneur's incentive application.

------------------------------------------------------------------------

# 45. Data Provenance

Every incentive record should ideally identify:

``` text
Source
Last Updated
Configured By
```

This helps prevent stale or fabricated scheme information.

For the prototype, a curated dataset is acceptable.

------------------------------------------------------------------------

# 46. No Unsupported Claims

Never state:

``` text
You will receive ₹X
```

unless the configured source data supports that exact statement.

Prefer:

``` text
Potential benefit:
[Configured description]

Subject to applicable scheme conditions.
```

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
-   subtle "opportunity" accent;
-   clear eligibility labels;
-   simple benefit presentation.

Avoid:

-   flashy investment-style UI;
-   exaggerated savings claims;
-   dark theme;
-   gamification.

------------------------------------------------------------------------

# 48. Incentive Detail UI

Recommended:

``` text
┌─────────────────────────────────────────────┐
│ Capital Investment Support                  │
│                                             │
│ Authority                                   │
│ [Configured Authority]                      │
│                                             │
│ Potentially relevant                        │
│                                             │
│ Why you're seeing this                     │
│ ✓ Maharashtra                               │
│ ✓ Logistics / Warehousing                   │
│ ✓ New Project                               │
│                                             │
│ Potential Benefit                           │
│ [Configured description]                    │
│                                             │
│ Required Documents                          │
│ ✓ Business Registration                     │
│ ✓ Project Report                            │
│ ○ Investment Proof                          │
│                                             │
│ [Save]            [Start Application]       │
└─────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 49. Eligibility UI

``` text
ELIGIBILITY SCREENING

Based on your current profile

✓ Location matches
✓ Sector matches
✓ Project type matches
○ Investment information needed

Result:
Potentially relevant

[Update Profile]
```

------------------------------------------------------------------------

# 50. Loading States

Examples:

``` text
Finding incentives for your business...
```

``` text
Checking configured eligibility criteria...
```

``` text
Loading incentive details...
```

------------------------------------------------------------------------

# 51. Error States

If discovery fails:

``` text
We couldn't load incentive matches.

[Try Again]
```

If eligibility screening fails:

``` text
We couldn't complete the screening.

Your profile has not been changed.

[Try Again]
```

Do not show technical errors.

------------------------------------------------------------------------

# 52. Empty State

If no configured matches:

``` text
NO INCENTIVES FOUND

No configured incentives currently match
the information in your Business Profile.

[Review Business Profile]
```

Do not imply that no real-world incentives exist.

The statement refers only to the configured product dataset.

------------------------------------------------------------------------

# 53. Hero Incentive Journey

Hero business:

**FreshChain Cold Logistics Pvt. Ltd.**

Profile:

``` text
Maharashtra
Pune
MIDC
Logistics / Warehousing
Cold Storage / Cold Chain
New Project
```

Discovery:

``` text
Potentially Relevant

Capital Investment Support
Employment Support
Electricity-related Support
```

Entrepreneur opens:

``` text
Capital Investment Support
```

Sees:

``` text
Why you're seeing this
✓ Maharashtra
✓ Logistics / Warehousing
✓ New project

Potential Benefit:
[Configured description]
```

Then:

``` text
[Save]
```

or:

``` text
[Start Application]
```

------------------------------------------------------------------------

# 54. Hero Application Journey

If application flow is demonstrated:

``` text
Potential Incentive
      ↓
View Details
      ↓
Start Application
      ↓
Application Builder
      ↓
Document Vault
      ↓
Pre-validation
      ↓
Ready to Submit
      ↓
Submit
      ↓
Under Review
      ↓
Approved / Rejected
```

This demonstrates that incentives use the same platform infrastructure.

------------------------------------------------------------------------

# 55. Acceptance Criteria

The Incentives module is complete when:

### Discovery

-   Curated/configured incentives can be stored.
-   Business Profile can produce potentially relevant matches.
-   Each match explains why it appears.

### Eligibility

-   Configured criteria can be evaluated.
-   Potentially relevant is distinguished from confirmed eligible.
-   Missing information is clearly communicated.
-   No unsupported eligibility guarantee is displayed.

### Details

-   Authority is shown.
-   Benefit description is shown.
-   Eligibility criteria are shown.
-   Required documents are shown.
-   Source/reference can be shown.

### Documents

-   Required documents connect to Document Vault.
-   Existing documents can be reused where supported.

### Application

-   Incentive can be saved.
-   Incentive application can be started.
-   Existing Application Builder can be reused.
-   Pre-validation can be reused.
-   Submission can be reused.

### Tracking

-   Incentive application status can be displayed.
-   Approval/rejection can be represented.
-   Query flow can reuse Query Management.

### Integration

-   Business Profile changes can refresh matches.
-   Dashboard can show incentive opportunities.
-   Roadmap keeps incentives visually separate from mandatory approvals.

### Security

-   User-specific incentive data is protected.

### Hero

-   FreshChain Cold Logistics can demonstrate at least one relevant
    incentive discovery flow.

### UI

-   Light/white theme.
-   Clear "potentially relevant" language.
-   No exaggerated benefit claims.
-   Loading/error/empty states.

------------------------------------------------------------------------

# 56. Out of Scope

Do not build:

-   live nationwide incentive database;
-   automatic legal eligibility determination;
-   guaranteed subsidy calculations;
-   direct government payment processing;
-   real financial transfers;
-   AI-generated legal eligibility decisions;
-   complex tax calculations;
-   live external incentive APIs;
-   nationwide scheme monitoring;
-   automatic benefit disbursement.

------------------------------------------------------------------------

# 57. Final Locked Definition

**INCENTIVES** is the discovery and workflow-support module that helps
entrepreneurs identify configured schemes that may be relevant to their
business and, where supported, move those opportunities into the same
application/document/submission workflow used elsewhere in BuildX.

Its core responsibility is:

> **Turn Business Profile information and configured incentive criteria
> into explainable potential matches, then provide a structured path to
> review, save, apply, and track those incentives without making
> unsupported eligibility or financial guarantees.**

The defining principle is:

> **Approval Intelligence tells the entrepreneur what is required.
> Incentives tell the entrepreneur what opportunities may be
> available.**

They must remain clearly separated.

**STATUS: LOCKED FOR PROTOTYPE**
