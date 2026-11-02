export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="scroll-mt-16">
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
            A <span className="text-signal">Full-Stack</span>
          </span>
          <span className="hero-line block">Web developer.</span>
        </h1>
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <p className="hero-line max-w-md text-lg leading-relaxed text-muted md:col-span-5 md:col-start-8">
            I build web applications with Next/React, and Nuxt/Vue, alongside
            backend technologies such as NestJS and Java SpringBoot. I also work with AWS
            and Cloudflare to deploy and host applications. I care about
            building interfaces that are clear, responsive, and easy to use.
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
            href="https://www.linkedin.com/in/fernando-lagahit-524095292/"
            target="_blank"
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
