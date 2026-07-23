// apps/portfolio/src/pages/PageShell.tsx
import type { ReactNode } from 'react';

type Stat = {
  label: string;
  value: string;
};

type Card = {
  title: string;
  text: string;
};

type PageShellProps = {
  title: string;
  eyebrow?: string;
  description: string;
  stats?: Stat[];
  cards?: Card[];
  children?: ReactNode;
};

export function PageShell({
  title,
  eyebrow,
  description,
  stats = [],
  cards = [],
  children
}: PageShellProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-2">
          {eyebrow}
        </p>
      ) : null}

      <section className="mt-4 grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-start">
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{description}</p>

          {stats.length > 0 ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-border bg-surface p-5">
                  <div className="text-3xl font-semibold text-text">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="rounded-3xl border border-border bg-surface-2 p-6">
          <div className="grid gap-4">
            {cards.map((card) => (
              <article key={card.title} className="rounded-2xl bg-bg p-4">
                <h2 className="font-semibold">{card.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {children ? <div className="mt-14">{children}</div> : null}
    </div>
  );
}
