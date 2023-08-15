document.addEventListener("DOMContentLoaded", function() {
  const fadeElements = document.querySelectorAll(".fade-in");

  function checkFade() {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight && elementBottom >= 0) {
        element.classList.add("fade-in-active");
      }
    });
  }

  // Ejecutar una vez al cargar la página
  checkFade();

  // Ejecutar cuando se haga scroll
  window.addEventListener("scroll", checkFade);
});




/*NAV*/

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
