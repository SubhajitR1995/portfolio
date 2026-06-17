import { profile } from "@/data/portfolio";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .slice(0, 2)
  .join("");

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative gradient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-500/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-7 px-6 py-28 sm:py-36">
        <div className="flex items-center gap-4 animate-fade-up">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white shadow-lg shadow-brand-500/25">
            {initials}
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-600 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for work
          </span>
        </div>

        <h1 className="animate-fade-up text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
          Hi, I&apos;m {profile.name}.
          <br />
          <span className="bg-gradient-to-r from-brand-500 to-brand-400 bg-clip-text text-transparent">
            {profile.role}
          </span>
        </h1>

        <p className="max-w-xl animate-fade-up text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-3 animate-fade-up">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-900/10 transition-all hover:bg-zinc-800 hover:shadow-xl dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            View my work
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-2 flex items-center gap-5 animate-fade-up text-sm text-zinc-500 dark:text-zinc-400">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-500"
          >
            GitHub
          </a>
          <span className="h-3 w-px bg-zinc-300 dark:bg-zinc-700" />
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-500"
          >
            LinkedIn
          </a>
          <span className="h-3 w-px bg-zinc-300 dark:bg-zinc-700" />
          <span className="inline-flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
