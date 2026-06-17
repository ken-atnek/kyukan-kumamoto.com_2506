## チェックリスト

作業開始前に確認:

- [ ] `next.config.ts` に `output: "export"` がある
- [ ] `next.config.ts` に `trailingSlash: true` がある
- [ ] `src/app/robots.ts` と `src/app/sitemap.ts` に `force-static` がある
- [ ] `src/lib/site.ts` で `NEXT_PUBLIC_IS_REAL_PROD` と `NEXT_PUBLIC_METADATA_BASE` を扱っている
- [ ] 各主要ページに `title` / `description` / `canonical` がある
- [ ] build 結果の `out/robots.txt` と `out/sitemap.xml` を環境変数込みで解釈している
