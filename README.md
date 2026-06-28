<div align="center">

# ⚡ SnoopyDopy

### Neon Product Reviews — by Neptual & Eimy

**A personal dual-reviewer neon site built with pure HTML, CSS & JavaScript.**  
No frameworks. No dependencies. Just vibes and voltage.

[![MIT License](https://img.shields.io/badge/license-MIT-orange?style=flat-square)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-181717?style=flat-square&logo=github)](https://neptualPG.github.io/SnoopyDopy/)

**🌐 Live site → [neptualPG.github.io/SnoopyDopy](https://neptualPG.github.io/SnoopyDopy/)**

</div>

---

## What is this?

SnoopyDopy is a personal neon-themed product review site for two people — **Neptual** (orange) and **Eimy** (violet). Each person has their own tab, their own theme color, and their own product cards with star ratings, reviews, prices in COP/USD, and photo galleries.

---

## Features

| Feature | Status |
|---------|--------|
| Responsive Design | ✅ |
| Orange Neon Theme (Neptual) | ✅ |
| Violet Neon Theme (Eimy) | ✅ |
| Reviewer Toggle | ✅ |
| Star Ratings | ✅ |
| Product Reviews | ✅ |
| Helpful Vote Button | ✅ |
| COP / USD Price Toggle | ✅ |
| Multi-image Gallery | ✅ |
| View Product Button | ✅ |
| Animated Snoopy Decoration | ✅ |
| Pure HTML / CSS / JavaScript | ✅ |
| No Framework | ✅ |
| ES6 Modules | ✅ |
| Semantic HTML + ARIA | ✅ |

---

## Folder Structure

```
SnoopyDopy/
│
├── assets/
│   ├── images/
│   │   ├── hero/              # Hero section background images
│   │   ├── products/
│   │   │   ├── neptual/       # Neptual's product images
│   │   │   └── eimy/          # Eimy's product images
│   │   ├── logo/              # Logo variants
│   │   └── placeholders/      # Decorative images (e.g. Snoopy.png)
│   ├── icons/                 # SVG icons
│   └── fonts/                 # Self-hosted fonts (optional)
│
├── css/
│   ├── reset.css              # Browser default normalization
│   ├── variables.css          # All design tokens (colors, spacing, fonts)
│   ├── animations.css         # Keyframes and motion utilities
│   ├── components.css         # All UI components
│   ├── responsive.css         # Media queries and breakpoints
│   └── styles.css             # Entry point — imports all modules
│
├── js/
│   ├── data/
│   │   └── products.js        # All products and reviews — edit here
│   ├── components/
│   │   ├── productCard.js     # Card builder (gallery, stars, review, button)
│   │   ├── hero.js            # Hero content per theme
│   │   └── toggle.js          # Theme toggle logic
│   ├── utils/
│   │   └── helpers.js         # COP↔USD conversion + utilities
│   └── main.js                # App entry point
│
├── my honey/
│   └── GUIDE.md               # Step-by-step guide for Eimy 💜
│
├── screenshots/
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── favicon.svg
└── index.html
```

---

## How to Run Locally

**Live Server (recommended)**

Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension, right-click `index.html` → **Open with Live Server**.

> ES6 modules won't load over `file://` in some browsers — always use a local server.

**Python fallback**
```bash
python -m http.server 8080
# open http://localhost:8080
```

---

## How to Add a Product

Open `js/data/products.js` and add to the `PRODUCTS` array:

```js
{
  id: "p07",
  owner: "me",           // "me" = Neptual (orange) | "gf" = Eimy (violet)
  name: "PRODUCT NAME",
  price: 150000,         // in COP — USD is calculated automatically
  rating: 5,             // overall stars shown on the badge (1–5)
  description: "Short description of the product.",
  url: "https://link-to-product-page.com",  // optional — shows VIEW PRODUCT button
  reviews: [
    {
      author: "Neptual",
      stars: 5,
      text: "Your honest review goes here.",
      helpful: 0
    }
  ],
  // Single image:
  image: "assets/images/products/neptual/photo.png",
  // OR multiple images (gallery):
  images: [
    "assets/images/products/neptual/photo1.png",
    "assets/images/products/neptual/photo2.png"
  ]
}
```

---

## Deployment — GitHub Pages

This site is hosted for free on GitHub Pages.

```bash
git add .
git commit -m "feat: update products"
git push
```

Every push to `main` redeploys automatically.

To enable Pages on a new repo:  
**Settings → Pages → Source: Deploy from branch → main / (root) → Save**

---

## Technologies

| Technology | Role |
|------------|------|
| HTML5 | Semantic structure, ARIA accessibility |
| CSS3 | Variables, grid, animations, backdrop-filter |
| JavaScript ES6 | ES modules, DOM manipulation |
| Orbitron (font) | Display / headings |
| Rajdhani (font) | Body text |
| GitHub Pages | Free static hosting |

---

## License

[MIT](LICENSE) © 2026 NeptualPG

---

<div align="center">
  <sub>Made with 🧡💜 by Neptual & Eimy — built in the neon grid. ⚡</sub>
</div>
