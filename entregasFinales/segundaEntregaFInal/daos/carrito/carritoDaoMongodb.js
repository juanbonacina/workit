import ContenedorMongoDB from "../../contenedores/contenedorMongodb";

class CarritoDaoMongoDB extends ContenedorMongoDB{
    constructor(){
        super('carritos', {
            productos:{type: [], require: true}
        })
    }

    async guardar(carrito = {productos: []}){
        return super.crear(carrito)
    }
}


export default CarritoDaoMongoDB;

