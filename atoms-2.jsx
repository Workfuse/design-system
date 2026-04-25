/* global React, Icon */
/* eslint-disable no-unused-vars */

// ============================================================
// Atom 7 — Checkbox
// ============================================================

const Checkbox = ({ state, kind = 'unchecked', label }) => {
  const isChecked = kind === 'checked' || kind === 'indeterminate';
  const cls = [
    'ctrl', 'cb',
    isChecked && 'is-checked',
    state === 'focus' && 'is-focus',
    state === 'disabled' && 'is-disabled',
  ].filter(Boolean).join(' ');
  return (
    <label className="inline-flex items-center gap-2" style={state === 'disabled' ? { opacity: 0.6, cursor: 'not-allowed' } : {}}>
      <span className={cls}>
        {kind === 'checked' && <Icon name="check" size={12} stroke={3} />}
        {kind === 'indeterminate' && <Icon name="minus" size={12} stroke={3} />}
      </span>
      {label && <span className="text-[13px] text-foreground">{label}</span>}
    </label>
  );
};

const Atom7_Checkbox = () => (
  <AtomSection num={7} id="atom-checkbox" name="Checkbox"
    desc="Toggles a boolean state. Use in groups or inline with a label.">
    <Hero><Checkbox kind="checked" label="I agree to the terms" /></Hero>

    <Subsection title="States">
      <Grid cols={3}>
        <SampleCard label="unchecked"><Checkbox /></SampleCard>
        <SampleCard label="checked"><Checkbox kind="checked" /></SampleCard>
        <SampleCard label="indeterminate"><Checkbox kind="indeterminate" /></SampleCard>
        <SampleCard label="disabled · unchecked"><Checkbox state="disabled" /></SampleCard>
        <SampleCard label="disabled · checked"><Checkbox state="disabled" kind="checked" /></SampleCard>
        <SampleCard label="focus-visible"><Checkbox kind="checked" state="focus" /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="With label & groups">
      <Grid cols={2}>
        <SampleCard label="with label"><Checkbox kind="checked" label="Accept terms and conditions" /></SampleCard>
        <SampleCard label="group of 3">
          <div className="flex flex-col gap-2.5 items-start">
            <Checkbox kind="checked" label="Email notifications" />
            <Checkbox label="SMS notifications" />
            <Checkbox kind="checked" label="In-app notifications" />
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Checkbox } ', K('from'), ' ', S('"@/components/ui/checkbox"'), ';'],
        [''],
        ['<', T('Checkbox'), ' id=', S('"terms"'), ' />'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 8 — Radio
// ============================================================

const Radio = ({ state, checked, label }) => {
  const cls = [
    'ctrl', 'rd',
    checked && 'is-checked',
    state === 'focus' && 'is-focus',
    state === 'disabled' && 'is-disabled',
  ].filter(Boolean).join(' ');
  return (
    <label className="inline-flex items-center gap-2" style={state === 'disabled' ? { opacity: 0.6, cursor: 'not-allowed' } : {}}>
      <span className={cls} />
      {label && <span className="text-[13px] text-foreground">{label}</span>}
    </label>
  );
};

const Atom8_Radio = () => (
  <AtomSection num={8} id="atom-radio" name="Radio"
    desc="Select one option from a mutually-exclusive group.">
    <Hero>
      <div className="flex flex-col gap-2.5 items-start">
        <Radio checked label="Email" />
        <Radio label="SMS" />
        <Radio label="Push" />
      </div>
    </Hero>

    <Subsection title="States">
      <Grid cols={4}>
        <SampleCard label="unchecked"><Radio /></SampleCard>
        <SampleCard label="checked"><Radio checked /></SampleCard>
        <SampleCard label="disabled"><Radio state="disabled" /></SampleCard>
        <SampleCard label="focus-visible"><Radio checked state="focus" /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { RadioGroup, RadioGroupItem } ', K('from'), ' ', S('"@/components/ui/radio-group"'), ';'],
        [''],
        ['<', T('RadioGroup'), ' defaultValue=', S('"email"'), '>'],
        ['  <', T('RadioGroupItem'), ' value=', S('"email"'), ' id=', S('"r1"'), ' />'],
        ['  <', T('RadioGroupItem'), ' value=', S('"sms"'), ' id=', S('"r2"'), ' />'],
        ['</', T('RadioGroup'), '>'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 9 — Switch
// ============================================================

const Switch = ({ on, state, label }) => {
  const cls = [
    'switch',
    on && 'is-on',
    state === 'focus' && 'is-focus',
    state === 'disabled' && 'is-disabled',
  ].filter(Boolean).join(' ');
  const inner = <span className={cls} />;
  if (label) return (
    <label className="inline-flex items-center gap-2.5">
      {inner}
      <span className="text-[13px] text-foreground">{label}</span>
    </label>
  );
  return inner;
};

const Atom9_Switch = () => (
  <AtomSection num={9} id="atom-switch" name="Switch"
    desc="Binary on/off toggle. Use for immediate-effect settings.">
    <Hero><Switch on label="Notifications" /></Hero>
    <Subsection title="States">
      <Grid cols={4}>
        <SampleCard label="off"><Switch /></SampleCard>
        <SampleCard label="on"><Switch on /></SampleCard>
        <SampleCard label="disabled · off"><Switch state="disabled" /></SampleCard>
        <SampleCard label="disabled · on"><Switch on state="disabled" /></SampleCard>
      </Grid>
    </Subsection>
    <Subsection title="With label">
      <SampleCard label="inline label"><Switch on label="Enable email notifications" /></SampleCard>
    </Subsection>
    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Switch } ', K('from'), ' ', S('"@/components/ui/switch"'), ';'],
        [''],
        ['<', T('Switch'), ' id=', S('"notifications"'), ' defaultChecked />'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 10 — Slider
// ============================================================

const Slider = ({ value = 40, range, state }) => {
  if (range) {
    const [a, b] = [25, 70];
    return (
      <div className="slider-track">
        <div className="slider-range" style={{ left: `${a}%`, width: `${b - a}%` }} />
        <div className={`slider-thumb ${state === 'focus' ? 'is-focus' : ''}`} style={{ left: `${a}%` }} />
        <div className="slider-thumb" style={{ left: `${b}%` }} />
      </div>
    );
  }
  return (
    <div className="slider-track" style={state === 'disabled' ? { opacity: 0.5 } : {}}>
      <div className="slider-range" style={{ width: `${value}%` }} />
      <div className={`slider-thumb ${state === 'focus' ? 'is-focus' : ''}`} style={{ left: `${value}%` }} />
    </div>
  );
};

const Atom10_Slider = () => (
  <AtomSection num={10} id="atom-slider" name="Slider"
    desc="Select a numeric value from a range.">
    <Hero>
      <div style={{ width: 320, position: 'relative', paddingTop: 28 }}>
        <div className="absolute mono text-[11px] font-semibold text-foreground -translate-x-1/2" style={{ top: 0, left: '40%' }}>40</div>
        <Slider value={40} />
      </div>
    </Hero>

    <Subsection title="Variants">
      <Grid cols={2}>
        <SampleCard label="single"><div style={{ width: '100%' }}><Slider value={40} /></div></SampleCard>
        <SampleCard label="range"><div style={{ width: '100%' }}><Slider range /></div></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="States">
      <Grid cols={3}>
        <SampleCard label="default"><div style={{ width: '100%' }}><Slider value={40} /></div></SampleCard>
        <SampleCard label="focus-visible"><div style={{ width: '100%' }}><Slider value={40} state="focus" /></div></SampleCard>
        <SampleCard label="disabled"><div style={{ width: '100%' }}><Slider value={40} state="disabled" /></div></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Slider } ', K('from'), ' ', S('"@/components/ui/slider"'), ';'],
        [''],
        ['<', T('Slider'), ' defaultValue={[40]} max={100} step={1} />'],
      ]} />
    </Subsection>
  </AtomSection>
);

// ============================================================
// Atom 11 — Separator
// ============================================================

const Atom11_Separator = () => (
  <AtomSection num={11} id="atom-separator" name="Separator"
    desc="Visually divide content. Use sparingly — prefer surface tonal shifts.">
    <Hero>
      <div style={{ width: 320 }}>
        <div className="text-[13px] text-foreground">Profile</div>
        <div className="text-[12px] text-muted-foreground">Manage your account</div>
        <div className="sep-h my-4" />
        <div className="text-[13px] text-foreground">Notifications</div>
        <div className="text-[12px] text-muted-foreground">Control what reaches you</div>
      </div>
    </Hero>

    <Subsection title="Orientations">
      <Grid cols={2}>
        <SampleCard label="horizontal"><div className="sep-h" style={{ width: '80%' }} /></SampleCard>
        <SampleCard label="vertical">
          <div className="flex items-center gap-4" style={{ height: 40 }}>
            <span className="text-[13px]">Left</span>
            <div className="sep-v" style={{ height: '100%' }} />
            <span className="text-[13px]">Right</span>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Separator } ', K('from'), ' ', S('"@/components/ui/separator"'), ';'],
        [''],
        ['<', T('Separator'), ' />'],
        ['<', T('Separator'), ' orientation=', S('"vertical"'), ' />'],
      ]} />
    </Subsection>
  </AtomSection>
);

Object.assign(window, { Atom7_Checkbox, Atom8_Radio, Atom9_Switch, Atom10_Slider, Atom11_Separator });
