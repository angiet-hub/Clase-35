//Crear un programa que permita ingresar al jugador piedra, papel o tijera, genere de forma aleatoria la 
//jugada de la computadora, y muestre en un mensaje quién ganó, con las jugadas respectivas.

let random = Math.random() * 15;
const jugada = prompt("Ingrese piedra, papel o tijera");

if (random < 5) {
    random = "piedra"
} else if (random >= 5 && random < 10) {
    random = "papel"
} else {
    random = "tijera"
}

if (random === "piedra" && jugada === "papel") {
    alert('Computadora juega piedra, gana jugador')
} else if (random === "papel" && jugada === "tijera") {
    alert('Computadora juega papel, gana jugador')
} else if (random === "tijera" && jugada === "piedra") {
    alert('Computadora juega tijera, gana jugador')
} else if (random === "piedra" && jugada === "tijera") {
    alert('Computadora juega piedra, gana computadora')
}else if (random === "papel" && jugada === "piedra") {
    alert('Computadora juega papel, gana computadora')
} else if (random === "tijera" && jugada === "papel") {
    alert('Computadora juega tijera, gana computadora')
} else {
    alert('Jugada invalida')
}


