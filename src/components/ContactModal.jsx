'use client';

import React, { useState, useEffect } from 'react';
import { useLeadModal } from './LeadModalContext';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d\s\-()\[\]]{7,20}$/;

export default function ContactModal() {
  const { activeModal, closeModal, proceedToDiagnosis } = useLeadModal();
  const isOpen = activeModal === 'contact';

  const [form, setForm]     = useState({ name: '', organisation: '', designation: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [animIn, setAnimIn] = useState(false);

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setForm({ name: '', organisation: '', designation: '', email: '', phone: '' });
      setErrors({});
      setAnimIn(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())         e.name  = 'Name is required';
    if (!form.email.trim())        e.email = 'Email is required';
    else if (!EMAIL_RE.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.phone.trim())        e.phone = 'Phone / WhatsApp is required';
    else if (!PHONE_RE.test(form.phone)) e.phone = 'Enter a valid phone number';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleContinue = () => {
    if (!validate()) return;
    // Slide out, then hand off contact data and open diagnosis popup
    setAnimIn(false);
    setTimeout(() => proceedToDiagnosis({ ...form }), 250);
  };

  return (
    <div
      className="lcm-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
    >
      <div className={`lcm-container ${animIn ? 'lcm-fade-in' : 'lcm-fade-out'}`}
           style={{ maxWidth: 560 }}>
        {/* Close */}
        <button className="lcm-close" onClick={closeModal} aria-label="Close">
          <i className="fas fa-times" />
        </button>

        {/* Header */}
        <div className="lcm-section-header" style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.4rem,3vw,1.9rem)', marginBottom: 8 }}>
            Tell Us About <span className="text-gold">Yourself</span>
          </h2>
          <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.92rem' }}>
            We'll personalise your free strategy call based on your details.
          </p>
        </div>

        {/* Form */}
        <div className="lcm-form-grid">
          {/* Name */}
          <div className="lcm-field">
            <label>Full Name <span className="text-gold">*</span></label>
            <input className={`premium-input${errors.name ? ' lcm-input-error' : ''}`}
                   placeholder="Your full name" value={form.name} onChange={set('name')} autoFocus />
            {errors.name && <span className="lcm-error">{errors.name}</span>}
          </div>

          {/* Organisation */}
          <div className="lcm-field">
            <label>Organisation</label>
            <input className="premium-input" placeholder="Company / business name"
                   value={form.organisation} onChange={set('organisation')} />
          </div>

          {/* Designation */}
          <div className="lcm-field">
            <label>Designation</label>
            <input className="premium-input" placeholder="Your role / title"
                   value={form.designation} onChange={set('designation')} />
          </div>

          {/* Email */}
          <div className="lcm-field">
            <label>Email <span className="text-gold">*</span></label>
            <input type="email"
                   className={`premium-input${errors.email ? ' lcm-input-error' : ''}`}
                   placeholder="you@example.com" value={form.email} onChange={set('email')} />
            {errors.email && <span className="lcm-error">{errors.email}</span>}
          </div>

          {/* Phone — full width */}
          <div className="lcm-field lcm-field-full">
            <label>Contact / WhatsApp <span className="text-gold">*</span></label>
            <input type="tel"
                   className={`premium-input${errors.phone ? ' lcm-input-error' : ''}`}
                   placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set('phone')} />
            {errors.phone && <span className="lcm-error">{errors.phone}</span>}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn-primary" onClick={handleContinue}
                  style={{ padding: '13px 36px', fontSize: '1rem', letterSpacing: '0.3px' }}>
            Continue to Diagnosis &nbsp;<i className="fas fa-arrow-right" />
          </button>
        </div>

        <p style={{ textAlign: 'center', color: 'var(--clr-text-muted)', fontSize: '0.78rem', marginTop: 16 }}>
          🔒 Your information is private and will never be shared.
        </p>
      </div>
    </div>
  );
}
