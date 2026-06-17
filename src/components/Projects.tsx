import { projects } from "@/data/portfolio";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="02 — Work" title="Selected projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          const host = project.liveUrl
            ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
            : null;

          return (
            <article
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-brand-500/50"
            >
              {/* Accent glow on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-500/0 blur-2xl transition-colors duration-300 group-hover:bg-brand-500/10"
              />

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                {project.liveUrl && (
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-all group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white dark:border-zinc-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </div>

              {host && (
                <span className="mt-1 font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  {host}
                </span>
              )}

              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label={`Visit ${project.title}`}
                />
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
