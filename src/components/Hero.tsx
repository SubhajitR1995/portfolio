import { profile, about } from "@/data/portfolio";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .slice(0, 2)
  .join("");

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Grid + gradient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid text-zinc-400 dark:text-white [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px] dark:bg-brand-500/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-32 h-80 w-80 rounded-full bg-accent-500/10 blur-[100px]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-7 px-6 py-32 sm:py-40">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-xl font-bold text-white shadow-xl shadow-brand-500/30 ring-1 ring-white/10">
            {initials}
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-3 py-1.5 text-xs font-medium text-zinc-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for work
          </span>
        </div>

        <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          <span className="text-zinc-900 dark:text-white">Hi, I&apos;m {profile.name}.</span>
          <br />
          <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-accent-400 bg-clip-text text-transparent">
            {profile.role}
          </span>
        </h1>

        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-900/20 transition-all hover:bg-zinc-800 hover:shadow-xl dark:bg-white dark:text-zinc-900 dark:shadow-white/10 dark:hover:bg-zinc-100"
          >
            View my work
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:hover:border-white/30 dark:hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>

        {/* Stat strip */}
        <dl className="mt-8 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-zinc-200 pt-8 dark:border-white/10">
          {about.highlights.map((h) => (
            <div key={h.label}>
              <dt className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
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
