/* OBJETOS */

const celular = {
/*     claves : valores */
marca : "Motorola",
modelo : "V3",
stock : 200,
/* encender :function (){return (`encendido de ${this.marca} ${this.modelo}`)} */
encender : ()=> (`encendido de ${celular.marca} ${celular.modelo}`)
}

console.log(celular);
/* notacion de puntos */
console.log(celular.modelo);

console.log(celular.encender());


/* ...spread operator */

const generoPelicula  = {
genero: "Aventura",
puesto: 1,
ranking: 12
}
console.log(generoPelicula);

const pelicula = {
    nombre : "El Gran Pez",
    director: "Tim Burton",
    lanzamiento : 2003,
    mostrarInfo : ()=> (`la pelicula ${pelicula.nombre} se estreno en ${pelicula.lanzamiento}`),
/*     puesto: 12, */
    ...generoPelicula
}
console.log(pelicula.genero);
console.log(pelicula);
console.log(pelicula.mostrarInfo());
/* destructuracion */
/* destructuring */

/* copiar datos CONST DESTRUCTURING */

let {director,nombre:nombrepelicula,mostrarInfo:nueva} = pelicula
console.log(nombrepelicula);
console.log(director);
console.log(nueva());

/* copiar datos SIN DESTRUCTURING */
let movie= pelicula.nombre
console.log(movie);
