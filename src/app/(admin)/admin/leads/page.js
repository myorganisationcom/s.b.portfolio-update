'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

const QC = { Hot: '#ef4444', Warm: '#F5C518', Nurture: '#6366f1', Cold: '#6b7280' };
const SC = { New: '#10b981', Contacted: '#6366f1', Qualified: '#F5C518', 'Closed Won': '#10b981', 'Not Interested': '#6b7280' };

export default function AllLeadsPage() {
  const [leads, setLeads]     = useState([]);
  const [total, setTotal]     = useState(0);
  const [page, setPage]       = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch]   = useState('');
  const [quality, setQuality] = useState('All');
  const [status,  setStatus]  = useState('All');
  const [searchInput, setSearchInput] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    const qs = new URLSearchParams({ page });
    if (quality !== 'All') qs.set('quality', quality);
    if (status  !== 'All') qs.set('status',  status);
    if (search)             qs.set('search',  search);

    const res  = await fetch(`/api/admin/leads?${qs}`);
    const data = await res.json();
    if (data.success) { setLeads(data.leads || []); setTotal(data.total || 0); }
    setLoading(false);
  }, [page, quality, status, search]);

  useEffect(() => { load(); }, [load]);

  const handleSearch = (e) => { e.preventDefault(); setSearch(searchInput); setPage(1); };

  return (
    <div>
      {/* Filters */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8, flex: '1 1 260px' }}>
          <input
            value={searchInput} onChange={e => setSearchInput(e.target.value)}
            placeholder="Search by name, email, phone…"
            style={{
              flex: 1, padding: '9px 14px', borderRadius: 8, fontSize: '0.85rem',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff', outline: 'none',
            }}
          />
          <button type="submit" style={{
            padding: '9px 16px', borderRadius: 8, background: '#F5C518', color: '#000',
            border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem',
          }}>Search</button>
          {search && <button type="button" onClick={() => { setSearch(''); setSearchInput(''); setPage(1); }} style={{
            padding: '9px 12px', borderRadius: 8, background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)',
            cursor: 'pointer', fontSize: '0.82rem',
          }}>✕ Clear</button>}
        </form>

        {/* Quality filter */}
        <div style={{ display: 'flex', gap: 6 }}>
          {['All', 'Hot', 'Warm', 'Nurture', 'Cold'].map(q => (
            <button key={q} onClick={() => { setQuality(q); setPage(1); }} style={{
              padding: '7px 14px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 600,
              border: `1px solid ${quality === q ? (QC[q] || '#F5C518') : 'rgba(255,255,255,0.1)'}`,
              background: quality === q ? `${QC[q] || '#F5C518'}18` : 'transparent',
              color: quality === q ? (QC[q] || '#F5C518') : 'rgba(255,255,255,0.45)',
              cursor: 'pointer', transition: 'all 0.15s',
            }}>{q}</button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', marginBottom: 14 }}>
        Showing {leads.length} of {total} leads
      </p>

      {/* Table */}
      <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {['Name & Org', 'Contact', 'Score', 'Quality', 'Status', 'Date', ''].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: 'rgba(255,255,255,0.4)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr><td colSpan={7} style={{ padding: '40px', textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>Loading…</td></tr>
              )}
              {!loading && leads.length === 0 && (
                <tr><td colSpan={7} style={{ padding: '40px', textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>No leads found.</td></tr>
              )}
              {leads.map(lead => (
                <tr key={lead.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ fontWeight: 600, color: '#fff' }}>{lead.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{lead.organisation || '—'}</div>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem' }}>{lead.email}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{lead.phone}</div>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{ fontWeight: 700, color: lead.health_score >= 70 ? '#10b981' : lead.health_score >= 50 ? '#F5C518' : '#ef4444', fontSize: '1rem' }}>
                      {lead.health_score ?? 0}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.72rem' }}>/100</span>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      background: `${QC[lead.lead_quality] || '#6b7280'}18`,
                      color: QC[lead.lead_quality] || '#6b7280',
                      border: `1px solid ${QC[lead.lead_quality] || '#6b7280'}40`,
                      padding: '3px 10px', borderRadius: 20, fontSize: '0.72rem', fontWeight: 600,
                    }}>{lead.lead_quality}</span>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      background: `${SC[lead.call_status] || '#6b7280'}18`,
                      color: SC[lead.call_status] || '#6b7280',
                      padding: '3px 10px', borderRadius: 20, fontSize: '0.72rem', fontWeight: 600,
                    }}>{lead.call_status || 'New'}</span>
                  </td>
                  <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
                    {new Date(lead.created_at).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })}
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <Link href={`/admin/leads/${lead.id}`} style={{
                      color: '#F5C518', fontSize: '0.78rem', fontWeight: 600,
                      textDecoration: 'none', whiteSpace: 'nowrap',
                    }}>View →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {total > 20 && (
          <div style={{ padding: '14px 20px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 8, justifyContent: 'center' }}>
            {Array.from({ length: Math.ceil(total / 20) }, (_, i) => i + 1).map(p => (
              <button key={p} onClick={() => setPage(p)} style={{
                width: 34, height: 34, borderRadius: 8, border: `1px solid ${p === page ? '#F5C518' : 'rgba(255,255,255,0.1)'}`,
                background: p === page ? 'rgba(245,197,24,0.12)' : 'transparent',
                color: p === page ? '#F5C518' : 'rgba(255,255,255,0.4)',
                cursor: 'pointer', fontSize: '0.82rem', fontWeight: p === page ? 700 : 400,
              }}>{p}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
