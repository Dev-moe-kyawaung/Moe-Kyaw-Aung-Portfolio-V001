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
        { title: 'Hero project delivery', text: 'Showcase your strongest flagship project with a result-driven summary.' },
        { title: 'Shared system design', text: 'Explain your reusable layout, UI tokens, and component architecture.' },
        { title: 'Deployment ready', text: 'Highlight your CI/CD, hosting, and optimization workflow.' }
      ]}
    >
      <section className="grid gap-6 md:grid-cols-3">
        {[
          'Production-ready frontend architecture.',
          'Mobile-first responsive design system.',
          'Project showcase with senior technical credibility.'
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-border bg-surface p-6 text-sm text-muted">
            {item}
          </div>
        ))}
      </section>
    </PageShell>
  );
}
