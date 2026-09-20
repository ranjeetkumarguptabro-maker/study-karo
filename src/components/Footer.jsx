import React, { useState } from 'react';
import { GraduationCap, ArrowRight, CheckCircle2, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const linkStyle = {
    color: '#94A3B8',
    textDecoration: 'none',
    fontSize: '0.88rem',
    transition: 'color 0.2s ease'
  };

  return (
    <footer style={{ background: '#0F172A', color: '#F8FAFC', paddingTop: '80px', paddingBottom: '50px', borderTop: '1px solid #1E293B' }}>
      <div className="section-container">
        
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: '40px',
          marginBottom: '60px'
        }} className="footer-grid">
          
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <GraduationCap size={22} color="#FFFFFF" />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
                STUDY <span style={{ color: '#60A5FA' }}>KARO</span>
              </span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Study Karo is India's leading 15-day conceptual learning platform for Mathematics, Science, and Commerce. Empowering students with live mentoring, interactive simulators, and structured problem solving.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#CBD5E1' }}>
              <div>👨‍🏫 <strong>Lead Teacher:</strong> Krish Mallick</div>
              <div>✉️ <strong>Direct Gmail:</strong> <a href="mailto:krishmallick077@gmail.com" style={{ color: '#60A5FA', textDecoration: 'none', fontWeight: 700 }}>krishmallick077@gmail.com</a></div>
              <div>📍 Online Live Tutoring Nationwide</div>
              <div>💬 WhatsApp Helpline: +91 98765 43210</div>
            </div>
          </div>

          {/* Col 2: Academic Subjects */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '18px' }}>
              Subject Tracks
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#subjects" style={linkStyle}>🧮 Mathematics Mastery</a>
              <a href="#subjects" style={linkStyle}>⚛️ Physics (Mechanics & Electricity)</a>
              <a href="#subjects" style={linkStyle}>🧪 Chemistry (Equations & Periodic Table)</a>
              <a href="#subjects" style={linkStyle}>🧬 Biology (Life Processes & Diagrams)</a>
              <a href="#subjects" style={linkStyle}>📊 Financial Accounting & Ledger</a>
              <a href="#subjects" style={linkStyle}>📈 Economics & Business Studies</a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '18px' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#overview" style={linkStyle}>About Study Karo</a>
              <a href="#curriculum" style={linkStyle}>15-Day Study Roadmap</a>
              <a href="#practicelab" style={linkStyle}>Interactive Learning Lab</a>
              <a href="#calculator" style={linkStyle}>Score Booster Calculator</a>
              <a href="#reviews" style={linkStyle}>Student Success Stories</a>
              <a href="#faq" style={linkStyle}>Help & FAQs</a>
            </div>
          </div>

          {/* Col 4: Newsletter & Free DPP */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '18px' }}>
              Free Weekly Study Sheet
            </h4>
            <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '16px' }}>
              Get our curated weekly formula cheat sheet and high-yield board question PDF delivered to your inbox.
            </p>
            {subscribed ? (
              <div style={{ background: '#064E3B', color: '#6EE7B7', padding: '12px', borderRadius: '12px', fontSize: '0.85rem' }}>
                ✓ Subscribed! Check your email for this week's study kit.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid #334155',
                    background: '#1E293B',
                    color: '#FFFFFF',
                    fontSize: '0.9rem'
                  }}
                />
                <button
                  type="submit"
                  className="btn-gold"
                  style={{ justifyContent: 'center', padding: '10px' }}
                >
                  Get Free Study Notes
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div style={{
          borderTop: '1px solid #1E293B',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.82rem',
          color: '#64748B'
        }}>
          <div>
            © 2026 Study Karo • Lead Teacher: Krish Mallick (<a href="mailto:krishmallick077@gmail.com" style={{ color: '#60A5FA', textDecoration: 'none' }}>krishmallick077@gmail.com</a>) • All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Refund Policy</span>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 550px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
