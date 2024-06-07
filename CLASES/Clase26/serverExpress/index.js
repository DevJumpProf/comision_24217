const express = require("express");
const app = express();
const port = 3030;

/* 
        RUTA     METODO = CONTROLADOR */
app.get("/", (req, res) => {
  res.send("estas en el home");
});

app.get("/conocenos", (req, res) => {
  res.send("estas conocenos : express");
});

app.listen(port, () => {
  console.log(`el servidor ok en el puerto ${port}`);
});

/* npm i nodemon -g */

/* 
 - CRUD -    METODOS DE HTTP

 /HOME
 CREATE  - CREAR - POST
 READ  - LEER - GET
 UPDATE  - ACTUALIZAR - PUT
 DELETE - BORRAR - DELETE */

/*  /HOME TIENDA */
/* READ  - LEER - GET */

/* /REGISTER TIENDA
POST */
