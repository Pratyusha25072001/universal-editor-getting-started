document.addEventListener("DOMContentLoaded", function () {
  // --- Navigation Toggle Logic ---
  const navLabels = document.querySelectorAll('[data-aue-prop$="_label"]');

  navLabels.forEach(label => {
    label.addEventListener("click", () => {
      const labelProp = label.getAttribute("data-aue-prop");
      const navPrefix = labelProp.split("_")[0]; // e.g., "nav1"

      for (let i = 1; i <= 3; i++) {
        const button = document.querySelector(`[data-aue-prop="${navPrefix}_item${i}_label"] a.button`);
        const icon = document.querySelector(`[data-aue-prop="${navPrefix}_item${i}_icon"]`);

        if (button) button.classList.toggle("active");
        if (icon) icon.classList.toggle("active");
      }
    });
  });

  // --- Search Icon Toggle Logic ---
  const searchIcon = document.querySelector('[data-aue-prop="search_icon"]');
  let isSearchActive = false;

  if (searchIcon) {
    const parent = searchIcon.closest("p");

    // Create the input element
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search...";
    searchInput.classList.add("search-input");
    searchInput.style.display = "none";

    // Create the cross icon
    const crossIcon = document.createElement("img");
    crossIcon.src = "/content/dam/universal-editor-getting-started-site/header/cross.svg"; // Replace with your cross icon path
    crossIcon.style.display = "none";
    crossIcon.classList.add("cross-icon");

    // Insert input and cross icon
    parent.appendChild(searchInput);
    parent.appendChild(crossIcon);

    searchIcon.addEventListener("click", () => {
      isSearchActive = true;
      searchIcon.style.display = "none";
      crossIcon.style.display = "inline";
      searchInput.style.display = "inline";
      searchInput.focus();
    });

    crossIcon.addEventListener("click", () => {
      isSearchActive = false;
      searchIcon.style.display = "inline";
      crossIcon.style.display = "none";
      searchInput.style.display = "none";
      searchInput.value = "";
    });
  }
});
