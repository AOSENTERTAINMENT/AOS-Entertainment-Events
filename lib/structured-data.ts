import { metadataBase } from '@/lib/metadata';

const SITE_NAME = 'AOS Entertainment';
const PHONE = '+353858108000';
const EMAIL = 'alan@aosentertainment.ie';
const LOGO_URL = new URL('/images/dj-alan-logo.png', metadataBase).toString();
const BANNER_URL = new URL('/images/aos-banner.png', metadataBase).toString();
const BASE_URL = metadataBase.toString();

/**
 * LocalBusiness + Service JSON-LD for AOS Entertainment (DJ Cork).
 * Renders on every page for local and service SEO.
 */
export function getStructuredData(): string {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}#business`,
    name: SITE_NAME,
    alternateName: "DJ Alan O'Sullivan",
    description:
      'Professional DJ and event entertainment in Cork. Wedding DJ Cork, Corporate DJ Cork, and Event DJ Cork. Premium sound, lighting, and custom playlists.',
    url: BASE_URL,
    image: [LOGO_URL, BANNER_URL],
    telephone: PHONE,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cork',
      addressRegion: 'County Cork',
      addressCountry: 'IE',
    },
    areaServed: {
      '@type': 'State',
      name: 'Cork',
      containedInPlace: {
        '@type': 'Country',
        name: 'Ireland',
      },
    },
    sameAs: [
      'https://www.facebook.com/DJAlanOSullivan/',
      'https://www.instagram.com/djalanosullivan',
    ],
  };

  const services = [
    {
      '@type': 'Service',
      name: 'Wedding DJ Cork',
      description: 'Wedding DJ and entertainment for Cork weddings. First dance to party finale.',
      provider: { '@id': `${BASE_URL}#business` },
      areaServed: 'Cork, Ireland',
      url: `${BASE_URL}/weddings`,
    },
    {
      '@type': 'Service',
      name: 'Corporate DJ Cork',
      description: 'Corporate event DJ and AV for Cork. Gala dinners, awards nights, conferences.',
      provider: { '@id': `${BASE_URL}#business` },
      areaServed: 'Cork, Ireland',
      url: `${BASE_URL}/corporate`,
    },
    {
      '@type': 'Service',
      name: 'Event DJ Cork',
      description: 'Professional DJ services for parties, clubs and private events in Cork, including birthdays, celebrations and nightlife events.',
      provider: { '@id': `${BASE_URL}#business` },
      areaServed: 'Cork, Ireland',
      url: `${BASE_URL}/clubs-parties`,
    },
  ];

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [localBusiness, ...services],
  };

  return JSON.stringify(graph);
}
