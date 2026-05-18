'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useLeadModal } from './LeadModalContext';

const QUIZ_QUESTIONS = [
  { id:1, text:"When you look at last month's revenue — what's your honest feeling?", options:[{icon:"📉",text:"It dropped or was really inconsistent"},{icon:"😐",text:"Flat — same numbers as always"},{icon:"📈",text:"Growing, but much slower than I want"},{icon:"🔥",text:"Growing fast but I feel out of control"}]},
  { id:2, text:"Where do most of your new clients or customers come from today?", options:[{icon:"🤝",text:"Referrals & word of mouth only"},{icon:"📱",text:"Social media — but results are inconsistent"},{icon:"🔄",text:"Mostly repeat customers, rarely new ones"},{icon:"🤷",text:"Honestly, I'm not sure"}]},
  { id:3, text:"How many hours a week do YOU personally work inside the business?", options:[{icon:"⚡",text:"60+ hours — I'm doing everything myself"},{icon:"⏱️",text:"40-60 hours — busy but managing"},{icon:"📋",text:"30-40 hours — somewhat delegated"},{icon:"🧘",text:"Under 30 hours — team handles most things"}]},
  { id:4, text:"What happens when you try to close a sale or pitch your service?", options:[{icon:"😬",text:"Most people say 'too expensive' or ghost me"},{icon:"🔄",text:"They show interest but rarely convert"},{icon:"🙄",text:"I don't have a clear pitch or process"},{icon:"✅",text:"Sales is fine — my other problems are bigger"}]},
  { id:5, text:"If I asked about your business systems — what's closest to reality?", options:[{icon:"📁",text:"What systems? Everything is in my head"},{icon:"📊",text:"Some spreadsheets and WhatsApp groups"},{icon:"🛠️",text:"We have tools but they're not connected"},{icon:"⚙️",text:"Solid systems — but need to scale them"}]},
  { id:6, text:"How clear is your brand positioning — what makes you different?", options:[{icon:"❓",text:"We're not very different from competitors"},{icon:"💭",text:"I know it internally but can't explain it clearly"},{icon:"📝",text:"We have a message but it's not converting"},{icon:"🎯",text:"Clear and strong — brand is not my issue"}]},
  { id:7, text:"What's the #1 thing you most want to fix in your business right now?", options:[{icon:"💰",text:"Get more clients and increase revenue"},{icon:"🏗️",text:"Build proper systems so I can scale"},{icon:"🗺️",text:"Get a clear strategy and direction"},{icon:"🌟",text:"Build a brand people actually know and trust"}]},
];

const STEPS = ['Contact Details', 'Business Assessment', 'Our Services'];

function validateEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function validatePhone(p) { return /^[+\d\s\-()]{7,15}$/.test(p); }

export default function LeadCaptureModal() {
  const { isOpen, closeModal } = useLeadModal();
  const [step, setStep] = useState(1);
  const [quizQ, setQuizQ] = useState(1);
  const [contact, setContact] = useState({ name:'', organisation:'', designation:'', email:'', phone:'' });
  const [errors, setErrors] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [animating, setAnimating] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) { setStep(1); setQuizQ(1); setContact({ name:'', organisation:'', designation:'', email:'', phone:'' }); setErrors({}); setQuizAnswers({}); setSubmitted(false); }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [isOpen, closeModal]);

  const transition = useCallback((fn) => {
    setAnimating(true);
    setTimeout(() => { fn(); setAnimating(false); }, 280);
  }, []);

  const validateContact = () => {
    const e = {};
    if (!contact.name.trim()) e.name = 'Name is required';
    if (!contact.email.trim()) e.email = 'Email is required';
    else if (!validateEmail(contact.email)) e.email = 'Enter a valid email';
    if (!contact.phone.trim()) e.phone = 'Phone / WhatsApp is required';
    else if (!validatePhone(contact.phone)) e.phone = 'Enter a valid phone number';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleContactNext = () => { if (validateContact()) transition(() => setStep(2)); };

  const handleQuizAnswer = (qIdx, aIdx) => {
    const updated = { ...quizAnswers, [qIdx]: aIdx };
    setQuizAnswers(updated);
    setAnimating(true);
    setTimeout(() => {
      if (qIdx < 7) setQuizQ(qIdx + 1);
      else setStep(3);
      setAnimating(false);
    }, 380);
  };

  const handleQuizBack = () => {
    if (quizQ > 1) transition(() => setQuizQ(quizQ - 1));
    else transition(() => setStep(1));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contact, quizAnswers }),
      });
      const data = await res.json();
      if (data.success) {
        const waNumber = '918700541657';
        const msgLines = [
          '*New Business Enquiry — Sarvanu Strategies*',
          '',
          `*Name:*   ${contact.name}`,
          contact.organisation?.trim() ? `*Organisation:* ${contact.organisation.trim()}` : null,
          contact.designation?.trim()  ? `*Designation:*  ${contact.designation.trim()}`  : null,
          `*Email:*  ${contact.email}`,
          `*Phone:*  ${contact.phone}`,
          '',
          `_Lead Quality: ${data.leadQuality}_`,
        ].filter(Boolean).join('\n');
        window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msgLines)}`, '_blank');
        setSubmitted(true);
      }
    } catch (err) { console.error(err); }
    setSubmitting(false);
  };

  if (!isOpen) return null;

  const q = QUIZ_QUESTIONS[quizQ - 1];
  const quizProgress = ((quizQ - 1) / 7) * 100;

  return (
    <div className="lcm-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
      <div className={`lcm-container ${animating ? 'lcm-fade-out' : 'lcm-fade-in'}`}>
        {/* Close */}
        <button className="lcm-close" onClick={closeModal} aria-label="Close"><i className="fas fa-times" /></button>

        {/* Step Indicator */}
        {!submitted && (
          <div className="lcm-steps">
            {STEPS.map((label, i) => {
              const n = i + 1;
              const active = step === n;
              const done = step > n;
              return (
                <React.Fragment key={n}>
                  <div className={`lcm-step ${active ? 'lcm-step-active' : ''} ${done ? 'lcm-step-done' : ''}`}>
                    <div className="lcm-step-circle">{done ? <i className="fas fa-check" /> : n}</div>
                    <span className="lcm-step-label">{label}</span>
                  </div>
                  {i < 2 && <div className={`lcm-step-line ${done ? 'lcm-step-line-done' : ''}`} />}
                </React.Fragment>
              );
            })}
          </div>
        )}

        <div className="lcm-body">
          {/* ── STEP 1: Contact Details ── */}
          {step === 1 && (
            <div className="lcm-section">
              <div className="lcm-section-header">
                <span className="expertise-badge" style={{ margin:'0 auto 12px', display:'inline-block' }}>Step 1 of 3</span>
                <h2>Tell Us About <span className="text-gold">Yourself</span></h2>
                <p style={{ color:'var(--clr-text-muted)', fontSize:'0.95rem' }}>We'll use these details to personalise your consultation.</p>
              </div>
              <div className="lcm-form-grid">
                <div className="lcm-field">
                  <label>Full Name <span className="text-gold">*</span></label>
                  <input className={`premium-input ${errors.name ? 'lcm-input-error' : ''}`} placeholder="Your full name" value={contact.name} onChange={e => { setContact({...contact,name:e.target.value}); setErrors({...errors,name:''}) }} />
                  {errors.name && <span className="lcm-error">{errors.name}</span>}
                </div>
                <div className="lcm-field">
                  <label>Organisation</label>
                  <input className="premium-input" placeholder="Company / Business name" value={contact.organisation} onChange={e => setContact({...contact,organisation:e.target.value})} />
                </div>
                <div className="lcm-field">
                  <label>Designation</label>
                  <input className="premium-input" placeholder="Your role / title" value={contact.designation} onChange={e => setContact({...contact,designation:e.target.value})} />
                </div>
                <div className="lcm-field">
                  <label>Email <span className="text-gold">*</span></label>
                  <input type="email" className={`premium-input ${errors.email ? 'lcm-input-error' : ''}`} placeholder="you@example.com" value={contact.email} onChange={e => { setContact({...contact,email:e.target.value}); setErrors({...errors,email:''}) }} />
                  {errors.email && <span className="lcm-error">{errors.email}</span>}
                </div>
                <div className="lcm-field lcm-field-full">
                  <label>Contact / WhatsApp <span className="text-gold">*</span></label>
                  <input type="tel" className={`premium-input ${errors.phone ? 'lcm-input-error' : ''}`} placeholder="+91 XXXXX XXXXX" value={contact.phone} onChange={e => { setContact({...contact,phone:e.target.value}); setErrors({...errors,phone:''}) }} />
                  {errors.phone && <span className="lcm-error">{errors.phone}</span>}
                </div>
              </div>
              <div className="lcm-nav">
                <div />
                <button className="btn-primary" onClick={handleContactNext} style={{ padding:'12px 35px' }}>
                  Next <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 2: Quiz ── */}
          {step === 2 && (
            <div className="lcm-section">
              <div className="quiz-progress-bar" style={{ width:'100%', maxWidth:'560px', margin:'0 auto 8px' }}>
                <div className="quiz-progress-fill" style={{ width:`${quizProgress}%` }} />
              </div>
              <div className="quiz-step-indicator">Question {quizQ} of 7</div>
              <h3 className="quiz-question-text">{q.text}</h3>
              <div className="quiz-options-grid" style={{ maxWidth:'560px', margin:'0 auto' }}>
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    className={`quiz-option-card ${quizAnswers[quizQ] === i ? 'selected' : ''}`}
                    onClick={() => handleQuizAnswer(quizQ, i)}
                  >
                    <span className="quiz-option-icon">{opt.icon}</span>
                    <span className="quiz-option-text">{opt.text}</span>
                  </button>
                ))}
              </div>
              <div className="lcm-nav" style={{ maxWidth:'560px', margin:'20px auto 0' }}>
                <button className="btn-secondary" onClick={handleQuizBack} style={{ padding:'10px 20px', background:'transparent', border:'1px solid rgba(255,255,255,0.2)', color:'white' }}>
                  <i className="fas fa-arrow-left" /> Back
                </button>
                {quizAnswers[quizQ] !== undefined && quizQ < 7 && (
                  <button className="btn-primary" onClick={() => handleQuizAnswer(quizQ, quizAnswers[quizQ])} style={{ padding:'10px 25px' }}>
                    Next <i className="fas fa-arrow-right" />
                  </button>
                )}
                {quizAnswers[quizQ] !== undefined && quizQ === 7 && (
                  <button className="btn-primary" onClick={() => transition(() => setStep(3))} style={{ padding:'10px 25px', background:'#10b981' }}>
                    See Services <i className="fas fa-arrow-right" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ── STEP 3: Services + Submit ── */}
          {step === 3 && !submitted && (
            <div className="lcm-section">
              <div className="lcm-section-header">
                <span className="expertise-badge" style={{ margin:'0 auto 12px', display:'inline-block' }}>Step 3 of 3</span>
                <h2>Choose Your <span className="text-gold">Consulting Package</span></h2>
                <p style={{ color:'var(--clr-text-muted)', fontSize:'0.95rem' }}>Transparent pricing. No hidden fees. Results-driven consulting.</p>
              </div>

              <div className="lcm-pricing-grid">
                {[
                  { name:'Basic Plan', sub:'Foundation & Clarity', price:'₹15,000', per:'/Month', highlight:false,
                    features:['Strategic Business Audit + Monthly Consultation','Brand Positioning & Identity Review','Clear Marketing Direction','Focused Social Media Plan (1 Platform)','Website Structure & Content Blueprint','Operations & Workflow Diagnosis','Monthly Progress Report'],
                    cta:'Start Building a Strong Foundation' },
                  { name:'Growth Plan', sub:'Systems & Consistency', price:'₹30,000', per:'/Month', highlight:true,
                    features:['In-depth Business Audit + Strategy Call','Complete Brand Identity','Monthly Marketing Execution Plan','Social Media Strategy (2 Platforms)','Conversion-Focused Website Planning','Business Development Strategy','SOPs & Workflow Structuring','Growth Dashboard'],
                    cta:'Book a Strategic Growth Call' },
                  { name:'Premium Plan', sub:'Scale, Automation & Control', price:'₹55,000', per:'/Month', highlight:false,
                    features:['2 Strategy Sessions + Continuous Advisory','Advanced Messaging & Market Positioning','Campaign-Level Marketing Strategy','Social Media Expansion (3 Platforms)','Full Funnel + CRM Setup + Analytics','B2B Lead Systems & Outreach Frameworks','SOPs + Automation Tool Integration','Complete Business Intelligence Dashboard'],
                    cta:'Start Scaling with Expert Guidance' },
                ].map((plan, i) => (
                  <div key={i} className={`lcm-plan ${plan.highlight ? 'lcm-plan-featured' : ''}`}>
                    {plan.highlight && <div className="lcm-plan-badge">Most Popular</div>}
                    <h3 style={{ color: plan.highlight ? 'var(--clr-gold)' : '#fff', fontSize:'1.3rem', marginBottom:'4px' }}>{plan.name}</h3>
                    <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.85rem', marginBottom:'12px' }}>{plan.sub}</p>
                    <div style={{ fontSize:'2rem', fontWeight:'800', color:'#fff', marginBottom:'16px' }}>{plan.price} <span style={{ fontSize:'0.9rem', fontWeight:'400', color:'rgba(255,255,255,0.5)' }}>{plan.per}</span></div>
                    <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:'8px', marginBottom:'20px', flex:1 }}>
                      {plan.features.map((f,j) => (
                        <li key={j} style={{ display:'flex', alignItems:'flex-start', gap:'8px', color:'rgba(255,255,255,0.75)', fontSize:'0.88rem' }}>
                          <i className="fas fa-check" style={{ color:'var(--clr-gold)', marginTop:'3px', flexShrink:0 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="lcm-nav" style={{ marginTop:'24px' }}>
                <button className="btn-secondary" onClick={() => transition(() => setStep(2))} style={{ padding:'10px 20px', background:'transparent', border:'1px solid rgba(255,255,255,0.2)', color:'white' }}>
                  <i className="fas fa-arrow-left" /> Back
                </button>
                <button className="btn-primary" onClick={handleSubmit} disabled={submitting} style={{ padding:'12px 35px', background:'var(--clr-gold)', color:'#000', fontWeight:'700' }}>
                  {submitting ? <><i className="fas fa-spinner fa-spin" /> Submitting...</> : <><i className="fab fa-whatsapp" /> Submit & Connect on WhatsApp</>}
                </button>
              </div>
              <p style={{ color:'var(--clr-text-muted)', fontSize:'0.8rem', textAlign:'center', marginTop:'12px' }}>
                After submitting, Sarvanu will personally message you on WhatsApp within 24 hours. No spam.
              </p>
            </div>
          )}

          {/* ── SUCCESS SCREEN ── */}
          {submitted && (
            <div className="lcm-section" style={{ textAlign:'center', alignItems:'center' }}>
              <div className="quiz-hero-visual" style={{ background:'rgba(16,185,129,0.1)', marginBottom:'20px' }}>
                <div className="quiz-glow" style={{ background:'radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)' }} />
                <i className="fas fa-check-circle quiz-hero-icon" style={{ color:'#10b981' }} />
              </div>
              <h2 className="result-title">Submitted Successfully!</h2>
              <p className="result-description" style={{ textAlign:'center' }}>
                Thank you, <strong>{contact.name}</strong>! Your details have been saved and you've been redirected to WhatsApp. Sarvanu will connect with you within 24 hours.
              </p>
              <button className="btn-primary" onClick={closeModal} style={{ marginTop:'20px' }}>
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .lcm-overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
          overflow-y: auto;
        }
        .lcm-container {
          background: linear-gradient(135deg, #0d0d1a 0%, #111827 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          width: 100%; max-width: 820px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 80px rgba(0,0,0,0.6);
          padding: 40px 36px 36px;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.1) transparent;
        }
        @media (max-width: 600px) {
          .lcm-container { padding: 28px 18px 24px; border-radius: 16px; max-height: 95vh; }
        }
        .lcm-fade-in { animation: lcmIn 0.28s ease forwards; }
        .lcm-fade-out { animation: lcmOut 0.28s ease forwards; }
        @keyframes lcmIn { from { opacity:0; transform:scale(0.97) translateY(10px); } to { opacity:1; transform:scale(1) translateY(0); } }
        @keyframes lcmOut { from { opacity:1; } to { opacity:0; transform:scale(0.97); } }

        .lcm-close {
          position: absolute; top: 16px; right: 16px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6); border-radius: 50%;
          width: 36px; height: 36px; cursor: pointer; font-size: 1rem;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s; z-index: 10;
        }
        .lcm-close:hover { background: rgba(255,255,255,0.12); color: #fff; }

        .lcm-steps {
          display: flex; align-items: center; justify-content: center;
          gap: 0; margin-bottom: 32px; flex-wrap: nowrap;
        }
        .lcm-step { display: flex; flex-direction: column; align-items: center; gap: 6px; flex-shrink: 0; }
        .lcm-step-circle {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255,255,255,0.06); border: 2px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.4); display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem; font-weight: 700; transition: all 0.3s;
        }
        .lcm-step-label { font-size: 0.72rem; color: rgba(255,255,255,0.35); transition: all 0.3s; white-space: nowrap; }
        .lcm-step-active .lcm-step-circle { background: var(--clr-gold); border-color: var(--clr-gold); color: #000; box-shadow: 0 0 16px rgba(245,197,24,0.4); }
        .lcm-step-active .lcm-step-label { color: var(--clr-gold); font-weight: 600; }
        .lcm-step-done .lcm-step-circle { background: rgba(16,185,129,0.2); border-color: #10b981; color: #10b981; }
        .lcm-step-done .lcm-step-label { color: #10b981; }
        .lcm-step-line { flex: 1; height: 2px; background: rgba(255,255,255,0.1); min-width: 30px; margin: 0 8px; margin-bottom: 20px; transition: background 0.3s; }
        .lcm-step-line-done { background: #10b981; }

        .lcm-section { display: flex; flex-direction: column; }
        .lcm-section-header { text-align: center; margin-bottom: 28px; }
        .lcm-section-header h2 { font-size: clamp(1.4rem, 3vw, 2rem); color: #fff; margin-bottom: 8px; }

        .lcm-form-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
          margin-bottom: 24px;
        }
        @media (max-width: 560px) { .lcm-form-grid { grid-template-columns: 1fr; } }
        .lcm-field { display: flex; flex-direction: column; gap: 6px; }
        .lcm-field label { font-size: 0.85rem; color: rgba(255,255,255,0.7); font-weight: 500; }
        .lcm-field-full { grid-column: 1 / -1; }
        .lcm-input-error { border-color: rgba(239,68,68,0.6) !important; }
        .lcm-error { font-size: 0.78rem; color: #ef4444; margin-top: 2px; }

        .lcm-nav { display: flex; justify-content: space-between; align-items: center; }

        .lcm-pricing-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
          margin-bottom: 8px;
        }
        @media (max-width: 700px) { .lcm-pricing-grid { grid-template-columns: 1fr; } }

        .lcm-plan {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 24px 20px; display: flex; flex-direction: column;
          position: relative;
        }
        .lcm-plan-featured {
          background: rgba(245,197,24,0.04); border-color: rgba(245,197,24,0.25);
          box-shadow: 0 0 30px rgba(245,197,24,0.07);
        }
        .lcm-plan-badge {
          position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
          background: var(--clr-gold); color: #000; padding: 4px 14px;
          border-radius: 20px; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
