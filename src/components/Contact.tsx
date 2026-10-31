export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line"
      aria-labelledby="contact-title"
    >
      <div className="meta flex items-center justify-between border-b border-line px-5 py-3 md:px-8">
        <span>
          05 / <span className="text-fg">Contact</span>
        </span>
        <span className="hidden sm:inline">Get in touch</span>
      </div>
      <div className="px-5 pt-section md:px-8">
        <h2 id="contact-title" className="display-xl">
          Let's build <span className="text-signal">something</span> good.
        </h2>
        <p className="mt-8 max-w-lg text-lg text-muted">
          Hiring, a project, or a question about how something I built works -
          send a note.
        </p>
      </div>
      <div className="mt-16 grid border-t border-line md:grid-cols-12">
        <div className="space-y-6 border-b border-line px-5 py-10 md:col-span-5 md:border-b-0 md:border-r md:px-8">
          <a
            href="#"
            className="block break-all font-display text-2xl font-bold tracking-tight transition-colors hover:text-signal"
          >
            flagahit00@gmail.com
          </a>
          <p className="meta">Philippines</p>
          <ul className="meta space-y-3 text-fg">
            <li>
              <a className="transition-colors hover:text-signal" href="#">
                GitHub ↗
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-signal" href="#">
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>
        <div className="px-5 py-10 md:col-span-7 md:px-8">
          <form id="contact-form" className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="meta grid gap-2">
                Name
                <input
                  required
                  name="name"
                  autoComplete="off"
                  className="w-full border border-line bg-surface px-4 py-3 font-sans text-base normal-case tracking-normal text-fg transition-colors focus:border-signal focus:outline-none"
                />
              </label>
              <label className="meta grid gap-2">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="off"
                  className="w-full border border-line bg-surface px-4 py-3 font-sans text-base normal-case tracking-normal text-fg transition-colors focus:border-signal focus:outline-none"
                />
              </label>
            </div>
            <label className="meta grid gap-2">
              Message
              <textarea
                required
                minLength={10}
                rows={5}
                name="message"
                className="w-full border border-line bg-surface px-4 py-3 font-sans text-base normal-case tracking-normal text-fg transition-colors focus:border-signal focus:outline-none"
                style={{ height: "182px"}}
              ></textarea>
            </label>
            <button className="meta h-12 text-ink bg-fg transition-colors hover:bg-signal">
              Send message
            </button>
            <p
              id="form-status"
              role="status"
              aria-live="polite"
              className="meta text-signal"
            ></p>
          </form>
        </div>
      </div>
    </section>
  );
}
