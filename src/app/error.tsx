"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function ErrorPage({
  error,
  unstable_retry,
}: ErrorPageProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6 py-16 text-fg">
      <div className="w-full max-w-lg text-center">
        <p className="meta mb-4 text-signal">
          ERROR 500
        </p>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight">
          Something went wrong.
        </h1>

        <p className="mb-8 text-fg/70">
          We encountered an unexpected error.
          Please try again in a moment.
        </p>

        <button
          type="button"
          onClick={() => unstable_retry()}
          className="meta h-12 bg-fg px-8 text-ink transition-colors hover:bg-signal"
        >
          Try again
        </button>
      </div>
    </main>
  );
}