import ContenedorMemoria from "../contenedores/contenedorMemoria";
import { generarUsuario } from "../util/generadorUsuario";


export class UsuarioMock extends ContenedorMemoria{
    constructor(){
        super()
    }
    popular(cant = 50){
        const nuevos = []
        for (let i = 0; i < cant;  i++) {
            const nuevousuario = generarUsuario(generarId());
            const guardado = this.guardar(nuevousuario);
            nuevos.push(guardado); 
            
        }
        return nuevos
    }   

}
