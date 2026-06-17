const fallbackSiteUrl = 'https://kyukan-kumamoto.com/';

export const isRealProduction =
  process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_METADATA_BASE || fallbackSiteUrl
);

export const siteName = '株式会社久環';

export const defaultOgImage = '/images/ogp.jpg';

export function buildCanonicalUrl(pathname = '/') {
  return new URL(pathname, metadataBase).toString();
}
