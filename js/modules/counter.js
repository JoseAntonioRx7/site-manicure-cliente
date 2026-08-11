(function () {
  function animateCounter(el) {
    const target = Number(el.dataset.target || 0);
    const decimals = Number(el.dataset.decimals || 0);
    const duration = 1200;
    const start = performance.now();

    const formatValue = (value) => value.toLocaleString('pt-BR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = target * eased;
      el.textContent = formatValue(nextValue);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = formatValue(target);
      }
    }

    requestAnimationFrame(tick);
  }

  function initCounters() {
    const counters = document.querySelectorAll('.js-counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.4
    });

    counters.forEach((counter) => observer.observe(counter));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounters);
  } else {
    initCounters();
  }
})();
