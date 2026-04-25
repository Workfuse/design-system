/* global React, Icon, AtomSection, MolSection, MolHero, Anatomy, UsageRow, UsageCard, Subsection, SampleCard, Grid, PropsTable, CodeBlock, K, S, T, C */
/* eslint-disable no-unused-vars */

// ============================================================
// Molecule 1 — Alert
// ============================================================

const Alert = ({ variant = 'default', title, desc, icon = 'info', dismissible, action, hover }) => {
  const cls = `alert ${variant !== 'default' ? `alert-${variant}` : ''}`;
  return (
    <div className={cls}>
      <div className="alert-icon"><Icon name={icon} size={16} stroke={1.75} /></div>
      <div className="alert-body">
        {title && <div className="alert-title">{title}</div>}
        {desc && <div className="alert-desc">{desc}</div>}
      </div>
      {action}
      {dismissible && (
        <button className="alert-close" aria-label="Dismiss">
          <Icon name="x" size={14} stroke={2} />
        </button>
      )}
    </div>
  );
};

const Mol1_Alert = () => (
  <MolSection
    num={1} id="mol-alert" name="Alert"
    desc="Calls attention to important info inline within the page flow. Not modal."
  >
    <MolHero>
      <div style={{ width: '100%', maxWidth: 520 }}>
        <Alert icon="info" title="You have 3 pending invites" desc="Accept or decline them from your inbox." />
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="Alert = Icon + Title + Description (+ Close | Action)"
        parts={[
          { label: 'Icon', role: 'lucide', required: true },
          { label: 'Title', role: 'required', required: true },
          { label: 'Description', role: 'optional' },
          { label: 'Close', role: 'optional' },
          { label: 'Action', role: 'optional' },
        ]}
      />
    </Subsection>

    <Subsection title="Variants">
      <Grid cols={2}>
        <SampleCard label="default"><div style={{ width: '100%' }}><Alert title="Heads up" desc="You can update your preferences any time." /></div></SampleCard>
        <SampleCard label="destructive"><div style={{ width: '100%' }}><Alert variant="destructive" icon="alert-triangle" title="Sync failed" desc="Reconnect your account to resume." /></div></SampleCard>
        <SampleCard label="info"><div style={{ width: '100%' }}><Alert variant="info" icon="info" title="New feature available" desc="AI correction v2 is now in beta." /></div></SampleCard>
        <SampleCard label="success"><div style={{ width: '100%' }}><Alert variant="success" icon="check-circle-2" title="Saved" desc="Your changes were published." /></div></SampleCard>
        <SampleCard label="warning"><div style={{ width: '100%' }}><Alert variant="warning" icon="alert-circle" title="Quota nearing limit" desc="You've used 83% of your monthly credits." /></div></SampleCard>
        <SampleCard label="dismissible"><div style={{ width: '100%' }}><Alert icon="info" title="Reminder" desc="Review your onboarding checklist." dismissible /></div></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Usage examples">
      <UsageRow cols={2}>
        <UsageCard label="with action">
          <Alert
            variant="destructive" icon="wifi-off"
            title="Connection lost"
            desc="We couldn't save your recent changes."
            action={<button className="btn btn-destructive btn-sm">Retry</button>}
          />
        </UsageCard>
        <UsageCard label="success + dismissible">
          <Alert
            variant="success" icon="check-circle-2"
            title="Ticket resolved"
            desc="WF-1234 has been marked as resolved. The student was notified."
            dismissible
          />
        </UsageCard>
      </UsageRow>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['variant', '"default" | "destructive" | "info" | "success" | "warning"', '"default"', 'Visual style and tonal accent.'],
        ['title', 'string', '—', 'Headline.'],
        ['description', 'ReactNode', '—', 'Body copy.'],
        ['icon', 'string (lucide)', '"info"', 'Leading icon.'],
        ['dismissible', 'boolean', 'false', 'Shows a close button on hover.'],
        ['action', 'ReactNode', '—', 'Trailing action element (e.g. button).'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Alert, AlertTitle, AlertDescription } ', K('from'), ' ', S('"@/components/ui/alert"'), ';'],
        [K('import'), ' { Info } ', K('from'), ' ', S('"lucide-react"'), ';'],
        [''],
        ['<', T('Alert'), '>'],
        ['  <', T('Info'), ' className=', S('"size-4"'), ' />'],
        ['  <', T('AlertTitle'), '>You have 3 pending invites</', T('AlertTitle'), '>'],
        ['  <', T('AlertDescription'), '>Accept or decline them from your inbox.</', T('AlertDescription'), '>'],
        ['</', T('Alert'), '>'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 2 — AlertDialog
// ============================================================

const AlertDialog = ({ variant = 'default', title, desc, cancelLabel = 'Cancel', confirmLabel = 'Continue' }) => (
  <div className="dialog-stage">
    <div className="dialog-overlay" />
    <div className="dialog-card">
      <div className="dialog-title">{title}</div>
      <div className="dialog-desc">{desc}</div>
      <div className="dialog-actions">
        <button className="btn btn-outline btn-sm">{cancelLabel}</button>
        <button className={`btn btn-sm ${variant === 'destructive' ? 'btn-destructive' : 'btn-default'}`}>{confirmLabel}</button>
      </div>
    </div>
  </div>
);

const Mol2_AlertDialog = () => (
  <MolSection
    num={2} id="mol-alertdialog" name="AlertDialog"
    desc="Modal for critical confirmations. Blocks the page until the user chooses. Use only when an action is dangerous or irreversible."
  >
    <MolHero>
      <div style={{ width: '100%', maxWidth: 520 }}>
        <AlertDialog
          variant="destructive"
          title="Delete this ticket?"
          desc="This action cannot be undone. All replies and attachments will be lost."
          confirmLabel="Delete ticket"
        />
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="AlertDialog = Overlay + Card + (Title + Description + Cancel + Confirm)"
        parts={[
          { label: 'Overlay', role: 'backdrop', required: true },
          { label: 'Card', role: 'Dialog container', required: true },
          { label: 'Title', required: true },
          { label: 'Description', role: 'optional' },
          { label: 'Cancel', role: 'Button (outline)', required: true },
          { label: 'Confirm', role: 'Button (primary|destructive)', required: true },
        ]}
      />
    </Subsection>

    <Subsection title="Variants">
      <Grid cols={2}>
        <SampleCard label="default (neutral)">
          <div style={{ width: '100%' }}>
            <AlertDialog
              title="Publish changes?"
              desc="Your edits will be visible to all students immediately."
              confirmLabel="Publish"
            />
          </div>
        </SampleCard>
        <SampleCard label="destructive">
          <div style={{ width: '100%' }}>
            <AlertDialog
              variant="destructive"
              title="Remove collaborator?"
              desc="They will lose access to all 14 shared projects."
              confirmLabel="Remove"
            />
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['open', 'boolean', 'false', 'Controlled visibility.'],
        ['title', 'string', '—', 'Dialog headline.'],
        ['description', 'ReactNode', '—', 'Supporting copy explaining consequences.'],
        ['onConfirm', '() => void', '—', 'Handler for confirm action.'],
        ['onCancel', '() => void', '—', 'Handler for cancel / backdrop click.'],
        ['destructive', 'boolean', 'false', 'Styles confirm button as destructive.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' {'],
        ['  ', T('AlertDialog'), ', ', T('AlertDialogAction'), ', ', T('AlertDialogCancel'), ','],
        ['  ', T('AlertDialogContent'), ', ', T('AlertDialogDescription'), ', ', T('AlertDialogFooter'), ','],
        ['  ', T('AlertDialogHeader'), ', ', T('AlertDialogTitle'), ', ', T('AlertDialogTrigger'), ','],
        ['} ', K('from'), ' ', S('"@/components/ui/alert-dialog"'), ';'],
        [''],
        ['<', T('AlertDialog'), '>'],
        ['  <', T('AlertDialogTrigger'), ' asChild><', T('Button'), ' variant=', S('"destructive"'), '>Delete</', T('Button'), '></', T('AlertDialogTrigger'), '>'],
        ['  <', T('AlertDialogContent'), '>…</', T('AlertDialogContent'), '>'],
        ['</', T('AlertDialog'), '>'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 3 — Card
// ============================================================

const DSCard = ({ elevated, title, desc, children, footer, className = '' }) => (
  <div className={`ds-card ${elevated ? 'is-elevated' : ''} ${className}`}>
    {(title || desc) && (
      <div>
        {title && <div className="ds-card-title">{title}</div>}
        {desc && <div className="ds-card-desc">{desc}</div>}
      </div>
    )}
    {children && <div className="ds-card-content">{children}</div>}
    {footer && <div className="ds-card-footer">{footer}</div>}
  </div>
);

const Mol3_Card = () => (
  <MolSection
    num={3} id="mol-card" name="Card"
    desc="Container for grouped, related content. Uses surface tonal shift for separation — no decorative shadows by default."
  >
    <MolHero>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <DSCard
          title="AI correction v2"
          desc="Ships next Tuesday"
          footer={<a className="text-[13px]" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Read the release notes →</a>}
        >
          Students receive structured, criterion-level feedback in under 6 seconds — 3× faster than v1 with better Portuguese coverage.
        </DSCard>
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="Card = CardHeader (Title + Description) + CardContent + CardFooter"
        parts={[
          { label: 'CardHeader' },
          { label: 'CardTitle', required: true },
          { label: 'CardDescription' },
          { label: 'CardContent' },
          { label: 'CardFooter', role: 'action row' },
        ]}
      />
    </Subsection>

    <Subsection title="Variants">
      <Grid cols={2}>
        <SampleCard label="flat (default)">
          <div style={{ width: '100%' }}>
            <DSCard title="Flat card" desc="1px border, no shadow">
              Use as default. Separation comes from tonal contrast on the canvas.
            </DSCard>
          </div>
        </SampleCard>
        <SampleCard label="elevated">
          <div style={{ width: '100%' }}>
            <DSCard elevated title="Elevated card" desc="shadow-sm">
              Use only when a Card floats above a busy background — modals, drag previews.
            </DSCard>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Usage examples">
      <UsageRow cols={3}>
        <UsageCard label="content card">
          <DSCard
            title="Release digest"
            desc="Week of Apr 22"
            footer={<a className="text-[13px]" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Read more →</a>}
          >
            Four updates shipped, including the first pass at inline AI revisions.
          </DSCard>
        </UsageCard>
        <UsageCard label="metric card">
          <div className="ds-card">
            <div className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground mb-2">Active tickets</div>
            <div className="text-[32px] font-bold tracking-[-0.02em] text-foreground leading-none">128</div>
            <div className="text-[12px] mt-2" style={{ color: 'var(--success)' }}>+12% vs last week</div>
          </div>
        </UsageCard>
        <UsageCard label="action card">
          <DSCard
            title="Finish setup"
            desc="2 of 4 steps complete"
            footer={<button className="btn btn-default btn-sm">Continue</button>}
          />
        </UsageCard>
      </UsageRow>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['elevated', 'boolean', 'false', 'Adds shadow-sm for cards that float.'],
        ['className', 'string', '—', 'Passes through for layout tweaks.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } ', K('from'), ' ', S('"@/components/ui/card"'), ';'],
        [''],
        ['<', T('Card'), '>'],
        ['  <', T('CardHeader'), '>'],
        ['    <', T('CardTitle'), '>AI correction v2</', T('CardTitle'), '>'],
        ['    <', T('CardDescription'), '>Ships next Tuesday</', T('CardDescription'), '>'],
        ['  </', T('CardHeader'), '>'],
        ['  <', T('CardContent'), '>…</', T('CardContent'), '>'],
        ['  <', T('CardFooter'), '>…</', T('CardFooter'), '>'],
        ['</', T('Card'), '>'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 4 — Tooltip
// ============================================================

const Tooltip = ({ position = 'top', label, children }) => (
  <div className="tt-wrap">
    {children}
    <span className={`tt ${position}`}>{label}</span>
  </div>
);

const Mol4_Tooltip = () => (
  <MolSection
    num={4} id="mol-tooltip" name="Tooltip"
    desc="Brief text label revealed on hover/focus of a trigger element. Use only for clarification, never for critical info."
  >
    <MolHero>
      <Tooltip label="This info helps you understand the rubric." position="top">
        <button className="btn btn-ghost btn-sm">
          <Icon name="info" size={14} stroke={2} />
          What is this?
        </button>
      </Tooltip>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="Tooltip = Trigger + Content (floating, with arrow)"
        parts={[
          { label: 'Trigger', role: 'any focusable element', required: true },
          { label: 'Content', role: 'short label', required: true },
          { label: 'Arrow', role: 'points at trigger' },
        ]}
      />
    </Subsection>

    <Subsection title="Positions">
      <Grid cols={4}>
        <SampleCard label="top" className="py-10">
          <Tooltip label="Top tooltip" position="top"><button className="btn btn-outline btn-sm">Trigger</button></Tooltip>
        </SampleCard>
        <SampleCard label="right" className="py-10">
          <Tooltip label="Right tooltip" position="right"><button className="btn btn-outline btn-sm">Trigger</button></Tooltip>
        </SampleCard>
        <SampleCard label="bottom" className="py-10">
          <Tooltip label="Bottom tooltip" position="bottom"><button className="btn btn-outline btn-sm">Trigger</button></Tooltip>
        </SampleCard>
        <SampleCard label="left" className="py-10">
          <Tooltip label="Left tooltip" position="left"><button className="btn btn-outline btn-sm">Trigger</button></Tooltip>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['side', '"top" | "right" | "bottom" | "left"', '"top"', 'Preferred side of trigger.'],
        ['align', '"start" | "center" | "end"', '"center"', 'Alignment relative to trigger.'],
        ['delayDuration', 'number (ms)', '700', 'Delay before showing.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { Tooltip, TooltipContent, TooltipTrigger } ', K('from'), ' ', S('"@/components/ui/tooltip"'), ';'],
        [''],
        ['<', T('Tooltip'), '>'],
        ['  <', T('TooltipTrigger'), ' asChild><', T('Button'), ' variant=', S('"ghost"'), '>Help</', T('Button'), '></', T('TooltipTrigger'), '>'],
        ['  <', T('TooltipContent'), '>Short clarification text.</', T('TooltipContent'), '>'],
        ['</', T('Tooltip'), '>'],
      ]} />
    </Subsection>
  </MolSection>
);

// ============================================================
// Molecule 5 — HoverCard
// ============================================================

const HoverCard = ({ position = 'bottom' }) => (
  <div className="hc-wrap" style={{ display: 'inline-block' }}>
    <a style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 500, cursor: 'pointer' }}>@yanps</a>
    <div className={`hc ${position}`} style={{ marginTop: position === 'bottom' ? 8 : undefined }}>
      <div className="flex items-center gap-3 mb-3">
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'oklch(0.546 0.245 262.881)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600 }}>YP</div>
        <div>
          <div className="text-[14px] font-semibold text-foreground leading-tight">Yan Pessoa</div>
          <div className="text-[12px] text-muted-foreground">Design Systems</div>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-[12px]" style={{ color: 'var(--muted-foreground)' }}>
        <div className="flex items-center gap-2"><Icon name="calendar" size={12} stroke={1.75} /> Joined Mar 2025</div>
        <div className="flex items-center gap-2"><Icon name="circle-dot" size={12} stroke={1.75} /> 142 issues</div>
        <div className="flex items-center gap-2"><Icon name="folder-git-2" size={12} stroke={1.75} /> 8 repos</div>
      </div>
    </div>
  </div>
);

const Mol5_HoverCard = () => (
  <MolSection
    num={5} id="mol-hovercard" name="HoverCard"
    desc="Richer preview revealed on hover. Use for user profiles, link previews, definitions — when a plain Tooltip isn't enough."
  >
    <MolHero>
      <div style={{ paddingTop: 0, paddingBottom: 140 }}>
        <HoverCard position="bottom" />
      </div>
    </MolHero>

    <Subsection title="Anatomy">
      <Anatomy
        formula="HoverCard = Trigger (link) + Content (Avatar + Name + Meta rows)"
        parts={[
          { label: 'Trigger', role: '@mention / link', required: true },
          { label: 'Content', role: '280-320px card', required: true },
          { label: 'Avatar', role: 'atom' },
          { label: 'Name + role' },
          { label: 'Meta rows', role: 'stats' },
        ]}
      />
    </Subsection>

    <Subsection title="Positions">
      <Grid cols={2}>
        <SampleCard label="bottom (default)" className="py-16"><HoverCard position="bottom" /></SampleCard>
        <SampleCard label="top" className="py-16"><HoverCard position="top" /></SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['openDelay', 'number (ms)', '700', 'Delay before opening.'],
        ['closeDelay', 'number (ms)', '300', 'Delay before closing.'],
        ['side', '"top" | "bottom"', '"bottom"', 'Preferred side.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[
        [K('import'), ' { HoverCard, HoverCardContent, HoverCardTrigger } ', K('from'), ' ', S('"@/components/ui/hover-card"'), ';'],
        [''],
        ['<', T('HoverCard'), '>'],
        ['  <', T('HoverCardTrigger'), ' asChild><a>@yanps</a></', T('HoverCardTrigger'), '>'],
        ['  <', T('HoverCardContent'), ' className=', S('"w-80"'), '>…</', T('HoverCardContent'), '>'],
        ['</', T('HoverCard'), '>'],
      ]} />
    </Subsection>
  </MolSection>
);

Object.assign(window, { Mol1_Alert, Mol2_AlertDialog, Mol3_Card, Mol4_Tooltip, Mol5_HoverCard });
