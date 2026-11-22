// Public address of the site: NEXT_PUBLIC_SITE_URL first (custom domain), then the
// address Vercel provides, then localhost.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")
).replace(/\/$/, "");

// Vercel previews shouldn't be indexed. Anywhere else counts as production.
export const isIndexable =
  process.env.VERCEL_ENV === undefined || process.env.VERCEL_ENV === "production";
