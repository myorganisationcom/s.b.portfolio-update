import FadeIn from '@/components/FadeIn';
import TestimonialSlider from '@/components/TestimonialSlider';
import FaqAccordion from '@/components/FaqAccordion';
import StickyCta from '@/components/StickyCta';

export const metadata = {
    title: "Custom SaaS & AI Solutions | Sarvanu Banerjee Strategies",
    description: "Accelerate your business with our customized, high-performance Software as a Service (SaaS) and Artificial Intelligence (AI) integrations.",
};

export default function SaasPage() {
    return (
        <>
            {/* 1. SAAS HERO SECTION */}
            <section className="saas-hero">
                <div className="container saas-hero-container">
                    <FadeIn direction="left" className="saas-hero-content">
                        <span className="saas-tagline">Next-Gen AI & Software Solutions</span>
                        <h1>Accelerate Your Growth with <span>Custom SaaS & AI</span></h1>
                        <p className="saas-hero-desc">
                            Transform your bottlenecks into automated workflows. We build scalable software and integrate powerful Artificial Intelligence designed to streamline operations and scale revenue.
                        </p>

                        <div className="saas-hero-actions">
                            <a href="#saas-pricing" className="btn-primary glow-btn">
                                Explore Pricing
                            </a>
                            <a href="/book" className="btn-secondary">
                                Book a Strategy Call
                            </a>
                        </div>

                        <div className="saas-trust-indicators">
                            <span className="trust-stars">★★★★★</span>
                            <span className="trust-text">Trusted by 150+ growing businesses</span>
                        </div>
                    </FadeIn>

                    <FadeIn direction="right" className="saas-hero-visual">
                        <div className="saas-dashboard-mockup">
                            {/* Simplified CSS Mockup representing a dashboard */}
                            <div className="mockup-header">
                                <div className="dots"><span></span><span></span><span></span></div>
                            </div>
                            <div className="mockup-body">
                                <div className="mockup-sidebar"></div>
                                <div className="mockup-content">
                                    <div className="mockup-card line-chart"></div>
                                    <div className="mockup-row">
                                        <div className="mockup-card stat"></div>
                                        <div className="mockup-card stat"></div>
                                        <div className="mockup-card stat"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 2. LOGO CLOUD (Social Proof) */}
            <section className="saas-logo-cloud">
                <p>POWERING GROWTH FOR INNOVATIVE BRANDS</p>
                <div className="logo-track">
                    <span>TechCorp</span>
                    <span>GlobalReach</span>
                    <span>NovaScale</span>
                    <span>NexusDynamics</span>
                    <span>AlphaVentures</span>
                </div>
            </section>

            {/* 3. PROBLEM VS SOLUTION */}
            <section className="saas-problem-solution">
                <div className="container">
                    <div className="solution-split">
                        <FadeIn direction="left" className="problem-box">
                            <h3>The Bottleneck</h3>
                            <ul className="pain-points">
                                <li><span className="cross">✕</span> Disconnected tools causing data silos</li>
                                <li><span className="cross">✕</span> Manual processes slowing down your team</li>
                                <li><span className="cross">✕</span> Poor customer tracking and lost leads</li>
                                <li><span className="cross">✕</span> High overhead costs for technical maintenance</li>
                            </ul>
                        </FadeIn>

                        <FadeIn direction="right" className="solution-box">
                            <h3>Our SaaS & AI Solution</h3>
                            <ul className="gain-points">
                                <li><span className="check">✓</span> Custom integrated dashboards & apps</li>
                                <li><span className="check">✓</span> AI-powered workflows and smart agents</li>
                                <li><span className="check">✓</span> Advanced analytics and predictive modeling</li>
                                <li><span className="check">✓</span> Cloud-hosted with 99.9% uptime guarantee</li>
                            </ul>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="saas-features-section" id="features">
                <div className="container">
                    <div className="section-header-center">
                        <h2>Everything You Need to Scale with AI</h2>
                        <p>Powerful software and intelligence features designed to optimize your business operations.</p>
                    </div>

                    <div className="saas-features-grid">
                        <FadeIn className="saas-feature-card">
                            <div className="feature-icon">🤖</div>
                            <h3>AI Chatbots & Agents</h3>
                            <p>Deploy intelligent assistants to handle customer support, lead qualification, and internal queries 24/7.</p>
                        </FadeIn>
                        <FadeIn className="saas-feature-card" delay={0.1}>
                            <div className="feature-icon">⚡</div>
                            <h3>Intelligent Automation</h3>
                            <p>Put complex tasks on autopilot. Trigger intelligent actions across your apps using smart workflows.</p>
                        </FadeIn>
                        <FadeIn className="saas-feature-card" delay={0.2}>
                            <div className="feature-icon">🧠</div>
                            <h3>Predictive Analytics</h3>
                            <p>Turn raw data into actionable insights using Machine Learning to forecast trends and optimize decisions.</p>
                        </FadeIn>
                        <FadeIn className="saas-feature-card">
                            <div className="feature-icon">💻</div>
                            <h3>Custom Web Apps</h3>
                            <p>Bespoke SaaS platforms tailored exactly to your operational needs with intuitive, responsive interfaces.</p>
                        </FadeIn>
                        <FadeIn className="saas-feature-card" delay={0.1}>
                            <div className="feature-icon">🔌</div>
                            <h3>API Interoperability</h3>
                            <p>Seamlessly connect legacy systems with modern AI APIs (OpenAI, Anthropic, etc.) to upgrade capabilities.</p>
                        </FadeIn>
                        <FadeIn className="saas-feature-card" delay={0.2}>
                            <div className="feature-icon">🔒</div>
                            <h3>Enterprise Security</h3>
                            <p>Bank-grade encryption and secure AI deployments ensuring your proprietary data remains private.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 5. HOW IT WORKS */}
            <section className="saas-how-it-works">
                <div className="container">
                    <div className="section-header-center">
                        <h2>Get Started in Minutes</h2>
                        <p>A seamless onboarding experience designed to get you up and running instantly.</p>
                    </div>

                    <div className="steps-container">
                        <FadeIn className="step-item" delay={0}>
                            <div className="step-number">1</div>
                            <h3>Book a Strategy Demo</h3>
                            <p>Schedule a quick call with our experts to map out your specific business needs and requirements.</p>
                        </FadeIn>
                        <div className="step-connector"></div>
                        <FadeIn className="step-item" delay={0.2}>
                            <div className="step-number">2</div>
                            <h3>Custom Setup</h3>
                            <p>Our team configures your workspace, integrates your existing tools, and migrating your data securely.</p>
                        </FadeIn>
                        <div className="step-connector"></div>
                        <FadeIn className="step-item" delay={0.4}>
                            <div className="step-number">3</div>
                            <h3>Launch & Scale</h3>
                            <p>Go live with your new automated systems and watch your operational efficiency skyrocket.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 6. PRICING SECTION */}
            <section className="saas-pricing-section" id="saas-pricing">
                <div className="container">
                    <div className="section-header-center">
                        <h2>Flexible Investment Plans</h2>
                        <p>Pricing customized to the complexity of your AI & SaaS needs. Starting from $599 and scaling with your growth.</p>
                    </div>

                    <div className="premium-single-plan">
                        <div className="plan-overview">
                            <div className="popular-badge" style={{ position: 'relative', top: '0', left: '0', transform: 'none', display: 'inline-block', marginBottom: '20px', width: 'fit-content' }}>Comprehensive Solution</div>
                            <div className="plan-name">Custom SaaS & AI Development</div>
                            <div className="plan-desc" style={{ height: 'auto' }}>End-to-end software architecture, AI integration, and workflow automation designed specifically for your growing business needs.</div>
                            <div className="plan-price" style={{ fontSize: '3.5rem', marginBottom: '10px' }}>$599<span>+</span></div>
                            <p className="price-subtext">One-time setup or retainer based on project scope.</p>
                            <a href="/book" className="plan-btn solid" style={{ maxWidth: '250px', marginBottom: '0' }}>Consult With Us</a>
                        </div>

                        <div className="plan-details">
                            <h4>What's Included:</h4>
                            <ul className="plan-features">
                                <li>Custom Dashboard UI/UX Design</li>
                                <li>Intelligent LLM & Data Integration</li>
                                <li>Automated Business Workflows</li>
                                <li>3rd Party API Integrations (Stripe, HubSpot, etc.)</li>
                                <li>Predictive Analytics & Modeling</li>
                                <li>Cloud Architecture & Database Setup</li>
                                <li>Enterprise-Grade Security Implementation</li>
                                <li>Priority Engineering Support & Maintenance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. SOCIAL PROOF (Reused) */}
            <section className="saas-testimonials-wrapper">
                <div className="container">
                    <div className="section-header-center">
                        <h2>Join Hundreds of Fast-Growing Companies</h2>
                    </div>
                    <TestimonialSlider />
                </div>
            </section>

            {/* 8. FAQ */}
            <section className="saas-faq">
                <div className="container faq-container">
                    <div className="section-header-center">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-wrapper max-w-3xl mx-auto">
                        <FaqAccordion
                            question="How long does it take to deploy the AI and software integrations?"
                            answer="For our Basic Integration plan, you can be up and running within 1-2 weeks. Custom App developments typically take 4-8 weeks depending on the complexity of the AI features and database architecture."
                        />
                        <FaqAccordion
                            question="Can we scale our AI features later?"
                            answer="Absolutely. Our architecture is designed to scale with you. We can start with a basic AI chatbot or workflow automation and upgrade to complex predictive models as your data grows."
                        />
                        <FaqAccordion
                            question="Is our proprietary business data secure with these AI models?"
                            answer="Data security is critically important. We use AES-256 encryption and work with enterprise-grade AI APIs (like OpenAI for Enterprise or Anthropic) that guarantee your data is never used to train public models."
                        />
                        <FaqAccordion
                            question="Do you offer custom integrations with our legacy systems?"
                            answer="Yes, our Custom App and Enterprise tiers include specialized integration development by our engineering team to connect modern AI tools seamlessly with your existing on-premise or legacy software."
                        />
                    </div>
                </div>
            </section>

            {/* 9. BOTTOM CTA */}
            <section className="saas-bottom-cta">
                <div className="container">
                    <div className="cta-banner">
                        <h2>Ready to streamline your operations?</h2>
                        <p>Join the fastest growing MSMEs leveraging our platform to scale their revenue.</p>
                        <div className="cta-actions">
                            <a href="/book" className="btn-primary">Book Your Free Strategy Call</a>
                            <span className="no-cc">No commitment required. Let's discuss your vision.</span>
                        </div>
                    </div>
                </div>
            </section>

            <StickyCta />
        </>
    );
}
