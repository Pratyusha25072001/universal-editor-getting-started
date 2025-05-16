document.addEventListener("DOMContentLoaded", function () {
  const cta1Url = "{{ textContent_cta }}";
  const cta1Text = "{{ textContent_ctaText }}";
  const cta2Url = "{{ textContent_cta2 }}";
  const cta2Text = "{{ textContent_ctaText2 }}";

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "hero-buttons";

  if (cta1Url && cta1Text) {
    const button1 = document.createElement("a");
    button1.href = cta1Url;
    button1.textContent = cta1Text;
    button1.className = "hero-button";
    buttonContainer.appendChild(button1);
  }

  if (cta2Url && cta2Text) {
    const button2 = document.createElement("a");
    button2.href = cta2Url;
    button2.textContent = cta2Text;
    button2.className = "hero-button";
    buttonContainer.appendChild(button2);
  }

  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.appendChild(buttonContainer);
  }
});
