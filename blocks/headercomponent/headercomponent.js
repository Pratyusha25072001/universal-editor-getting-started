<script>
document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.querySelector('[data-aue-prop="search_placeholder"]');
    const icon = document.querySelector('[data-aue-prop="search_icon"]');
    const header = document.querySelector('.headercomponent');

    // Create input field
    const input = document.createElement("input");
    input.type = "text";
    input.className = "search-input";
    input.placeholder = "Search...";
    header.appendChild(input);

    // Toggle function
    function toggleSearch() {
        header.classList.toggle("search-active");
    }

    placeholder.addEventListener("click", toggleSearch);
    icon.addEventListener("click", toggleSearch);
});
</script>
