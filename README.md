# pruebajscredito

### Motor de decisión de crédito

Para una empresa financiera, se desea conocer cuál es el conjunto de créditos 
adecuados para un cliente. Para determinar este conjunto, se necesita definir el monto 
mínimo y máximo de crédito; adicionalmente, se busca obtener una recomendación 
óptima de la línea de crédito. Para caracterizar al cliente se tienen las siguientes 
variables: el tipo de nómina (valor en {A, B, C, D}), la fecha de ingreso de primer empleo y 
el género (valor en {m, f}). Tanto el monto mínimo como el máximo de crédito se 
seleccionan en base a las siguientes 4 tablas.

El problema se debe de realizar en JavaScript y se tiene que entregar un archivo llamado 
motor.js en donde se defina una función calculoMotor que tenga como parámetros 
de entrada: tipoNomina (string), fechaPrimerEmpleo (Date) y genero (string). La salida 
de la función será un objeto que contenga los atributos: montoMinimo, montoMáximo y 
recomendacionLinea los cuales deberán de contener el monto mínimo y máximo de 
crédito y la recomendación óptima de la línea de crédito respectivamente.
Adicionalmente, se deben de entregar los resultados de evaluar la función utilizando el 
siguiente conjunto de datos: **La entrega es en formato libre. 
