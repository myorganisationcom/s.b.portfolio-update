'use client';
import { useState } from 'react';
import IntroScreen         from './IntroScreen';
import Stage1Contact       from './Stage1Contact';
import Stage2BusinessAudit from './Stage2BusinessAudit';
import Stage3Diagnosis     from './Stage3Diagnosis';
import ProcessingScreen    from './ProcessingScreen';
import SuccessScreen       from './SuccessScreen';
import AuditProgressBar    from './AuditProgressBar';

const STAGES = ['Contact Details', 'Business Audit', 'Diagnosis', 'Analysis'];

export default function AuditFunnel({ onClose, insideModal = false }) {
  const [stage, setStage]     = useState(0); // 0 = intro, 1-3 + processing + success
  const [phase, setPhase]     = useState('form'); // 'form' | 'processing' | 'success'
  const [stage1, setStage1]   = useState({});
  const [stage2, setStage2]   = useState({});
  const [stage3, setStage3]   = useState({});
  const [result, setResult]   = useState(null);

  const handleStage1Done = (data) => { setStage1(data); setStage(2); };
  const handleStage2Done = (data) => { setStage2(data); setStage(3); };

  const handleStage3Done = async (data) => {
    setStage3(data);
    setPhase('processing');
    try {
      const res  = await fetch('/api/audit/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ stage1, stage2, stage3: data }),
      });
      const json = await res.json();
      if (json.success) {
        setResult(json);
        setTimeout(() => setPhase('success'), 4200); // let animation finish
      }
    } catch (err) {
      console.error(err);
      setTimeout(() => setPhase('success'), 4200);
    }
  };

  if (phase === 'processing') return <ProcessingScreen />;
  if (phase === 'success')    return <SuccessScreen result={result} stage1={stage1} onClose={onClose} />;

  /* ── Compact modal layout ── */
  if (insideModal) {
    return (
      <div style={{ fontFamily: "'Inter','Poppins',sans-serif" }}>
        {stage === 0 && <IntroScreen onStart={() => setStage(1)} />}
        {stage >= 1 && (
          <>
            <AuditProgressBar currentStage={stage} stages={STAGES} />
            <div style={{ padding: '28px 24px 36px', display: 'flex', justifyContent: 'center' }}>
              {stage === 1 && <Stage1Contact onDone={handleStage1Done} />}
              {stage === 2 && <Stage2BusinessAudit onDone={handleStage2Done} onBack={() => setStage(1)} initialData={stage2} />}
              {stage === 3 && <Stage3Diagnosis onDone={handleStage3Done} onBack={() => setStage(2)} />}
            </div>
          </>
        )}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          * { box-sizing: border-box; }
          input, textarea, select { font-family: inherit; }
          .audit-input {
            width: 100%; padding: 12px 15px; border-radius: 11px; font-size: 0.9rem;
            background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.09);
            color: #fff; outline: none; transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
          }
          .audit-input:focus {
            border-color: rgba(245,197,24,0.5);
            background: rgba(255,255,255,0.06);
            box-shadow: 0 0 20px rgba(245,197,24,0.06);
          }
          .audit-input::placeholder { color: rgba(255,255,255,0.22); }
          .audit-label {
            display: block; font-size: 0.74rem; font-weight: 600;
            color: rgba(255,255,255,0.5); margin-bottom: 6px;
            text-transform: uppercase; letter-spacing: 0.04em;
          }
          .audit-card {
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 18px; padding: 26px 22px;
            width: 100%; max-width: 720px;
            backdrop-filter: blur(8px);
          }
          .audit-btn-primary {
            display: inline-flex; align-items: center; gap: 8px;
            padding: 12px 28px; border-radius: 12px;
            background: linear-gradient(135deg, #F5C518, #f0bb00);
            color: #000; font-weight: 700; font-size: 0.92rem;
            border: none; cursor: pointer; transition: all 0.25s;
            box-shadow: 0 4px 16px rgba(245,197,24,0.2);
          }
          .audit-btn-primary:hover {
            background: linear-gradient(135deg, #f0bb00, #e6b000);
            transform: translateY(-2px);
            box-shadow: 0 8px 28px rgba(245,197,24,0.3);
          }
          .audit-btn-secondary {
            display: inline-flex; align-items: center; gap: 8px;
            padding: 11px 20px; border-radius: 12px;
            background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.4);
            font-weight: 500; font-size: 0.88rem;
            border: 1px solid rgba(255,255,255,0.08);
            cursor: pointer; transition: all 0.25s;
          }
          .audit-btn-secondary:hover {
            color: rgba(255,255,255,0.7);
            border-color: rgba(255,255,255,0.18);
            background: rgba(255,255,255,0.05);
          }
          .audit-error { color: #ef4444; font-size: 0.73rem; margin-top: 4px; display: flex; align-items: center; gap: 4px; }
          .audit-section-title { font-size: 1.35rem; font-weight: 800; color: #fff; margin: 0 0 5px; line-height: 1.3; }
          .audit-section-sub { font-size: 0.85rem; color: rgba(255,255,255,0.38); margin: 0 0 20px; line-height: 1.5; }
          .audit-field { margin-bottom: 18px; }
          .audit-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
          @media (max-width: 600px) {
            .audit-row { grid-template-columns: 1fr; }
            .audit-card { padding: 20px 16px; }
            .audit-section-title { font-size: 1.15rem; }
          }
        `}</style>
      </div>
    );
  }

  /* ── Standalone full-page layout (for /audit route) ── */
  return (
    <div style={{
      minHeight: '100vh', background: 'linear-gradient(135deg,#08080F 0%,#0D0D1E 60%,#0A0A18 100%)',
      fontFamily: "'Inter','Poppins',sans-serif", display: 'flex', flexDirection: 'column',
    }}>
      {/* Top bar */}
      <div style={{
        padding: '18px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(10,10,20,0.8)', backdropFilter: 'blur(12px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: '#F5C518', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', color: '#000' }}>S</div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.2 }}>Sarvanu</div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem' }}>Business Growth Audit</div>
          </div>
        </div>
        <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>🔒 Confidential &amp; Secure</div>
      </div>

      {stage === 0 && (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IntroScreen onStart={() => setStage(1)} />
        </div>
      )}

      {stage >= 1 && (
        <>
          {/* Progress bar */}
          <AuditProgressBar currentStage={stage} stages={STAGES} />

          {/* Stage content */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '32px 16px 60px' }}>
            {stage === 1 && <Stage1Contact onDone={handleStage1Done} />}
            {stage === 2 && <Stage2BusinessAudit onDone={handleStage2Done} onBack={() => setStage(1)} initialData={stage2} />}
            {stage === 3 && <Stage3Diagnosis onDone={handleStage3Done} onBack={() => setStage(2)} />}
          </div>
        </>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        input, textarea, select { font-family: inherit; }
        .audit-input {
          width: 100%; padding: 13px 16px; border-radius: 11px; font-size: 0.92rem;
          background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.09);
          color: #fff; outline: none; transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
        }
        .audit-input:focus {
          border-color: rgba(245,197,24,0.5);
          background: rgba(255,255,255,0.06);
          box-shadow: 0 0 20px rgba(245,197,24,0.06);
        }
        .audit-input::placeholder { color: rgba(255,255,255,0.22); }
        .audit-label {
          display: block; font-size: 0.78rem; font-weight: 600;
          color: rgba(255,255,255,0.5); margin-bottom: 6px;
          text-transform: uppercase; letter-spacing: 0.04em;
        }
        .audit-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px; padding: 32px;
          width: 100%; max-width: 680px;
          backdrop-filter: blur(8px);
        }
        .audit-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 32px; border-radius: 12px;
          background: linear-gradient(135deg, #F5C518, #f0bb00);
          color: #000; font-weight: 700; font-size: 0.95rem;
          border: none; cursor: pointer; transition: all 0.25s;
          box-shadow: 0 4px 16px rgba(245,197,24,0.2);
        }
        .audit-btn-primary:hover {
          background: linear-gradient(135deg, #f0bb00, #e6b000);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(245,197,24,0.3);
        }
        .audit-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; border-radius: 12px;
          background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.4);
          font-weight: 500; font-size: 0.9rem;
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer; transition: all 0.25s;
        }
        .audit-btn-secondary:hover {
          color: rgba(255,255,255,0.7);
          border-color: rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.05);
        }
        .audit-error { color: #ef4444; font-size: 0.75rem; margin-top: 5px; display: flex; align-items: center; gap: 4px; }
        .audit-section-title { font-size: 1.5rem; font-weight: 800; color: #fff; margin: 0 0 6px; line-height: 1.3; }
        .audit-section-sub { font-size: 0.88rem; color: rgba(255,255,255,0.38); margin: 0 0 24px; line-height: 1.5; }
        .audit-field { margin-bottom: 20px; }
        .audit-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 600px) {
          .audit-row { grid-template-columns: 1fr; }
          .audit-card { padding: 22px 16px; }
        }
      `}</style>
    </div>
  );
}
