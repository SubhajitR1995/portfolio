"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const initials = profile.name
  .split(" ")
  .map((p) => p[0])
  .slice(0, 2)
  .join("");

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-xl dark:border-white/5 dark:bg-[#08080a]/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 text-base font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-xs text-white shadow-lg shadow-brand-500/20">
            {initials}
          </span>
          {profile.name}
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brand-500 after:transition-all hover:text-zinc-950 hover:after:w-full dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mx-2 hidden h-5 w-px bg-zinc-200 dark:bg-white/10 md:block" />

          <ThemeToggle />

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 md:inline-block"
          >
            Hire me
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5 md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-zinc-200 px-6 py-3 dark:border-white/5 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-md bg-zinc-900 px-2 py-2 text-center text-sm font-medium text-white dark:bg-white dark:text-zinc-900"
            >
              Hire me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
