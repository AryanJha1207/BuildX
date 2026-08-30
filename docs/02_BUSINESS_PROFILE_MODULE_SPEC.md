# SIH 26130 --- Module Specification 02

# BUSINESS PROFILE

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 02 --- Business Profile\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Entrepreneur / Applicant\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** Core MVP\
**Upstream:** Entrepreneur\
**Downstream:** Approval Intelligence / Rule Engine

------------------------------------------------------------------------

## 1. Module Purpose

The Business Profile is the **structured input layer** of the platform.

It captures the entrepreneur's business, project, location, activity,
and other relevant characteristics once and makes that information
available to downstream modules.

Its most important responsibility is to provide reliable structured
information to:

**Approval Intelligence / Rule Engine**

The profile should therefore collect **decision-relevant information**,
not unnecessary form fields.

The module must minimize repeated data entry across applications.

------------------------------------------------------------------------

# 2. Core Principle

The Business Profile follows:

> **Enter business information once → reuse it throughout the approval
> journey.**

The same information should be available to:

-   Approval Intelligence
-   Personalized Roadmap
-   Application Builder
-   Document Pre-validation
-   Government Application Review
-   Application Tracking
-   Compliance / Renewal
-   Incentive matching where applicable

------------------------------------------------------------------------

# 3. Hero Business

The prototype's primary business is:

**FreshChain Cold Logistics Pvt. Ltd.**

Hero context:

-   State: Maharashtra
-   City: Pune
-   Location Type: MIDC
-   Sector: Logistics / Warehousing
-   Sub-sector: Cold Storage / Cold Chain
-   Project: New Cold Storage
-   Project Stage: Proposed / New
-   Food Stored: Yes
-   Storage Type: Cold / Refrigerated
-   Storage Capacity: 5,000 MT

The hero profile must be fully usable by Approval Intelligence.

------------------------------------------------------------------------

# 4. Profile Structure

The Business Profile should be organized into logical sections rather
than presenting a long undivided form.

Recommended sections:

``` text
1. Business Identity
2. Applicant / Contact
3. Business Classification
4. Location / Site
5. Project Details
6. Activity / Operations
7. Capacity / Scale
8. Employment / Investment
9. Conditional Sector Details
10. Review & Confirmation
```

The exact fields shown in section 9 depend on the selected
sector/sub-sector.

------------------------------------------------------------------------

# 5. Section 1 --- Business Identity

Core fields:

### Legal / Business Name

Example:

`FreshChain Cold Logistics Pvt. Ltd.`

### Business / Entity Type

Examples:

-   Private Limited Company
-   LLP
-   Partnership
-   Proprietorship
-   Other configured types

### Registration / Incorporation Number

Text field.

### PAN

Text field with appropriate format validation.

### GSTIN

Optional/conditional field depending on business stage/context.

### Business Address

Structured address.

------------------------------------------------------------------------

# 6. Section 2 --- Applicant / Contact

Core fields:

### Applicant Name

The primary entrepreneur/applicant.

### Designation / Role

Examples:

-   Proprietor
-   Director
-   Partner
-   Authorized Representative

### Email

Validated email.

### Mobile Number

Validated Indian mobile number.

### Alternate Contact

Optional.

The applicant/contact information should be reusable in application
forms.

------------------------------------------------------------------------

# 7. Section 3 --- Business Classification

This section determines the primary classification used by Approval
Intelligence.

### Sector

Required.

Exactly:

1.  Logistics / Warehousing
2.  Tourism / Hospitality
3.  Textiles & Garments
4.  Food Processing

### Sub-sector

Required.

The sub-sector options must depend on the selected sector.

------------------------------------------------------------------------

## Logistics / Warehousing

-   General Warehouse / Storage
-   Cold Storage / Cold Chain
-   Distribution Center

## Tourism / Hospitality

-   Hotel / Resort
-   Homestay
-   Restaurant / Food Service

## Textiles & Garments

-   Garment Manufacturing
-   Spinning / Weaving
-   Textile Processing / Dyeing

## Food Processing

-   Dairy Processing
-   Fruit & Vegetable Processing
-   Grain / Flour Processing

No additional sectors/sub-sectors should be introduced in the prototype.

------------------------------------------------------------------------

# 8. Sector/Sub-sector Selection Behavior

When a sector changes:

1.  Clear incompatible sub-sector selection.
2.  Load the correct three sub-sector options.
3.  Display the appropriate conditional questions.
4.  Do not carry irrelevant answers from the previous sub-sector.
5.  Preserve previously saved answers only when still relevant.

Example:

``` text
Sector
Logistics / Warehousing

Sub-sector
Cold Storage / Cold Chain
```

Then display Cold Storage-specific questions.

------------------------------------------------------------------------

# 9. Functional Intelligence Boundary

The prototype supports all 12 sub-sectors for selection.

However:

**Only Cold Storage / Cold Chain has fully configured Approval
Intelligence rules.**

For other sub-sectors:

``` text
NOT_CONFIGURED / NEEDS_REVIEW
```

must be used where detailed rule data is unavailable.

Do not tell the entrepreneur:

`No approvals required`

merely because no rule has been configured.

------------------------------------------------------------------------

# 10. Section 4 --- Location / Site

Location is a critical Rule Engine input.

Required fields should include:

### State

For MVP:

`Maharashtra`

### District

Example:

`Pune`

### City / Taluka / Locality

Configured as appropriate.

### Site Address

Full project/site address.

### Industrial Area / Estate

Optional/conditional.

### Location Type

Important field.

Options:

-   MIDC
-   Non-MIDC
-   Other configured industrial area/context

The location type must be explicitly captured rather than inferred from
free text.

------------------------------------------------------------------------

# 11. MIDC Logic

The profile must distinguish:

``` text
MIDC
vs
Non-MIDC
```

This distinction can affect approval intelligence.

For the hero:

``` text
Location Type = MIDC
```

The Business Profile should not claim that every Pune location is MIDC.

The entrepreneur explicitly selects/provides the applicable location
context.

If the location is:

**Non-MIDC**

the Rule Engine must evaluate the Non-MIDC pathway instead of applying
MIDC-specific requirements.

------------------------------------------------------------------------

# 12. Section 5 --- Project Details

Core fields:

### Project Name

Example:

`FreshChain Cold Storage Project`

### Project Type

Examples:

-   New
-   Expansion
-   Modification
-   Existing

### Project Stage

Examples:

-   Idea / Planning
-   Proposed
-   Under Construction
-   Existing / Operational
-   Expansion

For the hero:

`Proposed / New`

### Expected Start / Project Timeline

Where relevant.

### Project Description

Short structured/free-text description.

------------------------------------------------------------------------

# 13. Section 6 --- Activity / Operations

The activity section captures information that can influence approval
applicability.

For the hero scenario:

### Food Stored?

Yes / No

### Storage Type

Examples:

-   Refrigerated
-   Frozen
-   Mixed
-   Other configured type

Hero:

`Cold / Refrigerated`

### Material / Product Category

For hero:

Food / perishable products.

### Operational Activity

Structured description of the proposed operation.

The module should prefer structured options when an answer affects Rule
Engine decisions.

------------------------------------------------------------------------

# 14. Section 7 --- Capacity / Scale

The profile should capture relevant scale information.

For Cold Storage:

### Storage Capacity

Example:

`5,000 MT`

The data model should store:

-   numeric value;
-   unit.

Avoid storing only the formatted string.

This allows future rules to evaluate thresholds.

------------------------------------------------------------------------

# 15. Section 8 --- Investment / Employment

Core fields may include:

### Estimated Project Investment

Numeric value.

### Land / Site Area

Numeric value + unit.

### Built-up Area

Numeric value + unit where applicable.

### Expected Employment

Numeric value.

These fields can support future approval/incentive logic.

Do not create complex financial modeling for the MVP.

------------------------------------------------------------------------

# 16. Section 9 --- Conditional Sector Questions

Conditional questions are displayed according to sector/sub-sector.

### Cold Storage / Cold Chain

The MVP may ask:

-   Food stored? Yes/No
-   Storage type
-   Storage capacity
-   Project stage
-   New/existing facility
-   Location type
-   Relevant utility requirements where applicable
-   Basic activity/process information

These fields should be sufficient for the controlled hero Rule Engine.

### Other sub-sectors

Only use controlled basic profile questions unless verified rule
requirements have been configured.

Do not create fabricated regulatory decision logic.

------------------------------------------------------------------------

# 17. Conditional Question Engine

Conditional questions should be data-driven where practical.

Conceptually:

``` text
IF sector = Logistics / Warehousing
AND subSector = Cold Storage / Cold Chain
THEN show Cold Storage questions
```

Example:

``` text
Food Stored?
     ↓
Yes
     ↓
Show Food Storage details
```

The UI should not contain a large collection of scattered hard-coded
conditions if the same logic can be represented as structured
configuration.

------------------------------------------------------------------------

# 18. Profile Completion

Display profile completion clearly.

Example:

``` text
BUSINESS PROFILE

92% Complete

✓ Business Identity
✓ Contact
✓ Classification
✓ Location
✓ Project
✓ Activity
✓ Capacity
○ Final Confirmation
```

Completion should be based on required fields for the selected
sector/sub-sector.

Do not require irrelevant fields simply to reach 100%.

------------------------------------------------------------------------

# 19. Validation

Validation should operate at two levels.

## 19.1 Field Validation

Examples:

-   Required field missing
-   Invalid email
-   Invalid mobile number
-   Invalid PAN format
-   Invalid GSTIN format where used
-   Negative capacity
-   Invalid numeric value
-   Invalid selection

## 19.2 Profile-Level Validation

Examples:

-   Sector selected but sub-sector missing
-   MIDC selected but required location information missing
-   Cold Storage selected but storage capacity missing
-   Food Stored = Yes but relevant food storage details missing
-   Project marked New but required project information incomplete

Errors should be understandable.

------------------------------------------------------------------------

# 20. Save / Draft Behavior

The entrepreneur should be able to:

-   save profile;
-   continue later;
-   edit before final confirmation.

For the prototype, the profile should have:

``` text
DRAFT
COMPLETED
```

states.

Do not allow Approval Intelligence to run against an obviously
incomplete profile without clearly explaining what is missing.

------------------------------------------------------------------------

# 21. Review & Confirmation

Before sending profile data to Approval Intelligence, show a concise
review.

Example:

``` text
REVIEW BUSINESS PROFILE

Business
FreshChain Cold Logistics Pvt. Ltd.

Sector
Logistics / Warehousing

Sub-sector
Cold Storage / Cold Chain

Location
Pune, Maharashtra
MIDC

Project
New Cold Storage

Food Stored
Yes

Capacity
5,000 MT

[Edit Profile]

[Analyze My Approvals]
```

The entrepreneur should explicitly confirm the information before
analysis.

------------------------------------------------------------------------

# 22. Data Passed to Approval Intelligence

The Business Profile must provide structured inputs including, where
applicable:

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

The Rule Engine uses these inputs to evaluate configured rules.

------------------------------------------------------------------------

# 23. Data Reuse

Once saved, profile data should populate relevant application fields.

Example:

Business Profile:

``` text
Business Name
FreshChain Cold Logistics Pvt. Ltd.
```

Application Builder:

``` text
Applicant / Business Name
[Pre-filled]
```

The entrepreneur may edit application-specific information where
appropriate, but should not be forced to re-enter unchanged information.

------------------------------------------------------------------------

# 24. Profile Edit Impact

If the entrepreneur changes a decision-relevant field after Approval
Intelligence has already been run:

Example:

``` text
MIDC
→ Non-MIDC
```

or:

``` text
Food Stored
Yes
→ No
```

the system should warn:

> This change may affect your approval requirements and roadmap.

Provide:

`Re-analyze Approvals`

The existing roadmap should not silently remain unchanged if a material
profile input changes.

------------------------------------------------------------------------

# 25. Profile Version Awareness

For the prototype, a simple last-updated record is sufficient.

Store/display:

-   Last updated date/time
-   Profile completion
-   Analysis status

Full historical versioning is not required for MVP.

------------------------------------------------------------------------

# 26. Notifications / Warnings

The module should provide contextual warnings.

Example:

> Changing your location type may change applicable approvals.

Another:

> Complete your Business Profile before generating your personalized
> roadmap.

Do not overwhelm the user with warnings.

------------------------------------------------------------------------

# 27. Entrepreneur Experience

The form should feel like a guided government/business onboarding
process rather than a generic signup form.

Use:

-   section grouping;
-   progress indicator;
-   clear labels;
-   concise help text;
-   required indicators;
-   sensible defaults;
-   clear next actions.

------------------------------------------------------------------------

# 28. UI Requirements

Use the locked platform theme:

**LIGHT / WHITE**

Requirements:

-   white/light background;
-   light sidebar;
-   white form cards;
-   dark charcoal text;
-   professional blue primary actions;
-   subtle gray borders;
-   subtle shadows;
-   clean typography;
-   generous spacing;
-   responsive layout.

Avoid:

-   dark theme;
-   dark sidebar;
-   excessive gradients;
-   excessive animation;
-   decorative form elements.

------------------------------------------------------------------------

# 29. Suggested Screen Structure

``` text
┌──────────────────────────────────────────────┐
│ Business Profile                             │
│ Complete your business information           │
├──────────────────────────────────────────────┤
│                                              │
│ Profile Progress                             │
│ ███████████████████░░ 92%                   │
│                                              │
│ 1. Business Identity                         │
│ 2. Applicant / Contact                       │
│ 3. Classification                            │
│ 4. Location                                  │
│ 5. Project                                   │
│ 6. Activity                                  │
│ 7. Capacity & Scale                          │
│ 8. Review                                    │
│                                              │
│                         [Save & Continue]     │
└──────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 30. Hero Profile Example

The completed hero profile should resolve to:

``` text
Business:
FreshChain Cold Logistics Pvt. Ltd.

Sector:
Logistics / Warehousing

Sub-sector:
Cold Storage / Cold Chain

State:
Maharashtra

District:
Pune

Location:
Pune

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

Additional business/contact/project fields may be present according to
the complete profile.

------------------------------------------------------------------------

# 31. Acceptance Criteria

The Business Profile module is complete when:

### Classification

-   Exactly 4 sectors are available.
-   Exactly 3 sub-sectors appear under each sector.
-   Sub-sector options depend on sector.

### Location

-   Maharashtra is supported.
-   MIDC / Non-MIDC is explicitly represented.
-   Location information is structured.

### Hero

-   FreshChain profile can be completed.
-   Cold Storage-specific questions appear.
-   Hero values are stored correctly.

### Validation

-   Required fields are validated.
-   Invalid values are rejected with clear messages.
-   Incomplete profiles are clearly identified.

### Intelligence Integration

-   Completed profile can launch Approval Intelligence.
-   Structured profile inputs are passed to the Rule Engine.
-   Material profile changes trigger an opportunity to re-analyze.

### Reuse

-   Business Profile data can populate relevant application fields.

### UX

-   Progress is visible.
-   Save/continue works.
-   Review/confirmation works.
-   Light/white design is consistent.

------------------------------------------------------------------------

# 32. Out of Scope

Do not build:

-   nationwide business registration;
-   full company incorporation services;
-   complex accounting;
-   GST filing;
-   tax return filing;
-   payroll;
-   CRM;
-   advanced financial planning;
-   complex multi-business management;
-   automatic legal classification without configured rules.

------------------------------------------------------------------------

# 33. Relationship With Approval Intelligence

The Business Profile is the **input**.

Approval Intelligence is the **decision layer**.

The interface between them must be explicit:

``` text
BUSINESS PROFILE
       ↓
Structured Profile Data
       ↓
APPROVAL INTELLIGENCE
       ↓
Applicable / Conditional / Stage-dependent /
Not Configured requirements
```

Business Profile should not decide which approvals apply.

Approval Intelligence should perform that responsibility.

------------------------------------------------------------------------

# 34. Final Locked Definition

**BUSINESS PROFILE** is the structured, reusable representation of an
entrepreneur's business and project.

Its core responsibility is:

> **Capture the minimum decision-relevant business information once,
> validate it, and provide structured inputs to Approval Intelligence
> and downstream application workflows.**

It is the foundation for personalization.

**STATUS: LOCKED FOR PROTOTYPE**
