// apps/portfolio/src/pages/PortfolioPage.tsx
import { PageShell } from './PageShell';

export function PortfolioPage() {
  return (
    <PageShell
      title="Portfolio"
      eyebrow="Highlights"
      description="A broader gallery of web and mobile interfaces, architecture decisions, and delivery details."
      stats={[
        { label: 'Format', value: 'Gallery' },
        { label: 'Content', value: 'Selected' },
        { label: 'Focus', value: 'Brand' }
      ]}
      cards={[
        { title: 'Hero projects', text: 'Place your strongest visuals and links here.' },
        { title: 'Reusable patterns', text: 'Show component-driven consistency across pages.' },
        { title: 'Motion and polish', text: 'Add tasteful animation where it strengthens the presentation.' }
      ]}
    />
  );
}
