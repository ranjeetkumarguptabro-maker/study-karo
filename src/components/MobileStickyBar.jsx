import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function MobileStickyBar({ onOpenModal }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '12px 16px',
        display: 'none',
        zIndex: 95,
        boxShadow: '0 -4px 16px rgba(0,0,0,0.08)'
      }}
      className="mobile-sticky-bar"
    >
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => onOpenModal('demo')}
          className="btn-gold"
          style={{ flex: 1, justifyContent: 'center', padding: '10px 14px', fontSize: '0.85rem' }}
        >
          <Sparkles size={16} /> Free Demo
        </button>
        <button
          onClick={() => onOpenModal('enroll')}
          className="btn-primary"
          style={{ flex: 1, justifyContent: 'center', padding: '10px 14px', fontSize: '0.85rem' }}
        >
          Enroll from ₹500 <ArrowRight size={14} />
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-sticky-bar {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
