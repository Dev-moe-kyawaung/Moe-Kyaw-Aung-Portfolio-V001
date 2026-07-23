// apps/portfolio/src/pages/UISystemPage.tsx
import { PageShell } from './PageShell';

export function UISystemPage() {
  return (
    <PageShell
      title="UI System"
      eyebrow="Design Tokens"
      description="Reusable tokens, surfaces, spacing, and typography rules for scalable consistency."
      stats={[
        { label: 'System', value: 'Tokens' },
        { label: 'Benefit', value: 'Consistency' },
        { label: 'Scale', value: 'High' }
      ]}
      cards={[
        { title: 'Semantic color set', text: 'Brand, surface, text, border, and muted roles.' },
        { title: 'Spacing rhythm', text: 'Predictable spacing and layout cadence across pages.' },
        { title: 'Typography rules', text: 'Clear hierarchy for headings, body, and captions.' }
      ]}
    />
  );
}
