/* ***** Funciones ***** */

// Solicito el nombre
function solicitarNombre(){
    nombreSolicitado = prompt("Ingrese su nombre de jugador");
    nombreSolicitado = nombreSolicitado.replace(/\s+/g, '');
    return nombreSolicitado
}

// Valido el nombre suministrado por el usuario, entre 5 y 10 caracteres, no puede arrancar con números
function validarNombre(nombre) {
    if ( nombre.length >= 5 && nombre.length <= 10 && isNaN(parseInt(nombre)) ) {
        return true
    } else {
        return false
    }
}

// Solicito la clase
function solicitarClase(){
    claseSolicitada = prompt("Ingrese una clase ('g' = guerrero, 'b' = bárbaro, 'r' = rogue, 'a' = aleatorio)");
    claseSolicitada = claseSolicitada.toLowerCase();
    if ( claseSolicitada == "a" ) {
        sorteo = Math.random();
        if ( sorteo > 0.67 ) {
            claseSolicitada = "g";
        } else if ( sorteo > 0.34 ){
            claseSolicitada = "b";
        } else {
            claseSolicitada = "r";
        }
    }
    return claseSolicitada
}

// Valido la clase suministrada por el usuario, puede ser: 'g' = guerrero, 'b' = bárbaro, 'r' = rogue, 'a' = aleatorio, este último se sortea en la función solicitarClase()
function validarClase(clase) {
    if ( clase == "g" || clase == "b" || clase == "r" ) {
        return true
    } else {
        return false
    }
}

// Función que asigna el ataque en función de la clase
function asignarAtaque(clase) {
    sorteo = Math.random();
    if ( clase == "g" ) {
        ataque = Math.round( 15 + 5 * ( sorteo - 0.4 ) );
    } else if ( clase == "b" ) {
        ataque = Math.round( 23 + 7 * ( sorteo - 0.5 ) );
    } else {
        ataque = Math.round( 13 + 10 * ( sorteo - 0.6 ) );
    }
    return ataque
}

// Función que asignan los HP (Hit Points) en función de la clase
function asignarHp(clase) {
    sorteo = Math.random();
    if ( clase == "g" ) {
        hp = Math.round( 100 + 20 * ( sorteo - 0.5 ) );
    } else if ( clase == "b" ) {
        hp = Math.round( 150 + 15 * ( sorteo - 0.6 ) );
    } else {
        hp = Math.round( 80 + 10 * ( sorteo - 0.25 ) );
    }
    return hp
}

// Función que asigna la precisión en función de la clase
function asignarPrecision(clase) {
    if ( clase == "g" ) {
        precision = 0.9;
    } else if ( clase == "b" ) {
        precision = 0.75;
    } else {
        precision = 1;
    }
    return precision
}

// Función que asigna la evasión en función de la clase
function asignarEvasion(clase) {
    sorteo = Math.random();
    if ( clase == "g" ) {
        evasion = 0.05;
    } else if ( clase == "b" ) {
        evasion = 0.01;
    } else {
        evasion = 0.15;
    }
    return evasion
}

/* Empiezo a crear variables y a utilizar las funciones */

// Defino las variables
let nombreJugador = "";
let claseJugador = "";
let claseRival = "";

// Solicito y valido el nombre al usuario
while ( ! validarNombre( nombreJugador ) ) {
    nombreJugador = solicitarNombre();
}

// Solicito y valido la clase del usuario

alert("Seleccione su clase")

while ( ! validarClase( claseJugador ) ) {
    claseJugador = solicitarClase();
}

// Solicito y valido la clase del rival del usuario

alert("Seleccione la clase de su rival")

while ( ! validarClase( claseRival ) ) {
    claseRival = solicitarClase();
}

// Cálculo de stats del jugador

let ataqueJugador = asignarAtaque(claseJugador);
let hpJugador = asignarHp(claseJugador);
let precisionJugador = asignarPrecision(claseJugador);
let evasionJugador = asignarEvasion(claseJugador);

// Cálculo de stats del rival

let ataqueRival = asignarAtaque(claseJugador);
let hpRival = asignarHp(claseJugador);
let precisionRival = asignarPrecision(claseJugador);
let evasionRival = asignarEvasion(claseJugador);