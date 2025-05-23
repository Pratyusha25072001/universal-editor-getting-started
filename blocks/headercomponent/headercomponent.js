<script>
document.addEventListener("DOMContentLoaded", function () {
  const placeholder = document.querySelector('[data-aue-prop="search_placeholder"]');
  const icon = document.querySelector('[data-aue-prop="search_icon"]');

  // Create the input field
  const input = document.createElement("input");
  input.type = "text";
  input.className = "search-input";
  input.placeholder = "Type to search...";

  // Append input to the headercomponent
  const container = document.querySelector(".headercomponent");
  container.appendChild(input);

  let isActive = false;

  function toggleSearch() {
    if (!isActive) {
      placeholder.textContent = "✖";
      input.style.display = "block";
      input.focus();
    } else {
      placeholder.textContent = "Search";
      input.style.display = "none";
      input.value = "";
    }
    isActive = !isActive;
  }

  placeholder.addEventListener("click", toggleSearch);
  icon.addEventListener("click", toggleSearch);
});
</script>
