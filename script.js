// Obtén todas las tarjetas del podio
const tarjetasPodio = document.querySelectorAll(".tarjeta");

// Agrega un evento de escucha a cada tarjeta para mostrar la ventana emergente al hacer clic o pasar el mouse sobre ella
tarjetasPodio.forEach(tarjeta => {
  tarjeta.addEventListener("click", mostrarVentanaEmergente);
  tarjeta.addEventListener("mouseover", mostrarVentanaEmergente);
  tarjeta.addEventListener("mouseout", cerrarVentanaEmergente);
});

// Función para mostrar la ventana emergente
function mostrarVentanaEmergente(event) {
  const piloto = event.currentTarget.dataset.piloto;
  // Aquí debes agregar la lógica para obtener la información de las carreras ganadas y puntos del piloto seleccionado
  
  // Ejemplo de información ficticia:
  const carrerasGanadas = ["Gran Premio 1", "Gran Premio 2", "Gran Premio 3"];
  const puntos = [25, 18, 15];

  // Actualizar el contenido de la ventana emergente con la información del piloto
  const ventanaEmergente = document.querySelector(".ventana-emergente");
  const nombrePiloto = ventanaEmergente.querySelector(".nombre-piloto");
  const listaCarreras = ventanaEmergente.querySelector(".carreras-ganadas");
  nombrePiloto.textContent = piloto;
  listaCarreras.innerHTML = ""; // Limpiamos la lista por si acaso

  // Agrega la lista de carreras ganadas y puntos a la ventana emergente
  carrerasGanadas.forEach((carrera, index) => {
    const carreraItem = document.createElement("li");
    carreraItem.textContent = `${carrera} - ${puntos[index]} puntos`;
    listaCarreras.appendChild(carreraItem);
  });

  // Mostrar la ventana emergente
  ventanaEmergente.style.opacity = 1;
}

// Función para cerrar la ventana emergente
function cerrarVentanaEmergente(event) {
  // Si el cursor sale de la tarjeta, cierra la ventana emergente y elimina la clase "tarjeta--activo"
  const ventanaEmergente = document.querySelector(".ventana-emergente");
  ventanaEmergente.style.opacity = 0;
  tarjetasPodio.forEach(tarjeta => tarjeta.classList.remove("tarjeta--activo"));
}




// Crear una imagen para la foto del piloto y agregarla al contenido de la ventana emergente
const fotoPiloto = document.createElement("img");
fotoPiloto.src = "URL_DE_LA_FOTO_DEL_PILOTO";
fotoPiloto.alt = "Foto del piloto";
contenidoVentana.appendChild(fotoPiloto);

// Crear un elemento para los datos adicionales y agregarlo al contenido de la ventana emergente
const datosAdicionales = document.createElement("div");
datosAdicionales.textContent = "Datos adicionales del piloto";
contenidoVentana.appendChild(datosAdicionales);



