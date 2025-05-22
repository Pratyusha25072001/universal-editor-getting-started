document.addEventListener("DOMContentLoaded", function () {
    const navLabel = document.querySelector('[data-aue-prop="nav1_label"]');
    const navContainer = navLabel?.closest("div");

    if (navLabel && navContainer) {
        navLabel.style.cursor = "pointer"; // Make it look clickable

        navLabel.addEventListener("click", function () {
            navContainer.classList.toggle("nav-dropdown-active");
        });
    }
});
