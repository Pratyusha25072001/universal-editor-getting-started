document.addEventListener("DOMContentLoaded", function () {
  const navLabels = document.querySelectorAll('[data-aue-prop$="_label"]');

  navLabels.forEach(label => {
    label.addEventListener("click", () => {
      const labelProp = label.getAttribute("data-aue-prop");
      const navPrefix = labelProp.split("_")[0]; // e.g., "nav1"

      // Toggle all related buttons and icons
      for (let i = 1; i <= 3; i++) {
        const labelSelector = `[data-aue-prop="${navPrefix}_item${i}_label"] a.button`;
        const iconSelector = `[data-aue-prop="${navPrefix}_item${i}_icon"]`;

        const button = document.querySelector(labelSelector);
        const icon = document.querySelector(iconSelector);

        if (button) button.classList.toggle("active");
        if (icon) icon.classList.toggle("active");
      }
    });
  });
});
