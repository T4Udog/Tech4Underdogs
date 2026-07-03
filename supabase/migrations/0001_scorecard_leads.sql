-- Local Business Scorecard — leads table
-- Locked down: service-role only (no anon writes/reads). Future nurture + Stripe dashboard read via same role.

create extension if not exists "pgcrypto";

create table if not exists public.scorecard_leads (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),

  -- capture
  name          text        not null,
  business      text        not null,
  email         text        not null,
  phone         text,

  -- scoring
  overall_score       integer not null check (overall_score between 0 and 100),
  overall_tier        text    not null,
  website_score       integer not null check (website_score between 0 and 100),
  website_band        text    not null,
  presence_score      integer not null check (presence_score between 0 and 100),
  presence_band       text    not null,
  management_score    integer not null check (management_score between 0 and 100),
  management_band     text    not null,
  it_score            integer not null check (it_score between 0 and 100),
  it_band             text    not null,
  biggest_opportunity text    not null,

  -- raw answers (feeds nurture sequence + future Stripe-backed growth dashboard)
  answers       jsonb not null,

  -- delivery state
  pdf_url       text,
  email_sent_at timestamptz,
  user_agent    text,
  referer       text
);

create index if not exists scorecard_leads_email_idx       on public.scorecard_leads (email);
create index if not exists scorecard_leads_created_at_idx  on public.scorecard_leads (created_at desc);

alter table public.scorecard_leads enable row level security;

-- No anon / authenticated policies. Only service-role bypasses RLS.
-- (Server inserts/reads via SUPABASE_SERVICE_ROLE_KEY.)

comment on table public.scorecard_leads is
  'Local Business Scorecard lead captures. Inserted server-side via service role. Feeds nurture + growth dashboard.';
