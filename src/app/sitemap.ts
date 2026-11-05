import { MetadataRoute } from 'next';
import { newsArticles } from '@/data/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tagaittehad.org.pk';

  const staticRoutes = [
    '',
    '/about',
    '/chairman',
    '/leadership',
    '/areas',
    '/progress',
    '/welfare',
    '/news',
    '/notifications',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const newsRoutes = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}
