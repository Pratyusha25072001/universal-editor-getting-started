<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Handle top link items
    document.querySelectorAll('[data-aue-prop^="topLink"], [data-aue-prop="joinText"]').forEach((el) => {
      const link = el.parentElement?.nextElementSibling?.querySelector('a');
      if (link) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          window.location.href = link.href; // or use window.open(link.href, '_blank') for new tab
        });
      }
    });

    // Handle nav items
    document.querySelectorAll('[data-aue-prop^="nav"]').forEach((el) => {
      const link = el.nextElementSibling?.querySelector('a');
      if (link) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          window.open(link.href, '_blank'); // or use '_self' for same tab
        });
      }
    });
  });
</script>
