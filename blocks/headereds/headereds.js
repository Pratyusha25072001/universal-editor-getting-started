document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector(".search-bar");
  const searchInput = document.querySelector(".search-bar input");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query !== "") {
        // Redirect to search results page (update the URL if needed)
        window.location.href = `/search?query=${encodeURIComponent(query)}`;
      }
    });
  }
});
