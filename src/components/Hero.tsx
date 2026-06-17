import { profile, about } from "@/data/portfolio";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .slice(0, 2)
  .join("");

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Light: clean tinted gradient. Dark: subtle blurred glow. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/60 via-white to-white dark:hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 hidden h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[130px] dark:block"
      />
      {/* Subtle dotted grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid text-zinc-300 dark:text-white [mask-image:radial-gradient(ellipse_at_top,black,transparent_60%)]"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 py-32 sm:py-40">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-lg font-semibold text-white">
            {initials}
          </div>
          <div className="flex flex-col gap-1">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for work
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {profile.location}
            </span>
          </div>
        </div>

        <h1 className="font-display max-w-3xl text-5xl font-medium leading-[1.08] tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
          {profile.role.includes("WordPress")
            ? "Software Engineer crafting fast, refined WordPress experiences."
            : profile.role}
        </h1>

        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I&apos;m {profile.name} — {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            View my work
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="rounded-md border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-white/5"
          >
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-zinc-600 underline-offset-4 transition-colors hover:text-brand-600 hover:underline dark:text-zinc-400 dark:hover:text-brand-400"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Résumé
          </a>
        </div>

        {/* Stat strip */}
        <dl className="mt-6 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-zinc-200 pt-8 dark:border-white/10">
          {about.highlights.map((h) => (
            <div key={h.label}>
              <dt className="font-display text-3xl font-medium text-zinc-900 dark:text-white">
                {h.value}
              </dt>
              <dd className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
                {h.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
