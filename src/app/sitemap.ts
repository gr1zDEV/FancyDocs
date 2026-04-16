export const dynamic = 'force-static';

import { MetadataRoute } from 'next';
import { source } from '@/lib/source';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://fancyinnovations.com';

    const pages = await source.getPages();

    const docUrls = pages.map((page) => ({
        url: `${baseUrl}${page.url}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...docUrls,
    ];
}