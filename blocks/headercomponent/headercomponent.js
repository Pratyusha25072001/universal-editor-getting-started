<script>
document.addEventListener("DOMContentLoaded", function () {
  const placeholder = document.querySelector('[data-aue-prop="search_placeholder"]');
  const icon = document.querySelector('[data-aue-prop="search_icon"]');

  // Create the input field dynamically
  const input = document.createElement("input");
  input.type = "text";
  input.id = "dynamicSearchInput";
  input.placeholder = "Type to search...";
  document.querySelector(".headercomponent").appendChild(input);

  let isActive = false;

  function toggleSearch() {
    const inputField = document.getElementById("dynamicSearchInput");

    if (!isActive) {
      placeholder.textContent = "✖";
      inputField.style.display = "block";
      inputField.focus();
    } else {
      placeholder.textContent = "Search";
      inputField.style.display = "none";
      inputField.value = "";
    }

    isActive = !isActive;
  }

  placeholder.addEventListener("click", toggleSearch);
  icon.addEventListener("click", toggleSearch);
});
</script>
