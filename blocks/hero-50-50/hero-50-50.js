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

  const cta2Link = document.querySelector('a[href="' + cta2Url + '"]');
  const cta2Label = document.querySelector('[data-aue-prop="textContent_ctaText2"]');

  if (cta2Link && cta2Label) {
    const button2 = document.createElement("a");
    button2.href = cta2Url;
    button2.textContent = cta2Text;
    button2.className = "hero-button";

    // Replace both the link and the label with the new button
    cta2Label.replaceWith(button2);
    cta2Link.remove();
  }

  const heroContent = document.querySelector(".hero-content");
  if (heroContent && buttonContainer.children.length > 0) {
    heroContent.appendChild(buttonContainer);
  }
});
