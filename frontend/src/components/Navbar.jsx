import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Tricolor stripe — always at very top */}
      <div className="tricolor-bar" aria-hidden="true" />

      {/* Single unified navbar */}
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container navbar-inner">

          {/* ── LEFT: Ashoka Emblem + BuildX title ── */}
          <a href="/" className="navbar-brand" aria-label="BuildX — Government of Maharashtra">

            {/* Ashoka emblem */}
            <div className="navbar-emblem" aria-hidden="true">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="16" r="11" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.9"/>
                <circle cx="18" cy="16" r="2.8" fill="currentColor"/>
                {Array.from({ length: 24 }, (_, i) => {
                  const angle = (i * 15 - 90) * Math.PI / 180;
                  return (
                    <line
                      key={i}
                      x1={18 + 3.2 * Math.cos(angle)}
                      y1={16 + 3.2 * Math.sin(angle)}
                      x2={18 + 9.5 * Math.cos(angle)}
                      y2={16 + 9.5 * Math.sin(angle)}
                      stroke="currentColor"
                      strokeWidth="0.9"
                      opacity="0.7"
                    />
                  );
                })}
                <rect x="8" y="29" width="20" height="2.2" rx="1.1" fill="currentColor" opacity="0.85"/>
                <rect x="11" y="32.5" width="14" height="2" rx="1" fill="currentColor" opacity="0.55"/>
              </svg>
            </div>

            {/* BuildX + Gov of Maharashtra stacked */}
            <div className="navbar-identity">
              <span className="navbar-buildx-name">Build<span className="navbar-x">X</span></span>
              <span className="navbar-gov-sub">Government of Maharashtra</span>
            </div>
          </a>

          {/* ── CENTER: Nav links ── */}
          <div className="navbar-links">
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#sectors" className="nav-link">Sectors</a>
            <a href="#about" className="nav-link">About</a>
          </div>

          {/* ── RIGHT: Utility + Actions ── */}
          <div className="navbar-actions">
            {/* Language switcher */}
            <div className="navbar-lang">
              <a href="#" className="lang-link" lang="hi">हिंदी</a>
              <span className="lang-sep">|</span>
              <a href="#" className="lang-link" lang="mr">मराठी</a>
            </div>

            <div className="navbar-actions-divider" aria-hidden="true" />

            {/* Live indicator */}
            <div className="navbar-live">
              <span className="live-dot" />
              <span className="live-text">Live</span>
            </div>

            {/* Sign In */}
            <a href="/login" className="navbar-btn-login" id="nav-login-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
              Sign In
            </a>

            {/* Register CTA */}
            <a href="/register" className="navbar-btn-register" id="nav-register-btn">
              Get Started
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            {/* Hamburger */}
            <button
              className="navbar-hamburger"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className={`hb ${mobileOpen ? 'open' : ''}`} />
              <span className={`hb ${mobileOpen ? 'open' : ''}`} />
              <span className={`hb ${mobileOpen ? 'open' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="navbar-mobile-menu">
            <div className="container">
              <a href="#how-it-works" onClick={() => setMobileOpen(false)}>How It Works</a>
              <a href="#features" onClick={() => setMobileOpen(false)}>Features</a>
              <a href="#sectors" onClick={() => setMobileOpen(false)}>Sectors</a>
              <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
              <div className="mobile-divider" />
              <div className="mobile-lang">
                <a href="#" lang="hi">हिंदी</a>
                <a href="#" lang="mr">मराठी</a>
              </div>
              <a href="/login" className="mobile-login">Sign In</a>
              <a href="/register" className="mobile-register">Get Started →</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
