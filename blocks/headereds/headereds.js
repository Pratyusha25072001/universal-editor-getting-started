document.querySelectorAll('[data-aue-prop^="nav"] , [data-aue-prop^="topLink"], [data-aue-prop="joinText"]').forEach((el) => {
  const link = el.nextElementSibling?.querySelector('a');
  if (link) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      window.open(link.href, '_blank'); // or use `_self` if same tab
    });
  }
});

