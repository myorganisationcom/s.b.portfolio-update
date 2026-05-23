'use client';

import { useEffect, useState } from 'react';
import { useLeadModal } from './LeadModalContext';

const benefits = [
  { icon: 'fa-bullseye', title: 'Bottleneck Assessment', desc: 'Rapid identification of exactly what is stalling your growth right now.' },
  { icon: 'fa-bolt',     title: 'Actionable Insights',   desc: 'Immediate changes you can apply to your business today — no fluff.' },
  { icon: 'fa-handshake',title: 'Honest Partnership Fit',desc: 'We tell you plainly if and how we can help — zero sales pressure.' },
];
const trust = [
  { icon: 'fa-lock',      label: '100% Confidential' },
  { icon: 'fa-stopwatch', label: 'Response in 24hrs'  },
  { icon: 'fa-tag',       label: 'Zero Sales Pressure' },
];

const fieldWrap  = { display: 'flex', flexDirection: 'column', gap: 6 };
const labelStyle = { fontSize: '0.84rem', color: 'rgba(255,255,255,0.72)', fontWeight: 500 };
const inputStyle = {
  width: '100%', padding: '12px 16px',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 12, color: '#fff',
  fontSize: '0.95rem', fontFamily: 'inherit',
  outline: 'none', transition: 'border-color .2s, box-shadow .2s',
  boxSizing: 'border-box',
};
const iFocus = (e) => {
  e.target.style.borderColor = '#F5C518';
  e.target.style.boxShadow   = '0 0 0 3px rgba(245,197,24,0.12)';
  e.target.style.background  = 'rgba(255,255,255,0.07)';
};
const iBlur = (e) => {
  e.target.style.borderColor = 'rgba(255,255,255,0.1)';
  e.target.style.boxShadow   = 'none';
  e.target.style.background  = 'rgba(255,255,255,0.05)';
};

export default function BookModal() {
  const { activeModal, closeModal } = useLeadModal();
  const isOpen = activeModal === 'book';
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const fn = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [isOpen, closeModal]);

  // Reset on close
  useEffect(() => { if (!isOpen) setSubmitted(false); }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd        = new FormData(e.target);
    const name      = fd.get('name');
    const email     = fd.get('email');
    const phone     = fd.get('phone');
    const stage     = fd.get('stage');
    const challenge = fd.get('challenge');

    const msg = [
      '*New Strategy Call Request — Sarvanu*', '',
      `*Name:*      ${name}`,
      `*Email:*     ${email}`,
      `*Phone:*     ${phone}`,
      `*Stage:*     ${stage}`,
      challenge?.trim() ? `*Challenge:* ${challenge.trim()}` : null,
    ].filter(Boolean).join('\n');

    try {
      await fetch('/api/forms', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ formType: 'book_strategy_call', name, email, phone, businessStage: stage, challenge }),
      });
    } catch {}

    window.open(`https://wa.me/918700541657?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeModal}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.80)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 9000,
          animation: 'bookBdFade 0.25s ease',
        }}
      />

      {/* Modal container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book a Strategy Call"
        style={{
          position: 'fixed', inset: 0,
          zIndex: 9001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 16px',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 980,
            background: 'linear-gradient(160deg, #060612 0%, #0d0d1a 50%, #0f1520 100%)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 24,
            boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 80px rgba(245,197,24,0.05)',
            animation: 'bookSlideUp 0.32s cubic-bezier(0.22,1,0.36,1)',
            overflow: 'hidden',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Ambient glows */}
          <div style={{ position:'absolute', top:'-20%', left:'-10%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(59,130,246,0.07) 0%,transparent 70%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'-20%', right:'-10%', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(245,197,24,0.05) 0%,transparent 70%)', pointerEvents:'none' }} />

          {/* Close button */}
          <button
            onClick={closeModal}
            aria-label="Close"
            style={{
              position: 'absolute', top: 16, right: 16, zIndex: 2,
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.6)', fontSize: '1rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background='rgba(255,255,255,0.14)'; e.currentTarget.style.color='#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background='rgba(255,255,255,0.07)'; e.currentTarget.style.color='rgba(255,255,255,0.6)'; }}
          >✕</button>

          <div style={{ position:'relative', zIndex:1, padding:'48px 40px', display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:48, alignItems:'start' }} className="book-modal-grid">

            {/* ── LEFT ── */}
            <div>
              <span style={{ display:'inline-block', background:'rgba(245,197,24,0.1)', color:'#F5C518', border:'1px solid rgba(245,197,24,0.2)', padding:'6px 16px', borderRadius:20, fontSize:'0.77rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.8px', marginBottom:20 }}>
                Free 15-Min Strategy Call
              </span>

              <h2 style={{ fontSize:'clamp(1.7rem,3.5vw,2.5rem)', fontWeight:800, color:'#fff', lineHeight:1.15, marginBottom:18 }}>
                Let&apos;s Talk About<br />
                <span style={{ background:'linear-gradient(135deg,#f5c518,#ffdd57)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  Your Business
                </span>
              </h2>

              <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'0.97rem', lineHeight:1.75, marginBottom:28 }}>
                A focused 15-minute call where we diagnose your
                biggest growth bottleneck and give you a clear path forward —
                before you spend a single rupee.
              </p>

              {/* Benefits */}
              <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:24 }}>
                {benefits.map((b, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:14, padding:'12px 14px' }}>
                    <div style={{ width:38, height:38, borderRadius:10, background:'rgba(245,197,24,0.1)', border:'1px solid rgba(245,197,24,0.15)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:'#F5C518', fontSize:'0.9rem' }}>
                      <i className={`fas ${b.icon}`} />
                    </div>
                    <div>
                      <p style={{ color:'#F5C518', fontWeight:700, fontSize:'0.9rem', margin:'0 0 2px' }}>{b.title}</p>
                      <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.83rem', lineHeight:1.55, margin:0 }}>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:22 }}>
                {trust.map((t, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:7, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', padding:'6px 13px', borderRadius:20, fontSize:'0.81rem', color:'rgba(255,255,255,0.75)' }}>
                    <i className={`fas ${t.icon}`} style={{ color:'#F5C518', fontSize:'0.77rem' }} />
                    {t.label}
                  </div>
                ))}
              </div>

              {/* WhatsApp direct */}
              <p style={{ color:'rgba(255,255,255,0.35)', fontSize:'0.83rem', marginBottom:10 }}>Prefer to reach out directly?</p>
              <a href="https://wa.me/918700541657" target="_blank" rel="noopener noreferrer"
                style={{ display:'inline-flex', alignItems:'center', gap:9, background:'rgba(37,211,102,0.1)', border:'1px solid rgba(37,211,102,0.25)', color:'#25d366', padding:'9px 20px', borderRadius:30, textDecoration:'none', fontWeight:600, fontSize:'0.9rem', transition:'background .2s' }}>
                <i className="fab fa-whatsapp" style={{ fontSize:'1.05rem' }} /> Message on WhatsApp
              </a>
            </div>

            {/* ── RIGHT — Form ── */}
            <div style={{ background:'rgba(255,255,255,0.03)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', border:'1px solid rgba(255,255,255,0.09)', borderRadius:20, padding:'32px 28px', boxShadow:'0 20px 60px rgba(0,0,0,0.4)' }}>
              {submitted ? (
                <div style={{ textAlign:'center', padding:'40px 0' }}>
                  <div style={{ fontSize:'3rem', marginBottom:16 }}>🎉</div>
                  <h3 style={{ color:'#fff', fontWeight:800, fontSize:'1.4rem', marginBottom:10 }}>Request Sent!</h3>
                  <p style={{ color:'rgba(255,255,255,0.55)', fontSize:'0.93rem', lineHeight:1.7 }}>
                    Your WhatsApp has opened. Sarvanu will personally follow up within 24 hours.
                  </p>
                  <button onClick={closeModal} style={{ marginTop:24, background:'#F5C518', color:'#000', border:'none', padding:'11px 28px', borderRadius:12, fontWeight:700, fontSize:'0.95rem', cursor:'pointer' }}>
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom:24 }}>
                    <h3 style={{ color:'#fff', fontSize:'1.4rem', fontWeight:800, marginBottom:6 }}>Book Your Free Call</h3>
                    <p style={{ color:'rgba(255,255,255,0.45)', fontSize:'0.87rem' }}>Fill in the details — Sarvanu will personally reach out within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:14 }}>
                    <div style={fieldWrap}>
                      <label style={labelStyle}>Full Name <span style={{ color:'#F5C518' }}>*</span></label>
                      <input name="name" required placeholder="Your full name" style={inputStyle} onFocus={iFocus} onBlur={iBlur} />
                    </div>

                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }} className="book-modal-row2">
                      <div style={fieldWrap}>
                        <label style={labelStyle}>Email <span style={{ color:'#F5C518' }}>*</span></label>
                        <input type="email" name="email" required placeholder="you@example.com" style={inputStyle} onFocus={iFocus} onBlur={iBlur} />
                      </div>
                      <div style={fieldWrap}>
                        <label style={labelStyle}>WhatsApp / Phone <span style={{ color:'#F5C518' }}>*</span></label>
                        <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" style={inputStyle} onFocus={iFocus} onBlur={iBlur} />
                      </div>
                    </div>

                    <div style={fieldWrap}>
                      <label style={labelStyle}>Business Stage <span style={{ color:'#F5C518' }}>*</span></label>
                      <select name="stage" required defaultValue="" style={{ ...inputStyle, cursor:'pointer', appearance:'none', WebkitAppearance:'none' }} onFocus={iFocus} onBlur={iBlur}>
                        <option value="" disabled>Select your stage…</option>
                        <option value="Idea / Pre-Revenue"                style={{ background:'#0d0d1a' }}>Idea / Pre-Revenue</option>
                        <option value="Early Startup (0-1 year)"          style={{ background:'#0d0d1a' }}>Early Startup (0-1 year)</option>
                        <option value="Growing MSME (1-3 years)"          style={{ background:'#0d0d1a' }}>Growing MSME (1-3 years)</option>
                        <option value="Scaling Business (3+ years)"       style={{ background:'#0d0d1a' }}>Scaling Business (3+ years)</option>
                        <option value="Traditional Business Going Digital" style={{ background:'#0d0d1a' }}>Traditional Business Going Digital</option>
                      </select>
                    </div>

                    <div style={fieldWrap}>
                      <label style={labelStyle}>Biggest challenge right now</label>
                      <textarea name="challenge" rows={3} placeholder="Briefly describe what you're trying to solve…"
                        style={{ ...inputStyle, resize:'vertical', minHeight:80 }}
                        onFocus={iFocus} onBlur={iBlur} />
                    </div>

                    <button type="submit" style={{ width:'100%', background:'#F5C518', color:'#000', border:'none', padding:'14px', borderRadius:13, fontSize:'0.97rem', fontWeight:700, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:9, transition:'transform .2s,box-shadow .2s', marginTop:4 }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(245,197,24,0.35)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}>
                      <i className="fab fa-whatsapp" style={{ fontSize:'1.05rem' }} />
                      Send on WhatsApp &amp; Book Call
                    </button>

                    <p style={{ textAlign:'center', color:'rgba(255,255,255,0.28)', fontSize:'0.75rem', margin:0 }}>
                      🔒 Your details are private and will never be shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bookBdFade  { from { opacity:0 } to { opacity:1 } }
        @keyframes bookSlideUp { from { opacity:0; transform:translateY(32px) } to { opacity:1; transform:translateY(0) } }
        @media (max-width: 820px) {
          .book-modal-grid { grid-template-columns: 1fr !important; gap: 28px !important; padding: 32px 22px !important; }
        }
        @media (max-width: 480px) {
          .book-modal-grid { padding: 24px 16px !important; }
          .book-modal-row2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
