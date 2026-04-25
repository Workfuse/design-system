/* global React, Icon */
/* eslint-disable no-unused-vars */

// ============================================================
// Atom 1 — Button
// ============================================================

const Btn = ({ variant = 'default', size, state, children, icon }) => {
  const cls = [
    'btn',
    `btn-${variant}`,
    size === 'sm' && 'btn-sm',
    size === 'lg' && 'btn-lg',
    size === 'icon' && 'btn-icon',
    state === 'hover' && 'is-hover',
    state === 'active' && 'is-active',
    state === 'focus' && 'is-focus',
    (state === 'disabled' || state === 'loading') && 'is-disabled',
  ].filter(Boolean).join(' ');
  return (
    <button className={cls}>
      {state === 'loading' && <Icon name="loader-2" size={14} stroke={2} className="animate-spin" />}
      {icon && state !== 'loading' && size !== 'icon' && <Icon name={icon} size={14} stroke={2} />}
      {size === 'icon' ? <Icon name={icon || 'plus'} size={16} stroke={2} /> : children}
    </button>
  );
};

const Atom1_Button = () => (
  <AtomSection
    num={1}
    id="atom-button"
    name="Button"
    desc="Triggers actions. Use primary for main CTA, secondary/outline for supporting actions, destructive for dangerous operations, ghost/link for inline actions."
  >
    <Hero>
      <Btn icon="plus">Create ticket</Btn>
    </Hero>

    <Subsection title="Variants">
      <Grid cols={3}>
        <SampleCard label="default"><Btn>Button</Btn></SampleCard>
        <SampleCard label="destructive"><Btn variant="destructive">Delete</Btn></SampleCard>
        <SampleCard label="outline"><Btn variant="outline">Cancel</Btn></SampleCard>
        <SampleCard label="secondary"><Btn variant="secondary">Secondary</Btn></SampleCard>
        <SampleCard label="ghost"><Btn variant="ghost">Ghost</Btn></SampleCard>
        <SampleCard label="link"><Btn variant="link">Learn more</Btn></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Sizes">
      <Grid cols={4}>
        <SampleCard label="sm"><Btn size="sm">Small</Btn></SampleCard>
        <SampleCard label="default"><Btn>Default</Btn></SampleCard>
        <SampleCard label="lg"><Btn size="lg">Large</Btn></SampleCard>
        <SampleCard label="icon"><Btn size="icon" icon="plus" /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="States">
      <Grid cols={3}>
        <SampleCard label="default"><Btn>Save</Btn></SampleCard>
        <SampleCard label="hover"><Btn state="hover">Save</Btn></SampleCard>
        <SampleCard label="focus-visible"><Btn state="focus">Save</Btn></SampleCard>
        <SampleCard label="active"><Btn state="active">Save</Btn></SampleCard>
        <SampleCard label="disabled"><Btn state="disabled">Save</Btn></SampleCard>
        <SampleCard label="loading"><Btn state="loading">Please wait</Btn></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['variant', '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', '"default"', 'Visual style.'],
        ['size', '"default" | "sm" | "lg" | "icon"', '"default"', 'Physical size. Use "icon" for icon-only buttons.'],
        ['disabled', 'boolean', 'false', 'Disables interaction and dims opacity.'],
        ['asChild', 'boolean', 'false', 'Render as child element (Radix Slot).'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Button } ', K('from'), ' ', S('"@/components/ui/button"'), ';'],
        [K('import'), ' { Plus } ', K('from'), ' ', S('"lucide-react"'), ';'],
        [''],
        ['<', T('Button'), '>'],
        ['  <', T('Plus'), ' className=', S('"size-4"'), ' /> Create ticket'],
        ['</', T('Button'), '>'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 2 — Input
// ============================================================

const Atom2_Input = () => (
  <AtomSection
    num={2}
    id="atom-input"
    name="Input"
    desc="Single-line text entry."
  >
    <Hero>
      <div style={{ width: 320 }}>
        <input className="inp" placeholder="Enter your email" />
      </div>
    </Hero>

    <Subsection title="States">
      <Grid cols={3}>
        <SampleCard label="default"><input className="inp" placeholder="Email" /></SampleCard>
        <SampleCard label="hover"><input className="inp is-hover" placeholder="Email" /></SampleCard>
        <SampleCard label="focus"><input className="inp is-focus" placeholder="Email" /></SampleCard>
        <SampleCard label="disabled"><input className="inp is-disabled" disabled placeholder="Email" /></SampleCard>
        <SampleCard label="invalid">
          <div className="w-full">
            <input className="inp is-invalid" aria-invalid="true" defaultValue="not-an-email" />
            <div className="mt-1.5 text-[11px]" style={{ color: 'var(--destructive)' }}>Please enter a valid value</div>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="With icon">
      <Grid cols={2}>
        <SampleCard label="leading icon">
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Icon name="search" size={14} stroke={1.75} />
            </span>
            <input className="inp" style={{ paddingLeft: 32 }} placeholder="Search tickets…" />
          </div>
        </SampleCard>
        <SampleCard label="trailing icon">
          <div className="relative w-full">
            <input className="inp" type="password" defaultValue="secret123" style={{ paddingRight: 32 }} />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer">
              <Icon name="eye-off" size={14} stroke={1.75} />
            </span>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['type', '"text" | "email" | "password" | "number" | ...', '"text"', 'Native input type.'],
        ['disabled', 'boolean', 'false', 'Disables the input.'],
        ['aria-invalid', 'boolean', 'false', 'Applies the invalid style.'],
        ['placeholder', 'string', '—', 'Hint text shown when empty.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Input } ', K('from'), ' ', S('"@/components/ui/input"'), ';'],
        [''],
        ['<', T('Input'), ' type=', S('"email"'), ' placeholder=', S('"Enter your email"'), ' />'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 3 — Textarea
// ============================================================

const Atom3_Textarea = () => (
  <AtomSection
    num={3}
    id="atom-textarea"
    name="Textarea"
    desc="Multi-line text entry."
  >
    <Hero>
      <div style={{ width: 360 }}>
        <textarea className="txta" placeholder="Describe the issue…" style={{ minHeight: 80 }} />
      </div>
    </Hero>

    <Subsection title="Sizes">
      <Grid cols={3}>
        <SampleCard label="sm"><textarea className="txta" placeholder="sm" style={{ minHeight: 60 }} /></SampleCard>
        <SampleCard label="default"><textarea className="txta" placeholder="default" style={{ minHeight: 80 }} /></SampleCard>
        <SampleCard label="lg"><textarea className="txta" placeholder="lg" style={{ minHeight: 120 }} /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="States">
      <Grid cols={3}>
        <SampleCard label="default"><textarea className="txta" placeholder="…" style={{ minHeight: 70 }} /></SampleCard>
        <SampleCard label="hover"><textarea className="txta is-hover" placeholder="…" style={{ minHeight: 70 }} /></SampleCard>
        <SampleCard label="focus"><textarea className="txta is-focus" placeholder="…" style={{ minHeight: 70 }} /></SampleCard>
        <SampleCard label="disabled"><textarea className="txta is-disabled" disabled placeholder="…" style={{ minHeight: 70 }} /></SampleCard>
        <SampleCard label="invalid">
          <div className="w-full">
            <textarea className="txta is-invalid" defaultValue="too short" style={{ minHeight: 70 }} />
            <div className="mt-1.5 text-[11px]" style={{ color: 'var(--destructive)' }}>Must be at least 10 characters</div>
          </div>
        </SampleCard>
        <SampleCard label="with counter">
          <div className="w-full">
            <textarea className="txta" defaultValue="This is a sample message" style={{ minHeight: 70 }} />
            <div className="flex justify-end mt-1 text-[11px] mono text-muted-foreground">24 / 280</div>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Textarea } ', K('from'), ' ', S('"@/components/ui/textarea"'), ';'],
        [''],
        ['<', T('Textarea'), ' placeholder=', S('"Describe the issue…"'), ' />'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 4 — Label
// ============================================================

const Atom4_Label = () => (
  <AtomSection
    num={4}
    id="atom-label"
    name="Label"
    desc="Associates a text label with a form control. Supports peer-disabled styling."
  >
    <Hero>
      <div style={{ width: 280 }}>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">Email</label>
        <input className="inp" placeholder="you@example.com" />
      </div>
    </Hero>

    <Subsection title="States">
      <Grid cols={2}>
        <SampleCard label="default">
          <div className="w-full">
            <label className="block text-[13px] font-medium text-foreground mb-1.5">Email</label>
            <input className="inp" placeholder="you@example.com" />
          </div>
        </SampleCard>
        <SampleCard label="disabled peer">
          <div className="w-full" style={{ opacity: 0.7, cursor: 'not-allowed' }}>
            <label className="block text-[13px] font-medium text-foreground mb-1.5">Email</label>
            <input className="inp is-disabled" disabled placeholder="you@example.com" />
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Label } ', K('from'), ' ', S('"@/components/ui/label"'), ';'],
        [K('import'), ' { Input } ', K('from'), ' ', S('"@/components/ui/input"'), ';'],
        [''],
        ['<', T('Label'), ' htmlFor=', S('"email"'), '>Email</', T('Label'), '>'],
        ['<', T('Input'), ' id=', S('"email"'), ' type=', S('"email"'), ' />'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 5 — Badge
// ============================================================

const Atom5_Badge = () => (
  <AtomSection
    num={5}
    id="atom-badge"
    name="Badge"
    desc="Small status or meta-info indicator. Not interactive."
  >
    <Hero>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="bdg bdg-default">Active</span>
        <span className="bdg bdg-secondary">Pending</span>
        <span className="bdg bdg-destructive">Failed</span>
        <span className="bdg bdg-outline">Draft</span>
      </div>
    </Hero>

    <Subsection title="Variants">
      <Grid cols={4}>
        <SampleCard label="default"><span className="bdg bdg-default">Badge</span></SampleCard>
        <SampleCard label="secondary"><span className="bdg bdg-secondary">Badge</span></SampleCard>
        <SampleCard label="destructive"><span className="bdg bdg-destructive">Badge</span></SampleCard>
        <SampleCard label="outline"><span className="bdg bdg-outline">Badge</span></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Shapes & extras">
      <Grid cols={4}>
        <SampleCard label="rounded"><span className="bdg bdg-default">Default</span></SampleCard>
        <SampleCard label="pill"><span className="bdg bdg-default bdg-pill">Pill</span></SampleCard>
        <SampleCard label="with icon">
          <span className="bdg bdg-default">
            <Icon name="check" size={11} stroke={2.25} /> Active
          </span>
        </SampleCard>
        <SampleCard label="with dot">
          <span className="bdg bdg-outline">
            <span style={{ width: 6, height: 6, borderRadius: 9999, background: 'oklch(0.627 0.194 149.214)' }} />
            Online
          </span>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Badge } ', K('from'), ' ', S('"@/components/ui/badge"'), ';'],
        [''],
        ['<', T('Badge'), ' variant=', S('"default"'), '>Active</', T('Badge'), '>'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 6 — Avatar
// ============================================================

const Avatar = ({ size = 36, kind = 'initials', initials = 'YP' }) => {
  const style = { width: size, height: size, fontSize: Math.max(10, size * 0.38) };
  if (kind === 'skeleton') {
    return <div className="skeleton" style={{ ...style, borderRadius: 9999 }} />;
  }
  if (kind === 'image') {
    return (
      <div
        className="rounded-full overflow-hidden bg-muted flex items-center justify-center"
        style={style}
      >
        <div
          style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, oklch(0.7 0.15 262) 0%, oklch(0.6 0.2 30) 100%)',
          }}
        />
      </div>
    );
  }
  return (
    <div
      className="rounded-full flex items-center justify-center font-medium"
      style={{ ...style, background: 'var(--muted)', color: 'var(--muted-foreground)' }}
    >
      {initials}
    </div>
  );
};

const Atom6_Avatar = () => (
  <AtomSection
    num={6}
    id="atom-avatar"
    name="Avatar"
    desc="Represents a user with an image or fallback initials."
  >
    <Hero>
      <Avatar size={56} initials="YP" />
    </Hero>

    <Subsection title="Sizes">
      <Grid cols={4}>
        <SampleCard label="sm · h-6"><Avatar size={24} /></SampleCard>
        <SampleCard label="default · h-9"><Avatar size={36} /></SampleCard>
        <SampleCard label="lg · h-12"><Avatar size={48} /></SampleCard>
        <SampleCard label="xl · h-16"><Avatar size={64} /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Variants">
      <Grid cols={3}>
        <SampleCard label="image"><Avatar size={48} kind="image" /></SampleCard>
        <SampleCard label="initials"><Avatar size={48} kind="initials" initials="YP" /></SampleCard>
        <SampleCard label="skeleton"><Avatar size={48} kind="skeleton" /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Group">
      <SampleCard label="avatar group">
        <div className="flex items-center">
          {['YP', 'RA', 'LM', 'AS'].map((i, idx) => (
            <div key={i} style={{ marginLeft: idx === 0 ? 0 : -8, border: '2px solid var(--card)', borderRadius: 9999 }}>
              <Avatar size={32} initials={i} />
            </div>
          ))}
          <div
            className="flex items-center justify-center text-[11px] font-medium"
            style={{
              marginLeft: -8,
              width: 32, height: 32, borderRadius: 9999,
              background: 'var(--secondary)', color: 'var(--secondary-foreground)',
              border: '2px solid var(--card)',
            }}
          >
            +3
          </div>
        </div>
      </SampleCard>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Avatar, AvatarImage, AvatarFallback } ', K('from'), ' ', S('"@/components/ui/avatar"'), ';'],
        [''],
        ['<', T('Avatar'), '>'],
        ['  <', T('AvatarImage'), ' src=', S('"/user.jpg"'), ' />'],
        ['  <', T('AvatarFallback'), '>YP</', T('AvatarFallback'), '>'],
        ['</', T('Avatar'), '>'],
      ]} />
    </Subsection>
  </AtomSection>
);

Object.assign(window, { Atom1_Button, Atom2_Input, Atom3_Textarea, Atom4_Label, Atom5_Badge, Atom6_Avatar });
