import FadeIn from '@/components/FadeIn';
import TestimonialSlider from '@/components/TestimonialSlider';
import FaqAccordion from '@/components/FaqAccordion';
import StickyCta from '@/components/StickyCta';
import Image from 'next/image';

export default function AiAgentService() {
    return (
        <>
            {/* 1. HERO SECTION */}
            <section className="saas-hero">
                <div className="container saas-hero-container">
                    <FadeIn direction="left" className="saas-hero-content">
                        <span className="saas-tagline">Secure & Private Artificial Intelligence</span>
                        <h1>Build & Deploy <span>Self-Hosted AI Agents</span></h1>
                        <p className="saas-hero-desc">
                            Maintain complete sovereignty over your data and customize your AI operations. We architect and deploy intelligent, self-hosted agent ecosystems tailored for your absolute control.
                        </p>

                        <div className="saas-hero-actions">
                            <a href="#deployment-plans" className="btn-primary glow-btn">
                                Explore Capabilities
                            </a>
                            <a href="/book" className="btn-secondary">
                                Discuss Your AI Vision
                            </a>
                        </div>

                        <div className="saas-trust-indicators">
                            <span className="trust-stars">★★★★★</span>
                            <span className="trust-text">Data Sovereignty & Security Guaranteed</span>
                        </div>
                    </FadeIn>

                    <FadeIn direction="right" className="saas-hero-visual">
                        <div className="ai-hero-container" style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* Glowing background behind image */}
                            <div className="ai-glow-bg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0) 70%)', filter: 'blur(40px)', zIndex: 0, animation: 'glow-pulse 3s infinite alternate' }}></div>

                            {/* Main AI Image */}
                            <Image src="/ai-hero.jpg" priority width={800} height={500} alt="Artificial Intelligence Neural Network" style={{ width: '100%', height: 'auto', borderRadius: '24px', zIndex: 1, position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }} />

                            {/* Floating Stats Badges */}
                            <div className="ai-floating-badge" style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'rgba(5, 15, 34, 0.85)', padding: '15px 20px', borderRadius: '16px', border: '1px solid rgba(59,130,246,0.4)', zIndex: 2, backdropFilter: 'blur(12px)', color: 'white', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 15px 35px rgba(0,0,0,0.4)', animation: 'float 6s ease-in-out infinite' }}>
                                <div style={{ background: 'rgba(59,130,246,0.2)', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontSize: '24px' }}>🤖</span>
                                </div>
                                <div>
                                    <div style={{ fontSize: '11px', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>System Status</div>
                                    <div style={{ color: '#25d366', fontWeight: '800', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', background: '#25d366', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px #25d366' }}></span> Agents Active</div>
                                </div>
                            </div>

                            <div className="ai-floating-badge outline" style={{ position: 'absolute', top: '-15px', left: '-15px', background: 'rgba(5, 15, 34, 0.85)', padding: '12px 18px', borderRadius: '14px', border: '1px solid rgba(245, 197, 24, 0.4)', zIndex: 2, backdropFilter: 'blur(12px)', color: 'white', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 15px 35px rgba(0,0,0,0.4)', animation: 'float 8s ease-in-out infinite reverse' }}>
                                <span style={{ fontSize: '20px' }}>⚡</span>
                                <div style={{ fontWeight: '700', fontSize: '14px', color: '#f5c518' }}>Local LLM Hosted</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 2. THE NEED FOR SELF-HOSTING */}
            <section className="saas-problem-solution">
                <div className="container">
                    <div className="section-header-center">
                        <h2>Why Self-Host Your AI Agents?</h2>
                        <p>Stop paying escalating API fees and risking vendor lock-in with major cloud providers.</p>
                    </div>
                    <div className="solution-split">
                        <FadeIn direction="left" className="problem-box">
                            <h3>The Risks of Cloud AI APIs</h3>
                            <ul className="pain-points">
                                <li><span className="cross">✕</span> Complete dependence and vendor lock-in with closed systems</li>
                                <li><span className="cross">✕</span> Privacy concerns handling sensitive or proprietary business data</li>
                                <li><span className="cross">✕</span> High, unpredictable recurring API costs for language models</li>
                                <li><span className="cross">✕</span> Service outages beyond your internal control</li>
                            </ul>
                        </FadeIn>

                        <FadeIn direction="right" className="solution-box">
                            <h3>The Self-Hosted Advantage</h3>
                            <ul className="gain-points">
                                <li><span className="check">✓</span> 100% Data Sovereignty: Prompts and data never leave your infrastructure</li>
                                <li><span className="check">✓</span> Offline capabilities & immunity to API rate-limiting or latency spikes</li>
                                <li><span className="check">✓</span> Flat operational costs rather than scaling usage fees</li>
                                <li><span className="check">✓</span> Access to high-quality Open-Source models like Llama 3 & Mixtral</li>
                            </ul>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 3. CAPABILITIES */}
            <section className="saas-features-section" id="features">
                <div className="container">
                    <div className="section-header-center">
                        <h2>Our Self-Hosted Automation Stack</h2>
                        <p>The core components we assemble to give your business an intelligent edge.</p>
                    </div>

                    <div className="saas-features-grid">
                        <FadeIn className="saas-feature-card">
                            <div className="feature-icon">🧠</div>
                            <h3>Local LLM Servers</h3>
                            <p>Using platforms like Ollama, we serve powerful models (Llama 3, Gemma) locally on your hardware or dedicated VPS instances.</p>
                        </FadeIn>
                        <FadeIn className="saas-feature-card" delay={0.1}>
                            <div className="feature-icon">⛓️</div>
                            <h3>LangChain Orchestration</h3>
                            <p>We build multi-step agent workflows. Agents have specific tasks, capabilities, and autonomy via LangChain/LangGraph & CrewAI.</p>
                        </FadeIn>
                        <FadeIn className="saas-feature-card" delay={0.2}>
                            <div className="feature-icon">💾</div>
                            <h3>Vector Memory Databases</h3>
                            <p>Seamlessly integrate local vector databases (Chroma, FAISS) for high-performance RAG (Retrieval-Augmented Generation).</p>
                        </FadeIn>
                        <FadeIn className="saas-feature-card">
                            <div className="feature-icon">🛠️</div>
                            <h3>Custom Tool Invocation</h3>
                            <p>Agents execute external actions using custom APIs, local scripts, and secure integrations without exposing internet protocols.</p>
                        </FadeIn>
                        <FadeIn className="saas-feature-card" delay={0.1}>
                            <div className="feature-icon">🐳</div>
                            <h3>Containerized Architecture</h3>
                            <p>Robust Docker and Kubernetes configurations ensuring scalability, rapid redeployment, and isolation of AI components.</p>
                        </FadeIn>
                        <FadeIn className="saas-feature-card" delay={0.2}>
                            <div className="feature-icon">⚡</div>
                            <h3>FastAPI API Wrappers</h3>
                            <p>Expose your local agents through secure HTTP endpoints to seamlessly integrate with your existing internal tools and interfaces.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 4. HOW WE DEPLOY */}
            <section className="saas-how-it-works">
                <div className="container">
                    <div className="section-header-center">
                        <h2>The Deployment Process</h2>
                        <p>We architect a reliable ecosystem designed to run efficiently on your preferred hardware.</p>
                    </div>

                    <div className="steps-container">
                        <FadeIn className="step-item" delay={0}>
                            <div className="step-number">1</div>
                            <h3>Architecture & Hardware Sizing</h3>
                            <p>We assess VRAM requirements (e.g., RTX A2000s or dedicated VPS) suited to the open-source LLMs your workflows require.</p>
                        </FadeIn>
                        <div className="step-connector"></div>
                        <FadeIn className="step-item" delay={0.2}>
                            <div className="step-number">2</div>
                            <h3>Model & Agent Development</h3>
                            <p>Scripting specialized roles, custom tool logic, and vector embeddings using frameworks like CrewAI and LlamaIndex.</p>
                        </FadeIn>
                        <div className="step-connector"></div>
                        <FadeIn className="step-item" delay={0.4}>
                            <div className="step-number">3</div>
                            <h3>Dockerized Deployment</h3>
                            <p>Packaging everything into secure, standalone containers deployed onto a dedicated Linux server or your on-premise hardware.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 5. PRICING SECTION */}
            <section className="saas-pricing-section" id="deployment-plans">
                <div className="container">
                    <div className="section-header-center">
                        <h2>Implementation Blueprints</h2>
                        <p>Strategic deployment phases built around your organization's security and intelligence goals.</p>
                    </div>

                    <div className="premium-single-plan">
                        <div className="plan-overview">
                            <div className="popular-badge" style={{ position: 'relative', top: '0', left: '0', transform: 'none', display: 'inline-block', marginBottom: '20px', width: 'fit-content' }}>Full Sovereignty</div>
                            <div className="plan-name">Custom Agent Infrastructure</div>
                            <div className="plan-desc" style={{ height: 'auto' }}>We build and hand over the keys. A complete local AI environment ensuring all data stays strictly within your borders.</div>
                            <div className="plan-price" style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Custom<span> Pricing</span></div>
                            <p className="price-subtext">Based on infrastructure complexity and agent capabilities.</p>
                            <a href="/book" className="plan-btn solid" style={{ maxWidth: '250px', marginBottom: '0' }}>Get a Quote</a>
                        </div>

                        <div className="plan-details">
                            <h4>What's Included:</h4>
                            <ul className="plan-features">
                                <li>Local LLM Setup (Ollama / vLLM)</li>
                                <li>Multi-Agent Orchestration (CrewAI / Langgraph)</li>
                                <li>Custom Tool Integration & API Wrappers</li>
                                <li>RAG Pipeline with Local Vector Databases</li>
                                <li>Hardware Specification & VPS Setup Consulting</li>
                                <li>Dockerized Container Architecture</li>
                                <li>Security Configuration & Nginx Reverse Proxies</li>
                                <li>Documentation & Handover</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TESTIMONIALS */}
            <section className="saas-testimonials-wrapper">
                <div className="container">
                    <div className="section-header-center">
                        <h2>Trusted Growth Partner</h2>
                    </div>
                    <TestimonialSlider />
                </div>
            </section>

            {/* 7. FAQ */}
            <section className="saas-faq">
                <div className="container faq-container">
                    <div className="section-header-center">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-wrapper max-w-3xl mx-auto">
                        <FaqAccordion
                            question="Are self-hosted models as smart as OpenAI's ChatGPT?"
                            answer="Open-source models like Meta's Llama 3, Mistral, and Qwen are highly capable and competitive with GPT-3.5 and GPT-4. Combined with RAG and system prompts, they perform specialized enterprise tasks exceptionally well."
                        />
                        <FaqAccordion
                            question="What kind of server hardware do I need?"
                            answer="Requirements depend heavily on the model size. For basic agent logic or small LLMs, 16GB-32GB of RAM and a mid-tier GPU (like RTX 3060/4060) easily suffice. For larger models (70B+), dedicated server racks or hired GPU cloud compute is needed."
                        />
                        <FaqAccordion
                            question="Is my data truly private?"
                            answer="Yes! This is the primary advantage. As everything runs locally on hardware you own or lease on a secure VPS, no prompt queries or company documentation are ever transmitted to third-party providers like Google or OpenAI to feed their models."
                        />
                        <FaqAccordion
                            question="Can you help integrate this with our existing CRM?"
                            answer="Absolutely. We wrap the self-hosted AI architecture in tools like FastAPI or use self-hosted integration platforms like n8n so the agent can read and write data directly into your pre-existing tools securely."
                        />
                    </div>
                </div>
            </section>

            {/* 8. BOTTOM CTA */}
            <section className="saas-bottom-cta">
                <div className="container">
                    <div className="cta-banner">
                        <h2>Ready to secure your AI operations?</h2>
                        <p>Move away from unpredictable cloud API costs and gain full control over your agents.</p>
                        <div className="cta-actions">
                            <a href="/book" className="btn-primary">Book Your Free Strategy Call</a>
                            <span className="no-cc">Let's discuss your hardware and architecture roadmap.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Self-Hosted AI Agents Ecosystem",
                        "description": "Build, deploy, and self-host custom AI agents to automate workflows with complete data sovereignty.",
                        "provider": {
                            "@type": "Organization",
                            "name": "Sarvanu Strategies",
                            "url": "https://sarvanu.com"
                        },
                        "serviceType": "AI Operations & Development",
                        "areaServed": "Worldwide",
                        "offers": {
                            "@type": "Offer",
                            "priceSpecification": {
                                "@type": "UnitPriceSpecification",
                                "priceType": "https://schema.org/MinimumAdvertisedPrice"
                            },
                            "url": "https://sarvanu.com/ai-agent-service",
                            "description": "Custom agent infrastructure built around organization security and intelligence goals."
                        }
                    })
                }}
            />

            <StickyCta />
        </>
    );
}
