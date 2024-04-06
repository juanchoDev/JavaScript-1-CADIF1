Requerimientos generales:
En base al problema planteado: El ingreso de un vendedor está determinado por: su sueldo base, el monto mensual de sus ventas y un bono en caso de ser de 3era edad. El porcentaje de la comisión por vtas se determina en base a la siguiente tabla: MONTO VENDIDO % Más de 0 y menor a Bs. 75000 5; >= 90000 y <200000 7; >=300000 y <1000000 8; >= 1500000 10; otro mto fuera de rango 6. Si la persona es de tercera edad se le debe pagar un bono de adulto mayor de 40000 Bs. Tercera edad: [M]ujeres de 55 años o más [[H]ombres de 60 años o más. PREMISA: El programa debe permitir evaluar el ingreso de enesimos vendedores y este dato debe ser solicitado al usuario al comienzo de la ejecucion. Atienda los requerimientos especificos que permiten la resolucion del problema.

Requerimientos específicos:
1.- Declare todas las variables necesarias para la resolucion del problema. Asegurese de que esten correctamente inicializadas. En donde necesite solicitar los datos necesarios, hagalo con el uso de prompt. Use conversion de Strings en caso de que sea necesario y preveer cualquier error subyacente relacionado con los tipos de datos de las variables.

2.- Con el uso de ciclos valide el ingreso de datos basado en: -Ningun valor numerico puedes ser negativo o cero (con la excepcion del "monto mensual de ventas" que puede ser cero).
-Las edades deben ser mayores a cero.
-El sexo solo puede ser "hombre" o "mujer".

3.- Con el uso de un ciclo establezca el numero de iteraciones que el bloque principal del programa se repetira, en base al numero de vendedores suministrado por el usuario

4.- La seleccion de la comision por ventas debe hacerse con el uso de switch

5.- Al finalizar el ingrso de datos y procesado de cada vendedor mostrar el resultado final usando concatenacion tal como sigue: El ingreso del "n°" vendedor esta basado en: su sueldo base: ###, el monto mensual de sus ventas: ###, el procentaje de comision por ventas: #%, el monto de comision por venta: ###, bono tercera edad: ###. Total: ####