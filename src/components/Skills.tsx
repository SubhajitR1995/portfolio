import { skills } from "@/data/portfolio";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="05 — Toolkit" title="Skills & technologies">
      <div className="grid gap-6 sm:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-zinc-200 bg-zinc-50/40 p-6 transition-colors hover:border-brand-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-500/40"
          >
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-brand-500/50 dark:hover:text-brand-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
