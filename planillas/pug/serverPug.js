//mosulos
const { error } = require('console');
const exp = require('constants');
const express = require('express');
const hbrs = require("express-handlebars");
const { extname } = require('path');
const path = require("path");
const data = require("/index/archivos/Entrega.js")
const app = express ();


const agregados = []

//middlewares
app.use (express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// motor de planillas
app.set('views', './viewsPug')
app.set('view engine', "pug")

//rutas

app.get("/productos", (req, res)=>{
    res.render('productos', {mensaje: data.listAll()})
});

app.post("/productos", (req, res)=>{
    if (!req.file){
        const err = new error("por favor complete la imformacion")
    } else {
        agregados.push(req.params).data.guardar();
        res.render('productos', {mensaje: agregados})
    }
})

//servidor


const port = 8081;
const server = app.listen(port, ()=>{
    console.log("app escuchando")
});