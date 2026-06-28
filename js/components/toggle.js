/**
 * toggle.js — SnoopyDopy Cyberpunk Marketplace
 * Manages the seller theme toggle buttons and body data-theme attribute.
 */

/**
 * Initialises the theme toggle.
 * Wires up click events and handles active state styling.
 *
 * @param {NodeList|Array} buttons  - The toggle button elements.
 * @param {Function}       onChange - Callback(theme: string) fired on switch.
 * @param {string}         initial  - Starting theme ("me" or "gf").
 */
export function initToggle(buttons, onChange, initial = "me") {
  /**
   * Applies the active class to the matching button and removes it from others.
   * @param {string} theme
   */
  function setActive(theme) {
    buttons.forEach((btn) => {
      const isActive = btn.dataset.target === theme;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  // Attach click listeners
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      if (!target) return;

      // Apply theme to body
      document.body.setAttribute("data-theme", target);

      // Update active state
      setActive(target);

      // Notify parent
      onChange(target);
    });
  });

  // Set initial state without firing onChange
  setActive(initial);
}
