/* global React, Icon, OrgSection, OrgHero, CompositionRules, OrgAnatomy, Subsection, SampleCard, Grid, PropsTable, CodeBlock, K, S, T, C */
/* eslint-disable no-unused-vars */

// ============================================================
// Organism 1 — Dialog
// ============================================================

const Org1_Dialog = () => (
  <OrgSection num={1} id="org-dialog" name="Dialog"
    desc="General-purpose modal for forms, content, or confirmations that aren't critical enough for AlertDialog. Blocks the page, but less severe in tone.">
    <OrgHero bleed>
      <div className="stage" style={{ width: '100%', height: 460, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="stage-overlay" />
        <div className="dlg" style={{ width: 600, maxWidth: '92%', position: 'relative', zIndex: 1 }}>
          <div className="dlg-header">
            <div>
              <h3 className="dlg-title">Create a new ticket</h3>
              <p className="dlg-desc">Tell us about the issue and we'll route it to the right team.</p>
            </div>
            <button className="dlg-close"><Icon name="x" size={16} stroke={2} /></button>
          </div>
          <div className="dlg-body">
            <div className="ff" style={{ marginBottom: 12 }}>
              <label className="ff-label">Subject</label>
              <input className="inp" defaultValue="Missing grade for Cálculo I — 2026.1" />
            </div>
            <div className="ff" style={{ marginBottom: 12 }}>
              <label className="ff-label">Description</label>
              <textarea className="inp" rows={3} defaultValue="The final grade for Cálculo I hasn't appeared in my academic record yet. It's been two weeks since the semester ended." />
            </div>
            <div className="ff">
              <label className="ff-label">Priority</label>
              <button className="sel-trigger" style={{ width: 200 }}>Medium <Icon name="chevron-down" size={14} stroke={1.75} /></button>
            </div>
          </div>
          <div className="dlg-footer">
            <button className="btn btn-outline">Cancel</button>
            <button className="btn btn-default">Create ticket</button>
          </div>
        </div>
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy
        formula="Dialog = Overlay + Card (molecule) + Header (Title + Description + Close atom) + Body + Footer (Button atoms)"
        parts={[
          { label: 'Overlay', role: 'atom · dim bg', required: true },
          { label: 'Card', role: 'molecule', required: true },
          { label: 'Header', required: true },
          { label: 'Body', required: true },
          { label: 'Footer', role: 'actions' },
        ]}
      />
    </Subsection>

    <Subsection title="Sizes">
      <Grid cols={4}>
        {[['sm', 400], ['default', 500], ['lg', 600], ['xl', 800]].map(([name, w]) => (
          <SampleCard key={name} label={`${name} (${w}px)`}>
            <div style={{ width: '100%', height: 140, background: 'color-mix(in oklab, #000 40%, transparent)', position: 'relative', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="dlg" style={{ width: '85%', maxWidth: w / 2.5 }}>
                <div className="dlg-header" style={{ padding: '10px 12px 0' }}><div className="dlg-title" style={{ fontSize: 12 }}>{name}</div></div>
                <div className="dlg-body" style={{ padding: '6px 12px', fontSize: 10, color: 'var(--muted-foreground)' }}>Content</div>
                <div className="dlg-footer" style={{ padding: '8px 12px' }}><span className="btn btn-default" style={{ fontSize: 10, height: 22, padding: '0 8px' }}>OK</span></div>
              </div>
            </div>
          </SampleCard>
        ))}
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={[
          'Use for forms, detail views, or confirmations where losing context is acceptable.',
          'Keep primary action right-aligned; Cancel immediately to its left.',
          'Use the scrollable variant when body content can exceed viewport — header and footer stay fixed.',
        ]}
        dont={[
          'Never nest a Dialog inside another Dialog. Use a Sheet or a wizard pattern instead.',
          "Don't use Dialog for destructive confirmations — that's AlertDialog's job.",
          'Avoid Dialogs wider than 800px; content gets unreadable.',
        ]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['open', 'boolean', '—', 'Controlled open state.'],
        ['onOpenChange', '(open: boolean) => void', '—', 'Change handler.'],
        ['size', '"sm" | "default" | "lg" | "xl"', '"default"', 'Content width.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } ', K('from'), ' ', S('"@/components/ui/dialog"'), ';'],
      ]} />
    </Subsection>
  </OrgSection>
);

// ============================================================
// Organism 2 — Sheet
// ============================================================

const Org2_Sheet = () => (
  <OrgSection num={2} id="org-sheet" name="Sheet"
    desc="Panel sliding in from a screen edge. Use for side panels (filters, settings, detail pane) where the underlying page should stay visible.">
    <OrgHero bleed>
      <div className="stage" style={{ width: '100%', height: 480, position: 'relative' }}>
        <div style={{ padding: 20, color: 'var(--muted-foreground)', fontSize: 13 }}>
          <div style={{ fontWeight: 500, color: 'var(--foreground)', marginBottom: 8 }}>Tickets · 142 results</div>
          <div style={{ opacity: 0.5 }}>(underlying page stays visible)</div>
        </div>
        <div className="stage-overlay" />
        <div className="sheet sheet-r" style={{ width: 400 }}>
          <div className="dlg-header" style={{ padding: '18px 20px 8px' }}>
            <div><h3 className="dlg-title">Filters</h3></div>
            <button className="dlg-close"><Icon name="x" size={16} stroke={2} /></button>
          </div>
          <div style={{ padding: '8px 20px', flex: 1, overflow: 'auto' }}>
            <div className="ff" style={{ marginBottom: 14 }}>
              <label className="ff-label">Status</label>
              <button className="sel-trigger" style={{ width: '100%' }}>Open, In progress <Icon name="chevron-down" size={14} stroke={1.75} /></button>
            </div>
            <div className="ff" style={{ marginBottom: 14 }}>
              <label className="ff-label">Assignee</label>
              <button className="sel-trigger" style={{ width: '100%' }}>Anyone <Icon name="chevron-down" size={14} stroke={1.75} /></button>
            </div>
            <div className="ff">
              <label className="ff-label">Date range</label>
              <button className="sel-trigger" style={{ width: '100%' }}>Last 30 days <Icon name="calendar" size={14} stroke={1.75} /></button>
            </div>
          </div>
          <div className="dlg-footer">
            <button className="btn btn-outline">Reset</button>
            <button className="btn btn-default">Apply filters</button>
          </div>
        </div>
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy
        formula="Sheet = Overlay + Content (from side) + Header + Body + Footer"
        parts={[
          { label: 'Overlay', required: true },
          { label: 'Content', role: 'slides from edge', required: true },
          { label: 'Header' }, { label: 'Body', required: true }, { label: 'Footer' },
        ]}
      />
    </Subsection>

    <Subsection title="Sides">
      <Grid cols={4}>
        {['left', 'right', 'top', 'bottom'].map(side => (
          <SampleCard key={side} label={side}>
            <div style={{ width: '100%', height: 120, background: 'color-mix(in oklab, #000 40%, transparent)', position: 'relative', borderRadius: 8, overflow: 'hidden' }}>
              <div className="sheet" style={{
                position: 'absolute',
                ...(side === 'left' && { top: 0, left: 0, bottom: 0, width: '50%' }),
                ...(side === 'right' && { top: 0, right: 0, bottom: 0, width: '50%' }),
                ...(side === 'top' && { top: 0, left: 0, right: 0, height: '55%' }),
                ...(side === 'bottom' && { bottom: 0, left: 0, right: 0, height: '55%' }),
              }} />
            </div>
          </SampleCard>
        ))}
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Use for filter panels, detail views, and settings where the main page should stay visible.', 'Prefer right side on LTR; bottom for mobile.', 'Keep the footer sticky for Apply/Cancel actions.']}
        dont={["Don't stack multiple Sheets — it creates a tunneling effect.", "Don't use for critical confirmations; use AlertDialog."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['side', '"top" | "right" | "bottom" | "left"', '"right"', 'Slide direction.'],
        ['size', '"sm" | "default" | "lg"', '"default"', 'Width (or height).'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } ', K('from'), ' ', S('"@/components/ui/sheet"'), ';']]} />
    </Subsection>
  </OrgSection>
);

// ============================================================
// Organism 3 — Drawer
// ============================================================

const Org3_Drawer = () => (
  <OrgSection num={3} id="org-drawer" name="Drawer"
    desc="Mobile-optimized bottom sheet with a drag handle. On desktop, behaves like a bottom Sheet.">
    <OrgHero bleed>
      <div style={{ display: 'flex', justifyContent: 'center', padding: 20, background: 'var(--muted)' }}>
        <div style={{ width: 390, height: 620, background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 28, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 30px rgb(0 0 0 / 0.15)' }}>
          <div style={{ padding: '40px 16px 16px', color: 'var(--muted-foreground)', fontSize: 12 }}>
            <div style={{ fontWeight: 500, color: 'var(--foreground)', marginBottom: 4, fontSize: 14 }}>WF-1247 · Matrícula</div>
            <div>Assignee: unassigned</div>
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'color-mix(in oklab, #000 55%, transparent)' }} />
          <div className="drawer" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, maxHeight: '70%' }}>
            <div className="drawer-grab" />
            <div className="dlg-header" style={{ padding: '8px 20px 0' }}>
              <div><h3 className="dlg-title" style={{ fontSize: 15 }}>Assign ticket</h3></div>
            </div>
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                ['MS', 'Mariana Santos', 'Enrollment'],
                ['PL', 'Pedro Lima', 'Grades'],
                ['CA', 'Camila Alves', 'Financial'],
                ['RC', 'Rafael Costa', 'Enrollment'],
                ['JO', 'Juliana Oliveira', 'Onboarding'],
                ['BS', 'Bruno Souza', 'Tech support'],
              ].map(([init, name, team]) => (
                <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 4px' }}>
                  <span className="avatar avatar-sm"><span className="avatar-fallback">{init}</span></span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{name}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--muted-foreground)' }}>{team}</div>
                  </div>
                  <button className="btn btn-outline btn-sm">Assign</button>
                </div>
              ))}
            </div>
            <div className="dlg-footer" style={{ padding: '10px 16px' }}>
              <button className="btn btn-outline" style={{ width: '100%' }}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy
        formula="Drawer = Overlay + Container (grab handle + Header + Body + Footer)"
        parts={[
          { label: 'Grab handle', required: true },
          { label: 'Header' }, { label: 'Body', required: true }, { label: 'Footer' },
        ]}
      />
    </Subsection>

    <Subsection title="States">
      <Grid cols={2}>
        <SampleCard label="partially extended (40%)"><div style={{ width: '100%', height: 160, position: 'relative', background: 'color-mix(in oklab, #000 40%, transparent)', borderRadius: 8, overflow: 'hidden' }}><div className="drawer" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '40%' }}><div className="drawer-grab" /></div></div></SampleCard>
        <SampleCard label="fully extended (90%)"><div style={{ width: '100%', height: 160, position: 'relative', background: 'color-mix(in oklab, #000 40%, transparent)', borderRadius: 8, overflow: 'hidden' }}><div className="drawer" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '90%' }}><div className="drawer-grab" /></div></div></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Use on mobile for choice lists, confirmation sheets, or quick forms.', 'Include a drag handle so users know it can be resized/dismissed.', 'Snap to sensible breakpoints (40%, 90%) rather than free-drag.']}
        dont={["Don't use on desktop as your primary modal — prefer Dialog or Sheet.", "Don't stack content that requires lots of horizontal scrolling."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['snapPoints', 'number[]', '[0.4, 0.9]', 'Fractional heights the drawer snaps to.'],
        ['dismissible', 'boolean', 'true', 'Allow dragging down to close.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } ', K('from'), ' ', S('"@/components/ui/drawer"'), ';']]} />
    </Subsection>
  </OrgSection>
);

// ============================================================
// Organism 4 — Sidebar (primitive)
// ============================================================

const SidebarShell = ({ collapsed, active = 'inbox' }) => (
  <div className={`appsb ${collapsed ? 'appsb-collapsed' : ''}`} style={{ width: collapsed ? 64 : 260, height: 400, borderRadius: 'calc(var(--radius) + 2px)', overflow: 'hidden' }}>
    <div className="appsb-header">
      <div className="appsb-brand-mark">W</div>
      <span className="appsb-brand-name">Brand</span>
    </div>
    <div className="appsb-content">
      <div className="appsb-group">
        <div className="appsb-grouplabel">Main</div>
        <div className={`appsb-item ${active === 'home' ? 'is-active' : ''}`}><Icon name="home" size={16} stroke={1.75} /><span>Home</span></div>
        <div className={`appsb-item ${active === 'inbox' ? 'is-active' : ''}`}><Icon name="inbox" size={16} stroke={1.75} /><span>Inbox</span><span className="appsb-badge">12</span></div>
        <div className={`appsb-item ${active === 'users' ? 'is-active' : ''}`}><Icon name="users" size={16} stroke={1.75} /><span>Users</span></div>
      </div>
      <div className="appsb-group">
        <div className="appsb-grouplabel">Settings</div>
        <div className="appsb-item"><Icon name="settings" size={16} stroke={1.75} /><span>Preferences</span></div>
        <div className="appsb-item"><Icon name="credit-card" size={16} stroke={1.75} /><span>Billing</span></div>
      </div>
    </div>
  </div>
);

const Org4_Sidebar = () => (
  <OrgSection num={4} id="org-sidebar" name="Sidebar"
    desc="Generic vertical navigation container pattern. Use as the structural base for AppSidebar and other app-specific sidebars. This is the primitive.">
    <OrgHero>
      <SidebarShell active="inbox" />
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy
        formula="Sidebar = Header + Content (Group[Label + MenuItem[]]) + Footer"
        parts={[
          { label: 'Header', role: 'brand' },
          { label: 'Group', role: 'section', required: true },
          { label: 'GroupLabel' },
          { label: 'MenuItem', required: true },
          { label: 'Footer', role: 'user slot' },
        ]}
      />
    </Subsection>

    <Subsection title="States">
      <Grid cols={3}>
        <SampleCard label="expanded (260px)"><SidebarShell /></SampleCard>
        <SampleCard label="collapsed (64px)"><SidebarShell collapsed /></SampleCard>
        <SampleCard label="hidden (mobile)">
          <div style={{ width: '100%', height: 200, background: 'color-mix(in oklab, #000 40%, transparent)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted-foreground)', fontSize: 12 }}>off-canvas · open with hamburger</div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Use this primitive as the scaffold — build AppSidebar, DocSidebar, etc. on top.', 'Mark the active item with a left accent bar + primary-tinted background.', 'Collapse to icon-only on narrow viewports instead of hiding entirely.']}
        dont={["Don't mix Sidebar with TopNav in the same view unless the app genuinely needs both (dashboards can).", "Don't exceed 3 nav groups — users lose the mental map."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['collapsible', 'boolean', 'true', 'Allow expand/collapse.'],
        ['defaultCollapsed', 'boolean', 'false', 'Initial state.'],
        ['side', '"left" | "right"', '"left"', 'Mount side.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } ', K('from'), ' ', S('"@/components/ui/sidebar"'), ';']]} />
    </Subsection>
  </OrgSection>
);

Object.assign(window, { Org1_Dialog, Org2_Sheet, Org3_Drawer, Org4_Sidebar });
