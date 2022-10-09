import ContenedorMongoDB from '../../contenedores/contenedorMongodb'

class ProductosDaoMongodb extends ContenedorMongoDB{
    constructor(){
        super('productos', {
            nombre:{type: String, require: true, max: 100},
            categoria:{type: String, require: true, max: 100},
            precio:{type: Number, require: true},
            descripcion:{type: String, require: true, max: 100},
            stock:{type: Number, require: true},
        })
    }

    
}


export default ProductosDaoMongodb