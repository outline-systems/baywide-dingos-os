# TradeOS

TradeOS is the generic contractor operations platform extracted from the Baywide Dingos OS workflow and informed by Peak Paint OS.

## Product model

- One maintained core platform.
- Company-specific configuration and branding.
- Optional trade packs that install rates, job types, project stages, H&S templates, materials and trade terminology.
- Multiple trade packs can be enabled for one company.
- Desktop/HQ and Field/PWA share the same data model.

## Initial trade packs

1. Earthworks / Landscaping / Drainage
2. Painting & Decorating
3. Building / Carpentry

## Core workflow

Lead -> Quote/Tender -> Accepted -> Project -> Schedule/Crew -> H&S -> Field Work -> Progress -> Variation -> Progress Claim -> Tax Invoice -> Payment -> Closeout -> Reporting

## Guardrails

- Baywide production remains untouched while TradeOS is developed.
- Peak production remains untouched and is used only as a reference.
- Progress Claims remain separate from Tax Invoices.
- H&S templates are configurable starter templates and require company review/adoption.
- Customer data is isolated by company/workspace.

## Working product decisions

The current build uses the approved defaults from the product brief: NZ-first, Supabase-ready architecture, PWA-first, Xero-ready integration layer, Google Calendar optional integration, role-based permissions, customer branding, configurable document templates and lightweight project document storage.
