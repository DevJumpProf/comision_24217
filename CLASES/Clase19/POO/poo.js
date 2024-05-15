/* ## ¿Que es la POO?
¿Qué es POO?
para definir POO podemos definir cada sigla con lo que sabes hasta ahora:

Programación: Escribir código con el objetivo de darle ordenes al ordenador
Orientado a: dirigido a
Objetos: modelo informático de un objeto real/ficticio
Obtenemos que POO es: Escribir código dirigido a modelar objetos

Es un paradigma de programacion (un metodo para crear sistemas) */

/* PILARES */

/* Abstracción
Abstraer, es eliminar los detalles inncesarios para solo nos enfocamos en los aspectos que son necesarios para el contexto o sistema que estamos desarrollando.

Encapsulación
Se centra en ocultar los detalles que no son relevantes para el exterior
Es la agrupación de datos (propiedades) y los métodos que actúan sobre esas propiedades de manera que el acceso a esos datos está restringido desde fuera del paquete (clase).
En POO, esto significa que un objeto almacena su estado de forma <b>privada</b>,y solo los métodos del objeto tienen acceso para cambiarlo.

Herencia
Es la forma en la que una clase (hija) hereda de otra clase (padre) sus métodos y atributos.
La herencia permite la reutilización de código de una clase en otra y es ideal implementarla cuando los objetos tienen similitudes entre sí.


Polimorfismo 
Polimorfismo
Se refiere a la capacidad de realizar una misma acción en diferentes formas.
<b>Polimorfismo</b> es una palabra griega que significa <b>"con muchas formas"</b>

*/

class Libros {
    #autor
    #titulo
    #precio
    #stock
    #id
  constructor(autor, titulo, precio, stock, id) {
    this.#autor = autor,
    this.#titulo = titulo,
    this.#precio = precio,
    this.#stock = stock,
    this.#id = id
  }
  verInfo(){
    let info =(`Info del libro: ${this.#titulo}, autor: ${this.#autor}, precio: ${this.#precio}, id: ${this.#id}`)
    return this.#stock>0 ? info += ` Stock: ${this.#stock}` : info+= " Stock no disponible"
  }
}

/* +=
info = info + `Stock: ${this.stock}`
info += `Stock: ${this.stock}` */

const libro1 = new Libros ("Guy des cars", "El Solitario", 15000,10,"1")
const libro2 = new Libros ("JK. Rowling", "Harry Potter: La orden del fenix", 3000, 0, "1")

console.log(libro1.precio);
/* libro1.precio = 0
console.log(libro1.precio); */
console.log(libro1.verInfo() );



class Comics extends Libros {
    #volumen
    #ilustradores
constructor (autor, titulo, precio, stock, id,volumen,ilustradores){
    super (autor, titulo, precio, stock, id),
    this.#volumen= volumen,
    this.#ilustradores= ilustradores
}
infoComic(){
let info = `ilustradores: ${this.#ilustradores}, volumen : ${this.#volumen}`
return `${this.verInfo()}, ${info}`
}
}

const comic1 = new Comics ("Stan LEE", "Spiderman",15000,0,1,123,["ilustrador","Ilustradora"])
const comic2 = new Comics ("Stan LEE", "Spiderman",15000,0,1,123,"ilustrador")


console.log(comic2.infoComic());

