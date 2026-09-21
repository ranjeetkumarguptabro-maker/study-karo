import React, { useState } from 'react';
import { Quote, Sparkles, RefreshCw, Flame, Heart, BookOpen, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';

const quotesList = [
  {
    quote: "Dream is not that which you see while sleeping, it is something that does not let you sleep.",
    author: "Dr. A.P.J. Abdul Kalam",
    role: "Former President of India & Scientist",
    tag: "Ambition & Vision"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
    role: "Father of the Nation",
    tag: "Continuous Learning"
  },
  {
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    role: "Global Leader & Nobel Laureate",
    tag: "Power of Education"
  },
  {
    quote: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
    role: "Author & Philosopher",
    tag: "Consistency"
  },
  {
    quote: "An equation for me has no meaning unless it expresses a thought of God.",
    author: "Srinivasa Ramanujan",
    role: "Legendary Indian Mathematician",
    tag: "Mathematics Mastery"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    role: "Philosopher & Teacher",
    tag: "Perseverance"
  },
  {
    quote: "The only way to learn mathematics is to do mathematics.",
    author: "Paul Halmos",
    role: "Renowned Mathematician",
    tag: "Practice & Action"
  },
  {
    quote: "Science is a way of thinking much more than it is a body of knowledge.",
    author: "Carl Sagan",
    role: "Astronomer & Educator",
    tag: "Scientific Mindset"
  }
];

export default function MotivationalQuotes() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNextQuote = () => {
    const next = (currentIdx + 1) % quotesList.length;
    setCurrentIdx(next);
    confetti({ particleCount: 50, spread: 50, origin: { y: 0.8 } });
  };

  const activeQuote = quotesList[currentIdx];

  return (
    <section id="motivation" style={{
      position: 'relative',
      padding: '90px 0',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 50%, #EFF6FF 100%)',
      borderTop: '1px solid #E2E8F0'
    }}>
      <div className="section-container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#D97706',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '2px',
            marginBottom: '12px',
            textTransform: 'uppercase'
          }}>
            <Flame size={18} color="#F59E0B" /> DAILY INSPIRATION FOR STUDENTS
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            Words to Ignite Your <span className="gold-gradient-text">Passion & Focus</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
            When questions look tough and revisions feel long, remember that every achiever was once a student who refused to give up. Feed your mind with courage!
          </p>
        </div>

        {/* Big Interactive Spotlight Quote Card */}
        <div style={{
          maxWidth: '960px',
          margin: '0 auto 50px auto',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #1E3A8A 100%)',
          borderRadius: '28px',
          padding: '48px 40px',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(15, 23, 42, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}>
          {/* Decorative Quote Icon Watermark */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '30px',
            opacity: 0.08,
            pointerEvents: 'none'
          }}>
            <Quote size={180} color="#FFFFFF" />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(245, 158, 11, 0.2)',
              color: '#FDE047',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 800,
              marginBottom: '24px',
              border: '1px solid rgba(245, 158, 11, 0.4)'
            }}>
              <Sparkles size={14} /> {activeQuote.tag}
            </div>

            <p style={{
              fontSize: 'clamp(1.25rem, 2.8vw, 1.85rem)',
              fontWeight: 700,
              lineHeight: 1.45,
              color: '#F8FAFC',
              marginBottom: '28px',
              fontStyle: 'italic',
              maxWidth: '840px'
            }}>
              "{activeQuote.quote}"
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '18px',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              paddingTop: '24px'
            }}>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FDE047' }}>
                  — {activeQuote.author}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#93C5FD', fontWeight: 600 }}>
                  {activeQuote.role}
                </div>
              </div>

              <button
                onClick={handleNextQuote}
                className="btn-gold"
                style={{ padding: '12px 24px', fontSize: '0.9rem' }}
              >
                <RefreshCw size={16} /> Read Another Inspiring Quote
              </button>
            </div>
          </div>
        </div>

        {/* 3 Inspiring Message Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '1100px',
          margin: '0 auto 40px auto'
        }}>
          {/* Card 1: From Teacher Krish Mallick */}
          <div className="ref-card" style={{
            padding: '30px',
            borderRadius: '22px',
            border: '2px solid #2563EB',
            background: '#FFFFFF'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#EFF6FF',
              color: '#2563EB',
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '0.78rem',
              fontWeight: 800,
              marginBottom: '16px'
            }}>
              <GraduationCap size={16} /> A NOTE FROM YOUR TEACHER
            </div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0F172A', marginBottom: '10px' }}>
              "You Don't Have to Be a Born Genius"
            </h4>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
              "Maths, Science, and Accounts are not meant only for top rankers. With 30 minutes of honest daily problem solving and the willingness to ask questions, any student can score 90%+. Never doubt what you are capable of!"
            </p>
            <div style={{ fontWeight: 800, color: '#1E40AF', fontSize: '0.9rem' }}>
              — Krish Mallick, Lead Teacher
            </div>
          </div>

          {/* Card 2: The 15-Day Mindset */}
          <div className="ref-card" style={{
            padding: '30px',
            borderRadius: '22px',
            border: '2px solid #10B981',
            background: '#FFFFFF'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#ECFDF5',
              color: '#059669',
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '0.78rem',
              fontWeight: 800,
              marginBottom: '16px'
            }}>
              <Flame size={16} /> STUDY HABIT RULE
            </div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0F172A', marginBottom: '10px' }}>
              "1% Better Every Single Day"
            </h4>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
              "Don't worry about finishing the entire textbook today. Solve just 5 numericals, understand 1 chemical equation, or master 1 journal entry. Small daily steps compound into unstoppable academic mastery."
            </p>
            <div style={{ fontWeight: 800, color: '#059669', fontSize: '0.9rem' }}>
              — The Compound Effect of Learning
            </div>
          </div>

          {/* Card 3: Overcoming Fear of Failure */}
          <div className="ref-card" style={{
            padding: '30px',
            borderRadius: '22px',
            border: '2px solid #F59E0B',
            background: '#FFFFFF'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#FFFBEB',
              color: '#D97706',
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '0.78rem',
              fontWeight: 800,
              marginBottom: '16px'
            }}>
              <Heart size={16} /> EXAM CONFIDENCE
            </div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0F172A', marginBottom: '10px' }}>
              "Mistakes Are Simply Proof of Trying"
            </h4>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
              "When you get an answer wrong in your practice test, don't feel disappointed. You just discovered one more concept you can fix before the final exam. Embrace your mistakes—they are your greatest teachers."
            </p>
            <div style={{ fontWeight: 800, color: '#D97706', fontSize: '0.9rem' }}>
              — Study Karo Exam Mindset
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
