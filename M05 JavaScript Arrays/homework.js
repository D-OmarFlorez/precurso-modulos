    /*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código: 
if (array.length===0){
   return undefined;
}return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length===0){
      return undefined;
   }return array[array.length - 1];
   //investigue un poco para poder hacerlo pero esta forma me parecio genial pues toma la extension de 
   //la lista y le quita uno que es para compensra que inicie de cero, y pues como no tengo conocimiento de
   //el arreglo me parecio ingenioso
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length; 
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   const nuevoarreglo=array.map((elemento) => elemento + 1);
   return nuevoarreglo;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   const frase= palabras.join(' ');
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   const tiene= array.include(elemento);
   return tiene;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
let suma = 0;    
   for (let b = 0; b < arrayOfNums.length; b++) {
     suma += arrayOfNums[b]; 
   }
   return suma;
}   

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
let suma = 0;
   for (let b = 0; b < resultadosTest.length; b++){
      suma += resultadosTest [b];
   }
   const promedio= suma / resultadosTest.length;
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:function numeroMasGrande(arrayOfNums) {
  if (arrayOfNums.length === 0) {
    return undefined; 
  }
  let maximo = arrayOfNums[0]; 
  for (let i = 1; i < arrayOfNums.length; i++) {
    if (arrayOfNums[i] > maximo){
      maximo = arrayOfNums[i]; 
   }
}
  return maximo; 
}
function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
     return 0; 
   }  
   let producto = 1;  
   for (let i = 0; i < arguments.length; i++) {
     producto *= arguments[i]; 
   }    
   return producto; 
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let cantidad= 0;
   for (let b = 0; b< array.length;b++){
      if (array[b]> 18){
         cantidad++
      }
   }
   return cantidad;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numerodedia === 1 || numerodedia=== 7){
      return 'es fin de semana'
   }else{
      return 'es dia laboral'
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   const a =num.toString();
   if (a.charAt(0)=== 9 ){
      return true;
   }else{
      return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if (array.length === 0){
      return true;
   }for (let i = 1; 1<array.length ; i++){
      if (array[i] !== 0){
         return false;
      }
   }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código: 
   const mesesPedidos = []; 
   for (let i = 0; i < array.length; i++) {
     const mes = array[i];
      if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
       mesesPedidos.push(mes); 
     }
   }    
   if (mesesPedidos.length === 3) {
    return mesesPedidos; 
   } else {
     return "No se encontraron los meses pedidos"; 
   }
 }
    

  

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
  
      const resultados = []; 
      for (let i = 0; i <= 10; i++) {
        const resultado = 6 * i;
        resultados.push(resultado); 
      }
      return resultados; 
    }

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   const mayoresACien = []; 
   for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayoresACien.push(array[i]); 
    }
   } 
   return mayoresACien;
 }

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const nuevoArreglo = [];   
   for (let i = 0; i < 10; i++) {
     num += 2; 
     if (num === i) {
       return "Se interrumpió la ejecución"; 
    }
     nuevoArreglo.push(num); 
   }
   return nuevoArreglo; 
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const nuevoArreglo = [];  
   for (let i = 0; i < 10; i++) {
     if (i === 5) {
       continue;
     }
     num += 2; 
     nuevoArreglo.push(num);
   }
   return nuevoArreglo; 
 }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
