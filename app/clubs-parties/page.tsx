import { ClubsPartiesPage } from '../components';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Party DJ Cork – Clubs & Events',
  description:
    'Event DJ Cork for 21sts, 30ths, clubs & festivals. High-energy party DJ Cork. Music Bingo, karaoke & more. AOS Entertainment.',
  path: '/clubs-parties',
  keywords: ['Event DJ Cork', 'party DJ Cork', 'club DJ Cork', 'Cork events', 'AOS Entertainment'],
});

export default function Page() {
  return <ClubsPartiesPage />;
}
