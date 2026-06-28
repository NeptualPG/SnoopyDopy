/**
 * main.js — SnoopyDopy Product Reviews
 *
 * Application entry point.
 * Wires together all components: toggle, hero, product grid, and currency switch.
 */

import { PRODUCTS }        from "./data/products.js";
import { renderProducts }  from "./components/productCard.js";
import { updateHero }      from "./components/hero.js";
import { initToggle }      from "./components/toggle.js";

// ── DOM References ──────────────────────────────────────────

const heroImageEl       = document.querySelector(".hero-image");
const heroTitleEl       = document.getElementById("heroTitle");
const heroSubEl         = document.getElementById("heroSub");
const metaTagEl         = document.getElementById("metaTag");
const sectionTitleEl    = document.getElementById("sectionTitle");
const sectionCountEl    = document.getElementById("sectionCount");
const productsGridEl    = document.getElementById("productsGrid");
const toggleBtns        = document.querySelectorAll(".toggle-btn");
const currencyToggleBtn = document.getElementById("currencyToggle");

// ── Initial Theme ───────────────────────────────────────────

const DEFAULT_THEME    = "me";
const DEFAULT_CURRENCY = "cop"; // "cop" | "usd"

// ── Seller toggle handler ───────────────────────────────────

/**
 * Called whenever the seller theme changes.
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

// ── Currency toggle ─────────────────────────────────────────

/**
 * Flips the data-currency attribute on <body> between "cop" and "usd".
 * CSS handles showing/hiding .price-cop vs .price-usd on every card.
 */
function handleCurrencyToggle() {
  const current = document.body.getAttribute("data-currency");
  const next    = current === "cop" ? "usd" : "cop";

  document.body.setAttribute("data-currency", next);

  // Update button labels so active/inactive swap
  const activeEl   = currencyToggleBtn.querySelector(".currency-toggle-active");
  const inactiveEl = currencyToggleBtn.querySelector(".currency-toggle-inactive");

  activeEl.textContent   = next.toUpperCase();
  inactiveEl.textContent = current.toUpperCase();

  currencyToggleBtn.setAttribute(
    "aria-label",
    `Showing prices in ${next.toUpperCase()}. Click to switch to ${current.toUpperCase()}`
  );
}

// ── Init ────────────────────────────────────────────────────

document.body.setAttribute("data-theme",    DEFAULT_THEME);
document.body.setAttribute("data-currency", DEFAULT_CURRENCY);

initToggle(toggleBtns, handleThemeChange, DEFAULT_THEME);
handleThemeChange(DEFAULT_THEME);

currencyToggleBtn.addEventListener("click", handleCurrencyToggle);
