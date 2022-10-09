import { Router } from "express";
import CarritoDaoArchivo from "../../daos/carrito/carritoDaoArchivo";

const carritoArchivo = Router();
const apiCarritoArchivo = CarritoDaoArchivo;

carritoArchivo.get('/productos', async (req, res, next)=>{
    try {
        res.json(await apiCarritoArchivo.listAll())
    } catch (error) {
        next(error)
    }
})

carritoArchivo.get('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiCarritoArchivo.listar())
    } catch (error) {
        next(error)
    }
})

carritoArchivo.post('/productos', async (req, res, next)=>{
    try {
        res.json(await apiCarritoArchivo.crear())
    } catch (error) {
        next(error)
    }
})

carritoArchivo.put('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiCarritoArchivo.actualizar())
    } catch (error) {
        next(error)
    }
})

carritoArchivo.delete('/productos', async (req, res, next)=>{
    try {
        res.json(await apiCarritoArchivo.deleteOne())
    } catch (error) {
        next(error)
    }
})

carritoArchivo.delete('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiCarritoArchivo.deleteAll())
    } catch (error) {
        next(error)
    }
})


export default carritoArchivo;