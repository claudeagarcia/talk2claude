# Talk2Claude.com

**Sober. Serious. Flashy.**

Personal site of Claude A. Garcia — Professor of International Forest Governance (BFH), Senior Scientist (ETH Zürich), co-founder of LEAF Inspiring Change.

## Quick Deploy to GitHub Pages

### 1. Create a GitHub repository

```bash
# In this directory
git init
git add .
git commit -m "Initial launch — Talk2Claude.com"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/talk2claude.git
git push -u origin main
```

### 2. Enable GitHub Pages

- Go to **Settings → Pages** in your repository
- Source: **Deploy from a branch**
- Branch: **main** / root
- Save

Your site will be live at `https://YOUR_USERNAME.github.io/talk2claude/` within minutes.

### 3. Connect your custom domain

- In **Settings → Pages → Custom domain**, enter: `talk2claude.com`
- At your domain registrar, add these DNS records:

| Type  | Name | Value                          |
|-------|------|--------------------------------|
| A     | @    | 185.199.108.153               |
| A     | @    | 185.199.109.153               |
| A     | @    | 185.199.110.153               |
| A     | @    | 185.199.111.153               |
| CNAME | www  | YOUR_USERNAME.github.io        |

- Check "Enforce HTTPS"
- Create a `CNAME` file in the repo root containing: `talk2claude.com`

### 4. Redirect other domains

For `talktoclaude.org`, `talktoclaude.ch`, and `talk2claude.org`:
- Set up DNS forwarding/redirect to `talk2claude.com` at each registrar
- Most registrars offer URL forwarding (301 redirect) in their DNS settings

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

## Newsletter Integration

The newsletter form is currently a placeholder. To connect it:

- **Buttondown** (recommended, simple): Replace the form action with your Buttondown URL
- **Substack**: Link out to your Substack instead
- **Mailchimp**: Use their embedded form action URL

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
