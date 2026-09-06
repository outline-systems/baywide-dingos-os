# Live Peak Paint OS vs Baywide Dingos OS comparison

Comparison basis: automated Playwright browser walkthroughs against the currently published GitHub Pages URLs on 7 September 2026. Production apps were not modified by the comparison.

## Overall shell and navigation

The two live apps now share the same overall visual shell and primary navigation: Light mode, HQ/Desktop, Field/Mobile, Dashboard, Quotes, Tendering, Projects, Contacts, Rates library, Schedule, Health & Safety, Invoicing, Timesheets, Reports & KPIs, and Settings. Quotes, Contacts, Schedule, Health & Safety, Invoicing and Field use substantially the same interaction patterns and page structure.

## Intended trade-specific differences

Baywide uses earthworks/landscaping/drainage terminology, weather advice, rates, loading factors, materials and example jobs. Peak uses painting terminology, painting weather advice, paint materials, painting rates, access/scaffold loadings and painting example jobs. The Rates library framework itself is the same: categories, base rates, access/condition loading factors, charge-out calculations and Add rate controls are common, while the actual categories and rate content differ by trade.

## Remaining UI / workflow differences

### 1. Settings

Baywide's current Settings landing page is modular: Company details & document template, Crew & employees, Integrations, Look & feel, and Recently deleted. The Integrations section explicitly offers Google Calendar connection for scheduled jobs and crew tasks.

Peak's Settings screen is still the older expanded layout. It shows Company details fields, letterhead preview, the full Crew & employees table, HQ access PINs, Look & feel controls and Recently deleted on one page. It does not show Baywide's Integrations / Google Calendar section in the live comparison.

### 2. Project detail / scheduling controls

Both apps use the same project-detail tabs: Overview, Progress, Photos, Quote, Variations and Invoices, plus Create report.

Baywide additionally exposes Schedule date, Start time, Finish time, assigned-crew controls, Check availability and Sync Google Calendar from Job details. Its copy says changes flow through Schedule, Timesheets, Google Calendar and exports.

Peak's live project-detail edit area exposes Site address, Client and Job type, but not those scheduling/crew/Google Calendar controls. Its copy only refers to Schedule, Timesheets and exports.

### 3. Timesheets

Baywide has the newer planned-labour view: Planned Hours, Actual Hours and Planned vs Actual KPIs, plus PLANNED / ACTUAL / VARIANCE columns. Planned hours are described as coming from scheduled jobs and calendar tasks.

Peak still uses the older Total Hours presentation. It has the same labour cost, charge-out, labour margin, utilisation, exceptions, overtime, vehicle-km, approval and export concepts, but does not show Baywide's Planned Hours / Actual / Variance model or calendar-linked planned labour.

### 4. Tender specification naming

The tender-detail structure is otherwise closely aligned, but Baywide's final specification tab is named Technical spec. Peak's corresponding tab is still named Paint spec. Baywide's quote breakdown uses the Baywide Earthworks & Landscaping SOR and earthworks/landscaping tender groups; Peak uses the Peak Painting SOR and painting-specific content.

### 5. Welcome / dashboard hero content

The navigation and dashboard structure are aligned, but the welcome content differs beyond trade-specific wording. Baywide uses a Today / Local time / Urgent-Safety panel with a high-risk H&S alert. Peak uses a Thought for the day quotation. If the product standard is meant to be an exact Baywide clone with only trade content changed, Peak should inherit Baywide's operational Today / Urgent-Safety panel rather than retain the quotation panel.

Dashboard weather and materials content are appropriately trade-specific: Baywide shows earthworks/wet-ground guidance and items such as draincoil; Peak shows exterior/interior painting guidance and paint products.

### 6. Field

The live Field home and sign-in picker are now structurally very close. Both show Sign in, current user/avatar, Clock in, Today's Jobs, job card, New quote, Safety, Materials and Progress report. The sign-in picker uses the same Management and Crew grouping and role/access descriptions. Remaining visible differences are primarily staff data, job data and trade branding/terminology.

### 7. Quotes, Contacts, Schedule, H&S and main Invoicing

The Quote builder is effectively the same in both apps: Client, Site address, Scope, rate-library line items, quantity/rate/total, discount, GST, Confirm quote/build schedule, PDF, Save draft and Send to client.

Contacts are effectively identical. The Schedule uses the same draggable job-bar / task-breakdown model. The main Health & Safety screen uses the same New H&S doc, site-sign-on and per-job H&S-document structure. The main Invoicing screen and New invoice form are also structurally the same.

### 8. Areas requiring a targeted parity check

This comparison did not go deeply enough into the project Invoices tab to verify Peak against Baywide's newer separate Progress Claim versus Tax Invoice workflow. It also did not open Baywide's nested Company details configuration far enough to compare the Tender H&S policy upload, nor did it exercise crew profile-photo controls. Those recent Baywide features should be checked directly before declaring full parity.

## Recommended parity order

1. Bring Peak Settings onto the Baywide modular Settings layout and add the same Integrations / Google Calendar controls.
2. Add Baywide's project schedule/date/time, assigned-crew, availability and Google Calendar controls to Peak.
3. Add Baywide's Planned / Actual / Variance timesheet model to Peak.
4. Standardise Peak Paint spec to Technical spec / Methodology if the generic product terminology is the intended standard.
5. Replace the Peak Thought for the day block with Baywide's operational Today / Urgent-Safety block if exact UI parity is required.
6. Run a targeted parity test for Progress Claims vs Tax Invoices, Tender H&S policy upload, crew profile photos and the complete Field workflow.

## Conclusion

Peak and Baywide are no longer fundamentally different applications: the main shell and most core workflows are aligned. The largest remaining functional gap is that Baywide has newer scheduling, Google Calendar and planned-labour workflow upgrades that Peak has not yet inherited. The remaining trade-specific differences in rates, H&S context, materials, terminology and weather guidance are appropriate and should remain trade-pack content rather than be normalised away.
