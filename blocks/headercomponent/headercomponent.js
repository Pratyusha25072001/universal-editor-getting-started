document.addEventListener("DOMContentLoaded", function () {
  const searchLabel = document.querySelector('[data-aue-prop="search_placeholder"]');

  // Create search icon button
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "icon-search";
  toggleBtn.id = "searchToggle";
  toggleBtn.setAttribute("aria-label", "Toggle Search");

  // Create input field
  const input = document.createElement("input");
  input.type = "text";
  input.id = "searchInput";
  input.className = "search-input";
  input.placeholder = "Type to search...";
  input.style.display = "none";

  // Insert after the <p> tag
  searchLabel.insertAdjacentElement("afterend", toggleBtn);
  toggleBtn.insertAdjacentElement("afterend", input);

  // Toggle behavior
  toggleBtn.addEventListener("click", () => {
    const isSearch = toggleBtn.classList.contains("icon-search");

    if (isSearch) {
      toggleBtn.classList.remove("icon-search");
      toggleBtn.classList.add("icon-close");
      input.style.display = "block";
      input.focus();
    } else {
      toggleBtn.classList.remove("icon-close");
      toggleBtn.classList.add("icon-search");
      input.style.display = "none";
      input.value = "";
    }
  });
});

