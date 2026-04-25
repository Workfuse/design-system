/* global React, lucide */
/* eslint-disable no-unused-vars */

// ============================================================
// Patterns — inline mini component library
// Compact re-implementations of the DS atoms/molecules used in the
// 8 exemplar pages. Each maps 1:1 to a component in the main DS doc
// and emits the same CSS classes so styling stays consistent.
// ============================================================

// ICON — lucide-powered
const Icon = ({ name, size = 16, stroke = 1.75, className = '', style = {} }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const svgNS = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('xmlns', svgNS);
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', stroke);
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      const icons = window.lucide.icons || {};
      const key = Object.keys(icons).find(k => {
        const n = name.toLowerCase();
        const kl = k.toLowerCase();
        return kl === n || kl === n.replace(/-/g, '') || icons[k]?.name === n;
      });
      const spec = icons[key];
      if (spec && Array.isArray(spec)) {
        // legacy array form
      } else if (spec) {
        const children = spec[2] || spec.children || [];
        children.forEach(([tag, attrs]) => {
          const el = document.createElementNS(svgNS, tag);
          Object.entries(attrs || {}).forEach(([k, v]) => el.setAttribute(k, v));
          svg.appendChild(el);
        });
      }
      ref.current.appendChild(svg);
    }
  }, [name, size, stroke]);
  return <span ref={ref} className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size, ...style }} />;
};

// BUTTON
const Button = ({ variant = 'default', size = 'default', children, leftIcon, rightIcon, className = '', onClick, style, fullWidth, as: Tag = 'button', ...rest }) => {
  const cls = ['btn', `btn-${variant}`];
  if (size !== 'default') cls.push(`btn-${size}`);
  if (fullWidth) cls.push('w-full');
  if (className) cls.push(className);
  return (
    <Tag className={cls.join(' ')} onClick={onClick} style={style} {...rest}>
      {leftIcon && <Icon name={leftIcon} size={14} />}
      <span>{children}</span>
      {rightIcon && <Icon name={rightIcon} size={14} />}
    </Tag>
  );
};

// BADGE
const Badge = ({ variant = 'default', children, className = '' }) => {
  const cls = ['bdg'];
  if (variant !== 'default') cls.push(`bdg-${variant}`);
  if (className) cls.push(className);
  return <span className={cls.join(' ')}>{children}</span>;
};

// AVATAR
const Avatar = ({ size = 32, initials = 'YP', kind = 'initials', src, color }) => {
  const style = { width: size, height: size, fontSize: Math.max(10, size * 0.38) };
  if (color) style.background = `color-mix(in oklab, ${color} 18%, transparent)`;
  if (color) style.color = color;
  if (kind === 'image' && src) {
    return <img src={src} alt="" className="avatar-img" style={style} />;
  }
  return <span className="avatar-initials" style={style}>{initials}</span>;
};

// INPUT (with optional leading/trailing icon)
const Input = ({ type = 'text', value, onChange, placeholder, leftIcon, rightIcon, invalid, disabled, className = '', ...rest }) => {
  if (leftIcon || rightIcon) {
    const cls = ['inp-wrap'];
    if (invalid) cls.push('is-invalid');
    if (disabled) cls.push('is-disabled');
    if (className) cls.push(className);
    return (
      <span className={cls.join(' ')}>
        {leftIcon && <Icon name={leftIcon} size={14} className="inp-lead" />}
        <input
          type={type}
          className={`inp inp-bare${invalid ? ' is-invalid' : ''}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
        {rightIcon && <Icon name={rightIcon} size={14} className="inp-trail" />}
      </span>
    );
  }
  const cls = ['inp'];
  if (invalid) cls.push('is-invalid');
  if (disabled) cls.push('is-disabled');
  if (className) cls.push(className);
  return (
    <input
      type={type}
      className={cls.join(' ')}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      {...rest}
    />
  );
};

// SELECT (visual only — display the value; kept as a styled div to avoid DOM event noise)
const Select = ({ value, placeholder, className = '', leftIcon }) => {
  const cls = ['sel'];
  if (className) cls.push(className);
  return (
    <span className={cls.join(' ')}>
      {leftIcon && <Icon name={leftIcon} size={14} className="sel-lead" />}
      <span className="sel-value">{value || <span className="sel-placeholder">{placeholder}</span>}</span>
      <Icon name="chevron-down" size={14} className="sel-caret" />
    </span>
  );
};

// CHECKBOX (compact, display)
const Checkbox = ({ checked, indeterminate, disabled, label, onChange }) => {
  const cls = ['ctrl', 'cb'];
  if (checked || indeterminate) cls.push('is-checked');
  if (disabled) cls.push('is-disabled');
  const content = (
    <>
      <span className={cls.join(' ')} onClick={disabled ? undefined : onChange} role="checkbox" aria-checked={!!checked}>
        {checked && !indeterminate && <Icon name="check" size={12} stroke={3} />}
        {indeterminate && <Icon name="minus" size={12} stroke={3} />}
      </span>
      {label && <span className="cb-label">{label}</span>}
    </>
  );
  if (label) return <label className="cb-row">{content}</label>;
  return content;
};

// TEXTAREA
const Textarea = ({ value, onChange, placeholder, rows = 3, disabled, className = '' }) => {
  const cls = ['ta'];
  if (disabled) cls.push('is-disabled');
  if (className) cls.push(className);
  return (
    <textarea
      className={cls.join(' ')}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
    />
  );
};

// LABEL
const Label = ({ children, required, htmlFor }) => (
  <label className="ff-label" htmlFor={htmlFor}>
    {children}
    {required && <span className="ff-required">*</span>}
  </label>
);

// FORM FIELD wrapper
const FormField = ({ label, required, children, hint, error, htmlFor }) => (
  <div className={`ff${error ? ' has-error' : ''}`}>
    {label && <Label required={required} htmlFor={htmlFor}>{label}</Label>}
    {children}
    {hint && !error && <div className="ff-hint">{hint}</div>}
    {error && <div className="ff-error">{error}</div>}
  </div>
);

// LINK
const Link = ({ href = '#', children, className = '', variant = 'default' }) => {
  const cls = ['lnk'];
  if (variant !== 'default') cls.push(`lnk-${variant}`);
  if (className) cls.push(className);
  return <a href={href} className={cls.join(' ')} onClick={(e)=>e.preventDefault()}>{children}</a>;
};

// SEPARATOR
const Separator = ({ className = '', label }) => {
  if (label) {
    return (
      <div className={`sep-label ${className}`}>
        <span className="sep-line" />
        <span className="sep-text">{label}</span>
        <span className="sep-line" />
      </div>
    );
  }
  return <hr className={`sep ${className}`} />;
};

// TAG (dismissible chip)
const Tag = ({ children, onRemove, variant = 'default' }) => {
  const cls = ['tag'];
  if (variant !== 'default') cls.push(`tag-${variant}`);
  return (
    <span className={cls.join(' ')}>
      {children}
      {onRemove && (
        <button className="tag-x" onClick={onRemove} aria-label="Remove">
          <Icon name="x" size={10} stroke={2.5} />
        </button>
      )}
    </span>
  );
};

// PROGRESS
const Progress = ({ value = 0, variant = 'default' }) => {
  const color = variant === 'success' ? '#16a34a' :
                variant === 'warning' ? '#d97706' :
                variant === 'destructive' ? 'var(--destructive)' :
                'var(--primary)';
  return (
    <div className="progress-track">
      <div className="progress-fill" style={{ width: `${value}%`, background: color }} />
    </div>
  );
};

// ALERT
const Alert = ({ variant = 'default', icon, title, children, onClose }) => {
  const cls = ['alert'];
  if (variant !== 'default') cls.push(`alert-${variant}`);
  const defaultIcon = {
    destructive: 'alert-circle',
    success: 'check-circle',
    warning: 'alert-triangle',
    info: 'info',
  }[variant];
  return (
    <div className={cls.join(' ')} role="alert">
      {(icon || defaultIcon) && <Icon name={icon || defaultIcon} size={16} className="alert-icon" />}
      <div className="alert-body">
        {title && <div className="alert-title">{title}</div>}
        {children && <div className="alert-desc">{children}</div>}
      </div>
      {onClose && (
        <button className="alert-close" onClick={onClose} aria-label="Close">
          <Icon name="x" size={14} />
        </button>
      )}
    </div>
  );
};

// CARD
const Card = ({ variant = 'default', children, className = '', onClick, padding }) => {
  const cls = ['ds-card'];
  if (variant !== 'default') cls.push(`is-${variant}`);
  if (onClick) cls.push('is-interactive');
  if (className) cls.push(className);
  const style = padding !== undefined ? { padding } : undefined;
  return <div className={cls.join(' ')} style={style} onClick={onClick}>{children}</div>;
};

// BREADCRUMB
const Breadcrumb = ({ items }) => (
  <nav className="bc" aria-label="Breadcrumb">
    {items.map((item, i) => (
      <React.Fragment key={i}>
        {i > 0 && <span className="bc-sep"><Icon name="chevron-right" size={12} /></span>}
        {item.href && i < items.length - 1 ? (
          <a href={item.href} className="bc-link" onClick={e=>e.preventDefault()}>{item.label}</a>
        ) : (
          <span className={i === items.length - 1 ? 'bc-current' : 'bc-link'}>{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

// TABS (presentational: value-controlled or uncontrolled)
const Tabs = ({ tabs, value, onChange, variant = 'default', right }) => {
  const [internal, setInternal] = React.useState(tabs[0]?.id);
  const active = value ?? internal;
  const setActive = (id) => { if (onChange) onChange(id); else setInternal(id); };
  return (
    <div className={`tabs tabs-${variant}`}>
      <div className={variant === 'pills' ? 'tabs-pills' : 'tabs-list'}>
        {tabs.map(t => (
          <button
            key={t.id}
            className={`tabs-trigger${active === t.id ? ' is-active' : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
            {t.count != null && <span className="tabs-count">{t.count}</span>}
          </button>
        ))}
        {right && <span className="tabs-right">{right}</span>}
      </div>
    </div>
  );
};

// PAGINATION
const Pagination = ({ page, total, perPage = 10, onChange }) => {
  const pages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage + 1;
  const end = Math.min(page * perPage, total);
  const go = (p) => onChange && onChange(Math.max(1, Math.min(pages, p)));
  const nums = [];
  const win = 2;
  for (let i = 1; i <= pages; i++) {
    if (i === 1 || i === pages || (i >= page - win && i <= page + win)) nums.push(i);
    else if (nums[nums.length - 1] !== '…') nums.push('…');
  }
  return (
    <div className="pgn">
      <div className="pgn-summary">
        Showing {start}–{end} of {total}
      </div>
      <div className="pgn-pages">
        <button className="pgn-btn" disabled={page <= 1} onClick={() => go(page - 1)}>
          <Icon name="chevron-left" size={14} />
        </button>
        {nums.map((n, i) => n === '…'
          ? <span key={i} className="pgn-ellipsis">…</span>
          : <button key={i} className={`pgn-btn${n === page ? ' is-active' : ''}`} onClick={() => go(n)}>{n}</button>
        )}
        <button className="pgn-btn" disabled={page >= pages} onClick={() => go(page + 1)}>
          <Icon name="chevron-right" size={14} />
        </button>
      </div>
    </div>
  );
};

// DROPDOWN MENU (display-only rendered open)
const DropdownMenu = ({ items, align = 'start' }) => (
  <div className={`menu menu-align-${align}`}>
    {items.map((it, i) => it.kind === 'sep' ? (
      <div key={i} className="menu-sep" />
    ) : it.kind === 'label' ? (
      <div key={i} className="menu-label">{it.label}</div>
    ) : (
      <button key={i} className={`menu-item${it.destructive ? ' is-destructive' : ''}${it.disabled ? ' is-disabled' : ''}`} disabled={it.disabled}>
        {it.icon && <Icon name={it.icon} size={14} className="menu-item-icon" />}
        <span>{it.label}</span>
        {it.shortcut && <span className="menu-item-shortcut">{it.shortcut}</span>}
      </button>
    ))}
  </div>
);

// EMPTY STATE
const EmptyState = ({ icon = 'inbox', title, description, action, variant = 'default' }) => (
  <div className={`empty${variant !== 'default' ? ` is-${variant}` : ''}`}>
    <div className="empty-icon"><Icon name={icon} size={28} stroke={1.5} /></div>
    {title && <div className="empty-title">{title}</div>}
    {description && <div className="empty-desc">{description}</div>}
    {action && <div className="empty-action">{action}</div>}
  </div>
);

// KBD
const Kbd = ({ children }) => <kbd className="kbd">{children}</kbd>;

// HoverCard wrapper (visual-only — renders an inline preview)
const HoverCard = ({ trigger, children }) => (
  <span className="hc-wrap">
    <span className="hc-trigger">{trigger}</span>
  </span>
);

Object.assign(window, {
  Icon, Button, Badge, Avatar, Input, Select, Checkbox, Textarea,
  Label, FormField, Link, Separator, Tag, Progress,
  Alert, Card, Breadcrumb, Tabs, Pagination, DropdownMenu,
  EmptyState, Kbd, HoverCard,
});
