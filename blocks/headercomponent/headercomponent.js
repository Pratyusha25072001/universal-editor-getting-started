import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * Toggles active state for a group of nav items based on prefix
 * @param {string} navPrefix The prefix used to identify related nav items (e.g., "nav1")
 */
function toggleNavItems(navPrefix) {
  for (let i = 1; i <= 3; i++) {
    const button = document.querySelector(`[data-aue-prop="${navPrefix}_item${i}_label"] a.button`);
    const icon = document.querySelector(`[data-aue-prop="${navPrefix}_item${i}_icon"]`);

    if (button) button.classList.toggle('active');
    if (icon) icon.classList.toggle('active');
  }
}

/**
 * Initializes nav label click handlers
 */
function initNavLabelToggles() {
  const navLabels = document.querySelectorAll('[data-aue-prop$="_label"]');

  navLabels.forEach((label) => {
    label.addEventListener('click', () => {
      const labelProp = label.getAttribute('data-aue-prop');
      const navPrefix = labelProp.split('_')[0]; // Extracts "nav1" from "nav1_item1_label"
      toggleNavItems(navPrefix);
    });
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initNavLabelToggles();
});
