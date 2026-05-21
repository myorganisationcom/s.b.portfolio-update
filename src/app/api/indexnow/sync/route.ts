import { getSitemapUrls, submitBulkUrls } from '@/lib/indexnow';
import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/indexnow/sync
 * 
 * Convenience endpoint designed for Cron Jobs or manual triggers.
 * Automatically fetches all sitemap URLs and bulk submits them to IndexNow.
 * Protected by 'x-cron-secret' header.
 */
export async function POST(request: NextRequest) {
    // 1. Authorization Check
    const cronSecret = request.headers.get('x-cron-secret');
    const expectedSecret = process.env.CRON_SECRET;

    if (!expectedSecret) {
        return NextResponse.json({ error: 'Server configuration error: CRON_SECRET not set' }, { status: 500 });
    }

    if (cronSecret !== expectedSecret) {
        return NextResponse.json({ error: 'Unauthorized. Invalid x-cron-secret header.' }, { status: 401 });
    }

    try {
        // 2. Fetch all dynamic and static URLs from our internal registry
        const allUrls = await getSitemapUrls();

        if (!allUrls || allUrls.length === 0) {
            return NextResponse.json({ error: 'No URLs found to submit.' }, { status: 400 });
        }

        // 3. Submit entire payload
        const result = await submitBulkUrls(allUrls);

        // 4. Return Result
        return NextResponse.json({
            success: result.success,
            message: `Attempted to synchronize ${allUrls.length} total URLs.`,
            submittedCount: result.submittedCount,
            indexNowResponse: {
                status: result.status,
                statusText: result.statusText,
                body: result.responseBody || null,
            },
            error: result.error || null,
        }, { status: result.success ? 200 : 502 });

    } catch (error: any) {
        return NextResponse.json({ error: 'Sync Failed', details: error.message }, { status: 500 });
    }
}
