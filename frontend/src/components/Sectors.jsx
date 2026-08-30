import './Sectors.css';

const sectors = [
  {
    name: 'Logistics & Warehousing',
    color: '#1a3a8a',
    bg: '#eef3ff',
    subsectors: ['General Warehouse / Storage', 'Cold Storage / Cold Chain', 'Distribution Center'],
    tag: '⭐ Hero Scenario',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    name: 'Tourism & Hospitality',
    color: '#0891b2',
    bg: '#ecfeff',
    subsectors: ['Hotel / Resort', 'Homestay', 'Restaurant / Food Service'],
    tag: '3 Sub-sectors',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    name: 'Textiles & Garments',
    color: '#7c3aed',
    bg: '#f5f3ff',
    subsectors: ['Garment Manufacturing', 'Spinning / Weaving', 'Textile Processing / Dyeing'],
    tag: '3 Sub-sectors',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
      </svg>
    ),
  },
  {
    name: 'Food Processing',
    color: '#16a34a',
    bg: '#f0fdf4',
    subsectors: ['Dairy Processing', 'Fruit & Vegetable Processing', 'Grain / Flour Processing'],
    tag: '3 Sub-sectors',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

export default function Sectors() {
  return (
    <section className="sectors" id="sectors">
      <div className="container">
        <div className="sectors-header">
          <div className="eyebrow">Sector Coverage</div>
          <h2 className="h2">4 Sectors · 12 Sub-sectors</h2>
          <p className="lead" style={{ margin: '12px auto 0', maxWidth: 500, textAlign: 'center' }}>
            BuildX is purpose-built for Maharashtra's key industries, with approval
            intelligence pre-configured for the most common business types.
          </p>
        </div>

        <div className="sectors-grid">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="sector-card"
              style={{
                '--sc-color': sector.color,
                '--sc-bg': sector.bg,
              }}
            >
              <div className="sector-icon-wrap">{sector.icon}</div>
              <div className="sector-name">{sector.name}</div>
              <ul className="sector-subsectors">
                {sector.subsectors.map((sub) => (
                  <li key={sub} className="sector-subsector">{sub}</li>
                ))}
              </ul>
              <div className="sector-tag">{sector.tag}</div>
            </div>
          ))}
        </div>

        <div className="sectors-note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Full approval intelligence is configured for{' '}
          <strong>Logistics / Warehousing → Cold Storage / Cold Chain (Hero Scenario).</strong>{' '}
          Other sub-sectors show <strong>NEEDS REVIEW</strong> where rules are pending configuration.
        </div>
      </div>
    </section>
  );
}
