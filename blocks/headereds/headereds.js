<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Handle nav items
    document.querySelectorAll('[data-aue-prop^="nav"]').forEach((el) => {
      const link = el.parentElement?.querySelector('a');
      if (link) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          window.open(link.href, '_blank'); // or '_self'
        });
      }
    });

    // Handle top link items
    document.querySelectorAll('[data-aue-prop^="topLink"], [data-aue-prop="joinText"]').forEach((el) => {
      const link = el.parentElement?.nextElementSibling?.querySelector('a');
      if (link) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          window.open(link.href, '_blank'); // or '_self'
        });
      }
    });
  });
</script>
