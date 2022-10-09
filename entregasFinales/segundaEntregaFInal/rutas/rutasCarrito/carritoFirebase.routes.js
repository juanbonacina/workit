import { Router } from "express";
import CarritoDaoFirebase from "../../daos/carrito/carritoDaoFirebase";

const carritoFirebase = Router()
const apiCarritoFirebase = CarritoDaoFirebase;

carritoFirebase.get('/productos', async (req, res, next)=>{
    try {
        res.json(await apiCarritoFirebase.listAll())
    } catch (error) {
        next(error)
    }
})

carritoFirebase.get('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiCarritoFirebase.listar())
    } catch (error) {
        next(error)
    }
})

carritoFirebase.post('/productos', async (req, res, next)=>{
    try {
        res.json(await apiCarritoFirebase.create())
    } catch (error) {
        next(error)
    }
})

carritoFirebase.put('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiCarritoFirebase.update())
    } catch (error) {
        next(error)
    }
})

carritoFirebase.delete('/productos', async (req, res, next)=>{
    try {
        res.json(await apiCarritoFirebase.delete())
    } catch (error) {
        next(error)
    }
})

carritoFirebase.delete('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiCarritoFirebase.deleteAll())
    } catch (error) {
        next(error)
    }
})

export default carritoFirebase;