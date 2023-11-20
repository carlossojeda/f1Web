import { pilotos } from "/js/pilotos.js";
import { bahrainGP, lasVegasGP, abuDhabiGP, australiaGP,  saudiArabiaGP, japanGP, chinaGP, miamiGP, emiliaRomagnaGP, monacoGP, canadaGP, espanaGP, austriaGP, reinoUnidoGP, hungriaGP, belgicaGP, paisesBajosGP, monzaGP, azerbaiyanGP,singapurGP, austinGP, mexicoGP, brasilGP, qatarGP  } from "/js/circuitos.js";






document.addEventListener('DOMContentLoaded', function () {
    
    const ctx = document.getElementById('myChart').getContext('2d');

    // Datos ficticios para tres pilotos a lo largo de cuatro carreras
    const datosPilotos = [
      {
        label: pilotos.max,
        posiciones: [1, 2, 11, 5, 3, 20, 2,1,1,1,1,1,1,1,,1,1,1,1,1,1],
        borderColor: 'red',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.checo,
        posiciones: [2, 1, 12, 1, 1, 19, 10],
        borderColor: 'blue',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.hamilton,
        posiciones: [3, 4, 13, 2, 20, 1],
        borderColor: 'gray',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.alonso,
        posiciones: [2, 3, 13, 2, 20, 1],
        borderColor: 'green',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.lando,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.sainz,
        posiciones: [1, 1, 1, 8, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'red',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.charles,
        posiciones: [2, 3, 4, 5, 5, 1, 1, 1, 1,1, 1, 5, 5, 5, 5,5],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.russell,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 3, 6, 8, 1],
        borderColor: 'gray',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.piastri,
        posiciones: [1, 1, 1, 6, 6, 5, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.stroll,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.gasly,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.ocon,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.albon,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.yuki,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.bottas,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.hulkenberg,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.ricciardo,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.zhou,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.magnussen,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.lawson,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.sargeant,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
      {
        label: pilotos.nyck,
        posiciones: [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
      },
    ];

    // Asignación de puntos basada en posiciones
    const puntosPorPosicion = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

    // Calcula la puntuación acumulativa para cada piloto
    datosPilotos.forEach(piloto => {
      piloto.data = piloto.posiciones.map(posicion => {
        if (posicion <= 10) {
          return puntosPorPosicion[posicion - 1];
        } else {
          return 0; // Fuera de la zona de puntos
        }
      });

      for (let i = 1; i < piloto.data.length; i++) {
        piloto.data[i] += piloto.data[i - 1];
      }
      delete piloto.posiciones;
    });

  
  
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [bahrainGP.nombre,australiaGP.nombre, saudiArabiaGP.nombre, japanGP.nombre, chinaGP.nombre, miamiGP.nombre, emiliaRomagnaGP.nombre, monacoGP.nombre, canadaGP.nombre, espanaGP.nombre, austriaGP.nombre, reinoUnidoGP.nombre, hungriaGP.nombre, belgicaGP.nombre, paisesBajosGP.nombre, monzaGP.nombre, azerbaiyanGP.nombre, singapurGP.nombre, austinGP.nombre, mexicoGP.nombre, brasilGP.nombre, lasVegasGP.nombre, abuDhabiGP.nombre, qatarGP.nombre],
        datasets: datosPilotos
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Puntos a lo largo del año 2023'
          },
          legend: {
            align: 'start',
            labels: {
              boxWidth: 1,
              boxHeight: 10,
              padding: 15,
              textAlign: 'left'
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true
          }
        },
        responsive: true,
        
      }
    });
 

})
    




// .chartCard {
//     padding: 2rem;
//     overflow-x: scroll;
//     margin: 0 auto;
//     width: 90%;
//     height: 600px;
//     border: 2px solid brown;
//   // background: rgba(54, 162, 235, 0.2);
//     display: flex;
//     align-items: flex-start;
//     justify-content: center;
// }
// .chartBox {
//     margin-left: 650px;
//     margin-top: 10px;
//     min-width:1000px;
//     height: 500px;
//     border-radius: 20px;
//     border: solid 3px rgb(4, 29, 45);
//     background: rgba(206, 204, 204, 0.7);
// }


