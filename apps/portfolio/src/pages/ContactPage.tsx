// apps/portfolio/src/pages/ContactPage.tsx
import { PageShell } from './PageShell';

export function ContactPage() {
  return (
    <PageShell
      title="Contact"
      eyebrow="Let's Talk"
      description="A clear call-to-action page with links, modal entry points, and inquiry details."
      stats={[
        { label: 'Response', value: 'Fast' },
        { label: 'Method', value: 'Email' },
        { label: 'CTA', value: 'Clear' }
      ]}
      cards={[
        { title: 'Project inquiries', text: 'Invite people to discuss portfolios, app builds, or redesigns.' },
        { title: 'Professional links', text: 'Add LinkedIn, GitHub, and social proof links.' },
        { title: 'Brief form', text: 'Keep the inquiry form simple and easy to complete.' }
      ]}
    />
  );
}
