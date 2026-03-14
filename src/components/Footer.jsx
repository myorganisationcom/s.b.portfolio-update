import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                {/* Brand */}
                <div className="footer-brand">
                    <h3>Sarvanu Banerjee Strategies</h3>
                    <p>
                        Empowering founders, entrepreneurs, and businesses with clarity, systems, and growth strategies.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                            <Link href="/#about">About</Link>
                        </li>
                        <li>
                            <Link href="/#services">Services</Link>
                        </li>
                        <li>
                            <Link href="/saas">SaaS & AI</Link>
                        </li>
                        <li>
                            <Link href="/ai-agent-service">AI Agents</Link>
                        </li>
                        <li>
                            <Link href="/case-studies">Case Studies</Link>
                        </li>
                        <li>
                            <Link href="/press">Press</Link>
                        </li>
                        <li>
                            <Link href="/faq">FAQ</Link>
                        </li>
                        <li>
                            <Link href="/book">Book a Call</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-social">
                    <h4>Follow Me</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/sarvanu.banerjee" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sarvanu-banerjee/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/sarvanu_banerjee/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://x.com/Sarvanu666" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-x-twitter" />
                        </a>
                        <a href="https://sarvanubanerjee.blogspot.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-blog"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sarvanu Banerjee Strategies. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
