import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RegistrationModal({ isOpen, mode, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [studentClass, setStudentClass] = useState('Class 10 Board Prep');
  const [subject, setSubject] = useState('All 3 Subjects (Maths, Science & Commerce)');
  const [batchTime, setBatchTime] = useState('Evening Batch (5:00 PM - 6:30 PM)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill in your name and WhatsApp number.');
      return;
    }
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }} onClick={handleResetAndClose}>
      
      <div style={{
        background: '#FFFFFF',
        borderRadius: '24px',
        maxWidth: '520px',
        width: '100%',
        padding: '36px',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
        border: '1px solid #E2E8F0',
        maxHeight: '90vh',
        overflowY: 'auto'
      }} onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#F1F5F9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#475569'
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '68px',
              height: '68px',
              background: '#DCFCE7',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              color: '#15803D'
            }}>
              <CheckCircle2 size={40} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', marginBottom: '8px' }}>
              Registration Successful!
            </h3>
            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Welcome aboard, <strong>{name}</strong>! We have sent the class joining link and free study resources to your WhatsApp: <strong>{phone}</strong>.
            </p>

            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '16px',
              border: '1px solid #E2E8F0',
              textAlign: 'left',
              marginBottom: '24px',
              fontSize: '0.88rem',
              color: '#334155'
            }}>
              <div>📚 <strong>Subject Track:</strong> {subject}</div>
              <div style={{ marginTop: '4px' }}>🎓 <strong>Grade:</strong> {studentClass}</div>
              <div style={{ marginTop: '4px' }}>⏰ <strong>Batch:</strong> {batchTime}</div>
              <div style={{ marginTop: '4px' }}>💰 <strong>Status:</strong> {mode === 'demo' ? 'Free Demo Seat Reserved (₹0)' : 'Confirmed 15-Day Batch (₹399)'}</div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Done & Return to Website
            </button>
          </div>
        ) : (
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: mode === 'demo' ? '#FEF3C7' : '#DBEAFE',
              color: mode === 'demo' ? '#D97706' : '#1D4ED8',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.78rem',
              fontWeight: 800,
              marginBottom: '12px'
            }}>
              {mode === 'demo' ? <Sparkles size={14} /> : <Zap size={14} />}
              {mode === 'demo' ? '100% FREE DEMO CLASS' : '15-DAY MASTERCLASS ENROLLMENT'}
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '6px' }}>
              {mode === 'demo' ? 'Reserve Your Free Demo Seat' : 'Enroll in 15-Day Study Program'}
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '24px' }}>
              {mode === 'demo'
                ? 'Join our live interactive lecture on Maths, Science, or Commerce at zero cost.'
                : 'Get complete 15-day live tuition, daily practice sheets, and mock tests for just ₹399.'}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '6px' }}>
                  Student Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aryan Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '6px' }}>
                  WhatsApp Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '6px' }}>
                  Select Grade / Class
                </label>
                <select
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.95rem'
                  }}
                >
                  <option value="Class 9 Foundation">Class 9 Foundation</option>
                  <option value="Class 10 Board Prep">Class 10 Board Prep</option>
                  <option value="Class 11 Science">Class 11 Science (PCM/PCB)</option>
                  <option value="Class 11 Commerce">Class 11 Commerce</option>
                  <option value="Class 12 Science">Class 12 Science</option>
                  <option value="Class 12 Commerce">Class 12 Commerce</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '6px' }}>
                  Subject Track Preference
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.95rem'
                  }}
                >
                  <option value="All 3 Subjects (Maths, Science & Commerce)">All 3 Subjects (Maths, Science & Commerce Combo)</option>
                  <option value="Mathematics Mastery">Mathematics Mastery</option>
                  <option value="Science Excellence">Science Excellence (Physics, Chemistry, Biology)</option>
                  <option value="Commerce & Accounting Hub">Commerce & Accounting Hub</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '6px' }}>
                  Preferred Live Batch Timing
                </label>
                <select
                  value={batchTime}
                  onChange={(e) => setBatchTime(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.95rem'
                  }}
                >
                  <option value="Morning Batch (8:00 AM - 9:30 AM)">Morning Batch (8:00 AM - 9:30 AM)</option>
                  <option value="Evening Batch (5:00 PM - 6:30 PM)">Evening Batch (5:00 PM - 6:30 PM)</option>
                  <option value="Night Batch (7:30 PM - 9:00 PM)">Night Batch (7:30 PM - 9:00 PM)</option>
                </select>
              </div>

              <div style={{
                background: '#F8FAFC',
                borderRadius: '12px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '4px'
              }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                  Total Payable:
                </span>
                <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0F172A' }}>
                  {mode === 'demo' ? 'FREE (₹0)' : '₹399 only'}
                </span>
              </div>

              <button
                type="submit"
                className={mode === 'demo' ? 'btn-gold' : 'btn-primary'}
                style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem', marginTop: '6px' }}
              >
                {mode === 'demo' ? 'CONFIRM FREE DEMO SEAT' : 'COMPLETE ENROLLMENT (₹399)'} <ArrowRight size={18} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.75rem', color: '#64748B' }}>
                <ShieldCheck size={14} color="#10B981" /> 100% Spam Free • Instant WhatsApp Confirmation
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
