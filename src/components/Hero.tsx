import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24 sm:py-32"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Available for work
      </span>

      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Hi, I&apos;m {profile.name}.
        <br />
        <span className="text-zinc-500 dark:text-zinc-400">{profile.role}.</span>
      </h1>

      <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {profile.tagline}
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
