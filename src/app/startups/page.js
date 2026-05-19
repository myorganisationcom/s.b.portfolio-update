export const metadata = {
    title: "Consulting for Startups | Sarvanu",
    description: "Strategic consulting for early-stage startups. Build the right foundations — model, team, and go-to-market — before you scale.",
    alternates: { canonical: "https://sarvanu.com/startups" },
    openGraph: { title: "Consulting for Startups | Sarvanu", description: "Build the right startup foundations before you scale.", url: "https://sarvanu.com/startups", images: ["/og-image.png"] },
};

const challenges = [
    { icon: "fa-question-circle", title: "No Clear Business Model", desc: "Who pays, how much, and why? Many startups launch without answering these. We help you define a model that is viable and scalable." },
    { icon: "fa-users", title: "Hiring the Wrong People Early", desc: "Your first 5 hires define your culture and capability. We build hiring frameworks so you bring in people who compound your growth." },
    { icon: "fa-money-bill-wave", title: "Burning Cash Without ROI", desc: "Growth at all costs is a trap. We help you identify the highest-leverage activities so your runway extends and results compound." },
    { icon: "fa-flag", title: "No Go-To-Market Strategy", desc: "Building is the easy part. Getting your first 100 customers requires a deliberate plan — we build it with you." },
    { icon: "fa-cogs", title: "Chaos Disguised as Hustle", desc: "When everything feels urgent, nothing gets done well. We install the systems that let you move fast with intention, not reaction." },
    { icon: "fa-chart-pie", title: "Investors Want Traction", desc: "We help you build the metrics, narrative, and operational proof that investors want to see before writing a cheque." },
];

export default function StartupsPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>Who We Help — Startups</span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>Build Your Startup on <span style={{ color: "var(--clr-gold)" }}>Solid Foundations</span>, Not Assumptions</h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 36 }}>Most startups fail not because the idea was bad — but because the execution had no structure. We give early-stage founders the strategy, systems, and clarity to build something that lasts.</p>
                    <a href="/book" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}><i className="fas fa-calendar-alt" /> Book Your Free Strategy Call</a>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#fff", fontWeight: 800, marginBottom: 16 }}>Common Startup Challenges We Solve</h2>
                    <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", marginBottom: 50 }}>These are the exact problems founders bring to us — and why they can't grow past them alone.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 22 }}>
                        {challenges.map((c, i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "26px 22px" }}>
                                <i className={`fas ${c.icon}`} style={{ color: "var(--clr-gold)", fontSize: "1.3rem", marginBottom: 14, display: "block" }} />
                                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{c.title}</h3>
                                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "70px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 760, margin: "0 auto" }}>
                    <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: 30, textAlign: "center" }}>What Startup Founders Typically Get</h2>
                    {["A clear business model canvas and revenue architecture", "Go-to-market strategy for your first 100 customers", "Hiring framework for your first 5 critical roles", "Investor-ready operations and traction metrics", "Monthly advisory to keep execution on track", "Brand positioning that stands out from day one"].map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                            <i className="fas fa-check" style={{ color: "var(--clr-gold)", marginTop: 3, flexShrink: 0 }} />
                            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.97rem", margin: 0 }}>{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to Build Something That Lasts?</h2>
                <p>Book a free 15-minute call. We'll assess where you are and tell you the 3 most important things to focus on right now.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Strategy Call</a>
            </section>
        </>
    );
}
