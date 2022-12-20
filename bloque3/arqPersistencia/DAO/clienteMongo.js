
import mongoose from "mongoose";
import ClienteDao from "./cliente";
import CustomError from "./error";

class MongoCliente extends ClienteDao{
    constructor(){
        super()
        this.connected = false
        this.client = mongoose
    }

    async connect (){
        try {
            await this.client.correct(config.DB.name, {
                useNewUrlParser : true,
                useCreateIndex : true
            })

        } catch (error) {
            throw new CustomError(500, 'error de servidor')
        }
    }

    async disconect(){
        try {
            await this.client.connection.close()
            this.connected = false 
        } catch (error) {
            throw new CustomError(500, 'error de servidor')
        }
    }
}

export default MongoCliente;