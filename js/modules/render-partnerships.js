(function () {
  const partnerships = (window.SITE_DATA && window.SITE_DATA.partnerships) || [];

  function renderPartnerships() {
    const host = document.getElementById('partners-grid');
    if (!host) return;

    host.innerHTML = partnerships.map((item) => `
      <div class="partner-card">
        <div class="placeholder-frame">
          ${window.Icons && window.Icons.award ? window.Icons.award() : ''}
          <span class="placeholder-frame__label">${item.name}</span>
          <span class="placeholder-frame__hint">Parceiro</span>
        </div>
      </div>
    `).join('');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPartnerships);
  } else {
    renderPartnerships();
  }
})();
