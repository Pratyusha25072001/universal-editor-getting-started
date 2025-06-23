<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[data-aue-prop^="topLink"], [data-aue-prop="joinText"]').forEach((el) => {
      const parentDiv = el.closest('div');
      const nextDiv = parentDiv?.parentElement?.nextElementSibling;
      const link = nextDiv?.querySelector('a');

      if (link) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          window.location.href = link.href;
        });
      } else {
        console.warn('No link found for:', el);
      }
    });
  });
</script>
