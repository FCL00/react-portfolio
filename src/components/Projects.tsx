
export default function Projects() {
  return (
    <section
      id="work"
      className="border-t border-line"
      aria-labelledby="work-title"
    >
      <div className="meta flex items-center justify-between border-b border-line px-5 py-3 md:px-8">
        <span>
          03 / <span className="text-fg">Projects</span>
        </span>
        <span className="hidden sm:inline">6 projects</span>
      </div>
      <div className="px-5 py-section md:px-8">
        <h2 id="work-title" className="display-lg">
          <span className="text-signal">Recent Works</span>.
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
          A look at some of the recent work I've been building.
        </p>
      </div>

      <div className="grid border-t border-line md:grid-cols-12" id="projects">
        <article className="reveal group flex flex-col border-b border-line md:border-r md:last:border-r-0 md:col-span-12">
          <div className="meta flex justify-between px-5 py-3 md:px-8">
            <span className="text-signal">01</span>
            <span>Real-time chat · Full-stack</span>
          </div>
          <div className="shot relative overflow-hidden border-y border-line ph aspect-16/8">
            <div className="flex h-full items-center justify-center p-6 text-center">
              <span className="meta">Screenshot placeholder · Meridian</span>
            </div>
          </div>
          <div className="grid gap-6 px-5 py-8 md:px-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Meridian
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                Global real-time chat app. Full JWT auth with httpOnly refresh
                cookies, token rotation and reuse detection, plus a
                single-flight refresh interceptor.
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="meta leading-loose">
                Next.js · Express · Prisma · Zustand · TanStack Query · Tailwind
                v4
              </p>
              <div className="meta mt-5 flex gap-6 text-fg!">
                <a className="transition-colors hover:text-signal" href="#">
                  Live ↗
                </a>
                <a className="transition-colors hover:text-signal" href="#">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className="reveal group flex flex-col border-b border-line md:border-r md:last:border-r-0 md:col-span-7">
          <div className="meta flex justify-between px-5 py-3 md:px-8">
            <span className="text-signal">02</span>
            <span>Job hunt tracker · Web app</span>
          </div>
          <div className="shot relative overflow-hidden border-y border-line ph aspect-4/3">
            <div className="flex h-full items-center justify-center p-6 text-center">
              <span className="meta">Screenshot placeholder · Waypoint</span>
            </div>
          </div>
          <div className="grid gap-6 px-5 py-8 md:px-8 ">
            <div className="">
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Waypoint
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                Tracker for the job hunt: landing page, dashboard, auth pages
                and email templates on a strict black-and-white system with one
                green accent.
              </p>
            </div>
            <div className="">
              <p className="meta leading-loose">
                Next.js · Prisma / MySQL · Better Auth · Resend · Zod
              </p>
              <div className="meta mt-5 flex gap-6 text-fg!">
                <a className="transition-colors hover:text-signal" href="#">
                  Live ↗
                </a>
                <a className="transition-colors hover:text-signal" href="#">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className="reveal group flex flex-col border-b border-line md:border-r md:last:border-r-0 md:col-span-5">
          <div className="meta flex justify-between px-5 py-3 md:px-8">
            <span className="text-signal">03</span>
            <span>Job tracker · UI prototype</span>
          </div>
          <div className="shot relative overflow-hidden border-y border-line ph aspect-4/3">
            <div className="flex h-full items-center justify-center p-6 text-center">
              <span className="meta">Screenshot placeholder · Tally</span>
            </div>
          </div>
          <div className="grid gap-6 px-5 py-8 md:px-8 ">
            <div className="">
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Tally
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                Minimal application tracker UI: landing, sign-in, sign-up and a
                dashboard with a searchable table and status filters.
              </p>
            </div>
            <div className="">
              <p className="meta leading-loose">HTML · CSS · Tailwind</p>
              <div className="meta mt-5 flex gap-6 text-fg!">
                <a className="transition-colors hover:text-signal" href="#">
                  Live ↗
                </a>
                <a className="transition-colors hover:text-signal" href="#">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className="reveal group flex flex-col border-b border-line md:border-r md:last:border-r-0 md:col-span-5">
          <div className="meta flex justify-between px-5 py-3 md:px-8">
            <span className="text-signal">04</span>
            <span>Restaurant · Landing page</span>
          </div>
          <div className="shot relative overflow-hidden border-y border-line ph aspect-4/3">
            <div className="flex h-full items-center justify-center p-6 text-center">
              <span className="meta">Screenshot placeholder · Dopamine</span>
            </div>
          </div>
          <div className="grid gap-6 px-5 py-8 md:px-8 ">
            <div className="">
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Makamura
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                Landing page for a chicken wings restaurant, with a searchable
                menu of wing flavors on a cream and tomato light theme.
              </p>
            </div>
            <div className="">
              <p className="meta leading-loose">Nuxt.js · Tailwind v4</p>
              <div className="meta mt-5 flex gap-6 text-fg!">
                <a className="transition-colors hover:text-signal" href="#">
                  Live ↗
                </a>
                <a className="transition-colors hover:text-signal" href="#">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className="reveal group flex flex-col border-b border-line md:border-r md:last:border-r-0 md:col-span-7">
          <div className="meta flex justify-between px-5 py-3 md:px-8">
            <span className="text-signal">05</span>
            <span>Product showcase · Motion</span>
          </div>
          <div className="shot relative overflow-hidden border-y border-line ph aspect-4/3">
            <div className="flex h-full items-center justify-center p-6 text-center">
              <span className="meta">Screenshot placeholder · Cake Scroller</span>
            </div>
          </div>
          <div className="grid gap-6 px-5 py-8 md:px-8 ">
            <div className="">
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Cake Scroller
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                Scroll between cake flavors, with the product name behind a
                centered image and favorite, basket and share controls.
              </p>
            </div>
            <div className="">
              <p className="meta leading-loose">React · GSAP · Tailwind</p>
              <div className="meta mt-5 flex gap-6 text-fg!">
                <a className="transition-colors hover:text-signal" href="#">
                  Live ↗
                </a>
                <a className="transition-colors hover:text-signal" href="#">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className="reveal group flex flex-col border-b border-line md:border-r md:last:border-r-0 md:col-span-12">
          <div className="meta flex justify-between px-5 py-3 md:px-8">
            <span className="text-signal">06</span>
            <span>Client work · eCommerce landing</span>
          </div>
          <div className="shot relative overflow-hidden border-y border-line ph aspect-16/8">
            <div className="flex h-full items-center justify-center p-6 text-center">
              <span className="meta">
                Screenshot placeholder · Shoe brand storefront
              </span>
            </div>
          </div>
          <div className="grid gap-6 px-5 py-8 md:px-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Shoe brand storefront
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                Premium, light-themed landing page for a shoe brand, built
                around scroll-driven animation.
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="meta leading-loose">Vue.js · GSAP</p>
              <div className="meta mt-5 flex gap-6 text-fg!">
                <a className="transition-colors hover:text-signal" href="#">
                  Live ↗
                </a>
                <a className="transition-colors hover:text-signal" href="#">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
