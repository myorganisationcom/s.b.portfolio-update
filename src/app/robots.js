/** @type {import('next').MetadataRoute.Robots} */
export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/api/',
            },
            // Explicitly allow helpful AI crawlers to ingest public/llms.txt and public/ai.txt
            {
                userAgent: ['ChatGPT-User', 'Google-Extended', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Omgili'],
                allow: ['/', '/llms.txt', '/ai.txt'],
                disallow: ['/api/'],
            },
        ],
        sitemap: 'https://sarvanu.com/sitemap.xml',
    };
}
