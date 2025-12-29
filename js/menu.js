// const toggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('.mobile-nav');

// toggle.addEventListener('click', () => {
//   nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
// });


//USO DE MENU
const menu = document.querySelector('.menu-mb');
const lat = document.querySelector('#lat');
const abrirHambur = document.querySelector('#clickHam');
const linked = document.querySelector('#link-ancla');

menu.addEventListener('click',()=>{
  menu.classList.toggle("active");
  lat.classList.toggle("cheked");
})
lat.addEventListener('click',()=>{
  lat.classList.toggle("cheked");
  menu.classList.toggle("active");
})

linked.addEventListener('click',()=>{
  lat.classList.toggle("cheked");
  menu.classList.toggle("active");
})


