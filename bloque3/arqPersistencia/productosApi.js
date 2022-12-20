import PorductosDao from "./DAO/productosDao";

class ProductosApi{
    constructor(){
        this.producto = new PorductosDao()
    }

    async crear(nuevoProd){
        const ProdAgre = await this.producto.add(nuevoProd)
        return ProdAgre
    }

    async buscar(id){
        let producto
        if (id) {
            producto = await this.producto.getById(id)
            return producto
        } else {
            producto = await this.producto.getAll()
            return producto
        }
    }

    async borrar(id){
        let producto
        if (id) {
            producto = await this.producto.deleteById(id)
        } else {
           producto = await this.producto.deleteAll() 
        }
    }


    async actualizar(id, nuevaInfo){
        const prodRemp = await this.producto.updateById(id, nuevaInfo)
        return prodRemp
    }

}

export default ProductosApi