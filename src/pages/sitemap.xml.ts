import type { APIRoute } from 'astro';

// One page today. Sitemap URLs must be absolute, so it lists nothing until SITE_URL is set.
const pages = ['/'];

export const GET: APIRoute = ({ site }) => {
  const urls = site
    ? pages.map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`).join('\n')
    : '';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
