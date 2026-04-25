/* global React, Icon, MolSection, MolHero, Anatomy, UsageRow, UsageCard, Subsection, SampleCard, Grid, PropsTable, CodeBlock, K, S, T, C */
/* eslint-disable no-unused-vars */

// ============================================================
// Molecule 21 — SearchInput
// ============================================================

const SearchInput = ({ value = '', placeholder = 'Search…', size = 'md', withShortcut = true, withClear = false }) => (
  <div className={`srch ${size === 'sm' ? 'is-sm' : ''}`}>
    <span className="srch-lead"><Icon name="search" size={size === 'sm' ? 13 : 14} stroke={1.75} /></span>
    <input className="srch-input" defaultValue={value} placeholder={placeholder} />
    <span className="srch-trail">
      {withClear && value && (
        <button className="srch-clear"><Icon name="x" size={13} stroke={2} /></button>
      )}
      {withShortcut && !value && <span className="kbd">⌘K</span>}
    </span>
  </div>
);

const Mol21_SearchInput = () => (
  <MolSection
    num={21} id="mol-searchinput" name="SearchInput"
    desc="Composite input with a leading search icon and optional trailing shortcut hint or clear button. Use at the top of lists, command bars, and global nav."
  >
    <MolHero>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <SearchInput placeholder="Search tickets, teammates, settings…" />
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="SearchInput = LeadingIcon + Input + (Shortcut | Clear)"
        parts={[
          { label: 'Leading icon', role: 'search glyph', required: true },
          { label: 'Input', required: true },
          { label: 'Shortcut', role: 'when empty' },
          { label: 'Clear', role: 'when value set' },
        ]}
      />
    </Subsection>

    <Subsection title="Sizes">
      <Grid cols={2}>
        <SampleCard label="sm (32px)"><div style={{ width: '100%' }}><SearchInput size="sm" /></div></SampleCard>
        <SampleCard label="md (36px)"><div style={{ width: '100%' }}><SearchInput /></div></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="States">
      <Grid cols={3}>
        <SampleCard label="empty + shortcut"><div style={{ width: '100%' }}><SearchInput /></div></SampleCard>
        <SampleCard label="has value + clear"><div style={{ width: '100%' }}><SearchInput value="billing issue" withClear withShortcut={false} /></div></SampleCard>
        <SampleCard label="minimal"><div style={{ width: '100%' }}><SearchInput withShortcut={false} /></div></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['value', 'string', '—', 'Controlled value.'],
        ['onChange', '(v: string) => void', '—', 'Change handler.'],
        ['onClear', '() => void', '—', 'Called when the clear button is pressed.'],
        ['shortcut', 'string | false', '"⌘K"', 'Right-side hint shown when empty.'],
        ['size', '"sm" | "md"', '"md"', 'Control height.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { SearchInput } ', K('from'), ' ', S('"@/components/ui/search-input"'), ';'],
        [''],
        ['<', T('SearchInput'), ' placeholder=', S('"Search tickets…"'), ' shortcut=', S('"⌘K"'), ' />'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 22 — EmptyState
// ============================================================

const EmptyState = ({ icon = 'inbox', title, desc, action, variant }) => (
  <div className={`empty ${variant === 'error' ? 'is-error' : ''}`}>
    <div className="empty-icon"><Icon name={icon} size={24} stroke={1.5} /></div>
    <div className="empty-title">{title}</div>
    <div className="empty-desc">{desc}</div>
    {action && <div className="empty-action">{action}</div>}
  </div>
);

const Mol22_EmptyState = () => (
  <MolSection
    num={22} id="mol-emptystate" name="EmptyState"
    desc="Placeholder shown when a list, table, search, or feature has nothing to display. Always explain why it's empty and suggest a next action."
  >
    <MolHero>
      <div style={{ width: '100%', maxWidth: 520 }}>
        <EmptyState
          icon="inbox"
          title="No tickets assigned"
          desc="When teammates route tickets to you, they'll show up here. You can also pull from the triage queue."
          action={<button className="btn btn-default">Open triage queue</button>}
        />
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="EmptyState = Icon + Title + Description + (optional) Action"
        parts={[
          { label: 'Icon', role: 'visual anchor', required: true },
          { label: 'Title', role: 'why empty', required: true },
          { label: 'Description', role: 'context' },
          { label: 'Action', role: 'next step' },
        ]}
      />
    </Subsection>

    <Subsection title="Variants">
      <Grid cols={2}>
        <SampleCard label="default (neutral)">
          <div style={{ width: '100%' }}>
            <EmptyState
              icon="search"
              title="No matches for “invoice”"
              desc="Try a different keyword, or clear filters to see all tickets."
              action={<button className="btn btn-outline btn-sm">Clear filters</button>}
            />
          </div>
        </SampleCard>
        <SampleCard label="error">
          <div style={{ width: '100%' }}>
            <EmptyState
              variant="error"
              icon="alert-triangle"
              title="Couldn't load your inbox"
              desc="We're having trouble reaching the server. Check your connection and try again."
              action={<button className="btn btn-default btn-sm">Retry</button>}
            />
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Contexts">
      <Grid cols={3}>
        <SampleCard label="empty table / list">
          <div style={{ width: '100%' }}>
            <EmptyState icon="inbox" title="No tickets yet" desc="Connect a channel to start receiving tickets." />
          </div>
        </SampleCard>
        <SampleCard label="empty search">
          <div style={{ width: '100%' }}>
            <EmptyState icon="search" title="No results" desc="Try adjusting your filters." />
          </div>
        </SampleCard>
        <SampleCard label="first-run / feature">
          <div style={{ width: '100%' }}>
            <EmptyState
              icon="sparkles"
              title="Set up AI routing"
              desc="Let the agent auto-triage incoming tickets based on your taxonomy."
              action={<button className="btn btn-default btn-sm">Get started</button>}
            />
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['icon', 'LucideIcon | ReactNode', '—', 'Visual anchor.'],
        ['title', 'string', '—', 'Primary message. Required.'],
        ['description', 'string | ReactNode', '—', 'Supporting context.'],
        ['action', 'ReactNode', '—', 'Typically a Button.'],
        ['variant', '"default" | "error"', '"default"', 'Destructive tint for failure cases.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { EmptyState } ', K('from'), ' ', S('"@/components/ui/empty-state"'), ';'],
        [''],
        ['<', T('EmptyState'), ''],
        ['  icon=', S('{Inbox}'),''],
        ['  title=', S('"No tickets assigned"'),''],
        ['  description=', S('"When teammates route tickets to you, they show up here."'),''],
        ['  action=', S('{<Button>Open triage queue</Button>}'),''],
        ['/>'],
      ]} />
    </Subsection>
  </MolSection>
);

Object.assign(window, { Mol21_SearchInput, Mol22_EmptyState });
