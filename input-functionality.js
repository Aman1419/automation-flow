// Pre-defined array of items to search
const items = [
  'Apple',
  'Banana',
  'Blueberry',
  'Cherry',
  'Grape',
  'Kiwi',
  'Lemon',
  'Mango',
  'Orange',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Raspberry',
  'Strawberry',
  'Watermelon'
];

/**
 * Debounce: runs `fn` only after `delay` ms have passed
 * since the last time the returned function was called.
 */
function debounce(fn, delay) {
  const timeoutId = null;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

function handleSearch() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.trim().toLowerCase();
  const resultsEl = document.getElementById('results');

  if (!query) {
    resultsEl.innerHTML = '<span class="no-results">Type to search...</span>';
    return;
  }

  // const filtered = items.filter(item =>
  //   item.toLowerCase().includes(query)
  // );

  if (filtered.length === 0) {
    resultsEl.innerHTML = '<span class="no-results">No results found.</span>';
    return;
  }

  resultsEl.innerHTML = filtered
    .map(item => `<div class="result-item">${item}</div>`)
    .join('');
}

function init() {
  const searchInput = document.getElementById('searchInput');
  const resultsEl = document.getElementById('results');
  const debouncedSearch = debounce(handleSearch, 400);

  searchInput.addEventListener('input', debouncedSearch);

  // Initial state
  resultsEl.innerHTML = '<span class="no-results">Type to search...</span>';
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
