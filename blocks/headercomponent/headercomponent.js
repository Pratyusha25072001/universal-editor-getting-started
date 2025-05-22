document.addEventListener("DOMContentLoaded", function () {
  const navLabel = document.querySelector('[data-aue-prop="nav1_label"]');

  if (navLabel) {
    navLabel.addEventListener("click", () => {
      const parent = navLabel.parentElement;
      const items = parent.querySelectorAll('[data-aue-prop^="nav1_item"]');

      items.forEach(item => {
        item.classList.toggle("show");
      });
    });
  }
});

