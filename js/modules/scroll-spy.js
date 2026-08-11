(function () {
  function initScrollSpy() {
    const sections = [...document.querySelectorAll('main section[id]')];
    const navLinks = [...document.querySelectorAll('.main-nav a, .mobile-nav a')];
    if (!sections.length || !navLinks.length) return;

    const setActive = (id) => {
      navLinks.forEach((link) => {
        const match = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('is-active', match);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]) {
        setActive(visible[0].target.id);
      }
    }, {
      threshold: [0.2, 0.5, 0.8],
      rootMargin: '-10% 0px -45% 0px'
    });

    sections.forEach((section) => observer.observe(section));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollSpy);
  } else {
    initScrollSpy();
  }
})();
