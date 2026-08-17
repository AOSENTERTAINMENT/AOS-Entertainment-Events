import { CorporatePage } from '../components';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Corporate DJ Cork – Corporate Events',
  description:
    'Corporate DJ Cork for gala dinners, awards nights & brand launches. Professional event DJ Cork with full AV. Book AOS Entertainment.',
  path: '/corporate',
  keywords: ['Corporate DJ Cork', 'corporate event DJ Cork', 'event DJ Cork', 'AOS Entertainment'],
});

export default function Page() {
  return <CorporatePage />;
}
