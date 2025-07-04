// NAV items (already working)
document.querySelectorAll('[data-aue-prop^="nav"]').forEach((el) => {
  const link = el.nextElementSibling?.querySelector('a');
  if (link) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      window.open(link.href, '_blank');
    });
  }
});

// TOP LINKS (Sign In, Pay Bill, etc.)
document.querySelectorAll('[data-aue-prop^="topLink"]').forEach((el) => {
  const outerDiv = el.closest('div'); // <div><p data-aue-prop...></p></div>
  const containerDiv = outerDiv?.parentElement; // wrapping <div>
  const siblingDiv = containerDiv?.nextElementSibling; // next <div>
  const link = siblingDiv?.querySelector('a');
  if (link) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      window.open(link.href, '_blank');
    });
  }
});

// JOIN AAA
const joinTextEl = document.querySelector('[data-aue-prop="joinText"]');
const joinOuterDiv = joinTextEl?.closest('div');
const joinContainer = joinOuterDiv?.parentElement;
const joinSibling = joinContainer?.nextElementSibling;
const joinLink = joinSibling?.querySelector('a');

if (joinTextEl && joinLink) {
  joinTextEl.style.cursor = 'pointer';
  joinTextEl.addEventListener('click', () => {
    window.open(joinLink.href, '_blank');
  });
}
