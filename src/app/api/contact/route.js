import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { saveFormSubmission } from '@/server/services/forms';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // port 465 uses SSL
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(request) {
    try {
        const formData = await request.formData();

        // Extract common fields
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const businessStage = formData.get('business_stage');
        const goals = formData.get('goals');
        const formType = formData.get('form_type') || 'contact';

        await saveFormSubmission({
            formType: String(formType),
            name: String(name || ''),
            email: email ? String(email) : null,
            phone: phone ? String(phone) : null,
            businessStage: businessStage ? String(businessStage) : null,
            goals: goals ? String(goals) : null,
        });

        // Build the email HTML
        const htmlBody = `
            <h2>New ${formType === 'contact' ? 'Contact' : 'Strategy Call'} Request</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px;">
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
                ${phone ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>` : ''}
                ${businessStage ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Business Stage</td><td style="padding:8px;border:1px solid #ddd;">${businessStage}</td></tr>` : ''}
                ${goals ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Goals / Challenges</td><td style="padding:8px;border:1px solid #ddd;">${goals}</td></tr>` : ''}
            </table>
        `;

        // Send the email
        await transporter.sendMail({
            from: `"Sarvanu Website" <${process.env.CONTACT_FROM_EMAIL}>`,
            to: process.env.CONTACT_TO_EMAIL,
            replyTo: email,
            subject: `New ${formType} submission from ${name}`,
            html: htmlBody,
        });

        const url = new URL(request.url);
        const origin = url.origin;
        return NextResponse.redirect(`${origin}/?success=true`, 303);

    } catch (error) {
        console.error('Error handling form submission:', error);
        const url = new URL(request.url);
        const origin = url.origin;
        return NextResponse.redirect(`${origin}/?error=true`, 303);
    }
}
