<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Handle top link items
    document.querySelectorAll('[data-aue-prop^="topLink"], [data-aue-prop="joinText"]').forEach((el) => {
      const link = el.parentElement?.nextElementSibling?.querySelector('a');
      if (link) {
        el.addEventListener('click', () => {
          window.location.href = link.href; // or use window.open(link.href, '_blank') for new tab
        });
      }
    });
  });
</script>
