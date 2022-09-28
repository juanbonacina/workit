import ContenedorArchivo from "../../contenedores/contenedorArchivos";

class CarritoDaoArchivo extends ContenedorArchivo{
    constructor(){
        super('./bloque1/index/carrito.json')
    }

}

export default CarritoDaoArchivo