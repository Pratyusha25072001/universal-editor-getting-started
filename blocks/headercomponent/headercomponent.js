document.addEventListener("DOMContentLoaded", function () {
  const navLabels = document.querySelectorAll(".nav-label");

  navLabels.forEach(label => {
    label.addEventListener("click", () => {
      const navItems = label.nextElementSibling;

      if (navItems && navItems.classList.contains("nav-items")) {
        navItems.classList.toggle("show");
      }
    });
  });
});
