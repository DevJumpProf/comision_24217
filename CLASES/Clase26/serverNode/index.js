const http = require ("http") //   "type": "commonjs",
/* import http from "http"  *///   "type": "module",

http.createServer((req,res)=>{
    res.writeHead(200, {"content-type" : "text/plain"})
if(req.url=="/"){
    res.end ("estas en el home")
}else if (req.url=="/conocenos"){
    res.end ("estas conocenos")
}else {
    res.end ("la pagina no existe")
}
})
.listen (3030,"localhost")

