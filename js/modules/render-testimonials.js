(function () {
  const testimonials = (window.SITE_DATA && window.SITE_DATA.testimonials) || [];

  function renderStars(rating) {
    const stars = Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating;
      return `<span aria-label="${filled ? 'estrela ativa' : 'estrela apagada'}">${window.Icons && window.Icons.star ? window.Icons.star() : '★'}</span>`;
    }).join('');
    return `<div class="testimonial-card__stars" aria-label="Avaliação de ${rating} estrelas">${stars}</div>`;
  }

  function renderTestimonials() {
    const host = document.getElementById('testimonial-track');
    if (!host || !testimonials.length) return;

    host.innerHTML = testimonials.map((item) => {
      const initials = item.name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase();
      return `
        <article class="testimonial-card">
          ${renderStars(item.rating || 5)}
          <p class="testimonial-card__quote">“${item.quote}”</p>
          <div class="testimonial-card__footer">
            <div class="testimonial-card__avatar">${initials}</div>
            <div>
              <div class="testimonial-card__name">${item.name}</div>
              <div class="testimonial-card__service">${item.service}</div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderTestimonials);
  } else {
    renderTestimonials();
  }
})();
