import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, BookOpen, GraduationCap, ArrowRight, Zap, Phone } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = {
    color: '#334155',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.92rem',
    transition: 'color 0.2s ease',
    cursor: 'pointer'
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #1E1B4B 0%, #1D4ED8 50%, #059669 100%)',
        color: '#FFFFFF',
        padding: '8px 16px',
        textAlign: 'center',
        fontSize: '0.85rem',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        position: 'relative',
        zIndex: 101
      }}>
        <Zap size={14} color="#FBBF24" />
        <span>Next 15-Day Study & Learn Batch Starts Monday! <strong>Maths • Science • Commerce</strong></span>
        <button
          onClick={() => onOpenModal('demo')}
          style={{
            background: '#F59E0B',
            color: '#0F172A',
            border: 'none',
            borderRadius: '9999px',
            padding: '3px 12px',
            fontSize: '0.75rem',
            fontWeight: 800,
            cursor: 'pointer',
            marginLeft: '8px'
          }}
        >
          Reserve Free Demo
        </button>
      </div>

      {/* Main Header / Navigation */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 20px rgba(15, 23, 42, 0.06)' : 'none'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.35)',
              fontWeight: 900,
              fontSize: '1.2rem'
            }}>
              <GraduationCap size={26} color="#FFFFFF" />
            </div>
            <div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: '1.45rem',
                letterSpacing: '-0.03em',
                color: '#0F172A',
                lineHeight: 1
              }}>
                STUDY <span style={{ color: '#2563EB' }}>KARO</span>
              </div>
              <div style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                color: '#D97706',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginTop: '3px'
              }}>
                15-Day Study & Learn
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '22px' }} className="desktop-nav">
            <a href="#subjects" style={navLinkStyle}>Subjects</a>
            <a href="#curriculum" style={navLinkStyle}>15-Day Roadmap</a>
            <a href="#practicelab" style={navLinkStyle}>Study Lab</a>
            <a href="#calculator" style={navLinkStyle}>Score Booster</a>
            <a href="#pricing" style={navLinkStyle}>Plans & Fees</a>
            <a href="#reviews" style={navLinkStyle}>Results</a>
            <a href="#motivation" style={navLinkStyle}>Inspiration</a>
            <a href="#faq" style={navLinkStyle}>FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="desktop-actions">
            <button
              onClick={() => onOpenModal('demo')}
              className="btn-gold"
              style={{ padding: '9px 18px', fontSize: '0.85rem' }}
            >
              <Sparkles size={16} /> Free Demo
            </button>
            <button
              onClick={() => onOpenModal('enroll')}
              className="btn-primary"
              style={{ padding: '9px 20px', fontSize: '0.85rem' }}
            >
              Enroll from ₹500 <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-hamburger"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#0F172A',
              padding: '6px'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '90px',
          left: 0,
          width: '100%',
          background: '#FFFFFF',
          borderBottom: '2px solid #E2E8F0',
          padding: '24px',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <a href="#subjects" onClick={() => setMobileMenuOpen(false)} style={{ ...navLinkStyle, fontSize: '1.05rem' }}>📚 Subjects (Maths, Science, Commerce)</a>
          <a href="#curriculum" onClick={() => setMobileMenuOpen(false)} style={{ ...navLinkStyle, fontSize: '1.05rem' }}>🗓️ 15-Day Study Roadmap</a>
          <a href="#practicelab" onClick={() => setMobileMenuOpen(false)} style={{ ...navLinkStyle, fontSize: '1.05rem' }}>🔬 Interactive Study Lab</a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} style={{ ...navLinkStyle, fontSize: '1.05rem' }}>📈 Score Booster Calculator</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ ...navLinkStyle, fontSize: '1.05rem' }}>💰 Plans & Course Fees (₹500 / ₹1,000)</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} style={{ ...navLinkStyle, fontSize: '1.05rem' }}>⭐ Student Results & Testimonials</a>
          <a href="#motivation" onClick={() => setMobileMenuOpen(false)} style={{ ...navLinkStyle, fontSize: '1.05rem' }}>🔥 Daily Motivation & Quotes</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ ...navLinkStyle, fontSize: '1.05rem' }}>❓ Frequently Asked Questions</a>

          <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenModal('demo'); }}
              className="btn-gold"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Book Free Demo
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenModal('enroll'); }}
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Enroll from ₹500
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
        @media (min-width: 861px) {
          .mobile-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
