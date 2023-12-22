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
    claseSolicitada = prompt("Ingrese una clase ('g' = guerrero, 'b' = bárbaro, 'l' = lucky strike, 'a' = aleatorio)");
    claseSolicitada = claseSolicitada.toLowerCase()
    return claseSolicitada
}

// Valido la clase suministrada por el usuario, puede ser: 'g' = guerrero, 'b' = bárbaro, 'l' = lucky strike, 'a' = aleatorio
function validarClase(clase) {
    if ( clase == "g" || clase == "b" || clase == "l" || clase == "a" ) {
        return true
    } else {
        return false
    }
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