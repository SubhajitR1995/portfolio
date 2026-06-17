import { profile } from "@/data/portfolio";
import Section from "./Section";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="06 — Contact" title="Let's work together">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl"
        />

        <div className="relative">
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Have a project in mind or just want to say hello? Drop me a message
            below, or reach me directly:
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 transition-colors hover:border-brand-300 hover:bg-white hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-500/50 dark:hover:text-brand-400"
            >
              ✉ {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 transition-colors hover:border-brand-300 hover:bg-white hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-500/50 dark:hover:text-brand-400"
            >
              ☎ {profile.phone}
            </a>
          </div>

          <ContactForm />

          <div className="mt-10 flex gap-6 border-t border-zinc-200 pt-6 text-sm font-medium text-zinc-600 dark:border-white/10 dark:text-zinc-400">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-500"
            >
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-500"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
