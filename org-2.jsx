/* global React, Icon, OrgSection, OrgHero, CompositionRules, OrgAnatomy, Subsection, SampleCard, Grid, PropsTable, CodeBlock, K, S, T, C */
/* eslint-disable no-unused-vars */

// ============================================================
// Organism 5 — DataTable
// ============================================================

const STATUS_MAP = {
  Open:       { variant: 'destructive', label: 'Open' },
  'In progress': { variant: 'info', label: 'In progress' },
  Resolved:   { variant: 'success', label: 'Resolved' },
  Pending:    { variant: 'warning', label: 'Pending' },
  Closed:     { variant: 'secondary', label: 'Closed' },
};
const PRIORITY_MAP = {
  Low: 'secondary', Medium: 'info', High: 'warning', Urgent: 'destructive',
};

const TICKETS = [
  ['WF-1247', 'Problema na matrícula de Cálculo I', 'Open',        ['MS', 'Mariana Santos'], 'Urgent', '2m ago'],
  ['WF-1246', 'Nota ausente em Álgebra Linear',     'In progress', ['PL', 'Pedro Lima'],     'High',   '12m ago'],
  ['WF-1245', 'Erro ao gerar boleto da mensalidade','Open',        ['CA', 'Camila Alves'],   'High',   '34m ago'],
  ['WF-1244', 'Solicitação de histórico escolar',   'Resolved',    ['RC', 'Rafael Costa'],   'Medium', '1h ago'],
  ['WF-1243', 'Reset de senha do portal',           'Pending',     ['JO', 'Juliana Oliveira'], 'Low',  '2h ago'],
  ['WF-1242', 'Declaração de vínculo acadêmico',    'Resolved',    ['BS', 'Bruno Souza'],    'Medium', '3h ago'],
  ['WF-1241', 'Troca de curso de graduação',        'In progress', ['MS', 'Mariana Santos'], 'High',   '5h ago'],
  ['WF-1240', 'Acesso ao Moodle bloqueado',         'Closed',      ['PL', 'Pedro Lima'],     'Low',    '1d ago'],
];

const Org5_DataTable = () => (
  <OrgSection num={5} id="org-datatable" name="DataTable"
    desc="Heavy-duty table with sorting, filtering, selection, pagination, and row actions. The backbone of admin list views.">
    <OrgHero bleed>
      <div className="dtbl" style={{ width: '100%' }}>
        <div className="dtbl-toolbar">
          <div className="srch" style={{ maxWidth: 280 }}>
            <span className="srch-lead"><Icon name="search" size={14} stroke={1.75} /></span>
            <input className="srch-input" placeholder="Search tickets…" />
          </div>
          <button className="sel-trigger" style={{ minWidth: 140 }}>Status: All <Icon name="chevron-down" size={14} stroke={1.75} /></button>
          <button className="sel-trigger" style={{ minWidth: 160 }}>Assignee: Anyone <Icon name="chevron-down" size={14} stroke={1.75} /></button>
          <div className="dtbl-spacer" />
          <button className="btn btn-outline btn-sm"><Icon name="sliders" size={14} stroke={1.75} /> View</button>
          <button className="btn btn-default btn-sm"><Icon name="plus" size={14} stroke={2} /> Create ticket</button>
        </div>
        <table className="dtbl-table">
          <thead>
            <tr>
              <th style={{ width: 36 }}><input type="checkbox" className="ctrl ctrl-checkbox" /></th>
              <th style={{ width: 100 }} className="is-sort">ID <span className="sort-icon"><Icon name="chevron-down" size={12} stroke={2} /></span></th>
              <th>Subject</th>
              <th style={{ width: 130 }}>Status</th>
              <th style={{ width: 170 }}>Assignee</th>
              <th style={{ width: 110 }}>Priority</th>
              <th style={{ width: 100 }}>Updated</th>
              <th style={{ width: 40 }}></th>
            </tr>
          </thead>
          <tbody>
            {TICKETS.map((t, i) => (
              <tr key={t[0]} className={i === 1 ? 'is-selected' : ''}>
                <td><input type="checkbox" className="ctrl ctrl-checkbox" defaultChecked={i === 1} /></td>
                <td><span className="mono" style={{ fontSize: 12 }}>{t[0]}</span></td>
                <td style={{ fontWeight: 500 }}>{t[1]}</td>
                <td><span className={`bdg bdg-${STATUS_MAP[t[2]].variant}`}>{STATUS_MAP[t[2]].label}</span></td>
                <td>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <span className="avatar avatar-xs"><span className="avatar-fallback">{t[3][0]}</span></span>
                    <span style={{ fontSize: 12.5 }}>{t[3][1]}</span>
                  </span>
                </td>
                <td><span className={`bdg bdg-${PRIORITY_MAP[t[4]]}`}>{t[4]}</span></td>
                <td style={{ color: 'var(--muted-foreground)', fontSize: 12 }}>{t[5]}</td>
                <td><button className="icon-btn dtbl-row-actions" style={{ width: 26, height: 26 }}><Icon name="more-horizontal" size={14} stroke={1.75} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="dtbl-footer">
          <div>Showing 1-8 of 142</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {[1,2,3,'…',18].map((n, i) => (
              <button key={i} className={`pag-item ${n === 1 ? 'is-active' : ''} ${n === '…' ? 'is-dots' : ''}`} style={{ minWidth: 28, height: 28 }}>{n}</button>
            ))}
          </div>
        </div>
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy
        formula="DataTable = Toolbar (SearchInput + Selects + Buttons) + Table (sortable headers + checkbox col + data + actions) + Pagination + (Empty | Loading)"
        parts={[
          { label: 'Toolbar', required: true },
          { label: 'Table', required: true },
          { label: 'Pagination' },
          { label: 'Bulk bar', role: 'when rows selected' },
          { label: 'EmptyState' }, { label: 'Skeleton', role: 'loading' },
        ]}
      />
    </Subsection>

    <Subsection title="States">
      <Grid cols={2}>
        <SampleCard label="rows selected · bulk bar">
          <div className="dtbl" style={{ width: '100%' }}>
            <div className="dtbl-bulk"><Icon name="check-circle-2" size={14} stroke={1.75} /> <b>3 tickets selected</b> <div style={{ flex: 1 }} /> <button className="btn btn-outline btn-sm">Assign</button> <button className="btn btn-outline btn-sm">Close</button></div>
            <div style={{ padding: 20, fontSize: 12, color: 'var(--muted-foreground)' }}>table rows…</div>
          </div>
        </SampleCard>
        <SampleCard label="empty">
          <div className="dtbl" style={{ width: '100%' }}>
            <div className="dtbl-toolbar"><div className="srch" style={{ maxWidth: 240 }}><span className="srch-lead"><Icon name="search" size={14} stroke={1.75} /></span><input className="srch-input" placeholder="Search…" /></div></div>
            <div className="empty" style={{ border: 0, background: 'transparent' }}>
              <div className="empty-icon"><Icon name="inbox" size={24} stroke={1.5} /></div>
              <div className="empty-title">No tickets yet</div>
              <div className="empty-desc">Connect a channel to start receiving tickets.</div>
            </div>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Persist sort/filter/page state in the URL so links are shareable.', 'Use Badge atoms for status and priority columns for scannability.', 'Show 10–25 rows per page. More than 50 and users zone out.']}
        dont={["Don't use DataTable for simple lists — a plain list or card grid often reads better.", "Don't expose every column by default — hide rarely-used ones behind the View menu."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['columns', 'ColumnDef[]', '—', 'TanStack column definitions.'],
        ['data', 'T[]', '[]', 'Row data.'],
        ['enableRowSelection', 'boolean', 'false', 'Show the checkbox column.'],
        ['enableSorting', 'boolean', 'true', 'Sortable columns.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { DataTable } ', K('from'), ' ', S('"@/components/ui/data-table"'), ';']]} />
    </Subsection>
  </OrgSection>
);

// ============================================================
// Organism 6 — Calendar
// ============================================================

const CalGrid = ({ selected = 15, today = 24, rangeStart, rangeEnd, monthLabel = 'April 2026' }) => {
  // April 2026 starts Wednesday (apr 1 is wed)
  const cells = [];
  for (let i = 29; i <= 31; i++) cells.push({ d: i, muted: true });
  for (let i = 1; i <= 30; i++) cells.push({ d: i });
  while (cells.length < 42) cells.push({ d: cells.length - 32, muted: true });
  return (
    <div className="cal">
      <div className="cal-header">
        <span>{monthLabel}</span>
        <div className="cal-nav"><button className="cal-nav-btn"><Icon name="chevron-left" size={14} stroke={1.75} /></button><button className="cal-nav-btn"><Icon name="chevron-right" size={14} stroke={1.75} /></button></div>
      </div>
      <div className="cal-grid">
        {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="cal-dow">{d}</div>)}
        {cells.map((c, i) => {
          const cls = ['cal-day'];
          if (c.muted) cls.push('is-muted');
          if (!c.muted && c.d === today) cls.push('is-today');
          if (!c.muted && c.d === selected) cls.push('is-selected');
          if (!c.muted && rangeStart && rangeEnd) {
            if (c.d === rangeStart) cls.push('is-range-start');
            else if (c.d === rangeEnd) cls.push('is-range-end');
            else if (c.d > rangeStart && c.d < rangeEnd) cls.push('is-in-range');
          }
          return <div key={i} className={cls.join(' ')}>{c.d}</div>;
        })}
      </div>
    </div>
  );
};

const Org6_Calendar = () => (
  <OrgSection num={6} id="org-calendar" name="Calendar"
    desc="Month-grid calendar for date browsing and selection. Used standalone or inside the DatePicker molecule.">
    <OrgHero>
      <CalGrid selected={15} today={24} monthLabel="April 2026" />
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy formula="Calendar = MonthNav + WeekdayHeader + DayGrid + (Today button)"
        parts={[{ label: 'MonthNav', required: true }, { label: 'WeekdayHeader' }, { label: 'DayGrid', required: true }, { label: 'Day', role: 'cell' }]} />
    </Subsection>

    <Subsection title="Variants">
      <Grid cols={2}>
        <SampleCard label="single-month"><CalGrid selected={15} today={24} /></SampleCard>
        <SampleCard label="two-month (range)">
          <div style={{ display: 'flex', gap: 12 }}>
            <CalGrid selected={-1} today={24} rangeStart={12} rangeEnd={30} monthLabel="Apr 2026" />
            <CalGrid selected={-1} today={-1} rangeStart={1} rangeEnd={8} monthLabel="May 2026" />
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Use two-month layout for date range selection — users compare months visually.', "Highlight today with an outlined border (not a fill) so it doesn't compete with selection."]}
        dont={["Don't use for dense event calendars — use a dedicated calendar view instead.", "Don't mix selection modes (single + multiple) in the same Calendar instance."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['mode', '"single" | "range" | "multiple"', '"single"', 'Selection mode.'],
        ['numberOfMonths', 'number', '1', 'Months to render side-by-side.'],
        ['disabled', '(date) => boolean', '—', 'Disable days.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { Calendar } ', K('from'), ' ', S('"@/components/ui/calendar"'), ';']]} />
    </Subsection>
  </OrgSection>
);

// ============================================================
// Organism 7 — Carousel
// ============================================================

const Org7_Carousel = () => (
  <OrgSection num={7} id="org-carousel" name="Carousel"
    desc="Horizontally or vertically scrollable set of slides. Use sparingly — common in onboarding, testimonials, galleries; rare in admin.">
    <OrgHero>
      <div className="carousel" style={{ width: 640, height: 320 }}>
        <div className="carousel-slide">
          <Icon name="sparkles" size={40} stroke={1.5} />
          <h4>AI-powered triage</h4>
          <p>Tickets route themselves to the right team in under 6 seconds.</p>
        </div>
        <button className="carousel-arrow is-prev"><Icon name="chevron-left" size={16} stroke={2} /></button>
        <button className="carousel-arrow is-next"><Icon name="chevron-right" size={16} stroke={2} /></button>
        <div className="carousel-dots"><span className="d" /><span className="d is-active" /><span className="d" /></div>
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy formula="Carousel = Viewport (Slide[]) + (Arrows | Dots)"
        parts={[{ label: 'Viewport', required: true }, { label: 'Slide', required: true }, { label: 'Arrows' }, { label: 'Dots' }]} />
    </Subsection>

    <Subsection title="States">
      <Grid cols={3}>
        <SampleCard label="first (prev disabled)"><div className="carousel" style={{ width: '100%', height: 120 }}><div className="carousel-slide" style={{ padding: 16, fontSize: 12 }}>Slide 1/3</div><button className="carousel-arrow is-prev" disabled><Icon name="chevron-left" size={14} /></button><button className="carousel-arrow is-next"><Icon name="chevron-right" size={14} /></button></div></SampleCard>
        <SampleCard label="middle"><div className="carousel" style={{ width: '100%', height: 120 }}><div className="carousel-slide" style={{ padding: 16, fontSize: 12 }}>Slide 2/3</div><button className="carousel-arrow is-prev"><Icon name="chevron-left" size={14} /></button><button className="carousel-arrow is-next"><Icon name="chevron-right" size={14} /></button></div></SampleCard>
        <SampleCard label="last (next disabled)"><div className="carousel" style={{ width: '100%', height: 120 }}><div className="carousel-slide" style={{ padding: 16, fontSize: 12 }}>Slide 3/3</div><button className="carousel-arrow is-prev"><Icon name="chevron-left" size={14} /></button><button className="carousel-arrow is-next" disabled><Icon name="chevron-right" size={14} /></button></div></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Use for onboarding, feature tours, testimonials, or image galleries.', 'Always provide both arrows and dots — different users prefer different controls.', 'Pair with clear progress indication ("2 of 3").']}
        dont={["Don't use Carousel for primary content — users skip what they have to scroll.", "Don't auto-advance; it fights with reading."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['orientation', '"horizontal" | "vertical"', '"horizontal"', 'Scroll axis.'],
        ['opts', 'EmblaOptions', '—', 'Underlying Embla config.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } ', K('from'), ' ', S('"@/components/ui/carousel"'), ';']]} />
    </Subsection>
  </OrgSection>
);

// ============================================================
// Organism 8 — Chart
// ============================================================

const ChartBars = () => {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const opened  = [52,64,71,82,78,85,92,88,74,68,60,55];
  const resolved= [48,58,66,74,71,79,85,82,70,64,56,50];
  const max = 120;
  return (
    <div style={{ position: 'relative', height: 220, padding: '16px 12px 28px 36px' }}>
      {/* y-axis lines */}
      {[0, 40, 80, 120].map(v => (
        <div key={v} style={{ position: 'absolute', left: 36, right: 12, bottom: 28 + (v / max) * 176, borderBottom: '1px dashed var(--border)', height: 0 }}>
          <span style={{ position: 'absolute', left: -30, top: -8, fontSize: 10, color: 'var(--muted-foreground)' }}>{v}</span>
        </div>
      ))}
      {/* bars */}
      <div style={{ position: 'absolute', inset: '16px 12px 28px 36px', display: 'flex', alignItems: 'flex-end', gap: 8 }}>
        {months.map((m, i) => (
          <div key={m} style={{ flex: 1, display: 'flex', gap: 3, alignItems: 'flex-end', position: 'relative' }}>
            <div style={{ flex: 1, height: (opened[i] / max) * 176, background: '#2563eb', borderRadius: '2px 2px 0 0', position: 'relative' }}>
              {i === 4 && (
                <div style={{ position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)', background: 'var(--popover)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 10px', boxShadow: '0 4px 12px rgb(0 0 0 / 0.12)', fontSize: 11, whiteSpace: 'nowrap', zIndex: 2 }}>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>May 2026</div>
                  <div><span style={{ color: '#2563eb' }}>●</span> Opened: 78</div>
                  <div><span style={{ color: '#14a34a' }}>●</span> Resolved: 71</div>
                </div>
              )}
            </div>
            <div style={{ flex: 1, height: (resolved[i] / max) * 176, background: '#14a34a', borderRadius: '2px 2px 0 0' }} />
          </div>
        ))}
      </div>
      {/* x-axis labels */}
      <div style={{ position: 'absolute', left: 36, right: 12, bottom: 8, display: 'flex', gap: 8 }}>
        {months.map(m => <div key={m} style={{ flex: 1, fontSize: 10, color: 'var(--muted-foreground)', textAlign: 'center' }}>{m}</div>)}
      </div>
    </div>
  );
};

const Org8_Chart = () => (
  <OrgSection num={8} id="org-chart" name="Chart"
    desc="Data viz primitive. Bar, line, area, pie, donut, horizontal-bar. Uses Foundations color tokens so themes swap automatically.">
    <OrgHero>
      <div className="chart-wrap" style={{ width: '100%', maxWidth: 720 }}>
        <div className="chart-title">Ticket volume by month</div>
        <div className="chart-sub">Opened vs. resolved · 2026 YTD</div>
        <ChartBars />
        <div className="chart-legend"><span><span className="sw" style={{ background: '#2563eb' }} />Opened</span><span><span className="sw" style={{ background: '#14a34a' }} />Resolved</span></div>
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy formula="Chart = Container + Axes + Series[] + Tooltip + Legend"
        parts={[{ label: 'Container' }, { label: 'Axes' }, { label: 'Series', required: true }, { label: 'Tooltip' }, { label: 'Legend' }]} />
    </Subsection>

    <Subsection title="Types">
      <Grid cols={3}>
        {[['bar', 'bar-chart-3'], ['line', 'line-chart'], ['area', 'area-chart'], ['pie', 'pie-chart'], ['donut', 'circle-dot'], ['h-bar', 'bar-chart-horizontal']].map(([name, ic]) => (
          <SampleCard key={name} label={name}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 80, color: 'var(--primary)' }}>
              <Icon name={ic} size={40} stroke={1.25} />
            </div>
          </SampleCard>
        ))}
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Use Foundations status colors for series — primary, success, warning, destructive.', 'Default to bar for categoricals, line/area for time series.', 'Show a tooltip on hover with the full value and a legend below the chart.']}
        dont={["Don't use pie/donut for >5 slices — use bar instead.", "Don't hardcode hex colors — use token variables so dark mode works."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['type', '"bar" | "line" | "area" | "pie" | "donut"', '—', 'Chart kind.'],
        ['data', 'Datum[]', '[]', 'Series data.'],
        ['config', 'ChartConfig', '—', 'Series colors + labels keyed by name.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { ChartContainer, ChartTooltip, ChartLegend } ', K('from'), ' ', S('"@/components/ui/chart"'), ';']]} />
    </Subsection>
  </OrgSection>
);

Object.assign(window, { Org5_DataTable, Org6_Calendar, Org7_Carousel, Org8_Chart });
