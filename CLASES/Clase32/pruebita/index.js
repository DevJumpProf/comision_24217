const bcryptjs = require ("bcryptjs")
const cryptoJS = require ("crypto-js")

const mensaje = "Mensaje secreto"

let encriptar = bcryptjs.hashSync(mensaje,8)
console.log(encriptar)

const clave = "ClaveSecreta12345"

const mensajeEncriptado = cryptoJS.AES.encrypt(encriptar,clave).toString()
console.log(mensajeEncriptado)
/* AES */
/* Crypto.js utiliza el algoritmo de cifrado AES (Advanced Encryption Standard) de 256 bits para cifrar los mensajes.  */

const mensajeDesencriptado = cryptoJS.AES.decrypt(mensajeEncriptado,clave ).toString(cryptoJS.enc.Utf8)

console.log(mensajeDesencriptado);

// comparacion con bcryptjs
let comparacion = bcryptjs.compareSync(mensaje,mensajeDesencriptado)
console.log(comparacion);

