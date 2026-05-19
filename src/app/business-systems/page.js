export const metadata = {
    title: "Business Systems Explained | Sarvanu",
    description: "Understand what business systems are, why they matter, and how the right systems transform a chaotic business into a scalable one.",
    alternates: { canonical: "https://sarvanu.com/business-systems" },
    openGraph: { title: "Business Systems Explained | Sarvanu", description: "What business systems are and why they're the foundation of scale.", url: "https://sarvanu.com/business-systems", images: ["/og-image.png"] },
};

const systemTypes = [
    { icon: "fa-funnel-dollar", title: "Lead Generation System", desc: "How new potential clients discover you, become interested, and take the first step to contact you. Without a system, this is random." },
    { icon: "fa-handshake", title: "Sales & Conversion System", desc: "The process from first enquiry to signed contract. Includes scripts, follow-up cadences, proposal templates, and objection handling." },
    { icon: "fa-cogs", title: "Operations & Delivery System", desc: "How you actually deliver your product or service — consistently, at quality, without the founder having to oversee every detail." },
    { icon: "fa-headset", title: "Client Success System", desc: "How you retain clients, manage expectations, gather feedback, and generate referrals systematically rather than reactively." },
    { icon: "fa-users", title: "Team Management System", desc: "Hiring, onboarding, performance management, and culture — all documented so your team knows what good looks like." },
    { icon: "fa-chart-bar", title: "Reporting & Intelligence System", desc: "The dashboards and review rhythms that tell you what's working, what's not, and where to focus next." },
];

export default function BusinessSystemsPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>Authority — Business Systems</span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>Your Business is a Collection of <span style={{ color: "var(--clr-gold)" }}>Systems</span>. Are Yours Working?</h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>Every successful business runs on systems — repeatable processes that produce consistent results without depending on any single person. Most businesses have systems; few have good ones. Here's how to think about it.</p>
                </div>
            </section>

            <section style={{ padding: "70px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 860, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: 20 }}>What is a Business System?</h2>
                    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(245,197,24,0.15)", borderRadius: 18, padding: "32px 36px", marginBottom: 36 }}>
                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: 1.8, margin: 0 }}>A <strong style={{ color: "var(--clr-gold)" }}>business system</strong> is a documented, repeatable process that produces a consistent outcome — regardless of who performs it. It's the difference between a business that depends on you and a business that works for you.</p>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.97rem", lineHeight: 1.8 }}>When your business lacks systems: results are inconsistent, mistakes repeat, you can't delegate, you can't scale, and you can't take a holiday. When your business has good systems: outcomes are predictable, new team members onboard quickly, quality stays high, and you can focus on growth instead of firefighting.</p>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 12 }}>The 6 Core Business Systems</h2>
                    <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", marginBottom: 50 }}>A complete business needs all 6. Most businesses only have 1 or 2 — and they're usually broken.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 22 }}>
                        {systemTypes.map((s, i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "26px 22px" }}>
                                <i className={`fas ${s.icon}`} style={{ color: "var(--clr-gold)", fontSize: "1.3rem", marginBottom: 14, display: "block" }} />
                                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{s.title}</h3>
                                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "70px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: 16 }}>How We Help You Build Them</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 32, lineHeight: 1.8 }}>We audit your existing systems, identify the most critical gaps, and work with you to design and document the processes that will have the highest impact on your growth, quality, and freedom.</p>
                    <a href="/book" className="btn-primary" style={{ padding: "14px 36px", fontSize: "1rem" }}><i className="fas fa-calendar-alt" /> Book a Free Systems Audit</a>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to Build a Business That Runs on Systems?</h2>
                <p>Book a free strategy call and we'll identify the top 3 systems your business is missing right now.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Strategy Call</a>
            </section>
        </>
    );
}
