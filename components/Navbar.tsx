"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-[#e5e5e5] sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-6xl h-[60px] md:h-[70px] items-center justify-between px-6"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} aria-label="Samrat Motor Driving School home">
          <Image
            src="/images/logo.png"
            alt="Samrat Motor Driving School"
            width={220}
            height={56}
            className="h-11 md:h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-underline font-body text-sm font-medium pb-0.5 transition-colors ${
                    isActive
                      ? "text-[#3a6b35] nav-active"
                      : "text-ink hover:text-[#3a6b35]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-[#e5e5e5] bg-white">
          <ul className="flex flex-col" role="list">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-6 py-3 font-body text-sm font-medium border-b border-[#f0f0f0] transition-colors ${
                      isActive
                        ? "text-[#3a6b35] font-semibold bg-[#3a6b35]/5"
                        : "text-ink hover:text-[#3a6b35] hover:bg-[#3a6b35]/5"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
