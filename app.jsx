/* global React, ReactDOM */
/* eslint-disable no-unused-vars */

const FOUNDATIONS = [
  { id: 'colors',     label: 'Colors & Surfaces' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing',    label: 'Spacing' },
  { id: 'radius',     label: 'Radius' },
  { id: 'shadows',    label: 'Shadows' },
  { id: 'motion',     label: 'Motion' },
  { id: 'breakpoints',label: 'Breakpoints' },
  { id: 'zindex',     label: 'Z-index' },
  { id: 'icons',      label: 'Icon Sizes' },
  { id: 'opacity',    label: 'Opacity' },
  { id: 'borders',    label: 'Border Widths' },
  { id: 'blur',       label: 'Blur' },
  { id: 'aspects',    label: 'Aspect Ratios' },
  { id: 'status',     label: 'Status Colors' },
];

const ORGANISMS = [
  { id: 'org-dialog',         label: 'Dialog' },
  { id: 'org-sheet',          label: 'Sheet' },
  { id: 'org-drawer',         label: 'Drawer' },
  { id: 'org-sidebar',        label: 'Sidebar' },
  { id: 'org-datatable',      label: 'DataTable' },
  { id: 'org-calendar',       label: 'Calendar' },
  { id: 'org-carousel',       label: 'Carousel' },
  { id: 'org-chart',          label: 'Chart' },
  { id: 'org-commandpalette', label: 'CommandPalette' },
  { id: 'org-resizablepanels',label: 'ResizablePanels' },
  { id: 'org-popover',        label: 'Popover' },
  { id: 'org-scrollarea',     label: 'ScrollArea' },
  { id: 'org-toast',          label: 'Toast' },
  { id: 'org-appsidebar',     label: 'AppSidebar' },
  { id: 'org-topnav',         label: 'TopNav' },
  { id: 'org-pageheader',     label: 'PageHeader' },
];

const MOLECULES = [
  { id: 'mol-alert',          label: 'Alert' },
  { id: 'mol-alertdialog',    label: 'AlertDialog' },
  { id: 'mol-card',           label: 'Card' },
  { id: 'mol-tooltip',        label: 'Tooltip' },
  { id: 'mol-hovercard',      label: 'HoverCard' },
  { id: 'mol-tabs',           label: 'Tabs' },
  { id: 'mol-breadcrumb',     label: 'Breadcrumb' },
  { id: 'mol-pagination',     label: 'Pagination' },
  { id: 'mol-formfield',      label: 'FormField' },
  { id: 'mol-dropdownmenu',   label: 'DropdownMenu' },
  { id: 'mol-contextmenu',    label: 'ContextMenu' },
  { id: 'mol-menubar',        label: 'Menubar' },
  { id: 'mol-navigationmenu', label: 'NavigationMenu' },
  { id: 'mol-accordion',      label: 'Accordion' },
  { id: 'mol-collapsible',    label: 'Collapsible' },
  { id: 'mol-inputotp',       label: 'InputOTP' },
  { id: 'mol-select',         label: 'Select' },
  { id: 'mol-combobox',       label: 'Combobox' },
  { id: 'mol-datepicker',     label: 'DatePicker' },
  { id: 'mol-command',        label: 'Command' },
  { id: 'mol-searchinput',    label: 'SearchInput' },
  { id: 'mol-emptystate',     label: 'EmptyState' },
];

const ATOMS = [
  { id: 'atom-button',      label: 'Button' },
  { id: 'atom-input',       label: 'Input' },
  { id: 'atom-textarea',    label: 'Textarea' },
  { id: 'atom-label',       label: 'Label' },
  { id: 'atom-badge',       label: 'Badge' },
  { id: 'atom-avatar',      label: 'Avatar' },
  { id: 'atom-checkbox',    label: 'Checkbox' },
  { id: 'atom-radio',       label: 'Radio' },
  { id: 'atom-switch',      label: 'Switch' },
  { id: 'atom-slider',      label: 'Slider' },
  { id: 'atom-separator',   label: 'Separator' },
  { id: 'atom-skeleton',    label: 'Skeleton' },
  { id: 'atom-progress',    label: 'Progress' },
  { id: 'atom-toggle',      label: 'Toggle' },
  { id: 'atom-togglegroup', label: 'ToggleGroup' },
  { id: 'atom-aspectratio', label: 'AspectRatio' },
  { id: 'atom-icon',        label: 'Icon' },
  { id: 'atom-spinner',     label: 'Spinner' },
  { id: 'atom-kbd',         label: 'Kbd' },
  { id: 'atom-link',        label: 'Link' },
  { id: 'atom-text',        label: 'Text' },
  { id: 'atom-tag',         label: 'Tag' },
];

const TABS = [
  { id: 'foundations', label: 'Foundations' },
  { id: 'components',  label: 'Components' },
  { id: 'patterns',    label: 'Patterns', href: 'patterns.html' },
  { id: 'resources',   label: 'Resources' },
];

// Parse hash into { tab, anchor }
function parseHash() {
  const h = (window.location.hash || '').replace(/^#/, '');
  if (!h) return { tab: 'foundations', anchor: null };
  const [tab, ...rest] = h.split('/');
  const known = TABS.find(t => t.id === tab);
  if (!known) {
    // maybe it's a plain section id like #colors — route to foundations
    if (FOUNDATIONS.some(s => s.id === tab)) return { tab: 'foundations', anchor: tab };
    if (ATOMS.some(s => s.id === tab)) return { tab: 'components', anchor: tab };
    if (MOLECULES.some(s => s.id === tab)) return { tab: 'components', anchor: tab };
    if (ORGANISMS.some(s => s.id === tab)) return { tab: 'components', anchor: tab };
    return { tab: 'foundations', anchor: null };
  }
  return { tab, anchor: rest.join('/') || null };
}

function useRoute() {
  const [route, setRoute] = React.useState(parseHash);
  React.useEffect(() => {
    const on = () => setRoute(parseHash());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}

function useActiveSection(sectionIds) {
  const [active, setActive] = React.useState(sectionIds[0] || null);
  React.useEffect(() => {
    if (!sectionIds.length) return;
    const onScroll = () => {
      const mid = window.innerHeight * 0.3;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds.join('|')]);
  return active;
}

const TopBar = ({ dark, setDark, tab }) => (
  <header
    className="sticky top-0 z-50 backdrop-blur-md"
    style={{
      background: 'color-mix(in oklab, var(--background) 85%, transparent)',
      borderBottom: '1px solid var(--border)',
    }}
  >
    <div className="max-w-[1360px] mx-auto h-14 px-6 flex items-center gap-6">
      <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">
        <div
          className="w-6 h-6 rounded-[6px] flex items-center justify-center shrink-0"
          style={{ background: '#2563eb' }}
        >
          <span className="text-white text-[11px] font-bold tracking-tight">W</span>
        </div>
        <span className="text-[15px] font-semibold text-foreground whitespace-nowrap">Workfuse Design System</span>
        <span className="mono text-[11px] text-muted-foreground ml-1 whitespace-nowrap hidden sm:inline">v1.0.0</span>
      </div>

      <nav className="hidden md:flex items-center gap-1 ml-6 whitespace-nowrap">
        {TABS.map(t => (
          <a
            key={t.id}
            href={t.href || `#${t.id}`}
            className={`top-tab ${tab === t.id ? 'active' : ''}`}
          >
            {t.label}
          </a>
        ))}
      </nav>

      <div className="flex-1" />

      <div
        className="hidden xl:flex items-center gap-2 h-8 px-3 rounded-[8px] border text-[12px] whitespace-nowrap"
        style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)', background: 'var(--muted)' }}
      >
        <Icon name="search" size={14} stroke={1.75} />
        <span>Search…</span>
        <span className="mono text-[10px] ml-3 px-1.5 py-0.5 rounded border" style={{ borderColor: 'var(--border)' }}>⌘K</span>
      </div>

      <button className="icon-btn" aria-label="Toggle theme" onClick={() => setDark(!dark)}>
        <Icon name={dark ? 'sun' : 'moon'} size={16} stroke={1.75} />
      </button>
      <button className="icon-btn" aria-label="GitHub">
        <Icon name="github" size={16} stroke={1.75} />
      </button>
    </div>
  </header>
);

const SidebarGroup = ({ title, items, active, collapsed, setCollapsed, count, comingSoon, tabId }) => {
  const isPlaceholder = !items || !items.length;
  return (
    <div className="mb-5">
      <button
        onClick={() => setCollapsed && setCollapsed(!collapsed)}
        className="flex items-center justify-between w-full label-caps mb-2"
        style={{ background: 'transparent', border: 'none', padding: '4px 0', cursor: setCollapsed ? 'pointer' : 'default' }}
        disabled={!setCollapsed}
      >
        <span className="flex items-center gap-2">
          <span>{title}</span>
          {count && (
            <span className="mono" style={{ fontSize: '10px', color: 'var(--muted-foreground)', fontWeight: 400 }}>
              {count}
            </span>
          )}
        </span>
        {setCollapsed && <Icon name={collapsed ? 'chevron-right' : 'chevron-down'} size={12} stroke={2} />}
      </button>
      {!collapsed && !isPlaceholder && (
        <nav className="flex flex-col gap-0.5">
          {items.map((s, i) => (
            <a
              key={s.id}
              href={`#${tabId}/${s.id}`}
              className={`side-link ${active === s.id ? 'active' : ''}`}
            >
              <span className="num mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="truncate">{s.label}</span>
            </a>
          ))}
        </nav>
      )}
      {!collapsed && isPlaceholder && comingSoon && (
        <div
          className="text-[11px] px-2 py-2"
          style={{ color: 'var(--muted-foreground)', fontStyle: 'italic' }}
        >
          {comingSoon}
        </div>
      )}
    </div>
  );
};

const FoundationsSidebar = ({ active }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <aside className="hidden lg:block w-[240px] shrink-0">
      <div className="sticky top-[72px] pr-4 max-h-[calc(100vh-88px)] overflow-y-auto">
        <SidebarGroup
          title="Foundations" items={FOUNDATIONS} active={active}
          collapsed={collapsed} setCollapsed={setCollapsed}
          count={`(${FOUNDATIONS.length})`} tabId="foundations"
        />
        <div className="pt-5 border-t border-border">
          <div className="label-caps mb-3">Reference</div>
          <nav className="flex flex-col gap-0.5">
            <span className="side-link"><span className="num"><Icon name="book-open" size={13} stroke={1.75} /></span><span>Guidelines</span></span>
            <span className="side-link"><span className="num"><Icon name="package" size={13} stroke={1.75} /></span><span>Tokens JSON</span></span>
            <span className="side-link"><span className="num"><Icon name="figma" size={13} stroke={1.75} /></span><span>Figma library</span></span>
          </nav>
        </div>
      </div>
    </aside>
  );
};

const ComponentsSidebar = ({ active }) => {
  const [atomsOpen, setAtomsOpen] = React.useState(true);
  const [molOpen, setMolOpen] = React.useState(false);
  const [orgOpen, setOrgOpen] = React.useState(false);
  return (
    <aside className="hidden lg:block w-[240px] shrink-0">
      <div className="sticky top-[72px] pr-4 max-h-[calc(100vh-88px)] overflow-y-auto">
        <SidebarGroup
          title="Atoms" items={ATOMS} active={active}
          collapsed={atomsOpen} setCollapsed={setAtomsOpen}
          count={`(${ATOMS.length})`} tabId="components"
        />
        <SidebarGroup
          title="Molecules" items={MOLECULES} active={active}
          collapsed={molOpen} setCollapsed={setMolOpen}
          count={`(${MOLECULES.length})`} tabId="components"
        />
        <SidebarGroup
          title="Organisms" items={ORGANISMS} active={active}
          collapsed={orgOpen} setCollapsed={setOrgOpen}
          count={`(${ORGANISMS.length})`} tabId="components"
        />
        <div className="pt-5 border-t border-border">
          <div className="label-caps mb-3">Reference</div>
          <nav className="flex flex-col gap-0.5">
            <span className="side-link"><span className="num"><Icon name="book-open" size={13} stroke={1.75} /></span><span>Guidelines</span></span>
            <span className="side-link"><span className="num"><Icon name="package" size={13} stroke={1.75} /></span><span>Tokens JSON</span></span>
            <span className="side-link"><span className="num"><Icon name="figma" size={13} stroke={1.75} /></span><span>Figma library</span></span>
          </nav>
        </div>
      </div>
    </aside>
  );
};

const FoundationsHero = () => (
  <div className="mb-14">
    <div className="label-caps mb-3">Workfuse · Foundations</div>
    <h1 className="text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-foreground mb-4">
      Design tokens for a multi-tenant AI education platform.
    </h1>
    <p className="text-[16px] text-muted-foreground max-w-[68ch] leading-[1.55]">
      Fourteen foundation families — from color and type to motion and z-index — shared
      across <span className="text-foreground font-medium">Admin (platform-ui)</span> and
      <span className="text-foreground font-medium"> Portal (ticket-ui)</span>. Neutral canvas,
      a single swappable institutional accent, light and dark parity.
    </p>
    <div className="flex flex-wrap gap-2 mt-6">
      {['shadcn/ui · new-york', 'Tailwind v4', 'OKLCH', 'Inter', 'React 19', 'Vite'].map(tag => (
        <span key={tag} className="mono text-[11px] px-2.5 py-1 rounded-[6px] border"
          style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>{tag}</span>
      ))}
    </div>
  </div>
);

const ComponentsHero = () => (
  <div className="mb-14">
    <div className="label-caps mb-3">Workfuse · Components</div>
    <h1 className="text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-foreground mb-4">
      From atoms to organisms, built on the token layer.
    </h1>
    <p className="text-[16px] text-muted-foreground max-w-[68ch] leading-[1.55]">
      A three-tier component taxonomy. <span className="text-foreground font-medium">Atoms</span> are
      the primitives — buttons, inputs, badges — drawn directly from shadcn/ui with Workfuse tokens
      applied. <span className="text-foreground font-medium">Molecules</span> and <span className="text-foreground font-medium">Organisms</span> compose
      those primitives into higher-level patterns.
    </p>
    <div className="flex flex-wrap gap-2 mt-6">
      <span className="mono text-[11px] px-2.5 py-1 rounded-[6px] border" style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>22 atoms · ready</span>
      <span className="mono text-[11px] px-2.5 py-1 rounded-[6px] border" style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>22 molecules · ready</span>
      <span className="mono text-[11px] px-2.5 py-1 rounded-[6px] border" style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>16 organisms · ready</span>
    </div>
  </div>
);

const EmptyRoadmapCard = () => (
  <div
    className="mt-12 rounded-[12px] border p-8 flex items-start gap-4"
    style={{ borderColor: 'var(--border)', background: 'var(--muted)' }}
  >
    <div
      className="w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0"
      style={{ background: 'var(--background)', border: '1px solid var(--border)' }}
    >
      <Icon name="map" size={18} stroke={1.5} />
    </div>
    <div>
      <div className="text-[14px] font-semibold text-foreground mb-1">Molecules and Organisms land here in the next phase.</div>
      <div className="text-[13px] text-muted-foreground max-w-[60ch] leading-[1.5]">
        Follow the roadmap — 21 molecules (form rows, cards, nav items) then 14 organisms (shells,
        tables, dialogs) will ship once atoms are approved by the design council.
      </div>
    </div>
  </div>
);

const ComingSoonPage = ({ title, body }) => (
  <div className="flex-1 min-w-0 flex items-center justify-center" style={{ minHeight: '60vh' }}>
    <div className="text-center max-w-[520px] px-6">
      <div
        className="w-14 h-14 rounded-[12px] mx-auto mb-5 flex items-center justify-center"
        style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}
      >
        <Icon name="clock" size={22} stroke={1.5} />
      </div>
      <div className="label-caps mb-2">Coming soon</div>
      <h2 className="text-[28px] font-bold tracking-[-0.02em] text-foreground mb-3">{title}</h2>
      <p className="text-[14px] text-muted-foreground leading-[1.55]">{body}</p>
    </div>
  </div>
);

const Footer = () => (
  <footer className="border-t border-border mt-24 py-10">
    <div className="max-w-[1360px] mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
      <div className="text-[12px] text-muted-foreground">© 2026 Workfuse Education</div>
      <div className="text-[12px] text-muted-foreground flex items-center gap-4">
        <span>Last updated · April 24, 2026</span>
        <span>·</span>
        <span className="mono">Inter by Rasmus Andersson</span>
      </div>
    </div>
  </footer>
);

// Scroll to anchor when route changes
function useScrollToAnchor(tab, anchor) {
  React.useEffect(() => {
    if (!anchor) { window.scrollTo({ top: 0, behavior: 'instant' }); return; }
    // wait a tick for content to render
    const id = setTimeout(() => {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, 30);
    return () => clearTimeout(id);
  }, [tab, anchor]);
}

const FoundationsPage = ({ anchor }) => {
  const active = useActiveSection(FOUNDATIONS.map(s => s.id));
  useScrollToAnchor('foundations', anchor);
  return (
    <React.Fragment>
      <FoundationsSidebar active={active} />
      <main className="flex-1 min-w-0 space-y-16">
        <FoundationsHero />
        <Section1_Colors />
        <Section2_Typography />
        <Section3_Spacing />
        <Section4_Radius />
        <Section5_Shadows />
        <Section6_Motion />
        <Section7_Breakpoints />
        <Section8_ZIndex />
        <Section9_Icons />
        <Section10_Opacity />
        <Section11_Borders />
        <Section12_Blur />
        <Section13_Aspects />
        <Section14_Status />
      </main>
    </React.Fragment>
  );
};

const ComponentsPage = ({ anchor }) => {
  const active = useActiveSection([...ATOMS, ...MOLECULES, ...ORGANISMS].map(s => s.id));
  useScrollToAnchor('components', anchor);
  return (
    <React.Fragment>
      <ComponentsSidebar active={active} />
      <main className="flex-1 min-w-0 space-y-16">
        <ComponentsHero />
        <Atom1_Button />
        <Atom2_Input />
        <Atom3_Textarea />
        <Atom4_Label />
        <Atom5_Badge />
        <Atom6_Avatar />
        <Atom7_Checkbox />
        <Atom8_Radio />
        <Atom9_Switch />
        <Atom10_Slider />
        <Atom11_Separator />
        <Atom12_Skeleton />
        <Atom13_Progress />
        <Atom14_Toggle />
        <Atom15_ToggleGroup />
        <Atom16_AspectRatio />
        <Atom17_Icon />
        <Atom18_Spinner />
        <Atom19_Kbd />
        <Atom20_Link />
        <Atom21_Text />
        <Atom22_Tag />
        <Mol1_Alert />
        <Mol2_AlertDialog />
        <Mol3_Card />
        <Mol4_Tooltip />
        <Mol5_HoverCard />
        <Mol6_Tabs />
        <Mol7_Breadcrumb />
        <Mol8_Pagination />
        <Mol9_FormField />
        <Mol10_DropdownMenu />
        <Mol11_ContextMenu />
        <Mol12_Menubar />
        <Mol13_NavigationMenu />
        <Mol14_Accordion />
        <Mol15_Collapsible />
        <Mol16_InputOTP />
        <Mol17_Select />
        <Mol18_Combobox />
        <Mol19_DatePicker />
        <Mol20_Command />
        <Mol21_SearchInput />
        <Mol22_EmptyState />
        <Org1_Dialog />
        <Org2_Sheet />
        <Org3_Drawer />
        <Org4_Sidebar />
        <Org5_DataTable />
        <Org6_Calendar />
        <Org7_Carousel />
        <Org8_Chart />
        <Org9_CommandPalette />
        <Org10_Resizable />
        <Org11_Popover />
        <Org12_ScrollArea />
        <Org13_Toast />
        <Org14_AppSidebar />
        <Org15_TopNav />
        <Org16_PageHeader />
      </main>
    </React.Fragment>
  );
};

const App = () => {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);
  const { tab, anchor } = useRoute();

  return (
    <div className="min-h-screen">
      <TopBar dark={dark} setDark={setDark} tab={tab} />
      <div className="max-w-[1360px] mx-auto px-6 pt-10 pb-16 flex gap-10">
        {tab === 'foundations' && <FoundationsPage anchor={anchor} />}
        {tab === 'components' && <ComponentsPage anchor={anchor} />}
        {tab === 'patterns' && (
          <ComingSoonPage
            title="Composition patterns"
            body="How to combine components for common UI tasks — form layouts, data tables, dashboard shells, empty states, auth flows. Each pattern will include a working preview, do/don't guidance, and code."
          />
        )}
        {tab === 'resources' && (
          <ComingSoonPage
            title="Downloads, changelogs, external references"
            body="Tokens JSON export, Figma library links, release notes, migration guides, and links to the underlying shadcn/ui, Radix, and Tailwind docs."
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
