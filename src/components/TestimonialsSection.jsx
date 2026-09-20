import React from 'react';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import student1 from '../assets/student-female-1.png';
import student2 from '../assets/student-male-1.png';
import student3 from '../assets/student-female-2.png';
import student4 from '../assets/student-male-2.png';

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    class: "Class 10 (CBSE)",
    subject: "Maths & Science Track",
    score: "Scored 96.4% in Boards",
    image: student1,
    quote: "Trigonometry and Physics electricity numericals used to terrify me. In Study Karo's 15-day course, the teacher explained every single formula with real-life diagrams. My scores jumped from 64 to 96 marks!"
  },
  {
    id: 2,
    name: "Rohan Patel",
    class: "Class 11 Commerce",
    subject: "Accountancy & Economics",
    score: "Scored 94% in School Finals",
    image: student2,
    quote: "I was always getting confused between debit and credit in journal entries. The double entry ledger simulator and 15-day roadmap made accounting logic feel completely natural. Worth every single rupee!"
  },
  {
    id: 3,
    name: "Priya Nair",
    class: "Class 12 Science (PCB)",
    subject: "Biology & Chemistry",
    score: "95% in Board Exams",
    image: student3,
    quote: "The visual science mind maps and chemical reaction balancing tricks were pure gold. Instead of mugging up pages of theory, I could visualize the biological mechanisms clearly. Highly recommended to all students!"
  },
  {
    id: 4,
    name: "Aditya Verma",
    class: "Class 10 Foundation",
    subject: "Maths Problem Solver",
    score: "First Rank in School Pre-Boards",
    image: student4,
    quote: "The small batch size made all the difference. I could unmute and ask silly doubts without feeling shy. The teachers at Study Karo are super patient, energetic, and genuinely care about student concepts."
  }
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" style={{ position: 'relative', padding: '90px 0', background: '#FFFFFF' }}>
      <div className="section-container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
          <div style={{
            color: '#2563EB',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '2px',
            marginBottom: '12px',
            textTransform: 'uppercase'
          }}>
            ⭐ STUDENT EXPERIENCES & RESULTS
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            Loved by <span className="gradient-text">Students & Parents</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem' }}>
            Hear from students across India who turned their fear of Maths, Science, and Accounts into top marks with Study Karo.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {testimonials.map((t) => (
            <div key={t.id} className="ref-card" style={{
              padding: '30px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #E2E8F0',
              background: '#FFFFFF'
            }}>
              <div>
                {/* 5 Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

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

              {/* Student Footer */}
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
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #2563EB'
                  }}
                />
                <div>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.96rem' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>
                    {t.class} • {t.subject}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#15803D', fontWeight: 800, marginTop: '2px' }}>
                    🏆 {t.score}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
