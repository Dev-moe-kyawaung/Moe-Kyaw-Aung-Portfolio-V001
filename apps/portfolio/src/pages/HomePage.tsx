// apps/portfolio/src/pages/HomePage.tsx
import { PageShell } from './PageShell';

export function HomePage() {
  return (
    <PageShell
      title="Moe Kyaw Aung Portfolio V.001"
      eyebrow="Android Senior Developer"
      description="A premium portfolio built for production: Android, Flutter, frontend, DevOps, SEO, and performance-focused engineering."
      stats={[
        { label: 'Years Experience', value: '12+' },
        { label: 'Core Stack', value: 'Android + React' },
        { label: 'Focus', value: 'Performance' }
      ]}
      cards={[
        { title: 'Production-ready architecture', text: 'Clean layout boundaries, shared UI, and scalable route structure.' },
        { title: 'Premium visual system', text: 'Layered gradients, glass cards, and a deep technical color palette.' },
        { title: 'Senior positioning', text: 'Clear project showcases built to communicate credibility fast.' }
      ]}
    >
      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {[
          'Mobile-first layout with strong reading rhythm.',
          'Project showcase blocks with high visual polish.',
          'SEO and performance considerations built into the structure.'
        ].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-6 text-muted shadow-lg shadow-black/10 backdrop-blur"
          >
            {item}
          </div>
        ))}
      </section>
    </PageShell>
  );
}
