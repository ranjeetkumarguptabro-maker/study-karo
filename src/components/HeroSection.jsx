import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Zap, ArrowRight, TrendingUp, Users, Laptop, BookOpen, Atom, Calculator, BarChart3, HelpCircle, GraduationCap, Star } from 'lucide-react';
import checkIcon from '../assets/check-icon.png';

export default function HeroSection({ onOpenModal }) {
  const [activeSubjectCard, setActiveSubjectCard] = useState('all');

  return (
    <section id="overview" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* 1. TOP HERO SECTION WITH SKY-BLUE GRADIENT & GIANT HEADING */}
      <div style={{
        background: 'linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 65%, #FFFFFF 100%)',
        paddingTop: '60px',
        paddingBottom: '80px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>
          
          {/* Target Audience Pill List & Teacher Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 20px',
              borderRadius: '9999px',
              background: '#FFFFFF',
              border: '1px solid #BFDBFE',
              color: '#1E40AF',
              fontWeight: 800,
              fontSize: '0.85rem',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.08)'
            }}>
              <Zap size={16} color="#F59E0B" /> 15-DAY INTENSIVE STUDY & LEARN MASTERCLASS
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 22px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.88rem',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.25)',
              border: '1.5px solid #60A5FA'
            }}>
              <GraduationCap size={18} color="#FBBF24" />
              <span>Teacher: <strong style={{ color: '#FDE047', fontSize: '1rem', letterSpacing: '0.3px' }}>Krish Mallick</strong></span>
            </div>
          </div>

          {/* Giant Bold Headline */}
          <h1 className="giant-heading" style={{ marginBottom: '18px' }}>
            MASTER <span className="math-gradient-text">MATHS</span>, <span className="science-gradient-text">SCIENCE</span> & <br />
            <span className="commerce-gradient-text">COMMERCE</span> IN 15 DAYS.
          </h1>

          <p style={{
            maxWidth: '760px',
            margin: '0 auto 36px auto',
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: '#334155',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            Crack difficult concepts, formulas, and numericals with expert live tutoring, daily practice sheets, and simplified visual notes designed for school and board exam excellence!
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <button className="btn-gold" onClick={() => onOpenModal('demo')} style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              <Sparkles size={20} /> BOOK FREE DEMO CLASS
            </button>
            <button className="btn-navy" onClick={() => onOpenModal('enroll')} style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              JOIN 15-DAY BATCH (₹399) <ArrowRight size={18} />
            </button>
          </div>

          {/* Social Proof Rating Bar */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #E2E8F0',
            padding: '6px 18px',
            borderRadius: '9999px',
            fontSize: '0.86rem',
            color: '#334155',
            fontWeight: 700,
            marginBottom: '40px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
          }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <span><strong style={{ color: '#0F172A' }}>4.9 / 5.0 Rating</strong> by 2,450+ Students across India</span>
          </div>

          {/* Target Audience Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '48px' }}>
            {['Class 9 & 10 Foundation', 'Class 11 & 12 Science (PCM/PCB)', 'Class 11 & 12 Commerce', 'CBSE / ICSE / State Boards', 'Exam Boost & Doubt Clearing'].map((tag, idx) => (
              <span key={idx} style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #CBD5E1',
                color: '#0F172A',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '6px 16px',
                borderRadius: '9999px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <img src={checkIcon} alt="Check" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                {tag}
              </span>
            ))}
          </div>

          {/* 3 Showcase Subject Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto'
          }} className="hero-3cards">
            
            {/* Card 1: Mathematics Masterclass */}
            <div 
              className="ref-card" 
              style={{
                padding: '24px',
                textAlign: 'left',
                border: '2px solid #3B82F6',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.12)',
                transition: 'transform 0.3s ease',
                background: 'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)',
                borderRadius: '24px'
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: '#2563EB',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                boxShadow: '0 8px 18px rgba(37, 99, 235, 0.3)'
              }}>
                <Calculator size={28} />
              </div>
              <div style={{
                display: 'inline-block',
                background: '#DBEAFE',
                color: '#1D4ED8',
                fontWeight: 800,
                fontSize: '0.75rem',
                padding: '3px 10px',
                borderRadius: '20px',
                marginBottom: '10px'
              }}>
                SUBJECT TRACK 01
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0F172A', marginBottom: '8px' }}>
                Mathematics Mastery
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
                Conquer Algebra, Trigonometry, Calculus, Coordinate Geometry, and Board Exam word problems with speed tricks.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#2563EB" /> Step-by-step formula derivations
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#2563EB" /> 200+ Solved High-Yield Numericals
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#2563EB" /> Speed calculation shortcuts
                </div>
              </div>
            </div>

            {/* Card 2: Science Explorer Lab */}
            <div 
              className="ref-card" 
              style={{
                padding: '24px',
                textAlign: 'left',
                border: '2px solid #10B981',
                transform: 'translateY(-10px)',
                boxShadow: '0 20px 40px rgba(16, 185, 129, 0.18)',
                background: 'linear-gradient(180deg, #ECFDF5 0%, #FFFFFF 100%)',
                borderRadius: '24px'
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: '#059669',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                boxShadow: '0 8px 18px rgba(5, 150, 105, 0.3)'
              }}>
                <Atom size={28} />
              </div>
              <div style={{
                display: 'inline-block',
                background: '#D1FAE5',
                color: '#065F46',
                fontWeight: 800,
                fontSize: '0.75rem',
                padding: '3px 10px',
                borderRadius: '20px',
                marginBottom: '10px'
              }}>
                SUBJECT TRACK 02 (MOST POPULAR)
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0F172A', marginBottom: '8px' }}>
                Science Excellence
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
                Physics laws, Chemistry reaction balancing, and Biology diagrammatic mastery taught with 3D conceptual models.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#059669" /> Physics numericals & circuit diagrams
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#059669" /> Chemistry equations & reactions
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#059669" /> Biology life processes & genetics
                </div>
              </div>
            </div>

            {/* Card 3: Commerce Pro Hub */}
            <div 
              className="ref-card" 
              style={{
                padding: '24px',
                textAlign: 'left',
                border: '2px solid #F59E0B',
                boxShadow: '0 10px 30px rgba(245, 158, 11, 0.12)',
                transition: 'transform 0.3s ease',
                background: 'linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 100%)',
                borderRadius: '24px'
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: '#D97706',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                boxShadow: '0 8px 18px rgba(217, 119, 6, 0.3)'
              }}>
                <BarChart3 size={28} />
              </div>
              <div style={{
                display: 'inline-block',
                background: '#FEF3C7',
                color: '#92400E',
                fontWeight: 800,
                fontSize: '0.75rem',
                padding: '3px 10px',
                borderRadius: '20px',
                marginBottom: '10px'
              }}>
                SUBJECT TRACK 03
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0F172A', marginBottom: '8px' }}>
                Commerce Pro Hub
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
                Financial Accounting, Journal Entries, Ledger, Balance Sheet, Business Studies, and Micro/Macro Economics made crystal clear.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#D97706" /> Double Entry Bookkeeping & Ledger
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#D97706" /> Trial Balance & Financial Statements
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#D97706" /> Real-world Commerce Case Studies
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 2. SUB-HERO SECTION: Freedom to Learn Your Way */}
      <div style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="section-container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
              Discover the Freedom to <span className="gradient-text">Master Difficult Concepts</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem' }}>
              Join thousands of school and college students transforming their exam confidence through interactive, concept-first online tutoring.
            </p>
          </div>

          {/* 2 Big Feature Cards (Dark Card Left + Light Card Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }} className="mode-grid">
            
            {/* Left Big Dark Card with 92% Score Chart Highlight */}
            <div className="ref-card-dark" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  background: 'rgba(217, 249, 157, 0.2)',
                  color: '#D9F99D',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '20px'
                }}>
                  <TrendingUp size={16} /> ACADEMIC PERFORMANCE JUMP
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                  From Average to Top 5% in Your Class
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '28px' }}>
                  Students who follow our 15-day structured revision schedule and solve daily practice problems see an average marks increase of 25% to 35% in their exams!
                </p>
              </div>

              {/* 92% Graphic Box */}
              <div style={{
                background: 'rgba(30, 41, 59, 0.8)',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ fontSize: '3.2rem', fontWeight: 900, color: '#D9F99D', lineHeight: 1 }}>
                  92%
                </div>
                <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '6px', marginBottom: '16px' }}>
                  Percentage of students reporting complete clarity on previously difficult topics after completing the 15-day study modules.
                </div>
                
                {/* Bar chart graphic */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '40px' }}>
                  {[35, 48, 52, 60, 68, 76, 82, 88, 92, 95, 96, 98].map((h, i) => (
                    <div key={i} style={{
                      flex: 1,
                      height: `${h}%`,
                      background: i > 6 ? '#D9F99D' : '#3B82F6',
                      borderRadius: '4px'
                    }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Light Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div className="ref-card" style={{ padding: '30px' }}>
                <div style={{
                  background: '#EFF6FF',
                  color: '#2563EB',
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Users size={24} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Small Batch Live Tutoring
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Learn in interactive small batches where every student can unmute, ask questions directly, and get immediate personalized guidance from passionate top educators.
                </p>
              </div>

              <div className="ref-card" style={{ padding: '30px' }}>
                <div style={{
                  background: '#FEF3C7',
                  color: '#D97706',
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <BookOpen size={24} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Comprehensive Study Notes & DPPs
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Download chapter-wise formula flashcards, mind maps, step-by-step solved question banks, and daily practice problem sheets (DPPs) tailored to syllabus boards.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-3cards { grid-template-columns: 1fr !important; }
          .mode-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
