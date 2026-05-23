'use client';
import { useState, useEffect } from 'react';

/* ── Animated Score Gauge ───────────────────────────────────────────────────── */
function ScoreGauge({ score }) {
  const [display, setDisplay] = useState(0);
  const color = score >= 70 ? '#10b981' : score >= 50 ? '#F5C518' : '#ef4444';

  useEffect(() => {
    let v = 0;
    const t = setInterval(() => {
      v += 2;
      if (v >= score) { setDisplay(score); clearInterval(t); }
      else setDisplay(v);
    }, 20);
    return () => clearInterval(t);
  }, [score]);

  const R = 52, cx = 70, cy = 70;
  const circ = 2 * Math.PI * R;
  const dash = circ * (score / 100);

  return (
    <svg width={140} height={140}>
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={10} />
      <circle cx={cx} cy={cy} r={R} fill="none" stroke={color} strokeWidth={10}
        strokeDasharray={`${dash} ${circ - dash}`} strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: 'stroke-dasharray 1.2s ease' }} />
      <text x={cx} y={cy + 4} textAnchor="middle" fill="#fff" fontSize="22" fontWeight="800" fontFamily="Inter,sans-serif">{display}</text>
      <text x={cx} y={cy + 20} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter,sans-serif">/ 100</text>
    </svg>
  );
}

/* ── Delivery Timeline Step ────────────────────────────────────────────────── */
function TimelineStep({ icon, label, done, active }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0',
      opacity: done || active ? 1 : 0.35,
      transition: 'opacity 0.4s ease',
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.85rem',
        background: done ? 'rgba(16,185,129,0.12)' : active ? 'rgba(245,197,24,0.1)' : 'rgba(255,255,255,0.04)',
        border: `1.5px solid ${done ? 'rgba(16,185,129,0.3)' : active ? 'rgba(245,197,24,0.25)' : 'rgba(255,255,255,0.06)'}`,
        color: done ? '#10b981' : active ? '#F5C518' : 'rgba(255,255,255,0.3)',
      }}>
        {done ? '✓' : active ? icon : icon}
      </div>
      <span style={{
        fontSize: '0.88rem', fontWeight: done || active ? 600 : 400,
        color: done ? 'rgba(255,255,255,0.7)' : active ? '#fff' : 'rgba(255,255,255,0.35)',
      }}>{label}</span>
      {active && (
        <span style={{
          marginLeft: 'auto', display: 'inline-block',
          width: 6, height: 6, borderRadius: '50%',
          background: '#F5C518',
          animation: 'pulse-dot 1.2s ease infinite',
        }} />
      )}
    </div>
  );
}

const QC = { Hot: '#ef4444', Warm: '#F5C518', Nurture: '#6366f1', Cold: '#6b7280' };

export default function SuccessScreen({ result, stage1 }) {
  const score     = result?.leadScore   ?? 0;
  const quality   = result?.leadQuality ?? 'Nurture';
  const bottle    = result?.bottleneck  ?? '';
  const userEmail = stage1?.email ?? '';
  const org       = stage1?.organisation ?? 'Your Business';
  const name      = stage1?.name ?? '';

  const qualLabel = score >= 70 ? 'Strong Growth Potential' : score >= 50 ? 'Needs Structural Improvements' : 'Critical Attention Required';
  const qColor    = QC[quality] || '#6b7280';

  /* Timeline animation — steps reveal one by one */
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1200),
      setTimeout(() => setStep(3), 2000),
      setTimeout(() => setStep(4), 2800),
      setTimeout(() => setStep(5), 3600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{
      minHeight: '100vh', background: 'linear-gradient(135deg,#08080F 0%,#0D0D1E 60%,#0A0A18 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px', fontFamily: "'Inter','Poppins',sans-serif",
    }}>

      {/* Sparkle */}
      <div style={{ fontSize: '2.5rem', marginBottom: 16, animation: 'pop 0.5s ease' }}>✦</div>

      <h1 style={{ color: '#fff', fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 800, textAlign: 'center', marginBottom: 6 }}>
        Analysis Complete & Report En Route
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: 36, textAlign: 'center' }}>
        {org} · Prepared by Sarvanu
      </p>

      {/* Main result card */}
      <div style={{
        background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 22, padding: 'clamp(24px,4vw,40px)', maxWidth: 580, width: '100%',
      }}>

        {/* Score gauge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <ScoreGauge score={score} />
        </div>

        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Business Health Score</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: 16 }}>{qualLabel}</div>

          {/* Badges row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ padding: '5px 14px', borderRadius: 20, background: `${qColor}18`, border: `1px solid ${qColor}40`, color: qColor, fontSize: '0.78rem', fontWeight: 700 }}>
              {quality} Lead
            </span>
            {bottle && (
              <span style={{ padding: '5px 14px', borderRadius: 20, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>
                🎯 {bottle}
              </span>
            )}
          </div>
        </div>

        {/* Delivery divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '20px 0' }} />

        {/* ── Growth Blueprint Delivery Timeline ── */}
        <div style={{ marginBottom: 20 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(245,197,24,0.06)', border: '1px solid rgba(245,197,24,0.15)',
            padding: '5px 14px', borderRadius: 20, fontSize: '0.72rem',
            fontWeight: 700, color: '#F5C518', textTransform: 'uppercase',
            letterSpacing: '0.08em', marginBottom: 16,
          }}>
            📋 Report Delivery Status
          </div>

          <TimelineStep icon="📝" label="Audit Answers Captured" done={step >= 1} active={step === 0} />
          <TimelineStep icon="📊" label={`Business Health Score Calculated — ${score}/100`} done={step >= 2} active={step === 1} />
          <TimelineStep icon="🎯" label={`Primary Bottleneck Identified — ${bottle || 'Growth Strategy'}`} done={step >= 3} active={step === 2} />
          <TimelineStep icon="🤖" label="AI Strategic Roadmap Generated" done={step >= 4} active={step === 3} />
          <TimelineStep icon="📧" label={`Dispatching 7-Page PDF Report to Your Email...`} done={step >= 5} active={step === 4} />
        </div>

        {/* Email delivery card */}
        <div style={{
          background: step >= 5 ? 'rgba(16,185,129,0.05)' : 'rgba(245,197,24,0.04)',
          border: `1px solid ${step >= 5 ? 'rgba(16,185,129,0.15)' : 'rgba(245,197,24,0.12)'}`,
          borderRadius: 14, padding: '20px 22px', textAlign: 'center',
          transition: 'all 0.5s ease',
        }}>
          <div style={{
            fontSize: step >= 5 ? '1rem' : '0.92rem', fontWeight: 700,
            color: step >= 5 ? '#10b981' : '#F5C518', marginBottom: 8,
          }}>
            {step >= 5 ? '✓ Report Dispatched Successfully' : '⏳ Compiling Your Custom Report...'}
          </div>
          <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
            {step >= 5 ? (
              <>Your comprehensive 7-page consulting-grade PDF analysis has been sent to <strong style={{ color: '#fff' }}>{userEmail}</strong>. Please check your inbox (and promotions folder) within the next 5 minutes.</>
            ) : (
              <>Our AI engine is generating a detailed, personalised business roadmap. It will be delivered directly to <strong style={{ color: '#fff' }}>{userEmail}</strong> within 5 minutes.</>
            )}
          </div>
        </div>

        {/* WhatsApp note */}
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem', marginTop: 18, marginBottom: 0 }}>
          📱 Our strategy team will also reach out on WhatsApp within 24 hours.
        </p>
      </div>

      {/* CTA */}
      <div style={{ marginTop: 28, textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem', marginBottom: 12 }}>
          Want to implement these findings with expert support?
        </p>
        <a href="/book" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 24px', borderRadius: 10,
          border: '1.5px solid rgba(245,197,24,0.4)', color: '#F5C518', fontSize: '0.88rem',
          fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,197,24,0.06)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
        >
          <i className="fas fa-calendar-check" /> Book a Strategy Call
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @keyframes pop { 0%{transform:scale(0.5);opacity:0} 80%{transform:scale(1.15)} 100%{transform:scale(1);opacity:1} }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }
      `}</style>
    </div>
  );
}
