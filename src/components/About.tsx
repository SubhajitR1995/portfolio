import { about } from "@/data/portfolio";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 sm:grid-cols-3">
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400 sm:col-span-2">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="leading-7">
              {p}
            </p>
          ))}
        </div>
        <ul className="space-y-6">
          {about.highlights.map((h) => (
            <li key={h.label}>
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">
                {h.value}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                {h.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
