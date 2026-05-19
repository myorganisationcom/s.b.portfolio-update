import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function isValidEmail(e) {
  return typeof e === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, pdfUrl } = body || {};
    if (!isValidEmail(email) || !pdfUrl) {
      return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
    }

    // Resolve local file path if it's a site-relative URL under /reports/
    const rel = pdfUrl.startsWith('/') ? pdfUrl.replace(/^\//, '') : pdfUrl;
    const filePath = path.join(process.cwd(), 'public', rel.replace(/^reports\//, 'reports/'));

    const attachments = [];
    if (fs.existsSync(filePath)) {
      attachments.push({ filename: path.basename(filePath), path: filePath });
    } else {
      // If file not present, include link instead (no attachment)
    }

    const html = attachments.length ? `<p>Please find your audit report attached.</p>` : `<p>Your audit report is available here: <a href="${pdfUrl}">${pdfUrl}</a></p>`;

    await transporter.sendMail({
      from: `"Sarvanu Reports" <${process.env.CONTACT_FROM_EMAIL}>`,
      to: email,
      subject: 'Your Sarvanu Audit Report',
      html: `<p>Hi,</p>${html}<p>Regards,<br/>Sarvanu Team</p>`,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[POST /api/reports/email]', err);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export const runtime = 'nodejs';
