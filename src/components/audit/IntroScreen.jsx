'use client';

export default function IntroScreen({ onStart }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '48px 28px 40px',
      fontFamily: "'Inter','Poppins',sans-serif", textAlign: 'center',
      minHeight: 420,
    }}>
      {/* Glowing icon */}
      <div style={{
        width: 72, height: 72, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,197,24,0.18) 0%, rgba(245,197,24,0.04) 70%)',
        border: '2px solid rgba(245,197,24,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 28,
        boxShadow: '0 0 40px rgba(245,197,24,0.12), 0 0 80px rgba(245,197,24,0.06)',
        animation: 'introIconPulse 2.5s ease-in-out infinite',
      }}>
        <span style={{ fontSize: '1.8rem' }}>📊</span>
      </div>

      {/* Headline */}
      <h2 style={{
        fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800,
        color: '#fff', margin: '0 0 12px', lineHeight: 1.25,
        letterSpacing: '-0.02em',
      }}>
        Get Your First<br />
        <span style={{
          background: 'linear-gradient(135deg, #F5C518, #f0bb00, #e6a800)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>Business Audit</span>
      </h2>

      {/* Subtitle */}
      <p style={{
        fontSize: '0.92rem', color: 'rgba(255,255,255,0.45)',
        lineHeight: 1.6, maxWidth: 440, margin: '0 auto 32px',
      }}>
        Discover hidden growth opportunities, revenue leaks, and scaling bottlenecks in your business — in under 5 minutes.
      </p>

      {/* Value bullets */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '14px 20px', maxWidth: 500, width: '100%',
        marginBottom: 36, textAlign: 'left',
      }}>
        {[
          { icon: '🔍', text: 'Deep-dive business analysis' },
          { icon: '📈', text: 'Identify growth blockers' },
          { icon: '🗺️', text: 'Custom action plan' },
          { icon: '⏱️', text: 'Takes only 3–5 minutes' },
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 14px', borderRadius: 12,
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.05)',
            transition: 'border-color 0.25s, background 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,197,24,0.18)'; e.currentTarget.style.background = 'rgba(245,197,24,0.04)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; }}
          >
            <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</span>
            <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={onStart}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '15px 40px', borderRadius: 14,
          background: 'linear-gradient(135deg, #F5C518, #f0bb00)',
          color: '#000', fontWeight: 800, fontSize: '1.02rem',
          border: 'none', cursor: 'pointer',
          boxShadow: '0 6px 24px rgba(245,197,24,0.25), 0 0 60px rgba(245,197,24,0.08)',
          transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
          letterSpacing: '-0.01em',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
          e.currentTarget.style.boxShadow = '0 10px 36px rgba(245,197,24,0.35), 0 0 80px rgba(245,197,24,0.12)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 24px rgba(245,197,24,0.25), 0 0 60px rgba(245,197,24,0.08)';
        }}
      >
        Get My Audit Report
        <span style={{ fontSize: '1.1rem', transition: 'transform 0.3s' }}>→</span>
      </button>

      {/* Trust line */}
      <p style={{
        marginTop: 20, fontSize: '0.72rem',
        color: 'rgba(255,255,255,0.2)',
        display: 'flex', alignItems: 'center', gap: 6,
        justifyContent: 'center', flexWrap: 'wrap',
      }}>
        <span>🔒 100% Confidential</span>
      </p>

      {/* Animations */}
      <style>{`
        @keyframes introIconPulse {
          0%, 100% { box-shadow: 0 0 40px rgba(245,197,24,0.12), 0 0 80px rgba(245,197,24,0.06); }
          50%      { box-shadow: 0 0 50px rgba(245,197,24,0.2), 0 0 100px rgba(245,197,24,0.1); }
        }
        @media (max-width: 500px) {
          /* stack bullets to single column on small screens */
        }
      `}</style>
    </div>
  );
}
