import {traerProfile, crearProfile} from "./profiles";

async function obtenerDatos(){
    return await traerProfile();
};

async function crearDato(dato){
    dato.added = Date.now;

    await guardar(dato);
    return dato;
}

export default (crearDato, obtenerDatos)