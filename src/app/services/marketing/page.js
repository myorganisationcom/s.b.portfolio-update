export const metadata = {
    title: "Marketing Strategy Consulting | Sarvanu",
    description: "Stop guessing at marketing. Get a clear, channel-specific strategy that generates consistent leads and revenue for your business.",
    alternates: { canonical: "https://sarvanu.com/services/marketing" },
    openGraph: { title: "Marketing Strategy Consulting | Sarvanu", description: "Clear marketing strategy for consistent leads and revenue.", url: "https://sarvanu.com/services/marketing", images: ["/og-image.png"] },
};

const deliverables = [
    { icon: "fa-bullseye", title: "Ideal Customer Profile", desc: "We precisely define who your best customers are, what they care about, where they spend time, and what triggers their buying decisions." },
    { icon: "fa-pen-nib", title: "Brand Messaging Framework", desc: "A clear, compelling message that instantly communicates your value — so prospects understand why you are the right choice before the conversation even starts." },
    { icon: "fa-funnel-dollar", title: "Lead Generation Strategy", desc: "A channel-specific plan (LinkedIn, Instagram, SEO, WhatsApp, referrals) to generate a consistent flow of qualified prospects every month." },
    { icon: "fa-envelope-open-text", title: "Content & Campaign Planning", desc: "A 90-day content calendar and campaign roadmap — not just ideas, but a structured publishing system your team can execute consistently." },
    { icon: "fa-laptop-code", title: "Website Conversion Blueprint", desc: "We audit your website and landing pages and provide a detailed optimisation plan to turn more visitors into enquiries and clients." },
    { icon: "fa-analytics", title: "Marketing Dashboard & KPIs", desc: "Track what matters — cost per lead, conversion rates, channel ROI — with a simple dashboard that tells you where to invest next." },
];

export default function MarketingPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 700, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>
                        Services — Marketing Strategy
                    </span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>
                        Marketing That <span style={{ color: "var(--clr-gold)" }}>Generates Revenue</span>, Not Just Engagement
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 36 }}>
                        Most businesses waste money on tactics without a strategy. We build your marketing from the ground up — message, channel, content, and measurement — so every rupee spent works harder.
                    </p>
                    <a href="/book" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}>
                        <i className="fas fa-calendar-alt" /> Book Your Free Strategy Call
                    </a>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 60 }}>
                        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#fff", fontWeight: 800, marginBottom: 12 }}>What You Get</h2>
                        <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 560, margin: "0 auto" }}>A complete marketing strategy built around your business model, not generic templates.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
                        {deliverables.map((d, i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "28px 26px" }}>
                                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,197,24,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                                    <i className={`fas ${d.icon}`} style={{ color: "var(--clr-gold)", fontSize: "1.2rem" }} />
                                </div>
                                <h3 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: 10, fontWeight: 700 }}>{d.title}</h3>
                                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.7 }}>{d.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "70px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 760, margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", color: "#fff", fontWeight: 800, marginBottom: 12, textAlign: "center" }}>The Problem With Most Marketing</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center", marginBottom: 32, fontSize: "0.97rem" }}>Without a strategy, even great execution produces inconsistent results.</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {[["You post content but get no enquiries", "Content without a conversion strategy is just entertainment."], ["You run ads but they don't convert", "Ads amplify what's already there — if your message is weak, ads make it worse."], ["Your marketing depends on one platform", "Algorithm changes can wipe your lead flow overnight."], ["You have no system for following up leads", "80% of sales require 5+ follow-ups. Without a CRM, leads die in WhatsApp chats."]].map(([problem, why], i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "18px 22px" }}>
                                <p style={{ color: "#fff", fontWeight: 600, marginBottom: 4, fontSize: "0.97rem" }}>{problem}</p>
                                <p style={{ color: "rgba(255,255,255,0.5)", margin: 0, fontSize: "0.88rem" }}>{why}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Stop Guessing. Start Growing.</h2>
                <p>Book a free call and let's identify the #1 marketing lever that will move your business forward in the next 90 days.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Marketing Audit</a>
            </section>
        </>
    );
}
