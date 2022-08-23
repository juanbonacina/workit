//mosulos
const { error } = require('console');
const express = require('express');
const hbrs = require("express-handlebars");
const { extname } = require('path');
const path = require("path");
const data = require("/index/archivos/Entrega.js")
const app = express ();


const agregados = []

//middlewares
app.use (express.static(path.join(__dirname, "public")));

// motor de planillas
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', hbrs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views', 'layouts')),
    extname:"hbs"
}));
app.set('view engine', "hbs")

//rutas

app.get("/productos", (req, res)=>{
    res.render('productos', data.listAll())
});

app.post("/productos", (req, res)=>{
    if (!req.file){
        const err = new error("por favor complete la imformacion")
    } else {
        agregados.push(req.params).data.guardar();
        res.render('productos', agregados)
    }
})

//servidor


const port = 8081;
const server = app.listen(port, ()=>{
    console.log("app escuchando")
});






