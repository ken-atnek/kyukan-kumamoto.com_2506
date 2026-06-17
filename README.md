# 2506

株式会社久環サイトの Next.js 管理用リポジトリです。

## 概要

- フレームワーク: Next.js 15 App Router
- 出力方式: `output: "export"`
- スタイル: SCSS
- 公開URL: `https://kyukan-kumamoto.com/`

## 開発コマンド

```bash
npm run dev
npm run build
npm run build:demo
npm run build:prod
npm run lint
npm run lint:style
```

## ドキュメント

- `AGENTS.md`
- `docs/PAGE_STRUCTURE.md`
- `docs/seo/SEO_SETUP.md`
- `docs/rules/nextjs-export.md`
- `docs/rules/checklist.md`
- `docs/seo/SEO_AUDIT_REQUEST_TEMPLATE.md`
- `docs/seo/SEO_FIX_TRACKER_TEMPLATE.md`

## メモ

- `npm run build` と `npm run build:prod` は本番用の `robots.txt` / `sitemap.xml` を出力します
- `npm run build:demo` はデモ用として `noindex` / `Disallow: /` / 空の sitemap を出力します
- SEO出力は `NEXT_PUBLIC_IS_REAL_PROD` と `NEXT_PUBLIC_METADATA_BASE` に依存します
- build 後に `out/data` と `out/backend` は自動で削除されます
