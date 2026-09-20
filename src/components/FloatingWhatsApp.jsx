import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ onOpenModal }) {
  return (
    <div
      onClick={() => onOpenModal('demo')}
      style={{
        position: 'fixed',
        bottom: '88px',
        right: '24px',
        zIndex: 90,
        background: '#16A34A',
        color: '#FFFFFF',
        borderRadius: '9999px',
        padding: '12px 20px',
        boxShadow: '0 8px 24px rgba(22, 163, 74, 0.45)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
        fontWeight: 800,
        fontSize: '0.88rem',
        transition: 'transform 0.25s ease',
        border: '2px solid rgba(255, 255, 255, 0.8)'
      }}
      className="whatsapp-float-btn"
    >
      <MessageCircle size={22} />
      <span>Chat with Academic Advisor</span>

      <style>{`
        .whatsapp-float-btn:hover {
          transform: translateY(-4px) scale(1.03);
        }
        @media (max-width: 640px) {
          .whatsapp-float-btn span {
            display: none;
          }
          .whatsapp-float-btn {
            padding: 14px;
            bottom: 76px;
            right: 16px;
          }
        }
      `}</style>
    </div>
  );
}
