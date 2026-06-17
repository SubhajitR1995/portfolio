import { services } from "@/data/portfolio";
import Section from "./Section";

export default function Services() {
  return (
    <Section id="services" eyebrow="02 — Services" title="What I do">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 shadow-sm dark:border-white/10 dark:bg-white/10 dark:shadow-none sm:grid-cols-2">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="group bg-white p-8 transition-colors hover:bg-zinc-50 dark:bg-[#0b0b0d] dark:hover:bg-white/[0.03]"
          >
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
