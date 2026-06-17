import type { MetadataRoute } from 'next';

import { buildCanonicalUrl, isRealProduction } from '@/lib/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  if (!isRealProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: buildCanonicalUrl('/sitemap.xml'),
  };
}
