import { DJCorkPage } from '../components';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'DJ Hire Cork – Weddings, Parties & Events',
  description:
    'Professional DJ Cork with 20+ years experience. Wedding DJ Cork, corporate & party DJ. Premium sound & lighting. Book AOS Entertainment.',
  path: '/dj-cork',
  keywords: ['DJ Cork', 'Professional DJ Cork', 'Wedding DJ Cork', 'Event DJ Cork', 'AOS Entertainment'],
});

export default function Page() {
  return <DJCorkPage />;
}
