/* global React, ReactDOM, Icon, Badge,
   TopBar, SideNav, PatternPage, ALL_PAGE_IDS,
   TicketsListPage, TicketDetailPage,
   CheckinCampusesPage, EventTypesPage, ReportsPage, LoginPage */
/* eslint-disable no-unused-vars */

function PatternsApp() {
  const [dark, setDark] = React.useState(
    () => typeof document !== 'undefined' &&
          document.documentElement.classList.contains('dark')
  );
  const [anchor, setAnchor] = React.useState(() =>
    (typeof location !== 'undefined' && location.hash?.slice(1)) || 'tickets-list'
  );

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  // Track hash changes for side-nav highlighting
  React.useEffect(() => {
    const onHash = () => {
      const id = location.hash?.slice(1);
      if (id && ALL_PAGE_IDS.includes(id)) setAnchor(id);
    };
    window.addEventListener('hashchange', onHash);
    onHash();
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // When user clicks a side-nav link, scroll to it smoothly
  const handleSetAnchor = (id) => {
    setAnchor(id);
    history.replaceState(null, '', `#${id}`);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Page meta
  const pages = [
    {
      id: 'tickets-list',
      name: 'Tickets List',
      context: 'Main workspace view for support agents. Shows all tickets with filters, bulk actions, and pagination.',
      components: ['AppShell', 'Table', 'Checkbox', 'Badge', 'Avatar', 'Tabs', 'Pagination', 'Input', 'Select', 'Button'],
      viewport: { icon: 'monitor', label: 'Desktop · 1280×800' },
      url: 'workfuse.usp.br/tickets',
      content: <TicketsListPage />,
      notes: [
        { label: 'Density', body: 'Compact rows (~48px) keep 12+ tickets visible without scroll; meets the "busy support day" brief.' },
        { label: 'Bulk actions bar', body: 'Only appears when ≥1 row is selected. Uses a tinted primary background to signal "selection mode" without stealing the header.' },
        { label: 'Empty assignees', body: 'Use an Unassigned outline badge — sharper visual call to action than a grey en-dash.' },
      ],
    },
    {
      id: 'ticket-detail',
      name: 'Ticket Detail',
      context: 'Single-ticket view: conversation thread on the left, student profile + metadata rail on the right.',
      components: ['AppShell', 'Breadcrumb', 'Tabs', 'Badge', 'Avatar', 'Textarea', 'Tag', 'Select', 'Button'],
      viewport: { icon: 'monitor', label: 'Desktop · 1280×800' },
      url: 'workfuse.usp.br/tickets/WF-1234',
      content: <TicketDetailPage />,
      notes: [
        { label: 'Message types', body: 'Student = default card. Support = primary-tinted card. System events = inline italic text (no card).' },
        { label: 'Right rail', body: 'Student card pinned at top, metadata groups below. Related tickets use monospace IDs to match the table convention.' },
      ],
    },
    {
      id: 'checkin-campuses',
      name: 'Check-in · Campuses',
      context: 'Configure which USP campuses use Workfuse check-in. Each card represents one campus with its status and quick actions.',
      components: ['AppShell', 'Card', 'Badge', 'Button', 'Input', 'Select'],
      viewport: { icon: 'monitor', label: 'Desktop · 1280×800' },
      url: 'workfuse.usp.br/checkin/campuses',
      content: <CheckinCampusesPage />,
      notes: [
        { label: 'Card hero', body: 'Gradient thumbnail acts as visual identifier without requiring actual campus photography — keeps the DS mockable.' },
        { label: 'View toggle', body: 'Grid is default (shown); list view flips to Table pattern — re-uses event-types layout.' },
      ],
    },
    {
      id: 'event-types',
      name: 'Event Types',
      context: 'Configure event templates. Applied across all campuses — determines capacity, duration, and whether check-in is required.',
      components: ['AppShell', 'Table', 'Badge', 'Button', 'Input', 'Select'],
      viewport: { icon: 'monitor', label: 'Desktop · 1280×800' },
      url: 'workfuse.usp.br/events/types',
      content: <EventTypesPage />,
      notes: [
        { label: 'Icon chips', body: 'Per-type colored chips give scanability without dominating the row. Color is derived from the type category.' },
      ],
    },
    {
      id: 'reports',
      name: 'Reports Overview',
      context: 'Support performance dashboard. Top row = headline metrics; below = time-series and category breakdowns.',
      components: ['AppShell', 'MetricCard', 'LineChart', 'BarChart', 'Select', 'Button'],
      viewport: { icon: 'monitor', label: 'Desktop · 1280×800' },
      url: 'workfuse.usp.br/reports',
      content: <ReportsPage />,
      notes: [
        { label: 'Delta direction', body: 'Green means "good trend", not "up." Response time going down is still green.' },
        { label: 'Chart primitives', body: 'SVG line + CSS flex bars. No chart library — keeps the DS dependency-free and designers can freely restyle.' },
      ],
    },
    {
      id: 'login',
      name: 'Login',
      context: 'Entry point for the admin/support workspace. Testimonial on the left for institutional trust, form on the right.',
      components: ['Input', 'Button', 'Checkbox', 'Link', 'FormField', 'Avatar'],
      viewport: { icon: 'monitor', label: 'Desktop · 1280×800' },
      url: 'workfuse.usp.br/login',
      content: <LoginPage />,
      notes: [
        { label: 'SSO first', body: 'USP staff use institutional SSO; email/password is a fallback for external contractors. Order reflects usage, not just technical complexity.' },
      ],
    },
  ];

  return (
    <>
      <TopBar dark={dark} setDark={setDark} />
      <div className="pt-shell">
        <SideNav anchor={anchor} setAnchor={handleSetAnchor} />
        <main className="pt-main">
          {pages.map(p => (
            <section key={p.id} id={p.id} className="pt-section">
              <PatternPage
                name={p.name}
                context={p.context}
                components={p.components}
                viewport={p.viewport}
                url={p.url}
                notes={p.notes}
                desktopWidth={1280}
                desktopHeight={780}
              >
                {p.content}
              </PatternPage>
            </section>
          ))}
        </main>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PatternsApp />);

// Upgrade lucide icons after initial render
setTimeout(() => { if (window.lucide) window.lucide.createIcons(); }, 50);
