/* global React, ReactDOM, Icon, Button, Badge, Avatar */
/* eslint-disable no-unused-vars */

// ============================================================
// Patterns site chrome
// ============================================================

const PAGES = [
  {
    group: 'Admin',
    items: [
      { id: 'tickets-list',    label: 'Tickets List',      icon: 'list-todo' },
      { id: 'ticket-detail',   label: 'Ticket Detail',     icon: 'message-square' },
      { id: 'checkin-campuses',label: 'Check-in · Campuses', icon: 'map-pin' },
      { id: 'event-types',     label: 'Event Types',       icon: 'calendar-plus' },
      { id: 'reports',         label: 'Reports Overview',  icon: 'bar-chart-3' },
      { id: 'login',           label: 'Login',             icon: 'log-in' },
    ],
  },
];

const ALL_PAGE_IDS = PAGES.flatMap(g => g.items.map(i => i.id));

// ---------------- Top bar ----------------
const TopBar = ({ dark, setDark }) => (
  <header className="pt-topbar">
    <div className="pt-topbar-inner">
      <a href="index.html" className="pt-brand">
        <span className="pt-brand-mark">W</span>
        <span className="pt-brand-title">Workfuse Design System</span>
        <Badge variant="outline" className="pt-brand-chip">Patterns</Badge>
      </a>
      <div className="pt-topbar-right">
        <a href="index.html" className="pt-topnav-link">
          <Icon name="arrow-left" size={13} />
          <span>Back to docs</span>
        </a>
        <button
          className="pt-theme-toggle"
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
          title={dark ? 'Switch to light' : 'Switch to dark'}
        >
          <Icon name={dark ? 'sun' : 'moon'} size={15} />
        </button>
      </div>
    </div>
  </header>
);

// ---------------- Sidebar ----------------
const SideNav = ({ anchor, setAnchor }) => (
  <aside className="pt-sidenav">
    <div className="pt-sidenav-header">
      <div className="pt-sidenav-title">Exemplar screens</div>
      <div className="pt-sidenav-desc">Full-page patterns composing atoms, molecules, and organisms.</div>
    </div>
    <nav className="pt-sidenav-nav">
      {PAGES.map(group => (
        <div key={group.group} className="pt-sidenav-group">
          <div className="pt-sidenav-grouplabel">
            <span>{group.group}</span>
            <span className="pt-sidenav-count">{group.items.length}</span>
          </div>
          {group.items.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`pt-sidenav-item${anchor === item.id ? ' is-active' : ''}`}
              onClick={(e) => { e.preventDefault(); setAnchor(item.id); }}
            >
              <Icon name={item.icon} size={14} className="pt-sidenav-icon" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      ))}
    </nav>
    <div className="pt-sidenav-footer">
      <div className="pt-sidenav-fn">6 exemplar pages</div>
      <div className="pt-sidenav-fd">Admin shell for Workfuse · USP</div>
    </div>
  </aside>
);

// ---------------- Page scaffold ----------------
const PatternHeader = ({ name, context, components, viewport }) => (
  <div className="pt-page-head">
    <div className="pt-page-head-row">
      <div>
        <h1 className="pt-page-title">{name}</h1>
        <p className="pt-page-context">{context}</p>
      </div>
      <div className="pt-viewport-pill">
        <Icon name={viewport.icon} size={13} />
        <span>{viewport.label}</span>
      </div>
    </div>
    <div className="pt-components-row">
      <span className="pt-components-label">Uses</span>
      <div className="pt-components-list">
        {components.map(c => <Badge key={c} variant="outline">{c}</Badge>)}
      </div>
    </div>
  </div>
);

// ---------------- Admin browser chrome ----------------
const BrowserFrame = ({ url, children, height, width }) => (
  <div className="pt-browser" style={{ width, height }}>
    <div className="pt-browser-chrome">
      <div className="pt-browser-dots">
        <span className="pt-dot pt-dot-r" />
        <span className="pt-dot pt-dot-y" />
        <span className="pt-dot pt-dot-g" />
      </div>
      <div className="pt-browser-urlbar">
        <Icon name="lock" size={11} />
        <span>{url}</span>
      </div>
      <div className="pt-browser-chrome-right">
        <Icon name="rotate-cw" size={12} />
      </div>
    </div>
    <div className="pt-browser-body" style={{ height: height ? 'calc(100% - 34px)' : undefined }}>
      {children}
    </div>
  </div>
);

// ---------------- Mobile frame ----------------
const PhoneFrame = ({ children, time = '9:41' }) => (
  <div className="pt-phone">
    <div className="pt-phone-notch" />
    <div className="pt-phone-status">
      <span className="pt-phone-time">{time}</span>
      <span className="pt-phone-status-r">
        <Icon name="signal" size={11} />
        <Icon name="wifi" size={11} />
        <Icon name="battery-full" size={13} />
      </span>
    </div>
    <div className="pt-phone-body">{children}</div>
    <div className="pt-phone-homebar" />
  </div>
);

// ---------------- Canvas wrapper ----------------
const Canvas = ({ children, kind = 'browser', url = 'workfuse.app', desktopWidth = 1280, desktopHeight = 800 }) => (
  <div className="pt-canvas">
    {kind === 'browser' ? (
      <BrowserFrame url={url} width={desktopWidth} height={desktopHeight}>
        {children}
      </BrowserFrame>
    ) : kind === 'phone' ? (
      <PhoneFrame>{children}</PhoneFrame>
    ) : (
      children
    )}
  </div>
);

// ---------------- Notes ----------------
const Notes = ({ items }) => (
  <div className="pt-notes">
    <div className="pt-notes-title">
      <Icon name="sticky-note" size={14} />
      <span>Notes</span>
    </div>
    <ul className="pt-notes-list">
      {items.map((n, i) => (
        <li key={i}>
          {n.label && <strong>{n.label} — </strong>}
          {n.body || n}
        </li>
      ))}
    </ul>
  </div>
);

// ---------------- Page wrapper ----------------
const PatternPage = ({ name, context, components, viewport, children, notes, canvasKind = 'browser', url, desktopWidth, desktopHeight }) => (
  <article className="pt-article">
    <PatternHeader name={name} context={context} components={components} viewport={viewport} />
    <Canvas kind={canvasKind} url={url} desktopWidth={desktopWidth} desktopHeight={desktopHeight}>
      {children}
    </Canvas>
    {notes && <Notes items={notes} />}
  </article>
);

Object.assign(window, {
  PAGES, ALL_PAGE_IDS, TopBar, SideNav, PatternPage, Canvas,
  BrowserFrame, PhoneFrame, Notes, PatternHeader,
});
