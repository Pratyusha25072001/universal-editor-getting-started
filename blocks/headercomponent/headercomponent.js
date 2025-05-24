document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    const label = event.target.closest('[data-aue-prop$="_label"]');
    if (!label) return;

    const labelProp = label.getAttribute("data-aue-prop");
    console.log("Clicked:", labelProp); // ✅ Log the clicked label

    const navPrefix = labelProp.split("_")[0];

    const navItems = document.querySelectorAll(`[data-aue-prop^="${navPrefix}_item"]`);
    navItems.forEach(item => {
      item.classList.toggle("active");
    });
  });
});
