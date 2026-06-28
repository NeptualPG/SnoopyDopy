/**
 * lightbox.js — SnoopyDopy Product Reviews
 * Full-screen image overlay.
 *
 * Usage:
 *   openLightbox(images, startIndex, position)
 *
 * Called by productCard.js when the user clicks a card image.
 */

// ── DOM refs (created once in index.html) ─────────────────────────────────

const lb        = document.getElementById("lightbox");
const lbImg     = document.getElementById("lightboxImg");
const lbCounter = document.getElementById("lightboxCounter");
const lbClose   = document.getElementById("lightboxClose");
const lbPrev    = document.getElementById("lightboxPrev");
const lbNext    = document.getElementById("lightboxNext");

// ── State ──────────────────────────────────────────────────────────────────

let _images   = [];
let _current  = 0;
let _position = "center";

// ── Core ───────────────────────────────────────────────────────────────────

function show(idx) {
  _current = (idx + _images.length) % _images.length;

  lbImg.style.backgroundImage    = `url('${_images[_current]}')`;
  lbImg.style.backgroundPosition = _position;
  lbImg.setAttribute("aria-label", `Image ${_current + 1} of ${_images.length}`);

  // Counter: only show when more than one image
  lbCounter.textContent = _images.length > 1
    ? `${_current + 1} / ${_images.length}`
    : "";

  // Hide arrows when single image
  const multi = _images.length > 1;
  lbPrev.hidden = !multi;
  lbNext.hidden = !multi;
}

export function openLightbox(images, startIndex = 0, position = "center") {
  _images   = images;
  _position = position;

  show(startIndex);

  // Animate in — pointer-events restored by .lightbox--open in CSS
  requestAnimationFrame(() => lb.classList.add("lightbox--open"));

  lbClose.focus();
}

function closeLightbox() {
  lb.classList.remove("lightbox--open");
  // pointer-events: none is restored automatically by CSS when class is removed
}

// ── Events ─────────────────────────────────────────────────────────────────

lbClose.addEventListener("click", closeLightbox);
lbPrev.addEventListener("click",  () => show(_current - 1));
lbNext.addEventListener("click",  () => show(_current + 1));

// Click on backdrop (outside image) closes — must be exact lb element
lb.addEventListener("click", (e) => {
  if (e.target === lb) closeLightbox();
});

// Prevent clicks on image/arrows/close from reaching the backdrop
lbImg.addEventListener("click",   (e) => e.stopPropagation());
lbPrev.addEventListener("click",  (e) => e.stopPropagation());
lbNext.addEventListener("click",  (e) => e.stopPropagation());
lbClose.addEventListener("click", (e) => e.stopPropagation());

// Keyboard: ESC closes, arrows navigate
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("lightbox--open")) return;
  if (e.key === "Escape")     closeLightbox();
  if (e.key === "ArrowLeft")  show(_current - 1);
  if (e.key === "ArrowRight") show(_current + 1);
});
