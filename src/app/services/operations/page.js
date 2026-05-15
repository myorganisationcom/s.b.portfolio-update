export const metadata = {
    title: "Operations & Workflow Consulting | Sarvanu Strategies",
    description: "Build systems that run without you. SOPs, team structures, and workflow automation for growing businesses.",
    alternates: { canonical: "https://sarvanu.com/services/operations" },
    openGraph: { title: "Operations & Workflow Consulting | Sarvanu Strategies", description: "Build systems that run without you.", url: "https://sarvanu.com/services/operations", images: ["/og-image.png"] },
};

const systems = [
    { icon: "fa-file-alt", title: "SOPs & Process Documentation", desc: "We map every critical workflow and document it into repeatable, transferable SOPs. Your business stops being dependent on any one person — including you." },
    { icon: "fa-sitemap", title: "Org Structure & Role Clarity", desc: "We design a clear org chart with defined roles, responsibilities, and decision rights. Every team member knows exactly what they own." },
    { icon: "fa-tasks", title: "Project Management Systems", desc: "We implement the right project management tools (Notion, ClickUp, Trello) and train your team on how to use them consistently." },
    { icon: "fa-robot", title: "Workflow Automation", desc: "We identify tasks that can be automated — from lead follow-up to invoice generation — and set up the tools to eliminate manual repetition." },
    { icon: "fa-chart-bar", title: "KPIs & Performance Dashboards", desc: "You get a clear view of your business health through weekly and monthly dashboards tracking the metrics that actually matter." },
    { icon: "fa-calendar-check", title: "Meeting Rhythms & Cadences", desc: "We structure your team meetings — daily standups, weekly reviews, monthly strategy sessions — so they produce decisions, not just conversations." },
];

export default function OperationsPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 700, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>
                        Services — Operations
                    </span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>
                        Build a Business That <span style={{ color: "var(--clr-gold)" }}>Runs Without You</span>
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 36 }}>
                        If you stopped working tomorrow, would your business keep running? We build the systems, structures, and processes that make the answer "yes."
                    </p>
                    <a href="/book" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}>
                        <i className="fas fa-calendar-alt" /> Book Your Free Strategy Call
                    </a>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 60 }}>
                        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#fff", fontWeight: 800, marginBottom: 12 }}>What Operations Consulting Includes</h2>
                        <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 560, margin: "0 auto" }}>We diagnose your operational gaps and build the right systems — in the right order.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
                        {systems.map((s, i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "28px 26px" }}>
                                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,197,24,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                                    <i className={`fas ${s.icon}`} style={{ color: "var(--clr-gold)", fontSize: "1.2rem" }} />
                                </div>
                                <h3 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: 10, fontWeight: 700 }}>{s.title}</h3>
                                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.7 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "70px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", color: "#fff", fontWeight: 800, marginBottom: 30, textAlign: "center" }}>Signs Your Operations Need Attention</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
                        {["Everything requires your personal approval", "The same problems keep recurring", "Team members ask you the same questions repeatedly", "You can't take a holiday without things breaking", "Onboarding new team members takes weeks of your time", "You have no clear data on what's working"].map((s, i) => (
                            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 12, padding: "14px 16px" }}>
                                <i className="fas fa-exclamation-circle" style={{ color: "#ef4444", marginTop: 2, flexShrink: 0 }} />
                                <span style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.9rem" }}>{s}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to Build a Business That Scales?</h2>
                <p>Let's start with a free audit of your current operations and identify the highest-leverage improvements.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Operations Audit</a>
            </section>
        </>
    );
}
