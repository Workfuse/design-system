/* global React */
/* eslint-disable no-unused-vars */

// ============================================================
// Section 8 — Z-index
// ============================================================

const Z_LAYERS = [
  ['base',     0,   'Base layer'],
  ['dropdown', 50,  'Dropdowns, selects'],
  ['sticky',   100, 'Sticky headers, footers'],
  ['overlay',  200, 'Backdrops behind modals'],
  ['modal',    300, 'Dialog, Sheet'],
  ['popover',  400, 'Popover, Tooltip trigger'],
  ['tooltip',  500, 'Tooltip content'],
  ['toast',    600, 'Top-most notifications'],
];

const Section8_ZIndex = () => {
  const offsetX = 20, offsetY = 12;
  const total = Z_LAYERS.length;
  return (
    <section id="zindex">
      <SectionHeader
        num={8}
        title="Z-index"
        subtitle="Eight named layers, 0 → 600. Never write raw z-index numbers in product code — always reach for a token."
      />
      <div className="ds-card p-8">
        <div
          className="relative"
          style={{ height: `${100 + (total - 1) * offsetY + 120}px` }}
        >
          {Z_LAYERS.map(([name, z, use], i) => {
            const layerIdx = i;
            const x = layerIdx * offsetX;
            const y = (total - 1 - layerIdx) * offsetY;
            const lightness = 0.97 - layerIdx * 0.04;
            return (
              <div
                key={name}
                className="absolute rounded-[8px] border flex items-center justify-between px-4"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  width: '440px',
                  height: '64px',
                  background: `oklch(${Math.max(0.25, lightness)} 0 0)`,
                  borderColor: 'var(--border)',
                  zIndex: z,
                  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
                  color: lightness > 0.6 ? '#252525' : '#fbfbfb',
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="mono text-[10px] opacity-70">{String(z).padStart(3, '0')}</span>
                  <span className="text-[13px] font-semibold">{name}</span>
                </div>
                <span className="text-[11px] opacity-80">{use}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// Section 9 — Icon sizes
// ============================================================

const ICON_SIZES = [
  ['xs', 12, 1.5, 'Inline decorations', false],
  ['sm', 16, 1.5, 'Default in shadcn',  true],
  ['md', 20, 1.5, 'Buttons, labels',    false],
  ['lg', 24, 2,   'Standalone, nav',    false],
  ['xl', 32, 2,   'Empty states, heroes', false],
];

const ICON_NAMES = ['check', 'search', 'settings', 'bell', 'user'];

const Section9_Icons = () => (
  <section id="icons">
    <SectionHeader
      num={9}
      title="Icon sizes"
      subtitle="Five sizes, lucide-react. Stroke-width 1.5 up to 20px, 2 for 24px+. SM is the shadcn default — everything in a button or a label renders at 16."
    />
    <div className="ds-card">
      {ICON_SIZES.map(([name, px, stroke, use, isDefault], i) => (
        <div
          key={name}
          className={`grid grid-cols-[80px_1fr_220px] items-center gap-6 px-8 py-6 ${i < ICON_SIZES.length - 1 ? 'border-b border-border' : ''}`}
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[13px] font-semibold text-foreground">{name}</span>
              {isDefault && <span className="badge-default">default</span>}
            </div>
            <div className="mono text-[11px] text-muted-foreground">{px}px · {stroke}</div>
          </div>
          <div className="flex items-center gap-6">
            {ICON_NAMES.map(n => (
              <div key={n} className="flex items-center justify-center" style={{ width: `${Math.max(px, 32)}px`, height: `${Math.max(px, 32)}px` }}>
                <Icon name={n} size={px} stroke={stroke} />
              </div>
            ))}
          </div>
          <div className="text-[12px] text-muted-foreground text-right">{use}</div>
        </div>
      ))}
    </div>
  </section>
);

// ============================================================
// Section 10 — Opacity
// ============================================================

const OPACITIES = [
  [0,   'Hidden'],
  [20,  'Subtle scrims'],
  [40,  'Disabled text'],
  [50,  'Disabled buttons'],
  [60,  'Modal backdrops'],
  [70,  'Glass surfaces'],
  [80,  'Hover ghost fills'],
  [100, 'Fully opaque'],
];

const Section10_Opacity = () => (
  <section id="opacity">
    <SectionHeader
      num={10}
      title="Opacity"
      subtitle="Eight canonical steps, applied to #252525 for visual calibration. Uses below are prescriptive — don't eyeball."
    />
    <div className="ds-card p-8">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {OPACITIES.map(([o, use]) => (
          <div key={o} className="flex flex-col items-center">
            <div className="w-full aspect-square checker rounded-[8px] overflow-hidden border border-border">
              <div
                className="w-full h-full"
                style={{ background: '#252525', opacity: o / 100 }}
              />
            </div>
            <div className="mt-3 text-center">
              <div className="text-[13px] font-semibold text-foreground">{o}</div>
              <div className="mono text-[10px] text-muted-foreground">{o}%</div>
              <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{use}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// Section 11 — Border widths
// ============================================================

const BORDERS = [
  [0, 'No border (implicit)'],
  [1, 'Default — cards, inputs'],
  [2, 'Focus ring'],
  [4, 'Accent bars only'],
];

const Section11_Borders = () => (
  <section id="borders">
    <SectionHeader
      num={11}
      title="Border widths"
      subtitle="Four widths. 1px is the default for form controls and table rows; 2px is reserved for focus; 4px for deliberate accent bars."
    />
    <div className="ds-card p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {BORDERS.map(([w, use]) => (
          <div
            key={w}
            className="h-[160px] rounded-[10px] border border-border p-5 flex flex-col"
            style={{ background: 'var(--card)' }}
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-[13px] font-semibold text-foreground">{w}</span>
              <span className="mono text-[11px] text-muted-foreground">{w}px</span>
            </div>
            <div
              className="flex-1 rounded-[8px]"
              style={{
                border: w === 0 ? '1px dashed var(--border)' : `${w}px solid #2563eb`,
              }}
            />
            <div className="text-[11px] text-muted-foreground mt-3 leading-tight">{use}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// Section 12 — Blur
// ============================================================

const BLURS = [
  ['sm',  4,  'Subtle softening'],
  ['md',  8,  'Sticky headers'],
  ['lg',  12, 'Modal backdrops'],
  ['xl',  16, 'Sheet overlays'],
  ['2xl', 24, 'Fullscreen glass'],
];

const Section12_Blur = () => (
  <section id="blur">
    <SectionHeader
      num={12}
      title="Blur"
      subtitle="Five backdrop-filter steps over a shared colorful backdrop — so you can compare glass intensity apples-to-apples."
    />
    <div
      className="rounded-[14px] p-10 border border-border overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #2563eb 0%, #dc4433 100%)',
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {BLURS.map(([name, px, use]) => (
          <div
            key={name}
            className="h-[180px] rounded-[12px] p-4 flex flex-col justify-between"
            style={{
              background: 'rgba(255,255,255,0.55)',
              border: '1px solid rgba(255,255,255,0.6)',
              backdropFilter: `blur(${px}px)`,
              WebkitBackdropFilter: `blur(${px}px)`,
              color: '#252525',
            }}
          >
            <div>
              <div className="text-[13px] font-semibold">blur-{name}</div>
              <div className="mono text-[11px] opacity-70">{px}px</div>
            </div>
            <div className="text-[11px] opacity-80 leading-tight">{use}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// Section 13 — Aspect ratios
// ============================================================

const ASPECTS = [
  ['square',     1, 1,     'Avatars, thumbnails'],
  ['landscape', 4, 3,      'Standard cards'],
  ['wide',      16, 9,     'Hero images, video'],
  ['portrait',  3, 4,      'Mobile cards'],
  ['story',     9, 16,     'Mobile fullscreen'],
];

const Section13_Aspects = () => {
  const LONG = 220;
  return (
    <section id="aspects">
      <SectionHeader
        num={13}
        title="Aspect ratios"
        subtitle="Five canonical ratios. Always aspect-ratio in CSS rather than hard-coded heights — responsive by default."
      />
      <div className="ds-card p-8">
        <div className="flex items-end gap-8 flex-wrap">
          {ASPECTS.map(([name, w, h, use]) => {
            let width, height;
            if (w >= h) { width = LONG; height = LONG * (h / w); }
            else { height = LONG; width = LONG * (w / h); }
            return (
              <div key={name} className="flex flex-col items-center">
                <div
                  className="rounded-[8px] border flex items-center justify-center"
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    background: 'var(--muted)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <span className="mono text-[13px] font-semibold text-foreground">{w}/{h}</span>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-[13px] font-semibold text-foreground">{name}</div>
                  <div className="text-[11px] text-muted-foreground">{use}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// Section 14 — Status colors
// ============================================================

const STATUS_LIGHT = [
  ['info',        'info',           'oklch(0.598 0.182 254.116)', '#2a7ff2'],
  ['success',     'check-circle',   'oklch(0.627 0.194 149.214)', '#14a34a'],
  ['warning',     'alert-triangle', 'oklch(0.765 0.188 70.08)',   '#ea9a17'],
  ['destructive', 'x-circle',       'oklch(0.577 0.245 27.325)',  '#dc4433'],
];
const STATUS_DARK = [
  ['info',        'info',           'oklch(0.696 0.17 232)',      '#4ba8eb'],
  ['success',     'check-circle',   'oklch(0.696 0.17 162.48)',   '#35c97e'],
  ['warning',     'alert-triangle', 'oklch(0.828 0.189 84.429)',  '#f3c04c'],
  ['destructive', 'x-circle',       'oklch(0.704 0.191 22.216)',  '#e86350'],
];

const StatusColumn = ({ mode, data }) => {
  const wrapperClass = mode === 'dark' ? 'dark' : '';
  return (
    <div className={wrapperClass}>
      <div
        className="rounded-[12px] border p-6"
        style={{
          background: 'var(--background)',
          borderColor: 'var(--border)',
          color: 'var(--foreground)',
        }}
      >
        <div className="flex items-baseline justify-between mb-5">
          <h3 className="text-[15px] font-semibold">{mode === 'light' ? 'Light mode' : 'Dark mode'}</h3>
          <span className="mono text-[11px] text-muted-foreground">
            {mode === 'light' ? ':root' : '.dark'}
          </span>
        </div>
        <div className="space-y-3">
          {data.map(([name, iconName, oklch, hex]) => (
            <div
              key={name}
              className="relative rounded-[10px] border p-4 pl-5 flex gap-3"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              {/* left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-[10px]"
                style={{ background: hex }}
              />
              <div
                className="shrink-0 w-8 h-8 rounded-[8px] flex items-center justify-center"
                style={{ background: hex + '22', color: hex }}
              >
                <Icon name={iconName} size={18} stroke={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <div className="text-[13px] font-semibold text-foreground">
                    Sample alert using the {name.toUpperCase()} token.
                  </div>
                </div>
                <div className="mono text-[11px] text-muted-foreground mt-1 truncate">
                  {hex} · {oklch}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Section14_Status = () => (
  <section id="status">
    <SectionHeader
      num={14}
      title="Status colors"
      subtitle="Info, success, warning, destructive. Tuned per mode — darker hues in light, lighter hues in dark — to maintain contrast with cards."
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <StatusColumn mode="light" data={STATUS_LIGHT} />
      <StatusColumn mode="dark"  data={STATUS_DARK}  />
    </div>
  </section>
);

// export
Object.assign(window, {
  Section8_ZIndex, Section9_Icons, Section10_Opacity, Section11_Borders,
  Section12_Blur, Section13_Aspects, Section14_Status,
});
