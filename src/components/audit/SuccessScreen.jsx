'use client';
import { useState, useEffect, useRef } from 'react';

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
  const pct = score / 100;
  const circ = 2 * Math.PI * R;
  const dash = circ * pct;

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

const QC = { Hot: '#ef4444', Warm: '#F5C518', Nurture: '#6366f1', Cold: '#6b7280' };

export default function SuccessScreen({ result, stage1 }) {
  const score   = result?.leadScore   ?? 0;
  const quality = result?.leadQuality ?? 'Nurture';
  const bottle  = result?.bottleneck  ?? '';
  const pdfUrl  = result?.pdfUrl      ?? '';
  const userEmail = stage1?.email ?? '';
  const [seconds, setSeconds] = useState(30);
  const [ready, setReady] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const org     = stage1?.organisation ?? 'Your Business';
  const name    = stage1?.name ?? '';

  const qualLabel = score >= 70 ? 'Strong Growth Potential' : score >= 50 ? 'Needs Structural Improvements' : 'Critical Attention Required';
  const qColor    = QC[quality] || '#6b7280';

  // Poll for PDF availability and manage countdown + email
  useEffect(() => {
    if (!pdfUrl) return;
    let mounted = true;

    const checkPdf = async () => {
      try {
        const resp = await fetch(pdfUrl, { method: 'HEAD' });
        if (!mounted) return;
        if (resp.ok) {
          setReady(true);
        }
      } catch (err) {
        // ignore
      }
    };

    // initial check
    checkPdf();

    const poll = setInterval(() => {
      if (!mounted) return;
      checkPdf();
    }, 2000);

    return () => { mounted = false; clearInterval(poll); };
  }, [pdfUrl]);

  useEffect(() => {
    if (!pdfUrl) return;
    if (ready && !emailSent) {
      // send email once ready
      (async () => {
        try {
          if (!userEmail) return;
          await fetch('/api/reports/email', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userEmail, pdfUrl }),
          });
          setEmailSent(true);
        } catch (err) {
          console.error('Failed to send report email', err);
        }
      })();
    }
  }, [ready, pdfUrl, userEmail, emailSent]);

  useEffect(() => {
    if (!pdfUrl) return;
    if (seconds <= 0) {
      setReady(true);
      return;
    }
    const t = setInterval(() => setSeconds(s => s - 1), 1000);
    return () => clearInterval(t);
  }, [seconds, pdfUrl]);

  return (
    <div style={{
      minHeight: '100vh', background: 'linear-gradient(135deg,#08080F 0%,#0D0D1E 60%,#0A0A18 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px', fontFamily: "'Inter','Poppins',sans-serif",
    }}>
      {/* Confetti-style sparkle */}
      <div style={{ fontSize: '2.5rem', marginBottom: 16, animation: 'pop 0.5s ease' }}>✦</div>

      <h1 style={{ color: '#fff', fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 800, textAlign: 'center', marginBottom: 6 }}>
        Your Audit Report is Ready
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: 36, textAlign: 'center' }}>
        {org} · Prepared by Sarvanu
      </p>

      {/* Main result card */}
      <div style={{ background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 22, padding: '36px 40px', maxWidth: 560, width: '100%', textAlign: 'center' }}>

        {/* Score gauge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <ScoreGauge score={score} />
        </div>

        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Business Health Score</div>
        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: 16 }}>{qualLabel}</div>

        {/* Badges row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
          <span style={{ padding: '5px 14px', borderRadius: 20, background: `${qColor}18`, border: `1px solid ${qColor}40`, color: qColor, fontSize: '0.78rem', fontWeight: 700 }}>
            {quality} Lead
          </span>
          {bottle && (
            <span style={{ padding: '5px 14px', borderRadius: 20, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>
              🎯 {bottle}
            </span>
          )}
        </div>

        {/* PDF Download with 30s timer + email step */}
        {pdfUrl ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            {!ready ? (
              <div style={{ padding: '12px 18px', borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>
                <i className="fas fa-hourglass-half" style={{ marginRight: 8 }} /> Preparing your report — available in <strong style={{ marginLeft: 6 }}>{seconds}s</strong>
              </div>
            ) : (
              <a href={pdfUrl} download target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '14px 28px', borderRadius: 12, background: '#F5C518', color: '#000',
                fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
                transition: 'all 0.2s'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f0bb00'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#F5C518'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <i className="fas fa-file-pdf" style={{ fontSize: '1.1rem', color: '#7a1500' }} />
                Download Your Audit Report (PDF)
              </a>
            )}

            <div style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)' }}>
              {ready ? (emailSent ? 'Report emailed to you.' : 'We will also email this report to your inbox.') : 'You can download after the timer finishes.'}
            </div>
          </div>
        ) : (
          <div style={{ padding: '14px 28px', borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: 14 }}>
            <i className="fas fa-spinner" style={{ marginRight: 8 }} /> Report is being prepared — check your email shortly.
          </div>
        )}

        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem', margin: 0 }}>
          📱 Our strategy team will reach out on WhatsApp within 2 hours.
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
      `}</style>
    </div>
  );
}
