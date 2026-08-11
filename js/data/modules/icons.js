/* =========================================================
   ICONS.JS
   Central de ícones SVG usados no site (sem dependências
   externas — nenhuma biblioteca de ícones é carregada).
   Qualquer módulo pode chamar Icons.nomeDoIcone().
   ========================================================= */
window.Icons = {
  instagram: () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>`,
  whatsapp: () => `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1a6.6 6.6 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a2.9 2.9 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`,
  star: () => `<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.7l-5.3 2.9 1.1-5.9L1.5 7.6l5.9-.7Z"/></svg>`,
  award: () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="5.5"/><path d="M8.3 12.8 6.5 21l5.5-2.8 5.5 2.8-1.8-8.2"/></svg>`,
  sparkle: () => `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8Z"/></svg>`,
  camera: () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/><circle cx="12" cy="14" r="3.5"/></svg>`,
  hand: () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 12V5a1.5 1.5 0 0 1 3 0v6M11 11V4a1.5 1.5 0 0 1 3 0v7M14 11.5V6a1.5 1.5 0 0 1 3 0v9c0 3.3-2.2 6-6 6-2.4 0-3.6-.9-4.8-2.6L3.6 14a1.4 1.4 0 0 1 2.2-1.7L8 14.5"/></svg>`,
  plane: () => `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 13.5 22 6l-8.5 9.5 1 5-3-2.5-2.5 3-1-6.5L2 13.5Z"/></svg>`,
  logo: () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 12V5a1.5 1.5 0 0 1 3 0v6M11 11V4a1.5 1.5 0 0 1 3 0v7M14 11.5V6a1.5 1.5 0 0 1 3 0v9c0 3.3-2.2 6-6 6-2.4 0-3.6-.9-4.8-2.6L3.6 14a1.4 1.4 0 0 1 2.2-1.7L8 14.5"/></svg>`,
  logoImage: () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5-9 9"/></svg>`,
  chevronLeft: () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 5l-7 7 7 7"/></svg>`,
  chevronRight: () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7"/></svg>`,
  close: () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
  medal: () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="14" r="6"/><path d="M9.5 9 7 3M14.5 9 17 3"/><path d="M10 14.5l1.4 1.4L14.5 12.6"/></svg>`
};