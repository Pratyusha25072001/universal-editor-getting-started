document.addEventListener("DOMContentLoaded", () => {
  const topLinks = ["topLink1Text", "topLink2Text", "topLink3Text"];

  topLinks.forEach((prop) => {
    const textElement = document.querySelector(`[data-aue-prop="${prop}"]`);
    const linkElement = textElement?.parentElement?.parentElement?.nextElementSibling?.querySelector("a");

    if (textElement && linkElement) {
      textElement.style.cursor = "pointer";
      textElement.addEventListener("click", () => {
        window.open(linkElement.href, "_blank");
      });
    }
  });
});
