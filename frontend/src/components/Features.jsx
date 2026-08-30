import { useState } from 'react';
import './Features.css';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const roadmapItems = [
  { name: 'MIDC Building Plan + Provisional Fire NOC', authority: 'MIDC / Fire Dept.', status: 'done', badge: 'Approved' },
  { name: 'FSSAI Registration / Licence', authority: 'FSSAI', status: 'active', badge: 'Under Review' },
  { name: 'MPCB Consent to Establish', authority: 'MPCB', status: 'todo', badge: 'Pending' },
  { name: 'Industrial Electricity Connection', authority: 'MSEDCL', status: 'todo', badge: 'Pending' },
  { name: 'MIDC Water Connection', authority: 'MIDC', status: 'todo', badge: 'Pending' },
  { name: 'Factory Licence', authority: 'Labour Department', status: 'review', badge: 'Needs Review' },
];

const validationRows = [
  { label: 'Required fields complete', pass: true },
  { label: 'Applicant details verified', pass: true },
  { label: 'Business info consistent', pass: true },
  { label: 'Process Flow document uploaded', pass: false },
  { label: 'Declaration signed', pass: true },
];

const features = [
  {
    title: 'Entrepreneur Dashboard',
    desc: 'Single-window command center prioritizing action items, upcoming inspections, and queries.',
    visual: 'roadmap',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    title: 'Personalized Roadmap',
    desc: 'An ordered, dynamic approval pathway tracking progress across all departments in real-time.',
    visual: 'roadmap',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    title: 'Document Pre-validation',
    desc: 'Catches missing documents and format errors before submission — preventing rejections at the source.',
    visual: 'validation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 12 18 15 15"/>
      </svg>
    ),
  },
  {
    title: 'Query & Inspection',
    desc: 'Respond to officer queries with vault documents and schedule physical site inspections online.',
    visual: 'validation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: 'Government Portal',
    desc: 'Unified officer workspace for reviewing, querying, inspecting, and deciding applications.',
    visual: 'roadmap',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    title: 'Analytics & SLA Alerts',
    desc: 'Operational intelligence tracking processing times, pending renewals, and status distributions.',
    visual: 'validation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
];

function RoadmapVisual() {
  return (
    <div className="fp-roadmap">
      {roadmapItems.map((item) => (
        <div key={item.name} className="fp-roadmap-item">
          <div className={`fp-dot ${item.status}`}>
            {(item.status === 'done' || item.status === 'active') && <CheckIcon />}
          </div>
          <div className="fp-info">
            <div className="fp-name">{item.name}</div>
            <div className="fp-meta">{item.authority}</div>
          </div>
          <span className={`badge ${
            item.status === 'done' ? 'badge-success' :
            item.status === 'active' ? 'badge-navy' :
            item.status === 'review' ? 'badge-warning' :
            'badge-saffron'
          }`}>
            {item.badge}
          </span>
        </div>
      ))}
    </div>
  );
}

function ValidationVisual() {
  return (
    <div>
      <div className="fp-validation">
        {validationRows.map((row) => (
          <div key={row.label} className={`fp-val-row ${row.pass ? 'pass' : 'fail'}`}>
            <div className="fp-val-icon">
              {row.pass ? <CheckIcon /> : <XIcon />}
            </div>
            <span className="fp-val-label">{row.label}</span>
          </div>
        ))}
      </div>
      <button className="fp-submit-btn" style={{ marginTop: 16 }} disabled>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        </svg>
        Upload Process Flow to Enable Submit
      </button>
    </div>
  );
}

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const active = features[activeFeature];

  return (
    <section className="features" id="features">
      <div className="container">
        {/* Header */}
        <div className="features-header">
          <div className="eyebrow">Platform Features</div>
          <h2 className="h2">Everything you need,<br />in one connected system</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            From intelligence to approval — BuildX connects every step for
            entrepreneurs and government officers alike.
          </p>
        </div>

        <div className="features-layout">
          {/* Feature list */}
          <div className="feature-list">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`feat-item ${activeFeature === i ? 'active' : ''}`}
                onClick={() => setActiveFeature(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveFeature(i)}
              >
                <div className="feat-item-icon">{f.icon}</div>
                <div className="feat-item-body">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
                <div className="feat-item-chevron">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Right panel */}
          <div className="feat-panel" key={activeFeature}>
            <div className="feat-panel-card">
              <div className="feat-panel-header">
                <div className="feat-panel-title">
                  <div className="feat-panel-icon">{active.icon}</div>
                  <span className="feat-panel-name">{active.title}</span>
                </div>
                <span className="badge badge-success">Live Preview</span>
              </div>
              <div className="feat-panel-body">
                {active.visual === 'roadmap' ? <RoadmapVisual /> : <ValidationVisual />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
