//modulos

const { urlencoded } = require("express");
const express = require("express")
const morgan = require("morgan")

//server

const app = express();
const routerProductos = require("/src/routes/rutas.routes.js");
const multer = require ("multer")

//middlewsares
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static(__dirname + "/index"));
app.use(urlencoded({extended: true}));
app.use((req, res, next)=>{
    console.log("se ejecuta");
    next()
});

//rutas

app.use("/api/productos", routerProductos)


//servidor
app.use('/api/productos', router)

app.listen(8080)


