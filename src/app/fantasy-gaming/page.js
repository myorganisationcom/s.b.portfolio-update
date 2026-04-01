'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

/* ═══════════════════════════════════════════
   HOOKS & UTILITY COMPONENTS
   ═══════════════════════════════════════════ */

function useInView(threshold = 0.2) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
}

function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
    const [ref, visible] = useInView(0.12);
    const transforms = { up: 'translateY(50px)', left: 'translateX(-50px)', right: 'translateX(50px)' };
    return (
        <div ref={ref} className={className} style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translate(0,0)' : (transforms[direction] || transforms.up),
            transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        }}>
            {children}
        </div>
    );
}

function Counter({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const [ref, visible] = useInView(0.5);
    const animated = useRef(false);
    useEffect(() => {
        if (visible && !animated.current) {
            animated.current = true;
            let start = 0;
            const step = target / 60;
            const timer = setInterval(() => {
                start += step;
                if (start >= target) { setCount(target); clearInterval(timer); }
                else setCount(Math.floor(start));
            }, 16);
        }
    }, [visible, target]);
    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function Particles({ count = 15 }) {
    return (
        <div className="fg-particles">
            {[...Array(count)].map((_, i) => (
                <div key={i} className="fg-particle" style={{
                    left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`, animationDuration: `${3 + Math.random() * 4}s`,
                    width: `${2 + Math.random() * 4}px`, height: `${2 + Math.random() * 4}px`,
                }} />
            ))}
        </div>
    );
}

/* ═══════════════════════════════════════════
   MARQUEE STRIP
   ═══════════════════════════════════════════ */
function MarqueeStrip() {
    const items = [
        { name: 'Cricket', icon: 'fa-baseball' },
        { name: 'Football', icon: 'fa-futbol' },
        { name: 'Kabaddi', icon: 'fa-hand-fist' },
        { name: 'Tennis', icon: 'fa-table-tennis-paddle-ball' },
        { name: 'Horse Racing', icon: 'fa-horse' },
        { name: 'Basketball', icon: 'fa-basketball' },
        { name: 'Baseball', icon: 'fa-baseball' },
        { name: 'eSports', icon: 'fa-gamepad' },
        { name: 'Hockey', icon: 'fa-hockey-puck' },
        { name: 'Boxing', icon: 'fa-hand-back-fist' },
    ];
    return (
        <div className="fg-marquee-strip">
            <div className="fg-marquee-track">
                {[...items, ...items].map((s, i) => (
                    <span key={i} className="fg-marquee-item">
                        <i className={`fas ${s.icon}`} style={{ fontSize: '0.8rem' }}></i>{s.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════
   PRODUCT CARD
   ═══════════════════════════════════════════ */
function ProductCard({ icon, title, tagline, description, features, image, index }) {
    const isEven = index % 2 === 0;
    return (
        <div className="fg-product-row" data-even={isEven}>
            <Reveal className="fg-product-visual" direction={isEven ? 'left' : 'right'}>
                <div className="fg-product-image-wrap">
                    <Image src={image} alt={title} width={600} height={380} style={{ objectFit: 'cover', borderRadius: '20px' }} />
                    <div className="fg-product-image-glow" />
                </div>
            </Reveal>
            <Reveal className="fg-product-info" direction={isEven ? 'right' : 'left'} delay={0.15}>
                <div className="fg-product-icon-badge"><i className={icon}></i></div>
                <span className="fg-product-tagline">{tagline}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="fg-product-features">
                    {features.map((f, i) => (
                        <li key={i}><i className="fas fa-check fg-check"></i>{f}</li>
                    ))}
                </ul>
                <a
                    href={`https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(title)}.%20Please%20share%20details.`}
                    className="fg-btn-outline" target="_blank" rel="noopener noreferrer"
                >
                    Explore {title} <i className="fas fa-arrow-right"></i>
                </a>
            </Reveal>
        </div>
    );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */
export default function FantasyGamingPage() {

    const products = [
        {
            icon: 'fas fa-baseball',
            title: 'Fantasy Sports Platform',
            tagline: 'Launch Your Own Dream11',
            description: 'Build a world-class fantasy sports platform where users create teams, join contests, and win real prizes. Our engine handles live score integration, automated point calculation, contest management, and instant payouts — all under your brand.',
            features: ['Live score API integration for 10+ sports', 'Automated team validation & point engine', 'Contest builder with flexible prize structures', 'Full user management with KYC & wallet', 'Push notifications & referral engine'],
            image: '/fantasy-cricket.png',
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Sportsbook & Betting Platform',
            tagline: 'Your Own 1xBet / BetWay',
            description: 'Launch a full-scale sportsbook platform with pre-match & live betting, dynamic odds management, multi-sport coverage, and complete back-office controls. Built for high-volume operations with enterprise-grade reliability.',
            features: ['Pre-match & live in-play betting engine', 'Dynamic odds feed with margin controls', 'Bet Builder & accumulator support', 'Multi-currency wallet & payment gateway', 'Risk management & fraud detection'],
            image: '/sportsbook-dashboard.png',
        },
        {
            icon: 'fas fa-mobile-screen-button',
            title: 'Turnkey White-Label Solution',
            tagline: 'Launch in Weeks, Not Months',
            description: 'Get a complete, ready-to-deploy gaming platform — sportsbook, casino, payments, mobile apps, and admin panel — all pre-connected and branded to your identity. Just plug in your brand and go live.',
            features: ['Sportsbook + Casino + PAM pre-integrated', 'Android & iOS native-quality apps', 'Built-in payment & KYC infrastructure', 'CMS-powered front-end for full brand control', 'Dedicated 24/7 support team'],
            image: '/mobile-gaming-apps.png',
        },
        {
            icon: 'fas fa-display',
            title: 'Retail & Kiosk Solution',
            tagline: 'Beyond Digital — Into the Real World',
            description: 'Extend your gaming brand into physical locations with self-service betting kiosks, cashier-operated terminals, and retail management systems — all connected to your central sportsbook platform.',
            features: ['Touchscreen SSBT kiosk software', 'Cashier POS for bet placement & payouts', 'Remote monitoring of all locations', 'Fully synced with online sportsbook', 'Offline mode with auto-sync capability'],
            image: '/fantasy-football.png',
        },
    ];

    return (
        <>
            {/* ══════════ HERO ══════════ */}
            <section className="fg-hero" id="fantasy-hero">
                <Particles count={25} />
                <div className="fg-hero-bg">
                    <Image src="/fantasy-hero.png" alt="Fantasy Gaming Platform Development" fill style={{ objectFit: 'cover' }} priority />
                    <div className="fg-hero-overlay" />
                </div>

                <div className="fg-hero-container">
                    <Reveal className="fg-hero-content" direction="left">
                        <div className="fg-hero-badge">
                            <span className="fg-badge-pulse" />
                            <i className="fas fa-trophy" style={{ color: '#f59e0b' }}></i> Fantasy & Sportsbook Software Provider
                        </div>

                        <h1>
                            We Build the Platform.
                            <br />
                            <span className="fg-gradient-text">You Own the Action.</span>
                        </h1>

                        <p className="fg-hero-desc">
                            Enter the booming fantasy sports & gaming market with confidence. We give operators and entrepreneurs the <strong>technology, design, and infrastructure</strong> to launch, scale, and dominate — faster than anyone else in the industry.
                        </p>

                        <div className="fg-hero-stats-row">
                            <div className="fg-hero-stat">
                                <span className="fg-hero-stat-num"><Counter target={30} suffix="+" /></span>
                                <span className="fg-hero-stat-label">Platforms Delivered</span>
                            </div>
                            <div className="fg-hero-stat">
                                <span className="fg-hero-stat-num"><Counter target={15} suffix="L+" /></span>
                                <span className="fg-hero-stat-label">End Users Served</span>
                            </div>
                            <div className="fg-hero-stat">
                                <span className="fg-hero-stat-num"><Counter target={99.9} suffix="%" /></span>
                                <span className="fg-hero-stat-label">Platform Uptime</span>
                            </div>
                        </div>

                        <div className="fg-hero-actions">
                            <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20build%20a%20Fantasy%20Gaming%20Platform.%20Let's%20discuss." className="fg-btn-primary fg-glow" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp" /> Book a Live Walkthrough
                            </a>
                            <a href="#products" className="fg-btn-secondary">
                                <i className="fas fa-layer-group" /> Explore Products
                            </a>
                        </div>
                    </Reveal>

                    <Reveal className="fg-hero-visual" direction="right" delay={0.2}>
                        <div className="fg-phone-mockup">
                            <div className="fg-phone-screen">
                                <div className="fg-app-header">
                                    <span><i className="fas fa-gamepad" style={{ marginRight: '6px' }}></i>Your Brand Here</span>
                                    <span className="fg-app-live"><i className="fas fa-circle" style={{ fontSize: '6px', marginRight: '4px' }}></i>LIVE</span>
                                </div>
                                <div className="fg-app-match">
                                    <div className="fg-app-team"><div className="fg-team-logo"><i className="fas fa-shield-halved"></i></div><span>IND</span></div>
                                    <div className="fg-app-vs">
                                        <span className="fg-app-score">186/4</span>
                                        <span className="fg-vs-text">VS</span>
                                        <span className="fg-app-score">142/7</span>
                                    </div>
                                    <div className="fg-app-team"><div className="fg-team-logo"><i className="fas fa-shield-halved"></i></div><span>AUS</span></div>
                                </div>
                                <div className="fg-app-players">
                                    <div className="fg-app-player selected"><span className="fg-player-pts">98 pts</span><span>Captain</span></div>
                                    <div className="fg-app-player"><span className="fg-player-pts">76 pts</span><span>Vice-C</span></div>
                                    <div className="fg-app-player selected"><span className="fg-player-pts">85 pts</span><span>Bowler</span></div>
                                </div>
                                <div className="fg-app-prize"><span><i className="fas fa-trophy" style={{ color: '#f59e0b', marginRight: '6px' }}></i>Prize Pool</span><span className="fg-prize-amount">₹50 Lakh</span></div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <MarqueeStrip />

            {/* ══════════ PRODUCTS ══════════ */}
            <section className="fg-products-section" id="products">
                <div className="fg-section-container">
                    <Reveal className="fg-section-header">
                        <span className="fg-section-tag"><i className="fas fa-cubes"></i> Products & Solutions</span>
                        <h2>Everything You Need to <span className="fg-gradient-text">Launch & Scale</span></h2>
                        <p>Whether you&apos;re a first-time operator or an established brand, we have the right solution for your ambition.</p>
                    </Reveal>
                    {products.map((p, i) => <ProductCard key={i} {...p} index={i} />)}
                </div>
            </section>

            {/* ══════════ PROCESS ══════════ */}
            <section className="fg-how-section" id="process">
                <div className="fg-section-container">
                    <Reveal className="fg-section-header">
                        <span className="fg-section-tag"><i className="fas fa-gears"></i> How We Work</span>
                        <h2>From Idea to <span className="fg-gradient-text">Revenue in 4 Steps</span></h2>
                        <p>A battle-tested process that has delivered 30+ successful platforms across India and beyond.</p>
                    </Reveal>

                    <div className="fg-timeline">
                        {[
                            { num: '01', icon: 'fas fa-clipboard-list', title: 'Discovery & Strategy', desc: 'Deep-dive into your vision, target market, sport selection, monetization model, and compliance needs. We produce a detailed blueprint, user flows, and project roadmap.' },
                            { num: '02', icon: 'fas fa-palette', title: 'UI/UX Design & Branding', desc: 'Premium mobile-first design with your brand colours, logo, and identity. Every screen crafted for engagement — from onboarding to checkout to leaderboards.' },
                            { num: '03', icon: 'fas fa-bolt', title: 'Development & Integration', desc: 'Full-stack development with live score APIs, payment gateways, contest engines, admin panels, and real-time leaderboards. Rigorous load testing for millions of concurrent users.' },
                            { num: '04', icon: 'fas fa-rocket', title: 'Launch, Scale & Support', desc: 'Cloud deployment on AWS/GCP, Play Store & App Store publishing, marketing integration, and 24/7 post-launch support. We stay with you as you scale.' },
                        ].map((step, i) => (
                            <Reveal key={i} className="fg-timeline-item" delay={i * 0.12}>
                                <div className="fg-timeline-num">{step.num}</div>
                                <div className="fg-timeline-card">
                                    <span className="fg-timeline-icon"><i className={step.icon}></i></span>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ FEATURES ══════════ */}
            <section className="fg-features-section">
                <div className="fg-section-container">
                    <Reveal className="fg-section-header">
                        <span className="fg-section-tag"><i className="fas fa-star"></i> Core Capabilities</span>
                        <h2>Built for <span className="fg-gradient-text">Performance, Security & Scale</span></h2>
                        <p>Every platform we deliver is loaded with enterprise-grade features out of the box.</p>
                    </Reveal>

                    <div className="fg-features-grid">
                        {[
                            { icon: 'fas fa-chart-bar', title: 'Live Score Engine', desc: 'Real-time data feeds for Cricket, Football, Tennis, Kabaddi, and 10+ sports — accurate to the ball.' },
                            { icon: 'fas fa-wallet', title: 'Payment & Wallet System', desc: 'UPI, Paytm, RazorPay, PhonePe, net banking, and crypto. Instant deposits & instant withdrawals.' },
                            { icon: 'fas fa-sliders', title: 'Admin Command Center', desc: 'Manage users, contests, finances, KYC, promotions, and real-time analytics from one powerful dashboard.' },
                            { icon: 'fas fa-trophy', title: 'Contest & League Engine', desc: 'Auto contest creation, flexible prize pools, head-to-head, mega contests, and private leagues.' },
                            { icon: 'fas fa-shield-halved', title: 'Security & Compliance', desc: 'End-to-end encryption, OTP auth, KYC/AML compliance, anti-fraud AI, and RBI-compliant payment flows.' },
                            { icon: 'fas fa-mobile-screen', title: 'Cross-Platform Apps', desc: 'Native-quality Android & iOS apps plus responsive web — all from a single codebase for faster delivery.' },
                        ].map((f, i) => (
                            <Reveal key={i} className="fg-feature-item" delay={i * 0.08}>
                                <div className="fg-feature-icon-wrap"><i className={`${f.icon} fg-feature-icon`}></i></div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ STATS BANNER ══════════ */}
            <section className="fg-stats-banner">
                <Particles count={10} />
                <div className="fg-section-container">
                    <div className="fg-stats-row">
                        {[
                            { num: 30, suffix: '+', label: 'Platforms Delivered', icon: 'fas fa-server' },
                            { num: 15, suffix: 'L+', label: 'Active End Users', icon: 'fas fa-users' },
                            { num: 99, suffix: '.9%', label: 'Uptime Guaranteed', icon: 'fas fa-signal' },
                            { num: 10, suffix: '+', label: 'Sports Covered', icon: 'fas fa-futbol' },
                            { num: 24, suffix: '/7', label: 'Expert Support', icon: 'fas fa-headset' },
                        ].map((s, i) => (
                            <Reveal key={i} className="fg-stat-block" delay={i * 0.1}>
                                <i className={s.icon} style={{ fontSize: '1.4rem', marginBottom: '12px', display: 'block', color: 'rgba(139,92,246,0.6)' }}></i>
                                <span className="fg-stat-num"><Counter target={s.num} suffix={s.suffix} /></span>
                                <span className="fg-stat-lbl">{s.label}</span>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ TESTIMONIALS ══════════ */}
            <section className="fg-testimonials-section">
                <div className="fg-section-container">
                    <Reveal className="fg-section-header">
                        <span className="fg-section-tag"><i className="fas fa-quote-left"></i> Client Success Stories</span>
                        <h2>Trusted by <span className="fg-gradient-text">Operators & Entrepreneurs</span></h2>
                    </Reveal>

                    <div className="fg-testimonials-grid">
                        {[
                            { name: 'Rajesh Kumar', role: 'Founder, CricPlay', quote: 'They built our entire fantasy cricket platform from scratch — admin panel, payment system, live scoring — everything. We hit 50,000 users in 3 months. Absolutely incredible team.' },
                            { name: 'Ankit Patel', role: 'CEO, BetSphere', quote: 'We needed a 1xBet-level sportsbook with live betting, dynamic odds, and wallet management. Sarvanu delivered exactly that. Revenue started from day one of launch.' },
                            { name: 'Priya Sharma', role: 'COO, GameZone', quote: 'The UI/UX quality blew our users away. Zero downtime during IPL season with 2 lakh concurrent users — their auto-scaling infrastructure is battle-tested and proven.' },
                        ].map((t, i) => (
                            <Reveal key={i} className="fg-testimonial-card" delay={i * 0.12}>
                                <div className="fg-testimonial-stars">
                                    {[...Array(5)].map((_, j) => <i key={j} className="fas fa-star" style={{ color: '#f59e0b', marginRight: '3px' }}></i>)}
                                </div>
                                <p className="fg-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                                <div className="fg-testimonial-author">
                                    <span className="fg-testimonial-avatar"><i className="fas fa-user-tie"></i></span>
                                    <div>
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ PRICING — CONTACT US MODEL ══════════ */}
            <section className="fg-games-section" id="pricing">
                <div className="fg-section-container">
                    <Reveal className="fg-section-header">
                        <span className="fg-section-tag"><i className="fas fa-gem"></i> Tailored For You</span>
                        <h2>Custom Pricing, <span className="fg-gradient-text">Built Around Your Vision</span></h2>
                        <p>Every gaming platform is unique. We craft a custom quote based on your requirements, sports selection, target market, and scale. No cookie-cutter packages — just solutions that fit.</p>
                    </Reveal>

                    <div className="fg-games-grid">
                        {[
                            { title: 'Single-Sport Platform', icon: 'fas fa-rocket', color: '#8b5cf6', desc: 'Perfect for launching with one sport like Cricket or Football. Ideal for startups entering the market fast.', includes: ['1 Sport Engine', 'Android or iOS App', 'Admin Panel', 'Payment Integration', 'Post-Launch Support'] },
                            { title: 'Multi-Sport Platform', icon: 'fas fa-crown', color: '#06b6d4', desc: 'For operators targeting multiple sports with advanced features, referral systems, and cross-platform apps.', includes: ['Multiple Sports', 'Android + iOS Apps', 'Bonus & Referral Engine', 'Advanced Analytics', 'Priority Support'], featured: true },
                            { title: 'Full-Scale Enterprise', icon: 'fas fa-building', color: '#f59e0b', desc: 'End-to-end sportsbook or betting platform with odds engine, white-labelling, retail kiosks, and revenue sharing.', includes: ['Unlimited Sports', 'All Platforms (App + Web)', 'Betting / Odds Engine', 'White-Label Ready', 'Dedicated Team & SLA'] },
                        ].map((plan, i) => (
                            <Reveal key={i} className="fg-game-card-wrapper" delay={i * 0.12}>
                                <div className={`fg-game-card ${plan.featured ? 'fg-card-featured' : ''}`}>
                                    {plan.featured && <div className="fg-card-featured-bar" />}
                                    <div className="fg-game-card-body" style={{ padding: '40px 28px' }}>
                                        {plan.featured && <span className="fg-popular-badge"><i className="fas fa-fire"></i> Most Requested</span>}
                                        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                                            <i className={plan.icon} style={{ fontSize: '2rem', color: plan.color, display: 'block' }}></i>
                                        </div>
                                        <h3 className="fg-plan-name">{plan.title}</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.6, textAlign: 'center', marginBottom: '24px' }}>{plan.desc}</p>

                                        <ul className="fg-plan-features">
                                            {plan.includes.map((f, j) => (
                                                <li key={j}><i className="fas fa-check" style={{ color: plan.color, fontSize: '0.8rem' }}></i>{f}</li>
                                            ))}
                                        </ul>

                                        <a href={`https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20a%20${encodeURIComponent(plan.title)}%20solution.%20Please%20share%20a%20custom%20quote.`} className="fg-game-card-btn" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-whatsapp" /> Get Custom Quote
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ CTA ══════════ */}
            <section className="fg-cta-section">
                <Particles count={20} />
                <div className="fg-section-container">
                    <Reveal className="fg-cta-content">
                        <h2>Ready to Build Your <span className="fg-gradient-text">Gaming Empire?</span></h2>
                        <p>
                            Book a live walkthrough or speak with our product team.
                            <br />We&apos;ll understand your vision and deliver a platform that turns it into revenue.
                        </p>
                        <div className="fg-cta-actions">
                            <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20build%20a%20Fantasy%20Gaming%20Platform.%20Let's%20discuss." className="fg-btn-primary fg-glow fg-btn-lg" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp" /> Chat on WhatsApp
                            </a>
                            <a href="/book" className="fg-btn-secondary fg-btn-lg">
                                <i className="fas fa-calendar-check" /> Book a Strategy Call
                            </a>
                        </div>
                        <div className="fg-cta-trust">
                            <span><i className="fas fa-server"></i> 30+ Platforms Delivered</span>
                            <span><i className="fas fa-bolt"></i> 4-Week Fast Track</span>
                            <span><i className="fas fa-file-code"></i> 100% Source Code Ownership</span>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
