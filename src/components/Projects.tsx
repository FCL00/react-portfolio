import Image from "next/image";
import Link from "next/link";
import ToastButton from "./ToastButton";

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
          My Recent <span className="text-signal">Works</span>.
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="grid border-t border-line md:grid-cols-12" id="projects">
        <article className="reveal group flex flex-col border-b border-line md:border-r md:last:border-r-0 md:col-span-12">
          <div className="meta flex justify-between px-5 py-3 md:px-8">
            <span className="text-signal">01</span>
            <span>CRM · Full-stack</span>
          </div>
          <div className="shot relative overflow-hidden border-y border-line ph aspect-16/8">
            <div className="flex h-full items-center justify-center p-6 text-center">
              <Link
                className="h-full w-full object-cover"
                href="https://github.com/FCL00/NextCRM"
              >
                <Image
                  src="/assets/next-crm.webp"
                  width={1200}
                  height={800}
                  sizes="100vw"
                  alt="NextCRM Landing Page"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          <div className="grid gap-6 px-5 py-8 md:px-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                NextCRM
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                NextCRM is a fast, intuitive CRM and sales pipeline platform
                built for small businesses and sales teams to manage customer
                relationships, track deals, and close predictable revenue.
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="meta leading-loose">
                React · Supabase · Zustand · TanStack Query · Tailwind
              </p>
              <div className="meta mt-5 flex gap-6 text-fg!">
                <a
                  className="transition-colors hover:text-signal"
                  href="https://next-crm-kappa.vercel.app/"
                  target="_blank"
                >
                  Live ↗
                </a>
                <a
                  className="transition-colors hover:text-signal"
                  href="https://github.com/FCL00/NextCRM"
                  target="_blank"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className="reveal group flex flex-col border-b border-line md:border-r md:last:border-r-0 md:col-span-7">
          <div className="meta flex justify-between px-5 py-3 md:px-8">
            <span className="text-signal">02</span>
            <span>Typing App · Web app</span>
          </div>
          <div className="shot relative overflow-hidden border-y border-line ph aspect-4/3">
            <div className="flex h-full items-center justify-center p-6 text-center">
              <Link
                className="h-full w-full object-fit"
                href="https://github.com/FCL00/Typeflow"
              >
                <Image
                  src="/assets/typeflow.webp"
                  width={1200}
                  height={800}
                  sizes="100vw"
                  alt="Typeflow Landing Page"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          <div className="grid gap-6 px-5 py-8 md:px-8 ">
            <div className="">
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Typeflow
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                Typeflow, a modern, minimalist typing speed test
              </p>
            </div>
            <div className="">
              <p className="meta leading-loose">Reactjs · Tailwind</p>
              <div className="meta mt-5 flex gap-6 text-fg!">
                <a
                  className="transition-colors hover:text-signal"
                  href="https://typeflow-eta-five.vercel.app/"
                  target="_blank"
                >
                  Live ↗
                </a>
                <a
                  className="transition-colors hover:text-signal"
                  href="https://github.com/FCL00/Typeflow"
                  target="_blank"
                >
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
              <Link
                className="h-full w-full object-fit"
                href="https://github.com/FCL00/Typeflow"
              >
                <Image
                  src="/assets/jobhunt.webp"
                  width={1200}
                  height={800}
                  sizes="100vw"
                  alt="Jobhunt Landing Page"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          <div className="grid gap-6 px-5 py-8 md:px-8 ">
            <div className="">
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                JobHunt
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                Minimal application tracker UI: landing, sign-in, sign-up and a
                dashboard with a searchable table and status filters.
              </p>
            </div>
            <div className="">
              <p className="meta leading-loose">HTML · CSS · Tailwind</p>
              <div className="meta mt-5 flex gap-6 text-fg!">
                <ToastButton
                  label="Live"
                  message="Currently Under Development"
                />
                <ToastButton
                  label="Github"
                  message="Currently Under Development"
                />
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
              <Image
                className="h-full w-full object-fit"
                src="/assets/makamura.webp"
                width={1200}
                height={800}
                sizes="100vw"
                alt="Typeflow Landing Page"
                loading="lazy"
              />
            </div>
          </div>
          <div className="grid gap-6 px-5 py-8 md:px-8 ">
            <div className="">
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Makamura
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                MakaMura is a modern, responsive chicken ordering web
                application built with Nuxt 4 and Tailwind CSS, featuring an
                interactive food menu, customizable orders, add-ons, a shopping
                basket, and order tracking.
              </p>
            </div>
            <div className="">
              <p className="meta leading-loose">Nuxt.js · Tailwind v4</p>
              <div className="meta mt-5 flex gap-6 text-fg!">
                <a
                  className="transition-colors hover:text-signal"
                  href="https://makamura.vercel.app/"
                  target="_blank"
                >
                  Live ↗
                </a>
                <a
                  className="transition-colors hover:text-signal"
                  href="https://github.com/FCL00/Makamura"
                  target="_blank"
                >
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
              <Image
                className="h-full w-full object-fit"
                src="/assets/voltplay.webp"
                width={1200}
                height={800}
                sizes="100vw"
                alt="Voltplay Landing Page"
                loading="lazy"
              />
            </div>
          </div>
          <div className="grid gap-6 px-5 py-8 md:px-8 ">
            <div className="">
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                VoltPlay
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                VoltPlay is a modern dopamine casino-style gaming platform
                featuring interactive mini-games, virtual credits, and a sleek
                dark UI
              </p>
            </div>
            <div className="">
              <p className="meta leading-loose">React · Tailwind</p>
              <div className="meta mt-5 flex gap-6 text-fg!">
                <a
                  className="transition-colors hover:text-signal"
                  href="https://volt-play.vercel.app/"
                  target="_blank"
                >
                  Live ↗
                </a>
                <ToastButton
                  label="Github"
                  message="Currently Under Development"
                />
              </div>
            </div>
          </div>
        </article>
        <article className="reveal group flex flex-col border-b border-line md:border-r md:last:border-r-0 md:col-span-12">
          <div className="meta flex justify-between px-5 py-3 md:px-8">
            <span className="text-signal">06</span>
            <span>ERP CRM · FULL-STACK</span>
          </div>
          <div className="shot relative overflow-hidden border-y border-line ph aspect-16/8">
            <div className="flex h-full items-center justify-center p-6 text-center">
              <Image
                className="h-full w-full object-fit"
                src="/assets/premier.webp"
                width={1200}
                height={800}
                sizes="100vw"
                alt="Typeflow Landing Page"
                loading="lazy"
              />
            </div>
          </div>
          <div className="grid gap-6 px-5 py-8 md:px-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Premier ERP + CRM
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                Premier is a modern, responsive, production-grade Enterprise
                Resource Planning (ERP) and Customer Relationship Management
                (CRM)
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="meta leading-loose">
                Nextjs · Tailwind · Neon · Better Auth
              </p>
              <div className="meta mt-5 flex gap-6 text-fg!">
                <ToastButton
                  label="Live"
                  message="Currently Under Development"
                />
                <ToastButton
                  label="Github"
                  message="Currently Under Development"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
