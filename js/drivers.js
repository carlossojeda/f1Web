//Pilotos

const maxVerstappen = {
    nombre: 'Max Verstappen',
    puntos: 300,
    escuderia: 'Red Bull Racing',
}
const sergioPerez = {
    nombre: 'Sergio Pérez',
    puntos: 250,
    escuderia: 'Red Bull Racing'
}
const charlesLeclerc = {
    nombre: 'Charles Leclerc',
    puntos: 270,
    escuderia: 'Ferrari'
}


//Inyectar a Posiciones.html


//Primera Posicion
const primerLugar = maxVerstappen;
firstPlace.innerHTML = primerLugar.nombre
points.innerHTML = `<p>${primerLugar.puntos} pts</p>`
escuderia.innerHTML = primerLugar.escuderia

//Segunda Posicion
const segundoLugar = sergioPerez;
secondPlace.innerHTML = segundoLugar.nombre
pointsSecond.innerHTML = `<p>${primerLugar.puntos} pts</p>`
escuderiaSecond.innerHTML = segundoLugar.escuderia

const tercerLugar = charlesLeclerc;
thirdPlace.innerHTML = tercerLugar.nombre
pointsThird.innerHTML = `<p>${tercerLugar.puntos} pts </p>`
escuderiaThird.innerHTML = tercerLugar.escuderia