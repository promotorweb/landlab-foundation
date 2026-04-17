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
