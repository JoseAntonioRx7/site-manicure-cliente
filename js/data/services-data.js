/* =========================================================
   SERVICES-DATA.JS
   Fonte única dos preços exibidos na seção "Serviços".
   Para atualizar valores, edite SOMENTE este arquivo —
   o HTML é montado automaticamente por
   js/modules/render-services.js
   ========================================================= */
window.SITE_DATA = window.SITE_DATA || {};

window.SITE_DATA.services = {
  aplicacoes: {
    label: "Aplicações",
    note: "Esmaltação e decoração inclusas.",
    columns: [
      [
        { name: "Molde F1", price: "R$ 110", image: "image/WhatsApp%20Image%202026-08-14%20at%2018.22.36.jpeg" },
        { name: "Gel na tips", price: "R$ 100", image: "image/WhatsApp%20Image%202026-08-08%20at%2022.06.02%20(2).jpeg" },
        { name: "Esmaltação em Gel", price: "R$ 60", image: "image/WhatsApp Image 2026-08-14 at 18.22.37 (2).jpeg" },
        { name: "Esmaltação Simples — Mão", price: "R$ 35", image: "image/WhatsApp Image 2026-08-14 at 18.28.35.jpeg" }
      ],
      [
        { name: "Fibra de Vidro", price: "R$ 135", image: "image/WhatsApp Image 2026-08-14 at 18.22.37 (1).jpeg" },
        { name: "Banho de Gel", price: "R$ 80", image: "image/WhatsApp Image 2026-08-14 at 18.22.37.jpeg " },
        { name: "Esmaltação Simples — Pé", price: "R$ 40", image: "image/WhatsApp Image 2026-08-14 at 18.28.35.jpeg" }
      ]
    ]
  },
  manutencoes: {
    label: "Manutenções",
    note: "Caso falte alguma unha (alongamento), será cobrado um valor adicional de R$ 5 por cada unha faltando.",
    columns: [
      [
        { name: "Molde F1", price: "R$ 90", highlight: true, image: "image/WhatsApp%20Image%202026-08-14%20at%2018.22.36.jpeg" },
        { name: "Gel na tips", price: "R$ 80", highlight: true, image: "image/WhatsApp%20Image%202026-08-08%20at%2022.06.02%20(2).jpeg" },
        { name: "Esmaltação em Gel", price: "R$ 60", image: "image/WhatsApp Image 2026-08-14 at 18.22.37 (2).jpeg" },
        { name: "Esmaltação Simples — Mão", price: "R$ 35", image: "image/WhatsApp Image 2026-08-14 at 18.28.35.jpeg" }
      ],
      [
        { name: "Fibra de Vidro", price: "R$ 115", highlight: true, image: "image/WhatsApp%20Image%202026-08-14%20at%2018.22.37 (1).jpeg" },
        { name: "Banho de Gel", price: "R$ 60", highlight: true, image: "image/WhatsApp Image 2026-08-14 at 18.22.37.jpeg" },
        { name: "Esmaltação Simples — Pé", price: "R$ 40", image: "image/WhatsApp Image 2026-08-14 at 18.28.35.jpeg" }
      ]
    ]
  }
};