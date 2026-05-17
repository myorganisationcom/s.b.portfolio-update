'use client';

import FadeIn from './FadeIn';

/* ─── SVG Illustrations ─────────────────────────────────────────── */

function GrowthSvg() {
  return (
    <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 340, height: 'auto' }}>
      {/* Background glow */}
      <circle cx="160" cy="130" r="110" fill="url(#glowBg)" opacity="0.18" />
      
      {/* Grid lines */}
      {[40, 80, 120, 160, 200].map((y, i) => (
        <line key={i} x1="30" y1={y} x2="290" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}
      {[60, 100, 140, 180, 220, 260].map((x, i) => (
        <line key={i} x1={x} y1="30" x2={x} y2="220" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}

      {/* Chart bars */}
      <rect x="48" y="160" width="28" height="55" rx="6" fill="url(#barGrad1)" opacity="0.8" />
      <rect x="92" y="130" width="28" height="85" rx="6" fill="url(#barGrad1)" opacity="0.85" />
      <rect x="136" y="100" width="28" height="115" rx="6" fill="url(#barGrad2)" opacity="0.9" />
      <rect x="180" y="70" width="28" height="145" rx="6" fill="url(#barGrad2)" />
      <rect x="224" y="45" width="28" height="170" rx="6" fill="url(#barGrad3)" />

      {/* Trend line */}
      <polyline
        points="62,155 106,125 150,92 194,62 238,38"
        stroke="#f5c842"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="260"
        strokeDashoffset="0"
      />

      {/* Trend dots */}
      {[[62,155],[106,125],[150,92],[194,62],[238,38]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="#f5c842" />
      ))}

      {/* Up arrow */}
      <g transform="translate(255,28)">
        <circle cx="12" cy="12" r="12" fill="rgba(245,200,66,0.18)" />
        <path d="M12 17V7M8 11l4-4 4 4" stroke="#f5c842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>

      {/* X-axis */}
      <line x1="35" y1="215" x2="280" y2="215" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

      <defs>
        <radialGradient id="glowBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5c842" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="barGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3730a3" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="barGrad3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5c842" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SystemSvg() {
  return (
    <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 340, height: 'auto' }}>
      {/* Nodes */}
      <circle cx="160" cy="60" r="30" fill="url(#nodeGold)" />
      <circle cx="70" cy="180" r="24" fill="url(#nodeBlue)" />
      <circle cx="250" cy="180" r="24" fill="url(#nodeBlue)" />
      <circle cx="160" cy="210" r="20" fill="url(#nodePurple)" />

      {/* Connection lines */}
      <line x1="160" y1="90" x2="160" y2="190" stroke="rgba(245,200,66,0.35)" strokeWidth="1.5" strokeDasharray="5 4" />
      <line x1="130" y1="78" x2="88" y2="162" stroke="rgba(59,130,246,0.35)" strokeWidth="1.5" strokeDasharray="5 4" />
      <line x1="190" y1="78" x2="232" y2="162" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" strokeDasharray="5 4" />
      <line x1="94" y1="180" x2="226" y2="180" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="5 4" />

      {/* Center icon - Strategy */}
      <text x="160" y="65" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="white">⚡</text>
      {/* Sub icons */}
      <text x="70" y="183" textAnchor="middle" dominantBaseline="middle" fontSize="15" fill="white">📊</text>
      <text x="250" y="183" textAnchor="middle" dominantBaseline="middle" fontSize="15" fill="white">🚀</text>
      <text x="160" y="213" textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="white">🔗</text>

      {/* Labels */}
      <text x="160" y="26" textAnchor="middle" fontSize="9" fill="rgba(245,200,66,0.9)" fontWeight="600" letterSpacing="1">STRATEGY</text>
      <text x="70" y="215" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.6)" fontWeight="500">ANALYTICS</text>
      <text x="250" y="215" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.6)" fontWeight="500">GROWTH</text>
      <text x="160" y="243" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.6)" fontWeight="500">SYSTEMS</text>

      {/* Orbit ring */}
      <circle cx="160" cy="60" r="48" stroke="rgba(245,200,66,0.12)" strokeWidth="1" strokeDasharray="6 4" />

      {/* Floating dots */}
      <circle cx="120" cy="130" r="3" fill="rgba(245,200,66,0.5)" />
      <circle cx="200" cy="140" r="3" fill="rgba(99,102,241,0.5)" />
      <circle cx="140" cy="155" r="2" fill="rgba(255,255,255,0.3)" />

      <defs>
        <radialGradient id="nodeGold" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f5c842" />
          <stop offset="100%" stopColor="#b45309" />
        </radialGradient>
        <radialGradient id="nodeBlue" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </radialGradient>
        <radialGradient id="nodePurple" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#3730a3" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function ImpactSvg() {
  return (
    <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 340, height: 'auto' }}>
      {/* Outer rings */}
      <circle cx="160" cy="130" r="110" stroke="rgba(245,200,66,0.06)" strokeWidth="1.5" />
      <circle cx="160" cy="130" r="85" stroke="rgba(245,200,66,0.09)" strokeWidth="1.5" />
      <circle cx="160" cy="130" r="58" stroke="rgba(245,200,66,0.14)" strokeWidth="1.5" />
      
      {/* Center */}
      <circle cx="160" cy="130" r="34" fill="url(#impactGold)" />
      <text x="160" y="134" textAnchor="middle" dominantBaseline="middle" fontSize="22" fill="#0a0f1e">🎯</text>

      {/* Satellite stats */}
      {/* Top */}
      <circle cx="160" cy="28" r="22" fill="rgba(245,200,66,0.12)" stroke="rgba(245,200,66,0.25)" strokeWidth="1" />
      <text x="160" y="24" textAnchor="middle" fontSize="9" fill="#f5c842" fontWeight="700">500+</text>
      <text x="160" y="35" textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.55)">Businesses</text>

      {/* Right */}
      <circle cx="262" cy="130" r="22" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />
      <text x="262" y="126" textAnchor="middle" fontSize="9" fill="#60a5fa" fontWeight="700">10+</text>
      <text x="262" y="137" textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.55)">Industries</text>

      {/* Bottom */}
      <circle cx="160" cy="232" r="22" fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.25)" strokeWidth="1" />
      <text x="160" y="228" textAnchor="middle" fontSize="9" fill="#a78bfa" fontWeight="700">97%</text>
      <text x="160" y="239" textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.55)">Retention</text>

      {/* Left */}
      <circle cx="58" cy="130" r="22" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.25)" strokeWidth="1" />
      <text x="58" y="126" textAnchor="middle" fontSize="9" fill="#34d399" fontWeight="700">3x</text>
      <text x="58" y="137" textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.55)">Avg ROI</text>

      {/* Connection spokes */}
      <line x1="160" y1="96" x2="160" y2="50" stroke="rgba(245,200,66,0.2)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="194" y1="130" x2="240" y2="130" stroke="rgba(59,130,246,0.2)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="160" y1="164" x2="160" y2="210" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="126" y1="130" x2="80" y2="130" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4 3" />

      <defs>
        <radialGradient id="impactGold" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#f5c842" />
          <stop offset="100%" stopColor="#92400e" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */

export default function AboutCompany() {
  const pillars = [
    {
      svg: <GrowthSvg />,
      badge: 'Our Approach',
      title: 'Growth by Design,\nNot by Chance',
      desc: `At Sarvanu.com, we believe businesses don't fail because of bad ideas—they fail because of broken systems. Our consulting methodology transforms ambition into architecture: clear strategies, streamlined operations, and measurable milestones that compound over time.`,
      points: [
        'Data-backed strategy development',
        'End-to-end operational design',
        'Revenue systems that scale autonomously',
      ],
      accentColor: '#f5c842',
    },
    {
      svg: <SystemSvg />,
      badge: 'The Methodology',
      title: 'Systems That Do\nThe Heavy Lifting',
      desc: `Every engagement begins with diagnosis—understanding where the business is leaking value, energy, and time. We then architect intelligent systems that replace chaos with clarity, turning reactive operations into proactive, high-performance machines.`,
      points: [
        'Deep-dive business diagnostics',
        'Process engineering & automation',
        'KPI frameworks & performance loops',
      ],
      accentColor: '#3b82f6',
    },
    {
      svg: <ImpactSvg />,
      badge: 'Track Record',
      title: 'Real Impact,\nMeasurable Results',
      desc: `Sarvanu.com has partnered with founders across industries—from early-stage startups to established SMEs—delivering consistent, compounding returns. Our benchmark is simple: every client should see structural improvement within 90 days.`,
      points: [
        '500+ businesses guided across 10+ sectors',
        '3x average ROI within the first year',
        '97% client retention & renewal rate',
      ],
      accentColor: '#8b5cf6',
    },
  ];

  return (
    <section id="about" style={{ padding: '110px 0 80px', background: 'var(--grad-surface)', color: 'white', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glow blobs */}
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(245,200,66,0.04) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{
              display: 'inline-block',
              marginBottom: '16px',
              padding: '6px 18px',
              background: 'rgba(245,200,66,0.08)',
              border: '1px solid rgba(245,200,66,0.25)',
              borderRadius: '50px',
              fontSize: '0.72rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#f5c842',
            }}>
              Who We Are
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '800', lineHeight: 1.2, margin: '0 auto 20px', maxWidth: '640px' }}>
              A Consultancy Firm<br />Built for <span style={{ color: '#f5c842' }}>Organizations</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.75 }}>
              Sarvanu.com is not a solo practice—it is a structured consulting organization that combines strategic intelligence with hands-on execution. We exist to help founders build businesses that outlast trends and outlive chaos.
            </p>
          </div>
        </FadeIn>

        {/* Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {pillars.map((pillar, idx) => (
            <FadeIn key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={0.1}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '50px',
                alignItems: 'center',
                flexDirection: idx % 2 === 1 ? 'row-reverse' : 'row',
              }}>
                {/* SVG side */}
                <div
                  style={{
                    order: idx % 2 === 1 ? 1 : 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '40px',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.005))',
                    borderRadius: '28px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: `0 0 60px ${pillar.accentColor}10`,
                    transition: 'box-shadow 0.4s ease',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.boxShadow = `0 0 80px ${pillar.accentColor}22`; }}
                  onMouseOut={(e) => { e.currentTarget.style.boxShadow = `0 0 60px ${pillar.accentColor}10`; }}
                >
                  {pillar.svg}
                </div>

                {/* Text side */}
                <div style={{ order: idx % 2 === 1 ? 0 : 1 }}>
                  <span style={{
                    display: 'inline-block',
                    marginBottom: '14px',
                    padding: '4px 14px',
                    background: `${pillar.accentColor}15`,
                    border: `1px solid ${pillar.accentColor}35`,
                    borderRadius: '50px',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: pillar.accentColor,
                  }}>
                    {pillar.badge}
                  </span>

                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: '800',
                    lineHeight: 1.25,
                    marginBottom: '20px',
                    whiteSpace: 'pre-line',
                  }}>
                    {pillar.title}
                  </h3>

                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '24px' }}>
                    {pillar.desc}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {pillar.points.map((pt, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}>
                        <span style={{
                          flexShrink: 0,
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: `${pillar.accentColor}20`,
                          border: `1px solid ${pillar.accentColor}50`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2.5 2.5L8 2.5" stroke={pillar.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Stats Band */}
        <FadeIn direction="up" delay={0.2}>
          <div style={{
            marginTop: '90px',
            padding: '40px 50px',
            background: 'linear-gradient(135deg, rgba(245,200,66,0.06), rgba(59,130,246,0.04))',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.07)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '30px',
            textAlign: 'center',
          }}>
            {[
              { value: '500+', label: 'Businesses Served', color: '#f5c842' },
              { value: '10+', label: 'Industries Covered', color: '#3b82f6' },
              { value: '97%', label: 'Client Retention', color: '#8b5cf6' },
              { value: '3×', label: 'Average ROI', color: '#10b981' },
              { value: '90', label: 'Days to First Impact', color: '#f97316' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '800', color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
