export const metadata = {
    title: "Why Choose Sarvanu | Sarvanu",
    description: "What makes Sarvanu different from other consultants. Real implementation, honest advice, and a track record of measurable results.",
    alternates: { canonical: "https://sarvanu.com/why-choose-us" },
    openGraph: { title: "Why Choose Sarvanu", description: "What makes Sarvanu different. Real results, real implementation.", url: "https://sarvanu.com/why-choose-us", images: ["/og-image.png"] },
};

const differentiators = [
    { icon: "fa-hammer", title: "We Implement, Not Just Advise", desc: "Most consultants give you a report and disappear. We build systems, train your team, and stay engaged until the changes are embedded. You get a partner, not a presenter." },
    { icon: "fa-user-tie", title: "Direct Access to the Founder", desc: "When you work with us, you work directly with Sarvanu — not a junior associate. Every session, every strategy, every decision involves the person with the experience." },
    { icon: "fa-compass", title: "Strategy Before Tactics", desc: "We don't start with social media or ads. We start with your business model, positioning, and growth constraints — because tactics built on a weak strategy always fail." },
    { icon: "fa-lock-open", title: "No Lock-In Contracts", desc: "Month-to-month engagements. We earn your continued business by delivering results, not by trapping you in a contract. If it's not working, you leave. Simple." },
    { icon: "fa-shield-alt", title: "Honest Over Popular", desc: "We tell you what your business needs, not what you want to hear. If your pricing is wrong, we'll say it. If your team structure is broken, we'll name it. Honesty is a service." },
    { icon: "fa-industry", title: "Cross-Industry Experience", desc: "We've worked with digital agencies, manufacturers, startups, e-commerce, professional services, and traditional family businesses. The principles of good business are universal." },
];

const testimonials = [
    { quote: "Sarvanu helped us 3x our revenue by identifying the exact bottlenecks we were blind to. Worth every rupee.", name: "Pronel Mohanti", role: "Co-Founder, Idealcore Solution LLP" },
    { quote: "The clarity I got from just the first session was more valuable than 2 years of reading business books.", name: "Manufacturing Founder", role: "West Bengal, India" },
    { quote: "We went from chaos to a team that actually functions. Our operations are unrecognisable in the best way.", name: "Tech Startup Founder", role: "Bangalore, India" },
];

export default function WhyChooseUsPage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>Authority — Why Choose Us</span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>Why Founders Choose <span style={{ color: "var(--clr-gold)" }}>Sarvanu</span></h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>There are hundreds of consultants. Here's what's genuinely different about how we work — and why our clients stay.</p>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 22 }}>
                        {differentiators.map((d, i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "28px 24px" }}>
                                <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(245,197,24,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                                    <i className={`fas ${d.icon}`} style={{ color: "var(--clr-gold)", fontSize: "1.2rem" }} />
                                </div>
                                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", marginBottom: 10 }}>{d.title}</h3>
                                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "var(--grad-surface)" }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: 50 }}>What Clients Say</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 22 }}>
                        {testimonials.map((t, i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "26px 22px" }}>
                                <p style={{ color: "var(--clr-gold)", fontSize: "1.5rem", margin: "0 0 12px" }}>"</p>
                                <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "0.93rem", lineHeight: 1.7, marginBottom: 18, fontStyle: "italic" }}>{t.quote}</p>
                                <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem", margin: "0 0 4px" }}>{t.name}</p>
                                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", margin: 0 }}>{t.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to Experience the Difference?</h2>
                <p>Book a free strategy call and see for yourself what working with a consultant who actually cares about your results feels like.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Strategy Call</a>
            </section>
        </>
    );
}
