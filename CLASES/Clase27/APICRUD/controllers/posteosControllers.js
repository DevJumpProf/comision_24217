

const traerPosteos = (req,res) =>{
res.send ("busco los posteos de la BD y los envio en .JSON")
}

const traerUnPosteo = (req,res) =>{
    res.send ("busco el posteo de la BD y lo envio en .JSON")
    }

    module.exports = {traerPosteos,traerUnPosteo}