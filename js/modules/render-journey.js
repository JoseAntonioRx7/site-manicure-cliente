(function () {
  const journey = (window.SITE_DATA && window.SITE_DATA.journey) || [];

  const labels = {
    meta: 'Meta',
    viagem: 'Viagem',
    encontro: 'Encontro',
    participacao: 'Participação'
  };

  function renderFilters() {
    const host = document.getElementById('journey-filters');
    if (!host) return;

    const filters = [
      { key: 'all', label: 'Tudo' },
      ...Object.keys(labels).map((key) => ({ key, label: labels[key] }))
    ];

    host.innerHTML = filters.map((filter, index) => `
      <button type="button" class="journey-filter ${index === 0 ? 'is-active' : ''}" data-filter="${filter.key}">${filter.label}</button>
    `).join('');

    host.querySelectorAll('.journey-filter').forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        host.querySelectorAll('.journey-filter').forEach((item) => {
          item.classList.toggle('is-active', item === button);
        });

        const timeline = document.getElementById('journey-timeline');
        if (!timeline) return;

        const items = timeline.querySelectorAll('.timeline-item');
        items.forEach((item) => {
          const shouldShow = filter === 'all' || item.dataset.category === filter;
          item.style.display = shouldShow ? '' : 'none';
        });
      });
    });
  }

  function renderTimeline() {
    const host = document.getElementById('journey-timeline');
    if (!host) return;

    host.innerHTML = journey.map((item) => `
      <li class="timeline-item" data-category="${item.category}">
        <span class="timeline-item__date">${item.date}</span>
        <span class="timeline-item__tag">${labels[item.category] || item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </li>
    `).join('');
  }

  function init() {
    renderFilters();
    renderTimeline();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
