

// capturo el elemento x ID
/* let titulo = document.getElementById("titulo")
console.log(titulo); */

//capturamos el elemento x CLASE
/* let contenedor = document.getElementsByClassName ("contenedor")
console.log(contenedor); */

//capturamos el elemento x TAG /ETIQUETA
/* let parrafo = document.getElementsByTagName ("p")
console.log(parrafo); */

/* let titulo = document.getElementById("titulo")
titulo.innerHTML = ("este es un titulo creado desde JS") */

/* let parrafo = document.getElementsByTagName ("p")

parrafo[2].innerText = "esto es un parrafo" */

/* parrafo[0].innerText = "esto es un parrafo"
parrafo[1].innerText = "esto es otro parrafo" */


/* selectores CSS
h1
.contenedor
#titulo 
*/

/* let parrafo = document.querySelector("p")
let parrafos = document.querySelectorAll("p")
console.log(parrafos);
 */ 
/* 
let contenedor = document.querySelector(".contenedor")
contenedor.innerHTML = `<img src="./imagen.png" alt="imagen" width="100px">`

 */


/* let boton = document.createElement ("button")
boton.innerText = "Soy un Boton"

let contenedor = document.querySelector(".contenedor")
contenedor.appendChild (boton) */

/* let h1 = document.createElement("h1")
let texto = document.createTextNode ("soy un titulo")
h1.appendChild (texto)

document.body.appendChild(h1) */

/* let p = document.querySelector("#p1")
p.innerText = "Codo a Codo"
p.className = "dato"
p.style.color = "red" */


let boton = document.createElement("button")
boton.innerText =("Soy un Boton")

let contenedor = document.querySelector(".contenedor")

contenedor.appendChild(boton)

/* EventO */

const evento = () =>{
    return alert ("Presionaste el boton")
}


boton.addEventListener("click",evento)

/* boton.OnClick () INVESTIGAR */



