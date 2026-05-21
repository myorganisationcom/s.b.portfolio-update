'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function CaseStudiesPage() {
  const router = useRouter();
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/case-studies');
      const data = await res.json();
      if (data.success) setStudies(data.caseStudies || []);
    } catch (e) {
      console.error('Failed to load case studies', e);
    }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleDelete = async (id, title) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/case-studies/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setStudies(prev => prev.filter(s => s.id !== id));
      } else {
        alert(data.error || 'Failed to delete');
      }
    } catch {
      alert('Network error');
    }
    setDeleting(null);
  };

  const published = studies.filter(s => s.status === 'Published').length;
  const drafts = studies.filter(s => s.status === 'Draft').length;

  const truncate = (str, len = 60) =>
    str && str.length > len ? str.slice(0, len) + '…' : str || '';

  const formatDate = (d) => {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>Case Studies</h2>
        <button
          onClick={() => router.push('/admin/case-studies/new')}
          style={{
            padding: '10px 22px', borderRadius: 8, background: '#F5C518', color: '#000',
            border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <i className="fas fa-plus" style={{ marginRight: 8 }} />
          New Case Study
        </button>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 14, marginBottom: 24 }}>
        {[
          { label: 'Total', value: studies.length, color: '#6366f1', icon: 'fa-briefcase' },
          { label: 'Published', value: published, color: '#10b981', icon: 'fa-check-circle' },
          { label: 'Drafts', value: drafts, color: '#F5C518', icon: 'fa-pencil-alt' },
        ].map(s => (
          <div key={s.label} style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12, padding: '18px 16px', display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: `${s.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <i className={`fas ${s.icon}`} style={{ color: s.color, fontSize: '0.9rem' }} />
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {['Title', 'Industry', 'Status', 'Views', 'Created', ''].map(h => (
                  <th key={h} style={{
                    padding: '12px 16px', textAlign: 'left', color: 'rgba(255,255,255,0.4)',
                    fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase',
                    letterSpacing: '0.05em', whiteSpace: 'nowrap',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr><td colSpan={6} style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>Loading…</td></tr>
              )}
              {!loading && studies.length === 0 && (
                <tr><td colSpan={6} style={{ padding: '60px 20px', textAlign: 'center' }}>
                  <div style={{ color: 'rgba(255,255,255,0.25)', marginBottom: 12 }}>
                    <i className="fas fa-folder-open" style={{ fontSize: '2rem' }} />
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: 4 }}>No case studies yet</div>
                  <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem' }}>Click "New Case Study" to create one.</div>
                </td></tr>
              )}
              {studies.map(study => (
                <tr
                  key={study.id}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '14px 16px', maxWidth: 300 }}>
                    <div style={{ fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {truncate(study.title)}
                    </div>
                    {study.client_name && (
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{study.client_name}</div>
                    )}
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    {study.industry && (
                      <span style={{
                        background: 'rgba(99,102,241,0.12)', color: '#818cf8',
                        border: '1px solid rgba(99,102,241,0.25)',
                        padding: '3px 10px', borderRadius: 20, fontSize: '0.72rem', fontWeight: 600,
                        whiteSpace: 'nowrap',
                      }}>{study.industry}</span>
                    )}
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      background: study.status === 'Published' ? 'rgba(16,185,129,0.12)' : 'rgba(245,197,24,0.12)',
                      color: study.status === 'Published' ? '#10b981' : '#F5C518',
                      border: `1px solid ${study.status === 'Published' ? 'rgba(16,185,129,0.3)' : 'rgba(245,197,24,0.3)'}`,
                      padding: '3px 10px', borderRadius: 20, fontSize: '0.72rem', fontWeight: 600,
                    }}>{study.status || 'Draft'}</span>
                  </td>
                  <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
                    {study.views ?? 0}
                  </td>
                  <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
                    {formatDate(study.created_at)}
                  </td>
                  <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button
                        onClick={() => router.push(`/admin/case-studies/${study.id}/edit`)}
                        style={{
                          padding: '6px 14px', borderRadius: 6,
                          background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.25)',
                          color: '#F5C518', cursor: 'pointer', fontSize: '0.78rem', fontWeight: 600,
                          transition: 'all 0.15s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,197,24,0.2)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,197,24,0.1)'; }}
                      >Edit</button>
                      <button
                        onClick={() => handleDelete(study.id, study.title)}
                        disabled={deleting === study.id}
                        style={{
                          padding: '6px 14px', borderRadius: 6,
                          background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
                          color: '#ef4444', cursor: deleting === study.id ? 'wait' : 'pointer',
                          fontSize: '0.78rem', fontWeight: 600, transition: 'all 0.15s',
                          opacity: deleting === study.id ? 0.5 : 1,
                        }}
                        onMouseEnter={e => { if (deleting !== study.id) e.currentTarget.style.background = 'rgba(239,68,68,0.15)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.08)'; }}
                      >{deleting === study.id ? '…' : 'Delete'}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
