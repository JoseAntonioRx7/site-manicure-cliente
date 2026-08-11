(function () {
  window.addEventListener('DOMContentLoaded', () => {
    const yearNode = document.getElementById('current-year');
    if (yearNode) {
      yearNode.textContent = new Date().getFullYear();
    }

    const instagramLinks = document.querySelectorAll('[data-config-href="instagramUrl"]');
    instagramLinks.forEach((link) => {
      if (!link.getAttribute('href') || link.getAttribute('href') === '#') {
        link.setAttribute('href', 'https://instagram.com');
      }
    });

    const allIconButtons = document.querySelectorAll('.header-actions .icon-btn span, .mobile-nav .icon-btn span');
    allIconButtons.forEach((icon) => {
      if (window.Icons && window.Icons.instagram && !icon.innerHTML.trim()) {
        icon.innerHTML = window.Icons.instagram();
      }
    });
  });
})();
