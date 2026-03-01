import { MetadataRoute } from 'next';
import { AREAS } from '@/lib/areas';
import { baseUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/search',
    '/buy',
    '/sell',
    '/areas',
    '/about',
    '/contact',
    '/privacy',
    '/insights',
    '/insights/life-listings-and-a-little-lingo',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const areaPages = AREAS.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...areaPages];
}
