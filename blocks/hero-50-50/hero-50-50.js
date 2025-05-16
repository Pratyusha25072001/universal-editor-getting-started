
export function renderHero5050(data, container) {
  const featureList = data.features.map(f => `<span>• ${f}</span>`).join(" ");
  const buttons = data.buttons.map(b =>
    `<button class="${b.style}">${b.label}</button>`
  ).join("");
  const footer = data.footerLinks.map(f =>
    `<a href="${f.link}">${f.text}</a>`
  ).join(" / ");

  container.classList.add("hero-50-50");
  container.innerHTML = `
    <div class="left">
      <div class="sub-headline">${data.subHeadline}</div>
      <div class="headline">${data.headline}</div>
      <div class="features">${featureList}</div>
      <div class="buttons">${buttons}</div>
      <div class="footer">${footer}</div>
    </div>
    <div class="right">
      <img src="${data.image}" alt="Hero Image"/>
      <div class="badge">${data.badge}</div>
    </div>
  `;
}
