import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="content"
      className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-24"
    >
      <p className="type-mono-section text-accent">404</p>
      <h1 className="type-display mt-4 text-fg">Page not found</h1>
      <p className="type-body mt-4 text-fg-secondary">
        The page you are looking for does not exist or has moved.
      </p>
      <Link href="/" className="type-mono-nav group mt-8 inline-flex items-center gap-2 text-accent">
        <ArrowLeft
          className="size-4 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none"
          aria-hidden="true"
        />
        Back to home
      </Link>
    </main>
  );
}
