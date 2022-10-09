import { Router } from "express";
import ProductosDaoArchivo from "../../daos/productos/productosDaoArchivo";

const productosArchivo = Router()
const apiProdcutosArchivo = ProductosDaoArchivo;

productosArchivo.get('/productos', async (req, res, next)=>{
    try {
        res.json(await apiProdcutosArchivo.listarAll())
    } catch (error) {
        next(error)
    }
})

productosArchivo.get('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiProdcutosArchivo.listar())
    } catch (error) {
        next(error)
    }
})

productosArchivo.post('/productos', async (req, res, next)=>{
    try {
        res.json(await apiProdcutosArchivo.crear())
    } catch (error) {
        next(error)
    }
})

productosArchivo.put('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiProdcutosArchivo.actualizar())
    } catch (error) {
        next(error)
    }
})

productosArchivo.delete('/productos', async (req, res, next)=>{
    try {
        res.json(await apiProdcutosArchivo.deleteOne())
    } catch (error) {
        next(error)
    }
})

productosArchivo.delete('/productos/:id', async (req, res, next)=>{
    try {
        res.json(await apiProdcutosArchivo.deleteAll())
    } catch (error) {
        next(error)
    }
})

export default productosArchivo;