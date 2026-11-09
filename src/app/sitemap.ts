import type { MetadataRoute } from 'next';
import projects from '../content/projects/projects';
import { siteUrl } from '../content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/projects', '/about', '/logbook', ...projects.map(p => `/projects/${p.url}`)];
  return paths.map(path => ({ url: `${siteUrl}${path === '/' ? '' : path}` }));
}
