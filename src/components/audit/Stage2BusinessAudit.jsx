'use client';
import { useState } from 'react';

const BIZ_TYPES   = ['Product-Based Business','Service-Based Business','Agency','Manufacturing','Retail','D2C Brand','SaaS / Technology','E-commerce','Consulting','Education / Coaching','Healthcare','Real Estate','Other'];
const INDUSTRIES  = ['Marketing & Advertising','IT & Software','Finance','Healthcare','Education','Retail','Fashion','Manufacturing','Construction','Hospitality','Logistics','E-commerce','Food & Beverage','Real Estate','Consulting','Other'];
const BIZ_STAGES  = ['Idea Stage','Early Startup','Revenue Generating','Growing Business','Scaling Business','Established Company'];
const DURATIONS   = ['Less than 6 months','6 months – 1 year','1 – 3 years','3 – 5 years','5 – 10 years','10+ years'];
const TEAM_SIZES  = ['Solo Founder','2 – 5 Employees','6 – 20 Employees','21 – 50 Employees','50+ Employees'];
const CUR_REV     = ['Pre-Revenue','Below ₹1 Lakh','₹1L – ₹5L','₹5L – ₹20L','₹20L – ₹50L','₹50L+'];
const TGT_REV     = ['₹5L','₹10L','₹20L','₹50L','₹1Cr+','₹5Cr+'];
const GOALS       = ['Increase Revenue','Generate More Leads','Build Better Systems','Improve Profitability','Expand Team','Build Brand Authority','Expand to New Markets','Improve Operations','Raise Investment','Automate Processes'];
const CHALLENGES  = ['Inconsistent Leads','Low Sales Conversion','Weak Branding','Operational Chaos','Founder Dependency','Team Management','Poor Systems','Scaling Issues','Low Profit Margins','Customer Retention','Lack of Strategy','Marketing Performance'];
const SOURCES     = ['Referrals','Instagram','Facebook','Google Ads','SEO','WhatsApp','LinkedIn','Cold Calling','Repeat Customers','Marketplace Platforms','Offline Marketing'];
const CRM_OPTS    = ['Fully implemented','Partially implemented','Basic spreadsheets only','No structured systems'];
const SALES_OPTS  = ['Fully structured','Somewhat structured','Mostly manual','No proper process'];
const FOUNDER_DEP = ['Business depends fully on me','Team handles some operations','Mostly delegated','Runs independently'];

const SUB_CONFIG = [
  { icon: '🏢', title: 'Business Profile', sub: 'Tell us about your business identity and market position' },
  { icon: '📊', title: 'Revenue & Growth', sub: 'Share your financial targets and key business goals' },
  { icon: '⚙️', title: 'Operations & Systems', sub: 'Help us understand how your business runs day-to-day' },
];

function Field({ label, children, error, required }) {
  return (
    <div className="audit-field">
      <label className="audit-label">{label}{required && ' *'}</label>
      {children}
      {error && <p className="audit-error">⚠ {error}</p>}
    </div>
  );
}

function Select({ value, onChange, options, placeholder }) {
  return (
    <select className="audit-input" value={value} onChange={e => onChange(e.target.value)} style={{ color: value ? '#fff' : 'rgba(255,255,255,0.25)' }}>
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map(o => <option key={o} value={o} style={{ background: '#0D0D1E' }}>{o}</option>)}
    </select>
  );
}

function Radio({ options, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {options.map(o => {
        const on = value === o;
        return (
          <label key={o} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '12px 16px', borderRadius: 12,
            border: `1.5px solid ${on ? 'rgba(245,197,24,0.5)' : 'rgba(255,255,255,0.07)'}`,
            background: on ? 'rgba(245,197,24,0.08)' : 'rgba(255,255,255,0.015)',
            cursor: 'pointer', transition: 'all 0.2s ease',
            boxShadow: on ? '0 4px 20px rgba(245,197,24,0.08)' : 'none',
          }}
            onMouseEnter={e => { if (!on) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}}
            onMouseLeave={e => { if (!on) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}}
          >
            <div style={{
              width: 20, height: 20, borderRadius: '50%',
              border: `2px solid ${on ? '#F5C518' : 'rgba(255,255,255,0.2)'}`,
              background: on ? '#F5C518' : 'transparent',
              flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s ease',
              boxShadow: on ? '0 0 12px rgba(245,197,24,0.3)' : 'none',
            }}>
              {on && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#000' }} />}
            </div>
            <input type="radio" value={o} checked={on} onChange={() => onChange(o)} style={{ display: 'none' }} />
            <span style={{
              color: on ? '#fff' : 'rgba(255,255,255,0.55)',
              fontSize: '0.88rem', fontWeight: on ? 600 : 400,
              transition: 'color 0.2s',
            }}>{o}</span>
          </label>
        );
      })}
    </div>
  );
}

function MultiSelect({ options, value, onChange }) {
  const toggle = (o) => onChange(value.includes(o) ? value.filter(x => x !== o) : [...value, o]);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {options.map(o => {
        const on = value.includes(o);
        return (
          <button key={o} type="button" onClick={() => toggle(o)} style={{
            padding: '8px 16px', borderRadius: 22, fontSize: '0.82rem', fontWeight: on ? 700 : 400,
            border: `1.5px solid ${on ? '#F5C518' : 'rgba(255,255,255,0.1)'}`,
            background: on ? 'rgba(245,197,24,0.12)' : 'rgba(255,255,255,0.02)',
            color: on ? '#F5C518' : 'rgba(255,255,255,0.5)', cursor: 'pointer',
            transition: 'all 0.18s ease',
            boxShadow: on ? '0 2px 12px rgba(245,197,24,0.1)' : 'none',
          }}
            onMouseEnter={e => { if (!on) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}}
            onMouseLeave={e => { if (!on) { e.currentTarget.style.borderColor = on ? '#F5C518' : 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = on ? 'rgba(245,197,24,0.12)' : 'rgba(255,255,255,0.02)'; }}}
          >
            {on && '✓ '}{o}
          </button>
        );
      })}
    </div>
  );
}

// Sub-steps within Stage 2
const SUB_STEP_FIELDS = [
  ['businessType','industry','description','stage','operatingSince'],
  ['teamSize','currentRevenue','targetRevenue','growthGoals','challenges'],
  ['customerSources','crmUsage','salesProcess','founderDependency','operationalBottleneck','whyNotGrowing'],
];

export default function Stage2BusinessAudit({ onDone, onBack, initialData }) {
  const [sub, setSub] = useState(0);
  const [form, setForm] = useState({
    businessType: '', industry: '', description: '', stage: '', operatingSince: '',
    teamSize: '', currentRevenue: '', targetRevenue: '', growthGoals: [], challenges: [],
    customerSources: [], crmUsage: '', salesProcess: '', founderDependency: '',
    operationalBottleneck: '', whyNotGrowing: '',
    ...initialData,
  });
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validateSub = () => {
    const e = {};
    if (sub === 0) {
      if (!form.businessType)    e.businessType    = 'Required';
      if (!form.industry)        e.industry        = 'Required';
      if (!form.stage)           e.stage           = 'Required';
      if (!form.operatingSince)  e.operatingSince  = 'Required';
    }
    if (sub === 1) {
      if (!form.teamSize)        e.teamSize        = 'Required';
      if (!form.currentRevenue)  e.currentRevenue  = 'Required';
      if (!form.targetRevenue)   e.targetRevenue   = 'Required';
      if (!form.growthGoals.length) e.growthGoals  = 'Select at least one goal';
    }
    if (sub === 2) {
      if (!form.crmUsage)        e.crmUsage        = 'Required';
      if (!form.salesProcess)    e.salesProcess    = 'Required';
      if (!form.founderDependency) e.founderDependency = 'Required';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (!validateSub()) return;
    if (sub < 2) setSub(s => s + 1);
    else onDone(form);
  };

  const config = SUB_CONFIG[sub];

  return (
    <div className="audit-card" style={{ maxWidth: 720 }}>
      {/* Sub-step header */}
      <div style={{ marginBottom: 24 }}>
        {/* Stage badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 12px 4px 8px', borderRadius: 20,
          background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.2)',
          marginBottom: 14,
        }}>
          <span style={{ fontSize: '0.7rem' }}>{config.icon}</span>
          <span style={{ fontSize: '0.7rem', color: '#F5C518', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Stage 2 · {config.title}
          </span>
        </div>

        <h2 className="audit-section-title">Business Growth Audit</h2>
        <p className="audit-section-sub">{config.sub}</p>

        {/* Sub-progress with labels */}
        <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
          {SUB_CONFIG.map((s, i) => (
            <div key={s.title} style={{
              flex: 1, display: 'flex', flexDirection: 'column', gap: 6,
            }}>
              <div style={{
                height: 4, borderRadius: 3,
                background: i <= sub
                  ? 'linear-gradient(90deg, #F5C518, #f0bb00)'
                  : 'rgba(255,255,255,0.06)',
                transition: 'background 0.4s ease',
                boxShadow: i <= sub ? '0 1px 8px rgba(245,197,24,0.2)' : 'none',
              }} />
              <span style={{
                fontSize: '0.62rem', fontWeight: i === sub ? 700 : 400,
                color: i <= sub ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
                textAlign: 'center', transition: 'color 0.3s',
              }}>{s.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.15), transparent)', marginBottom: 22 }} />

      {/* SUB 0 — Business Profile */}
      {sub === 0 && (<>
        <div className="audit-row">
          <Field label="What best describes your business?" required error={errors.businessType}>
            <Select value={form.businessType} onChange={v => set('businessType', v)} options={BIZ_TYPES} placeholder="Select business type" />
          </Field>
          <Field label="Industry Category" required error={errors.industry}>
            <Select value={form.industry} onChange={v => set('industry', v)} options={INDUSTRIES} placeholder="Select industry" />
          </Field>
        </div>
        <Field label="Describe your business">
          <textarea className="audit-input" rows={3} value={form.description} onChange={e => set('description', e.target.value)} placeholder="Brief description of what you do, who you serve, and your unique value..." style={{ resize: 'vertical' }} />
        </Field>
        <div className="audit-row">
          <Field label="Business Stage" required error={errors.stage}>
            <Select value={form.stage} onChange={v => set('stage', v)} options={BIZ_STAGES} placeholder="Select stage" />
          </Field>
          <Field label="How long have you been operating?" required error={errors.operatingSince}>
            <Select value={form.operatingSince} onChange={v => set('operatingSince', v)} options={DURATIONS} placeholder="Select duration" />
          </Field>
        </div>
      </>)}

      {/* SUB 1 — Team & Revenue */}
      {sub === 1 && (<>
        <div className="audit-row">
          <Field label="Current Team Size" required error={errors.teamSize}>
            <Select value={form.teamSize} onChange={v => set('teamSize', v)} options={TEAM_SIZES} placeholder="Select team size" />
          </Field>
          <Field label="Target Monthly Revenue (Next 12 Months)" required error={errors.targetRevenue}>
            <Select value={form.targetRevenue} onChange={v => set('targetRevenue', v)} options={TGT_REV} placeholder="Select target" />
          </Field>
        </div>
        <Field label="Current Monthly Revenue" required error={errors.currentRevenue}>
          <Radio options={CUR_REV} value={form.currentRevenue} onChange={v => set('currentRevenue', v)} />
        </Field>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)', margin: '8px 0 20px' }} />

        <Field label="Primary Growth Goals (Select all that apply)" error={errors.growthGoals}>
          <MultiSelect options={GOALS} value={form.growthGoals} onChange={v => set('growthGoals', v)} />
        </Field>
        <Field label="Biggest Business Challenges (Select all that apply)">
          <MultiSelect options={CHALLENGES} value={form.challenges} onChange={v => set('challenges', v)} />
        </Field>
      </>)}

      {/* SUB 2 — Challenges & Systems */}
      {sub === 2 && (<>
        <Field label="Where do most customers come from? (Select all)">
          <MultiSelect options={SOURCES} value={form.customerSources} onChange={v => set('customerSources', v)} />
        </Field>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)', margin: '8px 0 20px' }} />

        <div className="audit-row">
          <Field label="Do you use any CRM or business systems?" required error={errors.crmUsage}>
            <Radio options={CRM_OPTS} value={form.crmUsage} onChange={v => set('crmUsage', v)} />
          </Field>
          <Field label="How structured is your sales process?" required error={errors.salesProcess}>
            <Radio options={SALES_OPTS} value={form.salesProcess} onChange={v => set('salesProcess', v)} />
          </Field>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)', margin: '8px 0 20px' }} />

        <Field label="How dependent is the business on the founder?" required error={errors.founderDependency}>
          <Radio options={FOUNDER_DEP} value={form.founderDependency} onChange={v => set('founderDependency', v)} />
        </Field>
        <Field label="Biggest operational bottleneck">
          <textarea className="audit-input" rows={2} value={form.operationalBottleneck} onChange={e => set('operationalBottleneck', e.target.value)} placeholder="Describe the main thing that slows your operations..." style={{ resize: 'vertical' }} />
        </Field>
        <Field label="Why do you believe your business is not growing faster?">
          <textarea className="audit-input" rows={3} value={form.whyNotGrowing} onChange={e => set('whyNotGrowing', e.target.value)} placeholder="Be honest — what's truly holding the business back?..." style={{ resize: 'vertical' }} />
        </Field>
      </>)}

      {/* Nav */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', marginTop: 28, alignItems: 'center',
        paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <button className="audit-btn-secondary" onClick={sub === 0 ? onBack : () => setSub(s => s - 1)}>
          <i className="fas fa-arrow-left" style={{ fontSize: '0.8rem' }} /> Back
        </button>
        <button className="audit-btn-primary" onClick={handleNext}>
          {sub < 2 ? <>Next Section <i className="fas fa-arrow-right" style={{ fontSize: '0.85rem' }} /></> : <>Proceed to Diagnosis <i className="fas fa-arrow-right" style={{ fontSize: '0.85rem' }} /></>}
        </button>
      </div>
    </div>
  );
}
