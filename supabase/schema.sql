create table if not exists public.links (
  id bigint generated always as identity primary key,
  slug text not null unique check (slug ~ '^[a-z0-9_-]{3,32}$'),
  url text not null,
  clicks bigint not null default 0,
  created_at timestamptz not null default now()
);

alter table public.links enable row level security;

create or replace function public.increment_clicks(p_slug text)
returns void language sql as $$
  update public.links set clicks = clicks + 1 where slug = p_slug;
$$;

revoke all on function public.increment_clicks(text) from public, anon, authenticated;
