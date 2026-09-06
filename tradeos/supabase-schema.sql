-- TradeOS v1 workspace-isolated schema (Supabase/Postgres)
create extension if not exists pgcrypto;

create table if not exists workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  gst_number text,
  bank_account text,
  email text,
  phone text,
  logo_url text,
  accent text default '#111111',
  created_at timestamptz not null default now()
);

create table if not exists workspace_members (
  workspace_id uuid not null references workspaces(id) on delete cascade,
  user_id uuid not null,
  role text not null check(role in ('owner_admin','management_pm','office_admin','estimator','supervisor_foreman','worker_crew','read_only_accountant')),
  primary key(workspace_id,user_id)
);

create table if not exists workspace_trade_packs (
  workspace_id uuid not null references workspaces(id) on delete cascade,
  trade_pack_id text not null,
  enabled boolean not null default true,
  primary key(workspace_id,trade_pack_id)
);

create table if not exists contacts (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  name text not null,
  company text,
  email text,
  phone text,
  address text,
  created_at timestamptz not null default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  project_no text not null,
  name text not null,
  client_id uuid references contacts(id),
  trade_pack_id text,
  status text not null default 'draft',
  contract_value numeric(12,2) not null default 0,
  progress numeric(5,2) not null default 0,
  site_address text,
  start_date date,
  finish_date date,
  created_at timestamptz not null default now(),
  unique(workspace_id,project_no)
);

create table if not exists quotes (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  quote_no text not null,
  client_id uuid references contacts(id),
  title text not null,
  status text not null default 'draft',
  subtotal numeric(12,2) not null default 0,
  gst numeric(12,2) not null default 0,
  total numeric(12,2) not null default 0,
  created_at timestamptz not null default now(),
  unique(workspace_id,quote_no)
);

create table if not exists variations (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  variation_no text not null,
  description text not null,
  value numeric(12,2) not null default 0,
  status text not null default 'draft',
  approved_at timestamptz,
  created_at timestamptz not null default now(),
  unique(workspace_id,variation_no)
);

create table if not exists progress_claims (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  claim_no text not null,
  contract_sum numeric(12,2) not null default 0,
  approved_variations numeric(12,2) not null default 0,
  adjusted_contract_sum numeric(12,2) not null default 0,
  assessed_value_to_date numeric(12,2) not null default 0,
  previous_claims numeric(12,2) not null default 0,
  this_claim numeric(12,2) not null default 0,
  gst numeric(12,2) not null default 0,
  total numeric(12,2) not null default 0,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  unique(workspace_id,claim_no)
);

create table if not exists invoices (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  project_id uuid references projects(id),
  progress_claim_id uuid references progress_claims(id),
  invoice_no text not null,
  subtotal numeric(12,2) not null default 0,
  gst numeric(12,2) not null default 0,
  total numeric(12,2) not null default 0,
  issue_date date,
  due_date date,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  unique(workspace_id,invoice_no)
);

create table if not exists field_entries (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  user_id uuid,
  entry_type text not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists hns_documents (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  project_id uuid references projects(id) on delete cascade,
  document_type text not null,
  title text not null,
  status text not null default 'draft',
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table workspaces enable row level security;
alter table contacts enable row level security;
alter table projects enable row level security;
alter table quotes enable row level security;
alter table variations enable row level security;
alter table progress_claims enable row level security;
alter table invoices enable row level security;
alter table field_entries enable row level security;
alter table hns_documents enable row level security;

-- Production policies should bind workspace access to workspace_members + auth.uid().
