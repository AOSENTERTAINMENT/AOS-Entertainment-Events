import { AboutPage } from '../components';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Professional DJ Cork – About AOS Entertainment',
  description:
    'Meet DJ Alan O\'Sullivan. 20+ years as a professional DJ in Cork – weddings, clubs, corporate events. Open-format DJ Cork you can trust.',
  path: '/about',
  keywords: ['DJ Cork', 'professional DJ Cork', 'Alan O\'Sullivan', 'AOS Entertainment'],
  image: '/images/dj-alan.png',
});

export default function Page() {
  return <AboutPage />;
}
