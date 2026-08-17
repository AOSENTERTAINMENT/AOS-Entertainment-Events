import { MetadataRoute } from 'next';
import { getSiteOrigin } from '@/lib/metadata';

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin();
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
