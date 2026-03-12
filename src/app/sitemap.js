import { blogPosts } from '@/data/blogPosts';

export default function sitemap() {
    const baseUrl = 'https://sarvanu.com';

    // Core static routes
    const routes = [
        '',
        '/ai-agent-service',
        '/blog',
        '/book',
        '/case-studies',
        '/faq',
        '/press',
        '/resources',
        '/saas',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic blog routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date), // Fallback to current date if post.date is missing or invalid
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [...routes, ...blogRoutes];
}
