'use client';

import React, { useEffect, useRef } from 'react';
import ServiceSlider from '@/components/ServiceSlider';
import TestimonialSlider from '@/components/TestimonialSlider';
import FadeIn from '@/components/FadeIn';
import MissionVision from '@/components/MissionVision';
import PremiumPricing from '@/components/PremiumPricing';
import FaqSection from '@/components/FaqSection';
import HeroLiveDashboard from '@/components/HeroLiveDashboard';
import DetailedServiceBreakdown from '@/components/DetailedServiceBreakdown';
import AboutCompany from '@/components/AboutCompany';
import CtaSection from '@/components/CtaSection';
import { useLeadModal } from '@/components/LeadModalContext';

export default function Home() {
  const { openModal, openDiagnosis, openAudit, openBook } = useLeadModal();

  // Auto-open Business Diagnosis popup after page fully mounts
  // useRef prevents double-fire in React StrictMode
  const opened = useRef(false);
  useEffect(() => {
    if (opened.current) return;
    opened.current = true;
    const timer = setTimeout(() => openAudit(), 1800);
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* HERO SECTION */}
      <section id="hero">
        <div className="hero-container">
          <div className="hero-content" style={{ marginTop: '20px' }}>
            <p className="hero-tagline">Business Consultant & Growth Strategist</p>
            <h1>Build, Systemize & Scale <span>Your Business</span></h1>
            <p className="hero-description" style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '25px', opacity: 0.9 }}>
              <strong>Sarvanu.com</strong> is a results-driven business consulting organization. We partner with founders, startups, and growing enterprises to build scalable systems, streamline operations, and execute strategies that create compounding, long-term growth.
              <br/><br/>
              If you are struggling with direction, operations, or scaling—this is where structure meets strategy.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="btn-primary">
                <i className="fas fa-layer-group"></i> View Packages & Pricing
              </a>
              <button onClick={openAudit} className="btn-secondary" style={{ background:'none', border:'none', cursor:'pointer', font:'inherit', padding:0 }}>
                <i className="fas fa-calendar-alt"></i> Book Free Strategy Call
              </button>
            </div>
          </div>
          
          <HeroLiveDashboard />
        </div>
      </section>

      {/* MISSION & VISION */}
      <MissionVision />

      {/* ABOUT COMPANY SECTION */}
      <AboutCompany />

      {/* WHO SHOULD WORK WITH SARVANU.COM */}
      <section id="work-expertise" className="expertise-section">
        <div className="container expertise-container">
          <div className="expertise-header">
            <span className="expertise-badge">Partnership & Expertise</span>
            <h2>Who Should Work With <span className="text-gold">Sarvanu.com?</span></h2>
            <p className="expertise-subtitle">
              This consulting organization is built for founders who want structure, clarity, and predictable growth.
            </p>
          </div>

          <div className="expertise-cards-wrapper">
            {/* Audience Card */}
            <FadeIn className="expertise-card dark-card">
              <div className="expertise-card-glow yellow-glow"></div>
              <h3>
                <div className="expertise-icon-box yellow-box">
                  <i className="fas fa-users"></i>
                </div>
                Ideal For
              </h3>

              <ul className="expertise-list">
                {[
                  { icon: 'fa-rocket', text: 'Startups looking for direction and structure' },
                  { icon: 'fa-chart-line', text: 'Business owners stuck in growth or scaling phase' },
                  { icon: 'fa-cogs', text: 'Entrepreneurs managing chaotic operations' },
                  { icon: 'fa-lightbulb', text: 'Founders who want clarity, systems, and predictable growth' }
                ].map((item, i) => (
                  <li key={i}>
                    <div className="list-icon-box">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: '20px', fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>
                If your business feels unstructured, slow, or inconsistent—this is exactly where Sarvanu.com steps in.
              </p>
            </FadeIn>

            {/* Why Choose Card */}
            <FadeIn className="expertise-card dark-card">
              <div className="expertise-card-glow blue-glow"></div>
              <h3>
                <div className="expertise-icon-box blue-box">
                  <i className="fas fa-star"></i>
                </div>
                Why Choose Sarvanu.com?
              </h3>

              <ul className="expertise-list">
                {[
                  { icon: 'fa-puzzle-piece', text: 'Turning complex business problems into elegant systems' },
                  { icon: 'fa-balance-scale', text: 'Blending traditional discipline with modern execution' },
                  { icon: 'fa-handshake', text: 'Direct partnership model—no middlemen, no delays' },
                  { icon: 'fa-hammer', text: 'Built for execution, not just strategy decks' }
                ].map((item, i) => (
                  <li key={i}>
                    <div className="list-icon-box">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: '20px', fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>
                Our approach is practical, structured, and built for real-world business challenges—not theory.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <div id="services">
        <PremiumPricing />
      </div>

      {/* SPECIALIZED SERVICES SLIDER */}
      <section className="service-cards-section">
        <h2>Specialized Solutions</h2>
        <ServiceSlider />
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="testimonial-section">
        <div className="container">
          <h2>What our Clients say.</h2>
          <p className="subtitle" style={{ marginBottom: '40px' }}>Real stories from founders, entrepreneurs & businesses we've worked with</p>
          <TestimonialSlider />
        </div>
      </section>

      {/* DETAILED SERVICE BREAKDOWN SECTION */}
      <DetailedServiceBreakdown />

      {/* FAQ SECTION */}
      <FaqSection />

      {/* CTA SECTION */}
      <CtaSection />
    </>
  );
}
