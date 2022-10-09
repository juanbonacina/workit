import { ContenedorFirebase } from "../../contenedores/contenedorFirebase";

class ProductoDaoFirebase extends ContenedorFirebase{
    constructor(){
        super('productos')
    }
}

export default ProductoDaoFirebase;