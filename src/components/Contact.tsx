import ContactForm from "@/components/ContactForm";
import CopyEmail from "@/components/CopyEmail";

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
          <CopyEmail/>
          <p className="meta">Philippines</p>
          <ul className="meta space-y-3 text-fg">
            <li>
              <a className="transition-colors hover:text-signal" href="https://github.com/FCL00" target="_blank">
                GitHub ↗
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-signal" href="https://www.facebook.com/fernando.lagahit.52" target="_blank">
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>
        <div className="px-5 py-10 md:col-span-7 md:px-8">
          <ContactForm/>
        </div>
      </div>
    </section>
  );
}
