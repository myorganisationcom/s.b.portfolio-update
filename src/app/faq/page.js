import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
    title: "Frequently Asked Questions | Sarvanu",
    description: "Common questions about business growth consulting, strategic planning, systems, and SaaS development by Sarvanu.",
    openGraph: {
        title: "Frequently Asked Questions | Sarvanu",
        description: "Common questions about business growth consulting, strategic planning, systems, and SaaS development by Sarvanu.",
        url: "https://sarvanu.com/faq",
        images: ["/og-image.png"],
    },
    twitter: {
        title: "Frequently Asked Questions | Sarvanu",
        description: "Common questions about business growth consulting, strategic planning, systems, and SaaS development by Sarvanu.",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "https://sarvanu.com/faq",
    },
};

export default function FAQ() {
    return (
        <>
            <section className="faq-hero">
                <h1>Frequently Asked Questions</h1>
                <p>Everything you need to know about working with a business consultant.</p>
            </section>

            <div className="faq-container">
                {/* Pricing & Packages */}
                <div className="faq-category">
                    <h2>💰 Pricing & Packages</h2>
                </div>

                <FaqAccordion
                    question="How much does business consulting cost in India?"
                    answer="Business consulting costs vary based on the scope of work. I offer three packages: <strong>Basic at ₹15,000/month</strong> for solopreneurs and early startups, <strong>Growth at ₹30,000/month</strong> for MSMEs and agencies needing comprehensive support, and <strong>Premium at ₹55,000/month</strong> for multi-brand founders requiring full-scale transformation including on-call support."
                />

                <FaqAccordion
                    question="Are there any hidden fees or additional charges?"
                    answer="No hidden fees. The package price is all-inclusive for the services listed. If you need additional specialized services like pitch deck creation or full CRM implementation, those are quoted separately and discussed upfront."
                />

                <FaqAccordion
                    question="Is there a free consultation before committing?"
                    answer={'Yes! I offer a complimentary 10-15 minute strategy call to understand your challenges, assess if we\'re a good fit, and provide initial direction. No obligation, no high-pressure sales. <a href="/book">Book your free call here.</a>'}
                />

                {/* What We Do */}
                <div className="faq-category">
                    <h2>🛠️ What We Do</h2>
                </div>

                <FaqAccordion
                    question="What does a business consultant actually do?"
                    answer="A business consultant provides expert guidance on strategy, operations, marketing, and growth. This includes: business audits to identify bottlenecks, creating SOPs for consistent operations, marketing plans and funnels, brand identity development, CRM setup, hiring frameworks, and ongoing strategic support to help you scale systematically rather than chaotically."
                />

                <FaqAccordion
                    question="Do you help with implementation or just give advice?"
                    answer="Both! I provide strategic direction AND actionable implementation support. Depending on your package, you'll get templates, frameworks, hands-on setup (like CRM configuration), and regular check-ins to ensure you're actually executing—not just planning."
                />

                <FaqAccordion
                    question="What industries do you work with?"
                    answer="I work with diverse industries including: digital agencies, tech startups, manufacturing, education, healthcare, e-commerce, professional services (lawyers, CAs), and traditional family businesses looking to modernize. The principles of good business—systems, clarity, marketing—are universal."
                />

                {/* Results & Expectations */}
                <div className="faq-category">
                    <h2>📈 Results & Expectations</h2>
                </div>

                <FaqAccordion
                    question="How long does it take to see results?"
                    answer="Most clients experience increased clarity and direction within the first 2-4 weeks. Measurable business results—like improved operations, more leads, or increased revenue—typically appear within 2-3 months of consistent implementation. The speed depends on how actively you engage with the process."
                />

                <FaqAccordion
                    question="Do I need consulting if I already have a team?"
                    answer="Especially if you have a team! Many founders struggle because their team lacks direction, roles are unclear, or decisions bottleneck at the top. A consultant helps create role clarity, decision-making frameworks, and scalable processes so your team can operate independently while you focus on strategic growth."
                />

                <FaqAccordion
                    question="What happens if I'm not satisfied?"
                    answer="I operate on monthly engagements with no long-term lock-in. If after the first month you feel it's not working (rare but possible), you're free to stop. My goal is results, not recurring revenue from unhappy clients. That said, I only take on clients I genuinely believe I can help."
                />

                {/* Still Have Questions */}
                <div className="still-have-questions">
                    <h3>Still Have Questions?</h3>
                    <p>Can't find what you're looking for? Let's chat directly.</p>
                    <a href="/book" className="btn-primary">📞 Book a Free Call</a>
                    <br /><br />
                    <a href="https://wa.me/918700541657" className="btn-secondary" target="_blank" rel="noopener noreferrer">💬 Chat on WhatsApp</a>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does business consulting cost in India?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Business consulting costs vary based on the scope. Sarvanu offers three packages: Basic at ₹15,000/month for solopreneurs, Growth at ₹30,000/month for MSMEs and agencies, and Premium at ₹55,000/month for multi-brand founders requiring comprehensive support."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What does a business consultant actually do?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A business consultant provides expert guidance on strategy, operations, marketing, and growth. This includes business audits, creating SOPs, marketing plans, brand identity work, CRM setup, hiring frameworks, and ongoing strategic support to help you scale systematically."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does it take to see results from consulting?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most clients see initial improvements in clarity and direction within the first 2-4 weeks. Measurable business results like increased revenue, better operations, and improved team performance typically appear within 2-3 months of consistent implementation."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do I need consulting if I already have a team?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, especially if your team lacks direction or you're scaling. A consultant helps create role clarity, decision-making frameworks, and scalable processes so your team can operate independently while you focus on strategic growth."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What industries does Sarvanu work with?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sarvanu works with diverse industries including digital agencies, tech startups, manufacturing, education, healthcare, e-commerce, professional services, and traditional family businesses looking to modernize."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is there a free consultation before committing?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! We offer a complimentary 10-15 minute strategy call to understand your challenges, assess fit, and provide initial direction. No obligation, no high-pressure sales. Book your free call at sarvanu.com/book"
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
