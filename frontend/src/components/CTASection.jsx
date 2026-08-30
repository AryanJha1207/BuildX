import './CTASection.css';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const trustItems = [
  'Document Vault (Upload Once)',
  'Real-time SLA Alerts',
  'Unified Government Portal',
  'Single Window System',
];

export default function CTASection() {
  return (
    <section className="cta-section" id="about">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-grid" aria-hidden="true" />
          <div className="cta-orb-1" aria-hidden="true" />
          <div className="cta-orb-2" aria-hidden="true" />

          <div className="cta-content">
            <div className="cta-badge">🏆 Smart India Hackathon 2026</div>

            <h2 className="cta-heading">
              Your business approvals,{' '}
              <span className="cta-heading-accent">handled.</span>
            </h2>

            <p className="cta-sub">
              FreshChain Cold Logistics completed their full approval roadmap on BuildX.
              Enter your business profile and get your personalized roadmap in minutes.
            </p>

            <div className="cta-buttons">
              <a href="/register" className="cta-btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                Start as Entrepreneur
              </a>
              <a href="/login?role=officer" className="cta-btn-secondary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                Government Officer Login
              </a>
            </div>

            <div className="cta-trust">
              {trustItems.map((item) => (
                <div key={item} className="cta-trust-item">
                  <CheckIcon />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
