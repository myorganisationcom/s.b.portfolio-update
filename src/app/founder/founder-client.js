'use client';

import { useLeadModal } from "@/components/LeadModalContext";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

import { Briefcase, CreditCard, Activity, TreePine, Landmark, HeartHandshake } from 'lucide-react';

/* ─── MAIN COMPONENT ───────────────────────────────────────────── */

export default function FounderClient() {
  const { openBook } = useLeadModal();
  const [hoveredVenture, setHoveredVenture] = useState(null);

  const stats = [
    { value: "6", label: "Ventures Founded" },
    { value: "5+", label: "Global Industries" },
    { value: "12+", label: "Years Scaling" },
    { value: "∞", label: "System Engineering" }
  ];

  const ventures = [
    {
      id: "strategies",
      title: "Sarvanu Strategies",
      tag: "Business Strategy · MSME Scale",
      svg: <Briefcase size={36} strokeWidth={1.5} color="#f5c518" />,
      desc: "Strategic advisory for founders and scaling organizations. We build institutional systems, optimize operational architecture, and unlock predictable, repeatable cash flow cycles.",
      href: "https://sarvanu.com",
      color: "#f5c518"
    },
    {
      id: "texnova",
      title: "Texnova",
      tag: "Fintech · Cryptographic Rails",
      svg: <CreditCard size={36} strokeWidth={1.5} color="#3b82f6" />,
      desc: "High-throughput business-to-business payment infrastructure. Multi-party computation wallet security, instant settlements, and global off-ramp structures with ultra-low transaction overhead.",
      href: "https://texnova.org",
      color: "#3b82f6"
    },
    {
      id: "algotrading",
      title: "AlgoTradingBot",
      tag: "Quant Trading · Automation",
      svg: <Activity size={36} strokeWidth={1.5} color="#f5c518" />,
      desc: "Automated forex market strategy deployment and expert advisors. Developing mathematical algorithm models designed to capitalize on macro liquidity structures on MT4 and MT5 protocols.",
      href: "https://algotradingbot.online",
      color: "#f5c518"
    },
    {
      id: "tourism",
      title: "Sundarban Tourism",
      tag: "Eco-Preservation & Safaris",
      svg: <TreePine size={36} strokeWidth={1.5} color="#10b981" />,
      desc: "Ecologically sensitive guided exploration programs in the Sunderbans. Championing cultural conservation, bio-diversity protection, and hyper-local economic development inside global wetlands.",
      href: "https://sundarbantourism.online",
      color: "#10b981"
    },
    {
      id: "fund",
      title: "Fund Investment Group",
      tag: "Capital Allocations & Growth",
      svg: <Landmark size={36} strokeWidth={1.5} color="#8b5cf6" />,
      desc: "Structured alternative asset investment entity. Directing resources and risk-adjusted capital toward high-yield real economy systems and robust technology portfolios globally.",
      href: "https://fundinvestmentgroup.com",
      color: "#8b5cf6"
    },
    {
      id: "trust",
      title: "Sarvanu Trust",
      tag: "Social Welfare & Impact",
      svg: <HeartHandshake size={36} strokeWidth={1.5} color="#ec4899" />,
      desc: "Registered philanthropic institution dedicated to democratizing quality basic education, supporting rural primary healthcare networks, and assisting communities experiencing critical duress.",
      href: "https://sarvanutrust.org",
      color: "#ec4899"
    }
  ];

  const playbook = [
    {
      num: "01",
      title: "Intelligent Diagnostics",
      desc: "Before laying down strategy, we look directly at where leakages occur—whether in operational overhead, marketing conversions, or engineering bottlenecks. Precision insight dictates architecture."
    },
    {
      num: "02",
      title: "System Architecture",
      desc: "Chaos is the default state of unmonitored systems. We map and structure clean, digital processes, KPI tracking lines, and automated feedback systems so operations run smoothly."
    },
    {
      num: "03",
      title: "Compounding Scaling",
      desc: "Scaling is not a single sprint; it is an exercise in compounding. By stabilizing margins and establishing recurring client pathways, we transition businesses into self-sustaining assets."
    }
  ];

  return (
    <div style={{ background: '#0a1628', color: '#ffffff', overflow: 'hidden' }}>
      
      {/* ─── SECTION 1: HERO BLOCK ─── */}
      <section style={{ position: 'relative', padding: '100px 0 60px', background: 'radial-gradient(circle at top right, rgba(245,197,24,0.05), transparent 60%)' }}>
        {/* Ambient mesh lines */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              <FadeIn direction="left">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(245,197,24,0.07)', border: '1px solid rgba(245,197,24,0.2)', marginBottom: '20px' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#f5c518' }}>GLOBAL VENTURE BUILDER</span>
                </div>
                
                <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 15px' }}>
                  Sarvanu <span style={{ background: 'linear-gradient(135deg, #f5c518 0%, #ff9900 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Banerjee</span>
                </h1>
                
                <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.15rem)', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6', marginBottom: '28px', maxWidth: '540px', fontWeight: '400' }}>
                  Systems architect, venture founder, and quant strategist. Based in Delhi, India, operating high-performance systems spanning fintech infrastructure, algorithmic trading, advisory growth, and eco-conservation.
                </p>

                {/* Glassmorphic Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
                  {stats.map((st, i) => (
                    <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', backdropFilter: 'blur(8px)' }}>
                      <div style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', fontWeight: '800', background: 'linear-gradient(135deg, #f5c518 0%, #ff9900 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '1' }}>{st.value}</div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', fontWeight: '500', marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{st.label}</div>
                    </div>
                  ))}
                </div>

                {/* Learn More */}
                <a 
                  href="#philosophy"
                  onClick={(e) => { e.preventDefault(); document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' }); }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 28px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)', color: '#ffffff', fontSize: '0.92rem', fontWeight: '600', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s ease', marginTop: '8px', backdropFilter: 'blur(6px)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(245,197,24,0.4)'; e.currentTarget.style.background = 'rgba(245,197,24,0.08)'; e.currentTarget.style.color = '#f5c518'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#ffffff'; }}
                >
                  Learn More <span style={{ fontSize: '1.1rem', animation: 'bounceDown 2s ease infinite' }}>↓</span>
                </a>
                <style>{`
                  @keyframes bounceDown {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(5px); }
                  }
                `}</style>

                </FadeIn>
            </div>

            {/* Right: Founder Photo */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%' }}>
              <FadeIn direction="right" delay={0.2} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
                  {/* Ambient glow behind */}
                  <div style={{ position: 'absolute', top: '15%', left: '15%', width: '70%', height: '70%', background: 'radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', zIndex: 0 }} />

                  {/* Main Image Card */}
                  <div style={{ 
                    position: 'relative', zIndex: 1, 
                    borderRadius: '24px', 
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03) inset',
                  }}>
                    {/* Gold accent bar on left */}
                    <div style={{ position: 'absolute', top: '10%', left: 0, width: '3px', height: '40%', background: 'linear-gradient(180deg, #f5c518, #ff9900)', borderRadius: '0 4px 4px 0', zIndex: 2 }} />
                    
                    <img 
                      src="/Sarvanu Banerjee.jpeg" 
                      alt="Sarvanu Banerjee" 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        display: 'block', 

                        objectFit: 'cover',
                        filter: 'brightness(0.95) contrast(1.05)',
                      }}
                    />

                    {/* Subtle bottom gradient overlay for depth */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(transparent, rgba(10,22,40,0.7))', pointerEvents: 'none' }} />
                    
                    {/* Name overlay at bottom */}
                    <div style={{ position: 'absolute', bottom: '20px', left: '24px', zIndex: 2 }}>
                      <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Sarvanu Banerjee</div>
                      <div style={{ fontSize: '0.78rem', color: 'rgba(245,197,24,0.9)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Founder & Strategist</div>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div style={{ position: 'absolute', top: '-6px', right: '-6px', width: '50px', height: '50px', borderTop: '2px solid rgba(245,197,24,0.3)', borderRight: '2px solid rgba(245,197,24,0.3)', borderRadius: '0 12px 0 0', zIndex: 2 }} />
                  <div style={{ position: 'absolute', bottom: '-6px', left: '-6px', width: '50px', height: '50px', borderBottom: '2px solid rgba(59,130,246,0.2)', borderLeft: '2px solid rgba(59,130,246,0.2)', borderRadius: '0 0 0 12px', zIndex: 2 }} />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: PHILOSOPHY & PLAYBOOK ─── */}
      <section id="philosophy" style={{ padding: '80px 0', background: 'var(--grad-surface)', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'center' }}>
            
            {/* Philosophy quote */}
            <FadeIn direction="left">
              <div style={{ position: 'relative', padding: '40px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '24px' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgba(245,197,24,0.15)', position: 'absolute', top: '20px', left: '20px', zIndex: 0 }}>
                  <path d="M3 13h5v5H3v-5zm9 0h5v5h-5v-5zm-3-5a3 3 0 0 0-3 3v2h3v-2H6v-3a3 3 0 0 0 3-3zm9 0a3 3 0 0 0-3 3v2h3v-2h-3v-3a3 3 0 0 0 3-3z" fill="currentColor"/>
                </svg>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <blockquote style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)', fontWeight: '600', fontStyle: 'italic', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)', margin: '0 0 20px' }}>
                    &ldquo;The most resilient systems aren&apos;t built on luck—they are architected on clear principles, hard data, and uncompromising execution.&rdquo;
                  </blockquote>
                  <cite style={{ display: 'block', fontSize: '0.9rem', color: '#f5c518', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px' }}>— Sarvanu Banerjee</cite>
                </div>
              </div>
            </FadeIn>

            {/* Strategy copy */}
            <FadeIn direction="right" delay={0.1}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '8px' }}>THE OPERATING MANUAL</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)', fontWeight: '800', lineHeight: '1.2', margin: '0 0 16px', color: '#ffffff' }}>
                  Scaling Businesses Through <span style={{ color: '#f5c518' }}>Systemic Rigour</span>
                </h2>
                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Across business consulting, cryptographic engineering, high-frequency currency operations, or community programs, the playbook remains consistent. Identify structural gaps, establish self-reinforcing loops, and execute with precision. 
                </p>
              </div>
            </FadeIn>

          </div>

          {/* Strategy Playbook Steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '60px' }}>
            {playbook.map((step, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div style={{ padding: '30px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '20px', height: '100%', boxSizing: 'border-box', transition: 'all 0.3s ease' }}
                     onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(245,197,24,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                     onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)'; e.currentTarget.style.background = 'rgba(255,255,255,0.01)'; }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'rgba(245,197,24,0.1)', lineHeight: '1', marginBottom: '16px' }}>{step.num}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: THE VENTURE ECOSYSTEM ─── */}
      <section id="ventures" style={{ padding: '100px 0', position: 'relative' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: '#f5c518', display: 'inline-block', marginBottom: '12px' }}>THE SYSTEM PORTFOLIO</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '800', lineHeight: '1.2', margin: 0 }}>
              The Venture <span style={{ background: 'linear-gradient(135deg, #f5c518 0%, #ff9900 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ecosystem</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '14px auto 0', lineHeight: '1.6' }}>
              6 active organizations operating globally, built on a unified foundation of clarity, systemization, and structural value.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {ventures.map((ven) => {
              const isHovered = hoveredVenture === ven.id;
              return (
                <FadeIn key={ven.id} direction="up">
                  <a 
                    href={ven.href} 
                    target={ven.href !== "#" ? "_blank" : undefined}
                    rel="noreferrer" 
                    style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                    onMouseEnter={() => setHoveredVenture(ven.id)}
                    onMouseLeave={() => setHoveredVenture(null)}
                  >
                    <article 
                      style={{ 
                        padding: '36px 30px', 
                        background: 'rgba(255,255,255,0.02)', 
                        border: '1px solid rgba(255,255,255,0.04)', 
                        borderRadius: '24px', 
                        height: '100%', 
                        boxSizing: 'border-box', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        position: 'relative', 
                        overflow: 'hidden', 
                        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                        borderColor: isHovered ? ven.color : 'rgba(255,255,255,0.04)',
                        boxShadow: isHovered ? `0 12px 30px ${ven.color}15` : 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {/* Corner decorative light */}
                      <div style={{ 
                        position: 'absolute', 
                        top: 0, 
                        right: 0, 
                        width: '120px', 
                        height: '120px', 
                        background: `radial-gradient(circle at top right, ${ven.color}12, transparent 70%)`, 
                        zIndex: 0 
                      }} />

                      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        
                        {/* Top Row: Icon & Tag */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                          <div style={{ padding: '12px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                            {ven.svg}
                          </div>
                          <span style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.45)' }}>
                            {ven.id.toUpperCase()}
                          </span>
                        </div>

                        {/* Header */}
                        <div style={{ marginBottom: '16px' }}>
                          <span style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: ven.color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>{ven.tag}</span>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>{ven.title}</h3>
                        </div>

                        {/* Body */}
                        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6', margin: '0 0 28px', flexGrow: 1 }}>
                          {ven.desc}
                        </p>

                        {/* Footer Actions */}
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                          <div 
                            style={{ 
                              fontSize: '0.9rem', 
                              fontWeight: '700', 
                              color: isHovered ? '#ffffff' : 'rgba(255,255,255,0.85)', 
                              display: 'inline-flex', 
                              alignItems: 'center', 
                              gap: '6px', 
                              transition: 'all 0.3s ease' 
                            }}
                          >
                            Launch Venture Site 
                            <span style={{ 
                              transform: isHovered ? 'translateX(4px)' : 'translateX(0)', 
                              transition: 'transform 0.3s ease',
                              color: ven.color
                            }}>→</span>
                          </div>
                        </div>

                      </div>
                    </article>
                  </a>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: INTERACTIVE EXPERTISE MATRIX ─── */}
      <section style={{ padding: '80px 0', background: 'var(--grad-surface)', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '10px' }}>SYSTEMIC CAPABILITIES</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '800', margin: 0 }}>Core Areas of <span style={{ color: '#f5c518' }}>Expertise</span></h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', maxWidth: '800px', margin: '0 auto' }}>
            {[
              'Enterprise Business Strategy', 'Process Automations', 'High-Frequency Forex Algorithms', 
              'Cryptographic Ledger Solutions', 'Multi-Party Computation Wallets', 'Structured Capital Allocations', 
              'Alternative Asset Management', 'MSME Scale Operations', 'Eco-Tourism Preservation', 
              'Community Educational Systems', 'Rural Healthcare Support', 'Quantitative Risk Modeling', 
              'High-Growth Fintech Architecture', 'Systemic Optimization'
            ].map((skill, index) => (
              <FadeIn key={skill} direction="up" delay={index * 0.05}>
                <span 
                  style={{ 
                    display: 'inline-block',
                    padding: '10px 20px', 
                    borderRadius: '50px', 
                    background: 'rgba(255,255,255,0.02)', 
                    border: '1px solid rgba(255,255,255,0.06)', 
                    color: 'rgba(255,255,255,0.85)', 
                    fontSize: '0.88rem', 
                    fontWeight: '500', 
                    cursor: 'default',
                    transition: 'all 0.3s ease' 
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(245,197,24,0.35)'; e.currentTarget.style.background = 'rgba(245,197,24,0.04)'; e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
                >
                  {skill}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
}
