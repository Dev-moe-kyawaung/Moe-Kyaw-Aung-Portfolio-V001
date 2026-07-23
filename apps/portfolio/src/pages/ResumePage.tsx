// apps/portfolio/src/pages/ResumePage.tsx
import { PageShell } from './PageShell';

export function ResumePage() {
  return (
    <PageShell
      title="Resume"
      eyebrow="CV"
      description="Experience summary, core stack, career highlights, and downloadable PDF entry point."
      stats={[
        { label: 'Format', value: 'PDF' },
        { label: 'Summary', value: 'Compact' },
        { label: 'Use', value: 'Hiring' }
      ]}
      cards={[
        { title: 'Core experience', text: 'Summarize years, roles, and major responsibilities.' },
        { title: 'Key tools', text: 'List Android, Flutter, React, and delivery systems.' },
        { title: 'Availability', text: 'Add contact and engagement details.' }
      ]}
    />
  );
}
