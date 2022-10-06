import ContenedorMemoria from "../contenedores/contenedorMemoria";
import { generadorProducto } from "../util/generadorProductos";

export class ProductosMock extends ContenedorMemoria{
    constructor(){
        super()
    }
    popular(cant = 5){
        const nuevos = []
        for (let i = 0; i <= nuevos; i++) {
            const nuevoProducto = generadorProducto();
            const guardado  = this.guardar(nuevoProducto);
            nuevos.push(guardado)
        }
        return nuevos
    }
}