/* interacciones */

/* prompt */

/* let nombre = prompt ("Decime tu nombre") */
/* alert (nombre) */
/* document.write (nombre) */
/* let ingreso = confirm (nombre + " deseas ingresar?")  */ /* = true o false */

/* let num1 = prompt ("decime un num")
let  num2= prompt ("decime otro num") */

/*    "10"+"10"  "1010" */
/* document.write (num1+num2) */

/* console.log(parseInt("2")); 
console.log(parseFloat("2.14"));  */
/* 
NUMBER */
/* let num1 = Number(prompt ("decime un num"))
let num2= Number (prompt ("decime otro num")) 

document.write(num1+num2)
 */

//OPERADORES
/*  let num1 = prompt ("decime un num")
let num2= prompt ("decime otro num")  */

/*    "10"   "10" */
/*  document.write (num1/num2)  */

/* 
document.write ("hola")
console.log("lo veo por consola"); */

/* javascript
interpretado
case sensitive */

/* let hola;
let Hola */

/* operadores matematicos */
console.log(21 + 7);
console.log(21 - 7);
console.log(21 * 7);
console.log(21 / 7);
console.log(21 % 7);

/* num%2 == 0 PAR
num%2 == 1 IMPAR */

/* 
DE COMPARACION */ /* RESULTADO = BOOLEANO */
let num1 = 32;
let num2 = 40;
let num3 = "32";
let num4 = 32;

console.log(num1 == num3); /*   es igual?  */
console.log(num1 === num3); /* es estrictamente igual */
console.log(num1 != num3); /* no igual a */
console.log(num1 !== num3); /* estrictamente no  */
console.log(num1 > num2); /*mayor */
console.log(num2 > num1); /*menor */
console.log(num2 >= num1); /*mayor o igual */
console.log(num1 <= num4); /*menor o igual */
/* 
OR    AND 
||    && */

/*   este y este TRUE */
console.log(32 > 31 && 40 < 45);
//TRUE   //TRUE

/*      ESTE O ESTE  */
console.log(10 > 9 || 9 > 10);
/*    TRUE  FALSE */

/*  condicional if */
/* let edad = 18
let nombre = "Elsa"
 */
/* if (edad>=18){
console.log(nombre + " podes pasar porque tenes " + edad + " años");
}else {
console.log(nombre + " no podes pasar");
} */

/* if ternario */
/* condicion ?true : false*/

/* let edad = 19
edad>=18 ? console.log("podes pasar"):console.log("no podes pasar") */

let edad = 18;
let nombre = "Elsa";

/* concatenacion */

console.log(nombre + " tu edad es " + edad);

/* "backtick" */

console.log(`${nombre} tu edad es ${edad}`);

/* ${variable} */
/* alt+96
altGr + } */

var nota = 10;
console.log("He realizado mi examen.");
// Condición
/* if (nota <= 5) {
  calificacion = "Insuficiente";
} else if (nota <= 6) {
    calificacion = "suficiente";
} else if (nota < 8) {
  calificacion = "Bien";
} else {
  calificacion = "Sobresaliente";
}
console.log("He obtenido un", calificacion);
 */
/* ternario  */
/* nota <= 5 ?calificacion = "Insuficiente" :nota <= 6? calificacion = "suficiente" :nota < 8 ? calificacion = "Bien" :calificacion = "Sobresaliente"
console.log("He obtenido un", calificacion); */

/* .length */
/* metodo para contar caracteres */

/* let nombre1 = "Agostina"
console.log(nombre1.length);
let edad1= 19

if (edad1>=18&&nombre1.length>=8){
  console.log(`${nombre1} tenes ${edad} años de edad y  un regalo.. tu nombre tiene ${nombre1.length} letras`);
}else {
console.log("no cumple las condiciones");
} */

/* tarea pasarlo a ternario */

/* switch */

let semaforo = "rojo";

switch (semaforo) {
  case "rojo":
    console.log("no avances");
    break;
  case "amarillo":
    console.log("precaucion");
    break;
  case "verde":
    console.log("avanzar");
  default:
    console.log("no es color de semaforo");
    break;
}

/* ejercicio */
/* serie pelicula libro */