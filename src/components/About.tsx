import { about, profile } from "@/data/portfolio";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A bit about me">
      <div className="grid gap-12 sm:grid-cols-5">
        <div className="space-y-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:col-span-3">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {["WordPress", "PHP", "JavaScript", "Responsive Design"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="rounded-3xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white p-8 dark:border-white/10 dark:from-white/[0.04] dark:to-transparent">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Currently
            </div>
            <p className="mt-3 text-base font-semibold">{profile.role}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Webskitters Technology Solutions Pvt. Ltd.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {profile.location}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
