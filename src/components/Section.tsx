import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 sm:py-20"
    >
      <h2 className="mb-10 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
