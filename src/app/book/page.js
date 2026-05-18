'use client';

export default function BookACall() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const name = fd.get('name');
        const email = fd.get('email');
        const phone = fd.get('phone');
        const stage = fd.get('stage');
        const challenge = fd.get('challenge');

        const msg = [
            '*New Strategy Call Request — Sarvanu Strategies*', '',
            `*Name:*      ${name}`,
            `*Email:*     ${email}`,
            `*Phone:*     ${phone}`,
            `*Stage:*     ${stage}`,
            challenge?.trim() ? `*Challenge:* ${challenge.trim()}` : null,
        ].filter(Boolean).join('\n');

        try {
            await fetch('/api/forms', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ formType: 'book_strategy_call', name, email, phone, businessStage: stage, challenge }),
            });
        } catch (err) { console.error('Failed to save book form submission', err); }

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
        <div className="book-page">
            {/* Ambient glows */}
            <div className="book-glow book-glow-blue" />
            <div className="book-glow book-glow-gold" />

            <div className="book-inner">
                {/* Back link */}
                <a href="/" className="book-back">
                    <i className="fas fa-arrow-left" /> Return to Homepage
                </a>

                {/* Two-column grid */}
                <div className="book-grid">

                    {/* LEFT */}
                    <div className="book-left">
                        <span className="book-badge">Free 15-Min Strategy Call</span>

                        <h1 className="book-h1">
                            Let&apos;s Talk About<br />
                            <span className="book-h1-gold">Your Business</span>
                        </h1>

                        <p className="book-lead">
                            A focused, no-obligation 15-minute call where we diagnose your
                            biggest growth bottleneck and give you a clear path forward —
                            before you spend a single rupee.
                        </p>

                        {/* Benefits */}
                        <div className="book-benefits">
                            {benefits.map((b, i) => (
                                <div key={i} className="book-benefit-item">
                                    <div className="book-benefit-icon">
                                        <i className={`fas ${b.icon}`} />
                                    </div>
                                    <div>
                                        <p className="book-benefit-title">{b.title}</p>
                                        <p className="book-benefit-desc">{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust badges */}
                        <div className="book-trust">
                            {trust.map((t, i) => (
                                <div key={i} className="book-trust-badge">
                                    <i className={`fas ${t.icon}`} style={{ color: 'var(--clr-gold)', fontSize: '0.8rem' }} />
                                    {t.label}
                                </div>
                            ))}
                        </div>

                        {/* Direct WhatsApp */}
                        <div style={{ marginTop: 8 }}>
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: 12 }}>Prefer to reach out directly?</p>
                            <a href="https://wa.me/918700541657" target="_blank" rel="noopener noreferrer" className="book-wa-link">
                                <i className="fab fa-whatsapp" style={{ fontSize: '1.1rem' }} /> Message on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* RIGHT — Form card */}
                    <div className="book-form-card">
                        <div style={{ marginBottom: 28 }}>
                            <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 800, marginBottom: 8 }}>Book Your Free Call</h2>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Fill in the details — Sarvanu will personally reach out within 24 hours.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="book-form">
                            <div style={fieldWrap}>
                                <label style={labelStyle}>Full Name <span style={{ color: 'var(--clr-gold)' }}>*</span></label>
                                <input name="name" required placeholder="Your full name" style={inputStyle} onFocus={inputFocus} onBlur={inputBlur} />
                            </div>

                            <div className="book-row-2">
                                <div style={fieldWrap}>
                                    <label style={labelStyle}>Email <span style={{ color: 'var(--clr-gold)' }}>*</span></label>
                                    <input type="email" name="email" required placeholder="you@example.com" style={inputStyle} onFocus={inputFocus} onBlur={inputBlur} />
                                </div>
                                <div style={fieldWrap}>
                                    <label style={labelStyle}>WhatsApp / Phone <span style={{ color: 'var(--clr-gold)' }}>*</span></label>
                                    <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" style={inputStyle} onFocus={inputFocus} onBlur={inputBlur} />
                                </div>
                            </div>

                            <div style={fieldWrap}>
                                <label style={labelStyle}>Business Stage <span style={{ color: 'var(--clr-gold)' }}>*</span></label>
                                <select name="stage" required defaultValue="" className="book-select" style={inputStyle} onFocus={inputFocus} onBlur={inputBlur}>
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

                            <button type="submit" className="book-submit-btn">
                                <i className="fab fa-whatsapp" style={{ fontSize: '1.1rem' }} />
                                Send on WhatsApp &amp; Book Call
                            </button>

                            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.77rem', marginTop: 4 }}>
                                🔒 Your details are private and will never be shared.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                .book-page {
                    min-height: 100vh;
                    background: linear-gradient(160deg, #060612 0%, #0d0d1a 50%, #111827 100%);
                    padding-top: 80px;
                    position: relative;
                    overflow: hidden;
                }
                .book-glow {
                    position: fixed;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 0;
                }
                .book-glow-blue {
                    top: -20%; left: -10%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
                }
                .book-glow-gold {
                    bottom: -20%; right: -10%;
                    width: 700px; height: 700px;
                    background: radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%);
                }
                .book-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 1080px;
                    margin: 0 auto;
                    padding: 48px 24px 80px;
                }
                .book-back {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: rgba(255,255,255,0.5);
                    text-decoration: none;
                    font-size: 0.9rem;
                    margin-bottom: 40px;
                    transition: color .2s;
                }
                .book-back:hover { color: var(--clr-gold); }

                /* ── Two-column grid ── */
                .book-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.1fr;
                    gap: 52px;
                    align-items: start;
                }

                /* ── Left column ── */
                .book-badge {
                    display: inline-block;
                    background: rgba(245,197,24,0.1);
                    color: var(--clr-gold);
                    border: 1px solid rgba(245,197,24,0.2);
                    padding: 6px 16px;
                    border-radius: 20px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    margin-bottom: 22px;
                }
                .book-h1 {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 800;
                    color: #fff;
                    line-height: 1.15;
                    margin-bottom: 20px;
                }
                .book-h1-gold {
                    background: linear-gradient(135deg, #f5c518, #ffdd57);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .book-lead {
                    color: rgba(255,255,255,0.65);
                    font-size: 1rem;
                    line-height: 1.75;
                    margin-bottom: 32px;
                }
                .book-benefits {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    margin-bottom: 28px;
                }
                .book-benefit-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 14px;
                    padding: 14px 16px;
                }
                .book-benefit-icon {
                    width: 40px; height: 40px;
                    border-radius: 10px;
                    background: rgba(245,197,24,0.1);
                    border: 1px solid rgba(245,197,24,0.15);
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                    color: var(--clr-gold);
                    font-size: 0.95rem;
                }
                .book-benefit-title { color: var(--clr-gold); font-weight: 700; font-size: 0.93rem; margin-bottom: 3px; }
                .book-benefit-desc  { color: rgba(255,255,255,0.55); font-size: 0.85rem; line-height: 1.6; margin: 0; }

                .book-trust {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    margin-bottom: 28px;
                }
                .book-trust-badge {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    padding: 7px 14px;
                    border-radius: 20px;
                    font-size: 0.82rem;
                    color: rgba(255,255,255,0.8);
                }
                .book-wa-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(37,211,102,0.1);
                    border: 1px solid rgba(37,211,102,0.25);
                    color: #25d366;
                    padding: 10px 22px;
                    border-radius: 30px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.92rem;
                    transition: background .2s;
                }
                .book-wa-link:hover { background: rgba(37,211,102,0.18); }

                /* ── Right form card ── */
                .book-form-card {
                    background: rgba(255,255,255,0.03);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 24px;
                    padding: 36px 32px;
                    box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(245,197,24,0.04);
                }
                .book-form {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                /* Email + Phone 2-col inside form */
                .book-row-2 {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 14px;
                }
                .book-select {
                    cursor: pointer;
                    appearance: none;
                    -webkit-appearance: none;
                }
                .book-select option {
                    background-color: #0d0d1a;
                    color: #fff;
                }
                .book-select option:disabled { color: rgba(255,255,255,0.4); }

                .book-submit-btn {
                    width: 100%;
                    background: var(--clr-gold);
                    color: #000;
                    border: none;
                    padding: 15px;
                    border-radius: 14px;
                    font-size: 1rem;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    transition: transform .2s, box-shadow .2s;
                    margin-top: 4px;
                }
                .book-submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(245,197,24,0.35);
                }

                /* ── Tablet: 860px ── */
                @media (max-width: 860px) {
                    .book-grid {
                        grid-template-columns: 1fr;
                        gap: 36px;
                    }
                    .book-inner {
                        padding: 36px 20px 60px;
                    }
                }

                /* ── Mobile: 520px ── */
                @media (max-width: 520px) {
                    .book-inner { padding: 28px 16px 50px; }
                    .book-form-card { padding: 24px 18px; border-radius: 18px; }
                    .book-row-2 { grid-template-columns: 1fr; }
                    .book-h1 { font-size: 1.9rem; }
                    .book-back { margin-bottom: 28px; }
                }
            `}</style>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Book a Strategy Call | Sarvanu Strategies",
                    "description": "Book a free 15-minute strategy call with Sarvanu Banerjee.",
                    "url": "https://sarvanu.com/book"
                })
            }} />
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
