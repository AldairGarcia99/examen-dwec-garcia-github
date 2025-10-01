const dama = 9;
const torre = 5;
const caballo = 3;
const peon = 1;

    const contBlancas = (dama*1) + (torre*2) + (caballo*1) + (peon*3);
    const contNegras = (dama*1) + (torre*1) + (caballo*2) + (peon*5);

    console.log("Puntos Blancas:", contBlancas);
    console.log("Puntos Negras:", contNegras);

    if (contBlancas > contNegras){
        console.log("El equipo de fichas blancas ha ganado");
    }else if(contNegras > contBlancas) {
        console.log("El equipo de fichas negras ha ganado");
    }else if(contBlancas == contNegras){
        console.log("Los equipos han quedado empatados");
    }