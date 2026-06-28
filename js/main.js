/**
 * main.js — SnoopyDopy Cyberpunk Marketplace
 *
 * Application entry point.
 * Wires together all components: toggle, hero, and product grid.
 */

import { PRODUCTS }        from "./data/products.js";
import { renderProducts }  from "./components/productCard.js";
import { updateHero }      from "./components/hero.js";
import { initToggle }      from "./components/toggle.js";

// ── DOM References ──────────────────────────────────────────

const heroImageEl    = document.querySelector(".hero-image");
const heroTitleEl    = document.getElementById("heroTitle");
const heroSubEl      = document.getElementById("heroSub");
const metaTagEl      = document.getElementById("metaTag");
const sectionTitleEl = document.getElementById("sectionTitle");
const sectionCountEl = document.getElementById("sectionCount");
const productsGridEl = document.getElementById("productsGrid");
const toggleBtns     = document.querySelectorAll(".toggle-btn");

// ── Initial Theme ───────────────────────────────────────────

const DEFAULT_THEME = "me";

// ── Switch Handler ──────────────────────────────────────────

/**
 * Called whenever the theme changes.
 * Updates hero copy and re-renders the product grid.
 * @param {string} theme - "me" or "gf"
 */
function handleThemeChange(theme) {
  updateHero(theme, {
    heroTitleEl,
    heroSubEl,
    sectionTitleEl,
    metaTagEl,
    heroImageEl
  });

  renderProducts(productsGridEl, PRODUCTS, theme, sectionCountEl);
}

// ── Init ────────────────────────────────────────────────────

// Set initial body theme attribute
document.body.setAttribute("data-theme", DEFAULT_THEME);

// Boot toggle (does NOT call handleThemeChange for initial state)
initToggle(toggleBtns, handleThemeChange, DEFAULT_THEME);

// Initial render
handleThemeChange(DEFAULT_THEME);
