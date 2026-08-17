import { ContactPage } from '../components';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Contact – Book Your Event',
  description:
    'Book your DJ in Cork. Get in touch for weddings, corporate events & parties. Check availability and get a quote from AOS Entertainment today.',
  path: '/contact',
  keywords: ['DJ Cork contact', 'book DJ Cork', 'Wedding DJ Cork quote', 'AOS Entertainment'],
});

export default function Page() {
  return <ContactPage />;
}
