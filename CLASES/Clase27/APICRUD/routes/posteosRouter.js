const express = require ("express")
const router = express.Router()

const {traerUnPosteo,traerPosteos} = require("../controllers/posteosControllers.js")

router.get ("/",traerPosteos) // 
router.get ("/:id",traerUnPosteo) // 

/* router.post ("/",(req,res)=>{
    res.send("tomo lo que viaja en el req.body y lo guardo en la BD")
}) // 

router.put ("/:id",(req,res)=>{
    res.send("busco el posteo tomo lo que viaja en el req.body y  y lo actualizo con lo guardo en la BD")
}) // 
router.delete ("/:id",(req,res)=>{
    res.send("elimino el posteo de la BD")
}) // 
 */

module.exports = router
