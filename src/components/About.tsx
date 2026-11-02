import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-line scroll-mt-12"
      aria-labelledby="about-title"
    >
      <div className="meta flex items-center justify-between border-b border-line px-5 py-3 md:px-8">
        <p>
          02 / <span className="text-fg">About</span>
        </p>
        <span className="hidden sm:inline">Background &amp; approach</span>
      </div>
      <div className="grid gap-12 px-5 py-section md:grid-cols-12 md:px-8">
        <h2 id="about-title" className="display-lg reveal md:col-span-7">
          Interfaces with <span className="text-signal">structure</span>{" "}
          underneath.
        </h2>
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted md:col-span-4 md:col-start-9">
          <p>
            I'm a full-stack developer based in Manila, Philippines. I build web
            applications and enjoy working on both the interface people use and
            the systems behind it.
          </p>
          <p>
            I'm interested in how frontend and backend responsibilities fit
            together, how application state is managed, and how shared
            components help keep an interface consistent.
          </p>
          <p>
            I work with NestJS, Java, Express, Node.js, and Prisma on backend
            projects. I also deploy and host websites using AWS and Cloudflare.
          </p>
        </div>
      </div>
    </section>
  );
}
