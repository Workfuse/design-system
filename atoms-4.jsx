/* global React, Icon */
/* eslint-disable no-unused-vars */

// ============================================================
// Atom 17 — Icon (DS wrapper)
// ============================================================

const POPULAR_ICONS = ['search', 'settings', 'user', 'bell', 'home', 'folder', 'check', 'x', 'chevron-down', 'plus'];
const ICON_SIZE_TOKENS = [
  ['xs', 12, 1.5],
  ['sm', 16, 1.5],
  ['md', 20, 1.5],
  ['lg', 24, 2],
  ['xl', 32, 2],
];

const Atom17_Icon = () => (
  <AtomSection num={17} id="atom-icon" name="Icon"
    desc="Wrapper around lucide-react. Unified icon usage with standard sizes + stroke widths.">
    <Hero><Icon name="bell" size={20} stroke={1.5} /></Hero>

    <Subsection title="Library (md · 20px)">
      <div className="atom-card">
        <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
          {POPULAR_ICONS.map(n => (
            <div key={n} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-[8px]" style={{ background: 'var(--muted)' }}>
                <Icon name={n} size={20} stroke={1.5} />
              </div>
              <div className="mono text-[10.5px] text-muted-foreground truncate w-full text-center">{n}</div>
            </div>
          ))}
        </div>
      </div>
    </Subsection>

    <Subsection title="Sizes">
      <Grid cols={5}>
        {ICON_SIZE_TOKENS.map(([t, px, sw]) => (
          <SampleCard key={t} label={`${t} · ${px}px`}>
            <Icon name="bell" size={px} stroke={sw} />
          </SampleCard>
        ))}
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Icon } ', K('from'), ' ', S('"@/components/ui/icon"'), ';'],
        [''],
        ['<', T('Icon'), ' name=', S('"bell"'), ' size=', S('"md"'), ' />'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 18 — Spinner
// ============================================================

const Spinner = ({ size = 20 }) => (
  <Icon name="loader-2" size={size} stroke={2} className="animate-spin" />
);

const Atom18_Spinner = () => (
  <AtomSection num={18} id="atom-spinner" name="Spinner"
    desc="Indeterminate loading indicator. Use when duration is unknown.">
    <Hero><Spinner size={20} /></Hero>
    <Subsection title="Sizes">
      <Grid cols={4}>
        <SampleCard label="xs · 12px"><Spinner size={12} /></SampleCard>
        <SampleCard label="sm · 16px"><Spinner size={16} /></SampleCard>
        <SampleCard label="md · 20px"><Spinner size={20} /></SampleCard>
        <SampleCard label="lg · 24px"><Spinner size={24} /></SampleCard>
      </Grid>
    </Subsection>
    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Spinner } ', K('from'), ' ', S('"@/components/ui/spinner"'), ';'],
        [''],
        ['<', T('Spinner'), ' size=', S('"md"'), ' />'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 19 — Kbd
// ============================================================

const Kbd = ({ children }) => <span className="kbd">{children}</span>;

const Atom19_Kbd = () => (
  <AtomSection num={19} id="atom-kbd" name="Kbd"
    desc="Keyboard shortcut indicator. Use inside help text and command menus.">
    <Hero>
      <div className="text-[13px] text-muted-foreground flex items-center gap-2">
        Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open command menu.
      </div>
    </Hero>

    <Subsection title="Examples">
      <Grid cols={3}>
        <SampleCard label="single key"><Kbd>⌘</Kbd></SampleCard>
        <SampleCard label="combo"><div className="flex items-center gap-1"><Kbd>⌘</Kbd><Kbd>K</Kbd></div></SampleCard>
        <SampleCard label="ctrl + key">
          <div className="flex items-center gap-1">
            <Kbd>Ctrl</Kbd><span className="text-[12px] text-muted-foreground">+</span><Kbd>C</Kbd>
          </div>
        </SampleCard>
        <SampleCard label="triple combo">
          <div className="flex items-center gap-1">
            <Kbd>Shift</Kbd><span className="text-[12px] text-muted-foreground">+</span><Kbd>⌥</Kbd><span className="text-[12px] text-muted-foreground">+</span><Kbd>P</Kbd>
          </div>
        </SampleCard>
        <SampleCard label="named key"><Kbd>Esc</Kbd></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Kbd } ', K('from'), ' ', S('"@/components/ui/kbd"'), ';'],
        [''],
        ['Press <', T('Kbd'), '>⌘</', T('Kbd'), '> <', T('Kbd'), '>K</', T('Kbd'), '> to open.'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 20 — Link
// ============================================================

const DSLink = ({ variant = 'default', state, external, children }) => {
  const cls = [
    variant === 'default' && 'ds-link-default',
    variant === 'subtle' && 'ds-link-subtle',
    variant === 'external' && 'ds-link-default',
    state === 'hover' && 'is-hover',
    state === 'focus' && 'is-focus',
    state === 'visited' && 'is-visited',
  ].filter(Boolean).join(' ');
  return (
    <a href="#" className={`${cls} inline-flex items-center gap-1`} onClick={e => e.preventDefault()}>
      {children}
      {(variant === 'external' || external) && <Icon name="external-link" size={12} stroke={1.75} />}
    </a>
  );
};

const Atom20_Link = () => (
  <AtomSection num={20} id="atom-link" name="Link"
    desc="Inline link to another destination. Styled as primary-colored underlined text by default.">
    <Hero>
      <div className="text-[14px] text-foreground">
        Visit our <DSLink>documentation</DSLink> for more details.
      </div>
    </Hero>

    <Subsection title="Variants">
      <Grid cols={3}>
        <SampleCard label="default"><DSLink>Read the guide</DSLink></SampleCard>
        <SampleCard label="subtle"><DSLink variant="subtle">Terms of service</DSLink></SampleCard>
        <SampleCard label="external"><DSLink variant="external">External resource</DSLink></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="States">
      <Grid cols={4}>
        <SampleCard label="default"><DSLink>Link</DSLink></SampleCard>
        <SampleCard label="hover"><DSLink state="hover">Link</DSLink></SampleCard>
        <SampleCard label="focus-visible"><DSLink state="focus">Link</DSLink></SampleCard>
        <SampleCard label="visited"><DSLink state="visited">Link</DSLink></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Link } ', K('from'), ' ', S('"@/components/ui/link"'), ';'],
        [''],
        ['Visit our <', T('Link'), ' href=', S('"/docs"'), '>documentation</', T('Link'), '>.'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 21 — Text
// ============================================================

const HEADINGS = [
  ['H1', 72, 800, 1.0,  '-0.025em'],
  ['H2', 48, 700, 1.1,  '-0.02em'],
  ['H3', 36, 700, 1.15, '-0.02em'],
  ['H4', 30, 600, 1.2,  '-0.015em'],
  ['H5', 24, 600, 1.25, '-0.01em'],
  ['H6', 20, 600, 1.3,  '-0.01em'],
];

const Atom21_Text = () => (
  <AtomSection num={21} id="atom-text" name="Text"
    desc="Typography primitive for consistent text rendering across the DS. Wraps heading/paragraph/caption/label concerns.">
    <Hero>
      <div style={{ width: 420 }} className="space-y-3">
        <p style={{ fontSize: 16, lineHeight: 1.5 }} className="text-foreground">Lead paragraph — sets the tone for the section.</p>
        <p style={{ fontSize: 14, lineHeight: 1.5 }} className="text-foreground">Default paragraph for body copy at readable density.</p>
        <p style={{ fontSize: 12, lineHeight: 1.5 }} className="text-foreground">Small paragraph for tight helper text.</p>
        <p style={{ fontSize: 14, lineHeight: 1.5 }} className="text-muted-foreground">Muted paragraph for secondary context.</p>
      </div>
    </Hero>

    <Subsection title="Headings">
      <div className="atom-card">
        {HEADINGS.map(([name, size, w, lh, tr], i) => (
          <div key={name} className={`grid grid-cols-[60px_1fr] items-baseline gap-6 py-3 ${i < HEADINGS.length - 1 ? 'border-b border-border' : ''}`}>
            <div className="label-caps">{name}</div>
            <div
              className="specimen"
              style={{ fontSize: size, fontWeight: w, lineHeight: lh, letterSpacing: tr, color: 'var(--foreground)' }}
            >
              The quick brown fox
            </div>
          </div>
        ))}
      </div>
    </Subsection>

    <Subsection title="Paragraph">
      <Grid cols={2}>
        <SampleCard label="lead · Body-lg"><span style={{ fontSize: 16 }} className="text-foreground">Lead paragraph for introductions.</span></SampleCard>
        <SampleCard label="default · Body-md"><span style={{ fontSize: 14 }} className="text-foreground">Default paragraph for body copy.</span></SampleCard>
        <SampleCard label="small · Body-sm"><span style={{ fontSize: 12 }} className="text-foreground">Small paragraph for helpers.</span></SampleCard>
        <SampleCard label="muted · Body-md"><span style={{ fontSize: 14 }} className="text-muted-foreground">Muted paragraph for context.</span></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Caption & Label">
      <Grid cols={2}>
        <SampleCard label="caption"><span style={{ fontSize: 11, letterSpacing: '0.02em' }} className="text-muted-foreground">Figure 1 — login flow overview</span></SampleCard>
        <SampleCard label="label · Label-md"><span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.01em' }} className="text-foreground">Email address</span></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Text, Heading } ', K('from'), ' ', S('"@/components/ui/text"'), ';'],
        [''],
        ['<', T('Heading'), ' level={1}>Title</', T('Heading'), '>'],
        ['<', T('Text'), ' variant=', S('"lead"'), '>Introduction…</', T('Text'), '>'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 22 — Tag
// ============================================================

const Tag = ({ variant = 'default', dismissible, hover, children }) => {
  const styles = {
    default: { background: 'var(--secondary)', color: 'var(--secondary-foreground)' },
    primary: { background: 'color-mix(in oklab, var(--primary) 12%, transparent)', color: 'var(--primary)' },
    success: { background: 'color-mix(in oklab, var(--status-success) 12%, transparent)', color: 'var(--status-success)' },
    destructive: { background: 'color-mix(in oklab, var(--destructive) 12%, transparent)', color: 'var(--destructive)' },
  };
  return (
    <span className="tag" style={styles[variant]}>
      {children}
      {dismissible && (
        <button
          aria-label="Dismiss"
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 14, height: 14, borderRadius: 9999, background: 'transparent',
            border: 'none', color: 'currentColor', opacity: hover ? 0.9 : 0.6, cursor: 'pointer',
          }}
        >
          <Icon name="x" size={10} stroke={2.25} />
        </button>
      )}
    </span>
  );
};

const Atom22_Tag = () => (
  <AtomSection num={22} id="atom-tag" name="Tag"
    desc="Interactive label with optional dismiss. Differs from Badge — Badge is info-only, Tag is interactive (can be added/removed by the user).">
    <Hero>
      <div className="flex items-center gap-2 flex-wrap">
        <Tag dismissible>React</Tag>
        <Tag dismissible>TypeScript</Tag>
        <Tag dismissible>shadcn/ui</Tag>
      </div>
    </Hero>

    <Subsection title="Variants">
      <Grid cols={4}>
        <SampleCard label="default"><Tag>default</Tag></SampleCard>
        <SampleCard label="primary"><Tag variant="primary">primary</Tag></SampleCard>
        <SampleCard label="success"><Tag variant="success">success</Tag></SampleCard>
        <SampleCard label="destructive"><Tag variant="destructive">destructive</Tag></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="States">
      <Grid cols={3}>
        <SampleCard label="default"><Tag>React</Tag></SampleCard>
        <SampleCard label="hover"><Tag variant="primary">Hover</Tag></SampleCard>
        <SampleCard label="dismissible"><Tag dismissible hover>React</Tag></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Tag } ', K('from'), ' ', S('"@/components/ui/tag"'), ';'],
        [''],
        ['<', T('Tag'), ' variant=', S('"primary"'), ' onDismiss={handleDismiss}>React</', T('Tag'), '>'],
      ]} />
    </Subsection>
  </AtomSection>
);

Object.assign(window, {
  Atom17_Icon, Atom18_Spinner, Atom19_Kbd, Atom20_Link, Atom21_Text, Atom22_Tag,
});
