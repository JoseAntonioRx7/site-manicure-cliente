(function () {
  function applyConfig() {
    const config = (window.SITE_DATA && window.SITE_DATA.config) || {};

    document.querySelectorAll('[data-config-href]').forEach((element) => {
      const key = element.dataset.configHref;
      const value = config[key];

      if (!value) {
        if (element.dataset.configOptional === 'whatsapp') {
          element.style.display = 'none';
        } else {
          element.setAttribute('href', '#');
        }
        return;
      }

      element.setAttribute('href', value);
    });

    document.querySelectorAll('[data-config-text]').forEach((element) => {
      const key = element.dataset.configText;
      const value = config[key];
      if (value) {
        element.textContent = value;
      }
    });

    const brand = document.querySelector('.brand__mark');
    if (brand && config.businessName) {
      brand.textContent = config.businessName.split(' ')[0] || 'Rubi';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConfig);
  } else {
    applyConfig();
  }
})();
