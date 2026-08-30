import './HowItWorks.css';

const entSteps = [
  {
    num: '1',
    title: 'Build Your Profile',
    desc: 'Enter business details once — sector, location, project type',
    tag: 'One-time Setup',
    color: '#f97316',
    bg: '#fff7ed',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  },
  {
    num: '2',
    title: 'Get Approval Intelligence',
    desc: 'AI rule engine identifies every licence and approval you need',
    tag: 'AI-Powered',
    color: '#1a3a8a',
    bg: '#eef3ff',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
  },
  {
    num: '3',
    title: 'Your Approval Roadmap',
    desc: 'Ordered pathway with documents, deadlines & status',
    tag: 'Personalized',
    color: '#16a34a',
    bg: '#f0fdf4',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  },
  {
    num: '4',
    title: 'Pre-validate & Submit',
    desc: 'Catch errors before submission — prevent rejections at source',
    tag: 'Zero Rejections',
    color: '#7c3aed',
    bg: '#f5f3ff',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  },
  {
    num: '5',
    title: 'Dashboard & Track',
    desc: 'Live status, query responses, SLA alerts, and final decisions',
    tag: 'Real-time',
    color: '#0891b2',
    bg: '#ecfeff',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  },
];

const govSteps = [
  {
    num: 'Step A',
    title: 'Review Application',
    desc: 'Officer receives and reviews documents, business info, and pre-validation results in a unified dashboard',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  },
  {
    num: 'Step B',
    title: 'Query & Inspect',
    desc: 'Raise queries, review entrepreneur responses, schedule and complete physical site inspections',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    num: 'Step C',
    title: 'Decide & Notify',
    desc: 'Approve or reject. Entrepreneur is notified instantly. Roadmap and compliance status auto-updates',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw" id="how-it-works">
      <div className="container">
        <div className="hiw-header">
          <div className="eyebrow">How It Works</div>
          <h2 className="h2">From Profile to Approval in 5 Steps</h2>
          <p className="lead" style={{ maxWidth: 520, margin: '14px auto 0' }}>
            One connected workflow that replaces confusion, repeated paperwork, and
            fragmented department visits.
          </p>
        </div>

        {/* Entrepreneur Steps */}
        <div className="hiw-steps-wrapper">
          <div className="hiw-track">
            <div className="hiw-track-fill" />
          </div>
          <div className="hiw-steps">
            {entSteps.map((step) => (
              <div key={step.num} className="hiw-step">
                <div
                  className="hiw-step-icon-wrap"
                  style={{
                    background: step.bg,
                    boxShadow: `0 6px 24px ${step.color}22`,
                  }}
                >
                  <div style={{ color: step.color }}>{step.icon}</div>
                  <span className="hiw-step-num">{step.num}</span>
                </div>
                <div className="hiw-step-body">
                  <div className="hiw-step-title">{step.title}</div>
                  <div className="hiw-step-desc">{step.desc}</div>
                  <div className="hiw-step-tag">{step.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section divider */}
        <div className="hiw-divider">
          <div className="hiw-divider-line" />
          <div className="hiw-divider-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            Government Officer Side
          </div>
          <div className="hiw-divider-line" />
        </div>

        {/* Gov Steps */}
        <div className="hiw-gov-steps">
          {govSteps.map((step) => (
            <div key={step.title} className="hiw-gov-card">
              <div className="hiw-gov-icon">{step.icon}</div>
              <div className="hiw-gov-step-num">{step.num}</div>
              <div className="hiw-gov-title">{step.title}</div>
              <div className="hiw-gov-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
