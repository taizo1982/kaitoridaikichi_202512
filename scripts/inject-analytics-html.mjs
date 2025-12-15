import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const buildIndexPath = path.resolve(projectRoot, "build", "index.html");
const analyticsMarkerStart = "<!-- analytics:start -->";
const analyticsMarkerEnd = "<!-- analytics:end -->";
const ogpMarkerStart = "<!-- ogp:start -->";
const ogpMarkerEnd = "<!-- ogp:end -->";

const sanitize = (value) => {
  if (typeof value !== "string") {
    return "";
  }
  const trimmed = value.trim();
  return trimmed && trimmed !== "undefined" ? trimmed : "";
};

const createGoogleTagBlock = (gaMeasurementId, gaAdsId) => {
  if (!gaMeasurementId && !gaAdsId) {
    return "";
  }

  const primaryId = gaMeasurementId || gaAdsId;
  const loaderTag = `<script async src="https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryId)}"></script>`;

  const lines = [
    "<script>",
    "  window.dataLayer = window.dataLayer || [];",
    "  function gtag(){dataLayer.push(arguments);}",
    "  gtag('js', new Date());",
  ];

  if (gaMeasurementId) {
    lines.push(`  gtag('config', '${gaMeasurementId}');`);
  }

  if (gaAdsId) {
    lines.push(`  gtag('config', '${gaAdsId}');`);
  }

  lines.push("</script>");

  return [loaderTag, lines.join("\n")].join("\n");
};

const createMetaPixelBlock = (metaPixelId, metaAppId) => {
  if (!metaPixelId) {
    return "";
  }

  const script = [
    "<script>",
    "  !function(f,b,e,v,n,t,s){",
    "    if(f.fbq)return;",
    "    n=f.fbq=function(){",
    "      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);",
    "    };",
    "    if(!f._fbq)f._fbq=n;",
    "    n.push = n;",
    "    n.loaded = true;",
    "    n.version = '2.0';",
    "    n.queue = [];",
    "    t = b.createElement(e);",
    "    t.async = true;",
    "    t.src = v;",
    "    s = b.getElementsByTagName(e)[0];",
    "    s.parentNode.insertBefore(t,s);",
    "  }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');",
  ];

  if (metaAppId) {
    script.push(`  fbq('init', '${metaPixelId}', { app_id: '${metaAppId}' });`);
  } else {
    script.push(`  fbq('init', '${metaPixelId}');`);
  }

  script.push("  fbq('track', 'PageView');");
  script.push("</script>");

  const noscript = `<noscript><img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${encodeURIComponent(metaPixelId)}&ev=PageView&noscript=1"/></noscript>`;

  return [script.join("\n"), noscript].join("\n");
};

const escapeHtml = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};

const createOgpBlock = (env) => {
  const ogTitle = sanitize(env.VITE_OG_TITLE);
  const ogDescription = sanitize(env.VITE_OG_DESCRIPTION);
  const ogSiteName = sanitize(env.VITE_OG_SITE_NAME);
  const ogUrl = sanitize(env.VITE_OG_URL);
  const ogImageUrl = sanitize(env.VITE_OG_IMAGE_URL);
  const ogImageWidth = sanitize(env.VITE_OG_IMAGE_WIDTH);
  const ogImageHeight = sanitize(env.VITE_OG_IMAGE_HEIGHT);
  const twitterCard = sanitize(env.VITE_TWITTER_CARD) || "summary_large_image";
  const twitterSite = sanitize(env.VITE_TWITTER_SITE);
  const twitterCreator = sanitize(env.VITE_TWITTER_CREATOR);

  const tags = [];

  // OGP tags
  if (ogTitle) {
    tags.push(`<meta property="og:title" content="${escapeHtml(ogTitle)}" />`);
  }
  if (ogDescription) {
    tags.push(`<meta property="og:description" content="${escapeHtml(ogDescription)}" />`);
  }
  tags.push(`<meta property="og:type" content="website" />`);
  if (ogSiteName) {
    tags.push(`<meta property="og:site_name" content="${escapeHtml(ogSiteName)}" />`);
  }
  if (ogUrl) {
    tags.push(`<meta property="og:url" content="${escapeHtml(ogUrl)}" />`);
  }
  if (ogImageUrl) {
    tags.push(`<meta property="og:image" content="${escapeHtml(ogImageUrl)}" />`);
  }
  if (ogImageWidth) {
    tags.push(`<meta property="og:image:width" content="${escapeHtml(ogImageWidth)}" />`);
  }
  if (ogImageHeight) {
    tags.push(`<meta property="og:image:height" content="${escapeHtml(ogImageHeight)}" />`);
  }

  // Twitter Card tags
  tags.push(`<meta name="twitter:card" content="${escapeHtml(twitterCard)}" />`);
  if (ogTitle) {
    tags.push(`<meta name="twitter:title" content="${escapeHtml(ogTitle)}" />`);
  }
  if (ogDescription) {
    tags.push(`<meta name="twitter:description" content="${escapeHtml(ogDescription)}" />`);
  }
  if (ogImageUrl) {
    tags.push(`<meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />`);
  }
  if (twitterSite) {
    tags.push(`<meta name="twitter:site" content="${escapeHtml(twitterSite)}" />`);
  }
  if (twitterCreator) {
    tags.push(`<meta name="twitter:creator" content="${escapeHtml(twitterCreator)}" />`);
  }

  return tags.join("\n    ");
};

const injectAnalytics = async () => {
  try {
    await fs.access(buildIndexPath);
  } catch {
    // Nothing to do if build/index.html does not exist.
    return;
  }

  const mode = process.env.NODE_ENV || "production";
  const env = loadEnv(mode, projectRoot, "");

  const gaMeasurementId = sanitize(env.VITE_GA_MEASUREMENT_ID);
  const gaAdsId = sanitize(env.VITE_GA_ADS_ID);
  const metaPixelId = sanitize(env.VITE_META_PIXEL_ID);
  const metaAppId = sanitize(env.VITE_META_APP_ID);

  const analyticsBlocks = [
    createGoogleTagBlock(gaMeasurementId, gaAdsId),
    createMetaPixelBlock(metaPixelId, metaAppId),
  ].filter(Boolean);

  let html = await fs.readFile(buildIndexPath, "utf-8");

  // Remove existing analytics markers
  const analyticsMarkerPattern = new RegExp(`${analyticsMarkerStart}[\\s\\S]*?${analyticsMarkerEnd}\\n?`, "g");
  html = html.replace(analyticsMarkerPattern, "");

  // Inject OGP tags
  const ogpBlock = createOgpBlock(env);
  const ogpMarkerPattern = new RegExp(`${ogpMarkerStart}[\\s\\S]*?${ogpMarkerEnd}`, "g");
  if (ogpBlock) {
    html = html.replace(ogpMarkerPattern, `${ogpMarkerStart}\n    ${ogpBlock}\n    ${ogpMarkerEnd}`);
    console.log("Injected OGP tags into build/index.html");
  }

  // Inject analytics tags
  if (analyticsBlocks.length > 0) {
    const analyticsBlock = [analyticsMarkerStart, ...analyticsBlocks, analyticsMarkerEnd].join("\n");
    if (html.includes("</head>")) {
      html = html.replace("</head>", `${analyticsBlock}\n</head>`);
    } else {
      html += `\n${analyticsBlock}\n`;
    }
    console.log("Injected analytics tags into build/index.html");
  }

  await fs.writeFile(buildIndexPath, html, "utf-8");
};

injectAnalytics().catch((error) => {
  console.error("[analytics] Failed to inject tags:", error);
  process.exitCode = 1;
});
