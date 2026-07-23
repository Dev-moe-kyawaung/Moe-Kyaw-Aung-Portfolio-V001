// apps/portfolio/src/App.tsx
import { SiteShell } from './components/SiteShell';
import { routes } from './routes';

export function App() {
  return <SiteShell routes={routes} />;
}
