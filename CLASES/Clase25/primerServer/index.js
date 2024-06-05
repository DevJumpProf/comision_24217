const http = require ("http") // modulo nativo

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type": "text/plain"}) // contenido en texto plano
    res.end ("servidor creado con Nodejs")
}).listen(3030,"localhost") // puerto y origen del servidor
