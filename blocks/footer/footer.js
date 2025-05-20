import { getMetadata } from '../../scripts/aem.js';

/**
 * Loads and decorates the footer using only JavaScript and authorable metadata
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  block.textContent = '';

  // Simulated metadata (replace with actual getMetadata or JSON fetch)
  const footerData = {
    mainLogo: getMetadata('footer-logo') || 'https://via.placeholder.com/150x50?text=Logo',
    links: [
      { text: getMetadata('link1-text') || 'Home', href: getMetadata('link1-url') || '/' },
      { text: getMetadata('link2-text') || 'About', href: getMetadata('link2-url') || '/about' },
      { text: getMetadata('link3-text') || 'Services', href: getMetadata('link3-url') || '/services' },
      { text: getMetadata('link4-text') || 'Contact', href: getMetadata('link4-url') || '/contact' },
    ],
    partnerLogos: [
      getMetadata('partner1-logo') || 'https://via.placeholder.com/40?text=L1',
      getMetadata('partner2-logo') || 'https://via.placeholder.com/40?text=L2',
    ],
    footerText: getMetadata('footer-text') || '© 2025 Your Company. All rights reserved.'
  };

  // Create footer container
  const footer = document.createElement('div');
  footer.style.backgroundColor = '#222';
  footer.style.color = '#fff';
  footer.style.padding = '30px';
  footer.style.display = 'flex';
  footer.style.flexDirection = 'column';
  footer.style.alignItems = 'center';
  footer.style.fontFamily = 'Arial, sans-serif';

  // Main logo
  const logo = document.createElement('img');
  logo.src = footerData.mainLogo;
  logo.alt = 'Main Logo';
  logo.style.marginBottom = '20px';
  footer.appendChild(logo);

  // Links
  const linkList = document.createElement('ul');
  linkList.style.listStyle = 'none';
  linkList.style.display = 'flex';
  linkList.style.gap = '20px';
  linkList.style.padding = '0';
  linkList.style.margin = '0 0 20px 0';

  footerData.links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    a.style.color = '#fff';
    a.style.textDecoration = 'none';
    a.style.fontSize = '14px';
    li.appendChild(a);
    linkList.appendChild(li);
  });

  footer.appendChild(linkList);

  // Partner logos
  const logoContainer = document.createElement('div');
  logoContainer.style.display = 'flex';
  logoContainer.style.gap = '10px';
  logoContainer.style.marginBottom = '20px';

  footerData.partnerLogos.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Partner Logo';
    img.style.width = '40px';
    img.style.height = '40px';
    logoContainer.appendChild(img);
  });

  footer.appendChild(logoContainer);

  // Footer text
  const footerText = document.createElement('p');
  footerText.textContent = footerData.footerText;
  footerText.style.fontSize = '12px';
  footerText.style.color = '#aaa';
  footer.appendChild(footerText);

  // Append to block
  block.appendChild(footer);
}
