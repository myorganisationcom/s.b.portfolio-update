export const metadata = {
    title: "Problems We Solve | Sarvanu",
    description: "The most common business problems Sarvanu solves — revenue plateaus, operational chaos, poor marketing, and team dysfunction.",
    alternates: { canonical: "https://sarvanu.com/problems-we-solve" },
    openGraph: { title: "Problems We Solve | Sarvanu", description: "The business problems we solve for founders and MSMEs in India.", url: "https://sarvanu.com/problems-we-solve", images: ["/og-image.png"] },
};

const problems = [
    { emoji: "📉", problem: "Revenue is flat or declining", solution: "We audit your pricing, positioning, and channels — and build a revenue growth plan with specific, executable actions for the next 90 days." },
    { emoji: "🔥", problem: "You're constantly firefighting", solution: "We build systems and delegation frameworks so problems get solved before they escalate, and your team handles day-to-day without you." },
    { emoji: "🤷", problem: "No clear marketing strategy", solution: "We build a channel-specific marketing plan with a defined budget, KPIs, and 90-day content roadmap that your team can actually execute." },
    { emoji: "😤", problem: "Clients come from referrals only", solution: "We build you a predictable lead generation system — LinkedIn, email, SEO, referral programs — that creates a consistent flow of new enquiries." },
    { emoji: "🗣️", problem: "Sales is inconsistent and unpredictable", solution: "We build a complete sales process with qualification frameworks, proposal templates, follow-up cadences, and objection responses." },
    { emoji: "👥", problem: "Team is unproductive or misaligned", solution: "We create role clarity documents, KPIs, and performance frameworks so everyone knows what they own and how success is measured." },
    { emoji: "😰", problem: "You can't delegate — everything needs you", solution: "We document your key processes into SOPs and build a delegation system so your team can execute without constant oversight from you." },
    { emoji: "🤔", problem: "No clear brand positioning", solution: "We define your ideal customer, their core problem, your unique solution, and build a brand message that differentiates you immediately." },
    { emoji: "📊", problem: "No visibility on what's actually working", solution: "We build a simple business dashboard with the 8-12 metrics that tell you the real health of your business — reviewed monthly." },
    { emoji: "🌀", problem: "You've tried many things but nothing sticks", solution: "We identify the root cause — usually misaligned strategy or premature tactics — and build a focused, sequenced plan that compounds." },
];

export default function ProblemsWeSolvePage() {
    return (
        <>
            <section style={{ padding: "120px 20px 80px", background: "var(--grad-surface)", textAlign: "center" }}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                    <span style={{ display: "inline-block", background: "rgba(245,197,24,0.1)", color: "var(--clr-gold)", border: "1px solid rgba(245,197,24,0.2)", padding: "6px 18px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>Authority — Problems We Solve</span>
                    <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>If Your Business Has These Problems, <span style={{ color: "var(--clr-gold)" }}>We Have Answers</span></h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>After working with dozens of founders and businesses, these are the most common challenges we see — and the proven approaches we use to solve them.</p>
                </div>
            </section>

            <section style={{ padding: "80px 20px", background: "#0a0a14" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        {problems.map((p, i) => (
                            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, overflow: "hidden" }}>
                                <div style={{ padding: "22px 24px", borderRight: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "flex-start", gap: 14 }}>
                                    <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.emoji}</span>
                                    <div>
                                        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.5px" }}>The Problem</p>
                                        <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.97rem", margin: 0 }}>{p.problem}</p>
                                    </div>
                                </div>
                                <div style={{ padding: "22px 24px" }}>
                                    <p style={{ color: "var(--clr-gold)", fontSize: "0.75rem", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.5px" }}>Our Approach</p>
                                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", margin: 0, lineHeight: 1.7 }}>{p.solution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Recognise Your Problem? Let's Solve It.</h2>
                <p>Book a free strategy call. We'll identify the root cause and give you a clear path forward — in 15 minutes.</p>
                <a href="/book" className="btn-primary"><i className="fas fa-calendar-alt" /> Book Free Strategy Call</a>
            </section>
        </>
    );
}
