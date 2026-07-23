// apps/portfolio/src/routes.tsx
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AndroidPage } from './pages/AndroidPage';
import { FlutterPage } from './pages/FlutterPage';
import { FrontendPage } from './pages/FrontendPage';
import { PerformancePage } from './pages/PerformancePage';
import { DevOpsPage } from './pages/DevOpsPage';
import { SEOPage } from './pages/SEOPage';
import { UISystemPage } from './pages/UISystemPage';
import { ComponentsPage } from './pages/ComponentsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ResumePage } from './pages/ResumePage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

export const routes = [
  { path: '/home', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/skills', element: <SkillsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/case-studies', element: <CaseStudiesPage /> },
  { path: '/portfolio', element: <PortfolioPage /> },
  { path: '/android', element: <AndroidPage /> },
  { path: '/flutter', element: <FlutterPage /> },
  { path: '/frontend', element: <FrontendPage /> },
  { path: '/performance', element: <PerformancePage /> },
  { path: '/devops', element: <DevOpsPage /> },
  { path: '/seo', element: <SEOPage /> },
  { path: '/ui-system', element: <UISystemPage /> },
  { path: '/components', element: <ComponentsPage /> },
  { path: '/testimonials', element: <TestimonialsPage /> },
  { path: '/resume', element: <ResumePage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/privacy', element: <PrivacyPage /> }
];
