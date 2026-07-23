// packages/ui/src/components/layout.tsx
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './navigation';

type LayoutProps = {
  brand: ReactNode;
  groups: { label: string; items: { label: string; href: string }[] }[];
  footer?: ReactNode;
};

export function Layout({ brand, groups, footer }: LayoutProps) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navigation brand={brand} groups={groups} />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-border/60 px-4 py-10 text-sm text-muted">
        <div className="mx-auto max-w-7xl">{footer ?? '© 2026 Moe Kyaw Aung'}</div>
      </footer>
    </div>
  );
}
