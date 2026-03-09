import { NextResponse } from 'next/server';

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

        // Log the data (in a real app, this would send an email via Nodemailer/Resend or save to a DB)
        console.log(`\n--- New Form Submission (${formType}) ---`);
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        if (phone) console.log(`Phone: ${phone}`);
        if (businessStage) console.log(`Business Stage: ${businessStage}`);
        if (goals) console.log(`Goals/Challenges: ${goals}`);
        console.log('-----------------------------------\n');

        // Return a success response, perhaps redirecting to a thank you page or returning JSON
        // Since the original site used a simple PHP script, let's redirect back with a success parameter

        // We can get the origin to redirect back to the home page or a thank you page
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
