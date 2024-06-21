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


// ENTREGA 2

class Prestamo {
    constructor(nombre, valor, cuotas) {
        this.nombre = nombre;
        this.valor = valor;
        this.cuotas = cuotas;
        this.valorTotal = 0;
    }
}


calcularCuotas(valor, cuotas); {

    let interes;

    if (cuotas == 1) {
        this.valorTotal = valor;
    }
    else if (cuotas == 3) {
        interes = valor * 0.20;
        this.valorTotal = valor + interes;
    }
    else if (cuotas == 6) {
        interes = valor * 0.50;
        this.valorTotal = valor + interes;
    }
}

getDatosPrestamo (); {
    console.log("PRESTAMO REGIO");
    console.log("Nombre", this.nombre);
    console.log("Valor", this.valor);
    console.log("Cuotas", this.cuotas);
    console.log("Vas a pagar", this.valorTotal);
}


function filtrarPrestamos (objetoPrestamo) {
    return objetoPrestamo.nombre == nombre
}

let nombreUsuario = "";
let listaPrestamos = [];

while (nombreUsuario != "FIN") {
    console.log("PRESTAMO REGIO");
    console.log("");

    nombreUsuario = prompt("Escriba su nombre o FIN para terminar");

    if (nombreUsuario != "FIN") {
        let valor = prompt("Ingrese el monto");
        valor = parseInt(valor);
        console.log("1 cuotas: sin interes");
        console.log("3 cuotas: 20% interes");
        console.log("6 cuotas: 50% interes");
        let cuotas = prompt("Ingrese las cuotas");

        //OBJETO
        let objetoPrestamo = new Prestamo(nombreUsuario, valor, cuotas);
        objetoPrestamo.calcularCuotas(valor, cuotas);
        listaPrestamos.push(objetoPrestamo);
        console.log("Ud ha adquirido el prestamo");
    }
}



//BUSCAR PRESTAMOS

let opcion = prompt("1) Ver prestamos 2) Ver tus prestamos");

let nombre;

if(opcion == "1"){
    console.log("Historial de Prestamos");
    for( let prestamo of listaPrestamos){
        prestamo.getDatosPrestamo();
    }
}
else if (opcion == "2"){
    nombre = prompt ("Ingrese el nombre a buscar");
    let resultadoFilter = listaPrestamos.filter(filtrarPrestamos);

    for (let prestamo of resultadoFilter){
        prestamo.getDatosPrestamo();
    }
}
else{
    console.log("el usuario no tiene prestamos en el sistema");
}
