export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title">
      <div className="meta flex items-center justify-between border-b border-line px-5 py-3 md:px-8">
        <span>
          01 / <span className="text-fg">Index</span>
        </span>
        <span className="hidden sm:inline">
          Fullstack web developer · Philippines
        </span>
      </div>
      <div className="px-5 pb-16 pt-16 md:px-8 md:pt-28">
        <p className="meta hero-line mb-8">Open to local and remote roles</p>
        <h1 id="hero-title" className="display-xl">
          <span className="hero-line block">Fernando Lagahit</span>
          <span className="hero-line block">
            A <span className="text-signal">Fullstack</span>
          </span>
          <span className="hero-line block">Web developer.</span>
        </h1>
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <p className="hero-line max-w-md text-lg leading-relaxed text-muted md:col-span-5 md:col-start-8">
            Full-stack developer working in Next.js, React and Vue up front, and
            NestJS and Java on the back end. I host on AWS and Cloudflare, and I
            care about interfaces that stay fast and readable.
          </p>
        </div>
        <div className="hero-line mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="meta inline-flex h-11 items-center border border-fg bg-fg px-5 text-ink transition-colors hover:border-signal hover:bg-signal"
          >
            Explore projects
          </a>
          <a
            href="#"
            className="meta inline-flex h-11 items-center border border-line px-5 text-fg transition-colors hover:border-fg"
          >
            LinkedIn ↗
          </a>
          <a
            href="#contact"
            className="meta inline-flex h-11 items-center border border-line px-5 text-fg transition-colors hover:border-fg"
          >
            Contact
          </a>
          {/* <a
            href="#resume"
            className="meta inline-flex h-11 items-center border border-line px-5 text-fg transition-colors hover:border-fg"
          >
            Resume
          </a> */}
        </div>
      </div>
    </section>
  );
}
