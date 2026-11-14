import type { APIRoute } from 'astro';
import { getReleases } from '../lib/releases';

// The site is one page; its last change is the newest release of either app.
export const GET: APIRoute = async ({ site }) => {
  const [newest] = await getReleases();
  const lastmod = newest ? `\n    <lastmod>${newest.publishedAt.toISOString()}</lastmod>` : '';
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${new URL('/', site)}</loc>${lastmod}
  </url>
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
