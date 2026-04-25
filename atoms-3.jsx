/* global React, Icon */
/* eslint-disable no-unused-vars */

// ============================================================
// Atom 12 — Skeleton
// ============================================================

const Atom12_Skeleton = () => (
  <AtomSection num={12} id="atom-skeleton" name="Skeleton"
    desc="Placeholder shown while content loads. Mimics the shape of the final content.">
    <Hero>
      <div style={{ width: 280 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="skeleton" style={{ width: 40, height: 40, borderRadius: 9999 }} />
          <div className="flex-1">
            <div className="skeleton" style={{ width: '70%', height: 10, marginBottom: 8 }} />
            <div className="skeleton" style={{ width: '50%', height: 10 }} />
          </div>
        </div>
        <div className="skeleton" style={{ width: 100, height: 32, borderRadius: 8 }} />
      </div>
    </Hero>

    <Subsection title="Shapes">
      <Grid cols={4}>
        <SampleCard label="line">
          <div className="w-full space-y-2">
            <div className="skeleton" style={{ width: '100%', height: 10 }} />
            <div className="skeleton" style={{ width: '80%', height: 10 }} />
          </div>
        </SampleCard>
        <SampleCard label="circle">
          <div className="skeleton" style={{ width: 48, height: 48, borderRadius: 9999 }} />
        </SampleCard>
        <SampleCard label="rectangle">
          <div className="skeleton" style={{ width: '100%', height: 72, borderRadius: 8 }} />
        </SampleCard>
        <SampleCard label="card">
          <div className="w-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="skeleton" style={{ width: 32, height: 32, borderRadius: 9999 }} />
              <div className="flex-1 space-y-1.5">
                <div className="skeleton" style={{ width: '70%', height: 8 }} />
                <div className="skeleton" style={{ width: '50%', height: 8 }} />
              </div>
            </div>
            <div className="skeleton" style={{ width: 80, height: 24, borderRadius: 6 }} />
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Skeleton } ', K('from'), ' ', S('"@/components/ui/skeleton"'), ';'],
        [''],
        ['<', T('Skeleton'), ' className=', S('"h-10 w-full"'), ' />'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 13 — Progress
// ============================================================

const Progress = ({ value, indeterminate, size = 'default' }) => {
  const h = size === 'sm' ? 4 : 8;
  return (
    <div style={{ width: '100%', height: h, background: 'var(--secondary)', borderRadius: 9999, overflow: 'hidden' }}>
      {indeterminate ? (
        <div className="progress-indet" style={{ width: '100%', height: '100%' }} />
      ) : (
        <div style={{ width: `${value}%`, height: '100%', background: 'var(--primary)', borderRadius: 9999, transition: 'width 300ms ease' }} />
      )}
    </div>
  );
};

const Atom13_Progress = () => (
  <AtomSection num={13} id="atom-progress" name="Progress"
    desc="Shows completion percentage of a known-duration operation.">
    <Hero>
      <div style={{ width: 320 }}>
        <div className="flex justify-between text-[12px] text-muted-foreground mb-2">
          <span>Uploading…</span>
          <span className="mono">66%</span>
        </div>
        <Progress value={66} />
      </div>
    </Hero>

    <Subsection title="States">
      <Grid cols={3}>
        <SampleCard label="0%"><div style={{ width: '100%' }}><Progress value={0} /></div></SampleCard>
        <SampleCard label="33%"><div style={{ width: '100%' }}><Progress value={33} /></div></SampleCard>
        <SampleCard label="66%"><div style={{ width: '100%' }}><Progress value={66} /></div></SampleCard>
        <SampleCard label="100%"><div style={{ width: '100%' }}><Progress value={100} /></div></SampleCard>
        <SampleCard label="indeterminate"><div style={{ width: '100%' }}><Progress indeterminate /></div></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Sizes">
      <Grid cols={2}>
        <SampleCard label="sm · h-1"><div style={{ width: '100%' }}><Progress value={60} size="sm" /></div></SampleCard>
        <SampleCard label="default · h-2"><div style={{ width: '100%' }}><Progress value={60} /></div></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Progress } ', K('from'), ' ', S('"@/components/ui/progress"'), ';'],
        [''],
        ['<', T('Progress'), ' value={66} />'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 14 — Toggle
// ============================================================

const Toggle = ({ on, variant, size, state, icon = 'bold', label }) => {
  const cls = [
    'tgl',
    variant === 'outline' && 'tgl-outline',
    size === 'sm' && 'tgl-sm',
    size === 'lg' && 'tgl-lg',
    on && 'is-on',
    state === 'focus' && 'is-focus',
    state === 'disabled' && 'is-disabled',
  ].filter(Boolean).join(' ');
  return (
    <button className={cls}>
      <Icon name={icon} size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} stroke={2} />
      {label && <span>{label}</span>}
    </button>
  );
};

const Atom14_Toggle = () => (
  <AtomSection num={14} id="atom-toggle" name="Toggle"
    desc="A single on/off button for formatting-style actions (bold, italic, etc.).">
    <Hero><Toggle on icon="bold" /></Hero>

    <Subsection title="Variants">
      <Grid cols={2}>
        <SampleCard label="default"><Toggle on icon="bold" /></SampleCard>
        <SampleCard label="outline"><Toggle on variant="outline" icon="bold" /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Sizes">
      <Grid cols={3}>
        <SampleCard label="sm"><Toggle size="sm" on icon="bold" /></SampleCard>
        <SampleCard label="default"><Toggle on icon="bold" /></SampleCard>
        <SampleCard label="lg"><Toggle size="lg" on icon="bold" /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="States">
      <Grid cols={4}>
        <SampleCard label="off"><Toggle icon="bold" /></SampleCard>
        <SampleCard label="on"><Toggle on icon="bold" /></SampleCard>
        <SampleCard label="disabled"><Toggle state="disabled" icon="bold" /></SampleCard>
        <SampleCard label="focus-visible"><Toggle state="focus" on icon="bold" /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Toggle } ', K('from'), ' ', S('"@/components/ui/toggle"'), ';'],
        [''],
        ['<', T('Toggle'), ' aria-label=', S('"Toggle bold"'), '>'],
        ['  <', T('Bold'), ' className=', S('"size-4"'), ' />'],
        ['</', T('Toggle'), '>'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 15 — ToggleGroup
// ============================================================

const ToggleGroup = ({ values = ['align-left'], size }) => {
  const icons = ['align-left', 'align-center', 'align-right', 'align-justify'];
  return (
    <div className="inline-flex items-center gap-0.5 p-0.5 rounded-[8px] border" style={{ borderColor: 'var(--border)' }}>
      {icons.map(i => (
        <Toggle
          key={i}
          icon={i}
          on={values.includes(i)}
          size={size}
        />
      ))}
    </div>
  );
};

const Atom15_ToggleGroup = () => (
  <AtomSection num={15} id="atom-togglegroup" name="ToggleGroup"
    desc="Group of Toggle buttons where one or many can be active.">
    <Hero><ToggleGroup values={['align-left']} /></Hero>

    <Subsection title="Types">
      <Grid cols={2}>
        <SampleCard label="single"><ToggleGroup values={['align-left']} /></SampleCard>
        <SampleCard label="multiple"><ToggleGroup values={['align-left', 'align-center']} /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Sizes">
      <Grid cols={2}>
        <SampleCard label="default"><ToggleGroup values={['align-left']} /></SampleCard>
        <SampleCard label="sm"><ToggleGroup values={['align-left']} size="sm" /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { ToggleGroup, ToggleGroupItem } ', K('from'), ' ', S('"@/components/ui/toggle-group"'), ';'],
        [''],
        ['<', T('ToggleGroup'), ' type=', S('"single"'), ' defaultValue=', S('"left"'), '>'],
        ['  <', T('ToggleGroupItem'), ' value=', S('"left"'), '><', T('AlignLeft'), ' /></', T('ToggleGroupItem'), '>'],
        ['  <', T('ToggleGroupItem'), ' value=', S('"center"'), '><', T('AlignCenter'), ' /></', T('ToggleGroupItem'), '>'],
        ['</', T('ToggleGroup'), '>'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 16 — AspectRatio
// ============================================================

const RatioBox = ({ w, h, width = 180 }) => (
  <div
    className="flex items-center justify-center rounded-[8px]"
    style={{
      width,
      aspectRatio: `${w} / ${h}`,
      background: 'var(--muted)',
      border: '1px solid var(--border)',
      color: 'var(--muted-foreground)',
    }}
  >
    <span className="mono text-[12px] font-medium">{w}/{h}</span>
  </div>
);

const Atom16_AspectRatio = () => (
  <AtomSection num={16} id="atom-aspectratio" name="AspectRatio"
    desc="Constrains content to a specific width/height ratio.">
    <Hero><RatioBox w={16} h={9} width={320} /></Hero>

    <Subsection title="Ratios">
      <Grid cols={3}>
        <SampleCard label="1 / 1"><RatioBox w={1} h={1} width={140} /></SampleCard>
        <SampleCard label="4 / 3"><RatioBox w={4} h={3} width={180} /></SampleCard>
        <SampleCard label="16 / 9"><RatioBox w={16} h={9} width={220} /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { AspectRatio } ', K('from'), ' ', S('"@/components/ui/aspect-ratio"'), ';'],
        [''],
        ['<', T('AspectRatio'), ' ratio={16 / 9}>'],
        ['  <', T('img'), ' src=', S('"/hero.jpg"'), ' className=', S('"rounded-md object-cover"'), ' />'],
        ['</', T('AspectRatio'), '>'],
      ]} />
    </Subsection>
  </AtomSection>
);

Object.assign(window, { Atom12_Skeleton, Atom13_Progress, Atom14_Toggle, Atom15_ToggleGroup, Atom16_AspectRatio });
