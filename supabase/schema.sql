-- Schema for the portfolio contact form. Already applied to the "portfolio-messages"
-- Supabase project as the migration `create_messages_table`; kept here for reference.

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  email text,
  message text not null,
  status text not null default 'new',
  sender_hash text,
  constraint messages_name_length check (name is null or char_length(name) <= 80),
  constraint messages_email_length check (email is null or char_length(email) <= 120),
  constraint messages_message_length check (char_length(message) between 10 and 1000),
  constraint messages_status_valid check (status in ('new', 'read', 'spam'))
);

comment on table public.messages is 'Messages from the portfolio contact form. Written only by the server (service role).';
comment on column public.messages.sender_hash is 'Salted hash of the sender IP, used only for rate limiting.';

create index messages_sender_hash_created_at_idx on public.messages (sender_hash, created_at desc);

-- Row Level Security on with no policies: the public API keys can neither read nor write.
-- Only the server, using the service role key, touches this table.
alter table public.messages enable row level security;
revoke all on public.messages from anon, authenticated;
