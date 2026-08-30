import './HeroSection.css';

const quickActions = [
  {
    label: 'Start as Entrepreneur',
    desc: 'Build profile, get roadmap, apply for approvals',
    color: '#f97316',
    href: '/register',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
        <line x1="19" y1="8" x2="19" y2="14"/>
        <line x1="22" y1="11" x2="16" y2="11"/>
      </svg>
    ),
  },
  {
    label: 'Entrepreneur Dashboard',
    desc: 'Track applications, respond to queries, view roadmap',
    color: '#1a3a8a',
    href: '/dashboard',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    label: 'Track Application',
    desc: 'Real-time status, timeline, query updates',
    color: '#16a34a',
    href: '/track',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    label: 'Government Officer Portal',
    desc: 'Review applications, raise queries, schedule inspections',
    color: '#7c3aed',
    href: '/gov',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
];

const stats = [
  { value: '4', suffix: '', label: 'Sectors' },
  { value: '12', suffix: '', label: 'Sub-sectors' },
  { value: '18', suffix: '', label: 'Modules' },
  { value: '9', suffix: '+', label: 'Approval Types' },
  { value: '1', suffix: '', label: 'Single Window' },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      {/* Animated background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-bg-orb hero-bg-orb-1" />
        <div className="hero-bg-orb hero-bg-orb-2" />
        <div className="hero-bg-orb hero-bg-orb-3" />
      </div>

      {/* Main content */}
      <div className="hero-content">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Top pill */}
          <div className="hero-pill">
            <span className="hero-pill-badge">SIH 2026</span>
            Problem Statement #26130 · Maharashtra
          </div>

          {/* Heading */}
          <h1 className="hero-heading">
            From Profile to{' '}
            <span className="hero-heading-accent">Approval</span>
            <br />One Connected Platform
          </h1>

          {/* Sub */}
          <p className="hero-sub">
            BuildX replaces fragmented department visits with a single intelligent platform —
            approval roadmap, pre-validated applications, query management, inspection scheduling,
            and real-time tracking. All connected to Maharashtra's government workflow.
          </p>

          {/* Hero Demo badge */}
          <div className="hero-demo-badge">
            <span style={{ opacity: 0.7, fontSize: 12 }}>Hero Demo →</span>
            <span>FreshChain Cold Logistics Pvt. Ltd.</span>
            <span className="hero-demo-tag">APP-MH-2026-00124</span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-ctas">
            <a href="/register" className="hero-cta-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Start Your Journey
            </a>
            <a href="/login?demo=entrepreneur" className="hero-cta-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              View Demo
            </a>
          </div>

          {/* Quick Action Cards */}
          <div className="hero-quick-actions">
            {quickActions.map((qa) => (
              <a
                key={qa.label}
                href={qa.href}
                className="quick-action-card"
                style={{ '--qa-color': qa.color }}
              >
                <div className="qa-icon">{qa.icon}</div>
                <div style={{ flex: 1 }}>
                  <div className="qa-label">{qa.label}</div>
                  <div className="qa-desc">{qa.desc}</div>
                </div>
                <div className="qa-arrow">
                  <ArrowIcon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="hero-stats-bar">
        <div className="container">
          <div className="hero-stats-bar-inner">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-value">
                  {s.value}
                  {s.suffix && <span>{s.suffix}</span>}
                </div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
