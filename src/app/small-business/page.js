export const metadata = {
    title: "Consulting for Small Businesses & MSMEs | Sarvanu",
    description: "Strategic consulting for small businesses and MSMEs in India. Break through plateaus, build systems, and grow sustainably.",
    alternates: { canonical: "https://sarvanu.com/small-business" },
    openGraph: { title: "Consulting for Small Businesses | Sarvanu", description: "Break plateaus and grow your small business sustainably.", url: "https://sarvanu.com/small-business", images: ["/og-image.png"] },
};

const signs = [
    "Revenue has been flat for 12+ months despite hard work",
    "You're doing everything yourself and can't afford to stop",
    "You're not sure which marketing channels actually work for you",
    "Clients come through referrals only — you have no predictable pipeline",
    "Your team is busy but outcomes feel random",
    "You know what to do but don't have time to do it",
];

const outcomes = [
    { icon: "fa-chart-line", title: "Revenue Growth", desc: "Most clients see 40-100% revenue increase within 6-12 months of working with us through better pricing, positioning, and lead generation." },
    { icon: "fa-clock", title: "More Time Back", desc: "By building systems and delegating correctly, most founders reclaim 10-20 hours per week — time for strategy, relationships, and rest." },
    { icon: "fa-users", title: "A Team That Executes", desc: "We help you build role clarity, meeting rhythms, and accountability structures so your team performs without constant supervision." },
    { icon: "fa-rocket", title: "A Clear Growth Path", desc: "You'll know exactly what to do in the next 90 days, next 6 months, and next 2 years to reach the business you're building towards." },
];

export default function SmallBusinessPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>Who We Help — Small Business & MSME</span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>Your Business Deserves to <span style={{ color: "var(--clr-gold)" }}>Grow Beyond You</span></h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 36 }}>Small business owners and MSME founders work harder than anyone. But hard work without the right strategy and systems hits a ceiling fast. We help you break through it — sustainably.</p>
                    <a href="/book" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}><i className="fas fa-calendar-alt" /> Book Your Free Strategy Call</a>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2rem)", marginBottom: 12 }}>Does This Sound Like Your Business?</h2>
                    <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", marginBottom: 40 }}>If 3 or more of these are true, we should talk.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 14 }}>
                        {signs.map((s, i) => (
                            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "rgba(245,197,24,0.04)", border: "1px solid rgba(245,197,24,0.12)", borderRadius: 12, padding: "14px 16px" }}>
                                <i className="fas fa-check-circle" style={{ color: "var(--clr-gold)", marginTop: 2, flexShrink: 0 }} />
                                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}>{s}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2rem)", marginBottom: 50 }}>What Working Together Looks Like</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 }}>
                        {outcomes.map((o, i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "26px 22px", textAlign: "center" }}>
                                <i className={`fas ${o.icon}`} style={{ color: "var(--clr-gold)", fontSize: "1.5rem", marginBottom: 16, display: "block" }} />
                                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: 10 }}>{o.title}</h3>
                                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{o.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>You've Built Something Real. Let's Help It Grow.</h2>
                <p>Book a free 15-minute strategy call — no sales pitch, just honest advice about what your business needs next.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Strategy Call</a>
            </section>
        </>
    );
}
