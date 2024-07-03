// requerimos la biblioteca Crypto.Js

const cryptoJS = require ("crypto-js")

const mensaje = "Mensaje secreto"
const clave = "ClaveSecreta12345"

/* encriptarlo */

const mensajeEncriptado = cryptoJS.AES.encrypt(mensaje,clave).toString()
console.log(mensajeEncriptado)
/* AES */
/* Crypto.js utiliza el algoritmo de cifrado AES (Advanced Encryption Standard) de 256 bits para cifrar los mensajes.  */

const mensajeDesencriptado = cryptoJS.AES.decrypt(mensajeEncriptado,clave ).toString(cryptoJS.enc.Utf8)

console.log(mensajeDesencriptado);
