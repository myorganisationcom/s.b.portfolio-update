export const metadata = {
    title: "B2B Lead Generation | Sarvanu Strategies",
    description: "Build a predictable B2B lead pipeline. LinkedIn outreach, cold email, referral systems, and digital lead generation for Indian businesses.",
    alternates: { canonical: "https://sarvanu.com/services/b2b-lead-gen" },
    openGraph: { title: "B2B Lead Generation | Sarvanu Strategies", description: "Predictable B2B lead pipeline for Indian businesses.", url: "https://sarvanu.com/services/b2b-lead-gen", images: ["/og-image.png"] },
};

const channels = [
    { icon: "fa-linkedin", label: "LinkedIn Outreach", desc: "Profile optimisation, connection strategy, and DM sequences that convert cold prospects into warm conversations." },
    { icon: "fa-envelope", label: "Cold Email Campaigns", desc: "Personalised, value-led email sequences to target accounts — with tracking, A/B testing, and follow-up automation." },
    { icon: "fa-handshake", label: "Referral Systems", desc: "Formalise your word-of-mouth. We build structured referral programs that turn happy clients into your best salespeople." },
    { icon: "fa-globe", label: "SEO & Content", desc: "Long-term inbound strategy — articles, case studies, and landing pages that attract your ideal B2B buyers organically." },
    { icon: "fa-phone-alt", label: "Discovery Call Framework", desc: "Scripts, qualification frameworks, and objection responses that convert more calls into proposals." },
    { icon: "fa-database", label: "CRM & Lead Tracking", desc: "Set up a CRM so every lead is tracked, followed up, and nurtured — nothing falls through the cracks." },
];

export default function B2BLeadGenPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 700, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>Services — B2B Lead Generation</span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>Stop Waiting for Referrals. <span style={{ color: "var(--clr-gold)" }}>Build a Lead Machine.</span></h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 36 }}>Most B2B businesses grow through luck and relationships. We build you a systematic, repeatable pipeline so high-quality leads come in every week — regardless of your network.</p>
                    <a href="/book" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}><i className="fas fa-calendar-alt" /> Book Free Lead Gen Audit</a>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#fff", fontWeight: 800, marginBottom: 50 }}>Lead Generation Channels We Build</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
                        {channels.map((c, i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "26px 22px" }}>
                                <i className={`fab ${c.icon} fa-fw`} style={{ color: "var(--clr-gold)", fontSize: "1.5rem", marginBottom: 14, display: "block" }} />
                                <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>{c.label}</h3>
                                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.7 }}>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "70px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: 16 }}>Proven Results for B2B Businesses</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 20, marginTop: 40 }}>
                        {[["150+", "New leads/month"], ["₹40L+", "New contracts won"], ["2x", "Market reach expansion"], ["3 months", "To pipeline maturity"]].map(([stat, label], i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(245,197,24,0.15)", borderRadius: 14, padding: "24px 16px" }}>
                                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--clr-gold)", marginBottom: 6 }}>{stat}</div>
                                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to Fill Your Pipeline?</h2>
                <p>Book a free call and we'll show you exactly which B2B lead channels will work fastest for your business.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Strategy Call</a>
            </section>
        </>
    );
}
