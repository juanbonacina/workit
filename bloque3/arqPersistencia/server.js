import Express from "express";
import express from 'express';
import ProductosApi from '../productosApi';
import Router from 'express';

const rutasDao = express.Router();



const app = Express()
app.use(Express.json())

rutasDao.get('/buscar', ProductosApi.buscar());
rutasDao.post('/actualizar', ProductosApi.actualizar());
rutasDao.get('/eliminar', ProductosApi.borrar());
rutasDao.post('/crear', ProductosApi.crear());


const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log('servidor escuchando');
})

server.on('error', Error=>console.log(`error ocurrido ${Error}`))