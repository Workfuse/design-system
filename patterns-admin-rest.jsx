/* global React, Icon, Button, Badge, Avatar, Input, Select, Checkbox,
   Tag, Alert, Link, Label, FormField, Card, EmptyState,
   AppSidebar, AdminTopNav */
/* eslint-disable no-unused-vars */

// ============================================================
// PAGE 3 — Check-in: Campuses (trimmed, 6 cards)
// ============================================================

const CAMPUSES = [
  { name: 'Cidade Universitária', code: 'USP-CU', students: 58420, events: 24, status: 'Active', img: 'linear-gradient(135deg, #2563eb, #7c3aed)' },
  { name: 'Faculdade de Direito',   code: 'USP-FD', students: 3840,  events: 6,  status: 'Active', img: 'linear-gradient(135deg, #d97706, #db2777)' },
  { name: 'Escola Politécnica',     code: 'USP-EP', students: 12210, events: 11, status: 'Active', img: 'linear-gradient(135deg, #059669, #0891b2)' },
  { name: 'Instituto de Química',   code: 'USP-IQ', students: 2140,  events: 3,  status: 'Maintenance', img: 'linear-gradient(135deg, #7c3aed, #2563eb)' },
  { name: 'Instituto de Biociências',code: 'USP-IB', students: 3210,  events: 4,  status: 'Active', img: 'linear-gradient(135deg, #16a34a, #65a30d)' },
  { name: 'Faculdade de Medicina',  code: 'USP-FM', students: 4580,  events: 8,  status: 'Active', img: 'linear-gradient(135deg, #be185d, #9f1239)' },
];

const CheckinCampusesPage = () => (
  <div className="canvas-scroll">
    <div className="app-shell">
      <aside className="app-shell-sb"><AppSidebar active="checkin" /></aside>
      <AdminTopNav />
      <main className="app-shell-main">
        <div className="app-pghd">
          <div className="app-pghd-row">
            <div>
              <h1 className="app-pghd-title">Campuses</h1>
              <p className="app-pghd-desc">Configure check-in for each campus across USP.</p>
            </div>
            <div className="app-pghd-actions">
              <Button variant="outline" leftIcon="map">View on map</Button>
              <Button variant="default" leftIcon="plus">Add campus</Button>
            </div>
          </div>
        </div>

        <div className="app-filter-row">
          <Input leftIcon="search" placeholder="Search campuses…" />
          <Select leftIcon="filter" value="Status: All" />
          <div className="app-filter-spacer" />
          <div style={{ display: 'inline-flex', background: 'var(--muted)', border: '1px solid var(--border)', borderRadius: 'calc(var(--radius) - 2px)', padding: 2 }}>
            <button className="app-topnav-iconbtn" style={{ background: 'var(--background)', boxShadow: 'var(--shadow-sm)' }}><Icon name="layout-grid" size={14} /></button>
            <button className="app-topnav-iconbtn"><Icon name="list" size={14} /></button>
          </div>
        </div>

        <div className="campus-grid">
          {CAMPUSES.map(c => (
            <div key={c.code} className="campus-card">
              <div className="campus-card-img" style={{ background: c.img }}>
                <Badge variant={c.status === 'Active' ? 'success' : 'warning'} className="campus-status-pill">
                  {c.status}
                </Badge>
              </div>
              <div className="campus-card-body">
                <div className="campus-card-head">
                  <div>
                    <div className="campus-card-name">{c.name}</div>
                    <div className="campus-card-code">{c.code}</div>
                  </div>
                  <button className="app-topnav-iconbtn" style={{ width: 26, height: 26 }}>
                    <Icon name="more-horizontal" size={14} />
                  </button>
                </div>
                <div className="campus-card-stats">
                  <div className="campus-stat">
                    <Icon name="users" size={13} />
                    <span>{c.students.toLocaleString()} students</span>
                  </div>
                  <div className="campus-stat">
                    <Icon name="calendar" size={13} />
                    <span>{c.events} events</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <Button variant="outline" size="sm" fullWidth>Configure</Button>
                  <Button variant="ghost" size="sm" leftIcon="external-link">Open</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  </div>
);

// ============================================================
// PAGE 4 — Event Types (trimmed: 6 rows)
// ============================================================

const EVENT_TYPES = [
  { name: 'Aula presencial',        icon: 'graduation-cap', color: '#2563eb', capacity: 40,  durationMin: 50, requiresCheckin: true,  active: true },
  { name: 'Laboratório',            icon: 'flask-conical',  color: '#059669', capacity: 24,  durationMin: 120, requiresCheckin: true,  active: true },
  { name: 'Seminário / Palestra',   icon: 'mic',            color: '#d97706', capacity: 200, durationMin: 90,  requiresCheckin: false, active: true },
  { name: 'Aula magna',             icon: 'award',          color: '#7c3aed', capacity: 500, durationMin: 120, requiresCheckin: true,  active: true },
  { name: 'Reunião de orientação',  icon: 'user-check',     color: '#0891b2', capacity: 4,   durationMin: 30,  requiresCheckin: false, active: true },
  { name: 'Prova / Avaliação',      icon: 'file-text',      color: '#be185d', capacity: 80,  durationMin: 120, requiresCheckin: true,  active: false },
];

const EventTypesPage = () => (
  <div className="canvas-scroll">
    <div className="app-shell">
      <aside className="app-shell-sb"><AppSidebar active="forms" /></aside>
      <AdminTopNav />
      <main className="app-shell-main">
        <div className="app-pghd">
          <div className="app-pghd-row">
            <div>
              <h1 className="app-pghd-title">Event types</h1>
              <p className="app-pghd-desc">Templates that determine capacity, duration, and check-in behavior.</p>
            </div>
            <div className="app-pghd-actions">
              <Button variant="outline" leftIcon="book-open">Docs</Button>
              <Button variant="default" leftIcon="plus">New event type</Button>
            </div>
          </div>
        </div>

        <div className="app-filter-row">
          <Input leftIcon="search" placeholder="Search types…" />
          <Select leftIcon="circle" value="Status: All" />
          <div className="app-filter-spacer" />
          <Button variant="ghost" leftIcon="download" size="sm">Export</Button>
        </div>

        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'calc(var(--radius) + 2px)', overflow: 'hidden' }}>
          <table className="app-table">
            <thead>
              <tr>
                <th style={{ width: 40 }}></th>
                <th>Type</th>
                <th>Capacity</th>
                <th>Duration</th>
                <th>Check-in</th>
                <th>Status</th>
                <th style={{ width: 90 }}></th>
              </tr>
            </thead>
            <tbody>
              {EVENT_TYPES.map(t => (
                <tr key={t.name}>
                  <td>
                    <span className="evt-icon-chip" style={{ background: `color-mix(in oklab, ${t.color} 14%, transparent)`, color: t.color }}>
                      <Icon name={t.icon} size={14} />
                    </span>
                  </td>
                  <td><span className="tcell-primary">{t.name}</span></td>
                  <td className="tcell-muted" style={{ fontSize: 12.5 }}>{t.capacity} people</td>
                  <td className="tcell-muted" style={{ fontSize: 12.5 }}>{t.durationMin} min</td>
                  <td>
                    {t.requiresCheckin
                      ? <Badge variant="secondary">Required</Badge>
                      : <Badge variant="outline">Optional</Badge>}
                  </td>
                  <td>
                    {t.active
                      ? <Badge variant="success">Active</Badge>
                      : <Badge variant="outline">Disabled</Badge>}
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <Button variant="ghost" size="sm">Edit</Button>
                    <button className="app-topnav-iconbtn" style={{ width: 26, height: 26, marginLeft: 2 }}>
                      <Icon name="more-horizontal" size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
);

// ============================================================
// PAGE 5 — Reports Overview (3 metrics + 2 charts, trimmed)
// ============================================================

// Simple inline bar chart
const BarChart = ({ data, max, color = 'var(--primary)', height = 160 }) => (
  <div className="chart-bar-host" style={{ height }}>
    {data.map((d, i) => (
      <div key={i} className="chart-bar-col">
        <div className="chart-bar-fill" style={{ height: `${(d.v / max) * 100}%`, background: color }} />
        <div className="chart-bar-label">{d.l}</div>
      </div>
    ))}
  </div>
);

// Simple inline line chart (SVG)
const LineChart = ({ data, max, color = 'var(--primary)', height = 160 }) => {
  const w = 480, h = height - 28;
  const stepX = w / (data.length - 1);
  const points = data.map((d, i) => `${i * stepX},${h - (d.v / max) * h}`).join(' ');
  const areaPts = `0,${h} ${points} ${w},${h}`;
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${w} ${h + 28}`} preserveAspectRatio="none" style={{ width: '100%', height: height }}>
        <defs>
          <linearGradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((p, i) => (
          <line key={i} x1="0" x2={w} y1={h * p} y2={h * p} stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />
        ))}
        <polygon points={areaPts} fill="url(#chart-grad)" />
        <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        {data.map((d, i) => (
          <text key={i} x={i * stepX} y={h + 18} fontSize="10" fill="var(--muted-foreground)" textAnchor="middle" fontFamily="Inter, sans-serif">{d.l}</text>
        ))}
      </svg>
    </div>
  );
};

const ReportsPage = () => (
  <div className="canvas-scroll">
    <div className="app-shell">
      <aside className="app-shell-sb"><AppSidebar active="reports" /></aside>
      <AdminTopNav />
      <main className="app-shell-main">
        <div className="app-pghd">
          <div className="app-pghd-row">
            <div>
              <h1 className="app-pghd-title">Reports overview</h1>
              <p className="app-pghd-desc">Support performance across USP for the last 30 days.</p>
            </div>
            <div className="app-pghd-actions">
              <Select leftIcon="calendar" value="Last 30 days" />
              <Button variant="outline" leftIcon="download">Export</Button>
            </div>
          </div>
        </div>

        <div className="rpt-metrics">
          <div className="rpt-metric">
            <div className="rpt-metric-label">Tickets opened</div>
            <div className="rpt-metric-value">2,314</div>
            <div className="rpt-metric-delta rpt-up">
              <Icon name="arrow-up-right" size={12} /> <span>12.4%</span>
              <span className="tcell-muted" style={{ marginLeft: 6, fontSize: 11.5 }}>vs last 30d</span>
            </div>
          </div>
          <div className="rpt-metric">
            <div className="rpt-metric-label">Avg. first response</div>
            <div className="rpt-metric-value">1h 42m</div>
            <div className="rpt-metric-delta rpt-down">
              <Icon name="arrow-down-right" size={12} /> <span>8.1% faster</span>
              <span className="tcell-muted" style={{ marginLeft: 6, fontSize: 11.5 }}>vs last 30d</span>
            </div>
          </div>
          <div className="rpt-metric">
            <div className="rpt-metric-label">CSAT score</div>
            <div className="rpt-metric-value">4.7 <span className="tcell-muted" style={{ fontSize: 18, fontWeight: 400 }}>/ 5</span></div>
            <div className="rpt-metric-delta rpt-up">
              <Icon name="arrow-up-right" size={12} /> <span>0.2</span>
              <span className="tcell-muted" style={{ marginLeft: 6, fontSize: 11.5 }}>vs last 30d</span>
            </div>
          </div>
        </div>

        <div className="rpt-charts">
          <div className="rpt-chart-card">
            <div className="rpt-chart-head">
              <div>
                <div className="rpt-chart-title">Tickets over time</div>
                <div className="rpt-chart-sub">Daily opened vs. resolved</div>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span className="rpt-legend"><span className="rpt-legend-dot" style={{ background: 'var(--primary)' }} /> Opened</span>
                <span className="rpt-legend"><span className="rpt-legend-dot" style={{ background: 'var(--success)' }} /> Resolved</span>
              </div>
            </div>
            <LineChart
              data={[
                { l: 'W1', v: 60 }, { l: 'W2', v: 78 }, { l: 'W3', v: 52 }, { l: 'W4', v: 95 },
                { l: 'W5', v: 72 }, { l: 'W6', v: 110 }, { l: 'W7', v: 88 }, { l: 'W8', v: 124 },
              ]}
              max={140}
              height={200}
            />
          </div>

          <div className="rpt-chart-card">
            <div className="rpt-chart-head">
              <div>
                <div className="rpt-chart-title">Top categories</div>
                <div className="rpt-chart-sub">Tickets this month</div>
              </div>
            </div>
            <BarChart
              data={[
                { l: 'Enroll', v: 342 }, { l: 'Grades', v: 220 },
                { l: 'Payments', v: 186 }, { l: 'Access', v: 164 },
                { l: 'Events', v: 128 }, { l: 'Other', v: 96 },
              ]}
              max={360}
              height={200}
            />
          </div>
        </div>
      </main>
    </div>
  </div>
);

// ============================================================
// PAGE 6 — Login (modest)
// ============================================================

const LoginPage = () => (
  <div className="login-root">
    <div className="login-left">
      <div className="login-left-brand">
        <div className="appsb-brand-mark">W</div>
        <span style={{ fontWeight: 600, fontSize: 15 }}>Workfuse</span>
      </div>
      <div className="login-left-body">
        <blockquote className="login-quote">
          "Our support team went from 3-day response times to 2 hours. Students notice, and that changes everything about how they feel about USP."
        </blockquote>
        <div className="login-quote-author">
          <Avatar size={36} initials="RM" color="#d97706" />
          <div>
            <div style={{ fontWeight: 500, fontSize: 13.5 }}>Rafaela Martins</div>
            <div style={{ fontSize: 12, opacity: 0.75 }}>Dean of Students · USP</div>
          </div>
        </div>
      </div>
      <div className="login-left-dots" />
    </div>

    <div className="login-right">
      <div className="login-card">
        <div className="login-head">
          <h1 className="login-title">Welcome back</h1>
          <p className="login-sub">Sign in to your Workfuse workspace.</p>
        </div>

        <div className="login-sso">
          <Button variant="outline" fullWidth>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Icon name="graduation-cap" size={14} /> Continue with SSO
            </span>
          </Button>
          <Button variant="outline" fullWidth>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Icon name="chrome" size={14} /> Continue with Google
            </span>
          </Button>
        </div>

        <div className="login-or"><span>or continue with email</span></div>

        <div className="login-form">
          <FormField label="Email">
            <Input type="email" placeholder="you@usp.br" leftIcon="mail" />
          </FormField>
          <FormField
            label={
              <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span>Password</span>
                <Link href="#" style={{ fontSize: 12 }}>Forgot?</Link>
              </span>
            }
          >
            <Input type="password" placeholder="••••••••" leftIcon="lock" />
          </FormField>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Checkbox checked label="Keep me signed in for 30 days" />
          </div>
          <Button variant="default" fullWidth rightIcon="arrow-right">Sign in</Button>
        </div>

        <div className="login-foot">
          New to Workfuse? <Link href="#">Request access</Link>
        </div>
      </div>

      <div className="login-legal">
        <span>© 2026 Workfuse</span>
        <span>·</span>
        <Link href="#">Privacy</Link>
        <span>·</span>
        <Link href="#">Terms</Link>
      </div>
    </div>
  </div>
);

Object.assign(window, {
  CheckinCampusesPage, EventTypesPage, ReportsPage, LoginPage,
});
