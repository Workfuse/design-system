/* global React, Icon, MolSection, MolHero, Anatomy, UsageRow, UsageCard, Subsection, SampleCard, Grid, PropsTable, CodeBlock, K, S, T, C */
/* eslint-disable no-unused-vars */

// ============================================================
// Molecule 11 — ContextMenu
// ============================================================

const Mol11_ContextMenu = () => (
  <MolSection
    num={11} id="mol-contextmenu" name="ContextMenu"
    desc="Right-click menu. Same structure as DropdownMenu, but invoked via right-click/long-press on a surface."
  >
    <MolHero>
      <div style={{ position: 'relative', width: 360, height: 200, border: '1px dashed var(--border)', borderRadius: 'var(--radius)', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted-foreground)', fontSize: 13 }}>
        Right-click anywhere
        <div style={{ position: 'absolute', top: 70, left: 130 }}>
          <div className="menu" style={{ width: 200 }}>
            <div className="menu-item"><Icon name="external-link" size={14} stroke={1.75} className="menu-item-icon" /> Open in new tab</div>
            <div className="menu-item"><Icon name="link" size={14} stroke={1.75} className="menu-item-icon" /> Copy link</div>
            <div className="menu-separator" />
            <div className="menu-item">Rename</div>
            <div className="menu-item is-destructive"><Icon name="trash-2" size={14} stroke={1.75} className="menu-item-icon" /> Delete</div>
          </div>
        </div>
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="ContextMenu = Surface (trigger on right-click) + Menu (same as DropdownMenu)"
        parts={[
          { label: 'Surface', role: 'any region', required: true },
          { label: 'Menu', role: 'positioned at cursor', required: true },
        ]}
      />
    </Subsection>

    <Subsection title="States">
      <Grid cols={2}>
        <SampleCard label="closed">
          <div style={{ width: 240, height: 80, border: '1px dashed var(--border)', borderRadius: 'var(--radius)', background: 'var(--muted)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted-foreground)', fontSize: 12 }}>Right-click here</div>
        </SampleCard>
        <SampleCard label="open (at cursor)">
          <div className="menu" style={{ width: 200 }}>
            <div className="menu-item">Open</div>
            <div className="menu-item">Copy link</div>
            <div className="menu-separator" />
            <div className="menu-item is-destructive">Delete</div>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['onOpenChange', '(open: boolean) => void', '—', 'Called on open/close.'],
        ['modal', 'boolean', 'true', 'Blocks outside interaction while open.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } ', K('from'), ' ', S('"@/components/ui/context-menu"'), ';'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 12 — Menubar
// ============================================================

const Mol12_Menubar = () => (
  <MolSection
    num={12} id="mol-menubar" name="Menubar"
    desc="Horizontal bar with multiple top-level dropdowns, like a desktop app's File/Edit/View menu. Use in admin dashboards and power-user tools — not in end-user portals."
  >
    <MolHero>
      <div style={{ position: 'relative', paddingBottom: 240 }}>
        <div className="menubar">
          <button className="menubar-trigger">File</button>
          <button className="menubar-trigger is-open">Edit</button>
          <button className="menubar-trigger">View</button>
          <button className="menubar-trigger">Help</button>
        </div>
        <div style={{ position: 'absolute', top: 38, left: 40 }}>
          <div className="menu" style={{ width: 220 }}>
            <div className="menu-item">Undo <span className="menu-item-shortcut">⌘Z</span></div>
            <div className="menu-item">Redo <span className="menu-item-shortcut">⇧⌘Z</span></div>
            <div className="menu-separator" />
            <div className="menu-item">Cut <span className="menu-item-shortcut">⌘X</span></div>
            <div className="menu-item">Copy <span className="menu-item-shortcut">⌘C</span></div>
            <div className="menu-item">Paste <span className="menu-item-shortcut">⌘V</span></div>
            <div className="menu-separator" />
            <div className="menu-item">Preferences <span className="menu-item-shortcut">⌘,</span></div>
          </div>
        </div>
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="Menubar = [Menu Trigger + Menu Content]+"
        parts={[
          { label: 'Menubar', role: 'container', required: true },
          { label: 'Menu', role: 'top-level trigger' },
          { label: 'MenuItem' },
          { label: 'MenuSeparator' },
          { label: 'MenuSub', role: 'nested' },
        ]}
      />
    </Subsection>

    <Subsection title="States">
      <Grid cols={2}>
        <SampleCard label="closed">
          <div className="menubar">
            <button className="menubar-trigger">File</button>
            <button className="menubar-trigger">Edit</button>
            <button className="menubar-trigger">View</button>
          </div>
        </SampleCard>
        <SampleCard label="one menu open">
          <div className="menubar">
            <button className="menubar-trigger">File</button>
            <button className="menubar-trigger is-open">Edit</button>
            <button className="menubar-trigger">View</button>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['defaultValue', 'string', '—', 'Initially open menu.'],
        ['value', 'string', '—', 'Controlled open menu.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } ', K('from'), ' ', S('"@/components/ui/menubar"'), ';'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 13 — NavigationMenu
// ============================================================

const Mol13_NavigationMenu = () => (
  <MolSection
    num={13} id="mol-navigationmenu" name="NavigationMenu"
    desc="Horizontal main navigation for the app or a marketing site. Supports hover-triggered dropdown panels with rich content."
  >
    <MolHero>
      <div style={{ position: 'relative', paddingBottom: 220, width: '100%', maxWidth: 620 }}>
        <div className="navm">
          <button className="navm-trigger is-open">Product <Icon name="chevron-down" size={12} stroke={2} /></button>
          <button className="navm-trigger">Solutions</button>
          <button className="navm-trigger">Pricing</button>
          <button className="navm-trigger">Docs</button>
        </div>
        <div style={{ position: 'absolute', top: 44, left: 0 }}>
          <div className="navm-panel">
            {[
              ['bot', 'AI Agent', 'Auto-triage + reply drafts'],
              ['pen-line', 'Essay Correction', 'Rubric-based feedback in <6s'],
              ['bar-chart-3', 'Analytics', 'Usage + outcomes across cohorts'],
              ['shield', 'Admin Console', 'Multi-tenant management'],
            ].map(([ic, title, desc]) => (
              <a key={title} className="navm-link">
                <span className="navm-link-icon"><Icon name={ic} size={16} stroke={1.75} /></span>
                <span>
                  <span className="navm-link-title">{title}</span>
                  <span className="navm-link-desc">{desc}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="NavigationMenu = Trigger[] + Content (Panel with NavigationMenuLink[])"
        parts={[
          { label: 'Trigger', required: true },
          { label: 'Content', role: 'rich panel' },
          { label: 'Link card', role: 'icon + title + desc' },
        ]}
      />
    </Subsection>

    <Subsection title="States">
      <Grid cols={2}>
        <SampleCard label="default">
          <div className="navm">
            <button className="navm-trigger">Product</button>
            <button className="navm-trigger">Solutions</button>
            <button className="navm-trigger">Pricing</button>
          </div>
        </SampleCard>
        <SampleCard label="hovered (open)">
          <div className="navm">
            <button className="navm-trigger is-open">Product</button>
            <button className="navm-trigger">Solutions</button>
            <button className="navm-trigger">Pricing</button>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['orientation', '"horizontal" | "vertical"', '"horizontal"', 'Layout direction.'],
        ['viewport', 'boolean', 'true', 'Render panels into a single shared viewport.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } ', K('from'), ' ', S('"@/components/ui/navigation-menu"'), ';'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 14 — Accordion
// ============================================================

const AccItem = ({ q, open, disabled, children }) => (
  <div className="acc-item">
    <button className={`acc-trigger ${open ? 'is-open' : ''} ${disabled ? 'is-disabled' : ''}`}>
      <span>{q}</span>
      <span className="acc-icon"><Icon name="chevron-down" size={14} stroke={2} /></span>
    </button>
    {open && <div className="acc-content">{children}</div>}
  </div>
);

const Mol14_Accordion = () => (
  <MolSection
    num={14} id="mol-accordion" name="Accordion"
    desc="Collapsible stacked panels. Use for FAQs, settings with many sections, or progressive disclosure. When sections are peer-level without hierarchy, prefer Tabs."
  >
    <MolHero>
      <div className="acc" style={{ width: '100%', maxWidth: 520 }}>
        <AccItem q="What is Workfuse?" />
        <AccItem q="How does AI categorization work?" open>
          Tickets are embedded with a multilingual model, clustered against your taxonomy, and routed with a confidence score. Items below the threshold fall back to human triage.
        </AccItem>
        <AccItem q="Can I export my data?" />
        <AccItem q="What's the pricing model?" />
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="Accordion = Item[] (Trigger + Content)"
        parts={[
          { label: 'Item', required: true },
          { label: 'Trigger', role: 'question', required: true },
          { label: 'Content', role: 'answer', required: true },
        ]}
      />
    </Subsection>

    <Subsection title="Types">
      <Grid cols={2}>
        <SampleCard label="single (radio-like)">
          <div className="acc" style={{ width: '100%' }}>
            <AccItem q="First item" />
            <AccItem q="Second (open)" open>Only one can be open at a time.</AccItem>
            <AccItem q="Third item" />
          </div>
        </SampleCard>
        <SampleCard label="multiple">
          <div className="acc" style={{ width: '100%' }}>
            <AccItem q="First (open)" open>Any number of items can be open.</AccItem>
            <AccItem q="Second (open)" open>Simultaneously expanded.</AccItem>
            <AccItem q="Third" />
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="States">
      <Grid cols={3}>
        <SampleCard label="collapsed"><div className="acc" style={{ width: '100%' }}><AccItem q="Collapsed" /></div></SampleCard>
        <SampleCard label="expanded"><div className="acc" style={{ width: '100%' }}><AccItem q="Expanded" open>Content shown.</AccItem></div></SampleCard>
        <SampleCard label="disabled"><div className="acc" style={{ width: '100%' }}><AccItem q="Disabled" disabled /></div></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['type', '"single" | "multiple"', '"single"', 'Selection mode.'],
        ['collapsible', 'boolean', 'false', '(single only) Allow closing the active item.'],
        ['defaultValue', 'string | string[]', '—', 'Initially open.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Accordion, AccordionContent, AccordionItem, AccordionTrigger } ', K('from'), ' ', S('"@/components/ui/accordion"'), ';'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 15 — Collapsible
// ============================================================

const Mol15_Collapsible = () => (
  <MolSection
    num={15} id="mol-collapsible" name="Collapsible"
    desc="Simpler cousin of Accordion — a single disclosable region with a trigger. Use for 'Show more' / 'Show less' patterns."
  >
    <MolHero>
      <div style={{ width: '100%', maxWidth: 440 }}>
        <button className="col-trigger is-open">
          <span className="col-icon"><Icon name="chevron-right" size={14} stroke={2} /></span>
          Advanced options
        </button>
        <div className="col-content">
          <div className="flex flex-col gap-3 mt-2">
            <div className="ff"><label className="ff-label">Webhook URL</label><input className="inp" defaultValue="https://hooks.workfuse.app/…" /></div>
            <div className="ff"><label className="ff-label">Rate limit</label><input className="inp" defaultValue="120 req/min" /></div>
            <div className="ff-row"><input type="checkbox" className="ctrl ctrl-checkbox" defaultChecked /><label className="ff-label" style={{ fontWeight: 400 }}>Enable retry on failure</label></div>
          </div>
        </div>
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="Collapsible = Trigger + Content"
        parts={[
          { label: 'Trigger', required: true },
          { label: 'Content', required: true },
        ]}
      />
    </Subsection>

    <Subsection title="States">
      <Grid cols={2}>
        <SampleCard label="collapsed">
          <button className="col-trigger"><span className="col-icon"><Icon name="chevron-right" size={14} stroke={2} /></span> Advanced options</button>
        </SampleCard>
        <SampleCard label="expanded">
          <div>
            <button className="col-trigger is-open"><span className="col-icon"><Icon name="chevron-right" size={14} stroke={2} /></span> Advanced options</button>
            <div className="col-content">3 hidden fields shown.</div>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['open', 'boolean', 'false', 'Controlled open state.'],
        ['onOpenChange', '(open: boolean) => void', '—', 'Change handler.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Collapsible, CollapsibleContent, CollapsibleTrigger } ', K('from'), ' ', S('"@/components/ui/collapsible"'), ';'],
      ]} />
    </Subsection>
  </MolSection>
);

Object.assign(window, { Mol11_ContextMenu, Mol12_Menubar, Mol13_NavigationMenu, Mol14_Accordion, Mol15_Collapsible });
