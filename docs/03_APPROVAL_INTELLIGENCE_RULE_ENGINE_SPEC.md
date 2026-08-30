# SIH 26130 --- Module Specification 03

# APPROVAL INTELLIGENCE / RULE ENGINE

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 03 --- Approval Intelligence / Rule Engine\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Intelligence / Decision-Support Layer\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP\
**Input:** Business Profile\
**Output:** Personalized Roadmap

------------------------------------------------------------------------

## 1. Module Purpose

Approval Intelligence is the core decision-support module of the
platform.

Its responsibility is to take the structured information collected in
the **Business Profile** and determine which approval requirements are
configured as:

-   Applicable
-   Conditional
-   Stage-dependent
-   Not Applicable
-   Not Configured / Needs Review

It must also explain **why** a requirement was identified and provide
the information needed by the Personalized Roadmap.

The engine must be:

-   data-driven;
-   explainable;
-   condition-based;
-   conservative when information is incomplete;
-   reusable by downstream modules.

------------------------------------------------------------------------

# 2. Core Principle

The engine follows:

``` text
Business Profile
      ↓
Normalize / Read Profile Inputs
      ↓
Evaluate Configured Rules
      ↓
Determine Requirement Status
      ↓
Generate Explanation
      ↓
Attach Authority / Stage / Documents
      ↓
Approval Intelligence Result
      ↓
Personalized Roadmap
```

The engine should not simply display a static list of approvals.

------------------------------------------------------------------------

# 3. What Approval Intelligence Is NOT

The module is not:

-   a generic search engine;
-   a chatbot that invents approvals;
-   a nationwide legal database;
-   an automatic legal decision-maker;
-   a replacement for government authority;
-   a reason to fabricate regulatory requirements.

The MVP uses a **controlled regulatory rule dataset**.

------------------------------------------------------------------------

# 4. Functional Scope

The platform supports exactly:

**4 sectors × 3 sub-sectors = 12 sub-sectors**

However, the fully configured Approval Intelligence engine for the
prototype is limited to:

**Logistics / Warehousing → Cold Storage / Cold Chain**

The other 11 sub-sectors must be represented as:

**NOT_CONFIGURED / NEEDS_REVIEW**

when detailed rule data is unavailable.

They must not be falsely represented as:

**NOT_APPLICABLE**

------------------------------------------------------------------------

# 5. Input

The engine receives structured information from Business Profile.

Core inputs include:

``` text
businessType
sector
subSector
state
district
city
locationType
projectType
projectStage
activity
foodStored
storageType
capacityValue
capacityUnit
investment
landArea
builtUpArea
employment
otherConfiguredConditions
```

Only decision-relevant fields should be evaluated.

------------------------------------------------------------------------

# 6. Input Validation Before Evaluation

Before rules are evaluated, the engine checks whether the minimum
required inputs exist.

Example:

``` text
Sector
✓

Sub-sector
✓

Location
✓

Location Type
✓

Project Stage
✓

Activity
✓
```

If critical information is missing:

``` text
ANALYSIS INCOMPLETE

Complete:
• Location Type
• Project Stage
```

The engine should not pretend to have complete intelligence when
critical inputs are missing.

------------------------------------------------------------------------

# 7. Rule Structure

Each configured approval rule should conceptually contain:

``` text
Rule
├── id
├── approvalName
├── authority
├── sector
├── subSector
├── conditions
├── applicabilityStatus
├── stage
├── reason
├── requiredDocuments
├── source
├── verificationDate
└── active
```

The implementation may use a structured JSON/JSONB condition
representation.

------------------------------------------------------------------------

# 8. Condition Structure

Conditions should support operators such as:

-   equals
-   not equals
-   contains
-   greater than
-   greater than or equal
-   less than
-   less than or equal
-   in
-   exists
-   AND
-   OR

Example conceptual rule:

``` text
IF
sector = Logistics / Warehousing
AND
subSector = Cold Storage / Cold Chain
AND
locationType = MIDC
THEN
evaluate MIDC-specific requirement
```

Another:

``` text
IF
foodStored = true
THEN
evaluate FSSAI pathway
```

The exact regulatory applicability remains dependent on the configured
rule.

------------------------------------------------------------------------

# 9. Rule Evaluation Result

Each rule evaluation must produce a structured result.

Example:

``` text
{
  approval: "FSSAI Registration / Licence pathway",
  status: "APPLICABLE",
  reason: "Food storage activity is present in the business profile.",
  authority: "FSSAI",
  stage: "...",
  documents: [...]
}
```

The exact data structure can vary by implementation, but the result must
preserve explainability.

------------------------------------------------------------------------

# 10. Status Model

The Rule Engine uses the following conceptual statuses.

## APPLICABLE

A configured rule matched and identifies the requirement for the current
profile.

## CONDITIONAL

The requirement depends on an additional condition or configuration.

## STAGE_DEPENDENT

The requirement is relevant to a particular project/application stage.

## NOT_APPLICABLE

A configured rule has explicitly determined that the requirement does
not apply.

## NOT_CONFIGURED / NEEDS_REVIEW

There is insufficient configured rule data to make a reliable
determination.

------------------------------------------------------------------------

# 11. Critical Safety Rule

This distinction is LOCKED:

``` text
NO MATCHING CONFIGURED RULE
            ↓
NOT_CONFIGURED / NEEDS_REVIEW
```

It must **never** become:

``` text
NOT_APPLICABLE
```

Reason:

> Absence of configured data is not proof that an approval is
> unnecessary.

This is one of the most important design rules in the module.

------------------------------------------------------------------------

# 12. Explanation / "Why It Applies"

Every positive or conditional requirement should provide an explanation.

Example:

``` text
FSSAI Registration / Licence

Status:
Applicable

Why:
Your business profile indicates that food products
will be stored as part of the proposed cold-storage
activity.

Authority:
FSSAI
```

The explanation should be derived from the rule configuration and
profile values rather than invented dynamically.

------------------------------------------------------------------------

# 13. Authority

Each approval result should identify the relevant authority where
configured.

Examples in the hero workflow may include:

-   FSSAI
-   MPCB
-   MIDC
-   Building Department
-   Fire Department
-   Electricity Utility

Authority names should come from configured data.

------------------------------------------------------------------------

# 14. Stage

Each requirement may have an associated stage.

Examples:

``` text
Planning
Construction
Pre-operation
Operation
Post-approval
Renewal
```

The engine should distinguish:

``` text
Required now
Required later
Conditional
```

This is essential for the Personalized Roadmap.

------------------------------------------------------------------------

# 15. Document Requirements

Rules can define required documents.

Example:

``` text
Approval
     ↓
Required Documents
     ├── Site Plan
     ├── Building Plan
     └── Project Report
```

These requirements feed into:

-   Application Builder;
-   Document Vault;
-   Pre-validation.

The Rule Engine itself should identify requirements; document
completeness is checked by the Pre-validation module.

------------------------------------------------------------------------

# 16. Hero Cold Storage Rule Set

The controlled MVP rule set contains the following approval/requirement
pathways for evaluation.

### 1. MIDC Building Plan + Provisional Fire

Relevant to the applicable MIDC building/construction pathway.

Potential inputs:

-   location type;
-   project type;
-   project stage;
-   building/construction context.

### 2. FSSAI Registration / Licence pathway

Relevant to the applicable food-business/storage context.

Primary hero condition:

``` text
Food Stored = Yes
```

### 3. MPCB Consent

Applicability depends on the relevant activity/process/category
configuration.

It must not be represented as universally mandatory merely because the
business is a cold-storage facility.

### 4. Industrial Electricity Connection

Relevant where a new/required industrial electricity connection is part
of the project.

### 5. MIDC Water Connection

Relevant where:

``` text
Location Type = MIDC
```

and a water connection is required by the project.

### 6. MIDC Drainage Connection

Relevant where:

``` text
Location Type = MIDC
```

and drainage connection is required by the project.

### 7. Factory Registration / Licence

Only applicable if the establishment falls under the applicable factory
definition.

The engine must not assume that every cold storage automatically
requires this.

### 8. Final Fire Approval

A stage-dependent fire requirement where applicable after the relevant
construction/fire process.

### 9. Occupancy Certificate

A stage-dependent building/occupancy requirement where applicable.

------------------------------------------------------------------------

# 17. Hero Profile Evaluation

For:

``` text
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

Project Stage:
Proposed / New

Food Stored:
Yes

Storage Type:
Cold / Refrigerated

Capacity:
5,000 MT
```

the engine evaluates the controlled Cold Storage rules.

The result should not simply be:

``` text
9 approvals required
```

It should provide:

``` text
Approval
Status
Authority
Why
Stage
Documents
Next action
```

for each configured result.

------------------------------------------------------------------------

# 18. Example Intelligence Output

Conceptually:

``` text
APPROVAL INTELLIGENCE COMPLETE

Business:
FreshChain Cold Logistics Pvt. Ltd.

Sector:
Logistics / Warehousing

Sub-sector:
Cold Storage / Cold Chain

Location:
Pune • MIDC

Requirements Identified
────────────────────────────────────

1. MIDC Building Plan + Provisional Fire
Status: Applicable / Conditional
Authority: MIDC / applicable authority
Stage: Planning / Construction
Why: Based on configured location and project conditions

2. FSSAI Registration / Licence
Status: Applicable
Authority: FSSAI
Stage: Applicable food-business stage
Why: Food storage = Yes

3. MPCB Consent
Status: Conditional / Needs configuration as applicable
Authority: MPCB

4. Industrial Electricity Connection
Status: Conditional
Authority: Electricity Utility

5. MIDC Water Connection
Status: Conditional
Authority: MIDC

6. MIDC Drainage Connection
Status: Conditional
Authority: MIDC

7. Factory Registration / Licence
Status: Conditional
Authority: Applicable authority

8. Final Fire Approval
Status: Stage-dependent
Authority: Fire Department

9. Occupancy Certificate
Status: Stage-dependent
Authority: Building Department
```

The exact status shown for each item must come from the configured rule
evaluation.

------------------------------------------------------------------------

# 19. Analysis Summary

The top of the page should provide a concise summary.

Example:

``` text
ANALYSIS COMPLETE

9 configured requirement pathways evaluated

Applicable
3

Conditional
3

Stage-dependent
2

Needs Review
1
```

These numbers are examples and should be generated from the actual
configured results.

Do not hard-code misleading summary numbers.

------------------------------------------------------------------------

# 20. Confidence / Data Coverage

Instead of claiming legal certainty, the system should communicate the
coverage of its configured rules.

Example:

``` text
REGULATORY COVERAGE

Cold Storage / Cold Chain
Maharashtra prototype rules

Configured rule coverage:
Available for selected hero pathway

⚠ Some requirements may require authority confirmation.
```

Avoid displaying an invented numerical "legal confidence score."

------------------------------------------------------------------------

# 21. Source / Verification Information

Where a regulatory requirement is presented, the configured rule should
be capable of storing:

-   source/reference;
-   official source URL where available;
-   verification date;
-   rule/data status.

The UI may show:

``` text
Source
Official reference

Verified
30 Aug 2026
```

Only use a real verification date when the underlying rule has actually
been verified.

------------------------------------------------------------------------

# 22. Rule Versioning

For the MVP, each rule should have a simple version or updated
timestamp.

Conceptually:

``` text
Rule Version
v1

Last Updated
[date]
```

Full regulatory version-management infrastructure is out of scope.

------------------------------------------------------------------------

# 23. Re-analysis

If a decision-relevant Business Profile field changes, the engine should
support re-analysis.

Example:

``` text
MIDC
→
Non-MIDC
```

System:

``` text
Your business profile changed.

This may affect applicable approval requirements.

[Re-analyze Approvals]
```

Another:

``` text
Food Stored:
Yes
→
No
```

This can affect the configured food-related pathway.

------------------------------------------------------------------------

# 24. Rule Engine Independence

The Rule Engine must be separated from presentation.

The UI should not contain logic such as:

``` text
if MIDC then show approval
```

Instead:

``` text
Business Profile
       ↓
Rule Engine
       ↓
Rule Result
       ↓
UI renders result
```

This makes the engine reusable and maintainable.

------------------------------------------------------------------------

# 25. Personalized Roadmap Integration

The Rule Engine is the **source of roadmap requirements**.

Conceptually:

``` text
Rule Evaluation
      ↓
Approval Results
      ↓
Order by stage/dependency
      ↓
Personalized Roadmap
```

The Rule Engine should not own the entire roadmap UI.

It provides the structured requirement output.

------------------------------------------------------------------------

# 26. Application Builder Integration

The Rule Engine identifies which application pathways are relevant.

Example:

``` text
FSSAI
Status: Applicable
        ↓
[Start Application]
```

For an approval without a fully implemented application template:

``` text
MPCB
Status: Conditional
Application integration:
Guided pathway / prototype limited
```

The system must not make an unavailable application look fully
implemented.

------------------------------------------------------------------------

# 27. Document Vault Integration

Rule results may specify documents required for an approval.

The Document Vault can then show:

``` text
Required by:
FSSAI Application

Available:
✓ Project Report
✓ Site Plan

Missing:
✕ Process Flow
```

The Rule Engine identifies the requirement; the Document Vault manages
the document.

------------------------------------------------------------------------

# 28. Pre-validation Integration

The Pre-validation module uses the rule output to determine required
application/document checks.

Example:

``` text
Rule:
FSSAI

Required document:
Process Flow

Document Vault:
Missing

Pre-validation:
BLOCKED
```

The Rule Engine should not itself block submission.

------------------------------------------------------------------------

# 29. Rule Priority

Rules should be evaluated in a predictable way.

Recommended conceptual order:

``` text
1. Sector / Sub-sector match
2. Geographic match
3. Project type
4. Project stage
5. Activity conditions
6. Capacity / threshold conditions
7. Other configured conditions
8. Determine status
9. Generate explanation
```

The exact implementation may vary, but the result must be deterministic.

------------------------------------------------------------------------

# 30. Multiple Rules for One Approval

An approval may have more than one rule.

Example:

``` text
FSSAI
 ├── Food Stored = Yes
 ├── Applicable business context
 └── Relevant project/activity conditions
```

The engine should combine the configured conditions rather than create
duplicate approval cards.

------------------------------------------------------------------------

# 31. Conflicting Rules

If configured rules produce conflicting results:

``` text
Rule A → Applicable
Rule B → Not Applicable
```

the engine must not silently choose one.

It should return:

``` text
NEEDS REVIEW

Conflicting configured rules detected.
```

This is preferable to a potentially incorrect determination.

------------------------------------------------------------------------

# 32. Missing Input vs Missing Rule

These are different states.

### Missing input

``` text
Business Profile incomplete
```

Action:

`Complete Profile`

### Missing rule

``` text
Profile complete
but rule is not configured
```

Action:

`Needs Review`

The UI must communicate the difference.

------------------------------------------------------------------------

# 33. Unsupported Sub-sector

If the entrepreneur selects one of the 11 non-hero sub-sectors:

Example:

``` text
Tourism / Hospitality
→ Hotel / Resort
```

show:

``` text
Approval Intelligence

Detailed rule configuration is not available
for this sub-sector in the current prototype.

Status:
NOT_CONFIGURED / NEEDS_REVIEW
```

Do not display fabricated approval lists.

------------------------------------------------------------------------

# 34. Loading State

During analysis:

``` text
ANALYZING YOUR BUSINESS

✓ Reading business profile
✓ Checking sector and sub-sector
● Evaluating configured rules
○ Preparing approval pathway
```

Use subtle progress feedback.

Do not claim that a real external government system is being queried
unless an actual integration exists.

------------------------------------------------------------------------

# 35. Error State

If analysis fails:

``` text
Unable to complete approval analysis.

Your business profile is saved.

[Try Again]
```

Do not expose raw technical/database errors.

------------------------------------------------------------------------

# 36. Incomplete Profile State

If required inputs are missing:

``` text
ANALYSIS CANNOT BE COMPLETED

Complete these profile details:

• Location Type
• Project Stage

[Complete Business Profile]
```

------------------------------------------------------------------------

# 37. UI Design

Use the locked:

**LIGHT / WHITE**

theme.

Approval Intelligence should use:

-   white cards;
-   dark text;
-   professional blue accents;
-   subtle borders;
-   clear status badges;
-   clean spacing;
-   strong information hierarchy.

Recommended visual grouping:

``` text
Analysis Summary
        ↓
Business Context
        ↓
Requirement Cards
        ↓
Filters / Stage
        ↓
Detailed Requirement
        ↓
Documents / Next Action
```

------------------------------------------------------------------------

# 38. Requirement Card

Each requirement card should make these immediately visible:

``` text
[STATUS]

Approval Name
Authority

Why this applies
...

Stage
...

Required Documents
...

[View Details]
[Start Application]
```

The primary CTA depends on the requirement's current state.

------------------------------------------------------------------------

# 39. Filtering

The entrepreneur may filter results by:

-   All
-   Applicable
-   Conditional
-   Stage-dependent
-   Not Configured

Optional stage filter:

-   Planning
-   Construction
-   Pre-operation
-   Operation
-   Post-approval

Do not create unnecessary advanced filtering for MVP.

------------------------------------------------------------------------

# 40. Sorting / Ordering

The default order should support the Personalized Roadmap.

Recommended:

1.  Currently actionable
2.  Applicable
3.  Conditional
4.  Stage-dependent
5.  Not Configured

Within these groups, use configured stage/dependency ordering.

------------------------------------------------------------------------

# 41. Audit / Explainability

For every engine result, it should be possible to determine:

``` text
Which profile values were considered?
Which rule matched?
What result did it produce?
Why?
Which source/configuration supports it?
```

This does not require a complex visible audit console for the
entrepreneur.

It should be available in the data/model for debugging and trust.

------------------------------------------------------------------------

# 42. Prototype Architecture

Recommended conceptual architecture:

``` text
Business Profile
       ↓
Profile Data Object
       ↓
Rule Repository
       ↓
Rule Evaluator
       ↓
Rule Results
       ↓
Explanation Builder
       ↓
Approval Intelligence API
       ↓
Approval Intelligence UI
       ↓
Personalized Roadmap
```

The Rule Evaluator should be testable independently of the UI.

------------------------------------------------------------------------

# 43. Seed Data Boundary

For MVP, seed:

-   4 sectors;
-   12 sub-sectors;
-   controlled authorities;
-   controlled Cold Storage approval rules;
-   controlled document requirements;
-   controlled stages;
-   controlled explanations;
-   controlled source/reference metadata.

Do not seed invented full regulatory rules for the remaining 11
sub-sectors.

------------------------------------------------------------------------

# 44. Acceptance Criteria

The Approval Intelligence module is complete when:

### Input

-   Business Profile data can be consumed.
-   Required decision inputs are validated.

### Rules

-   Rules are stored as structured data.
-   Conditions can be evaluated.
-   Rules are not embedded in UI components.

### Status

-   Applicable works.
-   Conditional works.
-   Stage-dependent works.
-   Explicit Not Applicable works work.
-   Not Configured / Needs Review works.

### Safety

-   No rule does not become Not Applicable.
-   Missing input is different from missing rule.
-   Conflicting rules trigger review.

### Explanation

-   Each configured result can show why it applies.
-   Authority is shown where configured.
-   Stage is shown where configured.
-   Required documents are shown where configured.

### Hero

-   FreshChain Cold Logistics can be analyzed.
-   Cold Storage rules produce structured results.
-   Results can feed the Personalized Roadmap.

### Integration

-   Business Profile changes can trigger re-analysis.
-   Rule results can feed applications/documents/pre-validation.
-   Roadmap can consume the results.

### UX

-   Analysis has loading state.
-   Analysis has error state.
-   Incomplete profile state is clear.
-   Light/white theme is consistent.

------------------------------------------------------------------------

# 45. Out of Scope

Do not build:

-   nationwide regulatory intelligence;
-   automatic legal advice;
-   fabricated rules;
-   external government API integrations;
-   real-time government database scraping;
-   complex machine learning;
-   opaque AI-generated approval decisions;
-   automatic legal guarantees;
-   full rule coverage for all 12 sub-sectors.

------------------------------------------------------------------------

# 46. Final Locked Definition

**APPROVAL INTELLIGENCE / RULE ENGINE** is the structured
decision-support layer that transforms Business Profile information into
an explainable set of configured approval requirements.

Its core responsibility is:

> **Evaluate the entrepreneur's structured business/project profile
> against configured rules, identify applicable or conditional approval
> pathways, explain the result, and provide structured output to the
> Personalized Roadmap and downstream application workflow.**

The engine must be conservative:

> **No configured rule ≠ Not Applicable.**

The engine is the intelligence layer---not the legal authority.

**STATUS: LOCKED FOR PROTOTYPE**
