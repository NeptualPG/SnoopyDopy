# Changelog

All notable changes to SnoopyDopy will be documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] — 2026-06-28

### Added
- Initial cyberpunk marketplace with orange + violet dual-theme support
- `body[data-theme]` CSS variable architecture for instant theme switching
- Animated hero section with slow zoom effect and theme-aware content
- Product grid with staggered card fade-in animations
- Corner accent pseudo-elements on cards
- Neon glow hover effects on cards and buttons
- Sticky header with backdrop blur
- Animated background grid and scanline overlay
- Ambient radial glow that follows active theme
- Fully responsive layout (mobile / tablet / desktop / ultra-wide)
- ES6 module architecture (`js/main.js`, components, utils, data)
- Semantic HTML5 with ARIA attributes throughout
- CSS split into five modules: reset, variables, animations, components, responsive
- `products.js` data file with JSDoc schema
- `helpers.js` utility functions (formatPrice, escapeHtml, filterByOwner, itemCountLabel)
- `.gitignore`, `LICENSE` (MIT), `CONTRIBUTING.md`, `CHANGELOG.md`
- Full `README.md` with screenshots section, feature list, folder structure, roadmap

### Changed
- Refactored from single-file HTML/CSS/JS into modular project structure

---

## [Unreleased]

### Planned
- Product search
- Category filters
- Shopping cart
- Firebase backend integration
- Admin dashboard
- User authentication
- Product gallery (multi-image)
- Dark / Light theme toggle
- Wishlist
- Product animations on scroll
