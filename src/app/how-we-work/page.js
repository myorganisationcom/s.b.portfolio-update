export const metadata = {
    title: "How We Work | Sarvanu Strategies",
    description: "A transparent look at Sarvanu's consulting process — from first call to ongoing advisory. Know exactly what to expect.",
    alternates: { canonical: "https://sarvanu.com/how-we-work" },
    openGraph: { title: "How We Work | Sarvanu Strategies", description: "Our consulting process — transparent, proven, results-focused.", url: "https://sarvanu.com/how-we-work", images: ["/og-image.png"] },
};

const phases = [
    { num: "01", icon: "fa-phone-alt", title: "Free Strategy Call (15 min)", desc: "We start with a no-pressure 15-minute call to understand your business, your challenges, and your goals. We'll tell you honestly if and how we can help — and what you should focus on immediately regardless of whether we work together.", tag: "Week 0" },
    { num: "02", icon: "fa-search", title: "Deep Business Audit", desc: "If we're a fit, we conduct a comprehensive audit of your revenue model, operations, marketing, team structure, and competitive position. This becomes the foundation of everything that follows.", tag: "Week 1" },
    { num: "03", icon: "fa-map", title: "Strategy & Roadmap Presentation", desc: "We present our findings and a clear 90-day execution roadmap with prioritised actions, responsible owners, and success metrics. You'll know exactly what to do and in what order.", tag: "Week 2" },
    { num: "04", icon: "fa-rocket", title: "Execution Begins", desc: "We work alongside you — not just advising, but helping implement. Systems get built, team training happens, and marketing starts moving. Monthly check-ins keep execution tight.", tag: "Month 1–3" },
    { num: "05", icon: "fa-chart-line", title: "Review, Adapt & Scale", desc: "Every month we review results, recalibrate the plan, and identify the next leverage points. Strategy is a living process — we keep it current and ambitious.", tag: "Ongoing" },
];

export default function HowWeWorkPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 700, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>Authority — How We Work</span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>A Process Built for <span style={{ color: "var(--clr-gold)" }}>Real Results</span>, Not Just Reports</h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>We don't just deliver strategy documents. We work alongside you to build, implement, and adapt — from the first call to the moment your business can run without us.</p>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 860, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 60 }}>Our 5-Phase Engagement Process</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                        {phases.map((phase, i) => (
                            <div key={i} style={{ display: "flex", gap: 0, marginBottom: i < phases.length - 1 ? 0 : 0 }}>
                                {/* Timeline */}
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 60, flexShrink: 0 }}>
                                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(245,197,24,0.15)", border: "2px solid var(--clr-gold)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <i className={`fas ${phase.icon}`} style={{ color: "var(--clr-gold)", fontSize: "1rem" }} />
                                    </div>
                                    {i < phases.length - 1 && <div style={{ width: 2, flex: 1, background: "rgba(245,197,24,0.2)", minHeight: 40, margin: "4px 0" }} />}
                                </div>
                                {/* Content */}
                                <div style={{ paddingLeft: 20, paddingBottom: 36 }}>
                                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.08)", color: "var(--clr-gold)", padding: "3px 12px", borderRadius: 20, fontSize: "0.75rem", fontWeight: 600, marginBottom: 10, letterSpacing: "0.3px" }}>{phase.tag}</span>
                                    <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: 10 }}><span style={{ color: "var(--clr-gold)", marginRight: 8 }}>{phase.num}.</span>{phase.title}</h3>
                                    <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>{phase.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "70px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: 16 }}>What Makes This Different</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, textAlign: "left", marginTop: 32 }}>
                        {[["No lock-in contracts", "Monthly, flexible engagements"], ["No generic reports", "Custom plans for your business"], ["Real implementation help", "Not just advice — we build with you"], ["Honest conversations", "We tell you what you need to hear"]].map(([pro, sub], i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "16px 18px" }}>
                                <p style={{ color: "#fff", fontWeight: 600, marginBottom: 4, fontSize: "0.92rem" }}>{pro}</p>
                                <p style={{ color: "rgba(255,255,255,0.5)", margin: 0, fontSize: "0.83rem" }}>{sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to Start the Process?</h2>
                <p>The first step is a free 15-minute call. Let's see if we're the right fit for each other.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Strategy Call</a>
            </section>
        </>
    );
}
