// Apply to top links and joinText
const topLinkSelectors = [
  'topLink1Text',
  'topLink2Text',
  'topLink3Text',
  'joinText',
];

// Apply to nav links
const navLinkSelectors = [
  'nav1_text',
  'nav2_text',
  'nav3_text',
  'nav4_text',
  'nav5_text',
  'nav6_text',
  'nav7_text',
];

[...topLinkSelectors, ...navLinkSelectors].forEach((prop) => {
  document.querySelectorAll(`[data-aue-prop="${prop}"]`).forEach((el) => {
    const link = el.parentElement?.nextElementSibling?.querySelector('a');
    if (link) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        window.open(link.href, '_blank'); // or '_self' if you prefer
      });
    }
  });
});
