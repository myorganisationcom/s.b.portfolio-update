'use client';

export default function BookACall() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const name  = fd.get('name');
        const email = fd.get('email');
        const phone = fd.get('phone');
        const stage = fd.get('stage');
        const challenge = fd.get('challenge');

        const msg = [
            '*New Strategy Call Request — Sarvanu Strategies*', '',
            `*Name:*     ${name}`,
            `*Email:*    ${email}`,
            `*Phone:*    ${phone}`,
            `*Stage:*    ${stage}`,
            `*Challenge:* ${challenge || 'Not specified'}`,
        ].join('\n');

        window.open(`https://wa.me/918700541657?text=${encodeURIComponent(msg)}`, '_blank');
    };

    const benefits = [
        { icon: 'fa-bullseye', title: 'Bottleneck Assessment', desc: 'Rapid identification of exactly what is stalling your growth right now.' },
        { icon: 'fa-bolt', title: 'Actionable Insights', desc: 'Immediate changes you can apply to your business today — no fluff.' },
        { icon: 'fa-handshake', title: 'Honest Partnership Fit', desc: 'We tell you plainly if and how we can help — zero sales pressure.' },
    ];

    const trust = [
        { icon: 'fa-lock', label: '100% Confidential' },
        { icon: 'fa-stopwatch', label: 'Response in 24hrs' },
        { icon: 'fa-tag', label: 'Zero Sales Pressure' },
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #060612 0%, #0d0d1a 50%, #111827 100%)', paddingTop: 80 }}>

            {/* Ambient glow */}
            <div style={{ position: 'fixed', top: '-20%', left: '-10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
            <div style={{ position: 'fixed', bottom: '-20%', right: '-10%', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '60px 5%' }}>

                {/* Back link */}
                <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: 48, transition: 'color .2s' }}
                   onMouseEnter={e => e.currentTarget.style.color = 'var(--clr-gold)'}
                   onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                    <i className="fas fa-arrow-left" /> Return to Homepage
                </a>

                {/* Split Layout */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 60, alignItems: 'start' }}>

                    {/* ── LEFT: Info Column ── */}
                    <div>
                        <span style={{ display: 'inline-block', background: 'rgba(245,197,24,0.1)', color: 'var(--clr-gold)', border: '1px solid rgba(245,197,24,0.2)', padding: '6px 16px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 22 }}>
                            Free 15-Min Strategy Call
                        </span>

                        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
                            Let's Talk About<br />
                            <span style={{ background: 'linear-gradient(135deg, #f5c518, #ffdd57)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Your Business
                            </span>
                        </h1>

                        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.75, marginBottom: 36 }}>
                            A focused, no-obligation 15-minute call where we diagnose your
                            biggest growth bottleneck and give you a clear path forward —
                            before you spend a single rupee.
                        </p>

                        {/* Benefits */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 36 }}>
                            {benefits.map((b, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '16px 18px' }}>
                                    <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <i className={`fas ${b.icon}`} style={{ color: 'var(--clr-gold)', fontSize: '1rem' }} />
                                    </div>
                                    <div>
                                        <p style={{ color: 'var(--clr-gold)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>{b.title}</p>
                                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust badges */}
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                            {trust.map((t, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '8px 14px', borderRadius: 20, fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)' }}>
                                    <i className={`fas ${t.icon}`} style={{ color: 'var(--clr-gold)', fontSize: '0.8rem' }} />
                                    {t.label}
                                </div>
                            ))}
                        </div>

                        {/* Direct WhatsApp */}
                        <div>
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: 12 }}>Prefer to reach out directly?</p>
                            <a href="https://wa.me/918700541657" target="_blank" rel="noopener noreferrer"
                               style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)', color: '#25d366', padding: '10px 22px', borderRadius: 30, textDecoration: 'none', fontWeight: 600, fontSize: '0.92rem', transition: 'all .2s' }}
                               onMouseEnter={e => { e.currentTarget.style.background='rgba(37,211,102,0.18)'; }}
                               onMouseLeave={e => { e.currentTarget.style.background='rgba(37,211,102,0.1)'; }}>
                                <i className="fab fa-whatsapp" style={{ fontSize: '1.1rem' }} /> Message on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* ── RIGHT: Glassmorphism Form ── */}
                    <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: '40px 36px', boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(245,197,24,0.04)' }}>

                        <div style={{ marginBottom: 28 }}>
                            <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 800, marginBottom: 8 }}>Book Your Free Call</h2>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Fill in the details — Sarvanu will personally reach out within 24 hours.</p>
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

                            <div style={fieldWrap}>
                                <label style={labelStyle}>Full Name <span style={{ color: 'var(--clr-gold)' }}>*</span></label>
                                <input name="name" required placeholder="Your full name" style={inputStyle}
                                       onFocus={inputFocus} onBlur={inputBlur} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                                <div style={fieldWrap}>
                                    <label style={labelStyle}>Email <span style={{ color: 'var(--clr-gold)' }}>*</span></label>
                                    <input type="email" name="email" required placeholder="you@example.com" style={inputStyle}
                                           onFocus={inputFocus} onBlur={inputBlur} />
                                </div>
                                <div style={fieldWrap}>
                                    <label style={labelStyle}>WhatsApp / Phone <span style={{ color: 'var(--clr-gold)' }}>*</span></label>
                                    <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" style={inputStyle}
                                           onFocus={inputFocus} onBlur={inputBlur} />
                                </div>
                            </div>

                            <div style={fieldWrap}>
                                <label style={labelStyle}>Business Stage <span style={{ color: 'var(--clr-gold)' }}>*</span></label>
                                <select name="stage" required defaultValue="" style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none' }}
                                        onFocus={inputFocus} onBlur={inputBlur}>
                                    <option value="" disabled>Select your stage…</option>
                                    <option value="Idea / Pre-Revenue">Idea / Pre-Revenue</option>
                                    <option value="Early Startup (0-1 year)">Early Startup (0-1 year)</option>
                                    <option value="Growing MSME (1-3 years)">Growing MSME (1-3 years)</option>
                                    <option value="Scaling Business (3+ years)">Scaling Business (3+ years)</option>
                                    <option value="Traditional Business Going Digital">Traditional Business Going Digital</option>
                                </select>
                            </div>

                            <div style={fieldWrap}>
                                <label style={labelStyle}>Biggest challenge right now</label>
                                <textarea name="challenge" rows={4} placeholder="Briefly describe what you're trying to solve…"
                                          style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                                          onFocus={inputFocus} onBlur={inputBlur} />
                            </div>

                            <button type="submit"
                                style={{ width: '100%', background: 'var(--clr-gold)', color: '#000', border: 'none', padding: '15px', borderRadius: 14, fontSize: '1rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'all .2s', marginTop: 4 }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(245,197,24,0.35)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                                <i className="fab fa-whatsapp" style={{ fontSize: '1.1rem' }} />
                                Send on WhatsApp &amp; Book Call
                            </button>

                            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.77rem', marginTop: 4 }}>
                                🔒 Your details are private and will never be shared with third parties.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Responsive styles & Option styling */}
            <style>{`
                @media (max-width: 860px) {
                    .book-grid { grid-template-columns: 1fr !important; }
                }
                select option {
                    background-color: #0d0d1a;
                    color: #fff;
                }
                select option:disabled {
                    color: rgba(255, 255, 255, 0.4);
                }
            `}</style>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "name": "Book a Strategy Call | Sarvanu Strategies",
                "description": "Book a free 15-minute strategy call with Sarvanu Banerjee.",
                "url": "https://sarvanu.com/book"
            })}} />
        </div>
    );
}

/* Shared micro-styles */
const fieldWrap = { display: 'flex', flexDirection: 'column', gap: 6 };
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
const inputFocus = (e) => {
    e.target.style.borderColor = 'var(--clr-gold)';
    e.target.style.boxShadow = '0 0 0 3px rgba(245,197,24,0.12)';
    e.target.style.background = 'rgba(255,255,255,0.07)';
};
const inputBlur = (e) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
    e.target.style.boxShadow = 'none';
    e.target.style.background = 'rgba(255,255,255,0.05)';
};
