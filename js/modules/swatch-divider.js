(function () {
  function createDivider(el) {
    if (el.dataset.swatchReady === 'true') return;
    el.dataset.swatchReady = 'true';
    el.classList.add('swatch-divider');
    el.innerHTML = `
      <span class="swatch-divider__line"></span>
      <span class="swatch-divider__chips" aria-hidden="true">
        <span class="swatch-divider__chip" style="background: var(--swatch-1);"></span>
        <span class="swatch-divider__chip" style="background: var(--swatch-2);"></span>
        <span class="swatch-divider__chip" style="background: var(--swatch-3);"></span>
        <span class="swatch-divider__chip" style="background: var(--swatch-4);"></span>
        <span class="swatch-divider__chip" style="background: var(--swatch-5);"></span>
        <span class="swatch-divider__chip" style="background: var(--swatch-6);"></span>
      </span>
      <span class="swatch-divider__line swatch-divider__line--right"></span>
    `;
  }

  function init() {
    document.querySelectorAll('.js-swatch-divider').forEach(createDivider);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
