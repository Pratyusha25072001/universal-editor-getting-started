document.addEventListener("DOMContentLoaded", function () {
  const navLabels = document.querySelectorAll('[data-aue-prop$="_label"]');

  navLabels.forEach(label => {
    label.addEventListener("click", () => {
      const labelProp = label.getAttribute("data-aue-prop");
      const navPrefix = labelProp.split("_")[0]; // e.g., "nav1", "nav2", etc.

      const navItems = document.querySelectorAll(`[data-aue-prop^="${navPrefix}_item"]`);
      navItems.forEach(item => {
        item.classList.toggle("active");
      });
    });
  });
});
