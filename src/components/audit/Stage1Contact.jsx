'use client';
import { useState } from 'react';

const DESIGNATIONS = ['Founder','Co-Founder','CEO','Director','Business Owner','Partner','Operations Head','Sales Head','Marketing Head','Other'];

function Field({ label, children, error }) {
  return (
    <div className="audit-field">
      <label className="audit-label">{label}</label>
      {children}
      {error && <p className="audit-error">⚠ {error}</p>}
    </div>
  );
}

export default function Stage1Contact({ onDone }) {
  const [form, setForm] = useState({ name:'', designation:'', organisation:'', email:'', phone:'', whatsapp:'', city:'', website:'' });
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())         e.name         = 'Full name is required';
    if (!form.designation)         e.designation   = 'Please select your designation';
    if (!form.organisation.trim()) e.organisation  = 'Organisation name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required';
    if (!form.phone.trim() || !/^\+?[\d\s\-()]{7,15}$/.test(form.phone))      e.phone = 'Valid phone number is required';
    if (!form.city.trim())         e.city          = 'City / State is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validate()) onDone(form); };

  const inputStyle = { className: 'audit-input' };

  return (
    <div className="audit-card">
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: '0.72rem', color: '#F5C518', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Stage 1 of 3</p>
        <h2 className="audit-section-title">Business Owner Information</h2>
        <p className="audit-section-sub">Tell us about yourself and your business. All information is kept strictly confidential.</p>
      </div>

      <div className="audit-row">
        <Field label="Full Name *" error={errors.name}>
          <input {...inputStyle} value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your full name" />
        </Field>
        <Field label="Designation / Role *" error={errors.designation}>
          <select className="audit-input" value={form.designation} onChange={e => set('designation', e.target.value)} style={{ color: form.designation ? '#fff' : 'rgba(255,255,255,0.25)' }}>
            <option value="" disabled>Select designation</option>
            {DESIGNATIONS.map(d => <option key={d} value={d} style={{ background: '#0D0D1E' }}>{d}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Organisation / Business Name *" error={errors.organisation}>
        <input {...inputStyle} value={form.organisation} onChange={e => set('organisation', e.target.value)} placeholder="Your company or business name" />
      </Field>

      <div className="audit-row">
        <Field label="Official Email Address *" error={errors.email}>
          <input {...inputStyle} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@company.com" />
        </Field>
        <Field label="Contact Number *" error={errors.phone}>
          <input {...inputStyle} type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 98765 43210" />
        </Field>
      </div>

      <div className="audit-row">
        <Field label="WhatsApp Number" error={errors.whatsapp}>
          <input {...inputStyle} type="tel" value={form.whatsapp} onChange={e => set('whatsapp', e.target.value)} placeholder="Same as contact or different" />
        </Field>
        <Field label="City / State *" error={errors.city}>
          <input {...inputStyle} value={form.city} onChange={e => set('city', e.target.value)} placeholder="Mumbai, Maharashtra" />
        </Field>
      </div>

      <Field label="Website or Social Media Link (Optional)">
        <input {...inputStyle} value={form.website} onChange={e => set('website', e.target.value)} placeholder="https://yourwebsite.com or @handle" />
      </Field>

      <div style={{ marginTop: 8, display: 'flex', justifyContent: 'flex-end' }}>
        <button className="audit-btn-primary" onClick={handleNext}>
          Continue to Business Audit <i className="fas fa-arrow-right" style={{ fontSize: '0.85rem' }} />
        </button>
      </div>

      <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.72rem', marginTop: 16 }}>
        🔒 Your information is encrypted and never shared with third parties
      </p>
    </div>
  );
}
