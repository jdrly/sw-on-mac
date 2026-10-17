import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { apps, type AppId } from './data/apps';

// Stable releases of both apps from the GitHub API, loaded once per build (and at dev server
// start). The notes follow release-notes/README.md in the app repos: the `## <App> on Mac
// <version>` title, a one-sentence summary, `###` per change, `### Support` last.
// Set GITHUB_TOKEN to avoid the 60 requests/hour limit of unauthenticated calls.

interface GitHubRelease {
  tag_name: string;
  name: string | null;
  html_url: string;
  draft: boolean;
  prerelease: boolean;
  published_at: string;
  body_html?: string;
  assets: { name: string; browser_download_url: string }[];
}

const stripTags = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

function parseNotes(html: string) {
  // GitHub keeps the notes' line wrapping as <br>; it's only wrapping, not a line break.
  let body = html.replace(/<br>\n?/g, ' ').trim();
  body = body.replace(/^<h2[^>]*>[\s\S]*?<\/h2>\s*/, '');
  const firstParagraph = body.match(/^<p>([\s\S]*?)<\/p>\s*/);
  const summary = firstParagraph ? stripTags(firstParagraph[1]) : '';
  if (firstParagraph) body = body.slice(firstParagraph[0].length);
  return { summary, bodyHtml: body };
}

async function loadReleases(app: AppId) {
  const { repo } = apps[app];
  const headers: Record<string, string> = { Accept: 'application/vnd.github.html+json' };
  if (import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN}`;
  }
  const res = await fetch(`https://api.github.com/repos/${repo}/releases?per_page=100`, { headers });
  if (!res.ok) throw new Error(`GitHub releases of ${repo}: ${res.status} ${res.statusText}`);
  const releases = (await res.json()) as GitHubRelease[];

  return releases
    .filter((r) => !r.draft && !r.prerelease)
    .map((r) => {
      const version = r.tag_name.replace(/^v/, '');
      const dmg = r.assets.find((a) => a.name.endsWith('.dmg'));
      return {
        id: `${app}-${version}`,
        app,
        version,
        title: `${apps[app].name} ${version}`,
        publishedAt: r.published_at,
        url: r.html_url,
        dmgUrl: dmg?.browser_download_url ?? r.html_url,
        ...parseNotes(r.body_html ?? ''),
      };
    });
}

const releases = defineCollection({
  loader: async () => (await Promise.all((Object.keys(apps) as AppId[]).map(loadReleases))).flat(),
  schema: z.object({
    app: z.enum(['swtor', 'swgl']),
    version: z.string(),
    title: z.string(),
    publishedAt: z.coerce.date(),
    url: z.string().url(),
    dmgUrl: z.string().url(),
    summary: z.string(),
    bodyHtml: z.string(),
  }),
});

export const collections = { releases };
