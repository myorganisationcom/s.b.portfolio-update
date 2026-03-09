'use client';

export default function SnapBar() {
  return (
    <div className="snap-bar">
      <div className="snap-container">
        <div className="snap-left">
          <span className="snap-badge">⚡ Available for Projects</span>
          <div className="snap-contact">
            <a href="tel:+919903513706" className="snap-link">
              <i className="fas fa-phone"></i> +91 99035 13706
            </a>
            <span className="snap-divider">|</span>
            <a href="mailto:sarvanubanerjee10@gmail.com" className="snap-link">
              <i className="fas fa-envelope"></i> sarvanubanerjee10@gmail.com
            </a>
          </div>
        </div>
        <div className="snap-right">
          <a
            href="https://wa.me/918700541657"
            target="_blank"
            rel="noopener noreferrer"
            className="snap-cta whatsapp-pulse"
          >
            <i className="fab fa-whatsapp"></i> Let's Chat
          </a>
        </div>
      </div>
    </div>
  );
}
