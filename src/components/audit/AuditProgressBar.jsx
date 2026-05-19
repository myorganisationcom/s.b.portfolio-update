export default function AuditProgressBar({ currentStage, stages }) {
  return (
    <div style={{ padding: '16px 32px', background: 'rgba(10,10,20,0.6)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, maxWidth: 680, margin: '0 auto' }}>
        {stages.map((label, i) => {
          const num    = i + 1;
          const active = num === currentStage;
          const done   = num < currentStage;
          const color  = done ? '#F5C518' : active ? '#F5C518' : 'rgba(255,255,255,0.15)';
          const textC  = done || active ? '#fff' : 'rgba(255,255,255,0.3)';
          return (
            <div key={label} style={{ display: 'flex', alignItems: 'center', flex: num < stages.length ? 1 : 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, flexShrink: 0 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: done ? '#F5C518' : active ? 'rgba(245,197,24,0.15)' : 'rgba(255,255,255,0.05)',
                  border: `2px solid ${color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', fontWeight: 700, color: done ? '#000' : color,
                  transition: 'all 0.3s',
                }}>
                  {done ? '✓' : num}
                </div>
                <span style={{ fontSize: '0.65rem', color: textC, fontWeight: active ? 600 : 400, whiteSpace: 'nowrap', transition: 'color 0.3s' }}>
                  {label}
                </span>
              </div>
              {num < stages.length && (
                <div style={{ flex: 1, height: 2, background: done ? '#F5C518' : 'rgba(255,255,255,0.08)', margin: '0 8px', marginTop: -14, transition: 'background 0.4s' }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
