import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                {/* Column 1: Brand & Authority */}
                <div className="footer-brand">
                    <Link href="/" className="footer-logo">
                        <h3>Sarvanu <span>Strategies</span></h3>
                    </Link>
                    <p className="footer-mission">
                        Empowering founders, entrepreneurs, and MSMEs with clarity, systems, and strategic growth. Stop grinding, start scaling.
                    </p>
                    <div className="footer-cta-contact">
                        <Link href="/book" className="footer-btn">
                            Book a Strategy Call <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>

                {/* Column 2: Expertise / Services */}
                <div className="footer-col footer-services">
                    <h4>Core Services</h4>
                    <ul>
                        <li>
                            <Link href="/services#strategy">Business Strategy</Link>
                        </li>
                        <li>
                            <Link href="/services#systems">Operational Systems</Link>
                        </li>
                        <li>
                            <Link href="/saas">SaaS Development</Link>
                        </li>
                        <li>
                            <Link href="/ai-agent-service">AI Agents & Automation</Link>
                        </li>
                        <li>
                            <Link href="/services#leadership">Leadership Coaching</Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Company & Trust */}
                <div className="footer-col footer-company">
                    <h4>Company</h4>
                    <ul>
                        <li>
                            <Link href="/#about">About Sarvanu.com</Link>
                        </li>
                        <li>
                            <Link href="/case-studies">Case Studies</Link>
                        </li>
                        <li>
                            <Link href="/blog">Articles & Insights</Link>
                        </li>
                        <li>
                            <Link href="/press">Press & Media</Link>
                        </li>
                        <li>
                            <Link href="/faq">FAQ</Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Connect */}
                <div className="footer-col footer-social">
                    <h4>Connect</h4>
                    <p className="footer-email">
                        <i className="fas fa-envelope"></i> info@sarvanu.com
                    </p>
                    <p className="footer-email" style={{marginTop: '6px'}}>
                        <i className="fas fa-phone"></i> +91 98765 43210
                    </p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/sarvanu-banerjee/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://x.com/Sarvanu666" target="_blank" rel="noopener noreferrer" aria-label="X Twitter">
                            <i className="fab fa-x-twitter" />
                        </a>
                        <a href="https://www.facebook.com/sarvanu.banerjee" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/sarvanu_banerjee/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://sarvanubanerjee.blogspot.com/" target="_blank" rel="noopener noreferrer" aria-label="Blog">
                            <i className="fas fa-blog"></i>
                        </a>
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} Sarvanu.com. All Rights Reserved.</p>
                    <div className="footer-legal">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <span className="separator">|</span>
                        <Link href="/terms-of-service">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
