import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-line"
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
            I am a full-stack developer based in Manila, Philippines. I design and build applications.
          </p>
          <p>
            I like understanding why an architecture works: Where server state ends and client state begins, and how
            a design system keeps a product consistent.
          </p>
          <p>
            On the backend I use NestJS and Java, plus Express, Node and Prisma
            on some projects. I host my websites on AWS and Cloudflare.
          </p>
        </div>
      </div>
    </section>
  );
}
