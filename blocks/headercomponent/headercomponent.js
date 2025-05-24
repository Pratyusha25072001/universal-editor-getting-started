function attachNavListeners() {
  const navLabels = document.querySelectorAll('[data-aue-prop$="_label"]');

  navLabels.forEach(label => {
    // Avoid attaching multiple listeners
    if (label.dataset.listenerAttached) return;

    label.addEventListener("click", () => {
      const labelProp = label.getAttribute("data-aue-prop");
      console.log("Clicked:", labelProp);

      const navPrefix = labelProp.split("_")[0];
      const navItems = document.querySelectorAll(`[data-aue-prop^="${navPrefix}_item"]`);

      navItems.forEach(item => {
        item.classList.toggle("active");
      });
    });

    label.dataset.listenerAttached = "true"; // Mark as attached
  });
}

// Run once on initial load
document.addEventListener("DOMContentLoaded", () => {
  attachNavListeners();

  // Observe DOM changes (e.g., AEM re-rendering)
  const observer = new MutationObserver(() => {
    attachNavListeners();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
