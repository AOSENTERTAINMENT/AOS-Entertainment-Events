import { MetadataRoute } from 'next';
import { getSiteOrigin } from '@/lib/metadata';

/**
 * Indexable public pages only (each route has `app/<segment>/page.tsx`, plus home).
 *
 * Excluded by design:
 * - `/api/*` (not pages; not for organic search)
 * - Any preview/admin/thank-you routes (none exist in this project)
 *
 * Production URL base: https://aosentertainment.ie (from NEXT_PUBLIC_APP_URL or fallback in `lib/metadata.ts`).
 */
const INDEXABLE_PATHS = [
  '', // home
  '/about',
  '/contact',
  '/corporate',
  '/clubs-parties',
  '/dj-cork',
  '/gallery',
  '/weddings',
  '/privacy-policy',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();
  const lastModified = new Date();

  return INDEXABLE_PATHS.map((path) => {
    const url = path === '' ? `${origin}/` : `${origin}${path}`;
    const changeFrequency: 'weekly' | 'monthly' =
      path === '' || path === '/contact' ? 'weekly' : 'monthly';
    const priority = path === '' ? 1 : path === '/contact' ? 0.9 : 0.8;

    return {
      url,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
