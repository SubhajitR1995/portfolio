import { about } from "@/data/portfolio";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A bit about me">
      <div className="grid gap-12 sm:grid-cols-5">
        <div className="space-y-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:col-span-3">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 sm:col-span-2 sm:grid-cols-1">
          {about.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 transition-colors hover:border-brand-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-brand-500/50"
            >
              <div className="bg-gradient-to-r from-brand-500 to-brand-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                {h.value}
              </div>
              <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {h.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
