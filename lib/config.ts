export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, "");
export const SITE_HOST = new URL(SITE_URL).host;
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "Pautin";
export const SLOGAN = "Link panjang? Pautin aja.";
export const SLUG_RE = /^[a-z0-9_-]{3,32}$/;
export const RESERVED = new Set(["api", "admin", "_next", "favicon", "robots", "sitemap"]);
