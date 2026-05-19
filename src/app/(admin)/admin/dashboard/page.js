'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const QUALITY_COLORS = { Hot: '#ef4444', Warm: '#F5C518', Nurture: '#6366f1', Cold: '#6b7280' };
const QUALITY_ICONS  = { Hot: '🔥', Warm: '🟡', Nurture: '🔵', Cold: '⚪' };

function StatCard({ icon, label, value, color = '#F5C518', sub }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 14, padding: '22px 20px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <i className={`fas ${icon}`} style={{ color, fontSize: '1rem' }} />
        </div>
        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{label}</span>
      </div>
      <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: 6 }}>{sub}</div>}
    </div>
  );
}

export default function AdminDashboard() {
  const [stats, setStats]   = useState(null);
  const [leads, setLeads]   = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/stats').then(r => r.json()),
      fetch('/api/admin/leads?page=1').then(r => r.json()),
    ]).then(([s, l]) => {
      if (s.success) setStats(s.stats);
      if (l.success) setLeads(l.leads?.slice(0, 8) || []);
    }).finally(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ color: 'rgba(255,255,255,0.4)', padding: 40, textAlign: 'center' }}>Loading dashboard…</div>;

  const totalQuals = (stats?.hot || 0) + (stats?.warm || 0) + (stats?.nurture || 0);

  return (
    <div>
      {/* Stats grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
        <StatCard icon="fa-users"         label="Total Leads"      value={stats?.total    ?? 0} color="#6366f1" />
        <StatCard icon="fa-fire"          label="Hot Leads"        value={stats?.hot      ?? 0} color="#ef4444" sub="High priority" />
        <StatCard icon="fa-calendar-week" label="This Week"        value={stats?.thisWeek ?? 0} color="#10b981" />
        <StatCard icon="fa-chart-line"    label="Avg Health Score" value={`${stats?.avgScore ?? 0}/100`} color="#F5C518" />
      </div>

      {/* Two column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>

        {/* Recent leads */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ padding: '18px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>Recent Leads</h2>
            <Link href="/admin/leads" style={{ color: '#F5C518', fontSize: '0.78rem', textDecoration: 'none', fontWeight: 600 }}>View all →</Link>
          </div>
          <div>
            {leads.length === 0 && <p style={{ padding: '24px 20px', color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>No leads yet.</p>}
            {leads.map((lead) => (
              <Link key={lead.id} href={`/admin/leads/${lead.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.04)',
                  transition: 'background 0.15s', cursor: 'pointer',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                    background: `${QUALITY_COLORS[lead.lead_quality] || '#6b7280'}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.82rem', fontWeight: 700, color: QUALITY_COLORS[lead.lead_quality] || '#fff',
                  }}>
                    {(lead.name?.[0] || '?').toUpperCase()}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.88rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{lead.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem' }}>{lead.organisation || lead.email}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
                    <span style={{
                      background: `${QUALITY_COLORS[lead.lead_quality] || '#6b7280'}20`,
                      color: QUALITY_COLORS[lead.lead_quality] || '#6b7280',
                      border: `1px solid ${QUALITY_COLORS[lead.lead_quality] || '#6b7280'}40`,
                      padding: '2px 8px', borderRadius: 20, fontSize: '0.7rem', fontWeight: 600,
                    }}>
                      {QUALITY_ICONS[lead.lead_quality]} {lead.lead_quality}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>
                      Score: {lead.health_score ?? 0}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Lead quality distribution */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '20px' }}>
          <h2 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, marginBottom: 20, marginTop: 0 }}>Lead Quality</h2>
          {[
            { key: 'hot',    label: 'Hot',    count: stats?.hot    ?? 0, color: '#ef4444' },
            { key: 'warm',   label: 'Warm',   count: stats?.warm   ?? 0, color: '#F5C518' },
            { key: 'nurture',label: 'Nurture',count: stats?.nurture ?? 0, color: '#6366f1' },
            { key: 'cold',   label: 'Cold',   count: stats?.cold   ?? 0, color: '#6b7280' },
          ].map(q => {
            const pct = totalQuals > 0 ? Math.round((q.count / totalQuals) * 100) : 0;
            return (
              <div key={q.key} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>{q.label}</span>
                  <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600 }}>{q.count} ({pct}%)</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 4, height: 6 }}>
                  <div style={{ width: `${pct}%`, height: '100%', borderRadius: 4, background: q.color, transition: 'width 0.6s ease' }} />
                </div>
              </div>
            );
          })}

          <div style={{ marginTop: 24, padding: '14px', background: 'rgba(245,197,24,0.06)', border: '1px solid rgba(245,197,24,0.15)', borderRadius: 10 }}>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>This Month</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#F5C518' }}>{stats?.thisMonth ?? 0}</div>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>new leads</div>
          </div>
        </div>
      </div>
    </div>
  );
}
