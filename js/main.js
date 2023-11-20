import { lasVegasGP, abuDhabiGP } from "/js/circuitos.js";



//Proxima carrera
const nombreCircuito = document.getElementById('nombreCircuito');
const imgProximaCarrera = document.getElementById('imgProximaCarrera');


//INYECTA AL HTML

/*HORARIOS PROXIMA CARRERA*/

const carreraProxima = abuDhabiGP;

nombreCircuito.textContent = carreraProxima.nombre;
practica1.innerHTML = `<p class="horario">${carreraProxima.practica1}</p>`;
practica2.innerHTML = `<p class='horario'>${carreraProxima.practica2}</p>`;
practica3.innerHTML = `<p class='horario'>${carreraProxima.practica3}</p>`;
qualy.innerHTML = `<p class='horario'>${carreraProxima.qualy}</p>`;
carrera.innerHTML = `<p class='horario'>${carreraProxima.carrera}</p>`;
imgProximaCarrera.src = carreraProxima.circuitoIMG; 
fechaProximaCarrera.innerHTML = carreraProxima.fecha;
piloto1.innerHTML = `<p>1.- ${ carreraProxima.ultimoPodio.piloto1 }</p>`
piloto2.innerHTML = `<p>2.- ${ carreraProxima.ultimoPodio.piloto2 }</p>`
piloto3.innerHTML = `<p>3.- ${ carreraProxima.ultimoPodio.piloto3 }</p>`


/*GRID Circuitos Fecha*/
fechaGrid.innerHTML = lasVegasGP.fecha;


/*GRID RESTO DEL AÑO*/
