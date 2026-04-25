/* global React */
/* eslint-disable no-unused-vars */

// ============================================================
// Shared atom scaffolding
// ============================================================

const AtomSection = ({ num, id, name, desc, children }) => (
  <section id={id}>
    <header className="mb-6">
      <div className="label-caps mb-3">Atom {String(num).padStart(2, '0')}</div>
      <h2 className="text-[36px] font-bold tracking-[-0.02em] leading-[1.15] text-foreground mb-2">{name}</h2>
      <p className="text-[14px] text-muted-foreground max-w-[64ch]">{desc}</p>
    </header>
    <div className="space-y-8">{children}</div>
  </section>
);

const Subsection = ({ title, children }) => (
  <div>
    <div className="atom-sub-title">{title}</div>
    {children}
  </div>
);

const SampleCard = ({ label, children, className = '' }) => (
  <div className={`atom-card flex flex-col ${className}`}>
    {label && (
      <div className="mb-4 text-[10.5px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
        {label}
      </div>
    )}
    <div className="flex-1 flex items-center justify-center min-h-[72px]">
      {children}
    </div>
  </div>
);

const Hero = ({ children }) => (
  <div className="atom-hero">{children}</div>
);

const Grid = ({ cols = 4, children }) => {
  const c = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-2 lg:grid-cols-4' }[cols] || 'md:grid-cols-4';
  return <div className={`grid grid-cols-1 ${c} gap-3`}>{children}</div>;
};

const PropsTable = ({ rows }) => (
  <div className="overflow-x-auto">
    <table className="props-table">
      <thead>
        <tr>
          <th style={{ width: '22%' }}>Prop</th>
          <th style={{ width: '28%' }}>Type</th>
          <th style={{ width: '20%' }}>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([p, t, d, desc]) => (
          <tr key={p}>
            <td className="mono-cell">{p}</td>
            <td className="type-cell">{t}</td>
            <td className="type-cell">{d || '—'}</td>
            <td>{desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Tokenized code block. We pre-split the snippet into tokens so colors survive the Babel transform.
const CodeBlock = ({ lines }) => (
  <pre className="code-block">{lines.map((tokens, i) => (
    <div key={i}>
      {tokens.map((t, j) => {
        if (typeof t === 'string') return <span key={j}>{t}</span>;
        return <span key={j} className={`tok-${t.k}`}>{t.v}</span>;
      })}
    </div>
  ))}</pre>
);

// shortcut token makers
const K = v => ({ k: 'key', v });
const S = v => ({ k: 'str', v });
const T = v => ({ k: 'tag', v });
const C = v => ({ k: 'cmt', v });

Object.assign(window, { AtomSection, Subsection, SampleCard, Hero, Grid, PropsTable, CodeBlock, K, S, T, C });
