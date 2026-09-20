import React, { useState } from 'react';
import { Calculator, Atom, BarChart3, CheckCircle2, ArrowRight, BookOpen, Sparkles, FileText, Download, Layers, Award } from 'lucide-react';

export default function SubjectsShowcase({ onOpenModal }) {
  const [selectedSubject, setSelectedSubject] = useState('maths');

  const subjectData = {
    maths: {
      name: 'Mathematics Mastery',
      tagline: 'From Formula Fears to Problem-Solving Confidence',
      badge: 'Core Academic Pillar',
      color: '#2563EB',
      bgLight: '#EFF6FF',
      icon: Calculator,
      description: 'Mathematics is best learned through visual intuition and methodical practice, not rote memorization. Our 15-Day Math Intensive helps you master core concepts, decode complex word problems, and calculate at lightning speed.',
      topics: [
        { title: 'Algebra & Quadratic Equations', detail: 'Factoring, quadratic formula, roots nature & word applications' },
        { title: 'Trigonometric Ratios & Identities', detail: 'Heights & distances, standard angle values & proof strategies' },
        { title: 'Coordinate Geometry & Straight Lines', detail: 'Distance formula, section formula, slopes & line equations' },
        { title: 'Calculus & Functions (Senior)', detail: 'Limits, derivatives, rate of change & basic integration methods' },
        { title: 'Statistics & Probability', detail: 'Mean, median, mode, standard deviation & event probabilities' },
        { title: 'Speed Math & Vedic Shortcuts', detail: 'Mental squaring, fast division & error-checking verification' }
      ],
      studyResources: [
        'Complete Formula Sheet PDF with Derivations',
        '250+ Categorized Practice Problems with Step-by-Step Solutions',
        'Speed Math Shortcut Cheat Card',
        'Previous 5 Years Board Question Breakdown'
      ]
    },
    science: {
      name: 'Science Excellence (Physics, Chemistry & Biology)',
      tagline: 'Understand the Laws of the Universe with Clarity',
      badge: 'High Impact STEM',
      color: '#10B981',
      bgLight: '#ECFDF5',
      icon: Atom,
      description: 'Science comes alive when you visualize phenomena. We break down abstract theories in Physics, Chemistry, and Biology into intuitive everyday examples, interactive circuit simulations, and crystal-clear diagram tutorials.',
      topics: [
        { title: 'Physics: Mechanics & Laws of Motion', detail: 'Newton\'s laws, momentum conservation, work, power & energy formulas' },
        { title: 'Physics: Electricity & Magnetism', detail: 'Ohm\'s Law (V=IR), series/parallel resistance & magnetic fields' },
        { title: 'Chemistry: Equations & Balancing', detail: 'Reaction types, balancing methods, stoichiometry & mole concept' },
        { title: 'Chemistry: Periodic Table & Bonding', detail: 'Electronic configuration, ionic vs covalent bonds & valency rules' },
        { title: 'Biology: Life Processes & Physiology', detail: 'Nutrition, respiration, human circulation & nervous control' },
        { title: 'Biology: Genetics & Diagram Mastery', detail: 'Mendelian crosses, DNA structure & high-scoring labeled diagrams' }
      ],
      studyResources: [
        'Visual Science Mind Maps (Physics, Chemistry, Biology)',
        '100 Must-Know Chemical Equations & Mechanisms',
        'Physics Numerical Formula Reference Card',
        'Step-by-Step Biology Diagram Drawing Guide'
      ]
    },
    commerce: {
      name: 'Commerce & Financial Literacy Hub',
      tagline: 'Real-World Accounting, Business Dynamics & Economics',
      badge: 'Business & Finance',
      color: '#F59E0B',
      bgLight: '#FFFBEB',
      icon: BarChart3,
      description: 'Commerce isn\'t just theory—it is the language of modern businesses and global economies. Master debit and credit logic, build balance sheets from scratch, and understand economic policies with real corporate examples.',
      topics: [
        { title: 'Financial Accounting Fundamentals', detail: 'Golden rules of accounting, double entry bookkeeping & ledger posting' },
        { title: 'Trial Balance & Financial Statements', detail: 'Trading account, Profit & Loss statement & Balance Sheet preparation' },
        { title: 'Bank Reconciliation Statements (BRS)', detail: 'Cash book vs passbook differences, timing lags & rectification' },
        { title: 'Business Studies & Management', detail: 'Principles of management, business planning & organizational structures' },
        { title: 'Micro & Macro Economics', detail: 'Supply-demand curves, price elasticity, GDP, inflation & central banking' },
        { title: 'GST, Invoicing & Practical Spreadsheets', detail: 'Tax invoices, credit notes, cash flow templates & spreadsheet accounting' }
      ],
      studyResources: [
        'Golden Rules of Accounting & Journalizing Cheat Sheet',
        'Complete Balance Sheet & P&L Ready Templates',
        'Economic Graphs & Formula Quick Reference Booklet',
        'Real-World Business Case Study Pack'
      ]
    }
  };

  const active = subjectData[selectedSubject];
  const IconComponent = active.icon;

  return (
    <section id="subjects" style={{ position: 'relative', padding: '90px 0', background: '#F8FAFC' }}>
      <div className="section-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
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
            <BookOpen size={16} /> WHAT WE TEACH AT STUDY KARO
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            We Specialize in <span className="gradient-text">Maths, Science & Commerce</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
            No fluff, no boring lectures. We provide structured, high-yield coaching across the three most critical academic pillars to guarantee conceptual mastery.
          </p>
        </div>

        {/* 3 Subject Switcher Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setSelectedSubject('maths')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '1rem',
              cursor: 'pointer',
              border: selectedSubject === 'maths' ? '2px solid #2563EB' : '1px solid #CBD5E1',
              background: selectedSubject === 'maths' ? '#2563EB' : '#FFFFFF',
              color: selectedSubject === 'maths' ? '#FFFFFF' : '#334155',
              boxShadow: selectedSubject === 'maths' ? '0 8px 24px rgba(37, 99, 235, 0.3)' : '0 2px 8px rgba(0,0,0,0.04)',
              transition: 'all 0.25s ease'
            }}
          >
            <Calculator size={20} /> 1. Mathematics
          </button>

          <button
            onClick={() => setSelectedSubject('science')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '1rem',
              cursor: 'pointer',
              border: selectedSubject === 'science' ? '2px solid #10B981' : '1px solid #CBD5E1',
              background: selectedSubject === 'science' ? '#10B981' : '#FFFFFF',
              color: selectedSubject === 'science' ? '#FFFFFF' : '#334155',
              boxShadow: selectedSubject === 'science' ? '0 8px 24px rgba(16, 185, 129, 0.3)' : '0 2px 8px rgba(0,0,0,0.04)',
              transition: 'all 0.25s ease'
            }}
          >
            <Atom size={20} /> 2. Science (PCM/PCB)
          </button>

          <button
            onClick={() => setSelectedSubject('commerce')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '1rem',
              cursor: 'pointer',
              border: selectedSubject === 'commerce' ? '2px solid #F59E0B' : '1px solid #CBD5E1',
              background: selectedSubject === 'commerce' ? '#F59E0B' : '#FFFFFF',
              color: selectedSubject === 'commerce' ? '#FFFFFF' : '#334155',
              boxShadow: selectedSubject === 'commerce' ? '0 8px 24px rgba(245, 158, 11, 0.3)' : '0 2px 8px rgba(0,0,0,0.04)',
              transition: 'all 0.25s ease'
            }}
          >
            <BarChart3 size={20} /> 3. Commerce & Accounts
          </button>
        </div>

        {/* Selected Subject Main Feature Card */}
        <div className="ref-card" style={{
          padding: '40px',
          borderRadius: '28px',
          background: '#FFFFFF',
          border: `2px solid ${active.color}`,
          boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)'
        }}>
          
          {/* Header Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '20px',
            borderBottom: '1px solid #E2E8F0',
            paddingBottom: '28px',
            marginBottom: '32px'
          }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: active.color,
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 8px 20px ${active.color}40`
              }}>
                <IconComponent size={34} />
              </div>
              <div>
                <div style={{
                  display: 'inline-block',
                  background: active.bgLight,
                  color: active.color,
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  padding: '3px 12px',
                  borderRadius: '20px',
                  marginBottom: '6px'
                }}>
                  {active.badge}
                </div>
                <h3 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 900, color: '#0F172A' }}>
                  {active.name}
                </h3>
                <p style={{ color: '#64748B', fontWeight: 600, fontSize: '0.95rem' }}>
                  {active.tagline}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button
                onClick={() => onOpenModal('demo')}
                className="btn-gold"
                style={{ padding: '12px 24px', fontSize: '0.9rem' }}
              >
                <Sparkles size={16} /> Book Free {selectedSubject.toUpperCase()} Demo
              </button>
              <button
                onClick={() => onOpenModal('enroll')}
                className="btn-navy"
                style={{ padding: '12px 24px', fontSize: '0.9rem' }}
              >
                Join Full 15-Day Batch (₹399)
              </button>
            </div>
          </div>

          <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, marginBottom: '32px', maxWidth: '980px' }}>
            {active.description}
          </p>

          {/* 2-Column Content: Topics Grid Left + Study Kit Included Right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '36px' }} className="subject-details-grid">
            
            {/* Left: 6 Core Chapters/Topics */}
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={20} color={active.color} /> 15-Day Curriculum Modules Included:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="topics-subgrid">
                {active.topics.map((t, i) => (
                  <div key={i} style={{
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '16px',
                    transition: 'all 0.2s ease'
                  }}>
                    <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#0F172A', marginBottom: '4px' }}>
                      {i + 1}. {t.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4 }}>
                      {t.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Study Kit & Resources Box */}
            <div style={{
              background: active.bgLight,
              border: `1px solid ${active.color}30`,
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#FFFFFF',
                  color: active.color,
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  marginBottom: '16px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                }}>
                  <Download size={14} /> FREE STUDY RESOURCES INCLUDED
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0F172A', marginBottom: '16px' }}>
                  Study Karo Comprehensive Learning Kit
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  {active.studyResources.map((res, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#1E293B', fontWeight: 600 }}>
                      <CheckCircle2 size={18} color={active.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '16px',
                border: '1px solid #E2E8F0',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748B', marginBottom: '4px' }}>
                  15-Day Batch Fee
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0F172A' }}>
                  ₹399 <span style={{ fontSize: '0.9rem', color: '#10B981', fontWeight: 700 }}>Save 80% (Limited Seats)</span>
                </div>
                <button
                  onClick={() => onOpenModal('enroll')}
                  className="btn-primary"
                  style={{ width: '100%', marginTop: '10px', justifyContent: 'center', padding: '10px' }}
                >
                  Enroll in {selectedSubject.toUpperCase()} Batch
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .subject-details-grid { grid-template-columns: 1fr !important; }
          .topics-subgrid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
