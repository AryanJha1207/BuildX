import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Fixed tricolor stripe at very top */}
      <div className="tricolor-bar" aria-hidden="true" />

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container navbar-inner">

          {/* Logo */}
          <a href="/" className="navbar-logo" aria-label="BuildX Home">
            <div className="navbar-logo-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div className="navbar-logo-text">
              <span className="navbar-logo-name">BuildX</span>
              <span className="navbar-logo-sub">Maharashtra · SIH 2026</span>
            </div>
          </a>

          {/* Center Nav */}
          <div className="navbar-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#features">Features</a>
            <a href="#sectors">Sectors</a>
            <a href="#about">About</a>
          </div>

          {/* Right Actions */}
          <div className="navbar-actions">
            <div className="navbar-gov-badge">
              <span className="live-dot" />
              Govt. of Maharashtra
            </div>
            <a href="/login" className="navbar-btn-login">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
              Sign In
            </a>
            <a href="/register" className="navbar-btn-register">
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
