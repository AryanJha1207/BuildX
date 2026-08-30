# SIH 26130 --- Module Specification 06

# DOCUMENT VAULT

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 06 --- Document Vault\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Entrepreneur / Applicant\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP\
**Upstream:** Business Profile, Approval Intelligence, Application
Builder\
**Downstream:** Document Pre-validation, Submission, Government Review,
Query / Response

------------------------------------------------------------------------

## 1. Module Purpose

The Document Vault is the entrepreneur's centralized, reusable
repository for business and project documents.

Its purpose is to allow the entrepreneur to:

-   upload documents once;
-   view document status;
-   organize documents;
-   reuse documents across applicable applications;
-   identify missing documents;
-   replace rejected/expired documents;
-   respond to government queries using existing or newly uploaded
    documents.

The vault is a core part of the platform's **"enter once, reuse
throughout the journey"** principle.

------------------------------------------------------------------------

# 2. Core Principle

The Document Vault follows:

``` text
Upload Once
    ↓
Store Securely
    ↓
Track Status
    ↓
Reuse Across Applications
    ↓
Pre-validation
    ↓
Government Review
```

The same verified document should not need to be uploaded repeatedly for
every application when reuse is appropriate.

------------------------------------------------------------------------

# 3. Document Lifecycle

A document can move through:

``` text
UPLOADED
    ↓
PENDING_VERIFICATION
    ↓
VERIFIED
```

Alternative paths:

``` text
PENDING_VERIFICATION
        ↓
REJECTED
        ↓
REPLACE / REUPLOAD
```

And where expiry applies:

``` text
VERIFIED
    ↓
EXPIRING
    ↓
EXPIRED
```

The exact lifecycle depends on the document configuration.

------------------------------------------------------------------------

# 4. Document Status Model

## UPLOADED

The file has been uploaded but has not yet completed verification.

## PENDING_VERIFICATION

The document is waiting for verification or review.

## VERIFIED

The document has been accepted for the applicable workflow.

## REJECTED

The document was rejected and requires correction/replacement.

## EXPIRING

The configured expiry date is approaching.

## EXPIRED

The document is no longer valid according to its configured expiry
information.

For the MVP, expiry logic should only be implemented where relevant data
exists.

------------------------------------------------------------------------

# 5. Document Categories

The prototype should support categories such as:

### Business Documents

-   PAN
-   Company Registration
-   GST-related document where applicable

### Site / Land Documents

-   MIDC Plot / Lease Document
-   Site Plan
-   Land / Property Document

### Project Documents

-   Project Report
-   Building Plan
-   Cold Storage Layout
-   Process Flow

### Other Configured Documents

Additional documents can be added when required by a configured
application.

Do not create a huge nationwide document catalogue.

------------------------------------------------------------------------

# 6. Hero Documents

The primary demo business is:

**FreshChain Cold Logistics Pvt. Ltd.**

Hero document set:

``` text
PAN
Company Registration
MIDC Plot / Lease Document
Site Plan
Building Plan
Project Report
Cold Storage Layout
Process Flow
```

The hero workflow must make these documents usable by the Application
Builder and Pre-validation.

------------------------------------------------------------------------

# 7. Document Record

Each document should conceptually contain:

``` text
document
├── id
├── businessId
├── documentType
├── name
├── storagePath
├── fileType
├── fileSize
├── status
├── uploadedAt
├── verifiedAt
├── expiryDate
├── rejectionReason
├── uploadedBy
└── metadata
```

The exact database structure may vary.

------------------------------------------------------------------------

# 8. Storage

Persistent files should be stored using:

**Supabase Storage**

The database should store document metadata and a reference/path to the
stored file.

Do not store large document binary content directly in PostgreSQL.

Do not rely on local filesystem storage for persistent user documents.

------------------------------------------------------------------------

# 9. Supabase Development Rule

Do not require Supabase CLI for the prototype.

Database schema/migrations should be provided as SQL files and manually
executed by the project team through the Supabase Dashboard SQL Editor.

The application should not automatically modify the production schema at
startup.

------------------------------------------------------------------------

# 10. Document Vault Main Screen

Recommended layout:

``` text
DOCUMENT VAULT

8 Documents
6 Verified
1 Pending Verification
1 Missing / Action Required

[Upload Document]

Search documents...

Filter:
All | Verified | Pending | Rejected | Expiring
```

Then document cards/table.

------------------------------------------------------------------------

# 11. Document List

Each document should show:

-   document name;
-   document type;
-   status;
-   uploaded date;
-   expiry if relevant;
-   used by / linked applications;
-   available action.

Example:

``` text
Project Report
Project Document

✓ Verified

Uploaded:
28 Aug 2026

Used by:
FSSAI Application

[View]
```

------------------------------------------------------------------------

# 12. Document Detail

Opening a document should show:

``` text
Project Report

Status:
Verified

Type:
Project Document

Uploaded:
28 Aug 2026

Verified:
29 Aug 2026

Used By:
FSSAI Application

[View Document]
[Download / Open]
```

Only expose download/open actions to authorized users.

------------------------------------------------------------------------

# 13. Upload Flow

The upload process should be simple:

``` text
[Upload Document]
        ↓
Select Document Type
        ↓
Select File
        ↓
Optional Metadata
        ↓
Upload
        ↓
Document Record Created
        ↓
PENDING_VERIFICATION
```

For documents that do not require separate verification in the
prototype, a configured shortcut may be used, but the system must not
falsely imply government verification.

------------------------------------------------------------------------

# 14. Supported File Types

For the prototype, support common document formats such as:

-   PDF
-   JPG / JPEG
-   PNG

The exact limits should be configurable.

Avoid unnecessarily broad file-type support.

------------------------------------------------------------------------

# 15. Upload Validation

Before accepting an upload, check:

-   file selected;
-   supported file type;
-   file size limit;
-   document type selected;
-   required metadata where applicable.

Example:

``` text
Unsupported file type.

Please upload a PDF, JPG, or PNG.
```

Do not expose storage/API errors.

------------------------------------------------------------------------

# 16. Duplicate Documents

If a document of the same type already exists, the system should avoid
silently creating confusion.

Example:

``` text
A Site Plan already exists.

Would you like to:
[Replace Existing]
[Upload as New Version]
[Cancel]
```

For MVP, **replace/version handling can be simplified** to one active
document plus previous metadata if needed.

------------------------------------------------------------------------

# 17. Document Versioning

Full document version management is not required for MVP.

A simple model is sufficient:

``` text
Active Document
Previous Document
```

When a document is replaced:

``` text
Old document → inactive
New document → active
```

The application should use the active version.

------------------------------------------------------------------------

# 18. Document Verification

Government officers may verify/reject application documents.

The entrepreneur should see the resulting state.

Example:

``` text
Building Plan

Status:
✓ Verified

Verified by:
Department Officer

Verified:
02 Sep 2026
```

The actual government officer identity should only be displayed if the
workflow stores and permits that information.

------------------------------------------------------------------------

# 19. Rejected Document

Example:

``` text
Process Flow

✕ Rejected

Reason:
Document does not contain the required
process details.

[Replace Document]
```

The rejection reason should come from the government workflow or
configured validation.

Do not invent an officer rejection reason.

------------------------------------------------------------------------

# 20. Document Reuse

The key feature is document reuse.

Example:

``` text
FSSAI Application

Required:
Process Flow

Document Vault:
Process Flow
✓ Available

[Use This Document]
```

After selection:

``` text
FSSAI Application
Process Flow
✓ Attached
```

The application should reference the vault document rather than
unnecessarily duplicating the file.

------------------------------------------------------------------------

# 21. Document-to-Approval Mapping

A document may be relevant to one or multiple approvals.

Conceptually:

``` text
Document
    ↓
Required For
    ├── FSSAI
    ├── MPCB
    └── Other configured approval
```

This mapping should be data-driven.

The Document Vault should not hard-code regulatory relationships inside
UI components.

------------------------------------------------------------------------

# 22. Required vs Available

The vault should distinguish:

``` text
DOCUMENT VAULT
```

from:

``` text
REQUIRED DOCUMENTS FOR APPLICATION
```

Example:

``` text
Document Vault:
8 documents

FSSAI application requires:
3 documents

Available:
2 / 3

Missing:
Process Flow
```

The missing requirement comes from Approval Intelligence/Application
Template.

------------------------------------------------------------------------

# 23. Integration With Application Builder

Application Builder can:

``` text
Required Document
        ↓
Search Document Vault
        ↓
Select Existing Document
        ↓
Attach to Application
```

The vault remains the reusable repository.

------------------------------------------------------------------------

# 24. Integration With Pre-validation

Pre-validation checks whether required documents are
available/acceptable.

Example:

``` text
FSSAI Application

✓ Project Report
✓ Site Plan
✕ Process Flow

Pre-validation:
BLOCKED
```

After upload:

``` text
✓ Project Report
✓ Site Plan
✓ Process Flow

Pre-validation:
READY
```

The vault provides document state; Pre-validation determines submission
readiness.

------------------------------------------------------------------------

# 25. Query Response Integration

If a government query requests a document:

``` text
Query:
Revised Process Flow Required
```

The entrepreneur can:

``` text
[Choose from Document Vault]
```

or:

``` text
[Upload New Document]
```

After response:

``` text
Document
      ↓
Query Response
      ↓
Government Review
```

------------------------------------------------------------------------

# 26. Document Expiry

Where an expiry date is applicable, display:

``` text
Expires:
30 Sep 2026
```

Possible statuses:

-   Valid
-   Expiring Soon
-   Expired

The prototype should not invent expiry periods.

If no expiry information exists:

``` text
Expiry:
Not configured
```

------------------------------------------------------------------------

# 27. Compliance Integration

Approved documents that are relevant to ongoing compliance can be
surfaced later.

Example:

``` text
Compliance
Document renewal approaching
```

Only configured document expiry/renewal information should generate such
alerts.

------------------------------------------------------------------------

# 28. Search

Basic search should support:

-   document name;
-   document type.

Example:

`Search "Process Flow"`

returns:

``` text
Process Flow
✓ Verified
```

Do not build semantic document search for MVP.

------------------------------------------------------------------------

# 29. Filters

Useful filters:

-   All
-   Verified
-   Pending Verification
-   Rejected
-   Expiring
-   Expired

Optional category filters:

-   Business
-   Site
-   Project

Keep filtering simple.

------------------------------------------------------------------------

# 30. Document Preview

If supported by the browser/storage flow, provide a preview.

For PDFs:

`View`

For images:

`Preview`

If preview is unavailable:

`Open Document`

Do not require a complex document viewer for MVP.

------------------------------------------------------------------------

# 31. Access Control

Entrepreneurs can access documents belonging to their business.

They must not be able to access another entrepreneur's documents.

Government officers can access documents attached to applications they
are authorized to review.

Do not expose storage buckets or unrestricted file URLs publicly.

Use appropriate Supabase Storage access controls.

------------------------------------------------------------------------

# 32. Security Requirements

-   Validate file types.
-   Validate file size.
-   Use secure storage.
-   Do not expose service-role credentials.
-   Restrict document access by business/application relationship.
-   Do not place sensitive storage credentials in frontend code.

------------------------------------------------------------------------

# 33. Loading States

During upload:

``` text
Uploading Process Flow...
████████████░░░
```

After upload:

``` text
Upload complete.
Status: Pending Verification
```

During document loading:

Use skeleton/loading feedback.

------------------------------------------------------------------------

# 34. Error States

### Upload error

``` text
Document upload failed.

Please try again.
```

### File too large

``` text
This file is larger than the allowed limit.
```

### Unsupported format

``` text
This file type is not supported.
```

### Access error

``` text
You don't have access to this document.
```

Do not expose technical details.

------------------------------------------------------------------------

# 35. Empty State

If no documents exist:

``` text
YOUR DOCUMENT VAULT IS EMPTY

Upload your business and project documents
once and reuse them across applications.

[Upload Document]
```

------------------------------------------------------------------------

# 36. Hero Demo --- Process Flow

This is a critical demo moment.

Initially:

``` text
FSSAI Application

Required Documents

✓ Project Report
✓ Site Plan
✕ Process Flow

[Pre-validate]
```

Pre-validation:

``` text
SUBMISSION BLOCKED

Process Flow is missing.
```

Entrepreneur:

``` text
[Upload Process Flow]
```

After upload:

``` text
Process Flow
✓ Available
```

Then:

``` text
Pre-validation
✓ Passed

APPLICATION READY TO SUBMIT
```

This demonstrates the practical value of the Document Vault.

------------------------------------------------------------------------

# 37. UI Design

Use the locked:

**LIGHT / WHITE**

theme.

Document Vault should use:

-   white/light background;
-   white cards/table;
-   dark charcoal text;
-   professional blue primary actions;
-   clear status badges;
-   subtle borders;
-   subtle shadows;
-   clean spacing.

Avoid:

-   dark theme;
-   dark sidebar;
-   excessive gradients;
-   excessive animation;
-   overly decorative file cards.

------------------------------------------------------------------------

# 38. Recommended Main UI

``` text
┌─────────────────────────────────────────────┐
│ Document Vault                         [+]  │
│ Manage and reuse your business documents   │
├─────────────────────────────────────────────┤
│                                             │
│  8 Total   6 Verified   1 Pending   1 Action│
│                                             │
│ [Search documents...] [Filter]              │
│                                             │
│ ┌─────────────────────────────────────────┐ │
│ │ Project Report          ✓ Verified      │ │
│ │ Project Document        28 Aug 2026     │ │
│ │ Used by: FSSAI                         │ │
│ │                         [View]          │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ ┌─────────────────────────────────────────┐ │
│ │ Process Flow            ✕ Missing       │ │
│ │ Required by: FSSAI                     │ │
│ │                         [Upload]        │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 39. Acceptance Criteria

The Document Vault is complete when:

### Upload

-   Entrepreneur can upload supported documents.
-   File validation works.
-   Document metadata is stored.
-   Persistent file is stored in Supabase Storage.

### Status

-   Uploaded/pending/verified/rejected states work.
-   Status is visible to the entrepreneur.

### Reuse

-   Existing documents can be attached to an application.
-   The application references the selected document.

### Application Integration

-   Required documents are shown.
-   Missing documents are identifiable.
-   Application Builder can select vault documents.

### Pre-validation

-   Missing Process Flow can block submission.
-   Uploading Process Flow can satisfy the configured requirement.

### Query

-   Query response can reuse or upload documents.

### Government

-   Officer-side document review can update document/application state.

### Security

-   Users cannot access unrelated business documents.
-   Sensitive storage credentials are not exposed.

### UX

-   Search/filter works.
-   Loading/error/empty states exist.
-   Light/white UI is consistent.

------------------------------------------------------------------------

# 40. Out of Scope

Do not build:

-   AI document understanding;
-   OCR;
-   complex document classification;
-   digital signature infrastructure;
-   nationwide document taxonomy;
-   advanced document collaboration;
-   enterprise DMS features;
-   automatic legal document verification;
-   public document links.

AI/OCR can be added later if required, but it is not necessary for the
core MVP.

------------------------------------------------------------------------

# 41. Final Locked Definition

**DOCUMENT VAULT** is the centralized reusable document repository that
allows entrepreneurs to securely store, track, and reuse
business/project documents throughout the approval lifecycle.

Its core responsibility is:

> **Store documents once, expose their current status, make them
> reusable by applicable applications, and provide reliable document
> state to Pre-validation and government workflow.**

The critical prototype demonstration is:

``` text
Missing Process Flow
        ↓
Pre-validation Blocked
        ↓
Upload to Document Vault
        ↓
Attach to Application
        ↓
Pre-validation Passed
        ↓
Ready to Submit
```

**STATUS: LOCKED FOR PROTOTYPE**
