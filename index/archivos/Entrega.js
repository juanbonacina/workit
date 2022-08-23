
const fs = require ('fs');

class Productos {
    constructor (ruta) {
        this.ruta
    }

    async listAll(){
        try {
            const obj = await fs.promises.readFile(this.ruta, "utf-8");
            return JSON.parse(obj);
        } catch (error) {
            return []
        }
        
        
    }

    async guardar (obj){
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

    async traerPorId (id){ 
        try {
            
            const objs = await this.listAll()
            const objSelect = objs.find((x)=>x.di == id)

            await fs.readFile(this.ruta, "utf-8")

        } catch (error) {
            return "no se a podido encontrar el objeto deseado"
        }


    }
    
    async actualizar (id, newObj){
        try {
            const objs = await this.listAll()
            const indexId = objs.find((x)=> x.id == id)

            if (indexId == -1) {
                return "objeto no encontrado"
            } else {
                objs[indexId]= {id, ...newObj}
                await fs.appendFile(this.ruta, JSON.stringify(objs, null, 2))
            }

        } catch (error) {
            return "error al actualizar"
        }

    }

    async eliminarPorId (id){
        try {
            const objs = await this.listAll()
            const newObjs = objs.filter((x)=>x.id !== id)

            await fs.writeFile(this.ruta, JSON.stringify(newObjs, null, 2))
            

        } catch (error) {
            return "error al eliminar el objeto"
        }

    }

    async eliminarTodo (){
        try {
            const objs = await this.listAll();
            const newObjs = []

            await fs.writeFile(this.ruta, JSON.stringify(newObjs, null, 2))

        } catch (error) {
            return "no se a podido eliminar la lista"
            
        }
        


    }
}


async function main (){
    const productos = new Productos ("./productos.json");
    console.log(await productos.listAll());
    console.log(await productos.guardar())
    console.log(await productos.actualizar());
    console.log(await productos.eliminarPorId());
    
}

export default {Productos};













