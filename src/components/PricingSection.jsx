import React from 'react';
import { CheckCircle2, Sparkles, ArrowRight, Zap, Award, BookOpen, Clock, Users, ShieldCheck } from 'lucide-react';

export default function PricingSection({ onOpenModal }) {
  return (
    <section id="pricing" style={{ position: 'relative', padding: '90px 0', background: '#F8FAFC' }}>
      <div className="section-container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#2563EB',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '2px',
            marginBottom: '12px',
            textTransform: 'uppercase'
          }}>
            💰 TRANSPARENT & AFFORDABLE TUITION
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            Choose Your <span className="gradient-text">Study Karo Learning Plan</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Quality education shouldn't cost a fortune. Pick the focused single subject crash course or conquer all subjects in our complete masterclass.
          </p>
        </div>

        {/* 2 Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          maxWidth: '960px',
          margin: '0 auto 40px auto',
          alignItems: 'stretch'
        }} className="pricing-cards-grid">
          
          {/* Card 1: Small Course (₹500) */}
          <div className="ref-card" style={{
            padding: '40px 32px',
            borderRadius: '26px',
            background: '#FFFFFF',
            border: '1.5px solid #CBD5E1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)'
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                background: '#F1F5F9',
                color: '#475569',
                fontWeight: 800,
                fontSize: '0.78rem',
                padding: '4px 14px',
                borderRadius: '16px',
                marginBottom: '16px'
              }}>
                FOCUSED CRASH COURSE
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', marginBottom: '8px' }}>
                Small Course Track
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.92rem', marginBottom: '24px', lineHeight: 1.5 }}>
                Perfect for students wanting targeted revision and problem-solving in any single subject.
              </p>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '24px', borderBottom: '1px solid #F1F5F9', paddingBottom: '20px' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#0F172A', lineHeight: 1 }}>₹500</span>
                <span style={{ color: '#64748B', fontSize: '0.95rem', fontWeight: 600 }}>/ Single Subject</span>
              </div>

              {/* Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {[
                  "Pick 1 Subject (Maths, Science, or Commerce)",
                  "7 Days of Intensive Live Lectures",
                  "Chapter-wise Solved Notes & Formulas",
                  "7 Daily Practice Problem Sheets (DPPs)",
                  "Group Doubt Clearing Access",
                  "HD Video Recordings for 30 Days"
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#334155' }}>
                    <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenModal('enroll')}
              className="btn-navy"
              style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.98rem' }}
            >
              Enroll in Small Course (₹500)
            </button>
          </div>

          {/* Card 2: Complete 15-Day Masterclass (₹1,000) - HIGHLIGHTED */}
          <div className="ref-card" style={{
            padding: '40px 32px',
            borderRadius: '26px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)',
            border: '2.5px solid #2563EB',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            boxShadow: '0 20px 45px rgba(37, 99, 235, 0.15)',
            transform: 'scale(1.02)'
          }}>
            {/* Top Most Popular Badge */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
              color: '#0F172A',
              fontWeight: 900,
              fontSize: '0.8rem',
              padding: '6px 20px',
              borderRadius: '9999px',
              boxShadow: '0 4px 12px rgba(245, 158, 11, 0.35)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Sparkles size={14} /> MOST POPULAR (BEST VALUE)
            </div>

            <div>
              <div style={{
                display: 'inline-block',
                background: '#DBEAFE',
                color: '#1E40AF',
                fontWeight: 800,
                fontSize: '0.78rem',
                padding: '4px 14px',
                borderRadius: '16px',
                marginBottom: '16px'
              }}>
                COMPLETE 15-DAY COMPREHENSIVE
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', marginBottom: '8px' }}>
                Full 15-Day Masterclass
              </h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', marginBottom: '24px', lineHeight: 1.5 }}>
                Our complete flagship learning program covering all subjects with personalized mentor feedback.
              </p>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '24px', borderBottom: '1px solid #BFDBFE', paddingBottom: '20px' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#1E40AF', lineHeight: 1 }}>₹1,000</span>
                <span style={{ color: '#475569', fontSize: '0.95rem', fontWeight: 600 }}>/ Full 15 Days Access</span>
              </div>

              {/* Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {[
                  "All 3 Subjects Included: Maths, Science & Commerce",
                  "Full 15 Days of Live Tutoring & Masterclasses",
                  "Complete 250+ Problem Solved Question Bank",
                  "15 Daily Practice Problem Sheets (DPPs)",
                  "1-on-1 Dedicated Doubt Clearing with Teacher",
                  "Grand Mock Assessment & Performance Review",
                  "Lifetime Unlimited Access to Recordings & Notes"
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#0F172A', fontWeight: 600 }}>
                    <CheckCircle2 size={18} color="#2563EB" style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenModal('enroll')}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1.02rem', boxShadow: '0 8px 24px rgba(37, 99, 235, 0.4)' }}
            >
              Enroll in Full Masterclass (₹1,000) <ArrowRight size={18} />
            </button>
          </div>

        </div>

        {/* Free Demo Callout */}
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: '#64748B', fontSize: '0.92rem' }}>
            Not ready to decide? Attend a live demo session first:
          </span>
          <button
            onClick={() => onOpenModal('demo')}
            style={{
              background: 'none',
              border: 'none',
              color: '#2563EB',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              marginLeft: '8px',
              textDecoration: 'underline'
            }}
          >
            Book Free Demo Class (₹0) ➔
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .pricing-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
