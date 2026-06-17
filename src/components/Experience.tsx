import { experience } from "@/data/portfolio";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Career" title="Work experience">
      <ol className="relative border-l border-zinc-200 dark:border-white/10">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="ml-6 pb-10 last:pb-0">
            <span className="absolute -left-[7px] mt-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 ring-4 ring-white dark:ring-[#08080a]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold">{item.role}</h3>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {item.period}
              </span>
            </div>
            <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
              {item.company}
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
