/**
 * productCard.js — SnoopyDopy Cyberpunk Marketplace
 * Builds and renders product card elements into the grid.
 */

import { escapeHtml, itemCountLabel, filterByOwner } from "../utils/helpers.js";

/**
 * Creates a single product card <article> element.
 * @param {Object} product      - Product data object.
 * @param {number} animIndex    - Index used for staggered animation delay.
 * @returns {HTMLElement}       - The rendered card element.
 */
export function createProductCard(product, animIndex = 0) {
  const { owner, name, description, price, currency, image, contact } = product;

  const sellerLabel = owner === "me" ? "// SELLER: ME" : "// SELLER: HER";

  const card = document.createElement("article");
  card.className = "card animate-card";
  card.style.animationDelay = `${animIndex * 60}ms`;

  // Use lazy loading for images outside the initial viewport
  card.innerHTML = `
    <div
      class="card-img"
      role="img"
      aria-label="${escapeHtml(name)} product image"
      style="background-image: url('${escapeHtml(image)}')"
    ></div>
    <div class="card-body">
      <span class="card-seller" aria-label="Seller">${escapeHtml(sellerLabel)}</span>
      <h3 class="card-name">${escapeHtml(name)}</h3>
      <p class="card-desc">${escapeHtml(description)}</p>
      <div class="card-foot">
        <div class="card-price" aria-label="Price">
          <span class="currency" aria-hidden="true">${escapeHtml(currency)}</span>${price.toLocaleString()}
        </div>
        <a
          class="buy-btn"
          href="${escapeHtml(contact)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact seller about ${escapeHtml(name)}"
        >CONTACT TO BUY</a>
      </div>
    </div>
  `;

  return card;
}

/**
 * Renders all products for the given owner into the grid element.
 * Clears existing content before rendering.
 *
 * @param {HTMLElement} gridEl   - The products grid container.
 * @param {Array}       products - Full product array.
 * @param {string}      owner    - "me" or "gf".
 * @param {HTMLElement} countEl  - The section count element to update.
 */
export function renderProducts(gridEl, products, owner, countEl) {
  const filtered = filterByOwner(products, owner);

  // Clear previous cards
  gridEl.innerHTML = "";

  // Render each card with staggered animation
  filtered.forEach((product, idx) => {
    const card = createProductCard(product, idx);
    gridEl.appendChild(card);
  });

  // Update item count label
  if (countEl) {
    countEl.textContent = itemCountLabel(filtered.length);
  }
}
