export default function decorateFooter(block) {
    const socialLinks = block.querySelectorAll('.footer-social a img');
    socialLinks.forEach((img) => {
      img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.2)';
      });
      img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
      });
    });
  
    const footerLinks = block.querySelectorAll('.footer-links a');
    footerLinks.forEach((link) => {
      link.setAttribute('target', '_blank'); // Example: open links in new tab
    });
  
    // Optional: Collapse footer on mobile
    const toggles = block.querySelectorAll('.footer-section-toggle');
    toggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const section = toggle.closest('.footer-section');
        section.classList.toggle('collapsed');
      });
    });
  }
  