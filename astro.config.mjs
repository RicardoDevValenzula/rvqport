// @ts-check
import { defineConfig } from 'astro/config';

// The production URL, used for the canonical link, sitemap, robots.txt and absolute
// social-image URLs. SITE_URL overrides it (e.g. for a preview deployment).
const site = process.env.SITE_URL || 'https://rvq.lat';

// https://astro.build/config
export default defineConfig({ site });
