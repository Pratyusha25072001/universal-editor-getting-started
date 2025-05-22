document.addEventListener("DOMContentLoaded", function () {
  const navLabel = document.querySelector('[data-aue-prop="nav1_label"]');

  if (navLabel) {
    navLabel.addEventListener("click", () => {
      const parentDiv = navLabel.parentElement;
      const navItems = parentDiv.querySelectorAll('[data-aue-prop^="nav1_item"]');

      navItems.forEach(item => {
        const currentDisplay = item.style.display;
        item.style.display = currentDisplay === "none" || !currentDisplay ? "block" : "none";
      });

      // Optional: toggle icon visibility too
      const icons = parentDiv.querySelectorAll('img[data-aue-prop^="nav1_item"]');
      icons.forEach(icon => {
        const currentDisplay = icon.style.display;
        icon.style.display = currentDisplay === "none" || !currentDisplay ? "inline" : "none";
      });
    });
  }
});
