
"use client";

import { useState } from "react";
import Image from "next/image";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "#" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-12 max-w-352 items-center justify-between px-5 md:px-8"
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="flex items-center font-display text-base font-bold tracking-tight"
        >
          <Image
            src="/logo.webp"
            width={48}
            height={48}
            alt=""
            priority
          />
          <span>Fernando</span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden gap-8 md:flex">
          {navigationLinks.map((link) => (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                className="meta transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="meta rounded-sm transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile navigation */}
      <ul
        id="mobile-menu"
        hidden={!isMenuOpen}
        className="border-t border-line bg-ink px-5 py-4 md:hidden"
      >
        {navigationLinks.map((link, index) => (
          <li key={link.href + link.label}>
            <a
              href={link.href}
              onClick={closeMenu}
              className={`block py-4 font-display text-3xl font-bold tracking-tight transition-colors hover:text-fg ${
                index !== navigationLinks.length - 1
                  ? "border-b border-line"
                  : ""
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
