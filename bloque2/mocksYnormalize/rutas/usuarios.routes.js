import  Router  from "express";
import { UsuarioMock } from "../mocks/usuario.mock";

const usuarioRouter = Router();
const apiUsuarios = UsuarioMock(); 


usuarioRouter.get('/api/usuarios/:id', async (req, res, next)=>{
    try {
        res.json(await apiUsuarios.listar(req.params.id))
    } catch (error) {
        next(error)
    }
});

usuarioRouter.get('/', async (req, res, next)=>{
    try {
        res.json(await apiUsuarios.listarTodo())
    } catch (error) {
      next(error)  
    }
})

usuarioRouter.post('/api/usuarios/popular?cant=n', async (req, res, next)=>{
    try {
        res.json(await apiUsuarios.popular(req.body.cant))
    } catch (error) {
        next(error)
    }
});

usuarioRouter.post('/', async (req, res, next)=>{
    try {
        res.json( await apiUsuarios.guardar(req.body))
    } catch (error) {
        next(error)
    }
});

usuarioRouter.put('/api/usuarios/:id', async (req, res, next)=>{
    try {
        res.json(await apiUsuarios.actualizar({... req.body, id: req.params.id}))
    } catch (error) {
        next(error)
    }
});

usuarioRouter.delete('/api/usuarios/:id', async (req, res, next)=>{
    try {
        res.json(await apiUsuarios.borrar(req.params.id))
    } catch (error) {
        next(error)
    }
});



usuarioRouter.use((err, req, res, next)=>{
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

export default usuarioRouter
