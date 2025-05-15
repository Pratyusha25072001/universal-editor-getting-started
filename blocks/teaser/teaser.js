export default function decorate(block) {
    const image = block.querySelector('img');
    const heading = block.querySelector('h2');
    const paragraph = block.querySelector('p');
    const link = block.querySelector('a');
  
    if (image) {
      image.setAttribute('loading', 'lazy');
    }
  
    if (link) {
      link.setAttribute('target', '_blank');
    }
  
    // Optional: Add animation or interactivity
    block.classList.add('teaser-loaded');
  }
  