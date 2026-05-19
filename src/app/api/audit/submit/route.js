/**
 * POST /api/audit/submit
 * Saves full 3-stage audit, computes score, triggers AI+PDF async
 * Also saves a corresponding Lead record so data appears in Admin panel
 */

import { NextResponse }             from 'next/server';
import { getPrisma }                from '@/server/services/prisma';
import { computeAuditScore, generateBusinessAnalysis } from '@/server/services/ai-analysis';
import { generateReportPDF }        from '@/server/services/pdf-generator';

export const runtime = 'nodejs';

// ─── Background report generation ────────────────────────────────────────────
async function triggerReport(auditId, leadId, contactData, auditData, diagnosisData) {
  try {
    const ai      = await generateBusinessAnalysis(contactData, auditData, diagnosisData);
    const pdfPath = await generateReportPDF(
      `audit-${auditId}`,
      contactData,
      ai,
      { isAudit: true, auditData, diagnosisData },
    );

    const prisma = getPrisma();

    // Update AuditSubmission
    await prisma.auditSubmission.update({
      where: { id: BigInt(auditId) },
      data:  { aiAnalysis: JSON.stringify(ai), pdfPath },
    });

    // Also update the corresponding Lead record
    if (leadId) {
      await prisma.lead.update({
        where: { id: BigInt(leadId) },
        data:  { aiAnalysis: JSON.stringify(ai), pdfPath },
      });
    }

    console.log(`[Audit Report] Generated for #${auditId} (lead #${leadId}): ${pdfPath}`);
  } catch (err) {
    console.error(`[Audit Report] Failed for #${auditId}:`, err.message);
  }
}

// ─── POST /api/audit/submit ───────────────────────────────────────────────────
export async function POST(request) {
  try {
    const body = await request.json();
    const { stage1, stage2, stage3 } = body;

    // Basic validation
    if (!stage1?.name || !stage1?.email || !stage1?.phone) {
      return NextResponse.json({ success: false, error: 'Name, email and phone are required.' }, { status: 400 });
    }

    const { leadScore, leadQuality, bottleneck } = computeAuditScore(stage2 || {}, stage3 || {});

    const prisma = getPrisma();

    // 1) Save to AuditSubmission table (full detailed data)
    const auditRow = await prisma.auditSubmission.create({
      data: {
        name:         stage1.name.trim(),
        designation:  (stage1.designation  || '').trim(),
        organisation: (stage1.organisation || '').trim(),
        email:        stage1.email.trim().toLowerCase(),
        phone:        stage1.phone.trim(),
        whatsapp:     (stage1.whatsapp || '').trim(),
        city:         (stage1.city     || '').trim(),
        website:      (stage1.website  || '').trim(),
        auditData:    JSON.stringify(stage2 || {}),
        diagnosisData: JSON.stringify(stage3 || {}),
        leadScore,
        leadQuality,
        bottleneck,
      },
    });

    // 2) Also save to Lead table so Admin panel shows the data
    //    Store stage2 + stage3 combined as quizAnswers JSON
    const combinedAnswers = {
      stage2: stage2 || {},
      stage3: stage3 || {},
    };

    const leadRow = await prisma.lead.create({
      data: {
        name:         stage1.name.trim(),
        designation:  (stage1.designation  || '').trim(),
        organisation: (stage1.organisation || '').trim(),
        email:        stage1.email.trim().toLowerCase(),
        phone:        stage1.phone.trim(),
        quizAnswers:  JSON.stringify(combinedAnswers),
        leadQuality,
        healthScore:  leadScore,
        bottleneck,
        source:       'audit',
      },
    });

    const auditId = Number(auditRow.id);
    const leadId  = Number(leadRow.id);
    const pdfUrl  = `/reports/audit-${auditId}-report.pdf`;

    // Fire-and-forget AI + PDF (updates both tables)
    triggerReport(auditId, leadId, stage1, stage2 || {}, stage3 || {});

    return NextResponse.json(
      { success: true, id: auditId, leadId, leadScore, leadQuality, bottleneck, pdfUrl },
      { status: 201 },
    );
  } catch (err) {
    console.error('[POST /api/audit/submit]', err);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}
