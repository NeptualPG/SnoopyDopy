/**
 * productCard.js — SnoopyDopy Product Reviews
 * Builds and renders product review cards into the grid.
 *
 * Each card shows:
 *   - Product image / gallery
 *   - Owner badge
 *   - Name + description
 *   - Overall star rating
 *   - Price (COP / USD toggle)
 *   - Latest review: stars, text, author, helpful vote button
 */

import { escapeHtml, itemCountLabel, filterByOwner, copToUsd, formatCop, formatUsd } from "../utils/helpers.js";

// ── Star helpers ───────────────────────────────────────────────────────────

/**
 * Builds a row of 5 star characters, filled up to `count`.
 * @param {number} count  - 1–5
 * @param {string} [cls]  - Extra CSS class for the wrapper
 * @returns {string} HTML string
 */
function buildStars(count, cls = "") {
  const filled = Math.round(Math.min(5, Math.max(0, count)));
  let html = `<span class="stars ${cls}" aria-label="${filled} out of 5 stars" role="img">`;
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star ${i <= filled ? "star-on" : "star-off"}" aria-hidden="true">★</span>`;
  }
  html += `</span>`;
  return html;
}

// ── Gallery helpers ────────────────────────────────────────────────────────

function resolveImages(product) {
  if (Array.isArray(product.images) && product.images.length > 0) return product.images;
  if (product.image) return [product.image];
  return [];
}

function buildStaticImage(src, name) {
  return `
    <div
      class="card-img"
      role="img"
      aria-label="${escapeHtml(name)} product image"
      style="background-image: url('${escapeHtml(src)}')"
    ></div>`;
}

function buildGallery(images, name) {
  const dots = images
    .map((_, i) =>
      `<button
        class="gallery-dot${i === 0 ? " active" : ""}"
        data-index="${i}"
        aria-label="View image ${i + 1} of ${images.length}"
        type="button"
      ></button>`
    )
    .join("");

  return `
    <div class="card-gallery" aria-label="${escapeHtml(name)} product gallery">
      <div
        class="card-img gallery-img"
        role="img"
        aria-label="${escapeHtml(name)} — image 1 of ${images.length}"
        style="background-image: url('${escapeHtml(images[0])}')"
      ></div>
      <button class="gallery-arrow gallery-prev" aria-label="Previous image" type="button">&#8249;</button>
      <button class="gallery-arrow gallery-next" aria-label="Next image"     type="button">&#8250;</button>
      <div class="gallery-dots" role="group" aria-label="Image navigation">${dots}</div>
    </div>`;
}

function initGallery(card, images, name) {
  if (images.length <= 1) return;

  const frame   = card.querySelector(".gallery-img");
  const dots    = card.querySelectorAll(".gallery-dot");
  const btnPrev = card.querySelector(".gallery-prev");
  const btnNext = card.querySelector(".gallery-next");
  let current   = 0;

  function goTo(idx) {
    current = (idx + images.length) % images.length;
    frame.classList.add("gallery-transitioning");
    setTimeout(() => {
      frame.style.backgroundImage = `url('${escapeHtml(images[current])}')`;
      frame.setAttribute("aria-label", `${name} — image ${current + 1} of ${images.length}`);
      frame.classList.remove("gallery-transitioning");
    }, 150);
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  }

  btnPrev.addEventListener("click", () => goTo(current - 1));
  btnNext.addEventListener("click", () => goTo(current + 1));
  dots.forEach((dot) => dot.addEventListener("click", () => goTo(Number(dot.dataset.index))));
  card.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft")  goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  });
}

// ── Review block ───────────────────────────────────────────────────────────

/**
 * Builds the featured review block (first review in the array).
 * Wires the helpful button after card insertion via initHelpful().
 */
function buildReview(review) {
  if (!review) return "";
  return `
    <div class="card-review">
      <div class="review-header">
        ${buildStars(review.stars, "review-stars")}
        <span class="review-author">${escapeHtml(review.author)}</span>
      </div>
      <p class="review-text">"${escapeHtml(review.text)}"</p>
      <div class="review-foot">
        <button
          class="helpful-btn"
          type="button"
          aria-label="Mark review as helpful"
          aria-pressed="false"
        >
          <span class="helpful-icon" aria-hidden="true">▲</span>
          <span class="helpful-label">HELPFUL</span>
          <span class="helpful-count">${review.helpful}</span>
        </button>
        <span class="review-count-label" aria-hidden="true"></span>
      </div>
    </div>`;
}

/**
 * Wires the helpful vote toggle on a rendered card.
 * Each vote is session-only (no backend).
 */
function initHelpful(card, initialCount) {
  const btn       = card.querySelector(".helpful-btn");
  const countEl   = card.querySelector(".helpful-count");
  if (!btn) return;

  let count   = initialCount;
  let pressed = false;

  btn.addEventListener("click", () => {
    pressed = !pressed;
    count   = pressed ? count + 1 : count - 1;
    countEl.textContent = count;
    btn.setAttribute("aria-pressed", String(pressed));
    btn.classList.toggle("helpful-btn--active", pressed);
  });
}

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * Creates a single product review card <article> element.
 * @param {Object} product   - Product data object.
 * @param {number} animIndex - Staggered animation delay index.
 * @returns {HTMLElement}
 */
export function createProductCard(product, animIndex = 0) {
  const { owner, name, description, price, rating, reviews = [], url = "" } = product;

  const images      = resolveImages(product);
  const isGallery   = images.length > 1;
  const ownerLabel  = owner === "me" ? "// NEPTUAL" : "// EIMY";
  const featReview  = reviews[0] ?? null;
  const reviewCount = reviews.length;

  const usd      = copToUsd(price);
  const copLabel = formatCop(price);
  const usdLabel = formatUsd(usd);

  // Only render price row if price > 0
  const priceBlock = price > 0 ? `
      <div class="card-price-row">
        <div class="card-price" aria-label="Price">
          <span class="price-cop">${escapeHtml(copLabel)}</span>
          <span class="price-usd">${escapeHtml(usdLabel)}</span>
        </div>
      </div>` : "";

  // Only render "View Product" button if url is set
  const viewBtn = url ? `
      <a
        class="view-btn"
        href="${escapeHtml(url)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View ${escapeHtml(name)} product page"
      >VIEW PRODUCT ↗</a>` : "";

  const imageBlock = isGallery
    ? buildGallery(images, name)
    : buildStaticImage(images[0] ?? "", name);

  const card = document.createElement("article");
  card.className = "card animate-card";
  card.style.animationDelay = `${animIndex * 60}ms`;
  if (isGallery) card.setAttribute("tabindex", "0");

  card.innerHTML = `
    ${imageBlock}
    <div class="card-body">

      <div class="card-meta-row">
        <span class="card-seller" aria-label="Reviewer">${escapeHtml(ownerLabel)}</span>
        <div class="card-overall-rating">
          ${buildStars(rating, "overall-stars")}
          <span class="rating-count">(${reviewCount})</span>
        </div>
      </div>

      <h3 class="card-name">${escapeHtml(name)}</h3>
      <p class="card-desc">${escapeHtml(description)}</p>

      ${priceBlock}
      ${viewBtn}
      ${buildReview(featReview)}

    </div>
  `;

  if (isGallery) initGallery(card, images, name);
  if (featReview) initHelpful(card, featReview.helpful);

  return card;
}

/**
 * Renders all products for the given owner into the grid element.
 */
export function renderProducts(gridEl, products, owner, countEl) {
  const filtered = filterByOwner(products, owner);
  gridEl.innerHTML = "";
  filtered.forEach((product, idx) => gridEl.appendChild(createProductCard(product, idx)));
  if (countEl) countEl.textContent = itemCountLabel(filtered.length);
}
