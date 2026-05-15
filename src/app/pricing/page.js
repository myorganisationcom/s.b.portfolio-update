export const metadata = {
    title: "Pricing & Consulting Packages | Sarvanu Strategies",
    description: "Transparent pricing for business consulting. Basic ₹15K/month, Growth ₹30K/month, Premium ₹55K/month. No hidden fees.",
    alternates: { canonical: "https://sarvanu.com/pricing" },
    openGraph: { title: "Consulting Pricing | Sarvanu Strategies", description: "Transparent business consulting pricing for Indian founders and MSMEs.", url: "https://sarvanu.com/pricing", images: ["/og-image.png"] },
};

const plans = [
    {
        name: "Basic", sub: "Foundation & Clarity", price: "₹15,000", per: "/month", highlight: false,
        ideal: "Solopreneurs, early-stage founders, or businesses needing strategic clarity for the first time.",
        features: ["Strategic Business Audit (one-time at start)", "Monthly 1:1 Strategy Consultation (2 hours)", "Brand Positioning & Identity Review", "Marketing Direction & Channel Plan", "Focused Social Media Plan (1 Platform)", "Website Structure & Content Blueprint", "Operations & Workflow Diagnosis", "Monthly Progress Report & KPI Review"],
        cta: "Start with Basic",
    },
    {
        name: "Growth", sub: "Systems & Consistency", price: "₹30,000", per: "/month", highlight: true,
        ideal: "MSMEs, agencies, and service businesses ready to build proper systems and grow consistently.",
        features: ["In-depth Business Audit + Competitor Analysis", "Monthly Strategy Sessions (4 hours)", "Complete Brand Identity & Messaging Framework", "Monthly Marketing Execution Plan", "Social Media Strategy (2 Platforms)", "Conversion-Focused Website Planning", "Business Development Strategy", "SOPs & Workflow Structuring", "CRM Setup & Configuration", "Growth Dashboard & Weekly KPIs"],
        cta: "Start with Growth",
    },
    {
        name: "Premium", sub: "Scale, Automation & Control", price: "₹55,000", per: "/month", highlight: false,
        ideal: "Multi-revenue founders and scaling businesses that need comprehensive, ongoing strategic leadership.",
        features: ["2 Monthly Strategy Sessions + On-Call Advisory", "Advanced Market Positioning & Messaging", "Campaign-Level Marketing Strategy", "Social Media Expansion (3 Platforms)", "Full Funnel Design + CRM Setup + Analytics", "B2B Lead Systems & Outreach Frameworks", "Complete SOPs + Automation Tool Integration", "Org Design & Team Structure", "Hiring Framework & Role Design", "Complete Business Intelligence Dashboard"],
        cta: "Start with Premium",
    },
];

const faqs = [
    ["Are there any hidden fees?", "No. The monthly fee covers everything listed in your package. Additional projects (e.g., pitch deck creation, custom CRM builds) are scoped and priced separately before starting."],
    ["Can I change plans?", "Yes. You can upgrade or downgrade at the start of any new month with 7 days' notice."],
    ["Is there a contract?", "No long-term contracts. Month-to-month only. Cancel anytime with 15 days' notice."],
    ["Is there a free trial?", "No trial, but we offer a free 15-minute strategy call before you commit — so you can assess whether we're the right fit."],
    ["Do you offer a one-time project?", "Primarily we work on retainer, but we do occasional fixed-scope projects (audits, strategy sprints). Ask on your strategy call."],
];

export default function PricingPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 700, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>Company — Pricing</span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>Transparent Pricing. <span style={{ color: "var(--clr-gold)" }}>No Surprises.</span></h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>Three packages built for different stages of business. No hidden fees, no lock-in, no guesswork — just clear deliverables and accountable results.</p>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24, alignItems: "start" }}>
                        {plans.map((plan, i) => (
                            <div key={i} style={{ background: plan.highlight ? "rgba(245,197,24,0.04)" : "rgba(255,255,255,0.03)", border: `1px solid ${plan.highlight ? "rgba(245,197,24,0.3)" : "rgba(255,255,255,0.07)"}`, borderRadius: 20, padding: "32px 26px", position: "relative", boxShadow: plan.highlight ? "0 0 40px rgba(245,197,24,0.08)" : "none" }}>
                                {plan.highlight && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--clr-gold)", color: "#000", padding: "4px 18px", borderRadius: 20, fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", whiteSpace: "nowrap" }}>Most Popular</div>}
                                <h2 style={{ color: plan.highlight ? "var(--clr-gold)" : "#fff", fontSize: "1.4rem", fontWeight: 800, marginBottom: 4 }}>{plan.name}</h2>
                                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginBottom: 16 }}>{plan.sub}</p>
                                <div style={{ marginBottom: 20 }}>
                                    <span style={{ fontSize: "2.2rem", fontWeight: 800, color: "#fff" }}>{plan.price}</span>
                                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.88rem", marginLeft: 6 }}>{plan.per}</span>
                                </div>
                                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: 24, padding: "12px 14px", background: "rgba(255,255,255,0.03)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                                    <strong style={{ color: "rgba(255,255,255,0.7)" }}>Ideal for:</strong> {plan.ideal}
                                </p>
                                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                                    {plan.features.map((f, j) => (
                                        <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "rgba(255,255,255,0.72)", fontSize: "0.88rem" }}>
                                            <i className="fas fa-check" style={{ color: "var(--clr-gold)", marginTop: 3, flexShrink: 0 }} />{f}
                                        </li>
                                    ))}
                                </ul>
                                <a href="/book" className={plan.highlight ? "btn-primary" : "btn-secondary"} style={{ display: "block", textAlign: "center", padding: "12px 20px" }}>{plan.cta}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "80px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 760, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: 40 }}>Pricing FAQs</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {faqs.map(([q, a], i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "20px 22px" }}>
                                <p style={{ color: "#fff", fontWeight: 600, marginBottom: 8, fontSize: "0.97rem" }}>{q}</p>
                                <p style={{ color: "rgba(255,255,255,0.58)", margin: 0, fontSize: "0.9rem", lineHeight: 1.7 }}>{a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Not Sure Which Plan is Right?</h2>
                <p>Book a free 15-minute call. We'll assess your business and recommend the right package — or tell you if you don't need one yet.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Strategy Call</a>
            </section>
        </>
    );
}
