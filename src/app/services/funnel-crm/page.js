export const metadata = {
    title: "Funnel & CRM Setup | Sarvanu",
    description: "Build high-converting funnels and implement CRM systems that automate lead nurturing and close more clients systematically.",
    alternates: { canonical: "https://sarvanu.com/services/funnel-crm" },
    openGraph: { title: "Funnel & CRM Setup | Sarvanu", description: "High-converting funnels and CRM systems for growing businesses.", url: "https://sarvanu.com/services/funnel-crm", images: ["/og-image.png"] },
};

const steps = [
    { num: "01", title: "Funnel Audit", desc: "We map your current lead journey — from first touch to closed deal — and identify every point where prospects are dropping off." },
    { num: "02", title: "Funnel Design", desc: "We design a new funnel architecture: landing pages, lead magnets, nurture sequences, and conversion touchpoints." },
    { num: "03", title: "CRM Selection & Setup", desc: "We help you choose and set up the right CRM (HubSpot, Zoho, Notion, or simple WhatsApp CRM) and configure it for your sales process." },
    { num: "04", title: "Automation Workflows", desc: "Lead capture → auto-response → follow-up sequences → deal stages. Your pipeline runs automatically so no lead goes cold." },
    { num: "05", title: "Team Training", desc: "We train your team to use the system consistently. A CRM only works if your people actually use it — we make that happen." },
    { num: "06", title: "Analytics & Optimisation", desc: "Monthly review of funnel metrics — conversion rates, drop-off points, pipeline velocity — and continuous improvement." },
];

export default function FunnelCRMPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 700, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>Services — Funnel &amp; CRM</span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>Turn Leads Into Clients <span style={{ color: "var(--clr-gold)" }}>Systematically</span></h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 36 }}>Without a funnel and CRM, leads die in WhatsApp chats and email inboxes. We build the systems that capture, nurture, and convert your leads — even while you sleep.</p>
                    <a href="/book" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}><i className="fas fa-calendar-alt" /> Book Free Funnel Audit</a>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#fff", fontWeight: 800, marginBottom: 16 }}>Our 6-Step Funnel &amp; CRM Build Process</h2>
                    <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", marginBottom: 50 }}>We don't just set up tools. We build a complete client acquisition system.</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ display: "flex", gap: 24, alignItems: "flex-start", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "24px 26px" }}>
                                <span style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--clr-gold)", minWidth: 40 }}>{s.num}</span>
                                <div>
                                    <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: 6, fontSize: "1.05rem" }}>{s.title}</h3>
                                    <p style={{ color: "rgba(255,255,255,0.55)", margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "70px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 760, margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", color: "#fff", fontWeight: 800, marginBottom: 30, textAlign: "center" }}>Tools We Work With</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                        {["HubSpot", "Zoho CRM", "Notion CRM", "ClickUp", "WhatsApp Business", "Mailchimp", "ActiveCampaign", "Google Sheets CRM", "Zapier", "Make (Integromat)"].map((tool, i) => (
                            <span key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", padding: "8px 18px", borderRadius: 20, fontSize: "0.88rem" }}>{tool}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to Automate Your Sales Pipeline?</h2>
                <p>Book a free call and we'll map out your current funnel and show you exactly where revenue is leaking.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Funnel Audit</a>
            </section>
        </>
    );
}
