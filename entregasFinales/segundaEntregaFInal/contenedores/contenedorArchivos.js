import { json } from 'express';
import fs from 'fs'

class ContenedorArchivo{

    constructor(ruta){
        this.ruta = ruta
    };


    async crear(obj){
        try {
            const objs = await this.listAll();
            let newId 
            if (objs.length == 0) {
            newId =1
            } else {
            objs[objs.length - 1].id +1
            }
        
            const newObj = {id: newId, ...obj}
            objs.push(newObj)

            await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))

        } catch (error) {
            
        }
    }

    async listar(id){
        const objs = await this.listAll();
        const buscado = objs.find(x=> x.id == id);
        return buscado; 
    };

    async listAll(){
        try {
            const objs = await this.readFile(this.ruta)
            return JSON.parse(objs)
        } catch (error) {
            return []
        }
    };

    async deleteOne(id){
        const nuevoArray = []
        const objs = await this.listAll()
        const eliminado = objs.filter(x=>x.id != id)
        nuevoArray.push(eliminado)
        const mostrareliminado = JSON.parse(eliminado)
        return(alert('prodcuto eliminado'), mostrareliminado)
    };

    async actualizar(id){
        try {
            const objs = await this.listAll()
            const objId = objs.find(x => x.id == id);

            if (objId == -1) {
                return "objeto no encontrado"
            } else {
                objs[objId]= {id, ...newObj}
                await fs.appendFile(this.ruta, JSON.stringify(objs, null, 2))
            }

        } catch (error) {
            return "error al actualizar"
        }
    }

    async deleteAll(){
        try {
            const objs = await this.listAll()
            const newObj = []
            await fs.writeFile(this.ruta, JSON.stringify(newObjs, null, 2))

        } catch (error) {
            return "no se ha podido eliminar la lista"
        }
    }


}

export default ContenedorArchivo
