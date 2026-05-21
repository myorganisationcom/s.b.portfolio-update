import { submitSingleUrl, submitBulkUrls } from '@/lib/indexnow';
import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/indexnow/submit
 * 
 * Submits one or multiple specific URLs to Bing's IndexNow.
 * Protected by 'x-api-key' header.
 * 
 * Body expected:
 * { "url": "https://sarvanu.com/blog/my-post" }
 * OR
 * { "urls": ["https://sarvanu.com/blog/1", "https://sarvanu.com/blog/2"] }
 */
export async function POST(request: NextRequest) {
    // 1. Authorization Check
    const apiKey = request.headers.get('x-api-key');
    const expectedKey = process.env.API_SECRET_KEY;

    if (!expectedKey) {
        return NextResponse.json({ error: 'Server configuration error: API_SECRET_KEY not set' }, { status: 500 });
    }

    if (apiKey !== expectedKey) {
        return NextResponse.json({ error: 'Unauthorized. Invalid x-api-key header.' }, { status: 401 });
    }

    try {
        // 2. Parse Body
        const body = await request.json();
        
        // 3. Execute Submission
        let result;
        if (body.urls && Array.isArray(body.urls)) {
            result = await submitBulkUrls(body.urls);
        } else if (body.url && typeof body.url === 'string') {
            result = await submitSingleUrl(body.url);
        } else {
            return NextResponse.json({ error: 'Invalid payload. Provide "url" as string or "urls" as string array.' }, { status: 400 });
        }

        // 4. Return Result
        return NextResponse.json({
            success: result.success,
            submittedCount: result.submittedCount,
            indexNowResponse: {
                status: result.status,
                statusText: result.statusText,
                body: result.responseBody || null,
            },
            error: result.error || null,
        }, { status: result.success ? 200 : 502 });

    } catch (error: any) {
        return NextResponse.json({ error: 'Bad Request', details: error.message }, { status: 400 });
    }
}
