'use client';

import HeroSlider from '@/components/HeroSlider';
import PricingSlider from '@/components/PricingSlider';
import ServiceSlider from '@/components/ServiceSlider';
import ServicesAccordion from '@/components/Accordion';
import TestimonialSlider from '@/components/TestimonialSlider';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';

export default function Home() {
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const stage = formData.get('business_stage');
    const goals = formData.get('goals');

    const waNumber = "918240026380";
    const waMessage = `*New Strategy Call Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Business Stage:* ${stage}\n*Challenge:* ${goals}`;
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    window.open(waLink, '_blank');
  };

  return (
    <>
      {/* HERO SECTION */}
      <section id="hero">
        <div className="hero-content">
          <p className="hero-tagline">Trusted Business Growth Partner</p>
          <h1>Strategic Business Consulting <span>for Startups & MSMEs</span></h1>
          <p className="hero-description">
            Transform your business with expert guidance. We partner with <strong>Founders, Startups, and
              MSMEs</strong> to build scalable systems, optimize operations, and accelerate growth through proven
            strategies.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Clients Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6000+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Countries</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#services" className="btn-primary">
              <span>📦</span> View Packages & Pricing
            </a>
            <a href="#cta" className="btn-secondary">
              <span>📞</span> Book Free Strategy Call
            </a>
          </div>
        </div>

        <HeroSlider />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="container about-container">
          <FadeIn direction="left" className="about-image">
            <Image src="/your-photo.jpeg" alt="Sarvanu Banerjee" width={400} height={400} className="about-photo" />
          </FadeIn>

          <FadeIn direction="right" className="about-text">
            <h2>📖 About Sarvanu</h2>
            <p>
              I'm <strong>Sarvanu Banerjee</strong>, a business management, marketing, and growth consultant who
              works directly with founders, entrepreneurs, and business owners to build companies that last.
            </p>
            <p>
              Rooted in traditional business values yet driven by modern strategy, I help you make the right
              decisions — not just for short-term gains, but for long-term stability and success.
            </p>
            <p>
              With a background spanning <strong>operations management, business development, marketing strategy,
                and founder coaching</strong>, I bring structured clarity to unstructured ideas. Whether you're
              just starting out or stuck in scale mode, I act as your thought partner, system builder, and growth
              guide.
            </p>
            <blockquote>
              I don’t just consult — I collaborate.
              <br />My role is to simplify, systematize, and scale your vision.
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* WHO I WORK WITH SECTION */}
      <section id="work-expertise" className="work-expertise-section">
        <div className="container work-expertise-container">
          <FadeIn className="card">
            <h2>🧩 Who I Work With</h2>
            <ul>
              <li>Solopreneurs launching a new product or service</li>
              <li>Founders scaling fast but lacking systems</li>
              <li>Traditional businesses going digital or rebranding</li>
              <li>Multi-brand owners needing structure and direction</li>
            </ul>
          </FadeIn>

          <FadeIn className="card">
            <h2>📌 Areas of Expertise</h2>
            <ul>
              <li>Strategic Business Planning</li>
              <li>Marketing + Funnels</li>
              <li>Business Development & B2B Growth</li>
              <li>Operations Design & SOPs</li>
              <li>Brand Messaging & Positioning</li>
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="services" className="pricing-section">
        <h2>Business Consulting Packages & Pricing</h2>
        <p className="subtitle">Transparent pricing. No hidden fees. Results-driven consulting.</p>
        <PricingSlider />
      </section>

      {/* SPECIALIZED SERVICES SLIDER */}
      <section className="service-cards-section">
        <h2>Specialized Solutions</h2>
        <ServiceSlider />
      </section>

      {/* DETAILED SERVICES ACCORDION */}
      <section id="services-detailed" className="services-detailed-section">
        <div className="container">
          <h2>Detailed Service Breakdown</h2>

          <ServicesAccordion
            title="📌 Consulting Packages (Basic | Growth | Premium)"
            subtitle="(For Founders, MSMEs, and Growth-Stage Businesses)"
            defaultOpen={true}
          >
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Basic</th>
                    <th>Growth</th>
                    <th>Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Price</strong></td>
                    <td>₹15,000 / month</td>
                    <td>₹30,000 / month</td>
                    <td>₹55,000 / month</td>
                  </tr>
                  <tr>
                    <td><strong>Ideal For</strong></td>
                    <td>Solopreneurs / Early Startups</td>
                    <td>Growing MSMEs / Agencies</td>
                    <td>Multi-brand Founders / Long-term Scale Projects</td>
                  </tr>
                  <tr>
                    <td>Business Audit & Strategy Call</td>
                    <td>✔️ 1x/month</td>
                    <td>✔️ 1x/month</td>
                    <td>✔️ 2x/month + on-call support</td>
                  </tr>
                  <tr>
                    <td>Brand Identity Consulting</td>
                    <td>✔️ (Basic Review)</td>
                    <td>✔️ (Full Naming + Vision)</td>
                    <td>✔️ (Custom Messaging Framework)</td>
                  </tr>
                  <tr>
                    <td>Website Structure & Content Plan</td>
                    <td>❌</td>
                    <td>✔️</td>
                    <td>✔️ (With SEO + Funnels in mind)</td>
                  </tr>
                  <tr>
                    <td>Marketing Strategy</td>
                    <td>✔️ (Overview only)</td>
                    <td>✔️ (Full monthly plan)</td>
                    <td>✔️ (Dynamic + Campaign-level)</td>
                  </tr>
                  <tr>
                    <td>Business Development Strategy</td>
                    <td>❌</td>
                    <td>✔️</td>
                    <td>✔️ (With B2B Leads & Outreach Tools)</td>
                  </tr>
                  <tr>
                    <td>Operations & Workflow Audit</td>
                    <td>❌</td>
                    <td>✔️ (Initial SOPs)</td>
                    <td>✔️ (SOPs + Automation Tools)</td>
                  </tr>
                  <tr>
                    <td>Social Media Content Planning</td>
                    <td>✔️ (Lite: 1 platform)</td>
                    <td>✔️ (Up to 2 platforms)</td>
                    <td>✔️ (Up to 3 platforms + Trend Strategy)</td>
                  </tr>
                  <tr>
                    <td>Funnel / CRM Consultation</td>
                    <td>❌</td>
                    <td>✔️</td>
                    <td>✔️ (Setup Support + Analytics)</td>
                  </tr>
                  <tr>
                    <td>Monthly Reporting</td>
                    <td>Basic Summary</td>
                    <td>Growth Dashboard</td>
                    <td>Full Business Intelligence View</td>
                  </tr>
                  <tr>
                    <td>Add-ons & Custom Projects</td>
                    <td>Add-on only</td>
                    <td>Add-on or included selectively</td>
                    <td>Included as needed (logo, pitch deck)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ServicesAccordion>

          <ServicesAccordion
            title="📌 Professional Digital Growth Package"
            subtitle="(For Businesses Focused on Digital Marketing, Funnels, and Online Growth)"
          >
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Starter</th>
                    <th>Advanced</th>
                    <th>Elite</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Price</strong></td>
                    <td>₹18,000 / month</td>
                    <td>₹35,000 / month</td>
                    <td>₹60,000 / month</td>
                  </tr>
                  <tr>
                    <td><strong>Ideal For</strong></td>
                    <td>Small brands, solopreneurs</td>
                    <td>Scaling MSMEs / Agencies</td>
                    <td>High-growth D2C / Multi-brand Founders</td>
                  </tr>
                  <tr>
                    <td>Digital Presence Audit</td>
                    <td>✔️ (Basic)</td>
                    <td>✔️ (Full Audit)</td>
                    <td>✔️ (360° with Competitor Analysis)</td>
                  </tr>
                  <tr>
                    <td>Website & Funnel Strategy</td>
                    <td>✔️ (Landing Page Review)</td>
                    <td>✔️ (Full Funnel Mapping)</td>
                    <td>✔️ (Conversion Optimization + Automation)</td>
                  </tr>
                  <tr>
                    <td>Social Media Strategy</td>
                    <td>✔️ (1 Platform)</td>
                    <td>✔️ (Up to 3 Platforms)</td>
                    <td>✔️ (Cross-platform Growth + Paid Ads)</td>
                  </tr>
                  <tr>
                    <td>Content Calendar & Copywriting</td>
                    <td>✔️ (Lite Plan)</td>
                    <td>✔️ (Detailed Calendar + Posts)</td>
                    <td>✔️ (Full Content Framework + Ads Copy)</td>
                  </tr>
                  <tr>
                    <td>Email Marketing & CRM Setup</td>
                    <td>❌</td>
                    <td>✔️ (Basic Email Flows)</td>
                    <td>✔️ (Advanced Segmentation + Analytics)</td>
                  </tr>
                  <tr>
                    <td>SEO & Growth Optimization</td>
                    <td>✔️ (On-page Basics)</td>
                    <td>✔️ (Full SEO Strategy)</td>
                    <td>✔️ (SEO + Paid Ads + Analytics Dashboard)</td>
                  </tr>
                  <tr>
                    <td>Monthly Reporting</td>
                    <td>Performance Summary</td>
                    <td>Growth Dashboard</td>
                    <td>Advanced BI Dashboard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ServicesAccordion>

          <ServicesAccordion title="📌 Brand Acceleration Package">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Details</th>
                    <th>Pricing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brand Identity</td>
                    <td>Naming, voice, vision, differentiation</td>
                    <td>₹25,000+</td>
                  </tr>
                  <tr>
                    <td>Messaging Framework</td>
                    <td>Storytelling + positioning strategy</td>
                    <td>Included</td>
                  </tr>
                  <tr>
                    <td>Founder Story Workshop</td>
                    <td>Craft a unique business story</td>
                    <td>₹10,000 add-on</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ServicesAccordion>

          <ServicesAccordion title="📌 Investor Readiness Package">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Details</th>
                    <th>Pricing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pitch Deck Creation</td>
                    <td>Custom investor-focused deck</td>
                    <td>₹25,000</td>
                  </tr>
                  <tr>
                    <td>Financial Projections</td>
                    <td>Revenue + valuation roadmap</td>
                    <td>₹15,000</td>
                  </tr>
                  <tr>
                    <td>Mock Investor Q&A</td>
                    <td>Simulation before pitch</td>
                    <td>₹5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ServicesAccordion>

          <ServicesAccordion title="📌 Market Entry & Launch Package">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Details</th>
                    <th>Pricing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Market Research</td>
                    <td>Audience profiling & competition</td>
                    <td>₹15,000</td>
                  </tr>
                  <tr>
                    <td>Go-to-Market Plan</td>
                    <td>Custom launch strategy</td>
                    <td>₹20,000</td>
                  </tr>
                  <tr>
                    <td>Launch Campaign</td>
                    <td>Hype + PR + Social Launch</td>
                    <td>₹25,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ServicesAccordion>

          <ServicesAccordion title="📌 Digital Authority Package">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Details</th>
                    <th>Pricing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>LinkedIn Growth</td>
                    <td>Content + connections + engagement</td>
                    <td>₹18,000/month</td>
                  </tr>
                  <tr>
                    <td>Thought Leadership</td>
                    <td>Articles, posts, positioning</td>
                    <td>₹15,000/month</td>
                  </tr>
                  <tr>
                    <td>Media Strategy</td>
                    <td>Podcasts + speaking gigs</td>
                    <td>₹12,000 add-on</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ServicesAccordion>

          <ServicesAccordion title="📌 Operational Excellence Package">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Details</th>
                    <th>Pricing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SOP Development</td>
                    <td>Custom processes for team efficiency</td>
                    <td>₹20,000+</td>
                  </tr>
                  <tr>
                    <td>Automation Setup</td>
                    <td>CRM + workflow automation</td>
                    <td>₹15,000+</td>
                  </tr>
                  <tr>
                    <td>KPI Dashboard</td>
                    <td>Growth monitoring tools</td>
                    <td>₹10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ServicesAccordion>

          <ServicesAccordion title="📌 Global Expansion Package">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Details</th>
                    <th>Pricing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Market Feasibility Study</td>
                    <td>Identify right global markets</td>
                    <td>₹30,000</td>
                  </tr>
                  <tr>
                    <td>Localization Strategy</td>
                    <td>Language, branding, compliance</td>
                    <td>₹20,000</td>
                  </tr>
                  <tr>
                    <td>International GTM</td>
                    <td>Cross-border partnerships + growth</td>
                    <td>₹35,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ServicesAccordion>

          <ServicesAccordion title="📌 Add-On Services">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Price (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Logo Design & Brand Kit</td>
                    <td>₹7,500</td>
                  </tr>
                  <tr>
                    <td>Pitch Deck & Investor Story</td>
                    <td>₹12,000</td>
                  </tr>
                  <tr>
                    <td>Startup Launch Blueprint</td>
                    <td>₹35,000 (one-time)</td>
                  </tr>
                  <tr>
                    <td>Custom Website Build</td>
                    <td>From ₹15,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ServicesAccordion>
        </div>
      </section>

      {/* WHY CHOOSE ME SECTION */}
      <section id="why-choose-me" className="why-choose-me-section">
        <div className="container">
          <h2>Why Work With Me?</h2>
          <p className="subtitle">Trusted Growth Partner for Founders & MSMEs</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">⏳</div>
              <h3>7+ Years of Experience</h3>
              <p>In crafting strategies that drive real business growth and scale.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🎯</div>
              <h3>Multi-Disciplinary Expertise</h3>
              <p>Skills spanning operations, marketing, and founder coaching.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🤝</div>
              <h3>Trusted by MSMEs & Founders</h3>
              <p>Collaborating closely with businesses across industries to deliver results.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🚀</div>
              <h3>Long-Term Growth Focus</h3>
              <p>Strategic solutions designed for lasting success—not just quick wins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="testimonial-section">
        <div className="container">
          <h2>What My Clients Say</h2>
          <p className="subtitle">Real stories from founders, entrepreneurs & businesses I’ve worked with</p>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta" className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <h2>📞 Ready to Build Your Growth Strategy?</h2>
              <p>
                Take the first step toward sustainable business growth.
                Book a <strong>No-Cost 10-min Strategy Call</strong> and get personalized insights for your
                business.
              </p>
              <ul className="cta-points">
                <li>✔️ Tailored advice for your business stage</li>
                <li>✔️ No hidden costs, no obligations</li>
                <li>✔️ Direct consultation with Sarvanu</li>
              </ul>
            </div>

            <div className="cta-form">
              <h3>Book Your Essential Strategy Call</h3>
              <form onSubmit={handleWhatsAppSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <select name="business_stage" required defaultValue="">
                    <option value="" disabled>Business Stage</option>
                    <option value="idea">Idea Stage</option>
                    <option value="startup">Early Startup</option>
                    <option value="msme">Growing MSME</option>
                    <option value="scaleup">Scaling Business</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="goals" rows="3" placeholder="What’s your biggest business challenge?"></textarea>
                </div>
                <button type="submit" className="cta-btn">🚀 Request via WhatsApp</button>
              </form>

              <a href="https://wa.me/918240026380" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <div className="contact-container">
          <h2>📬 Get in Touch</h2>
          <p className="contact-subtitle">Let’s build something meaningful together</p>

          <div className="contact-grid">
            <div className="contact-card">
              <i className="fas fa-phone-alt"></i>
              <h3>Phone</h3>
              <p><a href="tel:+919903513706">+91 99035 13706</a></p>
              <p><a href="tel:+918700541657">+91 87005 41657</a></p>
            </div>

            <div className="contact-card">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p><a href="mailto:sarvanubanerjee@gmail.com">sarvanubanerjee@gmail.com</a></p>
            </div>

            <div className="contact-card">
              <i className="fab fa-whatsapp"></i>
              <h3>WhatsApp</h3>
              <p><a href="https://wa.me/918240026380" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sarvanu Banerjee",
            "url": "https://sarvanu.com",
            "jobTitle": "Business Consultant",
            "sameAs": [
              "https://www.linkedin.com/in/sarvanu-banerjee",
              "https://www.instagram.com/sarvanu_banerjee/",
              "https://www.facebook.com/sarvanu.banerjee"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Sarvanu Consulting",
              "url": "https://sarvanu.com"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Sarvanu Banerjee Strategies",
            "url": "https://sarvanu.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://sarvanu.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
}
