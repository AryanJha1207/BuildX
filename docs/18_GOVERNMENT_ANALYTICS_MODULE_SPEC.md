# SIH 26130 --- Module Specification 18

# GOVERNMENT ANALYTICS

**Parent Specification:** SIH 26130 --- Complete Product Specification\
**Module:** 18 --- Government Analytics\
**Status:** LOCKED FOR PROTOTYPE\
**Primary Role:** Government Operational Intelligence\
**Geographic Scope:** Maharashtra\
**Design Theme:** Light / White\
**Priority:** CORE MVP / DEMO VALUE\
**Upstream:** Applications, Unified Government Workflow, Government
Portal, Review, Query, Inspection, Approve / Reject, SLA / Renewal /
Alerts, Incentives\
**Downstream:** Government Decision Support

------------------------------------------------------------------------

## 1. Module Purpose

Government Analytics provides an operational view of how applications
and approvals are moving through the platform.

It helps government users answer:

-   How many applications are being processed?
-   How many are approved/rejected?
-   Where are applications getting stuck?
-   How many queries are being raised?
-   How many inspections are pending/completed?
-   Which stages have the highest volume?
-   How is configured SLA performance looking?
-   Which sectors/locations generate the most applications?

The module is for **operational visibility**, not autonomous government
decision-making.

------------------------------------------------------------------------

# 2. Core Principle

Analytics must be derived from actual workflow/application records.

``` text
Application Events
      ↓
Workflow Data
      ↓
Aggregation
      ↓
Government Analytics
      ↓
Operational Insight
```

Do not create a separate fake analytics dataset disconnected from the
application workflow.

------------------------------------------------------------------------

# 3. Analytics Scope

For the SIH prototype, focus on a small number of highly understandable
metrics:

``` text
1. Applications
2. Status Distribution
3. Approval / Rejection
4. Processing Time
5. Queries
6. Inspections
7. SLA
8. Sector
9. Location
```

Avoid building a massive BI platform.

------------------------------------------------------------------------

# 4. Analytics Dashboard

Recommended top-level dashboard:

``` text
GOVERNMENT ANALYTICS

Applications
124

Under Review
38

Approved
67

Rejected
12

Queries
21

Inspections
14
```

Values must come from actual configured demo data.

------------------------------------------------------------------------

# 5. Date Range

Allow a simple date range filter:

``` text
Today
7 Days
30 Days
90 Days
Custom
```

For MVP, 30 days may be the default.

All charts/metrics should respect the selected date range where
applicable.

------------------------------------------------------------------------

# 6. Authority Filter

Optional:

``` text
All Authorities
FSSAI
MPCB
Fire
Electricity
Other configured authority
```

Only configured authorities should appear.

------------------------------------------------------------------------

# 7. Sector Filter

Optional:

``` text
All Sectors
Logistics / Warehousing
Food Processing
Other configured sector
```

This connects analytics to the Business Profile.

------------------------------------------------------------------------

# 8. Location Filter

Optional:

``` text
All Locations
Pune
Mumbai
Nashik
Other configured locations
```

For MVP, use only the Maharashtra locations represented in demo data.

Do not imply complete statewide statistical coverage.

------------------------------------------------------------------------

# 9. Application Volume

Show application volume over time.

Example:

``` text
APPLICATIONS OVER TIME

Jan   █████
Feb   ███████
Mar   █████████
Apr   ████████
```

A simple line/bar chart is sufficient.

------------------------------------------------------------------------

# 10. Status Distribution

Show:

``` text
APPLICATION STATUS

Under Review     38
Approved         67
Rejected         12
Query            21
Inspection       14
```

Use a simple chart or horizontal bars.

Avoid overly decorative charts.

------------------------------------------------------------------------

# 11. Approval Rate

Calculate:

``` text
Approved
-----------------------------
Decided Applications
```

Example:

``` text
Approval Rate
84.8%
```

Clearly define the denominator.

Do not calculate approval rate as:

``` text
Approved / All Submitted
```

unless that is explicitly labeled and intended.

------------------------------------------------------------------------

# 12. Rejection Rate

Similarly:

``` text
Rejected
-----------------------------
Decided Applications
```

Example:

``` text
Rejection Rate
15.2%
```

The system should explain the calculation if needed.

------------------------------------------------------------------------

# 13. Processing Time

Track processing duration where timestamps exist.

Example:

``` text
Average Processing Time

8.4 days
```

Calculation:

``` text
Decision Timestamp
-
Submission Timestamp
```

Only include applications with both timestamps.

Do not invent missing durations.

------------------------------------------------------------------------

# 14. Stage Processing Time

Where sufficient data exists:

``` text
AVERAGE TIME BY STAGE

Submission → Review
1.8 days

Review → Query
2.1 days

Query → Response
1.4 days

Inspection
1.2 days

Final Decision
1.9 days
```

This helps identify bottlenecks.

For MVP, use only stages represented by actual event timestamps.

------------------------------------------------------------------------

# 15. Bottleneck Detection

The analytics dashboard may highlight stages with high volume or long
configured processing time.

Example:

``` text
BOTTLENECK

Government Review

Average time:
4.8 days

Applications currently waiting:
18
```

This is an operational signal.

Do not label a department as inefficient solely from a small prototype
dataset.

------------------------------------------------------------------------

# 16. Query Analytics

Show:

``` text
QUERIES

Total Raised
21

Open
7

Resolved
14

Average Response Time
2.3 days
```

Response time:

``` text
Response Timestamp
-
Query Timestamp
```

Only calculate where both timestamps exist.

------------------------------------------------------------------------

# 17. Query Categories

If query types are configured:

``` text
QUERY TYPES

Document Revision      9
Additional Information 7
Clarification          5
```

This helps identify common information gaps.

------------------------------------------------------------------------

# 18. Inspection Analytics

Show:

``` text
INSPECTIONS

Scheduled
6

Completed
5

Follow-up Required
1
```

Optional:

``` text
Satisfactory
4

Unsatisfactory
1
```

Do not imply that an unsatisfactory inspection automatically means
rejection.

------------------------------------------------------------------------

# 19. SLA Analytics

Where configured SLA data exists:

``` text
SLA PERFORMANCE

Within Target
78%

Approaching
14%

Overdue
8%
```

This is based on configured product rules.

Do not describe the metric as legal compliance unless supported by
verified statutory data.

------------------------------------------------------------------------

# 20. SLA Trend

Optional:

``` text
SLA PERFORMANCE OVER TIME

Within Target
████████

Approaching
██

Overdue
█
```

A simple chart is sufficient.

------------------------------------------------------------------------

# 21. Sector Analytics

Show application distribution by sector.

Example:

``` text
APPLICATIONS BY SECTOR

Logistics / Warehousing   42
Food Processing           31
Manufacturing             24
Other                     27
```

The values come from Business Profile.

------------------------------------------------------------------------

# 22. Sub-Sector Analytics

If enough demo data exists:

``` text
COLD STORAGE
18

WAREHOUSING
14

DISTRIBUTION CENTER
10
```

For MVP, only show sub-sector analytics if the dataset is sufficient.

------------------------------------------------------------------------

# 23. Location Analytics

Show applications by configured Maharashtra location.

Example:

``` text
APPLICATIONS BY LOCATION

Pune       44
Mumbai     31
Nashik     18
Nagpur     12
Other      19
```

This is prototype data unless the dataset represents actual statewide
records.

------------------------------------------------------------------------

# 24. MIDC Analytics

If Business Profile captures location type:

``` text
LOCATION TYPE

MIDC
61

Non-MIDC
42

Not Specified
21
```

This can help demonstrate location-aware intelligence.

Do not infer incentives/approvals solely from this analytics view.

------------------------------------------------------------------------

# 25. Authority Analytics

Show:

``` text
APPLICATIONS BY AUTHORITY

FSSAI        31
MPCB         24
Fire         18
Electricity  14
Other        37
```

Only include authorities represented in the data.

------------------------------------------------------------------------

# 26. Authority Processing Comparison

Optional:

``` text
AUTHORITY OVERVIEW

Authority   Applications   Avg Time   Approval
FSSAI       31             6.2 days   82%
MPCB        24             9.1 days   76%
Fire        18             4.8 days   89%
```

For prototype, this should be presented as descriptive data, not a
ranking.

Avoid language such as:

``` text
Worst Department
```

Prefer:

``` text
Highest average processing duration in selected dataset
```

------------------------------------------------------------------------

# 27. Dashboard Drill-Down

Clicking a metric should filter the underlying application list.

Example:

``` text
Overdue SLA: 8
       ↓
Applications filtered to overdue
```

Example:

``` text
Query: 21
       ↓
Query/application list
```

This makes analytics operational rather than decorative.

------------------------------------------------------------------------

# 28. Application List Integration

Analytics should link back to:

``` text
Government Portal
      ↓
Applications
      ↓
Filtered Results
```

Example:

``` text
18 applications in Under Review
[View Applications]
```

------------------------------------------------------------------------

# 29. Timeline/Event Data

Analytics can derive metrics from workflow events:

``` text
SUBMITTED
ASSIGNED
REVIEW_STARTED
QUERY_RAISED
QUERY_RESPONDED
INSPECTION_SCHEDULED
INSPECTION_COMPLETED
APPROVED
REJECTED
```

These events are the primary source for process analytics.

------------------------------------------------------------------------

# 30. Data Freshness

For the prototype:

``` text
Last updated:
[Timestamp]
```

Analytics can be calculated when the dashboard loads.

Do not build real-time streaming infrastructure.

------------------------------------------------------------------------

# 31. Calculation Rules

Every metric should have a deterministic calculation.

Examples:

### Applications

Count applications matching selected filters/date range.

### Approved

Count applications with:

``` text
status = APPROVED
```

### Rejected

Count applications with:

``` text
status = REJECTED
```

### Average Processing Time

Average:

``` text
decisionAt - submittedAt
```

for applications with both timestamps.

### Query Response Time

Average:

``` text
responseAt - queryCreatedAt
```

for responded queries.

------------------------------------------------------------------------

# 32. Missing Data

If data is insufficient:

``` text
Not enough data
```

or:

``` text
Not available
```

Do not display:

``` text
0 days
```

when timestamps are missing.

------------------------------------------------------------------------

# 33. Small Dataset Handling

The SIH prototype may use a small controlled dataset.

Analytics should still function.

Example:

``` text
Applications:
12

Average Processing:
Not enough completed applications
```

This is preferable to fabricated numbers.

------------------------------------------------------------------------

# 34. Prototype Dataset

A practical MVP dataset can contain:

``` text
20–50 applications
```

with enough variation across:

-   statuses;
-   authorities;
-   sectors;
-   locations;
-   queries;
-   inspections;
-   decisions.

The dataset should remain small enough to manage manually.

------------------------------------------------------------------------

# 35. Hero Application

Hero application:

**APP-MH-2026-00124**

Its workflow events should contribute to analytics.

Example:

``` text
Submitted
↓
Review
↓
Query
↓
Inspection
↓
Approved
```

This demonstrates that the analytics are connected to the actual
workflow.

------------------------------------------------------------------------

# 36. Dashboard Layout

Recommended:

``` text
┌──────────────────────────────────────────────────┐
│ GOVERNMENT ANALYTICS                             │
│                                                 │
│ [30 Days ▼] [Authority ▼] [Sector ▼]           │
│                                                 │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐            │
│ │ 124  │ │  38  │ │  67  │ │  12  │            │
│ │Apps  │ │Review│ │Appr. │ │Reject│            │
│ └──────┘ └──────┘ └──────┘ └──────┘            │
│                                                 │
│ Applications Over Time                         │
│ ─────────────────────────────────────────────   │
│                                                 │
│ Status Distribution                            │
│ ─────────────────────────────────────────────   │
│                                                 │
│ Processing Time        Queries                  │
│ 8.4 days               21 raised                │
│                                                 │
│ Sector                  Location                │
│ ───────────────         ───────────────         │
└──────────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 37. Chart Design

Use simple, readable charts:

-   line chart;
-   bar chart;
-   horizontal bar;
-   compact KPI cards.

Avoid:

-   3D charts;
-   pie charts with many slices;
-   animated chart gimmicks;
-   dense dashboards.

------------------------------------------------------------------------

# 38. Filters

Minimum MVP filters:

``` text
Date Range
Authority
Status
```

Optional:

``` text
Sector
Location
```

Filters should apply consistently across relevant metrics.

------------------------------------------------------------------------

# 39. Export

For MVP, export is optional.

If implemented:

``` text
[Export CSV]
```

Export only data the government user is authorized to access.

Do not build PDF report generation unless necessary for the demo.

------------------------------------------------------------------------

# 40. Government Access

Analytics must be role-protected.

Conceptually:

``` text
Government User
      ↓
Authorized Role
      ↓
Analytics Access
```

Different authority-level visibility can be added later.

For MVP, one controlled government analytics view is sufficient.

------------------------------------------------------------------------

# 41. Data Privacy

Analytics should use aggregated data wherever possible.

Avoid displaying unnecessary personally identifiable information.

Example:

``` text
Applications by Sector
```

is preferable to exposing every applicant in an analytics chart.

Drill-down should still respect application-level authorization.

------------------------------------------------------------------------

# 42. Security

-   Enforce access at backend/data layer.
-   Apply Supabase Row Level Security where appropriate.
-   Do not expose service-role credentials.
-   Do not allow unauthorized users to query analytics tables directly.

------------------------------------------------------------------------

# 43. Performance

For MVP:

-   simple SQL aggregations are sufficient;
-   indexed application/workflow fields should be used;
-   avoid loading every document;
-   avoid processing large datasets in the browser.

A dedicated analytics warehouse is not required.

------------------------------------------------------------------------

# 44. Supabase Integration

Supabase/PostgreSQL can provide:

``` text
Applications
Workflow Events
Queries
Inspections
Decisions
SLA Records
Business Profiles
```

Analytics can be generated using:

-   SQL queries;
-   database views;
-   lightweight server-side aggregation.

Use whichever approach keeps the prototype simple and maintainable.

------------------------------------------------------------------------

# 45. Precomputed Metrics

Not required for MVP.

Prefer:

``` text
Database data
      ↓
Simple aggregation
      ↓
Dashboard
```

Only introduce materialized/precomputed analytics if performance
actually requires it.

------------------------------------------------------------------------

# 46. Error State

If analytics cannot load:

``` text
We couldn't load government analytics.

[Try Again]
```

Do not display partial numbers as if they were complete unless clearly
indicated.

------------------------------------------------------------------------

# 47. Empty State

If no data matches filters:

``` text
NO DATA FOR THIS FILTER

Try another date range or filter.
```

------------------------------------------------------------------------

# 48. Loading State

Example:

``` text
Loading analytics...
```

Use skeleton KPI cards and chart placeholders.

------------------------------------------------------------------------

# 49. No Data / Insufficient Data

For average metrics:

``` text
Average Processing Time
Not enough completed applications
```

This prevents misleading analytics.

------------------------------------------------------------------------

# 50. UI Theme

Use the locked:

**LIGHT / WHITE**

theme.

Recommended:

-   white cards;
-   light gray background;
-   dark charcoal text;
-   professional blue controls;
-   restrained chart presentation;
-   subtle borders;
-   clear KPI hierarchy.

Avoid:

-   dark dashboard;
-   neon analytics;
-   excessive gradients;
-   decorative charts.

------------------------------------------------------------------------

# 51. Hero Analytics Story

The government analytics demo should communicate:

``` text
Applications Received
        ↓
Where are they now?
        ↓
How many are under review?
        ↓
How many have queries?
        ↓
How many need inspection?
        ↓
How many are approved/rejected?
        ↓
Where are bottlenecks?
```

Example insight:

``` text
Government Review

18 applications currently waiting

Average configured processing time:
4.8 days
```

The wording should remain descriptive and avoid unsupported claims.

------------------------------------------------------------------------

# 52. Analytics → Action

A strong demo interaction:

``` text
Analytics
   ↓
18 Applications Under Review
   ↓
[View Applications]
   ↓
Government Portal
   ↓
Filtered Queue
```

Another:

``` text
7 Open Queries
   ↓
[View Queries]
   ↓
Query Queue
```

Another:

``` text
3 Overdue Configured SLA
   ↓
[View Applications]
```

This makes analytics actionable.

------------------------------------------------------------------------

# 53. Acceptance Criteria

The Government Analytics module is complete when:

### Dashboard

-   KPI cards display application counts.
-   Status distribution is visible.
-   Approval/rejection counts are visible.
-   Query/inspection counts are visible.

### Filtering

-   Date range works.
-   Authority filter works.
-   Status filter works.
-   Optional sector/location filters work.

### Processing

-   Average processing time is calculated from timestamps.
-   Missing timestamps are excluded.
-   Stage timing can be shown where sufficient data exists.

### Queries

-   Total/open/resolved queries can be shown.
-   Response time can be calculated where data exists.

### Inspection

-   Scheduled/completed/follow-up counts can be shown.

### SLA

-   Configured SLA status can be aggregated.
-   No statutory claim is fabricated.

### Segmentation

-   Sector data can be aggregated.
-   Location data can be aggregated.
-   Authority data can be aggregated.

### Drill-down

-   KPI/chart selections can lead to filtered application views.

### Security

-   Analytics is restricted to authorized government users.
-   Drill-down respects application permissions.

### Data Integrity

-   Metrics derive from actual workflow/application records.
-   Missing data is not fabricated.
-   Small datasets are handled honestly.

### Hero

-   APP-MH-2026-00124 contributes to analytics through real workflow
    events.

### UI

-   Light/white theme.
-   Clean KPI cards.
-   Simple charts.
-   Loading/error/empty states.

------------------------------------------------------------------------

# 54. Out of Scope

Do not build:

-   enterprise BI warehouse;
-   predictive government workload forecasting;
-   AI-generated policy recommendations;
-   automated officer performance scoring;
-   public-facing government statistics;
-   nationwide real-time statistics;
-   real-time streaming analytics;
-   complex GIS dashboards;
-   legal compliance scoring;
-   automatic departmental ranking.

------------------------------------------------------------------------

# 55. Final Locked Definition

**GOVERNMENT ANALYTICS** is the operational intelligence layer that
aggregates real application, workflow, query, inspection, decision, and
configured SLA data into a clear government-facing dashboard.

Its core responsibility is:

> **Show what is happening across the approval workflow, identify
> operational patterns and potential bottlenecks, and allow authorized
> government users to drill from aggregate insight back into the
> relevant application queue.**

The defining principle is:

> **Analytics should explain the workflow, not invent a story about
> it.**

The complete prototype loop is:

``` text
Application Events
      ↓
Workflow Data
      ↓
Analytics
      ↓
Insight
      ↓
Filtered Applications
      ↓
Government Action
```

**STATUS: LOCKED FOR PROTOTYPE**

------------------------------------------------------------------------

# DOCUMENTATION SET COMPLETE

All 18 locked module specifications now form the implementation
reference set:

``` text
01 Entrepreneur
02 Business Profile
03 Approval Intelligence
04 Personalized Roadmap
05 Application Builder
06 Document Vault
07 Document Pre-validation
08 Submission
09 Unified Government Workflow
10 Government Portal
11 Government Review
12 Query Management
13 Inspection
14 Approve / Reject
15 Entrepreneur Dashboard
16 SLA / Renewal / Alerts
17 Incentives
18 Government Analytics
```

These modules should be implemented as one connected product, not as 18
disconnected mini-projects.
