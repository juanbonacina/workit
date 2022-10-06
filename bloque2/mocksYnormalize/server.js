import  Express  from "express";
import usuarioRouter from './rutas/usuarios.routes'
import productosRouter from "./rutas/productos.routes";


const app = Express();
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))

app.use('/api/usuarios', usuarioRouter);
app.use('/api/productos', productosRouter);

const PORT = 8080;

const servidor = app.listen(PORT, ()=>{
    console.log(`escuchando el puerto ${PORT}`)
})




