import { GalleryPage } from '../components';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'DJ Gallery Cork – Events & Dancefloors',
  description:
    'See AOS Entertainment in action. Wedding receptions, corporate events & parties across Cork. Your next event could be here.',
  path: '/gallery',
  keywords: ['DJ Cork gallery', 'wedding DJ Cork photos', 'event DJ Cork', 'AOS Entertainment'],
  image: '/images/full-dancefloor.png',
});

export default function Page() {
  return <GalleryPage />;
}
