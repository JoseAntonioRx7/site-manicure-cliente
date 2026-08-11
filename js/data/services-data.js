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
        { name: "Molde F1", price: "R$ 110" },
        { name: "Gel na tips", price: "R$ 100" },
        { name: "Esmaltação em Gel", price: "R$ 60" },
        { name: "Esmaltação Simples — Mão", price: "R$ 35" }
      ],
      [
        { name: "Fibra de Vidro", price: "R$ 135" },
        { name: "Banho de Gel", price: "R$ 80" },
        { name: "Esmaltação Simples — Pé", price: "R$ 40" }
      ]
    ]
  },
  manutencoes: {
    label: "Manutenções",
    note: "Caso falte alguma unha (alongamento), será cobrado um valor adicional de R$ 5 por cada unha faltando.",
    columns: [
      [
        { name: "Molde F1", price: "R$ 90", highlight: true },
        { name: "Gel na tips", price: "R$ 80", highlight: true },
        { name: "Esmaltação em Gel", price: "R$ 60" },
        { name: "Esmaltação Simples — Mão", price: "R$ 35" }
      ],
      [
        { name: "Fibra de Vidro", price: "R$ 115", highlight: true },
        { name: "Banho de Gel", price: "R$ 60", highlight: true },
        { name: "Esmaltação Simples — Pé", price: "R$ 40" }
      ]
    ]
  }
};