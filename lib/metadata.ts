import type { Metadata } from 'next';

const SITE_NAME = 'AOS Entertainment';
const LOCALE = 'en_IE';

/** Base URL for canonical and OpenGraph. Set via NEXT_PUBLIC_APP_URL or VERCEL_URL in production. */
function getMetadataBase(): string {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    const url = process.env.NEXT_PUBLIC_APP_URL;
    return url.startsWith('http') ? url : `https://${url}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'https://aosentertainment.ie';
}

/** Default OpenGraph image path (absolute URL built from metadataBase). */
const DEFAULT_OG_IMAGE = '/images/aos-banner.png';

export const metadataBase = new URL(getMetadataBase());

/** Canonical origin for sitemap, robots, and absolute URLs (no trailing slash). */
export function getSiteOrigin(): string {
  return metadataBase.origin;
}

export interface PageMetadataInput {
  /** Page title (under 60 chars). Will be used with template: "%s | AOS Entertainment". */
  title: string;
  /** Meta description, 140–160 chars for CTR. */
  description: string;
  /** Path for canonical and og:url (e.g. "/weddings"). */
  path: string;
  /** Optional keywords array (for meta keywords). */
  keywords?: string[];
  /** Optional OG image path (e.g. "/images/wedding-reception.png"). Defaults to DEFAULT_OG_IMAGE. */
  image?: string;
}

/**
 * Builds Next.js Metadata for a page: title, description, keywords, openGraph, canonical.
 * Keeps metadata consistent and avoids duplication.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
}: PageMetadataInput): Metadata {
  const canonicalUrl = new URL(path, metadataBase).toString();
  const imageUrl = new URL(image, metadataBase).toString();

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} – ${title}`,
        },
      ],
      locale: LOCALE,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

/** Default robots for the site. */
export const defaultRobots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
  },
};
