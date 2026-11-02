
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6 py-16 text-fg">
      <div className="w-full max-w-lg text-center">
        <p className="meta mb-4 text-signal">
          ERROR 404
        </p>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Lost your way?
        </h1>

        <p className="mb-8 text-fg/70">
          The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <Link
          href="/"
          className="meta inline-flex h-12 items-center justify-center bg-fg px-8 text-ink transition-colors hover:bg-signal"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
