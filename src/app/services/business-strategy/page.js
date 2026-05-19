export const metadata = {
    title: "Business Strategy Consulting | Sarvanu",
    description: "Build a clear, executable business strategy with Sarvanu. Direction, positioning, and roadmaps for founders and MSMEs in India.",
    alternates: { canonical: "https://sarvanu.com/services/business-strategy" },
    openGraph: { title: "Business Strategy Consulting | Sarvanu", description: "Build a clear, executable business strategy.", url: "https://sarvanu.com/services/business-strategy", images: ["/og-image.png"] },
};

const pillars = [
    { icon: "fa-compass", title: "Business Audit & Diagnosis", desc: "We start with a deep audit — revenue leaks, operational bottlenecks, market positioning gaps — and build a complete picture of where you stand today." },
    { icon: "fa-map", title: "Strategic Roadmap", desc: "You get a 90-day and 12-month execution roadmap. Not a PDF that collects dust — a living plan with priorities, milestones, and decision frameworks." },
    { icon: "fa-crosshairs", title: "Brand Positioning", desc: "We clarify exactly who you serve, what problem you solve, and why clients should choose you over every competitor in your space." },
    { icon: "fa-chart-line", title: "Revenue Architecture", desc: "We design the right revenue model — pricing, packaging, upsells — so your business earns more from every client relationship." },
    { icon: "fa-users-cog", title: "Org Design & Delegation", desc: "We build role clarity so you stop being the bottleneck. Every team member knows their scope, KPIs, and decision rights." },
    { icon: "fa-sync-alt", title: "Monthly Strategy Reviews", desc: "Strategy is not a one-time event. Monthly check-ins ensure the plan adapts to market reality and execution stays sharp." },
];

const results = [
    { stat: "3x", label: "Average revenue growth" },
    { stat: "60%", label: "Faster strategic decisions" },
    { stat: "40%", label: "Reduction in founder hours" },
    { stat: "90 days", label: "To visible results" },
];

export default function BusinessStrategyPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 700, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>
                        Services — Business Strategy
                    </span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>
                        Build a Business That Grows <span style={{ color: "var(--clr-gold)" }}>By Design, Not by Luck</span>
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 36 }}>
                        Most founders are busy but directionless. We give you a clear strategy, an executable plan, and the ongoing advisory to stay on track — month after month.
                    </p>
                    <a href="/book" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}>
                        <i className="fas fa-calendar-alt" /> Book Your Free Strategy Call
                    </a>
                </div>
            </section>

            {/* What's included */}
            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 60 }}>
                        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#fff", fontWeight: 800, marginBottom: 12 }}>What Business Strategy Consulting Includes</h2>
                        <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 560, margin: "0 auto" }}>Every engagement is customised. Here is what most clients receive.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
                        {pillars.map((p, i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "28px 26px" }}>
                                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,197,24,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                                    <i className={`fas ${p.icon}`} style={{ color: "var(--clr-gold)", fontSize: "1.2rem" }} />
                                </div>
                                <h3 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: 10, fontWeight: 700 }}>{p.title}</h3>
                                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.7 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section style={{ padding: "70px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", color: "#fff", fontWeight: 800, marginBottom: 50 }}>What Clients Typically Experience</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 24 }}>
                        {results.map((r, i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(245,197,24,0.15)", borderRadius: 16, padding: "28px 20px" }}>
                                <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--clr-gold)", marginBottom: 8 }}>{r.stat}</div>
                                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem" }}>{r.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who it's for */}
            <section style={{ padding: "70px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 700, margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", color: "#fff", fontWeight: 800, marginBottom: 30, textAlign: "center" }}>This Service is Right For You If…</h2>
                    {["You feel busy but not sure if you're working on the right things", "Your revenue is flat or growing too slowly despite effort", "You have ideas but no clear execution plan", "You keep reacting to problems instead of preventing them", "You want a trusted advisor, not just a report"].map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                            <i className="fas fa-check" style={{ color: "var(--clr-gold)", marginTop: 3, flexShrink: 0 }} />
                            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.97rem", margin: 0 }}>{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <h2>Ready to Build a Strategy That Actually Works?</h2>
                <p>Book a free 15-minute call. We'll assess your situation and tell you exactly what needs to happen next.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Strategy Call</a>
            </section>
        </>
    );
}
