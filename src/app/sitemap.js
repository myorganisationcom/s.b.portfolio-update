import { getAllPublishedPosts } from '@/server/repositories/blogs';

/** @type {import('next').MetadataRoute.Sitemap} */
export default async function sitemap() {
    const baseUrl = 'https://sarvanu.com';
    const blogPosts = await getAllPublishedPosts();

    // High-priority service/landing pages
    const highPriorityRoutes = [
        '',           // Homepage
        '/ai-agent-service',
        '/saas',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.9,
    }));

    // Medium-priority content pages
    const mediumPriorityRoutes = [
        '/blog',
        '/case-studies',
        '/book',
        '/resources',
        '/press',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // Lower-priority static pages
    const lowPriorityRoutes = [
        '/faq',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    // Dynamic blog post routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [
        ...highPriorityRoutes,
        ...mediumPriorityRoutes,
        ...lowPriorityRoutes,
        ...blogRoutes,
    ];
}
