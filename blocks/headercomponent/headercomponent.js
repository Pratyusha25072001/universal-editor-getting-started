<script>
  document.addEventListener("DOMContentLoaded", function () {
    const navLabels = document.querySelectorAll('[data-aue-prop$="_label"]');

    navLabels.forEach(label => {
      label.addEventListener("click", () => {
        const labelProp = label.getAttribute("data-aue-prop");
        const navPrefix = labelProp.split("_")[0]; // e.g., "nav1", "nav2", etc.

        // Toggle <a class="button"> inside label containers
        const navButtons = document.querySelectorAll(
          `[data-aue-prop^="${navPrefix}_item"][data-aue-prop$="_label"] a.button`
        );
        navButtons.forEach(button => {
          button.classList.toggle("active");
        });

        // Toggle icons
        const navIcons = document.querySelectorAll(
          `[data-aue-prop^="${navPrefix}_item"][data-aue-prop$="_icon"]`
        );
        navIcons.forEach(icon => {
          icon.classList.toggle("active");
        });
      });
    });
  });
</script>
