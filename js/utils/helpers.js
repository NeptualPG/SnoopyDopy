/**
 * helpers.js — SnoopyDopy Product Reviews
 * Generic utility functions shared across components.
 */

/** Approximate COP → USD exchange rate. Update this single constant to reprice everything. */
export const COP_TO_USD_RATE = 3500;

/**
 * Converts Colombian pesos to approximate USD.
 * @param {number} cop  - Price in COP.
 * @returns {number}    - Rounded USD value.
 */
export function copToUsd(cop) {
  return Math.round(cop / COP_TO_USD_RATE);
}

/**
 * Formats a COP price for display, e.g. 450000 → "$ 450.000"
 * Uses Colombian locale formatting (periods as thousands separators).
 * @param {number} cop
 * @returns {string}
 */
export function formatCop(cop) {
  return "$ " + cop.toLocaleString("es-CO");
}

/**
 * Formats a USD price for display, e.g. 129 → "≈ USD 129"
 * @param {number} usd
 * @returns {string}
 */
export function formatUsd(usd) {
  return "≈ USD " + usd.toLocaleString("en-US");
}

/**
 * Sanitizes a string to prevent XSS when injecting into innerHTML.
 * @param {string} str - Raw input string.
 * @returns {string}   - Escaped string.
 */
export function escapeHtml(str) {
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(str).replace(/[&<>"']/g, (ch) => map[ch]);
}

/**
 * Filters a product array by owner.
 * @param {Array}  products - Full product list.
 * @param {string} owner    - "me" or "gf".
 * @returns {Array}         - Filtered products.
 */
export function filterByOwner(products, owner) {
  return products.filter((p) => p.owner === owner);
}

/**
 * Returns a pluralized "item" string.
 * @param {number} count - Number of items.
 * @returns {string}     - E.g. "3 items" or "1 item".
 */
export function itemCountLabel(count) {
  return `${count} item${count === 1 ? "" : "s"}`;
}
