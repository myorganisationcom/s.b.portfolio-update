'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({ children }) {
  const router   = useRouter();
  const pathname = usePathname();
  const [admin, setAdmin]       = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (pathname === '/admin/login') { setChecking(false); return; }
    fetch('/api/admin/me')
      .then(r => r.json())
      .then(d => {
        if (d.success) { setAdmin(d); setChecking(false); }
        else { router.replace('/admin/login'); }
      })
      .catch(() => router.replace('/admin/login'));
  }, [pathname]);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (pathname === '/admin/login') return <>{children}</>;
  if (checking) return (
    <div style={{ minHeight:'100vh', background:'#0A0A14', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ color:'#F5C518', fontSize:'0.9rem' }}>Verifying session…</div>
    </div>
  );

  const navLinks = [
    { href: '/admin/dashboard', icon: 'fa-chart-pie',    label: 'Dashboard' },
    { href: '/admin/leads',     icon: 'fa-users',        label: 'All Leads' },
  ];

  return (
    <div className="adm-root">
      {/* Sidebar */}
      <aside className="adm-sidebar">
        <div className="adm-logo">
          <span className="adm-logo-mark">S</span>
          <span className="adm-logo-text">Sarvanu<br /><small>Admin Panel</small></span>
        </div>
        <nav className="adm-nav">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className={`adm-nav-link ${pathname.startsWith(l.href) ? 'adm-nav-link-active' : ''}`}>
              <i className={`fas ${l.icon}`} />
              <span>{l.label}</span>
            </Link>
          ))}
        </nav>
        <div className="adm-sidebar-footer">
          <div className="adm-admin-info">
            <div className="adm-admin-avatar">{(admin?.name?.[0] || 'A').toUpperCase()}</div>
            <div>
              <div className="adm-admin-name">{admin?.name || 'Admin'}</div>
              <div className="adm-admin-email">{admin?.email || ''}</div>
            </div>
          </div>
          <button onClick={handleLogout} className="adm-logout-btn">
            <i className="fas fa-sign-out-alt" /> Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="adm-main">
        <header className="adm-topbar">
          <h1 className="adm-page-title">
            {navLinks.find(l => pathname.startsWith(l.href))?.label || 'Admin'}
          </h1>
          <div className="adm-topbar-right">
            <span className="adm-online-badge"><i className="fas fa-circle" /> Live</span>
          </div>
        </header>
        <div className="adm-content">{children}</div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .adm-root {
          display: flex; min-height: 100vh;
          background: #0A0A14; color: #E2E2F0;
          font-family: 'Inter', sans-serif;
        }
        .adm-sidebar {
          width: 240px; min-height: 100vh; background: #0D0D1E;
          border-right: 1px solid rgba(255,255,255,0.06);
          display: flex; flex-direction: column;
          position: fixed; top: 0; left: 0; z-index: 100;
        }
        .adm-logo {
          display: flex; align-items: center; gap: 12px;
          padding: 24px 20px 20px; border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .adm-logo-mark {
          width: 36px; height: 36px; border-radius: 10px;
          background: #F5C518; color: #000; font-weight: 800;
          font-size: 1.1rem; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .adm-logo-text { font-size: 0.88rem; font-weight: 700; color: #fff; line-height: 1.4; }
        .adm-logo-text small { font-size: 0.72rem; font-weight: 400; color: rgba(255,255,255,0.4); }
        .adm-nav { flex: 1; padding: 16px 12px; display: flex; flex-direction: column; gap: 4px; }
        .adm-nav-link {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 8px;
          color: rgba(255,255,255,0.5); text-decoration: none;
          font-size: 0.88rem; font-weight: 500; transition: all 0.18s;
        }
        .adm-nav-link:hover { background: rgba(255,255,255,0.05); color: #fff; }
        .adm-nav-link-active { background: rgba(245,197,24,0.1); color: #F5C518 !important; }
        .adm-nav-link i { width: 16px; text-align: center; }
        .adm-sidebar-footer { padding: 16px 12px; border-top: 1px solid rgba(255,255,255,0.05); }
        .adm-admin-info { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
        .adm-admin-avatar {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(245,197,24,0.15); color: #F5C518;
          font-weight: 700; font-size: 0.85rem;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .adm-admin-name  { font-size: 0.82rem; font-weight: 600; color: #fff; }
        .adm-admin-email { font-size: 0.7rem; color: rgba(255,255,255,0.35); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 150px; }
        .adm-logout-btn {
          width: 100%; padding: 8px 12px; border-radius: 8px;
          background: transparent; border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.4); cursor: pointer; font-size: 0.82rem;
          display: flex; align-items: center; gap: 8px; transition: all 0.18s;
        }
        .adm-logout-btn:hover { border-color: rgba(239,68,68,0.4); color: #ef4444; }

        .adm-main { margin-left: 240px; flex: 1; display: flex; flex-direction: column; min-height: 100vh; }
        .adm-topbar {
          padding: 16px 28px; background: rgba(13,13,30,0.8);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: space-between;
          backdrop-filter: blur(12px); position: sticky; top: 0; z-index: 50;
        }
        .adm-page-title { font-size: 1.1rem; font-weight: 700; color: #fff; margin: 0; }
        .adm-online-badge {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.75rem; color: #10b981;
          background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2);
          padding: 4px 10px; border-radius: 20px;
        }
        .adm-online-badge i { font-size: 0.5rem; }
        .adm-content { padding: 28px; flex: 1; }
        @media (max-width: 768px) {
          .adm-sidebar { transform: translateX(-100%); }
          .adm-main { margin-left: 0; }
        }
      `}</style>
    </div>
  );
}
