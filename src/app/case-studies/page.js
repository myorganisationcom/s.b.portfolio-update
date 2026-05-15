export const metadata = {
    title: "Client Results & Proof | Sarvanu Strategies",
    description: "Documented outcomes from founders and businesses who worked with Sarvanu Banerjee. Real engagements, real numbers, real stories.",
    openGraph: {
        title: "Client Results & Proof | Sarvanu Strategies",
        description: "Documented outcomes from founders and businesses who worked with Sarvanu Banerjee.",
        url: "https://sarvanu.com/case-studies",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "https://sarvanu.com/case-studies",
    },
};

export default function CaseStudies() {
    return (
        <>
            {/* HERO */}
            <section className="cs-hero">
                <div className="cs-hero-inner">
                    <span className="cs-eyebrow">Proof of Work</span>
                    <h1>What Actually Happens<br />When We Work Together</h1>
                    <p>
                        These aren't case studies written for optics. They're documented outcomes from founders who were stuck,
                        overwhelmed, or growing too fast to keep up — and what changed when we got to work.
                    </p>
                    <div className="cs-hero-stats">
                        <div className="cs-stat">
                            <span className="cs-stat-num">40+</span>
                            <span className="cs-stat-label">Founders Worked With</span>
                        </div>
                        <div className="cs-stat-divider" />
                        <div className="cs-stat">
                            <span className="cs-stat-num">₹3Cr+</span>
                            <span className="cs-stat-label">Revenue Unlocked</span>
                        </div>
                        <div className="cs-stat-divider" />
                        <div className="cs-stat">
                            <span className="cs-stat-num">6</span>
                            <span className="cs-stat-label">Industries Served</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CASE STUDIES */}
            <section className="cs-section">
                <div className="cs-container">

                    {/* CASE 1 */}
                    <article className="cs-card">
                        <div className="cs-card-header">
                            <span className="cs-tag">Digital Agency · Kolkata</span>
                            <span className="cs-duration">14-month engagement</span>
                        </div>
                        <h2 className="cs-card-title">
                            Pronel was billing ₹65K/month and working 16-hour days.<br />
                            <span>He needed to stop being the agency.</span>
                        </h2>
                        <p className="cs-card-intro">
                            Pronel Mohanti co-founded Idealcore Solution LLP with real technical skill — design, web development,
                            client delivery. But three years in, every project still ran through him personally.
                            He couldn't take a day off. He couldn't hire. He had no idea where the next client was coming from.
                            The business was built entirely on one person's time.
                        </p>

                        <div className="cs-two-col">
                            <div className="cs-col">
                                <h3 className="cs-col-label cs-col-label--red">What We Found</h3>
                                <ul className="cs-list">
                                    <li>No standard process for client onboarding — each project started differently</li>
                                    <li>Delivery relied on Pronel's memory, not documentation</li>
                                    <li>No defined team roles — two junior staff were underutilised</li>
                                    <li>Zero inbound pipeline; all work came through personal WhatsApp</li>
                                    <li>Pricing was inconsistent — he often undersold out of fear of losing the deal</li>
                                </ul>
                            </div>
                            <div className="cs-col">
                                <h3 className="cs-col-label cs-col-label--gold">What We Built</h3>
                                <ul className="cs-list">
                                    <li>Standard client onboarding SOP — from first call to contract in 48 hours</li>
                                    <li>Delivery playbooks for each service type (design, dev, branding)</li>
                                    <li>Clear role split: Pronel on strategy and closings, juniors on execution</li>
                                    <li>LinkedIn content pipeline targeting West Bengal SME owners</li>
                                    <li>Fixed pricing tiers with a no-discount rule — anchored to outcomes, not hours</li>
                                </ul>
                            </div>
                        </div>

                        <div className="cs-results">
                            <div className="cs-result-item">
                                <span className="cs-result-num">₹65K → ₹1.8L</span>
                                <span className="cs-result-desc">Monthly revenue in 14 months</span>
                            </div>
                            <div className="cs-result-item">
                                <span className="cs-result-num">3 Hires</span>
                                <span className="cs-result-desc">First full team hired and onboarded</span>
                            </div>
                            <div className="cs-result-item">
                                <span className="cs-result-num">9-hr days</span>
                                <span className="cs-result-desc">Down from 16 — founder's time reclaimed</span>
                            </div>
                            <div className="cs-result-item">
                                <span className="cs-result-num">6 inbound</span>
                                <span className="cs-result-desc">Qualified leads/month from LinkedIn alone</span>
                            </div>
                        </div>

                        <blockquote className="cs-quote">
                            <p>"Before this, I was the agency. Now I run the agency. That one shift changed everything."</p>
                            <cite>Pronel Mohanti, Co-Founder — Idealcore Solution LLP</cite>
                        </blockquote>
                    </article>

                    {/* CASE 2 */}
                    <article className="cs-card">
                        <div className="cs-card-header">
                            <span className="cs-tag">Manufacturing · West Bengal</span>
                            <span className="cs-duration">8-month engagement</span>
                        </div>
                        <h2 className="cs-card-title">
                            A 20-year-old fabrication business. No website.<br />
                            <span>Missing tenders they didn't even know existed.</span>
                        </h2>
                        <p className="cs-card-intro">
                            This client ran a structural fabrication and industrial supply business out of Howrah for two decades.
                            Solid reputation locally. Consistent work from existing clients. But their growth had plateaued —
                            they were invisible to procurement heads in Pune, Ahmedabad, and Chennai who were actively searching
                            for vendors like them. Their pipeline was entirely dependent on two men making calls.
                        </p>

                        <div className="cs-two-col">
                            <div className="cs-col">
                                <h3 className="cs-col-label cs-col-label--red">What Was Missing</h3>
                                <ul className="cs-list">
                                    <li>No digital presence — not findable by procurement teams outside West Bengal</li>
                                    <li>Company communication was informal — no credentials deck, no capability document</li>
                                    <li>Zero LinkedIn presence; competitors with less experience were winning national tenders</li>
                                    <li>No lead tracking — follow-ups were done on paper and Excel</li>
                                    <li>Pricing conversations were handled verbally with no documented anchor</li>
                                </ul>
                            </div>
                            <div className="cs-col">
                                <h3 className="cs-col-label cs-col-label--gold">What Changed</h3>
                                <ul className="cs-list">
                                    <li>Built a professional website with SEO targeting procurement-specific search terms</li>
                                    <li>Created a credentials and capability deck for enterprise outreach</li>
                                    <li>Set up LinkedIn Company Page with weekly content for B2B visibility</li>
                                    <li>Implemented a CRM (Zoho) for lead tracking, follow-up reminders, and pipeline visibility</li>
                                    <li>Structured a rate-card with minimum engagement floors — ended random discounting</li>
                                </ul>
                            </div>
                        </div>

                        <div className="cs-results">
                            <div className="cs-result-item">
                                <span className="cs-result-num">₹40L+</span>
                                <span className="cs-result-desc">New contracts signed in 8 months</span>
                            </div>
                            <div className="cs-result-item">
                                <span className="cs-result-num">150+</span>
                                <span className="cs-result-desc">Qualified B2B leads per month</span>
                            </div>
                            <div className="cs-result-item">
                                <span className="cs-result-num">4 States</span>
                                <span className="cs-result-desc">New markets reached beyond West Bengal</span>
                            </div>
                            <div className="cs-result-item">
                                <span className="cs-result-num">2 Enterprise</span>
                                <span className="cs-result-desc">Large-format clients onboarded (previously zero)</span>
                            </div>
                        </div>

                        <blockquote className="cs-quote">
                            <p>"We had good work but no voice. Now people find us. That's a completely different business."</p>
                            <cite>Director — Industrial Fabrication Business, Howrah (name withheld on request)</cite>
                        </blockquote>
                    </article>

                    {/* CASE 3 */}
                    <article className="cs-card">
                        <div className="cs-card-header">
                            <span className="cs-tag">Tech Startup · Bangalore</span>
                            <span className="cs-duration">6-month engagement</span>
                        </div>
                        <h2 className="cs-card-title">
                            Series A funded. Growing at 40% MoM.<br />
                            <span>And completely falling apart inside.</span>
                        </h2>
                        <p className="cs-card-intro">
                            Two co-founders had raised ₹1.2Cr in seed funding and were growing fast — but the cracks were
                            showing. Decisions were made in hallway conversations. No one was clear on who owned what.
                            The team kept shipping features the market didn't ask for. Both founders were exhausted by month six
                            and privately told each other the company felt "out of control." Fast growth without structure
                            isn't momentum — it's a liability.
                        </p>

                        <div className="cs-two-col">
                            <div className="cs-col">
                                <h3 className="cs-col-label cs-col-label--red">What Was Breaking</h3>
                                <ul className="cs-list">
                                    <li>No OKRs — each team sprint was disconnected from company goals</li>
                                    <li>Decisions escalated to founders for things the team should own</li>
                                    <li>No meeting rhythm — updates happened reactively over Slack and calls</li>
                                    <li>Hiring was chaotic — two bad hires in 3 months were draining morale</li>
                                    <li>Investors asked for a 12-month roadmap; founders had no structured answer</li>
                                </ul>
                            </div>
                            <div className="cs-col">
                                <h3 className="cs-col-label cs-col-label--gold">What We Installed</h3>
                                <ul className="cs-list">
                                    <li>Quarterly OKR framework — company goals broken to team-level KPIs</li>
                                    <li>Decision matrix: what each role can approve independently, what needs founder sign-off</li>
                                    <li>Weekly 45-minute leadership sync and bi-weekly all-hands rhythm</li>
                                    <li>Structured hiring scorecard — removed bias and gut-feel from new hires</li>
                                    <li>12-month operating roadmap built for Series A investor deck</li>
                                </ul>
                            </div>
                        </div>

                        <div className="cs-results">
                            <div className="cs-result-item">
                                <span className="cs-result-num">60% faster</span>
                                <span className="cs-result-desc">Internal decision turnaround time</span>
                            </div>
                            <div className="cs-result-item">
                                <span className="cs-result-num">Team runs</span>
                                <span className="cs-result-desc">Sprints without daily founder involvement</span>
                            </div>
                            <div className="cs-result-item">
                                <span className="cs-result-num">Series A</span>
                                <span className="cs-result-desc">Investor deck and roadmap completed and presented</span>
                            </div>
                            <div className="cs-result-item">
                                <span className="cs-result-num">0 hires</span>
                                <span className="cs-result-desc">Regrettable attrition in 5 months post-engagement</span>
                            </div>
                        </div>

                        <blockquote className="cs-quote">
                            <p>"We were moving fast but not going anywhere. Six months later, the company actually feels like a company."</p>
                            <cite>Co-Founder — B2B SaaS Startup, Bangalore (identity withheld)</cite>
                        </blockquote>
                    </article>

                </div>
            </section>

            {/* HONEST NOTE */}
            <section className="cs-honest">
                <div className="cs-honest-inner">
                    <h2>A Note on What You're Reading</h2>
                    <p>
                        These are real engagements. Where clients have consented, their names appear.
                        Where they've asked for privacy — especially in B2B manufacturing and funded startups where
                        competitive sensitivity matters — we've described the situation without identifying the company.
                        The numbers are documented, not inflated. Results vary based on execution, market conditions,
                        and the founder's own commitment to doing the work.
                    </p>
                    <p>
                        If you want to speak to a past client directly before deciding, that can be arranged on a call.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="cs-cta">
                <div className="cs-cta-inner">
                    <h2>Your business should be in this list.</h2>
                    <p>
                        Book a 30-minute call. No pitch deck. No script. Just a direct conversation about where
                        you are, what's getting in the way, and whether working together makes sense.
                    </p>
                    <div className="cs-cta-actions">
                        <a href="/book" className="btn-primary">Book a Free Strategy Call</a>
                        <a href="/how-we-work" className="cs-cta-link">See How Engagements Work →</a>
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Client Results & Proof | Sarvanu Strategies",
                        "description": "Documented outcomes from founders and businesses who worked with Sarvanu Banerjee.",
                        "url": "https://sarvanu.com/case-studies"
                    })
                }}
            />
        </>
    );
}
