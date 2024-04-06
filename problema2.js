var max = 15;
var numeroLoteria = 10;

var numeroRandom1 = `Numero generado ${Math.floor(Math.random()*max)}`;
console.log(numeroRandom1);

var numeroRandom2 = `Numero generado ${Math.floor(Math.random()*max)}`;
console.log(numeroRandom2);

var numeroRandom3 = `Numero generado ${Math.floor(Math.random()*max)}`;
console.log(numeroRandom3);

ganadorLoteria = numeroRandom1 + numeroRandom2 - numeroRandom3 ;
ganadorLoteria = 10;
if (ganadorLoteria==numeroLoteria) {
    console.log(`GANASTE! EL GANADOR ES ${numeroLoteria}`)
}
