// apps/portfolio/src/pages/AboutPage.tsx
import { PageShell } from './PageShell';

export function AboutPage() {
  return (
    <PageShell
      title="About Moe Kyaw Aung"
      eyebrow="Profile"
      description="Senior Android developer focused on architecture, UI quality, performance, and dependable delivery across modern web and mobile projects."
      stats={[
        { label: 'Specialty', value: 'Android' },
        { label: 'Platform Range', value: 'Web + Mobile' },
        { label: 'Style', value: 'Premium' }
      ]}
      cards={[
        { title: 'Engineering mindset', text: 'Describe how you design systems that scale across products and teams.' },
        { title: 'Delivery standard', text: 'Mention your focus on quality, automation, and maintainability.' },
        { title: 'Visual polish', text: 'Show your interest in motion, layout rhythm, and professional presentation.' }
      ]}
    />
  );
}
