document.addEventListener("DOMContentLoaded", function () {
  const cta2Link = document.querySelector('[data-aue-prop="textContent_cta2"] a');
  const cta2Label = document.querySelector('[data-aue-prop="textContent_ctaText2"]');

  if (cta2Link && cta2Label) {
    const mergedButton = document.createElement("a");
    mergedButton.href = cta2Link.href;
    mergedButton.textContent = cta2Label.textContent;
    mergedButton.className = "hero-button";

    // Replace the <p> with the new button
    cta2Label.replaceWith(mergedButton);

    // Remove the original link
    cta2Link.remove();
  }
});
