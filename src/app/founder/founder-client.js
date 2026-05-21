'use client';

import { useLeadModal } from "@/components/LeadModalContext";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

/* ─── CUSTOM VECTOR GRAPHICS ────────────────────────────────────────── */

// 1. Hero Blueprint Svg
function HeroSystemSvg() {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}>
      <defs>
        {/* Gradients */}
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#f5c518" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.05" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5c518" />
          <stop offset="100%" stopColor="#ff9900" />
        </linearGradient>

        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>

        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>

        {/* Glow Filters */}
        <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Glow Background */}
      <circle cx="250" cy="250" r="220" fill="url(#heroGlow)" />

      {/* Outer Rotating Dotted Orbits */}
      <circle cx="250" cy="250" r="195" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="6 8" style={{ transformOrigin: '250px 250px', animation: 'spinClockwise 45s linear infinite' }} />
      <circle cx="250" cy="250" r="145" stroke="rgba(245,197,24,0.18)" strokeWidth="1.5" strokeDasharray="4 6" style={{ transformOrigin: '250px 250px', animation: 'spinCounterClockwise 30s linear infinite' }} />
      <circle cx="250" cy="250" r="90" stroke="rgba(59,130,246,0.22)" strokeWidth="1.5" strokeDasharray="8 4" />

      {/* Grid Mesh */}
      <line x1="250" y1="30" x2="250" y2="470" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <line x1="30" y1="250" x2="470" y2="250" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

      {/* Connection Links to Core (Colored & Thickened) */}
      <path d="M250,250 L120,150" stroke="rgba(245,197,24,0.4)" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M250,250 L380,150" stroke="rgba(59,130,246,0.4)" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M250,250 L140,340" stroke="rgba(139,92,246,0.4)" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M250,250 L360,340" stroke="rgba(16,185,129,0.4)" strokeWidth="2" strokeDasharray="4 4" />

      {/* Central Core: System Architect */}
      <g style={{ cursor: 'pointer' }}>
        <circle cx="250" cy="250" r="46" fill="#0f1d32" stroke="url(#goldGrad)" strokeWidth="3" filter="url(#glowEffect)" />
        <circle cx="250" cy="250" r="34" fill="rgba(245,197,24,0.12)" />
        <text x="250" y="259" textAnchor="middle" fontSize="28" fill="#f5c518" fontWeight="bold">⚙️</text>
        <circle cx="250" cy="250" r="58" stroke="rgba(245,197,24,0.25)" strokeWidth="1" strokeDasharray="6 4" style={{ transformOrigin: '250px 250px', animation: 'spinClockwise 15s linear infinite' }} />
      </g>

      {/* Node 1: Fintech Infrastructure (Top Right) */}
      <g transform="translate(380, 150)" style={{ cursor: 'pointer' }}>
        <circle cx="0" cy="0" r="34" fill="#0a1628" stroke="#3b82f6" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="26" fill="url(#blueGrad)" opacity="0.2" />
        <text x="0" y="6" textAnchor="middle" fontSize="18" fill="#3b82f6">💳</text>
        <text x="0" y="-44" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontWeight="700" letterSpacing="1">FINTECH</text>
      </g>

      {/* Node 2: Algorithmic Engineering (Top Left) */}
      <g transform="translate(120, 150)" style={{ cursor: 'pointer' }}>
        <circle cx="0" cy="0" r="34" fill="#0a1628" stroke="url(#goldGrad)" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="26" fill="url(#goldGrad)" opacity="0.2" />
        <text x="0" y="6" textAnchor="middle" fontSize="18" fill="#f5c518">📈</text>
        <text x="0" y="-44" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontWeight="700" letterSpacing="1">ALGORITHMS</text>
      </g>

      {/* Node 3: Enterprise Strategy (Bottom Left) */}
      <g transform="translate(140, 340)" style={{ cursor: 'pointer' }}>
        <circle cx="0" cy="0" r="34" fill="#0a1628" stroke="#8b5cf6" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="26" fill="url(#purpleGrad)" opacity="0.2" />
        <text x="0" y="6" textAnchor="middle" fontSize="18" fill="#8b5cf6">📊</text>
        <text x="0" y="48" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontWeight="700" letterSpacing="1">SYSTEMS</text>
      </g>

      {/* Node 4: Conservation & Impact (Bottom Right) */}
      <g transform="translate(360, 340)" style={{ cursor: 'pointer' }}>
        <circle cx="0" cy="0" r="34" fill="#0a1628" stroke="#10b981" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="26" fill="rgba(16,185,129,0.2)" />
        <text x="0" y="5" textAnchor="middle" fontSize="18" fill="#10b981">🌱</text>
        <text x="0" y="48" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontWeight="700" letterSpacing="1">IMPACT</text>
      </g>

      {/* Orbiting Particles (Larger & Brighter) */}
      <circle cx="250" cy="55" r="6" fill="#f5c518" style={{ transformOrigin: '250px 250px', animation: 'spinClockwise 12s linear infinite' }} />
      <circle cx="250" cy="445" r="5" fill="#3b82f6" style={{ transformOrigin: '250px 250px', animation: 'spinCounterClockwise 18s linear infinite' }} />
      <circle cx="105" cy="250" r="4.5" fill="#8b5cf6" style={{ transformOrigin: '250px 250px', animation: 'spinClockwise 22s linear infinite' }} />

      <style>{`
        @keyframes spinClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinCounterClockwise {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </svg>
  );
}

// 2. Venture Custom Icons
function StrategiesSvg() {
  return (
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#f5c518' }}>
      <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2" />
      <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2" />
      <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2" />
      <path d="M3 20h18" strokeWidth="2" />
      <polyline points="6 14 12 4 18 10 21 7" stroke="#3b82f6" strokeWidth="2" />
    </svg>
  );
}

function TexnovaSvg() {
  return (
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3b82f6' }}>
      <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2" />
      <line x1="2" y1="10" x2="22" y2="10" strokeWidth="2" />
      <circle cx="6" cy="15" r="1.5" fill="currentColor" />
      <circle cx="18" cy="15" r="1.5" fill="currentColor" />
      <path d="M12 13v4M10 15h4" stroke="#f5c518" strokeWidth="1.8" />
    </svg>
  );
}

function AlgoTradingSvg() {
  return (
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#f5c518' }}>
      <path d="M16 18V6M8 18v-8M12 18V4" strokeWidth="2" />
      <circle cx="4" cy="10" r="2" fill="#3b82f6" stroke="#3b82f6" />
      <circle cx="20" cy="14" r="2" fill="#10b981" stroke="#10b981" />
      <rect x="10" y="7" width="4" height="6" rx="1" fill="currentColor" />
    </svg>
  );
}

function SundarbanSvg() {
  return (
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10b981' }}>
      {/* Landscape lines / mountains / water / sun */}
      <circle cx="12" cy="8" r="4" fill="url(#sunGrad)" stroke="none" />
      <path d="M2 18c4-4 6-4 10 0s4 4 10 0" strokeWidth="2" />
      <path d="M4 21c3-2 5-2 8 0s5 2 8 0" strokeWidth="1.5" strokeOpacity="0.6" />
      <path d="M6 14l2-4 2 4M12 13l2-5 3 5" strokeWidth="1.8" />
      <defs>
        <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5c518" />
          <stop offset="100%" stopColor="#ff9900" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FundInvestmentSvg() {
  return (
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#8b5cf6' }}>
      <line x1="4" y1="20" x2="20" y2="20" strokeWidth="2" />
      <line x1="4" y1="4" x2="20" y2="4" strokeWidth="2" />
      <path d="M6 4v16M18 4v16" strokeWidth="2" />
      <path d="M12 8v8M10 10l2-2 2 2" strokeWidth="2" />
    </svg>
  );
}

function TrustSvg() {
  return (
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#ec4899' }}>
      <path d="M12 21a9 9 0 0 0 9-9c0-5-4-9-9-9s-9 4-9 9a9 9 0 0 0 9 9z" strokeWidth="1.8" />
      <path d="M12 8c-1.5-2-4-1-4 1.5C8 12.5 12 16 12 16s4-3.5 4-6.5c0-2.5-2.5-3.5-4-1.5z" fill="currentColor" />
    </svg>
  );
}

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
      svg: <StrategiesSvg />,
      desc: "Strategic advisory for founders and scaling organizations. We build institutional systems, optimize operational architecture, and unlock predictable, repeatable cash flow cycles.",
      href: "https://sarvanu.com",
      color: "#f5c518"
    },
    {
      id: "texnova",
      title: "Texnova",
      tag: "Fintech · Cryptographic Rails",
      svg: <TexnovaSvg />,
      desc: "High-throughput business-to-business payment infrastructure. Multi-party computation wallet security, instant settlements, and global off-ramp structures with ultra-low transaction overhead.",
      href: "https://texnova.org",
      color: "#3b82f6"
    },
    {
      id: "algotrading",
      title: "AlgoTradingBot",
      tag: "Quant Trading · Automation",
      svg: <AlgoTradingSvg />,
      desc: "Automated forex market strategy deployment and expert advisors. Developing mathematical algorithm models designed to capitalize on macro liquidity structures on MT4 and MT5 protocols.",
      href: "https://algotradingbot.online",
      color: "#f5c518"
    },
    {
      id: "tourism",
      title: "Sundarban Tourism",
      tag: "Eco-Preservation & Safaris",
      svg: <SundarbanSvg />,
      desc: "Ecologically sensitive guided exploration programs in the Sunderbans. Championing cultural conservation, bio-diversity protection, and hyper-local economic development inside global wetlands.",
      href: "https://sundarbantourism.online",
      color: "#10b981"
    },
    {
      id: "fund",
      title: "Fund Investment Group",
      tag: "Capital Allocations & Growth",
      svg: <FundInvestmentSvg />,
      desc: "Structured alternative asset investment entity. Directing resources and risk-adjusted capital toward high-yield real economy systems and robust technology portfolios globally.",
      href: "https://fundinvestmentgroup.com",
      color: "#8b5cf6"
    },
    {
      id: "trust",
      title: "Sarvanu Trust",
      tag: "Social Welfare & Impact",
      svg: <TrustSvg />,
      desc: "Registered philanthropic institution dedicated to democratizing quality basic education, supporting rural primary healthcare networks, and assisting communities experiencing critical duress.",
      href: "#",
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

                {/* CTAs */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  <button 
                    onClick={openBook}
                    className="glow-btn"
                    style={{ padding: '14px 28px', borderRadius: '50px', background: '#f5c518', color: '#0a1628', fontSize: '0.95rem', fontWeight: '700', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    Private Strategy Consultation
                  </button>
                  <a 
                    href="#ventures"
                    style={{ padding: '14px 28px', borderRadius: '50px', background: 'rgba(255,255,255,0.05)', color: '#ffffff', fontSize: '0.95rem', fontWeight: '600', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', transition: 'all 0.3s ease', textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                  >
                    Venture Ecosystem ↓
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Interactive SVG Graphic */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%' }}>
              <FadeIn direction="right" delay={0.2} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
                  {/* Decorative glowing backdrops */}
                  <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(20px)', zIndex: 0 }} />
                  <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <HeroSystemSvg />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: PHILOSOPHY & PLAYBOOK ─── */}
      <section style={{ padding: '80px 0', background: 'var(--grad-surface)', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
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
                      boxShadow: isHovered ? `0 12px 30px ${ven.color}15` : 'none'
                    }}
                    onMouseEnter={() => setHoveredVenture(ven.id)}
                    onMouseLeave={() => setHoveredVenture(null)}
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
                        <a 
                          href={ven.href} 
                          target={ven.href !== "#" ? "_blank" : undefined}
                          rel="noreferrer" 
                          style={{ 
                            fontSize: '0.9rem', 
                            fontWeight: '700', 
                            color: isHovered ? '#ffffff' : 'rgba(255,255,255,0.85)', 
                            textDecoration: 'none', 
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
                        </a>
                      </div>

                    </div>
                  </article>
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

      {/* ─── SECTION 5: PREMIUM CTA BLOCK ─── */}
      <section style={{ padding: '100px 0', background: 'radial-gradient(circle at bottom, rgba(245,197,24,0.04), transparent 50%)', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <FadeIn direction="up">
            <div style={{ 
              padding: '60px 40px', 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005))', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '32px', 
              textAlign: 'center', 
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Glow particle */}
              <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '100px', background: 'radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }} />

              <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: '#f5c518', display: 'inline-block', marginBottom: '16px' }}>INITIATE COLLABORATION</span>
              
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '800', lineHeight: '1.2', margin: '0 0 20px', color: '#ffffff' }}>
                Looking to Build or Scale a <span style={{ background: 'linear-gradient(135deg, #f5c518 0%, #ff9900 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Resilient Enterprise?</span>
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', maxWidth: '620px', margin: '0 auto 36px' }}>
                Whether you need to review strategic operational bottlenecks, design secure blockchain-powered ledgers, develop custom algorithmic logic, or evaluate investment positions, let&apos;s map the framework together.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                <button 
                  onClick={openBook}
                  className="glow-btn"
                  style={{ padding: '16px 36px', borderRadius: '50px', background: '#f5c518', color: '#0a1628', fontSize: '1rem', fontWeight: '700', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Schedule Private Strategic Session
                </button>
                <a 
                  href="mailto:info@sarvanu.com"
                  style={{ padding: '16px 36px', borderRadius: '50px', background: 'rgba(255,255,255,0.03)', color: '#ffffff', fontSize: '1rem', fontWeight: '600', border: '1px solid rgba(255,255,255,0.12)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', transition: 'all 0.3s ease', textDecoration: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                >
                  Secure Direct Email
                </a>
              </div>

              {/* Direct channels summary */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                  <i className="fab fa-whatsapp" style={{ color: '#25d366', fontSize: '1.1rem' }} />
                  WhatsApp Direct: <a href="https://wa.me/918700541657" target="_blank" rel="noreferrer" style={{ color: '#ffffff', fontWeight: '600', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = '#f5c518'} onMouseLeave={e => e.target.style.color = '#ffffff'}>+91 87005 41657</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                  <i className="far fa-envelope" style={{ color: 'var(--clr-gold)', fontSize: '1rem' }} />
                  Administrative Contact: <a href="mailto:info@sarvanu.com" style={{ color: '#ffffff', fontWeight: '600', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = '#f5c518'} onMouseLeave={e => e.target.style.color = '#ffffff'}>info@sarvanu.com</a>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
