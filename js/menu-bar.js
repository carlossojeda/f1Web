
/*MENU HMABURGUESA*/

const nav = document.querySelector("#nav_cel");
const abrir = document.querySelector("#abrir_cel");
const cerrar = document.querySelector('#cerrar_menu');


abrir.addEventListener('click', () => {
  nav_cel.classList.add('visible');
})

cerrar.addEventListener('click', ()=> {
  nav_cel.classList.remove('visible');
})

// Agrega un evento de clic al documento para cerrar el menú cuando se haga clic fuera de él
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!nav.contains(target) && target !== abrir) {
        nav.classList.remove('visible');
    }
});


