// apps/portfolio/src/pages/SkillsPage.tsx
import { PageShell } from './PageShell';

export function SkillsPage() {
  return (
    <PageShell
      title="Skills"
      eyebrow="Expertise"
      description="A focused technical stack spanning Android, Flutter, React, TypeScript, Tailwind CSS, CI/CD, and SEO-conscious production delivery."
      stats={[
        { label: 'Frontend', value: 'React' },
        { label: 'Mobile', value: 'Flutter' },
        { label: 'Delivery', value: 'CI/CD' }
      ]}
      cards={[
        { title: 'Android development', text: 'Senior-level app architecture, performance, state, and release quality.' },
        { title: 'Frontend systems', text: 'Reusable component design, responsive layouts, and semantic markup.' },
        { title: 'Optimization', text: 'Loading speed, asset management, and production tuning.' }
      ]}
    />
  );
}
