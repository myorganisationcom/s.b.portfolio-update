'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm]     = useState({ email: '', password: '' });
  const [error, setError]   = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res  = await fetch('/api/admin/login', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) router.push('/admin/dashboard');
      else setError(data.error || 'Invalid credentials.');
    } catch {
      setError('Server error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh', background: '#0A0A14',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Inter', sans-serif", padding: '20px',
    }}>
      <div style={{
        width: '100%', maxWidth: 420,
        background: 'linear-gradient(135deg,#0D0D1E 0%,#111827 100%)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 20, padding: '40px 36px',
        boxShadow: '0 25px 80px rgba(0,0,0,0.6)',
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: '#F5C518', color: '#000',
            fontWeight: 800, fontSize: '1.4rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 14px',
          }}>S</div>
          <h1 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 800, marginBottom: 4 }}>
            Sarvanu
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>Admin Panel — Authorised Access Only</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: 6, fontWeight: 500 }}>
              Email Address
            </label>
            <input
              type="email" required value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              placeholder="business@sarvanu.com"
              style={{
                width: '100%', padding: '12px 14px', borderRadius: 10, fontSize: '0.9rem',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff', outline: 'none', boxSizing: 'border-box',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: 6, fontWeight: 500 }}>
              Password
            </label>
            <input
              type="password" required value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              placeholder="••••••••"
              style={{
                width: '100%', padding: '12px 14px', borderRadius: 10, fontSize: '0.9rem',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff', outline: 'none', boxSizing: 'border-box',
              }}
            />
          </div>

          {error && (
            <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 8, padding: '10px 14px', color: '#ef4444', fontSize: '0.82rem' }}>
              <i className="fas fa-exclamation-circle" style={{ marginRight: 6 }} />{error}
            </div>
          )}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '13px', borderRadius: 10,
            background: loading ? 'rgba(245,197,24,0.5)' : '#F5C518',
            color: '#000', fontWeight: 700, fontSize: '0.95rem',
            border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            transition: 'all 0.2s',
          }}>
            {loading ? <><i className="fas fa-spinner fa-spin" /> Signing in…</> : <><i className="fas fa-lock" /> Sign In</>}
          </button>
        </form>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.72rem', marginTop: 24 }}>
          🔒 Secure admin access — not for public use
        </p>
      </div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
    </div>
  );
}
