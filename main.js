document.addEventListener('DOMContentLoaded', () => {

  // ===== MOBILE NAV =====
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ===== LEVEL ACCORDIONS =====
  document.querySelectorAll('.level-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.level-card');
      const content = card.querySelector('.level-content');
      const toggle = card.querySelector('.level-toggle');
      if (!content) return;
      const isOpen = content.style.display !== 'none';
      content.style.display = isOpen ? 'none' : 'block';
      if (toggle) toggle.textContent = isOpen ? '+' : '–';
      const status = card.querySelector('.level-status');
      if (status && !card.classList.contains('locked')) {
        status.innerHTML = isOpen ? '<span style="color:#C9700A">●</span> OPEN' : '● OPEN';
      }
    });
  });

  // ===== TABS =====
  document.querySelectorAll('.tab-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const tabId = pill.dataset.tab;
      const container = pill.closest('.level-content');
      container.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
      container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const panel = container.querySelector(`#tab-${tabId}`);
      if (panel) panel.classList.add('active');
    });
  });

  // ===== GLOSSARY =====
  document.querySelectorAll('.glossary-item').forEach(item => {
    item.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.glossary-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.glossary-icon').textContent = '+';
      });
      if (!wasOpen) {
        item.classList.add('open');
        item.querySelector('.glossary-icon').textContent = '–';
      }
    });
  });

  // ===== FOOTER YEAR =====
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
