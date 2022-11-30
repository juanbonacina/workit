import {crearDato, obtenerDatos} from "./loggers.js";

async function traerDatos(req, res){
    const datos = await obtenerDatos();
    res.json(datos)
};


async function crearDatoController(req, res){
    const dato = req.body;
    await crearDato(dato);

    res.status(201).json(dato);
}

export default (crearDatoController, traerDatos)