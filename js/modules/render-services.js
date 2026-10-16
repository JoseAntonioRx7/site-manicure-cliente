(function () {
  const services = (window.SITE_DATA && window.SITE_DATA.services) || {};

  function renderServices() {
    const tabHost = document.getElementById('services-tabs');
    const panelsHost = document.getElementById('services-panels');
    const keys = Object.keys(services);
    if (!tabHost || !panelsHost || !keys.length) return;

    tabHost.innerHTML = keys.map((key, index) => {
      const item = services[key];
      const isActive = index === 0;
      return `<button class="services__tab${isActive ? ' is-active' : ''}" id="services-tab-${key}" type="button" role="tab" aria-selected="${isActive}" aria-controls="services-panel-${key}" data-tab="${key}">${item.label}</button>`;
    }).join('');

    panelsHost.innerHTML = keys.map((key, index) => {
      const item = services[key];
      const isActive = index === 0;
      return `
        <div class="services__panel${isActive ? ' is-active' : ''}" id="services-panel-${key}" role="tabpanel" aria-labelledby="services-tab-${key}" data-panel="${key}">
          <div class="price-grid">
            <div class="price-card">
              <div class="price-card__title">
                ${window.Icons && window.Icons.sparkle ? window.Icons.sparkle() : ''}
                <span>${item.label}</span>
              </div>
              ${item.items.map((service) => `
                <div class="price-row">
                  <div class="price-row__meta">
                    ${service.image ? `<img class="price-row__image" src="${service.image}" alt="${service.name}" loading="lazy">` : ''}
                    <span class="price-row__name">${service.name}</span>
                  </div>
                  <span class="price-row__value${service.price === 'Consultar orçamento' ? ' price-row__value--quote' : ''}">${service.price}</span>
                </div>
              `).join('')}
            </div>
          </div>
          ${item.note ? `<p class="services__note"><strong>Observação:</strong> ${item.note}</p>` : ''}
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
    document.addEventListener('DOMContentLoaded', renderServices);
  } else {
    renderServices();
  }
})();
