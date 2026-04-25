/* global React, Icon, Subsection, SampleCard, Grid, PropsTable, CodeBlock, K, S, T, C */
/* eslint-disable no-unused-vars */

// ============================================================
// Organism section scaffold
// ============================================================

const OrgSection = ({ num, id, name, desc, children }) => (
  <section id={id}>
    <header className="mb-6">
      <div className="label-caps mb-3">Organism {String(num).padStart(2, '0')}</div>
      <h2 className="text-[36px] font-bold tracking-[-0.02em] leading-[1.15] text-foreground mb-2">{name}</h2>
      <p className="text-[14px] text-muted-foreground max-w-[64ch]">{desc}</p>
    </header>
    <div className="space-y-8">{children}</div>
  </section>
);

// Hero at realistic scale — no fixed min-height cap, looser padding, flex-start alignment.
const OrgHero = ({ children, bleed = false }) => (
  <div
    className="atom-hero"
    style={{
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: bleed ? 0 : 32,
      minHeight: 'auto',
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
);

// CompositionRules: guideline list with check/cross icons
const CompositionRules = ({ do: doRules = [], dont: dontRules = [] }) => (
  <div className="comp-rules">
    {doRules.length > 0 && (
      <div className="comp-col">
        <div className="comp-head comp-do">
          <Icon name="check" size={13} stroke={2.25} />
          <span>Do</span>
        </div>
        <ul className="comp-list">
          {doRules.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>
    )}
    {dontRules.length > 0 && (
      <div className="comp-col">
        <div className="comp-head comp-dont">
          <Icon name="x" size={13} stroke={2.25} />
          <span>Don't</span>
        </div>
        <ul className="comp-list">
          {dontRules.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>
    )}
  </div>
);

// Shortcut: reuse Anatomy from molecules (exported to window there)
const OrgAnatomy = window.Anatomy;

Object.assign(window, { OrgSection, OrgHero, CompositionRules, OrgAnatomy });
