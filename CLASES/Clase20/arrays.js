// array - matrices - arreglos - vectores
/* cualquier tipo de datos */

let datos = ["cadena",true,8,["dato1","dato2"]]

/*  INDICE          0       1       2        3      4 */
let animales = ["Gato", "Perro","Conejo","Perro", "Pez"]
/* ELEMENTOS         1      2      3        4       5 */

let numeros = [1,2,8,7,4,6,7,3,12]



/* .concat */
/* const nuevo = numeros.concat(animales,datos);
console.log(nuevo); */

/* .join *//*  une los elemento de un array en una cadena (string) */
/* podemos pasarle un parametro que es el caracter de separacion */

/* console.log(animales.join("/")); */


/* splice cambia el contenido de un array eliminando los elementos existentes y/o agregando nuevos elementos */
/* animales.splice(1,2,"Oso")
console.log(animales) */;


/* slice () devuelve una copia de una parte del array dentro de un nuevo array, empezando por el inicio hasta el fin ( fin no esta incluido ) no modifica el array actual */

/* const nuevoArray = animales.slice(1,4)
console.log(nuevoArray); */

/* indexOf() : Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente */
/* 
console.log(animales.indexOf("Perro")); 
 */

/* reduce() : Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor. */

/* let resultado =numeros.reduce((acumulador,actual)=>acumulador+actual);
console.log(resultado);
 */
/* includes() : Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.
.includes
 */
/* console.log(animales.includes ("Pez")); */

/* every() : Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada. */
/* console.log(numeros.every(numero=>numero>12)); */

/* some() : Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array
.some */
/* console.log(numeros.some(numero=>numero>7)); */

/* .find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.
.find */

/* console.log(numeros.find(numero=>numero>3)); */

/* .forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo. */

/* animales.forEach((animal, i)=>{
  console.log(`El ${animal} está en la posicion ${i+1}`);
})
 */

/* .filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición
.filter */
/* 
const nuevoArray = animales.filter (animal=>animal=="Perro"||animal==="Gato")
console.log(nuevoArray);
 */

/* .map() 
.map() : Permite recorre el array y modificar los elements presentes en él, retornando un nuevo array con la misma longitud que el original. */

/* const nuevoArray = numeros.map(numero => numero*10 )
console.log(nuevoArray); */

/* shift()` eliminará el primer elemento de la matriz. */
/* 
animales.shift()
console.log(animales); */


/* `.unshift(item)` colocará un nuevo elemento en la primera posición de la matriz,  */
/* animales.unshift("Canguro")
console.log(animales); */


/* `.pop` elimina el último elemento de la matriz, disminuyendo la longitud en 1. `.pop` */
/* animales.pop()
console.log(animales); */

/* `.push` agrega un elemento al final de la matriz, incrementando su longitud en 1. `.push` devuelve la nueva longitud. */
/* animales.push ("Tiburon")
console.log(animales); */

/* acceder dinamicamente al ultimo elemento del Array */
/* console.log(animales[animales.length-1]); */

//acceder  - indice 
/* console.log(animales[1]); */

/* reasignar */
/* animales[1] = "Loro"
console.log(animales); */
/* let scooby = animales[1]
console.log(scooby);

 */
//.length
/* console.log(animales.length); */



