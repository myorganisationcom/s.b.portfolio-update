'use client';

export default function BookACall() {
    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const stage = formData.get('business_stage');
        const goals = formData.get('goals');

        const waNumber = "918700541657";
        const waMessage = `*New Strategy Call Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Business Stage:* ${stage}\n*Challenge:* ${goals}`;
        const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

        window.open(waLink, '_blank');
    };

    return (
        <div className="book-hero">
            {/* Glowing background shapes for premium feel */}
            <div className="book-glow-bg bg-1"></div>
            <div className="book-glow-bg bg-2"></div>

            <div className="container book-container">
                <div className="book-back-wrapper">
                    <a href="/" className="book-back-link">
                        <span className="arrow">←</span> Return to Homepage
                    </a>
                </div>

                <div className="book-split-layout">
                    {/* Left Column: Value Prop & Info */}
                    <div className="book-info-column">
                        <span className="book-tagline">10-Min Discovery Session</span>
                        <h1>Unlock Your Core <span>Growth Strategy</span></h1>
                        <p className="book-description">
                            Schedule a high-impact, no-obligation strategy session. We'll diagnose your primary bottlenecks and outline an actionable roadmap to scale your business operations and revenue immediately.
                        </p>

                        <div className="book-benefits-card">
                            <h3>What We'll Cover on the Call:</h3>
                            <ul className="book-benefits-list">
                                <li>
                                    <div className="benefit-icon"><i className="fas fa-bullseye"></i></div>
                                    <div>
                                        <strong>Bottleneck Assessment</strong>
                                        <p>Rapid identification of what's currently stalling your growth.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-icon"><i className="fas fa-bolt"></i></div>
                                    <div>
                                        <strong>Actionable Insights</strong>
                                        <p>Immediate structural or marketing changes you can apply today.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-icon"><i className="fas fa-handshake"></i></div>
                                    <div>
                                        <strong>Partnership Fit</strong>
                                        <p>Clarity on whether our consulting or SaaS execution fits your roadmap.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="book-trust-section">
                            <div className="trust-item">
                                <span className="icon"><i className="fas fa-lock"></i></span>
                                <span>100% Confidential</span>
                            </div>
                            <div className="trust-item">
                                <span className="icon"><i className="fas fa-stopwatch"></i></span>
                                <span>Rapid Response</span>
                            </div>
                            <div className="trust-item">
                                <span className="icon"><i className="fas fa-tag"></i></span>
                                <span>No Sales Pressure</span>
                            </div>
                        </div>

                        <div className="book-direct-chat">
                            <p>Need a faster response? Reach out directly:</p>
                            <a href="https://wa.me/918700541657" className="whatsapp-btn outline" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i> Message on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Right Column: The Form */}
                    <div className="book-form-column">
                        <div className="book-glass-card">
                            <div className="card-header">
                                <h2>Request Your Strategy Call</h2>
                                <p>Fill out the details below to help us prepare for our session.</p>
                            </div>

                            <form onSubmit={handleWhatsAppSubmit} className="premium-form">
                                <input type="hidden" name="form_type" value="booking_call" />

                                <div className="form-group-full">
                                    <label htmlFor="name">Full Name <span className="req">*</span></label>
                                    <input type="text" id="name" name="name" placeholder="E.g. Sarah Jenkins" required />
                                </div>

                                <div className="form-row">
                                    <div className="form-group-half">
                                        <label htmlFor="email">Email Address <span className="req">*</span></label>
                                        <input type="email" id="email" name="email" placeholder="sarah@company.com" required />
                                    </div>
                                    <div className="form-group-half">
                                        <label htmlFor="phone">Phone / WhatsApp <span className="req">*</span></label>
                                        <input type="tel" id="phone" name="phone" placeholder="+91 99999 99999" required />
                                    </div>
                                </div>

                                <div className="form-group-full">
                                    <label htmlFor="business_stage">Current Business Stage <span className="req">*</span></label>
                                    <div className="select-wrapper">
                                        <select id="business_stage" name="business_stage" required defaultValue="">
                                            <option value="" disabled>Select the stage that fits best...</option>
                                            <option value="idea">Idea / Pre-Revenue</option>
                                            <option value="early">Early Startup (0-1 year)</option>
                                            <option value="growing">Growing MSME (1-3 years)</option>
                                            <option value="scaling">Scaling / Multi-brand (3+ years)</option>
                                            <option value="traditional">Traditional Business Going Digital</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group-full">
                                    <label htmlFor="goals">What is the biggest challenge holding you back?</label>
                                    <textarea id="goals" name="goals" rows="4" placeholder="Briefly describe what you're trying to solve..."></textarea>
                                </div>

                                <button type="submit" className="submit-btn glow-btn book-submit-btn">
                                    Connect on WhatsApp <span className="arrow">→</span>
                                </button>
                                <p className="form-disclaimer">By submitting, you'll be redirected to WhatsApp to send these details to Sarvanu directly.</p>
                            </form>
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
                        "@type": "ContactPage",
                        "name": "Book a Strategy Call | Sarvanu Banerjee",
                        "description": "Book a complimentary 10-15 minute strategy growth call.",
                        "url": "https://sarvanu.com/book"
                    })
                }}
            />
        </div>
    );
}
