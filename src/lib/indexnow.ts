import { getAllPublishedPosts } from '@/server/repositories/blogs';
import fs from 'fs';
import path from 'path';

/**
 * Retrieves the required environment variables for IndexNow.
 */
function getConfig() {
    const key = process.env.INDEXNOW_KEY;
    const host = process.env.INDEXNOW_HOST;
    const endpoint = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow';

    if (!key || !host) {
        throw new Error('Missing required IndexNow environment variables: INDEXNOW_KEY and/or INDEXNOW_HOST must be set.');
    }

    return { key, host, endpoint };
}

/**
 * Generates the full list of static and dynamic URLs for the site.
 * This decoupled function acts as our internal sitemap registry.
 */
export async function getSitemapUrls(): Promise<string[]> {
    const { host } = getConfig();
    const baseUrl = `https://${host}`;
    const blogPosts = await getAllPublishedPosts();

    // 1. Static Routes
    const staticRoutes = [
        '',
        '/ai-agent-service',
        '/saas',
        '/blog',
        '/case-studies',
        '/book',
        '/resources',
        '/press',
        '/faq',
    ];

    const staticUrls = staticRoutes.map((route) => `${baseUrl}${route}`);

    // 2. Dynamic Routes (Blog Posts)
    const blogUrls = blogPosts.map((post) => `${baseUrl}/blog/${post.slug}`);

    return [...staticUrls, ...blogUrls];
}

/**
 * Verifies if the required `{key}.txt` file actually exists in the public directory.
 * IndexNow will crawl this file to verify domain ownership.
 */
export function verifyKeyFile(): boolean {
    const { key } = getConfig();
    const filePath = path.join(process.cwd(), 'public', `${key}.txt`);
    
    return fs.existsSync(filePath);
}

/**
 * Submits a single URL to the IndexNow protocol.
 * @param url The exact absolute URL to submit (e.g., https://sarvanu.com/blog/my-post)
 */
export async function submitSingleUrl(url: string) {
    return submitBulkUrls([url]);
}

/**
 * Submits an array of URLs to the IndexNow protocol in a single batch request.
 * @param urls An array of absolute URLs to submit
 */
export async function submitBulkUrls(urls: string[]) {
    try {
        const { key, host, endpoint } = getConfig();

        // Safety check to ensure the key file is actually hosted before we tell Bing to look for it
        if (!verifyKeyFile()) {
            throw new Error(`The verification file public/${key}.txt is missing. IndexNow requires this file to exist.`);
        }

        const payload = {
            host: host,
            key: key,
            keyLocation: `https://${host}/${key}.txt`,
            urlList: urls,
        };

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'User-Agent': 'sarvanu-indexnow/1.0 (+https://sarvanu.com)'
            },
            body: JSON.stringify(payload),
            signal: controller.signal,
        });

        clearTimeout(timeout);

        // Capture response body for better diagnostics
        let responseText = '';
        try {
            responseText = await response.text();
        } catch (err) {
            responseText = '';
        }

        return {
            success: response.ok,
            status: response.status,
            statusText: response.statusText,
            responseBody: responseText,
            submittedCount: urls.length,
        };
    } catch (error: any) {
        console.error('IndexNow submission failed:', error);
        return {
            success: false,
            status: 500,
            statusText: 'Internal Server Error',
            error: error.message,
            submittedCount: 0,
        };
    }
}
