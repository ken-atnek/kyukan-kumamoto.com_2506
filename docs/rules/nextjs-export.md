## Next.js 15 App Router と static export の注意点

### `robots.ts` / `sitemap.ts` には `force-static` を付ける

`output: "export"` を使う案件で `src/app/robots.ts` / `src/app/sitemap.ts` を置く場合は、先頭に `export const dynamic = 'force-static';` を付ける。

#### 推奨

```ts
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
```

#### 典型的な症状

- `Failed to collect page data for /robots.txt`
- `Failed to collect page data for /sitemap.xml`

### sitemap と robots は build 時の環境変数に依存する

- `NEXT_PUBLIC_IS_REAL_PROD=true` の時だけ、本番向けの `robots` / `sitemap` を出す
- `false` の時はデモ公開扱いになる
- `out/sitemap.xml` が空でも、build 時の判定がデモなら仕様どおり

### canonical 生成は `metadataBase` と `new URL()` に寄せる

- 末尾 `/` の揺れを避けるため、URL生成は共通関数から行う
- ページごとの canonical は `alternates.canonical` で揃える

### `output: "export"` 前提を崩さない

- `images.unoptimized: true`
- `trailingSlash: true`
- 動的な server action や runtime 前提の実装を安易に足さない
