'use client';
import { useState, useEffect } from 'react';

const STEPS = [
  { icon: '📊', text: 'Evaluating growth potential' },
  { icon: '⚙️', text: 'Reviewing operational maturity' },
  { icon: '🔍', text: 'Identifying scalability gaps' },
  { icon: '👤', text: 'Analyzing founder dependency' },
  { icon: '🎯', text: 'Preparing strategic recommendations' },
  { icon: '📄', text: 'Generating AI audit report' },
];

export default function ProcessingScreen() {
  const [done, setDone]       = useState([]);
  const [current, setCurrent] = useState(0);
  const [dots, setDots]       = useState('');

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      if (step < STEPS.length) {
        setDone(d => [...d, step]);
        setCurrent(step + 1);
        step++;
      } else clearInterval(interval);
    }, 620);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setDots(d => d.length < 3 ? d + '.' : ''), 400);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg,#08080F 0%,#0D0D1E 60%,#0A0A18 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px', fontFamily: "'Inter','Poppins',sans-serif",
    }}>
      {/* Spinning orb */}
      <div style={{ position: 'relative', width: 100, height: 100, marginBottom: 40 }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: 'conic-gradient(from 0deg,#F5C518,#f0bb00,rgba(245,197,24,0.15),#F5C518)',
          animation: 'proc-spin 2s linear infinite',
        }} />
        <div style={{ position: 'absolute', inset: 5, borderRadius: '50%', background: '#0A0A14', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
          ✦
        </div>
      </div>

      <h2 style={{ color: '#fff', fontSize: 'clamp(1.2rem,3vw,1.6rem)', fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>
        Generating Your Business Audit Report{dots}
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.88rem', marginBottom: 40, textAlign: 'center', maxWidth: 400 }}>
        Our AI is analyzing your responses to build a personalised strategic roadmap
      </p>

      {/* Checklist */}
      <div style={{ width: '100%', maxWidth: 440, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {STEPS.map((step, i) => {
          const completed = done.includes(i);
          const active    = i === current;
          return (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '13px 18px', borderRadius: 12,
              background: completed
                ? 'rgba(16,185,129,0.07)'
                : active ? 'rgba(245,197,24,0.05)' : 'rgba(255,255,255,0.02)',
              border: `1px solid ${completed
                ? 'rgba(16,185,129,0.22)'
                : active ? 'rgba(245,197,24,0.18)' : 'rgba(255,255,255,0.05)'}`,
              opacity: i > current ? 0.3 : 1,
              transition: 'all 0.4s ease',
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                background: completed ? '#10b981' : active ? 'rgba(245,197,24,0.12)' : 'rgba(255,255,255,0.05)',
                border: `2px solid ${completed ? '#10b981' : active ? '#F5C518' : 'rgba(255,255,255,0.1)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8rem', transition: 'all 0.3s',
              }}>
                {completed
                  ? <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 800 }}>✓</span>
                  : <span>{step.icon}</span>}
              </div>
              <span style={{
                fontSize: '0.9rem',
                fontWeight: completed ? 500 : 400,
                color: completed ? '#10b981' : active ? '#fff' : 'rgba(255,255,255,0.35)',
                transition: 'color 0.3s',
              }}>
                {step.text}
              </span>
              {active && (
                <div style={{ marginLeft: 'auto', width: 7, height: 7, borderRadius: '50%', background: '#F5C518', animation: 'proc-pulse 0.9s infinite' }} />
              )}
            </div>
          );
        })}
      </div>

      <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.73rem', marginTop: 36, textAlign: 'center' }}>
        This typically takes 15–30 seconds
      </p>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @keyframes proc-spin { to { transform: rotate(360deg); } }
        @keyframes proc-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.6)} }
      `}</style>
    </div>
  );
}
