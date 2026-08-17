import { HomePage } from './components';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'DJ Cork – Weddings & Events',
  description:
    'Book your Wedding DJ Cork & Event DJ Cork. AOS Entertainment brings 20+ years of experience to Cork weddings, corporate events & parties.',
  path: '/',
  keywords: ['DJ Cork', 'Wedding DJ Cork', 'Event DJ Cork', 'Corporate DJ Cork', 'AOS Entertainment'],
});

export default function Page() {
  return <HomePage />;
}
