import React, { useState } from 'react';
import { Star, CheckCircle2, Quote, Sparkles, TrendingUp, Users, ThumbsUp, MapPin, Award } from 'lucide-react';
import student1 from '../assets/student-female-1.png';
import student2 from '../assets/student-male-1.png';
import student3 from '../assets/student-female-2.png';
import student4 from '../assets/student-male-2.png';

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    city: "New Delhi",
    class: "Class 10 (CBSE)",
    subject: "Maths & Science Track",
    category: "maths",
    rating: 5.0,
    scoreJump: "Scored 96.4% in Board Exams (Jumped from 64%)",
    image: student1,
    quote: "Trigonometry and Physics electricity numericals used to terrify me. In Study Karo's 15-day course, Teacher Krish Mallick explained every single formula with real-life diagrams. My scores jumped from 64 to 96 marks in boards!"
  },
  {
    id: 2,
    name: "Rohan Patel",
    city: "Ahmedabad, Gujarat",
    class: "Class 11 Commerce",
    subject: "Accountancy & Economics",
    category: "commerce",
    rating: 5.0,
    scoreJump: "Scored 94% in School Finals (Jumped from 68%)",
    image: student2,
    quote: "I was always getting confused between debit and credit in compound journal entries. The double entry ledger simulator and 15-day roadmap made accounting logic feel completely natural. Best investment for commerce students!"
  },
  {
    id: 3,
    name: "Priya Nair",
    city: "Kochi, Kerala",
    class: "Class 12 Science (PCB)",
    subject: "Biology & Chemistry",
    category: "science",
    rating: 4.9,
    scoreJump: "Scored 95.2% in CBSE Boards",
    image: student3,
    quote: "The visual science mind maps and chemical reaction balancing tricks were pure gold. Instead of mugging up pages of theory, I could visualize the biological mechanisms clearly. Teacher Krish Mallick makes science so engaging!"
  },
  {
    id: 4,
    name: "Aditya Verma",
    city: "Lucknow, UP",
    class: "Class 10 Foundation",
    subject: "Maths Problem Solver",
    category: "maths",
    rating: 5.0,
    scoreJump: "First Rank in School Pre-Boards (98/100 in Maths)",
    image: student4,
    quote: "The small batch size made all the difference. I could unmute and ask doubts without feeling shy. The teachers at Study Karo are super patient, energetic, and genuinely care about student concepts. Highly recommended!"
  },
  {
    id: 5,
    name: "Sneha Mukherjee",
    city: "Kolkata, WB",
    class: "Class 12 Commerce",
    subject: "Financial Accounting & BRS",
    category: "commerce",
    rating: 5.0,
    scoreJump: "Scored 97% in Accountancy Finals",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80",
    quote: "Bank Reconciliation Statements and Balance Sheet adjustments always had me losing marks. The 15-day intensive gave me step-by-step methods that eliminated all silly errors. My teacher in school was shocked by my turnaround!"
  },
  {
    id: 6,
    name: "Kavya Iyer",
    city: "Bengaluru, Karnataka",
    class: "Class 11 Science (PCM)",
    subject: "Physics Mechanics & Math",
    category: "science",
    rating: 4.9,
    scoreJump: "Scored 93.5% in Term Exams",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "Newton's laws, projectile motion, and quadratic formula steps were broken down so logically. The daily practice sheets (DPP) with solutions helped me build speed. Thank you Teacher Krish and Study Karo team!"
  },
  {
    id: 7,
    name: "Manish Choudhary",
    city: "Jaipur, Rajasthan",
    class: "Class 10 Board Prep",
    subject: "Maths Quadratic & Geometry",
    category: "maths",
    rating: 4.9,
    scoreJump: "92% in Pre-Board Mock Exams",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "The interactive quadratic equation solver in the Study Lab made discriminant evaluation so clear. I used to hate maths homework, now I finish DPP sets in 30 minutes! Truly grateful."
  },
  {
    id: 8,
    name: "Vikram Joshi",
    city: "Pune, Maharashtra",
    class: "Class 12 Science (PCM)",
    subject: "Physics & Chemistry Equations",
    category: "science",
    rating: 5.0,
    scoreJump: "Scored 96.8% in HSC Board Exams",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    quote: "Circuits, Ohm's law, and organic chemistry reactions became second nature. The doubt-solving support on WhatsApp answered my queries even late at night before exams. 10/10 masterclass!"
  },
  {
    id: 9,
    name: "Meera Deshmukh",
    city: "Mumbai, Maharashtra",
    class: "Class 11 Commerce",
    subject: "Bookkeeping & Business Studies",
    category: "commerce",
    rating: 5.0,
    scoreJump: "Scored 95% in Annual Examinations",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    quote: "Accounting equation (Assets = Liabilities + Capital) was simplified with real business examples. I feel confident about my career in finance now. Study Karo is the best online tutoring platform in India!"
  }
];

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredReviews = testimonials.filter(t => {
    if (activeCategory === 'all') return true;
    return t.category === activeCategory;
  });

  return (
    <section id="reviews" style={{ position: 'relative', padding: '90px 0', background: '#FFFFFF' }}>
      <div className="section-container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px auto' }}>
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
            ⭐ VERIFIED STUDENT EXPERIENCES & RATINGS
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            Loved by Students Across <span className="gradient-text">India</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Real reviews from school and college students who turned their fear of Maths, Science, and Accounts into top marks with Study Karo and Teacher Krish Mallick.
          </p>
        </div>

        {/* OVERALL RATING & TRUST SCORECARD BANNER */}
        <div style={{
          maxWidth: '1060px',
          margin: '0 auto 40px auto',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          borderRadius: '24px',
          padding: '32px 36px',
          color: '#FFFFFF',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1.9fr',
          gap: '32px',
          alignItems: 'center',
          boxShadow: '0 20px 45px rgba(15, 23, 42, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }} className="rating-hero-box">
          
          {/* Left: Star Score */}
          <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.15)', paddingRight: '24px' }} className="rating-score-col">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
              <div style={{ fontSize: '3.6rem', fontWeight: 900, color: '#FDE047', lineHeight: 1 }}>
                4.9
              </div>
              <div style={{ fontSize: '1.2rem', color: '#94A3B8', fontWeight: 700 }}>
                / 5.0
              </div>
            </div>

            {/* 5 Big Gold Stars */}
            <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>

            <div style={{ fontSize: '0.92rem', color: '#E2E8F0', fontWeight: 700 }}>
              Overall Student Rating
            </div>
            <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '3px' }}>
              Based on 2,450+ verified ratings across India
            </div>
          </div>

          {/* Right: Key Trust Highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }} className="rating-stats-grid">
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#6EE7B7' }}>98.4%</div>
              <div style={{ fontSize: '0.82rem', color: '#CBD5E1', fontWeight: 600, marginTop: '4px' }}>Would Recommend to Friends</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#93C5FD' }}>+28%</div>
              <div style={{ fontSize: '0.82rem', color: '#CBD5E1', fontWeight: 600, marginTop: '4px' }}>Average Marks Jump in 15 Days</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FDE047' }}>1,450+</div>
              <div style={{ fontSize: '0.82rem', color: '#CBD5E1', fontWeight: 600, marginTop: '4px' }}>Perfect 5-Star Reviews</div>
            </div>
          </div>

        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '36px', flexWrap: 'wrap' }}>
          <button 
            className={`btn-pill-filter ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Reviews ({testimonials.length})
          </button>
          <button 
            className={`btn-pill-filter ${activeCategory === 'maths' ? 'active' : ''}`}
            onClick={() => setActiveCategory('maths')}
          >
            🧮 Maths Students
          </button>
          <button 
            className={`btn-pill-filter ${activeCategory === 'science' ? 'active' : ''}`}
            onClick={() => setActiveCategory('science')}
          >
            🔬 Science Students
          </button>
          <button 
            className={`btn-pill-filter ${activeCategory === 'commerce' ? 'active' : ''}`}
            onClick={() => setActiveCategory('commerce')}
          >
            📊 Commerce Students
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {filteredReviews.map((t) => (
            <div key={t.id} className="ref-card" style={{
              padding: '28px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1.5px solid #E2E8F0',
              background: '#FFFFFF',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)'
            }}>
              <div>
                {/* Rating Row with Numeric Score and Stars */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: '#FEF3C7',
                    color: '#92400E',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontWeight: 900,
                    fontSize: '0.85rem'
                  }}>
                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                    <span>{t.rating.toFixed(1)} / 5.0</span>
                  </div>

                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#15803D',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    background: '#DCFCE7',
                    padding: '3px 8px',
                    borderRadius: '10px'
                  }}>
                    <CheckCircle2 size={12} /> Verified Student
                  </span>
                </div>

                {/* Score Jump Highlight Pill */}
                <div style={{
                  background: '#EFF6FF',
                  color: '#1D4ED8',
                  padding: '6px 12px',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <TrendingUp size={14} color="#2563EB" />
                  <span>{t.scoreJump}</span>
                </div>

                {/* Quote Text */}
                <p style={{
                  fontSize: '0.94rem',
                  color: '#334155',
                  lineHeight: 1.65,
                  marginBottom: '24px',
                  fontStyle: 'italic'
                }}>
                  "{t.quote}"
                </p>
              </div>

              {/* Student Footer with Real Face Photo & City */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                borderTop: '1px solid #F1F5F9',
                paddingTop: '16px'
              }}>
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2.5px solid #2563EB',
                    boxShadow: '0 2px 8px rgba(37, 99, 235, 0.2)'
                  }}
                  onError={(e) => {
                    // Fallback to student1 if network image fails
                    e.target.src = student1;
                  }}
                />
                <div>
                  <div style={{ fontWeight: 900, color: '#0F172A', fontSize: '1rem' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
                    {t.class} • {t.subject}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#059669', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px', marginTop: '2px' }}>
                    <MapPin size={11} /> {t.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .rating-hero-box { grid-template-columns: 1fr !important; }
          .rating-score-col { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.15); padding-right: 0 !important; padding-bottom: 20px; text-align: center; }
          .rating-score-col > div { justify-content: center; }
          .rating-stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
