// Filippi Santos — Site nav & interactions
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
      toggle.textContent = drawer.classList.contains('open') ? '✕' : '☰';
    });
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }
})();

// ===== Funnel Slider (hero) =====
(function () {
  const slider = document.querySelector('[data-funnel-slider]');
  if (!slider) return;

  const stages = Array.from(slider.querySelectorAll('.funnel-stage'));
  const dots = Array.from(slider.querySelectorAll('.funnel-progress span'));
  const SLIDE_DUR = 3400;

  const phrases = [
    'cliente busca seu serviço na cidade',
    'Sua presença gera desejo e confiança',
    'Estrutura Premium, mensagem clara',
    'Lead qualificado direto no atendimento',
    'Resultado real e contínuo, sem depender de sorte'
  ];

  slider.style.setProperty('--slide-dur', SLIDE_DUR + 'ms');
  let current = -1;
  let timer = null;
  let typingTimer = null;
  let paused = false;

  function typeText(el, text) {
    if (!el) return;
    el.textContent = '';
    let i = 0;
    const speed = Math.max(28, Math.min(55, (SLIDE_DUR * 0.55) / text.length));
    clearInterval(typingTimer);
    typingTimer = setInterval(() => {
      if (i >= text.length) { clearInterval(typingTimer); return; }
      el.textContent += text.charAt(i++);
    }, speed);
  }

  function show(idx) {
    current = idx;
    stages.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    dots.forEach((d, i) => {
      d.classList.toggle('is-active', i === idx);
      d.classList.toggle('is-done', i < idx);
    });
    const active = stages[idx];
    const target = active.querySelector('[data-typed]');
    if (target) typeText(target, phrases[idx]);
  }

  function next() {
    show((current + 1) % stages.length);
  }

  function start() {
    stop();
    next();
    timer = setInterval(() => { if (!paused) next(); }, SLIDE_DUR);
  }
  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  slider.addEventListener('mouseenter', () => { paused = true; });
  slider.addEventListener('mouseleave', () => { paused = false; });

  start();
})();
