'use client';

import { useEffect } from 'react';
import { useLeadModal } from './LeadModalContext';
import AuditFunnel from './audit/AuditFunnel';

export default function AuditModal() {
  const { activeModal, closeModal } = useLeadModal();
  const isOpen = activeModal === 'audit';

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop — click outside to close */}
      <div
        onClick={closeModal}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.82)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          zIndex: 9000,
          animation: 'auditBdFadeIn 0.25s ease',
        }}
      />

      {/* Centering flex wrapper */}
      <div
        style={{
          position: 'fixed', inset: 0,
          zIndex: 9001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 16px',
        }}
        onClick={closeModal}
      >
        {/* Modal card — contained, NOT full-screen */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Business Growth Audit"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 820,
            maxHeight: '90vh',
            background: 'linear-gradient(135deg,#08080F 0%,#0D0D1E 60%,#0A0A18 100%)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 20,
            boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(245,197,24,0.05)',
            animation: 'auditSlideUp 0.3s cubic-bezier(0.22,1,0.36,1)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky header bar */}
          <div style={{
            padding: '14px 22px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(10,10,20,0.95)',
            backdropFilter: 'blur(12px)',
            flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 30, height: 30, borderRadius: 8,
                background: '#F5C518',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '0.88rem', color: '#000',
              }}>S</div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.86rem', lineHeight: 1.2 }}>Sarvanu</div>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.67rem' }}>Business Growth Audit</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.28)' }}>🔒 Confidential &amp; Secure</div>
              <button
                onClick={closeModal}
                aria-label="Close audit"
                style={{
                  width: 30, height: 30, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s', flexShrink: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background='rgba(255,255,255,0.14)'; e.currentTarget.style.color='#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background='rgba(255,255,255,0.07)'; e.currentTarget.style.color='rgba(255,255,255,0.55)'; }}
              >✕</button>
            </div>
          </div>

          {/* Scrollable funnel content */}
          <div style={{ overflowY: 'auto', flex: 1 }}>
            <AuditFunnel onClose={closeModal} insideModal />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes auditBdFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes auditSlideUp {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </>
  );
}
