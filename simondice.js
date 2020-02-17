
    //Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio. Los colores posibles 
    //son 4: rojo, verde, azul y amarillo. Pedir luego ingresar 5 colores uno por uno, y mostrar al finalizar 
    //si acertó la secuencia.

// Ejemplo
//Simón dice: rojo, rojo, azul, verde, amarillo.

// Ingrese el primer color: rojo
// Ingrese el primer color: rojo
// Ingrese el primer color: azul
// Ingrese el primer color: verde
// Ingrese el primer color: amarillo

// Felicitaciones! Has ganado!

let random1 = Math.round(Math.random() * 3);
let random2 = Math.round(Math.random() * 3);
let random3 = Math.round(Math.random() * 3);
let random4 = Math.round(Math.random() * 3);

if (random1 === 0) {
    random1 = "rojo"
} else if (random1 === 1) {
    random1 = "azul"
} else if (random1 === 2) {
    random1 = "amarillo"
} else {
    random1 = "verde"
}

if (random2 === 0) {
    random2 = "rojo"
} else if (random1 === 1) {
    random2 = "azul"
} else if (random2 === 2) {
    random2 = "amarillo"
} else {
    random2 = "verde"
}

if (random3 === 0) {
    random3 = "rojo"
} else if (random1 === 1) {
    random3 = "azul"
} else if (random3 === 2) {
    random3 = "amarillo"
} else {
    random3 = "verde"
}

if (random4 === 0) {
    random4 = "rojo"
} else if (random1 === 1) {
    random4 = "azul"
} else if (random4 === 2) {
    random4 = "amarillo"
} else {
    random4 = "verde"
}

alert(`Simon dice: ${random1}, ${random2}, ${random3}, ${random4}, ${random1}.`);

const respuesta1 = prompt('Ingrese el primer color');
const respuesta2 = prompt('Ingrese el segundo color');
const respuesta3 = prompt('Ingrese el tercer color');
const respuesta4 = prompt('Ingrese el cuarto color');
const respuesta5 = prompt('Ingrese el quinto color');

const respuestas = respuesta1 === random1 && respuesta2 === random2 && respuesta3 === random3 && 
                    respuesta4 === random4 && respuesta5 === random1;

if (respuestas === true) {
    alert('Usted acertó')
} else {
    alert('Usted NO acertó')
}