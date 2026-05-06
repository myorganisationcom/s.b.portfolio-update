'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

const packages = [
  {
    title: "Consulting Packages (Basic | Growth | Premium)",
    items: [
      { focus: "Strategy Blueprint", description: "Comprehensive roadmap for operations, marketing, and scaling.", impact: "Aligns team efforts with clear, measurable goals.", timeline: "Week 1-2" },
      { focus: "Weekly/Monthly Advisory", description: "Direct 1-on-1 calls with Sarvanu for accountability and troubleshooting.", impact: "Maintains momentum and prevents costly strategic errors.", timeline: "Ongoing" },
      { focus: "System Integration", description: "Setup of essential CRMs and operational tools.", impact: "Automates repetitive tasks, freeing up 15+ hours/week.", timeline: "Week 3-4" },
      { focus: "Performance Tracking", description: "Custom KPI dashboards built specifically for your business model.", impact: "Data-driven decision making instead of guesswork.", timeline: "Week 5-6" }
    ]
  },
  {
    title: "Professional Digital Growth Package",
    items: [
      { focus: "Website & Landing Page Optimization", description: "Overhaul of digital assets for maximum conversion rate optimization (CRO).", impact: "Increases lead capture rate by up to 300%.", timeline: "Week 1-3" },
      { focus: "SEO & Content Strategy", description: "Technical SEO audits and content marketing blueprints.", impact: "Builds sustainable organic traffic channels.", timeline: "Week 2-4" },
      { focus: "Paid Ads Architecture", description: "Structuring Facebook, Google, and LinkedIn ad campaigns.", impact: "Immediate influx of targeted B2B/B2C traffic.", timeline: "Week 4-5" },
      { focus: "Analytics Setup", description: "Implementation of advanced tracking (GA4, Meta Pixel).", impact: "Clear attribution for every marketing dollar spent.", timeline: "Week 1-2" }
    ]
  },
  {
    title: "Brand Acceleration Package",
    items: [
      { focus: "Brand Identity Audit", description: "Comprehensive review of current visual and messaging assets.", impact: "Identifies perception gaps and establishes a baseline for rebranding.", timeline: "Week 1-2" },
      { focus: "Positioning Strategy", description: "Defining USP, target audience psychology, and market positioning.", impact: "Differentiates the business from competitors, allowing for premium pricing.", timeline: "Week 3-4" },
      { focus: "Omnichannel Messaging", description: "Creating unified communication guidelines across web, social, and PR.", impact: "Ensures consistent brand voice, increasing trust and conversion rates.", timeline: "Week 5-6" },
      { focus: "Authority Building", description: "Strategic placement of thought leadership content and PR outreach.", impact: "Positions founders as industry leaders, attracting higher-tier clients.", timeline: "Ongoing" }
    ]
  },
  {
    title: "Investor Readiness Package",
    items: [
      { focus: "Pitch Deck Development", description: "Crafting a compelling narrative and visually stunning pitch deck.", impact: "Increases the likelihood of securing VC or Angel investment.", timeline: "Week 1-3" },
      { focus: "Financial Modeling", description: "Creating realistic 3-to-5-year financial projections and unit economics.", impact: "Provides investors with confidence in business viability and ROI.", timeline: "Week 2-4" },
      { focus: "Data Room Preparation", description: "Organizing legal, financial, and operational documents for due diligence.", impact: "Accelerates the funding process and minimizes investor friction.", timeline: "Week 3-5" },
      { focus: "Pitch Coaching", description: "Mock presentations and Q&A preparation with Sarvanu.", impact: "Enhances founder confidence and delivery during high-stakes meetings.", timeline: "Week 5-6" }
    ]
  },
  {
    title: "Market Entry & Launch Package",
    items: [
      { focus: "Market Research & Validation", description: "Deep dive into competitor landscapes and target demographic analysis.", impact: "Minimizes risk of product-market misfit before heavy investment.", timeline: "Week 1-3" },
      { focus: "Go-to-Market (GTM) Strategy", description: "End-to-end plan covering pricing, distribution, and promotional channels.", impact: "Ensures a structured, high-impact product or service launch.", timeline: "Week 3-5" },
      { focus: "Launch Campaign Execution", description: "Coordinating PR, email marketing, and ad launches.", impact: "Generates immediate buzz and early adopter acquisition.", timeline: "Week 5-8" },
      { focus: "Post-Launch Optimization", description: "Analyzing initial data to pivot and refine acquisition channels.", impact: "Maximizes ROI of the launch budget.", timeline: "Ongoing" }
    ]
  },
  {
    title: "Digital Authority Package",
    items: [
      { focus: "Thought Leadership Content", description: "Ghostwriting and strategy for LinkedIn, Medium, and industry publications.", impact: "Builds a loyal following and inbound lead pipeline.", timeline: "Ongoing" },
      { focus: "Personal Branding Kit", description: "Professional bios, media kits, and speaking topic outlines.", impact: "Prepares founders for podcast interviews and keynote speaking.", timeline: "Week 1-2" },
      { focus: "Podcast & Media Outreach", description: "Targeted pitching to relevant industry podcasts and newsletters.", impact: "Expands reach to highly qualified audiences.", timeline: "Ongoing" },
      { focus: "Social Proof Generation", description: "Systematizing case studies, testimonials, and review collection.", impact: "Increases conversion rates across all sales channels.", timeline: "Week 3-4" }
    ]
  },
  {
    title: "Operational Excellence Package",
    items: [
      { focus: "Process Mapping & SOPs", description: "Documenting every critical business process into Standard Operating Procedures.", impact: "Reduces dependency on founders and prevents knowledge loss.", timeline: "Week 1-4" },
      { focus: "Tech Stack Audit & Optimization", description: "Reviewing and consolidating software tools to eliminate redundancies.", impact: "Cuts overhead costs and improves team productivity.", timeline: "Week 2-3" },
      { focus: "Workflow Automation", description: "Setting up Zapier/Make automations for lead routing and onboarding.", impact: "Eliminates manual data entry and reduces human error.", timeline: "Week 4-6" },
      { focus: "Team Structure & Hiring Plan", description: "Designing organizational charts and creating job scorecards.", impact: "Ensures you hire the right people for the right roles at the right time.", timeline: "Week 5-7" }
    ]
  },
  {
    title: "Global Expansion Package",
    items: [
      { focus: "International Market Assessment", description: "Evaluating regulatory, cultural, and economic factors of target regions.", impact: "Prevents costly legal and cultural missteps in new markets.", timeline: "Week 1-4" },
      { focus: "Localization Strategy", description: "Adapting brand messaging, product features, and pricing for local audiences.", impact: "Increases acceptance and conversion rates in foreign markets.", timeline: "Week 3-6" },
      { focus: "Cross-Border Logistics & Ops", description: "Planning supply chain, payment gateways, and local compliance.", impact: "Ensures smooth operations and customer experience internationally.", timeline: "Week 5-8" },
      { focus: "Local Partnership Sourcing", description: "Identifying key distributors, agencies, or joint venture partners.", impact: "Accelerates market penetration through established local networks.", timeline: "Ongoing" }
    ]
  },
  {
    title: "Add-On Services",
    items: [
      { focus: "Custom CRM Build-Out", description: "Tailored setup of HubSpot, Salesforce, or GoHighLevel.", impact: "Centralizes customer data and streamlines the sales pipeline.", timeline: "Variable" },
      { focus: "Executive Coaching", description: "Intensive leadership and mindset coaching for C-level executives.", impact: "Improves decision-making, resilience, and team management.", timeline: "Ongoing" },
      { focus: "Sales Scripting & Playbooks", description: "Developing objection handling and closing frameworks for sales teams.", impact: "Increases close rates and standardizes the sales process.", timeline: "Variable" },
      { focus: "Fractional CMO/COO", description: "Sarvanu acting as an embedded executive to lead your teams.", impact: "Provides high-level leadership without the cost of a full-time executive.", timeline: "Minimum 3 months" }
    ]
  }
];

function BreakdownAccordion({ title, items, isOpen, onClick }) {
  return (
    <div className={`breakdown-item ${isOpen ? 'active' : ''}`} style={{ marginBottom: '15px', borderRadius: '12px', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', transition: 'all 0.3s ease' }}>
      <div 
        className="breakdown-header" 
        onClick={onClick}
        style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', background: isOpen ? 'rgba(255, 255, 255, 0.05)' : 'transparent', transition: 'background 0.3s' }}
      >
        <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ color: 'var(--clr-gold)', fontSize: '1.1rem', opacity: isOpen ? 1 : 0.7, transition: 'opacity 0.3s', textShadow: isOpen ? '0 0 10px rgba(16, 185, 129, 0.4)' : 'none' }}>
            <i className="fas fa-gem"></i>
          </span>
          {title}
        </h3>
        <span style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', fontWeight: 'bold', transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>{isOpen ? '−' : '+'}</span>
      </div>
      
      <div 
        className="breakdown-body" 
        style={{ 
          padding: isOpen ? '20px' : '0 20px', 
          maxHeight: isOpen ? '1000px' : '0', 
          opacity: isOpen ? 1 : 0, 
          overflow: 'hidden', 
          transition: 'all 0.4s ease', 
          borderTop: isOpen ? '1px solid rgba(255, 255, 255, 0.05)' : 'none' 
        }}
      >
        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px', fontSize: '0.95rem' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px 15px', borderBottom: '2px solid rgba(16, 185, 129, 0.3)', color: 'var(--clr-gold)', fontWeight: '600', width: '25%' }}>Deliverable / Focus Area</th>
                <th style={{ textAlign: 'left', padding: '12px 15px', borderBottom: '2px solid rgba(16, 185, 129, 0.3)', color: 'var(--clr-gold)', fontWeight: '600', width: '35%' }}>Description</th>
                <th style={{ textAlign: 'left', padding: '12px 15px', borderBottom: '2px solid rgba(16, 185, 129, 0.3)', color: 'var(--clr-gold)', fontWeight: '600', width: '25%' }}>Business Impact</th>
                <th style={{ textAlign: 'left', padding: '12px 15px', borderBottom: '2px solid rgba(16, 185, 129, 0.3)', color: 'var(--clr-gold)', fontWeight: '600', width: '15%' }}>Timeline</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} style={{ borderBottom: index === items.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.05)', backgroundColor: index % 2 === 0 ? 'rgba(255, 255, 255, 0.01)' : 'transparent', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? 'rgba(255, 255, 255, 0.01)' : 'transparent'}>
                  <td style={{ padding: '16px 15px', fontWeight: '500', color: 'var(--clr-white)' }}>{item.focus}</td>
                  <td style={{ padding: '16px 15px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.5' }}>{item.description}</td>
                  <td style={{ padding: '16px 15px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.5' }}>{item.impact}</td>
                  <td style={{ padding: '16px 15px', color: 'rgba(255, 255, 255, 0.5)', whiteSpace: 'nowrap' }}>{item.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function DetailedServiceBreakdown() {
  const [openIndex, setOpenIndex] = useState(0); // Open the first one by default

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="detailed-breakdown" className="detailed-breakdown-section" style={{ padding: '80px 0', background: 'var(--grad-surface)' }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="expertise-badge" style={{ display: 'inline-block', marginBottom: '15px', padding: '8px 16px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--clr-gold)' }}>
              Deep Dive Analysis
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '800', marginBottom: '15px' }}>Detailed Service <span style={{ color: 'var(--clr-gold)' }}>Breakdown</span></h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Explore the exact deliverables, outcomes, and timelines included in our specialized consulting packages. Transparency and structured execution at every step.
            </p>
          </div>
        </FadeIn>

        <div className="breakdown-list" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {packages.map((pkg, index) => (
            <FadeIn key={index} delay={index * 0.05} direction="up">
              <BreakdownAccordion 
                title={pkg.title} 
                items={pkg.items} 
                isOpen={openIndex === index} 
                onClick={() => toggleAccordion(index)} 
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
