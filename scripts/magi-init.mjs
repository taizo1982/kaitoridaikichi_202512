import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const exists = (p) => {
  try { fs.accessSync(p); return true; } catch { return false; }
};

const copyDir = (src, dest) => {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else if (entry.isFile()) {
      // 安全のため上書きしない
      if (!exists(d)) fs.copyFileSync(s, d);
    }
  }
};

const findCandidateRoot = (pkgRoot) => {
  const candidates = ["template","templates","starter","boilerplate","src","dist","app"]
    .map((p) => path.join(pkgRoot, p));

  for (const dir of candidates) {
    if (exists(dir) && fs.statSync(dir).isDirectory() && exists(path.join(dir, "index.html"))) {
      return dir;
    }
  }
  for (const dir of candidates) {
    if (exists(dir) && fs.statSync(dir).isDirectory()) return dir;
  }
  return null;
};

const main = () => {
  let pkgJson;
  try {
    pkgJson = require.resolve("@aivec/magi-lp-template/package.json");
  } catch {
    console.error("[magi:init] @aivec/magi-lp-template が見つかりません。npm install を確認してください。");
    process.exit(1);
  }

  const pkgRoot = path.dirname(pkgJson);
  const candidate = findCandidateRoot(pkgRoot);
  const vendorRoot = path.resolve("vendor/magi-template");

  fs.mkdirSync(vendorRoot, { recursive: true });

  if (candidate) {
    console.log("[magi:init] テンプレ候補を検出:", candidate);
    copyDir(candidate, vendorRoot);
  } else {
    console.warn("[magi:init] テンプレ候補が見つからないため package root をコピーします。");
    copyDir(pkgRoot, vendorRoot);
  }

  console.log("[magi:init] 完了: vendor/magi-template に配置しました（既存ファイルは上書きしません）。");
};

main();
