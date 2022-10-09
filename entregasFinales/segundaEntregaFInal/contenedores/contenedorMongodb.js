import mongoose from "mongoose";
import * as model from "../daos/productos/productosDaoMongodb";

class ContenedorMongoDB{
    constructor(nombreColeccion, esquema){
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }


    async crear(Object){
        try {
            const doc = await this.coleccion.find({id: Object.id})
            if (doc.length != 0) {
                return 'el producto ya existe'
            } else {
                const productoNuevo = {nombre: Object.nombre, precio: Object.precio, categoria: Object.categoria, descripcion: Object.descripcion};
                const productoNuevoModel = new model.productos(productoNuevo);
                let productoGuardar = await productoNuevoModel.save()
            }
        } catch (error) {
            return `lo sentimos, no hemos podido crear el producto, vuelva intentarlo mas tarde ${error}`   
        }
    }

    async lista(id){
        try {
            const doc = await this.coleccion.find({id: Object.id})
            if (doc.length == 0) {
                return 'lo sentimos no pudimos traer este producto ya que no existe'
            } else {
                return doc
            }
        } catch (error) {
            return `los entimos, no pudimos traer el producto, intente mas tarde ${error}`
        }
    }

    async listaTodos(){
        try {
            let docs = await this.coleccion.find();
            return docs
        } catch (error) {
            return `los entimos, no pudimos traer los productos, intente mas tarde ${error}`            
        }
    }

    async actualizar(elem){
        try {
            const elemId = await this.coleccion.find({id: elem.id})
            if (elemId.length == 0){
                return 'lo sentimos el preoducto no existe'
            } else {
                const update = await this.coleccion.updateOne(elem);
                return update
            }
        } catch (error) {
            return `los entimos, no pudimos actualizar el producto, intente mas tarde ${error}`
        }
    }

    async borrar(id){
        try {
            const doc = await this.coleccion.find({id: id});
            if (doc.length == 0) {
                return 'lo sentimos no hemos podido encontrar el prodcuto'
            } else {
                const eliminar = await this.coleccion.deleteOne(doc);
                return `el producto: ${eliminar}, ha sido eliminado`
            }
        } catch (error) {
            `los entimos, no pudimos eliminar el producto, intente mas tarde ${error}`
        }
    }

    async borrarTodo(){
        try {
            const borrar = await this.coleccion.deleteMany();
            return borrar
        } catch (error) {
            'lo sentimos no hemos podido eliminar los elementos'
        }
    }

}

export default ContenedorMongoDB;













