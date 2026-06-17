import { projects } from "@/data/portfolio";
import Section from "./Section";

function thumbnail(url: string): string {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1000&h=750`;
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Work" title="Selected projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          const host = project.liveUrl
            ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
            : null;

          return (
            <article
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-2xl hover:shadow-brand-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-500/40"
            >
              {/* Live screenshot preview */}
              {project.liveUrl && (
                <div className="relative aspect-[4/3] overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumbnail(project.liveUrl)}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    {host && (
                      <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                        {host}
                      </span>
                    )}
                  </div>
                  {project.liveUrl && (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-all group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white dark:border-white/15">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>

                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-white/5 dark:text-zinc-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

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
