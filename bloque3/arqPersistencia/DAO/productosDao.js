import model from "mongoose";
import CustomError from "./error";

class PorductosDao{
    async getAll(){
        try {
           let producto = await model.producto.find();
        } catch (error) {
            error = CustomError;
            throw new error(500, 'error del servidor intentaer mas tarde')
        }
    }

    async getById(id){
        try {
            let producto = await model.producto.findOne(id);
        } catch (error) {
            error = CustomError;
            throw new error(500, 'error del servidor intentaer mas tarde')
        }
    }

    async deleteAll(){
        try {
            let producto = await model.producto.delete();
        } catch (error) {
            error = CustomError;
            throw new error(500, 'error del servidor intentaer mas tarde')
        }
    }

    async deleteById(id){
        try {
            let producto = await model.producto.deleteOne(id);
        } catch (error) {
            error = CustomError;
            throw new error(500, 'error del servidor intentaer mas tarde')
        }
    }

    async add(nuevoProd){
        try {
           let producto = await  new model.producto.save(nuevoProd) /*save*/
        } catch (error) {
            error = CustomError;
            throw new error(500, 'error del servidor intentaer mas tarde')
        }
    }

    async updateById(id, nuevaInfo){
        try {
            let producto = await model.producto.updateOne({id: id},{$set: nuevaInfo})/*.updateOne*/
        } catch (error) {
            error = CustomError;
            throw new error(500, 'error del servidor intentaer mas tarde')
        }
    }
}

export default PorductosDao;