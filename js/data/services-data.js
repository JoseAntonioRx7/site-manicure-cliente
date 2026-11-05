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
    items: [
      { name: "Fibra de vidro", price: "R$ 200", image: "image/WhatsApp Image 2026-08-14 at 18.22.37 (1).jpeg" },
      { name: "Molde F1", price: "R$ 170", image: "image/WhatsApp%20Image%202026-08-14%20at%2018.22.36.jpeg" },
      { name: "Gel na tips", price: "R$ 140", image: "image/WhatsApp%20Image%202026-08-08%20at%2022.06.02%20(2).jpeg" },
      { name: "Banho de gel", price: "R$ 130", image: "image/WhatsApp Image 2026-08-14 at 18.22.37.jpeg" },
      { name: "Esmaltação em gel", price: "R$ 60", image: "image/WhatsApp Image 2026-08-14 at 18.22.37 (2).jpeg" },
      { name: "Pedicure", price: "R$ 40", image: "image/WhatsApp Image 2026-08-14 at 18.28.35.jpeg" },
      { name: "Manicure tradicional", price: "R$ 40", image: "image/WhatsApp Image 2026-08-14 at 18.28.35.jpeg" },
      { name: "Decorações mais elaboradas", price: "Consultar orçamento" }
    ]
  },
  manutencoes: {
    label: "Manutenções",
    note: "Em manutenções de alongamento, cada unha faltando tem um adicional de R$ 5.",
    items: [
      { name: "Fibra de vidro", price: "R$ 180", image: "image/WhatsApp Image 2026-08-14 at 18.22.37 (1).jpeg" },
      { name: "Molde F1", price: "R$ 150", image: "image/WhatsApp%20Image%202026-08-14%20at%2018.22.36.jpeg" },
      { name: "Gel na tips", price: "R$ 120", image: "image/WhatsApp%20Image%202026-08-08%20at%2022.06.02%20(2).jpeg" },
      { name: "Banho de gel", price: "R$ 110", image: "image/WhatsApp Image 2026-08-14 at 18.22.37.jpeg" },
      { name: "Esmaltação em gel", price: "R$ 60", image: "image/WhatsApp Image 2026-08-14 at 18.22.37 (2).jpeg" }
    ]
  }
};
