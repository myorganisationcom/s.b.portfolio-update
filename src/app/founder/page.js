import { Suspense } from 'react';
import FounderClient from './founder-client';

export const metadata = {
  title: 'Sarvanu Banerjee — Founder | Sarvanu.com',
  description: 'Founder profile: Sarvanu Banerjee — ventures, strategic business background, algorithmic trading setups, fintech developments, and booking pathways.',
  alternates: {
    canonical: 'https://sarvanu.com/founder',
  },
};

export default function FounderPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0a1628', color: '#ffffff' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', border: '3px solid rgba(245,197,24,0.1)', borderTopColor: '#f5c518', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
          <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase' }}>Loading Portfolio...</div>
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    }>
      <FounderClient />
    </Suspense>
  );
}
