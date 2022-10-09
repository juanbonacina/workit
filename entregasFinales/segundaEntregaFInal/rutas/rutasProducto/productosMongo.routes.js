import { Router } from "express";
import ProductosDaoMongodb from "../../daos/productos/productosDaoMongodb";

const productosMongo = Router();
const apiProductosMongo = ProductosDaoMongodb;

productosMongo.get('/productos', async (req, res, next)=>{
    try {
        res.json(await apiProductosMongo.listarTodo())
    } catch (error) {
        next(error)
    }
})

productosMongo.get('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiProductosMongo.listar())
    } catch (error) {
        next(error)
    }
})

productosMongo.post('/productos', async (req, res, next)=>{
    try {
        res.json(await apiProductosMongo.crear())
    } catch (error) {
        next(error)
    }
})

productosMongo.put('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiProductosMongo.actualizar())
    } catch (error) {
        next(error)
    }
})

productosMongo.delete('/productos', async (req, res, next)=>{
    try {
        res.json(await apiProductosMongo.borrarTodo())
    } catch (error) {
        next(error)
    }
})

productosMongo.delete('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiProductosMongo.borrar())
    } catch (error) {
        next(error)
    }
})

export default productosMongo