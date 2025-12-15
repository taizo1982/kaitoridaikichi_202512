import fs from "node:fs";
import path from "node:path";

const vendorRoot = path.resolve("vendor/magi-template");
if (!fs.existsSync(vendorRoot)) {
  console.error("[magi:sync] vendor/magi-template がありません。先に npm run magi:init を実行してください。");
  process.exit(1);
}
console.log("[magi:sync] 現在は no-op です。更新したい場合は vendor を削除して npm run magi:init を再実行してください。");
