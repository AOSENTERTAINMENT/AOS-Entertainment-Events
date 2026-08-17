import { PrivacyPolicyPage } from '../components';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy policy for AOS Entertainment. How we collect, use and protect your data when you use our DJ Cork website and contact form.',
  path: '/privacy-policy',
  keywords: ['AOS Entertainment privacy', 'DJ Cork privacy policy'],
});

export default function Page() {
  return <PrivacyPolicyPage />;
}
