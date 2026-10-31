import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-12 max-w-352 items-center justify-between px-5 md:px-8"
      >
        <a
          href="#top"
          className="flex items-center font-display text-base font-bold tracking-tight"
        >
          <Image src='/logo.webp' width={48} height={48} alt="logo" loading="eager"/>
          <span>Fernando</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          <li>
            <a className="meta transition-colors hover:text-fg" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="meta transition-colors hover:text-fg" href="#work">
              Projects
            </a>
          </li>
          <li>
            <a className="meta transition-colors hover:text-fg" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="meta transition-colors hover:text-fg" href="#">
              Resume
            </a>
          </li>
        </ul>
        <button
          id="menu-btn"
          className="meta md:hidden"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </nav>
      <ul
        id="mobile-menu"
        className="border-t border-line bg-ink px-5 py-4 md:hidden"
      >
        <li>
          <a
            href="#about"
            className="block border-b border-line py-4 font-display text-3xl font-bold tracking-tight"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#work"
            className="block border-b border-line py-4 font-display text-3xl font-bold tracking-tight"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block border-b border-line py-4 font-display text-3xl font-bold tracking-tight"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-4 font-display text-3xl font-bold tracking-tight"
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}
