# SIH 26130 --- Module Specification 07

# DOCUMENT PRE-VALIDATION

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 07 --- Document Pre-validation\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Submission Readiness / Quality Gate\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP\
**Upstream:** Business Profile, Approval Intelligence, Application
Builder, Document Vault\
**Downstream:** Submission, Unified Workflow

------------------------------------------------------------------------

## 1. Module Purpose

Document Pre-validation is the **quality gate before application
submission**.

Its purpose is to identify issues before an application reaches the
government workflow.

It checks whether:

-   required application fields are complete;
-   required documents are available;
-   documents are in an acceptable state;
-   business/application information is consistent;
-   required declarations are complete;
-   configured approval/application requirements have been satisfied.

The module should help prevent avoidable incomplete submissions.

------------------------------------------------------------------------

# 2. Core Principle

The flow is:

``` text
Application
    ↓
Read Requirements
    ↓
Check Fields
    ↓
Check Documents
    ↓
Check Consistency
    ↓
Check Declaration
    ↓
Generate Validation Results
    ↓
BLOCKED / READY TO SUBMIT
```

The Pre-validation module does **not** determine which approvals apply.

That decision comes from Approval Intelligence.

------------------------------------------------------------------------

# 3. Relationship With Other Modules

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
PRE-VALIDATION
       ↓
Submission
```

The Pre-validation module consumes information from these modules rather
than duplicating their core responsibilities.

------------------------------------------------------------------------

# 4. Validation Result

The overall application readiness has two primary states:

## BLOCKED

One or more required checks have failed.

The application cannot be submitted until blocking issues are resolved.

## READY_TO_SUBMIT

All configured blocking checks have passed.

The entrepreneur may submit the application.

------------------------------------------------------------------------

# 5. Validation Check Categories

The MVP uses five categories:

1.  Required Fields
2.  Required Documents
3.  Document State
4.  Information Consistency
5.  Declaration

A sixth category may be used for:

6.  Configured Application/Approval Requirements

Only checks actually configured for the selected application should be
evaluated.

------------------------------------------------------------------------

# 6. Required Field Validation

Check that all required application fields have values.

Example:

``` text
Applicant Name
✓

Business Name
✓

Project Description
✓

Storage Capacity
✓
```

If a required field is missing:

``` text
✕ Project Description

Required field is missing.
```

------------------------------------------------------------------------

# 7. Field Validation vs Pre-validation

Field validation occurs while the user fills the application.

Pre-validation performs the **final consolidated check**.

Example:

``` text
Application Builder
→ validates individual field

Pre-validation
→ confirms the entire application is ready
```

This provides a final quality gate before submission.

------------------------------------------------------------------------

# 8. Required Document Validation

The system should obtain required documents from the configured
application/approval requirements.

Example:

``` text
FSSAI Application

Required Documents

✓ Project Report
✓ Site Plan
✕ Process Flow
```

If a required document is missing:

``` text
BLOCKING ISSUE

Process Flow is required.
```

------------------------------------------------------------------------

# 9. Document State Validation

A document existing in the vault is not automatically sufficient.

Check its status.

Example:

``` text
Process Flow
Status: Rejected
```

Result:

``` text
✕ Process Flow

The selected document is rejected.
Replace it before submission.
```

Similarly:

``` text
Pending Verification
```

may be blocking if the application configuration requires a verified
document.

The blocking behavior must come from configuration.

------------------------------------------------------------------------

# 10. Expired Document Validation

Where expiry information is configured:

``` text
Document
Expired
```

Result:

``` text
✕ PAN / configured document

The selected document has expired.
Please provide a valid document.
```

Do not invent expiration dates or periods.

------------------------------------------------------------------------

# 11. Information Consistency

The system should check obvious inconsistencies between Business Profile
and Application data.

Examples:

``` text
Business Profile:
FreshChain Cold Logistics Pvt. Ltd.

Application:
FreshChain Cold Logistics
```

Depending on configured rules, this may be considered compatible.

A material contradiction should be flagged.

Example:

``` text
Business Profile:
Location Type = MIDC

Application:
Location Type = Non-MIDC
```

Result:

``` text
⚠ Information mismatch

Your application location type differs
from your Business Profile.

[Review]
```

------------------------------------------------------------------------

# 12. Consistency Severity

Not every mismatch should block submission.

Use:

### BLOCKING

A critical contradiction prevents reliable submission.

### WARNING

The user should review the mismatch, but it may not necessarily block
submission.

The severity must be configured.

------------------------------------------------------------------------

# 13. Declaration Check

Required declarations must be completed.

Example:

``` text
Declaration

☐ Required confirmation not completed
```

Result:

``` text
✕ Declaration

Please complete the required declaration.
```

------------------------------------------------------------------------

# 14. Application-Specific Requirements

Some applications may have additional configured checks.

Example:

``` text
FSSAI Application

Activity selected
✓

Food storage information
✓

Required category
✓
```

Only configured application requirements should be evaluated.

Do not create arbitrary regulatory checks in the UI.

------------------------------------------------------------------------

# 15. Validation Rule Structure

A validation rule should conceptually contain:

``` text
validationRule
├── id
├── applicationTemplateId
├── category
├── target
├── condition
├── severity
├── message
├── resolution
└── active
```

The implementation may vary.

------------------------------------------------------------------------

# 16. Validation Result Structure

Each result should conceptually contain:

``` text
validationResult
├── id
├── category
├── target
├── status
├── severity
├── message
├── resolution
└── metadata
```

Example:

``` text
{
  target: "Process Flow",
  category: "DOCUMENT",
  status: "FAILED",
  severity: "BLOCKING",
  message: "Process Flow is required.",
  resolution: "Upload or select Process Flow."
}
```

------------------------------------------------------------------------

# 17. Validation Status

Individual checks may have:

-   PASSED
-   FAILED
-   WARNING
-   NOT_CHECKED
-   NOT_APPLICABLE

Overall application status:

``` text
BLOCKED
```

or:

``` text
READY_TO_SUBMIT
```

------------------------------------------------------------------------

# 18. Not Applicable

A validation rule can be:

**NOT_APPLICABLE**

only when the configured application/condition explicitly says the check
does not apply.

It must not be used merely because data is missing.

------------------------------------------------------------------------

# 19. Missing Configuration

If a validation requirement is not configured:

``` text
NOT_CONFIGURED
```

or an equivalent internal state may be used.

The system must not invent a validation rule.

If the missing configuration affects submission safety, the application
should remain appropriately cautious rather than silently passing.

------------------------------------------------------------------------

# 20. Validation Summary

The top of the page should summarize results.

Example:

``` text
PRE-SUBMISSION CHECK

2 issues found

✓ Required fields       12 / 12
✕ Documents              2 / 3
✓ Consistency             Passed
✓ Declaration             Complete

APPLICATION BLOCKED
```

After correction:

``` text
PRE-SUBMISSION CHECK

✓ Required fields
✓ Documents
✓ Consistency
✓ Declaration

APPLICATION READY TO SUBMIT
```

The numbers must be calculated from actual checks.

------------------------------------------------------------------------

# 21. Hero Demo --- Missing Process Flow

This is the primary pre-validation demonstration.

Initial state:

``` text
FSSAI Application

Required Documents

✓ Project Report
✓ Site Plan
✕ Process Flow
```

Pre-validation result:

``` text
APPLICATION BLOCKED

Process Flow is required.

[Fix Issue]
```

Clicking `Fix Issue` should take the entrepreneur to the relevant
document action.

------------------------------------------------------------------------

# 22. Hero Demo --- Fix

Entrepreneur uploads or selects:

**Process Flow**

Document state:

``` text
Process Flow
✓ Available
```

Pre-validation runs again.

Result:

``` text
ALL REQUIRED CHECKS PASSED

✓ Fields
✓ Documents
✓ Consistency
✓ Declaration

APPLICATION READY TO SUBMIT

[Submit Application]
```

This should be a real state transition, not only a visual animation.

------------------------------------------------------------------------

# 23. Validation Re-run

Pre-validation should be re-runnable after changes.

Changes that should trigger or permit re-validation include:

-   application field update;
-   document attachment;
-   document replacement;
-   declaration completion;
-   Business Profile change;
-   approval requirement change.

For MVP, provide:

`Run Pre-validation`

and automatically refresh after major relevant actions where practical.

------------------------------------------------------------------------

# 24. Issue List

Each failed validation should have:

``` text
Issue
Severity
Why it failed
How to fix it
Action
```

Example:

``` text
BLOCKING

Process Flow missing

Required by:
FSSAI Application

Fix:
Upload or select a Process Flow document.

[Fix Issue]
```

------------------------------------------------------------------------

# 25. Warning List

Warnings should be separated from blocking errors.

Example:

``` text
WARNINGS

Business address formatting differs
from the saved profile.

[Review]
```

A warning does not automatically prevent submission unless configured as
blocking.

------------------------------------------------------------------------

# 26. Issue Navigation

`Fix Issue` should deep-link to the correct location.

Examples:

``` text
Missing field
→ Application section

Missing document
→ Document Vault / Application Documents

Declaration
→ Declaration section

Mismatch
→ Relevant application/profile field
```

This reduces user effort.

------------------------------------------------------------------------

# 27. Submission Gate

Submission must check the latest validation state.

Even if the UI previously displayed:

``` text
READY_TO_SUBMIT
```

a material change should invalidate that readiness if relevant.

Conceptually:

``` text
READY_TO_SUBMIT
      ↓
Application changed
      ↓
VALIDATION_REQUIRED
      ↓
Run validation
      ↓
READY / BLOCKED
```

Do not rely only on an old cached validation result.

------------------------------------------------------------------------

# 28. Validation Timestamp

Display:

``` text
Last checked:
30 Aug 2026, 7:20 PM
```

The timestamp should represent the actual latest validation.

------------------------------------------------------------------------

# 29. Validation Freshness

If the application changes after validation:

``` text
Application updated

Pre-validation may be outdated.

[Run Pre-validation]
```

This avoids presenting stale readiness information.

------------------------------------------------------------------------

# 30. Integration With Submission

The final submission flow is:

``` text
Application Builder
        ↓
Pre-validation
        ↓
READY_TO_SUBMIT
        ↓
Submit
        ↓
Submission Module
```

If:

``` text
BLOCKED
```

submission must not proceed.

------------------------------------------------------------------------

# 31. Integration With Government Workflow

Once validation passes and the entrepreneur submits:

``` text
READY_TO_SUBMIT
        ↓
SUBMITTED
        ↓
Government Workflow
```

Pre-validation does not approve the application.

It only confirms that the configured pre-submission checks have passed.

------------------------------------------------------------------------

# 32. Integration With Roadmap

Roadmap status should reflect validation.

Example:

``` text
FSSAI

Blocked
Process Flow missing

        ↓

Process Flow uploaded

        ↓

Ready to Submit

        ↓

Submitted
```

This allows the roadmap to communicate the next action.

------------------------------------------------------------------------

# 33. Integration With Document Vault

The Pre-validation module consumes document state from the Document
Vault.

Example:

``` text
Required:
Process Flow

Vault:
Missing

Validation:
FAILED
```

After upload:

``` text
Vault:
Available

Validation:
PASSED
```

------------------------------------------------------------------------

# 34. Integration With Business Profile

The module may compare application values with Business Profile values.

It should not automatically rewrite the profile based on application
edits.

If a mismatch is material:

``` text
Profile / Application mismatch
```

provide:

`Review`

and optionally:

`Update Business Profile`

according to the configured workflow.

------------------------------------------------------------------------

# 35. UI Design

Use the locked:

**LIGHT / WHITE**

theme.

Recommended structure:

``` text
┌─────────────────────────────────────────────┐
│ Pre-submission Check                        │
│ Make sure your application is ready         │
├─────────────────────────────────────────────┤
│                                             │
│ APPLICATION BLOCKED                         │
│ 1 issue needs attention                     │
│                                             │
│ ✓ Required Fields                           │
│ ✓ Information Consistency                   │
│ ✓ Declaration                               │
│ ✕ Documents                                 │
│                                             │
│ ┌─────────────────────────────────────────┐ │
│ │ Process Flow                            │ │
│ │ Required document is missing            │ │
│ │                                         │ │
│ │ [Fix Issue]                             │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ [Run Pre-validation]                        │
└─────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 36. Status Visuals

Use clear semantic status styling:

-   Passed → green
-   Blocking → red
-   Warning → amber
-   Informational → blue/neutral

The colors should remain accessible and not be the only way status is
communicated.

------------------------------------------------------------------------

# 37. Loading State

During validation:

``` text
CHECKING APPLICATION

✓ Required fields
● Documents
○ Consistency
○ Declaration
```

The UI should clearly communicate that the check is in progress.

------------------------------------------------------------------------

# 38. Error State

If validation service fails:

``` text
We couldn't complete the pre-submission check.

Your application has not been submitted.

[Try Again]
```

Do not interpret a technical failure as:

`READY_TO_SUBMIT`

------------------------------------------------------------------------

# 39. Incomplete Application State

If the application is still being edited:

``` text
APPLICATION NOT READY

Complete the required sections before
running final pre-validation.

[Continue Application]
```

------------------------------------------------------------------------

# 40. Acceptance Criteria

The Pre-validation module is complete when:

### Field Checks

-   Required fields are checked.
-   Missing fields produce actionable errors.

### Document Checks

-   Required documents are identified.
-   Missing documents block submission when configured.
-   Rejected/expired documents are handled correctly.
-   Verification requirements are respected where configured.

### Consistency

-   Material mismatches can be detected.
-   Warning vs blocking severity works.

### Declaration

-   Required declaration completion is checked.

### Overall State

-   BLOCKED works.
-   READY_TO_SUBMIT works.
-   Individual validation results are visible.

### Hero

-   Missing Process Flow blocks the hero application.
-   Uploading/selecting Process Flow allows validation to pass.

### Freshness

-   Validation timestamp is visible.
-   Changes can invalidate previous readiness.

### Integration

-   Roadmap can reflect blocked/ready/submitted state.
-   Submission consumes the latest validation result.
-   Document Vault provides document state.

### UX

-   Fix Issue deep-links to the relevant action.
-   Loading/error/incomplete states exist.
-   Light/white theme is consistent.

------------------------------------------------------------------------

# 41. Out of Scope

Do not build:

-   AI-based legal document verification;
-   OCR-based document interpretation;
-   biometric verification;
-   advanced fraud detection;
-   complex semantic consistency analysis;
-   automatic legal certification;
-   real government validation APIs;
-   a universal validation engine for every government application.

------------------------------------------------------------------------

# 42. Final Locked Definition

**DOCUMENT PRE-VALIDATION** is the final quality gate before submission.

Its core responsibility is:

> **Check the configured application fields, documents, consistency
> requirements, and declarations before submission, clearly identify
> problems, guide the entrepreneur to fix them, and permit submission
> only when the configured blocking checks have passed.**

The critical prototype journey is:

``` text
Process Flow Missing
        ↓
PRE-VALIDATION BLOCKED
        ↓
Fix Issue
        ↓
Upload / Select Process Flow
        ↓
Run Pre-validation
        ↓
ALL CHECKS PASSED
        ↓
READY TO SUBMIT
```

Pre-validation does not approve an application.

It only confirms that the configured pre-submission checks have passed.

**STATUS: LOCKED FOR PROTOTYPE**
