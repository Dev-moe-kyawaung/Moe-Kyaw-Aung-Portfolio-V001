// apps/portfolio/src/pages/AndroidPage.tsx
import { PageShell } from './PageShell';

export function AndroidPage() {
  return (
    <PageShell
      title="Android Development"
      eyebrow="Platform"
      description="Android app engineering, architecture, performance, and scalable delivery patterns."
      stats={[
        { label: 'Primary Platform', value: 'Android' },
        { label: 'Strength', value: 'Architecture' },
        { label: 'Goal', value: 'Reliable' }
      ]}
      cards={[
        { title: 'App architecture', text: 'Clean boundaries, predictable state, and maintainable code structure.' },
        { title: 'Performance', text: 'Smooth UI, startup improvements, and efficient data flow.' },
        { title: 'Shipping', text: 'Release workflows that are stable and repeatable.' }
      ]}
    />
  );
}
