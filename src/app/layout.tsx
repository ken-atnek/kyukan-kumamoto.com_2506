/* =======================================
 * 久環 Layout
 * URL:src/app/layout.tsx
 * Created: 2025-06-10
 * Last updated: 2025-06-10
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { Noto_Sans_JP } from 'next/font/google';
import { Libre_Franklin } from 'next/font/google';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import {
  defaultOgImage,
  isRealProduction,
  metadataBase,
  siteName,
} from '@/lib/site';

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});
const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // 必要なウェイトだけでOK
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: '株式会社久環',
    template: '%s',
  },
  description:
    '熊本・水俣を中心に、解体工事から産業廃棄物の収集運搬・中間処理まで一貫して対応する株式会社久環の公式サイトです。',
  ...(isRealProduction && {
    openGraph: {
      type: 'website',
      siteName,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: '株式会社久環のOGP画像',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: [defaultOgImage],
    },
  }),
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
  icons: [
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSans.className} ${libreFranklin.className}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
