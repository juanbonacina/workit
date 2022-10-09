import { Router } from "express";
import ProductoDaoFirebase from "../../daos/productos/productosDaoFirebase";

const productosFirebase = Router()
const apiProductosFirebase = ProductoDaoFirebase;

productosFirebase.get('/productos', async (req, res, next)=>{
    try {
        res.json(await apiProductosFirebase.listAll())
    } catch (error) {
        next(error)
    }
})

productosFirebase.get('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiProductosFirebase.listar())
    } catch (error) {
        next(error)
    }
})

productosFirebase.post('/productos', async (req, res, next)=>{
    try {
        res.json(await apiProductosFirebase.create())
    } catch (error) {
        next(error)
    }
})

productosFirebase.put('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiProductosFirebase.update())
    } catch (error) {
        next(error)
    }
})

productosFirebase.delete('/productos', async (req, res, next)=>{
    try {
        res.json(await apiProductosFirebase.deleteAll())
    } catch (error) {
        next(error)
    }
})

productosFirebase.delete('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiProductosFirebase.delete())
    } catch (error) {
        next(error)
    }
})

export default productosFirebase;