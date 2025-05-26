document.addEventListener("DOMContentLoaded", function () {
  const navLabels = document.querySelectorAll('[data-aue-prop$="_label"]');

  navLabels.forEach(label => {
    label.addEventListener("click", () => {
      const labelProp = label.getAttribute("data-aue-prop");
      const navPrefix = labelProp.split("_")[0]; // e.g., "nav1"

      for (let i = 1; i <= 3; i++) {
        const button = document.querySelector(`[data-aue-prop="${navPrefix}_item${i}_label"] a.button`);
        const icon = document.querySelector(`[data-aue-prop="${navPrefix}_item${i}_icon"]`);

        if (button) button.classList.toggle("active");
        if (icon) icon.classList.toggle("active");
      }
    });
  });
});



