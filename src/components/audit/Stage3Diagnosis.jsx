'use client';
import { useState, useEffect } from 'react';

const QUESTIONS = [
  { id: 'q1', text: 'When you review your recent business performance, what feels most accurate?', options: ['Revenue has been inconsistent','Growth has become stagnant','Business is growing slower than expected','Growth is strong but operations feel chaotic'] },
  { id: 'q2', text: 'Where does the majority of your new business currently come from?', options: ['Referrals and word of mouth','Social media marketing','Repeat customers','No predictable acquisition channel'] },
  { id: 'q3', text: 'How involved are you in day-to-day operations?', options: ['I handle almost everything personally','I manage most critical decisions','Some operations are delegated','The team manages most operations independently'] },
  { id: 'q4', text: 'What best describes your current sales process?', options: ['Leads rarely convert consistently','Sales conversations lack structure','Conversion rates are unpredictable','Sales performance is stable'] },
  { id: 'q5', text: 'How would you describe your operational systems?', options: ['Most processes depend on manual management','We use spreadsheets and WhatsApp heavily','We have systems but they are disconnected','Systems are structured and scalable'] },
  { id: 'q6', text: 'How clear is your brand positioning in the market?', options: ['We struggle to differentiate from competitors','We know our value internally but messaging is weak','Branding exists but conversion is inconsistent','Our positioning is strong and clearly understood'] },
  { id: 'q7', text: 'What is the single biggest outcome you want over the next 12 months?', options: ['Increase revenue and client acquisition','Build scalable systems and operations','Gain strategic clarity and direction','Build a stronger market presence and brand authority'] },
];

const RATINGS = [
  { id: 'rating_confidence', label: 'Rate your confidence in your current growth strategy', sub: 'How certain are you that your current approach will achieve your goals?', low: 'Not confident', high: 'Highly confident', icon: '🎯' },
  { id: 'rating_stress',     label: 'Rate your current business stress level', sub: 'Overall pressure and complexity you experience running the business daily.', low: 'Very low', high: 'Extremely high', icon: '⚡' },
  { id: 'rating_scaling',    label: 'How prepared is your business for scaling?', sub: 'Systems, team, and processes readiness for rapid growth.', low: 'Not ready', high: 'Fully ready', icon: '🚀' },
];

function RatingSlider({ config, value, onChange }) {
  const getColor = (v) => {
    if (v <= 3) return '#ef4444';
    if (v <= 5) return '#F5C518';
    if (v <= 7) return '#f0bb00';
    return '#10b981';
  };
  const color = getColor(value);

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontSize: '3rem', fontWeight: 800, color,
        marginBottom: 6, lineHeight: 1,
        textShadow: `0 0 30px ${color}40`,
        transition: 'color 0.3s, text-shadow 0.3s',
      }}>{value}</div>
      <div style={{
        fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)',
        marginBottom: 20, fontWeight: 500,
      }}>out of 10</div>

      {/* Number buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map(n => {
          const isActive = value === n;
          const btnColor = getColor(n);
          return (
            <button key={n} type="button" onClick={() => onChange(n)} style={{
              width: 40, height: 40, borderRadius: 10,
              border: `2px solid ${isActive ? btnColor : 'rgba(255,255,255,0.08)'}`,
              background: isActive ? `${btnColor}20` : 'rgba(255,255,255,0.02)',
              color: isActive ? btnColor : 'rgba(255,255,255,0.35)',
              fontSize: '0.9rem', fontWeight: isActive ? 800 : 500,
              cursor: 'pointer', transition: 'all 0.18s ease',
              boxShadow: isActive ? `0 4px 16px ${btnColor}25` : 'none',
            }}
              onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}}
              onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}}
            >{n}</button>
          );
        })}
      </div>

      {/* Range labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 420, margin: '0 auto', fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>
        <span>{config.low}</span><span>{config.high}</span>
      </div>
    </div>
  );
}

export default function Stage3Diagnosis({ onDone, onBack }) {
  const TOTAL = QUESTIONS.length + RATINGS.length;
  const [idx, setIdx]       = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [entering, setEntering] = useState(false);

  const isRating   = idx >= QUESTIONS.length;
  const qData      = !isRating ? QUESTIONS[idx] : RATINGS[idx - QUESTIONS.length];
  const ratingVal  = isRating ? (answers[qData.id] ?? 5) : null;
  const progress   = ((idx) / TOTAL) * 100;

  useEffect(() => {
    setSelected(null);
    setEntering(true);
    const t = setTimeout(() => setEntering(false), 280);
    return () => clearTimeout(t);
  }, [idx]);

  const handleSelect = (opt) => {
    if (!isRating) setSelected(opt);
  };

  const handleNext = () => {
    const newAnswers = { ...answers };
    if (!isRating) {
      if (selected === null) return; // require selection
      newAnswers[qData.id] = QUESTIONS[idx].options.indexOf(selected);
    } else {
      newAnswers[qData.id] = ratingVal;
    }
    setAnswers(newAnswers);

    if (idx + 1 < TOTAL) {
      setIdx(i => i + 1);
    } else {
      onDone(newAnswers);
    }
  };

  const handleRatingChange = (val) => {
    setAnswers(a => ({ ...a, [qData.id]: val }));
  };

  return (
    <div style={{ width: '100%', maxWidth: 680, padding: '0 8px' }}>
      {/* Header with progress */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '4px 12px 4px 8px', borderRadius: 20,
            background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.2)',
          }}>
            <span style={{ fontSize: '0.7rem' }}>{isRating ? '⚡' : '🔍'}</span>
            <span style={{ fontSize: '0.7rem', color: '#F5C518', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Stage 3 · Diagnosis
            </span>
          </div>
          <span style={{
            fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600,
            background: 'rgba(255,255,255,0.04)', padding: '3px 10px', borderRadius: 8,
          }}>
            {idx + 1} / {TOTAL}
          </span>
        </div>

        {/* Progress bar */}
        <div style={{
          height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden',
        }}>
          <div style={{
            width: `${progress}%`, height: '100%',
            background: 'linear-gradient(90deg,#F5C518,#f0bb00)',
            borderRadius: 4, transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
            boxShadow: '0 0 12px rgba(245,197,24,0.3)',
          }} />
        </div>
      </div>

      {/* Question card */}
      <div style={{
        opacity: entering ? 0 : 1,
        transform: entering ? 'translateY(16px)' : 'translateY(0)',
        transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {/* Question container with glassmorphism */}
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 18, padding: '28px 24px',
          marginBottom: 20,
        }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            {!isRating ? (
              <>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(245,197,24,0.1)', border: '1.5px solid rgba(245,197,24,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', fontSize: '1rem', color: '#F5C518', fontWeight: 800,
                  boxShadow: '0 4px 16px rgba(245,197,24,0.1)',
                }}>
                  {idx + 1}
                </div>
                <h2 style={{
                  fontSize: 'clamp(1.05rem,2.5vw,1.3rem)', fontWeight: 700,
                  color: '#fff', lineHeight: 1.55, margin: '0 auto', maxWidth: 540,
                }}>
                  {qData.text}
                </h2>
              </>
            ) : (
              <>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'rgba(245,197,24,0.1)', border: '1.5px solid rgba(245,197,24,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', fontSize: '1.5rem',
                  boxShadow: '0 4px 20px rgba(245,197,24,0.1)',
                }}>
                  {qData.icon}
                </div>
                <h2 style={{
                  fontSize: 'clamp(1.05rem,2.5vw,1.25rem)', fontWeight: 700,
                  color: '#fff', lineHeight: 1.5, margin: '0 auto 8px', maxWidth: 520,
                }}>{qData.label}</h2>
                <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.84rem', margin: 0, lineHeight: 1.5 }}>{qData.sub}</p>
              </>
            )}
          </div>

          {/* MCQ Options */}
          {!isRating && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {qData.options.map((opt, i) => {
                const isSelected = selected === opt;
                const letter = String.fromCharCode(65 + i);
                return (
                  <button key={opt} type="button" onClick={() => handleSelect(opt)} style={{
                    width: '100%', textAlign: 'left', padding: '14px 18px', borderRadius: 14,
                    border: `1.5px solid ${isSelected ? 'rgba(245,197,24,0.5)' : 'rgba(255,255,255,0.07)'}`,
                    background: isSelected ? 'rgba(245,197,24,0.08)' : 'rgba(255,255,255,0.015)',
                    color: isSelected ? '#fff' : 'rgba(255,255,255,0.55)', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 14, transition: 'all 0.2s ease',
                    fontSize: '0.9rem', fontWeight: isSelected ? 600 : 400,
                    boxShadow: isSelected ? '0 4px 20px rgba(245,197,24,0.08)' : 'none',
                  }}
                    onMouseEnter={e => { if (!isSelected) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}}
                    onMouseLeave={e => { if (!isSelected) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}}
                  >
                    <div style={{
                      width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                      border: `2px solid ${isSelected ? '#F5C518' : 'rgba(255,255,255,0.15)'}`,
                      background: isSelected ? '#F5C518' : 'rgba(255,255,255,0.03)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.78rem', fontWeight: 700,
                      color: isSelected ? '#000' : 'rgba(255,255,255,0.3)',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 0 12px rgba(245,197,24,0.25)' : 'none',
                    }}>
                      {isSelected ? '✓' : letter}
                    </div>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Rating */}
          {isRating && (
            <div style={{
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 14, padding: '24px 20px',
            }}>
              <RatingSlider config={qData} value={ratingVal} onChange={handleRatingChange} />
            </div>
          )}
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button className="audit-btn-secondary" onClick={idx === 0 ? onBack : () => setIdx(i => i - 1)}>
            <i className="fas fa-arrow-left" style={{ fontSize: '0.8rem' }} /> Back
          </button>
          <button className="audit-btn-primary" onClick={handleNext}
            style={{
              opacity: (!isRating && selected === null) ? 0.45 : 1,
              pointerEvents: (!isRating && selected === null) ? 'none' : 'auto',
            }}>
            {idx + 1 < TOTAL
              ? <>Next Question <i className="fas fa-arrow-right" style={{ fontSize: '0.85rem' }} /></>
              : <>Generate My Report <i className="fas fa-sparkles" style={{ fontSize: '0.85rem' }} /></>
            }
          </button>
        </div>

        {!isRating && selected === null && (
          <p style={{
            textAlign: 'center', color: 'rgba(255,255,255,0.22)',
            fontSize: '0.73rem', marginTop: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <span style={{ fontSize: '0.65rem' }}>☝️</span> Select an option to continue
          </p>
        )}
      </div>
    </div>
  );
}
