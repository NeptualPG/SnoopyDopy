/**
 * hero.js — SnoopyDopy Cyberpunk Marketplace
 * Manages hero section content updates when the theme switches.
 */

/**
 * Copy map: text content per theme.
 * Edit values here to change hero headlines and meta tags.
 */
export const HERO_COPY = {
  me: {
    title:    "FUTURE TECH. REAL PRICE.",
    subtitle: "Curated gear from the neon underground.",
    section:  "MY PRODUCTS",
    metaTag:  "SELLER: ME",
    heroImage: "https://image.qwenlm.ai/public_source/8eddacd5-9e2c-4465-9105-190904a28c78/175c442ce-30ad-4b06-8691-bf6431ed9352.png"
  },
  gf: {
    title:    "NEON FASHION. HER STYLE.",
    subtitle: "Handcrafted pieces glowing in violet light.",
    section:  "HER PRODUCTS",
    metaTag:  "SELLER: HER",
    heroImage: "https://image.qwenlm.ai/public_source/8eddacd5-9e2c-4465-9105-190904a28c78/175c442ce-30ad-4b06-8691-bf6431ed9352.png"
  }
};

/**
 * Updates all hero section DOM elements to reflect the active theme.
 *
 * @param {string} theme  - "me" or "gf".
 * @param {Object} els    - Object containing DOM element references:
 *   { heroTitleEl, heroSubEl, sectionTitleEl, metaTagEl, heroImageEl }
 */
export function updateHero(theme, els) {
  const copy = HERO_COPY[theme];
  if (!copy) return;

  const { heroTitleEl, heroSubEl, sectionTitleEl, metaTagEl, heroImageEl } = els;

  if (heroTitleEl)    heroTitleEl.textContent   = copy.title;
  if (heroSubEl)      heroSubEl.textContent      = copy.subtitle;
  if (sectionTitleEl) sectionTitleEl.textContent = copy.section;
  if (metaTagEl)      metaTagEl.textContent      = copy.metaTag;
  if (heroImageEl)    heroImageEl.style.backgroundImage = `url('${copy.heroImage}')`;
}
