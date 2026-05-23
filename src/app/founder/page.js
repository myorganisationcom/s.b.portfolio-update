import { Suspense } from 'react';
import FounderClient from './founder-client';

export const metadata = {
  title: 'Sarvanu Banerjee | Founder, Systems Architect & Quant Strategist',
  description: 'Sarvanu Banerjee is a Global Venture Builder based in Delhi, India. Expert in fintech, algorithmic trading, enterprise strategy, and eco-conservation.',
  keywords: 'Sarvanu Banerjee, Founder, Systems Architect, Quant Strategist, Global Venture Builder, Fintech Infrastructure, Algorithmic Trading, Delhi India, Enterprise Strategy',
  alternates: {
    canonical: 'https://sarvanu.com/founder',
  },
  openGraph: {
    title: 'Sarvanu Banerjee | Global Venture Builder & Systems Architect',
    description: 'Explore the ventures and strategic methodology of Sarvanu Banerjee. Building resilient enterprises across fintech, algorithms, and capital allocation.',
    url: 'https://sarvanu.com/founder',
    siteName: 'Sarvanu',
    images: [
      {
        url: 'https://sarvanu.com/Sarvanu Banerjee.jpeg',
        width: 800,
        height: 800,
        alt: 'Sarvanu Banerjee',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarvanu Banerjee | Founder & Strategist',
    description: 'Building resilient enterprises across fintech, algorithms, and capital allocation.',
    images: ['https://sarvanu.com/Sarvanu Banerjee.jpeg'],
  },
};

export default function FounderPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sarvanu Banerjee',
    jobTitle: 'Founder & Systems Architect',
    url: 'https://sarvanu.com/founder',
    image: 'https://sarvanu.com/Sarvanu Banerjee.jpeg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi',
      addressCountry: 'IN'
    },
    description: 'Systems architect, venture founder, and quant strategist operating high-performance systems spanning fintech infrastructure, algorithmic trading, advisory growth, and eco-conservation.',
    sameAs: [
      'https://sarvanu.com',
      'https://texnova.org',
      'https://algotradingbot.online',
      'https://sundarbantourism.online',
      'https://fundinvestmentgroup.com'
    ],
    knowsAbout: [
      'Enterprise Business Strategy',
      'Algorithmic Trading',
      'Fintech Infrastructure',
      'Blockchain',
      'Eco-Preservation',
      'Capital Allocation'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={
        <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0a1628', color: '#ffffff' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '40px', height: '40px', border: '3px solid rgba(245,197,24,0.1)', borderTopColor: '#f5c518', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
            <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase' }}>Loading Profile...</div>
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
    </>
  );
}
