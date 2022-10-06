import Router from "express";
import { ProductosMock } from "../mocks/productos.mock";

const productosRouter = Router();
const apiProductos = ProductosMock;

productosRouter.get('/api/usuarios/:id', async (req, res, next)=>{
    try {
        res.json(await apiProductos.listar(req.params.id))
    } catch (error) {
        next(error)
    }
});

productosRouter.get('/', async (req, res, next)=>{
    try {
        res.json(await apiProductos.listarTodo())
    } catch (error) {
      next(error)  
    }
})

productosRouter.post('/api/usuarios/popular?cant=n', async (req, res, next)=>{
    try {
        res.json(await apiProductos.popular(req.body.cant))
    } catch (error) {
        next(error)
    }
});

productosRouter.post('/', async (req, res, next)=>{
    try {
        res.json( await apiProductos.guardar(req.body))
    } catch (error) {
        next(error)
    }
});

productosRouter.put('/api/usuarios/:id', async (req, res, next)=>{
    try {
        res.json(await apiProductos.actualizar({... req.body, id: req.params.id}))
    } catch (error) {
        next(error)
    }
});

productosRouter.delete('/api/usuarios/:id', async (req, res, next)=>{
    try {
        res.json(await apiProductos.borrar(req.params.id))
    } catch (error) {
        next(error)
    }
});



productosRouter.use((err, req, res, next)=>{
    const erroresNoEncontrado = [
        'error al listar: elemento no encontrado',
        'error al actualizar: no se a podido actualizar',
        'error al borrar: no se a podido actualizar',
    ]

    if (erroresNoEncontrado.includes(err.message)) {
        res.status(404)
    } else {
        res.status(500)
    }
    res.json({message: err.message})
})

export default productosRouter