// Declaracion de variables

var nombreMedicina = [];
var precioMedicina = [];
var registrarOtro = false;
var registrar = 0;
var contador = 0;
var index = -1;

//Entradas

do {
   
        for (let i = 0; i <= nombreMedicina.length; i++) {
            

            if (contador == i){ 
            let auxNombre = prompt("¿Nombre de la medicina que quiere registrar?");
            nombreMedicina.push(auxNombre);
            index = nombreMedicina.indexOf(auxNombre);
            }  
            
            if (index != -1) {
                let cambiarPrecio = false
                cambiarPrecio = confirm("Este medicamento ya se encuentra registrado, ¿desea cambiar el precio?");

                if (cambiarPrecio == true) {
                    let nuevoPrecio = prompt("Ingrese el nuevo precio del producto: ");
                    precioMedicina.splice(index, 1, nuevoPrecio);
                }
            }
    
        }

        for (let i = 0; i <= precioMedicina.length; i++) {
             
            if (contador == i){ 

            let auxPrecio = prompt("Ingrese el precio de la medicina que desea registrar:");
            precioMedicina.push(auxPrecio);

            }

        }

       /*  while (precioMedicina <= 0 || isNaN(precioMedicina)){
            alert("¡INGRESE UN PRECIO CORRECTO!")
            precioMedicina = prompt("Ingrese el precio de la medicina que desea registrar:");
            precioMedicina = parseInt(precioMedicina);
        } */

    registrarOtro = confirm("¿Desea registrar otro medicamento?");

        if (registrarOtro == true) {
            contador = contador+1;
        }
    

} while (registrarOtro == true) {
    registrarOtro = false
};

todosLosDatos = [nombreMedicina, precioMedicina];
console.table(todosLosDatos);
