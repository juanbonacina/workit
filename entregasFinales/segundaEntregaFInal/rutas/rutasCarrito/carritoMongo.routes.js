import { Router } from "express";
import CarritoDaoMongoDB from "../../daos/carrito/carritoDaoMongodb";

const carritoMongo = Router()
const apiCarritoMongo = CarritoDaoMongoDB;

carritoMongo.get('/productos', async (req, res, next)=>{
    try {
        res.json(await apiCarritoMongo.listarTodo())
    } catch (error) {
        next(error)
    }
})

carritoMongo.get('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiCarritoMongo.listar())
    } catch (error) {
        next(error)
    }
})

carritoMongo.post('/productos', async (req, res, next)=>{
    try {
        res.json(await apiCarritoMongo.crear())
    } catch (error) {
        next(error)
    }
})

carritoMongo.put('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiCarritoMongo.actualizar())
    } catch (error) {
        next(error)
    }
})

carritoMongo.delete('/productos', async (req, res, next)=>{
    try {
        res.json(await apiCarritoMongo.borrar())
    } catch (error) {
        next(error)
    }
})

carritoMongo.delete('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiCarritoMongo.borrarTodo())
    } catch (error) {
        next(error)
    }
})


export default carritoMongo;