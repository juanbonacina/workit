import ContenedorArchivo from "../../contenedores/contenedorArchivos";

class ProductosDaoArchivo extends ContenedorArchivo{
    constructor(){
        super('./bloque1/index/productos.json')
    }

}

export default ProductosDaoArchivo;