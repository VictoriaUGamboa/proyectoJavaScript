// Simulador de Préstamos

// Login al sistema

let usuarioSistema = "Victoria"
let intentos = 1

for (let i = 0; i < 5; i = i + 1) {

    let nombreUsuario = prompt("Ingrese su nombre");

    if (nombreUsuario == usuarioSistema) {
        console.log("Sea bienvenido/a a Préstamos Regios");
        break;

    }
    else if (intentos < 3) {
        intentos = intentos + 1;
    }
    else {
        console.log("Usted no es usuario de Préstamos Regios");
        break;
    }
}

alert("Buen día!")
let valor = parseInt(prompt("Ingrese el prestamo que desea"));
let cantidadCuotas = parseInt(prompt("Ingrese en cuantas cuotas: 1, 3 o 6"));


// Calculo el interés del préstamo en 1, 3 y 6 cuotas:

function calculoInteres(valor, cantidadCuotas) {

    if (cantidadCuotas == 1) {
        return valor;
    }
    else if (cantidadCuotas == 3) {
        let interes = valor * 0.20;
        return interes
    }
    else if (cantidadCuotas == 6) {
        let interes = valor * 0.50;
        return interes
    }
}


//Para saber el valor total del préstamo:
let totalPrestamo = valor + calculoInteres(valor, cantidadCuotas);
mostrarInfoPrestamo(valor, cantidadCuotas, totalPrestamo);


// Para ver los datos del préstamo que pedí:

function mostrarInfoPrestamo(valor, cantidadCuotas, total) {

    console.log("Tu prestamo es de: ", valor);
    console.log("Cantidad de cuotas: ", cantidadCuotas);
    console.log("Total: ", total);

}




