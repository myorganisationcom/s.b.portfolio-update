'use client';

import FadeIn from './FadeIn';

export default function CtaSection() {
  const handleWhatsAppSubmit = async (e) => {
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

    try {
      await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'cta_strategy_call',
          name,
          email,
          phone,
          businessStage: stage,
          goals,
        }),
      });
    } catch (err) {
      console.error('Failed to save CTA form submission', err);
    }

    window.open(waLink, '_blank');
  };

  return (
    <section id="cta" style={{ padding: '80px 20px', background: 'var(--grad-surface)', position: 'relative', overflow: 'hidden' }}>
      
      <div className="container" style={{ maxWidth: '1100px', margin: 'auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
          
          {/* Left Side: Content */}
          <div style={{ flex: '1 1 400px' }}>
            <FadeIn>
              <span style={{ display: 'inline-block', marginBottom: '15px', padding: '6px 14px', background: 'rgba(245, 197, 24, 0.1)', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--clr-gold)' }}>Limited Availability</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: '#ffffff', marginBottom: '20px', fontWeight: '800', lineHeight: '1.2' }}>
                Ready to Build Your <span style={{ color: 'var(--clr-gold)' }}>Growth Strategy?</span>
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', marginBottom: '30px', lineHeight: '1.6', maxWidth: '450px' }}>
                Take the first step toward sustainable business growth. Book a <strong>No-Cost Strategy Call</strong> and get actionable insights tailored to your business stage.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <i className="fas fa-check" style={{ color: 'var(--clr-gold)' }}></i> Tailored advice for your business stage
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <i className="fas fa-check" style={{ color: 'var(--clr-gold)' }}></i> No hidden costs, zero obligations
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <i className="fas fa-check" style={{ color: 'var(--clr-gold)' }}></i> Direct consultation with Sarvanu
                </li>
              </ul>
            </FadeIn>
          </div>

          {/* Right Side: Form */}
          <div style={{ flex: '1 1 400px' }}>
            <FadeIn delay={0.2}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '35px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '20px', fontWeight: '600' }}>Book Your Essential Call</h3>
                
                <form onSubmit={handleWhatsAppSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input type="text" name="name" placeholder="Full Name" required 
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.3s' }}
                    onFocus={e => e.target.style.borderColor = 'var(--clr-gold)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                  
                  <input type="email" name="email" placeholder="Email Address" required 
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.3s' }}
                    onFocus={e => e.target.style.borderColor = 'var(--clr-gold)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                  
                  <input type="tel" name="phone" placeholder="Phone Number" required 
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.3s' }}
                    onFocus={e => e.target.style.borderColor = 'var(--clr-gold)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                  
                  <select name="business_stage" required defaultValue="" 
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', outline: 'none', cursor: 'pointer', appearance: 'none', transition: 'border-color 0.3s' }}
                    onFocus={e => e.target.style.borderColor = 'var(--clr-gold)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    onChange={e => e.target.style.color = '#fff'}
                  >
                    <option value="" disabled>Select Business Stage</option>
                    <option value="idea" style={{ background: '#0f1d32', color: '#fff' }}>Idea Stage</option>
                    <option value="startup" style={{ background: '#0f1d32', color: '#fff' }}>Early Startup</option>
                    <option value="msme" style={{ background: '#0f1d32', color: '#fff' }}>Growing MSME</option>
                    <option value="scaleup" style={{ background: '#0f1d32', color: '#fff' }}>Scaling Business</option>
                  </select>
                  
                  <textarea name="goals" rows="3" placeholder="What’s your biggest business challenge?" required 
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none', resize: 'none', transition: 'border-color 0.3s' }}
                    onFocus={e => e.target.style.borderColor = 'var(--clr-gold)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  ></textarea>
                  
                  <button type="submit" 
                    style={{ width: '100%', padding: '15px', background: 'var(--clr-gold)', color: '#000000', border: 'none', borderRadius: '10px', fontSize: '1.05rem', fontWeight: '700', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px', transition: 'all 0.3s' }}
                    onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(245, 197, 24, 0.2)'; e.currentTarget.style.background = '#e5b615'; }}
                    onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'var(--clr-gold)'; }}
                  >
                    <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }}></i> Request via WhatsApp
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
