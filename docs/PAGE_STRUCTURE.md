# PAGE_STRUCTURE

## サイト概要

- サイト名: 株式会社久環
- 公開URL: `https://kyukan-kumamoto.com/`
- 種別: 既存サイトの保守・改善
- フレームワーク: Next.js 15 App Router
- 出力方式: `output: "export"` + `trailingSlash: true`

---

## ルート構成

### `/`

- トップページ
- 会社全体の導線集約
- `service1` / `service2` / `company` / `contact` への導線あり

### `/service1/`

- 解体業の紹介ページ
- 一般解体、特殊解体の内容を掲載

### `/works/`

- 解体実績ページ
- 写真中心の実績紹介

### `/service2/`

- 産業廃棄物業ページ
- 中間処理、収集運搬、許可証PDFへの導線あり

### `/company/`

- 会社情報・保有機材ページ
- 会社概要、所在地、連絡先、保有設備を掲載

### `/contact/`

- お問い合わせページ
- フロントは Next.js、送信先は `public/backend/contact.php`

---

## SEO確認時の優先ポイント

- 全主要ページに `title` / `description` / `canonical` があるか
- トップと下層で役割の重複が強すぎないか
- `robots.ts` / `sitemap.ts` が本番判定と一致しているか
- OGP画像が存在し、共通metadataから参照されているか
- PDFや外部送信先など、検索対象外の資産を誤ってindexさせていないか

---

## 更新メモ

- 2026-06-17: SEO保守に合わせて route 構成と static export 前提を整理
