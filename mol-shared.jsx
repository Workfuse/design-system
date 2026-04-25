/* global React, Icon, AtomSection, Subsection, SampleCard, Grid, PropsTable, CodeBlock, K, S, T, C */
/* eslint-disable no-unused-vars */

// ============================================================
// Molecule section scaffold (mirrors AtomSection, adds Anatomy)
// ============================================================

const MolSection = ({ num, id, name, desc, children }) => (
  <section id={id}>
    <header className="mb-6">
      <div className="label-caps mb-3">Molecule {String(num).padStart(2, '0')}</div>
      <h2 className="text-[36px] font-bold tracking-[-0.02em] leading-[1.15] text-foreground mb-2">{name}</h2>
      <p className="text-[14px] text-muted-foreground max-w-[64ch]">{desc}</p>
    </header>
    <div className="space-y-8">{children}</div>
  </section>
);

const MolHero = ({ children, compact = false }) => (
  <div
    className="atom-hero"
    style={compact ? { minHeight: '140px', padding: '28px' } : undefined}
  >
    {children}
  </div>
);

// Anatomy diagram: a block showing atom composition
// parts: [{label, role?, required?}]
// formula: optional string like "FormField = Label + Input + HelpText"
const Anatomy = ({ formula, parts }) => (
  <div className="anatomy">
    {formula && (
      <div className="mono text-[12.5px] mb-4" style={{ color: 'var(--foreground)' }}>
        {formula}
      </div>
    )}
    <div className="flex flex-wrap gap-2">
      {parts.map(p => (
        <span key={p.label} className="anatomy-label">
          <span className="anatomy-dot" />
          {p.label}
          {p.role && <span style={{ color: 'var(--muted-foreground)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}> · {p.role}</span>}
          {p.required && <span style={{ color: 'var(--destructive)' }}>*</span>}
        </span>
      ))}
    </div>
  </div>
);

// Usage row: present 2-3 contextual examples side by side
const UsageRow = ({ cols = 2, children }) => (
  <div className={`usage-row ${cols === 3 ? 'three' : 'two'}`}>{children}</div>
);

const UsageCard = ({ label, children }) => (
  <div className="mol-card">
    {label && (
      <div className="mb-3 text-[10.5px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
        {label}
      </div>
    )}
    <div>{children}</div>
  </div>
);

Object.assign(window, { MolSection, MolHero, Anatomy, UsageRow, UsageCard });
