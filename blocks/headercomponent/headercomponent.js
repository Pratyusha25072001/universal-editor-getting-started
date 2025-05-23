let isSearchActive = false;

function toggleSearch() {
  const placeholder = document.querySelector('[data-aue-prop="search_placeholder"]');
  const icon = document.querySelector('[data-aue-prop="search_icon"]');
  const input = document.getElementById('searchInput');

  if (!isSearchActive) {
    placeholder.textContent = '✖'; // Cross icon
    input.style.display = 'block';
  } else {
    placeholder.textContent = 'Search';
    input.style.display = 'none';
    input.value = '';
  }

  isSearchActive = !isSearchActive;
}
