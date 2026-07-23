// apps/portfolio/src/pages/ServicesPage.tsx
import { PageShell } from './PageShell';

export function ServicesPage() {
  return (
    <PageShell
      title="Services"
      eyebrow="Offerings"
      description="Portfolio builds, app architecture, reusable component systems, and deployment-ready frontend delivery."
      stats={[
        { label: 'Service Type', value: 'Build' },
        { label: 'Delivery', value: 'Fast' },
        { label: 'Outcome', value: 'Polished' }
      ]}
      cards={[
        { title: 'Portfolio websites', text: 'Premium personal sites with clear branding and strong technical presence.' },
        { title: 'Reusable systems', text: 'Shared UI architecture and design tokens for future growth.' },
        { title: 'Launch support', text: 'SEO, build setup, deployment, and performance optimization.' }
      ]}
    />
  );
}
