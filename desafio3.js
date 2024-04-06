// Declaracion y inicializacion de variables

var ingreso = 0; 
var sueldoBase = 0;
var montoMensual = 0;
var comision = 0;
var porcentajeComision = 0;
var montoComision = 0;
var bonoTerceraEdad = 0;
var sexo;
var edad = 0;
var numeroVendedores;

// Entradas
numeroVendedores = parseInt(prompt("¿Cuantos vendedores va a ingresar?"));

while (numeroVendedores <= 0 || isNaN(numeroVendedores)) {
    alert("DEBE INGRESAR UN NÚMERO VALIDO!")
    numeroVendedores = parseInt(prompt("¿Cuantos vendedores va a ingresar?"));
}

for (let i = 1; i <= numeroVendedores; i++) {

    sueldoBase = parseInt(prompt("¿Sueldo base del vendedor?"));
    while (sueldoBase <= 0 || isNaN(sueldoBase)) {
        alert("DEBE INGRESAR UN SUELDO VALIDO!");
        sueldoBase = parseInt(prompt("¿Sueldo base del vendedor?"));
    }

    sexo = prompt("¿Es hombre o mujer? M = Hombre, F = Mujer").toUpperCase();

    while (sexo != "M" && sexo != "F") {
        alert("INGRESE UN CARACTER VALIDO!");
        sexo = prompt("¿Es hombre o mujer? M = Hombre, F = Mujer").toUpperCase();
    }

    edad = parseInt(prompt("¿Edad del vendedor?"));   

        if (edad >= 55 && sexo == "F") {
            bonoTerceraEdad = 40000;
        } else {
            if (edad >= 60 && sexo == "M") {
                bonoTerceraEdad = 40000;
            } else {
                bonoTerceraEdad = 0;
            }
        }

    while (edad <= 0 || edad > 100 || isNaN(edad)) {
        alert("INGRESE UNA EDAD CORRECTA!");
        edad = parseInt(prompt("¿Edad del vendedor?")); 
    }

    montoMensual = parseInt(prompt("¿Monto mensual de las ventas de este vendedor?"))

    while (montoMensual < 0 || isNaN(montoMensual)) {
        alert("INGRESE UN MONTO MENSUAL CORRECTO!")
        montoMensual = parseInt(prompt("¿Monto mensual de las ventas de este vendedor?"))
    }

    if (montoMensual > 0 && montoMensual < 75000) {
        comision = 1;
    } else {
        if (montoMensual >= 90000 && montoMensual < 200000) {
            comision = 2;
        } else {
            if (montoMensual >=300000 && montoMensual < 1000000) {
                comision = 3;
            } else {
                if (montoMensual >= 1500000) {
                    comision = 4;
                } else {
                    comision = 0;
                }
            }
        }
    }
    

    switch (comision) {
        case 1:
            porcentajeComision = 0.05;
            break;
        case 2:
            porcentajeComision = 0.07;
            break;
        case 3:
            porcentajeComision = 0.08;
            break;
        case 4:
            porcentajeComision = 0.10;
            break;
        default:
            porcentajeComision = 0.06;
            break;
    }

    // Procesos 

    montoComision = montoMensual * porcentajeComision;
    ingreso = sueldoBase + montoComision + bonoTerceraEdad;
    porcentajeComision = porcentajeComision * 100;

    // Salidas
    alert(`El ingreso del N°${i} vendedor esta basado en su sueldo base ${sueldoBase}, + el monto mensual de sus ventas ${montoMensual} por el porcentaje de comisión ${porcentajeComision}%, monto por comision ${montoComision}, + el bono por tercera edad si aplica: ${bonoTerceraEdad}, dando un total de ${ingreso}`)
    

    // REGISTRO FINAL 
    console.warn(`Iterador del for: ${i}`)
    console.log(`Sueldo base: ${sueldoBase}`)
    console.log(`Monto de ventas mensuales: ${montoMensual}`)
    console.log(`Tipo de comision: ${comision}`)
    console.log(`Porcentaje de la comision: ${porcentajeComision}`)
    console.log(`Monto de la comision:  ${montoComision}`)
    console.log(`Sexo: ${sexo}`)
    console.log(`Edad: ${edad}`)
    console.log(`Bono por edad: ${bonoTerceraEdad}`)

}
    alert(`Numero total de vendedores ingresados ${numeroVendedores}`)




