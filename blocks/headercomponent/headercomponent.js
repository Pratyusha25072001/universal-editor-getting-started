<script>
  function attachNavListeners() {
    const navLabels = document.querySelectorAll('[data-aue-prop$="_label"]');

    navLabels.forEach(label => {
      if (label.dataset.listenerAttached) return;

      label.addEventListener("click", () => {
        const labelProp = label.getAttribute("data-aue-prop");
        const navPrefix = labelProp.split("_")[0]; // e.g., "nav1"

        // Toggle all matching label items
        const labelItems = document.querySelectorAll(`[data-aue-prop^="${navPrefix}_item"][data-aue-prop$="_label"]`);
        labelItems.forEach(item => item.classList.toggle("active"));

        // Toggle all matching icon items
        const iconItems = document.querySelectorAll(`[data-aue-prop^="${navPrefix}_item"][data-aue-prop$="_icon"]`);
        iconItems.forEach(icon => icon.classList.toggle("active"));
      });

      label.dataset.listenerAttached = "true";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    attachNavListeners();

    const observer = new MutationObserver(() => {
      attachNavListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
</script>
