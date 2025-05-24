<script>
document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.querySelector('[data-aue-prop="search_placeholder"]');
    const icon = document.querySelector('[data-aue-prop="search_icon"]');
    const container = document.querySelector(".headercomponent");

    // Create the input dynamically
    const input = document.createElement("input");
    input.type = "text";
    input.className = "search-input";
    input.placeholder = "Type to search...";
    container.appendChild(input);

    let isOpen = false;

    function toggleSearch() {
        isOpen = !isOpen;
        input.style.display = isOpen ? "block" : "none";
        icon.classList.toggle("cross-icon", isOpen);
    }

    placeholder.addEventListener("click", toggleSearch);
    icon.addEventListener("click", toggleSearch);
});
</script>
