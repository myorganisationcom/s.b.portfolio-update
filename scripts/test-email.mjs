/**
 * Quick test — verifies SMTP email delivery end-to-end
 * Run with: node scripts/test-email.mjs
 */
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

console.log('📧 Testing SMTP connection...');
console.log(`   Host: ${process.env.SMTP_HOST}`);
console.log(`   Port: ${process.env.SMTP_PORT}`);
console.log(`   User: ${process.env.SMTP_USER}`);
console.log(`   From: ${process.env.CONTACT_FROM_EMAIL}`);

try {
  await transporter.verify();
  console.log('✅ SMTP connection verified successfully!\n');
} catch (err) {
  console.error('❌ SMTP connection failed:', err.message);
  process.exit(1);
}

// Send a test email to the admin
const testEmail = process.env.CONTACT_TO_EMAIL || 'business@sarvanu.com';
console.log(`📨 Sending test email to: ${testEmail}`);

try {
  const info = await transporter.sendMail({
    from: `"Sarvanu Test" <${process.env.CONTACT_FROM_EMAIL}>`,
    to: testEmail,
    subject: '✅ Sarvanu Email Test — SMTP Working',
    html: `
      <div style="font-family:sans-serif;padding:20px;background:#0D0D1E;color:#fff;border-radius:12px;">
        <h2 style="color:#F5C518;">✅ Email Test Successful</h2>
        <p style="color:rgba(255,255,255,0.6);">This confirms that the Sarvanu email service is working correctly.</p>
        <p style="color:rgba(255,255,255,0.4);font-size:12px;">Sent at: ${new Date().toLocaleString('en-IN')}</p>
      </div>
    `,
  });
  console.log('✅ Email sent successfully!');
  console.log('   Message ID:', info.messageId);
  console.log('   Response:', info.response);
} catch (err) {
  console.error('❌ Email send failed:', err.message);
  console.error('   Full error:', err);
}

process.exit(0);
