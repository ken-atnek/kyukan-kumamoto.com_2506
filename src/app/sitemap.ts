import type { MetadataRoute } from 'next';

import { buildCanonicalUrl, isRealProduction } from '@/lib/site';

export const dynamic = 'force-static';

const pages = ['/', '/service1/', '/works/', '/service2/', '/company/', '/contact/'];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isRealProduction) {
    return [];
  }

  return pages.map((pathname) => ({
    url: buildCanonicalUrl(pathname),
    lastModified: new Date(),
  }));
}
