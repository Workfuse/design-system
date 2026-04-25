/* global React, Icon, Button, Badge, Avatar, Input, Select, Checkbox,
   Textarea, Label, FormField, Link, Separator, Tag, Progress, Alert,
   Card, Breadcrumb, Tabs, Pagination, DropdownMenu, EmptyState, Kbd */
/* eslint-disable no-unused-vars */

// ============================================================
// In-canvas shared: AppSidebar + AdminTopNav
// ============================================================

const AppSidebar = ({ active }) => {
  const sections = [
    { label: 'Workspace', items: [
      { id: 'tickets', icon: 'inbox', label: 'Tickets', badge: '142' },
      { id: 'reports', icon: 'bar-chart-3', label: 'Reports' },
      { id: 'students', icon: 'users', label: 'Students' },
    ]},
    { label: 'Products', items: [
      { id: 'checkin', icon: 'map-pin', label: 'Check-in' },
      { id: 'forms', icon: 'clipboard-list', label: 'Forms' },
      { id: 'announcements', icon: 'megaphone', label: 'Announcements' },
    ]},
    { label: 'Account', items: [
      { id: 'settings', icon: 'settings', label: 'Settings' },
      { id: 'help', icon: 'help-circle', label: 'Help' },
    ]},
  ];
  return (
    <div className="appsb">
      <div className="appsb-header">
        <div className="appsb-brand-mark">W</div>
        <div style={{ minWidth: 0 }}>
          <div className="appsb-brand-name">Workfuse</div>
          <div style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>USP</div>
        </div>
      </div>
      <div className="appsb-content">
        {sections.map(sec => (
          <div key={sec.label} className="appsb-group">
            <div className="appsb-grouplabel">{sec.label}</div>
            {sec.items.map(item => (
              <button
                key={item.id}
                className={`appsb-item${item.id === active ? ' is-active' : ''}`}
              >
                <Icon name={item.icon} size={15} className="appsb-icon" />
                <span>{item.label}</span>
                {item.badge && <span className="appsb-badge">{item.badge}</span>}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="appsb-footer">
        <Avatar size={28} initials="AD" color="#2563eb" />
        <div className="appsb-user-info">
          <div className="appsb-user-name">Admin Demo</div>
          <div className="appsb-user-role">Support lead</div>
        </div>
        <Icon name="chevron-up" size={13} style={{ color: 'var(--muted-foreground)' }} />
      </div>
    </div>
  );
};

const AdminTopNav = ({ withSearch = true, notifications = 3 }) => (
  <div className="app-shell-topnav">
    <button className="app-topnav-iconbtn"><Icon name="panel-left" size={15} /></button>
    {withSearch && (
      <div className="app-topnav-search">
        <Input leftIcon="search" placeholder="Search tickets, students, events…" />
      </div>
    )}
    <div className="app-topnav-r">
      <button className="app-topnav-iconbtn" title="Help"><Icon name="help-circle" size={15} /></button>
      <button className="app-topnav-iconbtn" title="Notifications">
        <Icon name="bell" size={15} />
        {notifications > 0 && <span className="bell-dot">{notifications}</span>}
      </button>
      <Avatar size={30} initials="AD" color="#2563eb" />
    </div>
  </div>
);

// ============================================================
// PAGE 1 — Tickets List (full fidelity)
// ============================================================

const TICKETS = [
  { id: 'WF-1234', subject: 'Problem with enrollment in Física 201', student: 'Maria Santos', studentInit: 'MS', studentColor: '#2563eb', status: 'open', assignee: 'Carlos Pereira', assigneeInit: 'CP', priority: 'high', updated: '2h ago', labels: ['enrollment', 'urgent'] },
  { id: 'WF-1235', subject: 'Missing grade for Matemática 101', student: 'João Silva', studentInit: 'JS', studentColor: '#db2777', status: 'pending', assignee: 'Ana Rodrigues', assigneeInit: 'AR', priority: 'medium', updated: '4h ago' },
  { id: 'WF-1236', subject: 'Cannot access UFRJ portal after password reset', student: 'Ana Costa', studentInit: 'AC', studentColor: '#059669', status: 'open', assignee: null, priority: 'high', updated: '5h ago' },
  { id: 'WF-1237', subject: 'Request transcript for international program', student: 'Pedro Almeida', studentInit: 'PA', studentColor: '#d97706', status: 'open', assignee: 'Ana Rodrigues', assigneeInit: 'AR', priority: 'low', updated: '6h ago' },
  { id: 'WF-1238', subject: 'Refund request — canceled course Introdução à Filosofia', student: 'Beatriz Lima', studentInit: 'BL', studentColor: '#7c3aed', status: 'pending', assignee: 'Carlos Pereira', assigneeInit: 'CP', priority: 'medium', updated: '8h ago' },
  { id: 'WF-1239', subject: 'Lab access issue at Instituto de Química', student: 'Rafael Souza', studentInit: 'RS', studentColor: '#0891b2', status: 'resolved', assignee: 'Marcela Nunes', assigneeInit: 'MN', priority: 'medium', updated: '1d ago' },
  { id: 'WF-1240', subject: 'Duplicate charge on mensalidade May 2026', student: 'Letícia Faria', studentInit: 'LF', studentColor: '#ea580c', status: 'open', assignee: null, priority: 'high', updated: '1d ago' },
  { id: 'WF-1241', subject: 'Event check-in failing — Aula magna Direito', student: 'Thiago Mendes', studentInit: 'TM', studentColor: '#db2777', status: 'resolved', assignee: 'Carlos Pereira', assigneeInit: 'CP', priority: 'low', updated: '2d ago' },
  { id: 'WF-1242', subject: 'Request to change major from Física to Engenharia Elétrica', student: 'Camila Oliveira', studentInit: 'CO', studentColor: '#16a34a', status: 'pending', assignee: 'Ana Rodrigues', assigneeInit: 'AR', priority: 'low', updated: '2d ago' },
  { id: 'WF-1243', subject: 'Scholarship payment not processed for abril', student: 'Gustavo Ribeiro', studentInit: 'GR', studentColor: '#4f46e5', status: 'open', assignee: 'Marcela Nunes', assigneeInit: 'MN', priority: 'high', updated: '3d ago' },
  { id: 'WF-1244', subject: 'Missing attendance record — Laboratório de Física II', student: 'Isabella Fernandes', studentInit: 'IF', studentColor: '#be185d', status: 'resolved', assignee: 'Carlos Pereira', assigneeInit: 'CP', priority: 'medium', updated: '3d ago' },
  { id: 'WF-1245', subject: 'Login 2FA device lost — urgent access needed', student: 'Bruno Carvalho', studentInit: 'BC', studentColor: '#0d9488', status: 'resolved', assignee: 'Ana Rodrigues', assigneeInit: 'AR', priority: 'high', updated: '4d ago' },
];

const StatusBadge = ({ status }) => {
  const map = {
    open:     { variant: 'destructive', label: 'Open' },
    pending:  { variant: 'warning',     label: 'Pending' },
    resolved: { variant: 'success',     label: 'Resolved' },
    closed:   { variant: 'secondary',   label: 'Closed' },
  };
  const s = map[status] || map.open;
  return <Badge variant={s.variant}>{s.label}</Badge>;
};

const PriorityBadge = ({ priority }) => {
  const map = {
    high:   { variant: 'warning',    label: 'High' },
    medium: { variant: 'secondary',  label: 'Medium' },
    low:    { variant: 'outline',    label: 'Low' },
  };
  const p = map[priority] || map.medium;
  return <Badge variant={p.variant}>{p.label}</Badge>;
};

const TicketsListPage = () => {
  const [selected, setSelected] = React.useState(new Set(['WF-1236']));
  const toggle = (id) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id); else next.add(id);
    setSelected(next);
  };
  const toggleAll = () => {
    if (selected.size === TICKETS.length) setSelected(new Set());
    else setSelected(new Set(TICKETS.map(t => t.id)));
  };
  const allChecked = selected.size === TICKETS.length;
  const someChecked = selected.size > 0 && !allChecked;

  return (
    <div className="canvas-scroll">
      <div className="app-shell">
        <aside className="app-shell-sb"><AppSidebar active="tickets" /></aside>
        <AdminTopNav />
        <main className="app-shell-main">
          <div className="app-pghd">
            <div className="app-pghd-row">
              <div>
                <h1 className="app-pghd-title">Tickets</h1>
                <p className="app-pghd-desc">Manage all support requests from your institution.</p>
              </div>
              <div className="app-pghd-actions">
                <Button variant="outline" leftIcon="download">Export</Button>
                <Button variant="default" leftIcon="plus">Create ticket</Button>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 14 }}>
            <Tabs tabs={[
              { id: 'all', label: 'All', count: 142 },
              { id: 'unassigned', label: 'Unassigned', count: 8 },
              { id: 'mine', label: 'My tickets', count: 12 },
              { id: 'closed', label: 'Closed' },
            ]} />
          </div>

          <div className="app-filter-row">
            <Input leftIcon="search" placeholder="Search tickets…" />
            <Select leftIcon="circle" value="Status: All" />
            <Select leftIcon="flag" value="Priority: All" />
            <Select leftIcon="user" value="Assignee: Anyone" />
            <div className="app-filter-spacer" />
            <Button variant="outline" leftIcon="sliders-horizontal">View options</Button>
          </div>

          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'calc(var(--radius) + 2px)', overflow: 'hidden' }}>
            {selected.size > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'color-mix(in oklab, var(--primary) 8%, var(--background))', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--foreground)' }}>{selected.size} selected</span>
                <span style={{ flex: 1 }} />
                <Button variant="ghost" size="sm" leftIcon="user-plus">Assign</Button>
                <Button variant="ghost" size="sm" leftIcon="tag">Add label</Button>
                <Button variant="ghost" size="sm" leftIcon="archive">Close</Button>
                <Button variant="ghost" size="sm" leftIcon="x" onClick={() => setSelected(new Set())}>Clear</Button>
              </div>
            )}
            <table className="app-table">
              <thead>
                <tr>
                  <th className="th-checkbox"><Checkbox checked={allChecked} indeterminate={someChecked} onChange={toggleAll} /></th>
                  <th>ID</th>
                  <th>Subject</th>
                  <th>Student</th>
                  <th>Status</th>
                  <th>Assignee</th>
                  <th>Priority</th>
                  <th>Updated</th>
                  <th className="th-actions"></th>
                </tr>
              </thead>
              <tbody>
                {TICKETS.map(t => (
                  <tr key={t.id} className={selected.has(t.id) ? 'is-selected' : ''}>
                    <td><Checkbox checked={selected.has(t.id)} onChange={() => toggle(t.id)} /></td>
                    <td className="tcell-id">{t.id}</td>
                    <td>
                      <div className="ticket-subject">{t.subject}</div>
                      {t.labels && (
                        <div className="ticket-meta">
                          {t.labels.map(l => <span key={l} style={{ marginRight: 6 }}>#{l}</span>)}
                        </div>
                      )}
                    </td>
                    <td>
                      <span className="stu-cell">
                        <Avatar size={24} initials={t.studentInit} color={t.studentColor} />
                        <span className="tcell-primary">{t.student}</span>
                      </span>
                    </td>
                    <td><StatusBadge status={t.status} /></td>
                    <td>
                      {t.assignee ? (
                        <span className="assignee-cell">
                          <Avatar size={22} initials={t.assigneeInit} color="#6366f1" />
                          <span className="tcell-muted" style={{ fontSize: 12.5 }}>{t.assignee}</span>
                        </span>
                      ) : (
                        <Badge variant="outline">Unassigned</Badge>
                      )}
                    </td>
                    <td><PriorityBadge priority={t.priority} /></td>
                    <td className="tcell-muted" style={{ fontSize: 12.5 }}>{t.updated}</td>
                    <td className="th-actions">
                      <button className="app-topnav-iconbtn" style={{ width: 24, height: 24 }}>
                        <Icon name="more-horizontal" size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ borderTop: '1px solid var(--border)' }}>
              <Pagination page={1} total={142} perPage={12} onChange={() => {}} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// ============================================================
// PAGE 2 — Ticket Detail (full fidelity)
// ============================================================

const TicketDetailPage = () => {
  const [status, setStatus] = React.useState('Open');
  const [priority, setPriority] = React.useState('High');
  const [assignee, setAssignee] = React.useState('Carlos Pereira');
  return (
    <div className="canvas-scroll">
      <div className="app-shell">
        <aside className="app-shell-sb"><AppSidebar active="tickets" /></aside>
        <AdminTopNav />
        <main className="app-shell-main">
          <div className="app-pghd">
            <Breadcrumb items={[
              { label: 'Tickets', href: '#' },
              { label: 'WF-1234' },
            ]} />
            <div className="app-pghd-row" style={{ marginTop: 10 }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <h1 className="app-pghd-title" style={{ fontSize: 22 }}>
                    <span className="tcell-id" style={{ fontSize: 14, marginRight: 10 }}>WF-1234</span>
                    Problem with enrollment in Física 201
                  </h1>
                  <StatusBadge status="open" />
                </div>
                <p className="app-pghd-desc" style={{ marginTop: 6 }}>
                  Opened 3 hours ago · <span style={{ color: 'var(--foreground)' }}>Maria Santos</span> · Last reply from Carlos Pereira 1h ago
                </p>
              </div>
              <div className="app-pghd-actions">
                <Button variant="ghost" leftIcon="user-plus">Assign</Button>
                <Button variant="outline" leftIcon="rotate-ccw">Reopen</Button>
                <Button variant="destructive" leftIcon="x">Close ticket</Button>
              </div>
            </div>
            <div style={{ marginTop: 14 }}>
              <Tabs tabs={[
                { id: 'conv', label: 'Conversation', count: 3 },
                { id: 'activity', label: 'Activity' },
                { id: 'notes', label: 'Internal notes', count: 2 },
              ]} />
            </div>
          </div>

          <div className="td-root">
            <div className="td-thread">
              <div className="td-msg">
                <div className="td-msg-head">
                  <Avatar size={28} initials="MS" color="#2563eb" />
                  <span className="td-msg-name">Maria Santos</span>
                  <Badge variant="outline">student</Badge>
                  <span className="td-msg-time">3h ago</span>
                </div>
                <div className="td-msg-body">
                  I tried to enroll in Física 201 but the system says the class is full. My advisor said I have priority because it's a core requirement. Can you help? I have a class at 2pm and need to confirm before then.
                </div>
                <div className="td-attach">
                  <Icon name="paperclip" size={12} />
                  <span>enrollment-screenshot.png</span>
                  <span className="tcell-muted" style={{ marginLeft: 4 }}>· 124 KB</span>
                </div>
              </div>

              <div className="td-event">— Ticket assigned to Carlos Pereira · 2h ago</div>

              <div className="td-msg is-support">
                <div className="td-msg-head">
                  <Avatar size={28} initials="CP" color="#6366f1" />
                  <span className="td-msg-name">Carlos Pereira</span>
                  <Badge variant="secondary">support</Badge>
                  <span className="td-msg-time">1h ago</span>
                </div>
                <div className="td-msg-body">
                  Hi Maria, thanks for reaching out. Let me check with the registrar's office regarding your priority status for Física 201. I'll confirm within the hour — well before your 2pm class.
                </div>
              </div>

              <div className="td-msg">
                <div className="td-msg-head">
                  <Avatar size={28} initials="MS" color="#2563eb" />
                  <span className="td-msg-name">Maria Santos</span>
                  <Badge variant="outline">student</Badge>
                  <span className="td-msg-time">42m ago</span>
                </div>
                <div className="td-msg-body">
                  Thank you! I really appreciate the quick response.
                </div>
              </div>

              <div className="td-event">— Status changed to In progress · 40m ago</div>

              <div className="td-composer">
                <Textarea placeholder="Reply to Maria…" rows={4} />
                <div className="td-composer-toolbar">
                  <button className="app-topnav-iconbtn"><Icon name="paperclip" size={14} /></button>
                  <button className="app-topnav-iconbtn"><Icon name="smile" size={14} /></button>
                  <button className="app-topnav-iconbtn"><Icon name="file-text" size={14} /></button>
                  <Select value="Template: Default" className="sel" />
                  <div className="td-composer-actions">
                    <Button variant="ghost" size="sm">Save draft</Button>
                    <Button variant="default" rightIcon="send">Reply</Button>
                  </div>
                </div>
              </div>
            </div>

            <aside className="td-meta">
              <div className="td-meta-student">
                <Avatar size={56} initials="MS" color="#2563eb" />
                <div style={{ textAlign: 'center' }}>
                  <div className="td-meta-student-name">Maria Santos</div>
                  <div className="td-meta-student-email">mariasantos@usp.br</div>
                  <div className="td-meta-student-ctx">Física 201 · 3rd semester</div>
                </div>
                <Button variant="outline" size="sm" leftIcon="external-link" fullWidth>View profile</Button>
              </div>

              <div className="td-meta-h">Status</div>
              <Select value={status} leftIcon="circle" />

              <div className="td-meta-h">Priority</div>
              <Select value={priority} leftIcon="flag" />

              <div className="td-meta-h">Assignee</div>
              <div className="td-meta-row">
                <Select value={
                  <span className="sel-value"><Avatar size={18} initials="CP" color="#6366f1" /> {assignee}</span>
                } />
              </div>

              <div className="td-meta-h">Labels</div>
              <div className="td-meta-tags">
                <Tag onRemove={() => {}}>enrollment</Tag>
                <Tag onRemove={() => {}}>urgent</Tag>
                <Tag onRemove={() => {}}>física-201</Tag>
                <button className="tag" style={{ color: 'var(--muted-foreground)', cursor: 'pointer', paddingRight: 10 }}>
                  <Icon name="plus" size={11} /> Add
                </button>
              </div>

              <div className="td-meta-h">Related tickets</div>
              <div className="td-meta-related">
                <a href="#" className="td-meta-related-item" onClick={e => e.preventDefault()}>
                  <span className="tcell-id">WF-1198</span>
                  <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Class conflict with lab schedule</span>
                  <Badge variant="success">Resolved</Badge>
                </a>
                <a href="#" className="td-meta-related-item" onClick={e => e.preventDefault()}>
                  <span className="tcell-id">WF-1120</span>
                  <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Enrollment request for Química 101</span>
                  <Badge variant="success">Resolved</Badge>
                </a>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
};

Object.assign(window, {
  AppSidebar, AdminTopNav, StatusBadge, PriorityBadge,
  TicketsListPage, TicketDetailPage,
});
