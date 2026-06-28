<div align="center">

# ⚡ SnoopyDopy

### Cyberpunk Marketplace

**A dual-seller neon storefront built with pure HTML, CSS & JavaScript.**  
No frameworks. No dependencies. Just vibes and voltage.

[![MIT License](https://img.shields.io/badge/license-MIT-orange?style=flat-square)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## Preview

> Add your screenshots to `screenshots/` and they'll appear here automatically.

| Orange Theme (My Products) | Violet Theme (Her Products) |
|:--------------------------:|:---------------------------:|
| ![Home Orange](screenshots/home-orange.png) | ![Home Violet](screenshots/home-violet.png) |

| Mobile View |
|:-----------:|
| ![Mobile](screenshots/mobile.png) |

---

## Features

| Feature | Status |
|---------|--------|
| Responsive Design | ✅ |
| Orange Neon Theme | ✅ |
| Violet Neon Theme | ✅ |
| Product Toggle | ✅ |
| Cyberpunk Design | ✅ |
| Easy Product Management | ✅ |
| Pure HTML / CSS / JavaScript | ✅ |
| No Framework | ✅ |
| ES6 Modules | ✅ |
| Semantic HTML + ARIA | ✅ |
| CSS Variables | ✅ |
| Animated Background | ✅ |
| Neon Glow Effects | ✅ |
| Staggered Card Animations | ✅ |

---

## Folder Structure

```
SnoopyDopy/
│
├── assets/
│   ├── images/
│   │   ├── hero/           # Hero section background images
│   │   ├── products/       # Local product images
│   │   ├── logo/           # Logo variants
│   │   └── placeholders/   # Fallback / placeholder images
│   ├── icons/              # SVG icons
│   └── fonts/              # Self-hosted fonts (optional)
│
├── css/
│   ├── reset.css           # Browser default normalization
│   ├── variables.css       # All design tokens (colors, spacing, fonts)
│   ├── animations.css      # Keyframes and motion utilities
│   ├── components.css      # All UI components (header, hero, cards, footer)
│   ├── responsive.css      # Media queries and breakpoints
│   └── styles.css          # Entry point — imports all modules above
│
├── js/
│   ├── data/
│   │   └── products.js     # Product catalogue — edit this to add/remove products
│   ├── components/
│   │   ├── productCard.js  # Builds and renders product card elements
│   │   ├── hero.js         # Hero content updates on theme switch
│   │   └── toggle.js       # Theme toggle button logic
│   ├── utils/
│   │   └── helpers.js      # Shared utility functions
│   └── main.js             # App entry point — wires everything together
│
├── screenshots/
│   ├── home-orange.png     # Desktop — orange theme
│   ├── home-violet.png     # Desktop — violet theme
│   └── mobile.png          # Mobile view
│
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── favicon.ico
└── index.html
```

---

## How to Run

**Option 1 — Open directly**

```bash
git clone git@github.com:NeptualPG/SnoopyDopy.git
cd SnoopyDopy
open index.html
```

**Option 2 — Live Server (recommended)**

Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension, right-click `index.html`, and select **Open with Live Server**.

> Live Server is recommended because ES6 modules (`type="module"`) require an HTTP server — they won't load over `file://` in some browsers.

**Option 3 — Python**

```bash
python -m http.server 8080
# then open http://localhost:8080
```

---

## How to Add Products

All products are stored in `js/data/products.js`. Open that file and add a new object to the `PRODUCTS` array.

```js
{
  id: "p07",           // Unique string ID
  owner: "me",         // "me" = orange theme, "gf" = violet theme
  name: "CYBER BACKPACK",
  price: 199,          // Number (no currency symbol)
  currency: "$",       // Currency symbol
  description: "Anti-RFID compartments with LED edge lighting.",
  image: "assets/images/products/cyber-backpack.webp",  // URL or local path
  contact: "mailto:me@neonmarket.io"   // mailto:, tel:, or any URL
}
```

Save the file and refresh — the card appears automatically.

---

## Customization

### Change theme colors

Open `css/variables.css` and edit the neon color tokens:

```css
/* Orange theme */
--neon:   #ff6b1a;
--neon-2: #ff8c42;

/* Violet theme */
--neon-v:   #b026ff;
--neon-v-2: #d946ef;
```

### Replace the hero image

Update the `heroImage` value in `js/components/hero.js` per theme, or replace the inline `style` on `.hero-image` in `index.html`.

### Change seller names / labels

Edit the `HERO_COPY` object in `js/components/hero.js`:

```js
export const HERO_COPY = {
  me: {
    title:   "FUTURE TECH. REAL PRICE.",
    metaTag: "SELLER: ME",
    // ...
  },
  gf: {
    title:   "NEON FASHION. HER STYLE.",
    metaTag: "SELLER: HER",
    // ...
  }
};
```

### Replace the Contact button behavior

Change the `contact` field in each product in `products.js` to any URL — a WhatsApp link, Instagram page, Linktree, or a backend endpoint.

### Connect to a backend later

Replace the `PRODUCTS` array import in `main.js` with a `fetch()` call:

```js
const response = await fetch("/api/products");
const PRODUCTS = await response.json();
```

The rest of the rendering pipeline stays exactly the same.

---

## Technologies

| Technology | Role |
|------------|------|
| HTML5 | Semantic structure, ARIA accessibility |
| CSS3 | Variables, grid, animations, backdrop-filter |
| JavaScript ES6 | ES modules, DOM manipulation |
| Orbitron (font) | Display / headings |
| Rajdhani (font) | Body text |

---

## Roadmap

| Feature | Status |
|---------|--------|
| Product Search | 🔲 Planned |
| Category Filters | 🔲 Planned |
| Shopping Cart | 🔲 Planned |
| Firebase Integration | 🔲 Planned |
| Admin Dashboard | 🔲 Planned |
| User Login | 🔲 Planned |
| Product Gallery (multi-image) | 🔲 Planned |
| Dark / Light Theme Toggle | 🔲 Planned |
| Product Scroll Animations | 🔲 Planned |
| Wishlist | 🔲 Planned |

---

## Contributing

Pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## License

[MIT](LICENSE) © 2026 NeptualPG

---

<div align="center">
  <sub>Built in the neon grid. ⚡</sub>
</div>
