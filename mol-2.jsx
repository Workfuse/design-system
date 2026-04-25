/* global React, Icon, MolSection, MolHero, Anatomy, UsageRow, UsageCard, Subsection, SampleCard, Grid, PropsTable, CodeBlock, K, S, T, C */
/* eslint-disable no-unused-vars */

// ============================================================
// Molecule 6 — Tabs
// ============================================================

const Tabs = ({ variant = 'default', orientation = 'horizontal', items, active = 0, disabledIdx }) => {
  const isVertical = orientation === 'vertical';
  const listCls = variant === 'pills' ? 'tabs-pills' : 'tabs-list';
  return (
    <div className={`tabs ${isVertical ? 'tabs-vertical' : ''}`}>
      <div className={listCls}>
        {items.map((it, i) => (
          <button
            key={i}
            className={`tabs-trigger ${i === active ? 'is-active' : ''} ${i === disabledIdx ? 'is-disabled' : ''}`}
          >
            {it}
          </button>
        ))}
      </div>
      <div className="tabs-panel">
        {isVertical ? null : `This is the ${items[active]} content.`}
      </div>
    </div>
  );
};

const Mol6_Tabs = () => (
  <MolSection
    num={6} id="mol-tabs" name="Tabs"
    desc="Organizes related content into switchable sections. Use when sections are peer-level; use Accordion when hierarchy matters."
  >
    <MolHero>
      <div style={{ width: '100%', maxWidth: 480 }}>
        <Tabs items={['Overview', 'Messages (12)', 'Settings']} active={0} />
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="Tabs = List (Trigger[]) + Panel (Content)"
        parts={[
          { label: 'List', required: true },
          { label: 'Trigger', role: 'per tab', required: true },
          { label: 'Panel', role: 'content', required: true },
        ]}
      />
    </Subsection>

    <Subsection title="Variants">
      <Grid cols={2}>
        <SampleCard label="default (underline)">
          <div style={{ width: '100%' }}>
            <Tabs items={['Overview', 'Activity', 'Files']} active={0} />
          </div>
        </SampleCard>
        <SampleCard label="pills">
          <div style={{ width: '100%' }}>
            <Tabs variant="pills" items={['Day', 'Week', 'Month']} active={1} />
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Orientations">
      <Grid cols={2}>
        <SampleCard label="horizontal">
          <div style={{ width: '100%' }}>
            <Tabs items={['Overview', 'Team', 'Billing']} active={0} />
          </div>
        </SampleCard>
        <SampleCard label="vertical">
          <div style={{ width: '100%' }}>
            <Tabs orientation="vertical" items={['General', 'Members', 'Security', 'Webhooks']} active={1} />
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="States">
      <Grid cols={3}>
        <SampleCard label="default"><Tabs items={['One', 'Two', 'Three']} active={-1} /></SampleCard>
        <SampleCard label="active"><Tabs items={['One', 'Two', 'Three']} active={1} /></SampleCard>
        <SampleCard label="disabled"><Tabs items={['One', 'Two', 'Three (disabled)']} active={0} disabledIdx={2} /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['value', 'string', '—', 'Controlled active tab value.'],
        ['defaultValue', 'string', '—', 'Uncontrolled default.'],
        ['orientation', '"horizontal" | "vertical"', '"horizontal"', 'Layout direction.'],
        ['onValueChange', '(v: string) => void', '—', 'Change handler.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Tabs, TabsContent, TabsList, TabsTrigger } ', K('from'), ' ', S('"@/components/ui/tabs"'), ';'],
        [''],
        ['<', T('Tabs'), ' defaultValue=', S('"overview"'), '>'],
        ['  <', T('TabsList'), '>'],
        ['    <', T('TabsTrigger'), ' value=', S('"overview"'), '>Overview</', T('TabsTrigger'), '>'],
        ['    <', T('TabsTrigger'), ' value=', S('"messages"'), '>Messages</', T('TabsTrigger'), '>'],
        ['  </', T('TabsList'), '>'],
        ['  <', T('TabsContent'), ' value=', S('"overview"'), '>…</', T('TabsContent'), '>'],
        ['</', T('Tabs'), '>'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 7 — Breadcrumb
// ============================================================

const SEP = { chevron: 'chevron-right', slash: null, dot: null };
const Breadcrumb = ({ items, sep = 'chevron', ellipsis }) => {
  const renderSep = () => {
    if (sep === 'chevron') return <span className="crumb-sep"><Icon name="chevron-right" size={12} stroke={2} /></span>;
    if (sep === 'slash') return <span className="crumb-sep">/</span>;
    return <span className="crumb-sep">·</span>;
  };
  const list = ellipsis ? [items[0], '…', ...items.slice(-2)] : items;
  return (
    <nav className="crumb">
      {list.map((item, i) => {
        const isLast = i === list.length - 1;
        const isEllipsis = item === '…';
        return (
          <React.Fragment key={i}>
            {isEllipsis
              ? <span className="crumb-link">…</span>
              : isLast
                ? <span className="crumb-current">{item}</span>
                : <span className="crumb-link">{item}</span>}
            {!isLast && renderSep()}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

const Mol7_Breadcrumb = () => (
  <MolSection
    num={7} id="mol-breadcrumb" name="Breadcrumb"
    desc="Shows hierarchical location within the app. Use on detail pages to provide context and upward navigation."
  >
    <MolHero>
      <Breadcrumb items={['Home', 'Tickets', 'Support', 'WF-1234']} />
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="Breadcrumb = Link[] + Separator[] + Current"
        parts={[
          { label: 'Link', role: 'ancestor, clickable' },
          { label: 'Separator', role: 'chevron | slash | dot' },
          { label: 'Current', role: 'non-interactive', required: true },
        ]}
      />
    </Subsection>

    <Subsection title="Separators">
      <Grid cols={3}>
        <SampleCard label="chevron (default)"><Breadcrumb items={['Home', 'Tickets', 'WF-1234']} sep="chevron" /></SampleCard>
        <SampleCard label="slash"><Breadcrumb items={['Home', 'Tickets', 'WF-1234']} sep="slash" /></SampleCard>
        <SampleCard label="dot"><Breadcrumb items={['Home', 'Tickets', 'WF-1234']} sep="dot" /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Usage examples">
      <UsageRow cols={2}>
        <UsageCard label="long path with ellipsis">
          <Breadcrumb items={['Home', 'Admin', 'Schools', 'Colégio Alfa', 'Classes', 'WF-1234']} ellipsis />
        </UsageCard>
        <UsageCard label="short path">
          <Breadcrumb items={['Settings', 'Team']} />
        </UsageCard>
      </UsageRow>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['separator', 'ReactNode', '<ChevronRight />', 'Element rendered between items.'],
        ['items', 'Array<{ label, href? }>', '—', 'Crumb list; last is treated as current.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } ', K('from'), ' ', S('"@/components/ui/breadcrumb"'), ';'],
        [''],
        ['<', T('Breadcrumb'), '>'],
        ['  <', T('BreadcrumbItem'), '><', T('BreadcrumbLink'), ' href=', S('"/"'), '>Home</', T('BreadcrumbLink'), '></', T('BreadcrumbItem'), '>'],
        ['  <', T('BreadcrumbSeparator'), ' />'],
        ['  <', T('BreadcrumbItem'), '><', T('BreadcrumbPage'), '>WF-1234</', T('BreadcrumbPage'), '></', T('BreadcrumbItem'), '>'],
        ['</', T('Breadcrumb'), '>'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 8 — Pagination
// ============================================================

const Pagination = ({ variant = 'numbered', current = 1, total = 10, disabledPrev, disabledNext }) => {
  if (variant === 'simple') {
    return (
      <div className="pag">
        <button className={`pag-btn ${disabledPrev ? 'is-disabled' : ''}`}><Icon name="chevron-left" size={14} stroke={2} /> Prev</button>
        <button className={`pag-btn ${disabledNext ? 'is-disabled' : ''}`}>Next <Icon name="chevron-right" size={14} stroke={2} /></button>
      </div>
    );
  }
  const pages = [];
  for (let i = 1; i <= Math.min(6, total); i++) pages.push(i);
  if (total > 7) { pages.push('…'); pages.push(total); }
  return (
    <div className="pag">
      <button className={`pag-btn ${disabledPrev ? 'is-disabled' : ''}`}><Icon name="chevron-left" size={14} stroke={2} /> Prev</button>
      {pages.map((p, i) => (
        p === '…'
          ? <span key={i} className="pag-ellipsis">…</span>
          : <button key={i} className={`pag-btn ${p === current ? 'is-active' : ''}`}>{p}</button>
      ))}
      <button className={`pag-btn ${disabledNext ? 'is-disabled' : ''}`}>Next <Icon name="chevron-right" size={14} stroke={2} /></button>
    </div>
  );
};

const Mol8_Pagination = () => (
  <MolSection
    num={8} id="mol-pagination" name="Pagination"
    desc="Navigates between pages in a list or collection."
  >
    <MolHero>
      <Pagination current={4} total={10} />
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="Pagination = Prev + Page[] + (Ellipsis + Last) + Next"
        parts={[
          { label: 'Prev', required: true },
          { label: 'Page item', role: 'numbered or active' },
          { label: 'Ellipsis', role: 'overflow' },
          { label: 'Next', required: true },
        ]}
      />
    </Subsection>

    <Subsection title="Variants">
      <Grid cols={2}>
        <SampleCard label="simple"><Pagination variant="simple" /></SampleCard>
        <SampleCard label="numbered"><Pagination current={4} total={10} /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="States">
      <Grid cols={2}>
        <SampleCard label="first page"><Pagination current={1} total={10} disabledPrev /></SampleCard>
        <SampleCard label="middle page"><Pagination current={5} total={10} /></SampleCard>
        <SampleCard label="last page"><Pagination current={10} total={10} disabledNext /></SampleCard>
        <SampleCard label="single page"><Pagination current={1} total={1} disabledPrev disabledNext /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Usage examples">
      <UsageRow cols={1}>
        <UsageCard label="with page-size selector">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <Pagination current={4} total={10} />
            <div className="sel-trigger" style={{ minWidth: 140 }}>
              <span>20 per page</span>
              <span className="sel-chevron"><Icon name="chevron-down" size={14} stroke={2} /></span>
            </div>
          </div>
        </UsageCard>
      </UsageRow>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['page', 'number', '1', 'Current page (1-indexed).'],
        ['totalPages', 'number', '—', 'Total pages.'],
        ['onPageChange', '(p: number) => void', '—', 'Change handler.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } ', K('from'), ' ', S('"@/components/ui/pagination"'), ';'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 9 — FormField
// ============================================================

const FormField = ({ label, required, help, error, disabled, children, inline }) => (
  <div className={`ff ${inline ? 'ff-row' : ''}`}>
    <label className="ff-label">
      {label}
      {required && <span className="req">*</span>}
    </label>
    {children}
    {error ? <div className="ff-error"><Icon name="alert-circle" size={12} stroke={2} /> {error}</div> : help && <div className="ff-help">{help}</div>}
  </div>
);

const Mol9_FormField = () => (
  <MolSection
    num={9} id="mol-formfield" name="FormField"
    desc="Compose Label + input + HelpText + ErrorMessage in the canonical form layout. Foundation for all forms."
  >
    <MolHero>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <FormField label="Email" help="We'll never share your email.">
          <input className="inp" placeholder="you@example.com" defaultValue="yan@workfuse.edu" />
        </FormField>
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="FormField = Label + Input + (HelpText | ErrorMessage)"
        parts={[
          { label: 'Label', required: true },
          { label: 'Input / Textarea / Select', required: true },
          { label: 'HelpText', role: 'optional' },
          { label: 'ErrorMessage', role: 'replaces help when present' },
        ]}
      />
    </Subsection>

    <Subsection title="States">
      <Grid cols={2}>
        <SampleCard label="default">
          <div style={{ width: '100%' }}><FormField label="Full name"><input className="inp" placeholder="Jane Doe" /></FormField></div>
        </SampleCard>
        <SampleCard label="with help">
          <div style={{ width: '100%' }}><FormField label="Email" help="We'll never share your email."><input className="inp" placeholder="you@example.com" /></FormField></div>
        </SampleCard>
        <SampleCard label="with error">
          <div style={{ width: '100%' }}><FormField label="Email" error="Enter a valid email address."><input className="inp is-invalid" defaultValue="not-an-email" /></FormField></div>
        </SampleCard>
        <SampleCard label="disabled">
          <div style={{ width: '100%' }}><FormField label="Account ID" help="Assigned automatically."><input className="inp is-disabled" disabled defaultValue="WF-00042" /></FormField></div>
        </SampleCard>
        <SampleCard label="required">
          <div style={{ width: '100%' }}><FormField label="Password" required help="At least 12 characters."><input className="inp" type="password" defaultValue="••••••••" /></FormField></div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Input variants">
      <Grid cols={2}>
        <SampleCard label="+ Input">
          <div style={{ width: '100%' }}><FormField label="Email" help="We'll never share your email."><input className="inp" placeholder="you@example.com" /></FormField></div>
        </SampleCard>
        <SampleCard label="+ Textarea">
          <div style={{ width: '100%' }}><FormField label="Description" help="Max 500 characters."><textarea className="txta" rows={3} placeholder="Tell us about your class…" /></FormField></div>
        </SampleCard>
        <SampleCard label="+ Select">
          <div style={{ width: '100%' }}>
            <FormField label="Country">
              <div className="sel-trigger"><span>Brazil</span><span className="sel-chevron"><Icon name="chevron-down" size={14} stroke={2} /></span></div>
            </FormField>
          </div>
        </SampleCard>
        <SampleCard label="+ Checkbox (inline)">
          <div style={{ width: '100%' }}>
            <div className="ff-row">
              <input type="checkbox" className="ctrl ctrl-checkbox" defaultChecked />
              <label className="ff-label" style={{ fontWeight: 400 }}>Send me product updates</label>
            </div>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['label', 'string', '—', 'Field label.'],
        ['required', 'boolean', 'false', 'Adds red asterisk.'],
        ['help', 'string', '—', 'Helper text below input.'],
        ['error', 'string', '—', 'Error message (replaces help).'],
        ['children', 'ReactNode', '—', 'The input control.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } ', K('from'), ' ', S('"@/components/ui/form"'), ';'],
        [''],
        ['<', T('FormField'), ' control={form.control} name=', S('"email"'), ' render={({ field }) => ('],
        ['  <', T('FormItem'), '>'],
        ['    <', T('FormLabel'), '>Email</', T('FormLabel'), '>'],
        ['    <', T('FormControl'), '><', T('Input'), ' {...field} /></', T('FormControl'), '>'],
        ['    <', T('FormDescription'), '>We\'ll never share your email.</', T('FormDescription'), '>'],
        ['    <', T('FormMessage'), ' />'],
        ['  </', T('FormItem'), '>'],
        [')} />'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 10 — DropdownMenu
// ============================================================

const DropdownMenu = () => (
  <div className="menu" style={{ width: 240 }}>
    <div className="menu-label">My Account</div>
    <div className="menu-item"><Icon name="user" size={14} stroke={1.75} className="menu-item-icon" /> Profile <span className="menu-item-shortcut">⌘P</span></div>
    <div className="menu-item"><Icon name="settings" size={14} stroke={1.75} className="menu-item-icon" /> Settings <span className="menu-item-shortcut">⌘,</span></div>
    <div className="menu-separator" />
    <div className="menu-item is-hover"><Icon name="users" size={14} stroke={1.75} className="menu-item-icon" /> Team</div>
    <div className="menu-item"><Icon name="plus" size={14} stroke={1.75} className="menu-item-icon" /> Invite users</div>
    <div className="menu-separator" />
    <div className="menu-item is-destructive"><Icon name="log-out" size={14} stroke={1.75} className="menu-item-icon" /> Log out</div>
  </div>
);

const Mol10_DropdownMenu = () => (
  <MolSection
    num={10} id="mol-dropdownmenu" name="DropdownMenu"
    desc="Menu revealed by clicking a trigger. Use for contextual actions, account menus, settings shortcuts."
  >
    <MolHero>
      <DropdownMenu />
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="DropdownMenu = Trigger + Content (Label + Item[] + Separator + Sub)"
        parts={[
          { label: 'Trigger', required: true },
          { label: 'Content', role: 'floating card', required: true },
          { label: 'Label', role: 'group header' },
          { label: 'Item' },
          { label: 'Separator' },
          { label: 'Shortcut', role: 'Kbd' },
          { label: 'Sub-Trigger', role: 'nested submenu' },
        ]}
      />
    </Subsection>

    <Subsection title="Item variants">
      <Grid cols={2}>
        <SampleCard label="default">
          <div className="menu" style={{ width: 200 }}>
            <div className="menu-item">Rename</div>
            <div className="menu-item">Move to…</div>
            <div className="menu-item">Archive</div>
          </div>
        </SampleCard>
        <SampleCard label="with icon">
          <div className="menu" style={{ width: 200 }}>
            <div className="menu-item"><Icon name="pencil" size={14} stroke={1.75} className="menu-item-icon" /> Rename</div>
            <div className="menu-item"><Icon name="folder-input" size={14} stroke={1.75} className="menu-item-icon" /> Move</div>
            <div className="menu-item"><Icon name="archive" size={14} stroke={1.75} className="menu-item-icon" /> Archive</div>
          </div>
        </SampleCard>
        <SampleCard label="with shortcut">
          <div className="menu" style={{ width: 200 }}>
            <div className="menu-item">Copy <span className="menu-item-shortcut">⌘C</span></div>
            <div className="menu-item">Paste <span className="menu-item-shortcut">⌘V</span></div>
            <div className="menu-item">Delete <span className="menu-item-shortcut">⌫</span></div>
          </div>
        </SampleCard>
        <SampleCard label="destructive">
          <div className="menu" style={{ width: 200 }}>
            <div className="menu-item">Edit</div>
            <div className="menu-separator" />
            <div className="menu-item is-destructive"><Icon name="trash-2" size={14} stroke={1.75} className="menu-item-icon" /> Delete</div>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="States">
      <Grid cols={2}>
        <SampleCard label="closed">
          <button className="btn btn-outline btn-sm">Menu <Icon name="chevron-down" size={12} stroke={2} /></button>
        </SampleCard>
        <SampleCard label="open"><DropdownMenu /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['open', 'boolean', 'false', 'Controlled visibility.'],
        ['side', '"top" | "right" | "bottom" | "left"', '"bottom"', 'Popover side.'],
        ['align', '"start" | "center" | "end"', '"start"', 'Popover alignment.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' {'],
        ['  ', T('DropdownMenu'), ', ', T('DropdownMenuContent'), ', ', T('DropdownMenuItem'), ','],
        ['  ', T('DropdownMenuLabel'), ', ', T('DropdownMenuSeparator'), ', ', T('DropdownMenuShortcut'), ','],
        ['  ', T('DropdownMenuTrigger'), ','],
        ['} ', K('from'), ' ', S('"@/components/ui/dropdown-menu"'), ';'],
      ]} />
    </Subsection>
  </MolSection>
);

Object.assign(window, { Mol6_Tabs, Mol7_Breadcrumb, Mol8_Pagination, Mol9_FormField, Mol10_DropdownMenu });
