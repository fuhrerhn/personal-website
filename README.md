# Farhan Fitran Maulana, personal website

My portfolio: Information Systems student at ITS Surabaya, aspiring AI engineer.

Live site: add the URL here after deploying.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Geist fonts, next-themes, lucide-react, Vercel Analytics. The message form uses Supabase (Postgres) and Resend.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` makes a production build and `npm run lint` runs ESLint.

## Where things are

```
app/          routes, layout, SEO files (robots, sitemap, OG image), the 404 page
components/   sidebar, sections, small UI pieces
data/         all the text on the site
lib/          site URL, message validation, Supabase and email helpers
public/       photo and résumé
supabase/     SQL for the messages table
```

To change what the site says, edit the files in `data/`. `profile.ts` has the name, links, About text, and SEO description. `projects.ts` marks which projects are `featured` (shown on the home page); every project is listed at `/archive`.

## Message form

The form in the Contact section posts to a server action (`app/actions/send-message.ts`):

1. Bots are dropped: a filled hidden field, or a submit faster than a person could type.
2. The message is checked (`lib/message.ts`). The database checks the same limits again.
3. Each visitor can send 3 messages an hour and 10 a day. Visitors are counted by a salted hash of their IP, never the IP itself.
4. The message is saved to Supabase and emailed through Resend at the same time. If one of them fails, the other still goes through.

The `messages` table has row level security on and no policies, so only the server (using the service role key) can read or write it. Messages are read in the Supabase table editor. To set it up from scratch, run `supabase/schema.sql` in a new project.

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | What it is for |
|---|---|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase secret key (server only) |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Where notifications go. Without a verified Resend domain this must be the email of the Resend account |
| `CONTACT_FROM_EMAIL` | Optional sender, defaults to `onboarding@resend.dev` |
| `MESSAGE_HASH_SALT` | Optional salt for the IP hash |
| `NEXT_PUBLIC_SITE_URL` | Public address, once there is a custom domain |
| `GOOGLE_SITE_VERIFICATION` | Search Console verification token |

On Vercel the site address is picked up automatically, and preview deployments are kept out of search results.

## Deploying

Import the repo on Vercel and add the variables above. After the first production deploy, verify the site in Google Search Console and submit `/sitemap.xml`.

Text, photo, résumé, and design are © 2026 Farhan Fitran Maulana.
