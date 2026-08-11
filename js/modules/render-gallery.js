(function () {
  const gallery = (window.SITE_DATA && window.SITE_DATA.gallery) || [];

  function buildPlaceholder(label, hint) {
    const isIcon = !!window.Icons && !!window.Icons.camera;
    return `
      <div class="placeholder-frame">
        ${isIcon ? window.Icons.camera() : ''}
        <span class="placeholder-frame__label">${label}</span>
        <span class="placeholder-frame__hint">${hint}</span>
      </div>
    `;
  }

  function renderGallery() {
    const host = document.getElementById('gallery-grid');
    if (!host) return;

    host.innerHTML = gallery.map((item) => {
      const imageMarkup = item.image
        ? `<img src="${item.image}" alt="${item.alt || 'Trabalho do estúdio'}" loading="lazy">`
        : buildPlaceholder('Foto do trabalho', 'Adicione uma imagem real para este card');

      return `
        <button class="gallery__item ${item.tall ? 'gallery__item--tall' : ''}" type="button" data-gallery-id="${item.id}" aria-label="Ampliar imagem ${item.alt || 'do portfólio'}">
          ${imageMarkup}
        </button>
      `;
    }).join('');

    host.querySelectorAll('.gallery__item').forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.dataset.galleryId;
        const item = gallery.find((entry) => entry.id === id);
        if (!item) return;

        const lightbox = document.getElementById('lightbox');
        const body = document.getElementById('lightbox-body');
        if (!lightbox || !body) return;

        body.innerHTML = item.image
          ? `<img src="${item.image}" alt="${item.alt || 'Imagem ampliada'}" style="width:100%;height:100%;object-fit:cover;">`
          : buildPlaceholder('Imagem em destaque', 'Substitua por uma foto do portfólio');

        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderGallery);
  } else {
    renderGallery();
  }
})();
