import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: "Who should join this 15-Day Study & Learn Masterclass?",
    a: "This program is tailored for students in Class 9, Class 10, Class 11, and Class 12 (CBSE, ICSE, State Boards) as well as college commerce freshers who want to build rock-solid conceptual clarity in Mathematics, Science (Physics, Chemistry, Biology), or Commerce & Accounting. It is also ideal for students preparing for upcoming board exams and school finals."
  },
  {
    q: "Can I choose only one subject or all three (Maths, Science & Commerce)?",
    a: "Yes! You can choose your individual subject track (e.g. pure Mathematics, pure Science, or pure Commerce) or enroll in our all-in-one comprehensive combo batch. During registration, simply select your desired subject focus."
  },
  {
    q: "What are the course fees and plan options?",
    a: "We offer two affordable student plans: 1) Starter Small Course (Single Subject Crash Course) for ₹500, and 2) Complete 15-Day Masterclass (Comprehensive All-Subject Track — Maths, Science & Commerce, Daily DPPs, 1-on-1 Doubt Sessions, and Grand Mock Assessment) for ₹1,000. Both options include downloadable notes and lifetime recording access."
  },
  {
    q: "What if I miss a live class due to school or personal reasons?",
    a: "No problem at all! Every single live lecture is recorded in high-definition and uploaded to your student portal within 2 hours of class completion. You enjoy 24/7 unlimited access to all recordings and notes."
  },
  {
    q: "How does the Free Demo Class work?",
    a: "You can book a 100% Free Demo Seat by clicking the 'Book Free Demo' button. You will receive an invitation link on your WhatsApp to attend our next live interactive class, experience our teaching style firsthand, and ask doubts directly to the teacher."
  },
  {
    q: "How are student doubts resolved?",
    a: "Every live session has dedicated interactive Q&A time where you can unmute and speak to the teacher. In addition, you get access to our dedicated WhatsApp doubt clearing group where educators resolve questions daily within a few hours."
  }
];

export default function FAQSection({ onOpenModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ position: 'relative', padding: '90px 0', background: '#F8FAFC' }}>
      <div className="section-container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
          <div style={{
            color: '#2563EB',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '2px',
            marginBottom: '12px',
            textTransform: 'uppercase'
          }}>
            ❓ GOT QUESTIONS?
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem' }}>
            Everything you need to know about Study Karo classes, subjects, timings, and study kits.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="ref-card"
              style={{
                borderRadius: '18px',
                border: openIdx === idx ? '2px solid #2563EB' : '1px solid #E2E8F0',
                background: '#FFFFFF',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: openIdx === idx ? '#2563EB' : '#0F172A'
                }}
              >
                <span>{faq.q}</span>
                {openIdx === idx ? <ChevronUp size={20} color="#2563EB" /> : <ChevronDown size={20} color="#64748B" />}
              </button>

              {openIdx === idx && (
                <div style={{
                  padding: '0 24px 24px 24px',
                  color: '#475569',
                  fontSize: '0.96rem',
                  lineHeight: 1.65,
                  borderTop: '1px solid #F1F5F9',
                  paddingTop: '16px'
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '16px' }}>
            Still have questions? Our academic counselors are here to guide you.
          </p>
          <button
            onClick={() => onOpenModal('demo')}
            className="btn-gold"
            style={{ padding: '12px 30px', fontSize: '0.95rem' }}
          >
            <Sparkles size={18} /> Speak with an Academic Advisor
          </button>
        </div>

      </div>
    </section>
  );
}
