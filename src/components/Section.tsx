import type { ReactNode } from "react";

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
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 sm:py-28"
    >
      <div className="mb-12 flex flex-col gap-3">
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-500 dark:text-brand-400">
          {eyebrow}
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <span className="h-px w-16 bg-gradient-to-r from-brand-500 to-transparent" />
      </div>
      {children}
    </section>
  );
}
