import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28"
    >
      <Reveal>
        <div className="mb-12 flex flex-col gap-3">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-brand-500 dark:text-brand-400">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
          <span className="h-px w-16 bg-zinc-300 dark:bg-white/15" />
        </div>
      </Reveal>
      <Reveal delay={80}>{children}</Reveal>
    </section>
  );
}
