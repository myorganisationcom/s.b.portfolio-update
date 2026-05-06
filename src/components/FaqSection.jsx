'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

export default function FaqSection() {
  const faqs = [
    { question: "What is Sarvanu.com?", answer: "Sarvanu.com is a business consulting organization that helps founders, entrepreneurs, and companies improve their strategy, operations, marketing, and overall growth systems. The organization is led by Sarvanu Banerjee, known for delivering structured and execution-focused consulting." },
    { question: "Who is Sarvanu Banerjee?", answer: "Sarvanu Banerjee is a business management, marketing, and growth consultant who works directly with business owners to build scalable and sustainable companies. He is recognized for simplifying complex business problems and turning them into actionable systems." },
    { question: "What services does Sarvanu.com provide?", answer: "Sarvanu.com provides Business strategy consulting, Operations and workflow optimization, Marketing and growth strategy, Brand positioning and messaging, SOP development, and Funnel, CRM, and system setup." },
    { question: "How does the consulting process work?", answer: "The process is structured: 1. Business audit 2. Strategy development 3. System and workflow design 4. Implementation guidance 5. Ongoing monitoring and optimization." },
    { question: "Will I work directly with Sarvanu Banerjee?", answer: "Yes. All consulting engagements involve direct strategic input from Sarvanu Banerjee, ensuring clarity, accountability, and high-quality decision-making." },
    { question: "Is this consulting theoretical or practical?", answer: "This consulting is highly practical. The focus is on real implementation, system building, and measurable business outcomes—not just advice or theory." },
    { question: "What is the pricing structure?", answer: "Sarvanu.com offers structured monthly consulting plans: Basic Plan for early-stage businesses, Growth Plan for scaling businesses, Premium Plan for advanced scaling and multi-brand operations." },
    { question: "Is there a long-term contract?", answer: "No strict long-term lock-in is required. Engagements are designed to deliver value consistently, allowing businesses to continue based on results and needs." },
    { question: "How soon can I expect results?", answer: "Clarity and direction improve within the first few sessions. Systems and processes begin forming within 2-4 weeks. Measurable growth typically follows with consistent implementation." },
    { question: "Who should hire Sarvanu.com?", answer: "Startups needing structure and direction, Business owners facing growth challenges, Companies with unorganized operations, Founders looking to scale with systems." },
    { question: "Who is this NOT for?", answer: "Businesses looking for instant results without execution, Founders unwilling to implement systems or changes, Those expecting only low-cost or one-time advice." },
    { question: "Do you help with tools like CRM and automation?", answer: "Yes. Depending on the plan, Sarvanu.com helps set up CRM systems, Marketing funnels, Automation tools, and Business dashboards." },
    { question: "Can international clients work with Sarvanu.com?", answer: "Yes. Consulting services are available worldwide through virtual meetings and remote collaboration." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" style={{ padding: '80px 20px', background: 'transparent' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: 'auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: '#ffffff', marginBottom: '15px', fontWeight: '800' }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.55)' }}>Everything you need to know about working with Sarvanu Banerjee.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  style={{ width: '100%', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: '1.05rem', fontWeight: '600', color: '#ffffff' }}
                >
                  <span>{faq.question}</span>
                  <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`} style={{ color: 'var(--clr-gold)', flexShrink: 0, marginLeft: '15px' }}></i>
                </button>
                <div style={{ maxHeight: openIndex === index ? '500px' : '0', transition: 'max-height 0.3s ease, opacity 0.3s ease', padding: openIndex === index ? '0 20px 20px' : '0 20px', opacity: openIndex === index ? 1 : 0, overflow: 'hidden' }}>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
