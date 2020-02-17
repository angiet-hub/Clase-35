//Crear un programa que pregunte por el día, el mes, y el hemisferio (norte/sur) y devuelva la estación 
//del año correspondiente

const dia = Number(prompt("Ingrese el día"));
const mes = Number(prompt("Ingrese el mes"));
const hemisferio = prompt("Ingrese el hemisferio");

const primerTrimestre = mes === 12 || mes === 1 || mes === 2 || mes === 3; //Invierno
const segundoTrimestre = mes === 3 || mes === 4 || mes === 5 || mes === 6; //Primavera
const tercerTrimestre = mes === 6 || mes === 7 || mes === 8 || mes === 9; //Verano
const cuartoTrimestre = mes === 9 || mes === 10 || mes === 11 || mes === 12; //Otoño



if (hemisferio === "sur") {
    if (primerTrimestre) {
        if (mes === 12 && dia <= 21) {
            alert("Primavera");
        } else if (mes === 3 && dia >= 21) {
            alert("Otoño");
        } else {
            alert("Verano");
        }
    }
}

if (hemisferio === "sur") {
    if (segundoTrimestre) {
        if (mes === 3 && dia <= 21) {
            alert("Verano");
        } else if (mes === 6 && dia >= 21) {
            alert("Invierno");
        } else {
            alert("Otoño");
        }
    }
}

if (hemisferio === "sur") {
    if (tercerTrimestre) {
        if (mes === 6 && dia <= 21) {
            alert("Otoño");
        } else if (mes === 9 && dia >= 21) {
            alert("Primavera");
        } else {
            alert("Invierno");
        }
    }
}

if (hemisferio === "sur") {
    if (cuartoTrimestre) {
        if (mes === 9 && dia <= 21) {
            alert("Invierno");
        } else if (mes === 12 && dia >= 21) {
            alert("Verano");
        } else {
            alert("Primavera");
        }
    }
}

if (hemisferio === "norte") {
    if (primerTrimestre) {
        if (mes === 12 && dia <= 21) {
            alert("Otoño");
        } else if (mes === 3 && dia >= 21) {
            alert("Primavera");
        } else {
            alert("Invierno");
        }
    }
}


if (hemisferio === "norte") {
    if (segundoTrimestre) {
        if (mes === 3 && dia <= 21) {
            alert("Invierno");
        } else if (mes === 6 && dia >= 21) {
            alert("Verano");
        } else {
            alert("Primavera");
        }
    }
}

if (hemisferio === "norte") {
    if (tercerTrimestre) {
        if (mes === 6 && dia <= 21) {
            alert("Primavera");
        } else if (mes === 9 && dia >= 21) {
            alert("Otoño");
        } else {
            alert("Verano");
        }
    }
}

if (hemisferio === "norte") {
    if (cuartoTrimestre) {
        if (mes === 9 && dia <= 21) {
            alert("Verano");
        } else if (mes === 12 && dia >= 21) {
            alert("Invierno");
        } else {
            alert("Otoño");
        }
    }
}