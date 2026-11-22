import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CursorGlow } from "@/components/cursor-glow";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/profile";
import { isIndexable, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = `${profile.name} | ${profile.title}`;
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

// pages set their own canonical URL; the OG image comes from app/opengraph-image.tsx
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: `%s | ${profile.name}` },
  description: profile.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Farhan Fitran",
    "Aspiring AI Engineer",
    "portfolio",
    "machine learning",
    "computer vision",
    "data analytics",
    "ITS Surabaya",
  ],
  openGraph: { type: "website", siteName: profile.name, locale: "en_US" },
  twitter: { card: "summary_large_image" },
  robots: {
    index: isIndexable,
    follow: isIndexable,
    googleBot: {
      index: isIndexable,
      follow: isIndexable,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf9f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1d" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
          >
            Skip to Content
          </a>
          <CursorGlow />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
