// Handle nav links
document.querySelectorAll('[data-aue-prop^="nav"]').forEach((el) => {
  const link = el.nextElementSibling?.querySelector('a');
  if (link) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      window.open(link.href, '_blank'); // or '_self' for same tab
    });
  }
});

// Handle top link redirects (Sign In, Pay Bill, etc.)
document.querySelectorAll('[data-aue-prop^="topLink"]').forEach((el) => {
  const link = el.parentElement?.nextElementSibling?.querySelector('a');
  if (link) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      window.open(link.href, '_blank'); // or '_self'
    });
  }
});

// Handle Join AAA button
const joinBtn = document.querySelector('[data-aue-prop="joinText"]');
const joinLink = joinBtn?.parentElement?.nextElementSibling?.querySelector('a');
if (joinBtn && joinLink) {
  joinBtn.style.cursor = 'pointer';
  joinBtn.addEventListener('click', () => {
    window.open(joinLink.href, '_blank'); // or '_self'
  });
}
