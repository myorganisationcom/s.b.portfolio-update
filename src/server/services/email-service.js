/**
 * Premium Email Service — Sarvanu Business Growth Reports
 *
 * Sends beautifully designed HTML emails with the generated PDF
 * attached directly from the filesystem. Called by the leads service
 * AFTER the PDF has been fully written to disk.
 */

import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

// ─── Transporter (lazy singleton) ─────────────────────────────────────────────
let _transporter = null;

function getTransporter() {
  if (!_transporter) {
    _transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return _transporter;
}

// ─── Premium HTML Email Template ──────────────────────────────────────────────

function buildReportEmailHTML({ name, orgName, score, bottleneck, qualLevel }) {
  const scoreColor = score >= 70 ? '#10b981' : score >= 50 ? '#F5C518' : '#ef4444';
  const qualLabel = score >= 70
    ? 'Strong Growth Potential'
    : score >= 50
      ? 'Needs Structural Improvements'
      : 'Critical Intervention Required';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Business Growth Report — Sarvanu</title>
</head>
<body style="margin:0;padding:0;background-color:#08080F;font-family:'Segoe UI','Helvetica Neue',Arial,sans-serif;">

<!-- Outer wrapper -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#08080F;">
<tr><td align="center" style="padding:40px 16px;">

<!-- Main card -->
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#0D0D1E;border:1px solid rgba(245,197,24,0.15);border-radius:16px;overflow:hidden;">

  <!-- Gold top accent bar -->
  <tr><td style="height:4px;background:linear-gradient(90deg,#F5C518,#f0bb00,#F5C518);"></td></tr>

  <!-- Header -->
  <tr><td style="padding:32px 36px 20px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <div style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;">Sarvanu</div>
        <div style="font-size:11px;color:#F5C518;letter-spacing:0.12em;text-transform:uppercase;margin-top:2px;">Business Growth Advisory</div>
      </td>
      <td align="right">
        <div style="display:inline-block;padding:5px 14px;border-radius:20px;background:rgba(245,197,24,0.08);border:1px solid rgba(245,197,24,0.2);">
          <span style="font-size:10px;font-weight:700;color:#F5C518;letter-spacing:0.1em;text-transform:uppercase;">CONFIDENTIAL</span>
        </div>
      </td>
    </tr>
    </table>
  </td></tr>

  <!-- Divider -->
  <tr><td style="padding:0 36px;"><div style="height:1px;background:rgba(255,255,255,0.06);"></div></td></tr>

  <!-- Greeting -->
  <tr><td style="padding:28px 36px 10px;">
    <div style="font-size:15px;color:rgba(255,255,255,0.5);line-height:1.7;">Dear <strong style="color:#ffffff;">${name || 'Business Owner'}</strong>,</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.5);line-height:1.7;margin-top:12px;">
      Thank you for completing the comprehensive Sarvanu Business Growth Audit for <strong style="color:#ffffff;">${orgName || 'your organisation'}</strong>. Our strategic engine has analysed your responses and prepared a detailed, consulting-grade report tailored specifically to your business.
    </div>
    <div style="font-size:15px;color:rgba(255,255,255,0.5);line-height:1.7;margin-top:12px;">
      Your <strong style="color:#F5C518;">7-page PDF report</strong> is attached to this email. Please find the key highlights below.
    </div>
  </td></tr>

  <!-- Score Card -->
  <tr><td style="padding:20px 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.06);border-radius:14px;overflow:hidden;">

      <!-- Score row -->
      <tr>
        <td width="50%" style="padding:24px 20px;text-align:center;border-right:1px solid rgba(255,255,255,0.06);">
          <div style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.12em;margin-bottom:10px;">Business Health Score</div>
          <div style="font-size:42px;font-weight:800;color:${scoreColor};line-height:1;">${score}<span style="font-size:16px;color:rgba(255,255,255,0.25);">/100</span></div>
          <div style="margin-top:10px;display:inline-block;padding:4px 14px;border-radius:20px;background:${scoreColor}18;border:1px solid ${scoreColor}35;">
            <span style="font-size:11px;font-weight:700;color:${scoreColor};">${qualLabel}</span>
          </div>
        </td>
        <td width="50%" style="padding:24px 20px;text-align:center;">
          <div style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.12em;margin-bottom:10px;">Primary Bottleneck</div>
          <div style="font-size:16px;font-weight:700;color:#ffffff;line-height:1.4;">${bottleneck || 'Growth Strategy'}</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:10px;">Identified from audit analysis</div>
        </td>
      </tr>

    </table>
  </td></tr>

  <!-- What's inside -->
  <tr><td style="padding:10px 36px 20px;">
    <div style="font-size:11px;color:#F5C518;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:14px;">What's Inside Your Report</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${[
        ['📊', 'Executive Summary & Health Score Breakdown'],
        ['🔍', 'Category-wise Performance Analysis (Revenue, Operations, Sales, Brand, Clients)'],
        ['⚡', 'Critical Findings & Growth Bottleneck Analysis'],
        ['🏢', 'Complete Business Profile & Audit Data Summary'],
        ['🗺️', 'Strategic Recommendations — Immediate, 30-Day, 90-Day & 12-Month Roadmap'],
        ['🎯', 'Consulting Conclusion with Actionable Next Steps'],
      ].map(([icon, text]) => `
      <tr>
        <td width="28" style="padding:6px 0;vertical-align:top;font-size:14px;">${icon}</td>
        <td style="padding:6px 0;font-size:13px;color:rgba(255,255,255,0.55);line-height:1.5;">${text}</td>
      </tr>`).join('')}
    </table>
  </td></tr>

  <!-- Divider -->
  <tr><td style="padding:0 36px;"><div style="height:1px;background:rgba(255,255,255,0.06);"></div></td></tr>

  <!-- CTA -->
  <tr><td style="padding:28px 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:rgba(245,197,24,0.04);border:1px solid rgba(245,197,24,0.12);border-radius:12px;">
      <tr><td style="padding:24px 24px;">
        <div style="font-size:13px;font-weight:700;color:#F5C518;margin-bottom:8px;">🤝 Ready to Implement These Strategies?</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.7;margin-bottom:16px;">
          Our strategy team will personally review your report and reach out on WhatsApp within 24 hours with a customised implementation roadmap. You can also book a complimentary strategy call at any time.
        </div>
        <a href="https://sarvanu.com/book" style="display:inline-block;padding:12px 28px;background:#F5C518;color:#000000;font-size:13px;font-weight:700;text-decoration:none;border-radius:8px;">
          Book a Strategy Call →
        </a>
      </td></tr>
    </table>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding:20px 36px 28px;">
    <div style="font-size:11px;color:rgba(255,255,255,0.2);line-height:1.7;">
      This report is confidential and has been prepared exclusively for ${name || 'the recipient'}. All findings and recommendations are advisory and should be validated against your specific business context before implementation.
    </div>
    <div style="margin-top:16px;font-size:11px;color:rgba(255,255,255,0.15);">
      © ${new Date().getFullYear()} Sarvanu · business@sarvanu.com · sarvanu.com
    </div>
  </td></tr>

  <!-- Gold bottom accent bar -->
  <tr><td style="height:3px;background:linear-gradient(90deg,#F5C518,#f0bb00,#F5C518);"></td></tr>

</table>
<!-- /Main card -->

</td></tr>
</table>

</body>
</html>`;
}

// ─── Admin Notification Email ─────────────────────────────────────────────────

function buildAdminNotificationHTML({ name, email, phone, orgName, score, bottleneck }) {
  return `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#08080F;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#08080F;"><tr><td align="center" style="padding:30px 16px;">
<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#0D0D1E;border:1px solid rgba(245,197,24,0.15);border-radius:12px;">
  <tr><td style="height:3px;background:#F5C518;"></td></tr>
  <tr><td style="padding:24px 28px;">
    <div style="font-size:16px;font-weight:700;color:#fff;margin-bottom:4px;">🔔 New Business Audit Lead</div>
    <div style="font-size:11px;color:rgba(255,255,255,0.35);margin-bottom:20px;">A new lead has completed the full audit funnel</div>

    <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;">
      <tr><td style="padding:8px 0;color:rgba(255,255,255,0.4);width:120px;">Name</td><td style="padding:8px 0;color:#fff;font-weight:600;">${name}</td></tr>
      <tr><td style="padding:8px 0;color:rgba(255,255,255,0.4);">Email</td><td style="padding:8px 0;color:#F5C518;">${email}</td></tr>
      <tr><td style="padding:8px 0;color:rgba(255,255,255,0.4);">Phone</td><td style="padding:8px 0;color:#fff;">${phone || '—'}</td></tr>
      <tr><td style="padding:8px 0;color:rgba(255,255,255,0.4);">Organisation</td><td style="padding:8px 0;color:#fff;">${orgName || '—'}</td></tr>
      <tr><td style="padding:8px 0;color:rgba(255,255,255,0.4);">Health Score</td><td style="padding:8px 0;color:${score >= 70 ? '#10b981' : score >= 50 ? '#F5C518' : '#ef4444'};font-weight:700;font-size:16px;">${score}/100</td></tr>
      <tr><td style="padding:8px 0;color:rgba(255,255,255,0.4);">Bottleneck</td><td style="padding:8px 0;color:#fff;">${bottleneck}</td></tr>
    </table>

    <div style="margin-top:20px;"><a href="https://sarvanu.com/admin/leads" style="display:inline-block;padding:10px 22px;background:#F5C518;color:#000;font-size:12px;font-weight:700;text-decoration:none;border-radius:8px;">View in Admin Panel →</a></div>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Send the growth report PDF to the user's email with a premium HTML template.
 * Called from leads.js AFTER the PDF has been fully generated and saved.
 */
export async function sendGrowthReportEmail({
  toEmail,
  toName,
  orgName,
  pdfFilePath,   // absolute filesystem path
  score,
  bottleneck,
}) {
  const transporter = getTransporter();
  const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

  // Build attachments — only attach if file actually exists
  const attachments = [];
  if (pdfFilePath && fs.existsSync(pdfFilePath)) {
    attachments.push({
      filename: `${(orgName || 'Business').replace(/[^a-zA-Z0-9 ]/g, '')}-Growth-Audit-Report.pdf`,
      path: pdfFilePath,
      contentType: 'application/pdf',
    });
  } else {
    console.warn('[EmailService] PDF file not found at:', pdfFilePath);
  }

  const html = buildReportEmailHTML({
    name: toName,
    orgName,
    score,
    bottleneck,
  });

  await transporter.sendMail({
    from: `"Sarvanu Business Advisory" <${fromEmail}>`,
    to: toEmail,
    subject: `Your Business Growth Report is Ready — ${orgName || 'Sarvanu Audit'}`,
    html,
    attachments,
  });

  console.log(`[EmailService] Report email sent to ${toEmail}`);
}

/**
 * Notify the admin team about a new lead with score summary.
 */
export async function sendAdminNotification({
  name, email, phone, orgName, score, bottleneck, pdfFilePath,
}) {
  const transporter = getTransporter();
  const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;
  const adminEmail = process.env.CONTACT_TO_EMAIL || 'business@sarvanu.com';

  const attachments = [];
  if (pdfFilePath && fs.existsSync(pdfFilePath)) {
    attachments.push({
      filename: path.basename(pdfFilePath),
      path: pdfFilePath,
      contentType: 'application/pdf',
    });
  }

  await transporter.sendMail({
    from: `"Sarvanu CRM" <${fromEmail}>`,
    to: adminEmail,
    subject: `🔔 New Audit Lead: ${name} — Score ${score}/100`,
    html: buildAdminNotificationHTML({ name, email, phone, orgName, score, bottleneck }),
    attachments,
  });

  console.log(`[EmailService] Admin notification sent for ${name}`);
}
