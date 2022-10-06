class ContenedorMemoria {
    constructor(){
        this.elementos = []
    }

    listar(id){
        const elem = this.elementos.find(elem=> elem.id == id);
        if (!elem) {
            return 'no se ah enontrado ningun elemento'
        } else {
            return elem
        }

    }

    listarTodo(){
        return [...this.elementos]
    }

    guardar(elem){
        let newId
        if (this.elementos.length == 0) {
            newId = 1
        } else {
            newId = this.elementos[this.elementos.length -1].id + 1
        }

        const newElem = {...elem, id: newId}
        this.elementos.push(newElem);
        return newElem
    }

    borrar(id){
        const elem = this.elementos.find(elem => elem.id == id)
        if (!elem){
            return 'no se ah encontrado el producto'
        } else {
            const newElementos = []
            const borrar = this.elementos.filter(elem);
            newElementos.push(borrar)
            return newElementos
        }
    }

    borrarTodo(){
        return this.elementos = []
    }

    actualizar(elem){
        elem.id = Number(elem.id)
        const index = this.elementos.findIndex(p=>p.id == elem.id)
        if (index == -1) {
            throw new error('error al actualizar: elemento no encontrado');
        } else {
            this.elementos[index]= elem
            return elem
        }
    }
}

export default ContenedorMemoria