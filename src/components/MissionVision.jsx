'use client';

import FadeIn from './FadeIn';

export default function MissionVision() {
  const coreValues = [
    { icon: "fa-chess-knight", title: "Strategic Precision", desc: "No guesswork. Every move is calculated, data-backed, and aligned with long-term goals." },
    { icon: "fa-cogs", title: "Systemized Execution", desc: "Ideas are cheap. We build the operational machinery to turn ambitious visions into reality." },
    { icon: "fa-chart-line", title: "Sustainable Scale", desc: "Growth without foundation leads to chaos. We focus on scaling that is manageable and profitable." },
    { icon: "fa-handshake", title: "Radical Transparency", desc: "Honest feedback, clear expectations, and direct communication in every partnership." }
  ];

  return (
    <section className="mission-vision-section" style={{ padding: '100px 0', background: 'var(--grad-surface)', color: 'white', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background glowing effects */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ display: 'inline-block', marginBottom: '15px', padding: '6px 14px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--clr-gold)' }}>Our Driving Force</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: '800' }}>Purpose & <span style={{ color: 'var(--clr-gold)' }}>Philosophy</span></h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          {/* Mission Card */}
          <FadeIn direction="up" delay={0.1}>
            <div 
              style={{ 
                height: '100%', 
                padding: '40px', 
                background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.08)', 
                position: 'relative', 
                overflow: 'hidden', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default'
              }} 
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.4)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--clr-gold)' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div style={{ width: '55px', height: '55px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--clr-gold)', fontSize: '1.6rem' }}>
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 style={{ fontSize: '1.8rem', margin: 0, fontWeight: '700' }}>Our Mission</h3>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.85)', marginBottom: '25px' }}>
                To empower businesses to break through growth ceilings using clarity, structured systems, and battle-tested execution strategies.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: 'var(--clr-gold)' }}></i> Eliminating operational chaos</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: 'var(--clr-gold)' }}></i> Architecting scalable workflows</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: 'var(--clr-gold)' }}></i> Ensuring long-term financial stability</li>
              </ul>
            </div>
          </FadeIn>
          
          {/* Vision Card */}
          <FadeIn direction="up" delay={0.2}>
            <div 
              style={{ 
                height: '100%', 
                padding: '40px', 
                background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.08)', 
                position: 'relative', 
                overflow: 'hidden', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default'
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.4)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#3b82f6' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div style={{ width: '55px', height: '55px', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', fontSize: '1.6rem' }}>
                  <i className="fas fa-eye"></i>
                </div>
                <h3 style={{ fontSize: '1.8rem', margin: 0, fontWeight: '700' }}>Our Vision</h3>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.85)', marginBottom: '25px' }}>
                To build a globally recognized consulting benchmark that sets the standard for how modern, high-performance businesses are built, managed, and scaled.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: '#3b82f6' }}></i> Pioneering modern consulting models</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: '#3b82f6' }}></i> Fostering global business leaders</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: '#3b82f6' }}></i> Delivering undeniable compounding ROI</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Core Values */}
        <FadeIn direction="up" delay={0.3}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '50px' }}>
            <h4 style={{ textAlign: 'center', color: 'var(--clr-gold)', fontSize: '1.1rem', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600' }}>The Sarvanu Standard</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px' }}>
              {coreValues.map((value, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    background: 'rgba(0,0,0,0.2)', 
                    padding: '30px 25px', 
                    borderRadius: '20px', 
                    border: '1px solid rgba(255,255,255,0.04)',
                    transition: 'border-color 0.3s ease, background 0.3s ease'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.background = 'rgba(0,0,0,0.2)'; }}
                >
                  <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <i className={`fas ${value.icon}`} style={{ fontSize: '1.2rem', color: 'var(--clr-white)' }}></i>
                  </div>
                  <h5 style={{ fontSize: '1.15rem', marginBottom: '12px', fontWeight: '600' }}>{value.title}</h5>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        
      </div>
    </section>
  );
}
