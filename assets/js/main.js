// theme toggle + year
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const stored = localStorage.getItem('theme');
if(stored === 'light') document.documentElement.classList.add('light');

themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

document.getElementById('year').textContent = new Date().getFullYear();
