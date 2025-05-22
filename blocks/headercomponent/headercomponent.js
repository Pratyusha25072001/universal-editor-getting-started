document.addEventListener("DOMContentLoaded", function () {
  const navLabel = document.querySelector('[data-aue-prop="nav1_label"]');

  if (!navLabel) {
    console.error("Nav label not found!");
    return;
  }

  console.log("Nav label found:", navLabel);

  navLabel.addEventListener("click", () => {
    const parent = navLabel.parentElement;
    if (!parent) {
      console.error("Parent element not found!");
      return;
    }

    const items = parent.querySelectorAll('[data-aue-prop^="nav1_item"]');
    if (items.length === 0) {
      console.warn("No nav items found!");
    }

    items.forEach(item => {
      item.classList.toggle("show");
      console.log("Toggled item:", item);
    });
  });
});
