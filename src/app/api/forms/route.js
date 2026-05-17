import { NextResponse } from 'next/server';
import { saveFormSubmission, validateFormSubmission } from '@/server/services/forms';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const body = await request.json();
    const { valid, errors } = validateFormSubmission(body);

    if (!valid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const { id } = await saveFormSubmission(body);
    return NextResponse.json({ success: true, id }, { status: 201 });
  } catch (err) {
    console.error('[POST /api/forms]', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
