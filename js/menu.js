
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-mb');
  const lat = document.querySelector('#lat');

  if (!menu || !lat) return;

  menu.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('menu-active');
    lat.classList.toggle('menu-open');
  });

  lat.addEventListener('click', (e) => {
    e.stopPropagation();
    lat.classList.toggle('menu-open');
    menu.classList.toggle('menu-active');
  });
});
