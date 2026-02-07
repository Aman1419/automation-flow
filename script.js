(function () {
  'use strict';

  const DEBOUNCE_MS = 300;

  /**
   * Creates a debounced function that delays invoking fn until after wait ms
   * have elapsed since the last time the debounced function was invoked.
   * @param {Function} fn - Function to debounce
   * @param {number} wait - Delay in milliseconds
   * @returns {Function} Debounced function
   */
  function debounce(fn, wait) {
    let timeoutId = null;
    return function (...args) {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
        timeoutId = null;
      }, wait);
    };
  }

  function init() {
    const input = document.getElementById('main-input');
    const outputEl = document.getElementById('output-value');

    if (!input || !outputEl) return;

    function updateOutput(value) {
      const trimmed = (value || '').trim();
      outputEl.textContent = trimmed || '—';
      outputEl.classList.toggle('empty', !trimmed);
    }

    const handleInput = debounce(function () {
      const value = input.value;
      updateOutput(value);
      // Optional: dispatch custom event so other scripts can react
      window.dispatchEvent(new CustomEvent('debouncedInput', { detail: { value } }));
    }, DEBOUNCE_MS);

    input.addEventListener('input', handleInput);
    input.addEventListener('change', handleInput);

    // Show initial state
    updateOutput(input.value);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
