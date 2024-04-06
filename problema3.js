//Desclaracion de variables

var max = 20;
var lapso1;
var lapso2;
var lapso3;
var notafinal;

//Inicializacion de variables

lapso1 = Math.round(Math.random()*max);
lapso2 = Math.round(Math.random()*max);
lapso3 = Math.round(Math.random()*max);

//Entradas

//Procesos

notafinal = (lapso1+lapso2+lapso3) / 3;

//Salidas

console.log(lapso1);
console.log(lapso2);
console.log(lapso3);
console.log(`La nota final del estudiante es ${notafinal}`);

if (notafinal >= 10) {
    console.log(`Ha aprobado el semestre`)
    
} else { 
    console.log(`Ha reprobado semestre`)
    
} 

if (notafinal >= 19) {
    console.warn(`Felicidades, tienes notas excelentes`)
} 
if (notafinal <= 7) {
    console.error(`Debes esforzarte mas!`);
}


