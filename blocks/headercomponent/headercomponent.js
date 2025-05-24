<script>
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.headercomponent');
    const placeholder = header.querySelector('[data-aue-prop="search_placeholder"]');
    const icon = header.querySelector('[data-aue-prop="search_icon"]');

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
