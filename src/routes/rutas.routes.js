const express = require("express");
const routerDeProductos = express.Router();
const producto = require("/index/archivos/Entrega.js")

const productosAr = []

//middleware

function middlewarePost (req, res, next){
    req.postMiddleware = producto.guardar();
    next()

};
function middlewareGet (req, res, next){
    req.getMiddleware1 = producto.traerPorId();
    next()
};

function middlewareGet2 (req, res, next){
    req.getMiddleware2 = producto.listAll();
    next();
};
function middlewarePut (req, res, next){
    req.putMiddleware = producto.actualizar();
    next();
};
function middlewareDelete (req, res, next){
    req.deleteMiddleware = producto.eliminarPorId();
    next();
}

//rutas

routerDeProductos.get("/", middlewareGet2, (req, res)=>{
    let middleware = get.getMiddleware2;
    res.status(200).json({middleware})
})

routerDeProductos.get("/:id", middlewareGet, (req, res)=>{
    let getId  = req.getMiddleware1;
    res.status(200).json(getId)
})


routerDeProductos.post("/", upload.single('miArchivo') ,middlewarePost, (req, res)=>{
    if (!req.file) {
        const err = new error ('favor agregue un archivo')
    } else {
        let postMiddle = req.postMiddleware;
        productosAr.push(postMiddle.body);
        res.status(201).json({postMiddle})  
    }
    
});

routerDeProductos.put("/:id", middlewarePut, (req, res)=>{
    let putMiddleware = req.putMiddleware
    res.status(201).json({putMiddleware})
});

routerDeProductos.delete("/:id", middlewareDelete, (req, res)=>{
    let deleteMiddleware = req.deleteMiddleware
    res.status(201).json({deleteMiddleware})
})


module.exports = routerDeProductos;