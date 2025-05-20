export default function decorate(block) {
    const model = block.blockModel?.samplefooter;
  
    if (!model) {
      console.warn('No model data found for samplefooter');
      return;
    }
  
    // Clear existing content
    block.textContent = '';
  
    // Footer container
    const footer = document.createElement('div');
    footer.style.backgroundColor = '#222';
    footer.style.color = '#fff';
    footer.style.padding = '30px';
    footer.style.textAlign = 'center';
    footer.style.fontFamily = 'Arial, sans-serif';
  
    // Title
    if (model.textContent_title) {
      const title = document.createElement('h3');
      title.textContent = model.textContent_title;
      title.style.marginBottom = '10px';
      footer.appendChild(title);
    }
  
    // Logo
    if (model.image) {
      const logo = document.createElement('img');
      logo.src = model.image;
      logo.alt = model.imageAlt || 'Logo';
      logo.style.marginBottom = '20px';
      logo.style.maxWidth = '150px';
      footer.appendChild(logo);
    }
  
    // Main rich text
    if (model.textContent_text) {
      const mainText = document.createElement('div');
      mainText.innerHTML = model.textContent_text;
      mainText.style.margin = '10px 0';
      footer.appendChild(mainText);
    }
  
    // Extra rich text
    if (model.textContent_extraText) {
      const extraText = document.createElement('div');
      extraText.innerHTML = model.textContent_extraText;
      extraText.style.fontSize = '12px';
      extraText.style.color = '#aaa';
      footer.appendChild(extraText);
    }
  
    // Append to block
    block.appendChild(footer);
  }
  