<script>
  function attachNavListeners() {
    const navLabels = document.querySelectorAll('[data-aue-prop$="_label"]');

    navLabels.forEach(label => {
      if (label.dataset.listenerAttached) return;

      label.addEventListener("click", () => {
        const labelProp = label.getAttribute("data-aue-prop");
        const navPrefix = labelProp.split("_")[0]; // e.g., "nav1"

        // Select all items that start with navX_item and end with _label or _icon
        const allItems = document.querySelectorAll(`[data-aue-prop^="${navPrefix}_item"]`);

        allItems.forEach(item => {
          item.classList.toggle("active");
        });
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


