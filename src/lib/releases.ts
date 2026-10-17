import { getCollection, type CollectionEntry } from 'astro:content';
import type { AppId } from '../data/apps';

export type Release = CollectionEntry<'releases'>['data'] & { id: string };

/** Stable releases of both apps, newest first. */
export async function getReleases(): Promise<Release[]> {
  const entries = await getCollection('releases');
  return entries
    .map((e) => ({ id: e.id, ...e.data }))
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

/** The newest stable release of each app; undefined when an app has none yet. */
export async function getLatest(): Promise<Record<AppId, Release | undefined>> {
  const releases = await getReleases();
  return {
    swtor: releases.find((r) => r.app === 'swtor'),
    swgl: releases.find((r) => r.app === 'swgl'),
  };
}

/** "Oct 17, 2026" */
export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
