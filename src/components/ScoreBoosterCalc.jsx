import React, { useState } from 'react';
import { TrendingUp, GraduationCap, Award, Sparkles, CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react';

export default function ScoreBoosterCalc({ onOpenModal }) {
  const [gradeLevel, setGradeLevel] = useState('Class 10 Board Prep');
  const [subjectTrack, setSubjectTrack] = useState('All 3 Subjects (Maths, Science & Commerce)');
  const [currentScore, setCurrentScore] = useState(60);

  // Projected score calculations
  const scoreBoost = Math.min(35, Math.round((100 - currentScore) * 0.75));
  const projectedScore = Math.min(98, currentScore + scoreBoost);

  return (
    <section id="calculator" style={{ position: 'relative', padding: '90px 0', background: '#F8FAFC' }}>
      <div className="section-container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
          <div style={{
            color: '#D97706',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '2px',
            marginBottom: '12px',
            textTransform: 'uppercase'
          }}>
            📈 ACADEMIC IMPACT ESTIMATOR
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            Calculate Your <span className="gold-gradient-text">15-Day Score Improvement</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem' }}>
            See how much your test scores and concept clarity can jump by following Study Karo's structured 15-day masterclass.
          </p>
        </div>

        <div className="ref-card" style={{
          padding: '40px',
          borderRadius: '28px',
          maxWidth: '1020px',
          margin: '0 auto',
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          boxShadow: '0 20px 45px rgba(15, 23, 42, 0.06)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '40px', alignItems: 'center' }} className="calc-grid">
            
            {/* Left Inputs */}
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 900, marginBottom: '24px', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <GraduationCap color="#2563EB" size={26} /> Student Academic Profile
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '8px', display: 'block' }}>
                    1. Select Your Current Class / Grade
                  </label>
                  <select
                    value={gradeLevel}
                    onChange={(e) => setGradeLevel(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '12px',
                      border: '1.5px solid #CBD5E1',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      background: '#FFFFFF',
                      color: '#0F172A'
                    }}
                  >
                    <option value="Class 9 Foundation">Class 9 Foundation (Maths & Science)</option>
                    <option value="Class 10 Board Prep">Class 10 Board Prep (Maths & Science Focus)</option>
                    <option value="Class 11 Science (PCM/PCB)">Class 11 Science (Physics, Chem, Maths/Bio)</option>
                    <option value="Class 11 Commerce">Class 11 Commerce (Accounts, Economics, B.St)</option>
                    <option value="Class 12 Boards & Entrance">Class 12 Board Exam & CUET/Entrance Prep</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '8px', display: 'block' }}>
                    2. Primary Subject Focus
                  </label>
                  <select
                    value={subjectTrack}
                    onChange={(e) => setSubjectTrack(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '12px',
                      border: '1.5px solid #CBD5E1',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      background: '#FFFFFF',
                      color: '#0F172A'
                    }}
                  >
                    <option value="All 3 Subjects (Maths, Science & Commerce)">All 3 Subjects (Maths, Science & Commerce Combo)</option>
                    <option value="Pure Mathematics Masterclass">Pure Mathematics Masterclass</option>
                    <option value="Pure Science Explorer (Physics + Chem + Bio)">Pure Science Explorer (Physics + Chem + Bio)</option>
                    <option value="Pure Commerce & Accounting Hub">Pure Commerce & Accounting Hub</option>
                  </select>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                      3. Current Test Average:
                    </label>
                    <span style={{ fontWeight: 800, color: '#2563EB', fontSize: '1.05rem' }}>
                      {currentScore}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="35"
                    max="85"
                    value={currentScore}
                    onChange={(e) => setCurrentScore(Number(e.target.value))}
                    style={{
                      width: '100%',
                      accentColor: '#2563EB',
                      cursor: 'pointer'
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94A3B8', marginTop: '4px' }}>
                    <span>Struggling (35%)</span>
                    <span>Average (60%)</span>
                    <span>Good (85%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Projected Results Card */}
            <div style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
              color: '#FFFFFF',
              borderRadius: '24px',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 15px 35px rgba(15, 23, 42, 0.25)'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(217, 249, 157, 0.2)',
                color: '#D9F99D',
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '0.75rem',
                fontWeight: 800,
                marginBottom: '18px'
              }}>
                <Sparkles size={13} /> ESTIMATED 15-DAY SCORE JUMP
              </div>

              {/* Before vs After Scores */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '8px' }}>
                <div style={{ fontSize: '3.2rem', fontWeight: 900, color: '#D9F99D', lineHeight: 1 }}>
                  {projectedScore}%
                </div>
                <div style={{ fontSize: '1.1rem', color: '#60A5FA', fontWeight: 800 }}>
                  (+{scoreBoost}% Jump)
                </div>
              </div>

              <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '22px' }}>
                Projected board / exam score for <strong>{gradeLevel}</strong> after finishing the 15-day course.
              </div>

              {/* Metric Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '18px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem' }}>
                  <span style={{ color: '#94A3B8' }}>Concept Retention:</span>
                  <strong style={{ color: '#FFFFFF' }}>From 45% ➔ 95%</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem' }}>
                  <span style={{ color: '#94A3B8' }}>Study Hours Saved:</span>
                  <strong style={{ color: '#FFFFFF' }}>40+ Hours of Confusion</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem' }}>
                  <span style={{ color: '#94A3B8' }}>Target Practice Questions:</span>
                  <strong style={{ color: '#FFFFFF' }}>250+ Solved with DPP</strong>
                </div>
              </div>

              <button
                onClick={() => onOpenModal('demo')}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', padding: '12px 20px', fontSize: '0.95rem' }}
              >
                Book Free Diagnostic Demo Class <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .calc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
