'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// ─── Stage 3 Questions (matching Stage3Diagnosis.jsx) ─────────────────────────
const STAGE3_QUESTIONS = [
  { id: 'q1', text: 'When you review your recent business performance, what feels most accurate?', options: ['Revenue has been inconsistent','Growth has become stagnant','Business is growing slower than expected','Growth is strong but operations feel chaotic'] },
  { id: 'q2', text: 'Where does the majority of your new business currently come from?', options: ['Referrals and word of mouth','Social media marketing','Repeat customers','No predictable acquisition channel'] },
  { id: 'q3', text: 'How involved are you in day-to-day operations?', options: ['I handle almost everything personally','I manage most critical decisions','Some operations are delegated','The team manages most operations independently'] },
  { id: 'q4', text: 'What best describes your current sales process?', options: ['Leads rarely convert consistently','Sales conversations lack structure','Conversion rates are unpredictable','Sales performance is stable'] },
  { id: 'q5', text: 'How would you describe your operational systems?', options: ['Most processes depend on manual management','We use spreadsheets and WhatsApp heavily','We have systems but they are disconnected','Systems are structured and scalable'] },
  { id: 'q6', text: 'How clear is your brand positioning in the market?', options: ['We struggle to differentiate from competitors','We know our value internally but messaging is weak','Branding exists but conversion is inconsistent','Our positioning is strong and clearly understood'] },
  { id: 'q7', text: 'What is the single biggest outcome you want over the next 12 months?', options: ['Increase revenue and client acquisition','Build scalable systems and operations','Gain strategic clarity and direction','Build a stronger market presence and brand authority'] },
];

const STAGE3_RATINGS = [
  { id: 'rating_confidence', label: 'Confidence in Growth Strategy' },
  { id: 'rating_stress',     label: 'Business Stress Level' },
  { id: 'rating_scaling',    label: 'Scaling Readiness' },
];

// ─── Stage 2 field labels ─────────────────────────────────────────────────────
const STAGE2_FIELDS = [
  { key: 'businessType',          label: 'Business Type',     icon: '🏢' },
  { key: 'industry',              label: 'Industry',          icon: '🏭' },
  { key: 'description',           label: 'Description',       icon: '📝', wide: true },
  { key: 'stage',                 label: 'Business Stage',    icon: '📊' },
  { key: 'operatingSince',        label: 'Operating Since',   icon: '📅' },
  { key: 'teamSize',              label: 'Team Size',         icon: '👥' },
  { key: 'currentRevenue',        label: 'Current Revenue',   icon: '💰' },
  { key: 'targetRevenue',         label: 'Target Revenue',    icon: '🎯' },
  { key: 'growthGoals',           label: 'Growth Goals',      icon: '🚀', isArray: true },
  { key: 'challenges',            label: 'Challenges',        icon: '⚡', isArray: true },
  { key: 'customerSources',       label: 'Customer Sources',  icon: '📡', isArray: true },
  { key: 'crmUsage',              label: 'CRM / Systems',     icon: '⚙️' },
  { key: 'salesProcess',          label: 'Sales Process',     icon: '🤝' },
  { key: 'founderDependency',     label: 'Founder Dependency',icon: '👤' },
  { key: 'operationalBottleneck', label: 'Bottleneck',        icon: '🔧', wide: true },
  { key: 'whyNotGrowing',         label: 'Why Not Growing',   icon: '🤔', wide: true },
];

const STATUS_OPTIONS = ['New', 'Contacted', 'Qualified', 'Closed Won', 'Not Interested'];
const QC = { Hot: '#ef4444', Warm: '#F5C518', Nurture: '#6366f1', Cold: '#6b7280' };

function Section({ title, icon, children, accent }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 16, marginBottom: 20, overflow: 'hidden',
    }}>
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', gap: 10,
        background: accent ? `${accent}08` : 'transparent',
      }}>
        {icon && <span style={{ fontSize: '1rem' }}>{icon}</span>}
        <h3 style={{ margin: 0, color: '#fff', fontSize: '0.95rem', fontWeight: 700 }}>{title}</h3>
      </div>
      <div style={{ padding: '20px' }}>{children}</div>
    </div>
  );
}

function InfoRow({ label, value, icon }) {
  return (
    <div style={{ display: 'flex', gap: 12, marginBottom: 13, alignItems: 'flex-start' }}>
      {icon && <span style={{ fontSize: '0.85rem', flexShrink: 0, marginTop: 1 }}>{icon}</span>}
      <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', minWidth: 120, flexShrink: 0, fontWeight: 500 }}>{label}</span>
      <span style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 500 }}>{value || '—'}</span>
    </div>
  );
}

function TagList({ items, color = '#F5C518' }) {
  if (!items?.length) return <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.82rem' }}>—</span>;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {items.map(item => (
        <span key={item} style={{
          padding: '4px 12px', borderRadius: 16, fontSize: '0.76rem', fontWeight: 600,
          background: `${color}12`, border: `1px solid ${color}30`, color,
        }}>{item}</span>
      ))}
    </div>
  );
}

function RatingBadge({ label, value }) {
  const color = value >= 7 ? '#10b981' : value >= 5 ? '#F5C518' : '#ef4444';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '12px 16px', borderRadius: 12,
      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
      marginBottom: 8,
    }}>
      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.84rem', fontWeight: 500 }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: '1.2rem', fontWeight: 800, color }}>{value}</span>
        <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem' }}>/10</span>
      </div>
    </div>
  );
}

export default function LeadDetailPage() {
  const { id } = useParams();
  const [lead, setLead]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [crm, setCrm]         = useState({ callStatus: '', notes: '' });
  const [saving, setSaving]   = useState(false);
  const [saved, setSaved]     = useState(false);

  useEffect(() => {
    fetch(`/api/admin/leads/${id}`)
      .then(r => r.json())
      .then(d => {
        if (d.success) {
          setLead(d.lead);
          setCrm({ callStatus: d.lead.call_status || 'New', notes: d.lead.notes || '' });
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleSaveCrm = async () => {
    setSaving(true);
    await fetch(`/api/admin/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crm),
    });
    setSaving(false); setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (loading) return <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>Loading lead data…</div>;
  if (!lead)   return <div style={{ padding: 40, textAlign: 'center', color: '#ef4444' }}>Lead not found.</div>;

  const ai      = lead.ai_analysis;
  const answers = lead.quiz_answers || {};
  const score   = lead.health_score ?? 0;
  const scoreColor = score >= 70 ? '#10b981' : score >= 50 ? '#F5C518' : '#ef4444';

  // Extract stage2 and stage3 data from combined quiz_answers
  const stage2Data = answers.stage2 || {};
  const stage3Data = answers.stage3 || {};
  const hasAuditData = Object.keys(stage2Data).length > 0 || Object.keys(stage3Data).length > 0;

  // Determine if data is in new format (stage2/stage3) or old format (q1,q2... keys)
  const isNewFormat = hasAuditData;

  return (
    <div>
      {/* Back + header */}
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        <Link href="/admin/leads" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem' }}>
          ← All Leads
        </Link>
        <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
        <h1 style={{ margin: 0, color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>{lead.name}</h1>
        <span style={{
          background: `${QC[lead.lead_quality] || '#6b7280'}18`,
          color: QC[lead.lead_quality] || '#6b7280',
          border: `1px solid ${QC[lead.lead_quality] || '#6b7280'}40`,
          padding: '3px 12px', borderRadius: 20, fontSize: '0.72rem', fontWeight: 700,
        }}>{lead.lead_quality}</span>
        {lead.source === 'audit' && (
          <span style={{
            background: 'rgba(99,102,241,0.12)', color: '#818cf8',
            border: '1px solid rgba(99,102,241,0.3)',
            padding: '3px 12px', borderRadius: 20, fontSize: '0.72rem', fontWeight: 600,
          }}>📋 Full Audit</span>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

        {/* LEFT COLUMN */}
        <div>
          <Section title="Contact Information" icon="👤">
            <InfoRow label="Full Name"     value={lead.name} />
            <InfoRow label="Organisation"  value={lead.organisation} />
            <InfoRow label="Designation"   value={lead.designation} />
            <InfoRow label="Email"         value={<a href={`mailto:${lead.email}`} style={{ color: '#F5C518', textDecoration: 'none' }}>{lead.email}</a>} />
            <InfoRow label="Phone"         value={<a href={`tel:${lead.phone}`} style={{ color: '#F5C518', textDecoration: 'none' }}>{lead.phone}</a>} />
            <InfoRow label="Lead Quality"  value={lead.lead_quality} />
            <InfoRow label="Source"        value={lead.source === 'audit' ? '📋 Business Audit Funnel' : '📩 Contact Form'} />
            <InfoRow label="Submitted"     value={new Date(lead.created_at).toLocaleString('en-IN')} />
          </Section>

          {/* ─── STAGE 2: Business Audit Data ─── */}
          {isNewFormat && Object.keys(stage2Data).length > 0 && (
            <Section title="Stage 2 — Business Audit Data" icon="🏢" accent="#6366f1">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {STAGE2_FIELDS.map(f => {
                  const val = stage2Data[f.key];
                  if (val === undefined || val === '' || (Array.isArray(val) && val.length === 0)) return null;

                  const content = f.isArray
                    ? <TagList items={val} />
                    : <span style={{ color: '#fff', fontSize: '0.84rem', fontWeight: 500, lineHeight: 1.5 }}>{val}</span>;

                  return (
                    <div key={f.key} style={{
                      gridColumn: f.wide ? 'span 2' : 'span 1',
                      padding: '12px 14px', borderRadius: 12,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <div style={{
                        fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)',
                        fontWeight: 600, marginBottom: 6, textTransform: 'uppercase',
                        letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: 6,
                      }}>
                        <span>{f.icon}</span> {f.label}
                      </div>
                      {content}
                    </div>
                  );
                }).filter(Boolean)}
              </div>
            </Section>
          )}

          {/* ─── STAGE 3: Diagnosis Answers ─── */}
          {isNewFormat && Object.keys(stage3Data).length > 0 ? (
            <Section title="Stage 3 — Business Diagnosis" icon="🔍" accent="#F5C518">
              {/* MCQ Questions */}
              {STAGE3_QUESTIONS.map((q, qi) => {
                const ansIdx = stage3Data[q.id];
                const ans    = ansIdx !== undefined ? q.options[ansIdx] : null;
                return (
                  <div key={q.id} style={{
                    marginBottom: 16, paddingBottom: 16,
                    borderBottom: qi < STAGE3_QUESTIONS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  }}>
                    <div style={{
                      fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: 8,
                      display: 'flex', alignItems: 'flex-start', gap: 8,
                    }}>
                      <span style={{
                        background: ans ? 'rgba(245,197,24,0.15)' : 'rgba(255,255,255,0.06)',
                        color: ans ? '#F5C518' : 'rgba(255,255,255,0.3)',
                        padding: '2px 8px', borderRadius: 6, fontSize: '0.7rem',
                        fontWeight: 700, flexShrink: 0,
                      }}>Q{qi + 1}</span>
                      <span>{q.text}</span>
                    </div>
                    <div style={{
                      background: ans ? 'rgba(245,197,24,0.06)' : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${ans ? 'rgba(245,197,24,0.15)' : 'rgba(255,255,255,0.05)'}`,
                      borderRadius: 10, padding: '10px 14px',
                      color: ans ? '#fff' : 'rgba(255,255,255,0.25)',
                      fontSize: '0.86rem', fontWeight: ans ? 500 : 400,
                      display: 'flex', alignItems: 'center', gap: 8,
                    }}>
                      {ans && <span style={{ color: '#F5C518', fontSize: '0.8rem' }}>✓</span>}
                      {ans || 'Not answered'}
                    </div>
                  </div>
                );
              })}

              {/* Rating Scores */}
              {STAGE3_RATINGS.some(r => stage3Data[r.id] !== undefined) && (
                <div style={{ marginTop: 20 }}>
                  <div style={{
                    fontSize: '0.72rem', color: '#F5C518', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12,
                  }}>Self-Assessment Ratings</div>
                  {STAGE3_RATINGS.map(r => {
                    const val = stage3Data[r.id];
                    if (val === undefined) return null;
                    return <RatingBadge key={r.id} label={r.label} value={val} />;
                  })}
                </div>
              )}
            </Section>
          ) : !isNewFormat && Object.keys(answers).length > 0 && (
            /* Legacy format — old quiz answers with numeric keys */
            <Section title="Diagnostic Quiz Answers" icon="📝">
              {Object.entries(answers).map(([key, val]) => (
                <div key={key} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>Question: {key}</div>
                  <div style={{
                    background: 'rgba(245,197,24,0.06)', border: '1px solid rgba(245,197,24,0.15)',
                    borderRadius: 8, padding: '8px 12px', color: '#fff', fontSize: '0.84rem',
                  }}>{typeof val === 'number' ? `Option ${val + 1}` : String(val)}</div>
                </div>
              ))}
            </Section>
          )}

          <Section title="CRM — Call Status & Notes" icon="📞">
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>Call Status</label>
              <select value={crm.callStatus} onChange={e => setCrm(c => ({ ...c, callStatus: e.target.value }))} style={{
                width: '100%', padding: '10px 12px', borderRadius: 10, fontSize: '0.88rem',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff', outline: 'none',
              }}>
                {STATUS_OPTIONS.map(s => <option key={s} value={s} style={{ background: '#0D0D1E' }}>{s}</option>)}
              </select>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>Notes</label>
              <textarea value={crm.notes} onChange={e => setCrm(c => ({ ...c, notes: e.target.value }))} rows={4}
                placeholder="Add notes about this lead…"
                style={{
                  width: '100%', padding: '10px 12px', borderRadius: 10, fontSize: '0.85rem',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff', outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                }} />
            </div>
            <button onClick={handleSaveCrm} disabled={saving} style={{
              padding: '10px 24px', borderRadius: 10, border: 'none', cursor: 'pointer',
              background: saved ? '#10b981' : 'linear-gradient(135deg, #F5C518, #f0bb00)',
              color: '#000', fontWeight: 700, fontSize: '0.88rem',
              transition: 'all 0.2s',
              boxShadow: saved ? '0 4px 12px rgba(16,185,129,0.25)' : '0 4px 12px rgba(245,197,24,0.2)',
            }}>
              {saving ? 'Saving…' : saved ? '✓ Saved' : 'Save CRM Update'}
            </button>
          </Section>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Score */}
          <Section title="Business Health Score" icon="📊">
            <div style={{ textAlign: 'center', padding: '10px 0 20px' }}>
              <div style={{
                width: 110, height: 110, borderRadius: '50%',
                border: `6px solid ${scoreColor}`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px', background: `${scoreColor}0D`,
                boxShadow: `0 0 30px ${scoreColor}15`,
              }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: scoreColor, lineHeight: 1 }}>{score}</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>/100</div>
              </div>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginBottom: 4 }}>
                {score >= 70 ? 'Strong Growth Potential' : score >= 50 ? 'Needs Improvement' : 'Critical Attention Required'}
              </div>
              {lead.bottleneck && (
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginTop: 8 }}>
                  Primary bottleneck: <span style={{ color: '#F5C518', fontWeight: 600 }}>{lead.bottleneck}</span>
                </div>
              )}
            </div>
          </Section>

          {/* PDF */}
          <Section title="AI Report" icon="📄">
            {lead.pdf_path ? (
              <a href={lead.pdf_path} target="_blank" rel="noreferrer" download style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.2)',
                borderRadius: 12, padding: '14px 16px', textDecoration: 'none', color: '#fff',
                transition: 'all 0.2s',
              }}>
                <i className="fas fa-file-pdf" style={{ color: '#ef4444', fontSize: '1.2rem' }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>Download PDF Report</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>{lead.pdf_path}</div>
                </div>
                <i className="fas fa-download" style={{ marginLeft: 'auto', color: '#F5C518' }} />
              </a>
            ) : (
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', padding: '8px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
                <i className="fas fa-clock" />
                Report is being generated in the background…
              </div>
            )}
          </Section>

          {/* AI Analysis */}
          {ai && (
            <Section title="AI Analysis" icon="🤖" accent="#10b981">
              {ai.executiveSummary && (
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: '0.72rem', color: '#F5C518', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Executive Summary</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>{ai.executiveSummary}</p>
                </div>
              )}

              {ai.keyFindings?.length > 0 && (
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: '0.72rem', color: '#F5C518', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Key Findings</div>
                  {ai.keyFindings.map((f, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                      <span style={{ color: '#F5C518', flexShrink: 0 }}>→</span>
                      <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.83rem', lineHeight: 1.6 }}>{f}</span>
                    </div>
                  ))}
                </div>
              )}

              {ai.recommendations?.immediate?.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Immediate Actions</div>
                  {ai.recommendations.immediate.map((r, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                      <span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>
                      <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.83rem' }}>{r}</span>
                    </div>
                  ))}
                </div>
              )}
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}
