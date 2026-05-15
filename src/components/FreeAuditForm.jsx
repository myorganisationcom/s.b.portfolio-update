'use client';

import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';

export default function FreeAuditForm({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0); // 0 = welcome, 1-6 = questions, 7 = success
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    businessType: '',
    revenue: '',
    challenge: '',
    otherChallenge: '',
    investment: ''
  });
  const [isAnimating, setIsAnimating] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentStep(0); // Reset when opened
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep === 1 && !formData.name) return alert("Please enter your name.");
    if (currentStep === 2 && !formData.whatsapp) return alert("Please enter your WhatsApp number.");
    if (currentStep === 3 && !formData.businessType) return alert("Please enter your business type.");
    if (currentStep === 4 && !formData.revenue) return alert("Please select a revenue range.");
    if (currentStep === 5 && !formData.challenge) return alert("Please select your biggest challenge.");
    if (currentStep === 5 && formData.challenge === 'Something else' && !formData.otherChallenge) return alert("Please specify your challenge.");
    if (currentStep === 6 && !formData.investment) return alert("Please select your investment readiness.");

    if (currentStep === 6) {
      submitForm();
      return;
    }

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 300);
    } else {
      setCurrentStep(0);
    }
  };

  const submitForm = () => {
    setIsAnimating(true);

    // Construct internal tag logic
    let leadQuality = "Nurture";
    if (formData.revenue === '₹20 lakh+/month' || formData.revenue === '₹5 lakh – ₹20 lakh/month' || formData.revenue === '₹1 lakh – ₹5 lakh/month') {
      if (formData.investment.includes('Yes, I am serious')) leadQuality = "Hot";
      else if (formData.investment.includes('I am exploring')) leadQuality = "Warm";
    }

    const waNumber = "918700541657";
    const waMessage = `*New Free Business Growth Audit*\n\n*Name:* ${formData.name}\n*WhatsApp:* ${formData.whatsapp}\n*Business Type:* ${formData.businessType}\n*Revenue:* ${formData.revenue}\n*Challenge:* ${formData.challenge === 'Something else' ? formData.otherChallenge : formData.challenge}\n*Investment Readiness:* ${formData.investment}\n\n_Internal Tag:_ ${leadQuality}`;

    setTimeout(() => {
      setCurrentStep(7); // Show success
      setIsAnimating(false);
      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`, '_blank');
    }, 800);
  };

  const progressPercentage = ((currentStep - 1) / 6) * 100;

  return (
    <div className="quiz-modal-overlay">
      <div className="quiz-modal-container">
        <div className="quiz-header-controls" style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '10px', zIndex: 10 }}>
          <button
            className="quiz-skip-btn"
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'var(--clr-text-muted)',
              padding: '6px 15px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-white)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-muted)'}
          >
            Skip <i className="fas fa-forward"></i>
          </button>
          <button className="quiz-close-btn" onClick={onClose} style={{ position: 'static' }}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* WELCOME SCREEN */}
        {currentStep === 0 && (
          <FadeIn className="quiz-content-wrapper">
            <div className="quiz-header">
              <span className="expertise-badge" style={{ margin: '0 auto 15px auto', display: 'inline-block' }}>SARVANU STRATEGIES</span>
              <h2>Free Business <span className="text-gold">Growth Audit</span></h2>
              <p>This form takes 2 minutes to complete. Based on your answers, Sarvanu will personally connect with you and give tailored advice for your business — absolutely free, no obligation.</p>
            </div>

            <div className="quiz-hero-visual" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
              <div className="quiz-glow" style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)' }}></div>
              <i className="fas fa-search-dollar quiz-hero-icon" style={{ color: '#3b82f6' }}></i>
            </div>

            <button className="btn-primary" onClick={() => setCurrentStep(1)} style={{ marginTop: '30px', width: '100%', maxWidth: '300px' }}>
              Start Audit <i className="fas fa-arrow-right"></i>
            </button>
          </FadeIn>
        )}

        {/* FORM SCREENS */}
        {currentStep > 0 && currentStep <= 6 && (
          <div className={`quiz-content-wrapper ${isAnimating ? 'fade-out' : 'fade-in'}`} style={{ justifyContent: 'flex-start', paddingTop: '60px' }}>
            <div className="quiz-progress-bar" style={{ width: '100%', maxWidth: '500px' }}>
              <div className="quiz-progress-fill" style={{ width: `${progressPercentage}%`, background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' }}></div>
            </div>
            <div className="quiz-step-indicator" style={{ color: '#3b82f6' }}>Question {currentStep} of 6</div>

            <div style={{ width: '100%', maxWidth: '500px', textAlign: 'left', margin: '0 auto' }}>

              {/* Step 1: Name */}
              {currentStep === 1 && (
                <div className="form-step">
                  <h3 className="quiz-question-text" style={{ textAlign: 'left', marginBottom: '10px' }}>What is your name? <span className="text-gold">*</span></h3>
                  <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>Enter your full name</p>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="premium-input"
                    autoFocus
                  />
                </div>
              )}

              {/* Step 2: WhatsApp */}
              {currentStep === 2 && (
                <div className="form-step">
                  <h3 className="quiz-question-text" style={{ textAlign: 'left', marginBottom: '10px' }}>WhatsApp number? <span className="text-gold">*</span></h3>
                  <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>Sarvanu will connect with you on this number.</p>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="premium-input"
                    autoFocus
                  />
                </div>
              )}

              {/* Step 3: Business Type */}
              {currentStep === 3 && (
                <div className="form-step">
                  <h3 className="quiz-question-text" style={{ textAlign: 'left', marginBottom: '10px' }}>What is your business? <span className="text-gold">*</span></h3>
                  <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>Business type and industry — e.g. "Digital marketing agency" or "Retail chain"</p>
                  <textarea
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    placeholder="Describe your business..."
                    className="premium-input"
                    rows="3"
                    autoFocus
                  ></textarea>
                </div>
              )}

              {/* Step 4: Revenue */}
              {currentStep === 4 && (
                <div className="form-step">
                  <h3 className="quiz-question-text" style={{ textAlign: 'left', marginBottom: '10px' }}>What is your monthly revenue range? <span className="text-gold">*</span></h3>
                  <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>Please answer honestly — this helps us give the best advice.</p>
                  <div className="quiz-options-grid" style={{ maxWidth: '100%' }}>
                    {[
                      { val: 'Below ₹1 lakh/month', label: 'Below ₹1 lakh/month' },
                      { val: '₹1 lakh – ₹5 lakh/month', label: '₹1 lakh – ₹5 lakh/month (Growing)' },
                      { val: '₹5 lakh – ₹20 lakh/month', label: '₹5 lakh – ₹20 lakh/month (Scaling)' },
                      { val: '₹20 lakh+/month', label: '₹20 lakh+/month' }
                    ].map((opt, i) => (
                      <button
                        key={i}
                        className={`quiz-option-card ${formData.revenue === opt.val ? 'selected' : ''}`}
                        onClick={() => { setFormData({ ...formData, revenue: opt.val }); setTimeout(handleNext, 300); }}
                      >
                        <div className={`radio-circle ${formData.revenue === opt.val ? 'active' : ''}`}></div>
                        <span className="quiz-option-text">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Challenge */}
              {currentStep === 5 && (
                <div className="form-step">
                  <h3 className="quiz-question-text" style={{ textAlign: 'left', marginBottom: '10px' }}>What is your biggest business challenge right now? <span className="text-gold">*</span></h3>
                  <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>The thing that is stopping your growth.</p>
                  <div className="quiz-options-grid" style={{ maxWidth: '100%', maxHeight: '300px', overflowY: 'auto', paddingRight: '5px' }}>
                    {[
                      'Not getting sales and leads',
                      'Do not know how to do marketing',
                      'No systems/processes in the business',
                      'Difficult to manage the team',
                      'Revenue is stuck, not growing',
                      'Need investor or funding',
                      'Something else'
                    ].map((opt, i) => (
                      <button
                        key={i}
                        className={`quiz-option-card ${formData.challenge === opt ? 'selected' : ''}`}
                        onClick={() => { setFormData({ ...formData, challenge: opt }); if (opt !== 'Something else') setTimeout(handleNext, 300); }}
                      >
                        <div className={`radio-circle ${formData.challenge === opt ? 'active' : ''}`}></div>
                        <span className="quiz-option-text">{opt}</span>
                      </button>
                    ))}
                    {formData.challenge === 'Something else' && (
                      <input
                        type="text"
                        value={formData.otherChallenge}
                        onChange={(e) => setFormData({ ...formData, otherChallenge: e.target.value })}
                        placeholder="Please specify..."
                        className="premium-input"
                        style={{ marginTop: '10px' }}
                        autoFocus
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Step 6: Investment */}
              {currentStep === 6 && (
                <div className="form-step">
                  <h3 className="quiz-question-text" style={{ textAlign: 'left', marginBottom: '10px' }}>If you find the right solution, are you ready to invest? <span className="text-gold">*</span></h3>
                  <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>This is not to qualify you — we ask to give you the right advice.</p>
                  <div className="quiz-options-grid" style={{ maxWidth: '100%' }}>
                    {[
                      { val: 'Yes, I am serious', label: 'Yes, I am serious — I will invest if I find the right consultant' },
                      { val: 'I am exploring', label: 'I am exploring, want to see options' },
                      { val: 'No budget right now', label: 'No budget right now' }
                    ].map((opt, i) => (
                      <button
                        key={i}
                        className={`quiz-option-card ${formData.investment === opt.val ? 'selected' : ''}`}
                        onClick={() => setFormData({ ...formData, investment: opt.val })}
                      >
                        <div className={`radio-circle ${formData.investment === opt.val ? 'active' : ''}`}></div>
                        <span className="quiz-option-text">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Navigation Buttons for Form Steps */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '500px', marginTop: '30px' }}>
              <button
                className="btn-secondary"
                onClick={handlePrev}
                style={{ padding: '10px 20px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}
              >
                <i className="fas fa-arrow-left"></i> Back
              </button>

              {currentStep < 6 ? (
                <button
                  className="btn-primary"
                  onClick={handleNext}
                  style={{ padding: '10px 30px', background: '#3b82f6', color: 'white', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)' }}
                >
                  Next <i className="fas fa-arrow-right"></i>
                </button>
              ) : (
                <button
                  className="btn-primary"
                  onClick={handleNext}
                  style={{ padding: '10px 30px', background: '#10b981', color: 'white', boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)' }}
                >
                  Apply for Audit <i className="fas fa-check"></i>
                </button>
              )}
            </div>

            <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.8rem', marginTop: '20px', maxWidth: '500px', textAlign: 'center' }}>
              After submitting the form, Sarvanu will personally message you on WhatsApp within 24 hours. No spam, no pressure.
            </p>
          </div>
        )}

        {/* SUCCESS SCREEN */}
        {currentStep === 7 && (
          <FadeIn className="quiz-content-wrapper result-screen" style={{ textAlign: 'center', alignItems: 'center' }}>
            <div className="quiz-hero-visual" style={{ background: 'rgba(16, 185, 129, 0.1)', marginBottom: '20px' }}>
              <div className="quiz-glow" style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)' }}></div>
              <i className="fas fa-check-circle quiz-hero-icon" style={{ color: '#10b981' }}></i>
            </div>
            <h2 className="result-title">Application Submitted Successfully!</h2>

            <p className="result-description" style={{ textAlign: 'center' }}>
              Thank you for applying. You will be redirected to WhatsApp to send your details directly to Sarvanu.
            </p>

            <button className="btn-primary" onClick={() => onClose()} style={{ marginTop: '20px' }}>
              Close Window
            </button>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
