'use client';

import { useRef } from 'react';

export default function ServiceSlider() {
    const sliderRef = useRef(null);

    const scrollPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollNext = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="service-slider-wrapper">
            <button className="service-nav prev" onClick={scrollPrev} aria-label="Previous Slide">‹</button>
            <div className="service-slider" ref={sliderRef}>
                <div className="service-card">
                    <div className="service-icon">🎯</div>
                    <h3>Brand Acceleration</h3>
                    <p>Naming, vision, voice, differentiation & storytelling for a unique market position.</p>
                    <div className="price-tag">From ₹25,000</div>
                </div>
                <div className="service-card">
                    <div className="service-icon">📊</div>
                    <h3>Investor Readiness</h3>
                    <p>Pitch deck creation, financial projections, and mock Q&A preparation.</p>
                    <div className="price-tag">From ₹25,000</div>
                </div>
                <div className="service-card">
                    <div className="service-icon">🚀</div>
                    <h3>Market Entry & Launch</h3>
                    <p>Market research, go-to-market strategy, and launch campaign execution.</p>
                    <div className="price-tag">From ₹15,000</div>
                </div>
                <div className="service-card">
                    <div className="service-icon"><img src="/logo.png" alt="Digital Authority" className="logo-img" /></div>
                    <h3>Digital Authority</h3>
                    <p>LinkedIn growth, thought leadership content, and media strategy.</p>
                    <div className="price-tag">From ₹15,000/month</div>
                </div>
                <div className="service-card">
                    <div className="service-icon">⚙️</div>
                    <h3>Operational Excellence</h3>
                    <p>SOP development, CRM automation setup, and KPI dashboards.</p>
                    <div className="price-tag">From ₹20,000</div>
                </div>
                <div className="service-card">
                    <div className="service-icon">🌍</div>
                    <h3>Global Expansion</h3>
                    <p>Cross-border strategy, partnership mapping, and B2B outreach.</p>
                    <div className="price-tag">Custom Quote</div>
                </div>
            </div>
            <button className="service-nav next" onClick={scrollNext} aria-label="Next Slide">›</button>
        </div>
    );
}
