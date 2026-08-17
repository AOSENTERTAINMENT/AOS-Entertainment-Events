import { WeddingsPage } from '../components';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Wedding DJ Cork – Professional Wedding Entertainment',
  description:
    'Wedding DJ Cork for your big day. From first dance to party finale. AOS Entertainment – the Cork wedding DJ that keeps the dancefloor full.',
  path: '/weddings',
  keywords: ['Wedding DJ Cork', 'Cork wedding DJ', 'wedding DJ Ireland', 'AOS Entertainment'],
  image: '/images/wedding-reception.png',
});

export default function Page() {
  return <WeddingsPage />;
}
