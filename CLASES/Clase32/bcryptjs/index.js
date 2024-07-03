const bcryptjs = require ("bcryptjs")

let inputPassRegistrarme = "contraseña12345"
let inputPassRegistrarme2 = "contraseña12345"

let encriptar2 = bcryptjs.hashSync(inputPassRegistrarme2,8)
console.log(encriptar2)
//encriptar
let encriptar = bcryptjs.hashSync(inputPassRegistrarme,8)
console.log(encriptar);


let inputPassLogueo = "contraseña1234"

let comparacion = bcryptjs.compareSync(inputPassLogueo,encriptar)
console.log(comparacion);


