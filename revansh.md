# Revansh — Shared Frontend Foundation and Government Portal Work Brief

## 1. Your ownership

Build the **shared frontend foundation, public entry/authentication screens, and complete government-facing portal** for BuildX. This is a frontend-only prototype. Use local mock data and client-side interactions. Do not build a backend, database, Supabase integration, authentication service, API routes, or real government integration.

You own these areas:

```text
frontend/src/app/
frontend/src/components/
frontend/src/layouts/
frontend/src/styles/
frontend/src/features/public/
frontend/src/features/government/
frontend/src/data/governmentMockData.js
frontend/src/App.jsx
frontend/src/App.css
frontend/src/index.css
```

Aryan owns `frontend/src/features/entrepreneur/` and entrepreneur mock data. Do not edit those files. Expose stable shared components and routing hooks that Aryan can consume.

## 2. Product and demo context

BuildX is a Maharashtra single-window approval-management prototype. The government portal receives the same application prepared on the entrepreneur side and supports review, document verification, queries, inspections, final decisions, SLA monitoring, and operational analytics.

Use this consistent hero record:

```text
Application ID: APP-MH-2026-00124
Business: FreshChain Cold Logistics Pvt. Ltd.
Approval: FSSAI
Sector: Logistics / Warehousing
Sub-sector: Cold Storage / Cold Chain
Location: Pune, Maharashtra
Location type: MIDC
Project: New Cold Storage
Capacity: 5,000 MT
Assigned officer: Amit Sharma
```

All metrics, dates, targets, and regulatory content are controlled demo/configured data and must be labelled honestly.

## 3. Shared application foundation

### 3.1 Routing

Add and configure a suitable React client router. Define:

- Public routes
- Entrepreneur route namespace at `/entrepreneur/*`
- Government route namespace at `/government/*`
- A not-found page
- Demo role selection/login redirects
- Layout routes for each portal

Import entrepreneur page exports from:

```text
frontend/src/features/entrepreneur/index.js
```

If Aryan's exports are temporarily unavailable, use small placeholders in the router without creating duplicate entrepreneur pages.

### 3.2 Shared design system

Create reusable, accessible primitives instead of page-specific copies:

```text
Button
IconButton
Card
Badge / StatusBadge
Input
Select
Textarea
Checkbox
RadioGroup
DateInput
SearchInput
Tabs
Table
Pagination
Modal / ConfirmDialog
Drawer
DropdownMenu
Toast
Tooltip
ProgressBar
Stepper
Breadcrumbs
EmptyState
ErrorState
Skeleton
PageHeader
MetricCard
Timeline
```

Keep the API simple and document component props briefly. Components must support keyboard use, focus states, disabled/loading states, and accessible labels.

### 3.3 Design tokens and layouts

Build a light/white design system with CSS variables for colors, typography, spacing, radii, shadows, and breakpoints. Use professional blue as the primary accent, dark charcoal text, subtle borders, and semantic green/amber/red/blue states. Do not use a dark sidebar, excessive gradients, or excessive animation.

Create:

- `PublicLayout`
- `EntrepreneurLayout`
- `GovernmentLayout`
- Responsive sidebar
- Mobile navigation drawer
- Top bar with page context, notifications, and profile menu
- Main content container

Both portals should look like one product while allowing the government UI to be denser and more operational.

## 4. Public and authentication routes

| Route | Page | Requirements |
|---|---|---|
| `/` | Landing page | Product promise, workflow explanation, benefits, Maharashtra/demo scope, entrepreneur and officer CTAs |
| `/login` | Role selection | Choose Entrepreneur or Government Officer |
| `/login/entrepreneur` | Entrepreneur login | Email/phone, password, demo login, error/loading states |
| `/login/government` | Government login | Officer credentials, demo login, prototype-auth notice |
| `*` | Not found | Helpful return action |

Authentication is visual/client-side only. Use a demo role in context/localStorage; do not pretend it is secure production authentication.

## 5. Government routes

| Route | Page component | Purpose |
|---|---|---|
| `/government/dashboard` | `GovernmentDashboardPage` | Operational command centre |
| `/government/applications` | `GovernmentApplicationsPage` | Searchable/filterable application queue |
| `/government/applications/:applicationId` | `GovernmentApplicationDetailPage` | Complete review workspace |
| `/government/queries` | `GovernmentQueriesPage` | Officer query queue |
| `/government/queries/:queryId` | `GovernmentQueryDetailPage` | Response review and resolution |
| `/government/inspections` | `GovernmentInspectionsPage` | Inspection queue and calendar/list |
| `/government/inspections/:inspectionId` | `GovernmentInspectionDetailPage` | Schedule/conduct/complete inspection |
| `/government/completed` | `CompletedApplicationsPage` | Approved/rejected archive |
| `/government/sla` | `SlaMonitoringPage` | Configured target monitoring |
| `/government/analytics` | `GovernmentAnalyticsPage` | Operational metrics and drill-down |
| `/government/notifications` | `GovernmentNotificationsPage` | Meaningful officer notifications |
| `/government/account` | `GovernmentAccountPage` | Officer/authority context |

## 6. Government navigation

Use this navigation:

1. Dashboard
2. Applications
3. Queries
4. Inspections
5. Completed
6. SLA Monitoring
7. Analytics

Place Notifications and Profile in the top bar or navigation footer. Clearly show the active section and notification counts.

## 7. Detailed government page requirements

### 7.1 Government dashboard

Build an operational dashboard with:

- Officer greeting and authority context
- Metric cards: New, Assigned, Under Review, Queries, Inspections, Ready for Decision, Completed
- Priority/SLA attention queue
- Recently assigned applications
- Responses received
- Upcoming inspections
- Recent workflow activity
- Quick links to filtered queues

Counts must be calculated from centralized mock records, not independently hard-coded in each card.

### 7.2 Application queue

Create a responsive table with:

- Application ID
- Applicant/business
- Approval
- Authority
- Submitted date
- Status
- Assigned officer
- Configured SLA status
- Open action

Interactions:

- Search by application ID, business name, or applicant
- Filters: All, New, Assigned, Under Review, Query, Inspection, Ready for Decision, Completed
- Optional authority and date filters
- Sort by submitted/updated date
- Empty filtered state
- Clear filters
- Row click/open action

Use multiple seeded records so filters and analytics are meaningful, while keeping `APP-MH-2026-00124` as the hero application.

### 7.3 Application review workspace

The application detail is the most important government page. Include:

1. Sticky/clear application header with ID, business, approval, status, assigned officer, and SLA badge
2. Applicant/business context summary
3. Tabs or sections for Overview, Application, Documents, Review, Queries, Inspection, Timeline, and Decision
4. Valid contextual actions based on workflow state

The Review section must support:

- Start Review: ASSIGNED → UNDER_REVIEW
- Structured checklist
- Application/business information review
- Document checklist with View, Verify, and Reject actions
- Document rejection reason
- Findings with Blocking or Warning severity
- Officer comments
- Review summary and history
- Raise Query
- Require/Schedule Inspection
- Continue to Final Review when gates pass

All actions are client-side demo mutations but must update the visible record and timeline. Disable invalid actions and explain why they are unavailable.

### 7.4 Government query workflow

The query queue must show counts and group/filter by Awaiting Response, Response Received, Under Review, Follow-up Required, Resolved, and Overdue. Each row links back to its application.

The Create Query form needs:

- Query type: Additional Information, Document Required, Document Revision, Clarification, Other
- Title
- Request details
- Optional required document
- Blocking toggle
- Optional configured/demo due date
- Confirmation before sending

Query detail must show the complete query timeline, entrepreneur response message, attached/reused document, and actions to Start Response Review, Accept/Resolve, or Request Follow-up. Treat a query as a formal workflow event, not a chat UI.

Use the hero query “Revised Process Flow Required.”

### 7.5 Inspection queue and detail

The inspection list should support status cards/filters for Required, Scheduled, Upcoming, In Progress, Completed, and Follow-up Required. Provide a practical list and optionally a simple calendar toggle; do not build advanced calendar infrastructure.

Inspection detail must contain:

- Application and business context
- Site/address information
- Schedule form with valid date, time, location, officer, and remarks
- Entrepreneur-notification preview
- Start Inspection action
- Configured checklist with pass/fail/not-applicable controls
- Observations
- Attachment/photo placeholders using local client state
- Outcome: Satisfactory, Unsatisfactory, or Follow-up Required
- Completion confirmation
- Inspection timeline/report

Use the demo schedule 05 Sep 2026, 11:00 AM. Completing inspection should append a timeline event and allow the application to proceed to Final Review, but must not automatically approve it.

### 7.6 Final decision experience

The Decision section/page state must show a readiness summary:

- Review complete
- Required documents complete
- Blocking queries resolved
- Required inspection complete
- Ready for decision

If a gate fails, disable approval and visibly explain the blocker. Provide:

- Approve confirmation with optional remarks
- Reject confirmation with required/configured reason
- Loading and duplicate-click prevention
- Final Approved/Rejected state
- Decision metadata: officer, authority, date/time, remarks/reason
- Timeline event and notification preview

Do not create a certificate, digital signature, or real legal approval.

### 7.7 Completed applications

Provide a searchable/filterable archive with approved and rejected records, decision date, authority, officer, result, and View Details action. Reuse the application detail in read-only final-state mode.

### 7.8 SLA monitoring

Create an awareness/priority page for configured processing targets. Include:

- Within Target, Approaching, Overdue, Completed, and Not Configured counts
- Application/stage target table
- Current stage and elapsed duration
- Configured target date/duration
- Filters by SLA status, authority, and stage
- Direct application links
- Honest disclaimer that configured target status is not automatically a legal violation

Treat inspection scheduling, query due dates, approval renewals, and document expiry as separate concepts even when displayed nearby. Do not invent statutory durations.

### 7.9 Government analytics

Build a responsive operational dashboard using a lightweight chart approach compatible with the project. If adding a chart dependency, keep it small and justified. Required filters:

- Date range: Today, 7 Days, 30 Days, 90 Days, Custom
- Authority
- Sector
- Maharashtra location

Required metrics/visuals:

- Total, Under Review, Approved, Rejected, Queries, Inspections
- Application volume over time
- Status distribution
- Approval and rejection rates using decided applications as denominator
- Average processing time using records with submission and decision timestamps
- Average time by stage
- Bottleneck highlight
- Query totals, open/resolved, type distribution, and response time
- Inspection scheduled/completed/follow-up outcomes
- Configured SLA distribution and trend
- Sector/sub-sector distribution
- Location and MIDC/non-MIDC distribution
- Authority volume/processing comparison
- Last-updated timestamp

Every useful metric/chart must support a drill-down or “View Applications” action that opens/filters the application list. Handle small or missing datasets gracefully. Label all numbers as demo dataset analytics. Optional export may download a locally generated CSV only.

### 7.10 Government notifications and account

Notifications should include new assignment, query response received, inspection due, new/revised document, SLA approaching, and application-ready-for-decision events. Support unread/read state and deep links without notifying for every minor UI change.

Account shows Amit Sharma, government-officer role, configured authority/department, and demo-session information.

## 8. Government feature components

Create reusable government-specific components:

```text
GovernmentMetricGrid
ApplicationQueueTable
ApplicationHeader
BusinessContextSummary
ReviewChecklist
ReviewFindingList
DocumentReviewTable
OfficerActionPanel
QueryComposer
QueryResponseReview
InspectionScheduleForm
InspectionChecklist
DecisionReadiness
DecisionDialog
SlaStatusCard
SlaQueueTable
AnalyticsFilterBar
AnalyticsChartCard
WorkflowTimeline
```

Keep these inside `features/government` unless they are truly generic enough for shared use.

## 9. Mock state and contracts

Create centralized government demo data containing:

- Current officer and authority
- Multiple application records across statuses
- Hero business/application detail
- Documents and verification states
- Review checklist/findings/history
- Queries and responses
- Inspections/checklists/outcomes
- Decisions
- Workflow events
- SLA configurations/statuses
- Notifications
- Analytics-ready timestamps and dimensions

Use stable IDs. Prefer a focused React context/provider or custom hook for government demo mutations. Persist key workflow changes in localStorage if practical. Do not scatter duplicate application objects across pages and do not call imaginary APIs.

Export government pages from:

```text
frontend/src/features/government/index.js
```

Shared frontend contracts:

- Route IDs use strings.
- Application status labels map through one shared status utility.
- Dates are stored in ISO form and formatted for display.
- Status badges include text/icon, not color alone.
- Page components should not assume a fixed viewport.
- Shared components must accept `className` and normal accessibility props where reasonable.

## 10. Application states to support

The UI and mock actions must understand:

```text
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

Create a centralized label/color/action mapping. The frontend may simulate transitions, but it must not expose actions that are invalid for the current state.

## 11. UX, responsive, and accessibility requirements

- Light/white professional government-enterprise appearance.
- Government screens may be denser than entrepreneur screens but must remain readable.
- Desktop-first with usable tablet and mobile layouts.
- Tables use responsive overflow or card conversion.
- Sidebar collapses into a drawer on small screens.
- Every form has labels, inline errors, disabled/loading states, and keyboard support.
- Every major data area has loading skeleton, empty state, and error/retry state.
- Confirmation is required for meaningful state-changing mock actions.
- Toasts provide feedback without being the only indication of success/error.
- Respect reduced motion and never rely on color alone.

## 12. Out of scope

Do not implement:

- Backend/API/database/Supabase code
- Real government authentication, databases, or department integrations
- Real file storage or public file URLs
- Legal decision automation or AI officer decisions
- Certificates, signatures, payments, appeals, or e-stamping
- Nationwide routing, hierarchy, or government data
- GPS tracking, route optimization, biometrics, or computer vision
- Fabricated SLA/statutory claims or real-world analytics claims

## 13. Coordination and merge rules

- Revansh owns router/layout/shared styles; Aryan should consume them.
- Aryan owns all entrepreneur feature implementation.
- Do not rename or move Aryan's feature files during integration.
- Agree on page exports and route names before wiring all routes.
- Keep portal mock data separate to avoid editing the same data file.
- If a generic shared component needs a breaking change, coordinate it rather than duplicating it.
- Keep commits small and scoped: foundation, public/auth, government queue, review, query, inspection, decision, SLA, analytics.

## 14. Definition of done

- Public landing, role selection, and both demo login flows are polished and connected.
- Shared router, layouts, responsive navigation, tokens, and core UI primitives are complete.
- All government routes above are implemented without dead ends.
- Hero application can visibly move through review, query response review, inspection, final review, and decision using client state.
- Workflow guards and decision blockers are demonstrated.
- Government dashboard and analytics derive from centralized mock data.
- Every major page has responsive, accessible loading/empty/error states.
- Entrepreneur exports are connected without modifying entrepreneur-owned code.
- No backend code or imaginary API integration was introduced.
- `npm run build` and `npm run lint` pass.

