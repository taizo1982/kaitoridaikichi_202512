# LP Renewal Project (Magi LP Template 対応)

このプロジェクトは **Claude Code** で `/lp-plan → /lp-build → /lp-audit` を実行してLPをリニューアルするための土台です。  
加えて、`npm i @aivec/magi-lp-template` の環境を使えるように **Vite + テンプレ同期スクリプト** を同梱しています。

## セットアップ

```bash
npm install
```

### Magiテンプレを取り込む（推奨）

`@aivec/magi-lp-template` の内部仕様は環境差があり得るため、複数候補ディレクトリを探して安全にコピーします。  
うまく見つからない場合でも、`src/index.html` の骨組みで通常どおり作業できます。

```bash
npm run magi:init
```

- 取り込まれたテンプレは `vendor/magi-template/` に配置（**上書きしません**）
- 以降は Claude Code の `/lp-build` が **vendor の資産を参照して** UIを作り込みます

## 開発

```bash
npm run dev
```

- 既定エントリは `src/index.html`
- Magiテンプレ側に別エントリがある場合は、`vite.config.js` を調整してください

## Claude Code での手順

1. `/lp-plan`
2. `/lp-build`
3. `/lp-audit`

## 注意
- **数値実績・受賞・導入社名などの事実は捏造禁止**。不明は `(要確認)` のまま残してください
- CTAは **主CTA1つ**（必要ならサブCTA1つまで）
