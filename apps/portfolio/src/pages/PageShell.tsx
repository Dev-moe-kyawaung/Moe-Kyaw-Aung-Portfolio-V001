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
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(79,140,255,0.18),transparent_26%),linear-gradient(to_bottom,rgba(11,16,32,0.96),rgba(11,16,32,1))]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-brand-2">
              {eyebrow}
            </p>
          ) : null}

          <div className="mt-4 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                {description}
              </p>

              {stats.length > 0 ? (
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-white/10 bg-surface/80 p-5 shadow-lg shadow-black/10"
                    >
                      <div className="text-3xl font-semibold text-text">{stat.value}</div>
                      <div className="mt-2 text-sm text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl shadow-black/20">
              <div className="grid gap-4">
                {cards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-white/10 bg-bg/70 p-4 transition hover:border-white/20 hover:bg-bg/90"
                  >
                    <h2 className="font-semibold">{card.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted">{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {children ? <div className="mt-12">{children}</div> : null}
        </section>
      </div>
    </div>
  );
}
