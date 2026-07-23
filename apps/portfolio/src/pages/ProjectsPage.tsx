// apps/portfolio/src/pages/ProjectsPage.tsx
import { PageShell } from './PageShell';

export function ProjectsPage() {
  return (
    <PageShell
      title="Projects"
      eyebrow="Showcase"
      description="A curated collection of apps, interfaces, and systems that show engineering depth and visual polish."
      stats={[
        { label: 'Featured', value: '10+' },
        { label: 'Focus', value: 'Real UX' },
        { label: 'Style', value: 'Modern' }
      ]}
      cards={[
        { title: 'Android app systems', text: 'Production apps with performance-aware architecture and reliable UI patterns.' },
        { title: 'Frontend portfolios', text: 'High-end landing pages and multi-page experiences with SEO-ready structure.' },
        { title: 'Reusable modules', text: 'Buttons, nav, layouts, and content blocks designed for reuse.' }
      ]}
    />
  );
}
