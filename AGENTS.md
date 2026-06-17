# AGENTS.md

## 基本方針

このプロジェクトは、公開中サイトの保守・改善用です。  
新規立ち上げ前提ではなく、既存構成を尊重しながら必要な修正だけを積み上げます。

---

## 新しい作業を始める時の確認順

- まずこの `AGENTS.md` を確認する
- 続けて `docs/PAGE_STRUCTURE.md` を見て、対象ページと役割を把握する
- SEO対応を触る前に `docs/seo/SEO_SETUP.md` を確認する
- static export まわりを触る前に `docs/rules/nextjs-export.md` を確認する
- 変更は最小単位で進め、依頼範囲外まで広げない

---

## 技術方針

- Next.js App Router
- TypeScript
- SCSS運用
- `output: "export"` の静的書き出し前提

---

## 作業方針

- まず現状確認してから直す
- 既存URL・既存導線を前提に考える
- SEOは `title` / `description` / `canonical` / `robots` / `sitemap` を優先する
- 大きな設計変更や全面リファクタは、明示的な依頼がある時だけ行う

---

## 参照ドキュメント

1. `AGENTS.md`
2. `docs/PAGE_STRUCTURE.md`
3. `docs/seo/SEO_SETUP.md`
4. `docs/rules/nextjs-export.md`
5. `docs/rules/checklist.md`
6. `docs/seo/SEO_AUDIT_REQUEST_TEMPLATE.md`
7. `docs/seo/SEO_FIX_TRACKER_TEMPLATE.md`
8. `CLAUDE.md`

---

## 注意点

- この案件ではデモ公開と本番公開でSEO出力を切り替える
- `NEXT_PUBLIC_IS_REAL_PROD` と `NEXT_PUBLIC_METADATA_BASE` の扱いを揃える
- `robots.ts` / `sitemap.ts` は static export 前提の制約を崩さない
