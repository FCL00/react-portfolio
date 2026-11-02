export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-12"
      aria-labelledby="skills-title"
    >
      <div className="meta flex items-center justify-between border-b border-line px-5 py-3 md:px-8">
        <span>
          04 / <span className="text-fg">Skills</span>
        </span>
        <span className="hidden sm:inline">Tools</span>
      </div>
      <div className="px-5 py-section md:px-8">
        <h2 id="skills-title" className="display-lg">
          What I <span className="text-signal">work</span> with.
        </h2>
      </div>
      <div
        className="grid border-t border-line gap-px bg-line sm:grid-cols-2 lg:grid-cols-4"
        id="skills-grid"
      >
        <div className="px-5 py-8 md:px-8 bg-ink">
          <h3 className="meta mb-5">
            <span className="text-signal">01</span> · Frontend
          </h3>
          <ul className="space-y-2 font-display text-xl font-semibold tracking-tight">
            <li>Next.js</li>
            <li>React</li>
            <li>Vue / Nuxt.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>GSAP / Motion</li>
          </ul>
        </div>
        <div className="px-5 py-8 md:px-8 bg-ink">
          <h3 className="meta mb-5">
            <span className="text-signal">02</span> · State &amp; data
          </h3>
          <ul className="space-y-2 font-display text-xl font-semibold tracking-tight">
            <li>Zustand</li>
            <li>TanStack Query</li>
            <li>Zod</li>
          </ul>
        </div>
        <div className="px-5 py-8 md:px-8 bg-ink">
          <h3 className="meta mb-5">
            <span className="text-signal">03</span> · Backend
          </h3>
          <ul className="space-y-2 font-display text-xl font-semibold tracking-tight">
            <li>Node.js / Express</li>
            <li>Nestjs</li>
            <li>Java / SpringBoot</li>
            <li>Prisma</li>
            <li>Better Auth</li>
          </ul>
        </div>
        <div className="px-5 py-8 md:px-8 bg-ink">
          <h3 className="meta mb-5">
            <span className="text-signal">04</span> · Cloud &amp; Tools
          </h3>
          <ul className="space-y-2 font-display text-xl font-semibold tracking-tight">
            <li>AWS</li>
            <li>Cloudflare</li>
            <li>Turborepo</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
