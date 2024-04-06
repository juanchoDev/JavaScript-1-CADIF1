var precio = 30;
var cantidad = 3;
var totalsiniva = precio * cantidad;
var iva = 0.16* totalsiniva;

console.log("El precio del producto es", precio);
console.log("La cantidad a llevar es", cantidad);
console.log("El precio total sin iva es", totalsiniva);
console.log("El iva del producto es", iva);

console.log(`El total es ${iva+totalsiniva}`);
console.log("El total es", iva+totalsiniva);
