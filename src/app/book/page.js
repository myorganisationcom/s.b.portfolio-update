export const metadata = {
    title: 'Book a Free Strategy Call | Sarvanu Banerjee Strategies',
    description: 'Book your complimentary 10-15 minute strategy call with Sarvanu Banerjee. Discuss your business challenges and get actionable insights - no obligation.',
    keywords: 'book business consultant, free strategy call, business consulting appointment, schedule consultation India',
    alternates: {
        canonical: 'https://sarvanu.com/book',
    },
    openGraph: {
        title: 'Book a Free Strategy Call | Sarvanu Banerjee',
        description: 'Get a complimentary 10-15 minute strategy call. No obligation.',
        url: 'https://sarvanu.com/book',
        type: 'website',
    },
};

export default function BookACall() {
    return (
        <div className="booking-page" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
            <div className="booking-container">
                <a href="/" className="back-link">← Back to Home</a>

                <div className="booking-card">
                    <div className="booking-header">
                        <span className="emoji">📞</span>
                        <h1>Book Your Free Strategy Call</h1>
                        <p>10-15 minutes. No obligation. Just clarity.</p>
                    </div>

                    <div className="benefits-list">
                        <h3>What You'll Get</h3>
                        <ul>
                            <li>Quick assessment of your main challenges</li>
                            <li>Actionable next steps you can take today</li>
                            <li>Clarity on whether we're a good fit</li>
                            <li>No high-pressure sales tactics</li>
                        </ul>
                    </div>

                    <form action="/api/contact" method="POST">
                        <input type="hidden" name="form_type" value="booking_call" />

                        <div className="form-group">
                            <label htmlFor="name">Your Name *</label>
                            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input type="email" id="email" name="email" placeholder="your@email.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone / WhatsApp *</label>
                            <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="business_stage">Business Stage *</label>
                            <select id="business_stage" name="business_stage" required>
                                <option value="">Select your stage...</option>
                                <option value="idea">Just an Idea</option>
                                <option value="early">Early Stage (0-1 year)</option>
                                <option value="growing">Growing (1-3 years)</option>
                                <option value="scaling">Scaling (3+ years)</option>
                                <option value="traditional">Traditional Business Going Digital</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="goals">What's Your Biggest Challenge Right Now?</label>
                            <textarea id="goals" name="goals" placeholder="Tell me briefly what's keeping you stuck..."></textarea>
                        </div>

                        <button type="submit" className="submit-btn">🚀 Request My Free Call</button>
                    </form>

                    <div className="alternative-contact">
                        <p>Prefer to chat first?</p>
                        <a href="https://wa.me/918700541657" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                            💬 Message on WhatsApp
                        </a>
                    </div>

                    <div className="trust-badges">
                        <span>🔒 100% Confidential</span>
                        <span>⏱️ Quick Response</span>
                    </div>
                </div>
            </div>

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Book a Strategy Call | Sarvanu Banerjee",
                        "description": "Book a complimentary 10-15 minute strategy call.",
                        "url": "https://sarvanu.com/book"
                    })
                }}
            />
        </div>
    );
}
