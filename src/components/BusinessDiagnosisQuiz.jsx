'use client';

import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';

const questions = [
  {
    id: 1,
    text: "When you look at last month's revenue — what's your honest feeling?",
    options: [
      { icon: "📉", text: "It dropped or was really inconsistent" },
      { icon: "😐", text: "Flat — same numbers as always" },
      { icon: "📈", text: "Growing, but much slower than I want" },
      { icon: "🔥", text: "Growing fast but I feel out of control" }
    ]
  },
  {
    id: 2,
    text: "Where do most of your new clients or customers come from today?",
    options: [
      { icon: "🤝", text: "Referrals & word of mouth only" },
      { icon: "📱", text: "Social media — but results are inconsistent" },
      { icon: "🔄", text: "Mostly repeat customers, rarely new ones" },
      { icon: "🤷", text: "Honestly, I'm not sure" }
    ]
  },
  {
    id: 3,
    text: "How many hours a week do YOU personally work inside the business?",
    options: [
      { icon: "⚡", text: "60+ hours — I'm doing everything myself" },
      { icon: "⏱️", text: "40-60 hours — busy but managing" },
      { icon: "📋", text: "30-40 hours — somewhat delegated" },
      { icon: "🧘", text: "Under 30 hours — team handles most things" }
    ]
  },
  {
    id: 4,
    text: "What happens when you try to close a sale or pitch your service?",
    options: [
      { icon: "😬", text: "Most people say 'too expensive' or ghost me" },
      { icon: "🔄", text: "They show interest but rarely convert" },
      { icon: "🙄", text: "I don't have a clear pitch or process" },
      { icon: "✅", text: "Sales is fine — my other problems are bigger" }
    ]
  },
  {
    id: 5,
    text: "If I asked about your business systems — what's closest to reality?",
    options: [
      { icon: "📁", text: "What systems? Everything is in my head" },
      { icon: "📊", text: "Some spreadsheets and WhatsApp groups" },
      { icon: "🛠️", text: "We have tools but they're not connected" },
      { icon: "⚙️", text: "Solid systems — but need to scale them" }
    ]
  },
  {
    id: 6,
    text: "How clear is your brand positioning — what makes you different?",
    options: [
      { icon: "❓", text: "We're not very different from competitors" },
      { icon: "💭", text: "I know it internally but can't explain it clearly" },
      { icon: "📝", text: "We have a message but it's not converting" },
      { icon: "🎯", text: "Clear and strong — brand is not my issue" }
    ]
  },
  {
    id: 7,
    text: "What's the #1 thing you most want to fix in your business right now?",
    options: [
      { icon: "💰", text: "Get more clients and increase revenue" },
      { icon: "🏗️", text: "Build proper systems so I can scale" },
      { icon: "🗺️", text: "Get a clear strategy and direction" },
      { icon: "🌟", text: "Build a brand people actually know and trust" }
    ]
  }
];

export default function BusinessDiagnosisQuiz({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0); // 0 = welcome, 1-7 = questions, 8 = analyzing, 9 = result
  const [answers, setAnswers] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStart = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(1);
      setIsAnimating(false);
    }, 300);
  };

  const handleOptionSelect = (optionIndex) => {
    setAnswers({ ...answers, [currentStep]: optionIndex });
    setIsAnimating(true);
    
    setTimeout(() => {
      if (currentStep < 7) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(8); // Analyzing state
        simulateAnalysis();
      }
      setIsAnimating(false);
    }, 400);
  };

  const simulateAnalysis = () => {
    setTimeout(() => {
      setCurrentStep(9); // Show result
    }, 2500);
  };

  const handleWhatsAppAudit = () => {
    const waNumber = "918700541657";
    const waMessage = `Hi Sarvanu.com, I just completed the Business Problem Diagnosis Quiz and my primary challenge is Sales & Conversion. I'd like to book my free audit.`;
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
    window.open(waLink, '_blank');
  };

  const progressPercentage = ((currentStep - 1) / 7) * 100;

  return (
    <div className="quiz-modal-overlay">
      <div className="quiz-modal-container">
        <button className="quiz-close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        {/* WELCOME SCREEN */}
        {currentStep === 0 && (
          <FadeIn className="quiz-content-wrapper">
            <div className="quiz-header">
              <span className="expertise-badge" style={{ margin: '0 auto 15px auto', display: 'inline-block' }}>Free Diagnosis</span>
              <h2>Business Problem <span className="text-gold">Diagnosis</span></h2>
              <p>Take this 2-minute audit to uncover exactly what's holding your business back from scaling smoothly.</p>
            </div>
            
            <div className="quiz-hero-visual">
              <div className="quiz-glow"></div>
              <i className="fas fa-chart-pie quiz-hero-icon"></i>
            </div>

            <button className="btn-primary" onClick={handleStart} style={{ marginTop: '30px', width: '100%', maxWidth: '300px' }}>
              Diagnose My Business <i className="fas fa-arrow-right"></i>
            </button>
          </FadeIn>
        )}

        {/* QUESTION SCREENS */}
        {currentStep > 0 && currentStep <= 7 && (
          <div className={`quiz-content-wrapper ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            <div className="quiz-progress-bar">
              <div className="quiz-progress-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <div className="quiz-step-indicator">Question {currentStep} of 7</div>

            <h3 className="quiz-question-text">{questions[currentStep - 1].text}</h3>

            <div className="quiz-options-grid">
              {questions[currentStep - 1].options.map((option, index) => (
                <button 
                  key={index} 
                  className={`quiz-option-card ${answers[currentStep] === index ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <span className="quiz-option-icon">{option.icon}</span>
                  <span className="quiz-option-text">{option.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ANALYZING SCREEN */}
        {currentStep === 8 && (
          <FadeIn className="quiz-content-wrapper text-center">
            <div className="analyzing-spinner">
              <div className="spinner-ring"></div>
              <i className="fas fa-brain spinner-icon text-gold"></i>
            </div>
            <h3 style={{ marginTop: '20px' }}>Analyzing Your Responses...</h3>
            <p className="subtitle">Identifying your core growth constraints.</p>
          </FadeIn>
        )}

        {/* RESULT SCREEN */}
        {currentStep === 9 && (
          <FadeIn className="quiz-content-wrapper result-screen">
            <div className="expertise-badge" style={{ backgroundColor: 'rgba(235, 87, 87, 0.1)', color: '#eb5757', borderColor: 'rgba(235, 87, 87, 0.2)' }}>
              Primary Challenge: SALES & CONVERSION
            </div>
            <h2 className="result-title">You're Struggling to Convert Interest Into Revenue</h2>
            
            <p className="result-description">
              You likely have some leads or inquiries, but something breaks down before they become paying clients. This is fixable with the right positioning and a structured sales process.
            </p>

            <div className="insights-box">
              <h4 style={{ marginBottom: '15px', color: 'var(--clr-gold)' }}>Top 3 Actionable Insights:</h4>
              <ul className="expertise-list">
                <li>
                  <div className="list-icon-box" style={{ width: '30px', height: '30px', minWidth: '30px', fontSize: '0.8rem' }}>1</div>
                  <span><strong>Unclear value proposition:</strong> Prospects don't immediately understand why you're worth your price. The first 10 seconds of your pitch are losing them.</span>
                </li>
                <li>
                  <div className="list-icon-box" style={{ width: '30px', height: '30px', minWidth: '30px', fontSize: '0.8rem' }}>2</div>
                  <span><strong>No structured sales process:</strong> You're improvising every conversation instead of running a repeatable, proven system.</span>
                </li>
                <li>
                  <div className="list-icon-box" style={{ width: '30px', height: '30px', minWidth: '30px', fontSize: '0.8rem' }}>3</div>
                  <span><strong>Price objections without confident rebuttals:</strong> You lack a practiced response to 'too expensive', leading to lost deals.</span>
                </li>
              </ul>
            </div>

            <div className="result-cta-box">
              <p style={{ marginBottom: '15px', fontSize: '0.95rem' }}>Want a customized execution plan to fix this?</p>
              <button className="btn-primary" onClick={handleWhatsAppAudit} style={{ width: '100%', padding: '15px' }}>
                <i className="fab fa-whatsapp"></i> Book Free Audit on WhatsApp
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
