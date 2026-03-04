# Talk2Claude.com

**Sober. Serious. Funky.**

Personal site of Claude A. Garcia — Professor at Bern University of Applied Sciences (BFH), leading the Forest Landscape Governance Lab. Co-founder of LEAF Inspiring Change. President of Planet C collective.

## Live at

[https://talk2claude.com](https://talk2claude.com)

## Domain redirects

- `talk2claude.org` → talk2claude.com
- `talktoclaude.org` → talk2claude.com
- `talktoclaude.ch` → talk2claude.com

## Structure

```
talk2claude-site/
├── index.html          # Main page
├── css/
│   └── style.css       # Brand identity system
├── js/
│   └── main.js         # Interactions (scroll reveal, toggles, nav)
├── blog/
│   └── template.html   # Essay page template
├── CNAME               # GitHub Pages custom domain
└── README.md
```

## Adding Essays

1. Copy `blog/template.html`
2. Rename to your essay slug (e.g., `blog/architecture-of-inaction.html`)
3. Replace the placeholder content
4. Update the essay cards in `index.html` to link to it

## Newsletter

Newsletter is powered by [Buttondown](https://buttondown.com/claude). Subscribers are collected via the embedded form on the site and managed through the Buttondown dashboard.

## Fonts

The site uses Google Fonts (loaded from CDN):
- **Playfair Display** — Display/headlines (sober, classical authority)
- **JetBrains Mono** — Labels/UI (technical precision)
- **Source Sans 3** — Body text (clean readability)

## Colors

| Token           | Hex       | Role                    |
|-----------------|-----------|-------------------------|
| `--black`       | `#0a0a0a` | Background              |
| `--red`         | `#c41e3a` | Primary accent (urgency)|
| `--violet`      | `#7b2d8e` | Secondary (unexpected)  |
| `--cream`       | `#f0ece4` | Text                    |
| `--cream-muted` | `#9e998f` | Secondary text          |
