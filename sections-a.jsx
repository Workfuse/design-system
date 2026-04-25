/* global React */
/* eslint-disable no-unused-vars */

// ============================================================
// Shared helpers
// ============================================================

const Icon = ({ name, size = 16, stroke = 1.75, className = '', style = {} }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '';
    const node = window.lucide.createElement(window.lucide[toPascal(name)] || window.lucide.HelpCircle);
    node.setAttribute('width', size);
    node.setAttribute('height', size);
    node.setAttribute('stroke-width', stroke);
    ref.current.appendChild(node);
  }, [name, size, stroke]);
  return <span ref={ref} className={className} style={{ display: 'inline-flex', ...style }} />;
};
function toPascal(s) {
  return s.split('-').map(x => x[0].toUpperCase() + x.slice(1)).join('');
}

const SectionHeader = ({ num, title, subtitle, id }) => (
  <header className="mb-8">
    <div className="label-caps mb-3">Section {String(num).padStart(2, '0')}</div>
    <h2 className="text-[36px] font-bold tracking-[-0.02em] leading-[1.15] text-foreground mb-2">{title}</h2>
    <p className="text-[14px] text-muted-foreground max-w-[56ch]">{subtitle}</p>
  </header>
);

const TokenName = ({ children, className = '' }) => (
  <div className={`text-[12px] font-medium tracking-[0.02em] uppercase text-foreground ${className}`}>
    {children}
  </div>
);

// ============================================================
// Section 1 — Colors & Surfaces
// ============================================================

const LIGHT_COLORS = {
  SURFACES: [
    ['background',         'oklch(1 0 0)',              '#ffffff'],
    ['foreground',         'oklch(0.145 0 0)',          '#252525'],
    ['card',               'oklch(1 0 0)',              '#ffffff'],
    ['card-foreground',    'oklch(0.145 0 0)',          '#252525'],
    ['popover',            'oklch(1 0 0)',              '#ffffff'],
    ['popover-foreground', 'oklch(0.145 0 0)',          '#252525'],
  ],
  BRAND: [
    ['primary',            'oklch(0.546 0.245 262.881)', '#2563eb'],
    ['primary-foreground', 'oklch(0.985 0 0)',           '#fbfbfb'],
    ['ring',               'oklch(0.546 0.245 262.881)', '#2563eb'],
  ],
  NEUTRALS: [
    ['secondary',           'oklch(0.97 0 0)',   '#f5f5f5'],
    ['secondary-foreground','oklch(0.205 0 0)',  '#353535'],
    ['muted',               'oklch(0.97 0 0)',   '#f5f5f5'],
    ['muted-foreground',    'oklch(0.556 0 0)',  '#717171'],
    ['accent',              'oklch(0.97 0 0)',   '#f5f5f5'],
    ['accent-foreground',   'oklch(0.205 0 0)',  '#353535'],
  ],
  UTILITY: [
    ['destructive', 'oklch(0.577 0.245 27.325)', '#dc4433'],
    ['border',      'oklch(0.922 0 0)',           '#e5e5e5'],
    ['input',       'oklch(0.922 0 0)',           '#e5e5e5'],
  ],
};

const DARK_COLORS = {
  SURFACES: [
    ['background',         'oklch(0.145 0 0)', '#252525'],
    ['foreground',         'oklch(0.985 0 0)', '#fbfbfb'],
    ['card',               'oklch(0.205 0 0)', '#353535'],
    ['card-foreground',    'oklch(0.985 0 0)', '#fbfbfb'],
    ['popover',            'oklch(0.205 0 0)', '#353535'],
    ['popover-foreground', 'oklch(0.985 0 0)', '#fbfbfb'],
  ],
  BRAND: [
    ['primary',            'oklch(0.922 0 0)', '#e8e8e8'],
    ['primary-foreground', 'oklch(0.205 0 0)', '#353535'],
    ['ring',               'oklch(0.556 0 0)', '#707070'],
  ],
  NEUTRALS: [
    ['secondary',            'oklch(0.269 0 0)', '#424242'],
    ['secondary-foreground', 'oklch(0.985 0 0)', '#fbfbfb'],
    ['muted',                'oklch(0.269 0 0)', '#424242'],
    ['muted-foreground',     'oklch(0.708 0 0)', '#a3a3a3'],
    ['accent',               'oklch(0.269 0 0)', '#424242'],
    ['accent-foreground',    'oklch(0.985 0 0)', '#fbfbfb'],
  ],
  UTILITY: [
    ['destructive', 'oklch(0.704 0.191 22.216)', '#e86350'],
    ['border',      'oklch(1 0 0 / 10%)',         'rgba(255,255,255,0.1)'],
    ['input',       'oklch(1 0 0 / 15%)',         'rgba(255,255,255,0.15)'],
  ],
};

const Swatch = ({ name, oklch, hex, mode }) => {
  const isTransparent = name === 'border' || name === 'input';
  const darkBg = mode === 'dark';
  const chipStyle = {
    background: hex,
    border: mode === 'light' && (name === 'background' || name === 'card' || name === 'popover')
      ? '1px solid var(--border)'
      : 'none',
  };
  return (
    <div
      className="flex items-center gap-3 p-3 rounded-[10px] border"
      style={{
        borderColor: 'var(--border)',
        background: darkBg ? 'var(--card)' : 'var(--card)',
      }}
    >
      <div
        className={`w-10 h-10 rounded-[8px] shrink-0 ${isTransparent ? 'checker' : ''}`}
        style={{ position: 'relative' }}
      >
        <div
          className="w-full h-full rounded-[8px]"
          style={chipStyle}
        />
      </div>
      <div className="min-w-0 flex-1">
        <TokenName>{name}</TokenName>
        <div className="mono text-[11px] text-muted-foreground leading-[1.4] mt-0.5 truncate">{hex}</div>
        <div className="mono text-[10.5px] text-muted-foreground leading-[1.4] truncate opacity-80">{oklch}</div>
      </div>
    </div>
  );
};

const ColorModeColumn = ({ mode, data }) => {
  // In this column, we render the swatches *themselves* in the opposite theme visual
  // by wrapping in a themed container.
  const wrapperClass = mode === 'dark' ? 'dark' : '';
  return (
    <div className={wrapperClass}>
      <div
        className="rounded-[12px] border p-5"
        style={{
          background: 'var(--background)',
          borderColor: 'var(--border)',
          color: 'var(--foreground)',
        }}
      >
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="text-[15px] font-semibold">{mode === 'light' ? 'Light mode' : 'Dark mode'}</h3>
          <span className="mono text-[11px] text-muted-foreground">
            {mode === 'light' ? ':root' : '.dark'}
          </span>
        </div>
        <div className="space-y-5">
          {Object.entries(data).map(([group, rows]) => (
            <div key={group}>
              <div className="label-caps mb-2">{group}</div>
              <div className="grid grid-cols-1 gap-2">
                {rows.map(([name, oklch, hex]) => (
                  <Swatch key={name} name={name} oklch={oklch} hex={hex} mode={mode} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Section1_Colors = () => (
  <section id="colors">
    <SectionHeader
      num={1}
      title="Colors & Surfaces"
      subtitle="18 semantic tokens mapped from shadcn/ui neutral. Every token defined in both modes; the institutional accent enters via a single --primary + --ring slot."
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <ColorModeColumn mode="light" data={LIGHT_COLORS} />
      <ColorModeColumn mode="dark" data={DARK_COLORS} />
    </div>
  </section>
);

// ============================================================
// Section 2 — Typography
// ============================================================

const TYPE_LEVELS = [
  ['Display LG',  72, 800, 1.0,  '-0.025em'],
  ['Display MD',  60, 800, 1.0,  '-0.025em'],
  ['Headline LG', 48, 700, 1.1,  '-0.02em'],
  ['Headline MD', 36, 700, 1.15, '-0.02em'],
  ['Headline SM', 30, 600, 1.2,  '-0.015em'],
  ['Title LG',    24, 600, 1.25, '-0.01em'],
  ['Title MD',    20, 600, 1.3,  '-0.01em'],
  ['Title SM',    18, 600, 1.35, '-0.005em'],
  ['Body LG',     16, 400, 1.5,  '0'],
  ['Body MD',     14, 400, 1.5,  '0', true], // default
  ['Body SM',     12, 400, 1.5,  '0'],
  ['Label LG',    14, 500, 1.4,  '0'],
  ['Label MD',    12, 500, 1.4,  '0.01em'],
  ['Label SM',    11, 500, 1.4,  '0.02em'],
];

const TypeRow = ({ name, size, weight, lh, tracking, isDefault }) => (
  <div className="flex items-baseline gap-8 py-6 border-b border-border last:border-b-0">
    <div
      className="specimen flex-1"
      style={{
        fontSize: `${size}px`,
        fontWeight: weight,
        lineHeight: lh,
        letterSpacing: tracking,
      }}
    >
      The quick brown fox jumps over the lazy dog.
    </div>
    <div className="w-[280px] shrink-0 grid grid-cols-[1fr_auto] gap-y-1 gap-x-3 text-right self-center">
      <div className="flex items-center gap-2 justify-end col-span-2">
        <span className="text-[13px] font-semibold text-foreground">{name}</span>
        {isDefault && <span className="badge-default">default</span>}
      </div>
      <div className="mono text-[11px] text-muted-foreground">size / weight</div>
      <div className="mono text-[11px] text-foreground">{size}px / {weight}</div>
      <div className="mono text-[11px] text-muted-foreground">line-height</div>
      <div className="mono text-[11px] text-foreground">{lh}</div>
      <div className="mono text-[11px] text-muted-foreground">tracking</div>
      <div className="mono text-[11px] text-foreground">{tracking}</div>
    </div>
  </div>
);

const Section2_Typography = () => (
  <section id="typography">
    <SectionHeader
      num={2}
      title="Typography"
      subtitle="Inter across all 14 levels — Display, Headline, Title, Body, Label. Body MD (14/400) is the workhorse for dense product UI."
    />
    <div className="ds-card px-8 py-2">
      {TYPE_LEVELS.map(([name, size, weight, lh, tracking, isDefault]) => (
        <TypeRow
          key={name}
          name={name}
          size={size}
          weight={weight}
          lh={lh}
          tracking={tracking}
          isDefault={isDefault}
        />
      ))}
    </div>
  </section>
);

// ============================================================
// Section 3 — Spacing
// ============================================================

const SPACING = [
  ['0', 0], ['0.5', 2], ['1', 4], ['1.5', 6], ['2', 8], ['2.5', 10],
  ['3', 12], ['3.5', 14], ['4', 16], ['5', 20], ['6', 24], ['7', 28],
  ['8', 32], ['10', 40], ['12', 48], ['16', 64], ['20', 80], ['24', 96],
];

const Section3_Spacing = () => {
  const max = 96;
  return (
    <section id="spacing">
      <SectionHeader
        num={3}
        title="Spacing"
        subtitle="4px base, 18 stops. Use keys, not px — spacing semantics carry across themes and density modes."
      />
      <div className="ds-card py-4 px-6">
        {SPACING.map(([key, px], i) => (
          <div
            key={key}
            className="grid grid-cols-[72px_1fr_72px] items-center gap-6 py-2.5 border-b border-border last:border-b-0"
          >
            <div className="label-caps text-foreground mono">{key}</div>
            <div className="relative h-5 flex items-center">
              <div
                className="h-5 rounded-[2px]"
                style={{ background: '#2563eb', width: `${(px / max) * 100}%` }}
              />
              {px === 0 && (
                <span className="mono text-[10px] text-muted-foreground ml-0">—</span>
              )}
            </div>
            <div className="mono text-[12px] text-foreground text-right">{px}px</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================
// Section 4 — Radius
// ============================================================

const RADII = [
  ['sm',   6,    'calc(var(--radius) - 4px)', 'Small chips, inline badges'],
  ['md',   8,    'calc(var(--radius) - 2px)', 'Buttons, inputs'],
  ['lg',   10,   'var(--radius)',             'Cards, popovers'],
  ['xl',   14,   'calc(var(--radius) + 4px)', 'Dialogs, sheets'],
  ['full', 9999, '9999px',                    'Pills, avatars'],
];

const Section4_Radius = () => (
  <section id="radius">
    <SectionHeader
      num={4}
      title="Radius"
      subtitle={`Canonical --radius is 0.625rem (10px). Four scaled variants plus full. Used as a shared visual vocabulary — chips are small, dialogs are larger.`}
    />

    {/* squares */}
    <div className="ds-card p-8 mb-5">
      <div className="label-caps mb-6">Shape</div>
      <div className="flex items-end gap-6 flex-wrap">
        {RADII.map(([name, px, css, use]) => (
          <div key={name} className="flex flex-col items-center gap-3">
            <div
              className="w-[88px] h-[88px]"
              style={{ background: '#2563eb', borderRadius: css }}
            />
            <div className="text-center">
              <div className="text-[13px] font-semibold text-foreground">{name}</div>
              <div className="mono text-[11px] text-muted-foreground">
                {name === 'full' ? '9999px' : `${px}px`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* chip buttons */}
    <div className="ds-card p-8">
      <div className="label-caps mb-6">Usage</div>
      <div className="flex items-center gap-3 flex-wrap">
        {RADII.map(([name, px, css, use]) => (
          <div key={name} className="flex flex-col gap-2">
            <button
              className="chip-btn"
              style={{ borderRadius: css }}
            >
              {name === 'full' ? 'Pill button' : `Radius ${name}`}
            </button>
            <div className="mono text-[11px] text-muted-foreground">{use}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// Section 5 — Shadows
// ============================================================

const SHADOWS = [
  ['xs',  '0 1px 2px 0 rgb(0 0 0 / 0.05)', 'Buttons on hover'],
  ['sm',  '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', 'Cards'],
  ['md',  '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', 'Popovers, dropdowns'],
  ['lg',  '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', 'Dialogs, sheets'],
  ['xl',  '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', 'Sticky headers'],
  ['2xl', '0 25px 50px -12px rgb(0 0 0 / 0.25)', 'Fullscreen overlays'],
];

const Section5_Shadows = () => (
  <section id="shadows">
    <SectionHeader
      num={5}
      title="Shadows / Elevation"
      subtitle="Six steps. Reserve elevation for transient surfaces — sticky chrome, popovers, dialogs. Resting cards stay flat with 1px borders."
    />
    <div
      className="rounded-[12px] p-10 border border-border"
      style={{ background: '#f5f5f5' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SHADOWS.map(([name, value, use]) => (
          <div key={name} className="flex flex-col items-center gap-4">
            <div
              className="w-full h-[120px] flex items-center justify-center"
              style={{
                background: '#ffffff',
                borderRadius: '10px',
                boxShadow: value,
                color: '#252525',
              }}
            >
              <span className="text-[13px] font-semibold">shadow-{name}</span>
            </div>
            <div className="text-center">
              <div className="text-[12px] font-semibold text-foreground mb-0.5">{use}</div>
              <div className="mono text-[10px] text-muted-foreground max-w-[260px] break-words">
                {value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// Section 6 — Motion
// ============================================================

const DURATIONS = [
  ['fast',    150, 'Micro-interactions, hover'],
  ['base',    200, 'Default transitions'],
  ['slow',    300, 'Page transitions, dialogs'],
  ['slower',  500, 'Empty-state entrances'],
];

const EASINGS = [
  ['out',    'cubic-bezier(0, 0, 0.2, 1)',    [0, 0, 0.2, 1],    'Entrances — element arrives'],
  ['in-out', 'cubic-bezier(0.4, 0, 0.2, 1)',  [0.4, 0, 0.2, 1],  'Between-state transitions'],
  ['in',     'cubic-bezier(0.4, 0, 1, 1)',    [0.4, 0, 1, 1],    'Exits — element leaves'],
];

const BezierCurve = ({ p }) => {
  const [x1, y1, x2, y2] = p;
  const W = 120, H = 80, pad = 8;
  const mapX = t => pad + t * (W - 2 * pad);
  const mapY = t => H - pad - t * (H - 2 * pad);
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      {/* grid */}
      <rect x="0" y="0" width={W} height={H} fill="none" />
      <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="var(--border)" strokeWidth="1" />
      <line x1={pad} y1={pad} x2={pad} y2={H - pad} stroke="var(--border)" strokeWidth="1" />
      {/* the curve */}
      <path
        d={`M ${mapX(0)} ${mapY(0)} C ${mapX(x1)} ${mapY(y1)}, ${mapX(x2)} ${mapY(y2)}, ${mapX(1)} ${mapY(1)}`}
        fill="none"
        stroke="#2563eb"
        strokeWidth="2"
      />
      {/* control handles */}
      <circle cx={mapX(x1)} cy={mapY(y1)} r="2.5" fill="var(--muted-foreground)" />
      <circle cx={mapX(x2)} cy={mapY(y2)} r="2.5" fill="var(--muted-foreground)" />
    </svg>
  );
};

const Section6_Motion = () => {
  const maxDur = 500;
  return (
    <section id="motion">
      <SectionHeader
        num={6}
        title="Motion"
        subtitle="Four durations, three easings. Pair entrances with ease-out; exits with ease-in. Keep the base 200ms tight — AI platform UX benefits from responsive feel."
      />

      {/* durations */}
      <div className="ds-card p-7 mb-5">
        <div className="label-caps mb-5">Durations</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {DURATIONS.map(([name, ms, use]) => (
            <div key={name} className="border border-border rounded-[10px] p-4">
              <div className="flex items-baseline justify-between mb-3">
                <div className="text-[13px] font-semibold text-foreground">{name}</div>
                <div className="mono text-[11px] text-muted-foreground">{ms}ms</div>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ background: '#2563eb', width: `${(ms / maxDur) * 100}%` }}
                />
              </div>
              <div className="text-[12px] text-muted-foreground mt-3">{use}</div>
            </div>
          ))}
        </div>
      </div>

      {/* easings */}
      <div className="ds-card p-7">
        <div className="label-caps mb-5">Easings</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EASINGS.map(([name, css, p, use]) => (
            <div key={name} className="border border-border rounded-[10px] p-4">
              <div className="flex items-baseline justify-between mb-2">
                <div className="text-[13px] font-semibold text-foreground">{name}</div>
              </div>
              <BezierCurve p={p} />
              <div className="mono text-[10.5px] text-muted-foreground mt-2 break-all">{css}</div>
              <div className="text-[12px] text-muted-foreground mt-2">{use}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// Section 7 — Breakpoints
// ============================================================

const BREAKPOINTS = [
  ['sm', 640],
  ['md', 768],
  ['lg', 1024],
  ['xl', 1280],
  ['2xl', 1536],
];

const Section7_Breakpoints = () => {
  const max = 1536;
  return (
    <section id="breakpoints">
      <SectionHeader
        num={7}
        title="Breakpoints"
        subtitle="Tailwind defaults. Admin targets desktop from lg+; Portal covers mobile (<sm) and desktop (lg+)."
      />

      <div className="ds-card p-8 mb-5">
        <div className="label-caps mb-6">Ruler</div>
        <div className="relative h-16">
          <div className="absolute left-0 right-0 top-7 h-[2px] bg-border" />
          {/* start tick */}
          <div className="absolute top-4 w-[2px] h-8" style={{ background: 'var(--foreground)', left: 0 }} />
          <div className="absolute top-[52px] mono text-[10px] text-muted-foreground" style={{ left: 0 }}>0</div>

          {BREAKPOINTS.map(([name, px]) => {
            const pos = (px / max) * 100;
            return (
              <div key={name}>
                <div
                  className="absolute w-[2px] h-8"
                  style={{ top: '16px', background: '#2563eb', left: `calc(${pos}% - 1px)` }}
                />
                <div
                  className="absolute top-0 mono text-[11px] font-semibold text-foreground px-2 py-0.5 rounded bg-[color:var(--accent)] -translate-x-1/2"
                  style={{ left: `${pos}%` }}
                >
                  {name}
                </div>
                <div
                  className="absolute top-[52px] mono text-[10px] text-muted-foreground -translate-x-1/2"
                  style={{ left: `${pos}%` }}
                >
                  {px}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { label: 'Admin (platform-ui)', desc: 'Desktop-only, active lg+ (1024+)', active: [false, false, true, true, true] },
          { label: 'Portal (ticket-ui)', desc: 'Mobile-first — active <sm and lg+', active: [true, false, false, false, false], preActive: true, lgActive: [false, false, true, true, true] },
        ].map((row) => (
          <div key={row.label} className="ds-card p-6">
            <div className="flex items-baseline justify-between mb-5">
              <div className="text-[14px] font-semibold text-foreground">{row.label}</div>
              <div className="text-[12px] text-muted-foreground">{row.desc}</div>
            </div>
            <div className="flex items-center gap-2">
              {row.preActive && (
                <div
                  className="flex-1 h-9 flex items-center justify-center rounded-[8px] border text-[11px] mono"
                  style={{ borderColor: '#2563eb', background: 'rgba(37,99,235,0.12)', color: '#2563eb' }}
                >
                  &lt;sm
                </div>
              )}
              {BREAKPOINTS.map(([name], i) => {
                const active = row.lgActive ? row.lgActive[i] : row.active[i];
                return (
                  <div
                    key={name}
                    className="flex-1 h-9 flex items-center justify-center rounded-[8px] border text-[11px] mono"
                    style={{
                      borderColor: active ? '#2563eb' : 'var(--border)',
                      background: active ? 'rgba(37,99,235,0.12)' : 'transparent',
                      color: active ? '#2563eb' : 'var(--muted-foreground)',
                    }}
                  >
                    {name}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================
// export
// ============================================================

Object.assign(window, {
  Icon, SectionHeader, TokenName,
  Section1_Colors, Section2_Typography, Section3_Spacing,
  Section4_Radius, Section5_Shadows, Section6_Motion, Section7_Breakpoints,
});
