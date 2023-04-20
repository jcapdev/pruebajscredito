// Funcion para calcular el credito
const calculoMotor = ()=>{
 
  // al iniciar la funcion se pediran los siguientess datos, primer empleo, tipo de nomina y genero 
 let fechaPrimerEmpleo = prompt('introduce la fecha de inicio formato yyyy-mm-dd')
 let tipoNomina = prompt('introduce el tipo de tipoNominaa (A,B,C,D)')
 .toUpperCase()
 let gen = prompt('introduce el tipo de genero M para masculino y F para femenino')
 .toUpperCase()
 
 // se  hace una validacion ,, donde los campos deben ser llenos y en el caso del tipo de omina y genero deben ser datos especificos
 if (fechaPrimerEmpleo != '' &&
 (tipoNomina == 'A' || tipoNomina == 'B' || tipoNomina == 'C' ||tipoNomina == 'D') &&
 (gen == 'M' || gen == 'F' )){
 
   //const fecha1 = '2021-03-01';
   //calculando el numero de meses entre la fecha de empleo inicial a la fecha actual
   const fecha1 = fechaPrimerEmpleo;
   const fecha2 = '2023-04-20';
 
   
   const fechaInicioObj = new Date(fecha1);
   const fechaFinObj = new Date(fecha2);
   
   const diffMeses = (fechaFinObj.getFullYear() - fechaInicioObj.getFullYear()) * 12 + 
     (fechaFinObj.getMonth() - fechaInicioObj.getMonth());
   
   console.log(diffMeses); // Output: 15
   
   // agregando resultados a variables
   var meses = diffMeses;
   var nomina = tipoNomina;
   var genero = gen;
 
   console.log(meses);
   console.log(nomina);
   console.log(genero);
 
 // recorriendo los valores, la data esta en un archivo json 
 fetch('data.json')
   .then(response => response.json())
   .then(data => {
     // Filtrar los datos que cumplen con las condiciones
     const personasFiltradas = data.filter(persona =>
       persona.meses === meses && persona.tipoN === nomina && persona.genero === genero
     );
 
     // Obtener la tabla y el cuerpo de la tabla
 
 
       console.log(personasFiltradas);  
 
       // mapeando y haciendo una compartiva de los valores de meses, tipo de nomina y geero
       const output = {};
 
       personasFiltradas.forEach(obj => {
         const { meses,tipoN, salario, genero, tipoM } = obj;  
         const key = `${meses}-${tipoN}-${genero}`;
         if (output[key]) {
           output[key].credito.push(salario);
         } else {
           output[key] = {      
             meses,
             tipoN,
             salario,
             genero,
             tipoM,
             credito:[salario]
           };
         }
       });
 
       // se crea otro objeto añadiendo los atributos de credito maximo y credito minimo
 
       const result = Object.values(output);
       console.log(result); 
 
         const div = result.map(obj => {
           const [minId, maxId] = obj.credito.sort((a, b) => a - b);
           return {
             ...obj,
             "minimum": minId,
             "maximum": maxId,
             "credito": undefined
           };
         });
 
         console.log(div);
         // se crea el atributo de linea de credito
         // se calculo el  valor maximo, comparando p1(monto min + vmonto maximo - mon min ) y 𝑝2 (𝑚𝑜𝑛𝑡𝑜 𝑚í𝑛𝑖𝑚𝑜 + 0.0175 ∗ (𝑚𝑜𝑛𝑡𝑜 𝑚á𝑥𝑖𝑚𝑜 − 𝑚𝑜𝑛𝑡𝑜 𝑚í𝑛𝑖𝑚𝑜)
 
 
         const calinea = div.map(obj => {
           const linea = (Math.max(obj.minimum + Math.sqrt(obj.maximum - obj.minimum)),(obj.minimum + 0.0175 * (obj.maximum - obj.minimum)) );
           return { ...obj, linea };
         });
 
         console.log(calinea);
          // contruccion de la tabla en html
 
         //const tabla = document.getElementById('tabla-personas');
         const tabla = document.querySelector('table');
 
         const tbody = document.createElement('tbody');
       
 
     // Agregar las filas a la tabla
     for (let calineas of calinea) {
       const fila = tbody.insertRow();
       const celdaTipoN = fila.insertCell();
       const celdaMeses = fila.insertCell();
       const celdaGenero = fila.insertCell();
       const celdaSalarioMin = fila.insertCell();      
       const celdaSalarioMax = fila.insertCell();
       const celdaSalarioLinea = fila.insertCell();
       celdaTipoN.innerHTML = calineas.tipoN;
       celdaMeses.innerHTML = calineas.meses;
       celdaGenero.innerHTML = calineas.genero;
       celdaSalarioMin.innerHTML = calineas.minimum;
       celdaSalarioMax.innerHTML = calineas.maximum;
       celdaSalarioLinea.innerHTML = calineas.linea;
     }
 
     // Reemplazar el cuerpo de la tabla vacío con el nuevo cuerpo de la tabla
     tabla.appendChild(tbody, tabla.firstChild);
   });
 
 }  
 }
 // activando funcion
 calculoMotor();
 
 
   