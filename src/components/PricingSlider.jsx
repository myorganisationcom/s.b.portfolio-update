'use client';

import { useState, useRef, useEffect } from 'react';

export default function PricingSlider() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1); // Start with 'Growth' tier active
  const cards = 3;

  useEffect(() => {
    if (sliderRef.current) {
      // Small timeout to allow render to complete
      setTimeout(() => {
         scrollToCard(1);
      }, 500);
    }
  }, []);

  const scrollToCard = (index) => {
    if (!sliderRef.current) return;
    
    // Calculate roughly based on card children.
    const cardElements = document.querySelectorAll('.pricing-card');
    if (cardElements.length > 0) {
        const cardWidth = cardElements[0].offsetWidth + 30; // approx gap
        sliderRef.current.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
        setActiveIndex(index);
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const cardElements = document.querySelectorAll('.pricing-card');
    if (cardElements.length > 0) {
        const cardWidth = cardElements[0].offsetWidth + 30;
        const index = Math.round(sliderRef.current.scrollLeft / cardWidth);
        setActiveIndex(index);
    }
  };

  return (
    <>
      <div className="pricing-slider-wrapper">
        <button className="pricing-nav prev" onClick={scrollPrev} aria-label="Previous Slide">❮</button>

        <div className="pricing-slider" id="pricingSlider" ref={sliderRef} onScroll={handleScroll}>
          {/* Basic Tier */}
          <div className="pricing-card">
            <div className="tier-name">Basic</div>
            <div className="tier-price">₹15,000<span>/month</span></div>
            <div className="tier-ideal">For Solopreneurs & Early Startups</div>
            <ul className="features-list">
              <li>1x Business Audit & Strategy Call</li>
              <li>Basic Brand Identity Review</li>
              <li>Marketing Strategy Overview</li>
              <li>Social Media Plan (1 Platform)</li>
              <li>Monthly Summary Report</li>
              <li className="disabled">Website Structure & Content Plan</li>
              <li className="disabled">Operations & Workflow Audit</li>
            </ul>
            <a href="#cta" className="select-plan-btn">Get Started</a>
          </div>

          {/* Growth Tier (Featured) */}
          <div className="pricing-card featured">
            <div className="tier-name">Growth</div>
            <div className="tier-price">₹30,000<span>/month</span></div>
            <div className="tier-ideal">For Growing MSMEs & Agencies</div>
            <ul className="features-list">
              <li>1x Business Audit & Strategy Call</li>
              <li>Full Brand Identity (Naming + Vision)</li>
              <li>Full Monthly Marketing Plan</li>
              <li>Social Media Plan (2 Platforms)</li>
              <li>Website Structure & Content Plan</li>
              <li>Business Development Strategy</li>
              <li>Initial SOPs & Workflow Audit</li>
              <li>Growth Dashboard Reporting</li>
            </ul>
            <a href="#cta" className="select-plan-btn">Book Strategy Call</a>
          </div>

          {/* Premium Tier */}
          <div className="pricing-card">
            <div className="tier-name">Premium</div>
            <div className="tier-price">₹55,000<span>/month</span></div>
            <div className="tier-ideal">For Multi-brand Founders & Scale Projects</div>
            <ul className="features-list">
              <li>2x Strategy Calls + On-call Support</li>
              <li>Custom Messaging Framework</li>
              <li>Dynamic Campaign-level Marketing</li>
              <li>Social Media (3 Platforms + Trends)</li>
              <li>Full Funnel/CRM Setup + Analytics</li>
              <li>B2B Leads & Outreach Tools</li>
              <li>SOPs + Automation Tools</li>
              <li>Full Business Intelligence View</li>
            </ul>
            <a href="#cta" className="select-plan-btn">Get Started</a>
          </div>
        </div>

        <button className="pricing-nav next" onClick={scrollNext} aria-label="Next Slide">❯</button>
      </div>

      <div className="pricing-dots">
         {[0, 1, 2].map((i) => (
             <button
               key={i}
               className={`pricing-dot ${activeIndex === i ? 'active' : ''}`}
               onClick={() => scrollToCard(i)}
             />
         ))}
      </div>
    </>
  );
}
