/* global React, Icon, OrgSection, OrgHero, CompositionRules, OrgAnatomy, Subsection, SampleCard, Grid, PropsTable, CodeBlock, K, S, T, C */
/* eslint-disable no-unused-vars */

// ============================================================
// Organism 13 — Toast
// ============================================================

const ToastSample = ({ kind = 'success', title, desc, action = 'Undo' }) => {
  const iconFor = { success: 'check', info: 'info', warning: 'alert-triangle', destructive: 'x-circle' }[kind];
  return (
    <div className={`toast is-${kind}`}>
      <span className="toast-icon"><Icon name={iconFor} size={12} stroke={2.5} /></span>
      <div className="toast-body">
        <div className="toast-title">{title}</div>
        <div className="toast-desc">{desc}</div>
        {action && <button className="toast-action" style={{ marginTop: 6 }}>{action}</button>}
      </div>
      <button className="toast-close" aria-label="Close"><Icon name="x" size={13} stroke={2} /></button>
    </div>
  );
};

const Org13_Toast = () => (
  <OrgSection num={13} id="org-toast" name="Toast"
    desc="Transient notifications anchored to a screen corner. Use for action confirmations, async results, and non-blocking alerts. Never for critical errors — those belong in AlertDialog.">
    <OrgHero>
      <div className="stage" style={{ width: '100%', height: 380, padding: 0 }}>
        <div className="stage-overlay" />
        <div style={{ position: 'absolute', inset: 20, zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end', gap: 10, pointerEvents: 'none' }}>
          <ToastSample kind="success" title="Ticket created" desc="WF-1247 assigned to Carolina Freitas." action="View" />
          <ToastSample kind="info" title="Import started" desc="Processing 1,284 student records. You'll get a notification when done." action={null} />
          <ToastSample kind="warning" title="Session expiring in 5 minutes" desc="Save your work — you'll need to sign in again." action="Extend" />
        </div>
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy formula="Toast = Icon + Body (Title + Description + optional Action) + Close button"
        parts={[{ label: 'Icon', required: true }, { label: 'Title', required: true }, { label: 'Description' }, { label: 'Action' }, { label: 'Close' }]} />
    </Subsection>

    <Subsection title="Variants">
      <Grid cols={2}>
        <SampleCard label="success"><ToastSample kind="success" title="Saved" desc="Changes applied to WF-1247." action="Undo" /></SampleCard>
        <SampleCard label="info"><ToastSample kind="info" title="Export ready" desc="Your CSV is ready to download." action="Download" /></SampleCard>
        <SampleCard label="warning"><ToastSample kind="warning" title="Offline" desc="Reconnecting… changes will sync shortly." action={null} /></SampleCard>
        <SampleCard label="destructive"><ToastSample kind="destructive" title="Upload failed" desc="atestado.pdf exceeded the 10MB limit." action="Retry" /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Anchor toasts to a single corner — bottom-right by default on desktop, top on mobile.', 'Auto-dismiss non-destructive toasts after 4–6 seconds.', 'Stack at most 3 visible toasts; queue additional ones.']}
        dont={["Don't block the viewport — toasts are non-modal by definition.", "Don't use toasts for errors that need acknowledgment — use AlertDialog instead.", "Don't rely on toasts for critical info — they disappear."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['variant', '"default" | "success" | "info" | "warning" | "destructive"', '"default"', 'Semantic tone.'],
        ['duration', 'number', '5000', 'Auto-dismiss ms. Pass Infinity to make persistent.'],
        ['action', 'ReactNode', '—', 'Optional action button.'],
        ['onOpenChange', '(open: boolean) => void', '—', 'Fires on dismissal.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { toast } ', K('from'), ' ', S('"@/components/ui/use-toast"'), ';'],
        [''],
        ['toast({'],
        ['  ', 'title: ', S('"Ticket created"'), ','],
        ['  ', 'description: ', S('"WF-1247 assigned to Carolina Freitas."'), ','],
        ['  ', 'variant: ', S('"success"'), ','],
        ['});'],
      ]} />
    </Subsection>
  </OrgSection>
);

// ============================================================
// Organism 14 — AppSidebar
// ============================================================

const AppSidebarSample = ({ collapsed = false }) => (
  <div className="asb" style={{ width: collapsed ? 64 : 240, height: 460 }}>
    <div className="asb-brand">
      <span className="asb-logo">W</span>
      {!collapsed && (
        <div>
          <div className="asb-title">Workfuse</div>
          <div className="asb-sub">IFES · Admin</div>
        </div>
      )}
    </div>
    <div className="asb-nav">
      {!collapsed && <div className="asb-group">Workspace</div>}
      <a className="asb-item is-active"><span className="asb-icon"><Icon name="inbox" size={15} stroke={1.75} /></span>{!collapsed && (<><span>Tickets</span><span className="asb-count">24</span></>)}</a>
      <a className="asb-item"><span className="asb-icon"><Icon name="users" size={15} stroke={1.75} /></span>{!collapsed && (<><span>Students</span><span className="asb-count">1.2k</span></>)}</a>
      <a className="asb-item"><span className="asb-icon"><Icon name="file-text" size={15} stroke={1.75} /></span>{!collapsed && <span>Documents</span>}</a>
      <a className="asb-item"><span className="asb-icon"><Icon name="bar-chart-2" size={15} stroke={1.75} /></span>{!collapsed && <span>Reports</span>}</a>

      {!collapsed && <div className="asb-group">Admin</div>}
      <a className="asb-item"><span className="asb-icon"><Icon name="building" size={15} stroke={1.75} /></span>{!collapsed && <span>Institution</span>}</a>
      <a className="asb-item"><span className="asb-icon"><Icon name="shield" size={15} stroke={1.75} /></span>{!collapsed && <span>Permissions</span>}</a>
      <a className="asb-item"><span className="asb-icon"><Icon name="settings" size={15} stroke={1.75} /></span>{!collapsed && <span>Settings</span>}</a>
    </div>
    <div className="asb-user">
      <span className="asb-uavatar">CF</span>
      {!collapsed && (
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="asb-uname" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Carolina Freitas</div>
          <div className="asb-urole">Admin</div>
        </div>
      )}
      {!collapsed && <Icon name="chevron-up-down" size={14} stroke={1.75} />}
    </div>
  </div>
);

const Org14_AppSidebar = () => (
  <OrgSection num={14} id="org-appsidebar" name="AppSidebar"
    desc="The permanent left navigation for the Admin shell. Built on the Sidebar primitive, adds branding, grouped items with counts, and a user footer.">
    <OrgHero bleed>
      <div style={{ display: 'flex', width: '100%', minHeight: 480, background: 'var(--muted)' }}>
        <AppSidebarSample />
        <div style={{ flex: 1, padding: 24, color: 'var(--muted-foreground)', fontSize: 13 }}>Main content</div>
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy formula="AppSidebar = Sidebar (organism) + Brand + NavGroups (with counts) + UserFooter"
        parts={[{ label: 'Brand block', required: true }, { label: 'Nav groups', required: true }, { label: 'Active item' }, { label: 'Count badges' }, { label: 'User footer' }]} />
    </Subsection>

    <Subsection title="States">
      <Grid cols={2}>
        <SampleCard label="expanded (240px)" fullBleed><div style={{ display: 'flex', padding: 0 }}><AppSidebarSample /></div></SampleCard>
        <SampleCard label="collapsed (64px)" fullBleed><div style={{ display: 'flex', padding: 0 }}><AppSidebarSample collapsed /></div></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Group nav items by purpose — Workspace, Admin, Settings — not by component type.', 'Show counts on items with pending work (tickets, notifications) so users spot queues.', 'Persist collapsed/expanded state per user in localStorage.']}
        dont={["Don't exceed 3 nav groups or ~10 items total — split into a second tier if it grows.", "Don't put destructive actions (logout, delete account) in the sidebar — bury them in the user menu."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['collapsed', 'boolean', 'false', 'Icon-only mode.'],
        ['brand', 'ReactNode', '—', 'Header slot.'],
        ['user', '{ name, role, avatar }', '—', 'Footer slot.'],
        ['items', 'NavItem[]', '[]', 'Grouped nav data.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { AppSidebar } ', K('from'), ' ', S('"@/components/app/app-sidebar"'), ';']]} />
    </Subsection>
  </OrgSection>
);

// ============================================================
// Organism 15 — TopNav
// ============================================================

const TopNavSample = ({ variant = 'admin' }) => {
  const links = variant === 'admin'
    ? ['Dashboard', 'Tickets', 'Students', 'Reports']
    : ['Home', 'My Tickets', 'Documents', 'Help'];
  return (
    <div className="topnav" style={{ width: '100%' }}>
      <div className="topnav-brand">
        <span style={{ width: 24, height: 24, borderRadius: 6, background: 'var(--primary)', color: 'var(--primary-foreground)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>W</span>
        <span>Workfuse</span>
        <span className="topnav-inst">{variant === 'admin' ? 'IFES · Admin' : 'IFES'}</span>
      </div>
      <div className="topnav-links">
        {links.map((l, i) => (
          <a key={l} className={`topnav-link ${i === 1 ? 'is-active' : ''}`}>{l}</a>
        ))}
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '0 10px', height: 32, border: '1px solid var(--border)', borderRadius: 6, color: 'var(--muted-foreground)', fontSize: 12.5, minWidth: 220 }}>
        <Icon name="search" size={13} stroke={1.75} />
        <span style={{ flex: 1, marginLeft: 4 }}>Search…</span>
        <span className="kbd" style={{ fontSize: 10 }}>⌘K</span>
      </div>
      <button className="icon-btn topnav-bell" aria-label="Notifications">
        <Icon name="bell" size={15} stroke={1.75} />
        <span className="bell-dot">3</span>
      </button>
      <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--muted)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>CF</span>
    </div>
  );
};

const Org15_TopNav = () => (
  <OrgSection num={15} id="org-topnav" name="TopNav"
    desc="Horizontal navigation bar spanning the top of the app. Used in Portal (ticket-ui) where a sidebar would steal vertical room, and in Admin as a secondary bar above section tabs.">
    <OrgHero bleed>
      <div style={{ width: '100%', background: 'var(--muted)' }}>
        <TopNavSample variant="admin" />
        <div style={{ padding: 40, color: 'var(--muted-foreground)', fontSize: 13 }}>Page content below the TopNav</div>
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy formula="TopNav = Brand + Institution tag + NavLinks + Search + Bell + UserAvatar"
        parts={[{ label: 'Brand', required: true }, { label: 'Institution tag' }, { label: 'Nav links' }, { label: 'Search' }, { label: 'Bell' }, { label: 'User avatar', required: true }]} />
    </Subsection>

    <Subsection title="Variants">
      <Grid cols={1}>
        <SampleCard label="admin shell" fullBleed><TopNavSample variant="admin" /></SampleCard>
        <SampleCard label="portal shell" fullBleed><TopNavSample variant="portal" /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Keep the nav to 4–5 links; put overflow in a "More" DropdownMenu.', 'Include the institution tag so multi-tenant users know which tenant they\'re in.', 'Make the search hotkey (⌘K) open the CommandPalette, not a page-scoped search.']}
        dont={["Don't mix TopNav and AppSidebar as primary nav — pick one per shell.", "Don't stick secondary tabs inside the TopNav — use PageHeader tabs for that."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['tenant', 'string', '—', 'Institution label.'],
        ['items', 'NavLink[]', '[]', 'Top-level links.'],
        ['onSearchOpen', '() => void', '—', 'Fires on ⌘K / click.'],
        ['user', 'User', '—', 'Current user for avatar.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { TopNav } ', K('from'), ' ', S('"@/components/app/top-nav"'), ';']]} />
    </Subsection>
  </OrgSection>
);

// ============================================================
// Organism 16 — PageHeader
// ============================================================

const PageHeaderSample = ({ withTabs = false, withCrumbs = true }) => (
  <div className="pghd" style={{ padding: '20px 24px', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 10, width: '100%' }}>
    {withCrumbs && (
      <nav style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 10 }}>
        <a style={{ color: 'var(--muted-foreground)' }}>Tickets</a>
        <Icon name="chevron-right" size={12} stroke={1.75} />
        <a style={{ color: 'var(--muted-foreground)' }}>Mariana Santos</a>
        <Icon name="chevron-right" size={12} stroke={1.75} />
        <span style={{ color: 'var(--foreground)' }}>WF-1247</span>
      </nav>
    )}
    <div className="pghd-row">
      <div style={{ minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <h2 className="pghd-title">WF-1247 · Emissão de histórico</h2>
          <span className="bdg bdg-secondary">In progress</span>
        </div>
        <p className="pghd-desc">Opened by Mariana Santos · Graduação em Ciência da Computação · assigned to Carolina Freitas 4 hours ago.</p>
      </div>
      <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
        <button className="btn btn-outline btn-sm"><Icon name="share" size={14} stroke={1.75} /> Share</button>
        <button className="btn btn-outline btn-sm"><Icon name="more-horizontal" size={14} stroke={1.75} /></button>
        <button className="btn btn-default btn-sm"><Icon name="check" size={14} stroke={2} /> Resolve</button>
      </div>
    </div>
    {withTabs && (
      <div className="pghd-tabs">
        {['Overview', 'Activity', 'Documents', 'Comments'].map((t, i) => (
          <a key={t} style={{ padding: '10px 14px', fontSize: 13, fontWeight: i === 0 ? 500 : 400, color: i === 0 ? 'var(--foreground)' : 'var(--muted-foreground)', borderBottom: i === 0 ? '2px solid var(--primary)' : '2px solid transparent', marginBottom: -1 }}>{t}</a>
        ))}
      </div>
    )}
  </div>
);

const Org16_PageHeader = () => (
  <OrgSection num={16} id="org-pageheader" name="PageHeader"
    desc="The top of a content page — breadcrumb + title + status + primary actions, with optional section tabs below. Anchors the user in the app's hierarchy and exposes the page's main verbs.">
    <OrgHero>
      <div style={{ width: '100%', maxWidth: 860 }}>
        <PageHeaderSample withTabs withCrumbs />
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy formula="PageHeader = Breadcrumb + (Title + Status badge) + Description + Actions + optional Tabs"
        parts={[{ label: 'Breadcrumb' }, { label: 'Title', required: true }, { label: 'Status badge' }, { label: 'Description' }, { label: 'Primary actions', required: true }, { label: 'Tabs' }]} />
    </Subsection>

    <Subsection title="Variants">
      <Grid cols={1}>
        <SampleCard label="with tabs" fullBleed><PageHeaderSample withTabs /></SampleCard>
        <SampleCard label="no tabs" fullBleed><PageHeaderSample withTabs={false} /></SampleCard>
        <SampleCard label="no breadcrumb (top-level)" fullBleed><PageHeaderSample withTabs={false} withCrumbs={false} /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Include a breadcrumb on any page deeper than 2 levels.', 'Pair the title with a status Badge when the page represents a stateful record (ticket, student, report).', 'Put exactly one primary action at the end — destructive actions go in an overflow menu.']}
        dont={["Don't stack two rows of actions — if you need more, group them into a dropdown.", "Don't repeat the page title inside the body — the header is the title."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['title', 'string', '—', 'Page title (required).'],
        ['description', 'string', '—', 'Sub-line shown under title.'],
        ['breadcrumb', 'Crumb[]', '[]', 'Optional breadcrumb trail.'],
        ['status', 'ReactNode', '—', 'Status badge beside title.'],
        ['actions', 'ReactNode', '—', 'Right-aligned button group.'],
        ['tabs', 'Tab[]', '[]', 'Optional inner navigation.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { PageHeader } ', K('from'), ' ', S('"@/components/app/page-header"'), ';']]} />
    </Subsection>
  </OrgSection>
);

Object.assign(window, { Org13_Toast, Org14_AppSidebar, Org15_TopNav, Org16_PageHeader });
