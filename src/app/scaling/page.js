export const metadata = {
    title: "Consulting for Scaling Businesses | Sarvanu Strategies",
    description: "Scale without chaos. Strategic consulting for businesses growing 2x–10x — systems, team architecture, and multi-channel revenue.",
    alternates: { canonical: "https://sarvanu.com/scaling" },
    openGraph: { title: "Consulting for Scaling Businesses | Sarvanu Strategies", description: "Scale without chaos. Systems and strategy for high-growth businesses.", url: "https://sarvanu.com/scaling", images: ["/og-image.png"] },
};

const scalingProblems = [
    { icon: "fa-fire", title: "Growth Creates Chaos", desc: "More revenue means more complexity. Without systems, scaling just means more fires. We bring order to your growth." },
    { icon: "fa-users", title: "Team Can't Keep Up", desc: "Rapid growth breaks teams. Roles blur, communication fails, and performance drops. We rebuild your org for scale." },
    { icon: "fa-sitemap", title: "Processes Break at Scale", desc: "What worked at ₹50L revenue breaks at ₹5Cr. We redesign your operations for your next level, not your current one." },
    { icon: "fa-layer-group", title: "Multi-Revenue Complexity", desc: "Managing multiple products, services, or markets simultaneously requires a different operating model. We build it." },
    { icon: "fa-balance-scale", title: "Founder Bottleneck", desc: "Every decision runs through you. At scale, this becomes your biggest growth constraint. We solve the delegation problem." },
    { icon: "fa-eye", title: "Loss of Visibility", desc: "When the business was small, you knew everything. Now you're flying blind. We build dashboards and reporting so you stay in control." },
];

export default function ScalingPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>Who We Help — Scaling Businesses</span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>Scale <span style={{ color: "var(--clr-gold)" }}>With Control</span>, Not Chaos</h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 36 }}>Growth is great — until it breaks your business. We work with founders who are already growing and need the systems, team structure, and strategy to double or triple without losing what made them successful.</p>
                    <a href="/book" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}><i className="fas fa-calendar-alt" /> Book Free Scaling Audit</a>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 12 }}>The 6 Problems That Slow Scaling Businesses</h2>
                    <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", marginBottom: 50 }}>Growth creates new problems. Here's what we see — and solve — most often.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 22 }}>
                        {scalingProblems.map((p, i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "26px 22px" }}>
                                <i className={`fas ${p.icon}`} style={{ color: "var(--clr-gold)", fontSize: "1.3rem", marginBottom: 14, display: "block" }} />
                                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{p.title}</h3>
                                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "70px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: 12 }}>You're Ready for This If…</h2>
                    <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 40 }}>This engagement is for founders who are already moving — and want to move faster, smarter.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, textAlign: "left" }}>
                        {["Your revenue is ₹50L–₹5Cr+ and growing", "You're stretched thin managing everything", "You want to hire a leadership team but need structure first", "You're ready to invest seriously in the right help", "You have ambition to 3x or 5x in the next 2 years", "You want a trusted advisor, not just a consultant"].map((item, i) => (
                            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12 }}>
                                <i className="fas fa-check" style={{ color: "var(--clr-gold)", marginTop: 3, flexShrink: 0 }} />
                                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to Scale Without Breaking Things?</h2>
                <p>Book a free strategic conversation. We'll assess your current situation and tell you the highest-leverage changes to make right now.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Scaling Call</a>
            </section>
        </>
    );
}
