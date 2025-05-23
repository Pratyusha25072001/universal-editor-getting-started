<script>
document.addEventListener("DOMContentLoaded", function () {
  const searchLabel = document.querySelector('[data-aue-prop="search_placeholder"]');
  const searchIcon = document.querySelector('[data-aue-prop="search_icon"]');

  if (searchLabel && searchIcon) {
    const iconParent = searchIcon.closest("p");
    const labelParent = searchLabel.closest("p");

    // Move the icon before the label
    if (iconParent && labelParent && labelParent.parentNode) {
      labelParent.parentNode.insertBefore(iconParent, labelParent);
    }
  }
});
</script>
