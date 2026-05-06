'use client';

import ServiceSlider from '@/components/ServiceSlider';
import TestimonialSlider from '@/components/TestimonialSlider';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import MissionVision from '@/components/MissionVision';
import PremiumPricing from '@/components/PremiumPricing';
import FaqSection from '@/components/FaqSection';
import HeroLiveDashboard from '@/components/HeroLiveDashboard';
import DetailedServiceBreakdown from '@/components/DetailedServiceBreakdown';
import CtaSection from '@/components/CtaSection';

export default function Home() {
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const stage = formData.get('business_stage');
    const goals = formData.get('goals');

    const waNumber = "918700541657";
    const waMessage = `*New Strategy Call Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Business Stage:* ${stage}\n*Challenge:* ${goals}`;
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    window.open(waLink, '_blank');
  };

  return (
    <>
      {/* HERO SECTION */}
      <section id="hero">
        <div className="hero-container">
          <div className="hero-content" style={{ marginTop: '20px' }}>
            <p className="hero-tagline">Business Consultant & Growth Strategist</p>
            <h1>Build, Systemize & Scale <span>Your Business</span></h1>
            <p className="hero-description" style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '25px', opacity: 0.9 }}>
              Sarvanu.com is a results-driven business consulting organization led by <strong>Sarvanu Banerjee</strong>. We help founders and entrepreneurs transform ideas into scalable systems. By combining traditional business principles with modern execution strategies, we ensure that businesses don't just grow fast—but grow right.
              <br/><br/>
              If you are struggling with direction, operations, or scaling—this is where structure meets strategy.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="btn-primary">
                <i className="fas fa-layer-group"></i> View Packages & Pricing
              </a>
              <a href="#cta" className="btn-secondary">
                <i className="fas fa-calendar-alt"></i> Book Free Strategy Call
              </a>
            </div>
          </div>
          
          <HeroLiveDashboard />
        </div>
      </section>

      {/* MISSION & VISION */}
      <MissionVision />

      {/* ABOUT SECTION - WHO IS SARVANU */}
      <section id="about" className="about-section">
        <div className="container about-container">
          <FadeIn direction="left" className="about-image">
            <Image src="/your-photo.jpeg" alt="Sarvanu" width={400} height={400} className="about-photo" />
          </FadeIn>

          <FadeIn direction="right" className="about-text">
            <h2>Who is Sarvanu Banerjee?</h2>
            <p>
              <strong>Sarvanu Banerjee</strong> is a business management, marketing, and growth consultant who works directly with founders and entrepreneurs to build scalable and sustainable businesses.
            </p>
            <p>
              Unlike traditional consultants, Sarvanu works as a hands-on partner—helping implement real systems and strategies instead of just giving advice. He is recognized for turning complex problems into simple systems, blending traditional business discipline with modern strategies, and focusing on execution, not just planning.
            </p>
            <h3>What Does He Do?</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
              <li style={{ marginBottom: '10px' }}><i className="fas fa-check text-gold" style={{ color: 'var(--clr-gold)', marginRight: '10px' }}></i>Build clear business strategies</li>
              <li style={{ marginBottom: '10px' }}><i className="fas fa-check text-gold" style={{ color: 'var(--clr-gold)', marginRight: '10px' }}></i>Improve operations and workflow systems</li>
              <li style={{ marginBottom: '10px' }}><i className="fas fa-check text-gold" style={{ color: 'var(--clr-gold)', marginRight: '10px' }}></i>Create high-converting marketing strategies</li>
              <li style={{ marginBottom: '10px' }}><i className="fas fa-check text-gold" style={{ color: 'var(--clr-gold)', marginRight: '10px' }}></i>Solve scaling challenges</li>
              <li style={{ marginBottom: '10px' }}><i className="fas fa-check text-gold" style={{ color: 'var(--clr-gold)', marginRight: '10px' }}></i>Develop long-term, sustainable growth plans</li>
            </ul>
          </FadeIn>
        </div>
      </section>

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
                Why Choose Sarvanu Banerjee?
              </h3>

              <ul className="expertise-list">
                {[
                  { icon: 'fa-puzzle-piece', text: 'Turning complex problems into simple systems' },
                  { icon: 'fa-balance-scale', text: 'Blending traditional discipline with modern strategies' },
                  { icon: 'fa-handshake', text: 'Working directly with founders (no layers of teams)' },
                  { icon: 'fa-hammer', text: 'Focusing on execution, not just planning' }
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
                His approach is practical, structured, and built for real-world business challenges—not theory.
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

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sarvanu Banerjee",
            "url": "https://sarvanu.com",
            "jobTitle": "Business Consultant & Growth Strategist",
            "sameAs": [
              "https://www.linkedin.com/in/sarvanu-banerjee",
              "https://www.instagram.com/sarvanu_banerjee/",
              "https://www.facebook.com/sarvanu.banerjee"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Sarvanu.com",
              "url": "https://sarvanu.com"
            }
          })
        }}
      />
    </>
  );
}
