export const metadata = {
    title: "ROI of Business Consulting | Sarvanu Strategies",
    description: "Understand the real return on investment from strategic consulting. Why ₹15K–₹55K/month is one of the highest-ROI decisions a growing business can make.",
    alternates: { canonical: "https://sarvanu.com/roi" },
    openGraph: { title: "ROI of Business Consulting | Sarvanu Strategies", description: "The real return on investment from strategic consulting.", url: "https://sarvanu.com/roi", images: ["/og-image.png"] },
};

const roiPoints = [
    { icon: "fa-rupee-sign", title: "Revenue You're Currently Leaving on the Table", desc: "Most businesses have 20-40% revenue potential sitting untapped in their existing client base through better pricing, upsells, and retention — before acquiring a single new client.", stat: "20–40%", statLabel: "Untapped revenue in most businesses" },
    { icon: "fa-clock", title: "The Cost of Your Time", desc: "If you're spending 60+ hours/week in your business and paying yourself ₹50,000/month, your time costs ₹200/hour. Every hour saved by building better systems is ₹200 back — that you can invest in growth.", stat: "10–20 hrs", statLabel: "Reclaimed weekly by most clients" },
    { icon: "fa-chart-line", title: "The Compound Effect of Good Strategy", desc: "A single strategic insight — a positioning change, a pricing adjustment, a new channel — can produce results for years. The ROI compounds long after the consulting engagement ends.", stat: "3–5x", statLabel: "Average revenue growth in 12 months" },
    { icon: "fa-ban", title: "The Cost of NOT Getting Help", desc: "Every month you spend stuck in the same patterns is lost revenue, lost market position, and compounding operational debt. Inaction has a cost that most founders don't calculate.", stat: "₹5L–₹50L", statLabel: "Estimated annual cost of poor strategy" },
];

const costComparison = [
    { item: "Monthly consulting fee (Growth Plan)", cost: "₹30,000" },
    { item: "Cost of 1 wrong senior hire", cost: "₹3,00,000+" },
    { item: "Wasted ad spend without strategy", cost: "₹50,000/month" },
    { item: "Revenue lost from poor pricing", cost: "₹1,00,000+/month" },
    { item: "Cost of founder burnout", cost: "Incalculable" },
];

export default function ROIPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>Company — ROI Perspective</span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>Is ₹30,000/Month Worth It? <span style={{ color: "var(--clr-gold)" }}>Let's Do the Maths.</span></h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>The question isn't whether you can afford strategic consulting. It's whether you can afford not to have it — and what it's currently costing you every month to keep doing things the same way.</p>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 50 }}>Where the ROI Comes From</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                        {roiPoints.map((r, i) => (
                            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "28px 32px" }}>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                                        <i className={`fas ${r.icon}`} style={{ color: "var(--clr-gold)", fontSize: "1.2rem" }} />
                                        <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{r.title}</h3>
                                    </div>
                                    <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>{r.desc}</p>
                                </div>
                                <div style={{ textAlign: "center", minWidth: 120 }}>
                                    <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--clr-gold)", lineHeight: 1.2 }}>{r.stat}</div>
                                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginTop: 4 }}>{r.statLabel}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 700, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: 16 }}>Compare the Costs</h2>
                    <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", marginBottom: 36 }}>Put the consulting fee in context of what poor strategy actually costs.</p>
                    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, overflow: "hidden" }}>
                        {costComparison.map((c, i) => (
                            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: i < costComparison.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", background: i === 0 ? "rgba(245,197,24,0.06)" : "transparent" }}>
                                <span style={{ color: i === 0 ? "var(--clr-gold)" : "rgba(255,255,255,0.7)", fontSize: "0.93rem", fontWeight: i === 0 ? 600 : 400 }}>{c.item}</span>
                                <span style={{ color: i === 0 ? "var(--clr-gold)" : "rgba(255,255,255,0.5)", fontSize: "0.93rem", fontWeight: 600, flexShrink: 0 }}>{c.cost}</span>
                            </div>
                        ))}
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", textAlign: "center", marginTop: 16 }}>The question isn't whether ₹30,000/month is expensive. It's expensive compared to what?</p>
                </div>
            </section>

            <section style={{ padding: "70px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 760, margin: "0 auto" }}>
                    <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: 30, textAlign: "center" }}>What Clients Typically Achieve</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 18 }}>
                        {[["3x", "Revenue growth (12 months)"], ["₹40L+", "New contracts won"], ["40%", "Less founder time"], ["60%", "Faster decisions"], ["150+", "New leads/month"]].map(([stat, label], i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(245,197,24,0.12)", borderRadius: 14, padding: "22px 16px", textAlign: "center" }}>
                                <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "var(--clr-gold)", marginBottom: 6 }}>{stat}</div>
                                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", lineHeight: 1.5 }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Calculate Your ROI on a Free Call</h2>
                <p>Book 15 minutes with Sarvanu. We'll estimate the actual revenue opportunity in your business — before you commit to anything.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calculator" /> Book Free ROI Assessment</a>
            </section>
        </>
    );
}
