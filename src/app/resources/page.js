export const metadata = {
    title: 'Free Resources | Business Templates & Guides | Sarvanu Banerjee',
    description: 'Free business resources, templates, and guides for founders and entrepreneurs. Download free business health checklist, growth roadmap, and more.',
    keywords: 'free business templates, startup resources, business checklist, growth roadmap PDF, free consulting resources',
    alternates: {
        canonical: 'https://sarvanu.com/resources',
    },
    openGraph: {
        title: 'Free Business Resources | Sarvanu Banerjee',
        description: 'Free templates and guides for founders. No email required for some resources!',
        url: 'https://sarvanu.com/resources',
        type: 'website',
    },
};

export default function Resources() {
    return (
        <>
            <section className="resources-hero">
                <h1>Free Business Resources</h1>
                <p>Templates, guides, and tools to help you grow — no fluff, just practical stuff.</p>
            </section>

            <div className="resources-container">
                <div className="resources-grid">

                    {/* Resource 1 */}
                    <div className="resource-card">
                        <div className="resource-image blue">📋</div>
                        <div className="resource-content">
                            <span className="resource-badge free">Free Download</span>
                            <h3>Business Health Checklist</h3>
                            <p>A 20-point diagnostic to identify exactly where your business is leaking time, money, and opportunity.</p>
                            <a href="#" className="btn btn-download">📥 Download Now</a>
                        </div>
                    </div>

                    {/* Resource 2 */}
                    <div className="resource-card">
                        <div className="resource-image green">🗺️</div>
                        <div className="resource-content">
                            <span className="resource-badge email">Email Required</span>
                            <h3>90-Day Growth Roadmap</h3>
                            <p>A step-by-step framework to organize your next 90 days for maximum business impact.</p>
                            <a href="#lead-magnet" className="btn btn-unlock">🔓 Unlock Free</a>
                        </div>
                    </div>

                    {/* Resource 3 */}
                    <div className="resource-card">
                        <div className="resource-image orange">📊</div>
                        <div className="resource-content">
                            <span className="resource-badge free">Free Download</span>
                            <h3>Pricing Strategy Template</h3>
                            <p>Calculate your ideal pricing with this spreadsheet. Includes cost analysis and margin targets.</p>
                            <a href="#" className="btn btn-download">📥 Download Now</a>
                        </div>
                    </div>

                    {/* Resource 4 */}
                    <div className="resource-card">
                        <div className="resource-image purple">📝</div>
                        <div className="resource-content">
                            <span className="resource-badge free">Free Download</span>
                            <h3>SOP Template Pack</h3>
                            <p>5 ready-to-use Standard Operating Procedure templates for common business processes.</p>
                            <a href="#" className="btn btn-download">📥 Download Now</a>
                        </div>
                    </div>

                </div>

                {/* Lead Magnet Section */}
                <div className="lead-magnet-section" id="lead-magnet">
                    <div className="lead-magnet-content">
                        <div className="lead-magnet-text">
                            <h2>🎯 Get Your Free 90-Day Growth Roadmap</h2>
                            <p>Stop working ON everything at once. This framework helps you prioritize the right activities for your business stage.</p>
                            <ul>
                                <li>Week-by-week action items</li>
                                <li>KPI tracking templates</li>
                                <li>Decision-making frameworks</li>
                                <li>Milestone checklists</li>
                            </ul>
                            <p><strong>Used by 500+ founders to structure their growth.</strong></p>
                        </div>
                        <div className="lead-magnet-form">
                            <h3>Get Your Free Copy</h3>
                            {/* Note: the form itself is likely visual only or needs its own handler, we can post to our api/contact for now or leave it generic */}
                            <form action="/api/contact" method="POST">
                                <input type="hidden" name="form_type" value="lead_magnet" />
                                <input type="text" name="name" placeholder="Your Name" required style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                                <input type="email" name="email" placeholder="Your Email" required style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                                <button type="submit" style={{ width: '100%', padding: '12px', background: 'var(--clr-gold)', color: 'var(--clr-navy-dark)', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                                    📧 Send Me The Roadmap
                                </button>
                            </form>
                            <p className="privacy">🔒 No spam. Unsubscribe anytime.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Free Business Resources | Sarvanu Banerjee Strategies",
                        "description": "Free business resources, templates, and guides for founders and entrepreneurs.",
                        "url": "https://sarvanu.com/resources"
                    })
                }}
            />
        </>
    );
}
