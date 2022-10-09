import  Express, { Router }  from "express";
import productosMongo from './rutas/rutasProducto/productosMongo.routes.js'
import productosArchivo from "./rutas/rutasProducto/productosArchivo.routes.js";
import productosFirebase from "./rutas/rutasProducto/productosFirebase.routes.js";
import carritoArchivo from "./rutas/rutasCarrito/carritoArchivo.route.js";
import carritoMongo from "./rutas/rutasCarrito/carritoMongo.routes.js";
import carritoFirebase from "./rutas/rutasCarrito/carritoFirebase.routes.js";

const app = Express()
app.use(Express.json());
app.use('/api/productosDB', productosMongo)
app.use('/api/productosAR', productosArchivo)
app.use('/api/productosFR', productosFirebase)
app.use('/api/carritoDB', carritoMongo)
app.use('/api/carritoAR', carritoArchivo)
app.use('/api/carritoFR', carritoFirebase)

const PORT = 8080

const servidor = app.listen(PORT, ()=>{
    console.log(`escuchando el puerto ${PORT}`)
});
