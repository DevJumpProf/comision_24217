const express = require ("express")
const app = express()
const port = 3030
const cors = require("cors")
const posteosRouter = require("./routes/posteosRouter.js")

app.use(cors())
app.use (express.json()) // analizamos y lo ponemos en formato req.body

    /*    pedido http/ruta - funcion = controler */
app.get ("/",(req,res)=>{
    res.send("estas en el home")
}) // sin modularizar

app.use ("/posteos",posteosRouter)

app.listen(port,()=>{
    console.log(`Server ok en el puerto ${port}`);
})