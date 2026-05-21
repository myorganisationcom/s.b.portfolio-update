/**
 * POST /api/reports/email — Send a report PDF via email
 *
 * This endpoint is kept for backward compatibility (e.g. admin-triggered resends).
 * The primary email dispatch now happens automatically in the leads service
 * after the PDF is generated.
 */

import { NextResponse } from 'next/server';
import { sendGrowthReportEmail } from '@/server/services/email-service';
import path from 'path';
import fs from 'fs';

export const runtime = 'nodejs';

function isValidEmail(e) {
  return typeof e === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, pdfUrl, name, orgName, score, bottleneck } = body || {};

    if (!isValidEmail(email) || !pdfUrl) {
      return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
    }

    // Resolve local file path
    const rel = pdfUrl.startsWith('/') ? pdfUrl.replace(/^\//, '') : pdfUrl;
    const filePath = path.join(process.cwd(), 'public', rel);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { success: false, error: 'PDF file not found. Report may still be generating.' },
        { status: 404 },
      );
    }

    await sendGrowthReportEmail({
      toEmail: email,
      toName: name || 'Business Owner',
      orgName: orgName || 'Your Business',
      pdfFilePath: filePath,
      score: score ?? 0,
      bottleneck: bottleneck || 'Growth Strategy',
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[POST /api/reports/email]', err);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
