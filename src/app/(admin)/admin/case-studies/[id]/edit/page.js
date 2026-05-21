'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

const inputStyle = {
  width: '100%', padding: '10px 14px',
  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px', color: '#E2E2F0', fontSize: '0.9rem', outline: 'none',
  boxSizing: 'border-box',
};

const labelStyle = {
  display: 'block', marginBottom: '6px', fontSize: '0.82rem', fontWeight: '600',
  color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px',
};

const sectionStyle = {
  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '12px', padding: '24px', marginBottom: '20px',
};

const sectionTitle = {
  fontSize: '0.95rem', fontWeight: 700, color: '#fff', margin: '0 0 18px 0',
  paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)',
};

function safeParse(val, fallback) {
  if (Array.isArray(val)) return val;
  if (!val) return fallback;
  try { return JSON.parse(val); } catch { return fallback; }
}

export default function EditCaseStudyPage() {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [industry, setIndustry] = useState('');
  const [duration, setDuration] = useState('');
  const [clientName, setClientName] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [introText, setIntroText] = useState('');
  const [challenges, setChallenges] = useState(['']);
  const [solutions, setSolutions] = useState(['']);
  const [results, setResults] = useState([{ metric: '', description: '' }]);
  const [quoteText, setQuoteText] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState('Draft');

  useEffect(() => {
    if (!id) return;
    fetch(`/api/admin/case-studies/${id}`)
      .then(r => r.json())
      .then(data => {
        if (data.success && data.caseStudy) {
          const cs = data.caseStudy;
          setTitle(cs.title || '');
          setSlug(cs.slug || '');
          setIndustry(cs.industry || '');
          setDuration(cs.duration || '');
          setClientName(cs.client_name || '');
          setFeaturedImage(cs.featured_image || '');
          setIntroText(cs.intro_text || '');
          const ch = safeParse(cs.challenges, ['']);
          setChallenges(ch.length ? ch : ['']);
          const sl = safeParse(cs.solutions, ['']);
          setSolutions(sl.length ? sl : ['']);
          const rs = safeParse(cs.results, [{ metric: '', description: '' }]);
          setResults(rs.length ? rs : [{ metric: '', description: '' }]);
          setQuoteText(cs.quote_text || '');
          setQuoteAuthor(cs.quote_author || '');
          setTags(cs.tags || '');
          setStatus(cs.status || 'Draft');
        } else {
          setError('Case study not found');
        }
      })
      .catch(() => setError('Failed to load case study'))
      .finally(() => setLoading(false));
  }, [id]);

  const generateSlug = (val) =>
    val.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

  const handleTitleBlur = () => {
    if (!slug) setSlug(generateSlug(title));
  };

  const updateListItem = (setter, idx, val) =>
    setter(prev => prev.map((item, i) => i === idx ? val : item));
  const addListItem = (setter, empty) =>
    setter(prev => [...prev, empty]);
  const removeListItem = (setter, idx) =>
    setter(prev => prev.length > 1 ? prev.filter((_, i) => i !== idx) : prev);

  const updateResult = (idx, field, val) =>
    setResults(prev => prev.map((r, i) => i === idx ? { ...r, [field]: val } : r));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) { setError('Title is required'); return; }
    setSaving(true);
    setError('');

    const body = {
      title: title.trim(),
      slug: slug.trim() || generateSlug(title),
      industry: industry.trim(),
      duration: duration.trim(),
      client_name: clientName.trim(),
      featured_image: featuredImage.trim(),
      intro_text: introText.trim(),
      challenges: JSON.stringify(challenges.filter(c => c.trim())),
      solutions: JSON.stringify(solutions.filter(s => s.trim())),
      results: JSON.stringify(results.filter(r => r.metric.trim() || r.description.trim())),
      quote_text: quoteText.trim(),
      quote_author: quoteAuthor.trim(),
      tags: tags.trim(),
      status,
    };

    try {
      const res = await fetch(`/api/admin/case-studies/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.success) {
        router.push('/admin/case-studies');
      } else {
        setError(data.error || 'Failed to update case study');
      }
    } catch {
      setError('Network error — please try again.');
    }
    setSaving(false);
  };

  if (loading) return (
    <div style={{ color: 'rgba(255,255,255,0.4)', padding: 40, textAlign: 'center' }}>Loading case study…</div>
  );

  return (
    <div style={{ maxWidth: 820, margin: '0 auto' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div>
          <button
            onClick={() => router.push('/admin/case-studies')}
            style={{
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
              cursor: 'pointer', fontSize: '0.82rem', padding: 0, marginBottom: 8,
            }}
          >
            <i className="fas fa-arrow-left" style={{ marginRight: 6 }} />
            Back to Case Studies
          </button>
          <h2 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>Edit Case Study</h2>
        </div>
        {slug && (
          <button
            onClick={() => window.open(`/case-studies/${slug}`, '_blank')}
            style={{
              padding: '8px 18px', borderRadius: 8,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600,
            }}
          >
            <i className="fas fa-external-link-alt" style={{ marginRight: 6 }} />
            Preview
          </button>
        )}
      </div>

      {error && (
        <div style={{
          background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
          borderRadius: 8, padding: '12px 16px', marginBottom: 20,
          color: '#ef4444', fontSize: '0.85rem',
        }}>{error}</div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Basic Info */}
        <div style={sectionStyle}>
          <h3 style={sectionTitle}>Basic Info</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Title *</label>
              <input style={inputStyle} value={title} onChange={e => setTitle(e.target.value)}
                onBlur={handleTitleBlur} placeholder="e.g. How We Grew Revenue 3x for XYZ" required />
            </div>
            <div>
              <label style={labelStyle}>SEO Slug</label>
              <input style={inputStyle} value={slug} onChange={e => setSlug(e.target.value)}
                placeholder="auto-generated-from-title" />
            </div>
            <div>
              <label style={labelStyle}>Industry</label>
              <input style={inputStyle} value={industry} onChange={e => setIndustry(e.target.value)}
                placeholder="e.g. SaaS, E-commerce" />
            </div>
            <div>
              <label style={labelStyle}>Duration</label>
              <input style={inputStyle} value={duration} onChange={e => setDuration(e.target.value)}
                placeholder="e.g. 6-month engagement" />
            </div>
            <div>
              <label style={labelStyle}>Client Name</label>
              <input style={inputStyle} value={clientName} onChange={e => setClientName(e.target.value)}
                placeholder="Optional" />
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div style={sectionStyle}>
          <h3 style={sectionTitle}>Featured Image</h3>
          <label style={labelStyle}>Image URL</label>
          <input style={inputStyle} value={featuredImage} onChange={e => setFeaturedImage(e.target.value)}
            placeholder="https://..." />
          {featuredImage && (
            <div style={{ marginTop: 12 }}>
              <img
                src={featuredImage}
                alt="Preview"
                style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}
                onError={e => e.currentTarget.style.display = 'none'}
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div style={sectionStyle}>
          <h3 style={sectionTitle}>Content</h3>
          <label style={labelStyle}>Intro Text</label>
          <textarea style={{ ...inputStyle, resize: 'vertical' }} rows={4} value={introText}
            onChange={e => setIntroText(e.target.value)} placeholder="Brief introduction..." />
        </div>

        {/* Challenges */}
        <div style={sectionStyle}>
          <h3 style={sectionTitle}>Challenges</h3>
          {challenges.map((c, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
              <input style={{ ...inputStyle, flex: 1 }} value={c}
                onChange={e => updateListItem(setChallenges, i, e.target.value)}
                placeholder={`Challenge ${i + 1}`} />
              {challenges.length > 1 && (
                <button type="button" onClick={() => removeListItem(setChallenges, i)} style={{
                  background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
                  borderRadius: 8, color: '#ef4444', cursor: 'pointer', padding: '0 12px',
                  fontSize: '1rem', flexShrink: 0,
                }}>×</button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => addListItem(setChallenges, '')} style={{
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8, color: 'rgba(255,255,255,0.5)', cursor: 'pointer',
            padding: '8px 16px', fontSize: '0.82rem',
          }}>
            <i className="fas fa-plus" style={{ marginRight: 6 }} />Add Challenge
          </button>
        </div>

        {/* Solutions */}
        <div style={sectionStyle}>
          <h3 style={sectionTitle}>Solutions</h3>
          {solutions.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
              <input style={{ ...inputStyle, flex: 1 }} value={s}
                onChange={e => updateListItem(setSolutions, i, e.target.value)}
                placeholder={`Solution ${i + 1}`} />
              {solutions.length > 1 && (
                <button type="button" onClick={() => removeListItem(setSolutions, i)} style={{
                  background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
                  borderRadius: 8, color: '#ef4444', cursor: 'pointer', padding: '0 12px',
                  fontSize: '1rem', flexShrink: 0,
                }}>×</button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => addListItem(setSolutions, '')} style={{
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8, color: 'rgba(255,255,255,0.5)', cursor: 'pointer',
            padding: '8px 16px', fontSize: '0.82rem',
          }}>
            <i className="fas fa-plus" style={{ marginRight: 6 }} />Add Solution
          </button>
        </div>

        {/* Results */}
        <div style={sectionStyle}>
          <h3 style={sectionTitle}>Results</h3>
          {results.map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
              <input style={{ ...inputStyle, flex: '0 0 200px' }} value={r.metric}
                onChange={e => updateResult(i, 'metric', e.target.value)}
                placeholder="₹65K → ₹1.8L" />
              <input style={{ ...inputStyle, flex: 1 }} value={r.description}
                onChange={e => updateResult(i, 'description', e.target.value)}
                placeholder="Monthly revenue in 14 months" />
              {results.length > 1 && (
                <button type="button" onClick={() => removeListItem(setResults, i)} style={{
                  background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
                  borderRadius: 8, color: '#ef4444', cursor: 'pointer', padding: '0 12px',
                  fontSize: '1rem', flexShrink: 0,
                }}>×</button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => addListItem(setResults, { metric: '', description: '' })} style={{
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8, color: 'rgba(255,255,255,0.5)', cursor: 'pointer',
            padding: '8px 16px', fontSize: '0.82rem',
          }}>
            <i className="fas fa-plus" style={{ marginRight: 6 }} />Add Result
          </button>
        </div>

        {/* Quote */}
        <div style={sectionStyle}>
          <h3 style={sectionTitle}>Quote</h3>
          <div style={{ marginBottom: 14 }}>
            <label style={labelStyle}>Quote Text</label>
            <textarea style={{ ...inputStyle, resize: 'vertical' }} rows={3} value={quoteText}
              onChange={e => setQuoteText(e.target.value)} placeholder="Client testimonial..." />
          </div>
          <div>
            <label style={labelStyle}>Quote Author</label>
            <input style={inputStyle} value={quoteAuthor} onChange={e => setQuoteAuthor(e.target.value)}
              placeholder="Name, Title" />
          </div>
        </div>

        {/* Tags & Status */}
        <div style={sectionStyle}>
          <h3 style={sectionTitle}>Tags &amp; Status</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={labelStyle}>Tags (comma-separated)</label>
              <input style={inputStyle} value={tags} onChange={e => setTags(e.target.value)}
                placeholder="SEO, Growth, SaaS" />
            </div>
            <div>
              <label style={labelStyle}>Status</label>
              <select style={{ ...inputStyle, cursor: 'pointer' }} value={status}
                onChange={e => setStatus(e.target.value)}>
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
          <button
            type="button"
            onClick={() => router.push('/admin/case-studies')}
            style={{
              padding: '12px 24px', borderRadius: 8,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 600,
            }}
          >Cancel</button>
          <button
            type="submit"
            disabled={saving}
            style={{
              padding: '12px 30px', borderRadius: 8,
              background: '#F5C518', color: '#000', border: 'none',
              cursor: saving ? 'wait' : 'pointer', fontSize: '0.88rem', fontWeight: 700,
              opacity: saving ? 0.6 : 1, transition: 'opacity 0.15s',
            }}
          >
            {saving ? 'Updating…' : 'Update Case Study'}
          </button>
        </div>
      </form>
    </div>
  );
}
