/* global React, Icon, MolSection, MolHero, Anatomy, UsageRow, UsageCard, Subsection, SampleCard, Grid, PropsTable, CodeBlock, K, S, T, C */
/* eslint-disable no-unused-vars */

// ============================================================
// Molecule 16 — InputOTP
// ============================================================

const OTP = ({ values = ['','','','','',''], caretAt = -1, invalid = false }) => (
  <div className="otp">
    {values.map((v, i) => {
      const isCaret = i === caretAt;
      return (
        <React.Fragment key={i}>
          <div className={`otp-slot ${isCaret ? 'is-caret' : ''} ${invalid ? 'is-invalid' : ''}`}>{v}</div>
          {i === 2 && <span className="otp-separator">—</span>}
        </React.Fragment>
      );
    })}
  </div>
);

const Mol16_InputOTP = () => (
  <MolSection
    num={16} id="mol-inputotp" name="InputOTP"
    desc="Fixed-length segmented input for verification codes. Auto-advances on keystroke, supports paste, and exposes a blinking caret on the active slot."
  >
    <MolHero>
      <OTP values={['4','9','1','','','']} caretAt={3} />
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="InputOTP = Slot[] + (optional) Separator"
        parts={[
          { label: 'Slot', role: 'single char', required: true },
          { label: 'Separator', role: 'visual break' },
        ]}
      />
    </Subsection>

    <Subsection title="Lengths">
      <Grid cols={3}>
        <SampleCard label="4-digit"><OTP values={['1','2','3','']} caretAt={3} /></SampleCard>
        <SampleCard label="6-digit"><OTP values={['4','9','1','','','']} caretAt={3} /></SampleCard>
        <SampleCard label="6-digit + separator"><OTP values={['4','9','1','7','2','']} caretAt={5} /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="States">
      <Grid cols={3}>
        <SampleCard label="empty"><OTP values={['','','','','','']} caretAt={0} /></SampleCard>
        <SampleCard label="filled"><OTP values={['4','9','1','7','2','8']} /></SampleCard>
        <SampleCard label="invalid"><OTP values={['4','9','1','7','2','8']} invalid /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['maxLength', 'number', '6', 'Number of slots.'],
        ['pattern', 'RegExp | string', '—', 'Restrict characters (e.g. digits only).'],
        ['value', 'string', '—', 'Controlled value.'],
        ['onComplete', '(v: string) => void', '—', 'Fires when all slots are filled.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } ', K('from'), ' ', S('"@/components/ui/input-otp"'), ';'],
        [''],
        ['<', T('InputOTP'), ' maxLength=', S('{6}'), ' onComplete=', S('{handleVerify}'), '>'],
        ['  <', T('InputOTPGroup'), '>'],
        ['    {[0,1,2].map(i => <', T('InputOTPSlot'), ' key=', S('{i}'), ' index=', S('{i}'), ' />)}'],
        ['  </', T('InputOTPGroup'), '>'],
        ['  <', T('InputOTPSeparator'), ' />'],
        ['  <', T('InputOTPGroup'), '>…</', T('InputOTPGroup'), '>'],
        ['</', T('InputOTP'), '>'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 17 — Select
// ============================================================

const SelectTrigger = ({ value, placeholder, open, disabled, size = 'md' }) => (
  <button
    className={`sel-trigger ${open ? 'is-open' : ''} ${disabled ? 'is-disabled' : ''}`}
    style={size === 'sm' ? { height: 32, fontSize: 12.5, padding: '0 10px' } : undefined}
  >
    {value ? <span>{value}</span> : <span className="sel-placeholder">{placeholder}</span>}
    <Icon name="chevron-down" size={14} stroke={1.75} className="sel-chevron" />
  </button>
);

const Mol17_Select = () => (
  <MolSection
    num={17} id="mol-select" name="Select"
    desc="Dropdown for choosing one value from a closed list. Use for 5–30 options; use Combobox when searchable, Radio group for 2–4 visible choices, Tabs for navigation-like choices."
  >
    <MolHero>
      <div style={{ position: 'relative', paddingBottom: 200 }}>
        <SelectTrigger value="Pro — $29/mo" open />
        <div style={{ position: 'absolute', top: 44, left: 0 }}>
          <div className="menu" style={{ width: 220 }}>
            <div className="menu-item">Free</div>
            <div className="menu-item is-selected"><Icon name="check" size={14} stroke={2} className="menu-item-icon" />Pro — $29/mo</div>
            <div className="menu-item">Team — $79/mo</div>
            <div className="menu-item">Enterprise</div>
          </div>
        </div>
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="Select = Trigger (value + chevron) + Content (Item[])"
        parts={[
          { label: 'Trigger', required: true },
          { label: 'Value', role: 'or placeholder' },
          { label: 'Content', required: true },
          { label: 'Item', required: true },
          { label: 'Group + Label', role: 'optional' },
        ]}
      />
    </Subsection>

    <Subsection title="Sizes">
      <Grid cols={2}>
        <SampleCard label="sm (32px)"><SelectTrigger size="sm" placeholder="Select region" /></SampleCard>
        <SampleCard label="md (36px, default)"><SelectTrigger placeholder="Select region" /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="States">
      <Grid cols={4}>
        <SampleCard label="empty"><SelectTrigger placeholder="Select plan" /></SampleCard>
        <SampleCard label="value set"><SelectTrigger value="Pro" /></SampleCard>
        <SampleCard label="open"><SelectTrigger value="Pro" open /></SampleCard>
        <SampleCard label="disabled"><SelectTrigger value="Pro" disabled /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['value', 'string', '—', 'Controlled value.'],
        ['defaultValue', 'string', '—', 'Uncontrolled default.'],
        ['placeholder', 'string', '—', 'Shown when no value.'],
        ['disabled', 'boolean', 'false', 'Non-interactive.'],
        ['onValueChange', '(v: string) => void', '—', 'Change handler.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } ', K('from'), ' ', S('"@/components/ui/select"'), ';'],
        [''],
        ['<', T('Select'), ' defaultValue=', S('"pro"'), '>'],
        ['  <', T('SelectTrigger'), '><', T('SelectValue'), ' placeholder=', S('"Select plan"'), ' /></', T('SelectTrigger'), '>'],
        ['  <', T('SelectContent'), '>'],
        ['    <', T('SelectItem'), ' value=', S('"free"'), '>Free</', T('SelectItem'), '>'],
        ['    <', T('SelectItem'), ' value=', S('"pro"'), '>Pro</', T('SelectItem'), '>'],
        ['  </', T('SelectContent'), '>'],
        ['</', T('Select'), '>'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 18 — Combobox
// ============================================================

const Mol18_Combobox = () => (
  <MolSection
    num={18} id="mol-combobox" name="Combobox"
    desc="Searchable Select — text field filters a list of options. Use when there are >30 options or the user is likely to know what they want by name."
  >
    <MolHero>
      <div style={{ position: 'relative', paddingBottom: 300, width: '100%', maxWidth: 320 }}>
        <SelectTrigger value="" placeholder="Assign to teammate…" open />
        <div style={{ position: 'absolute', top: 44, left: 0, width: 320 }}>
          <div className="cmd">
            <div className="cmd-input-wrap">
              <Icon name="search" size={14} stroke={1.75} />
              <input className="cmd-input" defaultValue="sa" />
            </div>
            <div className="cmd-list">
              <div className="cmd-group-label">Teammates</div>
              <div className="cmd-item"><span className="avatar avatar-xs"><span className="avatar-fallback">SA</span></span> <mark>Sa</mark>m Alvarez</div>
              <div className="cmd-item is-hover"><span className="avatar avatar-xs"><span className="avatar-fallback">SA</span></span> <mark>Sa</mark>ra Chen</div>
              <div className="cmd-item"><span className="avatar avatar-xs"><span className="avatar-fallback">SN</span></span> <mark>Sa</mark>ndra Kim</div>
            </div>
          </div>
        </div>
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="Combobox = Trigger + Popover (Input + Filtered List)"
        parts={[
          { label: 'Trigger', required: true },
          { label: 'Input', role: 'filter', required: true },
          { label: 'Item', role: 'matches', required: true },
          { label: 'Empty state' },
        ]}
      />
    </Subsection>

    <Subsection title="States">
      <Grid cols={2}>
        <SampleCard label="filtering">
          <div className="cmd" style={{ width: '100%' }}>
            <div className="cmd-input-wrap">
              <Icon name="search" size={14} stroke={1.75} />
              <input className="cmd-input" defaultValue="sa" />
            </div>
            <div className="cmd-list">
              <div className="cmd-item"><mark>Sa</mark>m Alvarez</div>
              <div className="cmd-item is-hover"><mark>Sa</mark>ra Chen</div>
            </div>
          </div>
        </SampleCard>
        <SampleCard label="no matches">
          <div className="cmd" style={{ width: '100%' }}>
            <div className="cmd-input-wrap">
              <Icon name="search" size={14} stroke={1.75} />
              <input className="cmd-input" defaultValue="xyz" />
            </div>
            <div className="cmd-empty">No teammates found.</div>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['options', 'Option[]', '[]', 'Full list of candidates.'],
        ['filter', '(opt, query) => boolean', 'default', 'Custom matcher.'],
        ['emptyText', 'string', '"No results."', 'Empty state copy.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('// Combobox is composed from Popover + Command.'), ''],
        [K('import'), ' { Popover, PopoverContent, PopoverTrigger } ', K('from'), ' ', S('"@/components/ui/popover"'), ';'],
        [K('import'), ' { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } ', K('from'), ' ', S('"@/components/ui/command"'), ';'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 19 — DatePicker
// ============================================================

const Calendar = ({ selected = 17, today = 12, rangeStart, rangeEnd }) => {
  // Render a static month: Nov 2024, starts on Friday (first row: 28,29,30,31,1,2,3)
  const cells = [];
  for (let i = 28; i <= 31; i++) cells.push({ d: i, muted: true });
  for (let i = 1; i <= 30; i++) cells.push({ d: i });
  for (let i = 1; cells.length < 42; i++) cells.push({ d: i, muted: true });

  return (
    <div className="cal">
      <div className="cal-header">
        <span>November 2024</span>
        <div className="cal-nav">
          <button className="cal-nav-btn"><Icon name="chevron-left" size={14} stroke={1.75} /></button>
          <button className="cal-nav-btn"><Icon name="chevron-right" size={14} stroke={1.75} /></button>
        </div>
      </div>
      <div className="cal-grid">
        {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="cal-dow">{d}</div>)}
        {cells.map((c, i) => {
          const cls = ['cal-day'];
          if (c.muted) cls.push('is-muted');
          if (!c.muted && c.d === today) cls.push('is-today');
          if (!c.muted && c.d === selected) cls.push('is-selected');
          if (!c.muted && rangeStart && rangeEnd) {
            if (c.d === rangeStart) cls.push('is-range-start');
            else if (c.d === rangeEnd) cls.push('is-range-end');
            else if (c.d > rangeStart && c.d < rangeEnd) cls.push('is-in-range');
          }
          return <div key={i} className={cls.join(' ')}>{c.d}</div>;
        })}
      </div>
    </div>
  );
};

const Mol19_DatePicker = () => (
  <MolSection
    num={19} id="mol-datepicker" name="DatePicker"
    desc="Input + calendar popover for selecting a single date or a date range. Uses the underlying Calendar primitive and formats via date-fns."
  >
    <MolHero>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label className="ff-label">Due date</label>
          <button className="sel-trigger is-open" style={{ width: 240, justifyContent: 'flex-start', gap: 10 }}>
            <Icon name="calendar" size={14} stroke={1.75} />
            <span>Nov 17, 2024</span>
          </button>
        </div>
        <Calendar selected={17} />
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="DatePicker = Trigger (input w/ calendar icon) + Popover(Calendar)"
        parts={[
          { label: 'Trigger', required: true },
          { label: 'Calendar', required: true },
          { label: 'Day', role: 'grid cell' },
        ]}
      />
    </Subsection>

    <Subsection title="Modes">
      <Grid cols={2}>
        <SampleCard label="single date"><Calendar selected={17} /></SampleCard>
        <SampleCard label="date range"><Calendar selected={-1} rangeStart={12} rangeEnd={19} /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['mode', '"single" | "range" | "multiple"', '"single"', 'Selection mode.'],
        ['selected', 'Date | DateRange', '—', 'Controlled selection.'],
        ['disabled', '(date) => boolean | Date[]', '—', 'Disable specific days.'],
        ['fromDate / toDate', 'Date', '—', 'Selectable bounds.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Calendar } ', K('from'), ' ', S('"@/components/ui/calendar"'), ';'],
        [K('import'), ' { Popover, PopoverContent, PopoverTrigger } ', K('from'), ' ', S('"@/components/ui/popover"'), ';'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 20 — Command
// ============================================================

const Mol20_Command = () => (
  <MolSection
    num={20} id="mol-command" name="Command"
    desc="Command palette — searchable list of actions, grouped with shortcuts. Usually triggered via ⌘K, rendered inside a Dialog. The primitive behind Combobox."
  >
    <MolHero>
      <div style={{ width: '100%', maxWidth: 480 }}>
        <div className="cmd">
          <div className="cmd-input-wrap">
            <Icon name="search" size={14} stroke={1.75} />
            <input className="cmd-input" defaultValue="" placeholder="Type a command or search…" />
          </div>
          <div className="cmd-list">
            <div className="cmd-group-label">Suggestions</div>
            <div className="cmd-item is-hover"><Icon name="plus" size={14} stroke={1.75} /> New ticket <span className="cmd-shortcut">⌘N</span></div>
            <div className="cmd-item"><Icon name="search" size={14} stroke={1.75} /> Search tickets <span className="cmd-shortcut">⌘/</span></div>
            <div className="cmd-item"><Icon name="users" size={14} stroke={1.75} /> Invite teammate</div>
            <div className="cmd-group-label" style={{ marginTop: 6 }}>Settings</div>
            <div className="cmd-item"><Icon name="settings" size={14} stroke={1.75} /> Preferences <span className="cmd-shortcut">⌘,</span></div>
            <div className="cmd-item"><Icon name="log-out" size={14} stroke={1.75} /> Sign out</div>
          </div>
        </div>
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="Command = Input + List (Group + Item[])"
        parts={[
          { label: 'Input', required: true },
          { label: 'List', required: true },
          { label: 'Group', role: 'with label' },
          { label: 'Item', role: 'action' },
          { label: 'Shortcut', role: 'right-aligned' },
        ]}
      />
    </Subsection>

    <Subsection title="States">
      <Grid cols={2}>
        <SampleCard label="with query + highlight">
          <div className="cmd" style={{ width: '100%' }}>
            <div className="cmd-input-wrap"><Icon name="search" size={14} stroke={1.75} /><input className="cmd-input" defaultValue="inv" /></div>
            <div className="cmd-list">
              <div className="cmd-item is-hover"><Icon name="users" size={14} stroke={1.75} /> <mark>Inv</mark>ite teammate</div>
              <div className="cmd-item"><Icon name="file" size={14} stroke={1.75} /> Export <mark>inv</mark>oice</div>
            </div>
          </div>
        </SampleCard>
        <SampleCard label="empty">
          <div className="cmd" style={{ width: '100%' }}>
            <div className="cmd-input-wrap"><Icon name="search" size={14} stroke={1.75} /><input className="cmd-input" defaultValue="asdf" /></div>
            <div className="cmd-empty">No results found.</div>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['shouldFilter', 'boolean', 'true', 'Built-in filtering. Set false to filter externally.'],
        ['filter', '(value, query) => number', '—', 'Custom scorer (higher = better match).'],
        ['loop', 'boolean', 'false', 'Keyboard navigation wraps.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } ', K('from'), ' ', S('"@/components/ui/command"'), ';'],
      ]} />
    </Subsection>
  </MolSection>
);

Object.assign(window, { Mol16_InputOTP, Mol17_Select, Mol18_Combobox, Mol19_DatePicker, Mol20_Command });
