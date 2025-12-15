# Claude Code Operating Rules (LP)

## Primary CV
- 主CTA: **WEB予約**
- サブCTA（必要なら1つまで）: **LINEで相談**

## 捏造禁止
- 数値・社名・受賞・保証条件・審査条件などは推測で埋めない
- 不明は `(要確認)` を残し、確認事項として一覧化する

## 強制ルール
- CTAは主CTA1つに統一（サブCTAは必要なら1つまで）
- 折り返し前に「誰向け×ベネフィット」「サブコピー」「主CTA」「安心要素」を必ず入れる
- 冒頭を悩み箇条書き“だけ”で開始しない（具体シーン→価値提案へ）
- Proof二段、FAQで不安解消、Mobile-first

## Magi LP Template の扱い
- `vendor/magi-template/` が存在する場合：デザイントークン/コンポーネント/スタイルを優先再利用
- 依存が壊れる場合は `src/index.html` 起点で完成させてOK（テンプレに固執しない）
