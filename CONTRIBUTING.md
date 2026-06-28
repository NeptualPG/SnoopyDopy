# Contributing to SnoopStyle

Thanks for your interest in contributing! Here's how to get involved.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone git@github.com:<your-username>/SnoopStyle.git`
3. Open `index.html` with a local server (Live Server, Python's `http.server`, etc.)

## What Can I Contribute?

- Bug fixes
- New product card features
- Accessibility improvements
- New theme colors
- Performance optimizations
- Documentation improvements

## Workflow

```bash
# Create a feature branch
git checkout -b feat/your-feature-name

# Make your changes, then commit
git add .
git commit -m "feat: describe your change"

# Push and open a PR
git push origin feat/your-feature-name
```

## Commit Style

Use conventional commits:

| Prefix    | When to use                              |
|-----------|------------------------------------------|
| `feat:`   | New feature                              |
| `fix:`    | Bug fix                                  |
| `style:`  | CSS / formatting (no logic change)       |
| `refactor:` | Code restructure (no behavior change)  |
| `docs:`   | README, comments, documentation          |
| `chore:`  | Config, build, tooling                   |

## Code Standards

- Pure HTML, CSS, and JavaScript — no frameworks
- ES6 modules only
- CSS variables for all colors and spacing
- Semantic HTML with ARIA attributes where needed
- No inline styles
- Run through a linter before opening a PR

## Adding Products

Products live in `js/data/products.js`. See the README for the full schema.

## Questions

Open an issue and tag it with `question`.
