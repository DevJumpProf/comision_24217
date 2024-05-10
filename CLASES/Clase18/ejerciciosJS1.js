
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "cadena de texto";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1985;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
return(str)
}
console.log(devolverString("Cadena de texto")); 
/* console.log(devolverString("Cadena de texto 2"));  */


/* let suma = (x, y) => x+y
console.log(suma(10,10)); */


function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
return x-y
}
console.log(resta(10,5));

/* ARROW FUNCTION */
/* const resta1 = (x,y)=>{
  return x-y
}
console.log(resta1(100,5)); */

const resta1 = (x,y)=> x-y ; console.log(resta1(100,5));

const multiplica= (x, y) => x*y ; console.log(multiplica(10,8));

const divide = (x, y) => x/y ; console.log(divide(21,7));
/* 
function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  if (x===y){
    return true
  }else {
    return false
  }

}
console.log(sonIguales(10,10)); */

const sonIguales=(x, y)=> x===y;console.log(sonIguales(10,10));

const tienenMismaLongitud = (str1, str2)=> str1.length ===str2.length
; console.log(tienenMismaLongitud("hola","chau"));

/* let nombre = "Nadia"
console.log(nombre.length); */

const menosQueCuarenta= num =>num <40 ;console.log(menosQueCuarenta(39));

const menosQueNoventa=num=> num<90 ; console.log(menosQueNoventa(91));

const mayorQueCincuenta =num => num>50 ; console.log(mayorQueCincuenta(51));

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:

}

const esPar =num => num%2===0 ; console.log(esPar(10));

const esImpar = num => num%2!==0; console.log(esImpar(9));


/* MAth */

/* const elevarAlCuadrado =num => num*num ; console.log(elevarAlCuadrado(4)); */
const elevarAlCuadrado =num => Math.pow(num,2); console.log(elevarAlCuadrado(4));

const elevarAlCubo = num => Math.pow(num,3); console.log(elevarAlCubo (2));

const elevar = (num, exponent) => Math.pow (num,exponent); console.log(elevar(2,3));

const redondearNumero= num => Math.round (num) ; console.log(redondearNumero(3.5));

const redondearHaciaArriba =num=> Math.ceil (num) ; console.log(redondearHaciaArriba(3.1));

const redondearHaciaAbajo =num=> Math.floor (num) ; console.log(redondearHaciaAbajo(3.9));

/* const numeroRandom= ()=> Math.round(Math.random()*32) ;
 console.log(numeroRandom());
 console.log(numeroRandom());
 console.log(numeroRandom());
 console.log(numeroRandom());
 console.log(numeroRandom()); */

   //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
/* const esPositivo=numero=> {
  if (numero>0){
    return "Es Positivo"
  }
  else if (numero<0){
    return "Es Negativo"
  }else {
return false
  }
}
console.log(esPositivo(-1)); */

const esPositivo = numero => numero===0 ?"es Cero" : numero>0 ? "Es Positivo" : "Es Negativo"

console.log(esPositivo(-1))

/* if ternario  */
/* if (numero==1){
  return "igual a 1"
}else {
  return "no es igual a 1"
}

// 
return numero==1? "igual a 1":"no es igual a 1" */



/* const agregarSimboloExclamacion =str => str + "!" ; console.log(agregarSimboloExclamacion("Hola")); */

const agregarSimboloExclamacion =str =>`${str}!` ; console.log(agregarSimboloExclamacion("Hola"));

/* const  combinarNombres= (nombre, apellido)=> "soy " + nombre + " " + apellido ;  */
const  combinarNombres= (nombre, apellido)=>` hola ${nombre} como estas ${apellido}  `
console.log(combinarNombres ("Bruce","Willis"));



/* const obtenerSaludo = nombre => "Hola" + " " + nombre  ; console.log(obtenerSaludo("Juan")); */
const obtenerSaludo = nombre => `Hola ${nombre} como estas `  
console.log(obtenerSaludo("Juan"));

  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:


const obtenerAreaRectangulo = (alto, ancho) =>ancho * alto ; 
console.log(obtenerAreaRectangulo(10,2));
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:


const retornarPerimetro = lado => lado*4 ; console.log(retornarPerimetro(10));
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

const areaDelTriangulo = (base, altura) => base*altura/2 ;
 console.log(areaDelTriangulo (10,4));
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

const deEuroAdolar = euro => euro*1.20 ; console.log(deEuroAdolar(250));
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

/* function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
letra = letra.toLowerCase ()
if (letra.length!=1){
  return"Dato incorrecto"
}else if (letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"){
  return `la letra ${letra} ES VOCAL`
} else {
  return `la letra ${letra} NO ES VOCAL`
}

} */
 const esVocal = letra =>{ letra = letra.toLowerCase()
return letra.length!=1 ? "Dato incorrecto" :(letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u") ?
`la letra ${letra} ES VOCAL` :`la letra ${letra} NO ES VOCAL`
 }
console.log(esVocal("A"));