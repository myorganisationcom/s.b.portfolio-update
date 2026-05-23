'use client';

import React, { useState, useEffect } from 'react';
import { useLeadModal } from './LeadModalContext';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d\s\-()\[\]]{7,20}$/;

const QUESTIONS = [
  { id:1, text:"When you look at last month's revenue — what's your honest feeling?",
    options:[{icon:"📉",text:"It dropped or was really inconsistent"},{icon:"😐",text:"Flat — same numbers as always"},{icon:"📈",text:"Growing, but much slower than I want"},{icon:"🔥",text:"Growing fast but I feel out of control"}]},
  { id:2, text:"Where do most of your new clients or customers come from today?",
    options:[{icon:"🤝",text:"Referrals & word of mouth only"},{icon:"📱",text:"Social media — but results are inconsistent"},{icon:"🔄",text:"Mostly repeat customers, rarely new ones"},{icon:"🤷",text:"Honestly, I'm not sure"}]},
  { id:3, text:"How many hours a week do YOU personally work inside the business?",
    options:[{icon:"⚡",text:"60+ hours — I'm doing everything myself"},{icon:"⏱️",text:"40-60 hours — busy but managing"},{icon:"📋",text:"30-40 hours — somewhat delegated"},{icon:"🧘",text:"Under 30 hours — team handles most things"}]},
  { id:4, text:"What happens when you try to close a sale or pitch your service?",
    options:[{icon:"😬",text:"Most people say 'too expensive' or ghost me"},{icon:"🔄",text:"They show interest but rarely convert"},{icon:"🙄",text:"I don't have a clear pitch or process"},{icon:"✅",text:"Sales is fine — my other problems are bigger"}]},
  { id:5, text:"If I asked about your business systems — what's closest to reality?",
    options:[{icon:"📁",text:"What systems? Everything is in my head"},{icon:"📊",text:"Some spreadsheets and WhatsApp groups"},{icon:"🛠️",text:"We have tools but they're not connected"},{icon:"⚙️",text:"Solid systems — but need to scale them"}]},
  { id:6, text:"How clear is your brand positioning — what makes you different?",
    options:[{icon:"❓",text:"We're not very different from competitors"},{icon:"💭",text:"I know it internally but can't explain it clearly"},{icon:"📝",text:"We have a message but it's not converting"},{icon:"🎯",text:"Clear and strong — brand is not my issue"}]},
  { id:7, text:"What's the #1 thing you most want to fix in your business right now?",
    options:[{icon:"💰",text:"Get more clients and increase revenue"},{icon:"🏗️",text:"Build proper systems so I can scale"},{icon:"🗺️",text:"Get a clear strategy and direction"},{icon:"🌟",text:"Build a brand people actually know and trust"}]},
];



export default function DiagnosisModal() {
  const { activeModal, contactData, closeModal } = useLeadModal();
  const isOpen = activeModal === 'diagnosis';

  // If contactData is null → modal was opened directly via openDiagnosis()
  // So we need to collect contact inline (intro phase)
  const needsContactFirst = !contactData;

  // phase: 'intro' | 'quiz' | 'report' | 'success'
  const [phase, setPhase]           = useState(needsContactFirst ? 'intro' : 'quiz');
  const [introForm, setIntroForm]   = useState({ name: '', email: '', phone: '' });
  const [introErrors, setIntroErrors] = useState({});
  const [currentQ, setCurrentQ]     = useState(1);
  const [answers, setAnswers]       = useState({});
  const [animating, setAnimating]   = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [animIn, setAnimIn]         = useState(false);
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const direct = !contactData;
      setPhase(direct ? 'intro' : 'quiz');
      setCurrentQ(1); setAnswers({}); setSubmitting(false);
      setIntroForm({ name: '', email: '', phone: '' }); setIntroErrors({});
      setAnimIn(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  // Merge contact info — from contactData prop (Book a Call) or intro form (direct)
  const getFinalContact = () => contactData || { ...introForm };

  /* ── Intro validation (direct open) ── */
  const validateIntro = () => {
    const e = {};
    if (!introForm.name.trim())  e.name  = 'Name is required';
    if (!introForm.email.trim()) e.email = 'Email is required';
    else if (!EMAIL_RE.test(introForm.email)) e.email = 'Invalid email';
    if (!introForm.phone.trim()) e.phone = 'Phone is required';
    else if (!PHONE_RE.test(introForm.phone)) e.phone = 'Invalid phone';
    setIntroErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleIntroNext = () => {
    if (!validateIntro()) return;
    setPhase('quiz');
  };

  const setIntro = (f) => (e) => {
    setIntroForm(p => ({ ...p, [f]: e.target.value }));
    setIntroErrors(p => ({ ...p, [f]: '' }));
  };

  /* ── Quiz ── */
  const q = QUESTIONS[currentQ - 1];
  const progress = ((currentQ - 1) / 7) * 100;

  const selectAnswer = (qIdx, aIdx) => {
    const updated = { ...answers, [qIdx]: aIdx };
    setAnswers(updated);
    setAnimating(true);
    setTimeout(() => {
      if (qIdx < 7) setCurrentQ(qIdx + 1);
      else setPhase('report');
      setAnimating(false);
    }, 380);
  };

  const goBack = () => {
    if (phase === 'report') { setPhase('quiz'); return; }
    if (phase === 'quiz' && currentQ > 1) {
      setAnimating(true);
      setTimeout(() => { setCurrentQ(currentQ - 1); setAnimating(false); }, 280);
    } else if (phase === 'quiz' && currentQ === 1 && needsContactFirst) {
      setPhase('intro');
    }
  };

  /* ── Report Logic ── */
  const generateReport = () => {
    let healthScore = 65;
    let bottleneck = "Lead Generation & Conversion";
    
    // Adjust score based on Revenue (Q1)
    if (answers[1] === 0 || answers[1] === 1) healthScore -= 15;
    if (answers[1] === 2 || answers[1] === 3) healthScore += 10;
    
    // Adjust score based on Time worked (Q3)
    if (answers[3] === 0) healthScore -= 15;
    if (answers[3] === 3) healthScore += 15;

    // Adjust score based on Systems (Q5)
    if (answers[5] === 0) healthScore -= 10;
    if (answers[5] === 3) healthScore += 10;
    
    // Determine bottleneck based on biggest challenge (Q7)
    if (answers[7] === 0) bottleneck = "Lead Generation & Revenue Growth";
    else if (answers[7] === 1) bottleneck = "Operational Systems & Scaling";
    else if (answers[7] === 2) bottleneck = "Strategic Clarity & Direction";
    else if (answers[7] === 3) bottleneck = "Brand Authority & Trust";

    const reportLevel = healthScore >= 70 ? 'Good, but needs optimization' : (healthScore >= 50 ? 'Needs structural improvements' : 'Critical intervention required');

    return { score: Math.max(10, Math.min(95, healthScore)), bottleneck, reportLevel };
  };

  /* ── Submit ── */
  const handleSubmit = async () => {
    setSubmitting(true);
    const contact = getFinalContact();
    try {
      const res  = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contact, quizAnswers: answers }),
      });
      const data = await res.json();
      if (data.success) {
        setReportData({
          healthScore: data.healthScore ?? 0,
          bottleneck:  data.bottleneck  ?? 'Growth Strategy',
          pdfUrl:      data.pdfUrl      ?? null,
          leadQuality: data.leadQuality ?? 'Nurture',
          email:       contact?.email   ?? '',
          name:        contact?.name    ?? '',
        });
        setPhase('success');
      }
    } catch (err) { console.error(err); }
    setSubmitting(false);
  };

  const sharedBackBtn = (label = 'Back') => (
    <button onClick={goBack}
      style={{ padding:'10px 20px', background:'transparent', border:'1px solid rgba(255,255,255,0.2)', color:'#fff', borderRadius:10, cursor:'pointer', fontSize:'0.9rem' }}>
      <i className="fas fa-arrow-left" /> {label}
    </button>
  );

  return (
    <div className="lcm-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
      <div className={`lcm-container ${animIn ? 'lcm-fade-in' : 'lcm-fade-out'}`}
           style={{ maxWidth: phase === 'report' ? 760 : 640 }}>
        <button className="lcm-close" onClick={closeModal} aria-label="Close">
          <i className="fas fa-times" />
        </button>

        {/* ── INTRO PHASE (direct open — collect contact inline) ── */}
        {phase === 'intro' && (
          <div className="lcm-fade-in">
            <div style={{ textAlign:'center', marginBottom:28 }}>
              <div style={{ width:56, height:56, borderRadius:16, background:'rgba(245,197,24,0.12)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px' }}>
                <i className="fas fa-stethoscope" style={{ color:'var(--clr-gold)', fontSize:'1.4rem' }} />
              </div>
              <h2 style={{ color:'#fff', fontSize:'clamp(1.5rem,3vw,2rem)', fontWeight:800, marginBottom:8 }}>
                Free <span style={{ color:'var(--clr-gold)' }}>Business Diagnosis</span>
              </h2>
              <p style={{ color:'rgba(255,255,255,0.55)', fontSize:'0.92rem' }}>
                Answer 7 quick questions and get a personalised growth plan — free.
              </p>
            </div>

            <div className="lcm-form-grid">
              <div className="lcm-field lcm-field-full">
                <label>Full Name <span className="text-gold">*</span></label>
                <input className={`premium-input${introErrors.name ? ' lcm-input-error' : ''}`}
                       placeholder="Your name" value={introForm.name} onChange={setIntro('name')} autoFocus />
                {introErrors.name && <span className="lcm-error">{introErrors.name}</span>}
              </div>
              <div className="lcm-field">
                <label>Email <span className="text-gold">*</span></label>
                <input type="email"
                       className={`premium-input${introErrors.email ? ' lcm-input-error' : ''}`}
                       placeholder="you@example.com" value={introForm.email} onChange={setIntro('email')} />
                {introErrors.email && <span className="lcm-error">{introErrors.email}</span>}
              </div>
              <div className="lcm-field">
                <label>WhatsApp / Phone <span className="text-gold">*</span></label>
                <input type="tel"
                       className={`premium-input${introErrors.phone ? ' lcm-input-error' : ''}`}
                       placeholder="+91 XXXXX XXXXX" value={introForm.phone} onChange={setIntro('phone')} />
                {introErrors.phone && <span className="lcm-error">{introErrors.phone}</span>}
              </div>
            </div>

            <button className="btn-primary" onClick={handleIntroNext}
              style={{ width:'100%', marginTop:20, padding:'13px', fontSize:'1rem', textAlign:'center' }}>
              Start My Business Diagnosis &nbsp;<i className="fas fa-arrow-right" />
            </button>
            <p style={{ textAlign:'center', color:'rgba(255,255,255,0.35)', fontSize:'0.77rem', marginTop:12 }}>
              🔒 Private & confidential. Takes under 2 minutes.
            </p>
          </div>
        )}

        {/* ── QUIZ PHASE ── */}
        {phase === 'quiz' && (
          <div className={animating ? 'lcm-fade-out' : 'lcm-fade-in'}>
            <div style={{ textAlign:'center', marginBottom:10 }}>
              <span style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(245,197,24,0.1)', color:'var(--clr-gold)', border:'1px solid rgba(245,197,24,0.2)', padding:'5px 14px', borderRadius:20, fontSize:'0.78rem', fontWeight:600 }}>
                <i className="fas fa-stethoscope" /> Business Diagnosis
              </span>
            </div>

            <div className="quiz-progress-bar" style={{ width:'100%', maxWidth:560, margin:'16px auto 6px' }}>
              <div className="quiz-progress-fill" style={{ width:`${progress}%` }} />
            </div>
            <div className="quiz-step-indicator">Question {currentQ} of 7</div>

            <h3 className="quiz-question-text" style={{ marginTop:16, textAlign:'center' }}>{q.text}</h3>

            <div className="quiz-options-grid" style={{ maxWidth:560, margin:'0 auto' }}>
              {q.options.map((opt, i) => (
                <button key={i}
                  className={`quiz-option-card ${answers[currentQ] === i ? 'selected' : ''}`}
                  onClick={() => selectAnswer(currentQ, i)}>
                  <span className="quiz-option-icon">{opt.icon}</span>
                  <span className="quiz-option-text">{opt.text}</span>
                </button>
              ))}
            </div>

            <div style={{ display:'flex', justifyContent:'space-between', maxWidth:560, margin:'20px auto 0' }}>
              {sharedBackBtn()}
              {answers[currentQ] !== undefined && (
                <button className="btn-primary" style={{ padding:'10px 24px' }}
                  onClick={() => selectAnswer(currentQ, answers[currentQ])}>
                  Next <i className="fas fa-arrow-right" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ── REPORT PHASE ── */}
        {phase === 'report' && (() => {
          const report = generateReport();
          return (
          <div className="lcm-fade-in">
            <div style={{ textAlign:'center', marginBottom:28 }}>
              <span style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(16,185,129,0.1)', color:'#10b981', border:'1px solid rgba(16,185,129,0.2)', padding:'5px 14px', borderRadius:20, fontSize:'0.8rem', fontWeight:600, marginBottom:14 }}>
                <i className="fas fa-chart-line" /> Diagnosis Complete
              </span>
              <h2 style={{ color:'#fff', fontSize:'clamp(1.4rem,3vw,2rem)', marginBottom:8 }}>
                Your <span style={{ color:'var(--clr-gold)' }}>Growth Audit Result</span>
              </h2>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.92rem' }}>Based on your answers, here is our initial assessment.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24, marginBottom: 24 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    <div style={{ background: 'rgba(245,197,24,0.05)', border: '1px solid rgba(245,197,24,0.15)', padding: 20, borderRadius: 12, textAlign: 'center' }}>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Business Health Score</div>
                        <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--clr-gold)', lineHeight: 1 }}>{report.score}<span style={{fontSize:'1.5rem', color:'rgba(255,255,255,0.4)'}}>/100</span></div>
                        <div style={{ fontSize: '0.85rem', color: report.score > 50 ? '#10b981' : '#f87171', marginTop: 8, fontWeight: 500 }}>{report.reportLevel}</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: 20, borderRadius: 12, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Primary Bottleneck</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>{report.bottleneck}</div>
                    </div>
                </div>
                
                <div style={{ marginTop: 20, padding: 20, background: 'rgba(37, 211, 102, 0.05)', border: '1px solid rgba(37, 211, 102, 0.2)', borderRadius: 12 }}>
                    <h4 style={{ color: '#25d366', fontSize: '1rem', marginBottom: 8 }}><i className="fas fa-lightbulb" /> Recommended Next Steps</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                        We have prepared a custom strategy to solve your {report.bottleneck.toLowerCase()} issues. Submit below to send these results to Sarvanu.com, and we will personally reach out with your exact roadmap on WhatsApp.
                    </p>
                </div>
            </div>

            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:24, flexWrap:'wrap', gap:12 }}>
              {sharedBackBtn('Back to Quiz')}
              <button className="btn-primary" onClick={handleSubmit} disabled={submitting}
                style={{ padding:'13px 32px', background:'var(--clr-gold)', color:'#000', fontWeight:700, fontSize:'0.95rem' }}>
                {submitting
                  ? <><i className="fas fa-spinner fa-spin" /> Submitting…</>
                  : <><i className="fab fa-whatsapp" /> Receive Full Strategy via WhatsApp</>}
              </button>
            </div>
            <p style={{ textAlign:'center', color:'rgba(255,255,255,0.35)', fontSize:'0.77rem', marginTop:12 }}>
              Sarvanu.com will personally message you on WhatsApp within 24 hours.
            </p>
          </div>
          );
        })()}

        {/* ── SUCCESS PHASE ── */}
        {phase === 'success' && reportData && (
          <div className="lcm-fade-in" style={{ textAlign:'center', padding:'20px 0' }}>
            <div style={{ width:72, height:72, borderRadius:'50%', background:'rgba(16,185,129,0.12)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px' }}>
              <i className="fas fa-check-circle" style={{ color:'#10b981', fontSize:'2rem' }} />
            </div>
            <h2 style={{ color:'#fff', fontSize:'1.6rem', fontWeight:800, marginBottom:10 }}>Analysis Complete!</h2>
            <p style={{ color:'rgba(255,255,255,0.55)', maxWidth:420, margin:'0 auto 24px', lineHeight:1.7, fontSize:'0.92rem' }}>
              Thank you, <strong style={{color:'#fff'}}>{reportData.name}</strong>. Your business has been analysed successfully.
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, maxWidth:380, margin:'0 auto 24px', width:'100%' }}>
              <div style={{ background:'rgba(245,197,24,0.06)', border:'1px solid rgba(245,197,24,0.2)', borderRadius:12, padding:'16px 12px', textAlign:'center' }}>
                <div style={{ fontSize:'0.7rem', color:'rgba(255,255,255,0.5)', textTransform:'uppercase', letterSpacing:1, marginBottom:6 }}>Health Score</div>
                <div style={{ fontSize:'2.2rem', fontWeight:800, color:'var(--clr-gold)', lineHeight:1 }}>{reportData.healthScore}<span style={{fontSize:'0.9rem',color:'rgba(255,255,255,0.3)'}}>/100</span></div>
              </div>
              <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'16px 12px', textAlign:'center', display:'flex', flexDirection:'column', justifyContent:'center' }}>
                <div style={{ fontSize:'0.7rem', color:'rgba(255,255,255,0.5)', textTransform:'uppercase', letterSpacing:1, marginBottom:6 }}>Bottleneck</div>
                <div style={{ fontSize:'0.82rem', fontWeight:700, color:'#fff', lineHeight:1.3 }}>{reportData.bottleneck}</div>
              </div>
            </div>

            {/* ── Email Delivery Promise Card ── */}
            <div style={{
              background:'rgba(245,197,24,0.04)', border:'1px solid rgba(245,197,24,0.15)',
              borderRadius:14, padding:'20px 18px', maxWidth:420, margin:'0 auto 16px',
              textAlign:'center',
            }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, marginBottom:10 }}>
                <i className="fas fa-envelope" style={{ color:'#F5C518', fontSize:'1rem' }} />
                <span style={{ fontSize:'0.88rem', fontWeight:700, color:'#F5C518' }}>Report Being Delivered</span>
              </div>
              <p style={{ color:'rgba(255,255,255,0.55)', fontSize:'0.85rem', lineHeight:1.7, margin:0 }}>
                A detailed, consulting-grade <strong style={{color:'#fff'}}>7-page PDF report</strong> with your personalised strategic roadmap is being compiled and will be dispatched directly to{' '}
                <strong style={{color:'var(--clr-gold)'}}>{reportData.email}</strong> within <strong style={{color:'#fff'}}>5 minutes</strong>.
              </p>
              <p style={{ color:'rgba(255,255,255,0.3)', fontSize:'0.75rem', margin:'10px 0 0' }}>
                Please check your inbox and promotions folder.
              </p>
            </div>

            <p style={{ color:'rgba(255,255,255,0.3)', fontSize:'0.77rem', marginTop:8 }}>📱 Our team will reach out within 24 hours.</p>
            <button onClick={closeModal} style={{ marginTop:16, background:'transparent', border:'1px solid rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.4)', padding:'8px 20px', borderRadius:8, cursor:'pointer', fontSize:'0.85rem' }}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
