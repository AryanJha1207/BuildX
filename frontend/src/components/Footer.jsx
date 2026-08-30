import './CTASection.css';

const footerLinks = {
  Platform: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Sectors Covered', href: '#sectors' },
    { label: 'Approval Intelligence', href: '#features' },
  ],
  Entrepreneurs: [
    { label: 'Create Account', href: '/register' },
    { label: 'Business Profile', href: '/profile' },
    { label: 'My Roadmap', href: '/roadmap' },
    { label: 'Document Vault', href: '/documents' },
  ],
  Government: [
    { label: 'Officer Login', href: '/login?role=officer' },
    { label: 'Application Review', href: '/gov/applications' },
    { label: 'Analytics Dashboard', href: '/gov/analytics' },
    { label: 'Inspection Scheduler', href: '/gov/inspections' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-logo">
              <div className="footer-brand-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="footer-brand-text">
                <div className="footer-brand-name">Build<span className="footer-brand-name-x">X</span></div>
                <div className="footer-brand-tagline">Maharashtra · SIH 2026</div>
              </div>
            </div>

            <p className="footer-brand-desc">
              Intelligent Approval &amp; Compliance Management Platform for Maharashtra businesses.
              One profile. Every approval. No more fragmented visits.
            </p>

            <div className="footer-pills">
              <span className="footer-pill">SIH 2026</span>
              <span className="footer-pill">Problem #26130</span>
              <span className="footer-pill">Maharashtra Gov</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <div className="footer-col-title">{title}</div>
              <div className="footer-links">
                {items.map((link) => (
                  <a key={link.label} href={link.href}>{link.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="footer-copy">
              © 2026 BuildX · Smart India Hackathon Prototype
            </span>
            <span className="footer-disclaimer">
              Not an official government portal. Built for SIH 2026 demonstration purposes.
            </span>
          </div>
          <div className="footer-live">
            <span className="footer-live-dot" />
            Maharashtra Prototype · Live
          </div>
        </div>
      </div>
    </footer>
  );
}
