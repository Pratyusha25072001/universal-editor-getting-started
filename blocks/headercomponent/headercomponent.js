document.addEventListener("DOMContentLoaded", function () {
  const navLabel = document.querySelector('[data-aue-prop="nav1_label"]');
  const itemLabel = document.querySelector('[data-aue-prop="nav1_item1_label"]');
  const itemIcon = document.querySelector('[data-aue-prop="nav1_item1_icon"]');

  if (navLabel && itemLabel && itemIcon) {
    // Initially hide the label and icon
    itemLabel.style.display = "none";
    itemIcon.closest("p").style.display = "none";

    // Move icon before label
    const iconWrapper = itemIcon.closest("picture") || itemIcon;
    itemLabel.parentElement.insertBefore(iconWrapper, itemLabel);

    // Toggle visibility on click
    navLabel.addEventListener("click", () => {
      const isVisible = itemLabel.style.display === "block";

      itemLabel.style.display = isVisible ? "none" : "block";
      itemIcon.closest("p").style.display = isVisible ? "none" : "block";
    });
  }
});
