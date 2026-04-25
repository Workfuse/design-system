# Workfuse Design System

Site de documentação visual do Workfuse DS.

**Live:** https://workfuse.github.io/design-system/ *(atualizado automaticamente após cada push em `main`)*

## O que tem aqui

- **Foundations** ([`/index.html`](./index.html)) — 14 famílias de tokens (Colors, Typography, Spacing, Radius, Shadows, Motion, Breakpoints, Z-index, Icon Sizes, Opacity, Border Widths, Blur, Aspect Ratios, Status Colors), light + dark.
- **Components** (sob a aba Components do `index.html`) — 60 componentes do DS organizados em Atoms (22), Molecules (22), Organisms (16), todos com variants/states/props/code.
- **Patterns** ([`/patterns.html`](./patterns.html)) — exemplar pages mostrando como os componentes compõem em telas reais (Tickets List, Ticket Detail, Campuses, Event Types, Reports, Login). Portal pages (Home + Ticket) chegam na próxima iteração.

## Como usar

- **Designer / Produto:** referência de patterns visuais. Antes de criar uma tela nova, verificar se já existe componente/pattern que resolve.
- **Dev:** ground truth de tokens e components. Quando implementar uma feature nova nos apps, conferir aqui qual componente shadcn/extra DS usar.
- **Decisões:** o site é a fonte de verdade visual. Mudanças no DS começam aqui antes de chegar no código.

## Stack

- HTML standalone com React 18 + Babel (in-browser) + Tailwind via CDN
- Tokens em CSS variables (OKLCH com fallback hex)
- Inter via Google Fonts
- Lucide pra ícones
- Sem build step — basta abrir os HTMLs no browser

## Arquivos

```
index.html              # Foundations + Components (Atoms/Molecules/Organisms)
patterns.html           # Exemplar pages
styles.css              # Tokens + utilities pro Foundations site
patterns.css            # Estilos específicos das exemplar pages
*.jsx                   # Componentes React Babel-transformed em runtime
```

## Limitações conhecidas

- Patterns ainda só tem 6 páginas admin (Portal: Home + Ticket pendente)
- Site é dev-mode (React.development.js) — em produção poderia trocar pra .production.js pra performance
- Sem Firebase Auth — qualquer um com a URL acessa. Pra solução com gate, ver Fase 10 do roadmap (Firebase Hosting com Auth)

## Roadmap

Fase 5 (em andamento): completar 2 portal pages no Patterns
Fase 6: PR `chore/wor-xx-align-ds-tokens` aplicando o `styles.css` aos apps reais
Fase 7+: instalar shadcn components faltantes, implementar extras DS no código
Fase 10: migrar deploy pra Firebase Hosting com auth gate
