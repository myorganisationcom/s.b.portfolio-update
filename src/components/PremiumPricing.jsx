'use client';

import FadeIn from './FadeIn';

export default function PremiumPricing() {
  const cardBase = { padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column' };
  const checkStyle = { color: 'var(--clr-gold)', marginRight: '8px' };
  const arrowStyle = { color: '#3b82f6', marginRight: '8px' };

  return (
    <section className="premium-pricing-section" style={{ padding: '100px 20px', background: 'var(--grad-surface)' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: 'auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: '#ffffff', marginBottom: '15px', fontWeight: '800' }}>Business Consulting Packages</h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.55)', maxWidth: '600px', margin: 'auto' }}>
            Transparent pricing. No hidden fees. Results-driven consulting.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          {/* Basic Plan */}
          <FadeIn>
            <div style={{ ...cardBase, background: 'rgba(255,255,255,0.03)', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff' }}>Basic Plan</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>Foundation & Clarity</p>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>₹15,000 <span style={{ fontSize: '1rem', fontWeight: '400', color: 'rgba(255,255,255,0.5)' }}>/ Month</span></div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', fontStyle: 'italic' }}>Best for: Solopreneurs, early-stage founders, and new businesses</p>
              <p style={{ fontSize: '0.95rem', marginBottom: '20px', color: 'rgba(255,255,255,0.7)' }}>If your business feels unclear, unstructured, or directionless—this plan gives you control.</p>
              <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: 'var(--clr-gold)' }}>What You Get:</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', gap: '10px', display: 'flex', flexDirection: 'column', color: 'rgba(255,255,255,0.75)' }}>
                <li><i className="fas fa-check" style={checkStyle}></i>Strategic Business Audit + Monthly Consultation</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Brand Positioning & Identity Review</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Clear Marketing Direction</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Focused Social Media Plan (1 Platform)</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Website Structure & Content Blueprint</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Operations & Workflow Diagnosis</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Monthly Progress Report</li>
              </ul>
              <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: 'var(--clr-gold)' }}>What Changes After This:</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', gap: '10px', display: 'flex', flexDirection: 'column', color: 'rgba(255,255,255,0.7)' }}>
                <li><i className="fas fa-arrow-right" style={arrowStyle}></i>You stop guessing what to do next</li>
                <li><i className="fas fa-arrow-right" style={arrowStyle}></i>You get a clear execution roadmap</li>
                <li><i className="fas fa-arrow-right" style={arrowStyle}></i>You start building a real business foundation</li>
              </ul>
              <a href="#cta" style={{ display: 'block', textAlign: 'center', background: 'rgba(255,255,255,0.08)', color: 'white', padding: '14px', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', border: '1px solid rgba(255,255,255,0.1)', marginTop: 'auto', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>Start Building a Strong Foundation</a>
            </div>
          </FadeIn>

          {/* Growth Plan */}
          <FadeIn delay={0.1}>
            <div style={{ ...cardBase, background: 'rgba(245, 197, 24, 0.04)', boxShadow: '0 15px 50px rgba(0,0,0,0.4), 0 0 30px rgba(245, 197, 24, 0.06)', borderColor: 'rgba(245, 197, 24, 0.2)', transform: 'scale(1.03)', position: 'relative', zIndex: 1 }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--clr-gold)', color: '#000000', padding: '6px 18px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Most Popular</div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--clr-gold)' }}>Growth Plan</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>Systems & Consistency</p>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>₹30,000 <span style={{ fontSize: '1rem', fontWeight: '400', color: 'rgba(255,255,255,0.5)' }}>/ Month</span></div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', fontStyle: 'italic' }}>Best for: MSMEs, startups, agencies ready to scale</p>
              <p style={{ fontSize: '0.95rem', marginBottom: '20px', color: 'rgba(255,255,255,0.7)' }}>If your business is running but inconsistent—this plan builds systems that create predictable growth.</p>
              <h4 style={{ fontSize: '1rem', color: 'var(--clr-gold)', marginBottom: '10px' }}>What You Get:</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', gap: '10px', display: 'flex', flexDirection: 'column', color: 'rgba(255,255,255,0.75)' }}>
                <li><i className="fas fa-check" style={checkStyle}></i>In-depth Business Audit + Strategy Call</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Complete Brand Identity</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Monthly Marketing Execution Plan</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Social Media Strategy (2 Platforms)</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Conversion-Focused Website Planning</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Business Development Strategy</li>
                <li><i className="fas fa-check" style={checkStyle}></i>SOPs & Workflow Structuring</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Growth Dashboard</li>
              </ul>
              <h4 style={{ fontSize: '1rem', color: 'var(--clr-gold)', marginBottom: '10px' }}>What Changes After This:</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', gap: '10px', display: 'flex', flexDirection: 'column', color: 'rgba(255,255,255,0.7)' }}>
                <li><i className="fas fa-arrow-right" style={arrowStyle}></i>Your business runs on systems, not effort</li>
                <li><i className="fas fa-arrow-right" style={arrowStyle}></i>Marketing becomes structured and repeatable</li>
                <li><i className="fas fa-arrow-right" style={arrowStyle}></i>Growth becomes measurable—not random</li>
              </ul>
              <a href="#cta" style={{ display: 'block', textAlign: 'center', background: 'var(--clr-gold)', color: '#000000', padding: '14px', borderRadius: '12px', textDecoration: 'none', fontWeight: '700', marginTop: 'auto', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = '#e5b615'} onMouseOut={e => e.currentTarget.style.background = 'var(--clr-gold)'}>Book a Strategic Growth Call</a>
            </div>
          </FadeIn>

          {/* Premium Plan */}
          <FadeIn delay={0.2}>
            <div style={{ ...cardBase, background: 'rgba(255,255,255,0.03)', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff' }}>Premium Plan</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>Scale, Automation & Control</p>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>₹55,000 <span style={{ fontSize: '1rem', fontWeight: '400', color: 'rgba(255,255,255,0.5)' }}>/ Month</span></div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', fontStyle: 'italic' }}>Best for: Scaling businesses, multi-brand founders, high-growth projects</p>
              <p style={{ fontSize: '0.95rem', marginBottom: '20px', color: 'rgba(255,255,255,0.7)' }}>If you're already growing but want speed, control, and dominance—this is where serious scaling happens.</p>
              <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: 'var(--clr-gold)' }}>What You Get:</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', gap: '10px', display: 'flex', flexDirection: 'column', color: 'rgba(255,255,255,0.75)' }}>
                <li><i className="fas fa-check" style={checkStyle}></i>2 Strategy Sessions + Continuous Advisory</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Advanced Messaging & Market Positioning</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Campaign-Level Marketing Strategy</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Social Media Expansion (3 Platforms)</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Full Funnel + CRM Setup + Analytics</li>
                <li><i className="fas fa-check" style={checkStyle}></i>B2B Lead Systems & Outreach Frameworks</li>
                <li><i className="fas fa-check" style={checkStyle}></i>SOPs + Automation Tool Integration</li>
                <li><i className="fas fa-check" style={checkStyle}></i>Complete Business Intelligence Dashboard</li>
              </ul>
              <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: 'var(--clr-gold)' }}>What Changes After This:</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', gap: '10px', display: 'flex', flexDirection: 'column', color: 'rgba(255,255,255,0.7)' }}>
                <li><i className="fas fa-arrow-right" style={arrowStyle}></i>You build a scalable, automated business engine</li>
                <li><i className="fas fa-arrow-right" style={arrowStyle}></i>You gain data-driven decision-making power</li>
                <li><i className="fas fa-arrow-right" style={arrowStyle}></i>You reduce dependency on manual effort</li>
              </ul>
              <a href="#cta" style={{ display: 'block', textAlign: 'center', background: 'rgba(255,255,255,0.08)', color: 'white', padding: '14px', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', border: '1px solid rgba(255,255,255,0.1)', marginTop: 'auto', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>Start Scaling with Expert Guidance</a>
            </div>
          </FadeIn>
        </div>

        {/* ROI Perspective */}
        <FadeIn>
          <div style={{ background: 'rgba(255,255,255,0.03)', color: 'white', padding: '40px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(245, 197, 24, 0.15)' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--clr-gold)', marginBottom: '20px' }}>ROI Perspective</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'rgba(255,255,255,0.7)' }}>Let's be direct—</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '15px', color: 'rgba(255,255,255,0.8)' }}>
              <li><i className="fas fa-exclamation-triangle" style={{ color: '#ef4444', marginRight: '10px' }}></i>One wrong hire = ₹20,000–₹80,000 loss/month</li>
              <li><i className="fas fa-exclamation-triangle" style={{ color: '#ef4444', marginRight: '10px' }}></i>One failed marketing campaign = ₹50,000+ wasted</li>
              <li><i className="fas fa-exclamation-triangle" style={{ color: '#ef4444', marginRight: '10px' }}></i>One wrong strategic decision = months of delay</li>
            </ul>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px' }}>This consulting prevents those losses and builds systems that generate revenue.</p>
              <p style={{ fontSize: '1.2rem', color: 'var(--clr-gold)' }}>You're not paying for advice. You're investing in fewer mistakes + faster growth.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
