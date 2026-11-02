"use client";

export default function GlobalError({
  unstable_retry,
}: {
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen items-center justify-center bg-surface px-6 text-fg">
          <div className="max-w-lg text-center">
            <p className="meta mb-4 text-signal">
              SYSTEM ERROR
            </p>

            <h1 className="mb-4 text-4xl font-semibold">
              Something went wrong.
            </h1>

            <p className="mb-8 text-fg/70">
              An unexpected error prevented the page
              from loading.
            </p>

            <button
              type="button"
              onClick={() => unstable_retry()}
              className="meta h-12 bg-fg px-8 text-ink hover:bg-signal"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}