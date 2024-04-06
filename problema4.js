//Declaracion

/* En un circo, las entradas se venden de acuerdo a la edad. La entrada general tiene un costo de 1000 Bs, pero:

* Si es un niño menor a 2 años la entrada es gratis.

* Si es un niño con edad entre 2 y 5 años, le aplica un descuento de 50%

* Si es un niño de 6 a 10 años tiene un descuento de 20%

* A partir de 55 años el descuento es de 30%

Dependiendo si la persona es estudiante o no, el monto del descuento será lo que sea mayor, entre el descuento por edad (si aplica) y el 25% de descuento.

*El resto de las personas pagan entrada general. Se conoce la edad (verificar que sea mayor o igual que 0) de la persona y si es estudiante. Se pide mostrar cual fue el porcentaje de dscto aplicado, el monto de descto y el monto a pagar por la entrada */

var entradaGeneral;
var edad;
var entradaFinal;
var estudiante;
var descuentoEdad;
var descuentoEstudiante;

//Inicializacion

entradaGeneral = 1000;
descuentoEdad = 0;
descuentoEstudiante = 0;
entradaFinal = 0;
estudiante = false;
edad = 0;

//Entradas
edad = parseInt(prompt("¿Que edad tienes?"));

while (edad < 0 || isNaN(edad)) {
    console.warn("EDAD INCORRECTA")
    edad = parseInt(prompt("¿Que edad tienes?"));
}
console.log(`Tu edad es ${edad}`);

if (edad < 2) {
    descuentoEdad = 1;
}
    if (edad >= 2 && edad <= 5) {
        descuentoEdad = 0.5;
    }
        if (edad >= 6 && edad <= 10) {
            descuentoEdad = 0.2;
        }
            if (edad >= 55) {
                descuentoEdad = 0.3;
            };

estudiante = confirm("¿Eres estudiante?")

if (estudiante == true) {
    descuentoEstudiante = 0.25;
} 

    if (descuentoEstudiante > descuentoEdad){
        entradaFinal = entradaGeneral - (entradaGeneral * descuentoEstudiante);
        console.log(`Su porcentaje de descuento por ser estudiate es de ${descuentoEstudiante * 100}%`);
    } else {
        entradaFinal = entradaGeneral - (entradaGeneral * descuentoEdad);
        console.log(`Su porcentaje de descuento por su edad es de ${descuentoEdad * 100}%`)
    }


//Salidas
console.log(`Su monto de descuento es de ${entradaGeneral-entradaFinal}`)
console.log(`El costo final de tu entrada es ${entradaFinal}`);