# SEO_SETUP

## 目的

このファイルは、株式会社久環サイトのSEO実装前提を残すためのメモです。  
公開中サイトの保守案件なので、既存URLを維持しつつ、技術的な欠損を埋める方針で扱います。

---

## サイト基本情報

- サイト名: 株式会社久環
- ドメイン: `kyukan-kumamoto.com`
- 公開URL: `https://kyukan-kumamoto.com/`
- 公開ステータス: 本番公開中
- 出力方式: Next.js static export

---

## 現在の主要ルート

- `/`
- `/service1/`
- `/works/`
- `/service2/`
- `/company/`
- `/contact/`

---

## 初期実装で押さえる項目

- `src/app/layout.tsx` の共通 `metadata`
- 各ページの `title` / `description` / `canonical`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- OGP画像の参照先
- `NEXT_PUBLIC_IS_REAL_PROD` と `NEXT_PUBLIC_METADATA_BASE` の運用

---

## デモ公開 / 本番公開の切り替え方針

- 判定は `NEXT_PUBLIC_IS_REAL_PROD` を使う
- `true` の時だけ本番SEOを有効にする
- `false` の時は `noindex` と `Disallow: /` を返す
- `sitemap.xml` はデモ時は空配列、本番時のみURLを出力する
- 通常の `npm run build` は本番書き出しにする
- デモ確認が必要な時だけ `npm run build:demo` を使う

### 関連ファイル

- `src/lib/site.ts`
- `src/app/layout.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`

### 基本方針

- URL生成は文字列連結ではなく `new URL()` を使う
- canonical は `alternates.canonical` で揃える
- `metadataBase` は `NEXT_PUBLIC_METADATA_BASE` を基準にする
- OGP画像は共通設定から参照する
- デモURLを正規URLとして露出させない

---

## static export の注意点

- `robots.ts` と `sitemap.ts` には `export const dynamic = 'force-static';` を付ける
- `trailingSlash: true` 前提なので canonical / sitemap も末尾 `/` を含むURLで揃える
- build 時の環境変数次第で `out/robots.txt` と `out/sitemap.xml` の内容が変わる

---

## build 前に確認すること

- `NEXT_PUBLIC_IS_REAL_PROD` の値
- `NEXT_PUBLIC_METADATA_BASE` が本番URLか
- `public/images/ogp.jpg` が存在するか
- 主要ページの `title` / `description` が重複しすぎていないか

### 推奨コマンド

```bash
npm run build
```

- 本番用の `out/robots.txt` と `out/sitemap.xml` を書き出す
- 書き出し後に `out/data` と `out/backend` は自動削除する

```bash
npm run build:demo
```

- デモ用の `noindex` / `Disallow: /` / 空 sitemap を書き出す
- 書き出し後に `out/data` と `out/backend` は自動削除する

---

## 補足

- この案件では、実装済みの route にないSEO仕様は持ち込まない
- 文言改善は必要に応じて別タスクで進め、まずは技術的な欠損を優先する
