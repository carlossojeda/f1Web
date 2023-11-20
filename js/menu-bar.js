
/*MENU HMABURGUESA*/

const nav = document.querySelector("#header__nav");
const abrir = document.querySelector("#abrir_cel");
const cerrar = document.querySelector('#cerrar__menu');


abrir.addEventListener('click', () => {
  nav.classList.remove('oculto');
  console.log('hola');
})

cerrar.addEventListener('click', () => {
  console.log('hola x');
  nav.classList.add('oculto');
})

// Agrega un evento de clic al documento para cerrar el menú cuando se haga clic fuera de él
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!nav.contains(target) && target !== abrir) {
        nav.classList.add('oculto');
    }
});


