/**
 * POST /api/audit/save-contact
 * Stage 1 data turant save karo DB mein (partial record).
 * Ye tabhi call hota hai jab user "Continue to Business Audit" click kare.
 * Response mein auditSubmissionId aur leadId aata hai jo AuditFunnel
 * state mein rakhta hai — final submit pe wohi record UPDATE hota hai.
 */

import { NextResponse } from 'next/server';
import { getPrisma }    from '@/server/services/prisma';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, designation, organisation, email, phone, whatsapp, city, website } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name, email aur phone required hain.' },
        { status: 400 }
      );
    }

    const prisma = getPrisma();

    // 1) AuditSubmission mein partial record banao
    const auditRow = await prisma.auditSubmission.create({
      data: {
        name:         name.trim(),
        designation:  (designation  || '').trim(),
        organisation: (organisation || '').trim(),
        email:        email.trim().toLowerCase(),
        phone:        phone.trim(),
        whatsapp:     (whatsapp || '').trim(),
        city:         (city     || '').trim(),
        website:      (website  || '').trim(),
        // Stage 2 & 3 abhi empty hain — baad mein update honge
        auditData:     '{}',
        diagnosisData: '{}',
        leadQuality:   'Nurture',
        leadScore:     0,
      },
    });

    // 2) Lead table mein bhi basic lead banao
    const leadRow = await prisma.lead.create({
      data: {
        name:         name.trim(),
        designation:  (designation  || '').trim(),
        organisation: (organisation || '').trim(),
        email:        email.trim().toLowerCase(),
        phone:        phone.trim(),
        quizAnswers:  '{}',
        leadQuality:  'Nurture',
        healthScore:  0,
        source:       'audit-stage1', // sirf stage 1 fill kiya — tracking ke liye
      },
    });

    console.log(`[Audit Save-Contact] Partial record created — Audit #${auditRow.id}, Lead #${leadRow.id}`);

    return NextResponse.json(
      {
        success:            true,
        auditSubmissionId:  Number(auditRow.id),
        leadId:             Number(leadRow.id),
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('[POST /api/audit/save-contact]', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
