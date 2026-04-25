/* global React, Icon, OrgSection, OrgHero, CompositionRules, OrgAnatomy, Subsection, SampleCard, Grid, PropsTable, CodeBlock, K, S, T, C */
/* eslint-disable no-unused-vars */

// ============================================================
// Organism 9 — CommandPalette
// ============================================================

const Org9_CommandPalette = () => (
  <OrgSection num={9} id="org-commandpalette" name="CommandPalette"
    desc="Fullscreen quick-action launcher, typically triggered via ⌘K. Groups of commands (Recent, Navigate, Actions) with keyboard navigation.">
    <OrgHero bleed>
      <div className="stage" style={{ width: '100%', height: 480, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 80 }}>
        <div className="stage-overlay" />
        <div style={{ position: 'relative', zIndex: 1, width: 600, maxWidth: '92%' }}>
          <div className="cmd" style={{ width: '100%', boxShadow: '0 16px 48px rgb(0 0 0 / 0.24)' }}>
            <div className="cmd-input-wrap">
              <Icon name="search" size={15} stroke={1.75} />
              <input className="cmd-input" defaultValue="cre" placeholder="Type a command or search…" />
              <span className="kbd">esc</span>
            </div>
            <div className="cmd-list">
              <div className="cmd-group-label">Recent</div>
              <div className="cmd-item"><Icon name="clock" size={14} stroke={1.75} /> Create ticket <span className="mono" style={{ color: 'var(--muted-foreground)', fontSize: 11 }}>WF-1247</span></div>
              <div className="cmd-group-label" style={{ marginTop: 6 }}>Commands</div>
              <div className="cmd-item is-hover"><Icon name="plus" size={14} stroke={1.75} /> <mark>Cre</mark>ate new ticket <span className="cmd-shortcut">⌘N</span></div>
              <div className="cmd-item"><Icon name="user-plus" size={14} stroke={1.75} /> <mark>Cre</mark>ate student account</div>
              <div className="cmd-item"><Icon name="file-plus" size={14} stroke={1.75} /> <mark>Cre</mark>ate report</div>
            </div>
            <div style={{ padding: '8px 12px', borderTop: '1px solid var(--border)', fontSize: 11, color: 'var(--muted-foreground)', display: 'flex', gap: 16 }}>
              <span><span className="kbd" style={{ fontSize: 10 }}>↑↓</span> navigate</span>
              <span><span className="kbd" style={{ fontSize: 10 }}>↵</span> select</span>
              <span><span className="kbd" style={{ fontSize: 10 }}>esc</span> close</span>
            </div>
          </div>
        </div>
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy formula="CommandPalette = Dialog overlay + Command (molecule) + KeyboardHints footer"
        parts={[{ label: 'Overlay', required: true }, { label: 'Command', role: 'molecule', required: true }, { label: 'Keyboard hints' }]} />
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Bind to ⌘K globally and register it in the app shell.', 'Group commands semantically — Recent, Navigate, Actions, Settings.', 'Show keyboard hints for ↑↓, ↵, esc in the footer.']}
        dont={["Don't stuff every action into the palette — keep to ~20 top commands.", "Don't auto-open on page load — it's always user-triggered."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['open', 'boolean', 'false', 'Controlled open state.'],
        ['onOpenChange', '(open: boolean) => void', '—', 'Change handler.'],
        ['shortcut', 'string', '"⌘K"', 'Global hotkey.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { CommandDialog } ', K('from'), ' ', S('"@/components/ui/command"'), ';']]} />
    </Subsection>
  </OrgSection>
);

// ============================================================
// Organism 10 — ResizablePanels
// ============================================================

const Org10_Resizable = () => (
  <OrgSection num={10} id="org-resizablepanels" name="ResizablePanels"
    desc="Split pane layout with drag-to-resize handles. Use in 2- or 3-column UIs where users may want to prioritize one pane.">
    <OrgHero>
      <div className="rsz" style={{ width: '100%', maxWidth: 800, height: 400 }}>
        <div className="rsz-pane" style={{ width: '30%', background: 'var(--muted)' }}>
          <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.04, color: 'var(--muted-foreground)', marginBottom: 10 }}>Files (6)</div>
          {['historico-academico.pdf','declaracao-vinculo.pdf','boleto-0425.pdf','atestado-matricula.pdf','comprovante-nota.pdf','contrato-bolsa.pdf'].map((f, i) => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px', borderRadius: 6, fontSize: 12.5, background: i === 0 ? 'var(--accent)' : 'transparent' }}>
              <Icon name="file" size={14} stroke={1.75} /><span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f}</span>
            </div>
          ))}
        </div>
        <div className="rsz-handle" />
        <div className="rsz-pane" style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>historico-academico.pdf</div>
          <div style={{ fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 16 }}>Mariana Santos · 248 KB · Uploaded April 22, 2026</div>
          <div style={{ padding: 16, background: 'var(--muted)', border: '1px dashed var(--border)', borderRadius: 8, minHeight: 260, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted-foreground)', fontSize: 12 }}>PDF preview</div>
        </div>
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy formula="ResizablePanels = Panel[] + ResizableHandle[]"
        parts={[{ label: 'Panel', required: true }, { label: 'Handle', role: 'draggable', required: true }]} />
    </Subsection>

    <Subsection title="Variants">
      <Grid cols={3}>
        <SampleCard label="2-pane">
          <div className="rsz" style={{ width: '100%', height: 120 }}><div className="rsz-pane" style={{ width: '40%', background: 'var(--muted)' }} /><div className="rsz-handle" /><div className="rsz-pane" style={{ flex: 1 }} /></div>
        </SampleCard>
        <SampleCard label="3-pane">
          <div className="rsz" style={{ width: '100%', height: 120 }}><div className="rsz-pane" style={{ width: '25%', background: 'var(--muted)' }} /><div className="rsz-handle" /><div className="rsz-pane" style={{ flex: 1 }} /><div className="rsz-handle" /><div className="rsz-pane" style={{ width: '25%', background: 'var(--muted)' }} /></div>
        </SampleCard>
        <SampleCard label="nested">
          <div className="rsz" style={{ width: '100%', height: 120 }}>
            <div className="rsz-pane" style={{ width: '35%', background: 'var(--muted)' }} />
            <div className="rsz-handle" />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div className="rsz-pane" style={{ flex: 1 }} />
              <div style={{ height: 4, background: 'var(--border)' }} />
              <div className="rsz-pane" style={{ flex: 1, background: 'var(--muted)' }} />
            </div>
          </div>
        </SampleCard>
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Use for file-browser, code-editor, or preview layouts.', 'Persist panel sizes in localStorage so users keep their layout.', 'Set minSize/maxSize so panels never collapse to unusable widths.']}
        dont={["Don't nest more than 2 levels — users lose track of handles.", "Don't animate resize — it fights with the user's drag."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['direction', '"horizontal" | "vertical"', '"horizontal"', 'Split axis.'],
        ['defaultSize', 'number', '—', 'Initial % of total.'],
        ['minSize', 'number', '10', 'Minimum %.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { ResizableHandle, ResizablePanel, ResizablePanelGroup } ', K('from'), ' ', S('"@/components/ui/resizable"'), ';']]} />
    </Subsection>
  </OrgSection>
);

// ============================================================
// Organism 11 — Popover
// ============================================================

const Org11_Popover = () => (
  <OrgSection num={11} id="org-popover" name="Popover"
    desc="Floating card anchored to a trigger. More flexible than Tooltip. Use for filter dropdowns, pickers, inline edits.">
    <OrgHero>
      <div style={{ position: 'relative', paddingTop: 20, paddingBottom: 200, width: '100%', maxWidth: 360 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <button className="btn btn-outline btn-icon"><Icon name="help-circle" size={16} stroke={1.75} /></button>
        </div>
        <div style={{ position: 'absolute', top: 72, left: '50%', transform: 'translateX(-50%)', width: 300 }}>
          <div className="pop">
            <div className="pop-title">Keyboard shortcuts</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12.5 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Open command palette</span><span className="kbd">⌘K</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Create ticket</span><span className="kbd">⌘N</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Search tickets</span><span className="kbd">⌘F</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>This help</span><span className="kbd">?</span></div>
            </div>
          </div>
        </div>
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy formula="Popover = Trigger + Content (Card with arrow)"
        parts={[{ label: 'Trigger', required: true }, { label: 'Content', required: true }, { label: 'Arrow' }]} />
    </Subsection>

    <Subsection title="Positions">
      <Grid cols={4}>
        {['top','right','bottom','left'].map(p => (
          <SampleCard key={p} label={p}>
            <div style={{ position: 'relative', width: 120, height: 100 }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 28, height: 28, borderRadius: 6, background: 'var(--primary)' }} />
              <div style={{ position: 'absolute',
                ...(p === 'top'    && { bottom: '65%', left: '50%', transform: 'translateX(-50%)' }),
                ...(p === 'bottom' && { top: '65%', left: '50%', transform: 'translateX(-50%)' }),
                ...(p === 'left'   && { right: '65%', top: '50%', transform: 'translateY(-50%)' }),
                ...(p === 'right'  && { left: '65%', top: '50%', transform: 'translateY(-50%)' }),
                padding: 8, background: 'var(--popover)', border: '1px solid var(--border)', borderRadius: 6, fontSize: 11, boxShadow: '0 2px 8px rgb(0 0 0 / 0.1)' }}>
                {p}
              </div>
            </div>
          </SampleCard>
        ))}
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Use for filter popouts, color pickers, or inline-edit forms.', 'Keep content under ~320px wide.', 'Always provide a way to close (click outside, esc).']}
        dont={["Don't put critical content only in a Popover — it's easy to dismiss accidentally.", "Don't chain Popovers; if you need depth, use Dialog or Sheet."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['side', '"top" | "right" | "bottom" | "left"', '"bottom"', 'Position relative to trigger.'],
        ['align', '"start" | "center" | "end"', '"center"', 'Alignment along side.'],
        ['sideOffset', 'number', '4', 'Gap from trigger (px).'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { Popover, PopoverContent, PopoverTrigger } ', K('from'), ' ', S('"@/components/ui/popover"'), ';']]} />
    </Subsection>
  </OrgSection>
);

// ============================================================
// Organism 12 — ScrollArea
// ============================================================

const Org12_ScrollArea = () => (
  <OrgSection num={12} id="org-scrollarea" name="ScrollArea"
    desc="Custom styled scrollable region with cross-browser consistent scrollbars. Use when native scrollbars would look inconsistent with the DS.">
    <OrgHero>
      <div className="sa" style={{ width: 280, height: 200 }}>
        <div className="sa-viewport">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} style={{ padding: '8px 10px', fontSize: 13, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="mono" style={{ color: 'var(--muted-foreground)', fontSize: 11 }}>WF-{1247 - i}</span>
              <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Ticket #{1247 - i}</span>
            </div>
          ))}
        </div>
        <div className="sa-bar"><div className="sa-thumb" style={{ height: '40%' }} /></div>
      </div>
    </OrgHero>

    <Subsection title="Anatomy">
      <OrgAnatomy formula="ScrollArea = Viewport + Scrollbar (Track + Thumb)"
        parts={[{ label: 'Viewport', required: true }, { label: 'Scrollbar' }, { label: 'Thumb', required: true }]} />
    </Subsection>

    <Subsection title="Orientations">
      <Grid cols={3}>
        {['vertical','horizontal','both'].map(o => (
          <SampleCard key={o} label={o}>
            <div className="sa" style={{ width: '100%', height: 100, display: 'flex' }}>
              <div style={{ flex: 1, padding: 10, color: 'var(--muted-foreground)', fontSize: 11 }}>{o} scroll</div>
              {o !== 'horizontal' && <div className="sa-bar" style={{ position: 'relative', top: 0, right: 0, bottom: 0, margin: 6 }}><div className="sa-thumb" style={{ height: '50%' }} /></div>}
            </div>
          </SampleCard>
        ))}
      </Grid>
    </Subsection>

    <Subsection title="Composition rules">
      <CompositionRules
        do={['Use in floating containers (Popover, DropdownMenu, Command) where native scrollbars look off.', 'Keep the scrollbar subtle — fade in on hover, fade out on idle.']}
        dont={["Don't wrap the whole page — native browser scroll is the right default.", "Don't nest ScrollAreas; pick one scrollable ancestor."]}
      />
    </Subsection>

    <Subsection title="Props">
      <PropsTable rows={[
        ['type', '"auto" | "always" | "hover" | "scroll"', '"hover"', 'When to show the scrollbar.'],
        ['scrollHideDelay', 'number', '600', 'ms before hiding after scroll ends.'],
      ]} />
    </Subsection>

    <Subsection title="Code">
      <CodeBlock lines={[[K('import'), ' { ScrollArea, ScrollBar } ', K('from'), ' ', S('"@/components/ui/scroll-area"'), ';']]} />
    </Subsection>
  </OrgSection>
);

Object.assign(window, { Org9_CommandPalette, Org10_Resizable, Org11_Popover, Org12_ScrollArea });
