
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('active');

  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Cerrar menú' : 'Abrir menú'
  );

  menuToggle.textContent = isOpen ? '✕' : '☰';
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent =
  new Date().getFullYear();

// SISTEMA DE MODO OSCURO

const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  const isDark = theme === 'dark';

  document.body.classList.toggle('dark-mode', isDark);

  themeToggle.textContent = isDark ? '☀️' : '🌙';

  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Activar modo claro' : 'Activar modo oscuro'
  );

  localStorage.setItem('portfolio-theme', theme);
}

// Cargar preferencia guardada
const savedTheme = localStorage.getItem('portfolio-theme');

applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

// Cambiar tema
themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');

  applyTheme(isDark ? 'light' : 'dark');
});
