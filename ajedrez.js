const resultado = document.getElementById("resultado");
const botonResta = document.getElementById("botonResta");

function restarPiezas(){
    const totalInicial = 8;
    const capturados = 1;
    const restantes = totalInicial - capturados;

    resultado.textContent = `Peones restantes: ${restantes}`;

}

botonResta.addEventListener("click", restarPiezas);

const movs = document.getElementById("movs");
const botonMovs = document.getElementById("botonMovs");

function calcularCasillas(){
    const casillasTotales = 64;
    const jugadores = 2;
    const porJugador = casillasTotales/jugadores;

    movs.textContent = `Cada jugador empieza colocando : ${porJugador} casillas`;

}

botonMovs.addEventListener("click", calcularCasillas);