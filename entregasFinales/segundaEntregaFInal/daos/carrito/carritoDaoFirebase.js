import { ContenedorFirebase } from "../../contenedores/contenedorFirebase";

class CarritoDaoFirebase extends ContenedorFirebase{
    constructor(){
        super('carrito')
    }

    async create(carrito = {productos: []}){
        return super.create(carrito)
    }
}

export default CarritoDaoFirebase;