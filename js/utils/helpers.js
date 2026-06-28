/**
 * helpers.js — SnoopyDopy Cyberpunk Marketplace
 * Generic utility functions shared across components.
 */

/**
 * Formats a price number into a display string.
 * @param {number} price     - Numeric price value.
 * @param {string} currency  - Currency symbol (default: "$").
 * @returns {string}         - Formatted string, e.g. "$129"
 */
export function formatPrice(price, currency = "$") {
  return `${currency}${price.toLocaleString()}`;
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
