import React, { useState } from 'react';
import { BookOpen, Calculator, Atom, BarChart3, Clock, CheckCircle2, ChevronRight, Sparkles, FileText, CheckSquare, HelpCircle, Trophy } from 'lucide-react';

export default function CurriculumTimeline({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const curriculumPhases = [
    {
      phase: "Phase 1: Foundation & Core Rules",
      days: "Day 1 - Day 4",
      badgeColor: "#2563EB",
      modules: [
        {
          id: 1,
          subject: "Maths",
          day: "Day 1 - 2",
          title: "Number Systems, Polynomials & Algebra Rules",
          icon: Calculator,
          color: "#2563EB",
          desc: "Demystifying algebraic identities, factoring techniques, roots of polynomials, and linear equations with visual representations.",
          topics: [
            "Fundamental Theorem of Arithmetic & Real Numbers",
            "Factorization of Polynomials & Remainder Theorem",
            "Pair of Linear Equations in Two Variables (Graphical & Algebraic)",
            "Daily Practice Problem (DPP) Set 01 with Step Solutions"
          ]
        },
        {
          id: 2,
          subject: "Science",
          day: "Day 3",
          title: "Physics Fundamentals: Motion & Newton's Laws",
          icon: Atom,
          color: "#10B981",
          desc: "Mastering displacement, acceleration, Newton's 3 laws of motion, momentum conservation, and real-world numerical problem solving.",
          topics: [
            "Equations of Motion derivations & graphical interpretation",
            "Balanced vs Unbalanced Forces & Inertia",
            "Momentum, Impulse & Conservation Principles",
            "Solving 20 High-Frequency Physics Board Numericals"
          ]
        },
        {
          id: 3,
          subject: "Commerce",
          day: "Day 4",
          title: "Golden Rules of Accounting & Bookkeeping Basics",
          icon: BarChart3,
          color: "#F59E0B",
          desc: "Understanding the accounting equation, classification into Personal, Real, and Nominal accounts, and the mechanics of debit and credit.",
          topics: [
            "Assets = Liabilities + Owner's Equity Equation",
            "Traditional vs Modern Rules of Debit and Credit",
            "Identifying Business Entities & Source Documents",
            "Hands-on Double Entry Practice Exercises"
          ]
        }
      ]
    },
    {
      phase: "Phase 2: Deep Problem Solving & Formula Applications",
      days: "Day 5 - Day 8",
      badgeColor: "#10B981",
      modules: [
        {
          id: 4,
          subject: "Maths",
          day: "Day 5 - 6",
          title: "Trigonometric Ratios, Identities & Heights-Distances",
          icon: Calculator,
          color: "#2563EB",
          desc: "Intuitive derivation of standard angle tables (30°, 45°, 60°), proving complex identities without memorization, and real-world elevation angles.",
          topics: [
            "Trigonometric Ratios & Pythagorean Identities (sin²θ + cos²θ = 1)",
            "Complementary Angle Relations & Proofs",
            "Heights & Distances: Angles of Elevation & Depression",
            "Board Exam 4-Mark Problem Solving Masterclass"
          ]
        },
        {
          id: 5,
          subject: "Science",
          day: "Day 7",
          title: "Chemistry: Chemical Reactions & Equation Balancing",
          icon: Atom,
          color: "#10B981",
          desc: "Mastering reaction types (combination, decomposition, displacement, redox) and systematic balancing techniques.",
          topics: [
            "Step-by-step algebraic & inspection equation balancing",
            "Oxidation-Reduction (Redox) identifying oxidizing agents",
            "Acids, Bases & pH Scale with everyday examples",
            "Lab indicators & Salt formation reactions"
          ]
        },
        {
          id: 6,
          subject: "Commerce",
          day: "Day 8",
          title: "Journal Entries, Sub-Ledgers & Posting Mechanics",
          icon: BarChart3,
          color: "#F59E0B",
          desc: "Recording everyday corporate transactions, discount handling (trade vs cash discount), and balancing individual ledger accounts.",
          topics: [
            "Compound Journal Entries for Sales, Purchases & Returns",
            "Posting to General Ledger & Calculating Closing Balances",
            "Cash Book with Discount & Bank Columns",
            "Petty Cash Book & Imprest System"
          ]
        }
      ]
    },
    {
      phase: "Phase 3: High-Yield Numericals & Exam Technique",
      days: "Day 9 - Day 12",
      badgeColor: "#F59E0B",
      modules: [
        {
          id: 7,
          subject: "Science",
          day: "Day 9 - 10",
          title: "Electricity, Circuits & Biology Life Processes",
          icon: Atom,
          color: "#10B981",
          desc: "Ohm's Law, series and parallel resistor calculations, electric power, combined with Human Digestion, Respiration, and Circulation diagrams.",
          topics: [
            "Ohm's Law (V = IR) and Equivalent Resistance circuits",
            "Joule's Law of Heating & Commercial Units of Energy (kWh)",
            "Human Heart circulation & Nephron diagram masterclass",
            "Step-by-step exam scoring diagram tutorial"
          ]
        },
        {
          id: 8,
          subject: "Maths",
          day: "Day 11",
          title: "Coordinate Geometry, Circles & Statistics",
          icon: Calculator,
          color: "#2563EB",
          desc: "Distance formula, section formula, circle tangents, and computing mean, median, and mode for grouped frequency tables.",
          topics: [
            "Section formula & Area of Triangles in coordinate planes",
            "Tangents from external points & Circle theorems",
            "Direct, Assumed Mean & Step-Deviation methods",
            "Median Ogive curves & modal class formulas"
          ]
        },
        {
          id: 9,
          subject: "Commerce",
          day: "Day 12",
          title: "Trial Balance Preparation & Bank Reconciliation (BRS)",
          icon: BarChart3,
          color: "#F59E0B",
          desc: "Preparing a balanced trial balance, detecting errors of omission and commission, and matching bank statements with cash books.",
          topics: [
            "Trial Balance formats and suspense account treatment",
            "Causes of differences between Pass Book and Cash Book",
            "Drafting Monthly Bank Reconciliation Statements",
            "Rectification of Errors before and after Trial Balance"
          ]
        }
      ]
    },
    {
      phase: "Phase 4: Full Revision, Mock Tests & Mentor Feedback",
      days: "Day 13 - Day 15",
      badgeColor: "#8B5CF6",
      modules: [
        {
          id: 10,
          subject: "Commerce",
          day: "Day 13",
          title: "Final Accounts: Trading, P&L & Balance Sheet",
          icon: BarChart3,
          color: "#F59E0B",
          desc: "Constructing full financial statements with year-end adjustments: closing stock, outstanding expenses, and prepaid charges.",
          topics: [
            "Gross Profit vs Net Profit determination",
            "Balance Sheet asset marshaling (liquidity vs permanence)",
            "Adjustments for bad debts and provision for doubtful debts",
            "Case study of a real trading business"
          ]
        },
        {
          id: 11,
          subject: "Science & Maths",
          day: "Day 14",
          title: "Speed Math Tricks & Science Formula Marathon",
          icon: Sparkles,
          color: "#2563EB",
          desc: "Rapid calculation techniques, 1-minute numerical shortcuts, and a complete formula blitz covering Physics, Chemistry, and Mathematics.",
          topics: [
            "Mental calculation tricks for squares, percentages & ratios",
            "Top 50 board numericals blitz under timed conditions",
            "Common trap questions & how to avoid silly mistakes",
            "Question paper time management strategy"
          ]
        },
        {
          id: 12,
          subject: "All Subjects",
          day: "Day 15",
          title: "Grand Mock Assessment & 1-on-1 Mentor Guidance",
          icon: Trophy,
          color: "#10B981",
          desc: "Comprehensive mock test simulating actual exam conditions followed by individual performance analysis, doubt resolution, and study kit delivery.",
          topics: [
            "Full-length timed mock test with instant score report",
            "1-on-1 personalized doubt resolution session",
            "Detailed subject diagnostic report highlighting improvement areas",
            "Complete Lifetime Access to Study Karo Resource Vault"
          ]
        }
      ]
    }
  ];

  return (
    <section id="curriculum" style={{ position: 'relative', padding: '90px 0', background: '#FFFFFF' }}>
      <div className="section-container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
          <div style={{
            color: '#10B981',
            fontSize: '0.9rem',
            fontWeight: 800,
            letterSpacing: '2px',
            marginBottom: '12px',
            textTransform: 'uppercase'
          }}>
            🗓️ STRUCTURED 15-DAY ROADMAP
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            The 15-Day <span className="gradient-text">Study & Learn Curriculum</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Carefully structured so students never feel overwhelmed. Each day combines 60 minutes of live concept teaching with 30 minutes of guided problem solving.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <button 
            className={`btn-pill-filter ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All 15 Days
          </button>
          <button 
            className={`btn-pill-filter ${activeTab === 'maths' ? 'active' : ''}`}
            onClick={() => setActiveTab('maths')}
          >
            🧮 Maths Modules
          </button>
          <button 
            className={`btn-pill-filter ${activeTab === 'science' ? 'active' : ''}`}
            onClick={() => setActiveTab('science')}
          >
            🔬 Science Modules
          </button>
          <button 
            className={`btn-pill-filter ${activeTab === 'commerce' ? 'active' : ''}`}
            onClick={() => setActiveTab('commerce')}
          >
            📊 Commerce Modules
          </button>
        </div>

        {/* 4 Phases Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {curriculumPhases.map((phase, pIdx) => {
            const filteredModules = phase.modules.filter(m => {
              if (activeTab === 'all') return true;
              if (activeTab === 'maths') return m.subject.toLowerCase().includes('maths');
              if (activeTab === 'science') return m.subject.toLowerCase().includes('science');
              if (activeTab === 'commerce') return m.subject.toLowerCase().includes('commerce');
              return true;
            });

            if (filteredModules.length === 0) return null;

            return (
              <div key={pIdx} style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '24px',
                padding: '32px'
              }}>
                {/* Phase Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '24px',
                  borderBottom: '1px solid #E2E8F0',
                  paddingBottom: '16px'
                }}>
                  <div>
                    <span style={{
                      background: phase.badgeColor,
                      color: '#FFFFFF',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      padding: '4px 12px',
                      borderRadius: '20px',
                      marginRight: '12px'
                    }}>
                      {phase.days}
                    </span>
                    <strong style={{ fontSize: '1.25rem', color: '#0F172A' }}>{phase.phase}</strong>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>
                    Live Online Sessions + Daily DPP
                  </span>
                </div>

                {/* Modules Grid for this phase */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                  {filteredModules.map((mod) => {
                    const ModIcon = mod.icon;
                    return (
                      <div key={mod.id} className="ref-card" style={{
                        padding: '24px',
                        background: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                            <span style={{
                              background: `${mod.color}15`,
                              color: mod.color,
                              fontWeight: 800,
                              fontSize: '0.78rem',
                              padding: '3px 10px',
                              borderRadius: '12px'
                            }}>
                              {mod.day}
                            </span>
                            <span style={{
                              fontWeight: 800,
                              fontSize: '0.75rem',
                              color: '#64748B',
                              background: '#F1F5F9',
                              padding: '3px 10px',
                              borderRadius: '12px'
                            }}>
                              {mod.subject}
                            </span>
                          </div>

                          <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                            {mod.title}
                          </h4>
                          <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
                            {mod.desc}
                          </p>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                            {mod.topics.map((t, tidx) => (
                              <div key={tidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#334155' }}>
                                <CheckCircle2 size={14} color={mod.color} style={{ flexShrink: 0, marginTop: '3px' }} />
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '14px' }}>
                          <span style={{ fontSize: '0.78rem', color: '#10B981', fontWeight: 700 }}>
                            ✓ Live Lecture + DPP Included
                          </span>
                          <button
                            onClick={() => onOpenModal('demo')}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#2563EB',
                              fontWeight: 800,
                              fontSize: '0.82rem',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            Demo <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div style={{
          marginTop: '50px',
          background: 'linear-gradient(135deg, #1E1B4B 0%, #1E40AF 100%)',
          borderRadius: '24px',
          padding: '36px',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '8px' }}>
              Want to Experience a Class Firsthand?
            </h3>
            <p style={{ color: '#BFDBFE', fontSize: '0.98rem' }}>
              Attend our next live interactive demo lecture on Maths, Science, or Commerce completely free.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button className="btn-gold" onClick={() => onOpenModal('demo')} style={{ padding: '14px 28px' }}>
              <Sparkles size={18} /> Book Free Demo Class
            </button>
            <button className="btn-emerald" onClick={() => onOpenModal('enroll')} style={{ padding: '14px 28px' }}>
              Enroll in Course (from ₹500)
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
