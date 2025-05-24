<script>
  function attachNavListeners() {
    const navLabels = document.querySelectorAll('[data-aue-prop$="_label"]');

    navLabels.forEach(label => {
      if (label.dataset.listenerAttached) return;

      label.addEventListener("click", () => {
        const labelProp = label.getAttribute("data-aue-prop");
        const navPrefix = labelProp.split("_")[0];

        // Toggle label items
        const navItems = document.querySelectorAll(`[data-aue-prop^="${navPrefix}_item"][data-aue-prop$="_label"]`);
        navItems.forEach(item => item.classList.toggle("active"));

        // Toggle icon items
        const navIcons = document.querySelectorAll(`[data-aue-prop^="${navPrefix}_item"][data-aue-prop$="_icon"]`);
        navIcons.forEach(icon => icon.classList.toggle("active"));
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
