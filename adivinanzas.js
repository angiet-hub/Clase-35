//Crear un programa que muestre una adivinanza (entre 4 o 5 posibles) al azar, y permita al usuario ingresar la 
//respuesta. Mostrarle un mensaje indicándole si acertó o no.

let random = Math.round(Math.random() * 4);

if (random === 1) {
    const adivinanza1 = prompt('Mi tía Cuca tiene una mala racha, ¿quién será esta muchacha?');
    if (adivinanza1 === "cucaracha") {
        alert('Felicidades!');
    } else {
        alert('Usted no acertó');
    }
} else if (random === 2) {
    const adivinanza2 = prompt('¿Qué animal tiene las cinco vocales?');
    if (adivinanza2 === "murcielago") {
        alert('Felicidades!');
    } else {
        alert('Usted no acertó');
    }
} else if (random === 3) {
    const adivinanza3 = prompt('Canto en la orilla, vivo en el agua, no soy pescado, ni soy cigarra.');
    if (adivinanza3 === "rana") {
        alert('Felicidades!');
    } else {
        alert('Usted no acertó');
    }
} else {
    const adivinanza4 = prompt('¿Quién será que de noche sale y de día se va?');
    if (adivinanza4 === "buho") {
        alert('Felicidades!');
    } else {
        alert('Usted no acertó');
    }
}
