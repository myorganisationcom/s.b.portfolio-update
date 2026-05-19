export const metadata = {
    title: "Is This Consulting Right For You? | Sarvanu",
    description: "Find out if strategic consulting from Sarvanu is right for your business stage, goals, and readiness.",
    alternates: { canonical: "https://sarvanu.com/who-its-for" },
    openGraph: { title: "Is This For You? | Sarvanu", description: "Find out if strategic consulting is right for you.", url: "https://sarvanu.com/who-its-for", images: ["/og-image.png"] },
};

const goodFit = ["You're a founder, director, or decision-maker with real authority to implement change", "You're serious about growth and willing to invest in the right help", "You can commit at least 2-3 hours per week to the process", "You're open to honest feedback — even when it's uncomfortable", "You want a long-term strategic partner, not a one-time project vendor", "You believe in building right, not just building fast"];
const notFit = ["You're looking for someone to do the work for you without your involvement", "You want overnight results without any process or execution", "You're not willing to change how you currently operate", "You're looking for the cheapest possible option", "You're not in a position to make decisions or implement recommendations"];

export default function WhoItsForPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>Who We Help</span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>Is This Consulting <span style={{ color: "var(--clr-gold)" }}>Right For You?</span></h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>We work with a small number of clients at any time — and only with people where we're genuinely confident we can create impact. Here's how to know if that's you.</p>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                    <div>
                        <h2 style={{ color: "#10b981", fontSize: "1.3rem", fontWeight: 800, marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
                            <i className="fas fa-check-circle" /> Great Fit If…
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            {goodFit.map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 12, padding: "14px 16px" }}>
                                    <i className="fas fa-check" style={{ color: "#10b981", marginTop: 3, flexShrink: 0 }} />
                                    <span style={{ color: "rgba(255,255,255,0.78)", fontSize: "0.9rem" }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 style={{ color: "#ef4444", fontSize: "1.3rem", fontWeight: 800, marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
                            <i className="fas fa-times-circle" /> Not the Right Fit If…
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            {notFit.map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 12, padding: "14px 16px" }}>
                                    <i className="fas fa-times" style={{ color: "#ef4444", marginTop: 3, flexShrink: 0 }} />
                                    <span style={{ color: "rgba(255,255,255,0.78)", fontSize: "0.9rem" }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: "70px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: 16 }}>Not Sure If You're a Fit?</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 32, fontSize: "0.97rem", lineHeight: 1.7 }}>Book a free 15-minute call. We'll have an honest conversation about your situation and tell you directly whether we're the right fit — and if not, what you should do instead.</p>
                    <a href="/book" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}><i className="fas fa-calendar-alt" /> Book a Free 15-Min Call</a>
                </div>
            </section>

            <section className="cta-section">
                <h2>Sound Like a Fit? Let's Talk.</h2>
                <p>We only work with a few clients at a time. If you're ready, don't wait.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Strategy Call</a>
            </section>
        </>
    );
}
