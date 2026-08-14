(function () {
  const services = (window.SITE_DATA && window.SITE_DATA.services) || {};

  function renderTabs() {
    const tabHost = document.getElementById('services-tabs');
    const panelsHost = document.getElementById('services-panels');
    if (!tabHost || !panelsHost || !Object.keys(services).length) return;

    const keys = Object.keys(services);
    tabs = keys.map((key, index) => {
      const item = services[key];
      const isActive = index === 0 ? 'is-active' : '';
      return `<button class="services__tab ${isActive}" type="button" role="tab" aria-selected="${index === 0}" data-tab="${key}">${item.label}</button>`;
    }).join('');
    tabHost.innerHTML = tabs;

    panelsHost.innerHTML = keys.map((key, index) => {
      const item = services[key];
      const activeClass = index === 0 ? 'is-active' : '';
      const cards = item.columns.map((column) => `
        <div class="price-card">
          <div class="price-card__title">
            ${window.Icons && window.Icons.sparkle ? window.Icons.sparkle() : ''}
            <span>${item.label}</span>
          </div>
          ${column.map((service) => `
            <div class="price-row">
              <div class="price-row__meta">
                ${service.image ? `<img class="price-row__image" src="${service.image}" alt="${service.name}" loading="lazy">` : ''}
                <span class="price-row__name">${service.name}</span>
              </div>
              <span class="price-row__value">${service.highlight ? `<span class="price-pill">${service.price}</span>` : service.price}</span>
            </div>
          `).join('')}
        </div>
      `).join('');

      return `
        <div class="services__panel ${activeClass}" role="tabpanel" data-panel="${key}">
          <div class="price-grid">${cards}</div>
          <p class="services__note"><strong>Observação:</strong> ${item.note}</p>
        </div>
      `;
    }).join('');

    tabHost.querySelectorAll('.services__tab').forEach((button) => {
      button.addEventListener('click', () => {
        const activeKey = button.dataset.tab;
        tabHost.querySelectorAll('.services__tab').forEach((tab) => {
          const isSelected = tab === button;
          tab.classList.toggle('is-active', isSelected);
          tab.setAttribute('aria-selected', String(isSelected));
        });

        panelsHost.querySelectorAll('.services__panel').forEach((panel) => {
          panel.classList.toggle('is-active', panel.dataset.panel === activeKey);
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderTabs);
  } else {
    renderTabs();
  }
})();
