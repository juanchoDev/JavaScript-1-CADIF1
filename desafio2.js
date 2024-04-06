/******Inicialización de variables******/
var dia = 0;
var edad = 0;
var sexo = false;
var estudiante = false;
var descuento = 0;
var preestreno = false;
var descuentoNiños = 0;
var descuentoAdultos = 0;
var min = 1;
var max = 31;
var numeroTicket = Math.floor(Math.random()*(max - min) + min);
const precioTicket = 10;   
var precioFinal; 

/******Entradas******/

dia = parseInt(prompt("¿Para que dia de la semana quiere su boleto? 1 = LUNES,  2 = MARTES, 3 = MIERCOLES, 4 = JUEVES, 5 = VIERNES, 6 = SABADO, 7 = DOMINGO"));

while (dia <= 0 || dia > 7 || isNaN(dia)){
    alert("DIA INCORRECTO, POR FAVOR ESCRIBA EL NÚMERO DE DIA CORRECTO: 1 = LUNES,  2 = MARTES, 3 = MIERCOLES, 4 = JUEVES, 5 = VIERNES, 6 = SABADO, 7 = DOMINGO")
    dia = parseInt(prompt("¿Para que dia de la semana quiere su boleto? 1 = LUNES,  2 = MARTES, 3 = MIERCOLES, 4 = JUEVES, 5 = VIERNES, 6 = SABADO, 7 = DOMINGO"));
}

edad = prompt("¿Cual es su edad?");
sexo = confirm("¿Es usted mujer?");
estudiante = confirm("¿Es estudiante?");

/******Procesos******/

//Descuento para adultos

if ((dia == 2 || dia == 3 || dia == 5 || dia == 6 || dia == 7) && edad >= 60) {
    descuentoAdultos = 0.4;
  }

//Tipo de sexo
if (sexo == true) {
    sexo = "femenino";
} else {
    sexo = "masculino";
}

//Dias de la semana y descuentos correspondientes

if  (dia == 1) {
    dia = "Lunes";
    descuento = 0.5;
}   
else {
    if  (dia == 2) {
        dia = "Martes";
        if (estudiante == true) {
            descuento = 0.5;
        }
    }
    else {
        if (dia == 3) {
            dia = "Miercoles";
            preestreno=confirm("¿La pelicula será un pre-estreno?"); 
                if (preestreno == true) {
                    descuento = 1.3;
                }
        }   
        else {
             if (dia == 4) {
                 dia = "Jueves";
                 if (sexo == "femenino") {
                    descuento = 0.3;
                 }
             }
                 else {
                     if (dia == 5) {
                         dia = "Viernes";
                         if (edad < 8) {
                            descuentoNiños = 0.2;
                         }
                     }
                         else {
                             if (dia == 6) {
                                 dia = "Sabado";
                                 if (edad < 8) {
                                    descuentoNiños = 0.2;
                                 }
                             }
                                 else { 
                                    if (dia == 7) {
                                        dia = "Domingo";
                                        if (edad < 8) {
                                            descuentoNiños = 0.2;
                                        } 
                                }
                                      }
                             }
                    }
            }
        }
    }

// Si sale el número de ticket 21, el boleto es gratis

if (numeroTicket == 21){
    descuento = 1;
}

// Si o No es estudiante (para imprimir luego)

if (estudiante == false) {
    estudiante = "no"
} else {
    if (estudiante == true)
    estudiante = "si"
}

// Calculo del precio final del ticket. El calculo  cambia por el importe adicional de los miercoles si es preestreno

    precioFinal = precioTicket - ((precioTicket*descuento) + (precioTicket*descuentoNiños) + (precioTicket*descuentoAdultos));
    
    if (dia == "Miercoles" && preestreno == true) {
        precioFinal = precioTicket + ((precioTicket*descuento)-precioTicket) - (precioTicket*descuentoAdultos) - (precioTicket*descuentoNiños);
    }
    

//Salidas

    if (descuento == 1) {
        alert(`NÚMERO DE TICKET: ${numeroTicket}, DIA: ${dia}, EDAD: ${edad}, ESTUDIANTE: ${estudiante}, SEXO: ${sexo} - MONTO A PAGAR: ${precioFinal} ¡FELICIDADES, SU TICKET ES GRATIS!`);
        console.log(`El descuento fue de ${descuento*100}% porque le tocó el TICKET GRATIS: ${numeroTicket}, es para el ${dia}, el usuario es ${sexo}, ${estudiante} es estudiante y tiene ${edad} años`) 
    } else {
        alert(`NÚMERO DE TICKET: ${numeroTicket}, DIA: ${dia}, EDAD: ${edad}, ESTUDIANTE: ${estudiante}, SEXO: ${sexo} - MONTO A PAGAR: ${precioFinal}`);
        console.log(`El descuento fue de ${descuento*100}% porque es para el ${dia}, el usuario es ${sexo}, ${estudiante} es estudiante y tiene ${edad} años`) 
    }



